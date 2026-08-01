import React from 'react';

/**
 * ProgressBar
 * Menampilkan progres jumlah kartu yang sudah ditempatkan dari total kartu.
 *
 * Props:
 * - placedCount: number
 * - totalCards: number
 */
function ProgressBar({ placedCount, totalCards }) {
  const percentage = totalCards ? Math.round((placedCount / totalCards) * 100) : 0;

  return (
    <div className="mx-auto max-w-3xl px-4" aria-label="Progres permainan">
      <div className="flex justify-between text-xs sm:text-sm text-slate-400 mb-1.5">
        <span>Progress</span>
        <span>
          {placedCount}/{totalCards} kartu
        </span>
      </div>
      <div
        className="h-2.5 w-full rounded-full bg-white/5 border border-white/10 overflow-hidden"
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-neon-blue to-neon-purple
            shadow-[0_0_12px_rgba(56,189,248,0.6)] transition-[width] duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

export default React.memo(ProgressBar);
