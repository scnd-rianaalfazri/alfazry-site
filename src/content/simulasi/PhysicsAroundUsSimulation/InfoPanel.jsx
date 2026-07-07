// InfoPanel.jsx
// Panel detail benda yang dipilih. Di desktop tampil sebagai panel di sisi
// kanan, di mobile tampil sebagai drawer yang muncul dari bawah.

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, BookOpen, FlaskConical, Target, Sparkles } from "lucide-react";

/**
 * @param {Object} props
 * @param {Object|null} props.object - Benda yang sedang dibuka (null jika panel tertutup)
 * @param {boolean} props.isDesktop
 * @param {() => void} props.onClose
 * @param {(object: Object) => void} props.onQuickCheck
 */
export default function InfoPanel({ object, isDesktop, onClose, onQuickCheck }) {
  const panelVariants = isDesktop
    ? {
        initial: { x: "100%", opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: "100%", opacity: 0 },
      }
    : {
        initial: { y: "100%", opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: "100%", opacity: 0 },
      };

  return (
    <AnimatePresence>
      {object && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-30 bg-slate-950/60 backdrop-blur-sm lg:bg-slate-950/40"
          />

          {/* Panel */}
          <motion.div
            key="panel"
            {...panelVariants}
            transition={{ type: "spring", stiffness: 300, damping: 32 }}
            className={[
              "fixed z-40 flex flex-col overflow-hidden",
              "border border-white/10 bg-slate-950/90 backdrop-blur-2xl",
              "inset-x-0 bottom-0 max-h-[85vh] rounded-t-3xl",
              "lg:inset-y-0 lg:right-0 lg:left-auto lg:bottom-auto lg:h-full lg:w-[420px] lg:max-h-none lg:rounded-t-none lg:rounded-l-3xl",
              "shadow-[0_0_60px_rgba(56,189,248,0.15)]",
            ].join(" ")}
          >
            {/* Grip handle untuk mobile drawer */}
            <div className="mx-auto mt-2.5 h-1 w-10 rounded-full bg-white/15 lg:hidden" />

            {object.isEasterEgg && (
              <div className="mx-6 mt-4 flex items-center gap-2 rounded-lg border border-fuchsia-400/30 bg-fuchsia-400/10 px-3 py-2 text-xs font-medium text-fuchsia-200">
                <Sparkles size={14} />
                Benda Rahasia Ditemukan!
              </div>
            )}

            <div className="flex items-start justify-between gap-3 border-b border-white/10 px-6 py-5">
              <div className="flex items-center gap-3">
                <span className="text-4xl drop-shadow-[0_0_14px_rgba(56,189,248,0.5)]">
                  {object.icon}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-slate-100">
                    {object.title}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-400/80">
                    {object.category}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Tutup panel"
                className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-white/5 hover:text-cyan-300"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-5">
              {/* Konsep fisika */}
              <section className="mb-5">
                <h4 className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-300">
                  Konsep Ditemukan
                </h4>
                <div className="flex flex-wrap gap-2">
                  {object.concepts.map((concept) => (
                    <span
                      key={concept}
                      className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200"
                    >
                      {concept}
                    </span>
                  ))}
                </div>
              </section>

              {/* Deskripsi */}
              <section className="mb-5">
                <h4 className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-300">
                  Penjelasan
                </h4>
                <p className="text-sm leading-relaxed text-slate-300">
                  {object.description}
                </p>
              </section>

              {/* Fun fact */}
              <section className="mb-2">
                <div className="rounded-xl border border-purple-400/20 bg-purple-400/[0.06] p-4">
                  <h4 className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-purple-300">
                    <Sparkles size={13} />
                    Fun Fact
                  </h4>
                  <p className="text-sm leading-relaxed text-slate-300">
                    {object.fact}
                  </p>
                </div>
              </section>
            </div>

            {/* Aksi */}
            <div className="grid grid-cols-1 gap-2 border-t border-white/10 p-4 sm:grid-cols-3">
              <a
                href={object.lessonLink}
                className="flex items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-xs font-medium text-slate-200 transition-colors hover:border-cyan-400/50 hover:text-cyan-300"
              >
                <BookOpen size={14} />
                Pelajari Materi
              </a>
              <a
                href={object.simulationLink}
                className="flex items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-xs font-medium text-slate-200 transition-colors hover:border-purple-400/50 hover:text-purple-300"
              >
                <FlaskConical size={14} />
                Buka Simulasi
              </a>
              <button
                type="button"
                onClick={() => onQuickCheck(object)}
                className="flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 px-3 py-2.5 text-xs font-medium text-white shadow-[0_0_16px_rgba(168,85,247,0.35)] transition-transform hover:scale-[1.03]"
              >
                <Target size={14} />
                Quick Check
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
