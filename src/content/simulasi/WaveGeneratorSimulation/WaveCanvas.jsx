import { useEffect, useRef } from "react"

// ------------------------------------------------------------
// Konstanta tampilan. Dipisah dari logika fisika supaya mudah
// disesuaikan tanpa menyentuh rumus gelombang.
// ------------------------------------------------------------
const VIEW_WIDTH = 800
const VIEW_HEIGHT = 300
const CENTER_Y = VIEW_HEIGHT / 2
const PX_PER_METER = 90 // skala horizontal: posisi (sumbu-x)
const PX_PER_CM = 12 // skala vertikal: amplitudo (sumbu-y)
const SAMPLE_STEP = 4 // resolusi path (px), makin kecil makin halus

/**
 * Membangun string "d" untuk <path> gelombang sinus berjalan.
 * y(x, t) = A · sin( k·x − k·v·t ), dengan k = 2π / λ
 * Wave bergerak ke kanan karena suku waktu bertanda negatif.
 */
function buildWavePath({ amplitude, wavelength, speed, time }) {
  const k = (2 * Math.PI) / wavelength
  let d = ""

  for (let xPx = 0; xPx <= VIEW_WIDTH; xPx += SAMPLE_STEP) {
    const xMeters = xPx / PX_PER_METER
    const yCm = amplitude * Math.sin(k * (xMeters - speed * time))
    const yPx = CENTER_Y - yCm * PX_PER_CM
    d += xPx === 0 ? `M ${xPx} ${yPx}` : ` L ${xPx} ${yPx}`
  }

  return d
}

export default function WaveCanvas({ amplitude, wavelength, speed }) {
  const pathRef = useRef(null)
  const frameRef = useRef(null)
  const timeRef = useRef(0)
  const lastRef = useRef(null)

  // Simpan nilai terbaru di ref agar loop animasi tidak perlu
  // di-restart setiap kali slider digeser (mencegah phase "loncat").
  const paramsRef = useRef({ amplitude, wavelength, speed })
  useEffect(() => {
    paramsRef.current = { amplitude, wavelength, speed }
  }, [amplitude, wavelength, speed])

  useEffect(() => {
    const animate = (now) => {
      if (lastRef.current === null) lastRef.current = now
      const dt = Math.min((now - lastRef.current) / 1000, 0.05)
      lastRef.current = now
      timeRef.current += dt

      const { amplitude: a, wavelength: lambda, speed: v } = paramsRef.current
      if (pathRef.current) {
        pathRef.current.setAttribute(
          "d",
          buildWavePath({ amplitude: a, wavelength: lambda, speed: v, time: timeRef.current })
        )
      }

      frameRef.current = requestAnimationFrame(animate)
    }

    frameRef.current = requestAnimationFrame(animate)
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [])

  // Ukuran visual indikator amplitudo & panjang gelombang,
  // dihitung dari nilai slider saat ini (bukan dari animasi).
  const amplitudePx = amplitude * PX_PER_CM
  const wavelengthPx = wavelength * PX_PER_METER
  const initialPath = buildWavePath({ amplitude, wavelength, speed, time: 0 })

  return (
    <div className="rounded-2xl bg-white/[0.03] hud-frame border border-cyan-400/10 p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display font-semibold text-white/90 text-sm tracking-wide uppercase flex items-center gap-2">
          🌊 Animasi Gelombang
        </h3>
        <div className="flex items-center gap-1.5 text-xs text-cyan-300/80">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse-glow" />
          Berjalan
        </div>
      </div>

      <div className="relative rounded-xl overflow-hidden border border-white/10 bg-[#05060f]">
        <svg
          viewBox={`0 0 ${VIEW_WIDTH} ${VIEW_HEIGHT}`}
          className="w-full h-auto block"
          role="img"
          aria-label="Animasi gelombang sinus bergerak ke kanan"
        >
          <defs>
            <pattern id="wave-grid" width="24" height="24" patternUnits="userSpaceOnUse">
              <path
                d="M 24 0 L 0 0 0 24"
                fill="none"
                stroke="rgba(34,211,238,0.08)"
                strokeWidth="1"
              />
            </pattern>
          </defs>

          {/* ---------- Background grid tipis ---------- */}
          <rect width={VIEW_WIDTH} height={VIEW_HEIGHT} fill="url(#wave-grid)" />

          {/* ---------- Sumbu horizontal (posisi setimbang) ---------- */}
          <line
            x1={0}
            y1={CENTER_Y}
            x2={VIEW_WIDTH}
            y2={CENTER_Y}
            stroke="rgba(255,255,255,0.18)"
            strokeDasharray="4 4"
          />

          {/* ---------- Panah arah rambat gelombang ---------- */}
          <g transform={`translate(${VIEW_WIDTH - 96}, 22)`}>
            <line x1="0" y1="0" x2="60" y2="0" stroke="#22d3ee" strokeWidth="2" />
            <path d="M 60 0 L 50 -5 L 50 5 Z" fill="#22d3ee" />
            <text x="0" y="-8" fill="#67e8f9" fontSize="11" fontFamily="var(--font-mono, monospace)">
              arah rambat
            </text>
          </g>

          {/* ---------- Indikator panjang gelombang (λ) ---------- */}
          <g transform={`translate(90, ${CENTER_Y - amplitudePx - 34})`}>
            <line x1={0} y1={0} x2={wavelengthPx} y2={0} stroke="#b26bff" strokeWidth="1.5" />
            <path d="M 0 0 L 8 -4 L 8 4 Z" fill="#b26bff" />
            <path
              d={`M ${wavelengthPx} 0 L ${wavelengthPx - 8} -4 L ${wavelengthPx - 8} 4 Z`}
              fill="#b26bff"
            />
            <text
              x={wavelengthPx / 2}
              y={-8}
              textAnchor="middle"
              fill="#d9bbff"
              fontSize="13"
              fontFamily="var(--font-display, sans-serif)"
            >
              λ
            </text>
          </g>

          {/* ---------- Indikator amplitudo (A) ---------- */}
          <g transform={`translate(40, ${CENTER_Y})`}>
            <line x1={0} y1={0} x2={0} y2={-amplitudePx} stroke="#67e8f9" strokeWidth="1.5" />
            <path d="M 0 0 L -4 8 L 4 8 Z" fill="#67e8f9" />
            <path d={`M 0 ${-amplitudePx} L -4 ${-amplitudePx + 8} L 4 ${-amplitudePx + 8} Z`} fill="#67e8f9" />
            <text x={10} y={-amplitudePx / 2} fill="#a5f3fc" fontSize="13" fontFamily="var(--font-display, sans-serif)">
              A
            </text>
          </g>

          {/* ---------- Gelombang sinus (di-update via ref tiap frame) ---------- */}
          <path
            ref={pathRef}
            d={initialPath}
            fill="none"
            stroke="#22d3ee"
            strokeWidth="3"
            strokeLinecap="round"
            className="wave-path-glow"
          />

          {/* ---------- Label sumbu ---------- */}
          <text x={VIEW_WIDTH - 12} y={CENTER_Y + 18} textAnchor="end" fill="rgba(255,255,255,0.35)" fontSize="11">
            posisi (m)
          </text>
          <text
            x={14}
            y={16}
            fill="rgba(255,255,255,0.35)"
            fontSize="11"
          >
            amplitudo (cm)
          </text>
        </svg>
      </div>
    </div>
  )
}
