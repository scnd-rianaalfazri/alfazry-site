import { PARAM_LIMITS } from "./waveUtils"

/**
 * Panel kontrol simulasi.
 * - Mode "manual": semua slider (f, A, λ, v) bebas diubah.
 * - Mode "auto": v dihitung otomatis dari v = f × λ, slider v dikunci.
 */
export default function WaveControls({
  mode,
  onModeChange,
  frequency,
  amplitude,
  wavelength,
  speed,
  onFrequencyChange,
  onAmplitudeChange,
  onWavelengthChange,
  onSpeedChange,
}) {
  const isAuto = mode === "auto"

  return (
    <div className="rounded-2xl bg-white/[0.03] hud-frame border border-cyan-400/10 p-5 lg:sticky lg:top-4">
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-display font-semibold text-white/90 flex items-center gap-2 text-sm tracking-wide uppercase">
          🎛 Panel Kontrol
        </h3>
      </div>

      {/* ---------- Toggle Mode ---------- */}
      <div className="mb-6">
        <p className="text-xs text-white/50 mb-2">Mode Simulasi</p>
        <div className="grid grid-cols-2 gap-2 rounded-xl bg-black/30 p-1 wave-toggle-track border border-white/10">
          <button
            type="button"
            onClick={() => onModeChange("manual")}
            className={`rounded-lg py-2 text-sm font-medium transition-colors ${
              !isAuto
                ? "bg-cyan-500/20 text-cyan-200 border border-cyan-400/40"
                : "text-white/50 hover:text-white/80"
            }`}
          >
            Manual
          </button>
          <button
            type="button"
            onClick={() => onModeChange("auto")}
            className={`rounded-lg py-2 text-sm font-medium transition-colors ${
              isAuto
                ? "bg-cyan-500/20 text-cyan-200 border border-cyan-400/40"
                : "text-white/50 hover:text-white/80"
            }`}
          >
            Auto Calculate
          </button>
        </div>
        {isAuto && (
          <p className="text-[11px] text-cyan-300/70 mt-2 leading-relaxed">
            v = f × λ — cepat rambat dihitung otomatis dari frekuensi &amp; panjang gelombang.
          </p>
        )}
      </div>

      {/* ---------- Frekuensi ---------- */}
      <SliderField
        label="Frekuensi (f)"
        value={frequency}
        unit={PARAM_LIMITS.frequency.unit}
        min={PARAM_LIMITS.frequency.min}
        max={PARAM_LIMITS.frequency.max}
        step={PARAM_LIMITS.frequency.step}
        onChange={onFrequencyChange}
      />

      {/* ---------- Amplitudo ---------- */}
      <SliderField
        label="Amplitudo (A)"
        value={amplitude}
        unit={PARAM_LIMITS.amplitude.unit}
        min={PARAM_LIMITS.amplitude.min}
        max={PARAM_LIMITS.amplitude.max}
        step={PARAM_LIMITS.amplitude.step}
        onChange={onAmplitudeChange}
      />

      {/* ---------- Panjang Gelombang ---------- */}
      <SliderField
        label="Panjang Gelombang (λ)"
        value={wavelength}
        unit={PARAM_LIMITS.wavelength.unit}
        min={PARAM_LIMITS.wavelength.min}
        max={PARAM_LIMITS.wavelength.max}
        step={PARAM_LIMITS.wavelength.step}
        onChange={onWavelengthChange}
      />

      {/* ---------- Cepat Rambat ---------- */}
      <SliderField
        label="Cepat Rambat (v)"
        value={speed}
        unit={PARAM_LIMITS.speed.unit}
        min={PARAM_LIMITS.speed.min}
        max={PARAM_LIMITS.speed.max}
        step={PARAM_LIMITS.speed.step}
        onChange={onSpeedChange}
        disabled={isAuto}
        badge={isAuto ? "Otomatis" : null}
        last
      />
    </div>
  )
}

function SliderField({
  label,
  value,
  unit,
  min,
  max,
  step,
  onChange,
  disabled = false,
  badge = null,
  last = false,
}) {
  return (
    <div className={last ? "mb-0" : "mb-5"}>
      <div className="flex items-baseline justify-between mb-2">
        <label className="text-sm text-white/70">{label}</label>
        <div className="flex items-center gap-2">
          {badge && (
            <span className="text-[10px] uppercase tracking-wide px-1.5 py-0.5 rounded bg-cyan-500/15 text-cyan-300 border border-cyan-400/20">
              {badge}
            </span>
          )}
          <span className="font-mono text-cyan-300 text-sm">
            {value.toFixed(1)} {unit}
          </span>
        </div>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full wave-slider"
      />
    </div>
  )
}
