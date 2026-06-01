import { useParams, Link } from "react-router-dom"
import { simulations } from "../data/simulations"
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"

export default function DetailSimulasi() {
  const { slug } = useParams()
  const simulasi = simulations.find((s) => s.slug === slug)
  const SimulationComponent = simulasi?.component

  if (!simulasi) {
    return (
      <div className="bg-black text-white min-h-screen">
        <Navbar />
        <section className="p-10">
          <h1 className="text-3xl font-bold mb-4">Simulasi tidak ditemukan</h1>
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
      <section className="p-10 max-w-3xl mx-auto">
        <Link to="/simulasi" className="text-cyan-400 hover:underline text-sm mb-8 block">
          ← Kembali ke daftar simulasi
        </Link>
        <h1 className="text-5xl font-bold mb-4">{simulasi.title}</h1>
        <p className="text-white/60 text-lg mb-10">{simulasi.description}</p>
        <div className="space-y-8">
          {simulasi.content.map((section, i) => (
            <div key={i} className="border border-white/10 rounded-2xl p-6 bg-white/5">
              <h2 className="text-2xl font-bold text-cyan-400 mb-3">{section.heading}</h2>
              <p className="text-white/70 leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>

        {SimulationComponent && (
          <div className="mt-10 border border-white/10 rounded-2xl p-6 bg-white/5">
            <SimulationComponent />
          </div>
        )}
      </section>
      <Footer />
    </div>
  )
}
