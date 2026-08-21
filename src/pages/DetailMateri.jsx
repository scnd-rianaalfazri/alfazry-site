import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Quote } from "lucide-react"
import { materials } from "../data/materials"

import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import MathEquation from "../components/layout/MathEquation"
import QuickCheck from "../components/layout/QuickCheck"
import Carousel from "../components/layout/Carousel"
import RichText from "../components/layout/RichText"
import Callout from "../components/layout/Callout"

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

  // Helper: ubah nomor urut (1, 2, 3, ...) jadi format penanda ordered list.
  // Dipakai bareng `block.style` di renderListBlock. Support sampai lewat
  // 26 item buat huruf (jadi aa, ab, ac, ... kayak kolom spreadsheet).
  const numberToAlpha = (num, upper) => {
    let n = num
    let result = ""
    while (n > 0) {
      n -= 1
      result = String.fromCharCode(97 + (n % 26)) + result
      n = Math.floor(n / 26)
    }
    return upper ? result.toUpperCase() : result
  }

  const numberToRoman = (num) => {
    const map = [
      [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"],
      [100, "C"], [90, "XC"], [50, "L"], [40, "XL"],
      [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"],
    ]
    let n = num
    let result = ""
    for (const [value, numeral] of map) {
      while (n >= value) {
        result += numeral
        n -= value
      }
    }
    return result
  }

  const GREEK_LETTERS = [
    "α", "β", "γ", "δ", "ε", "ζ", "η", "θ", "ι", "κ", "λ", "μ",
    "ν", "ξ", "ο", "π", "ρ", "σ", "τ", "υ", "φ", "χ", "ψ", "ω",
  ]
  const numberToGreek = (num) => {
    let n = num
    let result = ""
    while (n > 0) {
      n -= 1
      result = GREEK_LETTERS[n % 24] + result
      n = Math.floor(n / 24)
    }
    return result
  }

  // U+2460..U+2473 -> ①..⑳ (cuma tersedia 1-20 di Unicode), lewat dari
  // itu jatuhkan ke format "(21)" biar tetap kebaca jelas
  const numberToCircled = (num) => {
    if (num >= 1 && num <= 20) {
      return String.fromCodePoint(0x2460 + (num - 1))
    }
    return `(${num})`
  }

  // Gaya penomoran ordered list: "number" (default), "upperAlpha",
  // "lowerAlpha", "upperRoman", "lowerRoman", "decimalLeadingZero",
  // "lowerGreek", "circled"
  const getOrderedMarker = (index, style) => {
    const orderNumber = index + 1
    switch (style) {
      case "upperAlpha":
        return numberToAlpha(orderNumber, true)
      case "lowerAlpha":
        return numberToAlpha(orderNumber, false)
      case "upperRoman":
        return numberToRoman(orderNumber)
      case "lowerRoman":
        return numberToRoman(orderNumber).toLowerCase()
      case "decimalLeadingZero":
        return String(orderNumber).padStart(2, "0")
      case "lowerGreek":
        return numberToGreek(orderNumber)
      case "circled":
        return numberToCircled(orderNumber)
      case "number":
      default:
        return String(orderNumber)
    }
  }

  // Marker kustom (bukan bullet/angka bawaan browser) biar konsisten
  // sama tema HUD ungu-cyan di seluruh situs. Mendukung list bercabang:
  // tiap item boleh punya `children` (sub-list) yang otomatis di-indent
  // dan bisa dicampur ordered/unordered sesuka hati, berapa level pun.
  //
  //   Gaya penomoran ordered list diatur lewat `block.style` (opsional,
  //   default "number" kalau tidak diisi):
  //     - "number"             -> 1, 2, 3, ...
  //     - "upperAlpha"         -> A, B, C, ...
  //     - "lowerAlpha"         -> a, b, c, ...
  //     - "upperRoman"         -> I, II, III, ...
  //     - "lowerRoman"         -> i, ii, iii, ...
  //     - "decimalLeadingZero" -> 01, 02, 03, ...
  //     - "lowerGreek"         -> α, β, γ, ...
  //     - "circled"            -> ①, ②, ③, ... (item ke-21 dst jadi "(21)")
  //
  //   Contoh:
  //   list: {
  //     type: "ordered",
  //     style: "upperRoman",
  //     items: ["Poin pertama", "Poin kedua", "Poin ketiga"],
  //   }
  const getListItems = (listLike) => {
    if (!listLike || typeof listLike !== "object") return []
    if (Array.isArray(listLike.items)) return listLike.items
    if (Array.isArray(listLike.itemS)) return listLike.itemS
    return []
  }

  const renderListBlock = (block, depth = 0) => {
    const type = block?.type === "ordered" ? "ordered" : "unordered"
    const orderedStyle = block?.style || "number"
    const items = getListItems(block)
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
                      min-w-6 h-6
                      px-1.5
                      rounded-full
                      bg-violet-500/15
                      border border-violet-400/40
                      text-violet-300
                      font-mono text-xs
                      flex items-center justify-center
                    "
                  >
                    {getOrderedMarker(index, orderedStyle)}
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

              {/* Equation milik item ini (opsional, boleh satu atau beberapa) */}
              {item.equation && (
                <div className="pl-8 md:pl-9 mt-2">
                  <MathEquation equation={item.equation} variant="compact" />
                </div>
              )}

              {/* Tabel milik item ini (opsional) */}
              {item.table && (
                <div className="pl-8 md:pl-9 mt-2">
                  {renderTable(item.table)}
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
  //   diganti object { text, description, equation, table, children }:
  //     - text        -> teks poinnya (wajib kalau pakai object)
  //     - description -> paragraf penjelasan di bawah poin itu (opsional,
  //                      boleh string atau array of string buat banyak paragraf)
  //     - equation    -> rumus di bawah poin itu (opsional, boleh satu
  //                      string, atau array of string buat beberapa rumus;
  //                      dirender ringkas/compact biar proporsional sebagai
  //                      "anak" dari poin, bukan sebesar equation block biasa)
  //     - table       -> tabel di bawah poin itu (opsional, format sama
  //                      persis kayak block "table": { headers, rows })
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
  //         text: "Langkah kedua (ada rumus & tabel pendukung)",
  //         description: "Penjelasan langkah kedua.",
  //         equation: "V_p / V_s = N_p / N_s",
  //         table: {
  //           headers: ["Variabel", "Arti"],
  //           rows: [
  //             ["V_p", "Tegangan primer"],
  //             ["V_s", "Tegangan sekunder"],
  //           ],
  //         },
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

    if (typeof list === "object" && (Array.isArray(list.items) || Array.isArray(list.itemS))) {
      return renderListBlock(list)
    }

    return (
      <p className="text-white/70 leading-relaxed">
        <RichText text={list} />
      </p>
    )
  }

  // ============================================================
  // Sistem BLOCKS — satu-satunya cara mengisi konten section.
  // Penempatan image/paragraph/equation/table/list/quickCheck
  // sepenuhnya bebas urutannya lewat array `blocks`, bahkan bisa
  // diulang beberapa kali (misal: paragraf → gambar → paragraf
  // lagi → tabel → paragraf lagi).
  // ============================================================
  //
  //   {
  //     heading: "Judul Section",
  //     blocks: [
  //       { type: "paragraph", text: "Paragraf pembuka." },
  //       { type: "image", src: fotoImg, caption: "Keterangan foto" },
  //       { type: "heading", text: "Sub-judul di tengah konten" },
  //       { type: "paragraph", text: ["Paragraf 1", "Paragraf 2"] },
  //       { type: "equation", equation: "F = ma" },
  //       { type: "table", table: { headers: [...], rows: [...] } },
  //       { type: "list", list: { type: "ordered", items: [...] } },
  //       { type: "quickCheck", data: { questions: [...] } },
  //       { type: "carousel", carousel: { cards: [...] } },
  //     ],
  //   }
  //
  // Tipe block yang didukung: paragraph, image, heading, equation,
  // table, list, quickCheck, carousel.
  //
  // Block "carousel" -- kartu geser (lihat komentar lengkap di
  // src/components/layout/Carousel.jsx). Tiap kartu di `cards` boleh
  // berisi kombinasi bebas dari: image, eyebrow, title, text, description
  // (description boleh string atau array of string).
  //
  // CATATAN: type "explanation" sudah dihapus — dulu perilakunya
  // identik dengan "paragraph", jadi sekarang cukup pakai
  // { type: "paragraph", ... } untuk catatan/penjelasan tambahan.
  //
  // CATATAN: format lama (field langsung di section seperti `image:`,
  // `body:`, dst di luar `blocks`) SUDAH TIDAK DIDUKUNG. Semua materi
  // wajib pakai `blocks`.
  const sectionToBlocks = (section) => {
    if (
      import.meta.env.DEV &&
      !Array.isArray(section.blocks) &&
      (section.image ||
        section.body ||
        section.equation ||
        section.table ||
        section.list ||
        section.quickCheck)
    ) {
      console.warn(
        `[DetailMateri] Section "${section.heading || "(tanpa heading)"}" ` +
          `masih pakai field lama (image/body/dst) dan belum dimigrasi ` +
          `ke "blocks" — kontennya TIDAK akan tampil.`
      )
    }

    return Array.isArray(section.blocks) ? section.blocks : []
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

  // Block type "quote": kutipan yang ditonjolkan secara visual, cocok
  // buat quote tokoh fisika, motivasi belajar, atau highlight kalimat
  // penting di tengah materi. Properti:
  //   - text    -> isi kutipan (wajib). Boleh string tunggal, atau array
  //                of string buat kutipan beberapa baris/paragraf.
  //   - author  -> nama pengucap (opsional)
  //   - source  -> keterangan tambahan, misal jabatan/buku/tahun (opsional)
  //
  //   Contoh:
  //   {
  //     type: "quote",
  //     text: "Jika saya telah melihat lebih jauh, itu karena saya berdiri di atas bahu raksasa.",
  //     author: "Isaac Newton",
  //     source: "Surat untuk Robert Hooke, 1675",
  //   }
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

      case "quote":
        return (
          <blockquote
            key={key}
            className="
              group
              relative
              overflow-hidden
              rounded-2xl
              border border-violet-400/25
              bg-gradient-to-br from-violet-500/[0.10] via-slate-950/60 to-cyan-500/[0.08]
              px-5 py-6 md:px-8 md:py-7
              shadow-lg shadow-violet-500/10
              transition-all duration-300
              hover:border-violet-300/40
              hover:shadow-violet-400/20
            "
          >
            {/* Tanda kutip raksasa sebagai dekorasi latar, khas kartu quote ala Gen-Z */}
            <Quote
              className="
                pointer-events-none
                absolute -top-2 -left-1
                w-16 h-16 md:w-20 md:h-20
                text-violet-400/10
                -scale-x-100
                transition-colors duration-300
                group-hover:text-violet-400/15
              "
              fill="currentColor"
              strokeWidth={0}
            />

            {/* Aksen garis gradasi di kiri, nyambung sama tema HUD ungu-cyan */}
            <span
              className="
                absolute left-0 top-4 bottom-4
                w-[3px] rounded-full
                bg-gradient-to-b from-violet-400 via-fuchsia-400 to-cyan-400
              "
            />

            <div className="relative pl-4 md:pl-5 space-y-3">
              {Array.isArray(block.text) ? (
                block.text.map((line, index) => (
                  <p
                    key={index}
                    className="
                      font-display
                      text-base md:text-xl
                      italic font-medium
                      text-white/90
                      leading-relaxed
                    "
                  >
                    <RichText text={line} />
                  </p>
                ))
              ) : (
                <p
                  className="
                    font-display
                    text-base md:text-xl
                    italic font-medium
                    text-white/90
                    leading-relaxed
                  "
                >
                  <RichText text={block.text} />
                </p>
              )}

              {(block.author || block.source) && (
                <footer className="flex items-center gap-2 pt-1 text-sm">
                  <span className="h-px w-6 bg-cyan-400/50" />
                  <span className="font-mono text-cyan-300/90">
                    {block.author}
                    {block.author && block.source && (
                      <span className="text-white/40"> · </span>
                    )}
                    {block.source && (
                      <span className="text-white/50">{block.source}</span>
                    )}
                  </span>
                </footer>
              )}
            </div>
          </blockquote>
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

      case "equation":
        return <MathEquation key={key} equation={block.equation} />

      case "table":
        return <div key={key}>{renderTable(block.table)}</div>

      case "list":
        return <div key={key}>{renderList(block.list)}</div>

      case "quickCheck":
        return <QuickCheck key={key} data={block.data} />

      case "callout":
        return (
          <Callout
            key={key}
            variant={block.variant}
            title={block.title}
            text={block.text}
          />
        )
        
      case "carousel":
        return <Carousel key={key} carousel={block.carousel} />

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