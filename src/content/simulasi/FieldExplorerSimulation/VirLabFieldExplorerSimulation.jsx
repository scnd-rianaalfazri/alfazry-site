import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ZAxis,
} from "recharts";

// ======================================================
// KONSTANTA & FISIKA
// ======================================================

const K = 8.99e9; // konstanta Coulomb (N.m^2/C^2)
const PX_PER_M = 90; // skala: 90 px = 1 meter
const ARENA_W = 640;
const ARENA_H = 400;
const MARGIN = 16;
const MIN_R_M = 0.15; // jarak minimum agar medan tidak menuju tak hingga

const STRONG_FIELD = 15000; // N/C -> "medan sangat kuat"
const SMALL_FIELD = 1200; // N/C -> "medan kecil"
const NEARZERO_FIELD = 300; // N/C -> "hampir tidak ada medan"
const DIR_THRESHOLD = 3000; // N/C -> komponen Ex dianggap jelas ke kanan/kiri
const CLOSE_DIST_M = 0.5;
const FAR_DIST_M = 3.0;

const MAX_TRAIL = 450;
const TRAIL_MIN_DIST_PX = 4;
const KEY_SPEED = 3.6; // px / frame
const FOLLOW_SPEED = 2.4; // px / frame

function clamp(v, min, max) {
  return Math.min(max, Math.max(min, v));
}

function metersFromPx(px) {
  return px / PX_PER_M;
}

function fieldFromCharge(px, py, charge) {
  const dx = px - charge.x;
  const dy = py - charge.y;
  const rPx = Math.sqrt(dx * dx + dy * dy) || 0.0001;
  const r = Math.max(metersFromPx(rPx), MIN_R_M);
  const qC = Math.abs(charge.q) * 1e-6;
  const E = (K * qC) / (r * r);
  const ux = dx / rPx;
  const uy = dy / rPx;
  const sign = charge.q >= 0 ? 1 : -1;
  return { Ex: E * ux * sign, Ey: E * uy * sign };
}

function totalField(px, py, charges) {
  let Ex = 0;
  let Ey = 0;
  charges.forEach((c) => {
    if (!c.enabled) return;
    const f = fieldFromCharge(px, py, c);
    Ex += f.Ex;
    Ey += f.Ey;
  });
  const mag = Math.sqrt(Ex * Ex + Ey * Ey);
  let angleDeg = (Math.atan2(Ey, Ex) * 180) / Math.PI;
  if (angleDeg < 0) angleDeg += 360;
  return { Ex, Ey, mag, angleDeg };
}

function potentialAt(px, py, charges) {
  let V = 0;
  charges.forEach((c) => {
    if (!c.enabled) return;
    const dx = px - c.x;
    const dy = py - c.y;
    const rPx = Math.sqrt(dx * dx + dy * dy) || 0.0001;
    const r = Math.max(metersFromPx(rPx), MIN_R_M);
    const qC = c.q * 1e-6;
    V += (K * qC) / r;
  });
  return V;
}

function distanceToCharge(px, py, charge) {
  const dx = px - charge.x;
  const dy = py - charge.y;
  return metersFromPx(Math.sqrt(dx * dx + dy * dy));
}

function isBetweenCharges(probe, charges) {
  const [c1, c2] = charges;
  if (!c2.enabled) return false;
  const minX = Math.min(c1.x, c2.x);
  const maxX = Math.max(c1.x, c2.x);
  const midY = (c1.y + c2.y) / 2;
  return probe.x > minX + 12 && probe.x < maxX - 12 && Math.abs(probe.y - midY) < 130;
}

function fieldTint(mag) {
  const logLow = Math.log10(NEARZERO_FIELD + 1);
  const logHigh = Math.log10(STRONG_FIELD * 3 + 1);
  const t = clamp((Math.log10(mag + 1) - logLow) / (logHigh - logLow), 0, 1);
  const r = Math.round(67 + (249 - 67) * t);
  const g = Math.round(56 + (115 - 56) * t);
  const b = Math.round(202 + (22 - 202) * t);
  return `rgba(${r}, ${g}, ${b}, 0.16)`;
}

function fmtNum(v, digits = 0) {
  if (v === null || v === undefined || Number.isNaN(v)) return "–";
  return v.toLocaleString("id-ID", { maximumFractionDigits: digits, minimumFractionDigits: digits });
}

function clientToSvgPoint(svg, clientX, clientY) {
  const pt = svg.createSVGPoint();
  pt.x = clientX;
  pt.y = clientY;
  const ctm = svg.getScreenCTM();
  if (!ctm) return { x: 0, y: 0 };
  const svgPt = pt.matrixTransform(ctm.inverse());
  return { x: svgPt.x, y: svgPt.y };
}

const CHALLENGE_ITEMS = [
  { id: "biggest", label: "Temukan medan terbesar" },
  { id: "smallest", label: "Temukan medan terkecil" },
  { id: "right", label: "Temukan daerah dengan arah medan ke kanan" },
  { id: "left", label: "Temukan daerah dengan arah medan ke kiri" },
  { id: "closest", label: "Temukan titik yang paling dekat dengan muatan" },
  { id: "farthest", label: "Temukan titik yang paling jauh dari muatan" },
  { id: "nearlyZero", label: "Temukan titik medan hampir nol" },
];

