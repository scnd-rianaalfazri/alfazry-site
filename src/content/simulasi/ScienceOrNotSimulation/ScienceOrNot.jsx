import React from 'react';
import Header from './components/Header';
import Instruction from './components/Instruction';
import ProgressBar from './components/ProgressBar';
import GameBoard from './components/GameBoard';
import Footer from './components/Footer';
import ResultModal from './components/ResultModal';
import { useScienceGame } from './hooks/useScienceGame';
import './styles/science.css';

/**
 * ScienceOrNot
 * Komponen utama simulasi "🧩 Science or Not?".
 * Bertanggung jawab hanya untuk komposisi UI — seluruh logic berada di useScienceGame.
 */
function ScienceOrNot() {
  const {
    cards,
    answers,
    draggingCard,
    selectedCard,
    isChecked,
    showResult,
    allPlaced,
    placedCount,
    totalCards,
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
  } = useScienceGame();

  return (
    <div
      className="min-h-screen w-full bg-gradient-to-b from-slate-950 via-[#0b0f2a] to-slate-950
        text-slate-100 pb-4"
    >
      <Header />
      <div className="flex flex-col gap-6 mt-2">
        <Instruction />
        <ProgressBar placedCount={placedCount} totalCards={totalCards} />
        <GameBoard
          cards={cards}
          answers={answers}
          draggingCard={draggingCard}
          selectedCard={selectedCard}
          isChecked={isChecked}
          checkedResults={checkedResults}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onDrop={handleDrop}
          onSelect={handleSelectCard}
          onZoneActivate={handleZoneActivate}
        />
        <Footer allPlaced={allPlaced} isChecked={isChecked} onCheck={handleCheckAnswers} />
      </div>

      <ResultModal
        isOpen={showResult}
        scoreSummary={scoreSummary}
        checkedResults={checkedResults}
        totalCards={totalCards}
        onRetry={handleRetry}
        onClose={closeResult}
      />
    </div>
  );
}

export default ScienceOrNot;
