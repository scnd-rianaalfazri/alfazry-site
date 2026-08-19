import { useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import RichText from "./RichText"

// ============================================================
// Carousel — kartu geser bergaya HUD, dipakai buat materi apa
// pun yang perlu ditampilkan sebagai beberapa kartu berurutan
// (galeri contoh, ringkasan istilah, poin-poin perbandingan, dst).
// ============================================================
// Cara pakai di block content materi:
//
//   {
//     type: "carousel",
//     carousel: {
//       cards: [
//         {
//           image: fotoImg,          // opsional
//           eyebrow: "Contoh 1",     // opsional, label kecil di atas title
//           title: "Judul Kartu",    // opsional
//           text: "Teks pendek yang menonjol di bawah title.", // opsional
//           description: "Penjelasan lebih panjang.",          // opsional,
//                                    // boleh string atau array of string
//           list: {                  // opsional, format sama persis kayak
//             type: "unordered",     // block "list" di materi biasa
//             items: ["Poin 1", "Poin 2"],
//           },
//           table: {                 // opsional, format sama persis kayak
//             headers: ["Kolom A", "Kolom B"], // block "table" di materi biasa
//             rows: [["1", "2"], ["3", "4"]],
//           },
//         },
//         // ...tambah kartu lain
//       ],
//     },
//   }
//
// Semua field kartu opsional dan bisa dikombinasikan bebas — kartu
// boleh cuma gambar+caption, cuma teks, atau campuran semuanya, termasuk
// list dan/atau table.
//
// Detail `list`:
//   - type: "unordered" (bullet, default) atau "ordered" (bernomor)
//   - style (khusus ordered, opsional): "number" (default), "upperAlpha",
//     "lowerAlpha", "upperRoman", "lowerRoman", "decimalLeadingZero",
//     "lowerGreek", "circled"
//   - items: array, tiap item boleh string biasa, atau object
//     { text, description, children } buat sub-poin + sub-list bercabang
//
// Detail `table`:
//   - headers: array string (opsional, kalau tidak diisi tabel tanpa header)
//   - rows: array of array (tiap row = array of cell)
//
// Navigasi: panah kiri/kanan, dot indicator, atau swipe/drag di layar
// sentuh maupun mouse.
// ============================================================

const slideVariants = {
  enter: (direction) => ({ x: direction > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction) => ({ x: direction > 0 ? -80 : 80, opacity: 0 }),
}

const SWIPE_THRESHOLD = 50

// ----- Helper penomoran ordered list (sama kayak yang dipakai di
// DetailMateri, biar konsisten di seluruh situs) -----------------
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

const numberToCircled = (num) => {
  if (num >= 1 && num <= 20) {
    return String.fromCodePoint(0x2460 + (num - 1))
  }
  return `(${num})`
}

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

// ----- List bercabang (unordered/ordered + sub-list) -------------
const renderCardList = (list, depth = 0) => {
  if (!list || typeof list !== "object" || !Array.isArray(list.items)) {
    return null
  }

  const type = list.type === "ordered" ? "ordered" : "unordered"
  const orderedStyle = list.style || "number"
  const Tag = type === "ordered" ? "ol" : "ul"

  return (
    <Tag className={`list-none space-y-2 ${depth > 0 ? "mt-2" : ""}`}>
      {list.items.map((raw, index) => {
        const item = typeof raw === "string" ? { text: raw } : raw || {}

        return (
          <li key={index}>
            <div className="flex items-start gap-2.5 text-white/70 text-sm leading-relaxed">
              {type === "ordered" ? (
                <span
                  className="
                    mt-0.5
                    shrink-0
                    min-w-5 h-5
                    px-1
                    rounded-full
                    bg-violet-500/15
                    border border-violet-400/40
                    text-violet-300
                    font-mono text-[11px]
                    flex items-center justify-center
                  "
                >
                  {getOrderedMarker(index, orderedStyle)}
                </span>
              ) : (
                <span
                  className="
                    mt-1.5
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

            {item.description && (
              <div className="pl-7 mt-1 space-y-1">
                {Array.isArray(item.description) ? (
                  item.description.map((d, dIndex) => (
                    <p key={dIndex} className="text-white/45 text-xs leading-relaxed">
                      <RichText text={d} />
                    </p>
                  ))
                ) : (
                  <p className="text-white/45 text-xs leading-relaxed">
                    <RichText text={item.description} />
                  </p>
                )}
              </div>
            )}

            {item.children && (
              <div className="pl-7 mt-1.5">
                {renderCardList(item.children, depth + 1)}
              </div>
            )}
          </li>
        )
      })}
    </Tag>
  )
}

// ----- Tabel (headers opsional + rows) ----------------------------
const renderCardTable = (table) => {
  if (!table) return null

  const headers = table.headers || null
  const rows = Array.isArray(table) ? table : table.rows

  if (!rows) return null

  return (
    <div className="overflow-x-auto rounded-xl border border-white/10 bg-white/5">
      <table className="min-w-full text-xs md:text-sm border-collapse">
        {headers && (
          <thead>
            <tr className="bg-white/10">
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="
                    border border-white/10
                    px-2.5 py-1.5 md:px-3 md:py-2
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
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-white/5 transition">
              {(Array.isArray(row) ? row : Object.values(row)).map(
                (cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="
                      border border-white/10
                      px-2.5 py-1.5 md:px-3 md:py-2
                      text-white/80
                    "
                  >
                    <RichText text={cell} />
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function Carousel({ carousel }) {
  const cards = carousel?.cards || []
  const total = cards.length

  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const dragStartX = useRef(null)

  if (total === 0) return null

  const goTo = (next) => {
    if (next < 0 || next >= total) return
    setDirection(next > index ? 1 : -1)
    setIndex(next)
  }

  const handlePrev = () => goTo(index - 1)
  const handleNext = () => goTo(index + 1)

  const handleDragEnd = (_, info) => {
    if (info.offset.x <= -SWIPE_THRESHOLD) {
      handleNext()
    } else if (info.offset.x >= SWIPE_THRESHOLD) {
      handlePrev()
    }
  }

  const card = cards[index]

  return (
    <div
      className="
        hud-frame
        rounded-2xl
        border border-violet-400/15
        bg-white/[0.03]
        overflow-hidden
      "
    >
      {/* Track kartu */}
      <div className="relative min-h-[220px] overflow-x-hidden">
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={index}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.25, ease: "easeInOut" }}
            drag={total > 1 ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.6}
            onDragStart={(e) => {
              dragStartX.current = e.clientX
            }}
            onDragEnd={handleDragEnd}
            className={total > 1 ? "cursor-grab active:cursor-grabbing" : ""}
          >
            {card.image && (
              <div className="overflow-hidden rounded-t-2xl -mt-px -mx-px">
                <img
                  src={card.image}
                  alt={card.alt || card.title || ""}
                  loading="lazy"
                  draggable={false}
                  className="w-full h-48 md:h-64 object-cover select-none"
                />
              </div>
            )}

            <div className="px-5 py-5 md:px-6 md:py-6 space-y-2.5">
              {card.eyebrow && (
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-300">
                  <RichText text={card.eyebrow} />
                </p>
              )}

              {card.title && (
                <h4 className="font-hud text-lg md:text-xl font-bold text-gradient-violet">
                  <RichText text={card.title} />
                </h4>
              )}

              {card.text && (
                <p className="text-white/90 font-medium leading-relaxed">
                  <RichText text={card.text} />
                </p>
              )}

              {card.description &&
                (Array.isArray(card.description) ? (
                  card.description.map((d, i) => (
                    <p key={i} className="text-white/60 text-sm leading-relaxed">
                      <RichText text={d} />
                    </p>
                  ))
                ) : (
                  <p className="text-white/60 text-sm leading-relaxed">
                    <RichText text={card.description} />
                  </p>
                ))}

              {card.list && (
                <div className="pt-1">{renderCardList(card.list)}</div>
              )}

              {card.table && (
                <div className="pt-1">{renderCardTable(card.table)}</div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigasi */}
      {total > 1 && (
        <div className="flex items-center justify-between gap-3 px-4 md:px-5 py-3.5 border-t border-white/10">
          <button
            type="button"
            onClick={handlePrev}
            disabled={index === 0}
            aria-label="Kartu sebelumnya"
            className="
              shrink-0
              w-9 h-9
              flex items-center justify-center
              rounded-full
              bg-white/5 border border-white/10
              hover:bg-white/10
              disabled:opacity-30 disabled:cursor-not-allowed
              transition
            "
          >
            <ChevronLeft size={16} />
          </button>

          {/* Dot indicator */}
          <div className="flex items-center gap-2">
            {cards.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Ke kartu ${i + 1}`}
                className={`
                  rounded-full transition-all duration-300
                  ${i === index ? "w-6 h-2 bg-violet-400" : "w-2 h-2 bg-white/15"}
                `}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            disabled={index === total - 1}
            aria-label="Kartu berikutnya"
            className="
              shrink-0
              w-9 h-9
              flex items-center justify-center
              rounded-full
              bg-white/5 border border-white/10
              hover:bg-white/10
              disabled:opacity-30 disabled:cursor-not-allowed
              transition
            "
          >
            <ChevronRight size={16} />
          </button>
        </div>
      )}
    </div>
  )
}
