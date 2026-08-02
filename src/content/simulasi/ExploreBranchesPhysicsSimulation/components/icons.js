import {
  Sparkles,
  Settings,
  Flame,
  Zap,
  Aperture,
  Volume2,
  Atom,
  Orbit as OrbitIcon,
  Radiation,
  CircleDot,
  Globe,
  Telescope,
  Dna,
} from "lucide-react"

// Peta string -> komponen ikon, dipakai lewat data/physicsBranches.js
// supaya data tetap serializable & mudah ditambah tanpa menyentuh komponen.
export const ICONS = {
  Sparkles,
  Settings,
  Flame,
  Zap,
  Aperture,
  Volume2,
  Atom,
  Orbit: OrbitIcon,
  Radiation,
  CircleDot,
  Globe,
  Telescope,
  Dna,
}

export function resolveIcon(key) {
  return ICONS[key] ?? Sparkles
}
