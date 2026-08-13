import React, { useState, useRef, useCallback, useMemo, useEffect } from 'react';
import {
  calculateResultantField,
  calculateElectricForce,
  getDirectionLabel,
  formatNumber,
  clamp,
} from "./electricField";

// ============================================================================
// THEME — change these to re-skin the simulation without touching markup.
// ============================================================================
const THEME = {
  bg: '#0a0a0f',
  panelBg: 'rgba(255,255,255,0.04)',
  panelBorder: 'rgba(255,255,255,0.08)',
  grid: 'rgba(255,255,255,0.06)',
  white: '#f5f5f7',
  dim: '#9ca3af',
  neonPurple: '#a855f7',
  neonPurpleGlow: 'rgba(168,85,247,0.55)',
  cyan: '#22d3ee',
  cyanGlow: 'rgba(34,211,238,0.55)',
  positive: '#a855f7',
  negative: '#22d3ee',
  fieldContrib: 'rgba(34,211,238,0.45)',
  fieldResult: '#22d3ee',
  force: '#a855f7',
  fieldGrid: 'rgba(34,211,238,0.28)',
};

// ============================================================================
// GEOMETRY — world (meters) <-> screen (SVG px) mapping.
// ============================================================================
const VIEW_W = 800;
const VIEW_H = 500;
const ORIGIN = { x: VIEW_W / 2, y: VIEW_H / 2 };
const SCALE = 58; // px per meter
const WORLD_X_BOUND = 6.3;
const WORLD_Y_BOUND = 3.8;

const worldToScreen = (wx, wy) => ({
  x: ORIGIN.x + wx * SCALE,
  y: ORIGIN.y - wy * SCALE,
});
const screenToWorld = (sx, sy) => ({
  x: (sx - ORIGIN.x) / SCALE,
  y: (ORIGIN.y - sy) / SCALE,
});

// Vector length on screen saturates so huge field/force values never blow
// past a readable arrow — same idea as a log scale, just smoother.
const E_LEN_SCALE = 2.6e4;
const F_LEN_SCALE = 0.02;
const MAX_ARROW_LEN = 92;
const vectorScreenLength = (magnitude, scaleRef) => {
  if (magnitude <= 0) return 0;
  return MAX_ARROW_LEN * (1 - Math.exp(-magnitude / scaleRef));
};
const vectorEndpoint = (x1, y1, angleDeg, length) => {
  const rad = (angleDeg * Math.PI) / 180;
  return { x2: x1 + Math.cos(rad) * length, y2: y1 - Math.sin(rad) * length };
};

// ============================================================================
// DEFAULT SCENARIO
// ============================================================================
const DEFAULT_SOURCES = [
  { id: 'Q1', q: 5, x: -3.2, y: 1.6 },
  { id: 'Q2', q: -4, x: 3.0, y: 0.8 },
  { id: 'Q3', q: 3, x: -0.3, y: -2.3 },
];
const DEFAULT_TEST_POSITION = { x: 0.5, y: -0.4 };
const DEFAULT_TEST_Q = 1;

// ============================================================================
// SMALL PRESENTATIONAL PIECES
// ============================================================================

function VectorArrow({ x1, y1, x2, y2, color, width = 2, opacity = 1, dashed = false, markerId }) {
  if (Math.hypot(x2 - x1, y2 - y1) < 2) return null;
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={color}
      strokeWidth={width}
      strokeOpacity={opacity}
      strokeLinecap="round"
      strokeDasharray={dashed ? '5 4' : undefined}
      markerEnd={`url(#${markerId})`}
    />
  );
}

function SourceCharge({ charge, onPointerDown, isDragging }) {
  const { x, y } = worldToScreen(charge.x, charge.y);
  const isPositive = charge.q >= 0;
  const color = isPositive ? THEME.positive : THEME.negative;
  const radius = clamp(16 + Math.abs(charge.q) * 1.6, 16, 34);

  return (
    <g
      transform={`translate(${x},${y})`}
      onPointerDown={(e) => onPointerDown(e, charge.id)}
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      <circle r={radius + 8} fill={color} opacity={0.18} />
      <circle r={radius} fill="rgba(10,10,15,0.85)" stroke={color} strokeWidth={2.5} />
      <text
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={radius * 0.95}
        fontWeight="700"
        fill={color}
        style={{ userSelect: 'none' }}
      >
        {isPositive ? '+' : '\u2212'}
      </text>
      <text
        y={radius + 18}
        textAnchor="middle"
        fontSize="13"
        fontWeight="600"
        fill={THEME.white}
        style={{ userSelect: 'none' }}
      >
        {charge.id}
      </text>
      <text
        y={radius + 34}
        textAnchor="middle"
        fontSize="12"
        fill={THEME.dim}
        style={{ userSelect: 'none' }}
      >
        {charge.q > 0 ? '+' : ''}
        {charge.q} \u03bcC
      </text>
    </g>
  );
}

