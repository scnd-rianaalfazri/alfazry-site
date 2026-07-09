import SimulationCard from "../components/layout/SimulationCards"
import { simulations } from "../data/simulations"
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"

export default function Simulasi() {
  return (
    <div className="bg-space bg-grid text-white min-h-screen">
      <Navbar />

      <section className="relative z-10 p-6 md:p-10">
        <p className="font-mono uppercase tracking-[0.3em] text-cyan-300 text-[10px] sm:text-xs mb-3">
          Laboratorium Interaktif
        </p>

        <h1 className="font-display font-black text-3xl md:text-5xl mb-10 text-gradient-violet">
          SIMULASI FISIKA
        </h1>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
          {simulations.map((item, index) => (
            <SimulationCard
              key={index}
              title={item.title}
              description={item.description}
              slug={item.slug}
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
