import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import RichText from "./RichText"

// ============================================================
// QuickCheck — kuis pilihan ganda bergaya carousel (1 soal/slide)
// ============================================================
// Cara pakai di file content materi (misal MengapaBelajarFisika.js):
//
//   {
//     heading: "🎯 Quick Check",
//     quickCheck: {
//       questions: [
//         {
//           question: "Mengapa manusia mempelajari fisika?",
//           options: [
//             "Untuk menghafal sebanyak mungkin rumus",
//             "Untuk memahami bagaimana alam bekerja melalui pengamatan dan penalaran ilmiah",
//             "Agar dapat menghitung lebih cepat daripada komputer",
//             "Supaya bisa membuat semua teknologi sendiri",
//           ],
//           answerIndex: 1,
//         },
//         // ...tambah soal lain
//       ],
//       scoring: [
//         { min: 5, max: 5, emoji: "🏆", title: "Mission Complete!", message: "Kamu siap memasuki portal berikutnya." },
//         { min: 4, max: 4, emoji: "🚀", title: "Hampir Sempurna", message: "Pemahamanmu sudah sangat baik." },
//         { min: 2, max: 3, emoji: "🔄", title: "Perlu Sedikit Lagi", message: "Coba eksplorasi lagi bagian inti materi." },
//         { min: 0, max: 1, emoji: "📖", title: "Ulangi Petualangan", message: "Tenang, ulangi petualanganmu dari awal." },
//       ],
//     },
//   }
//
// `scoring` opsional — kalau tidak diisi, dipakai tier default generik.
// ============================================================

const defaultScoring = (total) => [
  { min: total, max: total, emoji: "🏆", title: "Mission Complete!", message: "Kamu siap memasuki portal berikutnya." },
  { min: Math.ceil(total * 0.7), max: total - 1, emoji: "🚀", title: "Hampir Sempurna", message: "Pemahamanmu sudah sangat baik." },
  { min: Math.ceil(total * 0.3), max: Math.ceil(total * 0.7) - 1, emoji: "🔄", title: "Perlu Sedikit Lagi", message: "Coba eksplorasi lagi bagian inti materi." },
  { min: 0, max: Math.ceil(total * 0.3) - 1, emoji: "📖", title: "Ulangi Petualangan", message: "Tenang, ulangi petualanganmu dari awal." },
]

