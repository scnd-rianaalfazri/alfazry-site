import { useEffect, useRef, useState } from "react"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const surfaces = {
  Es: { mu: 0.05, desc: "Sangat licin" },
  Keramik: { mu: 0.2, desc: "Licin" },
  Kayu: { mu: 0.4, desc: "Sedang" },
  Aspal: { mu: 0.7, desc: "Kasar" },
}

const tabs = [
  { id: "simulasi", label: "Simulasi", icon: "🧪" },
  { id: "grafik", label: "Grafik", icon: "📊" },
  { id: "hasil", label: "Hasil", icon: "📋" },
  { id: "analisis", label: "Analisis", icon: "🧠" },
]

export default function VirLabNewton2Simulation() {
  const [force, setForce] = useState(80)
  const [mass, setMass] = useState(20)
  const [surface, setSurface] = useState("Kayu")

  const [running, setRunning] = useState(false)
  const [position, setPosition] = useState(0)
  const [velocity, setVelocity] = useState(0)
  const [time, setTime] = useState(0)

  const [velocityData, setVelocityData] = useState([])
  const [positionData, setPositionData] = useState([])

  const frameRef = useRef()
  const velocityRef = useRef(0)
  const positionRef = useRef(0)
  const timeRef = useRef(0)
  const arenaRef = useRef(null)

  const [activeTab, setActiveTab] = useState("simulasi")
  const [arenaWidth, setArenaWidth] = useState(600)

  const mu = surfaces[surface].mu
  const g = 9.8

  const weight = mass * g
  const normal = weight
  const friction = mu * normal
  const netForce = Math.max(force - friction, 0)
  const acceleration = netForce / mass
  const isMoving = netForce > 0

  // Keep arena responsive to its actual rendered width
  useEffect(() => {
    const el = arenaRef.current
    if (!el) return
    const update = () => setArenaWidth(el.clientWidth)
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    if (!running) return

    let last = performance.now()

    const animate = (now) => {
      const dt = Math.min((now - last) / 1000, 0.05)
      last = now

      timeRef.current += dt
      velocityRef.current += acceleration * dt
      positionRef.current += velocityRef.current * 8 * dt

      const maxTravel = Math.max(arenaWidth - 60, 50)
      const limitedPosition = Math.min(positionRef.current, maxTravel)

      setTime(timeRef.current)
      setVelocity(velocityRef.current)
      setPosition(limitedPosition)

      setVelocityData((prev) => [
        ...prev.slice(-100),
        {
          time: Number(timeRef.current.toFixed(2)),
          velocity: Number(velocityRef.current.toFixed(2)),
        },
      ])

      setPositionData((prev) => [
        ...prev.slice(-100),
        {
          time: Number(timeRef.current.toFixed(2)),
          position: Number(limitedPosition.toFixed(2)),
        },
      ])

      if (limitedPosition >= maxTravel) {
        setRunning(false)
        return
      }

      frameRef.current = requestAnimationFrame(animate)
    }

    frameRef.current = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(frameRef.current)
  }, [running, acceleration, arenaWidth])

  const resetSimulation = () => {
    setRunning(false)

    timeRef.current = 0
    velocityRef.current = 0
    positionRef.current = 0

    setTime(0)
    setVelocity(0)
    setPosition(0)

    setVelocityData([])
    setPositionData([])
  }

  const explanation = isMoving
    ? `Gaya dorong (${force} N) lebih besar daripada gaya gesek (${friction.toFixed(1)} N). Resultan gaya sebesar ${netForce.toFixed(1)} N membuat benda berakselerasi sebesar ${acceleration.toFixed(2)} m/s².`
    : `Gaya dorong (${force} N) belum mampu mengatasi gaya gesek (${friction.toFixed(1)} N). Resultan gaya nol sehingga benda tetap diam (ΣF = 0).`

  const forceArrow = Math.max(40, Math.min(force * 0.5, 110))
  const frictionArrow = Math.max(20, Math.min(friction * 0.3, 110))

  return (
    <div className="max-w-6xl mx-auto rounded-3xl hud-frame border border-violet-400/20 bg-gradient-to-br from-[#05060f] via-[#0b0e1f] to-[#1a0b2e] p-6 text-white">
      <div className="flex flex-wrap items-start justify-between gap-3 mb-6">
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-black flex items-center gap-2 [text-shadow:0_0_24px_rgba(139,59,255,0.45)]">
            <span>⚡</span> Simulasi Hukum Newton II
          </h2>
          <p className="text-white/60 mt-1">
            Eksplorasi hubungan gaya, massa, gesekan, dan percepatan.
          </p>
        </div>

        <div
          className={`flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium ${
            running
              ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"
              : "bg-white/5 text-white/50 border border-white/10"
          }`}
        >
          <span
            className={`h-2 w-2 rounded-full ${
              running ? "bg-emerald-400 animate-pulse" : "bg-white/30"
            }`}
          />
          {running ? "Berjalan" : "Berhenti"}
        </div>
      </div>

      <div className="grid lg:grid-cols-[300px_1fr] gap-6 items-start">
        {/* Kontrol */}
        <div className="rounded-2xl bg-white/[0.03] border border-violet-400/10 p-5 lg:sticky lg:top-4">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            🎛 Kontrol
          </h3>

          <div className="flex items-baseline justify-between mb-2">
            <label className="text-sm text-white/70">Gaya dorong</label>
            <span className="font-mono text-violet-300">{force} N</span>
          </div>
          <input
            type="range"
            min="10"
            max="300"
            value={force}
            onChange={(e) => setForce(Number(e.target.value))}
            className="w-full mb-5 accent-violet-500"
          />

          <div className="flex items-baseline justify-between mb-2">
            <label className="text-sm text-white/70">Massa</label>
            <span className="font-mono text-violet-300">{mass} kg</span>
          </div>
          <input
            type="range"
            min="1"
            max="100"
            value={mass}
            onChange={(e) => setMass(Number(e.target.value))}
            className="w-full mb-5 accent-violet-500"
          />

          <label className="block text-sm text-white/70 mb-2">Permukaan</label>
          <select
            value={surface}
            onChange={(e) => setSurface(e.target.value)}
            className="w-full rounded-lg bg-slate-800 border border-white/10 p-3 mb-1.5"
          >
            {Object.keys(surfaces).map((item) => (
              <option key={item} value={item}>
                {item} (μ = {surfaces[item].mu})
              </option>
            ))}
          </select>
          <p className="text-xs text-white/40 mb-5">
            {surfaces[surface].desc} &middot; koefisien gesek {mu}
          </p>

          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => setRunning(true)}
              disabled={running}
              className="rounded-xl bg-gradient-to-r from-violet-500 to-violet-700 disabled:opacity-30 disabled:text-white/40 px-3 py-3 font-medium transition hover:scale-[1.03] shadow-lg shadow-violet-600/30"
            >
              ▶ Mulai
            </button>

            <button
              onClick={() => setRunning(false)}
              disabled={!running}
              className="rounded-xl bg-amber-500 disabled:bg-amber-500/30 disabled:text-white/40 px-3 py-3 font-medium transition-colors hover:bg-amber-400"
            >
              ⏸ Pause
            </button>

            <button
              onClick={resetSimulation}
              className="rounded-xl bg-red-500/90 px-3 py-3 font-medium transition-colors hover:bg-red-400"
            >
              ↺ Reset
            </button>
          </div>
        </div>

        {/* Konten Tab */}
        <div className="min-w-0">
          {/* Tombol Tab */}
          <div className="flex flex-wrap gap-2 mb-5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium font-hud transition-colors ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-violet-500 to-violet-700 text-white"
                    : "bg-white/5 text-white/60 hover:bg-white/10"
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>

          {/* TAB SIMULASI */}
          {activeTab === "simulasi" && (
            <div className="grid md:grid-cols-2 gap-6">
              {/* Free Body Diagram */}
              <div className="rounded-2xl bg-white/[0.03] border border-violet-400/10 p-5">
                <h3 className="font-semibold mb-4">🧭 Free Body Diagram</h3>

                <div className="relative mx-auto h-64 w-64">
                  {/* Normal force (up) */}
                  <div
                    className="absolute left-1/2 top-1/2 w-1 -translate-x-1/2 bg-green-500"
                    style={{ height: 70, bottom: "50%" }}
                  />
                  <div className="absolute left-1/2 top-3 -translate-x-1/2 text-green-400 text-sm font-semibold">
                    N = {normal.toFixed(0)} N
                  </div>

                  {/* Weight (down) */}
                  <div
                    className="absolute left-1/2 top-1/2 w-1 -translate-x-1/2 bg-red-500"
                    style={{ height: 70 }}
                  />
                  <div className="absolute left-1/2 bottom-2 -translate-x-1/2 text-red-400 text-sm font-semibold">
                    W = {weight.toFixed(0)} N
                  </div>

                  {/* Applied force (right) */}
                  <div
                    className="absolute top-1/2 left-1/2 h-1 bg-cyan-500"
                    style={{ width: forceArrow }}
                  />
                  <div
                    className="absolute top-1/2 -translate-y-6 text-cyan-400 text-sm font-semibold"
                    style={{ left: `calc(50% + ${forceArrow}px + 6px)` }}
                  >
                    F = {force} N
                  </div>

                  {/* Friction (left) */}
                  <div
                    className="absolute top-1/2 left-1/2 h-1 -translate-x-full bg-orange-500"
                    style={{ width: frictionArrow }}
                  />
                  <div
                    className="absolute top-1/2 translate-y-3 text-orange-400 text-sm font-semibold"
                    style={{ left: `calc(50% - ${frictionArrow}px - 6px)`, transform: "translate(-100%, 12px)" }}
                  >
                    f = {friction.toFixed(1)} N
                  </div>

                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl">
                    🚗
                  </div>
                </div>

                <p className="text-center text-xs text-white/40 mt-3">
                  Panjang vektor sebanding dengan besar gaya
                </p>
              </div>

              {/* Data Real-Time */}
              <div className="rounded-2xl bg-white/[0.03] border border-violet-400/10 p-5">
                <h3 className="font-semibold mb-4">📊 Data Real-Time</h3>

                <div className="grid grid-cols-2 gap-3">
                  <Stat label="⏱ Waktu" value={`${time.toFixed(1)} s`} />
                  <Stat label="📍 Posisi" value={`${position.toFixed(1)} m`} />
                  <Stat label="🚗 Kecepatan" value={`${velocity.toFixed(2)} m/s`} />
                  <Stat
                    label="⚡ Percepatan"
                    value={`${acceleration.toFixed(2)} m/s²`}
                    accent="text-cyan-300"
                  />
                  <Stat label="🧲 Gesekan" value={`${friction.toFixed(1)} N`} accent="text-orange-300" />
                  <Stat
                    label="➡️ Resultan Gaya"
                    value={`${netForce.toFixed(1)} N`}
                    accent={isMoving ? "text-emerald-300" : "text-white/40"}
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB GRAFIK */}
          {activeTab === "grafik" && (
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-white/[0.03] border border-violet-400/10 p-5">
                <h3 className="font-semibold mb-4">📈 Kecepatan vs Waktu</h3>

                <div className="h-72">
                  {velocityData.length === 0 ? (
                    <EmptyChart text="Tekan Mulai untuk merekam data kecepatan" />
                  ) : (
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={velocityData.slice(-30)}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                        <XAxis dataKey="time" stroke="rgba(255,255,255,0.4)" />
                        <YAxis
                          stroke="rgba(255,255,255,0.4)"
                          domain={[(dataMin) => dataMin - 1, (dataMax) => dataMax + 1]}
                        />
                        <Tooltip
                          contentStyle={{ background: "#0f172a", border: "1px solid rgba(255,255,255,0.1)" }}
                        />
                        <Line
                          dataKey="velocity"
                          stroke="#06b6d4"
                          strokeWidth={3}
                          dot={false}
                          isAnimationActive={false}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  )}
                </div>
              </div>

              <div className="rounded-2xl bg-white/[0.03] border border-violet-400/10 p-5">
                <h3 className="font-semibold mb-4">📊 Posisi vs Waktu</h3>

                <div className="h-72">
                  {positionData.length === 0 ? (
                    <EmptyChart text="Tekan Mulai untuk merekam data posisi" />
                  ) : (
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={positionData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                        <XAxis dataKey="time" stroke="rgba(255,255,255,0.4)" />
                        <YAxis
                          stroke="rgba(255,255,255,0.4)"
                          domain={[(dataMin) => dataMin - 10, (dataMax) => dataMax + 10]}
                        />
                        <Tooltip
                          contentStyle={{ background: "#0f172a", border: "1px solid rgba(255,255,255,0.1)" }}
                        />
                        <Line
                          dataKey="position"
                          stroke="#22c55e"
                          strokeWidth={3}
                          dot={false}
                          isAnimationActive={false}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TAB HASIL */}
          {activeTab === "hasil" && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <ResultCard label="Waktu" value={time.toFixed(2)} unit="s" />
              <ResultCard label="Posisi" value={position.toFixed(2)} unit="m" />
              <ResultCard label="Kecepatan" value={velocity.toFixed(2)} unit="m/s" />
              <ResultCard
                label="Percepatan"
                value={acceleration.toFixed(2)}
                unit="m/s²"
                accent="text-cyan-300"
              />
            </div>
          )}

          {/* TAB ANALISIS */}
          {activeTab === "analisis" && (
            <div className="rounded-2xl bg-cyan-500/10 border border-cyan-500/20 p-5">
              <h3 className="font-semibold mb-4">🧠 Analisis Hukum Newton II</h3>

              <div className="space-y-1 text-white/80 font-mono text-sm">
                <AnalisisRow label="Massa benda (m)" value={`${mass} kg`} />
                <AnalisisRow label="Gaya dorong (F)" value={`${force} N`} />
                <AnalisisRow label="Koefisien gesek (μ)" value={`${mu}`} />
                <AnalisisRow label="Gaya normal (N)" value={`${normal.toFixed(2)} N`} />
                <AnalisisRow label="Gaya gesek (f = μN)" value={`${friction.toFixed(2)} N`} />
                <AnalisisRow
                  label="Resultan gaya (ΣF = F - f)"
                  value={`${netForce.toFixed(2)} N`}
                />
                <AnalisisRow
                  label="Percepatan (a = ΣF / m)"
                  value={`${acceleration.toFixed(2)} m/s²`}
                  accent="text-cyan-300"
                />
              </div>

              <p className="mt-4 text-sm text-white/60 leading-relaxed">{explanation}</p>
            </div>
          )}
        </div>
      </div>

      {/* Arena Simulasi */}
      <div className="mt-6 rounded-2xl bg-white/[0.03] border border-violet-400/10 p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">🏁 Arena Simulasi</h3>
          <span className="text-xs text-white/40 font-mono">
            {position.toFixed(0)} m
          </span>
        </div>

        <div
          ref={arenaRef}
          className="relative h-44 overflow-hidden rounded-xl border border-white/10 bg-slate-900"
        >
          {/* Distance markers */}
          <div className="absolute inset-x-0 bottom-8 h-px bg-white/20" />
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="absolute bottom-7 h-2 w-px bg-white/20"
              style={{ left: `${(i + 1) * 10}%` }}
            />
          ))}

          <div
            className="absolute bottom-9 text-5xl transition-transform"
            style={{
              transform: `translateX(${position}px) ${isMoving && running ? "" : ""}`,
              left: 0,
            }}
          >
            🚗
          </div>
        </div>

        {!running && netForce <= 0 && (
          <p className="text-xs text-amber-300/80 mt-3">
            ⚠️ Mobil tidak akan bergerak — tambah gaya dorong atau pilih permukaan yang lebih licin.
          </p>
        )}
      </div>

      {/* Penjelasan Konsep */}
      <div className="mt-6 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 p-5">
        <h3 className="font-semibold mb-2">🤖 Penjelasan Konsep</h3>
        <p className="text-white/80 leading-relaxed">{explanation}</p>
      </div>
    </div>
  )
}

function Stat({ label, value, accent = "text-white" }) {
  return (
    <div className="rounded-xl bg-white/5 p-3">
      <p className="text-xs text-white/50 mb-1">{label}</p>
      <p className={`text-lg font-semibold font-mono ${accent}`}>{value}</p>
    </div>
  )
}

function ResultCard({ label, value, unit, accent = "text-white" }) {
  return (
    <div className="rounded-xl bg-white/[0.03] border border-violet-400/10 p-4">
      <p className="text-white/50 text-sm mb-1">{label}</p>
      <p className={`text-2xl font-bold font-mono ${accent}`}>
        {value} <span className="text-sm text-white/40">{unit}</span>
      </p>
    </div>
  )
}

function AnalisisRow({ label, value, accent = "text-white" }) {
  return (
    <div className="flex items-center justify-between py-1 border-b border-white/5 last:border-0">
      <span className="text-white/60">{label}</span>
      <span className={`font-semibold ${accent}`}>{value}</span>
    </div>
  )
}

function EmptyChart({ text }) {
  return (
    <div className="h-full flex items-center justify-center text-center text-sm text-white/30 px-6">
      {text}
    </div>
  )
}
