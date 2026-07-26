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

// variant "block"   -> tampilan penuh, dipakai untuk block.equation biasa
//                      (kartu besar, rumus rata tengah, jarak vertikal lega)
// variant "compact" -> tampilan ringkas, dipakai untuk rumus yang nempel di
//                      dalam item list (bullet/nomor) — kartu lebih tipis,
//                      rumus rata kiri, ada aksen garis di sisi kiri supaya
//                      jelas ini "anak" dari poin di atasnya, bukan section baru
export default function MathEquation({
  equation,
  className = "",
  variant = "block",
}) {
  const equations = Array.isArray(equation)
    ? equation
    : [equation]

  if (variant === "compact") {
    return (
      <div
        className={`
          overflow-hidden
          rounded-lg
          border border-cyan-400/15
          border-l-2 border-l-cyan-400/50
          bg-cyan-500/[0.04]
          transition-colors duration-300
          hover:border-cyan-300/30
          hover:bg-cyan-500/[0.07]
          ${className}
        `.trim()}
      >
        <div className="overflow-x-auto px-3 py-2 md:px-4 md:py-2.5">
          <div className="flex flex-col gap-1.5 min-w-max">
            {equations.map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="flex justify-start text-white/85 text-[0.9em]"
              >
                <BlockMath math={item} renderError={renderError(item)} />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`
        my-4
        overflow-hidden
        rounded-2xl
        border border-cyan-400/20
        bg-slate-950/80
        p-2.5 md:p-3
        shadow-lg shadow-cyan-500/10
        transition-all duration-300
        hover:border-cyan-300/40
        hover:shadow-cyan-400/20
        ${className}
      `.trim()}
    >
      <div className="overflow-x-auto">
        <div className="flex flex-col items-center gap-2 min-w-max">
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