function TestChargeMarker({ position, q, onPointerDown, isDragging }) {
  const { x, y } = worldToScreen(position.x, position.y);
  const isPositive = q >= 0;
  const color = isPositive ? THEME.positive : THEME.negative;

  return (
    <g
      transform={`translate(${x},${y})`}
      onPointerDown={(e) => onPointerDown(e, 'test')}
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      <circle r={22} fill={color} opacity={0.25}>
        {isDragging && <animate attributeName="r" values="22;28;22" dur="1.1s" repeatCount="indefinite" />}
      </circle>
      <circle r={13} fill="rgba(10,10,15,0.9)" stroke={color} strokeWidth={2.5} strokeDasharray="3 2" />
      <text textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="700" fill={color}>
        {isPositive ? '+' : '\u2212'}
      </text>
      <text y={34} textAnchor="middle" fontSize="11" fontWeight="600" fill={THEME.white} style={{ userSelect: 'none' }}>
        TEST CHARGE
      </text>
    </g>
  );
}

function VectorFieldGrid({ sourceCharges }) {
  const points = useMemo(() => {
    const cols = 14;
    const rows = 9;
    const pts = [];
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const wx = -WORLD_X_BOUND + (i + 0.5) * ((2 * WORLD_X_BOUND) / cols);
        const wy = -WORLD_Y_BOUND + (j + 0.5) * ((2 * WORLD_Y_BOUND) / rows);
        const fieldPt = calculateResultantField(sourceCharges, wx, wy);
        pts.push({ wx, wy, ...fieldPt });
      }
    }
    return pts;
  }, [sourceCharges]);

  return (
    <g opacity={0.9}>
      {points.map((p, idx) => {
        const { x: sx, y: sy } = worldToScreen(p.wx, p.wy);
        const len = clamp(vectorScreenLength(p.magnitude, E_LEN_SCALE) * 0.35, 0, 22);
        const { x2, y2 } = vectorEndpoint(sx, sy, p.angle, len);
        if (len < 3) return null;
        return (
          <line
            key={idx}
            x1={sx}
            y1={sy}
            x2={x2}
            y2={y2}
            stroke={THEME.fieldGrid}
            strokeWidth={1.3}
            strokeLinecap="round"
            markerEnd="url(#arrow-grid)"
          />
        );
      })}
    </g>
  );
}

function ControlPanel({ sourceCharges, onSourceChange, testQ, onTestQChange, showField, onToggleField, onReset }) {
  return (
    <div
      className="rounded-2xl p-5 space-y-5 backdrop-blur-sm"
      style={{ background: THEME.panelBg, border: `1px solid ${THEME.panelBorder}` }}
    >
      <div>
        <h3 className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: THEME.dim }}>
          Test Charge
        </h3>
        <div className="flex gap-2">
          {[1, -1].map((val) => (
            <button
              key={val}
              onClick={() => onTestQChange(val)}
              className="flex-1 py-2 rounded-xl text-sm font-semibold transition-all duration-200"
              style={{
                background: testQ === val ? (val > 0 ? THEME.positive : THEME.negative) : 'rgba(255,255,255,0.05)',
                color: testQ === val ? '#0a0a0f' : THEME.white,
                border: `1px solid ${val > 0 ? THEME.positive : THEME.negative}`,
              }}
            >
              {val > 0 ? '+1 \u03bcC' : '-1 \u03bcC'}
            </button>
          ))}
        </div>
        <p className="text-xs mt-2 leading-relaxed" style={{ color: THEME.dim }}>
          Medan listrik ditentukan oleh source charges. Test charge hanya menentukan gaya yang dialaminya.
        </p>
      </div>

      <div className="h-px" style={{ background: THEME.panelBorder }} />

      <div className="space-y-3">
        <h3 className="text-xs font-semibold tracking-widest uppercase" style={{ color: THEME.dim }}>
          Source Charges
        </h3>
        {sourceCharges.map((s) => (
          <div key={s.id} className="flex items-center gap-3">
            <span
              className="text-sm font-semibold w-6"
              style={{ color: s.q >= 0 ? THEME.positive : THEME.negative }}
            >
              {s.id}
            </span>
            <input
              type="range"
              min={-10}
              max={10}
              step={0.5}
              value={s.q}
              onChange={(e) => onSourceChange(s.id, parseFloat(e.target.value))}
              className="flex-1 accent-purple-500"
            />
            <span className="text-sm w-16 text-right tabular-nums" style={{ color: THEME.white }}>
              {s.q > 0 ? '+' : ''}
              {s.q} \u03bcC
            </span>
          </div>
        ))}
      </div>

      <div className="h-px" style={{ background: THEME.panelBorder }} />

      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: THEME.dim }}>
          Vector Field
        </span>
        <button
          onClick={onToggleField}
          className="relative w-11 h-6 rounded-full transition-colors duration-200"
          style={{ background: showField ? THEME.cyan : 'rgba(255,255,255,0.15)' }}
        >
          <span
            className="absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform duration-200"
            style={{ transform: showField ? 'translateX(22px)' : 'translateX(2px)' }}
          />
        </button>
      </div>

      <button
        onClick={onReset}
        className="w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
        style={{ background: 'rgba(255,255,255,0.06)', color: THEME.white, border: `1px solid ${THEME.panelBorder}` }}
      >
        Reset
      </button>
    </div>
  );
}

