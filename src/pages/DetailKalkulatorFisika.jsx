import { useParams, Link } from "react-router-dom"
import { physicscalculators } from "../data/physicscalculators.js"
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import BackToTopButton from "../components/UI/BackToTopBottom.jsx"

export default function DetailKalkulatorFisika() {
  const { slug } = useParams()
  const kalkulatorfisika = physicscalculators.find((k) => k.slug === slug)

  if (!kalkulatorfisika) {
    return (
      <div className="bg-space text-white min-h-screen">
        <Navbar />
        <section className="p-10">
          <h1 className="font-display text-3xl font-bold mb-4">Kalkukator Fisika tidak ditemukan</h1>
          <Link to="/kalkulatorfisika" className="text-cyan-300 hover:underline">
            ← Kembali ke daftar kalkulator fisika
          </Link>
        </section>
        <Footer />
      </div>
    )
  }

  return (
    <div className="bg-space text-white min-h-screen">
      <Navbar />
      <section className="relative z-10 px-4 sm:px-6 lg:px-12 py-8 md:py-10 max-w-7xl mx-auto">
        <Link to="/kalkulatorfisika" className="font-mono text-cyan-300 hover:underline text-sm mb-8 block">
          ← Kembali ke daftar kalkulator fisika
        </Link>

        <p className="font-mono text-xs text-violet-300/50 mb-3">
          Kalkulator / {kalkulatorfisika.title}
        </p>

        <h1 className="font-display font-black text-3xl md:text-5xl mb-4 text-gradient-violet">
          {kalkulatorfisika.title}
        </h1>

        <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8 md:mb-10">{kalkulatorfisika.description}</p>

        <div className="space-y-6">
          {(() => {
            const content = Array.isArray(kalkulatorfisika.content) ? kalkulatorfisika.content : []
            if (kalkulatorfisika.content && !Array.isArray(kalkulatorfisika.content)) {
              // eslint-disable-next-line no-console
              console.error("DetailKalkulatorFisika: 'content' must be an array", kalkulatorfisika.content)
            }

            return content.map((section, i) => {
              const SectionComponent = section && section.component
              if (SectionComponent && typeof SectionComponent !== "function") {
                // eslint-disable-next-line no-console
                console.warn("DetailKalkulatorFisika: section.component is not a React component", SectionComponent)
                return null
              }

              return (
                <div
                  key={i}
                  className="hud-frame border border-white/10 rounded-2xl p-5 md:p-6 bg-white/5 backdrop-blur-sm transition-colors hover:border-violet-400/30"
                >
                  {section && section.heading && (
                    <h2 className="font-hud text-2xl font-bold text-gradient-violet mb-3">{section.heading}</h2>
                  )}
                  {section && section.body && (
                    <p className="text-white/70 leading-relaxed mb-6">{section.body}</p>
                  )}
                  {SectionComponent && <SectionComponent />}
                </div>
              )
            })
          })()}
        </div>
      </section>
      <BackToTopButton />
      <Footer />
    </div>
  )
}
