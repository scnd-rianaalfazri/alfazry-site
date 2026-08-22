import React, { useState, useRef, useMemo, useCallback, useEffect } from "react";
import {
  ComposedChart, Line, Scatter, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, ZAxis,
} from "recharts";
import { Plus, Minus, RotateCcw, Trash2, X, ChevronDown, ChevronUp } from "lucide-react";

/* ==========================================================================
   PHYSICS CONSTANTS & UTILITIES  (utils/physics.js + potential.js + electricField.js)
   ========================================================================== */

const K = 8.99e9; // N·m²/C²
const MIN_R = 0.12; // m — numerical safety floor, prevents Infinity/NaN
const MAX_ABS_V_HEATMAP = 1; // placeholder, recomputed dynamically

function distance(ax, ay, bx, by) {
  return Math.hypot(ax - bx, ay - by);
}

// Potential from a single charge at a point, with safe minimum radius
function potentialFromCharge(q, cx, cy, x, y) {
  const r = Math.max(distance(cx, cy, x, y), MIN_R);
  return (K * q) / r;
}

// Total potential from all charges (superposition, scalar sum) + reference offset
function totalPotential(charges, x, y, refOffset = 0) {
  let v = 0;
  for (const c of charges) v += potentialFromCharge(c.q, c.x, c.y, x, y);
  return v - refOffset;
}

// Electric field vector from a single charge (points away from + charge)
function fieldFromCharge(q, cx, cy, x, y) {
  const dx = x - cx, dy = y - cy;
  const r = Math.max(Math.hypot(dx, dy), MIN_R);
  const mag = (K * q) / (r * r);
  return { ex: (mag * dx) / r, ey: (mag * dy) / r };
}

function totalField(charges, x, y) {
  let ex = 0, ey = 0;
  for (const c of charges) {
    const f = fieldFromCharge(c.q, c.x, c.y, x, y);
    ex += f.ex; ey += f.ey;
  }
  return { ex, ey };
}

// Radius of the equipotential circle around ONE charge for a target V (single-charge mode)
function radiusForPotential(q, V) {
  if (q === 0 || V === 0) return null;
  if (Math.sign(q) !== Math.sign(V)) return null;
  return Math.abs((K * q) / V);
}

/* ---------------- Marching squares (general contour tracer) ---------------- */
// Traces contour segments for a scalar field sampled on a regular grid.
function marchingSquares(values, xs, ys, level) {
  const segs = [];
  const nx = xs.length, ny = ys.length;
  const interp = (x1, y1, v1, x2, y2, v2) => {
    const t = (level - v1) / (v2 - v1);
    return [x1 + t * (x2 - x1), y1 + t * (y2 - y1)];
  };
  for (let j = 0; j < ny - 1; j++) {
    for (let i = 0; i < nx - 1; i++) {
      const v0 = values[j][i];         // top-left
      const v1 = values[j][i + 1];     // top-right
      const v2 = values[j + 1][i + 1]; // bottom-right
      const v3 = values[j + 1][i];     // bottom-left
      const b0 = v0 >= level ? 1 : 0;
      const b1 = v1 >= level ? 1 : 0;
      const b2 = v2 >= level ? 1 : 0;
      const b3 = v3 >= level ? 1 : 0;
      const caseIdx = (b0 << 3) | (b1 << 2) | (b2 << 1) | b3;
      if (caseIdx === 0 || caseIdx === 15) continue;

      const xL = xs[i], xR = xs[i + 1], yT = ys[j], yB = ys[j + 1];
      const top = () => interp(xL, yT, v0, xR, yT, v1);
      const right = () => interp(xR, yT, v1, xR, yB, v2);
      const bottom = () => interp(xL, yB, v3, xR, yB, v2);
      const left = () => interp(xL, yT, v0, xL, yB, v3);

      const pushSeg = (pA, pB) => segs.push([pA[0], pA[1], pB[0], pB[1]]);

      switch (caseIdx) {
        case 1: case 14: pushSeg(left(), bottom()); break;
        case 2: case 13: pushSeg(bottom(), right()); break;
        case 3: case 12: pushSeg(left(), right()); break;
        case 4: case 11: pushSeg(top(), right()); break;
        case 6: case 9: pushSeg(top(), bottom()); break;
        case 7: case 8: pushSeg(left(), top()); break;
        case 5: pushSeg(left(), top()); pushSeg(bottom(), right()); break;
        case 10: pushSeg(top(), right()); pushSeg(left(), bottom()); break;
        default: break;
      }
    }
  }
  return segs;
}

/* ---------------- Formatting (utils/formatting.js + unitConversion.js) ---------------- */

const SUP = { "-": "⁻", 0: "⁰", 1: "¹", 2: "²", 3: "³", 4: "⁴", 5: "⁵", 6: "⁶", 7: "⁷", 8: "⁸", 9: "⁹" };
function toSuperscript(n) {
  return String(n).split("").map((c) => SUP[c] ?? c).join("");
}

function toSci(value, sigDigits = 3) {
  if (value === 0) return { mantissa: "0", exp: 0 };
  const exp = Math.floor(Math.log10(Math.abs(value)));
  const mantissa = value / Math.pow(10, exp);
  return { mantissa: mantissa.toFixed(sigDigits - 1), exp };
}

function formatNumber(value, sci, decimals = 2) {
  if (!isFinite(value)) return "—";
  if (sci) {
    const { mantissa, exp } = toSci(value);
    return `${mantissa} × 10${toSuperscript(exp)}`;
  }
  return value.toFixed(decimals);
}

// Distance: internal meters -> display unit
const DIST_FACTORS = { m: 1, cm: 100, mm: 1000 };
function formatDistance(m, unit, sci) {
  const v = m * DIST_FACTORS[unit];
  return `${formatNumber(v, sci, unit === "m" ? 3 : 1)} ${unit}`;
}

// Charge: internal Coulombs -> display unit
const CHARGE_FACTORS = { C: 1, "μC": 1e6, nC: 1e9 };
function formatCharge(C, unit, sci) {
  const v = C * CHARGE_FACTORS[unit];
  const sign = v >= 0 ? "+" : "";
  return `${sign}${formatNumber(v, sci, 2)} ${unit}`;
}

// Potential: internal Volts -> display unit ('auto' picks V or kV)
function formatPotential(V, unit, sci) {
  let u = unit, v = V;
  if (unit === "auto") u = Math.abs(V) >= 1000 ? "kV" : "V";
  v = u === "kV" ? V / 1000 : V;
  const sign = v >= 0 ? "+" : "";
  return `${sign}${formatNumber(v, sci, 2)} ${u}`;
}

