import { useState } from "react"

export default function PascalSimulation() {
  const [force, setForce] = useState(50)

  return (
    <div className="mt-10">
      <label className="block text-white/70 mb-3">
        Gaya Input: <span className="text-cyan-400 font-bold">{force} N</span>
      </label>

      <input
        type="range"
        min="10"
        max="100"
        value={force}
        onChange={(e) => setForce(Number(e.target.value))}
        className="w-full accent-cyan-400"
      />

      <div className="mt-10 flex items-end gap-20">
        {/* Piston kecil */}
        <div className="flex flex-col items-center">
          <div
            className="bg-cyan-400 w-24 rounded-t-lg transition-all duration-300"
            style={{ height: `${force}px` }}
          />
          <div className="bg-cyan-600 w-28 h-4 rounded" />
          <p className="mt-4 text-white/70 text-sm">
            Piston Kecil<br />
            <span className="text-cyan-400 font-bold">{force} N</span>
          </p>
        </div>

        {/* Piston besar */}
        <div className="flex flex-col items-center">
          <div
            className="bg-cyan-400 w-40 rounded-t-lg transition-all duration-300"
            style={{ height: `${force * 2}px` }}
          />
          <div className="bg-cyan-600 w-44 h-4 rounded" />
          <p className="mt-4 text-white/70 text-sm">
            Piston Besar<br />
            <span className="text-cyan-400 font-bold">{force * 2} N</span>
          </p>
        </div>
      </div>

      <p className="mt-8 text-white/50 text-sm">
        Hukum Pascal: tekanan kecil menghasilkan gaya besar pada piston yang lebih luas.
      </p>
    </div>
  )
}
