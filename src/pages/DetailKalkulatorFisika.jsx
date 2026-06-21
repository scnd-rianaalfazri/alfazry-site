import { useParams, Link } from "react-router-dom"
import { physicscalculators } from "../data/physicscalculators.js"
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import BackToTopButton from "../components/UI/BackToTopBottom.jsx"

export default function DetailSimulasi() {
  const { slug } = useParams()
  const kalkulatorfisika = physicscalculators.find((k) => k.slug === slug)

  if (!kalkulatorfisika) {
    return (
      <div className="bg-black text-white min-h-screen">
        <Navbar />
        <section className="p-10">
          <h1 className="text-3xl font-bold mb-4">Kalkukator Fisika tidak ditemukan</h1>
          <Link to="/simulasi" className="text-cyan-400 hover:underline">
            ← Kembali ke daftar kalkulator fisika
          </Link>
        </section>
        <Footer />
      </div>
    )
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <section className="px-6 lg:px-12 py-10 max-w-7xl mx-auto">
        <Link to="/simulasi" className="text-cyan-400 hover:underline text-sm mb-8 block">
          ← Kembali ke daftar simulasi
        </Link>
        <h1 className="text-5xl font-bold mb-4">{kalkulatorfisika.title}</h1>
        <p className="text-white/60 text-lg mb-10">{kalkulatorfisika.description}</p>
        <div className="space-y-8">
          {(() => {
            const content = Array.isArray(kalkulatorfisika.content) ? kalkulatorfisika.content : []
            if (kalkulatorfisika.content && !Array.isArray(kalkulatorfisika.content)) {
              // eslint-disable-next-line no-console
              console.error("DetailSimulasi: 'content' must be an array", kalkulatorfisika.content)
            }

            return content.map((section, i) => {
              const SectionComponent = section && section.component
              if (SectionComponent && typeof SectionComponent !== "function") {
                // eslint-disable-next-line no-console
                console.warn("DetailKalkulatorFisika: section.component is not a React component", SectionComponent)
                return null
              }

              return (
                <div key={i} className="border border-white/10 rounded-2xl p-6 bg-white/5">
                  {section && section.heading && (
                    <h2 className="text-2xl font-bold text-cyan-400 mb-3">{section.heading}</h2>
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
