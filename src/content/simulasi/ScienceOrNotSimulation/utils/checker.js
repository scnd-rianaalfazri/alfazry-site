/**
 * checker.js
 * Fungsi utilitas untuk memeriksa kebenaran jawaban.
 */

/**
 * Mengecek apakah kartu ditempatkan di zona yang benar.
 * @param {Object} card - objek kartu (memiliki field `category`)
 * @param {string} placedZone - id zona tempat kartu diletakkan
 * @returns {boolean}
 */
export function isCorrectPlacement(card, placedZone) {
  if (!card || !placedZone) return false;
  return card.category === placedZone;
}

/**
 * Mengecek apakah seluruh kartu sudah ditempatkan (semua punya jawaban).
 * @param {Array} cards - daftar seluruh kartu
 * @param {Object} answers - map { [cardId]: zoneId }
 * @returns {boolean}
 */
export function isAllPlaced(cards, answers) {
  if (!cards.length) return false;
  return cards.every((card) => Boolean(answers[card.id]));
}

/**
 * Menghasilkan hasil pemeriksaan untuk setiap kartu.
 * @param {Array} cards
 * @param {Object} answers
 * @returns {Array} daftar { card, placedZone, isCorrect }
 */
export function buildCheckedResults(cards, answers) {
  return cards.map((card) => {
    const placedZone = answers[card.id];
    return {
      card,
      placedZone,
      isCorrect: isCorrectPlacement(card, placedZone),
    };
  });
}
