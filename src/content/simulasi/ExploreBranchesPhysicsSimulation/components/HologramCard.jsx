/**
 * Kartu holografik generik dipakai di dalam InfoPanel untuk tiap
 * seksi data planet (apa dipelajari, objek, penerapan, profesi, fact).
 */
export default function HologramCard({ icon: Icon, title, children, tone = "cyan" }) {
  const toneClass = tone === "violet" ? "text-violet-300" : "text-cyan-300"

  return (
    <div className="hud-frame rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4 md:p-5">
      <div className="flex items-center gap-2 mb-2.5">
        {Icon && <Icon className={`w-4 h-4 ${toneClass}`} />}
        <h3 className={`font-mono text-xs uppercase tracking-wider ${toneClass}`}>{title}</h3>
      </div>
      <div className="text-white/80 text-sm leading-relaxed">{children}</div>
    </div>
  )
}
