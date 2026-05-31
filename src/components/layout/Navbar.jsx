export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-8 py-6 border-b border-white/10">
      <h1 className="text-2xl font-bold">
        Alfazry<span className="text-cyan-400">Site</span>
      </h1>

      <nav className="flex gap-6 text-white/70">
        <a href="#">Materi</a>
        <a href="#">Simulasi</a>
        <a href="#">Blog</a>
      </nav>
    </header>
  )
}