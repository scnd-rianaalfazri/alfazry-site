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
//         },
//         // ...tambah kartu lain
//       ],
//     },
//   }
//
// Semua field kartu opsional dan bisa dikombinasikan bebas — kartu
// boleh cuma gambar+caption, cuma teks, atau campuran semuanya.
// Navigasi: panah kiri/kanan, dot indicator, atau swipe/drag di layar
// sentuh maupun mouse.
// ============================================================

const slideVariants = {
  enter: (direction) => ({ x: direction > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction) => ({ x: direction > 0 ? -80 : 80, opacity: 0 }),
}

const SWIPE_THRESHOLD = 50

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
      <div className="relative min-h-[220px] overflow-hidden">
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
