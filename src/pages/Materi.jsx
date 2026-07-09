import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
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

  // Chapter pertama otomatis terbuka, sisanya tertutup
  // biar halaman tidak langsung penuh saat pertama dibuka.
  const [openChapters, setOpenChapters] = useState(() =>
    new Set(chapters.length ? [chapters[0][0]] : [])
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

  const openAll = () => {
    setOpenChapters(new Set(chapters.map(([chapter]) => chapter)))
  }

  const closeAll = () => {
    setOpenChapters(new Set())
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

        <div
          className="
            flex flex-col sm:flex-row
            sm:items-center sm:justify-between
            gap-3
            mb-10
          "
        >
          <p className="text-white/50 text-sm md:text-base">
            Klik salah satu bab untuk membuka daftar topiknya.
          </p>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={openAll}
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
              onClick={closeAll}
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
        </div>

        <div className="space-y-4">

          {chapters.map(([chapter, items]) => {
            const isOpen = openChapters.has(chapter)

            return (
              <div
                key={chapter}
                className="
                  hud-frame
                  rounded-2xl
                  border border-white/10
                  bg-white/5
                  backdrop-blur-sm
                  overflow-hidden
                  transition-colors
                  hover:border-violet-400/30
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
