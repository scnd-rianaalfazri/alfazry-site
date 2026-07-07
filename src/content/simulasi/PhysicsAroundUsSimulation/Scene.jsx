// Scene.jsx
// Area eksplorasi utama: grid responsif berisi seluruh ObjectCard.

import React from "react";
import { AnimatePresence } from "framer-motion";
import ObjectCard from "./ObjectCard";
import { SearchX } from "lucide-react";

/**
 * @param {Object} props
 * @param {Array} props.objects - Daftar benda yang akan ditampilkan (sudah difilter kategori)
 * @param {Set<string>} props.openedIds - Kumpulan id benda yang sudah dibuka
 * @param {string|null} props.activeId - Id benda yang sedang dibuka di InfoPanel
 * @param {string} props.searchQuery - Kata kunci pencarian aktif
 * @param {(object: Object) => void} props.onSelectObject
 */
export default function Scene({
  objects,
  openedIds,
  activeId,
  searchQuery,
  onSelectObject,
}) {
  const trimmedQuery = searchQuery.trim().toLowerCase();

  const matchesQuery = (object) => {
    if (!trimmedQuery) return false;
    const inTitle = object.title.toLowerCase().includes(trimmedQuery);
    const inConcepts = object.concepts.some((c) =>
      c.toLowerCase().includes(trimmedQuery)
    );
    return inTitle || inConcepts;
  };

  const hasQuery = trimmedQuery.length > 0;

  if (objects.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] py-20 text-slate-400">
        <SearchX size={32} className="text-cyan-400/70" />
        <p className="text-sm">Tidak ada benda pada kategori ini.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
      <AnimatePresence initial={false}>
        {objects.map((object) => (
          <ObjectCard
            key={object.id}
            object={object}
            isOpened={openedIds.has(object.id)}
            isActive={activeId === object.id}
            isHighlighted={hasQuery && matchesQuery(object)}
            isDimmed={hasQuery && !matchesQuery(object)}
            onSelect={onSelectObject}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
