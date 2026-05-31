import MaterialCard from "../components/MaterialCards"
import { materials } from "../data/materials"
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"

export default function Materi() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <section className="p-10">
        <h1 className="text-5xl font-bold mb-10">Materi Fisika</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {materials.map((item, index) => (
            <MaterialCard
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
