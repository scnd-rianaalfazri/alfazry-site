import MaterialCard from "../components/MaterialCards"
import { materials } from "../data/materials"
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"

export default function Materi() {

  const grouped = materials.reduce((acc, item) => {

    if (!acc[item.chapter]) {
      acc[item.chapter] = []
    }

    acc[item.chapter].push(item)

    return acc

  }, {})

  return (
    <div className="bg-black text-white min-h-screen">

      <Navbar />

      <section className="p-10">

        <h1 className="text-5xl font-bold mb-12">
          Materi Fisika
        </h1>

        {Object.entries(grouped).map(([chapter, items]) => (

          <div
            key={chapter}
            className="mb-16"
          >

            <h2 className="text-3xl font-bold mb-6 text-cyan-400">
              {chapter}
            </h2>

            <div className="grid md:grid-cols-3 gap-6">

              {items.map((item, index) => (
                <MaterialCard
                  key={index}
                  title={item.title}
                  description={item.description}
                  slug={item.slug}
                />
              ))}

            </div>

          </div>

        ))}

      </section>

      <Footer />

    </div>
  )
}
