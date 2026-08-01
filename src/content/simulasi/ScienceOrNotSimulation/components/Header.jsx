import React from 'react';
import { GAME_META } from '../constants/gameConfig';

/**
 * Header
 * Menampilkan judul, subtitle, dan label kategori simulasi.
 */
function Header() {
  return (
    <header className="text-center px-4 pt-8 pb-4 sm:pt-12 sm:pb-6">
      <span
        className="inline-block rounded-full px-4 py-1 text-xs sm:text-sm font-semibold tracking-wide uppercase
          bg-white/5 border border-neon-purple/40 text-neon-purple/90 backdrop-blur-md
          shadow-[0_0_15px_rgba(168,85,247,0.25)]"
      >
        {GAME_META.category}
      </span>

      <h1
        className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight
          bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-sky-300 to-neon-purple
          drop-shadow-[0_0_25px_rgba(56,189,248,0.35)]"
      >
        {GAME_META.title}
      </h1>

      <p className="mt-2 text-base sm:text-lg text-slate-300/90 font-medium">
        {GAME_META.subtitle}
      </p>
    </header>
  );
}

export default React.memo(Header);
