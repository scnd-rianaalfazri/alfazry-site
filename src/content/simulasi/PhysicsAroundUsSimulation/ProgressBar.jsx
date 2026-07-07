// ProgressBar.jsx
// Menampilkan progres keseluruhan "Mission Progress" di atas halaman,
// dalam bentuk blok segmen bergaya holografik.

import React from "react";
import { motion } from "framer-motion";

/**
 * @param {Object} props
 * @param {number} props.found - Jumlah benda yang sudah ditemukan
 * @param {number} props.total - Jumlah total benda yang bisa ditemukan
 */
export default function ProgressBar({ found, total }) {
  const segments = Array.from({ length: total }, (_, i) => i < found);
  const percent = total === 0 ? 0 : Math.round((found / total) * 100);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl">
      <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-400">
        <span>Mission Progress</span>
        <span className="font-mono text-cyan-300">
          {found} / {total} ditemukan
        </span>
      </div>

      <div className="flex gap-1.5">
        {segments.map((filled, i) => (
          <div
            key={i}
            className="h-3 flex-1 overflow-hidden rounded-sm bg-white/5"
          >
            <motion.div
              initial={false}
              animate={{ width: filled ? "100%" : "0%" }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="h-full rounded-sm bg-gradient-to-r from-cyan-400 to-purple-500 shadow-[0_0_10px_rgba(56,189,248,0.7)]"
            />
          </div>
        ))}
      </div>

      <div className="mt-1.5 text-right text-[11px] font-mono text-slate-500">
        {percent}%
      </div>
    </div>
  );
}
