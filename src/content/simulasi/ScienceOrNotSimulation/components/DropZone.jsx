import React, { useCallback, useState } from 'react';
import CardItem from './CardItem';

const ACCENT_CLASSES = {
  blue: {
    border: 'border-neon-blue/30',
    glow: 'shadow-[0_0_30px_rgba(56,189,248,0.15)]',
    activeGlow: 'shadow-[0_0_35px_rgba(56,189,248,0.4)] border-neon-blue/70',
    text: 'text-neon-blue',
  },
  purple: {
    border: 'border-neon-purple/30',
    glow: 'shadow-[0_0_30px_rgba(168,85,247,0.15)]',
    activeGlow: 'shadow-[0_0_35px_rgba(168,85,247,0.4)] border-neon-purple/70',
    text: 'text-neon-purple',
  },
};

/**
 * DropZone
 * Area target untuk menempatkan kartu, mendukung drag & drop native serta
 * fallback klik/keyboard (via onActivate) untuk aksesibilitas.
 *
 * Props:
 * - zone: { id, label, icon, accent }
 * - placedCards: array kartu yang sudah ditempatkan di zona ini
 * - draggingCard, selectedCard, isChecked
 * - checkedMap: { [cardId]: boolean } hasil pemeriksaan
 * - onDrop: (zoneId) => void
 * - onDragStart, onDragEnd, onSelect: diteruskan ke CardItem
 * - onActivate: (zoneId) => void - dipanggil saat zona diklik/ditekan (fallback keyboard)
 */
function DropZone({
  zone,
  placedCards,
  draggingCard,
  selectedCard,
  isChecked,
  checkedMap,
  onDrop,
  onDragStart,
  onDragEnd,
  onSelect,
  onActivate,
}) {
  const [isOver, setIsOver] = useState(false);
  const accent = ACCENT_CLASSES[zone.accent] ?? ACCENT_CLASSES.blue;

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setIsOver(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsOver(false);
  }, []);

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      setIsOver(false);
      onDrop(zone.id);
    },
    [zone.id, onDrop]
  );

  const handleZoneClick = useCallback(() => {
    onActivate(zone.id);
  }, [zone.id, onActivate]);

  return (
    <section
      aria-label={`Area drop: ${zone.label}`}
      className={`flex-1 min-w-0 rounded-2xl border backdrop-blur-lg bg-white/[0.03]
        p-4 sm:p-5 transition-all duration-200 ease-out
        ${isOver ? accent.activeGlow : `${accent.border} ${accent.glow}`}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <button
        type="button"
        onClick={handleZoneClick}
        disabled={isChecked || !selectedCard}
        className={`w-full flex items-center gap-2 mb-3 text-left font-bold text-base sm:text-lg ${accent.text}
          disabled:cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue rounded-lg`}
      >
        <span aria-hidden="true" className="text-xl">{zone.icon}</span>
        {zone.label}
        <span className="ml-auto text-xs sm:text-sm font-medium text-slate-400">
          {placedCards.length} kartu
        </span>
      </button>

      <div className="flex flex-col gap-2 min-h-[120px]" role="list">
        {placedCards.length === 0 && (
          <p className="text-xs sm:text-sm text-slate-500 italic py-4 text-center border border-dashed border-white/10 rounded-xl">
            Seret kartu ke sini
          </p>
        )}

        {placedCards.map((card) => (
          <div role="listitem" key={card.id} className="animate-drop-snap">
            <CardItem
              card={card}
              isDragging={draggingCard === card.id}
              isSelected={selectedCard === card.id}
              isChecked={isChecked}
              isCorrect={checkedMap ? checkedMap[card.id] : null}
              onDragStart={onDragStart}
              onDragEnd={onDragEnd}
              onSelect={onSelect}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default React.memo(DropZone);
