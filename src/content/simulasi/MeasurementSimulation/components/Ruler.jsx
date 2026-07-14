import React, { useState, useRef } from "react";

// ============================================================
// Ruler (Penggaris)
// Digambar murni dengan SVG. Bisa digeser secara horizontal
// menggunakan drag (Pointer Events) supaya siswa bisa menyejajarkan
// angka 0 penggaris dengan ujung kiri benda.
// Ketelitian: 1 mm.
// ============================================================

const RULER_LENGTH_CM = 22; // panjang total penggaris yang digambar

export default function Ruler({ scale, viewBoxWidth, y = 60, initialOffset = 0 }) {
  // offsetX = posisi geser penggaris relatif terhadap posisi awalnya (dalam px)
  const [offsetX, setOffsetX] = useState(initialOffset);
  const dragState = useRef({ dragging: false, startPointerX: 0, startOffset: 0 });

  const rulerLengthPx = RULER_LENGTH_CM * scale;

  // Batas geser: agar penggaris tidak hilang total dari area kanvas
  const minOffset = -rulerLengthPx + 40;
  const maxOffset = viewBoxWidth - 40;

  function handlePointerDown(e) {
    e.currentTarget.setPointerCapture(e.pointerId);
    dragState.current = {
      dragging: true,
      startPointerX: e.clientX,
      startOffset: offsetX,
    };
  }

  function handlePointerMove(e) {
    if (!dragState.current.dragging) return;
    // Konversi pergerakan mouse di layar (px CSS) ke px viewBox SVG.
    // Karena SVG di-scale responsif, kita gunakan getBoundingClientRect
    // dari elemen SVG induk untuk menghitung rasio skala.
    const svgEl = e.currentTarget.ownerSVGElement;
    const rect = svgEl.getBoundingClientRect();
    const ratio = viewBoxWidth / rect.width;
    const deltaScreen = e.clientX - dragState.current.startPointerX;
    const deltaViewBox = deltaScreen * ratio;
    let next = dragState.current.startOffset + deltaViewBox;
    next = Math.max(minOffset, Math.min(maxOffset, next));
    setOffsetX(next);
  }

  function handlePointerUp(e) {
    dragState.current.dragging = false;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch (err) {
      /* noop */
    }
  }

  // Bangun tick mark: setiap 1 mm garis pendek, setiap 5 mm agak panjang,
  // setiap 1 cm garis panjang + label angka.
  const ticks = [];
  const totalMm = RULER_LENGTH_CM * 10;
  for (let mm = 0; mm <= totalMm; mm++) {
    const x = (mm / 10) * scale;
    const isCm = mm % 10 === 0;
    const isHalfCm = mm % 5 === 0;
    const tickHeight = isCm ? 22 : isHalfCm ? 14 : 8;
    ticks.push(
      <line
        key={mm}
        x1={x}
        y1={0}
        x2={x}
        y2={tickHeight}
        stroke={isCm ? "#22d3ee" : "#67e8f9"}
        strokeWidth={isCm ? 1.4 : 0.8}
        opacity={isCm ? 1 : 0.6}
      />
    );
    if (isCm) {
      ticks.push(
        <text
          key={`label-${mm}`}
          x={x}
          y={36}
          fontSize="10"
          textAnchor="middle"
          fill="#a5f3fc"
        >
          {mm / 10}
        </text>
      );
    }
  }

  return (
    <g
      transform={`translate(${offsetX}, ${y})`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      style={{ cursor: "grab", touchAction: "none" }}
    >
      {/* Badan penggaris */}
      <rect
        x={-4}
        y={-6}
        width={rulerLengthPx + 8}
        height={48}
        rx={6}
        fill="url(#rulerBody)"
        stroke="#22d3ee"
        strokeOpacity={0.5}
      />
      <defs>
        <linearGradient id="rulerBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0e2a33" />
          <stop offset="100%" stopColor="#082027" />
        </linearGradient>
      </defs>

      {/* Penanda titik NOL */}
      <line x1={0} y1={-6} x2={0} y2={42} stroke="#f472b6" strokeWidth={1.6} />
      <text x={0} y={-10} fontSize="10" fill="#f472b6" textAnchor="middle">
        0
      </text>

      {ticks}
    </g>
  );
}