/* ==========================================================================
   VISUAL CONSTANTS
   ========================================================================== */

// Matches src/index.css @theme tokens: --color-violet-glow, --color-cyan-core,
// --color-space, --color-panel — reuse the site's existing signature palette.
const COLORS = {
  bg: "#05060f",        // --color-space
  panel: "#0b0e1f",     // --color-panel
  panelBorder: "rgba(255,255,255,0.1)",
  graphite: "#0f1224",
  text: "#f5f5fa",
  textDim: "#94a3b8",
  purple: "#b26bff",    // --color-violet-glow
  purpleDim: "#8b3bff", // --color-violet-core
  cyan: "#22d3ee",      // --color-cyan-core
  cyanDim: "#0e93ab",
  negative: "#22d3ee",  // negative charges use cyan, not a 3rd hue — keeps the 2-color brand system
  grid: "rgba(139,59,255,0.08)",
};

const VIEW_W = 700, VIEW_H = 460;
const ORIGIN = { x: VIEW_W / 2, y: VIEW_H / 2 };
const SCALE = 52; // px per meter
const HALF_W_M = ORIGIN.x / SCALE;
const HALF_H_M = ORIGIN.y / SCALE;

const worldToPx = (x, y) => ({ x: ORIGIN.x + x * SCALE, y: ORIGIN.y - y * SCALE });
const pxToWorld = (px, py) => ({ x: (px - ORIGIN.x) / SCALE, y: (ORIGIN.y - py) / SCALE });

const CONTOUR_LEVELS_KV = [5, 10, 20, 40, 80]; // kV magnitude rings

/* ==========================================================================
   PRESETS
   ========================================================================== */

const PRESETS = {
  single_pos: { label: "Single Positive Charge", charges: [{ id: 1, q: 5e-6, x: 0, y: 0 }], mode: "single" },
  single_neg: { label: "Single Negative Charge", charges: [{ id: 1, q: -5e-6, x: 0, y: 0 }], mode: "single" },
  equal_opposite: {
    label: "Equal Opposite Charges",
    charges: [{ id: 1, q: 5e-6, x: -1.5, y: 0 }, { id: 2, q: -5e-6, x: 1.5, y: 0 }],
    mode: "two",
  },
  equal_like: {
    label: "Equal Like Charges",
    charges: [{ id: 1, q: 5e-6, x: -1.5, y: 0 }, { id: 2, q: 5e-6, x: 1.5, y: 0 }],
    mode: "two",
  },
  unequal: {
    label: "Unequal Charges",
    charges: [{ id: 1, q: 8e-6, x: -1.5, y: 0.5 }, { id: 2, q: -3e-6, x: 1.6, y: -0.6 }],
    mode: "two",
  },
};

const DEFAULT_CHARGES = [{ id: 1, q: 5e-6, x: 0, y: 0 }];
const DEFAULT_P = { x: 2, y: 1 };
const DEFAULT_A = { x: -2, y: 1.4 };
const DEFAULT_B = { x: 2.2, y: -1.2 };

/* ==========================================================================
   SMALL UI PRIMITIVES
   ========================================================================== */

function Toggle({ label, checked, onChange, hint }) {
  return (
    <label className="flex items-center justify-between gap-3 py-1.5 cursor-pointer select-none group">
      <span className="text-[13px] text-white/80 group-hover:text-white transition-colors">{label}</span>
      <button
        role="switch"
        aria-checked={checked}
        aria-label={label}
        onClick={() => onChange(!checked)}
        className={`relative w-9 h-5 rounded-full shrink-0 transition-colors ${checked ? "bg-[#b26bff]" : "bg-zinc-700"}`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform ${checked ? "translate-x-4" : ""}`}
        />
      </button>
    </label>
  );
}

function SectionLabel({ children }) {
  return <div className="font-mono text-[11px] tracking-wider text-white/40 uppercase font-medium mb-2">{children}</div>;
}

function DataRow({ label, value, accent }) {
  return (
    <div className="flex items-center justify-between py-1">
      <span className="text-[12px] text-white/40">{label}</span>
      <span
        className="text-[13px] font-mono tabular-nums"
        style={{ color: accent || COLORS.text }}
      >
        {value}
      </span>
    </div>
  );
}

function TabButton({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 py-2.5 text-[12px] font-medium tracking-wide uppercase transition-colors border-b-2 ${
        active ? "text-[#b26bff] border-[#b26bff]" : "text-white/40 border-transparent hover:text-white/80"
      }`}
    >
      {children}
    </button>
  );
}

/* ==========================================================================
   CANVAS FIELD LAYER  (heatmap + contours + field arrows via <canvas>)
   ========================================================================== */

