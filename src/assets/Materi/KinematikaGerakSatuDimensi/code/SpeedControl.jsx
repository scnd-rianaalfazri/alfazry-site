import { useState, useRef, useEffect, useMemo, useLayoutEffect } from "react"

// ============================================================
// SpeedControl
// ------------------------------------------------------------
// Simulasi interaktif untuk materi "Kelajuan & Kecepatan".
// Insight utama yang harus terlihat: kelajuan (besar gerak saja)
// bisa tetap sama walau arahnya dibalik, sementara kecepatan
// (besar + arah) ikut berubah tandanya.
//
// Konvensi warna disamakan dengan widget lain di situs ini:
// ungu = besaran skalar (kelajuan), cyan = besaran vektor
// (kecepatan, karena punya arah). Tidak ada karakter manusia --
// benda cuma orb kecil bercahaya dengan panah arah di sampingnya.
// ============================================================

const TRACK_MIN = -10
const TRACK_MAX = 10 // meter
const SPEED_MIN = 0
const SPEED_MAX = 10 // m/s
const EPS = 1e-9

const COLOR = {
  purple: "#a855f7",
  cyan: "#22d3ee",
  muted: "#9aa4c7",
}

const clamp = (v, a, b) => Math.min(b, Math.max(a, v))
const fmt1 = (n) => (Math.abs(n) < 0.05 ? "0,0" : n.toFixed(1).replace(".", ","))
const sgn1 = (n) => (n > 0.05 ? "+" : n < -0.05 ? "" : "") + fmt1(n)

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

