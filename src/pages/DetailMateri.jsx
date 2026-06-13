import { useParams, Link } from "react-router-dom"
import { materials } from "../data/materials"
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import MathEquation from "../components/MathEquation"

export default function DetailMateri() {
  const { slug } = useParams()
  const materi = materials.find((m) => m.slug === slug)

  const getContentValue = (source, key) => {
    if (!source || typeof source !== "object") return undefined
    return source[key] ?? source[key.charAt(0).toUpperCase() + key.slice(1)]
  }

  const renderTable = (table) => {
    if (!table) return null

    const rows = Array.isArray(table) ? table : table.rows
    if (!rows) return null

    return (
      <div className="overflow-auto rounded bg-white/5">
        <table className="min-w-full text-sm">
          <tbody>
            {Array.isArray(rows)
              ? rows.map((row, rowIndex) => (
                  <tr key={`table-row-${rowIndex}`}>
                    {Array.isArray(row)
                      ? row.map((cell, cellIndex) => (
                          <td key={cellIndex} className="border border-white/10 px-3 py-2 text-white/80">
                            {cell}
                          </td>
                        ))
                      : Object.entries(row).map(([cellKey, cellValue]) => (
                          <td key={cellKey} className="border border-white/10 px-3 py-2 text-white/80">
                            {cellValue}
                          </td>
                        ))}
                  </tr>
                ))
              : Object.entries(rows).map(([rowKey, rowValue]) => (
                  <tr key={rowKey}>
                    <td className="border border-white/10 px-3 py-2 text-white/80 font-semibold">{rowKey}</td>
                    <td className="border border-white/10 px-3 py-2 text-white/80">{rowValue}</td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    )
  }

  const renderList = (list) => {
    if (!list) return null
    return Array.isArray(list) ? (
      <ul className="list-disc list-inside space-y-2 text-white/70">
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    ) : (
      <p className="text-white/70 leading-relaxed">{list}</p>
    )
  }

  if (!materi) {
    return (
      <div className="bg-black text-white min-h-screen">
        <Navbar />
        <section className="p-10">
          <h1 className="text-3xl font-bold mb-4">Materi tidak ditemukan</h1>
          <Link to="/materi" className="text-cyan-400 hover:underline">
            ← Kembali ke daftar materi
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
        <Link to="/materi" className="text-cyan-400 hover:underline text-sm mb-8 block">
          ← Kembali ke daftar materi
        </Link>
        <h1 className="text-5xl font-bold mb-4">{materi.title}</h1>
        <div className="space-y-8">
          {materi.content && materi.content.map((section, i) => (
            <div key={i} className="border border-white/10 rounded-2xl p-6 bg-white/5">
              <h2 className="text-2xl font-bold text-cyan-400 mb-3">
                {section.heading}
              </h2>
              <div className="space-y-4">
      {section.image && (
        <figure className="mt-2 rounded-3xl overflow-hidden border border-white/10 bg-black/10">

          {section.link ? (
            <Link to={section.link}>
              <img
                src={section.image}
                alt={section.caption || section.heading || materi.title}
                className="w-full h-auto object-cover cursor-pointer transition duration-300 hover:scale-105"
              />
            </Link>
            ) : (
              <img
                src={section.image}
                alt={section.caption || section.heading || materi.title}
                className="w-full h-auto object-cover"
              />
            )}

          {section.caption && (
            <figcaption className="px-4 py-3 text-sm text-white/60 bg-black/20 text-center">
              {section.caption}
            </figcaption>
          )}
        </figure>
      )}

                {/* Render body content */}
                {Array.isArray(section.body) ? (
                  section.body.map((item, index) => {
                    if (typeof item === "string") {
                      return (
                        <p key={index} className="text-white/70 leading-relaxed">
                          {item}
                        </p>
                      )
                    }
                    return null
                  })
                ) : typeof section.body === "string" ? (
                  <p className="text-white/70 leading-relaxed">{section.body}</p>
                ) : null}

                {/* Render equation, explanation, table, list at section level */}
                {section.equation && (
                  <MathEquation equation={section.equation} />
                )}
                {section.explanation && (
                  Array.isArray(section.explanation) ? (
                    <div className="space-y-2">
                      {section.explanation.map((exp, expIdx) => (
                        <p key={expIdx} className="text-white/70 leading-relaxed">
                          {exp}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-white/70 leading-relaxed">
                      {section.explanation}
                    </p>
                  )
                )}
                {section.table && renderTable(section.table)}
                {section.list && renderList(section.list)}
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}
