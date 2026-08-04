import { useState, useMemo } from "react"
import "./styles.css"

import WaveControls from "./WaveControls"
import WaveCanvas from "./WaveCanvas"
import WaveStats from "./WaveStats"
import WavePresets from "./WavePresets"
import { calculatePeriod, calculateSpeed, PARAM_LIMITS } from "./waveUtils"

/**
 * WaveGeneratorSimulation
 * ------------------------------------------------------------
 * Simulasi interaktif untuk mengeksplorasi hubungan antara
 * frekuensi (f), amplitudo (A), panjang gelombang (λ), dan
 * cepat rambat (v) pada gelombang berjalan.
 *
 * State dipusatkan di sini, lalu diturunkan ke komponen anak
 * (Controls, Canvas, Stats, Presets) sebagai props — semua
 * komponen anak bersifat "dumb" / presentational.
 * ------------------------------------------------------------
 */
export default function WaveGeneratorSimulation() {
  // ---------- State parameter gelombang ----------
  const [mode, setMode] = useState("manual") // "manual" | "auto"
  const [frequency, setFrequency] = useState(PARAM_LIMITS.frequency.default)
  const [amplitude, setAmplitude] = useState(PARAM_LIMITS.amplitude.default)
  const [wavelength, setWavelength] = useState(PARAM_LIMITS.wavelength.default)
  const [manualSpeed, setManualSpeed] = useState(PARAM_LIMITS.speed.default)
  const [activePresetId, setActivePresetId] = useState(null)

  // ---------- Nilai turunan ----------
  // Pada mode auto, v dihitung dari v = f × λ.
  // Pada mode manual, v mengikuti slider yang digeser pengguna.
  const speed = useMemo(
    () => (mode === "auto" ? calculateSpeed(frequency, wavelength) : manualSpeed),
    [mode, frequency, wavelength, manualSpeed]
  )
  const period = useMemo(() => calculatePeriod(frequency), [frequency])

  // ---------- Handler ----------
  // Mengubah parameter secara manual membatalkan preset yang aktif.
  const clearPreset = () => setActivePresetId(null)

  const handleFrequencyChange = (value) => {
    setFrequency(value)
    clearPreset()
  }

  const handleAmplitudeChange = (value) => {
    setAmplitude(value)
    clearPreset()
  }

  const handleWavelengthChange = (value) => {
    setWavelength(value)
    clearPreset()
  }

  const handleSpeedChange = (value) => {
    setManualSpeed(value)
    clearPreset()
  }

  const handleModeChange = (nextMode) => {
    setMode(nextMode)
    clearPreset()
  }

  const handlePresetSelect = (preset) => {
    setMode(preset.mode)
    setFrequency(preset.frequency)
    setAmplitude(preset.amplitude)
    setWavelength(preset.wavelength)
    setActivePresetId(preset.id)
  }

  return (
    <div className="max-w-6xl mx-auto rounded-3xl hud-frame border border-cyan-400/20 bg-gradient-to-br from-[#05060f] via-[#0b0e1f] to-[#0a1a2e] p-6 text-white bg-grid">
      {/* ---------- Judul & Deskripsi ---------- */}
      <div className="mb-6">
        <h2 className="font-display text-2xl md:text-3xl font-black flex items-center gap-2 text-glow-cyan">
          <span>🌊</span> Wave Generator
        </h2>
        <p className="text-cyan-200/70 text-sm mt-1 italic">"Buat Gelombangmu Sendiri"</p>
        <p className="text-white/60 mt-2 max-w-2xl text-sm leading-relaxed">
          Geser slider untuk mengubah frekuensi, amplitudo, panjang gelombang, dan cepat rambat,
          lalu amati bagaimana bentuk serta pergerakan gelombang berubah secara langsung.
        </p>
      </div>

      {/* ---------- Panel Kontrol + Animasi ---------- */}
      <div className="grid lg:grid-cols-[320px_1fr] gap-6 items-start">
        <WaveControls
          mode={mode}
          onModeChange={handleModeChange}
          frequency={frequency}
          amplitude={amplitude}
          wavelength={wavelength}
          speed={speed}
          onFrequencyChange={handleFrequencyChange}
          onAmplitudeChange={handleAmplitudeChange}
          onWavelengthChange={handleWavelengthChange}
          onSpeedChange={handleSpeedChange}
        />

        <WaveCanvas amplitude={amplitude} wavelength={wavelength} speed={speed} />
      </div>

      {/* ---------- Panel Informasi ---------- */}
      <div className="mt-6">
        <WaveStats
          wavelength={wavelength}
          frequency={frequency}
          period={period}
          speed={speed}
          isAuto={mode === "auto"}
        />
      </div>

      {/* ---------- Preset ---------- */}
      <div className="mt-6">
        <WavePresets activePresetId={activePresetId} onSelect={handlePresetSelect} />
      </div>
    </div>
  )
}
