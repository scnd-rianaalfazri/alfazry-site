import { useState, useEffect, useRef, useCallback } from "react";

// ── Konstanta warna ───────────────────────────────────────────
const WARNA_A = { isi: "#378ADD", teks: "#185FA5" };
const WARNA_B = { isi: "#D85A30", teks: "#993C1D" };

// ── Rumus tabrakan elastis ────────────────────────────────────
function hitungTabrakan(mA, vA, mB, vB) {
  const vA2 = ((mA - mB) * vA + 2 * mB * vB) / (mA + mB);
  const vB2 = ((mB - mA) * vB + 2 * mA * vA) / (mA + mB);
  return { vA2, vB2 };
}

// ── Komponen Slider ───────────────────────────────────────────
function SliderRow({ label, min, max, value, onChange, satuan = "", positif = false }) {
  const tampil = positif && value > 0 ? `+${value}` : `${value}`;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
      <span style={{ fontSize: 12, color: "#666", minWidth: 72 }}>{label}</span>
      <input
        type="range" min={min} max={max} step={1} value={value}
        onChange={e => onChange(Number(e.target.value))}
        style={{ flex: 1, accentColor: "#378ADD" }}
      />
      <span style={{ fontSize: 13, fontWeight: 600, minWidth: 36, textAlign: "right", color: "#222" }}>
        {tampil}{satuan}
      </span>
    </div>
  );
}