function FieldCanvas({ charges, refOffset, display, obsV, width, height }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    const ctx = canvas.getContext("2d");
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, width, height);

    // Build sample grid in meters
    const gridNx = 90, gridNy = Math.round((gridNx * height) / width);
    const xs = new Array(gridNx), ys = new Array(gridNy);
    for (let i = 0; i < gridNx; i++) xs[i] = -HALF_W_M + (2 * HALF_W_M * i) / (gridNx - 1);
    for (let j = 0; j < gridNy; j++) ys[j] = HALF_H_M - (2 * HALF_H_M * j) / (gridNy - 1);

    const values = new Array(gridNy);
    let maxAbs = 1e-9;
    for (let j = 0; j < gridNy; j++) {
      values[j] = new Array(gridNx);
      for (let i = 0; i < gridNx; i++) {
        const v = totalPotential(charges, xs[i], ys[j], refOffset);
        values[j][i] = v;
        if (isFinite(v)) maxAbs = Math.max(maxAbs, Math.min(Math.abs(v), 2e5));
      }
    }

    // ---- Heatmap ----
    if (display.heatmap) {
      const cellW = width / (gridNx - 1);
      const cellH = height / (gridNy - 1);
      for (let j = 0; j < gridNy - 1; j++) {
        for (let i = 0; i < gridNx - 1; i++) {
          const v = values[j][i];
          const t = Math.min(Math.abs(v) / maxAbs, 1);
          let r, g, b;
          if (v >= 0) {
            // dark graphite -> neon purple
            r = 18 + t * (178 - 18);
            g = 18 + t * (107 - 18);
            b = 26 + t * (255 - 26);
          } else {
            // dark graphite -> cyan
            r = 18 + t * (63 - 18);
            g = 18 + t * (224 - 18);
            b = 26 + t * (240 - 26);
          }
          ctx.fillStyle = `rgba(${r | 0},${g | 0},${b | 0},${0.16 + 0.42 * t})`;
          ctx.fillRect(i * cellW - 1, j * cellH - 1, cellW + 2, cellH + 2);
        }
      }
    }

    // ---- Grid ----
    if (display.grid) {
      ctx.strokeStyle = COLORS.grid;
      ctx.lineWidth = 1;
      for (let x = -Math.floor(HALF_W_M); x <= Math.floor(HALF_W_M); x++) {
        const p = worldToPx(x, 0);
        ctx.beginPath(); ctx.moveTo(p.x, 0); ctx.lineTo(p.x, height); ctx.stroke();
      }
      for (let y = -Math.floor(HALF_H_M); y <= Math.floor(HALF_H_M); y++) {
        const p = worldToPx(0, y);
        ctx.beginPath(); ctx.moveTo(0, p.y); ctx.lineTo(width, p.y); ctx.stroke();
      }
      // axes
      ctx.strokeStyle = "#33333f";
      ctx.lineWidth = 1.4;
      ctx.beginPath(); ctx.moveTo(ORIGIN.x, 0); ctx.lineTo(ORIGIN.x, height); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, ORIGIN.y); ctx.lineTo(width, ORIGIN.y); ctx.stroke();
    }

    // ---- Contours ----
    if (display.contours) {
      const levels = [];
      for (const kv of CONTOUR_LEVELS_KV) { levels.push(kv * 1000); levels.push(-kv * 1000); }
      // include the observation point's own level, highlighted, if equipotential explorer wants it (handled by caller passing display.equipotential)
      for (const level of levels) {
        const segs = marchingSquares(values, xs, ys, level);
        if (!segs.length) continue;
        const isNearObs = Math.abs(Math.abs(level) - Math.abs(obsV)) / Math.max(Math.abs(level), 1) < 0.06;
        ctx.strokeStyle = isNearObs ? COLORS.purple : "rgba(178,107,255,0.35)";
        ctx.lineWidth = isNearObs ? 2.4 : 1;
        ctx.beginPath();
        for (const [x1, y1, x2, y2] of segs) {
          const p1 = worldToPx(x1, y1), p2 = worldToPx(x2, y2);
          ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y);
        }
        ctx.stroke();
      }
    }

    // ---- Equipotential explorer highlight (contour through obs point's exact V) ----
    if (display.equipotential && isFinite(obsV) && Math.abs(obsV) > 1) {
      const segs = marchingSquares(values, xs, ys, obsV);
      ctx.strokeStyle = COLORS.cyan;
      ctx.lineWidth = 2.6;
      ctx.setLineDash([6, 4]);
      ctx.beginPath();
      for (const [x1, y1, x2, y2] of segs) {
        const p1 = worldToPx(x1, y1), p2 = worldToPx(x2, y2);
        ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y);
      }
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // ---- Electric field arrows ----
    if (display.field) {
      const step = 62;
      ctx.strokeStyle = COLORS.cyan;
      ctx.fillStyle = COLORS.cyan;
      for (let px = step / 2; px < width; px += step) {
        for (let py = step / 2; py < height; py += step) {
          const w = pxToWorld(px, py);
          const { ex, ey } = totalField(charges, w.x, w.y);
          const mag = Math.hypot(ex, ey);
          if (!isFinite(mag) || mag === 0) continue;
          const len = Math.min(10 + Math.log10(1 + mag / 200) * 6, 22);
          const ux = ex / mag, uy = ey / mag;
          const x2 = px + ux * len, y2 = py - uy * len;
          ctx.globalAlpha = 0.85;
          ctx.lineWidth = 1.4;
          ctx.beginPath(); ctx.moveTo(px - ux * len * 0.4, py + uy * len * 0.4); ctx.lineTo(x2, y2); ctx.stroke();
          const ang = Math.atan2(y2 - py, x2 - px);
          ctx.beginPath();
          ctx.moveTo(x2, y2);
          ctx.lineTo(x2 - 5 * Math.cos(ang - 0.4), y2 - 5 * Math.sin(ang - 0.4));
          ctx.lineTo(x2 - 5 * Math.cos(ang + 0.4), y2 - 5 * Math.sin(ang + 0.4));
          ctx.closePath();
          ctx.fill();
          ctx.globalAlpha = 1;
        }
      }
    }
  }, [charges, refOffset, display.heatmap, display.contours, display.grid, display.field, display.equipotential, obsV, width, height]);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />;
}

/* ==========================================================================
   DRAGGABLE MARKER (charge or observation point) — plain div, pointer events
   ========================================================================== */

function DraggableMarker({ x, y, onDrag, children, containerRef, ariaLabel }) {
  const dragging = useRef(false);

  const handlePointerDown = (e) => {
    e.stopPropagation();
    dragging.current = true;
    e.target.setPointerCapture?.(e.pointerId);
  };
  const handlePointerMove = (e) => {
    if (!dragging.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const px = ((e.clientX - rect.left) / rect.width) * VIEW_W;
    const py = ((e.clientY - rect.top) / rect.height) * VIEW_H;
    const w = pxToWorld(px, py);
    const cx = Math.max(-HALF_W_M, Math.min(HALF_W_M, w.x));
    const cy = Math.max(-HALF_H_M, Math.min(HALF_H_M, w.y));
    onDrag(cx, cy);
  };
  const handlePointerUp = () => { dragging.current = false; };

  const p = worldToPx(x, y);
  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={ariaLabel}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onKeyDown={(e) => {
        const step = 0.1;
        if (e.key === "ArrowLeft") onDrag(x - step, y);
        if (e.key === "ArrowRight") onDrag(x + step, y);
        if (e.key === "ArrowUp") onDrag(x, y + step);
        if (e.key === "ArrowDown") onDrag(x, y - step);
      }}
      style={{
        position: "absolute",
        left: `${(p.x / VIEW_W) * 100}%`,
        top: `${(p.y / VIEW_H) * 100}%`,
        transform: "translate(-50%, -50%)",
        touchAction: "none",
        cursor: "grab",
      }}
    >
      {children}
    </div>
  );
}

/* ==========================================================================
   MAIN COMPONENT
   ========================================================================== */

