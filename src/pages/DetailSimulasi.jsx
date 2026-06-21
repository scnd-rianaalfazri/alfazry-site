import { useParams, Link } from "react-router-dom"
import { simulations } from "../data/simulations"
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import BackToTopButton from "../components/UI/BackToTopBottom.jsx"

export default function DetailSimulasi() {
  const { slug } = useParams()
  const simulasi = simulations.find((s) => s.slug === slug)

  if (!simulasi) {
    return (
      <div className="bg-black text-white min-h-screen overflow-x-hidden">
        <Navbar />
        <section className="p-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Simulasi tidak ditemukan</h1>
          <Link to="/simulasi" className="text-cyan-400 hover:underline">
            ← Kembali ke daftar simulasi
          </Link>
        </section>
        <Footer />
      </div>
    )
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <section className="px-4 sm:px-6 lg:px-12 py-8 md:py-10 max-w-7xl mx-auto">
        <Link to="/simulasi" className="text-cyan-400 hover:underline text-sm mb-8 block">
          ← Kembali ke daftar simulasi
        </Link>
        <h1 className="text-5xl font-bold mb-4">{simulasi.title}</h1>
        <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8 md:mb-10">{simulasi.description}</p>
        <div className="space-y-8">
          {(() => {
            const content = Array.isArray(simulasi.content) ? simulasi.content : []
            if (simulasi.content && !Array.isArray(simulasi.content)) {
              // eslint-disable-next-line no-console
              console.error("DetailSimulasi: 'content' must be an array", simulasi.content)
            }

            return content.map((section, i) => {
              const SectionComponent = section && section.component
              if (SectionComponent && typeof SectionComponent !== "function") {
                // eslint-disable-next-line no-console
                console.warn("DetailSimulasi: section.component is not a React component", SectionComponent)
                return null
              }

            return (
              <div key={i}>
                
                {section?.heading && (
                  <h2 className="text-2xl font-bold text-cyan-400 mb-3">
                    {section.heading}
                  </h2>
                )}

                {section?.body && (
                  <p className="text-white/70 leading-relaxed mb-6">
                    {section.body}
                  </p>
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
