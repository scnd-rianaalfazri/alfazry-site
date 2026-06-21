import { useParams, Link } from "react-router-dom"
import { materials } from "../data/materials"

import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import MathEquation from "../components/MathEquation"
import BackToTopButton from "../components/UI/BackToTopBottom"

export default function DetailMateri() {
  const { slug } = useParams()

  const materi = materials.find(
    (m) => m.slug === slug
  )

  const currentIndex = materials.findIndex(
    (m) => m.slug === slug
  )

  const materiSebelumnya =
    currentIndex > 0
      ? materials[currentIndex - 1]
      : null

  const materiBerikutnya =
    currentIndex < materials.length - 1
      ? materials[currentIndex + 1]
      : null

  const renderTable = (table) => {
    if (!table) return null

    const headers = table.headers || null
    const rows = Array.isArray(table)
      ? table
      : table.rows

    if (!rows) return null

    return (
      <div className="overflow-x-auto rounded-xl border border-white/10 bg-white/5">
        <table className="min-w-full text-sm border-collapse">
          {headers && (
            <thead>
              <tr className="bg-white/10">
                {headers.map((header, index) => (
                  <th
                    key={index}
                    className="
                      border border-white/10
                      px-3 py-2
                      text-center
                      font-semibold
                      whitespace-nowrap
                    "
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
          )}

          <tbody>
            {Array.isArray(rows)
              ? rows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {Array.isArray(row)
                      ? row.map((cell, cellIndex) => (
                          <td
                            key={cellIndex}
                            className="
                              border border-white/10
                              px-3 py-2
                              text-white/80
                            "
                          >
                            {cell}
                          </td>
                        ))
                      : Object.values(row).map(
                          (cell, cellIndex) => (
                            <td
                              key={cellIndex}
                              className="
                                border border-white/10
                                px-3 py-2
                                text-white/80
                              "
                            >
                              {cell}
                            </td>
                          )
                        )}
                  </tr>
                ))
              : null}
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
      <p className="text-white/70 leading-relaxed">
        {list}
      </p>
    )
  }

  if (!materi) {
    return (
      <div className="bg-black text-white min-h-screen">
        <Navbar />

        <section className="px-4 sm:px-6 md:px-10 py-8">
          <h1 className="text-3xl font-bold mb-4">
            Materi tidak ditemukan
          </h1>

          <Link
            to="/materi"
            className="text-cyan-400 hover:underline"
          >
            ← Kembali ke daftar materi
          </Link>
        </section>

        <Footer />
      </div>
    )
  }

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <Navbar />

      <section className="px-4 sm:px-6 md:px-10 py-8 max-w-4xl mx-auto">

        {/* Back Link */}
        <Link
          to="/materi"
          className="
            text-cyan-400
            hover:underline
            text-sm
            mb-3
            block
          "
        >
          ← Kembali ke daftar materi
        </Link>

        {/* Breadcrumb */}
        <p className="text-xs text-white/40 mb-4">
          Materi / {materi.title}
        </p>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          {materi.title}
        </h1>

        {/* Content */}
        <div className="space-y-8">
          {materi.content?.map((section, i) => (
            <div
              key={i}
              className="
                border border-white/10
                rounded-2xl
                p-4 md:p-6
                bg-white/5
                backdrop-blur-sm
              "
            >
              <h2
                className="
                  text-xl md:text-2xl
                  font-bold
                  text-cyan-400
                  mb-4
                "
              >
                {section.heading}
              </h2>

              <div className="space-y-4">

                {section.image && (
                  <figure className="overflow-hidden rounded-2xl border border-white/10">
                    {section.link ? (
                      <Link to={section.link}>
                        <img
                          src={section.image}
                          alt={
                            section.caption ||
                            section.heading
                          }
                          loading="lazy"
                          className="
                            w-full
                            h-auto
                            object-cover
                            transition
                            duration-300
                            hover:scale-105
                          "
                        />
                      </Link>
                    ) : (
                      <img
                        src={section.image}
                        alt={
                          section.caption ||
                          section.heading
                        }
                        loading="lazy"
                        className="w-full h-auto object-cover"
                      />
                    )}

                    {section.caption && (
                      <figcaption
                        className="
                          px-4 py-3
                          text-sm
                          text-center
                          text-white/60
                          bg-black/20
                        "
                      >
                        {section.caption}
                      </figcaption>
                    )}
                  </figure>
                )}

                {Array.isArray(section.body)
                  ? section.body.map((item, index) => (
                      <p
                        key={index}
                        className="
                          text-white/70
                          leading-relaxed
                        "
                      >
                        {item}
                      </p>
                    ))
                  : section.body && (
                      <p className="text-white/70 leading-relaxed">
                        {section.body}
                      </p>
                    )}

                {section.equation && (
                  <MathEquation
                    equation={section.equation}
                  />
                )}

                {section.explanation && (
                  Array.isArray(section.explanation)
                    ? section.explanation.map(
                        (item, index) => (
                          <p
                            key={index}
                            className="
                              text-white/70
                              leading-relaxed
                            "
                          >
                            {item}
                          </p>
                        )
                      )
                    : (
                      <p className="text-white/70 leading-relaxed">
                        {section.explanation}
                      </p>
                    )
                )}

                {section.table &&
                  renderTable(section.table)}

                {section.list &&
                  renderList(section.list)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Navigasi Materi */}
      <div
        className="
          max-w-4xl
          mx-auto
          px-4 md:px-10
          pb-10

          flex
          flex-col
          sm:flex-row

          gap-4
          justify-between
        "
      >
        {materiSebelumnya ? (
          <Link
            to={`/materi/${materiSebelumnya.slug}`}
            className="
              w-full sm:w-auto
              px-5 py-3
              rounded-xl
              bg-white/10
              hover:bg-white/20
              transition
              text-center
            "
          >
            ← Review Lagi
          </Link>
        ) : (
          <div />
        )}

        {materiBerikutnya && (
          <Link
            to={`/materi/${materiBerikutnya.slug}`}
            className="
              w-full sm:w-auto
              px-5 py-3
              rounded-xl

              bg-cyan-500
              hover:bg-cyan-600

              text-black
              font-semibold

              transition
              text-center
            "
          >
            Lanjut Eksplor →
          </Link>
        )}
      </div>

      <BackToTopButton />

      <Footer />
    </div>
  )
}