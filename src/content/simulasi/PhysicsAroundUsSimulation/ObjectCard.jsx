// ObjectCard.jsx
// Kartu tunggal yang merepresentasikan satu benda di area eksplorasi.
// Menangani state hover/selected/dimmed secara visual melalui props.

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

/**
 * @param {Object} props
 * @param {Object} props.object - Data benda (lihat data/objects.js)
 * @param {boolean} props.isOpened - Apakah benda sudah pernah dibuka pengguna
 * @param {boolean} props.isActive - Apakah benda ini sedang dibuka di InfoPanel
 * @param {boolean} props.isHighlighted - Apakah benda cocok dengan kata kunci pencarian
 * @param {boolean} props.isDimmed - Apakah benda perlu diredupkan (tidak cocok pencarian)
 * @param {(object: Object) => void} props.onSelect - Handler saat kartu diklik
 */
export default function ObjectCard({
  object,
  isOpened,
  isActive,
  isHighlighted,
  isDimmed,
  onSelect,
}) {
  return (
    <motion.button
      type="button"
      onClick={() => onSelect(object)}
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{
        opacity: isDimmed ? 0.35 : 1,
        y: 0,
        scale: isActive ? 1.02 : 1,
      }}
      whileHover={{ scale: 1.06, y: -4 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={[
        "group relative flex flex-col items-center justify-center gap-2",
        "aspect-square rounded-2xl p-4 text-center",
        "border backdrop-blur-xl overflow-hidden",
        "bg-white/[0.04] border-white/10",
        "transition-colors duration-300",
        isActive
          ? "border-cyan-400/70 shadow-[0_0_25px_rgba(34,211,238,0.35)]"
          : "hover:border-cyan-400/40",
        isHighlighted ? "ring-2 ring-fuchsia-400/60" : "",
      ].join(" ")}
    >
      {/* Glow ambient di belakang kartu, muncul saat hover */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_50%_20%,rgba(56,189,248,0.25),transparent_70%)]"
      />

      {/* Badge status "ditemukan" */}
      {isOpened && (
        <span className="absolute top-2 right-2 text-emerald-400 drop-shadow-[0_0_6px_rgba(52,211,153,0.8)]">
          <CheckCircle2 size={16} strokeWidth={2.5} />
        </span>
      )}

      <span className="relative text-4xl sm:text-5xl drop-shadow-[0_0_10px_rgba(56,189,248,0.35)]">
        {object.icon}
      </span>

      <span className="relative text-xs sm:text-sm font-medium tracking-wide text-slate-200 group-hover:text-cyan-300 transition-colors">
        {object.title}
      </span>

      <span className="relative text-[10px] uppercase tracking-[0.15em] text-slate-500">
        {object.category}
      </span>
    </motion.button>
  );
}
