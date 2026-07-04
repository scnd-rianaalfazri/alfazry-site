import { Link } from "react-router-dom"

const equationChips = [
  { label: "E = mc²", className: "top-6 left-2 sm:left-6 md:left-10 animate-float-slow" },
  { label: "F = ma", className: "top-24 right-2 sm:right-8 md:right-16 [animation-delay:1.2s] animate-float-slow" },
  { label: "v = λf", className: "bottom-10 left-4 sm:left-10 md:left-20 [animation-delay:2.4s] animate-float-slow" },
  { label: "Δx / Δt", className: "bottom-4 right-4 sm:right-10 md:right-24 [animation-delay:0.6s] animate-float-slow" },
]

export default function Hero() {
  return (
    <section className="bg-space bg-grid relative overflow-hidden">

      {/* Orbit ring dekoratif */}
      <div
        className="
          pointer-events-none
          absolute
          -top-24 right-[-120px]
          w-[320px] h-[320px]
          sm:w-[420px] sm:h-[420px]
          rounded-full
          border border-violet-500/20
        "
      >
        <div className="absolute inset-6 rounded-full border border-cyan-400/15" />
        <div className="absolute inset-0 animate-orbit">
          <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-violet-400 shadow-[0_0_12px_3px_rgba(139,59,255,0.8)]" />
        </div>
      </div>

      {/* Equation chip ambient, disembunyikan di mobile biar tidak sesak */}
      <div className="hidden sm:block absolute inset-0 pointer-events-none">
        {equationChips.map((chip, i) => (
          <span
            key={i}
            className={`
              absolute
              font-mono text-[11px] md:text-xs
              text-violet-300/70
              border border-violet-400/25
              bg-violet-500/5
              rounded-md
              px-2.5 py-1
              backdrop-blur-sm
              ${chip.className}
            `}
          >
            {chip.label}
          </span>
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 py-20 md:py-32">

        <div
          className="
            hud-frame
            font-mono
            uppercase
            tracking-[0.25em] sm:tracking-[0.4em]
            text-cyan-300
            text-[10px] sm:text-xs
            mb-6
            px-4 py-2
            border border-cyan-400/25
            rounded-md
            bg-cyan-400/5
          "
        >
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-300 mr-2 animate-pulse-glow" />
          Physics • Curiosity • Universe
        </div>

        <h2 className="font-display font-black leading-[1.1] max-w-5xl text-3xl sm:text-5xl md:text-7xl tracking-wide">
          FISIKA BUKAN
          <br />
          SEKADAR RUMUS.
          <br />
          <span className="text-gradient-violet text-glow-violet">
            TAPI CARA MEMAHAMI SEMESTA.
          </span>
        </h2>

        <p className="mt-6 md:mt-8 text-white/60 max-w-2xl text-base md:text-lg leading-relaxed">
          Belajar fisika dengan cara yang lebih hidup, visual, dan relate dengan
          kehidupan sehari-hari.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-10 w-full sm:w-auto">

          <Link
            to="/materi"
            className="
              w-full sm:w-auto
              px-8 py-4
              rounded-2xl
              bg-gradient-to-r from-violet-500 to-violet-700
              text-white font-semibold font-hud
              hover:scale-105
              transition duration-300
              shadow-2xl shadow-violet-600/40
              border border-violet-400/40
            "
          >
            Mulai Belajar
          </Link>

          <Link
            to="/simulasi"
            className="
              w-full sm:w-auto
              px-8 py-4
              rounded-2xl
              border border-cyan-400/30
              bg-white/5
              backdrop-blur-md
              text-cyan-100
              hover:bg-cyan-400/10
              hover:border-cyan-400/60
              transition duration-300
            "
          >
            Jelajahi Simulasi
          </Link>

        </div>
      </div>
    </section>
  )
}
