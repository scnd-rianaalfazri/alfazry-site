import { useState, useRef, useEffect, useMemo, useCallback, useLayoutEffect } from "react"

// ============================================================
// DistanceDisplacementExplorer (versi ringkas)
// ------------------------------------------------------------
// Mini simulasi interaktif "Jarak vs Perpindahan" untuk materi
// Kinematika: Gerak Satu Dimensi. Dibuat agar ramah untuk orang
// awam: sedikit panel, bahasa sederhana, fokus pada satu momen
// "aha" -- jalur boleh berliku, tapi posisi akhir yang menentukan
// perpindahan.
//
// Tidak ada karakter manusia. Benda digambarkan sebagai orb kecil
// di atas garis bilangan -10..+10 meter.
// ============================================================

const XMIN = -10
const XMAX = 10
const V = 4 // laju benda, tetap (m/s) -- hanya alat bantu animasi
const MAX_WP = 4
const EPS = 1e-9
const TOL = 1e-6
const MINUS = "\u2212"

const COLOR = {
  purple: "#a855f7",
  cyan: "#22d3ee",
  cyanSoft: "rgba(34,211,238,0.45)",
  muted: "#9aa4c7",
  // Jejak jalur diwarnai sesuai arah geraknya, bukan cuma satu warna
  // "jarak", supaya arah maju/mundurnya langsung kelihatan.
  right: "#f87171", // melangkah ke kanan (searah sumbu-x positif)
  left: "#4ade80",  // melangkah ke kiri (searah sumbu-x negatif)
}
// Warna jejak untuk satu ruas jalur, berdasarkan arahnya.
const segColor = (dir) => (dir > 0 ? COLOR.right : COLOR.left)

const PRESETS = [
  { id: "langsung", name: "Langsung", pts: [-5, 5], desc: "Jalan lurus, tanpa balik arah" },
  { id: "balik", name: "Berbalik arah", pts: [-8, 5, 0, 8], desc: "Maju, mundur sedikit, lalu lanjut lagi" },
  { id: "bolak", name: "Bolak-balik", pts: [-6, 6, -6], desc: "Pergi, lalu balik ke tempat semula" },
  { id: "berliku", name: "Berliku", pts: [-8, 8, -6, 6], desc: "Zig-zag panjang, tapi geser sedikit di akhir" },
]

/* ---------------------------- model fisika (pure) ---------------------------- */

function buildModel(pts) {
  const segs = []
  let cum = 0
  for (let i = 0; i < pts.length - 1; i++) {
    const dx = pts[i + 1] - pts[i]
    const len = Math.abs(dx)
    segs.push({ i, x1: pts[i], x2: pts[i + 1], len, start: cum, dir: Math.sign(dx) })
    cum += len
  }
  return { pts, segs, L: cum, T: cum / V, x0: pts[0], x1: pts[pts.length - 1] }
}

function posAt(model, s) {
  if (model.L === 0) return model.x0
  const clamped = Math.min(model.L, Math.max(0, s))
  for (const g of model.segs) {
    if (g.len === 0) continue
    if (clamped <= g.start + g.len + EPS) return g.x1 + g.dir * (clamped - g.start)
  }
  return model.x1
}

function turnsUpTo(model, s) {
  let prev = 0
  let n = 0
  for (const g of model.segs) {
    if (g.len === 0 || g.start >= s - EPS) continue
    if (prev !== 0 && g.dir !== prev) n++
    prev = g.dir
  }
  return n
}

function derive(model, s) {
  const x = posAt(model, s)
  const D = x - model.x0
  return { s, x, D, absD: Math.abs(D), turns: turnsUpTo(model, s) }
}

/* ---------------------------- format ---------------------------- */

function fmt(n) {
  if (Math.abs(n) < 0.0005) return "0"
  const r = Math.round(n)
  const body = Math.abs(n - r) < 0.05 ? String(Math.abs(r)) : Math.abs(n).toFixed(1).replace(".", ",")
  return body === "0" ? "0" : (n < 0 ? MINUS : "") + body
}
const fm = (n) => `${fmt(n)} m`
const sgn = (n) => (n > 0.0005 ? "+" : "") + fmt(n)
const dirWord = (D) => (D > 0.0005 ? "ke kanan" : D < -0.0005 ? "ke kiri" : "tidak ke mana-mana")
const dirArrow = (D) => (D > 0.0005 ? "\u2192" : D < -0.0005 ? "\u2190" : "")
const ptName = (i, n) => (i === 0 ? "A — Mulai" : i === n - 1 ? "B — Selesai" : `P${i}`)
const ptAria = (i, n) => (i === 0 ? "Titik A, posisi awal" : i === n - 1 ? "Titik B, posisi akhir" : `Titik singgah P${i}`)

/* ---------------------------- hook: lebar kontainer ---------------------------- */

