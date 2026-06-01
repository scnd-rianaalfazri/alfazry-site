import { useState } from "react"

export default function PascalSimulation() {
  const [force, setForce] = useState(50)

  const smallArea = 1
  const largeArea = 4
  const pressure = force / smallArea
  const outputForce = pressure * largeArea

  return (
    <div className="mt-10">
      <label htmlFor="forceRange" className="block text-white/70 mb-3">
        Gaya Input: <span className="text-cyan-400 font-bold">{force} N</span>
      </label>

      <input
        id="forceRange"
        type="range"
        min="10"
        max="100"
        value={force}
        onChange={(e) => setForce(Number(e.target.value))}
        className="w-full accent-cyan-400"
      />

      <div className="mt-10 grid gap-12 lg:grid-cols-2">
        <div className="flex flex-col items-center">
          <div
            className="bg-cyan-400 w-24 rounded-t-lg transition-all duration-300"
            style={{ height: `${Math.max(force, 20)}px` }}
          />
          <div className="bg-cyan-600 w-28 h-4 rounded" />
          <p className="mt-4 text-white/70 text-sm text-center">
            Piston Kecil<br />
            <span className="text-cyan-400 font-bold">{force} N</span>
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div
            className="bg-cyan-400 w-40 rounded-t-lg transition-all duration-300"
            style={{ height: `${Math.max(outputForce, 20)}px` }}
          />
          <div className="bg-cyan-600 w-44 h-4 rounded" />
          <p className="mt-4 text-white/70 text-sm text-center">
            Piston Besar<br />
            <span className="text-cyan-400 font-bold">{outputForce.toFixed(0)} N</span>
          </p>
        </div>
      </div>

      <p className="mt-8 text-white/50 text-sm">
        Hukum Pascal: tekanan ({pressure.toFixed(1)} Pa) pada piston kecil menghasilkan gaya besar pada piston besar.
      </p>
    </div>
  )
}
