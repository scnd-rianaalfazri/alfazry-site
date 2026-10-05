import { useState, useRef, useEffect, useMemo, useLayoutEffect } from "react"

// ============================================================
// InstantSpeedMeter
// ------------------------------------------------------------
// Simulasi interaktif untuk materi "Kelajuan & Kecepatan Sesaat".
// Berbeda dari SpeedControl (kelajuan konstan), di sini kelajuan
// benda BERUBAH dari waktu ke waktu lewat beberapa preset gerak.
// Insight utama: speed meter menunjukkan kondisi gerak PADA SAAT
// ITU SAJA, bukan rata-rata seluruh perjalanan.
//
// Benda cuma bergerak ke kanan di simulator ini (lebih fokus ke
// konsep "sesaat"), tapi data kecepatan tetap disiapkan bertanda
// supaya strukturnya siap kalau nanti mau dikembangkan ke arah
// negatif. Tidak ada karakter manusia, cuma orb kecil bercahaya.
// ============================================================

const TRACK_MIN = 0
const TRACK_MAX = 20 // meter
const EPS = 1e-9

const COLOR = {
  purple: "#a855f7",
  cyan: "#22d3ee",
  muted: "#9aa4c7",
}

// Preset gerak: kelajuan disampel tiap 1 sekon, lalu posisi diturunkan
// dengan asumsi kelajuan berubah LINEAR di antara dua sampel (artinya
// percepatan konstan per-segmen) -- cukup realistis dan gampang dihitung
// tanpa kalkulus eksplisit.
const PRESETS = [
  { id: "konstan", name: "Kelajuan Konstan", speeds: [4, 4, 4, 4, 4], desc: "Kelajuannya nggak berubah sama sekali." },
  { id: "cepat", name: "Makin Cepat", speeds: [0, 2, 4, 6, 8], desc: "Benda terus dipercepat." },
  { id: "lambat", name: "Makin Lambat", speeds: [8, 6, 4, 2, 0], desc: "Benda terus diperlambat sampai diam." },
  { id: "naikturun", name: "Naik & Turun", speeds: [0, 1, 3, 5, 3, 1, 0], desc: "Dipercepat dulu, lalu diperlambat lagi." },
]

const clamp = (v, a, b) => Math.min(b, Math.max(a, v))
const fmt1 = (n) => (Math.abs(n) < 0.05 ? "0,0" : n.toFixed(1).replace(".", ","))
const sgn1 = (n) => (n > 0.05 ? "+" : n < -0.05 ? "" : "") + fmt1(n)

