// ============================================================
// waveUtils.js
// Kumpulan fungsi bantu untuk perhitungan besaran gelombang.
// Dipisah dari komponen agar mudah diuji & dipelihara.
// ============================================================

/**
 * Menghitung periode gelombang.
 * T = 1 / f
 * @param {number} frequency - frekuensi dalam Hz
 * @returns {number} periode dalam detik
 */
export function calculatePeriod(frequency) {
  if (!frequency || frequency <= 0) return 0
  return 1 / frequency
}

/**
 * Menghitung cepat rambat gelombang.
 * v = f × λ
 * @param {number} frequency - frekuensi dalam Hz
 * @param {number} wavelength - panjang gelombang dalam meter
 * @returns {number} cepat rambat dalam m/s
 */
export function calculateSpeed(frequency, wavelength) {
  return frequency * wavelength
}

/**
 * Memformat angka menjadi string dengan jumlah desimal tetap.
 * @param {number} value - nilai yang akan diformat
 * @param {number} decimals - jumlah digit desimal (default 2)
 * @returns {string} angka yang sudah diformat
 */
export function formatNumber(value, decimals = 2) {
  const number = Number(value)
  if (Number.isNaN(number)) return (0).toFixed(decimals)
  return number.toFixed(decimals)
}

// ------------------------------------------------------------
// Batas (range) & nilai default parameter, dipakai bersama oleh
// WaveControls dan WaveGeneratorSimulation supaya tidak ada
// angka "ajaib" yang tersebar di banyak file.
// ------------------------------------------------------------
export const PARAM_LIMITS = {
  frequency: { min: 0.5, max: 5, step: 0.1, default: 2, unit: "Hz" },
  amplitude: { min: 1, max: 10, step: 0.5, default: 5, unit: "cm" },
  wavelength: { min: 0.5, max: 5, step: 0.1, default: 2, unit: "m" },
  speed: { min: 1, max: 10, step: 0.1, default: 4, unit: "m/s" },
}

// ------------------------------------------------------------
// Preset simulasi. `mode` menentukan apakah cepat rambat
// dihitung otomatis (auto) dari f × λ, atau memakai nilai `v`
// yang sudah ditentukan (manual).
// ------------------------------------------------------------
export const WAVE_PRESETS = [
  {
    id: "lambat",
    label: "Gelombang Lambat",
    icon: "🐢",
    frequency: 1,
    amplitude: 2,
    wavelength: 4,
    mode: "auto",
  },
  {
    id: "cepat",
    label: "Gelombang Cepat",
    icon: "⚡",
    frequency: 4,
    amplitude: 2,
    wavelength: 1,
    mode: "auto",
  },
  {
    id: "laut",
    label: "Gelombang Laut",
    icon: "🌊",
    frequency: 0.5,
    amplitude: 8,
    wavelength: 5,
    mode: "auto",
  },
  {
    id: "suara",
    label: "Gelombang Suara",
    icon: "🔊",
    frequency: 5,
    amplitude: 2,
    wavelength: 0.5,
    mode: "auto",
  },
]
