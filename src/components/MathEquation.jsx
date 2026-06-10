import { BlockMath } from "react-katex"

export default function MathEquation({ equation, className = "" }) {
  const equations = Array.isArray(equation) ? equation : [equation]

  return (
    <div className={`my-6 overflow-x-auto rounded-2xl border border-cyan-400/20 bg-slate-950/80 p-4 shadow-lg shadow-cyan-500/10 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-cyan-400/20 ${className}`.trim()}>
      <div className="flex flex-col items-center gap-3 text-white/90 animate-[fadeIn_0.4s_ease-out]">
        {equations.map((item, index) => (
          <div key={`${item}-${index}`} className="flex justify-center">
            <BlockMath math={item} />
          </div>
        ))}
      </div>
    </div>
  )
}