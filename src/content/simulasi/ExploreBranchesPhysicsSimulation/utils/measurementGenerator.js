// ============================================================
// measurementGenerator.js
// Daftar objek yang bisa diukur beserta rentang ukuran sebenarnya
// (dalam cm), dan fungsi untuk membangkitkan ukuran acak setiap
// kali objek dipilih / disimulasikan ulang.
// ============================================================

// Daftar objek. Setiap objek punya:
// - id      : identifier unik
// - name    : nama tampilan (Bahasa Indonesia)
// - range   : [min, max] ukuran sebenarnya dalam cm
// - shape   : bentuk yang dipakai untuk digambar di MeasurementCanvas
// - icon    : emoji sederhana untuk daftar objek
export const OBJECTS = [
  { id: "pensil", name: "Pensil", range: [12.3, 18.7], shape: "stick", icon: "✏️" },
  { id: "buku", name: "Buku", range: [18, 26], shape: "book", icon: "📕" },
  { id: "baut", name: "Baut", range: [3, 8], shape: "bolt", icon: "🔩" },
  { id: "bola", name: "Bola", range: [5, 12], shape: "ball", icon: "⚽" },
  { id: "koin", name: "Koin", range: [2, 3], shape: "coin", icon: "🪙" },
  { id: "pipa", name: "Pipa Kecil", range: [6, 12], shape: "pipe", icon: "🧪" },
];

// Membangkitkan angka acak desimal antara min dan max.
function randomBetween(min, max, decimals = 2) {
  const value = Math.random() * (max - min) + min;
  const factor = Math.pow(10, decimals);
  return Math.round(value * factor) / factor;
}

// Menghasilkan objek pengukuran baru: data objek (dari OBJECTS)
// digabung dengan "trueValueCm" yang baru dibangkitkan secara acak.
// Nilai ini hanya dipakai untuk menentukan ukuran gambar objek di
// kanvas — TIDAK ditampilkan ke siswa dan tidak dibandingkan dengan
// jawaban apa pun (simulasi ini bukan kuis, murni alat bantu praktikum).
export function generateMeasurement(objectId) {
  const objectData = OBJECTS.find((obj) => obj.id === objectId);
  if (!objectData) return null;

  const [min, max] = objectData.range;
  const trueValueCm = randomBetween(min, max, 2);

  return {
    ...objectData,
    trueValueCm,
  };
}

// Mengambil id objek acak dari daftar OBJECTS.
export function getRandomObjectId() {
  const idx = Math.floor(Math.random() * OBJECTS.length);
  return OBJECTS[idx].id;
}