const slideVariants = {
  enter: (direction) => ({ x: direction > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction) => ({ x: direction > 0 ? -60 : 60, opacity: 0 }),
}

export default function QuickCheck({ data }) {
  const questions = data?.questions || []
  const total = questions.length
  const scoring = data?.scoring?.length ? data.scoring : defaultScoring(total)

  // slide 0..total-1 = soal, slide `total` = kartu hasil
  const [slide, setSlide] = useState(0)
  const [direction, setDirection] = useState(1)
  const [answers, setAnswers] = useState(() => Array(total).fill(null))
  const [submitted, setSubmitted] = useState(false)

  if (total === 0) return null

  const isResultSlide = slide === total
  const q = questions[slide]
  const allAnswered = answers.every((a) => a !== null)

  const score = answers.reduce(
    (acc, a, i) => acc + (a === questions[i].answerIndex ? 1 : 0),
    0
  )

  const tier =
    scoring.find((t) => score >= t.min && score <= t.max) ||
    scoring[scoring.length - 1]

  const goTo = (index) => {
    setDirection(index > slide ? 1 : -1)
    setSlide(index)
  }

  const selectAnswer = (optIndex) => {
    if (submitted) return
    setAnswers((prev) => {
      const next = [...prev]
      next[slide] = optIndex
      return next
    })
  }

  const handleNext = () => {
    if (slide < total - 1) {
      goTo(slide + 1)
    } else if (!submitted) {
      setSubmitted(true)
      goTo(total)
    } else {
      goTo(total)
    }
  }

  const handlePrev = () => {
    if (slide > 0) goTo(slide - 1)
  }

  const handleReset = () => {
    setAnswers(Array(total).fill(null))
    setSubmitted(false)
    goTo(0)
  }

  return (
    <div className="hud-frame rounded-2xl border border-violet-400/15 bg-white/[0.03] p-5 md:p-6 overflow-hidden">

      {/* Progress dots */}
      <div className="flex items-center justify-center gap-2 mb-5">
        {questions.map((_, i) => {
          let dotClasses = "bg-white/15"

          if (submitted) {
            dotClasses =
              answers[i] === questions[i].answerIndex
                ? "bg-emerald-400"
                : "bg-rose-400"
          } else if (answers[i] !== null) {
            dotClasses = "bg-violet-400"
          }

          const isActive = slide === i

          return (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Ke soal ${i + 1}`}
              className={`
                rounded-full transition-all duration-300
                ${isActive ? "w-6 h-2" : "w-2 h-2"}
                ${dotClasses}
              `}
            />
          )
        })}

        {/* dot slide hasil */}
        <button
          type="button"
          onClick={() => submitted && goTo(total)}
          aria-label="Lihat hasil"
          disabled={!submitted}
          className={`
            rounded-full transition-all duration-300 ml-1
            ${slide === total ? "w-6 h-2" : "w-2 h-2"}
            ${submitted ? "bg-cyan-300" : "bg-white/10"}
          `}
        />
      </div>

      <div className="relative min-h-[260px]">
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          {!isResultSlide ? (
            <motion.div
              key={slide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-300 mb-2">
                Soal {slide + 1} / {total}
              </p>

              <p className="font-hud font-semibold text-white/90 text-lg mb-5">
                <RichText text={q.question} />
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {q.options.map((opt, optIndex) => {
                  const isSelected = answers[slide] === optIndex
                  const isCorrect = optIndex === q.answerIndex

                  let stateClasses =
                    "border-white/10 bg-white/5 hover:border-violet-400/40 hover:bg-white/10"

                  if (submitted) {
                    if (isCorrect) {
                      stateClasses = "border-emerald-400/60 bg-emerald-500/10 text-emerald-300"
                    } else if (isSelected && !isCorrect) {
                      stateClasses = "border-rose-400/60 bg-rose-500/10 text-rose-300"
                    } else {
                      stateClasses = "border-white/5 bg-white/[0.02] text-white/40"
                    }
                  } else if (isSelected) {
                    stateClasses = "border-violet-400/60 bg-violet-500/10 text-violet-200"
                  }

                  return (
                    <button
                      key={optIndex}
                      type="button"
                      onClick={() => selectAnswer(optIndex)}
                      disabled={submitted}
                      className={`
                        text-left px-4 py-3 rounded-xl border text-sm
                        transition-colors flex items-start gap-2
                        ${stateClasses}
                      `}
                    >
                      <span className="font-mono text-xs opacity-60 mt-0.5">
                        {String.fromCharCode(65 + optIndex)}
                      </span>
                      <span><RichText text={opt} /></span>
                      {submitted && isCorrect && <span className="ml-auto">✅</span>}
                      {submitted && isSelected && !isCorrect && <span className="ml-auto">❌</span>}
                    </button>
                  )
                })}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="text-center py-4"
            >
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-300 mb-2">
                ⭐ Skor Misi
              </p>

              <p className="font-display text-3xl md:text-4xl font-black mb-1">
                {score} / {total}
              </p>

              <p className="text-2xl mb-1">{tier.emoji}</p>

              <p className="font-hud text-lg font-bold text-gradient-violet mb-1">
                <RichText text={tier.title} />
              </p>

              <p className="text-white/60 text-sm mb-6"><RichText text={tier.message} /></p>

              <button
                type="button"
                onClick={handleReset}
                className="
                  px-6 py-2.5 rounded-xl font-hud text-sm
                  bg-white/10 border border-white/10
                  hover:bg-white/20 transition
                "
              >
                ↺ Ulangi Kuis
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigasi carousel */}
      {!isResultSlide && (
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/10">
          <button
            type="button"
            onClick={handlePrev}
            disabled={slide === 0}
            className="
              flex items-center gap-1
              px-4 py-2 rounded-xl text-sm font-hud
              bg-white/5 border border-white/10
              hover:bg-white/10
              disabled:opacity-30 disabled:cursor-not-allowed
              transition
            "
          >
            <ChevronLeft size={16} /> Sebelumnya
          </button>

          <button
            type="button"
            onClick={handleNext}
            disabled={answers[slide] === null}
            className="
              flex items-center gap-1
              px-5 py-2 rounded-xl text-sm font-hud font-semibold
              bg-gradient-to-r from-violet-500 to-violet-700
              border border-violet-400/40
              shadow-lg shadow-violet-600/30
              disabled:opacity-30 disabled:cursor-not-allowed
              enabled:hover:scale-[1.02]
              transition
            "
          >
            {slide < total - 1 ? (
              <>Selanjutnya <ChevronRight size={16} /></>
            ) : submitted ? (
              <>Lihat Hasil <ChevronRight size={16} /></>
            ) : (
              <>Cek Jawaban <ChevronRight size={16} /></>
            )}
          </button>
        </div>
      )}
    </div>
  )
}
