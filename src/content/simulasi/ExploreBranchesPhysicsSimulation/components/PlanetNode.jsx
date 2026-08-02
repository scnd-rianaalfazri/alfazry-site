import { motion } from "framer-motion"
import { resolveIcon } from "./icons"

/**
 * Satu planet yang bisa diklik untuk membuka InfoPanel.
 * `style` menerima posisi (left/top dalam %) yang dihitung oleh GalaxyGroup.
 */
export default function PlanetNode({ planet, colorToken, isActive, onClick, style, size = "md" }) {
  const Icon = resolveIcon(planet.icon)

  const dims = size === "lg" ? "w-16 h-16 md:w-20 md:h-20" : "w-14 h-14 md:w-16 md:h-16"
  const iconDims = size === "lg" ? "w-7 h-7 md:w-8 md:h-8" : "w-6 h-6 md:w-7 md:h-7"

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className="absolute flex flex-col items-center gap-2 group"
      style={style}
      initial={{ opacity: 0, scale: 0.4 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.4 }}
      transition={{ type: "spring", stiffness: 160, damping: 16 }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.96 }}
    >
      <div
        className={`relative rounded-full flex items-center justify-center backdrop-blur-sm border transition-all duration-300 animate-float-slow ${dims}`}
        style={{
          background: `radial-gradient(circle at 32% 28%, ${colorToken.soft}, rgba(5,6,15,0.85) 70%)`,
          borderColor: isActive ? colorToken.core : "rgba(255,255,255,0.14)",
          boxShadow: isActive
            ? `0 0 0 3px ${colorToken.glow}, 0 0 28px ${colorToken.glow}`
            : `0 0 14px ${colorToken.soft}`,
        }}
      >
        <Icon className={`${iconDims} transition-colors`} style={{ color: isActive ? "#fff" : colorToken.core }} />
        {isActive && (
          <span
            className="absolute -inset-1 rounded-full animate-pulse-glow"
            style={{ boxShadow: `0 0 0 1px ${colorToken.core}` }}
          />
        )}
      </div>
      <span
        className={`font-mono text-[11px] md:text-xs px-2 py-0.5 rounded-full whitespace-nowrap transition-colors ${
          isActive ? "text-white bg-white/10" : "text-white/60 group-hover:text-white/90"
        }`}
      >
        {planet.name}
      </span>
    </motion.button>
  )
}
