import { useState, useRef } from "react"

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

  const [activeTab, setActiveTab] = useState("data")

  const [showCalculation, setShowCalculation] =
  useState(false)

  const [showLabels, setShowLabels] =
  useState(true)

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
    } else if (
    Number(vectorX) < 0 &&
    Number(vectorY) > 0
    ) {
    quadrant = "Kuadran II"
    } else if (
    Number(vectorX) < 0 &&
    Number(vectorY) < 0
    ) {
    quadrant = "Kuadran III"
    } else if (
    Number(vectorX) > 0 &&
    Number(vectorY) < 0
    ) {
    quadrant = "Kuadran IV"
    } else if (
    Number(vectorX) === 0 &&
    Number(vectorY) === 0
    ) {
    quadrant = "Titik Asal"
    } else if (Number(vectorX) === 0) {
    quadrant = "Sumbu Y"
    } else {
    quadrant = "Sumbu X"
    }

    let quadrantColor = "#FACC15"

    if (quadrant === "Kuadran I")
    quadrantColor = "#22C55E"

    if (quadrant === "Kuadran II")
    quadrantColor = "#3B82F6"

    if (quadrant === "Kuadran III")
    quadrantColor = "#EF4444"

    if (quadrant === "Kuadran IV")
    quadrantColor = "#A855F7"

  const updatePoint = (clientX, clientY) => {
    const rect = svgRef.current.getBoundingClientRect()

    const x = clientX - rect.left
    const y = clientY - rect.top

    setPoint({
      x,
      y,
    })
  }

  const handleMouseMove = (e) => {
    if (!dragging) return
    updatePoint(e.clientX, e.clientY)
  }

  const handleTouchMove = (e) => {
    if (!dragging) return

    updatePoint(
      e.touches[0].clientX,
      e.touches[0].clientY
    )
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
        <line
          key={`v-${i}`}
          x1={i}
          y1={0}
          x2={i}
          y2={size}
          stroke="#374151"
          strokeWidth="0.5"
        />
      )

      lines.push(
        <line
          key={`h-${i}`}
          x1={0}
          y1={i}
          x2={size}
          y2={i}
          stroke="#374151"
          strokeWidth="0.5"
        />
      )
    }

    return lines
  }

    const dx = point.x - center
    const dy = point.y - center

    const angleRad = Math.atan2(dy, dx)

    const arcRadius = 50

    const arcEndX =
    center + arcRadius * Math.cos(angleRad)

    const arcEndY =
    center + arcRadius * Math.sin(angleRad)

    const largeArcFlag =
    Math.abs(angleRad) > Math.PI ? 1 : 0

    const sweepFlag =
    angleRad > 0 ? 1 : 0

    const arrowLength = 18
    const arrowWidth = 10

    const tipX = point.x
    const tipY = point.y

    const leftX =
    tipX -
    arrowLength * Math.cos(angleRad) +
    arrowWidth * Math.sin(angleRad)

    const leftY =
    tipY -
    arrowLength * Math.sin(angleRad) -
    arrowWidth * Math.cos(angleRad)

    const rightX =
    tipX -
    arrowLength * Math.cos(angleRad) -
    arrowWidth * Math.sin(angleRad)

    const rightY =
    tipY -
    arrowLength * Math.sin(angleRad) +
    arrowWidth * Math.cos(angleRad)

  return (
    <div className="max-w-5xl mx-auto p-4">

      <h1 className="text-2xl font-bold mb-4">
        Vector Explorer
      </h1>

      <div className="grid lg:grid-cols-3 gap-6">

        {/* SIMULATION */}
        <div className="lg:col-span-2">

          <svg
            ref={svgRef}
            viewBox={`0 0 ${size} ${size}`}
            className="w-full bg-slate-900 rounded-xl border border-slate-700 touch-none"
            onMouseMove={handleMouseMove}
            onMouseUp={() => setDragging(false)}
            onMouseLeave={() => setDragging(false)}
            onTouchMove={handleTouchMove}
            onTouchEnd={() => setDragging(false)}
          >

            {showGrid && renderGrid()}

            {/* Axis X */}
            <line
              x1={0}
              y1={center}
              x2={size}
              y2={center}
              stroke="white"
              strokeWidth="2"
            />

            {/* Axis Y */}
            <line
              x1={center}
              y1={0}
              x2={center}
              y2={size}
              stroke="white"
              strokeWidth="2"
            />

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

                <text
                x={(center + point.x) / 2}
                y={center - 10}
                fill="#3B82F6"
                fontSize="14"
                fontWeight="bold"
                >
                Ax = {vectorX}
                </text>
            </>
            )}

            {/* Angle Arc */}
            <path
            d={`
                M ${center + arcRadius} ${center}
                A ${arcRadius} ${arcRadius}
                0
                ${largeArcFlag}
                ${sweepFlag}
                ${arcEndX}
                ${arcEndY}
            `}
            fill="none"
            stroke="#FACC15"
            strokeWidth="3"
            />
            <text
            x={
                center +
                (arcRadius + 18) *
                Math.cos(angleRad / 2)
            }
            y={
                center +
                (arcRadius + 18) *
                Math.sin(angleRad / 2)
            }
            fill="#FACC15"
            fontSize="16"
            fontWeight="bold"
            >
            θ
            </text>

            {/* Angle Value */}          
            <text
            x={
                center +
                (arcRadius + 20) *
                Math.cos(angleRad / 2)
            }
            y={
                center +
                (arcRadius + 20) *
                Math.sin(angleRad / 2)
            }
            fill="#FACC15"
            fontSize="15"
            fontWeight="bold"
            >
            {angle}°
            </text>

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

                <text
                x={point.x + 10}
                y={(center + point.y) / 2}
                fill="#22C55E"
                fontSize="14"
                fontWeight="bold"
                >
                Ay = {vectorY}
                </text>
            </>
            )}

            {/* Vector */}
            <line
              x1={center}
              y1={center}
              x2={point.x}
              y2={point.y}
              stroke="#F97316"
              strokeWidth="4"
            />

            {/* Coordinat Label */}
            <text
            x={point.x + 12}
            y={point.y - 12}
            fill="white"
            fontSize="14"
            >
            ({vectorX}, {vectorY})
            </text>

            {/* Arrow Head */}
            <polygon
                points={`
                    ${tipX},${tipY}
                    ${leftX},${leftY}
                    ${rightX},${rightY}
                `}
                fill="#F97316"
            />

            {/* Handle Drag */}
            <circle
                cx={point.x}
                cy={point.y}
                r="5"
                fill="white"
                stroke="#F97316"
                strokeWidth="2"
                pointerEvents="none"
            />

            {/* Drag Area */}
            <circle
                cx={point.x}
                cy={point.y}
                r="18"
                fill="transparent"
                cursor="grab"
                onMouseDown={() => setDragging(true)}
                onTouchStart={() => setDragging(true)}
            />

            {/* Origin */}
            <circle
              cx={center}
              cy={center}
              r="6"
              fill="white"
            />

            {/* Labels */}
            <text
              x={size - 20}
              y={center - 10}
              fill="white"
            >
              X
            </text>

            <text
              x={center + 10}
              y={20}
              fill="white"
            >
              Y
            </text>

            <text
            x={20}
            y={30}
            fill={quadrantColor}
            fontSize="18"
            fontWeight="bold"
            >
            {quadrant}
            </text>

          </svg>
        </div>

        {/* PANEL */}
        <div className="space-y-4">

          <div className="bg-slate-800 rounded-xl p-4">

            <h2 className="font-semibold mb-3">
              Pengaturan
            </h2>

            <label className="flex gap-2 mb-2">
              <input
                type="checkbox"
                checked={showGrid}
                onChange={() =>
                  setShowGrid(!showGrid)
                }
              />
              Grid
            </label>

            <label className="flex gap-2 mb-2">
              <input
                type="checkbox"
                checked={showComponents}
                onChange={() =>
                  setShowComponents(!showComponents)
                }
              />
              Komponen Vektor
            </label>

            <label className="flex gap-2">
            <input
                type="checkbox"
                checked={showLabels}
                onChange={() =>
                setShowLabels(!showLabels)
                }
            />
            Label Komponen
            </label>
          </div>

          <div className="bg-slate-800 rounded-xl p-4">

            <div className="flex gap-2 mb-4">

              <button
                onClick={() => setActiveTab("data")}
                className="px-3 py-1 rounded bg-slate-700"
              >
                Data
              </button>

              <button
                onClick={() =>
                  setActiveTab("calculation")
                }
                className="px-3 py-1 rounded bg-slate-700"
              >
                Perhitungan
              </button>

              <button
                onClick={() =>
                  setActiveTab("concept")
                }
                className="px-3 py-1 rounded bg-slate-700"
              >
                Konsep
              </button>

            </div>

            {activeTab === "data" && (
              <div className="space-y-2">

                <p>X = {vectorX}</p>

                <p>Y = {vectorY}</p>

                <p>|A| = {magnitude}</p>

                <p>θ = {angle}°</p>

                <p>{quadrant}</p>

              </div>
            )}

            {activeTab === "calculation" && (
              <div className="text-sm space-y-2">

                <p>
                  |A| = √(x² + y²)
                </p>

                <p>
                  = √({vectorX}² + {vectorY}²)
                </p>

                <p>
                  = {magnitude}
                </p>

                <hr />

                <p>
                  θ = tan⁻¹(y/x)
                </p>

                <p>
                  θ = {angle}°
                </p>

              </div>
            )}

            {activeTab === "concept" && (
              <div className="text-sm leading-relaxed">

                Komponen X menunjukkan
                proyeksi vektor terhadap
                sumbu horizontal.

                <br />
                <br />

                Komponen Y menunjukkan
                proyeksi vektor terhadap
                sumbu vertikal.

              </div>
            )}

            <button
            onClick={handleReset}
            className="
                w-full
                mt-4
                py-2
                rounded-lg
                bg-orange-500
                hover:bg-orange-600
                transition
                font-medium
            "
            >
            Reset Vektor
            </button>

            <button
            onClick={handleRandom}
            className="
                w-full
                mt-4
                py-2
                rounded-lg
                bg-orange-500
                hover:bg-orange-600
                transition
                font-medium
            "
            >
            Acak Vektor
            </button>

            <button
            onClick={() =>
                setShowCalculation(!showCalculation)
            }
            className="
                w-full
                mt-4
                py-2
                rounded-lg
                bg-blue-500
                hover:bg-blue-600
                transition
                font-medium
            "
            >
            {showCalculation
                ? "Sembunyikan Perhitungan"
                : "Tampilkan Perhitungan"}
            </button>
            
            {showCalculation && (
            <div className="
                mt-4
                p-4
                rounded-xl
                bg-slate-900
                border
                border-slate-700
                text-sm
                space-y-3
            ">

                <h3 className="font-bold">
                Langkah Perhitungan
                </h3>

                <div>
                <p>1. Komponen Vektor</p>
                <p>Ax = {vectorX}</p>
                <p>Ay = {vectorY}</p>
                </div>

                <hr />

                <div>
                <p>2. Besar Vektor</p>

                <p>
                    |A| = √(Ax² + Ay²)
                </p>

                <p>
                    = √({vectorX}² + {vectorY}²)
                </p>

                <p>
                    = {magnitude}
                </p>
                </div>

                <hr />

                <div>
                <p>3. Sudut Vektor</p>

                <p>
                    θ = tan⁻¹(Ay/Ax)
                </p>

                <p>
                    θ = tan⁻¹(
                    {vectorY}/{vectorX}
                    )
                </p>

                <p>
                    θ = {angle}°
                </p>
                </div>

            </div>
            )}

          </div>


        </div>

      </div>
    </div>
  )
}