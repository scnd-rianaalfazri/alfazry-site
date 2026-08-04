import { WAVE_PRESETS } from "./waveUtils"

/**
 * Baris tombol preset. Memilih preset akan mengganti seluruh
 * parameter simulasi sekaligus (f, A, λ, mode) di komponen induk.
 */
export default function WavePresets({ activePresetId, onSelect }) {
  return (
    <div className="rounded-2xl bg-white/[0.03] hud-frame border border-cyan-400/10 p-5">
      <h3 className="font-display font-semibold text-white/90 mb-4 text-sm tracking-wide uppercase flex items-center gap-2">
        ✨ Preset Gelombang
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {WAVE_PRESETS.map((preset) => {
          const active = preset.id === activePresetId
          return (
            <button
              key={preset.id}
              type="button"
              onClick={() => onSelect(preset)}
              className={`wave-preset-btn rounded-xl border p-4 text-left ${
                active
                  ? "bg-cyan-500/15 border-cyan-400/50"
                  : "bg-black/20 border-white/10 hover:border-cyan-400/30 hover:bg-cyan-500/5"
              }`}
            >
              <span className="text-2xl block mb-2">{preset.icon}</span>
              <span
                className={`block text-sm font-medium ${
                  active ? "text-cyan-200" : "text-white/80"
                }`}
              >
                {preset.label}
              </span>
              <span className="block text-[11px] text-white/40 mt-1 font-mono">
                f={preset.frequency}Hz · A={preset.amplitude}cm · λ={preset.wavelength}m
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
