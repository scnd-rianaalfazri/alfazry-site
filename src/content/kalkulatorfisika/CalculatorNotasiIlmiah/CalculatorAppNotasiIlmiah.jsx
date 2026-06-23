import { useState, useEffect, useRef } from "react";

const tabs = [
  { id: "hasil", label: "Hasil", icon: "📊" },
  { id: "perhitungan", label: "Perhitungan", icon: "📖" },
  { id: "kesimpulan", label: "Kesimpulan", icon: "🧠" },
  { id: "grafik", label: "Grafik", icon: "📈" },
];

export default function VirLabMomentumSimulation() {
  const [massaA, setMassaA] = useState(2);
  const [massaB, setMassaB] = useState(3);
  const [kecepatanAwalA, setKecepatanAwalA] = useState(4);
  const [kecepatanAwalB, setKecepatanAwalB] = useState(-2);

  const [restitusi, setRestitusi] = useState(1);

  const [posA, setPosA] = useState(50);
  const [posB, setPosB] = useState(450);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(520);

  const [running, setRunning] = useState(false);

  const [kecepatanAkhirA, setKecepatanAkhirA] = useState(null);
  const [kecepatanAkhirB, setKecepatanAkhirB] = useState(null);

  const posARef = useRef(50);
  const posBRef = useRef(450);
  const velARef = useRef(kecepatanAwalA);
  const velBRef = useRef(kecepatanAwalB);

  const ballSizeA = 20 + massaA * 4;
  const ballSizeB = 20 + massaB * 4;
  const maxPosA = Math.max(0, containerWidth - ballSizeA);
  const maxPosB = Math.max(0, containerWidth - ballSizeB);

  const round2 = (value) => Number(value.toFixed(2));

  const momentumA = round2(massaA * kecepatanAwalA);
  const momentumB = round2(massaB * kecepatanAwalB);
  const momentumAwal = round2(momentumA + momentumB);

  const momentumSaatIniA = round2(massaA * velARef.current);
  const momentumSaatIniB = round2(massaB * velBRef.current);
  const momentumTotalSaatIni = round2(momentumSaatIniA + momentumSaatIniB);

  const energiAwalA = round2(0.5 * massaA * kecepatanAwalA * kecepatanAwalA);
  const energiAwalB = round2(0.5 * massaB * kecepatanAwalB * kecepatanAwalB);
  const energiTotalAwal = round2(energiAwalA + energiAwalB);

  const energiSaatIniA = round2(0.5 * massaA * velARef.current * velARef.current);
  const energiSaatIniB = round2(0.5 * massaB * velBRef.current * velBRef.current);
  const energiTotalSaatIni = round2(energiSaatIniA + energiSaatIniB);

  const [menyatu, setMenyatu] = useState(false);
  const [activeTab, setActiveTab] = useState("hasil");

  useEffect(() => {
    posARef.current = posA;
  }, [posA]);

  useEffect(() => {
    posBRef.current = posB;
  }, [posB]);

  useEffect(() => {
    velARef.current = kecepatanAwalA;
  }, [kecepatanAwalA]);

  useEffect(() => {
    velBRef.current = kecepatanAwalB;
  }, [kecepatanAwalB]);

  useEffect(() => {
    if (!containerRef.current) return;

    const updateWidth = () => {
      setContainerWidth(containerRef.current.clientWidth || 520);
    };

    updateWidth();

    const observer = new ResizeObserver(updateWidth);
    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (posA > maxPosA) {
      setPosA(maxPosA);
      posARef.current = maxPosA;
    }

    if (posB > maxPosB) {
      setPosB(maxPosB);
      posBRef.current = maxPosB;
    }
  }, [maxPosA, maxPosB, posA, posB]);

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      let nextA = posARef.current + velARef.current;
      let nextB = posBRef.current + velBRef.current;
      let nextVelA = velARef.current;
      let nextVelB = velBRef.current;

      if (menyatu) {
        nextA = posARef.current + velARef.current;
        nextB = nextA + ballSizeA;

        velARef.current = nextVelA;
        velBRef.current = nextVelA;
      }

      if (nextA <= 0) {
        nextVelA = -nextVelA;
        nextA = 0;
      } else if (nextA >= maxPosA) {
        nextVelA = -nextVelA;
        nextA = maxPosA;
      }

      if (nextB <= 0) {
        nextVelB = -nextVelB;
        nextB = 0;
      } else if (nextB >= maxPosB) {
        nextVelB = -nextVelB;
        nextB = maxPosB;
      }

      if (
        posARef.current + ballSizeA <= posBRef.current &&
        nextA + ballSizeA >= nextB
      ) {
        const u1 = nextVelA;
        const u2 = nextVelB;

        const newVelA =
          ((massaA - restitusi * massaB) * u1 +
            (1 + restitusi) * massaB * u2) /
          (massaA + massaB);

        const newVelB =
          ((massaB - restitusi * massaA) * u2 +
            (1 + restitusi) * massaA * u1) /
          (massaA + massaB);

        nextVelA = newVelA;
        nextVelB = newVelB;

        if (restitusi === 0) {
          nextB = nextA + ballSizeA;
          setMenyatu(true);
        }

        setKecepatanAkhirA(round2(newVelA));
        setKecepatanAkhirB(round2(newVelB));

        if (restitusi !== 0) {
          const overlap = nextA + ballSizeA - nextB;

          if (overlap > 0) {
            nextA -= overlap / 2;
            nextB += overlap / 2;
          }
        }
      }

      velARef.current = nextVelA;
      velBRef.current = nextVelB;
      posARef.current = nextA;
      posBRef.current = nextB;

      setPosA(nextA);
      setPosB(nextB);
    }, 20);

    return () => clearInterval(interval);
  }, [running, maxPosA, maxPosB, massaA, massaB, restitusi]);

  const resetSimulasi = () => {
    const startA = 0;
    const startB = maxPosB;

    setRunning(false);
    setKecepatanAkhirA(null);
    setKecepatanAkhirB(null);
    setMenyatu(false);
    setPosA(startA);
    setPosB(startB);
    posARef.current = startA;
    posBRef.current = startB;
    velARef.current = kecepatanAwalA;
    velBRef.current = kecepatanAwalB;
  };

  const arahA = velARef.current >= 0 ? "→" : "←";
  const arahB = velBRef.current >= 0 ? "→" : "←";

  const jenisTumbukan =
    restitusi === 1
      ? { label: "Lenting Sempurna", color: "#6ee7b7", bg: "rgba(16,185,129,0.1)", border: "rgba(16,185,129,0.3)", dot: "🟢" }
      : restitusi === 0
      ? { label: "Tidak Lenting Sempurna", color: "#fca5a5", bg: "rgba(239,68,68,0.1)", border: "rgba(239,68,68,0.3)", dot: "🔴" }
      : { label: "Lenting Sebagian", color: "#fcd34d", bg: "rgba(245,158,11,0.1)", border: "rgba(245,158,11,0.3)", dot: "🟡" };

  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        borderRadius: "24px",
        border: "1px solid #334155",
        background: "linear-gradient(to bottom right, #0f172a, #0f172a, #083344)",
        padding: "24px",
        color: "white",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "12px",
          marginBottom: "10px",
        }}
      >
        <div>
          <h2 style={{ fontSize: "28px", fontWeight: 700, margin: 0, display: "flex", alignItems: "center", gap: "8px" }}>
            🚀 Simulasi Momentum
          </h2>
          <p style={{ color: "#94a3b8", marginTop: "6px" }}>
            Eksplorasi tumbukan dua benda dan kekekalan momentum.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            borderRadius: "999px",
            padding: "6px 16px",
            fontSize: "14px",
            fontWeight: 500,
            background: running ? "rgba(16,185,129,0.15)" : "rgba(255,255,255,0.05)",
            color: running ? "#6ee7b7" : "#94a3b8",
            border: `1px solid ${running ? "rgba(16,185,129,0.3)" : "rgba(255,255,255,0.1)"}`,
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: running ? "#34d399" : "rgba(255,255,255,0.3)",
            }}
          />
          {running ? "Berjalan" : "Berhenti"}
        </div>
      </div>

      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          borderRadius: "999px",
          border: `1px solid ${jenisTumbukan.border}`,
          background: jenisTumbukan.bg,
          color: jenisTumbukan.color,
          padding: "5px 14px",
          fontSize: "14px",
          fontWeight: 500,
          marginBottom: "20px",
        }}
      >
        {jenisTumbukan.dot} Tumbukan {jenisTumbukan.label} (e = {restitusi.toFixed(1)})
      </div>

      {/* Layout utama: kontrol kiri, konten kanan */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(260px, 300px) 1fr",
          gap: "20px",
          alignItems: "start",
        }}
        className="momentum-layout"
      >
        {/* Kontrol */}
        <div style={{ borderRadius: "16px", background: "rgba(0,0,0,0.2)", padding: "20px" }}>
          <h3 style={{ fontWeight: 600, marginTop: 0, marginBottom: "16px" }}>🎛 Kontrol</h3>

          <SliderRow label="Massa A" value={`${massaA} kg`} color="#67e8f9">
            <input type="range" min="1" max="10" value={massaA} onChange={(e) => setMassaA(Number(e.target.value))} style={{ width: "100%" }} />
          </SliderRow>

          <SliderRow label="Massa B" value={`${massaB} kg`} color="#d8b4fe">
            <input type="range" min="1" max="10" value={massaB} onChange={(e) => setMassaB(Number(e.target.value))} style={{ width: "100%" }} />
          </SliderRow>

          <SliderRow label="Kecepatan Awal A" value={`${kecepatanAwalA} m/s`} color="#67e8f9">
            <input type="range" min="1" max="10" value={kecepatanAwalA} onChange={(e) => setKecepatanAwalA(Number(e.target.value))} style={{ width: "100%" }} />
          </SliderRow>

          <SliderRow label="Kecepatan Awal B" value={`${kecepatanAwalB} m/s`} color="#d8b4fe">
            <input type="range" min="-10" max="-1" value={kecepatanAwalB} onChange={(e) => setKecepatanAwalB(Number(e.target.value))} style={{ width: "100%" }} />
          </SliderRow>
          <p style={{ fontSize: "12px", color: "#64748b", marginTop: "-8px", marginBottom: "16px" }}>
            A bergerak ke kanan, B selalu bergerak ke kiri menuju A
          </p>

          <SliderRow label="Koefisien Restitusi (e)" value={restitusi.toFixed(1)} color="#cbd5e1">
            <input type="range" min="0" max="1" step="0.1" value={restitusi} onChange={(e) => setRestitusi(Number(e.target.value))} style={{ width: "100%" }} />
          </SliderRow>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px", marginTop: "8px" }}>
            <button
              onClick={() => setRunning(true)}
              disabled={running}
              style={btnStyle("#06b6d4", running)}
            >
              ▶ Jalan
            </button>
            <button
              onClick={() => setRunning(false)}
              disabled={!running}
              style={btnStyle("#f59e0b", !running)}
            >
              ⏸ Jeda
            </button>
            <button onClick={resetSimulasi} style={btnStyle("#ef4444", false)}>
              🔄 Reset
            </button>
          </div>
        </div>

        {/* Kanan: arena + tabs */}
        <div style={{ minWidth: 0, display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* Arena */}
          <div style={{ borderRadius: "16px", background: "rgba(0,0,0,0.2)", padding: "20px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px", flexWrap: "wrap", gap: "8px" }}>
              <h3 style={{ fontWeight: 600, margin: 0 }}>🏟️ Arena Tumbukan</h3>
              <div style={{ display: "flex", gap: "16px", fontSize: "12px", color: "#94a3b8" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#06b6d4", display: "inline-block" }} /> Bola A = Massa A
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#a855f7", display: "inline-block" }} /> Bola B = Massa B
                </span>
              </div>
            </div>

            <div
              ref={containerRef}
              style={{
                position: "relative",
                width: "100%",
                height: "128px",
                borderRadius: "12px",
                overflow: "hidden",
                background: "#1e293b",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div style={{ position: "absolute", left: posA - 10, top: 8, color: "#67e8f9", fontWeight: "bold", fontSize: "14px", whiteSpace: "nowrap" }}>
                {arahA} {Math.abs(velARef.current).toFixed(1)} m/s
              </div>
              <div
                style={{
                  position: "absolute",
                  left: posA,
                  top: 40,
                  width: ballSizeA,
                  height: ballSizeA,
                  background: "#06b6d4",
                  borderRadius: "50%",
                  boxShadow: "0 0 20px rgba(6,182,212,.8)",
                }}
              />

              <div style={{ position: "absolute", left: posB - 10, top: 8, color: "#d8b4fe", fontWeight: "bold", fontSize: "14px", whiteSpace: "nowrap" }}>
                {arahB} {Math.abs(velBRef.current).toFixed(1)} m/s
              </div>
              <div
                style={{
                  position: "absolute",
                  left: posB,
                  top: 40,
                  width: ballSizeB,
                  height: ballSizeB,
                  background: "#a855f7",
                  borderRadius: "50%",
                  boxShadow: "0 0 20px rgba(168,85,247,.8)",
                }}
              />
            </div>

            <p style={{ marginTop: "12px", marginBottom: 0, fontSize: "14px", fontWeight: 500, color: menyatu ? "#fcd34d" : "#64748b" }}>
              {menyatu ? "📌 Kedua benda bergerak bersama setelah tumbukan." : "💥 Benda belum menyatu."}
            </p>
          </div>

          {/* Tombol Tab */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: "8px 16px",
                  borderRadius: "12px",
                  fontSize: "14px",
                  fontWeight: 500,
                  border: "none",
                  cursor: "pointer",
                  background: activeTab === tab.id ? "#06b6d4" : "rgba(255,255,255,0.05)",
                  color: activeTab === tab.id ? "white" : "#94a3b8",
                }}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>

          {/* TAB HASIL */}
          {activeTab === "hasil" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <Panel title="Sebelum Tumbukan">
                <StatsGrid cols={3}>
                  <Stat label="Momentum A" value={momentumA.toFixed(2)} unit="kg·m/s" color="#67e8f9" />
                  <Stat label="Momentum B" value={momentumB.toFixed(2)} unit="kg·m/s" color="#d8b4fe" />
                  <Stat label="Momentum Total" value={momentumAwal.toFixed(2)} unit="kg·m/s" color="#fff" />
                </StatsGrid>
              </Panel>

              <Panel title="Kecepatan Akhir (setelah tumbukan)">
                <StatsGrid cols={2}>
                  <Stat label="Kecepatan Akhir A" value={kecepatanAkhirA !== null ? kecepatanAkhirA.toFixed(2) : "–"} unit="m/s" color="#67e8f9" />
                  <Stat label="Kecepatan Akhir B" value={kecepatanAkhirB !== null ? kecepatanAkhirB.toFixed(2) : "–"} unit="m/s" color="#d8b4fe" />
                </StatsGrid>
              </Panel>

              <Panel title="Momentum Real-Time">
                <StatsGrid cols={3}>
                  <Stat label="Momentum A" value={momentumSaatIniA.toFixed(2)} unit="kg·m/s" color="#67e8f9" />
                  <Stat label="Momentum B" value={momentumSaatIniB.toFixed(2)} unit="kg·m/s" color="#d8b4fe" />
                  <Stat label="Momentum Total" value={momentumTotalSaatIni.toFixed(2)} unit="kg·m/s" color="#6ee7b7" />
                </StatsGrid>
              </Panel>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
                <Panel title="Energi Kinetik Awal">
                  <StatsGrid cols={3}>
                    <Stat label="Energi A" value={energiAwalA.toFixed(2)} unit="J" color="#67e8f9" />
                    <Stat label="Energi B" value={energiAwalB.toFixed(2)} unit="J" color="#d8b4fe" />
                    <Stat label="Total" value={energiTotalAwal.toFixed(2)} unit="J" color="#fff" />
                  </StatsGrid>
                </Panel>

                <Panel title="Energi Kinetik Real-Time">
                  <StatsGrid cols={3}>
                    <Stat label="Energi A" value={energiSaatIniA.toFixed(2)} unit="J" color="#67e8f9" />
                    <Stat label="Energi B" value={energiSaatIniB.toFixed(2)} unit="J" color="#d8b4fe" />
                    <Stat label="Total" value={energiTotalSaatIni.toFixed(2)} unit="J" color={restitusi === 1 ? "#6ee7b7" : "#fcd34d"} />
                  </StatsGrid>
                </Panel>
              </div>

              <div
                style={{
                  borderRadius: "16px",
                  background: "rgba(6,182,212,0.1)",
                  border: "1px solid rgba(6,182,212,0.2)",
                  padding: "20px",
                }}
              >
                <h4 style={{ fontWeight: 600, marginTop: 0, marginBottom: "12px" }}>🔍 Analisis Kekekalan</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px", fontFamily: "monospace", fontSize: "14px" }}>
                  <AnalisisRow label="Momentum awal" value={`${momentumAwal.toFixed(2)} kg·m/s`} />
                  <AnalisisRow label="Momentum saat ini" value={`${momentumTotalSaatIni.toFixed(2)} kg·m/s`} color="#6ee7b7" />
                  <AnalisisRow label="Energi awal" value={`${energiTotalAwal.toFixed(2)} J`} />
                  <AnalisisRow label="Energi saat ini" value={`${energiTotalSaatIni.toFixed(2)} J`} color={restitusi === 1 ? "#6ee7b7" : "#fcd34d"} />
                </div>
              </div>
            </div>
          )}

          {/* TAB PERHITUNGAN */}
          {activeTab === "perhitungan" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <Panel title="📖 Perhitungan Momentum" titleColor="#38bdf8">
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontFamily: "monospace", fontSize: "14px", color: "#cbd5e1" }}>
                  <Rumus lines={["pA = mA × vA", `= ${massaA} × ${kecepatanAwalA}`, `= ${momentumA.toFixed(2)} kg·m/s`]} />
                  <Rumus lines={["pB = mB × vB", `= ${massaB} × ${kecepatanAwalB}`, `= ${momentumB.toFixed(2)} kg·m/s`]} />
                  <Rumus
                    lines={["pTotal = pA + pB", `= ${momentumA.toFixed(2)} + (${momentumB.toFixed(2)})`, `= ${momentumAwal.toFixed(2)} kg·m/s`]}
                    highlight
                  />
                </div>
              </Panel>

              <Panel title="⚡ Perhitungan Energi Kinetik" titleColor="#38bdf8">
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontFamily: "monospace", fontSize: "14px", color: "#cbd5e1" }}>
                  <Rumus lines={["EKA = ½ × m × v²", `= ½ × ${massaA} × ${kecepatanAwalA}²`, `= ${energiAwalA.toFixed(2)} J`]} />
                  <Rumus lines={["EKB = ½ × m × v²", `= ½ × ${massaB} × ${kecepatanAwalB}²`, `= ${energiAwalB.toFixed(2)} J`]} />
                  <Rumus
                    lines={["EK Total = EKA + EKB", `= ${energiAwalA.toFixed(2)} + ${energiAwalB.toFixed(2)}`, `= ${energiTotalAwal.toFixed(2)} J`]}
                    highlight
                  />
                </div>
              </Panel>
            </div>
          )}

          {/* TAB KESIMPULAN */}
          {activeTab === "kesimpulan" && (
            <div
              style={{
                borderRadius: "16px",
                background: "rgba(6,182,212,0.1)",
                border: "1px solid rgba(6,182,212,0.2)",
                padding: "20px",
                lineHeight: 1.7,
              }}
            >
              <h3 style={{ color: "#38bdf8", marginTop: 0, marginBottom: "12px" }}>🧠 Kesimpulan</h3>

              <p style={{ color: "#cbd5e1", marginBottom: "8px" }}>
                Momentum sistem tetap sebesar{" "}
                <strong style={{ color: "white" }}>{momentumTotalSaatIni.toFixed(2)} kg·m/s</strong>, sesuai dengan
                hukum kekekalan momentum.
              </p>

              <p style={{ color: "#cbd5e1", marginBottom: "8px" }}>
                {restitusi === 1
                  ? "Energi kinetik sistem tetap sehingga tumbukan termasuk tumbukan lenting sempurna."
                  : restitusi === 0
                  ? "Energi kinetik berkurang dan kedua benda bergerak bersama setelah tumbukan."
                  : "Sebagian energi kinetik hilang sehingga termasuk tumbukan lenting sebagian."}
              </p>

              <p style={{ color: "#94a3b8", fontSize: "14px", marginTop: "12px", marginBottom: 0 }}>
                Koefisien restitusi saat ini: <strong style={{ color: "white" }}>{restitusi.toFixed(1)}</strong>
              </p>
            </div>
          )}

          {/* TAB GRAFIK */}
          {activeTab === "grafik" && (
            <Panel title="📈 Grafik Analisis">
              <div
                style={{
                  height: "160px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  fontSize: "14px",
                  color: "#64748b",
                  padding: "0 24px",
                  border: "1px dashed rgba(255,255,255,0.1)",
                  borderRadius: "12px",
                }}
              >
                Grafik hubungan momentum dan energi kinetik akan segera tersedia di sini.
              </div>
            </Panel>
          )}
        </div>
      </div>

      {/* Responsif: 1 kolom di layar kecil */}
      <style>{`
        @media (max-width: 760px) {
          .momentum-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

function btnStyle(bg, disabled) {
  return {
    background: bg,
    color: "white",
    border: "none",
    padding: "10px 8px",
    borderRadius: "12px",
    cursor: disabled ? "not-allowed" : "pointer",
    fontWeight: 500,
    opacity: disabled ? 0.4 : 1,
  };
}

function SliderRow({ label, value, color, children }) {
  return (
    <div style={{ marginBottom: "16px" }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "6px" }}>
        <label style={{ fontSize: "14px", color }}>{label}</label>
        <span style={{ fontFamily: "monospace", color }}>{value}</span>
      </div>
      {children}
    </div>
  );
}

function Panel({ title, titleColor, children }) {
  return (
    <div style={{ borderRadius: "16px", background: "rgba(0,0,0,0.2)", padding: "20px" }}>
      <h4 style={{ fontSize: "14px", color: titleColor || "#94a3b8", marginTop: 0, marginBottom: "12px", fontWeight: titleColor ? 600 : 400 }}>
        {title}
      </h4>
      {children}
    </div>
  );
}

function StatsGrid({ cols, children }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gap: "12px",
      }}
    >
      {children}
    </div>
  );
}

function Stat({ label, value, unit, color = "#fff" }) {
  return (
    <div style={{ borderRadius: "12px", background: "rgba(255,255,255,0.05)", padding: "12px" }}>
      <p style={{ fontSize: "12px", color: "#94a3b8", margin: 0, marginBottom: "4px" }}>{label}</p>
      <p style={{ fontSize: "18px", fontWeight: 600, fontFamily: "monospace", color, margin: 0 }}>
        {value} <span style={{ fontSize: "12px", color: "#64748b" }}>{unit}</span>
      </p>
    </div>
  );
}

function AnalisisRow({ label, value, color = "#fff" }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "4px 0",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <span style={{ color: "#94a3b8" }}>{label}</span>
      <span style={{ fontWeight: 600, color }}>{value}</span>
    </div>
  );
}

function Rumus({ lines, highlight = false }) {
  return (
    <div
      style={{
        borderRadius: "8px",
        padding: "12px",
        background: highlight ? "rgba(6,182,212,0.1)" : "rgba(255,255,255,0.05)",
        border: highlight ? "1px solid rgba(6,182,212,0.2)" : "none",
      }}
    >
      {lines.map((line, i) => (
        <p key={i} style={{ margin: 0, marginBottom: i === lines.length - 1 ? 0 : "2px", color: i === lines.length - 1 ? "white" : "inherit", fontWeight: i === lines.length - 1 ? 600 : 400 }}>
          {line}
        </p>
      ))}
    </div>
  );
}