export default function SpeedControl() {
  const [speed, setSpeed] = useState(5) // selalu >= 0, besar gerak saja
  const [direction, setDirection] = useState(1) // +1 kanan, -1 kiri
  const [x, setX] = useState(0)
  const [status, setStatus] = useState("idle") // idle | playing | paused
  const [hitWall, setHitWall] = useState(false)
  const [flipped, setFlipped] = useState(false) // sudah pernah tekan Balik Arah?
  const [sawNegative, setSawNegative] = useState(false) // sudah pernah lihat kecepatan negatif?
  const [quizAnswer, setQuizAnswer] = useState(null)

  // SATU sumber kebenaran: kecepatan selalu diturunkan dari kelajuan x arah,
  // jadi tidak mungkin ada kondisi fisika yang tidak masuk akal (mis.
  // kelajuan negatif, atau kecepatan yang tidak konsisten dengan arah).
  const velocity = speed * direction

  useEffect(() => {
    if (velocity < -EPS) setSawNegative(true)
  }, [velocity])

  /* -------- animasi -------- */
  const rafRef = useRef(0)
  const lastTsRef = useRef(0)
  useEffect(() => {
    if (status !== "playing") return undefined
    if (speed <= EPS) return undefined // diam: tidak perlu loop animasi
    let alive = true
    lastTsRef.current = performance.now()
    const tick = (ts) => {
      if (!alive) return
      const dt = Math.min(0.05, (ts - lastTsRef.current) / 1000)
      lastTsRef.current = ts
      setX((prev) => {
        const next = prev + velocity * dt
        if (next >= TRACK_MAX || next <= TRACK_MIN) {
          setStatus("paused")
          setHitWall(true)
          return clamp(next, TRACK_MIN, TRACK_MAX)
        }
        return next
      })
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => { alive = false; cancelAnimationFrame(rafRef.current) }
  }, [status, speed, velocity])

  /* -------- kontrol -------- */
  const play = () => {
    if (speed <= EPS) return
    setHitWall(false)
    setStatus("playing")
  }
  const pause = () => { if (status === "playing") setStatus("paused") }
  const reset = () => { setX(0); setStatus("idle"); setHitWall(false) }
  const flipDirection = () => {
    setDirection((d) => -d)
    setFlipped(true)
  }
  const chooseDirection = (d) => {
    if (d !== direction) setFlipped(true)
    setDirection(d)
  }

  /* -------- tantangan: kelajuan 6 m/s, kecepatan -6 m/s -------- */
  const challengeDone = Math.abs(speed - 6) < 0.5 && direction < 0

  /* ---------------------------- layout SVG ---------------------------- */
  const [stageRef, W] = useMeasuredWidth(260)
  const small = W < 420
  const padL = small ? 24 : 40
  const H = small ? 92 : 110
  const axisY = H / 2 + 6
  const u = (W - 2 * padL) / (TRACK_MAX - TRACK_MIN)
  const X = (v) => padL + (v - TRACK_MIN) * u

  // panjang panah sebanding kelajuan, tapi dibatasi biar tidak ekstrem
  const arrowLen = speed <= EPS ? 0 : clamp(16 + speed * 3.2, 16, 54)
  const arrowDir = direction

  return (
    <div className="space-y-5">
      {/* Header ringkas widget */}
      <div>
        <p className="font-mono text-[11px] uppercase tracking-wider text-cyan-300/70">Speed Control</p>
        <p className="text-white/60 text-sm mt-1">Atur seberapa cepat benda bergerak, lalu lihat apa yang terjadi ketika arahnya dibalik.</p>
      </div>

      {/* ---------------- Panggung: lintasan horizontal ---------------- */}
      <div ref={stageRef} className="rounded-xl border border-violet-400/25 bg-gradient-to-b from-[#0b1024]/90 to-[#070a18]/95 overflow-hidden px-1 py-2">
        <svg viewBox={`0 0 ${W} ${H}`} className="block w-full h-auto" role="img"
          aria-label={`Lintasan dari ${TRACK_MIN} sampai ${TRACK_MAX} meter. Posisi benda sekarang ${fmt1(x)} meter, bergerak dengan kelajuan ${fmt1(speed)} meter per sekon ke arah ${direction > 0 ? "kanan" : "kiri"}.`}>
          <defs>
            <marker id="scArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M0 0 L10 5 L0 10 Z" fill={COLOR.cyan} />
            </marker>
            <filter id="scGlow" x="-40%" y="-80%" width="180%" height="260%">
              <feGaussianBlur stdDeviation="2.4" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* grid tipis + skala meter */}
          {Array.from({ length: TRACK_MAX - TRACK_MIN + 1 }, (_, i) => TRACK_MIN + i).map((v) => (
            <line key={`g${v}`} x1={X(v)} x2={X(v)} y1={axisY - 22} y2={axisY + 22} stroke="rgba(150,165,215,0.08)" />
          ))}
          <line x1={X(TRACK_MIN) - 8} x2={X(TRACK_MAX) + 8} y1={axisY} y2={axisY} stroke="#aab4d8" strokeWidth="1.5" />
          {Array.from({ length: TRACK_MAX - TRACK_MIN + 1 }, (_, i) => TRACK_MIN + i).map((v) => (
            <g key={`t${v}`}>
              <line x1={X(v)} x2={X(v)} y1={axisY - 5} y2={axisY + 5} stroke="#aab4d8" />
              {v % 5 === 0 && <text x={X(v)} y={axisY + 19} fontSize="10.5" fill={COLOR.muted} textAnchor="middle">{v}</text>}
            </g>
          ))}
          <text x={W - padL} y={axisY - 12} fontSize="10.5" fill={COLOR.muted} textAnchor="end">meter</text>

          {/* titik 0 sebagai acuan posisi awal */}
          <circle cx={X(0)} cy={axisY} r="3" fill="none" stroke={COLOR.muted} strokeWidth="1.3" />

          {/* panah kecepatan: panjang ~ kelajuan, arah ~ arah gerak. Selalu cyan
              karena kecepatan adalah besaran vektor. */}
          {speed > EPS && (
            <line
              x1={X(x) + (arrowDir > 0 ? 12 : -12)}
              y1={axisY}
              x2={X(x) + arrowDir * (12 + arrowLen) - arrowDir * 3}
              y2={axisY}
              stroke={COLOR.cyan} strokeWidth="3" strokeLinecap="round"
              markerEnd="url(#scArrow)" filter="url(#scGlow)"
            />
          )}

          {/* orb benda */}
          <g transform={`translate(${X(x)} ${axisY})`}>
            <circle r="15" fill="rgba(168,85,247,0.28)" />
            <circle r="8" fill="none" stroke="#cfa8fc" strokeWidth="1.3" />
            <circle r="4.5" fill="#fff" />
          </g>
        </svg>
      </div>
      {hitWall && (
        <p className="text-white/40 text-xs -mt-2">Bendanya sampai ujung lintasan, jadi berhenti dulu. Tekan ↻ Reset untuk mulai lagi.</p>
      )}

      {/* Panel data real-time */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
        <StatBox label="Kelajuan" value={fmt1(speed)} unit="m/s" accent="text-violet-300" />
        <StatBox label="Kecepatan" value={sgn1(velocity)} unit="m/s" accent="text-cyan-300" />
        <StatBox label="Arah" value={speed <= EPS ? "Diam" : direction > 0 ? "→ Kanan" : "← Kiri"} accent="text-white/85" noUnit />
        <StatBox label="Posisi" value={fmt1(x)} unit="m" accent="text-white/85" />
      </div>

      {/* Slider kelajuan */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <div className="flex justify-between items-baseline mb-1.5">
          <span className="text-white/70 text-sm font-medium">Kelajuan</span>
          <span className="font-mono text-violet-300 text-sm">{fmt1(speed)} m/s</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-white/40 text-xs shrink-0">Lambat</span>
          <input type="range" min={SPEED_MIN} max={SPEED_MAX} step={0.5} value={speed}
            onChange={(e) => setSpeed(clamp(Number(e.target.value), SPEED_MIN, SPEED_MAX))}
            aria-label="Atur besar kelajuan dalam meter per sekon"
            className="w-full accent-violet-500" />
          <span className="text-white/40 text-xs shrink-0">Cepat</span>
        </div>
      </div>

      {/* Arah + kontrol gerak */}
      <div className="flex flex-wrap items-center gap-2.5">
        <button type="button" onClick={() => chooseDirection(-1)} aria-pressed={direction < 0}
          className={`rounded-lg border px-3.5 py-2.5 text-sm font-medium transition-colors ${
            direction < 0 ? "border-cyan-400 bg-cyan-500/15 text-white" : "border-white/15 bg-white/[0.03] text-white/70 hover:border-cyan-400/50"
          }`}>
          ← Kiri
        </button>
        <button type="button" onClick={() => chooseDirection(1)} aria-pressed={direction > 0}
          className={`rounded-lg border px-3.5 py-2.5 text-sm font-medium transition-colors ${
            direction > 0 ? "border-cyan-400 bg-cyan-500/15 text-white" : "border-white/15 bg-white/[0.03] text-white/70 hover:border-cyan-400/50"
          }`}>
          Kanan →
        </button>
        <button type="button" onClick={flipDirection}
          className="rounded-lg border border-white/15 bg-white/[0.03] px-3.5 py-2.5 text-sm font-medium text-white/80 hover:border-violet-400/50 transition-colors">
          🔄 Balik Arah
        </button>
      </div>
      <div className="flex flex-wrap items-center gap-2.5">
        <button type="button" onClick={play} disabled={status === "playing" || speed <= EPS}
          className="rounded-lg bg-violet-600 hover:bg-violet-500 disabled:opacity-40 disabled:hover:bg-violet-600 border border-violet-400/50 px-4 py-2.5 text-sm font-semibold text-white transition-colors">
          ▶ {status === "paused" ? "Lanjut" : "Mulai"}
        </button>
        <button type="button" onClick={pause} disabled={status !== "playing"}
          className="rounded-lg border border-white/15 disabled:opacity-40 px-4 py-2.5 text-sm font-medium text-white/85 hover:border-white/30 transition-colors">
          ⏸ Pause
        </button>
        <button type="button" onClick={reset} disabled={x === 0 && status === "idle"}
          className="rounded-lg border border-white/15 disabled:opacity-40 px-4 py-2.5 text-sm font-medium text-white/85 hover:border-white/30 transition-colors">
          ↻ Reset
        </button>
      </div>

      {/* Feedback dinamis setelah arah dibalik -- insight utama simulasi */}
      {flipped && (
        <p className="rounded-lg border border-cyan-400/30 bg-cyan-500/[0.06] px-3.5 py-2.5 text-sm text-cyan-100">
          Kelajuannya tetap <b>{fmt1(speed)} m/s</b>, tetapi kecepatannya berubah jadi <b>{sgn1(velocity)} m/s</b> karena arah geraknya berubah.
        </p>
      )}
      {/* Catatan kecil begitu siswa pertama kali lihat kecepatan negatif --
          menjawab miskonsepsi "kecepatan tidak bisa negatif" tepat saat muncul. */}
      {sawNegative && (
        <p className="text-white/40 text-xs -mt-2">
          Catatan: kecepatan negatif bukan berarti aneh. Itu cuma menandakan arah berlawanan dari arah positif yang kita pilih (kanan).
        </p>
      )}

      {/* Perbandingan konsep */}
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-violet-400/40 bg-violet-500/[0.06] p-4 text-center">
          <p className="text-violet-300 font-semibold text-xs uppercase tracking-wide mb-1.5">Kelajuan</p>
          <p className="text-2xl sm:text-3xl font-bold text-violet-200">{fmt1(speed)} <span className="text-sm font-normal text-white/40">m/s</span></p>
          <p className="text-white/55 text-xs mt-1.5">Hanya besar</p>
        </div>
        <div className="rounded-xl border border-cyan-400/40 bg-cyan-500/[0.06] p-4 text-center">
          <p className="text-cyan-300 font-semibold text-xs uppercase tracking-wide mb-1.5">Kecepatan</p>
          <p className="text-2xl sm:text-3xl font-bold text-cyan-200">
            {sgn1(velocity)} <span className="text-sm font-normal text-white/40">m/s</span>
            {speed > EPS && <span className="ml-1">{direction > 0 ? "→" : "←"}</span>}
          </p>
          <p className="text-white/55 text-xs mt-1.5">Besar + arah</p>
        </div>
      </div>

      {/* Mini Challenge -- bereaksi langsung dari kondisi slider & arah saat ini */}
      <div className={`rounded-xl border p-4 transition-colors ${challengeDone ? "border-cyan-400/60 bg-cyan-500/10" : "border-white/10 bg-white/5"}`}>
        <h4 className="font-semibold text-white mb-1">🎯 Tantangan</h4>
        <p className="text-white/60 text-sm">Buat benda bergerak dengan kelajuan <b className="text-white">6 m/s</b>, tetapi kecepatannya bernilai <b className="text-white">−6 m/s</b>.</p>
        {challengeDone && (
          <p className="mt-2.5 text-sm font-medium text-cyan-100">
            🎯 Tepat! Kelajuan tetap positif karena hanya menunjukkan besar gerak. Kecepatan bernilai −6 m/s karena benda bergerak ke kiri.
          </p>
        )}
      </div>

      {/* Coba Amati -- mini eksperimen & kuis singkat */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <h4 className="font-semibold text-white mb-1">Coba Amati</h4>
        <p className="text-white/70 text-sm mb-3">
          Atur kelajuan jadi <b className="text-white">5 m/s</b>. Jalankan benda ke kanan. Setelah itu, balikkan arahnya ke kiri pakai tombol di atas.
        </p>
        <p className="text-white font-medium text-sm mb-2.5">Apa yang berubah ketika arah benda dibalik?</p>
        <div className="grid grid-cols-2 gap-2">
          {[
            ["A", "Kelajuan"],
            ["B", "Kecepatan"],
            ["C", "Massa"],
            ["D", "Posisi awal"],
          ].map(([id, label]) => (
            <button key={id} type="button" onClick={() => setQuizAnswer(id)} aria-pressed={quizAnswer === id}
              className={`rounded-lg border px-3 py-2 text-sm transition-colors text-left ${
                quizAnswer === id
                  ? id === "B" ? "border-cyan-400 bg-cyan-500/15 text-white font-medium" : "border-amber-300/60 bg-amber-400/10 text-white font-medium"
                  : "border-white/12 bg-white/[0.03] text-white/75 hover:border-white/25"
              }`}>
              <b className="text-white/50 font-mono mr-1">{id}.</b>{label}
            </button>
          ))}
        </div>
        {quizAnswer && (
          <p className={`mt-2.5 text-sm rounded-lg px-3.5 py-2.5 border ${quizAnswer === "B" ? "bg-cyan-500/10 text-cyan-100 border-cyan-400/30" : "bg-white/5 text-white/70 border-white/10"}`}>
            {quizAnswer === "B"
              ? "Tepat! Kelajuan tetap 5 m/s, tetapi arah berubah sehingga kecepatan berubah."
              : "Coba cek lagi angka kelajuan dan kecepatannya di panel data setelah arah dibalik -- mana yang berubah, mana yang tetap?"}
          </p>
        )}
      </div>
    </div>
  )
}

/* ---------------------------- sub-komponen kecil ---------------------------- */

function StatBox({ label, value, unit, accent, noUnit = false }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-center">
      <p className="text-white/45 text-[11px] mb-1">{label}</p>
      <p className={`font-bold text-lg sm:text-xl ${accent}`}>
        {value}
        {!noUnit && <span className="text-sm font-normal text-white/40 ml-1">{unit}</span>}
      </p>
    </div>
  )
}
