import React, { useState, useMemo, useEffect, useRef } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceDot,
} from "recharts";

// ============================================================
// DESIGN TOKENS — Fisika Alfazrian dark/cyan identity
// ============================================================
const COLORS = {
  bg: "#0A0E17",
  bgGrid: "#0D1220",
  surface: "#111827",
  surfaceAlt: "#161F32",
  border: "#232E45",
  borderSoft: "#1B2436",
  text: "#E7ECF7",
  textDim: "#8B96AE",
  textFaint: "#5B6478",
  cyan: "#22D3EE",
  blue: "#3B82F6",
  positive: "#F87171", // muatan positif
  negative: "#60A5FA", // muatan negatif
  attract: "#34D8B0", // tarik-menarik
  repel: "#FBAE3C", // tolak-menolak
};

const K = 9e9; // konstanta Coulomb

// ============================================================
// HELPERS
// ============================================================
const fmt = (n, d = 2) =>
  n.toLocaleString("id-ID", { minimumFractionDigits: d, maximumFractionDigits: d });

function computeForce(q1uC, q2uC, r) {
  const q1 = q1uC * 1e-6;
  const q2 = q2uC * 1e-6;
  const F = (K * Math.abs(q1 * q2)) / (r * r);
  return F;
}

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}

// ============================================================
// SUB-COMPONENT: Slider kontrol
// ============================================================
function ControlSlider({ label, value, min, max, step, onChange, unit, accent, hint }) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div
      className="rounded-xl p-4"
      style={{ background: COLORS.surfaceAlt, border: `1px solid ${COLORS.border}` }}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium" style={{ color: COLORS.textDim }}>
          {label}
        </span>
        <span
          className="text-sm font-mono font-semibold px-2 py-0.5 rounded-lg"
          style={{ color: accent, background: `${accent}1A` }}
        >
          {value > 0 && unit === "μC" ? "+" : ""}
          {fmt(value, unit === "m" ? 2 : 1)} {unit}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full h-2 rounded-full appearance-none cursor-pointer slider-thumb"
        style={{
          background: `linear-gradient(to right, ${accent} ${pct}%, ${COLORS.border} ${pct}%)`,
        }}
      />
      <div className="flex justify-between mt-1">
        <span className="text-[10px] font-mono" style={{ color: COLORS.textFaint }}>
          {min > 0 ? "+" : ""}
          {min}
        </span>
        <span className="text-[10px] font-mono" style={{ color: COLORS.textFaint }}>
          {max > 0 && unit === "μC" ? "+" : ""}
          {max}
        </span>
      </div>
      {hint && (
        <p className="text-[11px] mt-2 leading-snug" style={{ color: COLORS.textFaint }}>
          {hint}
        </p>
      )}
    </div>
  );
}

// ============================================================
// SUB-COMPONENT: Bola muatan
// ============================================================
function ChargeBall({ q, side }) {
  const isPositive = q >= 0;
  const magnitude = Math.abs(q);
  const size = 56 + (magnitude / 10) * 26; // 56 - 82 px
  const color = isPositive ? COLORS.positive : COLORS.negative;
  return (
    <div
      className="flex flex-col items-center gap-2 shrink-0"
      style={{ transition: "all 300ms ease" }}
    >
      <div
        className="rounded-full flex items-center justify-center font-bold select-none"
        style={{
          width: size,
          height: size,
          background: `radial-gradient(circle at 32% 28%, ${color}EE, ${color}99 60%, ${color}55)`,
          boxShadow: `0 0 22px 2px ${color}55, inset 0 0 14px ${color}66`,
          border: `2px solid ${color}`,
          color: "#0A0E17",
          fontSize: size * 0.42,
          transition: "all 300ms ease",
        }}
      >
        {isPositive ? "+" : "\u2212"}
      </div>
      <span className="text-[11px] font-mono" style={{ color: COLORS.textDim }}>
        {side === "left" ? "q\u2081" : "q\u2082"} = {q > 0 ? "+" : ""}
        {fmt(q, 1)} μC
      </span>
    </div>
  );
}

