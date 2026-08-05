import React, { useState, useRef } from "react";

// ============================================================
// Micrometer (Mikrometer Sekrup) — v2
// Anvil (rahang tetap) diletakkan tepat di ujung kiri objek.
// Memutar thimble (drag horizontal) benar-benar MENUTUP jarak
// antara anvil dan spindle menuju objek — bukan sekadar animasi
// dekoratif — sehingga terasa seperti memakai alat sungguhan.
// Ketelitian: 0,01 mm.
// ============================================================

export default function Micrometer({ anchorX, anchorY, maxGapPx }) {
  // gapPx = jarak anvil ke ujung spindle saat ini (px), mulai terbuka lebar
  const [gapPx, setGapPx] = useState(maxGapPx);
  // angle = sudut putar visual thimble (kosmetik, memberi kesan berputar)
  const [angle, setAngle] = useState(0);
  const dragState = useRef({ dragging: false, startX: 0, startGap: 0, startAngle: 0 });

  const thimbleRadius = 46;

  function handlePointerDown(e) {
    e.currentTarget.setPointerCapture(e.pointerId);
    dragState.current = { dragging: true, startX: e.clientX, startGap: gapPx, startAngle: angle };
  }

  function handlePointerMove(e) {
    if (!dragState.current.dragging) return;
    const svgEl = e.currentTarget.ownerSVGElement;
    const rect = svgEl.getBoundingClientRect();
    const ratio = (svgEl.viewBox.baseVal.width || rect.width) / rect.width;
    const deltaX = (e.clientX - dragState.current.startX) * ratio;

    // Memutar ke kanan (searah jarum jam) = menutup jarak (spindle maju).
    let nextGap = dragState.current.startGap - deltaX;
    nextGap = Math.max(0, Math.min(maxGapPx, nextGap));
    setGapPx(nextGap);

    // Putaran visual thimble tetap berputar penuh untuk kesan realistis
    setAngle((dragState.current.startAngle + deltaX * 3) % 360);
  }

  function handlePointerUp(e) {
    dragState.current.dragging = false;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch (err) {
      /* noop */
    }
  }

  // Skala sleeve (dekoratif, khas mikrometer): garis atas tiap mm, garis
  // bawah tiap 0,5 mm, digambar sepanjang badan sleeve tetap.
  const sleeveTicks = [];
  for (let mm = 0; mm <= 20; mm++) {
    const px = mm * 7;
    sleeveTicks.push(
      <line key={`u${mm}`} x1={px} y1={-14} x2={px} y2={0} stroke="#22d3ee" strokeWidth={1.4} />
    );
    if (mm % 5 === 0) {
      sleeveTicks.push(
        <text key={`ul${mm}`} x={px} y={-18} fontSize="10" fill="#a5f3fc" textAnchor="middle">
          {mm}
        </text>
      );
    }
    if (mm < 20) {
      sleeveTicks.push(
        <line key={`h${mm}`} x1={px + 3.5} y1={0} x2={px + 3.5} y2={10} stroke="#0891b2" strokeWidth={1.1} />
      );
    }
  }

  // Skala thimble: 50 garis mengelilingi lingkaran, tiap garis = 0,01 mm.
  const thimbleTicks = [];
  for (let i = 0; i < 50; i++) {
    const theta = (i / 50) * 2 * Math.PI;
    const isMajor = i % 5 === 0;
    const rInner = thimbleRadius - (isMajor ? 14 : 8);
    thimbleTicks.push(
      <line
        key={i}
        x1={Math.cos(theta) * thimbleRadius}
        y1={Math.sin(theta) * thimbleRadius}
        x2={Math.cos(theta) * rInner}
        y2={Math.sin(theta) * rInner}
        stroke="#e9d5ff"
        strokeWidth={isMajor ? 1.4 : 0.8}
        opacity={isMajor ? 1 : 0.6}
      />
    );
    if (isMajor) {
      const lx = Math.cos(theta) * (thimbleRadius - 24);
      const ly = Math.sin(theta) * (thimbleRadius - 24);
      thimbleTicks.push(
        <text key={`t${i}`} x={lx} y={ly} fontSize="8" fill="#f5d0fe" textAnchor="middle">
          {i}
        </text>
      );
    }
  }

  // Posisi elemen bergerak: spindle tip & thimble bergeser mengikuti gapPx.
  const spindleTipX = gapPx;
  const thimbleCenterX = gapPx + 90;

  return (
    <g transform={`translate(${anchorX}, ${anchorY})`}>
      {/* Bingkai C (frame) — bagian diam, menopang seluruh alat */}
      <path
        d="M 0 -6 C -70 -10, -100 40, -70 90 C -55 118, -20 118, 0 110"
        stroke="#334155"
        strokeWidth={14}
        fill="none"
        strokeLinecap="round"
      />
      <circle cx={-30} cy={104} r={16} fill="#1e293b" stroke="#475569" strokeWidth={2} />

      {/* Anvil — rahang tetap, menyentuh ujung kiri objek */}
      <rect x={-8} y={-10} width={16} height={20} rx={3} fill="#94a3b8" stroke="#475569" />

      {/* Spindle — batang yang bergerak menutup jarak menuju objek */}
      <rect x={0} y={-6} width={spindleTipX} height={12} fill="#cbd5e1" stroke="#64748b" strokeWidth={0.8} />
      <rect x={spindleTipX - 4} y={-9} width={8} height={18} rx={2} fill="#e2e8f0" stroke="#475569" />

      {/* Sleeve tetap (badan skala utama, tidak ikut bergerak) */}
      <g transform={`translate(${maxGapPx + 40}, 0)`}>
        <rect x={-10} y={-18} width={154} height={36} rx={8} fill="#0e1e2b" stroke="#22d3ee" strokeOpacity={0.55} strokeWidth={1.4} />
        {sleeveTicks}
        <line x1={-6} y1={0} x2={144} y2={0} stroke="#67e8f9" strokeWidth={1} opacity={0.7} />
      </g>

      {/* Thimble — ikut bergeser & berputar mengikuti gapPx */}
      <g
        transform={`translate(${thimbleCenterX}, 0)`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        style={{ cursor: "ew-resize", touchAction: "none" }}
      >
        <circle r={thimbleRadius + 16} fill="url(#thimbleBody)" stroke="#a78bfa" strokeOpacity={0.65} strokeWidth={1.5} />
        <defs>
          <radialGradient id="thimbleBody">
            <stop offset="0%" stopColor="#3b0f7a" />
            <stop offset="100%" stopColor="#150826" />
          </radialGradient>
        </defs>
        {/* garis knurled dekoratif di tepi luar thimble */}
        {Array.from({ length: 24 }).map((_, i) => {
          const t = (i / 24) * 2 * Math.PI;
          const r1 = thimbleRadius + 16;
          const r2 = thimbleRadius + 24;
          return (
            <line
              key={`kn${i}`}
              x1={Math.cos(t) * r1}
              y1={Math.sin(t) * r1}
              x2={Math.cos(t) * r2}
              y2={Math.sin(t) * r2}
              stroke="#a78bfa"
              strokeWidth={2}
              opacity={0.5}
            />
          );
        })}
        <g style={{ transform: `rotate(${angle}deg)`, transformOrigin: "0px 0px" }}>{thimbleTicks}</g>
        <line x1={-thimbleRadius - 16} y1={0} x2={-thimbleRadius + 10} y2={0} stroke="#f472b6" strokeWidth={2.4} />
      </g>

      <text x={thimbleCenterX} y={thimbleRadius + 46} fontSize="12" fill="#c4b5fd" textAnchor="middle" opacity={0.8}>
        putar / geser thimble untuk menutup rahang ke arah objek
      </text>
    </g>
  );
}
