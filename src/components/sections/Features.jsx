export default function Features () {
  return (
      <section className="relative z-10 px-6 md:px-16 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-xs mb-4">
              Interactive Learning
            </p>

            <h3 className="text-4xl md:text-5xl font-black leading-tight">
              Belajar dengan simulasi dan visual interaktif.
            </h3>

            <p className="mt-6 text-white/65 leading-relaxed text-lg">
              Karena fisika lebih mudah dipahami ketika bisa dilihat,
              dimainkan, dan dirasakan langsung.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full" />

            <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 h-80 flex items-center justify-center overflow-hidden">
              <div className="absolute w-48 h-48 border border-cyan-400/30 rounded-full animate-pulse" />
              <div className="absolute w-72 h-72 border border-cyan-400/10 rounded-full" />

              <div className="text-center z-10">
                <p className="text-cyan-400 text-sm uppercase tracking-[0.3em] mb-3">
                  Simulation Preview
                </p>
                <h4 className="text-3xl font-bold">Hukum Pascal</h4>
                <p className="mt-3 text-white/60">
                  Tekanan kecil bisa menghasilkan gaya besar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}