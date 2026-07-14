import { Link } from "react-router-dom"
import RichText from "./RichText"

export default function BlogCard({ title, excerpt, slug, date, category, readTime }) {
  return (
    <Link to={`/blog/${slug}`} className="block">
      <div
        className="
          hud-frame
          h-full
          flex flex-col
          bg-white/5
          border border-white/10
          rounded-2xl
          p-5 md:p-6
          transition-all
          duration-300
          hover:border-violet-400/50
          hover:shadow-violet-500/20
          hover:shadow-2xl
          hover:-translate-y-2
          active:scale-[0.98]
          cursor-pointer
        "
      >
        <div className="flex items-center gap-3 mb-3 font-mono text-[11px] text-cyan-300/80">
          {category && (
            <span className="px-2 py-0.5 rounded-full border border-cyan-400/30 bg-cyan-400/5 uppercase tracking-wide">
              {category}
            </span>
          )}
          {date && <span className="text-white/40">{date}</span>}
        </div>

        <h2 className="font-hud text-xl md:text-2xl font-bold mb-3 line-clamp-2">
          <RichText text={title} />
        </h2>

        <p className="text-sm md:text-base text-white/60 leading-relaxed line-clamp-3 flex-1">
          <RichText text={excerpt} />
        </p>

        <div className="mt-5 flex items-center justify-between text-sm font-mono">
          <span className="text-violet-300">BACA SELENGKAPNYA →</span>
          {readTime && <span className="text-white/30">{readTime}</span>}
        </div>
      </div>
    </Link>
  )
}
