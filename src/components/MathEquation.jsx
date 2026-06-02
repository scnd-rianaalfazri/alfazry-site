import { BlockMath } from "react-katex"

export default function MathEquation({ equation }) {
  return (
    <div className="my-6 overflow-x-auto">
      <BlockMath math={equation} />
    </div>
  )
}