function useMeasuredWidth(minWidth = 280) {
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

export default function DistanceDisplacementExplorer() {
  const [pts, setPtsRaw] = useState(PRESETS[0].pts)
  const [preset, setPreset] = useState(PRESETS[0].id)
  const [s, setS] = useState(0)
  const [status, setStatus] = useState("idle") // idle | playing | paused | done
  const [view, setView] = useState("both") // path | pos | both
  const [guess, setGuess] = useState(false)
  const [answer, setAnswer] = useState(null)
  const [ran, setRan] = useState(false)
  const [forceFormula, setForceFormula] = useState(false)
  const [reflectionOpen, setReflectionOpen] = useState(false)
  const [topIdx, setTopIdx] = useState(null)
  const [focusIdx, setFocusIdx] = useState(null)

  const model = useMemo(() => buildModel(pts), [pts])
  const hiddenNow = guess && answer == null
  const d = useMemo(() => derive(model, s), [model, s])

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
        if (next >= model.L) {
          setStatus("done")
          setRan(true)
          return model.L
        }
        return next
      })
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => {
      alive = false
      cancelAnimationFrame(rafRef.current)
    }
  }, [status, model])

  /* -------- aksi lintasan --------
     Catatan: setiap perubahan lintasan memanggil beberapa setState
     independen langsung di dalam event handler (bukan disarangkan
     di dalam fungsi updater setState lain), supaya tetap sesuai pola
     React yang aman. */
  const setPts = useCallback((newPts, mode) => {
    const m = buildModel(newPts)
    setPtsRaw(newPts)
    setAnswer(null)
    if (guess) {
      setS(0)
      setStatus("idle")
    } else if (mode === "preset") {
      setS(0)
      setStatus(m.L === 0 ? "done" : "playing")
      if (m.L === 0) setRan(true)
    } else {
      setS(m.L)
      setStatus("done")
      if (m.L > 0) setRan(true)
    }
  }, [guess])

  const setPoint = useCallback((i, x) => {
    const clamped = Math.min(XMAX, Math.max(XMIN, Math.round(x)))
    if (pts[i] === clamped) return
    const next = pts.slice()
    next[i] = clamped
    setPreset(null)
    setTopIdx(i)
    setPts(next, "edit")
  }, [pts, setPts])

  const applyPreset = (p) => {
    setPreset(p.id)
    setTopIdx(null)
    setPts(p.pts.slice(), "preset")
  }

  const addWaypoint = () => {
    if (pts.length - 2 >= MAX_WP) return
    const n = pts.length
    const prevVal = pts[n - 2]
    const x = Math.min(XMAX, Math.max(XMIN, prevVal + (prevVal <= 0 ? 5 : -5)))
    const next = pts.slice(0, n - 1).concat([x], pts.slice(n - 1))
    setPreset(null)
    setTopIdx(n - 1)
    setPts(next, "edit")
  }
  const removeWaypoint = (i) => {
    const next = pts.slice(0, i).concat(pts.slice(i + 1))
    setPreset(null)
    setTopIdx(null)
    setPts(next, "edit")
  }

  /* -------- kontrol gerak -------- */
  const play = () => {
    if (hiddenNow) return
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

  const toggleGuess = () => {
    const next = !guess
    setGuess(next)
    setAnswer(null)
    if (next) { setS(0); setStatus("idle") } else { setS(model.L); setStatus("done"); if (model.L > 0) setRan(true) }
  }
  const chooseAnswer = (val) => {
    setAnswer(val)
    setS(0)
    setStatus(model.L === 0 ? "done" : "playing")
  }

  /* ---------------------------- layout SVG ---------------------------- */
  const [stageRef, stageW] = useMeasuredWidth(260)
  const small = stageW < 480
  const padL = small ? 20 : 40
  const hmax = small ? 46 : 64
  const rowH = small ? 20 : 24
  const tagsH = 10 + 2 * rowH
  const axisY = tagsH + hmax + 14
  const laneY = axisY + hmax + 46
  const H = laneY + 40
  const W = stageW
  const u = (W - 2 * padL) / (XMAX - XMIN)
  const X = (x) => padL + (x - XMIN) * u
  const invX = (px) => (px - padL) / u + XMIN

  function arcGeom(g) {
    const x1 = X(g.x1), x2 = X(g.x2)
    const rx = Math.abs(x2 - x1) / 2
    const ry = Math.min(hmax, 10 + g.len * u * 0.24) + (g.i % 3) * 5
    return { d: `M${x1} ${axisY} A${rx} ${ry} 0 0 1 ${x2} ${axisY}`, mx: (x1 + x2) / 2, ay: axisY - g.dir * ry }
  }

  const tags = useMemo(() => {
    const rows = [[], []]
    const out = []
    const n = pts.length
    pts.forEach((x, i) => {
      const label = ptName(i, n)
      const w = label.length * (small ? 6.2 : 7.1) + 16
      const cx = X(x)
      let row = 0
      for (; row < 2; row++) if (rows[row].every((b) => Math.abs(b.cx - cx) > (b.w + w) / 2 + 4)) break
      row = Math.min(row, 1)
      rows[row].push({ cx, w })
      out.push({ i, label, cx, w, row })
    })
    return out
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pts, W, small])

  /* -------- drag & keyboard pada handle -------- */
  const svgRef = useRef(null)
  const dragRef = useRef(null)
  const onPointerDown = (i) => (e) => {
    dragRef.current = i
    setTopIdx(i)
    e.currentTarget.setPointerCapture?.(e.pointerId)
    e.preventDefault()
  }
  const onPointerMove = (e) => {
    if (dragRef.current == null || !svgRef.current) return
    const rect = svgRef.current.getBoundingClientRect()
    const px = ((e.clientX - rect.left) / rect.width) * W
    setPoint(dragRef.current, invX(px))
  }
  const endDrag = () => { dragRef.current = null }
  const onKeyDownHandle = (i) => (e) => {
    const step = e.shiftKey ? 5 : 1
    let x = pts[i]
    if (e.key === "ArrowRight" || e.key === "ArrowUp") x += step
    else if (e.key === "ArrowLeft" || e.key === "ArrowDown") x -= step
    else if (e.key === "Home") x = XMIN
    else if (e.key === "End") x = XMAX
    else return
    e.preventDefault()
    setPoint(i, x)
  }

  /* ---------------------------- narasi turunan ---------------------------- */
  const modeCaption = {
    path: "Perhatikan ke mana saja bendanya pergi.",
    pos: "Perhatikan cuma titik awal dan titik akhirnya.",
    both: "Bandingkan: jalurnya boleh belok-belok, tapi panah cyan selalu lurus.",
  }[view]

  const story = useMemo(() => {
    if (hiddenNow) return { main: "Tebak dulu, ya. Hasilnya muncul setelah kamu memilih.", tip: "Amati bentuk jalurnya, lalu tentukan: jarak, perpindahan, atau sama besar?" }
    if (model.L === 0) return { main: "Titik A dan B ada di tempat yang sama, jadi belum ada jalur.", tip: "Coba geser titik B, atau tambah titik singgah." }
    if (d.s <= EPS) return { main: "Bendanya masih diam di titik A.", tip: "Tekan Mulai, lalu lihat jejak merah/hijaunya dan panah titik-titik cyan bergerak." }
    let main
    if (d.absD < 0.0005) main = "Bendanya sudah jalan jauh, tapi akhirnya balik lagi ke tempat semula."
    else if (Math.abs(d.s - d.absD) < TOL) main = "Bendanya jalan lurus dari A ke B, tanpa belok atau balik arah."
    else main = "Bendanya sempat menempuh jalur tambahan, makanya jaraknya lebih besar dari perpindahannya."
    let tip
    if (d.turns > 0) tip = `Sudah ${d.turns} kali balik arah. Jarak terus nambah, tapi perpindahan cuma peduli di mana bendanya berada sekarang, dibanding titik awal.`
    else if (Math.abs(d.s - d.absD) < TOL && d.s >= model.L - TOL) tip = "Kalau jalannya lurus tanpa balik arah, jarak dan perpindahan besarnya sama."
    else tip = "Panahnya selalu lurus, walau jalur bendanya belok-belok."
    return { main, tip }
  }, [hiddenNow, model, d])

  const guessFeedback = useMemo(() => {
    if (!guess) return null
    if (answer == null) return "Lihat jalurnya dulu, baru pilih. Nggak ada nilai atau skor, kok — santai aja."
    if (status !== "done") return "Nih, lihat jalurnya jalan dulu."
    const L = model.L, D = Math.abs(model.x1 - model.x0)
    const names = { jarak: "jarak lebih besar", perpindahan: "perpindahan lebih besar", sama: "keduanya sama besar" }
    let msg = answer === "belum"
      ? `Belum tahu itu wajar banget. Hasilnya: jarak ${fm(L)}, perpindahan ${fm(D)}.`
      : `Tadi kamu nebak ${names[answer]}. Hasilnya: jarak ${fm(L)}, perpindahan ${fm(D)}.`
    msg += Math.abs(L - D) < TOL ? " Tebakanmu tepat: jalurnya lurus, jadi keduanya sama." : " Jalan lurus itu rute terpendek, jadi perpindahan nggak akan pernah lebih besar dari jarak."
    return msg
  }, [guess, answer, status, model])

  /* ---------------------------- render ---------------------------- */
  const n = pts.length
  const distScale = Math.max(model.L, 1)
  const pcs = model.segs.filter((g) => g.len > 0).map((g) => ({
    len: g.len * Math.min(1, Math.max(0, (d.s - g.start) / g.len)),
    dir: g.dir,
  }))
  const barD = hiddenNow ? 0 : (d.s / distScale) * 100
  const barP = hiddenNow ? 0 : (d.absD / distScale) * 100
  const orderIdx = pts.map((_, i) => i).sort((a, b) => (a === topIdx ? 1 : 0) - (b === topIdx ? 1 : 0))
  const canPlay = !hiddenNow && status !== "playing"
  const playLabel = status === "paused" ? "\u25B6 Lanjut" : status === "done" && model.L > 0 ? "\u25B6 Ulangi" : "\u25B6 Mulai"

  return (
    <div className="space-y-5">
      {/* Intro ringkas */}
      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
        <p className="font-mono text-[11px] uppercase tracking-wider text-cyan-300/70">Coba sendiri</p>
        <p className="text-white/75 text-sm md:text-[15px] mt-1.5 leading-relaxed">
          Geser titik <b className="text-cyan-300">A</b> dan <b className="text-cyan-300">B</b>, lalu tekan{" "}
          <b>Mulai</b>. Jejak titik-titiknya <span style={{ color: "#f87171" }}>merah</span> kalau ke kanan dan{" "}
          <span style={{ color: "#4ade80" }}>hijau</span> kalau ke kiri, boleh belok-belok — lengkungnya cuma cara gambar, bendanya tetap jalan lurus di sumbu-x. Garis titik-titik cyan-nya juga bukan jalur yang dilewati, cuma jarak lurus dari titik awal ke posisi bendanya sekarang.
        </p>
      </div>

      {/* Toggle mode & tebak dulu */}
      <div className="flex flex-wrap items-center gap-2.5">
        <div className="inline-flex rounded-lg border border-white/15 overflow-hidden" role="group" aria-label="Apa yang mau dilihat">
          {[["path", "Jalurnya"], ["pos", "Posisinya"], ["both", "Semuanya"]].map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => setView(id)}
              aria-pressed={view === id}
              className={`px-3.5 py-2.5 text-sm font-medium transition-colors ${
                view === id ? "bg-violet-500/30 text-white" : "text-white/60 hover:text-white"
              } ${id !== "path" ? "border-l border-white/15" : ""}`}
            >
              {label}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={toggleGuess}
          role="switch"
          aria-checked={guess}
          className={`inline-flex items-center gap-2 rounded-lg border px-3.5 py-2.5 text-sm font-medium transition-colors ${
            guess ? "border-cyan-400/60 text-white bg-cyan-500/10" : "border-white/15 text-white/60 hover:text-white"
          }`}
        >
          <span className={`relative inline-block h-[18px] w-8 rounded-full transition-colors ${guess ? "bg-cyan-500/70" : "bg-white/15"}`}>
            <span className={`absolute top-[2px] h-[14px] w-[14px] rounded-full bg-white transition-transform ${guess ? "translate-x-[16px]" : "translate-x-[2px]"}`} />
          </span>
          Tebak dulu, yuk
        </button>
      </div>
      <p className="text-cyan-200/80 text-sm -mt-2">{modeCaption}</p>

      {/* Kotak tebakan */}
      {guess && (
        <div className="rounded-xl border border-cyan-400/40 bg-cyan-500/[0.06] p-4">
          <p className="font-semibold text-white text-sm md:text-base">
            {answer == null ? "Menurutmu, mana yang lebih besar?" : "Sip, tebakanmu sudah tercatat. Boleh ganti kapan saja."}
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            {[["jarak", "Jarak"], ["perpindahan", "Perpindahan"], ["sama", "Sama besar"], ["belum", "Belum tahu"]].map(([id, label]) => (
              <button
                key={id}
                type="button"
                onClick={() => chooseAnswer(id)}
                aria-pressed={answer === id}
                className={`rounded-lg border px-3.5 py-2.5 text-sm transition-colors ${
                  answer === id ? "border-cyan-400 bg-cyan-500/20 text-white font-semibold" : "border-white/15 bg-white/5 text-white/75 hover:border-cyan-400/60"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <p className="text-white/60 text-sm mt-3">{guessFeedback}</p>
        </div>
      )}

      {/* ---------------- Panggung simulasi (SVG) ---------------- */}
      <div
        ref={stageRef}
        className="rounded-xl border border-violet-400/25 bg-gradient-to-b from-[#0b1024]/90 to-[#070a18]/95 overflow-hidden shadow-[0_0_40px_-18px_rgba(168,85,247,0.55)]"
      >
        <svg
          ref={svgRef}
          viewBox={`0 0 ${W} ${H}`}
          className="block w-full h-auto touch-none select-none"
          role="group"
          aria-label="Simulasi benda bergerak di garis lurus dari -10 sampai +10 meter. Seret titik A, B, atau titik singgah, atau pakai slider di bawah."
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
        >
          <defs>
            <filter id="ddeGlowP" x="-20%" y="-40%" width="140%" height="180%">
              <feGaussianBlur stdDeviation="3" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="ddeGlowC" x="-20%" y="-100%" width="140%" height="300%">
              <feGaussianBlur stdDeviation="2.5" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <marker id="ddeArrowRight" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M0 1 L9 5 L0 9 Z" fill={COLOR.right} fillOpacity="0.85" />
            </marker>
            <marker id="ddeArrowLeft" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M0 1 L9 5 L0 9 Z" fill={COLOR.left} fillOpacity="0.85" />
            </marker>
            <marker id="ddeArrowC" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto">
              <path d="M0 0 L10 5 L0 10 Z" fill={COLOR.cyan} />
            </marker>
            <marker id="ddeArrowCg" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto">
              <path d="M0 0 L10 5 L0 10 Z" fill={COLOR.cyan} fillOpacity="0.5" />
            </marker>
          </defs>

          {/* grid koordinat tipis */}
          {Array.from({ length: XMAX - XMIN + 1 }, (_, k) => XMIN + k).map((x) => (
            <line key={`g${x}`} x1={X(x)} x2={X(x)} y1={tagsH - 4} y2={laneY + 18}
              stroke={x % 5 === 0 ? "rgba(150,165,215,0.15)" : "rgba(150,165,215,0.06)"} />
          ))}

          {/* sudut HUD */}
          <path d={`M6 16 V6 H16 M${W - 16} 6 H${W - 6} V16 M6 ${H - 16} V${H - 6} H16 M${W - 16} ${H - 6} H${W - 6} V${H - 16}`}
            stroke="rgba(207,168,252,0.5)" strokeWidth="1.2" fill="none" />

          {/* sumbu x */}
          <line x1={X(XMIN) - 8} x2={X(XMAX) + 8} y1={axisY} y2={axisY} stroke="#aab4d8" strokeWidth="1.4" />
          {Array.from({ length: XMAX - XMIN + 1 }, (_, k) => XMIN + k).map((x) => {
            const major = x % 5 === 0
            return (
              <g key={`t${x}`}>
                <line x1={X(x)} x2={X(x)} y1={axisY - (major ? 6 : 3)} y2={axisY + (major ? 6 : 3)} stroke="#aab4d8" />
                {major && (
                  <text x={X(x)} y={axisY + 19} fontSize="11" fill={COLOR.muted} textAnchor="middle">
                    {x > 0 ? `+${x}` : x < 0 ? `${MINUS}${Math.abs(x)}` : "0"}
                  </text>
                )}
              </g>
            )
          })}

          {/* lintasan rencana (path mode): merah = akan ke kanan, hijau = akan ke kiri */}
          <g opacity={view === "pos" ? 0.16 : 1}>
            {model.segs.filter((g) => g.len > 0).map((g) => (
              <path key={`ghost${g.i}`} d={arcGeom(g).d} fill="none" stroke={segColor(g.dir)} strokeOpacity="0.5" strokeWidth="1.8" strokeLinecap="round" strokeDasharray="0.1 7"
                markerEnd={g.dir > 0 ? "url(#ddeArrowRight)" : "url(#ddeArrowLeft)"} />
            ))}
          </g>

          {/* lajur perpindahan */}
          {view !== "path" && (
            <g opacity={view === "pos" ? 1 : 0.55}>
              <line x1={X(XMIN)} x2={X(XMAX)} y1={laneY} y2={laneY} stroke={COLOR.cyanSoft} strokeDasharray="2 5" />
              {[model.x0, model.x1].map((x, k) => (
                <line key={`gl${k}`} x1={X(x)} x2={X(x)} y1={axisY + 8} y2={laneY - 6} stroke={COLOR.cyanSoft} strokeDasharray="3 5" />
              ))}
              {Math.abs(model.x1 - model.x0) > 0 && (
                <line x1={X(model.x0)} y1={laneY} x2={X(model.x1)} y2={laneY} stroke={COLOR.cyan} strokeOpacity="0.5" strokeWidth="2.6"
                  strokeLinecap="round" strokeDasharray="0.1 9" markerEnd="url(#ddeArrowCg)" />
              )}
              <text x={X(model.x0)} y={laneY + 21} fontSize="12" fill="#8fe9f9" textAnchor="middle">A</text>
              <text x={X(model.x1)} y={laneY + (model.x0 === model.x1 ? 35 : 21)} fontSize="12" fill="#8fe9f9" textAnchor="middle">B</text>
            </g>
          )}

          {/* jejak lintasan yang sudah ditempuh: merah = melangkah ke kanan, hijau = melangkah ke kiri.
              Dibuat titik-titik (bukan garis penuh) supaya tidak kelihatan seolah-olah
              bendanya benar-benar berjalan di atas kurva lengkung ini -- lengkungnya cuma
              cara gambar biar jaraknya kelihatan, geraknya sendiri tetap lurus di sumbu-x. */}
          {view !== "pos" && model.segs.filter((g) => g.len > 0).map((g) => {
            const p = Math.min(1, Math.max(0, (d.s - g.start) / g.len))
            if (p < 0.002) return null
            const a = arcGeom(g)
            const revealX = X(g.x1) + (X(g.x2) - X(g.x1)) * p
            const clipX1 = Math.min(X(g.x1), revealX)
            const clipX2 = Math.max(X(g.x1), revealX)
            return (
              <g key={`trail${g.i}`}>
                <clipPath id={`ddeClip${g.i}`}>
                  <rect x={clipX1 - 2} y={0} width={Math.max(0, clipX2 - clipX1 + 4)} height={H} />
                </clipPath>
                <path d={a.d} fill="none" stroke={segColor(g.dir)} strokeWidth="4.2" strokeLinecap="round"
                  strokeDasharray="0.1 9" filter="url(#ddeGlowP)" clipPath={`url(#ddeClip${g.i})`} />
              </g>
            )
          })}

          {/* panah perpindahan langsung (live) */}
          {view !== "path" && !hiddenNow && (() => {
            const x0 = X(model.x0), xc = X(d.x)
            const items = []
            if (Math.abs(xc - x0) > 7) {
              items.push(<line key="live" x1={x0} y1={laneY} x2={xc - Math.sign(xc - x0) * 0.1} y2={laneY}
                stroke={COLOR.cyan} strokeWidth="4.5" strokeLinecap="round" strokeDasharray="0.1 11"
                markerEnd="url(#ddeArrowC)" filter="url(#ddeGlowC)" />)
            } else if (d.s > 0) {
              items.push(<circle key="zero" cx={x0} cy={laneY} r="8" fill="none" stroke={COLOR.cyan} strokeWidth="2.5" />)
            }
            if (d.s > 0) {
              const txt = Math.abs(d.D) < 0.0005 ? "\u0394x = 0 m" : `\u0394x = ${sgn(d.D)} m ${dirArrow(d.D)}`
              const w = txt.length * 7.4 + 16
              const cx = Math.min(W - w / 2 - 4, Math.max(w / 2 + 4, (x0 + xc) / 2))
              items.push(
                <g key="label">
                  <rect x={cx - w / 2} y={laneY - 38} width={w} height="24" rx="7" fill="#0a1428" stroke={COLOR.cyan} />
                  <text x={cx} y={laneY - 22} fontSize="13" fontWeight="600" fill="#fff" textAnchor="middle">{txt}</text>
                </g>
              )
            }
            items.push(<line key="proj" x1={xc} x2={xc} y1={axisY + 10} y2={laneY - 6} stroke={COLOR.cyanSoft} />)
            return items
          })()}

          {/* garis bantu + tag posisi */}
          {tags.map((t) => {
            const kind = t.i === 0 ? "A" : t.i === n - 1 ? "B" : "P"
            const h = rowH - 6
            const y = 6 + t.row * rowH
            const rx = Math.min(W - t.w - 3, Math.max(3, t.cx - t.w / 2))
            return (
              <g key={`tag${t.i}`}>
                <line x1={t.cx} x2={t.cx} y1={y + h} y2={axisY - 14} stroke="rgba(207,168,252,0.3)" strokeDasharray="2 4" />
                <rect x={rx} y={y} width={t.w} height={h} rx="6" fill="#0f1631" stroke={kind === "P" ? COLOR.purple : COLOR.cyan} />
                <text x={rx + t.w / 2} y={y + h / 2 + 4} fontSize="12" fill="#fff" textAnchor="middle">{t.label}</text>
              </g>
            )
          })}

          {/* handle A / B / titik singgah */}
          {orderIdx.map((i) => {
            const x = pts[i]
            const cx = X(x), cy = axisY
            const kind = i === 0 ? "A" : i === n - 1 ? "B" : "P"
            return (
              <g
                key={`h${i}`}
                tabIndex={0}
                role="slider"
                aria-label={ptAria(i, n)}
                aria-orientation="horizontal"
                aria-valuemin={XMIN}
                aria-valuemax={XMAX}
                aria-valuenow={x}
                aria-valuetext={`${fmt(x)} meter`}
                onPointerDown={onPointerDown(i)}
                onKeyDown={onKeyDownHandle(i)}
                onFocus={() => setFocusIdx(i)}
                onBlur={() => setFocusIdx((v) => (v === i ? null : v))}
                style={{ cursor: "grab", outline: "none" }}
              >
                <circle cx={cx} cy={cy} r="24" fill="transparent" />
                {focusIdx === i && <circle cx={cx} cy={cy} r="15" fill="none" stroke={COLOR.cyan} strokeWidth="2" />}
                {kind === "A" && <circle cx={cx} cy={cy} r="8" fill={COLOR.cyan} stroke="#fff" strokeWidth="1.5" />}
                {kind === "B" && <rect x={cx - 7} y={cy - 7} width="14" height="14" fill={COLOR.cyan} stroke="#fff" strokeWidth="1.5" transform={`rotate(45 ${cx} ${cy})`} />}
                {kind === "P" && <circle cx={cx} cy={cy} r="6" fill="#0a0f22" stroke={COLOR.purple} strokeWidth="2.4" />}
              </g>
            )
          })}

          {/* orb bergerak */}
          <g transform={`translate(${X(d.x)} ${axisY})`}>
            <circle r="19" fill="rgba(168,85,247,0.28)" />
            <circle r="10" fill="none" stroke="#cfa8fc" strokeWidth="1.4" />
            <line x1="-16" x2="-11" y1="0" y2="0" stroke="#cfa8fc" />
            <line x1="11" x2="16" y1="0" y2="0" stroke="#cfa8fc" />
            <circle r="4.5" fill="#fff" />
          </g>
        </svg>

        {/* kontrol gerak, menyatu dengan panggung */}
        <div className="border-t border-white/10 bg-black/20 px-4 py-3.5 flex flex-wrap items-center gap-2.5">
          <button type="button" onClick={play} disabled={!canPlay}
            className="rounded-lg bg-violet-600 hover:bg-violet-500 disabled:opacity-40 disabled:hover:bg-violet-600 border border-violet-400/50 px-4 py-2.5 text-sm font-semibold text-white transition-colors">
            {playLabel}
          </button>
          <button type="button" onClick={pause} disabled={status !== "playing"}
            className="rounded-lg border border-white/15 disabled:opacity-40 px-4 py-2.5 text-sm font-medium text-white/85 hover:border-white/30 transition-colors">
            ⏸ Pause
          </button>
          <button type="button" onClick={reset} disabled={s === 0 && status === "idle"}
            className="rounded-lg border border-white/15 disabled:opacity-40 px-4 py-2.5 text-sm font-medium text-white/85 hover:border-white/30 transition-colors">
            ↻ Ulang
          </button>
          <input
            type="range" min={0} max={1000}
            value={model.L > 0 ? Math.round((s / model.L) * 1000) : 0}
            onChange={(e) => scrub(Number(e.target.value) / 1000)}
            disabled={hiddenNow || model.L === 0}
            aria-label="Geser maju-mundur gerakan benda"
            className="flex-1 min-w-[120px] accent-violet-500 disabled:opacity-40"
          />
        </div>
      </div>

      {/* legenda singkat */}
      <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/55">
        <li className="flex items-center gap-2">
          <svg width="30" height="18" viewBox="0 0 30 18" aria-hidden="true"><path d="M3 14 A12 8 0 0 1 27 14" fill="none" stroke={COLOR.right} strokeWidth="3" strokeLinecap="round" strokeDasharray="0.1 6" /></svg>
          <span>Melangkah <b style={{ color: COLOR.right }}>ke kanan</b></span>
        </li>
        <li className="flex items-center gap-2">
          <svg width="30" height="18" viewBox="0 0 30 18" aria-hidden="true"><path d="M3 14 A12 8 0 0 1 27 14" fill="none" stroke={COLOR.left} strokeWidth="3" strokeLinecap="round" strokeDasharray="0.1 6" /></svg>
          <span>Melangkah <b style={{ color: COLOR.left }}>ke kiri</b></span>
        </li>
        <li className="flex items-center gap-2">
          <svg width="40" height="18" viewBox="0 0 40 18" aria-hidden="true"><line x1="3" y1="9" x2="32" y2="9" stroke={COLOR.cyan} strokeWidth="3.5" strokeLinecap="round" strokeDasharray="0.1 6" /><path d="M28 3 L38 9 L28 15 Z" fill={COLOR.cyan} /></svg>
          <span><b className="text-cyan-300">Perpindahan</b> — titik-titik cyan (bukan jalur beneran, cuma jarak lurus)</span>
        </li>
      </ul>
      <p className="text-white/35 text-xs -mt-1">Warna jejaknya nunjukin arah geraknya. Total jarak = panjang merah + hijau digabung.</p>

      {/* kartu jarak & perpindahan */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="rounded-xl border border-violet-400/50 bg-white/5 p-4">
          <div className="flex items-center justify-between gap-2">
            <span className="font-semibold text-white">Jarak</span>
            <span className="text-[11px] rounded-full border border-violet-300/70 text-violet-200 px-2.5 py-0.5">tanpa arah</span>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl md:text-4xl font-bold text-violet-200">{hiddenNow ? "?" : fmt(d.s)}</span>
            <span className="text-white/50 text-sm">m</span>
          </div>
          <p className="text-white/50 text-sm mt-1">Total panjang jalur yang dilewati</p>
          {!hiddenNow && pcs.length > 0 && (
            <div className="mt-3 h-3 rounded bg-white/5 flex overflow-hidden">
              {pcs.map((p, k) => (
                <div key={k} className="h-full"
                  style={{
                    width: `${(p.len / distScale) * 100}%`,
                    background: p.dir > 0
                      ? "repeating-linear-gradient(135deg,#b91c1c 0 6px,#f87171 6px 12px)"
                      : "repeating-linear-gradient(135deg,#15803d 0 6px,#4ade80 6px 12px)",
                    borderLeft: k > 0 ? "2px solid #0b1124" : "none",
                  }} />
              ))}
            </div>
          )}
        </div>

        <div className="rounded-xl border border-cyan-400/50 bg-white/5 p-4">
          <div className="flex items-center justify-between gap-2">
            <span className="font-semibold text-white">Perpindahan</span>
            <span className="text-[11px] rounded-full border border-cyan-300/70 text-cyan-200 px-2.5 py-0.5">punya arah</span>
          </div>
          <div className="mt-2 flex items-baseline gap-2 flex-wrap">
            <span className="text-3xl md:text-4xl font-bold text-cyan-200">{hiddenNow ? "?" : fmt(d.absD)}</span>
            <span className="text-white/50 text-sm">m</span>
            {!hiddenNow && <span className="text-2xl text-cyan-200" aria-hidden="true">{dirArrow(d.D)}</span>}
            {!hiddenNow && <span className="text-white/70 text-sm">{dirWord(d.D)}</span>}
          </div>
          <p className="text-white/50 text-sm mt-1">Jarak lurus dari titik awal ke posisi sekarang</p>
          <div className="mt-3 h-3 flex items-center">
            <svg width="100%" height="12" viewBox="0 0 100 12" preserveAspectRatio="none">
              <line x1="0" y1="6" x2="86" y2="6" stroke={COLOR.cyan} strokeWidth="3" vectorEffect="non-scaling-stroke" />
            </svg>
          </div>
        </div>
      </div>

      {/* bandingkan + cerita singkat, digabung jadi satu kartu */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <h4 className="font-semibold text-white mb-3">Mana yang lebih jauh?</h4>
        <div className="space-y-2.5">
          <div className="grid grid-cols-[84px_1fr_64px] gap-2.5 items-center">
            <span className="text-sm text-violet-300">Jarak</span>
            <div className="h-3.5 rounded bg-white/5 overflow-hidden">
              <div className="h-full transition-[width] duration-75" style={{ width: `${barD}%`, background: "repeating-linear-gradient(135deg,#8a2be2 0 6px,#a855f7 6px 12px)" }} />
            </div>
            <span className="text-sm font-semibold text-violet-300 text-right">{hiddenNow ? "?" : fm(d.s)}</span>
          </div>
          <div className="grid grid-cols-[84px_1fr_64px] gap-2.5 items-center">
            <span className="text-sm text-cyan-300">Perpindahan</span>
            <div className="h-3.5 rounded bg-white/5 overflow-hidden">
              <div className="h-full transition-[width] duration-75 rounded-sm" style={{ width: `${Math.max(barP, hiddenNow || d.absD === 0 ? 0 : 1.5)}%`, background: COLOR.cyan }} />
            </div>
            <span className="text-sm font-semibold text-cyan-300 text-right">{hiddenNow ? "?" : fm(d.absD)}</span>
          </div>
        </div>
        <p className="mt-3.5 pl-3 py-2 border-l-2 border-cyan-400 bg-cyan-500/[0.06] rounded-r-lg text-sm font-medium text-white/90">{story.main}</p>
        <p className="text-white/50 text-sm mt-2">{story.tip}</p>
      </div>

      {/* preset & atur jalur, dua kolom di layar lebar */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <h4 className="font-semibold text-white mb-1">Coba jalur ini</h4>
          <p className="text-white/50 text-sm mb-3">Pilih satu, lihat apa yang terjadi.</p>
          <div className="space-y-2">
            {PRESETS.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => applyPreset(p)}
                aria-pressed={preset === p.id}
                className={`w-full text-left rounded-lg border px-3 py-2.5 transition-colors ${
                  preset === p.id ? "border-violet-400 bg-violet-500/15" : "border-white/12 bg-white/[0.03] hover:border-violet-400/50"
                }`}
              >
                <div className="font-semibold text-white text-sm">{p.name}</div>
                <div className="text-white/50 text-xs mt-0.5">{p.desc}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <h4 className="font-semibold text-white mb-1">Atau atur sendiri</h4>
          <p className="text-white/50 text-sm mb-3">Geser buat ubah posisinya (dalam meter).</p>
          <ul className="space-y-3">
            {pts.map((x, i) => {
              const isWp = i > 0 && i < n - 1
              return (
                <li key={i} className="grid grid-cols-[76px_1fr_38px_auto] gap-2.5 items-center">
                  <span className={`text-xs font-semibold ${isWp ? "text-violet-300" : "text-cyan-300"}`}>{ptName(i, n)}</span>
                  <input
                    type="range" min={XMIN} max={XMAX} step={1} value={x}
                    onChange={(e) => setPoint(i, Number(e.target.value))}
                    aria-label={`Posisi ${ptAria(i, n)} dalam meter`}
                    className="w-full accent-violet-500"
                  />
                  <span className="text-white/70 text-sm text-right font-mono">{x}</span>
                  {isWp ? (
                    <button type="button" onClick={() => removeWaypoint(i)} aria-label={`Hapus titik singgah P${i}`}
                      className="w-8 h-8 rounded-lg border border-white/15 text-white/50 hover:border-red-300/60 hover:text-red-300 transition-colors">✕</button>
                  ) : <span className="w-8" />}
                </li>
              )
            })}
          </ul>
          <div className="flex items-center gap-3 mt-3.5">
            <button type="button" onClick={addWaypoint} disabled={n - 2 >= MAX_WP}
              className="rounded-lg border border-white/15 disabled:opacity-40 px-3 py-2 text-sm font-medium text-white/80 hover:border-violet-400/50 transition-colors">
              + Tambah titik singgah
            </button>
          </div>
        </div>
      </div>

      {/* rumus, terkunci sampai satu putaran selesai */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <h4 className="font-semibold text-white mb-2">Rumusnya (kalau penasaran)</h4>
        {!(ran || forceFormula) ? (
          <div className="rounded-lg border border-dashed border-white/20 p-4 text-white/55 text-sm">
            <p className="mb-3">Coba jalankan simulasinya dulu, baru rumusnya muncul di sini.</p>
            <button type="button" onClick={() => setForceFormula(true)}
              className="rounded-lg border border-white/15 px-3 py-2 text-sm font-medium text-white/80 hover:border-violet-400/50 transition-colors">
              Atau lihat rumusnya sekarang
            </button>
          </div>
        ) : (
          <div>
            <p className="text-white/50 text-sm mb-3">Ini cuma cara menuliskan apa yang tadi kamu lihat, pakai angka dari jalurmu.</p>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="rounded-lg bg-white/[0.04] border-l-4 border-violet-400 p-3.5">
                <h5 className="font-semibold text-white text-sm">Jarak</h5>
                <p className="text-white font-semibold mt-1.5">s = total panjang jalur</p>
                <p className="text-white/55 text-sm mt-1">
                  {model.L === 0 ? "s = 0 m" : `${model.segs.filter((g) => g.len > 0).map((g) => fmt(g.len)).join(" + ")} = ${fm(model.L)}`}
                </p>
              </div>
              <div className="rounded-lg bg-white/[0.04] border-l-4 border-cyan-400 p-3.5">
                <h5 className="font-semibold text-white text-sm">Perpindahan</h5>
                <p className="text-white font-semibold mt-1.5">{"\u0394x = posisi akhir \u2212 posisi awal"}</p>
                <p className="text-white/55 text-sm mt-1">
                  {`\u0394x = ${fmt(model.x1)} \u2212 (${fmt(model.x0)}) = ${sgn(model.x1 - model.x0)} m`}
                </p>
              </div>
            </div>
            <p className="text-white/60 text-sm mt-3">Ingat: perpindahan nggak pernah lebih besar dari jarak.</p>
          </div>
        )}
      </div>

      {/* refleksi */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <h4 className="font-semibold text-white mb-2">Coba pikirkan</h4>
        <blockquote className="border-l-2 border-violet-400 pl-3 text-white/85 italic text-[15px]">
          “Kalau kamu jalan 20 meter ke kanan, terus balik 20 meter ke kiri, jaraknya 0 meter, nggak sih?”
        </blockquote>
        <button type="button" onClick={() => setReflectionOpen((v) => !v)} aria-expanded={reflectionOpen}
          className="mt-3 rounded-lg border border-white/15 px-3 py-2 text-sm font-medium text-white/80 hover:border-violet-400/50 transition-colors">
          {reflectionOpen ? "Sembunyikan jawaban" : "Lihat jawaban"}
        </button>
        {reflectionOpen && (
          <div className="mt-3 rounded-lg border border-violet-400/40 bg-violet-500/10 px-4 py-3 text-white/85 text-sm">
            Bukan. Jaraknya 40 meter, karena semua langkah dihitung. Tapi perpindahannya 0 meter, karena kamu balik lagi ke tempat semula.
          </div>
        )}
      </div>
    </div>
  )
}
