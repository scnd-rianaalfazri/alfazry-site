import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";

/* ==================================================================
   IDENTIFY THE WAVE — Fisika Alfazrian Virtual Lab
   Pure virtual laboratory instrument for exploring transverse waves.
   No game mechanics, no scoring, no characters. Instrument-only.
   ================================================================== */

/* ---------------------------- PHYSICS ---------------------------- */

const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
const TWO_PI = Math.PI * 2;

// y(x,t) = A sin(kx - wt + phi)   (A in cm, x in m, t in s)
function waveY(params, x, t) {
  const k = TWO_PI / params.wavelength;
  const omega = TWO_PI * params.frequency;
  return params.amplitude * Math.sin(k * x - omega * t + params.phase);
}

function derived(params) {
  const period = 1 / params.frequency;
  const speed = params.frequency * params.wavelength;
  return { period, speed };
}

// x positions (m) of crests within [0, domainMax] at time t
function findExtrema(params, t, domainMax, kind) {
  const k = TWO_PI / params.wavelength;
  const omega = TWO_PI * params.frequency;
  const target = kind === "crest" ? Math.PI / 2 : -Math.PI / 2;
  const base = (target + omega * t - params.phase) / k;
  const step = TWO_PI / k; // = wavelength
  const nStart = Math.floor((0 - base) / step) - 1;
  const nEnd = Math.ceil((domainMax - base) / step) + 1;
  const out = [];
  for (let n = nStart; n <= nEnd; n++) {
    const x = base + n * step;
    if (x >= -1e-9 && x <= domainMax + 1e-9) out.push(x);
  }
  return out.sort((a, b) => a - b);
}

function nearestFrom(list, x) {
  if (!list.length) return null;
  let best = list[0];
  let bd = Math.abs(list[0] - x);
  for (const v of list) {
    const d = Math.abs(v - x);
    if (d < bd) {
      bd = d;
      best = v;
    }
  }
  return best;
}

/* ---------------------------- LAYOUT ---------------------------- */

const DOMAIN_X = 16; // meters visible in the plot window
const SVG_W = 900;
const SVG_H = 460;
const PLOT_LEFT = 78;
const PLOT_RIGHT = 872;
const PLOT_TOP = 34;
const PLOT_BOTTOM = 388;
const EQ_Y = (PLOT_TOP + PLOT_BOTTOM) / 2;
const PLOT_W = PLOT_RIGHT - PLOT_LEFT;
const PLOT_H = PLOT_BOTTOM - PLOT_TOP;
const MAX_AMP_CM = 6;
const SCALE_X = PLOT_W / DOMAIN_X; // px per meter
const SCALE_Y = (PLOT_H / 2) / MAX_AMP_CM; // px per cm

const toPx = (xm) => PLOT_LEFT + xm * SCALE_X;
const toPy = (ycm) => EQ_Y - ycm * SCALE_Y;
const fromPx = (px) => (px - PLOT_LEFT) / SCALE_X;
const fromPy = (py) => (EQ_Y - py) / SCALE_Y;

const DEFAULT_WAVE_A = { amplitude: 2.0, wavelength: 4.0, frequency: 1.0, phase: 0 };
const DEFAULT_WAVE_B = { amplitude: 4.0, wavelength: 4.0, frequency: 1.0, phase: 0 };

const TOOLS = [
  { id: "identify", label: "Identifikasi", icon: "◎" },
  { id: "ruler", label: "Penggaris", icon: "📏" },
  { id: "amplitude", label: "Alat Ukur Amplitudo", icon: "↕" },
  { id: "wavelength", label: "Alat Ukur Panjang Gelombang", icon: "↔" },
  { id: "phase", label: "Penanda Fase", icon: "◐" },
];

const CONCEPTS = {
  crest: {
    title: "Puncak",
    body: "Titik dengan simpangan maksimum ke arah atas dari garis setimbang.",
  },
  trough: {
    title: "Lembah",
    body: "Titik dengan simpangan maksimum ke arah bawah dari garis setimbang.",
  },
  equilibrium: {
    title: "Garis Setimbang",
    body: "Posisi tengah ketika medium tidak mengalami simpangan.",
  },
  amplitude: {
    title: "Amplitudo",
    body: "Jarak maksimum titik pada gelombang dari garis setimbang.",
  },
  wavelength: {
    title: "Panjang Gelombang",
    body: "Jarak antara dua titik berurutan yang memiliki fase sama, misalnya dari satu puncak ke puncak berikutnya.",
  },
};

/* ---------------------------- SMALL UI ---------------------------- */

function ParamSlider({ label, symbol, value, unit, min, max, step, onChange, accent = "purple" }) {
  return (
    <label className={`itw-slider itw-accent-${accent}`}>
      <div className="itw-slider-top">
        <span className="itw-slider-label">{label}</span>
        <span className="itw-slider-value">
          {symbol} = {value.toFixed(step < 1 ? 2 : 0)} {unit}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        aria-label={`${label}, ${symbol} sama dengan ${value} ${unit}`}
        onChange={(e) => onChange(parseFloat(e.target.value))}
      />
    </label>
  );
}

function ToolButton({ active, onClick, icon, label }) {
  return (
    <button
      className={`itw-tool-btn${active ? " itw-tool-btn-active" : ""}`}
      onClick={onClick}
      aria-pressed={active}
      aria-label={label}
      title={label}
    >
      <span className="itw-tool-icon" aria-hidden="true">{icon}</span>
      <span className="itw-tool-label">{label}</span>
    </button>
  );
}

function ToggleSwitch({ checked, onChange, label }) {
  return (
    <label className="itw-toggle">
      <span>{label}</span>
      <span className="itw-toggle-track" data-on={checked}>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          aria-label={label}
        />
        <span className="itw-toggle-thumb" />
      </span>
    </label>
  );
}

function AnalyzerRow({ label, symbol, value }) {
  return (
    <div className="itw-analyzer-row">
      <span className="itw-analyzer-label">{label}</span>
      <span className="itw-analyzer-value">{symbol} = {value}</span>
    </div>
  );
}

/* ---------------------------- MAIN COMPONENT ---------------------------- */