function DirectionCard({ forceMagnitude, forceAngle }) {
  const dir = getDirectionLabel(forceAngle, forceMagnitude);
  return (
    <div
      className="rounded-2xl p-5 text-center"
      style={{
        background: 'linear-gradient(135deg, rgba(168,85,247,0.12), rgba(34,211,238,0.08))',
        border: `1px solid ${THEME.panelBorder}`,
      }}
    >
      <h3 className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: THEME.dim }}>
        Ke Mana Muatan Akan Bergerak?
      </h3>
      <div className="text-5xl mb-1" style={{ filter: `drop-shadow(0 0 12px ${THEME.neonPurpleGlow})` }}>
        {dir.arrow}
      </div>
      <div className="text-lg font-bold tracking-wide" style={{ color: THEME.white }}>
        {dir.label}
      </div>
      <p className="text-xs mt-2 leading-relaxed" style={{ color: THEME.dim }}>
        {dir.isZero
          ? 'Resultan gaya listrik pada posisi ini mendekati nol.'
          : `Karena gaya listrik resultan mengarah ke ${dir.label.toLowerCase()}.`}
      </p>
    </div>
  );
}

function DataRow({ label, value }) {
  return (
    <div className="flex justify-between text-sm">
      <span style={{ color: THEME.dim }}>{label}</span>
      <span className="tabular-nums font-medium" style={{ color: THEME.white }}>
        {value}
      </span>
    </div>
  );
}

function DataPanel({ testQ, position, field, force }) {
  return (
    <div
      className="rounded-2xl p-5 space-y-4"
      style={{ background: THEME.panelBg, border: `1px solid ${THEME.panelBorder}` }}
    >
      <div>
        <h3 className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: THEME.dim }}>
          Test Charge
        </h3>
        <DataRow label="q" value={`${testQ > 0 ? '+' : ''}${testQ} \u03bcC`} />
        <DataRow label="x" value={`${position.x.toFixed(2)} m`} />
        <DataRow label="y" value={`${position.y.toFixed(2)} m`} />
      </div>

      <div className="h-px" style={{ background: THEME.panelBorder }} />

      <div>
        <h3 className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: THEME.cyan }}>
          Electric Field
        </h3>
        <DataRow label="Ex" value={`${formatNumber(field.Ex)} N/C`} />
        <DataRow label="Ey" value={`${formatNumber(field.Ey)} N/C`} />
        <DataRow label="|E|" value={`${formatNumber(field.magnitude)} N/C`} />
        <DataRow label="Arah" value={`${field.angle.toFixed(1)}\u00b0`} />
      </div>

      <div className="h-px" style={{ background: THEME.panelBorder }} />

      <div>
        <h3 className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: THEME.neonPurple }}>
          Electric Force
        </h3>
        <DataRow label="Fx" value={`${formatNumber(force.Fx)} N`} />
        <DataRow label="Fy" value={`${formatNumber(force.Fy)} N`} />
        <DataRow label="|F|" value={`${formatNumber(force.magnitude)} N`} />
        <DataRow label="Arah" value={`${force.angle.toFixed(1)}\u00b0`} />
      </div>
    </div>
  );
}

