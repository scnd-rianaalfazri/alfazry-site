export default function Features() {
  return (
    <section className="relative z-10 px-4 sm:px-6 md:px-16 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

        <div>
          <p className="font-mono text-cyan-300 uppercase tracking-[0.2em] sm:tracking-[0.3em] text-xs mb-4">
            Interactive Learning
          </p>

          <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
            Belajar dengan simulasi dan visual interaktif.
          </h3>

          <p className="mt-5 md:mt-6 text-white/65 leading-relaxed text-base md:text-lg">
            Karena fisika lebih mudah dipahami ketika bisa dilihat,
            dimainkan, dan dirasakan langsung.
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-cyan-500/15 blur-3xl rounded-full" />

          <div className="hud-frame relative rounded-2xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl p-6 md:p-8 h-64 sm:h-72 md:h-80 flex items-center justify-center overflow-hidden">

            <div className="absolute w-40 h-40 md:w-48 md:h-48 border border-cyan-400/30 rounded-full animate-pulse" />

            <div className="absolute w-60 h-60 md:w-72 md:h-72 border border-cyan-400/10 rounded-full" />

            <div className="text-center z-10">
              <p className="font-mono text-cyan-300 text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3">
                Simulation Preview
              </p>

              <h4 className="font-hud text-2xl md:text-3xl font-bold">
                Hukum Pascal
              </h4>

              <p className="mt-3 text-sm md:text-base text-white/60">
                Tekanan kecil bisa menghasilkan gaya besar.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}