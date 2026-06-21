import PhysicsCalculatorCard from "../components/PhysicsCalculatorCards"
import { physicscalculators } from "../data/physicscalculators"
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"

export default function KalkulatorFisika() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <section className="p-10">
        <h1 className="text-5xl font-bold mb-10">Kalkulator Fisika</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {physicscalculators.map((item, index) => (
            <PhysicsCalculatorCard
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