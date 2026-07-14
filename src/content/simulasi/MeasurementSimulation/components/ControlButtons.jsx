import React from "react";

// ============================================================
// ControlButtons
// Tiga tombol aksi utama simulasi.
// ============================================================
export default function ControlButtons({ onCheck, onReset, onNext }) {
  const baseClass =
    "flex-1 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-300 border active:scale-[0.97]";

  return (
    <div className="flex flex-wrap gap-3">
      <button
        onClick={onCheck}
        className={`${baseClass} border-cyan-400 bg-cyan-500/15 text-cyan-200 hover:bg-cyan-500/25 hover:shadow-[0_0_16px_rgba(34,211,238,0.4)]`}
      >
        ✅ Periksa
      </button>
      <button
        onClick={onReset}
        className={`${baseClass} border-zinc-500/40 bg-zinc-800/60 text-zinc-300 hover:border-zinc-300/50 hover:text-white`}
      >
        🔄 Reset
      </button>
      <button
        onClick={onNext}
        className={`${baseClass} border-purple-400 bg-purple-500/15 text-purple-200 hover:bg-purple-500/25 hover:shadow-[0_0_16px_rgba(192,132,252,0.4)]`}
      >
        ➡️ Objek Berikutnya
      </button>
    </div>
  );
}
