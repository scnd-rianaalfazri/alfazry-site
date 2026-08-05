import React, { useMemo } from "react";
import Ruler from "./Ruler";
import VernierCaliper from "./VernierCaliper";
import Micrometer from "./Micrometer";

// ============================================================
// MeasurementCanvas — v2
// Area simulasi tengah. Objek digambar di bagian atas kanvas;
// penggaris & jangka sorong digambar TEPAT DI BAWAH objek (tidak
// menimpa objek) supaya skala selalu terbaca jelas. Mikrometer
// digambar sejajar objek karena rahangnya (anvil-spindle) memang
// bekerja horizontal, menjepit objek langsung.
// ============================================================

const VIEWBOX_W = 960;
const VIEWBOX_H = 480;
const SCALE_PX_PER_CM = 28; // 1 cm = 28 px di kanvas
const OBJECT_START_X = 190; // titik awal objek (px) di sumbu X
const OBJECT_Y = 150; // garis dasar vertikal objek
const TRACK_TOP = 240; // sisi atas badan penggaris / bar jangka sorong

// Menggambar bentuk objek. Untuk objek bulat (bola/koin) tinggi visualnya
// dibatasi (pakai elips, bukan lingkaran penuh) supaya tidak menabrak area
// alat ukur di bawahnya — lebar horizontal tetap merepresentasikan panjang
// sebenarnya secara akurat.
function ObjectShape({ shape, lengthPx }) {
  switch (shape) {
    case "stick":
      return (
        <g>
          <rect x={0} y={-9} width={lengthPx - 18} height={18} rx={4} fill="#facc15" stroke="#eab308" strokeWidth={1.5} />
          <polygon points={`${lengthPx - 18},-9 ${lengthPx},0 ${lengthPx - 18},9`} fill="#78350f" />
        </g>
      );
    case "book":
      return (
        <g>
          <rect x={0} y={-55} width={lengthPx} height={110} rx={5} fill="#f43f5e" stroke="#be123c" strokeWidth={1.5} />
          <rect x={8} y={-47} width={lengthPx - 16} height={94} rx={3} fill="#fecdd3" opacity={0.22} />
        </g>
      );
    case "bolt":
      return (
        <g>
          <rect x={0} y={-9} width={lengthPx - 16} height={18} fill="#94a3b8" stroke="#64748b" strokeWidth={1.5} />
          <polygon points={`${lengthPx - 16},-20 ${lengthPx},0 ${lengthPx - 16},20`} fill="#cbd5e1" stroke="#64748b" strokeWidth={1.5} />
        </g>
      );
    case "ball":
      return <ellipse cx={lengthPx / 2} cy={0} rx={lengthPx / 2} ry={58} fill="url(#ballGradient)" stroke="#1d4ed8" strokeWidth={1.5} />;
    case "coin":
      return <ellipse cx={lengthPx / 2} cy={0} rx={lengthPx / 2} ry={30} fill="url(#coinGradient)" stroke="#a16207" strokeWidth={1.5} />;
    case "pipe":
      return (
        <g>
          <rect x={0} y={-22} width={lengthPx} height={44} rx={22} fill="#334155" stroke="#22d3ee" strokeOpacity={0.6} strokeWidth={1.5} />
          <ellipse cx={lengthPx} cy={0} rx={8} ry={22} fill="#0f172a" stroke="#22d3ee" strokeWidth={1.5} />
        </g>
      );
    default:
      return <rect x={0} y={-9} width={lengthPx} height={18} fill="#22d3ee" />;
  }
}

export default function MeasurementCanvas({ measurement, toolId }) {
  const lengthPx = useMemo(
    () => (measurement ? measurement.trueValueCm * SCALE_PX_PER_CM : 0),
    [measurement]
  );

  // Kunci unik supaya alat ukur "reset" posisinya (bukaan penuh / offset
  // awal) setiap kali objek berganti — bukan cuma saat alat digonta-ganti.
  const resetKey = measurement ? `${measurement.id}-${measurement.trueValueCm}` : "empty";

  return (
    <div className="w-full rounded-2xl border border-white/10 bg-zinc-950/60 p-3 shadow-[0_0_30px_rgba(56,189,248,0.08)]">
      <div className="w-full aspect-[960/480]">
        <svg viewBox={`0 0 ${VIEWBOX_W} ${VIEWBOX_H}`} className="w-full h-full select-none">
          <defs>
            <radialGradient id="ballGradient">
              <stop offset="0%" stopColor="#93c5fd" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </radialGradient>
            <radialGradient id="coinGradient">
              <stop offset="0%" stopColor="#fde68a" />
              <stop offset="100%" stopColor="#b45309" />
            </radialGradient>
            <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#1e293b" strokeWidth="0.6" />
            </pattern>
          </defs>

          <rect width={VIEWBOX_W} height={VIEWBOX_H} fill="url(#grid)" opacity={0.5} />

          {/* Alat ukur — digambar sebelum objek supaya tidak pernah menimpa objek */}
          {toolId === "penggaris" && (
            <Ruler
              key={resetKey}
              scale={SCALE_PX_PER_CM}
              viewBoxWidth={VIEWBOX_W}
              topY={TRACK_TOP}
              initialOffset={OBJECT_START_X}
            />
          )}
          {toolId === "jangka_sorong" && (
            <VernierCaliper
              key={resetKey}
              scale={SCALE_PX_PER_CM}
              x={OBJECT_START_X - 30}
              topY={TRACK_TOP}
              initialJaw={Math.min(lengthPx + 60, 22 * SCALE_PX_PER_CM - 20)}
            />
          )}
          {toolId === "mikrometer" && (
            <Micrometer
              key={resetKey}
              anchorX={OBJECT_START_X}
              anchorY={OBJECT_Y}
              maxGapPx={Math.min(lengthPx + 90, 480)}
            />
          )}

          {/* Objek yang diukur */}
          {measurement && (
            <g transform={`translate(${OBJECT_START_X}, ${OBJECT_Y})`}>
              <ObjectShape shape={measurement.shape} lengthPx={lengthPx} />
            </g>
          )}

          {/* Garis bantu vertikal di ujung kiri & kanan objek */}
          {measurement && toolId !== "mikrometer" && (
            <g stroke="#f472b6" strokeDasharray="5 4" opacity={0.45}>
              <line x1={OBJECT_START_X} y1={OBJECT_Y - 90} x2={OBJECT_START_X} y2={TRACK_TOP + 10} />
              <line x1={OBJECT_START_X + lengthPx} y1={OBJECT_Y - 90} x2={OBJECT_START_X + lengthPx} y2={TRACK_TOP + 10} />
            </g>
          )}
        </svg>
      </div>
    </div>
  );
}
