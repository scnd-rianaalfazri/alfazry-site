import React, { useState, useRef } from "react";

// ============================================================
// Micrometer (Mikrometer Sekrup)
// Sleeve (selubung) diam di tempat dan menampilkan skala utama (mm).
// Thimble (bidal) diputar dengan drag (Pointer Events) mengelilingi
// selubung, memperlihatkan skala thimble (50 bagian).
// Ketelitian: 0,01 mm.
// ============================================================

export default function Micrometer({ x = 60, y = 40 }) {
  // angle = sudut putar thimble saat ini (derajat), hanya untuk visual
  const [angle, setAngle] = useState(0);
  const dragState = useRef({ dragging: false, startX: 0, startAngle: 0 });

  const thimbleCenterX = 210;
  const thimbleRadius = 46;

  function handlePointerDown(e) {
    e.currentTarget.setPointerCapture(e.pointerId);
    dragState.current = { dragging: true, startX: e.clientX, startAngle: angle };
  }

  function handlePointerMove(e) {
    if (!dragState.current.dragging) return;
    // Menggeser mouse ke kanan/kiri memutar thimble searah/berlawanan jarum jam.
    const deltaX = e.clientX - dragState.current.startX;
    const nextAngle = (dragState.current.startAngle + deltaX * 1.5) % 360;
    setAngle(nextAngle);
  }

  function handlePointerUp(e) {
    dragState.current.dragging = false;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch (err) {
      /* noop */
    }
  }

  // Skala utama pada sleeve: garis horizontal dasar + tick tiap 1 mm
  // (garis atas) dan tiap 0,5 mm (garis bawah, diselang-seling khas mikrometer).
  const sleeveTicks = [];
  for (let mm = 0; mm <= 25; mm++) {
    const px = mm * 6;
    sleeveTicks.push(
      <line key={`u${mm}`} x1={px} y1={-10} x2={px} y2={0} stroke="#22d3ee" strokeWidth={1.2} />
    );
    if (mm % 5 === 0) {
      sleeveTicks.push(
        <text key={`ul${mm}`} x={px} y={-14} fontSize="8" fill="#a5f3fc" textAnchor="middle">
          {mm}
        </text>
      );
    }
    if (mm < 25) {
      sleeveTicks.push(
        <line key={`h${mm}`} x1={px + 3} y1={0} x2={px + 3} y2={8} stroke="#0891b2" strokeWidth={1} />
      );
    }
  }

  // Skala thimble: 50 garis mengelilingi lingkaran (0..49), tiap garis = 0,01 mm
  const thimbleTicks = [];
  for (let i = 0; i < 50; i++) {
    const theta = (i / 50) * 2 * Math.PI;
    const isMajor = i % 5 === 0;
    const rInner = thimbleRadius - (isMajor ? 12 : 7);
    const x1 = Math.cos(theta) * thimbleRadius;
    const y1 = Math.sin(theta) * thimbleRadius;
    const x2 = Math.cos(theta) * rInner;
    const y2 = Math.sin(theta) * rInner;
    thimbleTicks.push(
      <line
        key={i}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="#e9d5ff"
        strokeWidth={isMajor ? 1.2 : 0.7}
        opacity={isMajor ? 1 : 0.6}
      />
    );
    if (isMajor) {
      const lx = Math.cos(theta) * (thimbleRadius - 20);
      const ly = Math.sin(theta) * (thimbleRadius - 20);
      thimbleTicks.push(
        <text key={`t${i}`} x={lx} y={ly} fontSize="7" fill="#f5d0fe" textAnchor="middle">
          {i}
        </text>
      );
    }
  }

  return (
    <g transform={`translate(${x}, ${y})`}>
      {/* Bingkai C mikrometer (dekoratif) */}
      <path
        d="M -30 20 C -70 20, -70 100, -30 100"
        stroke="#334155"
        strokeWidth={10}
        fill="none"
        strokeLinecap="round"
      />

      {/* Spindle & anvil (rahang pengukur) */}
      <line x1={-30} y1={60} x2={thimbleCenterX - thimbleRadius + 10} y2={60} stroke="#94a3b8" strokeWidth={6} strokeLinecap="round" />

      {/* Sleeve tetap + skala utama */}
      <g transform="translate(20, 60)">
        <rect x={-6} y={-14} width={168} height={28} rx={6} fill="#0e1e2b" stroke="#22d3ee" strokeOpacity={0.5} />
        {sleeveTicks}
        {/* Garis datum horizontal */}
        <line x1={-2} y1={0} x2={160} y2={0} stroke="#67e8f9" strokeWidth={0.8} opacity={0.7} />
      </g>

      {/* Thimble yang bisa diputar */}
      <g
        transform={`translate(${thimbleCenterX}, 60)`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        style={{ cursor: "grab", touchAction: "none" }}
      >
        <circle r={thimbleRadius + 14} fill="url(#thimbleBody)" stroke="#a78bfa" strokeOpacity={0.6} />
        <defs>
          <radialGradient id="thimbleBody">
            <stop offset="0%" stopColor="#2e1065" />
            <stop offset="100%" stopColor="#150826" />
          </radialGradient>
        </defs>
        <g style={{ transform: `rotate(${angle}deg)`, transformOrigin: "0px 0px" }}>
          {thimbleTicks}
        </g>
        {/* Garis indeks tetap (penunjuk pembacaan) */}
        <line x1={-thimbleRadius - 14} y1={0} x2={-thimbleRadius + 6} y2={0} stroke="#f472b6" strokeWidth={2} />
      </g>

      <text x={thimbleCenterX} y={130} fontSize="9" fill="#c4b5fd" textAnchor="middle">
        Putar thimble (geser mouse kiri/kanan)
      </text>
    </g>
  );
}
