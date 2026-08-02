import { AnimatePresence, motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Orbit from "./Orbit"
import GalaxyGroup from "./GalaxyGroup"
import PlanetNode from "./PlanetNode"
import { resolveIcon } from "./icons"
import { centerPlanet, galaxyColorTokens } from "../data/physicsBranches"

// Helper: ubah sudut + radius (persen) jadi posisi left/top di dalam
// container aspect-square, supaya layout tetap proporsional di semua ukuran layar.
function polar(angleDeg, radiusPercent, centerX = 50, centerY = 50) {
  const rad = (angleDeg * Math.PI) / 180
  return {
    left: `${centerX + radiusPercent * Math.cos(rad)}%`,
    top: `${centerY + radiusPercent * Math.sin(rad)}%`,
    transform: "translate(-50%, -50%)",
  }
}

const GALAXY_ANGLES = [-90, 30, 150]

export default function GalaxyMap({ galaxies, activeGalaxy, activePlanetId, onEnterGalaxy, onBack, onSelectPlanet }) {
  const CenterIcon = resolveIcon(centerPlanet.icon)

  return (
    <div className="relative w-full max-w-2xl aspect-square mx-auto">
      <AnimatePresence mode="wait">
        {!activeGalaxy ? (
          <motion.div
            key="overview"
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.25 } }}
          >
            <Orbit size={78} glow="rgba(139, 59, 255, 0.25)" duration={34} />
            <Orbit size={92} glow="rgba(34, 211, 238, 0.18)" duration={48} reverse />

            {/* Planet pusat */}
            <div className="absolute" style={polar(0, 0)}>
              <div
                className="relative w-28 h-28 md:w-36 md:h-36 rounded-full flex items-center justify-center animate-pulse-glow"
                style={{
                  background: "radial-gradient(circle at 34% 28%, rgba(178,107,255,0.5), rgba(5,6,15,0.95) 70%)",
                  boxShadow: "0 0 70px rgba(139,59,255,0.55), 0 0 140px rgba(34,211,238,0.15)",
                  border: "1px solid rgba(178,107,255,0.6)",
                }}
              >
                <div
                  className="absolute inset-0 rounded-full overflow-hidden animate-orbit"
                  style={{ animationDuration: "40s" }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "conic-gradient(from 0deg, transparent 0%, rgba(34,211,238,0.35) 15%, transparent 30%)",
                    }}
                  />
                </div>
                <CenterIcon className="w-12 h-12 md:w-16 md:h-16 text-white drop-shadow-[0_0_12px_rgba(178,107,255,0.9)]" />
              </div>
              <p className="mt-3 text-center font-display font-black text-lg md:text-2xl text-gradient-violet tracking-widest">
                {centerPlanet.name}
              </p>
            </div>

            {galaxies.map((galaxy, i) => (
              <GalaxyGroup
                key={galaxy.id}
                galaxy={galaxy}
                style={polar(GALAXY_ANGLES[i], 40)}
                onClick={() => onEnterGalaxy(galaxy.id)}
              />
            ))}
          </motion.div>
        ) : (
          <motion.div
            key={`detail-${activeGalaxy.id}`}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.25 } }}
          >
            <Orbit
              size={64}
              glow={galaxyColorTokens[activeGalaxy.color].soft}
              duration={30}
            />

            <button
              type="button"
              onClick={onBack}
              className="md:hidden absolute top-0 left-0 flex items-center gap-1.5 font-mono text-xs text-white/60 hover:text-cyan-300 transition-colors z-10 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Kembali
            </button>

            {/* Header galaksi aktif — layoutId sama dengan GalaxyGroup di overview
                sehingga Framer Motion otomatis membuat efek "zoom-in" menyatu. */}
            <div className="absolute flex flex-col items-center gap-2 w-full px-4" style={{ top: "10%", left: "50%", transform: "translate(-50%, -50%)" }}>
              <motion.div
                layoutId={`galaxy-core-${activeGalaxy.id}`}
                className="relative w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center backdrop-blur-md border animate-pulse-glow"
                style={{
                  background: `radial-gradient(circle at 35% 30%, ${galaxyColorTokens[activeGalaxy.color].soft}, rgba(5,6,15,0.9) 72%)`,
                  borderColor: galaxyColorTokens[activeGalaxy.color].glow,
                  boxShadow: `0 0 40px ${galaxyColorTokens[activeGalaxy.color].glow}`,
                }}
              >
                {(() => {
                  const Icon = resolveIcon(activeGalaxy.icon)
                  return <Icon className="w-9 h-9 md:w-11 md:h-11" style={{ color: galaxyColorTokens[activeGalaxy.color].core }} />
                })()}
              </motion.div>
              <span className="font-display font-bold text-base md:text-lg text-white">
                {activeGalaxy.emoji} {activeGalaxy.name}
              </span>
              <p className="max-w-[240px] text-center font-mono text-[11px] text-white/45 leading-relaxed">
                {activeGalaxy.description}
              </p>
            </div>

            {activeGalaxy.planets.map((planet, i) => {
              const angle = -90 + (360 / activeGalaxy.planets.length) * i
              return (
                <PlanetNode
                  key={planet.id}
                  planet={planet}
                  colorToken={galaxyColorTokens[activeGalaxy.color]}
                  isActive={planet.id === activePlanetId}
                  onClick={() => onSelectPlanet(planet.id)}
                  style={polar(angle, 32, 50, 62)}
                />
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
