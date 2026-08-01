import React from 'react';

/**
 * ScoreCard
 * Menampilkan ringkasan skor: jumlah benar, salah, skor total, dan pesan motivasi.
 *
 * Props:
 * - scoreSummary: { correctCount, wrongCount, score, percentage, message }
 * - totalCards: number
 */
function ScoreCard({ scoreSummary, totalCards }) {
  if (!scoreSummary) return null;

  const { correctCount, wrongCount, score, percentage, message } = scoreSummary;

  return (
    <div
      className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-5 sm:p-6 text-center
        shadow-[0_0_30px_rgba(56,189,248,0.15)]"
    >
      <p className="text-xs sm:text-sm uppercase tracking-widest text-slate-400 font-semibold">
        Skor Akhir
      </p>

      <p
        className="mt-1 text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent
          bg-gradient-to-r from-neon-blue to-neon-purple"
      >
        {score}
        <span className="text-lg sm:text-xl text-slate-500 font-semibold"> pts</span>
      </p>

      <p className="mt-1 text-sm text-slate-400">{percentage}% jawaban benar</p>

      <div className="mt-4 flex justify-center gap-6 text-sm sm:text-base">
        <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
          ✅ {correctCount} Benar
        </span>
        <span className="flex items-center gap-1.5 text-rose-400 font-semibold">
          ❌ {wrongCount} Salah
        </span>
        <span className="text-slate-500">dari {totalCards} kartu</span>
      </div>

      <p className="mt-4 text-sm sm:text-base text-slate-200 italic">{message}</p>
    </div>
  );
}

export default React.memo(ScoreCard);
