import { AnimatePresence, motion } from "framer-motion"
import { BookOpen, Boxes, Wrench, Briefcase, Lightbulb, X } from "lucide-react"
import { resolveIcon } from "./icons"
import { galaxyColorTokens } from "../data/physicsBranches"
import HologramCard from "./HologramCard"

/**
 * Panel informasi cabang fisika. Di desktop tampil sebagai panel di
 * sisi kanan, di mobile otomatis menjadi bottom sheet (diatur lewat
 * className responsif, bukan logic terpisah).
 */
export default function InfoPanel({ planet, galaxy, onClose }) {
  const token = galaxy ? galaxyColorTokens[galaxy.color] : galaxyColorTokens.violet
  const PlanetIcon = planet ? resolveIcon(planet.icon) : null

  return (
    <AnimatePresence>
      {planet && (
        <motion.aside
          key={planet.id}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed z-40 inset-x-0 bottom-0 max-h-[78vh] rounded-t-3xl
                     md:inset-auto md:top-0 md:right-0 md:h-full md:w-[380px]
                     md:max-h-none md:rounded-t-none md:rounded-l-3xl
                     border-t md:border-t-0 md:border-l border-white/10
                     bg-panel/95 backdrop-blur-xl overflow-y-auto"
          style={{ boxShadow: `0 0 60px rgba(0,0,0,0.5), -1px 0 0 ${token.soft}` }}
        >
          <div className="sticky top-0 z-10 flex items-center justify-between px-5 pt-4 pb-3 bg-panel/95 backdrop-blur-xl border-b border-white/5">
            <span className="font-mono text-[11px] uppercase tracking-widest text-white/40">
              {galaxy?.emoji} {galaxy?.name}
            </span>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-white/10 text-white/50 hover:text-white transition-colors"
              aria-label="Tutup panel"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-5 space-y-4">
            <div className="flex items-center gap-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center shrink-0"
                style={{
                  background: `radial-gradient(circle at 32% 28%, ${token.soft}, rgba(5,6,15,0.9) 70%)`,
                  boxShadow: `0 0 24px ${token.glow}`,
                  border: `1px solid ${token.core}`,
                }}
              >
                {PlanetIcon && <PlanetIcon className="w-8 h-8" style={{ color: token.core }} />}
              </div>
              <div>
                <h2 className="font-display font-bold text-xl text-white leading-tight">{planet.name}</h2>
                <p className="font-mono text-[11px] text-white/40 mt-0.5">Cabang Fisika</p>
              </div>
            </div>

            <HologramCard icon={BookOpen} title="Apa yang Dipelajari">
              {planet.apa}
            </HologramCard>

            <HologramCard icon={Boxes} title="Objek yang Dipelajari">
              <ChipList items={planet.objek} tone={token.core} />
            </HologramCard>

            <HologramCard icon={Wrench} title="Contoh Penerapan">
              <ChipList items={planet.penerapan} tone={token.core} />
            </HologramCard>

            <HologramCard icon={Briefcase} title="Profesi Terkait">
              <ChipList items={planet.profesi} tone={token.core} />
            </HologramCard>

            <div
              className="rounded-2xl border p-4 flex gap-3"
              style={{ borderColor: token.soft, background: `linear-gradient(135deg, ${token.soft}, transparent)` }}
            >
              <Lightbulb className="w-5 h-5 shrink-0 mt-0.5" style={{ color: token.core }} />
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider mb-1" style={{ color: token.core }}>
                  Science Fact
                </p>
                <p className="text-white/75 text-sm leading-relaxed italic">{planet.fact}</p>
              </div>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}

function ChipList({ items, tone }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <span
          key={item}
          className="text-xs px-2.5 py-1 rounded-full border text-white/75"
          style={{ borderColor: `${tone}55`, background: `${tone}14` }}
        >
          {item}
        </span>
      ))}
    </div>
  )
}
