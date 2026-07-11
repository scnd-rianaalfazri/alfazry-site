// components/FormulaExamples.jsx
//
// Menampilkan tombol-tombol contoh rumus yang bisa diklik untuk langsung
// mengisi input kalkulator, sesuai Fitur 8 (Contoh Rumus).

import React from "react";
import { EXAMPLE_FORMULAS } from "../utils/dimensionData.js";

/**
 * @param {{ onSelect: (formula: string) => void, activeFormula?: string }} props
 */
export default function FormulaExamples({ onSelect, activeFormula }) {
  return (
    <div className="rounded-2xl border border-[#00E5FF]/20 bg-[#111827]/60 p-4 backdrop-blur-md">
      <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#7C3AED]">
        Contoh Rumus
      </h3>

      <div className="flex flex-wrap gap-2">
        {EXAMPLE_FORMULAS.map((formula) => {
          const isActive = formula === activeFormula;
          return (
            <button
              key={formula}
              type="button"
              onClick={() => onSelect(formula)}
              className={[
                "rounded-lg border px-3 py-1.5 font-mono text-xs transition-all duration-200",
                isActive
                  ? "border-[#00E5FF] bg-[#00E5FF]/15 text-[#00E5FF] shadow-[0_0_12px_rgba(0,229,255,0.35)]"
                  : "border-white/10 bg-white/[0.02] text-slate-300 hover:-translate-y-0.5 hover:border-[#00E5FF]/50 hover:text-[#00E5FF] hover:shadow-[0_0_12px_rgba(0,229,255,0.25)]",
              ].join(" ")}
            >
              {formula}
            </button>
          );
        })}
      </div>
    </div>
  );
}
