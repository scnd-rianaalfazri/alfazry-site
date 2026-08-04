import { formatNumber } from "./waveUtils"

/**
 * Kartu informasi realtime: λ, f, T, v.
 * Semua nilai ditampilkan dengan 2 digit desimal.
 */
export default function WaveStats({ wavelength, frequency, period, speed, isAuto }) {
  return (
    <div className="rounded-2xl bg-white/[0.03] hud-frame border border-cyan-400/10 p-5">
      <h3 className="font-display font-semibold text-white/90 mb-4 text-sm tracking-wide uppercase flex items-center gap-2">
        📊 Panel Informasi
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <StatCard symbol="λ" label="Panjang Gelombang" value={formatNumber(wavelength, 2)} unit="m" />
        <StatCard symbol="f" label="Frekuensi" value={formatNumber(frequency, 2)} unit="Hz" />
        <StatCard symbol="T" label="Periode" value={formatNumber(period, 2)} unit="s" />
        <StatCard
          symbol="v"
          label="Cepat Rambat"
          value={formatNumber(speed, 2)}
          unit="m/s"
          accent
          badge={isAuto ? "auto" : null}
        />
      </div>
    </div>
  )
}

function StatCard({ symbol, label, value, unit, accent = false, badge = null }) {
  return (
    <div className="rounded-xl bg-black/30 border border-white/10 p-3 relative overflow-hidden">
      {badge && (
        <span className="absolute top-2 right-2 text-[9px] uppercase tracking-wide px-1.5 py-0.5 rounded bg-cyan-500/15 text-cyan-300 border border-cyan-400/20">
          {badge}
        </span>
      )}
      <p
        className={`font-display text-lg mb-1 ${
          accent ? "text-cyan-300 text-glow-cyan" : "text-white/80"
        }`}
      >
        {symbol}
      </p>
      <p className="text-xs text-white/40 mb-1 leading-tight">{label}</p>
      <p className={`font-mono text-lg font-semibold ${accent ? "text-cyan-200" : "text-white"}`}>
        {value} <span className="text-xs text-white/40">{unit}</span>
      </p>
    </div>
  )
}