// ============================================================
// SUB-COMPONENT: Panah gaya (mengembang / mengecil)
// ============================================================
function ForceArrow({ pointOut, forceRatio, side, color }) {
  const size = 16 + clamp(forceRatio, 0, 1) * 30; // 16 - 46
  const dur = clamp(1.1 - forceRatio * 0.7, 0.4, 1.1);
  const glyph = side === "left" ? (pointOut ? "\u2039" : "\u203A") : pointOut ? "\u203A" : "\u2039";
  return (
    <span
      className="force-pulse font-black select-none"
      style={{
        fontSize: size,
        color,
        textShadow: `0 0 10px ${color}88`,
        animationDuration: `${dur}s`,
        transition: "font-size 300ms ease, color 300ms ease",
      }}
    >
      {glyph}
    </span>
  );
}

// ============================================================
// MAIN COMPONENT
// ============================================================
export default function CoulombForceSimulator() {
  const [q1, setQ1] = useState(4);
  const [q2, setQ2] = useState(-6);
  const [r, setR] = useState(1.4);

  const F = useMemo(() => computeForce(q1, q2, r), [q1, q2, r]);
  const isRepel = q1 * q2 > 0;
  const isAttract = q1 * q2 < 0;
  const interactionColor = isAttract ? COLORS.attract : isRepel ? COLORS.repel : COLORS.textFaint;
  const maxForceRef = 22.5; // F saat |q1|=|q2|=10μC, r=0.2m
  const forceRatio = clamp(F / maxForceRef, 0, 1);

  // jarak visual antar bola (px), gap flex
  const gapPx = 56 + ((r - 0.2) / (5 - 0.2)) * 220;
  const flowDur = clamp(1.6 - forceRatio * 1.2, 0.35, 1.6);

  // ------------------------------------------------------
  // INSIGHT BOX — narasi reaktif berdasarkan perubahan terakhir
  // ------------------------------------------------------
  const prevRef = useRef({ q1, q2, r, interaction: isAttract ? "attract" : isRepel ? "repel" : "netral" });
  const [insight, setInsight] = useState(
    "Geser salah satu slider untuk melihat bagaimana gaya Coulomb berubah secara langsung."
  );

  useEffect(() => {
    const prev = prevRef.current;
    const curInteraction = isAttract ? "attract" : isRepel ? "repel" : "netral";
    let msg = null;

    if (prev.interaction !== curInteraction && prev.interaction !== "netral" && curInteraction !== "netral") {
      msg =
        curInteraction === "attract"
          ? "Jenis interaksi berubah dari tolak-menolak menjadi tarik-menarik karena tanda salah satu muatan berbalik."
          : "Jenis interaksi berubah dari tarik-menarik menjadi tolak-menolak karena tanda salah satu muatan berbalik.";
    } else if (prev.r !== r) {
      const ratio = r / prev.r;
      if (ratio >= 1.05) {
        if (ratio >= 1.8 && ratio <= 2.2) {
          msg = "Jarak diperbesar dua kali lipat sehingga gaya Coulomb menjadi seperempat kali semula, mengikuti hubungan F ∝ 1/r².";
        } else {
          msg = "Jarak antar muatan diperbesar sehingga gaya Coulomb mengecil, mengikuti hubungan F ∝ 1/r².";
        }
      } else if (ratio <= 0.95) {
        if (ratio <= 0.55 && ratio >= 0.45) {
          msg = "Jarak diperkecil menjadi setengahnya sehingga gaya Coulomb membesar empat kali lipat, mengikuti hubungan F ∝ 1/r².";
        } else {
          msg = "Jarak antar muatan diperkecil sehingga gaya Coulomb membesar tajam, mengikuti hubungan F ∝ 1/r².";
        }
      }
    } else if (Math.abs(q1) !== Math.abs(prev.q1) || Math.abs(q2) !== Math.abs(prev.q2)) {
      const grew = Math.abs(q1) + Math.abs(q2) > Math.abs(prev.q1) + Math.abs(prev.q2);
      msg = grew
        ? "Besar salah satu muatan diperbesar sehingga gaya Coulomb ikut meningkat, karena F sebanding dengan q₁ × q₂."
        : "Besar salah satu muatan diperkecil sehingga gaya Coulomb ikut menurun, karena F sebanding dengan q₁ × q₂.";
    }

    if (msg) setInsight(msg);
    prevRef.current = { q1, q2, r, interaction: curInteraction };
  }, [q1, q2, r, isAttract, isRepel]);

  // ------------------------------------------------------
  // Panel Analisis — narasi statis berdasar keadaan saat ini
  // ------------------------------------------------------
  const analysisText = useMemo(() => {
    if (q1 === 0 || q2 === 0) {
      return "Salah satu muatan bernilai nol, sehingga tidak ada gaya Coulomb yang bekerja antar keduanya.";
    }
    const jenis = isAttract
      ? "Kedua muatan memiliki tanda berbeda sehingga saling tarik-menarik."
      : "Kedua muatan memiliki tanda yang sama sehingga saling tolak-menolak.";
    const jarakInfo =
      r < 1
        ? "Jarak antar muatan tergolong dekat, sehingga gaya Coulomb terasa cukup besar."
        : r > 3
        ? "Jarak antar muatan cukup jauh, sehingga gaya Coulomb yang terjadi relatif kecil."
        : "Pada jarak ini, gaya Coulomb berada pada tingkat menengah.";
    return `${jenis} ${jarakInfo} Ingat, gaya berbanding lurus dengan hasil kali besar muatan dan berbanding terbalik dengan kuadrat jaraknya (F ∝ 1/r²).`;
  }, [q1, q2, r, isAttract]);

  // ------------------------------------------------------
  // Data grafik F vs r (q1, q2 tetap pada nilai saat ini)
  // ------------------------------------------------------
  const chartData = useMemo(() => {
    const pts = [];
    for (let i = 0; i <= 48; i++) {
      const rr = 0.2 + (i / 48) * (5 - 0.2);
      pts.push({ r: parseFloat(rr.toFixed(2)), F: computeForce(q1, q2, rr) });
    }
    return pts;
  }, [q1, q2]);

  const q1C = (q1 * 1e-6).toExponential(2).replace("e", " × 10");
  const q2C = (q2 * 1e-6).toExponential(2).replace("e", " × 10");

  return (
    <div
      className="w-full min-h-screen"
      style={{
        background: `radial-gradient(1100px 500px at 50% -10%, ${COLORS.blue}14, transparent 60%), ${COLORS.bg}`,
        color: COLORS.text,
        fontFamily:
          "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <style>{`
        .slider-thumb::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 9999px;
          background: #E7ECF7;
          border: 3px solid ${COLORS.cyan};
          box-shadow: 0 0 8px ${COLORS.cyan}AA;
          cursor: pointer;
        }
        .slider-thumb::-moz-range-thumb {
          width: 18px;
          height: 18px;
          border-radius: 9999px;
          background: #E7ECF7;
          border: 3px solid ${COLORS.cyan};
          box-shadow: 0 0 8px ${COLORS.cyan}AA;
          cursor: pointer;
          border: 3px solid ${COLORS.cyan};
        }
        @keyframes forcePulse {
          0%, 100% { transform: scale(1); opacity: 0.85; }
          50% { transform: scale(1.22); opacity: 1; }
        }
        .force-pulse { animation-name: forcePulse; animation-timing-function: ease-in-out; animation-iteration-count: infinite; display:inline-block; }
        @keyframes flowLine {
          from { stroke-dashoffset: 24; }
          to { stroke-dashoffset: 0; }
        }
        .flow-line { animation-name: flowLine; animation-timing-function: linear; animation-iteration-count: infinite; }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in { animation: fadeInUp 400ms ease both; }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        {/* HEADER */}
        <header className="mb-8 text-center">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono mb-4"
            style={{ background: COLORS.surfaceAlt, border: `1px solid ${COLORS.border}`, color: COLORS.cyan }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: COLORS.cyan, boxShadow: `0 0 6px ${COLORS.cyan}` }}
            />
            SIMULASI INTERAKTIF · FISIKA ALFAZRIAN
          </div>
          <h1
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
            style={{
              background: `linear-gradient(90deg, ${COLORS.text}, ${COLORS.cyan})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Coulomb Force Simulator
          </h1>
          <p className="mt-2 text-sm sm:text-base" style={{ color: COLORS.textDim }}>
            Seberapa Besar Gaya Listriknya?
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6">
          {/* ============ PANEL KONTROL ============ */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xs font-bold tracking-widest uppercase" style={{ color: COLORS.textFaint }}>
              Panel Kontrol
            </h2>
            <ControlSlider
              label="Muatan Pertama (q\u2081)"
              value={q1}
              min={-10}
              max={10}
              step={0.1}
              onChange={setQ1}
              unit="μC"
              accent={COLORS.positive}
              hint="Geser untuk mengubah besar dan tanda muatan pertama."
            />
            <ControlSlider
              label="Muatan Kedua (q\u2082)"
              value={q2}
              min={-10}
              max={10}
              step={0.1}
              onChange={setQ2}
              unit="μC"
              accent={COLORS.negative}
              hint="Geser untuk mengubah besar dan tanda muatan kedua."
            />
            <ControlSlider
              label="Jarak Antar Muatan (r)"
              value={r}
              min={0.2}
              max={5}
              step={0.1}
              onChange={setR}
              unit="m"
              accent={COLORS.cyan}
              hint="Geser untuk mengubah jarak pisah kedua muatan."
            />

            {/* INSIGHT BOX */}
            <div
              key={insight}
              className="rounded-xl p-4 fade-in"
              style={{
                background: `linear-gradient(135deg, ${COLORS.cyan}14, ${COLORS.surfaceAlt})`,
                border: `1px solid ${COLORS.cyan}44`,
              }}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span style={{ color: COLORS.cyan, fontSize: 14 }}>&#9889;</span>
                <span className="text-[11px] font-bold tracking-widest uppercase" style={{ color: COLORS.cyan }}>
                  Insight
                </span>
              </div>
              <p className="text-[13px] leading-relaxed" style={{ color: COLORS.text }}>
                {insight}
              </p>
            </div>
          </div>

          {/* ============ AREA KANAN ============ */}
          <div className="flex flex-col gap-6">
            {/* AREA SIMULASI */}
            <div
              className="rounded-xl p-6 sm:p-8"
              style={{ background: COLORS.surface, border: `1px solid ${COLORS.border}` }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xs font-bold tracking-widest uppercase" style={{ color: COLORS.textFaint }}>
                  Area Simulasi
                </h2>
                <span
                  className="text-[11px] font-mono px-2.5 py-1 rounded-lg"
                  style={{
                    color: interactionColor,
                    background: `${interactionColor}1A`,
                    border: `1px solid ${interactionColor}55`,
                  }}
                >
                  {q1 === 0 || q2 === 0 ? "Tidak ada gaya" : isAttract ? "Tarik-Menarik" : "Tolak-Menolak"}
                </span>
              </div>

              <div className="flex items-center justify-center py-4 overflow-x-auto">
                <div className="flex items-center" style={{ gap: gapPx }}>
                  <ChargeBall q={q1} side="left" />

                  <div className="relative flex items-center justify-center" style={{ width: 64 }}>
                    <svg width={Math.max(gapPx, 40)} height="26" style={{ position: "absolute", overflow: "visible" }}>
                      <line
                        x1="0"
                        y1="13"
                        x2={Math.max(gapPx, 40)}
                        y2="13"
                        stroke={interactionColor}
                        strokeWidth="2"
                        strokeDasharray="6 6"
                        strokeLinecap="round"
                        className="flow-line"
                        style={{
                          animationDuration: `${flowDur}s`,
                          animationDirection: isAttract ? "reverse" : "normal",
                          opacity: q1 === 0 || q2 === 0 ? 0.25 : 0.8,
                        }}
                      />
                    </svg>
                  </div>

                  <div className="flex items-center" style={{ gap: 4 }}>
                    <ForceArrow pointOut={isRepel} forceRatio={forceRatio} side="left" color={interactionColor} />
                    <ForceArrow pointOut={isRepel} forceRatio={forceRatio} side="right" color={interactionColor} />
                  </div>

                  <ChargeBall q={q2} side="right" />
                </div>
              </div>

              <p className="text-center text-[11px] font-mono mt-2" style={{ color: COLORS.textFaint }}>
                r = {fmt(r, 2)} m
              </p>
            </div>

            {/* PANEL HASIL */}
            <div
              className="rounded-xl p-6"
              style={{ background: COLORS.surface, border: `1px solid ${COLORS.border}` }}
            >
              <h2 className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: COLORS.textFaint }}>
                Panel Hasil
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                <div className="rounded-lg p-4" style={{ background: COLORS.surfaceAlt, border: `1px solid ${COLORS.borderSoft}` }}>
                  <p className="text-[11px] mb-1" style={{ color: COLORS.textFaint }}>Jenis Interaksi</p>
                  <p className="text-lg font-bold" style={{ color: interactionColor }}>
                    {q1 === 0 || q2 === 0 ? "\u2014" : isAttract ? "Tarik-Menarik" : "Tolak-Menolak"}
                  </p>
                </div>
                <div className="rounded-lg p-4" style={{ background: COLORS.surfaceAlt, border: `1px solid ${COLORS.borderSoft}` }}>
                  <p className="text-[11px] mb-1" style={{ color: COLORS.textFaint }}>Besar Gaya</p>
                  <p className="text-lg font-bold font-mono" style={{ color: COLORS.cyan }}>
                    {fmt(F, 2)} N
                  </p>
                </div>
              </div>

              <div className="rounded-lg p-4 mb-3" style={{ background: COLORS.bgGrid, border: `1px solid ${COLORS.borderSoft}` }}>
                <p className="text-[11px] mb-1.5" style={{ color: COLORS.textFaint }}>Persamaan</p>
                <p className="font-mono text-sm" style={{ color: COLORS.text }}>
                  F = k · |q\u2081 · q\u2082| / r\u00B2
                </p>
              </div>

              <div className="rounded-lg p-4" style={{ background: COLORS.bgGrid, border: `1px solid ${COLORS.borderSoft}` }}>
                <p className="text-[11px] mb-1.5" style={{ color: COLORS.textFaint }}>Substitusi Nilai</p>
                <p className="font-mono text-[13px] leading-relaxed break-words" style={{ color: COLORS.text }}>
                  F = (9 × 10\u2079 × |{q1C} × {q2C}|) / ({fmt(r, 2)})\u00B2
                  <br />
                  F = {fmt(F, 2)} N
                </p>
              </div>
            </div>

            {/* PANEL ANALISIS */}
            <div
              className="rounded-xl p-6"
              style={{ background: COLORS.surface, border: `1px solid ${COLORS.border}` }}
            >
              <h2 className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: COLORS.textFaint }}>
                Panel Analisis
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: COLORS.text }}>
                {analysisText}
              </p>
            </div>

            {/* GRAFIK */}
            <div
              className="rounded-xl p-6"
              style={{ background: COLORS.surface, border: `1px solid ${COLORS.border}` }}
            >
              <h2 className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: COLORS.textFaint }}>
                Grafik F terhadap r
              </h2>
              <div style={{ width: "100%", height: 260 }}>
                <ResponsiveContainer>
                  <LineChart data={chartData} margin={{ top: 10, right: 16, bottom: 4, left: -4 }}>
                    <CartesianGrid stroke={COLORS.borderSoft} strokeDasharray="3 3" />
                    <XAxis
                      dataKey="r"
                      stroke={COLORS.textFaint}
                      tick={{ fill: COLORS.textFaint, fontSize: 11 }}
                      label={{ value: "r (m)", position: "insideBottom", offset: -2, fill: COLORS.textFaint, fontSize: 11 }}
                    />
                    <YAxis
                      stroke={COLORS.textFaint}
                      tick={{ fill: COLORS.textFaint, fontSize: 11 }}
                      label={{ value: "F (N)", angle: -90, position: "insideLeft", fill: COLORS.textFaint, fontSize: 11 }}
                    />
                    <Tooltip
                      contentStyle={{ background: COLORS.surfaceAlt, border: `1px solid ${COLORS.border}`, borderRadius: 10 }}
                      labelStyle={{ color: COLORS.textDim }}
                      itemStyle={{ color: COLORS.cyan }}
                      formatter={(v) => [`${fmt(v, 2)} N`, "Gaya"]}
                      labelFormatter={(v) => `r = ${fmt(v, 2)} m`}
                    />
                    <Line type="monotone" dataKey="F" stroke={COLORS.cyan} strokeWidth={2.5} dot={false} isAnimationActive={false} />
                    <ReferenceDot
                      x={parseFloat(r.toFixed(2))}
                      y={F}
                      r={6}
                      fill={interactionColor}
                      stroke={COLORS.bg}
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-10 text-center text-[11px]" style={{ color: COLORS.textFaint }}>
          Fisika Alfazrian — Coulomb Force Simulator
        </footer>
      </div>
    </div>
  );
}
