/**
 * gameConfig.js
 * Konfigurasi statis untuk simulasi "Science or Not?"
 * Tidak ada logic di sini — hanya nilai konfigurasi.
 */

export const GAME_META = {
  title: '🧩 Science or Not?',
  subtitle: 'Apakah Ini Termasuk Fisika?',
  category: 'Hakikat Ilmu Fisika',
  instruction:
    'Seret (drag) setiap kartu aktivitas ke area yang sesuai. Jika kamu berada di perangkat sentuh atau menggunakan keyboard, kamu juga bisa mengetuk/menekan kartu lalu memilih area tujuan.',
};

export const ZONES = {
  FISIKA: 'fisika',
  BUKAN_FISIKA: 'bukan_fisika',
};

export const ZONE_CONFIG = {
  [ZONES.FISIKA]: {
    id: ZONES.FISIKA,
    label: 'Termasuk Fisika',
    icon: '✅',
    accent: 'blue',
  },
  [ZONES.BUKAN_FISIKA]: {
    id: ZONES.BUKAN_FISIKA,
    label: 'Bukan Fisika',
    icon: '❌',
    accent: 'purple',
  },
};

export const TOTAL_CARDS = 20;

export const SCORE_CONFIG = {
  pointsPerCorrect: 10,
  maxScore: TOTAL_CARDS * 10,
};

export const RESULT_MESSAGES = {
  excellent: { min: 90, text: 'Luar biasa! Kamu benar-benar memahami hakikat ilmu Fisika.' },
  good: { min: 70, text: 'Bagus! Pemahamanmu tentang ruang lingkup Fisika sudah cukup baik.' },
  fair: { min: 50, text: 'Lumayan, tapi masih ada beberapa konsep yang perlu kamu pelajari lagi.' },
  poor: { min: 0, text: 'Yuk pelajari lagi materi hakikat ilmu Fisika, kamu pasti bisa lebih baik!' },
};
