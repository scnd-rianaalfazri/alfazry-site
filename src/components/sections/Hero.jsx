import { Link } from "react-router-dom"

export default function Hero() {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-32">
      <p className="uppercase tracking-[0.4em] text-cyan-400 text-xs mb-5">
        Physics • Curiosity • Universe
      </p>
      <h2 className="text-5xl md:text-7xl font-black leading-tight max-w-5xl">
        Fisika bukan sekadar rumus.
        <br />
        <span className="text-cyan-400">Tapi cara memahami semesta.</span>
      </h2>
      <p className="mt-8 text-white/70 max-w-2xl text-lg leading-relaxed">
        Belajar fisika dengan cara yang lebih hidup, visual, dan relate dengan
        kehidupan sehari-hari.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mt-10">
        <Link
          to="/materi"
          className="px-8 py-4 rounded-2xl bg-cyan-400 text-black font-semibold hover:scale-105 transition duration-300 shadow-2xl shadow-cyan-500/30"
        >
          Mulai Belajar
        </Link>
        <Link
          to="/simulasi"
          className="px-8 py-4 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 transition duration-300"
        >
          Jelajahi Simulasi
        </Link>
      </div>
    </section>
  )
}
