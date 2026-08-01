import { useState, useCallback, useMemo } from 'react';
import { CARDS } from '../data/cards';
import { shuffle } from '../utils/shuffle';
import { isAllPlaced, buildCheckedResults } from '../utils/checker';
import { calculateScore, getResultMessage } from '../utils/calculateScore';

/**
 * useScienceGame
 * Custom hook yang mengelola seluruh state & logic permainan "Science or Not?".
 * Komponen UI hanya perlu mengonsumsi state dan handler dari sini.
 */
export function useScienceGame() {
  const [cards, setCards] = useState(() => shuffle(CARDS));
  const [answers, setAnswers] = useState({}); // { [cardId]: zoneId }
  const [draggingCard, setDraggingCard] = useState(null); // cardId sedang di-drag
  const [selectedCard, setSelectedCard] = useState(null); // cardId dipilih via klik/keyboard
  const [isChecked, setIsChecked] = useState(false); // sudah menekan "Periksa Jawaban"
  const [showResult, setShowResult] = useState(false);

  const allPlaced = useMemo(() => isAllPlaced(cards, answers), [cards, answers]);

  const placedCount = useMemo(
    () => cards.filter((card) => Boolean(answers[card.id])).length,
    [cards, answers]
  );

  const checkedResults = useMemo(() => {
    if (!isChecked) return [];
    return buildCheckedResults(cards, answers);
  }, [isChecked, cards, answers]);

  const scoreSummary = useMemo(() => {
    if (!isChecked) return null;
    const summary = calculateScore(checkedResults);
    return { ...summary, message: getResultMessage(summary.percentage) };
  }, [isChecked, checkedResults]);

  /** Menempatkan sebuah kartu ke suatu zona */
  const placeCard = useCallback((cardId, zoneId) => {
    setAnswers((prev) => ({ ...prev, [cardId]: zoneId }));
    setDraggingCard(null);
    setSelectedCard(null);
  }, []);

  /** Mengembalikan kartu ke tray (unplace) */
  const unplaceCard = useCallback((cardId) => {
    setAnswers((prev) => {
      const next = { ...prev };
      delete next[cardId];
      return next;
    });
  }, []);

  const handleDragStart = useCallback((cardId) => {
    setDraggingCard(cardId);
  }, []);

  const handleDragEnd = useCallback(() => {
    setDraggingCard(null);
  }, []);

  const handleDrop = useCallback(
    (zoneId) => {
      if (draggingCard) {
        placeCard(draggingCard, zoneId);
      }
    },
    [draggingCard, placeCard]
  );

  /** Fallback aksesibilitas: pilih kartu via klik/keyboard, lalu pilih zona tujuan */
  const handleSelectCard = useCallback((cardId) => {
    setSelectedCard((prev) => (prev === cardId ? null : cardId));
  }, []);

  const handleZoneActivate = useCallback(
    (zoneId) => {
      if (selectedCard) {
        placeCard(selectedCard, zoneId);
      }
    },
    [selectedCard, placeCard]
  );

  const handleCheckAnswers = useCallback(() => {
    if (!allPlaced) return;
    setIsChecked(true);
    setShowResult(true);
  }, [allPlaced]);

  const handleRetry = useCallback(() => {
    setCards(shuffle(CARDS));
    setAnswers({});
    setDraggingCard(null);
    setSelectedCard(null);
    setIsChecked(false);
    setShowResult(false);
  }, []);

  const closeResult = useCallback(() => {
    setShowResult(false);
  }, []);

  return {
    cards,
    answers,
    draggingCard,
    selectedCard,
    isChecked,
    showResult,
    allPlaced,
    placedCount,
    totalCards: cards.length,
    checkedResults,
    scoreSummary,
    handleDragStart,
    handleDragEnd,
    handleDrop,
    handleSelectCard,
    handleZoneActivate,
    handleCheckAnswers,
    handleRetry,
    closeResult,
    unplaceCard,
  };
}
