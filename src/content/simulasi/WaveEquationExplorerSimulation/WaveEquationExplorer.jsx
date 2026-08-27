import React, { useState, useRef, useEffect, useCallback } from "react";

/**
 * WaveEquationExplorer
 * ---------------------------------------------------------------------
 * Virtual Lab — Fisika Alfazrian
 * Topik: Persamaan Gelombang  y(x, t) = A sin(kx - ωt)
 *
 * k = 2π / λ   (bilangan gelombang)
 * ω = 2πf      (frekuensi sudut)
 * T = 1 / f    (periode)
 * v = f × λ    (cepat rambat gelombang)
 *
 * Fokus: interaksi -> observasi -> pengukuran -> analisis.
 * Tidak ada elemen gamifikasi (skor, XP, karakter, mission, dsb).
 * ---------------------------------------------------------------------
 */

// ============================================================
// KONSTANTA FISIKA & DEFAULT LAB
// ============================================================

const DEFAULTS = {
  frequency: 2, // Hz
  wavelength: 2, // m
  amplitude: 1, // m
};

const LIMITS = {
  frequency: { min: 0.5, max: 5, step: 0.1 },
  wavelength: { min: 0.5, max: 5, step: 0.1 },
  amplitude: { min: 0.2, max: 2, step: 0.1 },
};

const SPEED_OPTIONS = [0.5, 1, 1.5, 2];

// Jendela tampilan sumbu-x (dalam meter). Cukup lebar agar beberapa
// panjang gelombang selalu terlihat, dari λ terkecil sampai terbesar.
const X_DOMAIN = 10; // meter
// Batas atas amplitudo pada sumbu-y visualisasi (meter), memberi ruang
// di atas/bawah gelombang agar tidak menempel ke tepi canvas.
const Y_DOMAIN = 2.4; // meter

// ============================================================
// UTIL
// ============================================================

const round2 = (value) => Math.round(value * 100) / 100;

/**
 * Menghitung besaran turunan gelombang dari f, λ.
 * Amplitudo sengaja tidak memengaruhi T maupun v.
 */
function computeWaveDerived(frequency, wavelength) {
  const period = 1 / frequency;
  const waveSpeed = frequency * wavelength;
  const angularFrequency = 2 * Math.PI * frequency; // ω
  const waveNumber = (2 * Math.PI) / wavelength; // k
  return { period, waveSpeed, angularFrequency, waveNumber };
}

// ============================================================
// CANVAS GELOMBANG (imperative render, tanpa library chart)
// ============================================================

