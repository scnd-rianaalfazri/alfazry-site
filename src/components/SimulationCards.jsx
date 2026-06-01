import { Link } from "react-router-dom"

export default function SimulationCard({ title, description, slug }) {
  return (
    <Link to={`/simulasi/${slug}`}>
      <div className="
        bg-white/5
        border border-white/10
        rounded-3xl
        p-6
        transition
        duration-300
        hover:border-cyan-400
        hover:shadow-cyan-500/20
        hover:shadow-2xl
        hover:-translate-y-2
        cursor-pointer
      ">
        <h2 className="text-2xl font-bold mb-3">
          {title}
        </h2>
        <p className="text-white/60">
          {description}
        </p>
      </div>
    </Link>
  )
}
