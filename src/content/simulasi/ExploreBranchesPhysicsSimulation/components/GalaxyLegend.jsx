import { ArrowLeft } from "lucide-react"
import { galaxyColorTokens } from "../data/physicsBranches"

/**
 * Navigasi ringkas di kiri layar (desktop only): lompat cepat antar
 * galaksi, atau kembali ke tampilan utama.
 */
export default function GalaxyLegend({ galaxies, activeGalaxyId, onSelect, onBack }) {
  return (
    <div className="hidden md:flex flex-col gap-3 fixed left-6 top-1/2 -translate-y-1/2 z-30">
      {activeGalaxyId && (
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-2 font-mono text-xs text-white/60 hover:text-cyan-300 transition-colors mb-2 hud-frame rounded-full px-3 py-1.5 border border-white/10 bg-white/5 backdrop-blur-sm"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Pusat Galaksi
        </button>
      )}

      {galaxies.map((galaxy) => {
        const token = galaxyColorTokens[galaxy.color]
        const isActive = galaxy.id === activeGalaxyId
        return (
          <button
            key={galaxy.id}
            type="button"
            onClick={() => onSelect(galaxy.id)}
            className="flex items-center gap-2.5 group"
          >
            <span
              className="w-2.5 h-2.5 rounded-full transition-transform group-hover:scale-125"
              style={{
                background: token.core,
                boxShadow: isActive ? `0 0 10px 3px ${token.glow}` : "none",
              }}
            />
            <span
              className={`font-mono text-[11px] transition-colors ${
                isActive ? "text-white" : "text-white/40 group-hover:text-white/70"
              }`}
            >
              {galaxy.name}
            </span>
          </button>
        )
      })}
    </div>
  )
}