export default function ElectricPotentialLab() {
  // ---- experimentState ----
  const [mode, setMode] = useState("single"); // single | two | multiple
  const [charges, setCharges] = useState(DEFAULT_CHARGES);
  const [obsP, setObsP] = useState(DEFAULT_P);
  const [pointA, setPointA] = useState(DEFAULT_A);
  const [pointB, setPointB] = useState(DEFAULT_B);
  const [referenceMode, setReferenceMode] = useState("infinity"); // infinity | custom
  const [customRef, setCustomRef] = useState({ x: 3.5, y: -3.2 });

  // ---- displayState ----
  const [display, setDisplay] = useState({
    potential: true,
    contours: true,
    heatmap: false,
    field: false,
    grid: true,
    coordinates: false,
    distance: false,
    equipotential: false,
    potentialDiff: false,
    landscape3d: false,
  });

  // ---- dataState ----
  const [measurements, setMeasurements] = useState([]); // {id, r, V}

  // ---- unitState ----
  const [units, setUnits] = useState({ distance: "m", charge: "μC", potential: "auto" });

  // ---- formatState ----
  const [sci, setSci] = useState(false);

  // ---- ui ----
  const [activeTab, setActiveTab] = useState("visualization");
  const [landscapeAngle, setLandscapeAngle] = useState(0.6);
  const canvasRef = useRef(null);

  const refOffset = referenceMode === "custom" ? totalPotential(charges, customRef.x, customRef.y, 0) : 0;

  const r = distance(obsP.x, obsP.y, charges[0]?.x ?? 0, charges[0]?.y ?? 0);
  const V = totalPotential(charges, obsP.x, obsP.y, refOffset);
  const tooClose = charges.some((c) => distance(obsP.x, obsP.y, c.x, c.y) < MIN_R);

  const VA = totalPotential(charges, pointA.x, pointA.y, refOffset);
  const VB = totalPotential(charges, pointB.x, pointB.y, refOffset);

  /* ---------------- mode switching keeps charge count consistent ---------------- */
  const applyMode = (m) => {
    setMode(m);
    if (m === "single" && charges.length !== 1) setCharges([charges[0] || DEFAULT_CHARGES[0]]);
    if (m === "two" && charges.length < 2) {
      setCharges([
        charges[0] || { id: 1, q: 5e-6, x: -1.5, y: 0 },
        { id: 2, q: -5e-6, x: 1.5, y: 0 },
      ]);
    } else if (m === "two" && charges.length > 2) {
      setCharges(charges.slice(0, 2));
    }
    if (m === "multiple" && charges.length < 3) {
      const extra = [];
      for (let i = charges.length; i < 3; i++) {
        extra.push({ id: Date.now() + i, q: 3e-6 * (i % 2 === 0 ? 1 : -1), x: (i - 1) * 1.4, y: 1.2 - i * 0.6 });
      }
      setCharges([...charges, ...extra]);
    }
  };

  const updateCharge = (id, patch) => setCharges((cs) => cs.map((c) => (c.id === id ? { ...c, ...patch } : c)));
  const addCharge = () =>
    setCharges((cs) => [...cs, { id: Date.now(), q: 3e-6, x: (Math.random() - 0.5) * 3, y: (Math.random() - 0.5) * 3 }]);
  const removeCharge = (id) => setCharges((cs) => (cs.length > 1 ? cs.filter((c) => c.id !== id) : cs));

  const applyPreset = (key) => {
    const preset = PRESETS[key];
    if (!preset) return;
    setMode(preset.mode);
    setCharges(preset.charges.map((c) => ({ ...c })));
    setObsP(DEFAULT_P);
  };

  const resetAll = () => {
    setMode("single");
    setCharges(DEFAULT_CHARGES.map((c) => ({ ...c })));
    setObsP({ ...DEFAULT_P });
    setPointA({ ...DEFAULT_A });
    setPointB({ ...DEFAULT_B });
    setReferenceMode("infinity");
    setDisplay({
      potential: true, contours: true, heatmap: false, field: false, grid: true,
      coordinates: false, distance: false, equipotential: false, potentialDiff: false, landscape3d: false,
    });
    setMeasurements([]);
    setUnits({ distance: "m", charge: "μC", potential: "auto" });
    setSci(false);
    setActiveTab("visualization");
  };

  const recordMeasurement = () => {
    setMeasurements((m) => [...m, { id: Date.now(), r, V }]);
  };

  const setD = (key) => (val) => setDisplay((d) => ({ ...d, [key]: val }));

  // theoretical curve for graph (single-charge mode only)
  const theoreticalCurve = useMemo(() => {
    if (mode !== "single") return [];
    const q = charges[0]?.q ?? 0;
    const pts = [];
    for (let i = 1; i <= 40; i++) {
      const rr = 0.15 + (i / 40) * 5;
      pts.push({ r: rr, theory: (K * q) / rr });
    }
    return pts;
  }, [mode, charges]);

  const scatterData = measurements.map((m) => ({ r: m.r, V: m.V }));

  const chargeColor = (q) => (q >= 0 ? COLORS.purple : COLORS.negative);

  return (
    <div className="w-full flex flex-col rounded-2xl overflow-hidden" style={{ background: COLORS.bg, color: COLORS.text }}>
      {/* HEADER */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b" style={{ borderColor: COLORS.panelBorder }}>
        <div>
          <div className="flex items-center gap-2">
            <span style={{ color: COLORS.purple, fontSize: 18 }}>⚖</span>
            <h1 className="font-display font-bold text-[15px] sm:text-[16px] tracking-wide text-gradient-violet">ELECTRIC POTENTIAL LAB</h1>
          </div>
          <p className="font-mono text-[11px] text-white/40 mt-0.5 ml-6">Menjelajahi Potensial Listrik</p>
        </div>
        <button
          onClick={resetAll}
          aria-label="Reset experiment"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border text-[12px] font-medium hover:bg-white/5 transition-colors"
          style={{ borderColor: COLORS.panelBorder, color: COLORS.textDim }}
        >
          <RotateCcw size={13} /> Reset
        </button>
      </div>

      {/* MAIN ROW */}
      <div className="flex flex-col lg:flex-row gap-4 p-3 sm:p-4">
        {/* CANVAS */}
        <div className="flex-1 min-w-0">
          <div
            ref={canvasRef}
            className="relative w-full rounded-lg overflow-hidden border select-none"
            style={{ aspectRatio: `${VIEW_W}/${VIEW_H}`, background: `linear-gradient(160deg, ${COLORS.graphite}, #0d0d13)`, borderColor: COLORS.panelBorder }}
          >
            <FieldCanvas
              charges={charges}
              refOffset={refOffset}
              display={display}
              obsV={V}
              width={VIEW_W}
              height={VIEW_H}
            />

            {/* distance line(s) */}
            {display.distance && !display.potentialDiff && charges.map((c) => {
              const p1 = worldToPx(c.x, c.y), p2 = worldToPx(obsP.x, obsP.y);
              const mid = { x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 };
              return (
                <svg key={c.id} className="absolute inset-0 pointer-events-none" viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}>
                  <line x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke={COLORS.cyanDim} strokeWidth="1.3" strokeDasharray="4 3" />
                  <text x={mid.x} y={mid.y - 6} fill={COLORS.cyan} fontSize="11" textAnchor="middle" fontFamily="monospace">
                    r = {formatDistance(distance(c.x, c.y, obsP.x, obsP.y), units.distance, sci)}
                  </text>
                </svg>
              );
            })}

            {display.distance && display.potentialDiff && (() => {
              const p1 = worldToPx(pointA.x, pointA.y), p2 = worldToPx(pointB.x, pointB.y);
              return (
                <svg className="absolute inset-0 pointer-events-none" viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}>
                  <line x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke={COLORS.cyanDim} strokeWidth="1.3" strokeDasharray="4 3" />
                </svg>
              );
            })()}

            {/* charges */}
            {charges.map((c) => (
              <DraggableMarker
                key={c.id}
                x={c.x} y={c.y}
                containerRef={canvasRef}
                ariaLabel={`Charge ${c.q >= 0 ? "positive" : "negative"}, drag to move`}
                onDrag={(nx, ny) => updateCharge(c.id, { x: nx, y: ny })}
              >
                <div
                  className="rounded-full flex items-center justify-center font-bold shadow-lg"
                  style={{
                    width: Math.max(20, Math.min(40, 20 + Math.abs(c.q) * 1.6e6)),
                    height: Math.max(20, Math.min(40, 20 + Math.abs(c.q) * 1.6e6)),
                    background: c.q >= 0 ? "radial-gradient(circle at 35% 30%, #d9b4ff, #b26bff)" : "radial-gradient(circle at 35% 30%, #ffb3ce, #ff6b9d)",
                    color: "#0a0a0f",
                    boxShadow: `0 0 14px ${c.q >= 0 ? "rgba(178,107,255,0.55)" : "rgba(255,107,157,0.55)"}`,
                    fontSize: 14,
                  }}
                >
                  {c.q >= 0 ? "+" : "−"}
                </div>
                {display.coordinates && (
                  <div className="absolute left-1/2 top-full -translate-x-1/2 mt-1 text-[10px] font-mono whitespace-nowrap" style={{ color: COLORS.textDim }}>
                    ({c.x.toFixed(1)}, {c.y.toFixed(1)})
                  </div>
                )}
              </DraggableMarker>
            ))}

            {/* observation point P (hidden while potential-difference A/B mode is active) */}
            {!display.potentialDiff && (
              <DraggableMarker x={obsP.x} y={obsP.y} containerRef={canvasRef} ariaLabel="Observation point P, drag to move" onDrag={(nx, ny) => setObsP({ x: nx, y: ny })}>
                <div className="flex flex-col items-center">
                  <div className="w-3.5 h-3.5 rounded-full border-2" style={{ background: COLORS.text, borderColor: COLORS.purple, boxShadow: "0 0 8px rgba(178,107,255,0.7)" }} />
                  <span className="text-[10px] font-mono mt-0.5" style={{ color: COLORS.text }}>P</span>
                  {display.coordinates && (
                    <span className="text-[10px] font-mono whitespace-nowrap" style={{ color: COLORS.textDim }}>
                      ({obsP.x.toFixed(1)}, {obsP.y.toFixed(1)})
                    </span>
                  )}
                </div>
              </DraggableMarker>
            )}

            {/* Points A & B for potential difference */}
            {display.potentialDiff && (
              <>
                <DraggableMarker x={pointA.x} y={pointA.y} containerRef={canvasRef} ariaLabel="Point A, drag to move" onDrag={(nx, ny) => setPointA({ x: nx, y: ny })}>
                  <div className="flex flex-col items-center">
                    <div className="w-3.5 h-3.5 rounded-full border-2" style={{ background: COLORS.text, borderColor: COLORS.cyan, boxShadow: "0 0 8px rgba(63,224,240,0.7)" }} />
                    <span className="text-[10px] font-mono mt-0.5">A</span>
                  </div>
                </DraggableMarker>
                <DraggableMarker x={pointB.x} y={pointB.y} containerRef={canvasRef} ariaLabel="Point B, drag to move" onDrag={(nx, ny) => setPointB({ x: nx, y: ny })}>
                  <div className="flex flex-col items-center">
                    <div className="w-3.5 h-3.5 rounded-full border-2" style={{ background: COLORS.text, borderColor: COLORS.purple, boxShadow: "0 0 8px rgba(178,107,255,0.7)" }} />
                    <span className="text-[10px] font-mono mt-0.5">B</span>
                  </div>
                </DraggableMarker>
              </>
            )}

            {tooClose && (
              <div className="absolute bottom-2 left-2 right-2 text-[11px] px-2 py-1 rounded" style={{ background: "rgba(255,107,157,0.12)", color: COLORS.negative, border: `1px solid ${COLORS.negative}` }}>
                Too close to a charge — using minimum measurable distance ({MIN_R} m).
              </div>
            )}

            <div className="absolute top-2 left-2 text-[10px] text-white/40 font-mono">
              {mode === "single" ? "Drag P to explore the potential." : "Points on the same contour share the same potential."}
            </div>
          </div>

          {display.landscape3d && (
            <Landscape3D charges={charges} refOffset={refOffset} angle={landscapeAngle} setAngle={setLandscapeAngle} />
          )}
        </div>

        {/* REAL-TIME DATA */}
        <div className="w-full lg:w-[280px] shrink-0 rounded-lg border p-4" style={{ background: COLORS.panel, borderColor: COLORS.panelBorder }}>
          <SectionLabel>Real-Time Data</SectionLabel>

          {mode === "single" ? (
            <>
              <div className="mb-3">
                <div className="text-[11px] text-white/40 mb-1">Source Charge</div>
                <div className="text-[17px] font-mono" style={{ color: chargeColor(charges[0]?.q ?? 0) }}>
                  Q = {formatCharge(charges[0]?.q ?? 0, units.charge, sci)}
                </div>
              </div>
              <div className="h-px my-2" style={{ background: COLORS.panelBorder }} />
              <DataRow label="Position x" value={formatDistance(obsP.x, units.distance, sci)} />
              <DataRow label="Position y" value={formatDistance(obsP.y, units.distance, sci)} />
              <DataRow label="Distance r" value={formatDistance(r, units.distance, sci)} accent={COLORS.cyan} />
              <div className="h-px my-2" style={{ background: COLORS.panelBorder }} />
              <div className="text-[11px] text-white/40 mb-1">Potential</div>
              <div className="text-[20px] font-mono font-semibold" style={{ color: V >= 0 ? COLORS.purple : COLORS.negative }}>
                V = {formatPotential(V, units.potential, sci)}
              </div>
            </>
          ) : (
            <>
              {charges.map((c, i) => (
                <div key={c.id} className="mb-2">
                  <DataRow label={`Charge Q${toSubscript(i + 1)}`} value={formatCharge(c.q, units.charge, sci)} accent={chargeColor(c.q)} />
                  <DataRow label={`Distance r${toSubscript(i + 1)}`} value={formatDistance(distance(c.x, c.y, obsP.x, obsP.y), units.distance, sci)} />
                  <DataRow label={`Potential V${toSubscript(i + 1)}`} value={formatPotential(totalPotential([c], obsP.x, obsP.y, 0), units.potential, sci)} />
                </div>
              ))}
              <div className="h-px my-2" style={{ background: COLORS.panelBorder }} />
              <div className="text-[11px] text-white/40 mb-1">Total Potential at P</div>
              <div className="text-[19px] font-mono font-semibold" style={{ color: V >= 0 ? COLORS.purple : COLORS.negative }}>
                V<span className="text-[12px] align-sub">total</span> = {formatPotential(V, units.potential, sci)}
              </div>
              <p className="text-[10px] text-white/40 mt-2">Potential is a scalar — total is a plain sum, not a vector sum.</p>
            </>
          )}

          {display.potentialDiff && (
            <>
              <div className="h-px my-3" style={{ background: COLORS.panelBorder }} />
              <SectionLabel>Potential Difference</SectionLabel>
              <DataRow label="V at A" value={formatPotential(VA, units.potential, sci)} accent={COLORS.cyan} />
              <DataRow label="V at B" value={formatPotential(VB, units.potential, sci)} accent={COLORS.purple} />
              <div className="text-[11px] text-white/40 mt-2 mb-1">ΔV = V_B − V_A</div>
              <div className="text-[18px] font-mono font-semibold" style={{ color: COLORS.text }}>
                {formatPotential(VB - VA, units.potential, sci)}
              </div>
            </>
          )}

          {display.equipotential && (
            <>
              <div className="h-px my-3" style={{ background: COLORS.panelBorder }} />
              <SectionLabel>Equipotential Explorer</SectionLabel>
              <DataRow label="Selected potential" value={formatPotential(V, units.potential, sci)} accent={COLORS.cyan} />
              <p className="text-[10px] text-white/40 mt-1">All points on this contour have the same potential.</p>
            </>
          )}
        </div>
      </div>

      {/* TABS */}
      <div className="border-t" style={{ borderColor: COLORS.panelBorder }}>
        <div className="flex px-2">
          <TabButton active={activeTab === "visualization"} onClick={() => setActiveTab("visualization")}>Visualization</TabButton>
          <TabButton active={activeTab === "experiment"} onClick={() => setActiveTab("experiment")}>Experiment</TabButton>
          <TabButton active={activeTab === "analysis"} onClick={() => setActiveTab("analysis")}>Analysis</TabButton>
          <TabButton active={activeTab === "advanced"} onClick={() => setActiveTab("advanced")}>Advanced</TabButton>
        </div>

        <div className="p-4 sm:p-5" style={{ background: COLORS.panel }}>
          {activeTab === "visualization" && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-1 max-w-3xl">
              <div>
                <SectionLabel>Display</SectionLabel>
                <Toggle label="Potential" checked={display.potential} onChange={setD("potential")} />
                <Toggle label="Contours" checked={display.contours} onChange={setD("contours")} />
                <Toggle label="Heatmap" checked={display.heatmap} onChange={setD("heatmap")} />
              </div>
              <div>
                <SectionLabel>Overlays</SectionLabel>
                <Toggle label="Distance" checked={display.distance} onChange={setD("distance")} />
                <Toggle label="Grid" checked={display.grid} onChange={setD("grid")} />
                <Toggle label="Coordinates" checked={display.coordinates} onChange={setD("coordinates")} />
              </div>
              {display.heatmap && (
                <div>
                  <SectionLabel>Heatmap Legend</SectionLabel>
                  <div className="h-3 w-full rounded-full" style={{ background: `linear-gradient(90deg, ${COLORS.cyan}, ${COLORS.graphite}, ${COLORS.purple})` }} />
                  <div className="flex justify-between text-[10px] text-white/40 mt-1">
                    <span>Negative (magnitude)</span><span>0</span><span>Positive (magnitude)</span>
                  </div>
                  <p className="text-[10px] text-white/40 mt-1">Color intensity shows |V|; hue shows sign — not "purple = positive" universally.</p>
                </div>
              )}
            </div>
          )}

          {activeTab === "experiment" && (
            <div className="grid lg:grid-cols-2 gap-6">
              <div>
                <SectionLabel>Charge Configuration</SectionLabel>
                <div className="flex gap-2 mb-4 flex-wrap">
                  {["single", "two", "multiple"].map((m) => (
                    <button
                      key={m}
                      onClick={() => applyMode(m)}
                      className="px-3 py-1.5 rounded-md text-[12px] border transition-colors capitalize"
                      style={{
                        borderColor: mode === m ? COLORS.purple : COLORS.panelBorder,
                        color: mode === m ? COLORS.purple : COLORS.textDim,
                        background: mode === m ? "rgba(178,107,255,0.08)" : "transparent",
                      }}
                    >
                      {m === "single" ? "Single Charge" : m === "two" ? "Two Charges" : "Multiple Charges"}
                    </button>
                  ))}
                </div>

                {charges.map((c, i) => (
                  <div key={c.id} className="mb-4 p-3 rounded-md border" style={{ borderColor: COLORS.panelBorder }}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[12px] font-medium" style={{ color: chargeColor(c.q) }}>
                        Charge {i + 1} {c.q >= 0 ? "(+)" : "(−)"}
                      </span>
                      {mode === "multiple" && charges.length > 3 && (
                        <button onClick={() => removeCharge(c.id)} aria-label={`Remove charge ${i + 1}`} className="text-white/40 hover:text-[#ff6b9d]">
                          <X size={14} />
                        </button>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        aria-label="Decrease charge"
                        onClick={() => updateCharge(c.id, { q: Math.max(-10e-6, c.q - 0.25e-6) })}
                        className="w-7 h-7 rounded-md border flex items-center justify-center hover:bg-white/5"
                        style={{ borderColor: COLORS.panelBorder }}
                      >
                        <Minus size={12} />
                      </button>
                      <input
                        type="range" min={-10} max={10} step={0.1}
                        value={c.q * 1e6}
                        onChange={(e) => updateCharge(c.id, { q: parseFloat(e.target.value) * 1e-6 })}
                        className="flex-1 accent-[#b26bff]"
                        aria-label={`Charge magnitude ${i + 1}`}
                      />
                      <button
                        aria-label="Increase charge"
                        onClick={() => updateCharge(c.id, { q: Math.min(10e-6, c.q + 0.25e-6) })}
                        className="w-7 h-7 rounded-md border flex items-center justify-center hover:bg-white/5"
                        style={{ borderColor: COLORS.panelBorder }}
                      >
                        <Plus size={12} />
                      </button>
                      <span className="text-[12px] font-mono w-24 text-right" style={{ color: chargeColor(c.q) }}>
                        {formatCharge(c.q, units.charge, sci)}
                      </span>
                    </div>
                  </div>
                ))}
                {mode === "multiple" && (
                  <button
                    onClick={addCharge}
                    className="flex items-center gap-1.5 text-[12px] px-3 py-1.5 rounded-md border hover:bg-white/5"
                    style={{ borderColor: COLORS.panelBorder, color: COLORS.textDim }}
                  >
                    <Plus size={13} /> Add charge
                  </button>
                )}
              </div>

              <div>
                <SectionLabel>Experiment Presets</SectionLabel>
                <p className="text-[11px] text-white/40 mb-2">Presets only set an initial configuration — everything stays adjustable afterward.</p>
                <div className="flex flex-col gap-1.5">
                  {Object.entries(PRESETS).map(([key, p]) => (
                    <button
                      key={key}
                      onClick={() => applyPreset(key)}
                      className="text-left px-3 py-2 rounded-md border text-[12px] hover:bg-white/5 transition-colors"
                      style={{ borderColor: COLORS.panelBorder, color: COLORS.textDim }}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "analysis" && (
            <div className="grid lg:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <SectionLabel>Potential vs Distance</SectionLabel>
                </div>
                <div className="h-56 rounded-md border p-2" style={{ borderColor: COLORS.panelBorder }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={mode === "single" ? theoreticalCurve : []} margin={{ top: 8, right: 12, bottom: 4, left: 4 }}>
                      <CartesianGrid stroke={COLORS.grid} />
                      <XAxis dataKey="r" type="number" domain={[0, 5]} tick={{ fontSize: 10, fill: COLORS.textDim }} label={{ value: "r (m)", position: "insideBottom", offset: -2, fontSize: 10, fill: COLORS.textDim }} />
                      <YAxis tick={{ fontSize: 10, fill: COLORS.textDim }} tickFormatter={(v) => (Math.abs(v) >= 1000 ? `${(v / 1000).toFixed(0)}k` : v)} label={{ value: "V (V)", angle: -90, position: "insideLeft", fontSize: 10, fill: COLORS.textDim }} />
                      <ZAxis range={[50, 50]} />
                      <Tooltip
                        contentStyle={{ background: COLORS.graphite, border: `1px solid ${COLORS.panelBorder}`, fontSize: 11 }}
                        formatter={(val, name) => [typeof val === "number" ? val.toFixed(1) : val, name === "theory" ? "V (theoretical)" : "V (recorded)"]}
                        labelFormatter={(l) => `r = ${Number(l).toFixed(2)} m`}
                      />
                      {mode === "single" && <Line type="monotone" dataKey="theory" stroke={COLORS.purpleDim} dot={false} strokeWidth={1.5} isAnimationActive={false} />}
                      <Scatter data={scatterData} dataKey="V" fill={COLORS.cyan} />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex gap-2 mt-2">
                  <button onClick={recordMeasurement} className="px-3 py-1.5 rounded-md text-[12px] font-medium" style={{ background: COLORS.purple, color: "#0a0a0f" }}>
                    Record Point
                  </button>
                  <button onClick={() => setMeasurements([])} className="flex items-center gap-1 px-3 py-1.5 rounded-md border text-[12px]" style={{ borderColor: COLORS.panelBorder, color: COLORS.textDim }}>
                    <Trash2 size={12} /> Clear Graph
                  </button>
                </div>
                <p className="text-[10px] text-white/40 mt-1">Record a measurement to add it to the graph.</p>
              </div>

              <div>
                <SectionLabel>Measurement Table</SectionLabel>
                <div className="rounded-md border overflow-hidden" style={{ borderColor: COLORS.panelBorder }}>
                  <table className="w-full text-[12px]">
                    <thead>
                      <tr className="text-white/40 border-b" style={{ borderColor: COLORS.panelBorder }}>
                        <th className="text-left font-normal py-1.5 px-2 w-10">No</th>
                        <th className="text-left font-normal py-1.5 px-2">Distance r</th>
                        <th className="text-left font-normal py-1.5 px-2">Potential V</th>
                      </tr>
                    </thead>
                    <tbody>
                      {measurements.length === 0 && (
                        <tr><td colSpan={3} className="text-center text-white/25 py-4 text-[11px]">No measurements recorded yet.</td></tr>
                      )}
                      {measurements.map((m, i) => (
                        <tr key={m.id} className="border-b" style={{ borderColor: COLORS.panelBorder }}>
                          <td className="py-1.5 px-2 text-white/40 font-mono">{i + 1}</td>
                          <td className="py-1.5 px-2 font-mono">{formatDistance(m.r, units.distance, sci)}</td>
                          <td className="py-1.5 px-2 font-mono" style={{ color: m.V >= 0 ? COLORS.purple : COLORS.negative }}>{formatPotential(m.V, units.potential, sci)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="flex gap-2 mt-2">
                  <button onClick={recordMeasurement} className="flex items-center gap-1 px-3 py-1.5 rounded-md text-[12px] font-medium" style={{ background: COLORS.purple, color: "#0a0a0f" }}>
                    <Plus size={12} /> Record Measurement
                  </button>
                  <button onClick={() => setMeasurements([])} className="flex items-center gap-1 px-3 py-1.5 rounded-md border text-[12px]" style={{ borderColor: COLORS.panelBorder, color: COLORS.textDim }}>
                    <Trash2 size={12} /> Clear Data
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "advanced" && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4">
              <div>
                <SectionLabel>Field & Explorer</SectionLabel>
                <Toggle label="Show Electric Field" checked={display.field} onChange={setD("field")} />
                <Toggle label="Equipotential Explorer" checked={display.equipotential} onChange={setD("equipotential")} />
                <Toggle label="Potential Difference (A/B)" checked={display.potentialDiff} onChange={setD("potentialDiff")} />
                <Toggle label="3D Potential Landscape" checked={display.landscape3d} onChange={setD("landscape3d")} />
              </div>

              <div>
                <SectionLabel>Reference Level</SectionLabel>
                <div className="flex flex-col gap-1.5 text-[13px]">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" checked={referenceMode === "infinity"} onChange={() => setReferenceMode("infinity")} className="accent-[#b26bff]" />
                    V(∞) = 0
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" checked={referenceMode === "custom"} onChange={() => setReferenceMode("custom")} className="accent-[#b26bff]" />
                    Custom reference point
                  </label>
                </div>
                {referenceMode === "custom" && (
                  <p className="text-[10px] text-white/40 mt-1">Reference set at ({customRef.x.toFixed(1)}, {customRef.y.toFixed(1)}) m — drag not yet wired, edit below.</p>
                )}
              </div>

              <div>
                <SectionLabel>Units</SectionLabel>
                <div className="flex flex-col gap-2 text-[12px]">
                  <UnitRow label="Distance" value={units.distance} options={["m", "cm", "mm"]} onChange={(v) => setUnits((u) => ({ ...u, distance: v }))} />
                  <UnitRow label="Charge" value={units.charge} options={["C", "μC", "nC"]} onChange={(v) => setUnits((u) => ({ ...u, charge: v }))} />
                  <UnitRow label="Potential" value={units.potential} options={["auto", "V", "kV"]} onChange={(v) => setUnits((u) => ({ ...u, potential: v }))} />
                </div>
              </div>

              <div>
                <SectionLabel>Format</SectionLabel>
                <Toggle label="Scientific Notation" checked={sci} onChange={setSci} />
                <p className="text-[10px] text-white/40 mt-2">Formatting only — internal values stay in SI units.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function toSubscript(n) {
  const map = { 0: "₀", 1: "₁", 2: "₂", 3: "₃", 4: "₄", 5: "₅", 6: "₆", 7: "₇", 8: "₈", 9: "₉" };
  return String(n).split("").map((c) => map[c] ?? c).join("");
}

function UnitRow({ label, value, options, onChange }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-white/40">{label}</span>
      <div className="flex gap-1">
        {options.map((o) => (
          <button
            key={o}
            onClick={() => onChange(o)}
            className="px-2 py-0.5 rounded text-[11px] border"
            style={{
              borderColor: value === o ? COLORS.purple : COLORS.panelBorder,
              color: value === o ? COLORS.purple : COLORS.textDim,
            }}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ==========================================================================
   LIGHTWEIGHT 3D POTENTIAL LANDSCAPE (no external 3D library — canvas fallback)
   ========================================================================== */

function Landscape3D({ charges, refOffset, angle, setAngle }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const w = canvas.clientWidth, h = 260;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr; canvas.height = h * dpr;
    canvas.style.height = h + "px";
    const ctx = canvas.getContext("2d");
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, w, h);

    const N = 26;
    let maxAbs = 1;
    const heights = [];
    for (let j = 0; j < N; j++) {
      const row = [];
      for (let i = 0; i < N; i++) {
        const x = -HALF_W_M + (2 * HALF_W_M * i) / (N - 1);
        const y = HALF_H_M - (2 * HALF_H_M * j) / (N - 1);
        const v = totalPotential(charges, x, y, refOffset);
        const clamped = Math.max(-1.2e5, Math.min(1.2e5, v));
        row.push({ x, y, v: clamped });
        maxAbs = Math.max(maxAbs, Math.abs(clamped));
      }
      heights.push(row);
    }

    const project = (x, y, v) => {
      const rx = x * Math.cos(angle) - y * Math.sin(angle);
      const ry = x * Math.sin(angle) + y * Math.cos(angle);
      const heightScale = 55;
      const zz = (v / maxAbs) * heightScale;
      const px = w / 2 + rx * 30;
      const py = h * 0.72 - ry * 14 - zz;
      return { px, py };
    };

    ctx.strokeStyle = "rgba(178,107,255,0.35)";
    ctx.lineWidth = 1;
    for (let j = 0; j < N; j++) {
      ctx.beginPath();
      for (let i = 0; i < N; i++) {
        const { x, y, v } = heights[j][i];
        const p = project(x, y, v);
        const col = v >= 0 ? COLORS.purple : COLORS.cyan;
        ctx.strokeStyle = col + "55";
        if (i === 0) ctx.moveTo(p.px, p.py); else ctx.lineTo(p.px, p.py);
      }
      ctx.stroke();
    }
    for (let i = 0; i < N; i++) {
      ctx.beginPath();
      for (let j = 0; j < N; j++) {
        const { x, y, v } = heights[j][i];
        const p = project(x, y, v);
        const col = v >= 0 ? COLORS.purple : COLORS.cyan;
        ctx.strokeStyle = col + "33";
        if (j === 0) ctx.moveTo(p.px, p.py); else ctx.lineTo(p.px, p.py);
      }
      ctx.stroke();
    }
  }, [charges, refOffset, angle]);

  return (
    <div className="mt-3 rounded-lg border p-3" style={{ borderColor: COLORS.panelBorder, background: COLORS.panel }}>
      <div className="flex items-center justify-between mb-2">
        <SectionLabel>3D Potential Landscape</SectionLabel>
        <div className="flex gap-2">
          <button onClick={() => setAngle((a) => a + 0.35)} className="px-2 py-1 rounded-md border text-[11px]" style={{ borderColor: COLORS.panelBorder, color: COLORS.textDim }}>Rotate</button>
          <button onClick={() => setAngle(0.6)} className="px-2 py-1 rounded-md border text-[11px]" style={{ borderColor: COLORS.panelBorder, color: COLORS.textDim }}>Reset View</button>
        </div>
      </div>
      <canvas ref={ref} className="w-full block" />
      <p className="text-[10px] text-white/40 mt-1">Positive charge → peak. Negative charge → valley. (Lightweight canvas projection, no 3D library.)</p>
    </div>
  );
}
