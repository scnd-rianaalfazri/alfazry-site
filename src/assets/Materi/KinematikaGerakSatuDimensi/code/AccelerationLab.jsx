import { useState, useRef, useEffect, useMemo, useLayoutEffect } from "react"

// ============================================================
// AccelerationLab
// ------------------------------------------------------------
// Simulasi interaktif untuk materi "Percepatan". Insight utama
// yang harus terlihat: percepatan = PERUBAHAN kecepatan terhadap
// waktu -- bukan sekadar "benda jadi makin cepat", dan tanda
// negatif cuma soal ARAH, bukan otomatis berarti melambat.
//
// Model gerak: v(t) = v0 + a*t, x(t) = x0 + v0*t + 1/2*a*t^2.
// SATU sumber data ini dipakai untuk posisi benda, kedua grafik,
// dan seluruh panel data, supaya semuanya selalu konsisten.
//
// Warna: kecepatan = cyan, percepatan = ungu (meneruskan konvensi
// dari widget "Instant Speed Meter" di materi sebelumnya). Tidak
// ada karakter manusia -- benda cuma orb kecil bercahaya.
// ============================================================

const T_MAX = 6 // sekon, sesuai rentang slider waktu di spesifikasi
const V0_MIN = 0, V0_MAX = 10
const A_MIN = -4, A_MAX = 4
const EPS = 1e-9

const COLOR = { purple: "#a855f7", cyan: "#22d3ee", muted: "#9aa4c7" }
const clamp = (v, a, b) => Math.min(b, Math.max(a, v))
const fmt1 = (n) => (Math.abs(n) < 0.05 ? "0,0" : n.toFixed(1).replace(".", ","))
const sgn1 = (n) => (n > 0.05 ? "+" : n < -0.05 ? "" : "") + fmt1(n)

/* ---------------------------- model gerak (pure) ---------------------------- */
// SATU fungsi posisi & kecepatan dipakai di mana-mana (track, data panel,
// kedua grafik) supaya tidak mungkin ada visual yang saling kontradiksi.
const velAt = (v0, a, t) => v0 + a * t
const posAt = (v0, a, t) => v0 * t + 0.5 * a * t * t // x0 dianggap 0

// Rentang posisi benda dari t=0 sampai T_MAX, dipakai supaya lintasan
// selalu pas menampung pergerakannya apa pun kombinasi v0/a yang dipilih
// (termasuk saat benda berbalik arah di tengah jalan).
function trackExtent(v0, a) {
  const ts = [0, T_MAX]
  if (Math.abs(a) > EPS) {
    const tv = -v0 / a // saat v(t) = 0, titik balik arah
    if (tv > 0 && tv < T_MAX) ts.push(tv)
  }
  const xs = ts.map((tt) => posAt(v0, a, tt))
  let lo = Math.min(0, ...xs), hi = Math.max(0, ...xs)
  if (hi - lo < 8) { const mid = (hi + lo) / 2; lo = mid - 4; hi = mid + 4 } // minimal span biar nggak kezoom aneh
  const pad = (hi - lo) * 0.12
  return [lo - pad, hi + pad]
}

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

const EXPERIMENTS = [
  {
    id: "cepat", title: "1. Buat Benda Semakin Cepat", v0: 0, a: 2,
    instruksi: "Atur kecepatan awal 0 m/s dan percepatan +2 m/s².",
    tanya: "Berapa perubahan kecepatan setiap 1 detik?",
    jawaban: "2 m/s",
    feedback: "Benar. Kecepatan bertambah 2 m/s setiap detik. Perubahan kecepatan inilah yang menunjukkan adanya percepatan.",
    showTable: true,
  },
  {
    id: "konstan", title: "2. Buat Benda Bergerak Konstan", v0: 5, a: 0,
    instruksi: "Atur kecepatan awal 5 m/s dan percepatan 0 m/s².",
    tanya: "Apa yang terjadi pada kecepatannya?",
    jawaban: "Tetap 5 m/s",
    feedback: "Tidak ada perubahan kecepatan, sehingga percepatannya 0 m/s² -- walau bendanya tetap bergerak terus.",
    showTable: false,
  },
  {
    id: "lambat", title: "3. Buat Benda Melambat", v0: 10, a: -2,
    instruksi: "Atur kecepatan awal 10 m/s dan percepatan −2 m/s².",
    tanya: "Apa yang terjadi pada gerak benda?",
    jawaban: "Melambat sampai berhenti",
    feedback: "Kecepatan berkurang 2 m/s setiap detik. Karena arah percepatan berlawanan dengan arah kecepatan, benda melambat.",
    showTable: false,
  },
]

