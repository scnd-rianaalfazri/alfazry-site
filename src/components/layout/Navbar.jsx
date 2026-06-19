import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/40 flex justify-between items-center px-8 py-6 border-b border-white/10">
      <Link to="/">
        <h1 className="text-2xl font-bold">
          Alfazry<span className="text-cyan-400">Site</span>
        </h1>
      </Link>
      <nav className="flex gap-6 text-white/70">
        <Link to="/materi" className="hover:text-cyan-400 transition">Materi</Link>
        <Link to="/simulasi" className="hover:text-cyan-400 transition">Simulasi</Link>
        <Link to="/kalkulatorfisika" className="hover:text-cyan-400 transition">Kalkulator Fisika</Link>
        <Link to="/blog" className="hover:text-cyan-400 transition">Blog</Link>
      </nav>
    </header>
  )
}
