/**
 * calculateScore.js
 * Fungsi utilitas untuk menghitung skor akhir permainan.
 */

import { SCORE_CONFIG, RESULT_MESSAGES } from '../constants/gameConfig';

/**
 * Menghitung skor berdasarkan hasil pemeriksaan kartu.
 * @param {Array} checkedResults - hasil dari buildCheckedResults()
 * @returns {{ correctCount: number, wrongCount: number, score: number, percentage: number }}
 */
export function calculateScore(checkedResults) {
  const correctCount = checkedResults.filter((r) => r.isCorrect).length;
  const wrongCount = checkedResults.length - correctCount;
  const score = correctCount * SCORE_CONFIG.pointsPerCorrect;
  const percentage = checkedResults.length
    ? Math.round((correctCount / checkedResults.length) * 100)
    : 0;

  return { correctCount, wrongCount, score, percentage };
}

/**
 * Mengambil pesan hasil berdasarkan persentase yang dicapai.
 * @param {number} percentage
 * @returns {string}
 */
export function getResultMessage(percentage) {
  if (percentage >= RESULT_MESSAGES.excellent.min) return RESULT_MESSAGES.excellent.text;
  if (percentage >= RESULT_MESSAGES.good.min) return RESULT_MESSAGES.good.text;
  if (percentage >= RESULT_MESSAGES.fair.min) return RESULT_MESSAGES.fair.text;
  return RESULT_MESSAGES.poor.text;
}
