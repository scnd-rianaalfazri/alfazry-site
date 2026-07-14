import React, { useMemo } from "react";
import Ruler from "./Ruler";
import VernierCaliper from "./VernierCaliper";
import Micrometer from "./Micrometer";

// ============================================================
// MeasurementCanvas
// Area simulasi tengah. Menggambar objek yang dipilih (dengan
// panjang sebenarnya yang sudah diacak) dan menumpuk alat ukur
// yang sedang aktif di atasnya menggunakan SVG.
// ============================================================

const VIEWBOX_W = 760;
const VIEWBOX_H = 320;
const SCALE_PX_PER_CM = 16; // 1 cm = 16 px di kanvas
const OBJECT_START_X = 150; // titik awal objek (px) di sumbu X
const OBJECT_Y = 230; // garis dasar / tengah vertikal objek

// Menggambar bentuk objek berdasarkan tipe "shape"-nya.
function ObjectShape({ shape, lengthPx }) {
  switch (shape) {
    case "stick": // pensil / benda memanjang tipis
      return (
        <g>
          <rect x={0} y={-6} width={lengthPx - 14} height={12} rx={3} fill="#facc15" stroke="#eab308" />
          <polygon
            points={`${lengthPx - 14},-6 ${lengthPx},0 ${lengthPx - 14},6`}
            fill="#78350f"
          />
        </g>
      );
    case "book":
      return (
        <g>
          <rect x={0} y={-40} width={lengthPx} height={80} rx={4} fill="#f43f5e" stroke="#be123c" />
          <rect x={6} y={-34} width={lengthPx - 12} height={68} rx={2} fill="#fecdd3" opacity={0.25} />
        </g>
      );
    case "bolt":
      return (
        <g>
          <rect x={0} y={-6} width={lengthPx - 10} height={12} fill="#94a3b8" stroke="#64748b" />
          <polygon
            points={`${lengthPx - 10},-14 ${lengthPx},0 ${lengthPx - 10},14`}
            fill="#cbd5e1"
            stroke="#64748b"
          />
        </g>
      );
    case "ball":
      return (
        <circle cx={lengthPx / 2} cy={0} r={lengthPx / 2} fill="url(#ballGradient)" stroke="#1d4ed8" />
      );
    case "coin":
      return (
        <circle cx={lengthPx / 2} cy={0} r={lengthPx / 2} fill="url(#coinGradient)" stroke="#a16207" />
      );
    case "pipe":
      return (
        <g>
          <rect x={0} y={-16} width={lengthPx} height={32} rx={16} fill="#334155" stroke="#22d3ee" strokeOpacity={0.6} />
          <ellipse cx={lengthPx} cy={0} rx={6} ry={16} fill="#0f172a" stroke="#22d3ee" />
        </g>
      );
    default:
      return <rect x={0} y={-8} width={lengthPx} height={16} fill="#22d3ee" />;
  }
}

export default function MeasurementCanvas({ measurement, toolId }) {
  const lengthPx = useMemo(
    () => (measurement ? measurement.trueValueCm * SCALE_PX_PER_CM : 0),
    [measurement]
  );

  return (
    <div className="w-full rounded-2xl border border-white/10 bg-zinc-950/60 p-3 shadow-[0_0_30px_rgba(56,189,248,0.08)]">
      <svg
        viewBox={`0 0 ${VIEWBOX_W} ${VIEWBOX_H}`}
        className="w-full h-[280px] md:h-[340px] select-none"
      >
        <defs>
          <radialGradient id="ballGradient">
            <stop offset="0%" stopColor="#93c5fd" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </radialGradient>
          <radialGradient id="coinGradient">
            <stop offset="0%" stopColor="#fde68a" />
            <stop offset="100%" stopColor="#b45309" />
          </radialGradient>
          {/* grid latar futuristik */}
          <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#1e293b" strokeWidth="0.6" />
          </pattern>
        </defs>

        <rect width={VIEWBOX_W} height={VIEWBOX_H} fill="url(#grid)" opacity={0.5} />

        {/* Alat ukur (ditumpuk di atas objek) */}
        {toolId === "penggaris" && (
          <Ruler scale={SCALE_PX_PER_CM} viewBoxWidth={VIEWBOX_W} y={40} initialOffset={OBJECT_START_X - 4} />
        )}
        {toolId === "jangka_sorong" && (
          <VernierCaliper scale={SCALE_PX_PER_CM} x={OBJECT_START_X - 10} y={120} />
        )}
        {toolId === "mikrometer" && (
          <Micrometer x={OBJECT_START_X - 90} y={140} />
        )}

        {/* Objek yang diukur */}
        {measurement && (
          <g transform={`translate(${OBJECT_START_X}, ${OBJECT_Y})`}>
            <ObjectShape shape={measurement.shape} lengthPx={lengthPx} />
          </g>
        )}

        {/* Garis bantu ujung kiri & kanan objek, memudahkan penyejajaran alat */}
        {measurement && (
          <g stroke="#f472b6" strokeDasharray="4 3" opacity={0.55}>
            <line x1={OBJECT_START_X} y1={OBJECT_Y - 90} x2={OBJECT_START_X} y2={OBJECT_Y + 60} />
            <line
              x1={OBJECT_START_X + lengthPx}
              y1={OBJECT_Y - 90}
              x2={OBJECT_START_X + lengthPx}
              y2={OBJECT_Y + 60}
            />
          </g>
        )}
      </svg>
    </div>
  );
}
