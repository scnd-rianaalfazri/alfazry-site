import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { materials } from "../data/materials"

import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import MathEquation from "../components/layout/MathEquation"
import QuickCheck from "../components/layout/QuickCheck"
import RichText from "../components/layout/RichText"
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
                    <RichText text={header} />
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
                            <RichText text={cell} />
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
                              <RichText text={cell} />
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

  // Marker kustom (bukan bullet/angka bawaan browser) biar konsisten
  // sama tema HUD ungu-cyan di seluruh situs. Mendukung list bercabang:
  // tiap item boleh punya `children` (sub-list) yang otomatis di-indent
  // dan bisa dicampur ordered/unordered sesuka hati, berapa level pun.
  const renderListBlock = (block, depth = 0) => {
    const type = block?.type === "ordered" ? "ordered" : "unordered"
    const items = block?.items || []
    const Tag = type === "ordered" ? "ol" : "ul"

    return (
      <Tag className={`list-none space-y-2.5 ${depth > 0 ? "mt-2.5" : ""}`}>
        {items.map((raw, index) => {
          // item boleh berupa string biasa, atau object { text, children }
          const item = typeof raw === "string" ? { text: raw } : raw || {}

          return (
            <li key={index}>
              <div className="flex items-start gap-3 text-white/70 leading-relaxed">
                {type === "ordered" ? (
                  <span
                    className="
                      mt-0.5
                      shrink-0
                      w-6 h-6
                      rounded-full
                      bg-violet-500/15
                      border border-violet-400/40
                      text-violet-300
                      font-mono text-xs
                      flex items-center justify-center
                    "
                  >
                    {index + 1}
                  </span>
                ) : (
                  <span
                    className="
                      mt-2
                      w-1.5 h-1.5
                      rounded-full
                      shrink-0
                      shadow-[0_0_6px_2px_rgba(139,59,255,0.5)]
                      bg-violet-400
                    "
                  />
                )}
                <span>
                  <RichText text={item.text} />
                </span>
              </div>

              {/* Paragraf penjelasan milik item ini (opsional) */}
              {item.description && (
                <div className="pl-8 md:pl-9 mt-1.5 space-y-1.5">
                  {Array.isArray(item.description) ? (
                    item.description.map((d, dIndex) => (
                      <p
                        key={dIndex}
                        className="text-white/45 text-sm leading-relaxed"
                      >
                        <RichText text={d} />
                      </p>
                    ))
                  ) : (
                    <p className="text-white/45 text-sm leading-relaxed">
                      <RichText text={item.description} />
                    </p>
                  )}
                </div>
              )}

              {/* Sub-list (list bercabang) — indent ke kanan tiap level */}
              {item.children && (
                <div className="pl-8 md:pl-9 mt-2">
                  {renderListBlock(item.children, depth + 1)}
                </div>
              )}
            </li>
          )
        })}
      </Tag>
    )
  }

  // Format yang didukung (HANYA object, format array lama sudah tidak didukung):
  //   list: { type: "unordered", items: [...] } -> unordered (bullet)
  //   list: { type: "ordered", items: [...] }   -> ordered (bernomor)
  //   list: "teks biasa"                         -> paragraf (fallback)
  //
  //   List bercabang + penjelasan per item: tiap item di `items` boleh
  //   diganti object { text, description, children }:
  //     - text        -> teks poinnya (wajib kalau pakai object)
  //     - description -> paragraf penjelasan di bawah poin itu (opsional,
  //                      boleh string atau array of string buat banyak paragraf)
  //     - children    -> sub-list di bawah paragraf (opsional, format sama
  //                      persis kayak `list`, jadi bisa berlapis-lapis)
  //
  //   Contoh:
  //   list: {
  //     type: "ordered",
  //     items: [
  //       {
  //         text: "Langkah pertama",
  //         description: "Penjelasan singkat soal langkah pertama.",
  //       },
  //       {
  //         text: "Langkah kedua (punya sub-langkah)",
  //         description: "Penjelasan langkah kedua.",
  //         children: {
  //           type: "unordered",
  //           items: [
  //             {
  //               text: "Sub A",
  //               description: "Penjelasan sub A.",
  //             },
  //             "Sub B (tanpa penjelasan, boleh string biasa)",
  //           ],
  //         },
  //       },
  //     ],
  //   }
  const renderList = (list) => {
    if (!list) return null

    if (typeof list === "object" && Array.isArray(list.items)) {
      return renderListBlock(list)
    }

    return (
      <p className="text-white/70 leading-relaxed">
        <RichText text={list} />
      </p>
    )
  }

  // ============================================================
  // Sistem BLOCKS — biar penempatan image/body/equation/explanation/
  // table/list/quickCheck dalam satu section bisa bebas urutannya,
  // bahkan bisa diulang beberapa kali (misal: paragraf → gambar →
  // paragraf lagi → tabel → paragraf lagi).
  // ============================================================
  //
  // Cara pakai (opsional, section tanpa `blocks` tetap jalan seperti
  // biasa lewat field lama: image/body/equation/explanation/table/
  // list/quickCheck, dengan urutan tampil tetap seperti sebelumnya):
  //
  //   {
  //     heading: "Judul Section",
  //     blocks: [
  //       { type: "paragraph", text: "Paragraf pembuka." },
  //       { type: "image", src: fotoImg, caption: "Keterangan foto" },
  //       { type: "heading", text: "Sub-judul di tengah konten" },
  //       { type: "paragraf", text: ["Paragraf 1", "Paragraf 2"] },
  //       { type: "equation", equation: "F = ma" },
  //       { type: "table", table: { headers: [...], rows: [...] } },
  //       { type: "list", list: { type: "ordered", items: [...] } },
  //       { type: "explanation", text: "Catatan tambahan." },
  //       { type: "quickCheck", data: { questions: [...] } },
  //     ],
  //   }
  //
  // Tipe block yang didukung: paragraph, image, heading, equation,
  // table, list, explanation, quickCheck.
  const sectionToBlocks = (section) => {
    if (Array.isArray(section.blocks)) return section.blocks

    // Section lama (tanpa `blocks`) -> dirakit otomatis dari field
    // lama, urutannya persis seperti versi sebelumnya supaya semua
    // materi yang sudah ada tetap tampil sama.
    const blocks = []

    if (section.image) {
      blocks.push({
        type: "image",
        src: section.image,
        caption: section.caption,
        link: section.link,
        alt: section.caption || section.heading,
      })
    }

    if (section.body) {
      blocks.push({ type: "paragraph", text: section.body })
    }

    if (section.equation) {
      blocks.push({ type: "equation", equation: section.equation })
    }

    if (section.explanation) {
      blocks.push({ type: "explanation", text: section.explanation })
    }

    if (section.table) {
      blocks.push({ type: "table", table: section.table })
    }

    if (section.list) {
      blocks.push({ type: "list", list: section.list })
    }

    if (section.quickCheck) {
      blocks.push({ type: "quickCheck", data: section.quickCheck })
    }

    return blocks
  }

  const renderParagraphs = (text, className) =>
    Array.isArray(text) ? (
      text.map((item, index) => (
        <p key={index} className={className}>
          <RichText text={item} />
        </p>
      ))
    ) : (
      <p className={className}>
        <RichText text={text} />
      </p>
    )

  const renderBlock = (block, key) => {
    if (!block || !block.type) return null

    switch (block.type) {
      case "image":
        return (
          <figure
            key={key}
            className="overflow-hidden rounded-2xl border border-white/10"
          >
            {block.link ? (
              <Link to={block.link}>
                <img
                  src={block.src}
                  alt={block.alt || block.caption}
                  loading="lazy"
                  className="
                    w-full h-auto object-cover
                    transition duration-300
                    hover:scale-105
                  "
                />
              </Link>
            ) : (
              <img
                src={block.src}
                alt={block.alt || block.caption}
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            )}

            {block.caption && (
              <figcaption
                className="
                  px-4 py-3
                  text-sm text-center
                  text-white/60
                  bg-black/20
                "
              >
                {block.caption}
              </figcaption>
            )}
          </figure>
        )

      case "heading":
        return (
          <h3
            key={key}
            className="font-hud text-base md:text-lg font-bold text-violet-300"
          >
            <RichText text={block.text} />
          </h3>
        )

      case "paragraph":
        return (
          <div key={key} className="space-y-4">
            {renderParagraphs(block.text, "text-white/70 leading-relaxed")}
          </div>
        )

      case "explanation":
        return (
          <div key={key} className="space-y-4">
            {renderParagraphs(block.text, "text-white/70 leading-relaxed")}
          </div>
        )

      case "equation":
        return <MathEquation key={key} equation={block.equation} />

      case "table":
        return <div key={key}>{renderTable(block.table)}</div>

      case "list":
        return <div key={key}>{renderList(block.list)}</div>

      case "quickCheck":
        return <QuickCheck key={key} data={block.data} />

      default:
        return null
    }
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
            const blocks = sectionToBlocks(section).filter(
              (block, bi) =>
                !(
                  block?.type === "heading" &&
                  bi === 0 &&
                  section.heading &&
                  block.text === section.heading
                )
            )

            const body = (
              <div className="space-y-4">
                {blocks.map((block, bi) => renderBlock(block, bi))}
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
                    <RichText text={section.heading} />
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