/* ---------------------------- model gerak (pure) ---------------------------- */
// x(t) diturunkan dari v(t) secara analitik per-segmen (seperti GLBB):
// x = x0 + v0*frac + 1/2*(v1-v0)*frac^2, dengan frac = sisa waktu dalam
// segmen 1 detik itu. Ini menjamin posisi, kelajuan sesaat, dan grafik
// semuanya konsisten dari SATU sumber data (array `speeds`).
function buildProfile(speeds) {
  const T = speeds.length - 1
  const xSamples = [0]
  for (let i = 0; i < T; i++) xSamples.push(xSamples[i] + 0.5 * (speeds[i] + speeds[i + 1]))
  return { speeds, xSamples, T, L: xSamples[T] }
}
function segAt(profile, t) {
  const tc = clamp(t, 0, profile.T)
  const i = Math.min(Math.floor(tc), profile.T - 1)
  return { i, frac: tc - i }
}
function speedAt(profile, t) {
  const { i, frac } = segAt(profile, t)
  const { speeds } = profile
  return speeds[i] + (speeds[i + 1] - speeds[i]) * frac
}
function posAt(profile, t) {
  const { i, frac } = segAt(profile, t)
  const { speeds, xSamples } = profile
  const v0 = speeds[i], v1 = speeds[i + 1]
  return xSamples[i] + v0 * frac + 0.5 * (v1 - v0) * frac * frac
}
function fastestT(profile) {
  let best = 0, bestV = -1
  for (let k = 0; k <= 200; k++) {
    const t = (k / 200) * profile.T
    const v = speedAt(profile, t)
    if (v > bestV) { bestV = v; best = t }
  }
  return { t: best, v: bestV }
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

/* ============================================================ */

export default function InstantSpeedMeter() {
  const [presetId, setPresetId] = useState("cepat")
  const [t, setT] = useState(0)
  const [status, setStatus] = useState("idle") // idle | playing | paused | done
  const [ran, setRan] = useState(false)
  const [showCompare, setShowCompare] = useState(false)
  const [quizAnswer, setQuizAnswer] = useState(null)

  const preset = PRESETS.find((p) => p.id === presetId)
  const profile = useMemo(() => buildProfile(preset.speeds), [preset])
  const x = useMemo(() => posAt(profile, t), [profile, t])
  const v = useMemo(() => speedAt(profile, t), [profile, t])
  const avgSpeed = profile.T > 0 ? profile.L / profile.T : 0
  const fastest = useMemo(() => fastestT(profile), [profile])

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
        if (next >= profile.T) { setStatus("done"); setRan(true); return profile.T }
        return next
      })
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => { alive = false; cancelAnimationFrame(rafRef.current) }
  }, [status, profile])

  /* -------- kontrol -------- */
  const play = () => {
    if (status === "done" || t >= profile.T - EPS) setT(0)
    setStatus("playing")
  }
  const pause = () => { if (status === "playing") setStatus("paused") }
  const reset = () => { setT(0); setStatus("idle") }
  const scrub = (val) => {
    setT(val)
    setStatus(val >= profile.T - EPS ? "done" : val <= EPS ? "idle" : "paused")
    if (val >= profile.T - EPS) setRan(true)
  }
  const choosePreset = (p) => {
    setPresetId(p.id)
    setT(0)
    setStatus("playing")
    setQuizAnswer(null)
  }

  /* -------- tantangan (reaktif dari posisi slider waktu) -------- */
  const challengeFastestDone = Math.abs(t - fastest.t) < 0.18 && fastest.v > 0.3
  const challengeStillDone = v < 0.15

  const quizCorrect = preset.id === "konstan" ? "A" : "B" // jujur ikut kondisi preset yang dipilih

  /* ---------------------------- layout track SVG ---------------------------- */
  const [stageRef, W] = useMeasuredWidth(260)
  const small = W < 420
  const padL = small ? 22 : 36
  const H = small ? 70 : 84
  const axisY = H / 2 + 4
  const u = (W - 2 * padL) / (TRACK_MAX - TRACK_MIN)
  const X = (val) => padL + (val - TRACK_MIN) * u
  const arrowLen = v <= EPS ? 0 : clamp(14 + v * 3, 14, 44)

  /* ---------------------------- layout grafik posisi-waktu ---------------------------- */
  const [graphRef, GW] = useMeasuredWidth(260)
  const GH = small ? 150 : 180
  const gPadL = 30, gPadB = 22, gPadT = 10, gPadR = 10
  const gw = GW - gPadL - gPadR, gh = GH - gPadT - gPadB
  const gx = (tv) => gPadL + (tv / Math.max(profile.T, 0.001)) * gw
  const gy = (xv) => gPadT + gh - (xv / TRACK_MAX) * gh

  const graphPoints = useMemo(() => {
    const n = 48
    const pts = []
    for (let k = 0; k <= n; k++) {
      const tv = (k / n) * profile.T
      pts.push(`${gx(tv).toFixed(1)},${gy(posAt(profile, tv)).toFixed(1)}`)
    }
    return pts.join(" ")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile, GW, GH])

  // garis singgung pendek di titik (t, x) sekarang, panjangnya cuma visual
  // bantu arah -- dibuat dari ekstrapolasi linear pakai kelajuan sesaat.
  const tangent = useMemo(() => {
    const half = Math.max(0.35, profile.T * 0.08)
    const t0 = clamp(t - half, 0, profile.T), t1 = clamp(t + half, 0, profile.T)
    const x0 = x - v * (t - t0), x1 = x + v * (t1 - t)
    return { x1p: gx(t0), y1p: gy(clamp(x0, 0, TRACK_MAX)), x2p: gx(t1), y2p: gy(clamp(x1, 0, TRACK_MAX)) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t, v, x, profile, GW, GH])

  return (
    <div className="space-y-5">
      {/* Header ringkas widget */}
      <div>
        <p className="font-mono text-[11px] uppercase tracking-wider text-cyan-300/70">Instant Speed Meter</p>
        <p className="text-white/60 text-sm mt-1">Geser waktu dan lihat seberapa cepat benda bergerak pada saat itu.</p>
      </div>

      {/* Pemilih mode gerak */}
      <div className="flex flex-wrap gap-2">
        {PRESETS.map((p) => (
          <button key={p.id} type="button" onClick={() => choosePreset(p)} aria-pressed={presetId === p.id}
            className={`rounded-lg border px-3.5 py-2 text-xs md:text-sm font-medium transition-colors ${
              presetId === p.id ? "border-violet-400 bg-violet-500/20 text-white" : "border-white/15 bg-white/[0.03] text-white/70 hover:border-violet-400/50"
            }`}>
            {p.name}
          </button>
        ))}
      </div>
      <p className="text-white/40 text-xs -mt-2">{preset.desc}</p>

      {/* ---------------- Lintasan ---------------- */}
      <div ref={stageRef} className="rounded-xl border border-violet-400/25 bg-gradient-to-b from-[#0b1024]/90 to-[#070a18]/95 overflow-hidden px-1 py-2">
        <svg viewBox={`0 0 ${W} ${H}`} className="block w-full h-auto" role="img"
          aria-label={`Lintasan dari 0 sampai 20 meter. Pada waktu ${fmt1(t)} sekon, posisi benda ${fmt1(x)} meter dan kelajuan sesaatnya ${fmt1(v)} meter per sekon.`}>
          <defs>
            <marker id="ismArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M0 0 L10 5 L0 10 Z" fill={COLOR.cyan} />
            </marker>
            <filter id="ismGlow" x="-40%" y="-80%" width="180%" height="260%">
              <feGaussianBlur stdDeviation="2.2" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>
          {Array.from({ length: (TRACK_MAX - TRACK_MIN) / 2 + 1 }, (_, i) => TRACK_MIN + i * 2).map((val) => (
            <g key={`t${val}`}>
              <line x1={X(val)} x2={X(val)} y1={axisY - 16} y2={axisY + 16} stroke="rgba(150,165,215,0.08)" />
              <text x={X(val)} y={axisY + 28} fontSize="10" fill={COLOR.muted} textAnchor="middle">{val}</text>
            </g>
          ))}
          <line x1={X(TRACK_MIN) - 6} x2={X(TRACK_MAX) + 6} y1={axisY} y2={axisY} stroke="#aab4d8" strokeWidth="1.4" />
          <text x={W - padL} y={axisY - 10} fontSize="10" fill={COLOR.muted} textAnchor="end">meter</text>

          {v > EPS && (
            <line x1={X(x) + 12} y1={axisY} x2={X(x) + 12 + arrowLen} y2={axisY}
              stroke={COLOR.cyan} strokeWidth="2.6" strokeLinecap="round" markerEnd="url(#ismArrow)" filter="url(#ismGlow)" />
          )}
          <g transform={`translate(${X(x)} ${axisY})`}>
            <circle r="13" fill="rgba(168,85,247,0.28)" />
            <circle r="7" fill="none" stroke="#cfa8fc" strokeWidth="1.2" />
            <circle r="4" fill="#fff" />
          </g>
        </svg>
      </div>

      {/* Speed meter horizontal sederhana */}
      <div className="rounded-xl border border-cyan-400/30 bg-cyan-500/[0.05] p-4">
        <p className="text-cyan-300/80 text-[11px] uppercase tracking-wide text-center mb-1">Kelajuan Sesaat</p>
        <p className="text-4xl sm:text-5xl font-bold text-cyan-200 text-center">{fmt1(v)} <span className="text-base font-normal text-white/40">m/s</span></p>
        <div className="relative h-2.5 rounded-full bg-white/10 mt-3 overflow-hidden">
          <div className="h-full rounded-full bg-cyan-400 transition-[width] duration-75" style={{ width: `${clamp((v / 10) * 100, 0, 100)}%` }} />
        </div>
        <div className="flex justify-between text-[10px] text-white/35 mt-1">
          <span>0</span><span>10 m/s</span>
        </div>
      </div>

      {/* Time scrubber + kontrol */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <div className="flex justify-between items-baseline mb-1.5">
          <span className="text-white/70 text-sm font-medium">Waktu</span>
          <span className="font-mono text-white/70 text-sm">{fmt1(t)} s / {fmt1(profile.T)} s</span>
        </div>
        <input type="range" min={0} max={profile.T} step={0.05} value={t}
          onChange={(e) => scrub(Number(e.target.value))}
          aria-label="Geser untuk melihat kondisi benda pada waktu tertentu"
          className="w-full accent-violet-500" />
        <div className="flex flex-wrap items-center gap-2.5 mt-3">
          <button type="button" onClick={play} disabled={status === "playing"}
            className="rounded-lg bg-violet-600 hover:bg-violet-500 disabled:opacity-40 disabled:hover:bg-violet-600 border border-violet-400/50 px-4 py-2.5 text-sm font-semibold text-white transition-colors">
            ▶ {status === "paused" ? "Lanjut" : status === "done" ? "Ulangi" : "Mulai"}
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
      </div>

      {/* Keadaan benda saat ini -- data panel */}
      <div>
        <p className="text-white/45 text-xs uppercase tracking-wide mb-2">Keadaan benda saat ini</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
          <StatBox label="Waktu" value={fmt1(t)} unit="s" accent="text-white/85" />
          <StatBox label="Posisi" value={fmt1(x)} unit="m" accent="text-white/85" />
          <StatBox label="Kelajuan Sesaat" value={fmt1(v)} unit="m/s" accent="text-violet-300" />
          <StatBox label="Kecepatan Sesaat" value={v <= EPS ? "0,0" : sgn1(v)} unit="m/s" accent="text-cyan-300" />
        </div>
      </div>

      {/* Grafik posisi-waktu + garis singgung */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <h4 className="font-semibold text-white mb-1">Grafik Posisi–Waktu</h4>
        <p className="text-white/50 text-xs mb-2">Makin curam garisnya, makin besar kelajuan sesaatnya. Kalau datar, bendanya lagi diam.</p>
        <div ref={graphRef} className="rounded-lg bg-[#070a18]/70 border border-white/10 overflow-hidden">
          <svg viewBox={`0 0 ${GW} ${GH}`} className="block w-full h-auto" role="img" aria-label="Grafik posisi terhadap waktu, dengan penanda garis singgung di waktu yang sedang dipilih">
            {[0, 0.5, 1].map((f) => (
              <line key={f} x1={gPadL} x2={GW - gPadR} y1={gPadT + gh * (1 - f)} y2={gPadT + gh * (1 - f)} stroke="rgba(150,165,215,0.1)" />
            ))}
            <line x1={gPadL} x2={gPadL} y1={gPadT} y2={gPadT + gh} stroke="#aab4d8" strokeWidth="1" />
            <line x1={gPadL} x2={GW - gPadR} y1={gPadT + gh} y2={gPadT + gh} stroke="#aab4d8" strokeWidth="1" />
            <text x={gPadL - 6} y={gPadT + 4} fontSize="9" fill={COLOR.muted} textAnchor="end">x</text>
            <text x={GW - gPadR} y={GH - 4} fontSize="9" fill={COLOR.muted} textAnchor="end">t</text>
            <polyline points={graphPoints} fill="none" stroke={COLOR.purple} strokeWidth="2.2" strokeLinecap="round" />
            <line x1={tangent.x1p} y1={tangent.y1p} x2={tangent.x2p} y2={tangent.y2p} stroke={COLOR.cyan} strokeWidth="2.6" strokeLinecap="round" filter="url(#ismGlow)" />
            <circle cx={gx(t)} cy={gy(x)} r="4.5" fill="#fff" stroke={COLOR.cyan} strokeWidth="2" />
            <line x1={gx(t)} x2={gx(t)} y1={gPadT} y2={gPadT + gh} stroke="rgba(34,211,238,0.25)" strokeDasharray="2 4" />
          </svg>
        </div>
      </div>

      {/* Bandingkan rata-rata vs sesaat */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <button type="button" onClick={() => setShowCompare((v2) => !v2)}
          className="w-full flex items-center justify-between text-left">
          <h4 className="font-semibold text-white">Bandingkan Rata-rata vs Sesaat</h4>
          <span className="text-white/40 text-sm">{showCompare ? "Sembunyikan ▲" : "Lihat ▼"}</span>
        </button>
        {showCompare && (
          <div className="mt-3 grid sm:grid-cols-2 gap-3">
            <div className="rounded-lg bg-white/[0.04] border-l-4 border-violet-400 p-3.5">
              <p className="text-white/50 text-xs uppercase tracking-wide">Kecepatan rata-rata</p>
              <p className="text-white font-bold text-xl mt-1">{fmt1(avgSpeed)} m/s</p>
              <p className="text-white/40 text-xs mt-1">selama seluruh perjalanan ({fmt1(profile.T)} s)</p>
              <div className="h-2 rounded-full bg-violet-400/70 mt-2.5 w-full" />
            </div>
            <div className="rounded-lg bg-white/[0.04] border-l-4 border-cyan-400 p-3.5">
              <p className="text-white/50 text-xs uppercase tracking-wide">Kecepatan sesaat</p>
              <p className="text-white font-bold text-xl mt-1">{fmt1(v)} m/s <span className="text-white/40 text-sm font-normal">pada t = {fmt1(t)} s</span></p>
              <p className="text-white/40 text-xs mt-1">cuma pada satu saat ini</p>
              <div className="h-2 rounded-full bg-white/10 mt-2.5 w-full relative">
                <div className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-cyan-400" style={{ left: `calc(${(t / Math.max(profile.T, EPS)) * 100}% - 5px)` }} />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Tantangan -- reaktif langsung dari posisi slider waktu */}
      <div className="grid sm:grid-cols-2 gap-3">
        <div className={`rounded-xl border p-4 transition-colors ${challengeFastestDone ? "border-cyan-400/60 bg-cyan-500/10" : "border-white/10 bg-white/5"}`}>
          <h4 className="font-semibold text-white mb-1 text-sm">🎯 Temukan Saat Tercepat</h4>
          <p className="text-white/60 text-xs">Geser slider waktu. Cari saat kelajuannya paling besar.</p>
          {challengeFastestDone && (
            <p className="mt-2 text-xs font-medium text-cyan-100">🎯 Tepat! Di sekitar t = {fmt1(fastest.t)} s, kelajuannya paling besar ({fmt1(fastest.v)} m/s).</p>
          )}
        </div>
        <div className={`rounded-xl border p-4 transition-colors ${challengeStillDone ? "border-violet-400/60 bg-violet-500/10" : "border-white/10 bg-white/5"}`}>
          <h4 className="font-semibold text-white mb-1 text-sm">⏸️ Temukan Saat Diam</h4>
          <p className="text-white/60 text-xs">Cari saat kelajuannya 0 m/s.{preset.id === "konstan" ? " (Coba cek, apa di mode ini bisa?)" : ""}</p>
          {challengeStillDone && (
            <p className="mt-2 text-xs font-medium text-violet-200">Ketemu! Pada t = {fmt1(t)} s bendanya sedang tidak bergerak sama sekali.</p>
          )}
        </div>
      </div>

      {/* Coba Amati -- kuis singkat, jawaban benar ikut preset yang aktif */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <h4 className="font-semibold text-white mb-1">Coba Amati</h4>
        <p className="text-white/70 text-sm mb-3">Jalankan benda dari awal sampai akhir pada mode <b className="text-white">{preset.name}</b>. Perhatikan speed meter-nya.</p>
        <p className="text-white font-medium text-sm mb-2.5">Apakah kelajuan benda selalu sama sepanjang perjalanan ini?</p>
        <div className="grid grid-cols-2 gap-2 max-w-xs">
          {[["A", "Ya"], ["B", "Tidak"]].map(([id, label]) => (
            <button key={id} type="button" onClick={() => setQuizAnswer(id)} aria-pressed={quizAnswer === id}
              className={`rounded-lg border px-3 py-2 text-sm transition-colors ${
                quizAnswer === id
                  ? id === quizCorrect ? "border-cyan-400 bg-cyan-500/15 text-white font-medium" : "border-amber-300/60 bg-amber-400/10 text-white font-medium"
                  : "border-white/12 bg-white/[0.03] text-white/75 hover:border-white/25"
              }`}>
              <b className="text-white/50 font-mono mr-1">{id}.</b>{label}
            </button>
          ))}
        </div>
        {quizAnswer && (
          <p className={`mt-2.5 text-sm rounded-lg px-3.5 py-2.5 border ${quizAnswer === quizCorrect ? "bg-cyan-500/10 text-cyan-100 border-cyan-400/30" : "bg-white/5 text-white/70 border-white/10"}`}>
            {quizAnswer === quizCorrect
              ? (quizCorrect === "A"
                ? "Benar! Pada mode Kelajuan Konstan, speed meter-nya memang tidak pernah berubah."
                : "Benar. Nilai kelajuan berubah dari waktu ke waktu. Pada setiap saat tertentu, kita bisa mengamati kelajuan sesaat benda lewat speed meter.")
              : "Coba lihat lagi speed meter-nya sambil geser slider waktu -- apakah angkanya tetap atau berubah?"}
          </p>
        )}
      </div>

      {/* Rumus, dikunci sampai simulasi pernah dijalankan sampai selesai */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <h4 className="font-semibold text-white mb-2">Secara Matematis</h4>
        {!ran ? (
          <p className="text-white/55 text-sm">Coba amati dulu lewat simulasinya. Jalankan sampai selesai, baru penjelasan matematisnya muncul di sini.</p>
        ) : (
          <div>
            <p className="text-white/50 text-sm mb-2">Kecepatan sesaat diperoleh ketika selang waktu dibuat sangat kecil:</p>
            <p className="text-white font-semibold text-base">v = lim (Δt → 0) Δx/Δt</p>
            <p className="text-white/40 text-xs mt-2">Ini cuma cara menuliskan apa yang baru kamu amati -- garis singgung di grafik tadi.</p>
          </div>
        )}
      </div>

      {/* Teaser ke materi berikutnya */}
      <p className="text-white/45 text-sm italic">Kalau kelajuan bisa berubah dari waktu ke waktu begini, pertanyaan berikutnya: seberapa cepat perubahan itu terjadi?</p>
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
