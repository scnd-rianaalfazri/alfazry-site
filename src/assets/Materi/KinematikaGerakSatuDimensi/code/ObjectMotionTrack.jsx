import { useState, useRef, useEffect, useMemo, useLayoutEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"

// ============================================================
// ObjectMotionTrack
// ------------------------------------------------------------
// Simulasi interaktif "Object Motion Track" untuk materi
// Pengertian Gerak. Siswa mengamati dulu bahwa posisi benda
// berubah terhadap waktu dan titik acuan, sebelum bertemu
// rumus x = x0 + vt (yang cuma dipakai diam-diam di balik layar,
// tidak ditampilkan sebagai fokus).
//
// Tidak ada karakter manusia. Benda cuma orb kecil bercahaya.
// ============================================================

const TRACK_MIN = 0
const TRACK_MAX = 10 // meter
const REF_X = 0 // titik acuan, tetap di x = 0
const START_X = 2 // posisi awal benda (meter) -- tetap, biar konsisten tiap run
const T_TOTAL = 6 // durasi timeline (detik)
const SPEED_MIN = 0.5
const SPEED_MAX = 3
const EPS = 1e-9

const COLOR = {
  purple: "#a855f7",
  cyan: "#22d3ee",
  muted: "#9aa4c7",
}

const clamp = (v, a, b) => Math.min(b, Math.max(a, v))
const fmt1 = (n) => (Math.abs(n) < 0.05 ? "0" : n.toFixed(1).replace(".", ","))

/* ---------------------------- hook: lebar kontainer ---------------------------- */

function useMeasuredWidth(minWidth = 260) {
  const ref = useRef(null)
  const [w, setW] = useState(560)
  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const update = () => setW(Math.max(minWidth, Math.floor(el.clientWidth)))
    update()
    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", update)
      return () => window.removeEventListener("resize", update)
    }
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [minWidth])
  return [ref, w]
}

/* ============================================================ */