// ── Komponen utama ────────────────────────────────────────────
export default function MomentumSimulation() {
  // State slider
  const [massA, setMassA]   = useState(3);
  const [massB, setMassB]   = useState(2);
  const [initVA, setInitVA] = useState(3);
  const [initVB, setInitVB] = useState(-2);

  // State simulasi
  const [berjalan, setBerjalan] = useState(false);
  const [info, setInfo]         = useState({ pA: 9, pB: -4, total: 5 });

  // Ref untuk data simulasi (tidak perlu re-render setiap frame)
  const canvasRef  = useRef(null);
  const simRef     = useRef(null);   // { xA, xB, velA, velB }
  const rafRef     = useRef(null);   // requestAnimationFrame id
  const berjalanRef = useRef(false); // salinan ref agar loop baca nilai terkini

  // Radius bola sesuai massa
  const rA = 10 + massA * 5;
  const rB = 10 + massB * 5;

  // ── Reset posisi & kecepatan ──────────────────────────────
  const resetBola = useCallback(() => {
    simRef.current = { xA: 130, xB: 470, velA: initVA, velB: initVB };
    setInfo({
      pA:    massA * initVA,
      pB:    massB * initVB,
      total: massA * initVA + massB * initVB,
    });
    setBerjalan(false);
    berjalanRef.current = false;
  }, [initVA, initVB, massA, massB]);

  // Inisialisasi saat pertama render
  useEffect(() => { resetBola(); }, []); // eslint-disable-line

  // ── Loop animasi ──────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const W = canvas.width;
    const H = canvas.height;
    const LANTAI = H - 30;

    function gambarPanah(x, y, v, warna) {
      if (Math.abs(v) < 0.2) return;
      const panjang = Math.min(Math.abs(v) * 12, 55) * Math.sign(v);
      ctx.strokeStyle = warna;
      ctx.fillStyle   = warna;
      ctx.lineWidth   = 2;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + panjang, y);
      ctx.stroke();
      ctx.beginPath();
      const ujung = x + panjang;
      const arah  = Math.sign(panjang);
      ctx.moveTo(ujung, y - 5);
      ctx.lineTo(ujung, y + 5);
      ctx.lineTo(ujung + 8 * arah, y);
      ctx.closePath();
      ctx.fill();
    }

    function frame() {
      const sim = simRef.current;
      if (!sim) { rafRef.current = requestAnimationFrame(frame); return; }

      // Update fisika hanya jika berjalan
      if (berjalanRef.current) {
        sim.xA += sim.velA * 1.5;
        sim.xB += sim.velB * 1.5;

        // Tabrakan antar bola
        const jarak = (sim.xB - rB) - (sim.xA + rA);
        const mendekat = sim.velA - sim.velB > 0;
        if (jarak <= 0 && mendekat) {
          const { vA2, vB2 } = hitungTabrakan(massA, sim.velA, massB, sim.velB);
          sim.velA = vA2;
          sim.velB = vB2;
          sim.xA   = sim.xB - rB - rA;
          setInfo({
            pA:    parseFloat((massA * vA2).toFixed(1)),
            pB:    parseFloat((massB * vB2).toFixed(1)),
            total: parseFloat((massA * vA2 + massB * vB2).toFixed(1)),
          });
        }

        // Pantul dinding
        if (sim.xA - rA < 0)    { sim.xA = rA;     sim.velA =  Math.abs(sim.velA); }
        if (sim.xA + rA > W)    { sim.xA = W - rA;  sim.velA = -Math.abs(sim.velA); }
        if (sim.xB - rB < 0)    { sim.xB = rB;     sim.velB =  Math.abs(sim.velB); }
        if (sim.xB + rB > W)    { sim.xB = W - rB;  sim.velB = -Math.abs(sim.velB); }
      }

      // ── Gambar ──
      ctx.clearRect(0, 0, W, H);

      // Latar
      ctx.fillStyle = "#F7F6F3";
      ctx.fillRect(0, 0, W, H);

      // Lantai
      ctx.strokeStyle = "#CCCCCC";
      ctx.lineWidth   = 1;
      ctx.beginPath();
      ctx.moveTo(0, LANTAI);
      ctx.lineTo(W, LANTAI);
      ctx.stroke();

      // Panah kecepatan
      gambarPanah(sim.xA, LANTAI - rA - 18, sim.velA, WARNA_A.teks);
      gambarPanah(sim.xB, LANTAI - rB - 18, sim.velB, WARNA_B.teks);

      // Bola A
      ctx.beginPath();
      ctx.arc(sim.xA, LANTAI - rA, rA, 0, Math.PI * 2);
      ctx.fillStyle = WARNA_A.isi;
      ctx.fill();

      // Bola B
      ctx.beginPath();
      ctx.arc(sim.xB, LANTAI - rB, rB, 0, Math.PI * 2);
      ctx.fillStyle = WARNA_B.isi;
      ctx.fill();

      // Label bola
      ctx.textAlign = "center";
      ctx.font      = "bold 12px monospace";
      ctx.fillStyle = WARNA_A.teks;
      ctx.fillText(`A: ${massA}kg`, sim.xA, LANTAI - rA * 2 - 24);
      ctx.fillStyle = WARNA_B.teks;
      ctx.fillText(`B: ${massB}kg`, sim.xB, LANTAI - rB * 2 - 24);

      rafRef.current = requestAnimationFrame(frame);
    }

    rafRef.current = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(rafRef.current);
  }, [massA, massB, rA, rB]); // re-run jika massa berubah

  // ── Toggle jeda / lanjut ──────────────────────────────────
  function toggleJeda() {
    const next = !berjalan;
    setBerjalan(next);
    berjalanRef.current = next;
  }

  // ── Render ────────────────────────────────────────────────
  const labelBtn = berjalan ? "⏸ Jeda" : (simRef.current?.velA !== initVA ? "▶ Lanjut" : "▶ Mulai");

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", maxWidth: 620, margin: "0 auto", padding: "16px 12px" }}>

      {/* Judul */}
      <h2 style={{ margin: "0 0 4px", fontSize: 18, fontWeight: 700, color: "#111" }}>
        Simulasi Momentum
      </h2>
      <p style={{ margin: "0 0 14px", fontSize: 13, color: "#666" }}>
        p = m × v &nbsp;|&nbsp; Hukum Kekekalan Momentum
      </p>

      {/* Kanvas */}
      <canvas
        ref={canvasRef}
        width={600} height={200}
        style={{ width: "100%", borderRadius: 10, border: "1px solid #E0DED8", display: "block" }}
      />

      {/* Panel info momentum */}
      <div style={{ display: "flex", gap: 8, margin: "10px 0" }}>
        {[
          { label: "Momentum A", nilai: info.pA, warna: WARNA_A.teks },
          { label: "Momentum B", nilai: info.pB, warna: WARNA_B.teks },
          { label: "Total",      nilai: info.total, warna: "#111", bold: true },
        ].map(({ label, nilai, warna, bold }) => (
          <div key={label} style={{
            flex: 1, background: "#F0EEE8", borderRadius: 8, padding: "8px 10px",
            border: "0.5px solid #DDD"
          }}>
            <div style={{ fontSize: 11, color: "#888", marginBottom: 2 }}>{label}</div>
            <div style={{ fontSize: 15, fontWeight: bold ? 700 : 600, color: warna }}>
              {nilai >= 0 ? "+" : ""}{Number(nilai).toFixed(1)} <span style={{ fontWeight: 400, fontSize: 11 }}>kg·m/s</span>
            </div>
          </div>
        ))}
      </div>

      {/* Slider kontrol */}
      <div style={{ display: "flex", gap: 12, marginBottom: 12, flexWrap: "wrap" }}>
        {/* Bola A */}
        <div style={{ flex: 1, minWidth: 240, background: "#EFF6FD", borderRadius: 10, padding: "12px 14px", border: "0.5px solid #B5D4F4" }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: WARNA_A.teks, marginBottom: 8 }}>
            Bola A (biru)
          </div>
          <SliderRow label="Massa (kg)" min={1} max={10} value={massA} onChange={v => { setMassA(v); resetBola(); }} satuan=" kg" />
          <SliderRow label="Kecepatan"  min={-6} max={6}  value={initVA} onChange={v => { setInitVA(v); }} positif satuan=" m/s" />
        </div>

        {/* Bola B */}
        <div style={{ flex: 1, minWidth: 240, background: "#FDF2EE", borderRadius: 10, padding: "12px 14px", border: "0.5px solid #F5C4B3" }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: WARNA_B.teks, marginBottom: 8 }}>
            Bola B (merah)
          </div>
          <SliderRow label="Massa (kg)" min={1} max={10} value={massB} onChange={v => { setMassB(v); resetBola(); }} satuan=" kg" />
          <SliderRow label="Kecepatan"  min={-6} max={6}  value={initVB} onChange={v => { setInitVB(v); }} positif satuan=" m/s" />
        </div>
      </div>

      {/* Tombol */}
      <div style={{ display: "flex", gap: 8 }}>
        <button
          onClick={toggleJeda}
          style={{
            flex: 1, padding: "9px 0", borderRadius: 8, border: "1px solid #378ADD",
            background: berjalan ? "#378ADD" : "#fff",
            color: berjalan ? "#fff" : "#378ADD",
            fontSize: 14, fontWeight: 600, cursor: "pointer", transition: "all 0.15s"
          }}
        >
          {labelBtn}
        </button>
        <button
          onClick={resetBola}
          style={{
            flex: 1, padding: "9px 0", borderRadius: 8, border: "1px solid #CCC",
            background: "#fff", color: "#444",
            fontSize: 14, fontWeight: 600, cursor: "pointer"
          }}
        >
          ↺ Reset
        </button>
      </div>

      {/* Rumus */}
      <div style={{ marginTop: 12, padding: "10px 14px", background: "#F0EEE8", borderRadius: 8, fontSize: 12, color: "#666", border: "0.5px solid #DDD" }}>
        <strong style={{ color: "#333" }}>Tabrakan elastis:</strong>&nbsp;
        v'<sub>A</sub> = (m<sub>A</sub>−m<sub>B</sub>)v<sub>A</sub> + 2m<sub>B</sub>v<sub>B</sub> / (m<sub>A</sub>+m<sub>B</sub>) &nbsp;|&nbsp;
        Energi kinetik <strong style={{ color: "#333" }}>terjaga</strong>
      </div>
    </div>
  );
}
