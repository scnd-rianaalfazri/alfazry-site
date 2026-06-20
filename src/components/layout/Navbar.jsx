import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          
          <Link to="/">
            <h1 className="text-xl sm:text-2xl font-bold text-center sm:text-left">
              Alfazry<span className="text-cyan-400">Site</span>
            </h1>
          </Link>

          <nav className="flex flex-wrap justify-center gap-3 sm:gap-6 text-sm sm:text-base text-white/70">
            <Link to="/materi" className="hover:text-cyan-400 transition">
              Materi
            </Link>

            <Link to="/simulasi" className="hover:text-cyan-400 transition">
              Simulasi
            </Link>

            <Link to="/kalkulatorfisika" className="hover:text-cyan-400 transition">
              Kalkulator
            </Link>

            <Link to="/blog" className="hover:text-cyan-400 transition">
              Blog
            </Link>
          </nav>

        </div>
      </div>
    </header>
  )
}