export default function IdentifyTheWave() {
  const svgRef = useRef(null);

  // wave parameters
  const [waveA, setWaveA] = useState(DEFAULT_WAVE_A);
  const [waveB, setWaveB] = useState(DEFAULT_WAVE_B);
  const [dualMode, setDualMode] = useState(false);
  const [compareFocus, setCompareFocus] = useState("amplitude");

  // animation
  const [playing, setPlaying] = useState(true);
  const [frozen, setFrozen] = useState(false);
  const [time, setTime] = useState(0);
  const rafRef = useRef(null);
  const lastRef = useRef(null);

  // display toggles
  const [gridOn, setGridOn] = useState(false);
  const [equilibriumTrackerOn, setEquilibriumTrackerOn] = useState(false);
  const [crestTroughTrackerOn, setCrestTroughTrackerOn] = useState(false);
  const [showAnalyzer, setShowAnalyzer] = useState(false);
  const [precisionOn, setPrecisionOn] = useState(false);
  const [zoom, setZoom] = useState(1);

  // tool + interaction state
  const [activeTool, setActiveTool] = useState("identify");
  const [selectedPart, setSelectedPart] = useState(null);
  const [hoverCoord, setHoverCoord] = useState(null);
  const [feedback, setFeedback] = useState(
    "Klik bagian gelombang untuk mengenali strukturnya, atau pilih alat ukur di panel kanan."
  );

  const [rulerPts, setRulerPts] = useState([
    { x: 3, y: 3 },
    { x: 7, y: -3 },
  ]);
  const [draggingRuler, setDraggingRuler] = useState(null);
  const [ampMarkX, setAmpMarkX] = useState(null);
  const [wlMarks, setWlMarks] = useState([]);
  const [phaseMarks, setPhaseMarks] = useState([]);

  /* ---------- animation loop ---------- */
  useEffect(() => {
    function loop(now) {
      if (lastRef.current == null) lastRef.current = now;
      const dt = (now - lastRef.current) / 1000;
      lastRef.current = now;
      if (playing && !frozen) {
        setTime((t) => t + dt);
      }
      rafRef.current = requestAnimationFrame(loop);
    }
    rafRef.current = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(rafRef.current);
      lastRef.current = null;
    };
  }, [playing, frozen]);

  /* ---------- derived physics ---------- */
  const derivedA = useMemo(() => derived(waveA), [waveA]);
  const derivedB = useMemo(() => derived(waveB), [waveB]);

  const crestsA = useMemo(() => findExtrema(waveA, time, DOMAIN_X, "crest"), [waveA, time]);
  const troughsA = useMemo(() => findExtrema(waveA, time, DOMAIN_X, "trough"), [waveA, time]);

  /* ---------- path builders ---------- */
  const buildPath = useCallback((params, t) => {
    const N = 260;
    let d = "";
    for (let i = 0; i <= N; i++) {
      const xm = (DOMAIN_X * i) / N;
      const ycm = waveY(params, xm, t);
      const px = toPx(xm);
      const py = toPy(ycm);
      d += (i === 0 ? "M" : "L") + px.toFixed(2) + "," + py.toFixed(2) + " ";
    }
    return d;
  }, []);

  const pathA = useMemo(() => buildPath(waveA, time), [buildPath, waveA, time]);
  const pathB = useMemo(() => (dualMode ? buildPath(waveB, time) : ""), [buildPath, waveB, dualMode, time]);

  /* ---------- identify overlay anchors (first crest/trough on screen) ---------- */
  const anchorCrest = crestsA.length ? crestsA.find((x) => x >= 1) ?? crestsA[0] : null;
  const anchorTrough = troughsA.length ? troughsA.find((x) => x >= 1) ?? troughsA[0] : null;
  const wlAnchorPair =
    crestsA.length >= 2
      ? [crestsA.find((x) => x >= 1) ?? crestsA[0], null]
      : [null, null];
  if (wlAnchorPair[0] != null) {
    const idx = crestsA.indexOf(wlAnchorPair[0]);
    wlAnchorPair[1] = crestsA[idx + 1] ?? null;
  }

  /* ---------- pointer helpers ---------- */
  const getSvgPoint = useCallback((evt) => {
    const svg = svgRef.current;
    if (!svg) return { px: 0, py: 0 };
    const pt = svg.createSVGPoint();
    pt.x = evt.clientX;
    pt.y = evt.clientY;
    const ctm = svg.getScreenCTM();
    if (!ctm) return { px: 0, py: 0 };
    const loc = pt.matrixTransform(ctm.inverse());
    return { px: loc.x, py: loc.y };
  }, []);

  const withinPlot = (px, py) =>
    px >= PLOT_LEFT && px <= PLOT_RIGHT && py >= PLOT_TOP && py <= PLOT_BOTTOM;

  /* ---------- pointer move (hover + drag) ---------- */
  const handlePointerMove = useCallback(
    (evt) => {
      const { px, py } = getSvgPoint(evt);
      if (precisionOn && withinPlot(px, py)) {
        setHoverCoord({ x: fromPx(px), y: fromPy(py) });
      } else if (!withinPlot(px, py)) {
        setHoverCoord(null);
      }
      if (draggingRuler !== null) {
        const xm = clamp(fromPx(px), 0, DOMAIN_X);
        const ycm = clamp(fromPy(py), -MAX_AMP_CM, MAX_AMP_CM);
        setRulerPts((pts) => {
          const next = [...pts];
          next[draggingRuler] = { x: xm, y: ycm };
          return next;
        });
      }
    },
    [getSvgPoint, precisionOn, draggingRuler]
  );

  const handlePointerUp = useCallback(() => setDraggingRuler(null), []);

  /* ---------- click handling per tool ---------- */
  const handlePlotClick = useCallback(
    (evt) => {
      const { px, py } = getSvgPoint(evt);
      if (!withinPlot(px, py)) return;
      const xm = fromPx(px);

      if (activeTool === "amplitude") {
        const candidates = [...crestsA, ...troughsA];
        const snap = nearestFrom(candidates, xm);
        if (snap != null && Math.abs(snap - xm) < 0.6) {
          setAmpMarkX(snap);
          setFeedback("Pengukuran amplitudo dimulai dari garis setimbang menuju puncak atau lembah terdekat.");
        } else {
          setFeedback("Klik lebih dekat ke sebuah puncak atau lembah untuk mengukur amplitudo.");
        }
        return;
      }

      if (activeTool === "wavelength") {
        const candidates = [...crestsA, ...troughsA].sort((a, b) => a - b);
        const snap = nearestFrom(candidates, xm);
        if (snap == null || Math.abs(snap - xm) > 0.6) {
          setFeedback("Klik lebih dekat ke sebuah puncak atau lembah untuk menandai titik pengukuran.");
          return;
        }
        setWlMarks((prev) => {
          if (prev.length >= 2 || prev.includes(snap)) return [snap];
          const next = [...prev, snap].sort((a, b) => a - b);
          if (next.length === 2) {
            const isCrestA = crestsA.includes(next[0]);
            const isCrestB = crestsA.includes(next[1]);
            const dist = next[1] - next[0];
            if (isCrestA === isCrestB) {
              setFeedback(`Jarak antara dua titik sefase ini adalah satu panjang gelombang: λ = ${dist.toFixed(2)} m.`);
            } else {
              setFeedback("Jarak puncak ke lembah bukan satu panjang gelombang — coba pilih dua puncak atau dua lembah.");
            }
          }
          return next;
        });
        return;
      }

      if (activeTool === "phase") {
        setPhaseMarks((prev) => {
          if (prev.length >= 2) return [xm];
          const next = [...prev, xm];
          if (next.length === 2) {
            const k = TWO_PI / waveA.wavelength;
            let dphi = Math.abs(k * (next[1] - next[0])) % TWO_PI;
            if (dphi > Math.PI) dphi = TWO_PI - dphi;
            const ratio = dphi / Math.PI;
            let desc;
            if (ratio < 0.05) desc = "kedua titik sefase (Δφ ≈ 0)";
            else if (Math.abs(ratio - 1) < 0.05) desc = "kedua titik berlawanan fase (Δφ ≈ π)";
            else desc = `beda fase Δφ ≈ ${ratio.toFixed(2)}π`;
            setFeedback(`Perbedaan fase antara dua titik terpilih: ${desc}.`);
          }
          return next;
        });
        return;
      }

      if (activeTool === "identify") {
        // determine what part was clicked based on proximity
        const ycm = fromPy(py);
        const curveY = waveY(waveA, xm, time);
        const nearCurve = Math.abs(ycm - curveY) < 0.5;
        const nearestCrest = nearestFrom(crestsA, xm);
        const nearestTrough = nearestFrom(troughsA, xm);
        const nearEq = Math.abs(ycm) < 0.35 && Math.abs(curveY) < 3;

        if (ampMarkX == null && anchorCrest != null && Math.abs(xm - anchorCrest) < 0.4 && nearCurve) {
          setSelectedPart("amplitude");
          return;
        }
        if (nearestCrest != null && Math.abs(xm - nearestCrest) < 0.4 && nearCurve) {
          setSelectedPart("crest");
          return;
        }
        if (nearestTrough != null && Math.abs(xm - nearestTrough) < 0.4 && nearCurve) {
          setSelectedPart("trough");
          return;
        }
        if (nearEq) {
          setSelectedPart("equilibrium");
          return;
        }
        setFeedback("Coba klik lebih dekat ke puncak, lembah, atau garis setimbang gelombang.");
      }
    },
    [activeTool, crestsA, troughsA, getSvgPoint, waveA, time, ampMarkX, anchorCrest]
  );

  const clickWavelengthBracket = () => setSelectedPart("wavelength");
  const clickAmplitudeBracket = () => setSelectedPart("amplitude");
  const clickEquilibriumLine = () => setSelectedPart("equilibrium");

  /* ---------- reset ---------- */
  const resetLab = () => {
    setWaveA(DEFAULT_WAVE_A);
    setWaveB(DEFAULT_WAVE_B);
    setDualMode(false);
    setPlaying(true);
    setFrozen(false);
    setTime(0);
    setGridOn(false);
    setEquilibriumTrackerOn(false);
    setCrestTroughTrackerOn(false);
    setShowAnalyzer(false);
    setPrecisionOn(false);
    setZoom(1);
    setActiveTool("identify");
    setSelectedPart(null);
    setRulerPts([{ x: 3, y: 3 }, { x: 7, y: -3 }]);
    setAmpMarkX(null);
    setWlMarks([]);
    setPhaseMarks([]);
    setFeedback("Laboratorium telah direset ke parameter awal.");
  };

  /* ---------- viewBox for zoom (precision mode) ---------- */
  const vbW = SVG_W / zoom;
  const vbH = SVG_H / zoom;
  const vbX = (SVG_W - vbW) / 2;
  const vbY = (SVG_H - vbH) / 2;

  /* ---------- grid lines ---------- */
  const gridXs = [];
  for (let x = 0; x <= DOMAIN_X; x += 1) gridXs.push(x);
  const gridYs = [];
  for (let y = -MAX_AMP_CM; y <= MAX_AMP_CM; y += 1) gridYs.push(y);

  const rulerDx = Math.abs(rulerPts[1].x - rulerPts[0].x);
  const rulerDy = Math.abs(rulerPts[1].y - rulerPts[0].y);

  return (
    <div className="itw-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&family=Inter:wght@400;500&display=swap');

        .itw-root {
          --itw-bg: #08080d;
          --itw-panel: rgba(22, 22, 32, 0.55);
          --itw-panel-solid: #121219;
          --itw-border: rgba(168, 85, 247, 0.18);
          --itw-purple: #b16bff;
          --itw-purple-bright: #d1a3ff;
          --itw-cyan: #33e5ff;
          --itw-text: #f2f1f7;
          --itw-muted: #9793ab;
          --itw-grid: rgba(255, 255, 255, 0.055);
          font-family: 'Inter', sans-serif;
          background:
            radial-gradient(ellipse 900px 500px at 20% -10%, rgba(177,107,255,0.10), transparent 60%),
            radial-gradient(ellipse 700px 500px at 100% 10%, rgba(51,229,255,0.06), transparent 60%),
            var(--itw-bg);
          color: var(--itw-text);
          border-radius: 18px;
          padding: clamp(16px, 3vw, 32px);
          box-sizing: border-box;
          width: 100%;
        }
        .itw-root * { box-sizing: border-box; }

        .itw-header { margin-bottom: 20px; }
        .itw-eyebrow {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.18em;
          color: var(--itw-cyan);
          text-transform: uppercase;
          margin: 0 0 6px 0;
        }
        .itw-title {
          font-family: 'Sora', sans-serif;
          font-weight: 700;
          font-size: clamp(22px, 3vw, 30px);
          margin: 0 0 4px 0;
          letter-spacing: -0.01em;
        }
        .itw-subtitle {
          margin: 0;
          color: var(--itw-muted);
          font-size: 14px;
        }

        .itw-layout {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 300px;
          gap: 16px;
        }
        @media (max-width: 880px) {
          .itw-layout { grid-template-columns: 1fr; }
        }

        .itw-panel {
          background: var(--itw-panel);
          border: 1px solid var(--itw-border);
          border-radius: 14px;
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          padding: 16px;
        }

        /* --- canvas panel --- */
        .itw-canvas-panel { padding: 10px 10px 14px 10px; position: relative; }
        .itw-canvas-toolbar {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          align-items: center;
          justify-content: space-between;
          padding: 6px 8px 10px 8px;
        }
        .itw-transport {
          display: flex;
          gap: 6px;
        }
        .itw-icon-btn {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          color: var(--itw-text);
          width: 36px; height: 36px;
          border-radius: 9px;
          font-size: 15px;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: border-color .15s, background .15s, transform .1s;
        }
        .itw-icon-btn:hover { border-color: var(--itw-purple); background: rgba(177,107,255,0.10); }
        .itw-icon-btn:active { transform: scale(0.94); }
        .itw-icon-btn-accent { color: var(--itw-purple-bright); border-color: rgba(177,107,255,0.35); }

        .itw-reset-btn {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.12);
          color: var(--itw-muted);
          padding: 8px 12px;
          border-radius: 8px;
          cursor: pointer;
          transition: border-color .15s, color .15s;
        }
        .itw-reset-btn:hover { border-color: #ff6b8b; color: #ff9fb4; }

        .itw-svg-wrap {
          width: 100%;
          border-radius: 10px;
          overflow: hidden;
          background: linear-gradient(180deg, #0b0b12 0%, #0a0a10 100%);
          border: 1px solid rgba(255,255,255,0.05);
        }
        .itw-svg-wrap svg { width: 100%; height: auto; display: block; touch-action: none; }

        .itw-feedback {
          margin-top: 10px;
          font-size: 12.5px;
          color: var(--itw-muted);
          font-family: 'IBM Plex Mono', monospace;
          line-height: 1.5;
          padding: 8px 10px;
          border-left: 2px solid var(--itw-cyan);
          background: rgba(51,229,255,0.04);
          border-radius: 0 8px 8px 0;
        }

        /* --- toolbar (tool select) --- */
        .itw-tools-row {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          padding: 0 8px 8px 8px;
        }
        .itw-tool-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          color: var(--itw-muted);
          padding: 7px 11px;
          border-radius: 999px;
          font-size: 12px;
          font-family: 'Inter', sans-serif;
          cursor: pointer;
          transition: all .15s;
        }
        .itw-tool-btn:hover { color: var(--itw-text); border-color: rgba(255,255,255,0.18); }
        .itw-tool-btn-active {
          background: rgba(177,107,255,0.14);
          border-color: var(--itw-purple);
          color: var(--itw-purple-bright);
          box-shadow: 0 0 14px rgba(177,107,255,0.15);
        }
        .itw-tool-icon { font-size: 13px; }

        /* --- side panels --- */
        .itw-side { display: flex; flex-direction: column; gap: 14px; }
        .itw-panel-title {
          font-family: 'Sora', sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.02em;
          margin: 0 0 12px 0;
          color: var(--itw-purple-bright);
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .itw-panel-title::before {
          content: '';
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--itw-purple);
          box-shadow: 0 0 8px var(--itw-purple);
          display: inline-block;
        }

        .itw-slider { display: block; margin-bottom: 14px; }
        .itw-slider:last-child { margin-bottom: 0; }
        .itw-slider-top {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          margin-bottom: 6px;
        }
        .itw-slider-label { color: var(--itw-muted); }
        .itw-slider-value {
          font-family: 'IBM Plex Mono', monospace;
          color: var(--itw-text);
        }
        .itw-accent-cyan .itw-slider-value { color: var(--itw-cyan); }
        .itw-slider input[type=range] {
          width: 100%;
          -webkit-appearance: none;
          appearance: none;
          height: 4px;
          border-radius: 2px;
          background: rgba(255,255,255,0.10);
          outline: none;
          cursor: pointer;
        }
        .itw-slider input[type=range]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 15px; height: 15px;
          border-radius: 50%;
          background: var(--itw-purple);
          box-shadow: 0 0 10px rgba(177,107,255,0.7);
          border: 2px solid #0a0a10;
          cursor: pointer;
        }
        .itw-accent-cyan input[type=range]::-webkit-slider-thumb {
          background: var(--itw-cyan);
          box-shadow: 0 0 10px rgba(51,229,255,0.7);
        }
        .itw-slider input[type=range]::-moz-range-thumb {
          width: 15px; height: 15px;
          border-radius: 50%;
          background: var(--itw-purple);
          border: 2px solid #0a0a10;
          cursor: pointer;
        }

        .itw-toggles { display: flex; flex-direction: column; gap: 10px; }
        .itw-toggle {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 12.5px;
          color: var(--itw-muted);
          cursor: pointer;
        }
        .itw-toggle-track {
          position: relative;
          width: 34px; height: 19px;
          border-radius: 999px;
          background: rgba(255,255,255,0.10);
          transition: background .15s;
          flex-shrink: 0;
        }
        .itw-toggle-track[data-on="true"] { background: rgba(177,107,255,0.55); }
        .itw-toggle-track input { position: absolute; opacity: 0; width: 100%; height: 100%; margin: 0; cursor: pointer; }
        .itw-toggle-thumb {
          position: absolute;
          top: 2px; left: 2px;
          width: 15px; height: 15px;
          border-radius: 50%;
          background: #fff;
          transition: transform .15s;
          pointer-events: none;
        }
        .itw-toggle-track[data-on="true"] .itw-toggle-thumb { transform: translateX(15px); }

        .itw-info-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 10px;
          padding: 12px;
        }
        .itw-info-empty { color: var(--itw-muted); font-size: 12.5px; line-height: 1.5; }
        .itw-info-name {
          font-family: 'Sora', sans-serif;
          font-weight: 600;
          font-size: 14px;
          color: var(--itw-purple-bright);
          margin: 0 0 6px 0;
        }
        .itw-info-body { font-size: 12.5px; line-height: 1.55; color: #d9d7e3; margin: 0 0 8px 0; }
        .itw-info-value {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 13px;
          color: var(--itw-cyan);
        }

        .itw-analyzer-row {
          display: flex;
          justify-content: space-between;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 12.5px;
          padding: 6px 0;
          border-bottom: 1px dashed rgba(255,255,255,0.07);
        }
        .itw-analyzer-row:last-child { border-bottom: none; }
        .itw-analyzer-label { color: var(--itw-muted); }
        .itw-analyzer-value { color: var(--itw-text); }

        .itw-compare-chips { display: flex; gap: 6px; margin-bottom: 10px; flex-wrap: wrap; }
        .itw-chip {
          font-size: 11px;
          padding: 5px 10px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.10);
          color: var(--itw-muted);
          background: transparent;
          cursor: pointer;
        }
        .itw-chip-active { border-color: var(--itw-cyan); color: var(--itw-cyan); background: rgba(51,229,255,0.08); }

        .itw-compare-row { display: grid; grid-template-columns: 1fr auto auto; gap: 8px; font-size: 12px; padding: 5px 0; }
        .itw-compare-row .itw-cwave-a { color: var(--itw-purple-bright); font-family: 'IBM Plex Mono', monospace; text-align: right; }
        .itw-compare-row .itw-cwave-b { color: var(--itw-cyan); font-family: 'IBM Plex Mono', monospace; text-align: right; }

        .itw-zoom-controls { display: flex; gap: 6px; align-items: center; }

        @media (prefers-reduced-motion: reduce) {
          .itw-icon-btn, .itw-tool-btn, .itw-toggle-track, .itw-toggle-thumb { transition: none !important; }
        }
      `}</style>

      {/* HEADER */}
      <div className="itw-header">
        <p className="itw-eyebrow">Fisika Alfazrian · Virtual Lab</p>
        <h1 className="itw-title">📈 Identify the Wave</h1>
        <p className="itw-subtitle">Kenali Bagian-Bagian Gelombang</p>
      </div>

      <div className="itw-layout">
        {/* MAIN CANVAS */}
        <div className="itw-panel itw-canvas-panel">
          <div className="itw-canvas-toolbar">
            <div className="itw-transport">
              <button className="itw-icon-btn itw-icon-btn-accent" onClick={() => setPlaying((p) => !p)} aria-label={playing ? "Jeda" : "Putar"} title={playing ? "Jeda" : "Putar"}>
                {playing ? "⏸" : "▶"}
              </button>
              <button
                className="itw-icon-btn"
                onClick={() => {
                  setFrozen((f) => !f);
                  setFeedback(frozen ? "Gelombang dilanjutkan." : "Gelombang dibekukan — pengukuran dapat dilakukan pada posisi ini.");
                }}
                aria-label={frozen ? "Lanjutkan" : "Bekukan"}
                title={frozen ? "Resume" : "Freeze / Snapshot"}
              >
                {frozen ? "▶" : "📸"}
              </button>
              <button className="itw-icon-btn" onClick={() => setTime(0)} aria-label="Reset waktu" title="Reset waktu">↻</button>
            </div>
            <div className="itw-zoom-controls">
              {precisionOn && (
                <>
                  <button className="itw-icon-btn" onClick={() => setZoom((z) => clamp(z + 0.25, 1, 2.5))} aria-label="Perbesar" title="Zoom +">+</button>
                  <button className="itw-icon-btn" onClick={() => setZoom((z) => clamp(z - 0.25, 1, 2.5))} aria-label="Perkecil" title="Zoom -">−</button>
                  <button className="itw-icon-btn" onClick={() => setZoom(1)} aria-label="Reset tampilan" title="Reset View">⤢</button>
                </>
              )}
              <button className="itw-reset-btn" onClick={resetLab}>Reset Lab</button>
            </div>
          </div>

          <div className="itw-tools-row" role="toolbar" aria-label="Alat ukur">
            {TOOLS.map((t) => (
              <ToolButton
                key={t.id}
                icon={t.icon}
                label={t.label}
                active={activeTool === t.id}
                onClick={() => {
                  setActiveTool(t.id);
                  setSelectedPart(null);
                }}
              />
            ))}
          </div>

          <div className="itw-svg-wrap">
            <svg
              ref={svgRef}
              viewBox={`${vbX} ${vbY} ${vbW} ${vbH}`}
              onMouseMove={handlePointerMove}
              onMouseUp={handlePointerUp}
              onMouseLeave={() => setHoverCoord(null)}
              onClick={handlePlotClick}
              role="img"
              aria-label="Visualisasi gelombang transversal interaktif"
            >
              <defs>
                <filter id="itw-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* grid */}
              {gridOn && (
                <g stroke="var(--itw-grid)" strokeWidth="1">
                  {gridXs.map((x) => (
                    <line key={`gx${x}`} x1={toPx(x)} y1={PLOT_TOP} x2={toPx(x)} y2={PLOT_BOTTOM} />
                  ))}
                  {gridYs.map((y) => (
                    <line key={`gy${y}`} x1={PLOT_LEFT} y1={toPy(y)} x2={PLOT_RIGHT} y2={toPy(y)} />
                  ))}
                </g>
              )}
              {gridOn &&
                gridXs.filter((x) => x % 2 === 0).map((x) => (
                  <text key={`gxl${x}`} x={toPx(x)} y={PLOT_BOTTOM + 16} fontSize="9" fill="#6b6880" textAnchor="middle" fontFamily="IBM Plex Mono, monospace">
                    {x}m
                  </text>
                ))}

              {/* axes */}
              <line x1={PLOT_LEFT} y1={PLOT_TOP} x2={PLOT_LEFT} y2={PLOT_BOTTOM} stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />

              {/* equilibrium line */}
              <line
                x1={PLOT_LEFT}
                y1={EQ_Y}
                x2={PLOT_RIGHT}
                y2={EQ_Y}
                stroke={equilibriumTrackerOn || selectedPart === "equilibrium" ? "var(--itw-purple-bright)" : "rgba(255,255,255,0.22)"}
                strokeWidth={equilibriumTrackerOn || selectedPart === "equilibrium" ? 2 : 1}
                strokeDasharray="6 5"
                style={{ cursor: "pointer" }}
                onClick={(e) => { e.stopPropagation(); clickEquilibriumLine(); }}
              />
              {(equilibriumTrackerOn || selectedPart === "equilibrium") && (
                <text x={PLOT_RIGHT - 4} y={EQ_Y - 8} fontSize="11" fill="var(--itw-purple-bright)" textAnchor="end" fontFamily="IBM Plex Mono, monospace">
                  y = 0 · Garis Setimbang
                </text>
              )}

              {/* wave B (behind A) */}
              {dualMode && (
                <path d={pathB} fill="none" stroke="var(--itw-cyan)" strokeWidth="2.5" opacity="0.85" filter="url(#itw-glow)" />
              )}

              {/* wave A */}
              <path d={pathA} fill="none" stroke="var(--itw-purple-bright)" strokeWidth="2.75" filter="url(#itw-glow)" />

              {/* crest / trough auto tracker */}
              {crestTroughTrackerOn &&
                crestsA.map((x, i) => (
                  <circle key={`c${i}`} cx={toPx(x)} cy={toPy(waveA.amplitude)} r="4" fill="var(--itw-purple-bright)" filter="url(#itw-glow)" />
                ))}
              {crestTroughTrackerOn &&
                troughsA.map((x, i) => (
                  <circle key={`t${i}`} cx={toPx(x)} cy={toPy(-waveA.amplitude)} r="4" fill="#ff8ac2" filter="url(#itw-glow)" />
                ))}

              {/* identify overlays */}
              {activeTool === "identify" && anchorCrest != null && (
                <circle
                  cx={toPx(anchorCrest)}
                  cy={toPy(waveY(waveA, anchorCrest, time))}
                  r="7"
                  fill="transparent"
                  stroke="var(--itw-purple-bright)"
                  strokeWidth="2"
                  style={{ cursor: "pointer" }}
                  opacity={selectedPart === "crest" ? 1 : 0.55}
                  onClick={(e) => { e.stopPropagation(); setSelectedPart("crest"); }}
                />
              )}
              {activeTool === "identify" && anchorTrough != null && (
                <circle
                  cx={toPx(anchorTrough)}
                  cy={toPy(waveY(waveA, anchorTrough, time))}
                  r="7"
                  fill="transparent"
                  stroke="#ff8ac2"
                  strokeWidth="2"
                  style={{ cursor: "pointer" }}
                  opacity={selectedPart === "trough" ? 1 : 0.55}
                  onClick={(e) => { e.stopPropagation(); setSelectedPart("trough"); }}
                />
              )}
              {activeTool === "identify" && anchorCrest != null && (
                <g style={{ cursor: "pointer" }} onClick={(e) => { e.stopPropagation(); clickAmplitudeBracket(); }} opacity={selectedPart === "amplitude" ? 1 : 0.65}>
                  <line x1={toPx(anchorCrest) - 26} y1={EQ_Y} x2={toPx(anchorCrest) - 26} y2={toPy(waveA.amplitude)} stroke="var(--itw-cyan)" strokeWidth="2" markerEnd="url(#arrow)" />
                  <text x={toPx(anchorCrest) - 34} y={(EQ_Y + toPy(waveA.amplitude)) / 2} fontSize="11" fill="var(--itw-cyan)" textAnchor="end" fontFamily="IBM Plex Mono, monospace">A</text>
                </g>
              )}
              {activeTool === "identify" && wlAnchorPair[0] != null && wlAnchorPair[1] != null && (
                <g style={{ cursor: "pointer" }} onClick={(e) => { e.stopPropagation(); clickWavelengthBracket(); }} opacity={selectedPart === "wavelength" ? 1 : 0.65}>
                  <line x1={toPx(wlAnchorPair[0])} y1={PLOT_TOP + 14} x2={toPx(wlAnchorPair[1])} y2={PLOT_TOP + 14} stroke="var(--itw-cyan)" strokeWidth="2" />
                  <line x1={toPx(wlAnchorPair[0])} y1={PLOT_TOP + 8} x2={toPx(wlAnchorPair[0])} y2={PLOT_TOP + 20} stroke="var(--itw-cyan)" strokeWidth="2" />
                  <line x1={toPx(wlAnchorPair[1])} y1={PLOT_TOP + 8} x2={toPx(wlAnchorPair[1])} y2={PLOT_TOP + 20} stroke="var(--itw-cyan)" strokeWidth="2" />
                  <text x={(toPx(wlAnchorPair[0]) + toPx(wlAnchorPair[1])) / 2} y={PLOT_TOP + 8} fontSize="11" fill="var(--itw-cyan)" textAnchor="middle" fontFamily="IBM Plex Mono, monospace">λ</text>
                </g>
              )}

              {/* amplitude meter tool result */}
              {activeTool === "amplitude" && ampMarkX != null && (
                <g>
                  <line x1={toPx(ampMarkX)} y1={EQ_Y} x2={toPx(ampMarkX)} y2={toPy(waveY(waveA, ampMarkX, time))} stroke="var(--itw-cyan)" strokeWidth="2.5" />
                  <circle cx={toPx(ampMarkX)} cy={toPy(waveY(waveA, ampMarkX, time))} r="5" fill="var(--itw-cyan)" />
                  <text x={toPx(ampMarkX) + 10} y={(EQ_Y + toPy(waveY(waveA, ampMarkX, time))) / 2} fontSize="12" fill="var(--itw-cyan)" fontFamily="IBM Plex Mono, monospace">
                    A = {Math.abs(waveY(waveA, ampMarkX, time)).toFixed(2)} cm
                  </text>
                </g>
              )}

              {/* wavelength meter tool result */}
              {activeTool === "wavelength" &&
                wlMarks.map((x, i) => (
                  <circle key={i} cx={toPx(x)} cy={toPy(waveY(waveA, x, time))} r="5" fill="var(--itw-cyan)" />
                ))}
              {activeTool === "wavelength" && wlMarks.length === 2 && (
                <g>
                  <line x1={toPx(wlMarks[0])} y1={PLOT_TOP + 14} x2={toPx(wlMarks[1])} y2={PLOT_TOP + 14} stroke="var(--itw-cyan)" strokeWidth="2" />
                  <text x={(toPx(wlMarks[0]) + toPx(wlMarks[1])) / 2} y={PLOT_TOP + 8} fontSize="12" fill="var(--itw-cyan)" textAnchor="middle" fontFamily="IBM Plex Mono, monospace">
                    λ = {(wlMarks[1] - wlMarks[0]).toFixed(2)} m
                  </text>
                </g>
              )}

              {/* phase marker tool */}
              {activeTool === "phase" &&
                phaseMarks.map((x, i) => (
                  <circle key={i} cx={toPx(x)} cy={toPy(waveY(waveA, x, time))} r="5" fill="#ffb84d" />
                ))}
              {activeTool === "phase" && phaseMarks.length === 2 && (
                <line
                  x1={toPx(phaseMarks[0])} y1={toPy(waveY(waveA, phaseMarks[0], time))}
                  x2={toPx(phaseMarks[1])} y2={toPy(waveY(waveA, phaseMarks[1], time))}
                  stroke="#ffb84d" strokeWidth="1.5" strokeDasharray="3 3"
                />
              )}

              {/* ruler tool */}
              {activeTool === "ruler" && (
                <g>
                  <line x1={toPx(rulerPts[0].x)} y1={toPy(rulerPts[0].y)} x2={toPx(rulerPts[1].x)} y2={toPy(rulerPts[1].y)} stroke="var(--itw-purple-bright)" strokeWidth="1.5" strokeDasharray="4 4" />
                  <line x1={toPx(rulerPts[0].x)} y1={toPy(rulerPts[0].y)} x2={toPx(rulerPts[1].x)} y2={toPy(rulerPts[0].y)} stroke="var(--itw-cyan)" strokeWidth="1.5" opacity="0.7" />
                  <line x1={toPx(rulerPts[1].x)} y1={toPy(rulerPts[0].y)} x2={toPx(rulerPts[1].x)} y2={toPy(rulerPts[1].y)} stroke="#ff8ac2" strokeWidth="1.5" opacity="0.7" />
                  {rulerPts.map((p, i) => (
                    <circle
                      key={i}
                      cx={toPx(p.x)} cy={toPy(p.y)} r="8"
                      fill={i === 0 ? "var(--itw-purple-bright)" : "#ff8ac2"}
                      style={{ cursor: "grab" }}
                      onMouseDown={(e) => { e.stopPropagation(); setDraggingRuler(i); }}
                    />
                  ))}
                  <text x={(toPx(rulerPts[0].x) + toPx(rulerPts[1].x)) / 2} y={toPy(rulerPts[0].y) + 16} fontSize="11" fill="var(--itw-cyan)" textAnchor="middle" fontFamily="IBM Plex Mono, monospace">Δx = {rulerDx.toFixed(2)} m</text>
                  <text x={toPx(rulerPts[1].x) + 10} y={(toPy(rulerPts[0].y) + toPy(rulerPts[1].y)) / 2} fontSize="11" fill="#ff8ac2" fontFamily="IBM Plex Mono, monospace">Δy = {rulerDy.toFixed(2)} cm</text>
                </g>
              )}

              {/* cursor coordinate readout */}
              {precisionOn && hoverCoord && (
                <text x={PLOT_RIGHT} y={PLOT_TOP - 12} fontSize="11" fill="var(--itw-cyan)" textAnchor="end" fontFamily="IBM Plex Mono, monospace">
                  X = {hoverCoord.x.toFixed(2)} m &nbsp; Y = {hoverCoord.y.toFixed(2)} cm
                </text>
              )}
            </svg>
          </div>

          <div className="itw-feedback">{feedback}</div>
        </div>

        {/* SIDE PANELS */}
        <div className="itw-side">
          {/* Controls */}
          <div className="itw-panel">
            <p className="itw-panel-title">Kontrol Gelombang{dualMode ? " A" : ""}</p>
            <ParamSlider label="Amplitude" symbol="A" value={waveA.amplitude} unit="cm" min={0.5} max={5} step={0.1} onChange={(v) => setWaveA((w) => ({ ...w, amplitude: v }))} />
            <ParamSlider label="Wavelength" symbol="λ" value={waveA.wavelength} unit="m" min={1} max={8} step={0.1} onChange={(v) => setWaveA((w) => ({ ...w, wavelength: v }))} />
            <ParamSlider label="Frequency" symbol="f" value={waveA.frequency} unit="Hz" min={0.2} max={3} step={0.1} onChange={(v) => setWaveA((w) => ({ ...w, frequency: v }))} />
            <ParamSlider label="Phase" symbol="φ" value={(waveA.phase * 180) / Math.PI} unit="°" min={0} max={360} step={5} onChange={(v) => setWaveA((w) => ({ ...w, phase: (v * Math.PI) / 180 }))} />
          </div>

          {dualMode && (
            <div className="itw-panel">
              <p className="itw-panel-title" style={{ color: "var(--itw-cyan)" }}>Kontrol Gelombang B</p>
              <ParamSlider accent="cyan" label="Amplitude" symbol="A" value={waveB.amplitude} unit="cm" min={0.5} max={5} step={0.1} onChange={(v) => setWaveB((w) => ({ ...w, amplitude: v }))} />
              <ParamSlider accent="cyan" label="Wavelength" symbol="λ" value={waveB.wavelength} unit="m" min={1} max={8} step={0.1} onChange={(v) => setWaveB((w) => ({ ...w, wavelength: v }))} />
              <ParamSlider accent="cyan" label="Frequency" symbol="f" value={waveB.frequency} unit="Hz" min={0.2} max={3} step={0.1} onChange={(v) => setWaveB((w) => ({ ...w, frequency: v }))} />
              <ParamSlider accent="cyan" label="Phase" symbol="φ" value={(waveB.phase * 180) / Math.PI} unit="°" min={0} max={360} step={5} onChange={(v) => setWaveB((w) => ({ ...w, phase: (v * Math.PI) / 180 }))} />
            </div>
          )}

          {/* Display toggles */}
          <div className="itw-panel">
            <p className="itw-panel-title">Tampilan Instrumen</p>
            <div className="itw-toggles">
              <ToggleSwitch checked={gridOn} onChange={setGridOn} label="Grid Koordinat" />
              <ToggleSwitch checked={equilibriumTrackerOn} onChange={setEquilibriumTrackerOn} label="Equilibrium Tracker" />
              <ToggleSwitch checked={crestTroughTrackerOn} onChange={setCrestTroughTrackerOn} label="Crest & Trough Tracker" />
              <ToggleSwitch checked={precisionOn} onChange={(v) => { setPrecisionOn(v); if (!v) setZoom(1); }} label="Precision Measurement" />
              <ToggleSwitch checked={dualMode} onChange={setDualMode} label="Dual Wave Mode" />
              <ToggleSwitch checked={showAnalyzer} onChange={setShowAnalyzer} label="Wave Analyzer Panel" />
            </div>
          </div>

          {/* Info panel */}
          <div className="itw-panel">
            <p className="itw-panel-title">Panel Informasi</p>
            <div className="itw-info-card">
              {selectedPart ? (
                <>
                  <p className="itw-info-name">{CONCEPTS[selectedPart].title}</p>
                  <p className="itw-info-body">{CONCEPTS[selectedPart].body}</p>
                  {selectedPart === "amplitude" && <p className="itw-info-value">A = {waveA.amplitude.toFixed(2)} cm</p>}
                  {selectedPart === "wavelength" && <p className="itw-info-value">λ = {waveA.wavelength.toFixed(2)} m</p>}
                  {selectedPart === "equilibrium" && <p className="itw-info-value">y = 0</p>}
                </>
              ) : (
                <p className="itw-info-empty">Pilih alat "Identifikasi" lalu klik puncak, lembah, garis setimbang, amplitudo, atau panjang gelombang pada visualisasi untuk melihat penjelasannya di sini.</p>
              )}
            </div>
          </div>

          {/* Comparison panel (dual wave) */}
          {dualMode && (
            <div className="itw-panel">
              <p className="itw-panel-title">Comparison Mode</p>
              <div className="itw-compare-chips">
                {["amplitude", "wavelength", "frequency"].map((c) => (
                  <button key={c} className={`itw-chip${compareFocus === c ? " itw-chip-active" : ""}`} onClick={() => setCompareFocus(c)}>
                    {c === "amplitude" ? "Compare Amplitude" : c === "wavelength" ? "Compare Wavelength" : "Compare Frequency"}
                  </button>
                ))}
              </div>
              <div className="itw-compare-row" style={{ opacity: compareFocus === "amplitude" ? 1 : 0.5 }}>
                <span style={{ color: "var(--itw-muted)" }}>Amplitude</span>
                <span className="itw-cwave-a">{waveA.amplitude.toFixed(1)} cm</span>
                <span className="itw-cwave-b">{waveB.amplitude.toFixed(1)} cm</span>
              </div>
              <div className="itw-compare-row" style={{ opacity: compareFocus === "wavelength" ? 1 : 0.5 }}>
                <span style={{ color: "var(--itw-muted)" }}>Wavelength</span>
                <span className="itw-cwave-a">{waveA.wavelength.toFixed(1)} m</span>
                <span className="itw-cwave-b">{waveB.wavelength.toFixed(1)} m</span>
              </div>
              <div className="itw-compare-row" style={{ opacity: compareFocus === "frequency" ? 1 : 0.5 }}>
                <span style={{ color: "var(--itw-muted)" }}>Frequency</span>
                <span className="itw-cwave-a">{waveA.frequency.toFixed(1)} Hz</span>
                <span className="itw-cwave-b">{waveB.frequency.toFixed(1)} Hz</span>
              </div>
            </div>
          )}

          {/* Full wave analyzer */}
          {showAnalyzer && (
            <div className="itw-panel">
              <p className="itw-panel-title">Wave Analyzer</p>
              <AnalyzerRow label="Amplitude" symbol="A" value={`${waveA.amplitude.toFixed(2)} cm`} />
              <AnalyzerRow label="Wavelength" symbol="λ" value={`${waveA.wavelength.toFixed(2)} m`} />
              <AnalyzerRow label="Frequency" symbol="f" value={`${waveA.frequency.toFixed(2)} Hz`} />
              <AnalyzerRow label="Period" symbol="T" value={`${derivedA.period.toFixed(2)} s`} />
              <AnalyzerRow label="Wave Speed" symbol="v" value={`${derivedA.speed.toFixed(2)} m/s`} />
              <AnalyzerRow label="Phase" symbol="φ" value={`${((waveA.phase * 180) / Math.PI).toFixed(0)}°`} />
              {dualMode && (
                <>
                  <div style={{ height: 8 }} />
                  <p className="itw-panel-title" style={{ color: "var(--itw-cyan)" }}>Wave B</p>
                  <AnalyzerRow label="Amplitude" symbol="A" value={`${waveB.amplitude.toFixed(2)} cm`} />
                  <AnalyzerRow label="Wavelength" symbol="λ" value={`${waveB.wavelength.toFixed(2)} m`} />
                  <AnalyzerRow label="Frequency" symbol="f" value={`${waveB.frequency.toFixed(2)} Hz`} />
                  <AnalyzerRow label="Period" symbol="T" value={`${derivedB.period.toFixed(2)} s`} />
                  <AnalyzerRow label="Wave Speed" symbol="v" value={`${derivedB.speed.toFixed(2)} m/s`} />
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
