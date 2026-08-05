import React, { useState, useRef } from "react";

// ============================================================
// Ruler (Penggaris) — v2
// Digambar murni SVG, diletakkan tepat di bawah objek (bukan
// menimpa objek) sehingga skala tetap terbaca jelas untuk semua
// bentuk objek. Bisa digeser horizontal (Pointer Events) untuk
// menyejajarkan angka 0 dengan ujung kiri benda.
// Ketelitian: 1 mm.
// ============================================================

const RULER_LENGTH_CM = 24; // panjang total penggaris yang digambar
const BODY_HEIGHT = 78; // tebal badan penggaris (px)

export default function Ruler({ scale, viewBoxWidth, topY, initialOffset = 0 }) {
  const [offsetX, setOffsetX] = useState(initialOffset);
  const dragState = useRef({ dragging: false, startPointerX: 0, startOffset: 0 });

  const rulerLengthPx = RULER_LENGTH_CM * scale;
  const minOffset = -rulerLengthPx + 60;
  const maxOffset = viewBoxWidth - 60;

  function handlePointerDown(e) {
    e.currentTarget.setPointerCapture(e.pointerId);
    dragState.current = { dragging: true, startPointerX: e.clientX, startOffset: offsetX };
  }

  function handlePointerMove(e) {
    if (!dragState.current.dragging) return;
    const svgEl = e.currentTarget.ownerSVGElement;
    const rect = svgEl.getBoundingClientRect();
    const ratio = (svgEl.viewBox.baseVal.width || rect.width) / rect.width;
    const deltaViewBox = (e.clientX - dragState.current.startPointerX) * ratio;
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

  // Tick mark memproyeksi ke ATAS (arah objek): tiap mm garis pendek,
  // tiap 5 mm agak panjang, tiap cm garis panjang + label angka besar.
  const ticks = [];
  const totalMm = RULER_LENGTH_CM * 10;
  for (let mm = 0; mm <= totalMm; mm++) {
    const x = (mm / 10) * scale;
    const isCm = mm % 10 === 0;
    const isHalfCm = mm % 5 === 0;
    const tickHeight = isCm ? 38 : isHalfCm ? 24 : 12;
    ticks.push(
      <line
        key={mm}
        x1={x}
        y1={0}
        x2={x}
        y2={-tickHeight}
        stroke={isCm ? "#22d3ee" : "#67e8f9"}
        strokeWidth={isCm ? 2 : 1}
        opacity={isCm ? 1 : 0.6}
      />
    );
    if (isCm) {
      ticks.push(
        <text
          key={`label-${mm}`}
          x={x}
          y={26}
          fontSize="15"
          fontWeight="600"
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
      transform={`translate(${offsetX}, ${topY})`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      style={{ cursor: "grab", touchAction: "none" }}
    >
      {/* Badan penggaris (tebal, jelas terlihat sebagai alat fisik) */}
      <rect
        x={-6}
        y={0}
        width={rulerLengthPx + 12}
        height={BODY_HEIGHT}
        rx={8}
        fill="url(#rulerBody)"
        stroke="#22d3ee"
        strokeOpacity={0.6}
        strokeWidth={1.5}
      />
      <defs>
        <linearGradient id="rulerBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#123742" />
          <stop offset="100%" stopColor="#081e26" />
        </linearGradient>
      </defs>

      {ticks}

      {/* Penanda titik NOL — besar & mencolok */}
      <line x1={0} y1={-46} x2={0} y2={BODY_HEIGHT} stroke="#f472b6" strokeWidth={2.4} />
      <text x={0} y={-52} fontSize="13" fontWeight="700" fill="#f472b6" textAnchor="middle">
        0
      </text>

      <text
        x={rulerLengthPx / 2}
        y={62}
        fontSize="12"
        fill="#67e8f9"
        opacity={0.7}
        textAnchor="middle"
      >
        geser badan penggaris untuk menyejajarkan 0 dengan ujung benda
      </text>
    </g>
  );
}
