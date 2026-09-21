import { useState, useRef, useEffect, useMemo, useCallback, useLayoutEffect } from "react"
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ReferenceLine, ResponsiveContainer,
} from "recharts"

// ============================================================
// DistanceDisplacementExplorer
// ------------------------------------------------------------
// Simulasi interaktif "Jarak vs Perpindahan" (The Path vs The
// Position) untuk materi Kinematika: Gerak Satu Dimensi.
//
// Konsep dibangun lewat urutan: amati gerak -> ubah lintasan ->
// bandingkan jarak & perpindahan -> baru lihat rumus.
//
// Tidak ada karakter manusia. Benda digambarkan sebagai orb/
// scientific marker di atas garis bilangan -10..+10 meter.
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
  purpleSoft: "rgba(168,85,247,0.45)",
  purpleGlow: "rgba(168,85,247,0.85)",
  cyan: "#22d3ee",
  cyanSoft: "rgba(34,211,238,0.45)",
  muted: "#9aa4c7",
  line: "rgba(150,165,215,0.22)",
  bg: "#0a0f22",
}

const PRESETS = [
  { id: "langsung", name: "Langsung", pts: [-5, 5], desc: "A → B, lurus tanpa berbalik arah" },
  { id: "balik", name: "Berbalik arah", pts: [-8, 5, 0, 8], desc: "Maju, mundur sebagian, lalu lanjut ke B" },
  { id: "bolak", name: "Bolak-balik", pts: [-6, 6, -6], desc: "A → B, lalu balik lagi ke A" },
  { id: "berliku", name: "Berliku", pts: [-8, 8, -6, 6], desc: "Zig-zag panjang, geser sedikit di akhir" },
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

function moveDir(model, s, isPlaying) {
  if (!isPlaying) return 0
  for (const g of model.segs) if (g.len > 0 && s < g.start + g.len - EPS) return g.dir
  return 0
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
const dirWord = (D) => (D > 0.0005 ? "ke kanan" : D < -0.0005 ? "ke kiri" : "tidak ada arah")
const dirArrow = (D) => (D > 0.0005 ? "\u2192" : D < -0.0005 ? "\u2190" : "")
const ptName = (i, n) => (i === 0 ? "A — Start" : i === n - 1 ? "B — End" : `P${i}`)
const ptAria = (i, n) => (i === 0 ? "Titik A, posisi awal" : i === n - 1 ? "Titik B, posisi akhir" : `Waypoint P${i}`)

/* ---------------------------- hook: lebar kontainer ---------------------------- */

function useMeasuredWidth(minWidth = 280) {
  const ref = useRef(null)
  const [w, setW] = useState(640)
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
  const [speed, setSpeed] = useState(1)
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
        const next = prev + V * speed * dt
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
  }, [status, speed, model])

  /* -------- aksi lintasan --------
     Catatan: setiap perubahan lintasan memanggil beberapa setState
     independen langsung di dalam event handler (bukan disarangkan
     di dalam fungsi updater setState lain), supaya tetap sesuai pola
     React yang aman dan tidak terpicu ulang tanpa sengaja. */
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
  const cycleSpeed = () => setSpeed((sp) => (sp === 1 ? 2 : sp === 2 ? 0.5 : 1))
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
  const padL = small ? 20 : 42
  const hmax = small ? 54 : 78
  const rowH = small ? 20 : 24
  const tagsH = 10 + 3 * rowH
  const axisY = tagsH + hmax + 16
  const laneY = axisY + hmax + 54
  const H = laneY + 46
  const W = stageW
  const u = (W - 2 * padL) / (XMAX - XMIN)
  const X = (x) => padL + (x - XMIN) * u
  const invX = (px) => (px - padL) / u + XMIN

  function arcGeom(g) {
    const x1 = X(g.x1), x2 = X(g.x2)
    const rx = Math.abs(x2 - x1) / 2
    const ry = Math.min(hmax, 10 + g.len * u * 0.22) + (g.i % 3) * 6
    return { d: `M${x1} ${axisY} A${rx} ${ry} 0 0 1 ${x2} ${axisY}`, mx: (x1 + x2) / 2, ay: axisY - g.dir * ry }
  }

  const tags = useMemo(() => {
    const rows = [[], [], []]
    const out = []
    const n = pts.length
    pts.forEach((x, i) => {
      const label = ptName(i, n)
      const w = label.length * (small ? 6.2 : 7.1) + 16
      const cx = X(x)
      let row = 0
      for (; row < 3; row++) if (rows[row].every((b) => Math.abs(b.cx - cx) > (b.w + w) / 2 + 4)) break
      row = Math.min(row, 2)
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
    path: "Ke mana saja benda bergerak? Ikuti jalur ungunya.",
    pos: "Di mana posisi awal dan akhirnya? Lihat panah cyan lurus dari A.",
    both: "Bandingkan: jalur ungu boleh berliku, panah cyan tetap lurus.",
  }[view]

  const insight = useMemo(() => {
    if (hiddenNow) return ["Tebak dulu, ya. Hasilnya muncul setelah kamu memilih.", "Amati lintasannya, lalu tentukan: jarak, perpindahan, atau sama besar?"]
    if (model.L === 0) return ["A dan B ada di posisi yang sama, dan belum ada waypoint. Belum ada lintasan yang ditempuh.", "Coba seret titik B, atau tambah waypoint."]
    if (d.s <= EPS) return ["Benda masih di titik A. Tekan Mulai, lalu perhatikan jalur ungu dan panah cyan.", "Coba ubah jalurnya: seret titik B atau tambah waypoint."]
    let main
    if (d.absD < 0.0005) main = "Benda kembali ke posisi awal. Lintasan tetap ditempuh, sehingga jarak tidak nol."
    else if (Math.abs(d.s - d.absD) < TOL) main = "Benda bergerak dari posisi awal ke posisi akhir tanpa menambah lintasan ekstra atau berbalik arah."
    else main = "Benda menempuh lintasan tambahan. Karena itu jarak lebih besar daripada besar perpindahan."
    let tip
    if (d.turns > 0) tip = `Benda sudah berbalik arah ${d.turns} kali. Jarak terus bertambah, tapi perpindahan cuma peduli posisi awal dan posisi sekarang.`
    else if (Math.abs(d.s - d.absD) < TOL && d.s >= model.L - TOL) tip = "Ketika benda bergerak lurus dari A ke B tanpa berbalik arah, besar jarak sama dengan besar perpindahan."
    else tip = "Perhatikan: panah perpindahan selalu lurus, walau jalur bendanya berliku."
    return [main, tip]
  }, [hiddenNow, model, d])

  const cmpSentence = useMemo(() => {
    if (hiddenNow) return "Hasilnya disembunyikan dulu. Pilih tebakanmu di atas."
    if (model.L === 0) return "Belum ada lintasan. Ubah jalurnya dulu."
    if (d.s <= EPS) return "Tekan Mulai dan lihat benda bergerak."
    if (d.absD < 0.0005) return "Benda sudah menempuh lintasan, tetapi akhirnya kembali ke posisi awal."
    if (Math.abs(d.s - d.absD) < TOL) return "Lintasan lurus tanpa berbalik: besar jarak sama dengan besar perpindahan."
    return "Lintasan yang ditempuh lebih panjang daripada perubahan posisi."
  }, [hiddenNow, model, d])

  const guessFeedback = useMemo(() => {
    if (!guess) return null
    if (answer == null) return "Lihat lintasannya dulu, lalu pilih. Tidak ada skor, kok."
    const base = "Sekarang lihat bagaimana lintasan memengaruhi jarak, tetapi tidak mengubah posisi akhir."
    if (status !== "done") return base
    const L = model.L, D = Math.abs(model.x1 - model.x0)
    const names = { jarak: "jarak lebih besar", perpindahan: "perpindahan lebih besar", sama: "keduanya sama" }
    let msg = answer === "belum"
      ? `Belum tahu itu wajar, justru itu gunanya eksperimen. Hasilnya: jarak ${fm(L)}, besar perpindahan ${fm(D)}.`
      : `Kamu menebak ${names[answer]}. Hasilnya: jarak ${fm(L)}, besar perpindahan ${fm(D)}.`
    msg += Math.abs(L - D) < TOL
      ? " Di jalur ini tidak ada lintasan ekstra, jadi keduanya sama."
      : " Garis lurus adalah rute terpendek, jadi besar perpindahan tidak pernah melebihi jarak."
    return msg
  }, [guess, answer, status, model])

  /* ---------------------------- grafik posisi-waktu ---------------------------- */
  const graphGhost = useMemo(() => {
    const verts = [{ t: 0, x: model.x0 }]
    model.segs.forEach((g) => verts.push({ t: (g.start + g.len) / V, x: g.x2 }))
    return verts
  }, [model])
  const graphLive = useMemo(() => {
    const pts2 = graphGhost.filter((v) => v.t <= d.s / V + EPS)
    if (!pts2.length || pts2[pts2.length - 1].t < d.s / V - EPS) pts2.push({ t: d.s / V, x: d.x })
    return pts2
  }, [graphGhost, d])

  /* ---------------------------- render ---------------------------- */
  const n = pts.length
  const distScale = Math.max(model.L, 1)
  const pcs = model.segs.filter((g) => g.len > 0).map((g) => g.len * Math.min(1, Math.max(0, (d.s - g.start) / g.len)))
  const barD = hiddenNow ? 0 : (d.s / distScale) * 100
  const barP = hiddenNow ? 0 : (d.absD / distScale) * 100
  const barG = Math.max(0, barD - barP)
  const orderIdx = pts.map((_, i) => i).sort((a, b) => (a === topIdx ? 1 : 0) - (b === topIdx ? 1 : 0))
  const canPlay = !hiddenNow && status !== "playing"
  const playLabel = status === "paused" ? "\u25B6 Lanjut" : status === "done" && model.L > 0 ? "\u25B6 Ulangi" : "\u25B6 Mulai"

  return (
    <div className="space-y-5">
      {/* Header ringkas khusus widget */}
      <div>
        <p className="font-mono text-[11px] uppercase tracking-wider text-cyan-300/70">Coba sendiri</p>
        <p className="text-white/60 text-sm mt-1">
          Ubah jalurnya, lalu perhatikan: jarak mengikuti <span className="text-violet-300 font-medium">path</span>,
          perpindahan mengikuti <span className="text-cyan-300 font-medium">position</span>.
        </p>
      </div>

      {/* Toolbar: mode & tebak dulu */}
      <div className="flex flex-wrap items-center gap-2.5">
        <div className="inline-flex rounded-lg border border-white/15 overflow-hidden" role="group" aria-label="Mode tampilan">
          {[["path", "Path Mode"], ["pos", "Position Mode"], ["both", "Keduanya"]].map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => setView(id)}
              aria-pressed={view === id}
              className={`px-3 py-2 text-xs md:text-sm font-medium transition-colors ${
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
          className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-xs md:text-sm font-medium transition-colors ${
            guess ? "border-cyan-400/60 text-white bg-cyan-500/10" : "border-white/15 text-white/60 hover:text-white"
          }`}
        >
          <span className={`relative inline-block h-[18px] w-8 rounded-full transition-colors ${guess ? "bg-cyan-500/70" : "bg-white/15"}`}>
            <span className={`absolute top-[2px] h-[14px] w-[14px] rounded-full bg-white transition-transform ${guess ? "translate-x-[16px]" : "translate-x-[2px]"}`} />
          </span>
          Tebak dulu
        </button>
      </div>
      <p className="text-cyan-200/80 text-xs md:text-sm -mt-2">{modeCaption}</p>

      {/* Kotak tebakan */}
      {guess && (
        <div className="rounded-xl border border-cyan-400/40 bg-cyan-500/[0.06] p-4">
          <p className="font-semibold text-white text-sm md:text-base">
            {answer == null ? "Menurutmu, mana yang lebih besar?" : "Tebakanmu sudah tercatat. Boleh ganti kapan saja."}
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            {[["jarak", "Jarak"], ["perpindahan", "Perpindahan"], ["sama", "Sama"], ["belum", "Belum tahu"]].map(([id, label]) => (
              <button
                key={id}
                type="button"
                onClick={() => chooseAnswer(id)}
                aria-pressed={answer === id}
                className={`rounded-lg border px-3.5 py-2 text-sm transition-colors ${
                  answer === id ? "border-cyan-400 bg-cyan-500/20 text-white font-semibold" : "border-white/15 bg-white/5 text-white/75 hover:border-cyan-400/60"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <p className="text-white/55 text-sm mt-3">{guessFeedback}</p>
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
          aria-label="Simulasi lintasan benda pada garis bilangan dari -10 sampai +10 meter. Seret titik A, B, atau waypoint, atau pakai slider di panel Atur jalur."
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
            <marker id="ddeArrowP" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M0 1 L9 5 L0 9 Z" fill={COLOR.purple} fillOpacity="0.7" />
            </marker>
            <marker id="ddeArrowC" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto">
              <path d="M0 0 L10 5 L0 10 Z" fill={COLOR.cyan} />
            </marker>
            <marker id="ddeArrowCg" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto">
              <path d="M0 0 L10 5 L0 10 Z" fill={COLOR.cyan} fillOpacity="0.5" />
            </marker>
          </defs>

          {/* grid koordinat */}
          {Array.from({ length: XMAX - XMIN + 1 }, (_, k) => XMIN + k).map((x) => (
            <line key={`g${x}`} x1={X(x)} x2={X(x)} y1={tagsH - 4} y2={laneY + 20}
              stroke={x % 5 === 0 ? "rgba(150,165,215,0.16)" : "rgba(150,165,215,0.07)"} />
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
          <text x={W - padL + 2} y={axisY - 10} fontSize="11" fill={COLOR.muted} textAnchor="end">x (m)</text>

          {/* lintasan rencana (path mode) */}
          <g opacity={view === "pos" ? 0.16 : 1}>
            {model.segs.filter((g) => g.len > 0).map((g) => (
              <path key={`ghost${g.i}`} d={arcGeom(g).d} fill="none" stroke={COLOR.purple} strokeOpacity="0.42" strokeWidth="1.6" strokeDasharray="5 5" markerEnd="url(#ddeArrowP)" />
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
                <line x1={X(model.x0)} y1={laneY} x2={X(model.x1)} y2={laneY} stroke={COLOR.cyan} strokeOpacity="0.45" strokeWidth="2.2" strokeDasharray="7 6" markerEnd="url(#ddeArrowCg)" />
              )}
              <text x={X(model.x0)} y={laneY + 21} fontSize="12" fill="#8fe9f9" textAnchor="middle">A</text>
              <text x={X(model.x1)} y={laneY + (model.x0 === model.x1 ? 35 : 21)} fontSize="12" fill="#8fe9f9" textAnchor="middle">B</text>
            </g>
          )}

          {/* jejak lintasan yang sudah ditempuh */}
          {view !== "pos" && model.segs.filter((g) => g.len > 0).map((g) => {
            const p = Math.min(1, Math.max(0, (d.s - g.start) / g.len))
            if (p < 0.002) return null
            const a = arcGeom(g)
            const approxLen = (Math.PI * (Math.abs(X(g.x2) - X(g.x1)) / 2 + a.ry)) // perkiraan keliling busur elips utk dash
            return (
              <path key={`trail${g.i}`} d={a.d} fill="none" stroke={COLOR.purple} strokeWidth="4.2" strokeLinecap="round"
                filter="url(#ddeGlowP)" pathLength="1" strokeDasharray={`${p} 2`} />
            )
          })}
          {view !== "pos" && model.segs.filter((g) => g.len > 0 && (d.s - g.start) / g.len >= 1 - 1e-6).map((g) => {
            const a = arcGeom(g)
            return (
              <g key={`badge${g.i}`}>
                <circle cx={a.mx} cy={a.ay} r={small ? 10 : 13} fill="#1a1140" stroke={COLOR.purple} />
                <text x={a.mx} y={a.ay + 4} fontSize="11" fontWeight="700" fill="#cfa8fc" textAnchor="middle">{fmt(g.len)}</text>
              </g>
            )
          })}

          {/* panah perpindahan langsung (live) */}
          {view !== "path" && !hiddenNow && (() => {
            const x0 = X(model.x0), xc = X(d.x)
            const items = []
            if (Math.abs(xc - x0) > 7) {
              items.push(<line key="live" x1={x0} y1={laneY} x2={xc - Math.sign(xc - x0) * 0.1} y2={laneY}
                stroke={COLOR.cyan} strokeWidth="4.5" strokeLinecap="round" markerEnd="url(#ddeArrowC)" filter="url(#ddeGlowC)" />)
            } else if (d.s > 0) {
              items.push(<circle key="zero" cx={x0} cy={laneY} r="8" fill="none" stroke={COLOR.cyan} strokeWidth="2.5" />)
            }
            if (d.s > 0) {
              const txt = Math.abs(d.D) < 0.0005 ? "\u0394x = 0 m" : `\u0394x = ${sgn(d.D)} m ${dirArrow(d.D)}`
              const w = txt.length * 7.4 + 16
              const cx = Math.min(W - w / 2 - 4, Math.max(w / 2 + 4, (x0 + xc) / 2))
              items.push(
                <g key="label">
                  <rect x={cx - w / 2} y={laneY - 40} width={w} height="24" rx="7" fill="#0a1428" stroke={COLOR.cyan} />
                  <text x={cx} y={laneY - 24} fontSize="13" fontWeight="600" fill="#fff" textAnchor="middle">{txt}</text>
                </g>
              )
            }
            items.push(<line key="proj" x1={xc} x2={xc} y1={axisY + 10} y2={laneY - 6} stroke={COLOR.cyanSoft} />)
            return items
          })()}

          {/* garis bantu leader + tag posisi */}
          {tags.map((t) => {
            const kind = t.i === 0 ? "A" : t.i === n - 1 ? "B" : "P"
            const h = rowH - 6
            const y = 8 + t.row * rowH
            const rx = Math.min(W - t.w - 3, Math.max(3, t.cx - t.w / 2))
            return (
              <g key={`tag${t.i}`}>
                <line x1={t.cx} x2={t.cx} y1={y + h} y2={axisY - 14} stroke="rgba(207,168,252,0.3)" strokeDasharray="2 4" />
                <rect x={rx} y={y} width={t.w} height={h} rx="6" fill="#0f1631" stroke={kind === "P" ? COLOR.purple : COLOR.cyan} />
                <text x={rx + t.w / 2} y={y + h / 2 + 4} fontSize="12" fill="#fff" textAnchor="middle">{t.label}</text>
              </g>
            )
          })}

          {/* handle A / B / waypoint */}
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
                <circle cx={cx} cy={cy} r="22" fill="transparent" />
                {focusIdx === i && <circle cx={cx} cy={cy} r="14" fill="none" stroke={COLOR.cyan} strokeWidth="2" />}
                {kind === "A" && <circle cx={cx} cy={cy} r="7" fill={COLOR.cyan} stroke="#fff" strokeWidth="1.5" />}
                {kind === "B" && <rect x={cx - 6.5} y={cy - 6.5} width="13" height="13" fill={COLOR.cyan} stroke="#fff" strokeWidth="1.5" transform={`rotate(45 ${cx} ${cy})`} />}
                {kind === "P" && <circle cx={cx} cy={cy} r="5.5" fill="#0a0f22" stroke={COLOR.purple} strokeWidth="2.4" />}
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
      </div>

      {/* legenda */}
      <ul className="flex flex-wrap gap-x-6 gap-y-2 text-xs md:text-sm text-white/55">
        <li className="flex items-center gap-2">
          <svg width="44" height="20" viewBox="0 0 44 20" aria-hidden="true"><path d="M3 15 A18 11 0 0 1 41 15" fill="none" stroke={COLOR.purple} strokeWidth="3" strokeLinecap="round" /></svg>
          <span><b className="text-violet-300">Jarak</b> = seluruh lintasan (lengkung ungu)</span>
        </li>
        <li className="flex items-center gap-2">
          <svg width="44" height="20" viewBox="0 0 44 20" aria-hidden="true"><line x1="3" y1="10" x2="36" y2="10" stroke={COLOR.cyan} strokeWidth="3.5" strokeLinecap="round" /><path d="M31 3 L42 10 L31 17 Z" fill={COLOR.cyan} /></svg>
          <span><b className="text-cyan-300">Perpindahan</b> = panah lurus A → posisi (cyan)</span>
        </li>
      </ul>

      {/* kontrol gerak */}
      <div className="flex flex-wrap items-center gap-2.5">
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
          ↻ Reset
        </button>
        <button type="button" onClick={cycleSpeed}
          className="rounded-lg border border-white/15 px-3 py-2 text-xs font-medium text-white/70 hover:border-white/30 transition-colors">
          Kecepatan {speed}×
        </button>

        <div className="flex-1 min-w-[160px] flex flex-col gap-1">
          <div className="flex justify-between text-[11px] text-white/50 font-mono">
            <span>t = {fmt(s / V)} s</span>
            <span>dari {fmt(model.T)} s</span>
          </div>
          <input
            type="range" min={0} max={1000}
            value={model.L > 0 ? Math.round((s / model.L) * 1000) : 0}
            onChange={(e) => scrub(Number(e.target.value) / 1000)}
            disabled={hiddenNow || model.L === 0}
            aria-label="Progres gerak"
            className="w-full accent-violet-500 disabled:opacity-40"
          />
        </div>
      </div>

      {/* kartu jarak & perpindahan */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="rounded-xl border border-violet-400/50 bg-white/5 p-4">
          <div className="flex items-center justify-between gap-2">
            <span className="font-semibold text-white">Jarak</span>
            <span className="text-[11px] rounded-full border border-violet-300/70 text-violet-200 px-2.5 py-0.5">skalar · tanpa arah</span>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl md:text-4xl font-bold text-violet-200">{hiddenNow ? "?" : fmt(d.s)}</span>
            <span className="text-white/50 text-sm">m</span>
          </div>
          <p className="text-white/50 text-sm mt-1">Total lintasan yang ditempuh</p>
          <p className="text-white/70 text-sm mt-2 min-h-[1.4em]">
            {hiddenNow ? "Disembunyikan sampai kamu menebak" : pcs.length ? `${pcs.map(fmt).join(" + ")} = ${fm(d.s)}` : "Belum ada lintasan yang ditempuh"}
          </p>
          {!hiddenNow && pcs.length > 0 && (
            <div className="mt-2.5 h-3.5 rounded bg-white/5 flex overflow-hidden">
              {pcs.map((p, k) => (
                <div key={k} className="h-full flex items-center justify-center text-[10px] font-bold text-white overflow-hidden whitespace-nowrap"
                  style={{
                    width: `${(p / distScale) * 100}%`,
                    background: k % 2 === 0 ? "repeating-linear-gradient(135deg,#8a2be2 0 6px,#a855f7 6px 12px)" : "repeating-linear-gradient(135deg,#6d28d9 0 6px,#7f3ee0 6px 12px)",
                    borderLeft: k > 0 ? "2px solid #0b1124" : "none",
                  }}>
                  {(p / distScale) * 100 > 9 ? fmt(p) : ""}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="rounded-xl border border-cyan-400/50 bg-white/5 p-4">
          <div className="flex items-center justify-between gap-2">
            <span className="font-semibold text-white">Perpindahan</span>
            <span className="text-[11px] rounded-full border border-cyan-300/70 text-cyan-200 px-2.5 py-0.5">vektor · punya arah</span>
          </div>
          <div className="mt-2 flex items-baseline gap-2 flex-wrap">
            <span className="text-3xl md:text-4xl font-bold text-cyan-200">{hiddenNow ? "?" : fmt(d.absD)}</span>
            <span className="text-white/50 text-sm">m</span>
            {!hiddenNow && <span className="text-2xl text-cyan-200" aria-hidden="true">{dirArrow(d.D)}</span>}
            {!hiddenNow && <span className="text-white/70 text-sm">{dirWord(d.D)}</span>}
          </div>
          <p className="text-white/50 text-sm mt-1">Perubahan posisi dari A ke posisi sekarang</p>
          <p className="text-white/70 text-sm mt-2 min-h-[1.4em]">
            {hiddenNow ? "Disembunyikan sampai kamu menebak" : `\u0394x = ${fmt(d.x)} \u2212 (${fmt(model.x0)}) = ${sgn(d.D)} m`}
          </p>
          <div className="mt-2.5 h-3.5 flex items-center">
            <svg width="100%" height="14" viewBox="0 0 100 14" preserveAspectRatio="none">
              <line x1="0" y1="7" x2="86" y2="7" stroke={COLOR.cyan} strokeWidth="3" vectorEffect="non-scaling-stroke" />
            </svg>
          </div>
        </div>
      </div>

      {/* perbandingan */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <h4 className="font-semibold text-white mb-3">Path vs Position</h4>
        <div className="space-y-2.5">
          <CmpRow label="Jarak" labelClass="text-violet-300" value={hiddenNow ? "?" : fm(d.s)} valueClass="text-violet-300">
            <div className="h-3.5 rounded bg-white/5 overflow-hidden">
              <div className="h-full transition-[width] duration-75" style={{ width: `${barD}%`, background: "repeating-linear-gradient(135deg,#8a2be2 0 6px,#a855f7 6px 12px)" }} />
            </div>
          </CmpRow>
          <CmpRow label="Perpindahan" labelClass="text-cyan-300" value={hiddenNow ? "?" : `${fm(d.absD)} ${dirArrow(d.D)}`.trim()} valueClass="text-cyan-300">
            <div className="h-3.5 rounded bg-white/5 overflow-hidden">
              <div className="h-full transition-[width] duration-75 rounded-sm" style={{ width: `${Math.max(barP, hiddenNow || d.absD === 0 ? 0 : 1.5)}%`, background: COLOR.cyan }} />
            </div>
          </CmpRow>
          <CmpRow label="Selisih" value={hiddenNow ? "?" : fm(Math.max(0, d.s - d.absD))}>
            <div className="h-3.5 rounded bg-white/5 overflow-hidden">
              <div className="h-full" style={{ width: `${barG}%`, background: "repeating-linear-gradient(90deg,rgba(255,255,255,0.55) 0 2px,transparent 2px 6px)" }} />
            </div>
          </CmpRow>
        </div>
        <p className="mt-3 pl-3 py-2 border-l-2 border-cyan-400 bg-cyan-500/[0.06] rounded-r-lg text-sm font-medium text-white/90">{cmpSentence}</p>
        {!hiddenNow && <p className="text-white/45 text-xs md:text-sm mt-2">Cek: |\u0394x| = {fmt(d.absD)} \u2264 s = {fmt(d.s)}. Selalu benar, apa pun jalurnya.</p>}
      </div>

      {/* insight */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <h4 className="font-semibold text-white mb-2">Apa yang sedang terjadi?</h4>
        <p className="text-white/80 text-sm">{insight[0]}</p>
        <p className="text-white/50 text-sm mt-1.5">{insight[1]}</p>
      </div>

      {/* preset & editor jalur, dua kolom di layar lebar */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <h4 className="font-semibold text-white mb-1">Skenario eksperimen</h4>
          <p className="text-white/50 text-sm mb-3">Pilih satu, lalu perhatikan lintasan dan panah perpindahannya.</p>
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
          <h4 className="font-semibold text-white mb-1">Atur jalur</h4>
          <p className="text-white/50 text-sm mb-3">Seret titik di simulasi, atau geser slider posisi (meter).</p>
          <ul className="space-y-2.5">
            {pts.map((x, i) => {
              const isWp = i > 0 && i < n - 1
              return (
                <li key={i} className="grid grid-cols-[64px_1fr_48px_auto] gap-2 items-center">
                  <span className={`text-xs font-semibold ${isWp ? "text-violet-300" : "text-cyan-300"}`}>{ptName(i, n)}</span>
                  <input
                    type="range" min={XMIN} max={XMAX} step={1} value={x}
                    onChange={(e) => setPoint(i, Number(e.target.value))}
                    aria-label={`Posisi ${ptAria(i, n)} dalam meter`}
                    className="w-full accent-violet-500"
                  />
                  <span className="text-white/70 text-sm text-right font-mono">{x}</span>
                  {isWp ? (
                    <button type="button" onClick={() => removeWaypoint(i)} aria-label={`Hapus waypoint P${i}`}
                      className="w-8 h-8 rounded-lg border border-white/15 text-white/50 hover:border-red-300/60 hover:text-red-300 transition-colors">✕</button>
                  ) : <span className="w-8" />}
                </li>
              )
            })}
          </ul>
          <div className="flex items-center gap-3 mt-3">
            <button type="button" onClick={addWaypoint} disabled={n - 2 >= MAX_WP}
              className="rounded-lg border border-white/15 disabled:opacity-40 px-3 py-2 text-sm font-medium text-white/80 hover:border-violet-400/50 transition-colors">
              + Waypoint
            </button>
            <span className="text-white/40 text-xs">{n - 2 >= MAX_WP ? `Maksimum ${MAX_WP} waypoint` : `${n - 2} waypoint`}</span>
          </div>
          <p className="text-white/40 text-xs mt-2">Waypoint dilewati berurutan: A → P1 → P2 → … → B.</p>
        </div>
      </div>

      {/* grafik posisi-waktu */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <h4 className="font-semibold text-white mb-1">Grafik posisi terhadap waktu</h4>
        <p className="text-white/50 text-sm mb-2">Garis naik = bergerak ke kanan. Garis turun = bergerak ke kiri.</p>
        {hiddenNow ? (
          <div className="h-[200px] flex items-center justify-center text-white/35 text-sm">Grafik muncul setelah kamu menebak</div>
        ) : (
          <div className="h-[220px] -ml-2">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart margin={{ top: 8, right: 12, bottom: 4, left: 0 }}>
                <CartesianGrid stroke="rgba(150,165,215,0.12)" />
                <XAxis dataKey="t" type="number" domain={[0, Math.max(model.T, 0.1)]}
                  tick={{ fill: "#9aa4c7", fontSize: 11 }} tickFormatter={(v) => fmt(v)}
                  label={{ value: "t (s)", position: "insideBottom", offset: -2, fill: "#9aa4c7", fontSize: 11 }} />
                <YAxis dataKey="x" type="number" domain={[XMIN, XMAX]}
                  tick={{ fill: "#9aa4c7", fontSize: 11 }} tickFormatter={(v) => fmt(v)}
                  label={{ value: "x (m)", angle: -90, position: "insideLeft", fill: "#9aa4c7", fontSize: 11 }} />
                <Tooltip
                  formatter={(v) => [`${fmt(v)} m`, "posisi"]}
                  labelFormatter={(v) => `t = ${fmt(v)} s`}
                  contentStyle={{ background: "#0f1631", border: "1px solid rgba(150,165,215,0.3)", borderRadius: 8, fontSize: 12 }}
                  labelStyle={{ color: "#9aa4c7" }}
                />
                <ReferenceLine y={model.x0} stroke={COLOR.cyanSoft} strokeDasharray="3 4" />
                {model.x1 !== model.x0 && <ReferenceLine y={model.x1} stroke={COLOR.cyanSoft} strokeDasharray="3 4" />}
                <Line data={graphGhost} dataKey="x" stroke="#9aa4c7" strokeOpacity={0.6} strokeWidth={1.4} strokeDasharray="4 4" dot={false} isAnimationActive={false} />
                <Line data={graphLive} dataKey="x" stroke={COLOR.cyan} strokeWidth={2.6} dot={false} isAnimationActive={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>

      {/* data panel */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <h4 className="font-semibold text-white mb-2">Data real-time</h4>
        <dl className="divide-y divide-white/10 text-sm">
          <DataRow label="Posisi awal x₀" value={fm(model.x0)} />
          <DataRow label="Posisi sekarang x" value={hiddenNow ? "?" : fm(d.x)} />
          <DataRow label="Posisi akhir x₁" value={fm(model.x1)} />
          <DataRow label="Jarak s" value={hiddenNow ? "?" : fm(d.s)} valueClass="text-violet-300" />
          <DataRow label="Perpindahan \u0394x" value={hiddenNow ? "?" : (Math.abs(d.D) < 0.0005 ? "0 m" : `${sgn(d.D)} m`)} valueClass="text-cyan-300" />
          <DataRow label="Arah perpindahan" value={hiddenNow ? "?" : (Math.abs(d.D) < 0.0005 ? "— (nol)" : `${dirArrow(d.D)} ${dirWord(d.D)}`)} valueClass="text-cyan-300" />
          <DataRow label="Arah gerak sekarang" value={(() => { const md = moveDir(model, s, status === "playing"); return md > 0 ? "→ ke kanan" : md < 0 ? "← ke kiri" : "diam" })()} />
          <DataRow label="Panjang lintasan (total)" value={fm(model.L)} valueClass="text-violet-300" last />
        </dl>
      </div>

      {/* rumus */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <h4 className="font-semibold text-white mb-2">Rumusnya</h4>
        {!(ran || forceFormula) ? (
          <div className="rounded-lg border border-dashed border-white/20 p-4 text-white/55 text-sm">
            <p className="mb-3">Rumus baru muncul setelah kamu mengamati gerakannya. Jalankan satu putaran simulasi dulu, ya.</p>
            <button type="button" onClick={() => setForceFormula(true)}
              className="rounded-lg border border-white/15 px-3 py-2 text-sm font-medium text-white/80 hover:border-violet-400/50 transition-colors">
              Buka rumus sekarang
            </button>
          </div>
        ) : (
          <div>
            <p className="text-white/50 text-sm mb-3">Ini cuma cara menuliskan apa yang baru kamu lihat, dengan angka dari jalurmu.</p>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="rounded-lg bg-white/[0.04] border-l-4 border-violet-400 p-3.5">
                <h5 className="font-semibold text-white text-sm">Jarak</h5>
                <p className="text-white font-semibold mt-1.5">s = total panjang lintasan</p>
                <p className="text-white/55 text-sm mt-1">
                  {model.L === 0 ? "s = 0 m" : `${model.segs.filter((g) => g.len > 0).map((g) => fmt(g.len)).join(" + ")} = ${fm(model.L)}`}
                </p>
                <p className="text-white/45 text-xs mt-2">Skalar: hanya punya besar, tidak pernah negatif.</p>
              </div>
              <div className="rounded-lg bg-white/[0.04] border-l-4 border-cyan-400 p-3.5">
                <h5 className="font-semibold text-white text-sm">Perpindahan</h5>
                <p className="text-white font-semibold mt-1.5">{"\u0394x = x akhir \u2212 x awal"}</p>
                <p className="text-white/55 text-sm mt-1">
                  {`\u0394x = ${fmt(model.x1)} \u2212 (${fmt(model.x0)}) = ${sgn(model.x1 - model.x0)} m`}
                  {Math.abs(model.x1 - model.x0) < 0.0005 ? " (kembali ke awal)" : ` (${dirWord(model.x1 - model.x0)})`}
                </p>
                <p className="text-white/45 text-xs mt-2">Vektor: punya besar dan arah (tanda + ke kanan, − ke kiri).</p>
              </div>
            </div>
            <ul className="list-disc pl-5 mt-3 space-y-1 text-white/75 text-sm">
              <li>Jarak bergantung pada <b>seluruh lintasan</b>.</li>
              <li>Perpindahan hanya bergantung pada <b>posisi awal dan posisi akhir</b>.</li>
              <li>Besar perpindahan tidak pernah melebihi jarak: |\u0394x| \u2264 s.</li>
            </ul>
          </div>
        )}
      </div>

      {/* refleksi */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <h4 className="font-semibold text-white mb-2">Coba pikirkan</h4>
        <blockquote className="border-l-2 border-violet-400 pl-3 text-white/85 italic text-[15px]">
          “Jika sebuah benda berjalan 20 meter ke kanan lalu kembali 20 meter ke kiri, apakah jaraknya 0 meter?”
        </blockquote>
        <button type="button" onClick={() => setReflectionOpen((v) => !v)} aria-expanded={reflectionOpen}
          className="mt-3 rounded-lg border border-white/15 px-3 py-2 text-sm font-medium text-white/80 hover:border-violet-400/50 transition-colors">
          {reflectionOpen ? "Sembunyikan jawaban" : "Lihat jawaban"}
        </button>
        {reflectionOpen && (
          <div className="mt-3 rounded-lg border border-violet-400/40 bg-violet-500/10 px-4 py-3 text-white/85 text-sm">
            Tidak. Jaraknya 40 meter karena seluruh lintasan dihitung. Tetapi perpindahannya 0 meter karena benda kembali ke posisi awal.
          </div>
        )}
      </div>
    </div>
  )
}

/* ---------------------------- sub-komponen kecil ---------------------------- */

function CmpRow({ label, labelClass = "text-white/60", value, valueClass = "text-white", children }) {
  return (
    <div className="grid grid-cols-[92px_1fr_88px] gap-2.5 items-center">
      <span className={`text-sm ${labelClass}`}>{label}</span>
      {children}
      <span className={`text-sm font-semibold text-right ${valueClass}`}>{value}</span>
    </div>
  )
}

function DataRow({ label, value, valueClass = "text-white", last = false }) {
  return (
    <div className={`flex items-center justify-between py-2 ${last ? "" : ""}`}>
      <dt className="text-white/55">{label}</dt>
      <dd className={`font-semibold ${valueClass}`}>{value}</dd>
    </div>
  )
}
