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

// ── Helper: unduh file ────────────────────────────────────────
// Membuat link sementara, klik otomatis, lalu hapus
function unduhFile(url, namaFile) {
  const a = document.createElement("a");
  a.href = url;
  a.download = namaFile;
  a.click();
  URL.revokeObjectURL(url); // bebaskan memori
}

// ── Komponen utama ────────────────────────────────────────────
export default function MomentumSimulasi() {
  const [massA, setMassA]   = useState(3);
  const [massB, setMassB]   = useState(2);
  const [initVA, setInitVA] = useState(3);
  const [initVB, setInitVB] = useState(-2);
  const [berjalan, setBerjalan] = useState(false);
  const [info, setInfo] = useState({ pA: 9, pB: -4, total: 5 });
  const [menuExport, setMenuExport] = useState(false);

  const canvasRef    = useRef(null);
  const simRef       = useRef(null);
  const rafRef       = useRef(null);
  const berjalanRef  = useRef(false);
  // Rekam log data momentum untuk export CSV
  const logRef       = useRef([]);

  const rA = 10 + massA * 5;
  const rB = 10 + massB * 5;

  // ── Reset ──────────────────────────────────────────────────
  const resetBola = useCallback(() => {
    simRef.current = { xA: 130, xB: 470, velA: initVA, velB: initVB };
    logRef.current = [];
    setInfo({ pA: massA * initVA, pB: massB * initVB, total: massA * initVA + massB * initVB });
    setBerjalan(false);
    berjalanRef.current = false;
  }, [initVA, initVB, massA, massB]);

  useEffect(() => { resetBola(); }, []); // eslint-disable-line

  // ── Loop animasi ───────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx   = canvas.getContext("2d");
    const W     = canvas.width;
    const H     = canvas.height;
    const LANTAI = H - 30;
    let frameCount = 0;

    function gambarPanah(x, y, v, warna) {
      if (Math.abs(v) < 0.2) return;
      const panjang = Math.min(Math.abs(v) * 12, 55) * Math.sign(v);
      ctx.strokeStyle = warna; ctx.fillStyle = warna; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + panjang, y); ctx.stroke();
      const ujung = x + panjang; const arah = Math.sign(panjang);
      ctx.beginPath();
      ctx.moveTo(ujung, y - 5); ctx.lineTo(ujung, y + 5); ctx.lineTo(ujung + 8 * arah, y);
      ctx.closePath(); ctx.fill();
    }

    function frame() {
      const sim = simRef.current;
      if (!sim) { rafRef.current = requestAnimationFrame(frame); return; }

      if (berjalanRef.current) {
        sim.xA += sim.velA * 1.5;
        sim.xB += sim.velB * 1.5;

        const jarak    = (sim.xB - rB) - (sim.xA + rA);
        const mendekat = sim.velA - sim.velB > 0;
        if (jarak <= 0 && mendekat) {
          const { vA2, vB2 } = hitungTabrakan(massA, sim.velA, massB, sim.velB);
          sim.velA = vA2; sim.velB = vB2;
          sim.xA   = sim.xB - rB - rA;
          setInfo({
            pA:    parseFloat((massA * vA2).toFixed(1)),
            pB:    parseFloat((massB * vB2).toFixed(1)),
            total: parseFloat((massA * vA2 + massB * vB2).toFixed(1)),
          });
        }
        if (sim.xA - rA < 0)   { sim.xA = rA;      sim.velA =  Math.abs(sim.velA); }
        if (sim.xA + rA > W)   { sim.xA = W - rA;   sim.velA = -Math.abs(sim.velA); }
        if (sim.xB - rB < 0)   { sim.xB = rB;      sim.velB =  Math.abs(sim.velB); }
        if (sim.xB + rB > W)   { sim.xB = W - rB;   sim.velB = -Math.abs(sim.velB); }

        // Rekam log setiap 10 frame agar CSV tidak terlalu besar
        frameCount++;
        if (frameCount % 10 === 0) {
          logRef.current.push({
            frame:      frameCount,
            xA:         sim.xA.toFixed(1),
            xB:         sim.xB.toFixed(1),
            velA:       sim.velA.toFixed(2),
            velB:       sim.velB.toFixed(2),
            momentumA:  (massA * sim.velA).toFixed(2),
            momentumB:  (massB * sim.velB).toFixed(2),
            totalP:     (massA * sim.velA + massB * sim.velB).toFixed(2),
          });
        }
      }

      // Gambar
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "#F7F6F3"; ctx.fillRect(0, 0, W, H);
      ctx.strokeStyle = "#CCCCCC"; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(0, LANTAI); ctx.lineTo(W, LANTAI); ctx.stroke();
      gambarPanah(sim.xA, LANTAI - rA - 18, sim.velA, WARNA_A.teks);
      gambarPanah(sim.xB, LANTAI - rB - 18, sim.velB, WARNA_B.teks);
      ctx.beginPath(); ctx.arc(sim.xA, LANTAI - rA, rA, 0, Math.PI * 2);
      ctx.fillStyle = WARNA_A.isi; ctx.fill();
      ctx.beginPath(); ctx.arc(sim.xB, LANTAI - rB, rB, 0, Math.PI * 2);
      ctx.fillStyle = WARNA_B.isi; ctx.fill();
      ctx.textAlign = "center"; ctx.font = "bold 12px monospace";
      ctx.fillStyle = WARNA_A.teks; ctx.fillText(`A: ${massA}kg`, sim.xA, LANTAI - rA * 2 - 24);
      ctx.fillStyle = WARNA_B.teks; ctx.fillText(`B: ${massB}kg`, sim.xB, LANTAI - rB * 2 - 24);

      rafRef.current = requestAnimationFrame(frame);
    }

    rafRef.current = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(rafRef.current);
  }, [massA, massB, rA, rB]);

  // ── Toggle jeda ────────────────────────────────────────────
  function toggleJeda() {
    const next = !berjalan;
    setBerjalan(next);
    berjalanRef.current = next;
  }

  // ══════════════════════════════════════════════════════════
  // FITUR EXPORT
  // ══════════════════════════════════════════════════════════

  // 1. Export PNG — ambil gambar kanvas langsung
  function exportPNG() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    // toDataURL mengubah kanvas menjadi string base64 format PNG
    const url = canvas.toDataURL("image/png");
    unduhFile(url, "simulasi-momentum.png");
    setMenuExport(false);
  }

  // 2. Export CSV — ubah array log menjadi teks CSV lalu unduh
  function exportCSV() {
    const log = logRef.current;
    if (log.length === 0) {
      alert("Jalankan simulasi dulu agar ada data yang direkam!");
      return;
    }
    // Baris pertama = header kolom
    const header = "Frame,Posisi A,Posisi B,Kecepatan A,Kecepatan B,Momentum A,Momentum B,Total Momentum\n";
    // Setiap item log diubah jadi satu baris CSV
    const baris  = log.map(r =>
      `${r.frame},${r.xA},${r.xB},${r.velA},${r.velB},${r.momentumA},${r.momentumB},${r.totalP}`
    ).join("\n");
    const blob = new Blob([header + baris], { type: "text/csv" });
    unduhFile(URL.createObjectURL(blob), "data-momentum.csv");
    setMenuExport(false);
  }

  // 3. Export PDF — buat halaman HTML sementara lalu panggil window.print()
  function exportPDF() {
    const canvas  = canvasRef.current;
    const imgData = canvas ? canvas.toDataURL("image/png") : "";
    const sim     = simRef.current;

    // Buat konten HTML laporan
    const html = `
      <html><head><title>Laporan Simulasi Momentum</title>
      <style>
        body { font-family: Georgia, serif; padding: 40px; color: #222; max-width: 700px; margin: auto; }
        h1   { font-size: 22px; margin-bottom: 4px; }
        p    { font-size: 13px; color: #555; margin: 0 0 20px; }
        img  { width: 100%; border: 1px solid #ddd; border-radius: 8px; margin-bottom: 20px; }
        table { width: 100%; border-collapse: collapse; font-size: 13px; }
        th, td { border: 1px solid #ddd; padding: 7px 10px; text-align: center; }
        th { background: #f5f5f5; font-weight: 600; }
        .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 20px; }
        .card { background: #f9f9f9; border: 1px solid #e0e0e0; border-radius: 8px; padding: 12px; }
        .card .label { font-size: 11px; color: #888; margin-bottom: 4px; }
        .card .val   { font-size: 18px; font-weight: 700; }
      </style></head><body>
      <h1>Laporan Simulasi Momentum</h1>
      <p>Dicetak pada ${new Date().toLocaleString("id-ID")}</p>
      <img src="${imgData}" alt="Simulasi" />
      <div class="grid">
        <div class="card"><div class="label">Massa Bola A</div><div class="val">${massA} kg</div></div>
        <div class="card"><div class="label">Massa Bola B</div><div class="val">${massB} kg</div></div>
        <div class="card"><div class="label">Kecepatan Awal A</div><div class="val">${initVA >= 0 ? "+" : ""}${initVA} m/s</div></div>
        <div class="card"><div class="label">Kecepatan Awal B</div><div class="val">${initVB >= 0 ? "+" : ""}${initVB} m/s</div></div>
        <div class="card"><div class="label">Momentum A (saat ini)</div><div class="val">${info.pA >= 0 ? "+" : ""}${Number(info.pA).toFixed(1)} kg·m/s</div></div>
        <div class="card"><div class="label">Momentum B (saat ini)</div><div class="val">${info.pB >= 0 ? "+" : ""}${Number(info.pB).toFixed(1)} kg·m/s</div></div>
      </div>
      <table>
        <thead><tr><th>Total Momentum</th><th>Rumus</th><th>Tipe Tabrakan</th></tr></thead>
        <tbody><tr>
          <td>${info.total >= 0 ? "+" : ""}${Number(info.total).toFixed(1)} kg·m/s</td>
          <td>p = m × v</td>
          <td>Elastis (energi terjaga)</td>
        </tr></tbody>
      </table>
      </body></html>`;

    // Buka tab baru → tulis HTML → panggil print dialog
    const tab = window.open("", "_blank");
    tab.document.write(html);
    tab.document.close();
    tab.focus();
    tab.print();
    setMenuExport(false);
  }

  // ── Render ─────────────────────────────────────────────────
  const labelBtn = berjalan ? "⏸ Jeda" : "▶ Mulai";

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", maxWidth: 620, margin: "0 auto", padding: "16px 12px" }}>

      {/* Judul */}
      <h2 style={{ margin: "0 0 4px", fontSize: 18, fontWeight: 700, color: "#111" }}>Simulasi Momentum</h2>
      <p  style={{ margin: "0 0 14px", fontSize: 13, color: "#666" }}>
        p = m × v &nbsp;|&nbsp; Hukum Kekekalan Momentum
      </p>

      {/* Kanvas */}
      <canvas ref={canvasRef} width={600} height={200}
        style={{ width: "100%", borderRadius: 10, border: "1px solid #E0DED8", display: "block" }} />

      {/* Panel momentum */}
      <div style={{ display: "flex", gap: 8, margin: "10px 0" }}>
        {[
          { label: "Momentum A", nilai: info.pA,    warna: WARNA_A.teks },
          { label: "Momentum B", nilai: info.pB,    warna: WARNA_B.teks },
          { label: "Total",      nilai: info.total, warna: "#111", bold: true },
        ].map(({ label, nilai, warna, bold }) => (
          <div key={label} style={{ flex: 1, background: "#F0EEE8", borderRadius: 8, padding: "8px 10px", border: "0.5px solid #DDD" }}>
            <div style={{ fontSize: 11, color: "#888", marginBottom: 2 }}>{label}</div>
            <div style={{ fontSize: 15, fontWeight: bold ? 700 : 600, color: warna }}>
              {nilai >= 0 ? "+" : ""}{Number(nilai).toFixed(1)}{" "}
              <span style={{ fontWeight: 400, fontSize: 11 }}>kg·m/s</span>
            </div>
          </div>
        ))}
      </div>

      {/* Slider */}
      <div style={{ display: "flex", gap: 12, marginBottom: 12, flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: 240, background: "#EFF6FD", borderRadius: 10, padding: "12px 14px", border: "0.5px solid #B5D4F4" }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: WARNA_A.teks, marginBottom: 8 }}>Bola A (biru)</div>
          <SliderRow label="Massa (kg)" min={1} max={10} value={massA} onChange={v => { setMassA(v); resetBola(); }} satuan=" kg" />
          <SliderRow label="Kecepatan"  min={-6} max={6}  value={initVA} onChange={v => { setInitVA(v); }} positif satuan=" m/s" />
        </div>
        <div style={{ flex: 1, minWidth: 240, background: "#FDF2EE", borderRadius: 10, padding: "12px 14px", border: "0.5px solid #F5C4B3" }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: WARNA_B.teks, marginBottom: 8 }}>Bola B (merah)</div>
          <SliderRow label="Massa (kg)" min={1} max={10} value={massB} onChange={v => { setMassB(v); resetBola(); }} satuan=" kg" />
          <SliderRow label="Kecepatan"  min={-6} max={6}  value={initVB} onChange={v => { setInitVB(v); }} positif satuan=" m/s" />
        </div>
      </div>

      {/* Tombol simulasi + export */}
      <div style={{ display: "flex", gap: 8, position: "relative" }}>
        <button onClick={toggleJeda} style={{
          flex: 1, padding: "9px 0", borderRadius: 8, border: "1px solid #378ADD",
          background: berjalan ? "#378ADD" : "#fff", color: berjalan ? "#fff" : "#378ADD",
          fontSize: 14, fontWeight: 600, cursor: "pointer", transition: "all 0.15s"
        }}>{labelBtn}</button>

        <button onClick={resetBola} style={{
          flex: 1, padding: "9px 0", borderRadius: 8, border: "1px solid #CCC",
          background: "#fff", color: "#444", fontSize: 14, fontWeight: 600, cursor: "pointer"
        }}>↺ Reset</button>

        {/* Tombol export dengan dropdown */}
        <div style={{ position: "relative" }}>
          <button onClick={() => setMenuExport(m => !m)} style={{
            padding: "9px 16px", borderRadius: 8, border: "1px solid #888",
            background: menuExport ? "#333" : "#fff",
            color: menuExport ? "#fff" : "#444",
            fontSize: 14, fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap"
          }}>⬇ Export</button>

          {/* Dropdown menu */}
          {menuExport && (
            <div style={{
              position: "absolute", right: 0, top: "calc(100% + 6px)",
              background: "#fff", border: "1px solid #DDD", borderRadius: 10,
              boxShadow: "0 4px 16px rgba(0,0,0,0.12)", zIndex: 10, minWidth: 180, overflow: "hidden"
            }}>
              {[
                { icon: "🖼️", label: "Export PNG",  sub: "Screenshot kanvas",     fn: exportPNG },
                { icon: "📊", label: "Export CSV",  sub: "Data momentum per frame", fn: exportCSV },
                { icon: "📄", label: "Export PDF",  sub: "Laporan simulasi",        fn: exportPDF },
              ].map(({ icon, label, sub, fn }) => (
                <button key={label} onClick={fn} style={{
                  display: "flex", alignItems: "center", gap: 10,
                  width: "100%", padding: "10px 14px", border: "none",
                  background: "transparent", cursor: "pointer", textAlign: "left",
                  borderBottom: "0.5px solid #F0F0F0",
                }}>
                  <span style={{ fontSize: 18 }}>{icon}</span>
                  <span>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#222" }}>{label}</div>
                    <div style={{ fontSize: 11, color: "#999" }}>{sub}</div>
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Rumus */}
      <div style={{ marginTop: 12, padding: "10px 14px", background: "#F0EEE8", borderRadius: 8, fontSize: 12, color: "#666", border: "0.5px solid #DDD" }}>
        <strong style={{ color: "#333" }}>Tabrakan elastis:</strong>&nbsp;
        v'<sub>A</sub> = (m<sub>A</sub>−m<sub>B</sub>)v<sub>A</sub> + 2m<sub>B</sub>v<sub>B</sub> / (m<sub>A</sub>+m<sub>B</sub>)
        &nbsp;|&nbsp; Energi kinetik <strong style={{ color: "#333" }}>terjaga</strong>
      </div>
    </div>
  );
}