const WaveCanvas = React.memo(function WaveCanvas({
  paramsRef,
  isPlayingRef,
  speedRef,
  showMeasurementsRef,
  resetSignal,
}) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const lastTimeRef = useRef(null);
  const elapsedRef = useRef(0); // t simulasi (detik), basis persamaan gelombang

  // Reset waktu simulasi saat tombol Reset ditekan
  useEffect(() => {
    elapsedRef.current = 0;
    lastTimeRef.current = null;
  }, [resetSignal]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const draw = (timestampMs) => {
      if (lastTimeRef.current === null) lastTimeRef.current = timestampMs;
      const dtSeconds = (timestampMs - lastTimeRef.current) / 1000;
      lastTimeRef.current = timestampMs;

      if (isPlayingRef.current) {
        // Animation speed hanya mempercepat/memperlambat visual t,
        // TIDAK mengubah f, λ, A, T, atau v.
        elapsedRef.current += dtSeconds * speedRef.current;
      }

      renderFrame(ctx, canvas, paramsRef.current, elapsedRef.current, showMeasurementsRef.current);
      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Redraw langsung saat resize agar canvas tidak buram/terpotong
  useEffect(() => {
    const canvas = canvasRef.current;
    const handleResize = () => {
      const parent = canvas.parentElement;
      const dpr = window.devicePixelRatio || 1;
      const cssWidth = parent.clientWidth;
      const cssHeight = parent.clientHeight;
      canvas.width = cssWidth * dpr;
      canvas.height = cssHeight * dpr;
      canvas.style.width = `${cssWidth}px`;
      canvas.style.height = `${cssHeight}px`;
      const ctx = canvas.getContext("2d");
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      renderFrame(ctx, canvas, paramsRef.current, elapsedRef.current, showMeasurementsRef.current);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <canvas
      ref={canvasRef}
      role="img"
      aria-label="Visualisasi gelombang sinus yang merambat sesuai parameter frekuensi, panjang gelombang, dan amplitudo"
      className="h-[280px] w-full rounded-xl sm:h-[340px] lg:h-[420px]"
    />
  );
});

/**
 * Menggambar satu frame gelombang + grid + overlay pengukuran (opsional).
 * Fungsi ini murni imperative agar animasi 60fps tidak memicu re-render React.
 */
function renderFrame(ctx, canvas, params, t, showMeasurements) {
  const dpr = window.devicePixelRatio || 1;
  const width = canvas.width / dpr;
  const height = canvas.height / dpr;

  const marginLeft = 46;
  const marginRight = 24;
  const marginTop = 28;
  const marginBottom = 34;

  const plotWidth = width - marginLeft - marginRight;
  const plotHeight = height - marginTop - marginBottom;
  const centerY = marginTop + plotHeight / 2;

  const { frequency, wavelength, amplitude } = params;
  const { angularFrequency: omega, waveNumber: k } = computeWaveDerived(frequency, wavelength);

  const toPx = (xMeters) => marginLeft + (xMeters / X_DOMAIN) * plotWidth;
  const toPy = (yMeters) => centerY - (yMeters / Y_DOMAIN) * (plotHeight / 2);

  // --- background ---
  ctx.clearRect(0, 0, width, height);

  // --- grid ringan ---
  ctx.strokeStyle = "rgba(255,255,255,0.05)";
  ctx.lineWidth = 1;
  const gridStepX = 1; // tiap 1 meter
  for (let x = 0; x <= X_DOMAIN; x += gridStepX) {
    const px = toPx(x);
    ctx.beginPath();
    ctx.moveTo(px, marginTop);
    ctx.lineTo(px, marginTop + plotHeight);
    ctx.stroke();
  }
  const gridStepY = 0.5;
  for (let y = -Y_DOMAIN; y <= Y_DOMAIN; y += gridStepY) {
    const py = toPy(y);
    ctx.beginPath();
    ctx.moveTo(marginLeft, py);
    ctx.lineTo(marginLeft + plotWidth, py);
    ctx.stroke();
  }

  // --- axis sederhana ---
  ctx.strokeStyle = "rgba(255,255,255,0.18)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(marginLeft, marginTop);
  ctx.lineTo(marginLeft, marginTop + plotHeight);
  ctx.lineTo(marginLeft + plotWidth, marginTop + plotHeight);
  ctx.stroke();

  ctx.fillStyle = "rgba(255,255,255,0.4)";
  ctx.font = "11px ui-monospace, SFMono-Regular, Menlo, monospace";
  ctx.textAlign = "center";
  ctx.fillText("x (m)", marginLeft + plotWidth / 2, height - 8);
  ctx.save();
  ctx.translate(14, marginTop + plotHeight / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText("y (m)", 0, 0);
  ctx.restore();

  // --- garis equilibrium ---
  ctx.strokeStyle = "rgba(148,148,178,0.6)";
  ctx.setLineDash([4, 4]);
  ctx.beginPath();
  ctx.moveTo(marginLeft, centerY);
  ctx.lineTo(marginLeft + plotWidth, centerY);
  ctx.stroke();
  ctx.setLineDash([]);

  // --- gelombang y = A sin(kx - ωt) ---
  const SAMPLES = 500;
  ctx.beginPath();
  for (let i = 0; i <= SAMPLES; i++) {
    const xMeters = (i / SAMPLES) * X_DOMAIN;
    const yMeters = amplitude * Math.sin(k * xMeters - omega * t);
    const px = toPx(xMeters);
    const py = toPy(yMeters);
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.lineWidth = 2.5;
  ctx.strokeStyle = "#c084fc"; // neon purple
  ctx.shadowColor = "rgba(192,132,252,0.65)";
  ctx.shadowBlur = 10;
  ctx.stroke();
  ctx.shadowBlur = 0;

  if (showMeasurements) {
    drawMeasurementOverlay(ctx, { toPx, toPy, k, omega, t, amplitude, wavelength, centerY, plotWidth, marginLeft });
  }
}

/**
 * Overlay pengukuran: menandai puncak, lembah, jarak λ, dan tinggi A
 * langsung di atas gelombang, mengikuti fase animasi saat ini.
 */
function drawMeasurementOverlay(ctx, ctxData) {
  const { toPx, toPy, k, omega, t, amplitude, wavelength, centerY, plotWidth, marginLeft } = ctxData;

  // posisi x (meter) dari puncak pertama yang terlihat: kx - ωt = π/2 + 2πn
  const phaseOffset = (Math.PI / 2 + omega * t) / k;
  let firstPeakX = ((phaseOffset % wavelength) + wavelength) % wavelength;

  const peakXs = [];
  for (let x = firstPeakX; x <= X_DOMAIN; x += wavelength) peakXs.push(x);

  // posisi lembah: kx - ωt = -π/2 + 2πn
  const troughOffset = (-Math.PI / 2 + omega * t) / k;
  let firstTroughX = ((troughOffset % wavelength) + wavelength) % wavelength;
  const troughXs = [];
  for (let x = firstTroughX; x <= X_DOMAIN; x += wavelength) troughXs.push(x);

  ctx.fillStyle = "#22d3ee"; // cyan — marker
  peakXs.forEach((x) => {
    const px = toPx(x);
    const py = toPy(amplitude);
    ctx.beginPath();
    ctx.arc(px, py, 4, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.fillStyle = "#67e8f9";
  troughXs.forEach((x) => {
    const px = toPx(x);
    const py = toPy(-amplitude);
    ctx.beginPath();
    ctx.arc(px, py, 4, 0, Math.PI * 2);
    ctx.fill();
  });

  // --- indikator amplitudo (A): panah vertikal dari equilibrium ke puncak pertama ---
  if (peakXs.length > 0) {
    const px = toPx(peakXs[0]);
    const pyTop = toPy(amplitude);
    ctx.strokeStyle = "#c084fc";
    ctx.fillStyle = "#c084fc";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(px, centerY);
    ctx.lineTo(px, pyTop);
    ctx.stroke();
    drawArrowHead(ctx, px, pyTop, -90);
    drawArrowHead(ctx, px, centerY, 90);

    ctx.font = "12px ui-monospace, SFMono-Regular, Menlo, monospace";
    ctx.textAlign = "left";
    ctx.fillText(`A = ${round2(amplitude)} m`, px + 8, (centerY + pyTop) / 2);
  }

  // --- indikator panjang gelombang (λ): panah horizontal antar dua puncak ---
  if (peakXs.length >= 2) {
    const pxA = toPx(peakXs[0]);
    const pxB = toPx(peakXs[1]);
    const y = toPy(amplitude) - 16 > 20 ? toPy(amplitude) - 16 : toPy(amplitude) + 16;
    ctx.strokeStyle = "#22d3ee";
    ctx.fillStyle = "#22d3ee";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(pxA, y);
    ctx.lineTo(pxB, y);
    ctx.stroke();
    drawArrowHead(ctx, pxA, y, 180);
    drawArrowHead(ctx, pxB, y, 0);

    ctx.font = "12px ui-monospace, SFMono-Regular, Menlo, monospace";
    ctx.textAlign = "center";
    ctx.fillText(`λ = ${round2(wavelength)} m`, (pxA + pxB) / 2, y - 8);
  }
}

function drawArrowHead(ctx, x, y, angleDeg) {
  const size = 5;
  const angle = (angleDeg * Math.PI) / 180;
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(-size, -size / 1.6);
  ctx.lineTo(-size, size / 1.6);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

// ============================================================
// KONTROL SLIDER PARAMETER
// ============================================================

function ParameterSlider({ id, label, symbol, unit, value, min, max, step, onChange, accent = "purple" }) {
  const accentClass =
    accent === "purple"
      ? "accent-fuchsia-500"
      : accent === "cyan"
      ? "accent-cyan-400"
      : "accent-fuchsia-500";

  const handleSlider = (e) => onChange(parseFloat(e.target.value));
  const handleNumber = (e) => {
    const raw = e.target.value;
    if (raw === "") return;
    const clamped = Math.min(max, Math.max(min, parseFloat(raw)));
    if (!Number.isNaN(clamped)) onChange(clamped);
  };

  return (
    <div className="space-y-2">
      <div className="flex items-baseline justify-between">
        <label htmlFor={id} className="text-sm font-medium text-slate-300">
          {label}{" "}
          <span className="text-slate-500">
            ({symbol})
          </span>
        </label>
        <div className="flex items-center gap-1">
          <input
            type="number"
            aria-label={`Nilai numerik untuk ${label}`}
            value={value}
            min={min}
            max={max}
            step={step}
            onChange={handleNumber}
            className="w-16 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-right font-mono text-sm text-fuchsia-300 focus:border-fuchsia-400 focus:outline-none focus:ring-1 focus:ring-fuchsia-400"
          />
          <span className="text-xs text-slate-500">{unit}</span>
        </div>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleSlider}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        aria-label={label}
        className={`h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/10 ${accentClass}`}
      />
      <div className="flex justify-between text-[11px] text-slate-600">
        <span>{min}{unit}</span>
        <span>{max}{unit}</span>
      </div>
    </div>
  );
}

// ============================================================
// PANEL PENGUKURAN REAL-TIME
// ============================================================

function MeasurementsPanel({ frequency, wavelength, amplitude, period, waveSpeed }) {
  const rows = [
    { label: "Frequency", symbol: "f", value: round2(frequency), unit: "Hz" },
    { label: "Wavelength", symbol: "λ", value: round2(wavelength), unit: "m" },
    { label: "Amplitude", symbol: "A", value: round2(amplitude), unit: "m" },
    { label: "Period", symbol: "T", value: round2(period), unit: "s" },
    { label: "Wave Speed", symbol: "v", value: round2(waveSpeed), unit: "m/s" },
  ];

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md sm:p-5">
      <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
        Wave Parameters
      </h3>
      <dl className="grid grid-cols-2 gap-3 sm:grid-cols-1">
        {rows.map((row) => (
          <div
            key={row.label}
            className="flex items-center justify-between rounded-lg border border-white/5 bg-black/20 px-3 py-2"
          >
            <dt className="text-xs text-slate-400">{row.label}</dt>
            <dd className="font-mono text-sm text-cyan-300">
              {row.symbol} = {row.value} {row.unit}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

// ============================================================
// KONTROL ANIMASI
// ============================================================

function AnimationControls({ isPlaying, onTogglePlay, onReset, speed, onSpeedChange }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <button
        type="button"
        onClick={onTogglePlay}
        aria-pressed={isPlaying}
        className="flex items-center gap-2 rounded-lg border border-fuchsia-400/40 bg-fuchsia-500/10 px-4 py-2 text-sm font-medium text-fuchsia-200 shadow-[0_0_16px_rgba(192,132,252,0.15)] transition hover:bg-fuchsia-500/20 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
      >
        {isPlaying ? "⏸ Pause" : "▶ Play"}
      </button>

      <button
        type="button"
        onClick={onReset}
        className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
      >
        ↻ Reset
      </button>

      <div className="flex items-center gap-2">
        <label htmlFor="animation-speed" className="text-xs text-slate-500">
          Animation Speed
        </label>
        <select
          id="animation-speed"
          value={speed}
          onChange={(e) => onSpeedChange(parseFloat(e.target.value))}
          className="rounded-lg border border-white/10 bg-white/5 px-2 py-1.5 text-sm text-slate-200 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
        >
          {SPEED_OPTIONS.map((s) => (
            <option key={s} value={s} className="bg-slate-900">
              {s}×
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

// ============================================================
// PANEL EKSPERIMEN / OBSERVASI
// ============================================================

function ExperimentPanel({ onPreset }) {
  const presets = [
    {
      key: "frequency",
      label: "Uji Frekuensi",
      description: "λ dan A tetap — amati efek f terhadap T dan v.",
    },
    {
      key: "wavelength",
      label: "Uji Panjang Gelombang",
      description: "f dan A tetap — amati efek λ terhadap v.",
    },
    {
      key: "amplitude",
      label: "Uji Amplitudo",
      description: "f dan λ tetap — amati bahwa T dan v tidak berubah.",
    },
  ];

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md sm:p-5">
      <h3 className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
        🔬 Eksperimen
      </h3>
      <p className="mb-4 text-sm text-slate-400">
        Ubah satu parameter dan amati perubahan pada gelombang.
      </p>
      <div className="grid gap-2 sm:grid-cols-3">
        {presets.map((preset) => (
          <button
            key={preset.key}
            type="button"
            onClick={() => onPreset(preset.key)}
            className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-left text-sm text-slate-200 transition hover:border-fuchsia-400/40 hover:bg-fuchsia-500/10 focus:outline-none focus:ring-1 focus:ring-fuchsia-400"
          >
            <span className="block font-medium">{preset.label}</span>
            <span className="mt-0.5 block text-xs text-slate-500">{preset.description}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

// ============================================================
// PANEL HUBUNGAN (RELATIONSHIPS)
// ============================================================

function RelationshipsPanel() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md sm:p-5">
      <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
        Relationships
      </h3>
      <div className="space-y-3 text-sm">
        <div className="rounded-lg border border-white/5 bg-black/20 px-3 py-2">
          <p className="font-mono text-cyan-300">T = 1 / f</p>
          <p className="mt-1 text-xs text-slate-400">
            Frekuensi menentukan seberapa banyak getaran terjadi setiap detik.
          </p>
        </div>
        <div className="rounded-lg border border-white/5 bg-black/20 px-3 py-2">
          <p className="font-mono text-cyan-300">v = f × λ</p>
          <p className="mt-1 text-xs text-slate-400">
            Pada model ini, cepat rambat ditentukan oleh frekuensi dan panjang gelombang.
          </p>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// KOMPONEN UTAMA
// ============================================================

export default function WaveEquationExplorer() {
  const [frequency, setFrequency] = useState(DEFAULTS.frequency);
  const [wavelength, setWavelength] = useState(DEFAULTS.wavelength);
  const [amplitude, setAmplitude] = useState(DEFAULTS.amplitude);

  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState(1);
  const [showMeasurements, setShowMeasurements] = useState(false);
  const [resetSignal, setResetSignal] = useState(0);

  // Refs dibaca langsung oleh animation loop di WaveCanvas agar
  // perubahan slider tidak memicu restart requestAnimationFrame,
  // dan agar loop selalu memakai nilai parameter TERBARU (live).
  const paramsRef = useRef({ frequency, wavelength, amplitude });
  const isPlayingRef = useRef(isPlaying);
  const speedRef = useRef(speed);
  const showMeasurementsRef = useRef(showMeasurements);

  useEffect(() => {
    paramsRef.current = { frequency, wavelength, amplitude };
  }, [frequency, wavelength, amplitude]);
  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);
  useEffect(() => {
    speedRef.current = speed;
  }, [speed]);
  useEffect(() => {
    showMeasurementsRef.current = showMeasurements;
  }, [showMeasurements]);

  const { period, waveSpeed } = computeWaveDerived(frequency, wavelength);

  const handleReset = useCallback(() => {
    setFrequency(DEFAULTS.frequency);
    setWavelength(DEFAULTS.wavelength);
    setAmplitude(DEFAULTS.amplitude);
    setIsPlaying(true);
    setResetSignal((n) => n + 1);
  }, []);

  const handlePreset = useCallback((key) => {
    // Preset hanya mengatur titik awal eksplorasi, bukan tantangan/skor.
    if (key === "frequency") {
      setWavelength(DEFAULTS.wavelength);
      setAmplitude(DEFAULTS.amplitude);
      setFrequency(3);
    } else if (key === "wavelength") {
      setFrequency(DEFAULTS.frequency);
      setAmplitude(DEFAULTS.amplitude);
      setWavelength(3);
    } else if (key === "amplitude") {
      setFrequency(DEFAULTS.frequency);
      setWavelength(DEFAULTS.wavelength);
      setAmplitude(1.6);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0f] px-4 py-8 text-slate-100 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl space-y-6">
        {/* 1. HEADER */}
        <header className="space-y-1">
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            <span className="text-fuchsia-400">⚡</span> Wave Equation Explorer
          </h1>
          <p className="text-sm font-medium text-cyan-300/80 sm:text-base">
            Eksplorasi Persamaan Gelombang
          </p>
          <p className="max-w-2xl text-sm text-slate-400">
            Ubah parameter gelombang dan amati bagaimana bentuk, periode, dan cepat
            rambat gelombang berubah secara langsung.
          </p>
        </header>

        {/* 2. WAVE VISUALIZATION */}
        <section
          aria-label="Visualisasi gelombang"
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 shadow-[0_0_40px_rgba(147,51,234,0.08)] backdrop-blur-md sm:p-4"
        >
          <WaveCanvas
            paramsRef={paramsRef}
            isPlayingRef={isPlayingRef}
            speedRef={speedRef}
            showMeasurementsRef={showMeasurementsRef}
            resetSignal={resetSignal}
          />

          <div className="mt-3 flex flex-wrap items-center justify-between gap-3 border-t border-white/5 pt-3">
            <AnimationControls
              isPlaying={isPlaying}
              onTogglePlay={() => setIsPlaying((p) => !p)}
              onReset={handleReset}
              speed={speed}
              onSpeedChange={setSpeed}
            />

            <label className="flex items-center gap-2 text-sm text-slate-300">
              <input
                type="checkbox"
                checked={showMeasurements}
                onChange={(e) => setShowMeasurements(e.target.checked)}
                className="h-4 w-4 rounded border-white/20 bg-white/5 accent-cyan-400 focus:ring-1 focus:ring-cyan-400"
              />
              Show Measurements
            </label>
          </div>
        </section>

        {/* 3 & 4. CONTROLS + REAL-TIME MEASUREMENTS */}
        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md sm:p-5">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
              Controls
            </h3>
            <div className="space-y-5">
              <ParameterSlider
                id="frequency-slider"
                label="Frequency"
                symbol="f"
                unit=" Hz"
                value={frequency}
                min={LIMITS.frequency.min}
                max={LIMITS.frequency.max}
                step={LIMITS.frequency.step}
                onChange={setFrequency}
                accent="purple"
              />
              <ParameterSlider
                id="wavelength-slider"
                label="Wavelength"
                symbol="λ"
                unit=" m"
                value={wavelength}
                min={LIMITS.wavelength.min}
                max={LIMITS.wavelength.max}
                step={LIMITS.wavelength.step}
                onChange={setWavelength}
                accent="cyan"
              />
              <ParameterSlider
                id="amplitude-slider"
                label="Amplitude"
                symbol="A"
                unit=" m"
                value={amplitude}
                min={LIMITS.amplitude.min}
                max={LIMITS.amplitude.max}
                step={LIMITS.amplitude.step}
                onChange={setAmplitude}
                accent="purple"
              />
            </div>
          </div>

          <MeasurementsPanel
            frequency={frequency}
            wavelength={wavelength}
            amplitude={amplitude}
            period={period}
            waveSpeed={waveSpeed}
          />
        </section>

        {/* 7. EXPERIMENT / OBSERVATION */}
        <ExperimentPanel onPreset={handlePreset} />

        {/* 8. RELATIONSHIPS */}
        <RelationshipsPanel />
      </div>
    </div>
  );
}
