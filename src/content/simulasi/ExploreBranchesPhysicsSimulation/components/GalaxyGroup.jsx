import { motion } from "framer-motion"
import { resolveIcon } from "./icons"
import { galaxyColorTokens } from "../data/physicsBranches"

/**
 * Node galaksi besar di tampilan utama (overview). Memakai layoutId
 * bersama header di GalaxyDetailScene supaya Framer Motion otomatis
 * meng-animasikan perpindahannya sebagai efek "zoom-in" saat diklik.
 */
export default function GalaxyGroup({ galaxy, style, onClick }) {
  const Icon = resolveIcon(galaxy.icon)
  const token = galaxyColorTokens[galaxy.color]

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className="absolute flex flex-col items-center gap-3"
      style={style}
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.3 }}
      transition={{ type: "spring", stiffness: 120, damping: 18, delay: 0.15 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        layoutId={`galaxy-core-${galaxy.id}`}
        className="relative w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center backdrop-blur-md border animate-pulse-glow"
        style={{
          background: `radial-gradient(circle at 35% 30%, ${token.soft}, rgba(5,6,15,0.9) 72%)`,
          borderColor: token.glow,
          boxShadow: `0 0 40px ${token.glow}`,
        }}
      >
        <div
          className="absolute inset-0 rounded-full animate-orbit"
          style={{ border: `1px dashed ${token.soft}`, animationDuration: "22s" }}
        />
        <Icon className="w-9 h-9 md:w-12 md:h-12" style={{ color: token.core }} />
      </motion.div>
      <div className="flex flex-col items-center gap-0.5">
        <span className="font-display font-bold text-sm md:text-base text-white tracking-wide">
          {galaxy.emoji} {galaxy.name}
        </span>
        <span className="font-mono text-[10px] md:text-xs text-white/40">
          {galaxy.planets.length} cabang
        </span>
      </div>
    </motion.button>
  )
}