/* ============================================================ */

export default function AccelerationLab() {
  const [v0, setV0] = useState(0)
  const [a, setA] = useState(2)
  const [t, setT] = useState(0)
  const [status, setStatus] = useState("idle") // idle | playing | paused | done
  const [ran, setRan] = useState(false)
  const [openExp, setOpenExp] = useState(null) // id eksperimen yang jawabannya lagi dibuka
  const [revealed, setRevealed] = useState({}) // {[expId]: true}

  const v = velAt(v0, a, t)
  const x = posAt(v0, a, t)

  /* -------- animasi -------- */
  const rafRef = useRef(0)
  const lastTsRef = useRef(0)
  useEffect(() => {
    if (status !== "playing") return undefined
    let alive = true
    lastTsRef.current = performance.now()
    const tick = (ts) => {
      if (!alive) return
      const dt = Math.min(0.05, (ts - lastTsRef.current) / 1000)
      lastTsRef.current = ts
      setT((prev) => {
        const next = prev + dt
        if (next >= T_MAX) { setStatus("done"); setRan(true); return T_MAX }
        return next
      })
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => { alive = false; cancelAnimationFrame(rafRef.current) }
  }, [status])

  /* -------- kontrol -------- */
  const play = () => { if (status === "done" || t >= T_MAX - EPS) setT(0); setStatus("playing") }
  const pause = () => { if (status === "playing") setStatus("paused") }
  const reset = () => { setT(0); setStatus("idle") } // v0 & a TIDAK direset, cuma t/x/v
  const scrub = (val) => {
    setT(val)
    setStatus(val >= T_MAX - EPS ? "done" : val <= EPS ? "idle" : "paused")
    if (val >= T_MAX - EPS) setRan(true)
  }
  const applyExperiment = (exp) => {
    setV0(exp.v0); setA(exp.a); setT(0); setStatus("idle")
    setOpenExp(exp.id)
  }

  /* -------- tantangan (reaktif dari v0/a/t saat ini) -------- */
  const ch1Done = a > 0.25 // benda makin cepat
  const ch2Done = Math.abs(a) < 0.25 // kecepatan konstan
  const ch3TStop = a < -EPS ? -v0 / a : Infinity
  const ch3Done = Math.abs(v0 - 8) < 0.26 && a < -EPS && ch3TStop <= T_MAX + EPS

  // kondisi v vs a SAAT INI (pakai kecepatan sesaat, bukan cuma v0 --
  // supaya tetap benar walau bendanya sempat berbalik arah)
  const sameDir = v * a > EPS
  const oppDir = v * a < -EPS
  const aIsZero = Math.abs(a) < EPS

  /* ---------------------------- layout track SVG ---------------------------- */
  const [stageRef, W] = useMeasuredWidth(260)
  const small = W < 420
  const padL = small ? 24 : 40
  const H = small ? 92 : 108
  const axisY = H / 2 + 8
  const [TMIN, TMAX_X] = useMemo(() => trackExtent(v0, a), [v0, a])
  const u = (W - 2 * padL) / (TMAX_X - TMIN)
  const X = (val) => padL + (val - TMIN) * u
  const vArrowLen = Math.abs(v) < EPS ? 0 : clamp(12 + Math.abs(v) * 3.4, 12, 46)
  const aArrowLen = Math.abs(a) < EPS ? 0 : clamp(10 + Math.abs(a) * 7, 10, 34)

  /* ---------------------------- layout grafik v-t & a-t ---------------------------- */
  const [graphRef, GW] = useMeasuredWidth(260)
  const GH = small ? 128 : 150
  const gPadL = 32, gPadB = 20, gPadT = 10, gPadR = 10
  const gw = GW - gPadL - gPadR, gh = GH - gPadT - gPadB
  const gx = (tv) => gPadL + (tv / T_MAX) * gw
  const vEnd0 = velAt(v0, a, 0), vEnd1 = velAt(v0, a, T_MAX)
  const vLo = Math.min(0, vEnd0, vEnd1), vHi = Math.max(0.1, vEnd0, vEnd1)
  const vSpan = Math.max(vHi - vLo, 2)
  const gyV = (vv) => gPadT + gh - ((vv - vLo) / vSpan) * gh
  const gyV0line = gyV(0)

  return (
    <div className="space-y-5">
      {/* Header + pertanyaan besar */}
      <div>
        <p className="font-mono text-[11px] uppercase tracking-wider text-cyan-300/70">Acceleration Lab</p>
        <p className="text-white/60 text-sm mt-1">Atur perubahan kecepatan dan lihat bagaimana gerak benda berubah.</p>
        <p className="text-white/85 text-sm font-medium mt-2 italic">“Kalau kecepatan sebuah benda terus berubah, seberapa cepat perubahan itu terjadi?”</p>
      </div>

      {/* ---------------- Lintasan ---------------- */}
      <div ref={stageRef} className="rounded-xl border border-violet-400/25 bg-gradient-to-b from-[#0b1024]/90 to-[#070a18]/95 overflow-hidden px-1 py-2">
        <svg viewBox={`0 0 ${W} ${H}`} className="block w-full h-auto" role="img"
          aria-label={`Pada waktu ${fmt1(t)} sekon, posisi benda ${fmt1(x)} meter, kecepatan ${sgn1(v)} meter per sekon, percepatan ${sgn1(a)} meter per sekon kuadrat.`}>
          <defs>
            <marker id="alArrowV" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill={COLOR.cyan} /></marker>
            <marker id="alArrowVL" viewBox="0 0 10 10" refX="2" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M10 0 L0 5 L10 10 Z" fill={COLOR.cyan} /></marker>
            <marker id="alArrowA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5.5" markerHeight="5.5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill={COLOR.purple} /></marker>
            <marker id="alArrowAL" viewBox="0 0 10 10" refX="2" refY="5" markerWidth="5.5" markerHeight="5.5" orient="auto"><path d="M10 0 L0 5 L10 10 Z" fill={COLOR.purple} /></marker>
            <filter id="alGlow" x="-50%" y="-100%" width="200%" height="300%"><feGaussianBlur stdDeviation="2" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
          </defs>
          {Array.from({ length: 7 }, (_, i) => TMIN + (i / 6) * (TMAX_X - TMIN)).map((val, i) => (
            <g key={i}>
              <line x1={X(val)} x2={X(val)} y1={axisY - 16} y2={axisY + 16} stroke="rgba(150,165,215,0.08)" />
              <text x={X(val)} y={axisY + 30} fontSize="9.5" fill={COLOR.muted} textAnchor="middle">{fmt1(val)}</text>
            </g>
          ))}
          <line x1={X(TMIN)} x2={X(TMAX_X)} y1={axisY} y2={axisY} stroke="#aab4d8" strokeWidth="1.4" />
          <text x={W - padL} y={axisY - 22} fontSize="9.5" fill={COLOR.muted} textAnchor="end">meter</text>

          {/* panah kecepatan (cyan) */}
          {Math.abs(v) > EPS && (
            <line x1={X(x) + (v > 0 ? 11 : -11)} y1={axisY - 7} x2={X(x) + Math.sign(v) * (11 + vArrowLen)} y2={axisY - 7}
              stroke={COLOR.cyan} strokeWidth="2.6" strokeLinecap="round"
              markerEnd={v > 0 ? "url(#alArrowV)" : undefined} markerStart={v < 0 ? "url(#alArrowVL)" : undefined} filter="url(#alGlow)" />
          )}
          {/* panah percepatan (ungu) -- posisinya sedikit di bawah supaya nggak numpuk sama panah v */}
          {Math.abs(a) > EPS && (
            <line x1={X(x) + (a > 0 ? 11 : -11)} y1={axisY + 13} x2={X(x) + Math.sign(a) * (11 + aArrowLen)} y2={axisY + 13}
              stroke={COLOR.purple} strokeWidth="2.6" strokeLinecap="round"
              markerEnd={a > 0 ? "url(#alArrowA)" : undefined} markerStart={a < 0 ? "url(#alArrowAL)" : undefined} filter="url(#alGlow)" />
          )}
          <g transform={`translate(${X(x)} ${axisY})`}>
            <circle r="13" fill="rgba(168,85,247,0.25)" />
            <circle r="7" fill="none" stroke="#cfa8fc" strokeWidth="1.2" />
            <circle r="4" fill="#fff" />
          </g>
        </svg>
        <div className="flex justify-center gap-5 text-[10.5px] text-white/40 pb-1">
          <span className="flex items-center gap-1.5"><span className="inline-block w-3 h-0.5 rounded" style={{ background: COLOR.cyan }} /> kecepatan (v)</span>
          <span className="flex items-center gap-1.5"><span className="inline-block w-3 h-0.5 rounded" style={{ background: COLOR.purple }} /> percepatan (a)</span>
        </div>
      </div>

      {/* Panel data real-time */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
        <StatBox label="Waktu" value={fmt1(t)} unit="s" accent="text-white/85" />
        <StatBox label="Posisi" value={sgn1(x)} unit="m" accent="text-white/85" />
        <StatBox label="Kecepatan" value={sgn1(v)} unit="m/s" accent="text-cyan-300" />
        <StatBox label="Percepatan" value={sgn1(a)} unit="m/s²" accent="text-violet-300" />
      </div>

      {/* Indikator searah / berlawanan arah -- jawaban langsung utk miskonsepsi "a negatif = pasti melambat" */}
      <p className={`rounded-lg border px-3.5 py-2.5 text-sm ${
        aIsZero ? "border-white/15 bg-white/[0.04] text-white/70"
        : sameDir ? "border-cyan-400/30 bg-cyan-500/[0.06] text-cyan-100" : "border-amber-300/30 bg-amber-400/[0.06] text-amber-100"
      }`}>
        {aIsZero
          ? "Percepatan 0 m/s² -- kecepatan tidak berubah, benda bergerak (atau diam) dengan kecepatan tetap."
          : sameDir
            ? "Kecepatan dan percepatan searah sekarang -- benda jadi makin cepat."
            : "Kecepatan dan percepatan berlawanan arah sekarang -- benda jadi melambat, walau percepatannya bisa saja bertanda positif atau negatif tergantung arah positif yang dipakai."}
      </p>

      {/* Slider v0, a, dan waktu + kontrol */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-4">
        <div>
          <div className="flex justify-between items-baseline mb-1.5">
            <span className="text-white/70 text-sm font-medium">Kecepatan Awal (v₀)</span>
            <span className="font-mono text-cyan-300 text-sm">{fmt1(v0)} m/s</span>
          </div>
          <input type="range" min={V0_MIN} max={V0_MAX} step={0.5} value={v0}
            onChange={(e) => { setV0(Number(e.target.value)); setOpenExp(null) }}
            aria-label="Atur kecepatan awal dalam meter per sekon" className="w-full accent-cyan-400" />
        </div>
        <div>
          <div className="flex justify-between items-baseline mb-1.5">
            <span className="text-white/70 text-sm font-medium">Percepatan (a)</span>
            <span className="font-mono text-violet-300 text-sm">{sgn1(a)} m/s²</span>
          </div>
          <input type="range" min={A_MIN} max={A_MAX} step={0.5} value={a}
            onChange={(e) => { setA(Number(e.target.value)); setOpenExp(null) }}
            aria-label="Atur percepatan dalam meter per sekon kuadrat" className="w-full accent-violet-500" />
          <div className="flex justify-between text-[10px] text-white/35 mt-0.5"><span>{A_MIN} m/s²</span><span>0</span><span>+{A_MAX} m/s²</span></div>
        </div>
        <div>
          <div className="flex justify-between items-baseline mb-1.5">
            <span className="text-white/70 text-sm font-medium">Waktu</span>
            <span className="font-mono text-white/70 text-sm">{fmt1(t)} s / {T_MAX} s</span>
          </div>
          <input type="range" min={0} max={T_MAX} step={0.05} value={t} onChange={(e) => scrub(Number(e.target.value))}
            aria-label="Geser untuk melihat kondisi benda pada waktu tertentu" className="w-full accent-white/70" />
        </div>
        <div className="flex flex-wrap items-center gap-2.5">
          <button type="button" onClick={play} disabled={status === "playing"}
            className="rounded-lg bg-violet-600 hover:bg-violet-500 disabled:opacity-40 disabled:hover:bg-violet-600 border border-violet-400/50 px-4 py-2.5 text-sm font-semibold text-white transition-colors">
            ▶ {status === "paused" ? "Lanjut" : status === "done" ? "Ulangi" : "Mulai"}
          </button>
          <button type="button" onClick={pause} disabled={status !== "playing"}
            className="rounded-lg border border-white/15 disabled:opacity-40 px-4 py-2.5 text-sm font-medium text-white/85 hover:border-white/30 transition-colors">⏸ Pause</button>
          <button type="button" onClick={reset} disabled={t === 0 && status === "idle"}
            className="rounded-lg border border-white/15 disabled:opacity-40 px-4 py-2.5 text-sm font-medium text-white/85 hover:border-white/30 transition-colors">↻ Reset</button>
          <span className="text-white/30 text-xs ml-auto">🔓 Eksplorasi bebas -- atur sesukamu</span>
        </div>
      </div>

      {/* Grafik v-t */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <h4 className="font-semibold text-white mb-1">Grafik Kecepatan–Waktu</h4>
        <p className="text-white/50 text-xs mb-2">Kemiringan garis ini = percepatannya. Makin curam, makin besar percepatannya.</p>
        <div ref={graphRef} className="rounded-lg bg-[#070a18]/70 border border-white/10 overflow-hidden">
          <svg viewBox={`0 0 ${GW} ${GH}`} className="block w-full h-auto" role="img" aria-label="Grafik kecepatan terhadap waktu">
            {[0, 0.5, 1].map((f) => (
              <line key={f} x1={gPadL} x2={GW - gPadR} y1={gPadT + gh * (1 - f)} y2={gPadT + gh * (1 - f)} stroke="rgba(150,165,215,0.1)" />
            ))}
            <line x1={gPadL} x2={GW - gPadR} y1={gyV0line} y2={gyV0line} stroke="rgba(170,180,216,0.35)" strokeDasharray="3 3" />
            <text x={gPadL - 5} y={gyV0line + 3} fontSize="8.5" fill={COLOR.muted} textAnchor="end">0</text>
            <text x={GW - gPadR} y={GH - 4} fontSize="9" fill={COLOR.muted} textAnchor="end">t (s)</text>
            <line x1={gx(0)} y1={gyV(vEnd0)} x2={gx(T_MAX)} y2={gyV(vEnd1)} stroke={COLOR.cyan} strokeWidth="2.2" strokeLinecap="round" />
            <circle cx={gx(t)} cy={gyV(v)} r="4.5" fill="#fff" stroke={COLOR.cyan} strokeWidth="2" />
            <line x1={gx(t)} x2={gx(t)} y1={gPadT} y2={gPadT + gh} stroke="rgba(34,211,238,0.22)" strokeDasharray="2 4" />
          </svg>
        </div>
      </div>

      {/* Grafik a-t */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <h4 className="font-semibold text-white mb-1">Grafik Percepatan–Waktu</h4>
        <p className="text-white/50 text-xs mb-2">Percepatannya konstan, jadi garisnya datar sepanjang waktu.</p>
        <div className="rounded-lg bg-[#070a18]/70 border border-white/10 overflow-hidden">
          <svg viewBox={`0 0 ${GW} 64`} className="block w-full h-auto" role="img" aria-label="Grafik percepatan terhadap waktu, berupa garis datar">
            <line x1={gPadL} x2={GW - gPadR} y1={32} y2={32} stroke="rgba(170,180,216,0.35)" strokeDasharray="3 3" />
            <text x={gPadL - 5} y={35} fontSize="8.5" fill={COLOR.muted} textAnchor="end">0</text>
            <line x1={gPadL} x2={GW - gPadR} y1={32 - a * 6} y2={32 - a * 6} stroke={COLOR.purple} strokeWidth="2.4" strokeLinecap="round" />
            <circle cx={gx(t)} cy={32 - a * 6} r="4" fill="#fff" stroke={COLOR.purple} strokeWidth="2" />
          </svg>
        </div>
      </div>

      {/* Miskonsepsi: percepatan ≠ "makin cepat" */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <h4 className="font-semibold text-white mb-2">Perhatikan!</h4>
        <div className="grid sm:grid-cols-2 gap-3">
          <div className={`rounded-lg p-3 border ${sameDir ? "border-cyan-400/50 bg-cyan-500/10" : "border-white/10 bg-white/[0.03]"}`}>
            <p className="text-white/70 text-xs mb-1">v → dan a → (searah)</p>
            <p className="text-white font-medium text-sm">Benda semakin cepat</p>
          </div>
          <div className={`rounded-lg p-3 border ${oppDir ? "border-amber-300/50 bg-amber-400/10" : "border-white/10 bg-white/[0.03]"}`}>
            <p className="text-white/70 text-xs mb-1">v → dan a ← (berlawanan)</p>
            <p className="text-white font-medium text-sm">Benda melambat</p>
          </div>
        </div>
        <p className="text-white/60 text-sm mt-3">Percepatan bukan sekadar “membuat benda semakin cepat”. <b className="text-white">Percepatan adalah perubahan kecepatan</b> -- bisa membuat benda lebih cepat, lebih lambat, atau berbalik arah.</p>
      </div>

      {/* 3 eksperimen terbimbing */}
      <div className="space-y-3">
        <p className="text-white/45 text-xs uppercase tracking-wide">Coba Amati</p>
        {EXPERIMENTS.map((exp) => {
          const isOpen = openExp === exp.id
          const isReveal = !!revealed[exp.id]
          return (
            <div key={exp.id} className={`rounded-xl border p-4 transition-colors ${isOpen ? "border-violet-400/40 bg-violet-500/[0.05]" : "border-white/10 bg-white/5"}`}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h4 className="font-semibold text-white text-sm">{exp.title}</h4>
                  <p className="text-white/60 text-sm mt-1">{exp.instruksi}</p>
                </div>
                <button type="button" onClick={() => applyExperiment(exp)}
                  className="shrink-0 rounded-lg border border-white/15 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white/80 hover:border-violet-400/50 transition-colors">
                  Terapkan
                </button>
              </div>
              {isOpen && exp.showTable && (
                <div className="mt-3 overflow-x-auto">
                  <table className="text-xs text-white/70 border-collapse">
                    <thead><tr>{[0, 1, 2, 3, 4].map((tt) => <th key={tt} className="px-2.5 py-1 border-b border-white/10 font-medium">{tt} s</th>)}</tr></thead>
                    <tbody><tr>{[0, 1, 2, 3, 4].map((tt) => <td key={tt} className="px-2.5 py-1 text-center text-cyan-200 font-mono">{fmt1(velAt(exp.v0, exp.a, tt))}</td>)}</tr></tbody>
                  </table>
                </div>
              )}
              {isOpen && (
                <div className="mt-3">
                  <p className="text-white font-medium text-sm">{exp.tanya}</p>
                  {!isReveal ? (
                    <button type="button" onClick={() => setRevealed((r) => ({ ...r, [exp.id]: true }))}
                      className="mt-2 rounded-lg border border-white/15 px-3 py-1.5 text-xs font-medium text-white/75 hover:border-violet-400/50 transition-colors">
                      Lihat jawaban
                    </button>
                  ) : (
                    <p className="mt-2 text-sm rounded-lg px-3.5 py-2.5 border border-cyan-400/30 bg-cyan-500/10 text-cyan-100">
                      <b>{exp.jawaban}.</b> {exp.feedback}
                    </p>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Mini challenge x3 -- reaktif dari slider saat ini */}
      <div className="grid sm:grid-cols-3 gap-3">
        <div className={`rounded-xl border p-3.5 transition-colors ${ch1Done ? "border-cyan-400/60 bg-cyan-500/10" : "border-white/10 bg-white/5"}`}>
          <h4 className="font-semibold text-white text-xs mb-1">🎯 Buat Benda Makin Cepat</h4>
          <p className="text-white/55 text-xs">Atur percepatan lebih dari 0.</p>
          {ch1Done && <p className="mt-1.5 text-xs font-medium text-cyan-100">🎯 Benar! Kecepatan bertambah terhadap waktu.</p>}
        </div>
        <div className={`rounded-xl border p-3.5 transition-colors ${ch2Done ? "border-violet-400/60 bg-violet-500/10" : "border-white/10 bg-white/5"}`}>
          <h4 className="font-semibold text-white text-xs mb-1">🎯 Buat Kecepatan Konstan</h4>
          <p className="text-white/55 text-xs">Atur percepatan jadi 0.</p>
          {ch2Done && <p className="mt-1.5 text-xs font-medium text-violet-200">Tepat! Tidak ada perubahan kecepatan.</p>}
        </div>
        <div className={`rounded-xl border p-3.5 transition-colors ${ch3Done ? "border-cyan-400/60 bg-cyan-500/10" : "border-white/10 bg-white/5"}`}>
          <h4 className="font-semibold text-white text-xs mb-1">🎯 Buat Benda Berhenti</h4>
          <p className="text-white/55 text-xs">Mulai dari v₀ = 8 m/s, pakai percepatan negatif sampai berhenti.</p>
          {ch3Done && <p className="mt-1.5 text-xs font-medium text-cyan-100">🎯 Berhasil! Bendanya berhenti di t ≈ {fmt1(ch3TStop)} s.</p>}
        </div>
      </div>

      {/* Rumus -- dikunci sampai simulasi pernah dijalankan sampai selesai */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <h4 className="font-semibold text-white mb-2">Rumus</h4>
        {!ran ? (
          <p className="text-white/55 text-sm">Coba amati dulu lewat simulasinya. Jalankan sampai selesai, baru rumusnya muncul di sini.</p>
        ) : (
          <div className="space-y-2.5">
            <p className="text-white font-semibold text-base">a = Δv / Δt = (v<sub>t</sub> − v₀) / t</p>
            <p className="text-white/45 text-xs">Ini cuma cara menuliskan apa yang baru kamu amati: seberapa besar kecepatan berubah, dibagi lama waktunya.</p>
            <div className="pt-2 border-t border-white/10 text-white/55 text-xs space-y-1">
              <p>v<sub>t</sub> = v₀ + a·t &nbsp;→&nbsp; {fmt1(v0)} {sgn1(a).startsWith("+") ? "+" : ""}{fmt1(a)}×{fmt1(t)} = {sgn1(v)} m/s</p>
              <p>x = x₀ + v₀·t + ½·a·t² &nbsp;→&nbsp; {sgn1(x)} m</p>
            </div>
          </div>
        )}
      </div>

      <p className="text-white/45 text-sm italic">Percepatan tidak selalu berarti semakin cepat -- arah juga penting. Kalau arah percepatan berlawanan dengan arah kecepatan, benda bisa melambat.</p>
    </div>
  )
}

/* ---------------------------- sub-komponen kecil ---------------------------- */

function StatBox({ label, value, unit, accent }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-center">
      <p className="text-white/45 text-[11px] mb-1">{label}</p>
      <p className={`font-bold text-lg sm:text-xl ${accent}`}>
        {value}<span className="text-sm font-normal text-white/40 ml-1">{unit}</span>
      </p>
    </div>
  )
}