export default function ObjectMotionTrack() {
  const [mode, setMode] = useState("gerak") // "gerak" | "diam"
  const [speed, setSpeed] = useState(1.5) // m/s
  const [t, setT] = useState(0)
  const [status, setStatus] = useState("idle") // idle | playing | paused | done
  const [trail, setTrail] = useState([]) // jejak posisi tiap ~1 detik
  const [showConclusion, setShowConclusion] = useState(false)
  const [quizAnswer, setQuizAnswer] = useState(null)

  // posisi benda saat ini, hasil dari x = x0 + v.t (cuma dipakai diam-diam)
  const x = useMemo(() => {
    if (mode === "diam") return START_X
    return clamp(START_X + speed * t, TRACK_MIN, TRACK_MAX)
  }, [mode, speed, t])

  const didMove = Math.abs(x - START_X) > 0.05

  /* -------- animasi -------- */
  const rafRef = useRef(0)
  const lastTsRef = useRef(0)
  const lastSampleSecRef = useRef(0)

  useEffect(() => {
    if (status !== "playing") return undefined
    let alive = true
    lastTsRef.current = performance.now()
    const tick = (ts) => {
      if (!alive) return
      const dt = Math.min(0.05, (ts - lastTsRef.current) / 1000)
      lastTsRef.current = ts
      setT((prevT) => {
        let nextT = prevT + dt
        let stop = false

        if (mode === "gerak" && speed > 0) {
          const tHitWall = (TRACK_MAX - START_X) / speed
          if (nextT >= tHitWall) { nextT = tHitWall; stop = true }
        }
        if (nextT >= T_TOTAL) { nextT = T_TOTAL; stop = true }

        // jejak: catat posisi tiap kali melewati detik bulat
        const sec = Math.floor(nextT)
        if (sec > lastSampleSecRef.current) {
          lastSampleSecRef.current = sec
          const xs = mode === "diam" ? START_X : clamp(START_X + speed * nextT, TRACK_MIN, TRACK_MAX)
          setTrail((prev) => [...prev.slice(-4), { x: xs, t: sec }])
        }

        if (stop) setStatus("done")
        return nextT
      })
      if (alive) rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => { alive = false; cancelAnimationFrame(rafRef.current) }
  }, [status, speed, mode])

  /* -------- kontrol -------- */
  const play = () => {
    if (status === "done" || t >= T_TOTAL - EPS) {
      setT(0); setTrail([]); lastSampleSecRef.current = 0
    }
    setStatus("playing")
  }
  const pause = () => { if (status === "playing") setStatus("paused") }
  const reset = () => {
    setT(0); setStatus("idle"); setTrail([]); lastSampleSecRef.current = 0; setShowConclusion(false)
  }
  const scrub = (nextT) => {
    setT(nextT)
    setTrail([])
    lastSampleSecRef.current = Math.floor(nextT)
    setStatus(nextT >= T_TOTAL - EPS ? "done" : nextT <= EPS ? "idle" : "paused")
  }
  const switchMode = (m) => {
    if (m === mode) return
    setMode(m); setT(0); setStatus("idle"); setTrail([]); lastSampleSecRef.current = 0; setShowConclusion(false)
  }

  /* -------- layout track (SVG) -------- */
  const [stageRef, W] = useMeasuredWidth(260)
  const small = W < 420
  const padL = small ? 26 : 40
  const padR = small ? 18 : 30
  const trackY = small ? 74 : 86
  const H = small ? 130 : 148
  const u = (W - padL - padR) / (TRACK_MAX - TRACK_MIN)
  const X = (v) => padL + (v - TRACK_MIN) * u

  // hindari tumpang-tindih label "Titik Acuan" & "Posisi Benda" kalau kebetulan berdekatan
  const closeLabels = Math.abs(X(x) - X(REF_X)) < (small ? 46 : 60)

  const objLabel = "Posisi Benda"
  const refLabel = "Titik Acuan"

  return (
    <div className="space-y-5">
      {/* Header ringkas widget */}
      <div>
        <p className="font-mono text-[11px] uppercase tracking-wider text-cyan-300/70">Object Motion Track</p>
        <p className="text-white/60 text-sm mt-1">Lihat bagaimana posisi benda berubah terhadap waktu.</p>
      </div>

      {/* Mode: Bergerak / Diam */}
      <div className="flex flex-wrap items-center gap-2.5">
        <div className="inline-flex rounded-lg border border-white/15 overflow-hidden" role="group" aria-label="Mode gerak benda">
          {[["gerak", "Bergerak"], ["diam", "Diam"]].map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => switchMode(id)}
              aria-pressed={mode === id}
              className={`px-3.5 py-2 text-xs md:text-sm font-medium transition-colors ${
                mode === id ? "bg-violet-500/30 text-white" : "text-white/60 hover:text-white"
              } ${id !== "gerak" ? "border-l border-white/15" : ""}`}
            >
              {label}
            </button>
          ))}
        </div>
        <span className="text-white/40 text-xs md:text-sm">
          {mode === "gerak" ? "Mode A — benda bergerak sepanjang lintasan." : "Mode B — benda tetap di satu posisi."}
        </span>
      </div>

      {/* ---------------- Panggung: lintasan horizontal ---------------- */}
      <div ref={stageRef} className="rounded-xl border border-violet-400/25 bg-gradient-to-b from-[#0b1024]/90 to-[#070a18]/95 overflow-hidden px-1 py-2">
        <svg viewBox={`0 0 ${W} ${H}`} className="block w-full h-auto" role="img"
          aria-label={`Lintasan gerak dari 0 sampai 10 meter. Titik acuan di 0 meter. Posisi benda sekarang ${fmt1(x)} meter.`}>
          {/* grid tipis */}
          {Array.from({ length: TRACK_MAX - TRACK_MIN + 1 }, (_, i) => TRACK_MIN + i).map((v) => (
            <line key={`g${v}`} x1={X(v)} x2={X(v)} y1={trackY - 30} y2={trackY + 30} stroke="rgba(150,165,215,0.08)" />
          ))}

          {/* garis lintasan */}
          <line x1={X(TRACK_MIN) - 8} x2={X(TRACK_MAX) + 8} y1={trackY} y2={trackY} stroke="#aab4d8" strokeWidth="1.6" />
          {Array.from({ length: TRACK_MAX - TRACK_MIN + 1 }, (_, i) => TRACK_MIN + i).map((v) => (
            <g key={`t${v}`}>
              <line x1={X(v)} x2={X(v)} y1={trackY - 5} y2={trackY + 5} stroke="#aab4d8" />
              <text x={X(v)} y={trackY + 20} fontSize="11" fill={COLOR.muted} textAnchor="middle">{v}</text>
            </g>
          ))}
          <text x={X(TRACK_MAX) + padR - 4} y={trackY - 12} fontSize="11" fill={COLOR.muted} textAnchor="end">meter</text>

          {/* jejak posisi sebelumnya (section 9) */}
          {trail.map((pt, k) => (
            <circle key={`trail${pt.t}`} cx={X(pt.x)} cy={trackY} r={3.2}
              fill={COLOR.cyan} opacity={0.18 + 0.14 * k} />
          ))}

          {/* panah perbandingan posisi: dari posisi awal ke posisi sekarang.
              Dibuat titik-titik (bukan garis penuh) supaya jelas ini cuma garis
              bantu pembanding posisi, bukan digambar seolah itu jalur yang dilalui. */}
          {didMove && (
            <g opacity="0.9">
              <line x1={X(START_X)} y1={trackY - 16} x2={X(x) - Math.sign(x - START_X) * 6} y2={trackY - 16}
                stroke={COLOR.cyan} strokeWidth="2.6" strokeLinecap="round" strokeDasharray="0.1 7" markerEnd="url(#omtArrow)" />
            </g>
          )}

          <defs>
            <marker id="omtArrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5.5" markerHeight="5.5" orient="auto">
              <path d="M0 0 L10 5 L0 10 Z" fill={COLOR.cyan} />
            </marker>
          </defs>

          {/* titik acuan, tetap di x = 0 */}
          <g>
            <line x1={X(REF_X)} x2={X(REF_X)} y1={closeLabels ? trackY - 44 : trackY - 30} y2={trackY - 6} stroke="rgba(207,168,252,0.45)" strokeDasharray="2 4" />
            <path d={`M${X(REF_X)} ${trackY - 12} l-4 -7 h8 z`} fill={COLOR.purple} />
            <rect x={X(REF_X) - 34} y={closeLabels ? trackY - 62 : trackY - 48} width="68" height="18" rx="5" fill="#170f2e" stroke={COLOR.purple} />
            <text x={X(REF_X)} y={closeLabels ? trackY - 50 : trackY - 36} fontSize="10.5" fill="#cfa8fc" textAnchor="middle">{refLabel}</text>
            <circle cx={X(REF_X)} cy={trackY} r="4" fill={COLOR.purple} />
          </g>

          {/* label posisi benda, ikut bergerak */}
          <g>
            <line x1={X(x)} x2={X(x)} y1={trackY - 26} y2={trackY - 8} stroke="rgba(34,211,238,0.4)" strokeDasharray="2 4" />
            <rect x={clamp(X(x) - 38, 2, W - 78)} y={trackY - 44} width="76" height="18" rx="5" fill="#08202a" stroke={COLOR.cyan} />
            <text x={clamp(X(x), 40, W - 40)} y={trackY - 32} fontSize="10.5" fill="#8fe9f9" textAnchor="middle">{objLabel}</text>
          </g>

          {/* orb benda */}
          <g transform={`translate(${X(x)} ${trackY})`}>
            <circle r="15" fill="rgba(168,85,247,0.28)" />
            <circle r="8" fill="none" stroke="#cfa8fc" strokeWidth="1.3" />
            <circle r="4.5" fill="#fff" />
          </g>
        </svg>
      </div>

      {/* Info real-time: t, x, x acuan */}
      <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
        <StatBox label="Waktu" value={`${fmt1(t)}`} unit="s" accent="text-white" />
        <StatBox label="Posisi" value={fmt1(x)} unit="m" accent="text-cyan-300" />
        <StatBox label="Titik Acuan" value={fmt1(REF_X)} unit="m" accent="text-violet-300" />
      </div>

      {/* Kontrol */}
      <div className="flex flex-wrap items-center gap-2.5">
        <button type="button" onClick={play} disabled={status === "playing"}
          className="rounded-lg bg-violet-600 hover:bg-violet-500 disabled:opacity-40 disabled:hover:bg-violet-600 border border-violet-400/50 px-4 py-2.5 text-sm font-semibold text-white transition-colors">
          {status === "paused" ? "▶ Lanjut" : status === "done" ? "▶ Ulangi" : "▶ Mulai"}
        </button>
        <button type="button" onClick={pause} disabled={status !== "playing"}
          className="rounded-lg border border-white/15 disabled:opacity-40 px-4 py-2.5 text-sm font-medium text-white/85 hover:border-white/30 transition-colors">
          ⏸ Pause
        </button>
        <button type="button" onClick={reset} disabled={t === 0 && status === "idle"}
          className="rounded-lg border border-white/15 disabled:opacity-40 px-4 py-2.5 text-sm font-medium text-white/85 hover:border-white/30 transition-colors">
          ↻ Reset
        </button>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between text-xs text-white/50">
            <span>Kecepatan</span>
            <span className="font-mono">{fmt1(speed)} m/s</span>
          </div>
          <input type="range" min={SPEED_MIN} max={SPEED_MAX} step={0.1} value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
            aria-label="Kecepatan benda" className="w-full accent-violet-500" />
          <div className="flex justify-between text-[10px] text-white/35">
            <span>Lambat</span><span>Cepat</span>
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between text-xs text-white/50">
            <span>Waktu simulasi</span>
            <span className="font-mono">{fmt1(t)} s / {T_TOTAL} s</span>
          </div>
          <input type="range" min={0} max={T_TOTAL} step={0.05} value={t}
            onChange={(e) => scrub(Number(e.target.value))}
            aria-label="Geser untuk melihat posisi pada waktu tertentu" className="w-full accent-cyan-500" />
        </div>
      </div>

      {/* Bandingkan posisi */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <h4 className="font-semibold text-white mb-3">Bandingkan Posisi</h4>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <p className="text-white/45 text-xs">Posisi Awal</p>
            <p className="text-xl font-bold text-white/85 mt-0.5">{fmt1(START_X)} <span className="text-sm font-normal text-white/45">m</span></p>
          </div>
          <div>
            <p className="text-white/45 text-xs">Posisi Sekarang</p>
            <p className="text-xl font-bold text-cyan-300 mt-0.5">{fmt1(x)} <span className="text-sm font-normal text-white/45">m</span></p>
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.p
            key={didMove ? "berubah" : "tetap"}
            initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={`mt-3 text-sm font-medium rounded-lg px-3 py-2 ${didMove ? "bg-cyan-500/10 text-cyan-200 border border-cyan-400/30" : "bg-white/5 text-white/50 border border-white/10"}`}
          >
            {didMove ? "Posisi berubah!" : "Posisi belum berubah."}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Bergerak atau Diam? */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <h4 className="font-semibold text-white mb-1">Apakah benda bergerak?</h4>
        <p className="text-white/50 text-sm mb-3">Jalankan simulasinya dulu, amati sebentar, baru cek jawabanmu.</p>
        <button type="button" onClick={() => setShowConclusion((v) => !v)}
          className="rounded-lg border border-white/15 px-3.5 py-2 text-sm font-medium text-white/80 hover:border-violet-400/50 transition-colors">
          {showConclusion ? "Sembunyikan kesimpulan" : "Lihat kesimpulan"}
        </button>
        <AnimatePresence>
          {showConclusion && (
            <motion.div
              initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }} className="overflow-hidden"
            >
              <p className="mt-3 rounded-lg border border-violet-400/40 bg-violet-500/10 px-4 py-3 text-white/85 text-sm">
                {didMove
                  ? "Posisi berubah → benda bergerak."
                  : "Posisi tidak berubah → benda diam terhadap titik acuan."}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Coba Amati -- eksperimen mini */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <h4 className="font-semibold text-white mb-1">Coba Amati</h4>
        <p className="text-white/60 text-sm mb-3">Jalankan benda selama beberapa detik. Perhatikan posisi benda terhadap titik acuan.</p>
        <p className="text-white font-medium text-sm mb-2.5">Apa yang berubah ketika benda bergerak?</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            ["A", "Posisi benda"],
            ["B", "Massa benda"],
            ["C", "Warna benda"],
            ["D", "Bentuk benda"],
          ].map(([id, label]) => (
            <button key={id} type="button" onClick={() => setQuizAnswer(id)} aria-pressed={quizAnswer === id}
              className={`text-left rounded-lg border px-3.5 py-2.5 text-sm transition-colors ${
                quizAnswer === id
                  ? id === "A" ? "border-cyan-400 bg-cyan-500/15 text-white font-medium" : "border-amber-300/60 bg-amber-400/10 text-white font-medium"
                  : "border-white/12 bg-white/[0.03] text-white/75 hover:border-white/25"
              }`}
            >
              <b className="text-white/50 font-mono mr-1.5">{id}.</b>{label}
            </button>
          ))}
        </div>
        <AnimatePresence>
          {quizAnswer && (
            <motion.p
              initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
              className={`mt-3 text-sm rounded-lg px-3.5 py-2.5 border ${
                quizAnswer === "A" ? "bg-cyan-500/10 text-cyan-100 border-cyan-400/30" : "bg-white/5 text-white/70 border-white/10"
              }`}
            >
              {quizAnswer === "A"
                ? "Benar! Gerak dapat dikenali ketika posisi benda berubah terhadap titik acuan."
                : "Coba perhatikan angka posisi benda. Apakah nilainya tetap atau berubah?"}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Mini timeline */}
      <div>
        <p className="text-white/45 text-xs mb-2">Mini timeline</p>
        <div className="relative pt-3">
          <div className="h-px bg-white/15 w-full" />
          <div className="flex justify-between -mt-[3px]">
            {Array.from({ length: T_TOTAL + 1 }, (_, i) => i).map((sec) => (
              <div key={sec} className="flex flex-col items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white/25" />
                <span className="text-[10px] text-white/35 mt-1">{sec}s</span>
              </div>
            ))}
          </div>
          <div
            className="absolute top-0 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_2px_rgba(34,211,238,0.55)] -translate-x-1/2"
            style={{ left: `${clamp((t / T_TOTAL) * 100, 0, 100)}%` }}
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  )
}

/* ---------------------------- sub-komponen kecil ---------------------------- */

function StatBox({ label, value, unit, accent }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-center">
      <p className="text-white/45 text-[11px] mb-1">{label}</p>
      <p className={`text-2xl sm:text-3xl font-bold ${accent}`}>
        {value}
        <span className="text-sm font-normal text-white/40 ml-1">{unit}</span>
      </p>
    </div>
  )
}
