import { useEffect, useRef, useState } from "react"

const surfaces = {
  Es: 0.05,
  Keramik: 0.2,
  Kayu: 0.4,
  Aspal: 0.7,
}

export default function virlabnewton2simulation() {
  const [force, setForce] = useState(80)
  const [mass, setMass] = useState(20)
  const [surface, setSurface] = useState("Kayu")

  const [running, setRunning] = useState(false)
  const [position, setPosition] = useState(0)
  const [velocity, setVelocity] = useState(0)
  const [time, setTime] = useState(0)

  const frameRef = useRef()

  const mu = surfaces[surface]
  const g = 9.8

  const weight = mass * g
  const normal = weight
  const friction = mu * normal
  const netForce = Math.max(force - friction, 0)
  const acceleration = netForce / mass

  useEffect(() => {
    if (!running) return

    let last = performance.now()

    const animate = (now) => {
      const dt = (now - last) / 1000
      last = now

      setTime((t) => t + dt)

      setVelocity((v) => {
        const nextV = v + acceleration * dt

        setPosition((p) => {
          const nextP = p + nextV * 8 * dt
          return Math.min(nextP, 1300)
        })

        return nextV
      })

      frameRef.current = requestAnimationFrame(animate)
    }

    frameRef.current = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(frameRef.current)
  }, [running, acceleration])

  const resetSimulation = () => {
    setRunning(false)
    setPosition(0)
    setVelocity(0)
    setTime(0)
  }

  const explanation =
    netForce <= 0
      ? "Gaya dorong belum mampu mengatasi gaya gesek. Resultan gaya nol sehingga benda tetap diam."
      : "Gaya dorong lebih besar daripada gaya gesek. Resultan gaya bernilai positif sehingga benda mengalami percepatan."

  const forceArrow = Math.max(40, force * 0.8)
  const frictionArrow = Math.max(20, friction * 0.4)
  const verticalArrow = Math.max(40, weight * 0.2)

  return (
    <div className="max-w-6xl mx-auto rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <h2 className="text-3xl font-bold mb-2">⚡ Simulasi Hukum Newton II</h2>
      <p className="text-white/70 mb-8">
        Eksplorasi hubungan gaya, massa, gesekan, dan percepatan.
      </p>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="rounded-2xl bg-black/20 p-5">
          <h3 className="font-semibold mb-4">🎛 Kontrol</h3>

          <label className="block mb-2">Gaya: {force} N</label>
          <input
            type="range"
            min="10"
            max="300"
            value={force}
            onChange={(e) => setForce(Number(e.target.value))}
            className="w-full mb-5"
          />

          <label className="block mb-2">Massa: {mass} kg</label>
          <input
            type="range"
            min="1"
            max="100"
            value={mass}
            onChange={(e) => setMass(Number(e.target.value))}
            className="w-full mb-5"
          />

          <label className="block mb-2">Permukaan</label>
          <select
            value={surface}
            onChange={(e) => setSurface(e.target.value)}
            className="w-full rounded-lg bg-slate-800 p-3 mb-5"
          >
            {Object.keys(surfaces).map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>

          <div className="flex gap-2">
            <button
              onClick={() => setRunning(true)}
              className="flex-1 rounded-xl bg-cyan-500 px-4 py-3 font-medium"
            >
              ▶ Mulai
            </button>

            <button
              onClick={() => setRunning(false)}
              className="flex-1 rounded-xl bg-amber-500 px-4 py-3 font-medium"
            >
              ⏸ Pause
            </button>

            <button
              onClick={resetSimulation}
              className="flex-1 rounded-xl bg-red-500 px-4 py-3 font-medium"
            >
              ↺ Reset
            </button>
          </div>
        </div>

        <div className="rounded-2xl bg-black/20 p-5">
          <h3 className="font-semibold mb-4">🧭 Free Body Diagram</h3>

          <div className="relative mx-auto h-64 w-64">
            <div
              className="absolute left-1/2 bottom-32 w-1 -translate-x-1/2 bg-green-500"
              style={{ height: verticalArrow }}
            />
            <div className="absolute left-1/2 top-3 -translate-x-1/2 text-green-400">
              N
            </div>

            <div
              className="absolute left-1/2 top-32 w-1 -translate-x-1/2 bg-red-500"
              style={{ height: verticalArrow }}
            />
            <div className="absolute left-1/2 bottom-3 -translate-x-1/2 text-red-400">
              W
            </div>

            <div
              className="absolute top-1/2 left-32 h-1 bg-cyan-500"
              style={{ width: forceArrow }}
            />
            <div className="absolute right-0 top-1/2 text-cyan-400">F</div>

            <div
              className="absolute top-1/2 right-32 h-1 bg-orange-500"
              style={{ width: frictionArrow }}
            />
            <div className="absolute left-0 top-1/2 text-orange-400">f</div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl">
              🚗
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-black/20 p-5">
          <h3 className="font-semibold mb-4">📊 Data Real-Time</h3>

          <div className="space-y-3">
            <p>⏱ Waktu: {time.toFixed(1)} s</p>
            <p>📍 Posisi: {position.toFixed(1)} m</p>
            <p>🚗 Kecepatan: {velocity.toFixed(2)} m/s</p>
            <p>⚡ Percepatan: {acceleration.toFixed(2)} m/s²</p>
            <p>🧲 Gesekan: {friction.toFixed(1)} N</p>
            <p>➡️ Resultan Gaya: {netForce.toFixed(1)} N</p>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-black/20 p-5">
        <h3 className="font-semibold mb-4">🏁 Arena Simulasi</h3>

        <div className="relative h-44 overflow-hidden rounded-xl border border-white/10 bg-slate-900">
          <div className="absolute bottom-8 h-1 w-full bg-gray-500" />

          <div
            className="absolute bottom-9 text-6xl"
            style={{ left: `${position}px` }}
          >
            🚗
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 p-5">
        <h3 className="font-semibold mb-2">🤖 Penjelasan Konsep</h3>
        <p className="text-white/80">{explanation}</p>
      </div>
    </div>
  )
}
