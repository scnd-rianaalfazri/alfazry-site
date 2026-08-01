import React from 'react';
import { ZONE_CONFIG } from '../constants/gameConfig';

/**
 * ExplanationCard
 * Menampilkan penjelasan untuk satu kartu setelah jawaban diperiksa.
 *
 * Props:
 * - result: { card, placedZone, isCorrect }
 */
function ExplanationCard({ result }) {
  const { card, placedZone, isCorrect } = result;
  const correctZoneLabel = ZONE_CONFIG[card.category]?.label ?? '-';
  const placedZoneLabel = ZONE_CONFIG[placedZone]?.label ?? '-';

  return (
    <li
      className={`rounded-xl border px-4 py-3 text-sm sm:text-base backdrop-blur-md
        ${
          isCorrect
            ? 'border-emerald-400/40 bg-emerald-400/5'
            : 'border-rose-400/40 bg-rose-400/5'
        }`}
    >
      <div className="flex items-start gap-2">
        <span aria-hidden="true" className="text-lg leading-tight">
          {isCorrect ? '✅' : '❌'}
        </span>
        <div className="flex-1">
          <p className="font-semibold text-slate-100">{card.text}</p>

          {!isCorrect && (
            <p className="mt-0.5 text-xs sm:text-sm text-slate-400">
              Kamu menjawab: <span className="text-rose-300">{placedZoneLabel}</span>{' '}
              &middot; Seharusnya: <span className="text-emerald-300">{correctZoneLabel}</span>
            </p>
          )}

          <p className="mt-1 text-xs sm:text-sm text-slate-400">{card.explanation}</p>
        </div>
      </div>
    </li>
  );
}

export default React.memo(ExplanationCard);
