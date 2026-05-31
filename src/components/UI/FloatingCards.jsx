export default function FloatingCards() {
  return (
    <section className="relative z-10 px-6 md:px-16 py-20 grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
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
      ].map((item, index) => (
        <div
          key={index}
          className="group p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-cyan-400/40 transition duration-500 hover:-translate-y-2"
        >
          <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 flex items-center justify-center text-cyan-400 text-2xl mb-6">
            ✦
          </div>
          <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition">
            {item.title}
          </h3>
          <p className="text-white/60 leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </section>
  )
}
