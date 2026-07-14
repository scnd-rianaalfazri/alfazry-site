import React, { useState, useRef } from "react";

// ============================================================
// VernierCaliper (Jangka Sorong)
// Rahang tetap (fixed jaw) diletakkan sejajar ujung kiri benda.
// Rahang geser (sliding jaw) digeser mengikuti mouse untuk
// "menjepit" ujung kanan benda. Skala nonius ikut bergerak
// bersama rahang geser.
// Ketelitian: 0,01 cm.
// ============================================================

const SCALE_LENGTH_CM = 20; // panjang skala utama yang digambar

export default function VernierCaliper({ scale, x = 40, y = 90 }) {
  // jawOffset = posisi rahang geser dalam px, relatif terhadap rahang tetap
  const [jawOffset, setJawOffset] = useState(80);
  const dragState = useRef({ dragging: false, startPointerX: 0, startOffset: 0 });

  const scaleLengthPx = SCALE_LENGTH_CM * scale;

  function handlePointerDown(e) {
    e.currentTarget.setPointerCapture(e.pointerId);
    dragState.current = {
      dragging: true,
      startPointerX: e.clientX,
      startOffset: jawOffset,
    };
  }

  function handlePointerMove(e) {
    if (!dragState.current.dragging) return;
    const svgEl = e.currentTarget.ownerSVGElement;
    const rect = svgEl.getBoundingClientRect();
    // Rasio antara ukuran viewBox SVG dan ukuran render di layar,
    // supaya drag tetap akurat meskipun SVG discale responsif.
    const ratio = (svgEl.viewBox.baseVal.width || rect.width) / rect.width;
    const deltaScreen = e.clientX - dragState.current.startPointerX;
    const deltaViewBox = deltaScreen * ratio;
    let next = dragState.current.startOffset + deltaViewBox;
    next = Math.max(4, Math.min(scaleLengthPx - 4, next));
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

  // Skala utama: tiap mm garis pendek, tiap cm garis panjang + label
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
        y2={isCm ? 18 : mm % 5 === 0 ? 12 : 7}
        stroke={isCm ? "#60a5fa" : "#93c5fd"}
        strokeWidth={isCm ? 1.4 : 0.7}
        opacity={isCm ? 1 : 0.55}
      />
    );
    if (isCm) {
      mainTicks.push(
        <text key={`l${mm}`} x={px} y={-6} fontSize="9" fill="#bfdbfe" textAnchor="middle">
          {mm / 10}
        </text>
      );
    }
  }

  // Skala nonius (vernier): 10 garis kecil di rahang geser (dekoratif,
  // merepresentasikan cara pembacaan pecahan mm secara visual).
  const vernierTicks = [];
  for (let i = 0; i <= 10; i++) {
    const px = i * (scale / 10) * 0.9; // sedikit lebih rapat dari skala utama (khas nonius)
    vernierTicks.push(
      <line
        key={i}
        x1={px}
        y1={0}
        x2={px}
        y2={10}
        stroke="#c4b5fd"
        strokeWidth={0.9}
      />
    );
  }

  return (
    <g transform={`translate(${x}, ${y})`}>
      {/* Batang skala utama */}
      <rect
        x={-6}
        y={-24}
        width={scaleLengthPx + 12}
        height={30}
        rx={4}
        fill="#0b1c33"
        stroke="#3b82f6"
        strokeOpacity={0.5}
      />
      {mainTicks}

      {/* Rahang tetap (kiri, di posisi 0) */}
      <rect x={-3} y={-40} width={6} height={70} rx={2} fill="#1e293b" stroke="#60a5fa" />
      <text x={0} y={54} fontSize="9" fill="#93c5fd" textAnchor="middle">
        Rahang tetap
      </text>

      {/* Rahang geser (draggable) */}
      <g
        transform={`translate(${jawOffset}, 0)`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        style={{ cursor: "ew-resize", touchAction: "none" }}
      >
        <rect x={-3} y={-40} width={6} height={70} rx={2} fill="#312e81" stroke="#a78bfa" />
        {/* Panel skala nonius menempel di bawah rahang geser */}
        <g transform="translate(4, 10)">
          <rect x={0} y={0} width={70} height={16} rx={3} fill="#1e1b4b" stroke="#a78bfa" strokeOpacity={0.6} />
          <g transform="translate(4, 3)">{vernierTicks}</g>
        </g>
        <text x={0} y={54} fontSize="9" fill="#c4b5fd" textAnchor="middle">
          Rahang geser
        </text>
      </g>
    </g>
  );
}
