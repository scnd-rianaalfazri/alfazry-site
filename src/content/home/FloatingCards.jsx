export default function FloatingCards() {
  const cards = [
    {
      title: "Kenapa langit biru?",
      desc: "Memahami hamburan cahaya dengan visual sederhana.",
    },
    {
      title: "Kenapa kapal bisa terapung?",
      desc: "Belajar fluida tanpa bikin kepala tenggelam 😭",
    },
    {
      title: "Kenapa petir terlihat duluan?",
      desc: "Fisika gelombang yang ternyata dekat banget sama hidup.",
    },
  ]

  return (
    <section className="relative z-10 px-4 sm:px-6 md:px-16 py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {cards.map((item, index) => (
          <div
            key={index}
            className="
              hud-frame
              group
              p-5 md:p-8
              rounded-2xl
              border border-white/10
              bg-white/5
              backdrop-blur-xl
              transition-all
              duration-500

              hover:-translate-y-2
              hover:border-violet-400/40
              hover:shadow-[0_0_30px_rgba(139,59,255,0.15)]
            "
          >
            <div
              className="
                w-12 h-12 md:w-14 md:h-14
                rounded-2xl
                bg-violet-500/10
                flex items-center justify-center
                text-violet-300
                text-xl md:text-2xl
                mb-5
              "
            >
              ✦
            </div>

            <h3
              className="
                font-hud
                text-xl md:text-2xl
                font-bold
                mb-3
                transition
                group-hover:text-violet-300
              "
            >
              {item.title}
            </h3>

            <p className="text-sm md:text-base text-white/60 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}