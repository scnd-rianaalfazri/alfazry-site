import { BlockMath } from "react-katex"

// Fallback saat sintaks rumus tidak valid — daripada kotak error merah
// bawaan KaTeX, tampilkan rumus mentahnya dengan gaya redup, konsisten
// dengan perilaku RichText.jsx untuk rumus inline.
function renderError(rawSource) {
  return function () {
    return (
      <span
        className="border-b border-dashed border-amber-400/50 text-amber-200/90 font-mono text-sm"
        title="Rumus tidak dapat ditampilkan, periksa kembali sintaksnya"
      >
        {rawSource}
      </span>
    )
  }
}

export default function MathEquation({
  equation,
  className = "",
}) {
  const equations = Array.isArray(equation)
    ? equation
    : [equation]

  return (
    <div
      className={`
        my-6
        overflow-hidden
        rounded-2xl
        border border-cyan-400/20
        bg-slate-950/80
        p-3 md:p-4
        shadow-lg shadow-cyan-500/10
        transition-all duration-300
        hover:border-cyan-300/40
        hover:shadow-cyan-400/20
        ${className}
      `.trim()}
    >
      <div className="overflow-x-auto">
        <div className="flex flex-col items-center gap-3 min-w-max">
          {equations.map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="flex justify-center text-white/90"
            >
              <BlockMath math={item} renderError={renderError(item)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
