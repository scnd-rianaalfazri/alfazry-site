import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { materials } from "../data/materials"

import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import MathEquation from "../components/MathEquation"
import BackToTopButton from "../components/UI/BackToTopBottom"

export default function DetailMateri() {
  const { slug } = useParams()

  // Section pertama yang punya heading otomatis terbuka,
  // sisanya tertutup biar halaman tidak numpuk saat di-scroll.
  const [openSections, setOpenSections] = useState(() => new Set([0]))

  const toggleSection = (index) => {
    setOpenSections((prev) => {
      const next = new Set(prev)

      if (next.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }

      return next
    })
  }

  const openAllSections = () => {
    const allIndexes = (materi?.content || [])
      .map((section, index) => (section.heading ? index : null))
      .filter((index) => index !== null)

    setOpenSections(new Set(allIndexes))
  }

  const closeAllSections = () => {
    setOpenSections(new Set())
  }

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
      <div className="bg-space text-white min-h-screen">
        <Navbar />

        <section className="px-4 sm:px-6 md:px-10 py-8">
          <h1 className="font-display text-3xl font-bold mb-4">
            Materi tidak ditemukan
          </h1>

          <Link
            to="/materi"
            className="text-cyan-300 hover:underline"
          >
            ← Kembali ke daftar materi
          </Link>
        </section>

        <Footer />
      </div>
    )
  }

  return (
    <div className="bg-space text-white min-h-screen overflow-x-hidden">
      <Navbar />

      <section className="relative z-10 px-4 sm:px-6 md:px-10 py-8 max-w-4xl mx-auto">

        {/* Back Link */}
        <Link
          to="/materi"
          className="
            font-mono
            text-cyan-300
            hover:underline
            text-sm
            mb-3
            block
          "
        >
          ← Kembali ke daftar materi
        </Link>

        {/* Breadcrumb */}
        <p className="font-mono text-xs text-violet-300/50 mb-4">
          Materi / {materi.title}
        </p>

        {/* Title */}
        <h1 className="font-display font-black text-3xl md:text-5xl mb-4 text-gradient-violet">
          {materi.title}
        </h1>

        <div className="flex gap-2 mb-6">
          <button
            type="button"
            onClick={openAllSections}
            className="
              px-4 py-2
              rounded-xl
              text-xs md:text-sm
              font-medium
              font-mono
              bg-violet-500/10
              text-violet-300
              border border-violet-400/30
              hover:bg-violet-500/20
              transition-colors
            "
          >
            Buka Semua
          </button>

          <button
            type="button"
            onClick={closeAllSections}
            className="
              px-4 py-2
              rounded-xl
              text-xs md:text-sm
              font-medium
              font-mono
              bg-white/5
              text-white/60
              border border-white/10
              hover:bg-white/10
              transition-colors
            "
          >
            Tutup Semua
          </button>
        </div>

        {/* Content */}
        <div className="space-y-4 md:space-y-5">
          {materi.content?.map((section, i) => {

            const body = (
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
            )

            // Section tanpa heading (misalnya gambar hero pembuka)
            // tetap ditampilkan langsung, tidak perlu di-collapse.
            if (!section.heading) {
              return (
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
                  {body}
                </div>
              )
            }

            // Section berjudul dijadikan sub-card yang bisa
            // dibuka/ditutup, biar halaman tidak numpuk saat di-scroll.
            const isOpen = openSections.has(i)

            return (
              <div
                key={i}
                className="
                  hud-frame
                  border border-white/10
                  rounded-2xl
                  bg-white/5
                  backdrop-blur-sm
                  overflow-hidden
                  transition-colors
                  hover:border-violet-400/30
                "
              >
                <button
                  type="button"
                  onClick={() => toggleSection(i)}
                  aria-expanded={isOpen}
                  className="
                    w-full
                    flex items-center justify-between
                    gap-4
                    px-4 md:px-6
                    py-4 md:py-5
                    text-left
                    hover:bg-white/5
                    transition-colors
                  "
                >
                  <h2
                    className="
                      font-hud
                      text-lg md:text-2xl
                      font-bold
                      text-gradient-violet
                    "
                  >
                    {section.heading}
                  </h2>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0 text-cyan-300"
                  >
                    <ChevronDown size={22} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 md:px-6 pb-4 md:pb-6">
                        {body}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </section>

      {/* Navigasi Materi */}
      <div
        className="
          relative z-10
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
              font-hud
              bg-white/10
              border border-white/10
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
              font-hud

              bg-gradient-to-r from-violet-500 to-violet-700
              border border-violet-400/40
              hover:scale-[1.02]

              text-white
              font-semibold

              transition
              text-center
              shadow-lg shadow-violet-600/30
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