const TABS = [
  { id: "navigasi", label: "Navigasi", icon: "🧭" },
  { id: "tantangan", label: "Tantangan", icon: "🎯" },
  { id: "recorder", label: "Recorder", icon: "📋" },
  { id: "riwayat", label: "Riwayat", icon: "📈" },
];

export default function VirLabFieldExplorerSimulation() {
  // ---------------- state ----------------
  const [charges, setCharges] = useState([
    { id: 1, x: 220, y: 170, q: 5, enabled: true },
    { id: 2, x: 460, y: 230, q: -5, enabled: true },
  ]);
  const [probe, setProbe] = useState({ x: 340, y: 320 });
  const [trail, setTrail] = useState([]);
  const [autoFollow, setAutoFollow] = useState(false);

  const [discoveries, setDiscoveries] = useState({
    strongField: false,
    nearZero: false,
    equipotential: false,
    betweenCharges: false,
  });

  const [challenges, setChallenges] = useState({
    biggest: false,
    smallest: false,
    right: false,
    left: false,
    closest: false,
    farthest: false,
    nearlyZero: false,
  });

  const [records, setRecords] = useState([]);
  const [popupQueue, setPopupQueue] = useState([]);
  const [currentPopup, setCurrentPopup] = useState(null);
  const [activeTab, setActiveTab] = useState("navigasi");
  const [showFinishModal, setShowFinishModal] = useState(false);

  const [sessionStats, setSessionStats] = useState({
    maxField: null,
    minField: null,
    maxV: null,
    minV: null,
    distance: 0,
  });

  // ---------------- refs ----------------
  const svgRef = useRef(null);
  const chargesRef = useRef(charges);
  const autoFollowRef = useRef(false);
  const draggingProbeRef = useRef(false);
  const draggingChargeIdRef = useRef(null);
  const keysRef = useRef(new Set());
  const rafRef = useRef(null);
  const prevProbeRef = useRef(probe);
  const lastVSignRef = useRef(null);

  useEffect(() => {
    chargesRef.current = charges;
  }, [charges]);

  useEffect(() => {
    autoFollowRef.current = autoFollow;
  }, [autoFollow]);

  // ---------------- fisika turunan ----------------
  const currentField = useMemo(() => totalField(probe.x, probe.y, charges), [probe.x, probe.y, charges]);
  const currentPotential = useMemo(() => potentialAt(probe.x, probe.y, charges), [probe.x, probe.y, charges]);
  const dist1 = useMemo(() => distanceToCharge(probe.x, probe.y, charges[0]), [probe.x, probe.y, charges]);
  const dist2 = charges[1].enabled ? distanceToCharge(probe.x, probe.y, charges[1]) : null;
  const nearestDist = dist2 !== null ? Math.min(dist1, dist2) : dist1;

  // ---------------- popup ----------------
  const enqueuePopup = useCallback((text) => {
    setPopupQueue((q) => [...q, text]);
  }, []);

  useEffect(() => {
    if (!currentPopup && popupQueue.length > 0) {
      setCurrentPopup(popupQueue[0]);
      setPopupQueue((q) => q.slice(1));
    }
  }, [popupQueue, currentPopup]);

  useEffect(() => {
    if (!currentPopup) return;
    const t = setTimeout(() => setCurrentPopup(null), 3800);
    return () => clearTimeout(t);
  }, [currentPopup]);

  // ---------------- loop gerak probe (WASD / arrow / auto follow) ----------------
  useEffect(() => {
    function tick() {
      if (!draggingProbeRef.current) {
        setProbe((prev) => {
          let { x, y } = prev;
          let nx = x;
          let ny = y;

          if (autoFollowRef.current) {
            const f = totalField(x, y, chargesRef.current);
            if (f.mag > 0.5) {
              const ux = f.Ex / f.mag;
              const uy = f.Ey / f.mag;
              nx = clamp(x + ux * FOLLOW_SPEED, MARGIN, ARENA_W - MARGIN);
              ny = clamp(y + uy * FOLLOW_SPEED, MARGIN, ARENA_H - MARGIN);
            }
          } else if (keysRef.current.size > 0) {
            let dx = 0;
            let dy = 0;
            if (keysRef.current.has("w") || keysRef.current.has("arrowup")) dy -= 1;
            if (keysRef.current.has("s") || keysRef.current.has("arrowdown")) dy += 1;
            if (keysRef.current.has("a") || keysRef.current.has("arrowleft")) dx -= 1;
            if (keysRef.current.has("d") || keysRef.current.has("arrowright")) dx += 1;
            if (dx !== 0 || dy !== 0) {
              const len = Math.hypot(dx, dy) || 1;
              nx = clamp(x + (dx / len) * KEY_SPEED, MARGIN, ARENA_W - MARGIN);
              ny = clamp(y + (dy / len) * KEY_SPEED, MARGIN, ARENA_H - MARGIN);
            }
          }

          if (nx === x && ny === y) return prev;
          return { x: nx, y: ny };
        });
      }
      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // hentikan auto-follow bila medan sudah nyaris nol
  useEffect(() => {
    if (autoFollow && currentField.mag < 0.5) {
      setAutoFollow(false);
    }
  }, [autoFollow, currentField.mag]);

  // jejak lintasan + jarak tempuh
  useEffect(() => {
    const prev = prevProbeRef.current;
    const dx = probe.x - prev.x;
    const dy = probe.y - prev.y;
    const distPx = Math.hypot(dx, dy);
    if (distPx > 0.01) {
      if (distPx >= TRAIL_MIN_DIST_PX) {
        setTrail((t) => {
          const next = [...t, { x: probe.x, y: probe.y }];
          return next.length > MAX_TRAIL ? next.slice(next.length - MAX_TRAIL) : next;
        });
      }
      const meters = distPx / PX_PER_M;
      setSessionStats((s) => ({ ...s, distance: s.distance + meters }));
    }
    prevProbeRef.current = probe;
  }, [probe]);

  // ---------------- discovery + challenge + stats ----------------
  useEffect(() => {
    const mag = currentField.mag;

    setDiscoveries((prev) => {
      let changed = false;
      const next = { ...prev };
      if (!prev.strongField && mag > STRONG_FIELD) {
        next.strongField = true;
        changed = true;
        enqueuePopup("🎉 Kamu menemukan daerah dengan medan sangat kuat.");
      }
      if (!prev.nearZero && mag < NEARZERO_FIELD) {
        next.nearZero = true;
        changed = true;
        enqueuePopup("🎉 Kamu berada pada daerah yang hampir tidak memiliki medan listrik.");
      }
      if (!prev.betweenCharges && isBetweenCharges(probe, charges)) {
        next.betweenCharges = true;
        changed = true;
        enqueuePopup("🎉 Kamu berada di antara dua muatan.");
      }
      return changed ? next : prev;
    });

    const sign = currentPotential >= 0 ? 1 : -1;
    if (lastVSignRef.current !== null && sign !== lastVSignRef.current) {
      setDiscoveries((prev) => {
        if (prev.equipotential) return prev;
        enqueuePopup("🎉 Kamu melewati garis equipotensial.");
        return { ...prev, equipotential: true };
      });
    }
    lastVSignRef.current = sign;

    setChallenges((prev) => {
      let changed = false;
      const next = { ...prev };
      if (!prev.biggest && mag > STRONG_FIELD) {
        next.biggest = true;
        changed = true;
      }
      if (!prev.smallest && mag < SMALL_FIELD) {
        next.smallest = true;
        changed = true;
      }
      if (!prev.nearlyZero && mag < NEARZERO_FIELD) {
        next.nearlyZero = true;
        changed = true;
      }
      if (!prev.right && currentField.Ex > DIR_THRESHOLD) {
        next.right = true;
        changed = true;
      }
      if (!prev.left && currentField.Ex < -DIR_THRESHOLD) {
        next.left = true;
        changed = true;
      }
      if (!prev.closest && nearestDist < CLOSE_DIST_M) {
        next.closest = true;
        changed = true;
      }
      if (!prev.farthest && nearestDist > FAR_DIST_M) {
        next.farthest = true;
        changed = true;
      }
      return changed ? next : prev;
    });

    setSessionStats((s) => ({
      ...s,
      maxField: s.maxField === null ? mag : Math.max(s.maxField, mag),
      minField: s.minField === null ? mag : Math.min(s.minField, mag),
      maxV: s.maxV === null ? currentPotential : Math.max(s.maxV, currentPotential),
      minV: s.minV === null ? currentPotential : Math.min(s.minV, currentPotential),
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentField.mag, currentField.Ex, currentPotential, nearestDist]);

  // ---------------- keyboard ----------------
  useEffect(() => {
    function isTypingTarget(el) {
      return el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA");
    }
    function handleKeyDown(e) {
      if (isTypingTarget(document.activeElement)) return;
      const k = e.key.toLowerCase();
      const valid = ["w", "a", "s", "d", "arrowup", "arrowdown", "arrowleft", "arrowright"];
      if (valid.includes(k)) {
        e.preventDefault();
        keysRef.current.add(k);
      }
    }
    function handleKeyUp(e) {
      keysRef.current.delete(e.key.toLowerCase());
    }
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  // ---------------- drag: probe ----------------
  const handleProbePointerMove = useCallback((e) => {
    if (!draggingProbeRef.current || !svgRef.current) return;
    const pt = clientToSvgPoint(svgRef.current, e.clientX, e.clientY);
    setProbe({ x: clamp(pt.x, MARGIN, ARENA_W - MARGIN), y: clamp(pt.y, MARGIN, ARENA_H - MARGIN) });
  }, []);

  const handleProbePointerUp = useCallback(() => {
    draggingProbeRef.current = false;
    window.removeEventListener("pointermove", handleProbePointerMove);
    window.removeEventListener("pointerup", handleProbePointerUp);
  }, [handleProbePointerMove]);

  const handleProbePointerDown = useCallback(
    (e) => {
      e.stopPropagation();
      draggingProbeRef.current = true;
      setAutoFollow(false);
      window.addEventListener("pointermove", handleProbePointerMove);
      window.addEventListener("pointerup", handleProbePointerUp);
    },
    [handleProbePointerMove, handleProbePointerUp]
  );

  // ---------------- drag: muatan ----------------
  const handleChargePointerMove = useCallback((e) => {
    const id = draggingChargeIdRef.current;
    if (id === null || !svgRef.current) return;
    const pt = clientToSvgPoint(svgRef.current, e.clientX, e.clientY);
    const nx = clamp(pt.x, MARGIN, ARENA_W - MARGIN);
    const ny = clamp(pt.y, MARGIN, ARENA_H - MARGIN);
    setCharges((prev) => prev.map((c) => (c.id === id ? { ...c, x: nx, y: ny } : c)));
  }, []);

  const handleChargePointerUp = useCallback(() => {
    draggingChargeIdRef.current = null;
    window.removeEventListener("pointermove", handleChargePointerMove);
    window.removeEventListener("pointerup", handleChargePointerUp);
  }, [handleChargePointerMove]);

  const handleChargePointerDown = useCallback(
    (id) => (e) => {
      e.stopPropagation();
      draggingChargeIdRef.current = id;
      window.addEventListener("pointermove", handleChargePointerMove);
      window.addEventListener("pointerup", handleChargePointerUp);
    },
    [handleChargePointerMove, handleChargePointerUp]
  );

  // ---------------- aksi ----------------
  const recordPoint = () => {
    setRecords((prev) => [
      ...prev,
      {
        no: prev.length + 1,
        x: probe.x / PX_PER_M,
        y: probe.y / PX_PER_M,
        distance: nearestDist,
        fieldMag: currentField.mag,
        angle: currentField.angleDeg,
        potential: currentPotential,
      },
    ]);
  };

  const clearTrail = () => setTrail([]);
  const clearRecords = () => setRecords([]);

  const resetExploration = () => {
    setTrail([]);
    setRecords([]);
    setDiscoveries({ strongField: false, nearZero: false, equipotential: false, betweenCharges: false });
    setChallenges({
      biggest: false,
      smallest: false,
      right: false,
      left: false,
      closest: false,
      farthest: false,
      nearlyZero: false,
    });
    setSessionStats({ maxField: null, minField: null, maxV: null, minV: null, distance: 0 });
    setPopupQueue([]);
    setCurrentPopup(null);
    setAutoFollow(false);
    lastVSignRef.current = null;
    setProbe({ x: 340, y: 320 });
  };

  const updateChargeQ = (id, q) => {
    setCharges((prev) => prev.map((c) => (c.id === id ? { ...c, q } : c)));
  };
  const toggleCharge2 = (enabled) => {
    setCharges((prev) => prev.map((c) => (c.id === 2 ? { ...c, enabled } : c)));
  };

  // ---------------- analisis bahasa alami ----------------
  const analysisText = useMemo(() => {
    if (records.length < 2) {
      return 'Gerakkan probe lalu tekan "Record Point" beberapa kali untuk mulai mengumpulkan data eksplorasi.';
    }
    const avgField = records.reduce((s, r) => s + r.fieldMag, 0) / records.length;
    let dominant;
    if (avgField > STRONG_FIELD * 0.6) {
      dominant = "Selama eksplorasi, kamu lebih banyak berada di daerah dengan medan kuat.";
    } else if (avgField < SMALL_FIELD * 1.2) {
      dominant = "Selama eksplorasi, kamu lebih banyak berada di daerah dengan medan lemah.";
    } else {
      dominant = "Selama eksplorasi, kamu lebih banyak berada di daerah dengan medan sedang.";
    }

    let relasi = "";
    if (records.length >= 3) {
      const sorted = [...records].sort((a, b) => a.distance - b.distance);
      const near = sorted[0];
      const far = sorted[sorted.length - 1];
      if (far.distance > near.distance * 1.3 && far.fieldMag < near.fieldMag) {
        relasi =
          " Kamu telah mengamati bahwa semakin jauh dari muatan, medan listrik menurun sangat cepat. Data yang kamu kumpulkan menunjukkan hubungan E berbanding terbalik dengan kuadrat jarak (E ∝ 1/r²).";
      }
    }
    return dominant + relasi;
  }, [records]);

  const achievements = [
    { label: "Medan maksimum", done: discoveries.strongField },
    { label: "Medan minimum", done: discoveries.nearZero },
    { label: "Daerah hampir nol", done: challenges.nearlyZero },
    { label: "Arah medan", done: challenges.left || challenges.right },
    { label: "Hubungan jarak dan medan", done: records.length >= 3 },
  ];
  const completedChallenges = CHALLENGE_ITEMS.filter((c) => challenges[c.id]).length;

  const compassAngle = currentField.mag > 0.01 ? currentField.angleDeg : 0;

  return (
    <div
      style={{
        maxWidth: "1140px",
        margin: "0 auto",
        borderRadius: "24px",
        border: "1px solid rgba(139,59,255,0.25)",
        background: "linear-gradient(to bottom right, #05060f, #0b0e1f, #1a0b2e)",
        padding: "24px",
        color: "white",
        fontFamily: "Rajdhani, system-ui, -apple-system, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "12px",
          marginBottom: "10px",
        }}
      >
        <div>
          <h2
            style={{
              fontFamily: "Orbitron, sans-serif",
              fontSize: "26px",
              fontWeight: 800,
              margin: 0,
              display: "flex",
              alignItems: "center",
              gap: "8px",
              textShadow: "0 0 24px rgba(139,59,255,0.45)",
            }}
          >
            🧭 Field Explorer
          </h2>
          <p style={{ color: "#94a3b8", marginTop: "6px" }}>
            Kendalikan probe untuk menjelajahi medan listrik di sekitar muatan secara langsung.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            borderRadius: "999px",
            padding: "6px 16px",
            fontSize: "14px",
            fontWeight: 500,
            background: autoFollow ? "rgba(16,185,129,0.15)" : "rgba(255,255,255,0.05)",
            color: autoFollow ? "#6ee7b7" : "#94a3b8",
            border: `1px solid ${autoFollow ? "rgba(16,185,129,0.3)" : "rgba(255,255,255,0.1)"}`,
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: autoFollow ? "#34d399" : "rgba(255,255,255,0.3)",
            }}
          />
          {autoFollow ? "Auto Follow Aktif" : "Kendali Manual"}
        </div>
      </div>

      <p style={{ fontSize: "13px", color: "#64748b", marginBottom: "20px" }}>
        🖱️ Drag probe langsung, atau gunakan <b>WASD</b> / tombol panah untuk bergerak. Muatan juga bisa digeser.
      </p>

      {/* Layout utama */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(260px, 300px) 1fr",
          gap: "20px",
          alignItems: "start",
        }}
        className="field-explorer-layout"
      >
        {/* Kontrol kiri */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ borderRadius: "16px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(139,59,255,0.12)", padding: "20px" }}>
            <h3 style={{ fontWeight: 600, marginTop: 0, marginBottom: "16px" }}>⚡ Muatan Sumber</h3>

            <SliderRow label="Muatan 1 (q₁)" value={`${charges[0].q > 0 ? "+" : ""}${charges[0].q} µC`} color="#fca5a5">
              <input
                type="range"
                min="-10"
                max="10"
                step="1"
                value={charges[0].q}
                onChange={(e) => updateChargeQ(1, Number(e.target.value))}
                style={{ width: "100%" }}
              />
            </SliderRow>

            <label style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#cbd5e1", marginBottom: "10px", cursor: "pointer" }}>
              <input type="checkbox" checked={charges[1].enabled} onChange={(e) => toggleCharge2(e.target.checked)} />
              Aktifkan Muatan 2 (Dipol)
            </label>

            {charges[1].enabled && (
              <SliderRow label="Muatan 2 (q₂)" value={`${charges[1].q > 0 ? "+" : ""}${charges[1].q} µC`} color="#93c5fd">
                <input
                  type="range"
                  min="-10"
                  max="10"
                  step="1"
                  value={charges[1].q}
                  onChange={(e) => updateChargeQ(2, Number(e.target.value))}
                  style={{ width: "100%" }}
                />
              </SliderRow>
            )}

            <p style={{ fontSize: "12px", color: "#64748b", margin: 0 }}>
              Geser lingkaran muatan pada arena untuk mengubah posisinya.
            </p>
          </div>

          <div style={{ borderRadius: "16px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(139,59,255,0.12)", padding: "20px" }}>
            <h3 style={{ fontWeight: 600, marginTop: 0, marginBottom: "16px" }}>🛰️ Mode Probe</h3>

            <label style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#cbd5e1", marginBottom: "16px", cursor: "pointer" }}>
              <input type="checkbox" checked={autoFollow} onChange={(e) => setAutoFollow(e.target.checked)} />
              Auto Follow Field
            </label>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
              <button onClick={clearTrail} style={btnStyle("rgba(255,255,255,0.08)", false)}>
                🧹 Clear Trail
              </button>
              <button onClick={resetExploration} style={btnStyle("#ef4444", false)}>
                🔄 Reset
              </button>
            </div>
          </div>

          <div style={{ borderRadius: "16px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(34,211,238,0.15)", padding: "20px" }}>
            <h3 style={{ fontWeight: 600, marginTop: 0, marginBottom: "12px", fontSize: "15px", color: "#22d3ee" }}>🧲 Kompas Medan</h3>
            <Compass angleDeg={compassAngle} />
          </div>
        </div>

        {/* Kanan: arena + tabs */}
        <div style={{ minWidth: 0, display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* Arena */}
          <div style={{ borderRadius: "16px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(34,211,238,0.15)", padding: "16px", position: "relative" }}>
            <div
              style={{
                position: "relative",
                borderRadius: "12px",
                overflow: "hidden",
                background: "#070812",
                transition: "background-color 0.35s ease",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: fieldTint(currentField.mag),
                  transition: "background-color 0.35s ease",
                  pointerEvents: "none",
                }}
              />
              <svg
                ref={svgRef}
                viewBox={`0 0 ${ARENA_W} ${ARENA_H}`}
                style={{ width: "100%", height: "auto", display: "block", touchAction: "none" }}
              >
                {/* grid halus */}
                <defs>
                  <pattern id="fe-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width={ARENA_W} height={ARENA_H} fill="url(#fe-grid)" />

                {/* jejak */}
                {trail.length > 1 && (
                  <polyline
                    points={trail.map((p) => `${p.x},${p.y}`).join(" ")}
                    fill="none"
                    stroke="rgba(34,211,238,0.4)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                )}

                {/* muatan */}
                {charges.map(
                  (c) =>
                    c.enabled && (
                      <g key={c.id} onPointerDown={handleChargePointerDown(c.id)} style={{ cursor: "grab" }}>
                        <circle
                          cx={c.x}
                          cy={c.y}
                          r={12 + Math.min(Math.abs(c.q) * 1.4, 18)}
                          fill={c.q >= 0 ? "#f87171" : "#60a5fa"}
                          stroke={c.q >= 0 ? "#fecaca" : "#bfdbfe"}
                          strokeWidth="2"
                          opacity="0.9"
                        />
                        <text x={c.x} y={c.y + 5} textAnchor="middle" fontSize="16" fontWeight="700" fill="#0b0e1f">
                          {c.q >= 0 ? "+" : "–"}
                        </text>
                        <text x={c.x} y={c.y - 24} textAnchor="middle" fontSize="11" fill="#94a3b8">
                          q{c.id} = {c.q}µC
                        </text>
                      </g>
                    )
                )}

                {/* probe */}
                <g
                  onPointerDown={handleProbePointerDown}
                  style={{ cursor: draggingProbeRef.current ? "grabbing" : "grab" }}
                  transform={`translate(${probe.x}, ${probe.y})`}
                >
                  <circle r="16" fill="rgba(34,211,238,0.15)" />
                  <line x1="-11" y1="-11" x2="11" y2="11" stroke="#22d3ee" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="11" y1="-11" x2="-11" y2="11" stroke="#22d3ee" strokeWidth="2.5" strokeLinecap="round" />
                  <circle r="5.5" fill="#67e8f9" stroke="#0b0e1f" strokeWidth="1.5" />
                </g>
              </svg>
            </div>

            {/* popup penemuan */}
            <div style={{ position: "absolute", left: "24px", bottom: "24px", right: "24px", pointerEvents: "none" }}>
              <AnimatePresence>
                {currentPopup && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    style={{
                      background: "rgba(15,23,42,0.92)",
                      border: "1px solid rgba(139,59,255,0.4)",
                      borderRadius: "12px",
                      padding: "12px 16px",
                      fontSize: "14px",
                      maxWidth: "420px",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                    }}
                  >
                    {currentPopup}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Tabs */}
          <div style={{ borderRadius: "16px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(139,59,255,0.12)", padding: "20px" }}>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "18px" }}>
              {TABS.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id)}
                  style={{
                    padding: "8px 14px",
                    borderRadius: "999px",
                    border: "1px solid",
                    borderColor: activeTab === t.id ? "rgba(139,59,255,0.5)" : "rgba(255,255,255,0.1)",
                    background: activeTab === t.id ? "rgba(139,59,255,0.15)" : "transparent",
                    color: activeTab === t.id ? "#c4b5fd" : "#94a3b8",
                    fontSize: "13px",
                    cursor: "pointer",
                  }}
                >
                  {t.icon} {t.label}
                </button>
              ))}
            </div>

            {activeTab === "navigasi" && (
              <StatsGrid cols={2}>
                <Stat label="Koordinat Probe" value={`(${fmtNum(probe.x / PX_PER_M, 2)}, ${fmtNum(probe.y / PX_PER_M, 2)})`} unit="m" />
                <Stat label="Jarak ke Muatan 1" value={fmtNum(dist1, 2)} unit="m" />
                <Stat label="Jarak ke Muatan 2" value={dist2 !== null ? fmtNum(dist2, 2) : "–"} unit={dist2 !== null ? "m" : ""} />
                <Stat label="Besar Medan" value={fmtNum(currentField.mag, 0)} unit="N/C" color="#67e8f9" />
                <Stat label="Arah Medan" value={fmtNum(currentField.angleDeg, 1)} unit="°" />
                <Stat label="Potensial Listrik" value={fmtNum(currentPotential, 0)} unit="V" color="#d8b4fe" />
              </StatsGrid>
            )}

            {activeTab === "tantangan" && (
              <div>
                <p style={{ fontSize: "13px", color: "#94a3b8", marginTop: 0, marginBottom: "14px" }}>
                  Checklist eksplorasi ({completedChallenges}/{CHALLENGE_ITEMS.length} selesai) — tanpa skor, hanya untuk memandu eksplorasimu.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {CHALLENGE_ITEMS.map((c) => (
                    <div
                      key={c.id}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        padding: "8px 10px",
                        borderRadius: "10px",
                        background: challenges[c.id] ? "rgba(16,185,129,0.1)" : "rgba(255,255,255,0.03)",
                      }}
                    >
                      <span style={{ fontSize: "16px" }}>{challenges[c.id] ? "☑️" : "☐"}</span>
                      <span style={{ fontSize: "14px", color: challenges[c.id] ? "#6ee7b7" : "#cbd5e1", textDecoration: challenges[c.id] ? "line-through" : "none" }}>
                        {c.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "recorder" && (
              <div>
                <div style={{ display: "flex", gap: "8px", marginBottom: "14px", flexWrap: "wrap" }}>
                  <button onClick={recordPoint} style={btnStyle("linear-gradient(to right, #8b3bff, #6d28d9)", false)}>
                    📍 Record Point
                  </button>
                  <button onClick={clearRecords} style={btnStyle("rgba(255,255,255,0.08)", false)}>
                    🧹 Clear Data
                  </button>
                </div>

                <div style={{ overflowX: "auto", marginBottom: "20px" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
                    <thead>
                      <tr style={{ textAlign: "left", color: "#94a3b8", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                        <th style={{ padding: "6px 8px" }}>No</th>
                        <th style={{ padding: "6px 8px" }}>Koordinat (m)</th>
                        <th style={{ padding: "6px 8px" }}>Jarak (m)</th>
                        <th style={{ padding: "6px 8px" }}>Medan (N/C)</th>
                        <th style={{ padding: "6px 8px" }}>Arah (°)</th>
                        <th style={{ padding: "6px 8px" }}>Potensial (V)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {records.length === 0 && (
                        <tr>
                          <td colSpan="6" style={{ padding: "14px 8px", color: "#64748b", textAlign: "center" }}>
                            Belum ada data. Tekan "Record Point" di titik yang ingin dicatat.
                          </td>
                        </tr>
                      )}
                      {records.map((r) => (
                        <tr key={r.no} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                          <td style={{ padding: "6px 8px" }}>{r.no}</td>
                          <td style={{ padding: "6px 8px", fontFamily: "monospace" }}>
                            ({fmtNum(r.x, 2)}, {fmtNum(r.y, 2)})
                          </td>
                          <td style={{ padding: "6px 8px", fontFamily: "monospace" }}>{fmtNum(r.distance, 2)}</td>
                          <td style={{ padding: "6px 8px", fontFamily: "monospace", color: "#67e8f9" }}>{fmtNum(r.fieldMag, 0)}</td>
                          <td style={{ padding: "6px 8px", fontFamily: "monospace" }}>{fmtNum(r.angle, 1)}</td>
                          <td style={{ padding: "6px 8px", fontFamily: "monospace", color: "#d8b4fe" }}>{fmtNum(r.potential, 0)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <ChartPanel title="📈 Medan vs Jarak" description="Setiap titik ditambahkan lewat 'Record Point'.">
                  <ScatterChart margin={{ top: 10, right: 20, bottom: 10, left: 0 }}>
                    <CartesianGrid stroke="rgba(255,255,255,0.06)" />
                    <XAxis type="number" dataKey="distance" name="Jarak" unit=" m" stroke="#64748b" fontSize={12} />
                    <YAxis type="number" dataKey="fieldMag" name="Medan" unit=" N/C" stroke="#64748b" fontSize={12} />
                    <ZAxis range={[70, 70]} />
                    <Tooltip contentStyle={tooltipStyle} cursor={{ strokeDasharray: "3 3" }} />
                    <Scatter data={records} fill="#67e8f9" />
                  </ScatterChart>
                </ChartPanel>
              </div>
            )}

            {activeTab === "riwayat" && (
              <div>
                <StatsGrid cols={3}>
                  <Stat label="Jarak Ditempuh" value={fmtNum(sessionStats.distance, 2)} unit="m" />
                  <Stat label="Titik Direkam" value={records.length} unit="" />
                  <Stat label="Medan Terbesar" value={fmtNum(sessionStats.maxField, 0)} unit="N/C" color="#f87171" />
                  <Stat label="Medan Terkecil" value={fmtNum(sessionStats.minField, 0)} unit="N/C" color="#93c5fd" />
                  <Stat label="Potensial Terbesar" value={fmtNum(sessionStats.maxV, 0)} unit="V" color="#f87171" />
                  <Stat label="Potensial Terkecil" value={fmtNum(sessionStats.minV, 0)} unit="V" color="#93c5fd" />
                </StatsGrid>

                <div style={{ marginTop: "16px", borderRadius: "12px", background: "rgba(139,59,255,0.08)", border: "1px solid rgba(139,59,255,0.2)", padding: "14px 16px" }}>
                  <h4 style={{ margin: 0, marginBottom: "6px", fontSize: "14px", color: "#c4b5fd" }}>🧠 Analisis</h4>
                  <p style={{ margin: 0, fontSize: "13px", color: "#cbd5e1", lineHeight: 1.6 }}>{analysisText}</p>
                </div>

                <button onClick={() => setShowFinishModal(true)} style={{ ...btnStyle("linear-gradient(to right, #8b3bff, #6d28d9)", false), marginTop: "16px", width: "100%" }}>
                  🏁 Finish Exploration
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal refleksi */}
      <AnimatePresence>
        {showFinishModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(3,4,10,0.75)",
              backdropFilter: "blur(4px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
              zIndex: 20,
            }}
            onClick={() => setShowFinishModal(false)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: "480px",
                width: "100%",
                borderRadius: "18px",
                border: "1px solid rgba(139,59,255,0.3)",
                background: "linear-gradient(to bottom right, #0b0e1f, #1a0b2e)",
                padding: "24px",
              }}
            >
              <h3 style={{ marginTop: 0, fontFamily: "Orbitron, sans-serif", fontSize: "20px" }}>🪞 Refleksi Eksplorasi</h3>
              <p style={{ color: "#94a3b8", fontSize: "13px", marginBottom: "16px" }}>Apa yang berhasil kamu temukan?</p>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "18px" }}>
                {achievements.map((a) => (
                  <div key={a.label} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px" }}>
                    <span style={{ color: a.done ? "#34d399" : "#64748b" }}>{a.done ? "✔" : "✘"}</span>
                    <span style={{ color: a.done ? "#e2e8f0" : "#64748b" }}>{a.label}</span>
                  </div>
                ))}
              </div>

              <div style={{ borderRadius: "10px", background: "rgba(255,255,255,0.05)", padding: "14px", marginBottom: "18px" }}>
                <p style={{ margin: 0, fontSize: "13px", color: "#94a3b8", marginBottom: "6px", fontWeight: 600 }}>Kesimpulan</p>
                <p style={{ margin: 0, fontSize: "13px", color: "#cbd5e1", lineHeight: 1.6 }}>
                  Berdasarkan hasil eksplorasi, kamu dapat menyimpulkan bahwa medan listrik semakin besar ketika mendekati muatan dan semakin
                  kecil ketika menjauhinya. Pola ini mengikuti hubungan 1/r².
                </p>
              </div>

              <button onClick={() => setShowFinishModal(false)} style={{ ...btnStyle("rgba(255,255,255,0.08)", false), width: "100%" }}>
                Tutup
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Responsif */}
      <style>{`
        @media (max-width: 760px) {
          .field-explorer-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

// ======================================================
// KOMPONEN BANTU
// ======================================================

const tooltipStyle = {
  background: "#0f172a",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "8px",
  fontSize: "13px",
};

function btnStyle(bg, disabled) {
  return {
    background: bg,
    color: "white",
    border: "none",
    padding: "10px 14px",
    borderRadius: "12px",
    cursor: disabled ? "not-allowed" : "pointer",
    fontWeight: 500,
    fontSize: "13px",
    opacity: disabled ? 0.4 : 1,
  };
}

function SliderRow({ label, value, color, children }) {
  return (
    <div style={{ marginBottom: "16px" }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "6px" }}>
        <label style={{ fontSize: "14px", color }}>{label}</label>
        <span style={{ fontFamily: "monospace", color }}>{value}</span>
      </div>
      {children}
    </div>
  );
}

function StatsGrid({ cols, children }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gap: "12px",
      }}
    >
      {children}
    </div>
  );
}

function Stat({ label, value, unit, color = "#fff" }) {
  return (
    <div style={{ borderRadius: "12px", background: "rgba(255,255,255,0.05)", padding: "12px" }}>
      <p style={{ fontSize: "12px", color: "#94a3b8", margin: 0, marginBottom: "4px" }}>{label}</p>
      <p style={{ fontSize: "17px", fontWeight: 600, fontFamily: "monospace", color, margin: 0 }}>
        {value} <span style={{ fontSize: "12px", color: "#64748b" }}>{unit}</span>
      </p>
    </div>
  );
}

function ChartPanel({ title, description, children }) {
  return (
    <div style={{ borderRadius: "16px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(34,211,238,0.15)", padding: "20px" }}>
      <h4 style={{ fontSize: "15px", color: "#22d3ee", marginTop: 0, marginBottom: "4px", fontWeight: 600 }}>{title}</h4>
      <p style={{ fontSize: "12px", color: "#94a3b8", marginTop: 0, marginBottom: "12px" }}>{description}</p>
      <div style={{ width: "100%", height: 260 }}>
        <ResponsiveContainer width="100%" height="100%">
          {children}
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function Compass({ angleDeg }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
      <svg viewBox="0 0 80 80" style={{ width: "100px", height: "100px" }}>
        <circle cx="40" cy="40" r="36" fill="rgba(255,255,255,0.03)" stroke="rgba(34,211,238,0.3)" strokeWidth="1.5" />
        <text x="40" y="12" textAnchor="middle" fontSize="9" fill="#64748b">
          U
        </text>
        <text x="40" y="74" textAnchor="middle" fontSize="9" fill="#64748b">
          S
        </text>
        <text x="8" y="43" textAnchor="middle" fontSize="9" fill="#64748b">
          B
        </text>
        <text x="72" y="43" textAnchor="middle" fontSize="9" fill="#64748b">
          T
        </text>
        <g style={{ transform: `rotate(${angleDeg}deg)`, transformOrigin: "40px 40px", transition: "transform 0.15s ease-out" }}>
          <line x1="40" y1="40" x2="66" y2="40" stroke="#22d3ee" strokeWidth="3" strokeLinecap="round" />
          <line x1="40" y1="40" x2="20" y2="40" stroke="rgba(255,255,255,0.25)" strokeWidth="2" strokeLinecap="round" />
          <circle cx="40" cy="40" r="4" fill="#67e8f9" />
        </g>
      </svg>
      <p style={{ margin: 0, fontSize: "12px", color: "#64748b", fontFamily: "monospace" }}>{fmtNum(angleDeg, 1)}°</p>
    </div>
  );
}
