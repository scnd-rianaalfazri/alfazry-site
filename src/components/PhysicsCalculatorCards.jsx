import { Link } from "react-router-dom"

export default function PhysicsCalculatorCard({ title, description, slug }) {
  return (
    <Link to={`/kalkulatorfisika/${slug}`} className="block">
      <div
        className="
          h-full
          bg-white/5
          border border-white/10
          rounded-3xl
          p-5 md:p-6
          transition-all
          duration-300
          hover:border-cyan-400
          hover:shadow-cyan-500/20
          hover:shadow-2xl
          hover:-translate-y-2
          active:scale-[0.98]
          cursor-pointer
        "
      >
        <h2 className="text-xl md:text-2xl font-bold mb-3 line-clamp-2">
          {title}
        </h2>

        <p className="text-sm md:text-base text-white/60 leading-relaxed">
          {description}
        </p>

        <div className="mt-5 flex items-center text-cyan-400 text-sm font-medium">
          Jalankan Kalkulator Fisika →
        </div>
      </div>
    </Link>
  )
}