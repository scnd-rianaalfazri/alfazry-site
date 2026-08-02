import { useCallback, useMemo, useState } from "react"
import { galaxies } from "../data/physicsBranches"

/**
 * Mengelola state eksplorasi galaksi: tampilan utama (overview),
 * galaksi yang sedang dibuka, dan planet yang sedang dipilih.
 * Dipisah dari komponen visual supaya GalaxyMap tetap ringan & reusable.
 */
export default function useGalaxyNavigation() {
  const [activeGalaxyId, setActiveGalaxyId] = useState(null)
  const [activePlanetId, setActivePlanetId] = useState(null)

  const activeGalaxy = useMemo(
    () => galaxies.find((g) => g.id === activeGalaxyId) ?? null,
    [activeGalaxyId]
  )

  const activePlanet = useMemo(() => {
    if (!activeGalaxy) return null
    return activeGalaxy.planets.find((p) => p.id === activePlanetId) ?? null
  }, [activeGalaxy, activePlanetId])

  const enterGalaxy = useCallback((galaxyId) => {
    setActiveGalaxyId(galaxyId)
    setActivePlanetId(null)
  }, [])

  const backToOverview = useCallback(() => {
    setActiveGalaxyId(null)
    setActivePlanetId(null)
  }, [])

  const selectPlanet = useCallback((planetId) => {
    setActivePlanetId((current) => (current === planetId ? null : planetId))
  }, [])

  const closePlanetPanel = useCallback(() => {
    setActivePlanetId(null)
  }, [])

  return {
    galaxies,
    activeGalaxy,
    activePlanet,
    enterGalaxy,
    backToOverview,
    selectPlanet,
    closePlanetPanel,
    isInGalaxy: Boolean(activeGalaxy),
  }
}
