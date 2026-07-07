// FilterBar.jsx
// Deretan chip kategori untuk memfilter benda secara realtime.

import React from "react";
import { motion } from "framer-motion";
import { CATEGORIES } from "./data/objects";

/**
 * @param {Object} props
 * @param {string} props.activeCategory
 * @param {(category: string) => void} props.onChange
 */
export default function FilterBar({ activeCategory, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {CATEGORIES.map((category) => {
        const isActive = category === activeCategory;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            className="relative rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors"
          >
            {isActive && (
              <motion.span
                layoutId="filter-pill"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/80 to-purple-500/80 shadow-[0_0_16px_rgba(56,189,248,0.45)]"
              />
            )}
            <span
              className={[
                "relative z-10",
                isActive ? "text-white" : "text-slate-400 hover:text-slate-200",
              ].join(" ")}
            >
              {category}
            </span>
            {!isActive && (
              <span className="absolute inset-0 rounded-full border border-white/10" />
            )}
          </button>
        );
      })}
    </div>
  );
}
