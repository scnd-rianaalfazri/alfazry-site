import { motion } from "framer-motion"
import StarBackground from "./components/StarBackground"
import GalaxyMap from "./components/GalaxyMap"
import InfoPanel from "./components/InfoPanel"
import GalaxyLegend from "./components/GalaxyLegend"
import useGalaxyNavigation from "./hooks/useGalaxyNavigation"

/**
 * Simulasi eksploratif "Explore the Branches of Physics".
 * Tidak ada skor/XP/timer — murni untuk menjelajah galaksi cabang fisika
 * dan membaca informasinya lewat panel holografik.
 */
export default function ExploreBranchesPhysics() {
  const {
    galaxies,
    activeGalaxy,
    activePlanet,
    enterGalaxy,
    backToOverview,
    selectPlanet,
    closePlanetPanel,
    isInGalaxy,
  } = useGalaxyNavigation()

  return (
    <div className="relative bg-space rounded-3xl overflow-hidden border border-white/10 min-h-[640px] md:min-h-[720px]">
      <StarBackground />

      <motion.div
        className="relative z-10 flex flex-col items-center py-8 md:py-12 px-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="text-center mb-6 md:mb-10">
          <h1 className="font-display font-black text-2xl md:text-4xl text-gradient-violet mb-2">
            🌌 Explore the Branches of Physics
          </h1>
          <p className="font-mono text-xs md:text-sm text-white/50">
            Jelajahi Galaksi Cabang-Cabang Fisika
          </p>
        </div>

        <GalaxyLegend
          galaxies={galaxies}
          activeGalaxyId={activeGalaxy?.id ?? null}
          onSelect={enterGalaxy}
          onBack={backToOverview}
        />

        <GalaxyMap
          galaxies={galaxies}
          activeGalaxy={activeGalaxy}
          activePlanetId={activePlanet?.id ?? null}
          onEnterGalaxy={enterGalaxy}
          onBack={backToOverview}
          onSelectPlanet={selectPlanet}
        />

        {!isInGalaxy && (
          <p className="mt-6 md:mt-10 font-mono text-[11px] md:text-xs text-white/35 text-center max-w-md">
            Klik salah satu galaksi untuk menjelajahi cabang-cabang fisika di dalamnya.
          </p>
        )}
      </motion.div>

      <InfoPanel planet={activePlanet} galaxy={activeGalaxy} onClose={closePlanetPanel} />
    </div>
  )
}
