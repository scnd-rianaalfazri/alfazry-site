import React from 'react';
import { GAME_META } from '../constants/gameConfig';

/**
 * Instruction
 * Menampilkan petunjuk singkat cara bermain dalam sebuah glass card.
 */
function Instruction() {
  return (
    <div
      className="mx-auto max-w-3xl px-4"
      role="note"
      aria-label="Petunjuk permainan"
    >
      <div
        className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md
          px-5 py-3 text-sm sm:text-base text-slate-300 shadow-inner shadow-black/20"
      >
        <span className="mr-2" aria-hidden="true">💡</span>
        {GAME_META.instruction}
      </div>
    </div>
  );
}

export default React.memo(Instruction);
