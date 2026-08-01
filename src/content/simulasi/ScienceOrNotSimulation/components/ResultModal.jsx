import React, { useEffect, useRef } from 'react';
import ScoreCard from './ScoreCard';
import ExplanationCard from './ExplanationCard';

/**
 * ResultModal
 * Modal overlay yang menampilkan skor akhir, daftar penjelasan tiap kartu,
 * dan tombol "Coba Lagi".
 *
 * Props:
 * - isOpen: boolean
 * - scoreSummary: object dari calculateScore
 * - checkedResults: array hasil pemeriksaan tiap kartu
 * - totalCards: number
 * - onRetry: () => void
 * - onClose: () => void
 */
function ResultModal({ isOpen, scoreSummary, checkedResults, totalCards, onRetry, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (isOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const wrongResults = checkedResults.filter((r) => !r.isCorrect);
  const correctResults = checkedResults.filter((r) => r.isCorrect);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="result-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6
        bg-slate-950/70 backdrop-blur-sm animate-fade-in"
    >
      <div
        className="w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-white/10
          bg-slate-900/90 backdrop-blur-xl p-5 sm:p-7 shadow-[0_0_60px_rgba(56,189,248,0.2)]
          animate-scale-in"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 id="result-modal-title" className="text-xl sm:text-2xl font-extrabold text-slate-100">
            🎯 Hasil Permainan
          </h2>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Tutup hasil"
            className="rounded-lg p-1.5 text-slate-400 hover:text-slate-100 hover:bg-white/10
              transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue"
          >
            ✕
          </button>
        </div>

        <ScoreCard scoreSummary={scoreSummary} totalCards={totalCards} />

        <div className="mt-6">
          {wrongResults.length > 0 && (
            <>
              <h3 className="text-sm font-semibold text-rose-300 mb-2">
                Perlu Diperbaiki ({wrongResults.length})
              </h3>
              <ul className="flex flex-col gap-2 mb-5">
                {wrongResults.map((result) => (
                  <ExplanationCard key={result.card.id} result={result} />
                ))}
              </ul>
            </>
          )}

          <h3 className="text-sm font-semibold text-emerald-300 mb-2">
            Jawaban Benar ({correctResults.length})
          </h3>
          <ul className="flex flex-col gap-2">
            {correctResults.map((result) => (
              <ExplanationCard key={result.card.id} result={result} />
            ))}
          </ul>
        </div>

        <div className="mt-7 flex justify-center">
          <button
            type="button"
            onClick={onRetry}
            className="px-8 py-3 rounded-xl font-bold text-sm sm:text-base tracking-wide
              bg-gradient-to-r from-neon-purple to-neon-blue text-slate-950
              shadow-[0_0_25px_rgba(168,85,247,0.35)]
              transition-all duration-200 ease-out
              hover:scale-105 hover:shadow-[0_0_35px_rgba(56,189,248,0.5)]
              active:scale-95
              focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          >
            🔄 Coba Lagi
          </button>
        </div>
      </div>
    </div>
  );
}

export default React.memo(ResultModal);
