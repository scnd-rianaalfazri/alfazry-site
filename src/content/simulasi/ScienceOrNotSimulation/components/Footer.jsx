import React from 'react';

/**
 * Footer
 * Menampilkan tombol aksi utama "Periksa Jawaban".
 *
 * Props:
 * - allPlaced: boolean - apakah semua kartu sudah ditempatkan
 * - isChecked: boolean - apakah jawaban sudah diperiksa
 * - onCheck: () => void
 */
function Footer({ allPlaced, isChecked, onCheck }) {
  return (
    <footer className="mx-auto max-w-3xl px-4 pt-2 pb-10 sm:pb-12 flex justify-center">
      <button
        type="button"
        onClick={onCheck}
        disabled={!allPlaced || isChecked}
        aria-disabled={!allPlaced || isChecked}
        className="relative px-8 py-3 rounded-xl font-bold text-sm sm:text-base tracking-wide
          bg-gradient-to-r from-neon-blue to-neon-purple text-slate-950
          shadow-[0_0_25px_rgba(56,189,248,0.35)]
          transition-all duration-200 ease-out
          hover:scale-105 hover:shadow-[0_0_35px_rgba(168,85,247,0.5)]
          active:scale-95
          disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-[0_0_25px_rgba(56,189,248,0.35)]
          focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
      >
        {isChecked ? 'Jawaban Diperiksa ✓' : 'Periksa Jawaban'}
      </button>
    </footer>
  );
}

export default React.memo(Footer);
