import { useState, useRef, useEffect, useMemo, useLayoutEffect } from "react"

// ============================================================
// PathExplorer
// ------------------------------------------------------------
// Simulasi interaktif kedua untuk materi "Jarak & Perpindahan",
// berdampingan dengan DistanceDisplacementExplorer (yang lebih
// bebas dengan waypoint). PathExplorer ini berbasis SKENARIO +
// TANTANGAN MINI + kuis konsep, jadi lebih terarah.
//
// Tidak ada karakter manusia. Benda cuma orb kecil bercahaya.
// Warna jejak mengikuti konvensi yang sudah dipakai di halaman
// ini: merah = melangkah ke kanan, hijau = melangkah ke kiri,
// dan garis perpindahan selalu titik-titik (bukan garis penuh)
// supaya tidak kelihatan seperti jalur yang benar-benar dilewati.
// ============================================================

const TRACK_MIN = 0
const TRACK_MAX = 10 // meter
const V = 4 // laju animasi, tetap (m/s)
const EPS = 1e-9
const TOL = 1e-6

const COLOR = {
  purple: "#a855f7",
  cyan: "#22d3ee",
  cyanSoft: "rgba(34,211,238,0.45)",
  muted: "#9aa4c7",
  right: "#f87171", // melangkah ke kanan
  left: "#4ade80",  // melangkah ke kiri
}
const segColor = (dir) => (dir > 0 ? COLOR.right : COLOR.left)

const SCENARIOS = [
  { id: "satu", name: "Satu Arah", pts: [1, 7], editable: false, desc: "Benda jalan lurus dari A ke B." },
  { id: "pergi", name: "Pergi & Kembali", pts: [2, 8, 5], editable: false, desc: "Benda pergi jauh, lalu balik sebagian." },
  { id: "eksplorasi", name: "Eksplorasi Sendiri", pts: [2, 8, 5], editable: true, desc: "Atur sendiri titiknya pakai slider." },
]

const clamp = (v, a, b) => Math.min(b, Math.max(a, v))
const fmt = (n) => {
  if (Math.abs(n) < 0.05) return "0"
  const r = Math.round(n)
  return Math.abs(n - r) < 0.05 ? String(r) : n.toFixed(1).replace(".", ",")
}
const sgn = (n) => (n > 0.0005 ? "+" : n < -0.0005 ? "" : "") + fmt(n)

/* ---------------------------- model fisika (pure) ---------------------------- */

