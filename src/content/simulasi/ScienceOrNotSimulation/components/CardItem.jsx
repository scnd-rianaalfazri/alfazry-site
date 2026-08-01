import React, { useCallback } from 'react';

/**
 * CardItem
 * Merepresentasikan satu kartu aktivitas yang dapat di-drag atau dipilih via keyboard/klik.
 *
 * Props:
 * - card: { id, text }
 * - isDragging: boolean
 * - isSelected: boolean
 * - isChecked: boolean - apakah jawaban sudah diperiksa
 * - isCorrect: boolean | null - hasil pemeriksaan (null jika belum diperiksa)
 * - onDragStart, onDragEnd: (cardId) => void
 * - onSelect: (cardId) => void - fallback klik/keyboard
 */
function CardItem({
  card,
  isDragging,
  isSelected,
  isChecked,
  isCorrect,
  onDragStart,
  onDragEnd,
  onSelect,
}) {
  const handleDragStart = useCallback(
    (e) => {
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', card.id);
      onDragStart(card.id);
    },
    [card.id, onDragStart]
  );

  const handleDragEnd = useCallback(() => {
    onDragEnd();
  }, [onDragEnd]);

  const handleClick = useCallback(() => {
    if (!isChecked) onSelect(card.id);
  }, [card.id, isChecked, onSelect]);

  const handleKeyDown = useCallback(
    (e) => {
      if ((e.key === 'Enter' || e.key === ' ') && !isChecked) {
        e.preventDefault();
        onSelect(card.id);
      }
    },
    [card.id, isChecked, onSelect]
  );

  const stateClasses = isChecked
    ? isCorrect
      ? 'border-emerald-400/70 bg-emerald-400/10 shadow-[0_0_20px_rgba(52,211,153,0.3)]'
      : 'border-rose-400/70 bg-rose-400/10 shadow-[0_0_20px_rgba(251,113,133,0.3)]'
    : isSelected
    ? 'border-neon-blue/80 bg-neon-blue/10 shadow-[0_0_20px_rgba(56,189,248,0.35)] scale-[1.03]'
    : 'border-white/10 bg-white/5 hover:border-neon-blue/50 hover:shadow-[0_0_18px_rgba(56,189,248,0.2)]';

  return (
    <div
      role="button"
      tabIndex={isChecked ? -1 : 0}
      aria-pressed={isSelected}
      aria-label={`Kartu aktivitas: ${card.text}${
        isChecked ? (isCorrect ? ', jawaban benar' : ', jawaban salah') : ''
      }`}
      draggable={!isChecked}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={`group relative select-none rounded-xl border px-4 py-3 backdrop-blur-md
        text-sm sm:text-base text-slate-100 font-medium
        transition-all duration-200 ease-out
        focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950
        ${isChecked ? 'cursor-default' : 'cursor-grab active:cursor-grabbing'}
        ${isDragging ? 'opacity-40 scale-95' : 'opacity-100'}
        ${stateClasses}`}
    >
      <span className="flex items-center gap-2">
        {isChecked && (
          <span aria-hidden="true" className="text-lg leading-none">
            {isCorrect ? '✅' : '❌'}
          </span>
        )}
        {card.text}
      </span>
    </div>
  );
}

export default React.memo(CardItem);
