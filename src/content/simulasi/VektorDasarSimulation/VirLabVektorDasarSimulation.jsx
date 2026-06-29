import { useState, useRef } from "react"

const tabs = [
  { id: "data", label: "Data", icon: "📊" },
  { id: "calculation", label: "Perhitungan", icon: "📖" },
  { id: "concept", label: "Konsep", icon: "🧠" },
]

export default function VirLabVectorExplorer() {
  const size = 500
  const center = size / 2
  const scale = 25

  const svgRef = useRef(null)

  const initialPoint = {
    x: center + 100,
    y: center - 75,
  }

  const [point, setPoint] = useState(initialPoint)
  const [dragging, setDragging] = useState(false)

  const [showComponents, setShowComponents] = useState(true)
  const [showGrid, setShowGrid] = useState(true)
  const [showLabels, setShowLabels] = useState(true)

  const [activeTab, setActiveTab] = useState("data")

  const vectorX = ((point.x - center) / scale).toFixed(2)
  const vectorY = ((center - point.y) / scale).toFixed(2)

  const magnitude = Math.sqrt(
    Number(vectorX) ** 2 + Number(vectorY) ** 2
  ).toFixed(2)

  const angle = (
    (Math.atan2(Number(vectorY), Number(vectorX)) * 180) /
    Math.PI
  ).toFixed(2)

  let quadrant = ""

  if (Number(vectorX) > 0 && Number(vectorY) > 0) {
    quadrant = "Kuadran I"
  } else if (Number(vectorX) < 0 && Number(vectorY) > 0) {
    quadrant = "Kuadran II"
  } else if (Number(vectorX) < 0 && Number(vectorY) < 0) {
    quadrant = "Kuadran III"
  } else if (Number(vectorX) > 0 && Number(vectorY) < 0) {
    quadrant = "Kuadran IV"
  } else if (Number(vectorX) === 0 && Number(vectorY) === 0) {
    quadrant = "Titik Asal"
  } else if (Number(vectorX) === 0) {
    quadrant = "Sumbu Y"
  } else {
    quadrant = "Sumbu X"
  }

  let quadrantColor = "#FACC15"
  if (quadrant === "Kuadran I") quadrantColor = "#22C55E"
  if (quadrant === "Kuadran II") quadrantColor = "#3B82F6"
  if (quadrant === "Kuadran III") quadrantColor = "#EF4444"
  if (quadrant === "Kuadran IV") quadrantColor = "#A855F7"

  const updatePoint = (clientX, clientY) => {
    const rect = svgRef.current.getBoundingClientRect()
    const x = ((clientX - rect.left) / rect.width) * size
    const y = ((clientY - rect.top) / rect.height) * size

    setPoint({ x, y })
  }

  const handleMouseMove = (e) => {
    if (!dragging) return
    updatePoint(e.clientX, e.clientY)
  }

  const handleTouchMove = (e) => {
    if (!dragging) return
    updatePoint(e.touches[0].clientX, e.touches[0].clientY)
  }

  const handleReset = () => {
    setPoint(initialPoint)
  }

  const handleRandom = () => {
    setPoint({
      x: Math.random() * size,
      y: Math.random() * size,
    })
  }

  const renderGrid = () => {
    const lines = []

    for (let i = 0; i <= size; i += scale) {
      lines.push(
        <line key={`v-${i}`} x1={i} y1={0} x2={i} y2={size} stroke="#374151" strokeWidth="0.5" />
      )
      lines.push(
        <line key={`h-${i}`} x1={0} y1={i} x2={size} y2={i} stroke="#374151" strokeWidth="0.5" />
      )
    }

    return lines
  }

  const dx = point.x - center
  const dy = point.y - center
  const angleRad = Math.atan2(dy, dx)
  const arcRadius = 50

  const arcEndX = center + arcRadius * Math.cos(angleRad)
  const arcEndY = center + arcRadius * Math.sin(angleRad)
  const largeArcFlag = Math.abs(angleRad) > Math.PI ? 1 : 0
  const sweepFlag = angleRad > 0 ? 1 : 0

  const arrowLength = 18
  const arrowWidth = 10

  const tipX = point.x
  const tipY = point.y

  const leftX = tipX - arrowLength * Math.cos(angleRad) + arrowWidth * Math.sin(angleRad)
  const leftY = tipY - arrowLength * Math.sin(angleRad) - arrowWidth * Math.cos(angleRad)
  const rightX = tipX - arrowLength * Math.cos(angleRad) - arrowWidth * Math.sin(angleRad)
  const rightY = tipY - arrowLength * Math.sin(angleRad) + arrowWidth * Math.cos(angleRad)

  return (
    <div className="max-w-6xl mx-auto rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/40 p-6 text-white">
      <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
        <div>
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <span>🧭</span> Vector Explorer
          </h2>
          <p className="text-white/60 mt-1">
            Geser titik oranye untuk mengubah arah dan besar vektor.
          </p>
        </div>

        <div
          className="flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium border"
          style={{
            color: quadrantColor,
            borderColor: `${quadrantColor}50`,
            background: `${quadrantColor}1A`,
          }}
        >
          <span className="h-2 w-2 rounded-full" style={{ background: quadrantColor }} />
          {quadrant}
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mt-6">
        {/* SVG / Simulasi */}
        <div className="lg:col-span-2">
          <div className="rounded-2xl bg-black/20 p-4">
            <svg
              ref={svgRef}
              viewBox={`0 0 ${size} ${size}`}
              className="w-full bg-slate-900 rounded-xl border border-white/10 touch-none select-none"
              onMouseMove={handleMouseMove}
              onMouseUp={() => setDragging(false)}
              onMouseLeave={() => setDragging(false)}
              onTouchMove={handleTouchMove}
              onTouchEnd={() => setDragging(false)}
            >
              {showGrid && renderGrid()}

              {/* Axis X */}
              <line x1={0} y1={center} x2={size} y2={center} stroke="white" strokeWidth="2" />
              {/* Axis Y */}
              <line x1={center} y1={0} x2={center} y2={size} stroke="white" strokeWidth="2" />

              {/* Component X */}
              {showComponents && (
                <>
                  <line
                    x1={center}
                    y1={center}
                    x2={point.x}
                    y2={center}
                    stroke="#3B82F6"
                    strokeDasharray="6"
                    strokeWidth="2"
                  />
                  {showLabels && (
                    <text x={(center + point.x) / 2} y={center - 16} fill="#3B82F6" fontSize="14" fontWeight="bold">
                      Ax = {vectorX}
                    </text>
                  )}
                </>
              )}

              {/* Angle Arc */}
              <path
                d={`M ${center + arcRadius} ${center} A ${arcRadius} ${arcRadius} 0 ${largeArcFlag} ${sweepFlag} ${arcEndX} ${arcEndY}`}
                fill="none"
                stroke="#FACC15"
                strokeWidth="3"
              />
              {showLabels && (
                <>
                  <text
                    x={center + (arcRadius + 18) * Math.cos(angleRad / 2)}
                    y={center + (arcRadius + 18) * Math.sin(angleRad / 2)}
                    fill="#FACC15"
                    fontSize="16"
                    fontWeight="bold"
                  >
                    θ
                  </text>
                  <text
                    x={center + (arcRadius + 36) * Math.cos(angleRad / 2)}
                    y={center + (arcRadius + 36) * Math.sin(angleRad / 2)}
                    fill="#FACC15"
                    fontSize="15"
                    fontWeight="bold"
                  >
                    {angle}°
                  </text>
                </>
              )}

              {/* Component Y */}
              {showComponents && (
                <>
                  <line
                    x1={point.x}
                    y1={center}
                    x2={point.x}
                    y2={point.y}
                    stroke="#22C55E"
                    strokeDasharray="6"
                    strokeWidth="2"
                  />
              {showLabels && (
                <text
                  x={point.x + 10}
                  y={(center + point.y) / 2}
                  fill="#22C55E"
                  fontSize="14"
                  fontWeight="bold"
                >
                  Ay = {vectorY}
                </text>
              )}
                </>
              )}

              {/* Vector */}
              <line x1={center} y1={center} x2={point.x} y2={point.y} stroke="#F97316" strokeWidth="4" />

              {/* Coordinate Label */}
              {showLabels && (
                <text x={point.x + 12} y={point.y - 12} fill="white" fontSize="14">
                  ({vectorX}, {vectorY})
                </text>
              )}

              {/* Arrow Head */}
              <polygon points={`${tipX},${tipY} ${leftX},${leftY} ${rightX},${rightY}`} fill="#F97316" />

              {/* Handle Drag */}
              <circle cx={point.x} cy={point.y} r="6" fill="white" stroke="#F97316" strokeWidth="2" pointerEvents="none" />

              {/* Drag Area */}
              <circle
                cx={point.x}
                cy={point.y}
                r="22"
                fill="transparent"
                cursor="grab"
                onMouseDown={() => setDragging(true)}
                onTouchStart={() => setDragging(true)}
              />

              {/* Origin */}
              <circle cx={center} cy={center} r="6" fill="white" />

              {/* Axis labels */}
              <text x={size - 20} y={center - 16} fill="white">X</text>
              <text x={center + 10} y={20} fill="white">Y</text>
            </svg>

            <p className="text-center text-xs text-white/40 mt-3">
              🖱️ Klik &amp; seret titik oranye, atau gunakan tombol "Acak Vektor" di panel
            </p>
          </div>
        </div>

        {/* PANEL */}
        <div className="space-y-4 lg:sticky lg:top-4 self-start">
          {/* Pengaturan */}
          <div className="rounded-2xl bg-black/20 p-5">
            <h3 className="font-semibold mb-3">🎛 Pengaturan Tampilan</h3>

            <ToggleRow label="Grid" checked={showGrid} onChange={() => setShowGrid(!showGrid)} />
            <ToggleRow label="Komponen Vektor (X & Y)" checked={showComponents} onChange={() => setShowComponents(!showComponents)} />
            <ToggleRow label="Label & Nilai" checked={showLabels} onChange={() => setShowLabels(!showLabels)} last />
          </div>

          {/* Aksi cepat */}
          <div className="rounded-2xl bg-black/20 p-5">
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={handleReset}
                className="py-2.5 rounded-xl bg-white/10 hover:bg-white/15 font-medium text-sm transition-colors"
              >
                ↺ Reset
              </button>
              <button
                onClick={handleRandom}
                className="py-2.5 rounded-xl bg-orange-500 hover:bg-orange-400 font-medium text-sm transition-colors"
              >
                🎲 Acak Vektor
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="rounded-2xl bg-black/20 p-5">
            <div className="flex flex-wrap gap-2 mb-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? "bg-cyan-500 text-white"
                      : "bg-white/5 text-white/60 hover:bg-white/10"
                  }`}
                >
                  {tab.icon} {tab.label}
                </button>
              ))}
            </div>

            {activeTab === "data" && (
              <div className="grid grid-cols-2 gap-3">
                <Stat label="Komponen X" value={vectorX} accent="text-blue-400" />
                <Stat label="Komponen Y" value={vectorY} accent="text-green-400" />
                <Stat label="Besar |A|" value={magnitude} accent="text-orange-400" />
                <Stat label="Sudut θ" value={`${angle}°`} accent="text-yellow-400" />
                <div className="col-span-2">
                  <Stat label="Posisi" value={quadrant} accent="" valueStyle={{ color: quadrantColor }} />
                </div>
              </div>
            )}

            {activeTab === "calculation" && (
              <div className="space-y-3 font-mono text-sm text-white/80">
                <Rumus title="1. Komponen Vektor" lines={[`Ax = ${vectorX}`, `Ay = ${vectorY}`]} />
                <Rumus
                  title="2. Besar Vektor"
                  lines={["|A| = √(Ax² + Ay²)", `= √(${vectorX}² + ${vectorY}²)`, `= ${magnitude}`]}
                  highlight
                />
                <Rumus
                  title="3. Sudut Vektor"
                  lines={["θ = tan⁻¹(Ay / Ax)", `= tan⁻¹(${vectorY} / ${vectorX})`, `= ${angle}°`]}
                  highlight
                />
              </div>
            )}

            {activeTab === "concept" && (
              <div className="text-sm text-white/70 leading-relaxed space-y-3">
                <p>
                  <strong className="text-blue-400">Komponen X (Ax)</strong> menunjukkan proyeksi vektor
                  terhadap sumbu horizontal — seberapa jauh vektor bergerak ke kanan (+) atau kiri (−).
                </p>
                <p>
                  <strong className="text-green-400">Komponen Y (Ay)</strong> menunjukkan proyeksi vektor
                  terhadap sumbu vertikal — seberapa jauh vektor bergerak ke atas (+) atau bawah (−).
                </p>
                <p>
                  <strong className="text-orange-400">Besar vektor |A|</strong> dihitung dengan teorema
                  Pythagoras dari kedua komponen, dan <strong className="text-yellow-400">sudut θ</strong>{" "}
                  menunjukkan arah vektor relatif terhadap sumbu X positif.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function ToggleRow({ label, checked, onChange, last = false }) {
  return (
    <label className={`flex items-center justify-between cursor-pointer ${last ? "" : "mb-3"}`}>
      <span className="text-sm text-white/70">{label}</span>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 accent-cyan-500"
      />
    </label>
  )
}

function Stat({ label, value, accent = "text-white", valueStyle }) {
  return (
    <div className="rounded-xl bg-white/5 p-3">
      <p className="text-xs text-white/50 mb-1">{label}</p>
      <p className={`text-lg font-semibold font-mono ${accent}`} style={valueStyle}>
        {value}
      </p>
    </div>
  )
}

function Rumus({ title, lines, highlight = false }) {
  return (
    <div className={`rounded-lg p-3 ${highlight ? "bg-cyan-500/10 border border-cyan-500/20" : "bg-white/5"}`}>
      <p className="text-xs text-white/40 mb-2 font-sans">{title}</p>
      {lines.map((line, i) => (
        <p key={i} className={i === lines.length - 1 ? "text-white font-semibold" : ""}>
          {line}
        </p>
      ))}
    </div>
  )
}