function buildModel(pts) {
  const segs = []
  let cum = 0
  for (let i = 0; i < pts.length - 1; i++) {
    const dx = pts[i + 1] - pts[i]
    const len = Math.abs(dx)
    if (len > 0) segs.push({ i, x1: pts[i], x2: pts[i + 1], len, start: cum, dir: Math.sign(dx) })
    cum += len
  }
  return { pts, segs, L: cum, T: cum / V, x0: pts[0], x1: pts[pts.length - 1] }
}
function posAt(model, s) {
  if (model.L === 0) return model.x0
  const c = clamp(s, 0, model.L)
  for (const g of model.segs) if (c <= g.start + g.len + EPS) return g.x1 + g.dir * (c - g.start)
  return model.x1
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

export default function PathExplorer() {
  const [scenarioId, setScenarioId] = useState("satu")
  const [pts, setPts] = useState(SCENARIOS[0].pts)
  const [s, setS] = useState(0)
  const [status, setStatus] = useState("idle") // idle | playing | paused | done
  const [ran, setRan] = useState(false)
  const [missionOpen, setMissionOpen] = useState(false)
  const [quiz1, setQuiz1] = useState(null)
  const [quiz2, setQuiz2] = useState(null)

  const scenario = SCENARIOS.find((sc) => sc.id === scenarioId)
  const model = useMemo(() => buildModel(pts), [pts])
  const x = useMemo(() => posAt(model, s), [model, s])
  const displacement = x - model.x0
  const finalDisplacement = model.x1 - model.x0

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
      setS((prev) => {
        const next = prev + V * dt
        if (next >= model.L) { setStatus("done"); setRan(true); return model.L }
        return next
      })
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => { alive = false; cancelAnimationFrame(rafRef.current) }
  }, [status, model])

  /* -------- kontrol -------- */
  const play = () => {
    if (model.L === 0) { setS(0); setStatus("done"); return }
    if (status === "done" || s >= model.L - EPS) setS(0)
    setStatus("playing")
  }
  const pause = () => { if (status === "playing") setStatus("paused") }
  const reset = () => { setS(0); setStatus("idle") }
  const scrub = (frac) => {
    const next = frac * model.L
    setS(next)
    setStatus(next >= model.L - EPS ? "done" : next <= EPS ? "idle" : "paused")
    if (next >= model.L - EPS && model.L > 0) setRan(true)
  }

  const chooseScenario = (sc) => {
    setScenarioId(sc.id)
    setPts(sc.pts.slice())
    setS(0)
    setStatus(buildModel(sc.pts).L === 0 ? "done" : "playing")
  }
  const setSliderPoint = (i, v) => {
    const next = pts.slice()
    next[i] = clamp(Math.round(v), TRACK_MIN, TRACK_MAX)
    setPts(next)
    const m = buildModel(next)
    setS(m.L)
    setStatus("done")
    if (m.L > 0) setRan(true)
  }

  /* -------- tantangan (dicek langsung dari konfigurasi titiknya) -------- */
  const challenge1Done = model.L > 0 && Math.abs(model.L - Math.abs(finalDisplacement)) < TOL
  const challenge2Done = model.L > 0 && Math.abs(finalDisplacement) < 0.0005

  /* ---------------------------- layout SVG ---------------------------- */
  const [stageRef, W] = useMeasuredWidth(260)
  const small = W < 420
  const padL = small ? 22 : 38
  const hmax = small ? 40 : 56
  const tagH = small ? 20 : 24
  const tagsY = 6 + tagH
  const axisY = tagsY + hmax + 14
  const laneY = axisY + hmax + 40
  const H = laneY + 34
  const u = (W - 2 * padL) / (TRACK_MAX - TRACK_MIN)
  const X = (v) => padL + (v - TRACK_MIN) * u

  function arcGeom(g) {
    const x1 = X(g.x1), x2 = X(g.x2)
    const rx = Math.abs(x2 - x1) / 2
    const ry = Math.min(hmax, 10 + g.len * u * 0.28)
    return { d: `M${x1} ${axisY} A${rx} ${ry} 0 0 1 ${x2} ${axisY}` }
  }

  const pointLabels = pts.length === 2 ? ["A — Awal", "B — Akhir"] : ["A — Awal", "Tujuan", "B — Akhir"]

  return (
    <div className="space-y-5">
      {/* Header ringkas widget */}
      <div>
        <p className="font-mono text-[11px] uppercase tracking-wider text-cyan-300/70">Path Explorer</p>
        <p className="text-white/60 text-sm mt-1">Jelajahi lintasan dan temukan sendiri bedanya jarak dan perpindahan.</p>
      </div>

      {/* Pemilih skenario */}
      <div className="flex flex-wrap gap-2">
        {SCENARIOS.map((sc) => (
          <button
            key={sc.id}
            type="button"
            onClick={() => chooseScenario(sc)}
            aria-pressed={scenarioId === sc.id}
            className={`rounded-lg border px-3.5 py-2 text-xs md:text-sm font-medium transition-colors ${
              scenarioId === sc.id ? "border-violet-400 bg-violet-500/20 text-white" : "border-white/15 bg-white/[0.03] text-white/70 hover:border-violet-400/50"
            }`}
          >
            {sc.name}
          </button>
        ))}
      </div>
      <p className="text-white/40 text-xs -mt-2">{scenario.desc}</p>

      {/* Slider posisi kalau mode Eksplorasi Sendiri */}
      {scenario.editable && (
        <div className="rounded-xl border border-white/10 bg-white/5 p-4 grid sm:grid-cols-3 gap-4">
          {["Posisi awal", "Posisi tujuan", "Posisi akhir"].map((label, i) => (
            <div key={i} className="flex flex-col gap-1.5">
              <div className="flex justify-between text-xs text-white/50">
                <span>{label}</span>
                <span className="font-mono text-white/70">{pts[i]} m</span>
              </div>
              <input type="range" min={TRACK_MIN} max={TRACK_MAX} step={1} value={pts[i]}
                onChange={(e) => setSliderPoint(i, Number(e.target.value))}
                aria-label={label} className="w-full accent-violet-500" />
            </div>
          ))}
        </div>
      )}

      {/* ---------------- Panggung: lintasan horizontal ---------------- */}
      <div ref={stageRef} className="rounded-xl border border-violet-400/25 bg-gradient-to-b from-[#0b1024]/90 to-[#070a18]/95 overflow-hidden px-1 py-2">
        <svg viewBox={`0 0 ${W} ${H}`} className="block w-full h-auto" role="img"
          aria-label={`Lintasan dari 0 sampai 10 meter. Posisi awal ${fmt(model.x0)} meter, posisi sekarang ${fmt(x)} meter, posisi akhir ${fmt(model.x1)} meter.`}>
          <defs>
            <marker id="peArrowRight" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M0 1 L9 5 L0 9 Z" fill={COLOR.right} fillOpacity="0.85" />
            </marker>
            <marker id="peArrowLeft" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M0 1 L9 5 L0 9 Z" fill={COLOR.left} fillOpacity="0.85" />
            </marker>
            <marker id="peArrowC" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto">
              <path d="M0 0 L10 5 L0 10 Z" fill={COLOR.cyan} />
            </marker>
            <filter id="peGlow" x="-20%" y="-40%" width="140%" height="180%">
              <feGaussianBlur stdDeviation="2.6" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* grid tipis + skala meter */}
          {Array.from({ length: TRACK_MAX - TRACK_MIN + 1 }, (_, i) => TRACK_MIN + i).map((v) => (
            <line key={`g${v}`} x1={X(v)} x2={X(v)} y1={tagsY} y2={laneY + 16} stroke="rgba(150,165,215,0.08)" />
          ))}
          <line x1={X(TRACK_MIN) - 8} x2={X(TRACK_MAX) + 8} y1={axisY} y2={axisY} stroke="#aab4d8" strokeWidth="1.5" />
          {Array.from({ length: TRACK_MAX - TRACK_MIN + 1 }, (_, i) => TRACK_MIN + i).map((v) => (
            <g key={`t${v}`}>
              <line x1={X(v)} x2={X(v)} y1={axisY - 5} y2={axisY + 5} stroke="#aab4d8" />
              {v % 2 === 0 && <text x={X(v)} y={axisY + 19} fontSize="10.5" fill={COLOR.muted} textAnchor="middle">{v}</text>}
            </g>
          ))}
          <text x={W - padL} y={axisY - 10} fontSize="10.5" fill={COLOR.muted} textAnchor="end">meter</text>

          {/* pratinjau lintasan: merah = akan ke kanan, hijau = akan ke kiri (titik-titik) */}
          <g opacity="0.9">
            {model.segs.map((g) => (
              <path key={`ghost${g.i}`} d={arcGeom(g).d} fill="none" stroke={segColor(g.dir)} strokeOpacity="0.5" strokeWidth="1.8" strokeLinecap="round" strokeDasharray="0.1 7"
                markerEnd={g.dir > 0 ? "url(#peArrowRight)" : "url(#peArrowLeft)"} />
            ))}
          </g>

          {/* jejak yang sudah ditempuh (titik-titik juga, diungkap via clip-path
              supaya tidak kelihatan seperti garis solid yang benar-benar dilewati) */}
          {model.segs.map((g) => {
            const p = clamp((s - g.start) / g.len, 0, 1)
            if (p < 0.002) return null
            const a = arcGeom(g)
            const revealX = X(g.x1) + (X(g.x2) - X(g.x1)) * p
            const cx1 = Math.min(X(g.x1), revealX), cx2 = Math.max(X(g.x1), revealX)
            return (
              <g key={`trail${g.i}`}>
                <clipPath id={`peClip${g.i}`}>
                  <rect x={cx1 - 2} y={0} width={Math.max(0, cx2 - cx1 + 4)} height={H} />
                </clipPath>
                <path d={a.d} fill="none" stroke={segColor(g.dir)} strokeWidth="4" strokeLinecap="round"
                  strokeDasharray="0.1 9" filter="url(#peGlow)" clipPath={`url(#peClip${g.i})`} />
              </g>
            )
          })}

          {/* lajur perpindahan: panah titik-titik langsung dari posisi awal ke posisi sekarang */}
          <g opacity="0.85">
            <line x1={X(TRACK_MIN)} x2={X(TRACK_MAX)} y1={laneY} y2={laneY} stroke={COLOR.cyanSoft} strokeDasharray="2 5" />
            {Math.abs(x - model.x0) > 0.03 && (
              <line x1={X(model.x0)} y1={laneY} x2={X(x) - Math.sign(x - model.x0) * 0.15} y2={laneY}
                stroke={COLOR.cyan} strokeWidth="3.4" strokeLinecap="round" strokeDasharray="0.1 8" markerEnd="url(#peArrowC)" filter="url(#peGlow)" />
            )}
          </g>

          {/* label titik: A / Tujuan / B */}
          {pts.map((v, i) => (
            <g key={`tag${i}`}>
              <line x1={X(v)} x2={X(v)} y1={tagsY + tagH - 4} y2={axisY - 10} stroke="rgba(207,168,252,0.3)" strokeDasharray="2 4" />
              <rect x={clamp(X(v) - 30, 2, W - 62)} y={6} width="60" height={tagH} rx="6" fill="#0f1631" stroke={i === 0 || i === pts.length - 1 ? COLOR.cyan : COLOR.purple} />
              <text x={clamp(X(v), 32, W - 32)} y={6 + tagH / 2 + 4} fontSize="10.5" fill="#fff" textAnchor="middle">{pointLabels[i]}</text>
            </g>
          ))}

          {/* orb benda */}
          <g transform={`translate(${X(x)} ${axisY})`}>
            <circle r="15" fill="rgba(168,85,247,0.28)" />
            <circle r="8" fill="none" stroke="#cfa8fc" strokeWidth="1.3" />
            <circle r="4.5" fill="#fff" />
          </g>
        </svg>
      </div>

      {/* legenda */}
      <ul className="flex flex-wrap gap-x-5 gap-y-2 text-xs md:text-sm text-white/55">
        <li className="flex items-center gap-1.5">
          <span className="inline-block w-3 h-3 rounded-full" style={{ background: COLOR.right }} />
          Melangkah ke kanan
        </li>
        <li className="flex items-center gap-1.5">
          <span className="inline-block w-3 h-3 rounded-full" style={{ background: COLOR.left }} />
          Melangkah ke kiri
        </li>
        <li className="flex items-center gap-1.5">
          <span className="inline-block w-3 h-3 rounded-full bg-cyan-400" />
          Perpindahan (titik-titik, bukan jalur beneran)
        </li>
      </ul>

      {/* Kontrol */}
      <div className="flex flex-wrap items-center gap-2.5">
        <button type="button" onClick={play} disabled={status === "playing"}
          className="rounded-lg bg-violet-600 hover:bg-violet-500 disabled:opacity-40 disabled:hover:bg-violet-600 border border-violet-400/50 px-4 py-2.5 text-sm font-semibold text-white transition-colors">
          {status === "paused" ? "▶ Lanjut" : status === "done" && model.L > 0 ? "▶ Ulangi" : "▶ Mulai"}
        </button>
        <button type="button" onClick={pause} disabled={status !== "playing"}
          className="rounded-lg border border-white/15 disabled:opacity-40 px-4 py-2.5 text-sm font-medium text-white/85 hover:border-white/30 transition-colors">
          ⏸ Pause
        </button>
        <button type="button" onClick={reset} disabled={s === 0 && status === "idle"}
          className="rounded-lg border border-white/15 disabled:opacity-40 px-4 py-2.5 text-sm font-medium text-white/85 hover:border-white/30 transition-colors">
          ↻ Reset
        </button>
        <div className="flex-1 min-w-[160px]">
          <input type="range" min={0} max={1000}
            value={model.L > 0 ? Math.round((s / model.L) * 1000) : 0}
            onChange={(e) => scrub(Number(e.target.value) / 1000)}
            disabled={model.L === 0}
            aria-label="Geser untuk melihat posisi benda secara manual"
            className="w-full accent-cyan-500 disabled:opacity-40" />
        </div>
      </div>

      {/* Panel data */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
          <StatBox label="Posisi Awal" value={fmt(model.x0)} accent="text-white/80" />
          <StatBox label="Posisi Sekarang" value={fmt(x)} accent="text-cyan-300" />
          <StatBox label="Posisi Akhir" value={fmt(model.x1)} accent="text-white/80" />
        </div>
        <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mt-2.5">
          <StatBox label="Jarak" value={fmt(s)} accent="text-violet-300" big />
          <StatBox label="Perpindahan" value={`${sgn(displacement)}`} accent="text-cyan-300" big suffixArrow={displacement > 0.0005 ? "→" : displacement < -0.0005 ? "←" : ""} />
        </div>
      </div>

      {/* Mini visual comparison */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="rounded-xl border border-violet-400/40 bg-violet-500/[0.06] p-4">
          <p className="text-violet-300 font-semibold text-sm mb-1.5">Jarak ↓</p>
          <p className="text-white/70 text-sm">Mengikuti seluruh lintasan yang dilewati.</p>
        </div>
        <div className="rounded-xl border border-cyan-400/40 bg-cyan-500/[0.06] p-4">
          <p className="text-cyan-300 font-semibold text-sm mb-1.5">Perpindahan ↓</p>
          <p className="text-white/70 text-sm">Cuma menghubungkan posisi awal dengan posisi akhir.</p>
        </div>
      </div>

      {/* Coba Eksplorasi -- misi */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <h4 className="font-semibold text-white mb-1">Coba Eksplorasi</h4>
        <p className="text-white/70 text-sm mb-3">
          Misi: gerakkan benda dari <b className="text-white">2 m</b> menuju <b className="text-white">8 m</b>. Setelah itu, kembalikan benda ke <b className="text-white">5 m</b>.
        </p>
        <p className="text-white/50 text-sm mb-3">Coba dulu pakai skenario <b>Pergi &amp; Kembali</b> atau atur sendiri di <b>Eksplorasi Sendiri</b>. Berapa jarak yang ditempuh? Berapa perpindahannya?</p>
        <button type="button" onClick={() => setMissionOpen((v) => !v)}
          className="rounded-lg border border-white/15 px-3.5 py-2 text-sm font-medium text-white/80 hover:border-violet-400/50 transition-colors">
          {missionOpen ? "Sembunyikan jawaban" : "Lihat jawaban misi"}
        </button>
        {missionOpen && (() => {
          const m = buildModel([2, 8, 5])
          return (
            <p className="mt-3 rounded-lg border border-violet-400/40 bg-violet-500/10 px-4 py-3 text-white/85 text-sm">
              Jaraknya {fmt(m.L)} m (6 m pergi + 3 m kembali), sementara perpindahannya {sgn(m.x1 - m.x0)} m.
              Perhatikan lintasan yang ditempuh: jarak menghitung seluruh lintasan, sedangkan perpindahan hanya membandingkan posisi awal dan posisi akhir.
            </p>
          )
        })()}
      </div>

      {/* Tantangan 1 */}
      <div className={`rounded-xl border p-4 transition-colors ${challenge1Done ? "border-violet-400/60 bg-violet-500/10" : "border-white/10 bg-white/5"}`}>
        <h4 className="font-semibold text-white mb-1">🎯 Bisakah jarak = besar perpindahan?</h4>
        <p className="text-white/60 text-sm">Coba atur titiknya di <b>Eksplorasi Sendiri</b> supaya jaraknya sama persis dengan besar perpindahannya.</p>
        {challenge1Done && (
          <p className="mt-2.5 text-sm font-medium text-violet-200">
            🎯 Tepat! Ketika benda bergerak lurus satu arah tanpa berbalik, jarak dan besar perpindahan dapat memiliki nilai yang sama.
          </p>
        )}
      </div>

      {/* Tantangan 2 */}
      <div className={`rounded-xl border p-4 transition-colors ${challenge2Done ? "border-cyan-400/60 bg-cyan-500/10" : "border-white/10 bg-white/5"}`}>
        <h4 className="font-semibold text-white mb-1">🔄 Bisakah perpindahan menjadi 0 m?</h4>
        <p className="text-white/60 text-sm">Kembalikan benda tepat ke posisi awalnya lagi.</p>
        {challenge2Done && (
          <p className="mt-2.5 text-sm font-medium text-cyan-100">
            🔄 Posisi akhir kembali ke posisi awal. Karena perubahan posisi akhirnya nol, perpindahannya juga nol. Tetapi jaraknya tetap ada karena benda sudah menempuh lintasan.
          </p>
        )}
      </div>

      {/* Rumus, dikunci sampai simulasi pernah selesai dijalankan */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <h4 className="font-semibold text-white mb-2">Rumusnya</h4>
        {!ran ? (
          <p className="text-white/55 text-sm">Coba pahami visualnya dulu. Jalankan simulasinya sampai selesai, baru rumusnya muncul di sini.</p>
        ) : (
          <div>
            <p className="text-white/50 text-sm mb-3">Rumus hanya membantu kita menghitung apa yang sudah kita amati.</p>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="rounded-lg bg-white/[0.04] border-l-4 border-violet-400 p-3.5">
                <p className="font-semibold text-white text-sm">Jarak</p>
                <p className="text-white font-semibold mt-1.5">s = total panjang lintasan</p>
              </div>
              <div className="rounded-lg bg-white/[0.04] border-l-4 border-cyan-400 p-3.5">
                <p className="font-semibold text-white text-sm">Perpindahan</p>
                <p className="text-white font-semibold mt-1.5">{"\u0394x = x akhir \u2212 x awal"}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Pertanyaan konseptual */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-5">
        <div>
          <p className="text-white font-medium text-sm mb-2.5">1. Benda bergerak 5 m ke kanan lalu 5 m ke kiri. Berapa perpindahannya?</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[["A", "0 m"], ["B", "5 m"], ["C", "10 m"], ["D", "25 m"]].map(([id, label]) => (
              <button key={id} type="button" onClick={() => setQuiz1(id)} aria-pressed={quiz1 === id}
                className={`rounded-lg border px-3 py-2 text-sm transition-colors ${
                  quiz1 === id
                    ? id === "A" ? "border-cyan-400 bg-cyan-500/15 text-white font-medium" : "border-amber-300/60 bg-amber-400/10 text-white font-medium"
                    : "border-white/12 bg-white/[0.03] text-white/75 hover:border-white/25"
                }`}>
                <b className="text-white/50 font-mono mr-1">{id}.</b>{label}
              </button>
            ))}
          </div>
          {quiz1 && (
            <p className={`mt-2.5 text-sm rounded-lg px-3.5 py-2.5 border ${quiz1 === "A" ? "bg-cyan-500/10 text-cyan-100 border-cyan-400/30" : "bg-white/5 text-white/70 border-white/10"}`}>
              {quiz1 === "A" ? "Posisi akhir kembali ke posisi awal, sehingga perpindahannya nol." : "Coba pikirkan lagi posisi akhirnya dibandingkan posisi awal."}
            </p>
          )}
        </div>
        <div>
          <p className="text-white font-medium text-sm mb-2.5">2. Pada kondisi yang sama, apakah jaraknya juga 0 m?</p>
          <div className="grid grid-cols-2 gap-2 max-w-xs">
            {[["A", "Ya"], ["B", "Tidak"]].map(([id, label]) => (
              <button key={id} type="button" onClick={() => setQuiz2(id)} aria-pressed={quiz2 === id}
                className={`rounded-lg border px-3 py-2 text-sm transition-colors ${
                  quiz2 === id
                    ? id === "B" ? "border-cyan-400 bg-cyan-500/15 text-white font-medium" : "border-amber-300/60 bg-amber-400/10 text-white font-medium"
                    : "border-white/12 bg-white/[0.03] text-white/75 hover:border-white/25"
                }`}>
                <b className="text-white/50 font-mono mr-1">{id}.</b>{label}
              </button>
            ))}
          </div>
          {quiz2 && (
            <p className={`mt-2.5 text-sm rounded-lg px-3.5 py-2.5 border ${quiz2 === "B" ? "bg-cyan-500/10 text-cyan-100 border-cyan-400/30" : "bg-white/5 text-white/70 border-white/10"}`}>
              {quiz2 === "B" ? "Benda tetap menempuh lintasan 10 m, sehingga jaraknya 10 m." : "Ingat, jarak menghitung seluruh lintasan yang dilewati, bukan cuma posisi akhirnya."}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

/* ---------------------------- sub-komponen kecil ---------------------------- */

function StatBox({ label, value, accent, big = false, suffixArrow = "" }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-center">
      <p className="text-white/45 text-[11px] mb-1">{label}</p>
      <p className={`font-bold ${accent} ${big ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"}`}>
        {value}{suffixArrow && <span className="ml-1">{suffixArrow}</span>}
        <span className="text-sm font-normal text-white/40 ml-1">m</span>
      </p>
    </div>
  )
}
