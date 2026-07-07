// SearchBar.jsx
// Input pencarian real-time. Tidak menghilangkan kartu, hanya menyorotnya
// (logika penyorotan ada di Scene.jsx / ObjectCard.jsx).

import React from "react";
import { Search, X } from "lucide-react";

/**
 * @param {Object} props
 * @param {string} props.value
 * @param {(value: string) => void} props.onChange
 */
export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative w-full">
      <Search
        size={16}
        className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-cyan-400/70"
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Cari benda atau konsep, misal: Momentum..."
        className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-2.5 pl-10 pr-9 text-sm text-slate-200 placeholder:text-slate-500 backdrop-blur-xl outline-none transition-colors focus:border-cyan-400/60 focus:bg-white/[0.06]"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Hapus pencarian"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-cyan-300 transition-colors"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}
