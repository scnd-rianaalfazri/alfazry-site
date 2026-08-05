import React, { useState, useRef } from "react";

// ============================================================
// VernierCaliper (Jangka Sorong) — v2
// Rahang tetap berada di dekat ujung kiri objek, rahang geser
// digeser mengikuti mouse untuk "menjepit" ujung kanan objek dari
// bawah — mirip cara kerja rahang luar jangka sorong sungguhan.
// Skala nonius ikut bergerak bersama rahang geser.
// Ketelitian: 0,01 cm.
// ============================================================

const SCALE_LENGTH_CM = 22; // panjang skala utama yang digambar
const JAW_RISE = 95; // seberapa tinggi rahang naik ke arah objek

export default function VernierCaliper({ scale, x = 40, topY = 250, initialJaw = 90 }) {
  const [jawOffset, setJawOffset] = useState(initialJaw);
  const dragState = useRef({ dragging: false, startPointerX: 0, startOffset: 0 });

  const scaleLengthPx = SCALE_LENGTH_CM * scale;

  function handlePointerDown(e) {
    e.currentTarget.setPointerCapture(e.pointerId);
    dragState.current = { dragging: true, startPointerX: e.clientX, startOffset: jawOffset };
  }

  function handlePointerMove(e) {
    if (!dragState.current.dragging) return;
    const svgEl = e.currentTarget.ownerSVGElement;
    const rect = svgEl.getBoundingClientRect();
    const ratio = (svgEl.viewBox.baseVal.width || rect.width) / rect.width;
    const deltaViewBox = (e.clientX - dragState.current.startPointerX) * ratio;
    let next = dragState.current.startOffset + deltaViewBox;
    next = Math.max(10, Math.min(scaleLengthPx - 10, next));
    setJawOffset(next);
  }

  function handlePointerUp(e) {
    dragState.current.dragging = false;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch (err) {
      /* noop */
    }
  }

  // Skala utama pada bar: tiap mm garis pendek, tiap cm garis panjang + label.
  const mainTicks = [];
  const totalMm = SCALE_LENGTH_CM * 10;
  for (let mm = 0; mm <= totalMm; mm++) {
    const px = (mm / 10) * scale;
    const isCm = mm % 10 === 0;
    mainTicks.push(
      <line
        key={mm}
        x1={px}
        y1={0}
        x2={px}
        y2={isCm ? 26 : mm % 5 === 0 ? 17 : 10}
        stroke={isCm ? "#60a5fa" : "#93c5fd"}
        strokeWidth={isCm ? 1.8 : 0.9}
        opacity={isCm ? 1 : 0.55}
      />
    );
    if (isCm) {
      mainTicks.push(
        <text key={`l${mm}`} x={px} y={40} fontSize="13" fontWeight="600" fill="#bfdbfe" textAnchor="middle">
          {mm / 10}
        </text>
      );
    }
  }

  // Skala nonius (vernier): 10 garis kecil di plakat rahang geser.
  const vernierTicks = [];
  for (let i = 0; i <= 10; i++) {
    const px = i * (scale / 10) * 0.9;
    vernierTicks.push(
      <line key={i} x1={px} y1={0} x2={px} y2={14} stroke="#c4b5fd" strokeWidth={1.2} />
    );
    if (i % 5 === 0) {
      vernierTicks.push(
        <text key={`vt${i}`} x={px} y={26} fontSize="9" fill="#ddd6fe" textAnchor="middle">
          {i}
        </text>
      );
    }
  }

  return (
    <g transform={`translate(${x}, ${topY})`}>
      {/* Bar / batang skala utama */}
      <rect
        x={-10}
        y={0}
        width={scaleLengthPx + 20}
        height={44}
        rx={6}
        fill="#0b1c33"
        stroke="#3b82f6"
        strokeOpacity={0.55}
        strokeWidth={1.5}
      />
      {mainTicks}

      {/* Rahang tetap (kiri, diam di posisi 0) — dengan "paruh" menjepit ke atas */}
      <g>
        <rect x={-7} y={-JAW_RISE} width={14} height={JAW_RISE + 44} rx={3} fill="#1e293b" stroke="#60a5fa" strokeWidth={1.4} />
        <path d={`M -7 ${-JAW_RISE} L 10 ${-JAW_RISE - 14} L 10 ${-JAW_RISE + 6} L -7 ${-JAW_RISE + 10} Z`} fill="#334155" stroke="#60a5fa" strokeWidth={1} />
        <text x={0} y={62} fontSize="11" fill="#93c5fd" textAnchor="middle">
          Rahang tetap
        </text>
      </g>

      {/* Rahang geser (draggable) — dengan "paruh" menjepit ke atas */}
      <g
        transform={`translate(${jawOffset}, 0)`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        style={{ cursor: "ew-resize", touchAction: "none" }}
      >
        <rect x={-7} y={-JAW_RISE} width={14} height={JAW_RISE + 44} rx={3} fill="#312e81" stroke="#a78bfa" strokeWidth={1.4} />
        <path d={`M 7 ${-JAW_RISE} L -10 ${-JAW_RISE - 14} L -10 ${-JAW_RISE + 6} L 7 ${-JAW_RISE + 10} Z`} fill="#3730a3" stroke="#a78bfa" strokeWidth={1} />

        {/* Plakat skala nonius menempel di badan rahang geser */}
        <g transform="translate(14, 8)">
          <rect x={0} y={0} width={92} height={30} rx={4} fill="#1e1b4b" stroke="#a78bfa" strokeOpacity={0.6} />
          <g transform="translate(6, 4)">{vernierTicks}</g>
        </g>

        <text x={0} y={62} fontSize="11" fill="#c4b5fd" textAnchor="middle">
          Rahang geser
        </text>
      </g>

      <text
        x={scaleLengthPx / 2}
        y={-JAW_RISE - 24}
        fontSize="12"
        fill="#93c5fd"
        opacity={0.7}
        textAnchor="middle"
      >
        geser rahang biru (ungu) sampai menjepit kedua sisi benda
      </text>
    </g>
  );
}
