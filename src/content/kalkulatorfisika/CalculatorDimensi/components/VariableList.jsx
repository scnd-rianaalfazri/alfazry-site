// components/VariableList.jsx
//
// Menampilkan daftar variabel yang dipakai dalam rumus beserta dimensinya,
// dengan gaya "[m]=M", "[v]=LT⁻¹", dst — sesuai Fitur 2 (Hitung Dimensi Rumus).

import React from "react";

/**
 * @typedef {Object} VariableEntry
 * @property {string} symbol
 * @property {string|null} name
 * @property {string|null} dimensionText
 * @property {boolean} known
 */

/**
 * Menampilkan daftar variabel & dimensinya dalam bentuk baris "[simbol]=dimensi".
 * @param {{ variables: VariableEntry[] }} props
 */
export default function VariableList({ variables }) {
  if (!variables || variables.length === 0) {
    return null;
  }

  return (
    <div className="rounded-2xl border border-[#00E5FF]/20 bg-[#111827]/60 p-4 backdrop-blur-md">
      <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#7C3AED]">
        Variabel yang Ditemukan
      </h3>

      <ul className="flex flex-col gap-2">
        {variables.map((item) => (
          <li
            key={item.symbol}
            className="flex items-center justify-between gap-3 rounded-xl border border-white/5 bg-white/[0.03] px-3 py-2 transition-colors hover:border-[#00E5FF]/30"
          >
            <div className="flex items-baseline gap-2 font-mono text-sm">
              <span className="text-slate-300">[{item.symbol}]</span>
              <span className="text-slate-500">=</span>
              <span className="font-semibold text-[#00E5FF]">
                {item.dimensionText}
              </span>
            </div>
            {item.name && (
              <span className="text-xs text-slate-500">{item.name}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
