import React, { useCallback, useMemo } from 'react';
import CardItem from './CardItem';
import DropZone from './DropZone';
import { ZONE_CONFIG } from '../constants/gameConfig';

/**
 * GameBoard
 * Mengatur seluruh area gameplay: tray kartu belum ditempatkan + dua drop zone.
 *
 * Props diteruskan langsung dari hook useScienceGame.
 */
function GameBoard({
  cards,
  answers,
  draggingCard,
  selectedCard,
  isChecked,
  checkedResults,
  onDragStart,
  onDragEnd,
  onDrop,
  onSelect,
  onZoneActivate,
}) {
  const unplacedCards = useMemo(
    () => cards.filter((card) => !answers[card.id]),
    [cards, answers]
  );

  const checkedMap = useMemo(() => {
    const map = {};
    checkedResults.forEach((r) => {
      map[r.card.id] = r.isCorrect;
    });
    return map;
  }, [checkedResults]);

  const getPlacedCards = useCallback(
    (zoneId) => cards.filter((card) => answers[card.id] === zoneId),
    [cards, answers]
  );

  return (
    <div className="mx-auto max-w-5xl px-4 flex flex-col gap-6">
      {/* Tray: kartu yang belum ditempatkan */}
      <section
        aria-label="Kartu aktivitas yang belum ditempatkan"
        className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-lg p-4 sm:p-5"
      >
        <h2 className="text-sm sm:text-base font-semibold text-slate-300 mb-3">
          🗂️ Kartu Aktivitas
        </h2>

        {unplacedCards.length === 0 ? (
          <p className="text-xs sm:text-sm text-slate-500 italic text-center py-3">
            Semua kartu sudah ditempatkan 🎉
          </p>
        ) : (
          <div
            role="list"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
          >
            {unplacedCards.map((card) => (
              <div role="listitem" key={card.id}>
                <CardItem
                  card={card}
                  isDragging={draggingCard === card.id}
                  isSelected={selectedCard === card.id}
                  isChecked={isChecked}
                  isCorrect={checkedMap[card.id] ?? null}
                  onDragStart={onDragStart}
                  onDragEnd={onDragEnd}
                  onSelect={onSelect}
                />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Drop zones */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        <DropZone
          zone={ZONE_CONFIG.fisika}
          placedCards={getPlacedCards(ZONE_CONFIG.fisika.id)}
          draggingCard={draggingCard}
          selectedCard={selectedCard}
          isChecked={isChecked}
          checkedMap={checkedMap}
          onDrop={onDrop}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          onSelect={onSelect}
          onActivate={onZoneActivate}
        />
        <DropZone
          zone={ZONE_CONFIG.bukan_fisika}
          placedCards={getPlacedCards(ZONE_CONFIG.bukan_fisika.id)}
          draggingCard={draggingCard}
          selectedCard={selectedCard}
          isChecked={isChecked}
          checkedMap={checkedMap}
          onDrop={onDrop}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          onSelect={onSelect}
          onActivate={onZoneActivate}
        />
      </div>
    </div>
  );
}

export default React.memo(GameBoard);