function AnalysisPanel({ field, testQ, force }) {
  return (
    <div
      className="rounded-2xl p-5 space-y-3 text-sm leading-relaxed"
      style={{ background: THEME.panelBg, border: `1px solid ${THEME.panelBorder}` }}
    >
      <h3 className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: THEME.dim }}>
        Show Analysis
      </h3>

      {field.contributions.map((c) => (
        <p key={c.id} style={{ color: THEME.white }}>
          {c.id} ({c.q > 0 ? '+' : ''}
          {c.q} \u03bcC) menghasilkan medan sebesar{' '}
          <span style={{ color: THEME.cyan }}>{formatNumber(c.magnitude)} N/C</span> di posisi test charge.
        </p>
      ))}

      <p style={{ color: THEME.dim }}>Komponen medan dijumlahkan secara vektor (bukan besarnya saja):</p>
      <p style={{ color: THEME.white }}>
        E<sub>x</sub> = {field.contributions.map((c) => formatNumber(c.Ex)).join(' + ')} ={' '}
        <span style={{ color: THEME.cyan }}>{formatNumber(field.Ex)} N/C</span>
      </p>
      <p style={{ color: THEME.white }}>
        E<sub>y</sub> = {field.contributions.map((c) => formatNumber(c.Ey)).join(' + ')} ={' '}
        <span style={{ color: THEME.cyan }}>{formatNumber(field.Ey)} N/C</span>
      </p>
      <p style={{ color: THEME.white }}>
        E resultan = \u221a(E<sub>x</sub>\u00b2 + E<sub>y</sub>\u00b2) ={' '}
        <span style={{ color: THEME.cyan }}>{formatNumber(field.magnitude)} N/C</span>
      </p>

      <p style={{ color: THEME.dim }}>
        Gaya listrik F = qE, dengan q = {testQ > 0 ? '+' : ''}
        {testQ} \u03bcC:
      </p>
      <p style={{ color: THEME.white }}>
        F = <span style={{ color: THEME.neonPurple }}>{formatNumber(force.magnitude)} N</span>, arah{' '}
        {testQ >= 0 ? 'searah' : 'berlawanan arah'} dengan E resultan.
      </p>
    </div>
  );
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================
export default function TestChargeProbe() {
  const [sourceCharges, setSourceCharges] = useState(DEFAULT_SOURCES);
  const [testQ, setTestQ] = useState(DEFAULT_TEST_Q);
  const [testPosition, setTestPosition] = useState(DEFAULT_TEST_POSITION);
  const [showField, setShowField] = useState(false);
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [draggingId, setDraggingId] = useState(null);

  const svgRef = useRef(null);

  const field = useMemo(
    () => calculateResultantField(sourceCharges, testPosition.x, testPosition.y),
    [sourceCharges, testPosition]
  );
  const force = useMemo(() => calculateElectricForce(testQ, field.Ex, field.Ey), [testQ, field]);

  const clientToWorld = useCallback((clientX, clientY) => {
    const svg = svgRef.current;
    if (!svg) return { x: 0, y: 0 };
    const pt = svg.createSVGPoint();
    pt.x = clientX;
    pt.y = clientY;
    const ctm = svg.getScreenCTM();
    if (!ctm) return { x: 0, y: 0 };
    const svgP = pt.matrixTransform(ctm.inverse());
    return screenToWorld(svgP.x, svgP.y);
  }, []);

  const handlePointerDown = useCallback((e, id) => {
    e.preventDefault();
    e.currentTarget.setPointerCapture?.(e.pointerId);
    setDraggingId(id);
  }, []);

  const handlePointerMove = useCallback(
    (e) => {
      if (!draggingId) return;
      const world = clientToWorld(e.clientX, e.clientY);
      const clamped = {
        x: clamp(world.x, -WORLD_X_BOUND, WORLD_X_BOUND),
        y: clamp(world.y, -WORLD_Y_BOUND, WORLD_Y_BOUND),
      };
      if (draggingId === 'test') {
        setTestPosition(clamped);
      } else {
        setSourceCharges((prev) => prev.map((s) => (s.id === draggingId ? { ...s, ...clamped } : s)));
      }
    },
    [draggingId, clientToWorld]
  );

  const handlePointerUp = useCallback(() => setDraggingId(null), []);

  useEffect(() => {
    if (!draggingId) return;
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, [draggingId, handlePointerMove, handlePointerUp]);

  const handleSourceChange = (id, q) => {
    setSourceCharges((prev) => prev.map((s) => (s.id === id ? { ...s, q } : s)));
  };

  const handleReset = () => {
    setSourceCharges(DEFAULT_SOURCES.map((s) => ({ ...s })));
    setTestQ(DEFAULT_TEST_Q);
    setTestPosition({ ...DEFAULT_TEST_POSITION });
    setShowField(false);
    setShowAnalysis(false);
  };

  const testScreen = worldToScreen(testPosition.x, testPosition.y);

  // Grid lines for the "physics lab" backdrop.
  const gridLines = useMemo(() => {
    const lines = [];
    const step = SCALE; // 1 meter
    for (let x = ORIGIN.x % step; x < VIEW_W; x += step) {
      lines.push({ type: 'v', pos: x });
    }
    for (let y = ORIGIN.y % step; y < VIEW_H; y += step) {
      lines.push({ type: 'h', pos: y });
    }
    return lines;
  }, []);

  return (
    <div className="w-full min-h-screen p-4 md:p-8" style={{ background: THEME.bg }}>
      <div className="max-w-6xl mx-auto space-y-4">
        <header className="space-y-1">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: THEME.cyan }}>
            Fisika Alfazrian — Test Charge Probe
          </p>
          <h1 className="text-2xl md:text-3xl font-bold" style={{ color: THEME.white }}>
            Ke Mana Muatan Akan Bergerak?
          </h1>
          <p className="text-sm max-w-2xl" style={{ color: THEME.dim }}>
            Seret test charge ke berbagai posisi dan amati bagaimana medan listrik serta gaya yang bekerja
            berubah. Coba ubah tanda test charge — apa yang berubah, apa yang tetap?
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-4">
          {/* SIMULATION AREA */}
          <div className="flex-1 min-w-0 space-y-4">
            <div
              className="rounded-2xl overflow-hidden"
              style={{ background: '#050508', border: `1px solid ${THEME.panelBorder}` }}
            >
              <svg
                ref={svgRef}
                viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
                className="w-full h-auto touch-none select-none"
                style={{ display: 'block' }}
              >
                <defs>
                  <marker id="arrow-contrib" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                    <path d="M0,0 L8,4 L0,8 Z" fill={THEME.fieldContrib} />
                  </marker>
                  <marker id="arrow-result" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
                    <path d="M0,0 L9,4.5 L0,9 Z" fill={THEME.fieldResult} />
                  </marker>
                  <marker id="arrow-force" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
                    <path d="M0,0 L9,4.5 L0,9 Z" fill={THEME.force} />
                  </marker>
                  <marker id="arrow-grid" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                    <path d="M0,0 L6,3 L0,6 Z" fill={THEME.fieldGrid} />
                  </marker>
                </defs>

                <rect width={VIEW_W} height={VIEW_H} fill="transparent" />

                {gridLines.map((l, i) =>
                  l.type === 'v' ? (
                    <line key={i} x1={l.pos} y1={0} x2={l.pos} y2={VIEW_H} stroke={THEME.grid} strokeWidth={1} />
                  ) : (
                    <line key={i} x1={0} y1={l.pos} x2={VIEW_W} y2={l.pos} stroke={THEME.grid} strokeWidth={1} />
                  )
                )}
                <line x1={ORIGIN.x} y1={0} x2={ORIGIN.x} y2={VIEW_H} stroke="rgba(255,255,255,0.12)" strokeWidth={1.2} />
                <line x1={0} y1={ORIGIN.y} x2={VIEW_W} y2={ORIGIN.y} stroke="rgba(255,255,255,0.12)" strokeWidth={1.2} />

                {showField && <VectorFieldGrid sourceCharges={sourceCharges} />}

                {/* Individual field contributions from the test charge's position */}
                {field.contributions.map((c) => {
                  const len = vectorScreenLength(c.magnitude, E_LEN_SCALE) * 0.6;
                  const { x2, y2 } = vectorEndpoint(testScreen.x, testScreen.y, Math.atan2(c.Ey, c.Ex) * (180 / Math.PI), len);
                  return (
                    <VectorArrow
                      key={c.id}
                      x1={testScreen.x}
                      y1={testScreen.y}
                      x2={x2}
                      y2={y2}
                      color={THEME.fieldContrib}
                      width={1.75}
                      dashed
                      markerId="arrow-contrib"
                    />
                  );
                })}

                {/* Resultant E vector */}
                {(() => {
                  const len = vectorScreenLength(field.magnitude, E_LEN_SCALE);
                  const { x2, y2 } = vectorEndpoint(testScreen.x, testScreen.y, field.angle, len);
                  return (
                    <>
                      <VectorArrow
                        x1={testScreen.x}
                        y1={testScreen.y}
                        x2={x2}
                        y2={y2}
                        color={THEME.fieldResult}
                        width={3}
                        markerId="arrow-result"
                      />
                      {len > 10 && (
                        <text
                          x={x2 + 6}
                          y={y2 - 6}
                          fontSize="12"
                          fontWeight="700"
                          fill={THEME.fieldResult}
                          style={{ filter: `drop-shadow(0 0 4px ${THEME.cyanGlow})` }}
                        >
                          E resultan
                        </text>
                      )}
                    </>
                  );
                })()}

                {/* Force vector */}
                {(() => {
                  const len = vectorScreenLength(force.magnitude, F_LEN_SCALE);
                  const { x2, y2 } = vectorEndpoint(testScreen.x, testScreen.y, force.angle, len);
                  return (
                    <>
                      <VectorArrow
                        x1={testScreen.x}
                        y1={testScreen.y}
                        x2={x2}
                        y2={y2}
                        color={THEME.force}
                        width={3}
                        markerId="arrow-force"
                      />
                      {len > 10 && (
                        <text
                          x={x2 + 6}
                          y={y2 + 14}
                          fontSize="12"
                          fontWeight="700"
                          fill={THEME.force}
                          style={{ filter: `drop-shadow(0 0 4px ${THEME.neonPurpleGlow})` }}
                        >
                          F
                        </text>
                      )}
                    </>
                  );
                })()}

                {sourceCharges.map((s) => (
                  <SourceCharge key={s.id} charge={s} onPointerDown={handlePointerDown} isDragging={draggingId === s.id} />
                ))}

                <TestChargeMarker
                  position={testPosition}
                  q={testQ}
                  onPointerDown={handlePointerDown}
                  isDragging={draggingId === 'test'}
                />
              </svg>
            </div>

            {/* Mobile: direction card sits right under the simulation */}
            <div className="lg:hidden">
              <DirectionCard forceMagnitude={force.magnitude} forceAngle={force.angle} />
            </div>

            <div className="flex items-center justify-between">
              <button
                onClick={() => setShowAnalysis((v) => !v)}
                className="px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200"
                style={{
                  background: showAnalysis ? THEME.neonPurple : 'rgba(255,255,255,0.06)',
                  color: showAnalysis ? '#0a0a0f' : THEME.white,
                  border: `1px solid ${THEME.panelBorder}`,
                }}
              >
                {showAnalysis ? 'Sembunyikan Analysis' : 'Show Analysis'}
              </button>
              <span className="text-xs" style={{ color: THEME.dim }}>
                Legend: <span style={{ color: THEME.cyan }}>■</span> Electric Field &nbsp;
                <span style={{ color: THEME.neonPurple }}>■</span> Electric Force
              </span>
            </div>

            {showAnalysis && <AnalysisPanel field={field} testQ={testQ} force={force} />}

            <div className="lg:hidden space-y-4">
              <ControlPanel
                sourceCharges={sourceCharges}
                onSourceChange={handleSourceChange}
                testQ={testQ}
                onTestQChange={setTestQ}
                showField={showField}
                onToggleField={() => setShowField((v) => !v)}
                onReset={handleReset}
              />
              <DataPanel testQ={testQ} position={testPosition} field={field} force={force} />
            </div>
          </div>

          {/* SIDE PANEL (desktop) */}
          <div className="hidden lg:block w-80 shrink-0 space-y-4">
            <DirectionCard forceMagnitude={force.magnitude} forceAngle={force.angle} />
            <ControlPanel
              sourceCharges={sourceCharges}
              onSourceChange={handleSourceChange}
              testQ={testQ}
              onTestQChange={setTestQ}
              showField={showField}
              onToggleField={() => setShowField((v) => !v)}
              onReset={handleReset}
            />
            <DataPanel testQ={testQ} position={testPosition} field={field} force={force} />
          </div>
        </div>
      </div>
    </div>
  );
}
