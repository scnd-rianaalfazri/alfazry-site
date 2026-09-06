import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronsUpDown } from "lucide-react"
import MaterialCard from "../components/layout/MaterialCards"
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

  const chapters = Object.entries(grouped)

  // Semua bab otomatis terbuka begitu halaman dimuat, supaya
  // daftar topik langsung terlihat tanpa perlu diklik satu-satu.
  // Pengguna tetap bisa menutup bab tertentu secara manual
  // lewat toggleChapter kalau mau meringkas tampilan.
  const [openChapters, setOpenChapters] = useState(() =>
    new Set(chapters.map(([chapter]) => chapter))
  )

  const toggleChapter = (chapter) => {
    setOpenChapters((prev) => {
      const next = new Set(prev)

      if (next.has(chapter)) {
        next.delete(chapter)
      } else {
        next.add(chapter)
      }

      return next
    })
  }

  // Ref tiap bab (untuk scroll-to saat dipilih dari Daftar Isi)
  const chapterRefs = useRef({})

  // Daftar Isi hanya menampilkan beberapa bab dulu supaya tidak
  // menumpuk panjang di atas halaman. Sisanya bisa dibuka lewat
  // tombol "Tampilkan Semua Materi".
  const TOC_LIMIT = 6
  const [showAllToc, setShowAllToc] = useState(false)

  // Klik dari Daftar Isi: buka bab yang dituju lalu scroll ke sana.
  const goToChapter = (chapter) => {
    setOpenChapters((prev) => new Set(prev).add(chapter))

    requestAnimationFrame(() => {
      setTimeout(() => {
        chapterRefs.current[chapter]?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }, 50)
    })
  }

  return (
    <div className="bg-space bg-grid text-white min-h-screen">

      <Navbar />

      <section className="relative z-10 p-6 md:p-10">

        <p className="font-mono uppercase tracking-[0.3em] text-cyan-300 text-[10px] sm:text-xs mb-3">
          Arsip Bab
        </p>

        <h1 className="font-display font-black text-3xl md:text-5xl mb-3 text-gradient-violet">
          MATERI FISIKA
        </h1>

        <p className="text-white/50 text-sm md:text-base mb-8">
          Klik salah satu bab untuk membuka atau menutup daftar topiknya.
        </p>

        {/* Daftar Isi: navigasi cepat antar bab.
            Klik salah satu akan membuka & scroll ke bab tersebut. */}
        {chapters.length > 0 && (
          <div className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-wider text-violet-300/60 mb-2">
              Daftar Isi
            </p>

            <div className="flex flex-wrap gap-2">
              {(showAllToc ? chapters : chapters.slice(0, TOC_LIMIT)).map(
                ([chapter]) => (
                  <button
                    key={chapter}
                    type="button"
                    onClick={() => goToChapter(chapter)}
                    className="
                      px-3.5 py-1.5
                      rounded-full
                      text-xs md:text-sm
                      font-mono
                      bg-white/5
                      text-white/70
                      border border-white/10
                      hover:border-violet-400/40
                      hover:text-violet-200
                      hover:bg-violet-500/10
                      transition-colors
                    "
                  >
                    {chapter}
                  </button>
                )
              )}

              {chapters.length > TOC_LIMIT && (
                <button
                  type="button"
                  onClick={() => setShowAllToc((prev) => !prev)}
                  className="
                    inline-flex items-center gap-1.5
                    px-4 py-1.5
                    rounded-full
                    text-xs md:text-sm
                    font-mono font-semibold
                    text-white
                    bg-gradient-to-r from-violet-500 to-fuchsia-500
                    shadow-[0_0_16px_rgba(168,85,247,0.45)]
                    hover:shadow-[0_0_22px_rgba(168,85,247,0.65)]
                    hover:brightness-110
                    transition-all
                  "
                >
                  <ChevronsUpDown size={14} />
                  {showAllToc
                    ? "Sembunyikan"
                    : `Tampilkan Semua Materi (+${
                        chapters.length - TOC_LIMIT
                      })`}
                </button>
              )}
            </div>
          </div>
        )}

        <div className="space-y-4">

          {chapters.map(([chapter, items]) => {
            const isOpen = openChapters.has(chapter)

            return (
              <div
                key={chapter}
                ref={(el) => {
                  chapterRefs.current[chapter] = el
                }}
                className="
                  hud-frame
                  rounded-2xl
                  border border-white/10
                  bg-white/5
                  backdrop-blur-sm
                  overflow-hidden
                  transition-colors
                  hover:border-violet-400/30
                  scroll-mt-24
                "
              >
                {/* Card Chapter (Header) */}
                <button
                  type="button"
                  onClick={() => toggleChapter(chapter)}
                  aria-expanded={isOpen}
                  className="
                    w-full
                    flex items-center justify-between
                    gap-4
                    px-5 md:px-8
                    py-5 md:py-6
                    text-left
                    hover:bg-white/5
                    transition-colors
                  "
                >
                  <div>
                    <h2 className="font-hud text-xl md:text-3xl font-bold text-gradient-violet">
                      {chapter}
                    </h2>

                    <p className="font-mono text-xs md:text-sm text-cyan-300/60 mt-1">
                      {items.length} topik
                    </p>
                  </div>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0 text-violet-300"
                  >
                    <ChevronDown size={24} />
                  </motion.div>
                </button>

                {/* Sub Card (Topik di dalam Chapter) */}
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
                      <div className="px-5 md:px-8 pb-6 md:pb-8">
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
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
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}

        </div>

      </section>

      <Footer />

    </div>
  )
}
