import PascalSimulation from "../components/PascalSimulation"
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"

export default function Simulasi() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <section className="p-10">
        <h1 className="text-5xl font-bold mb-6">Simulasi Fisika</h1>
        <PascalSimulation />
      </section>
      <Footer />
    </div>
  )
}
