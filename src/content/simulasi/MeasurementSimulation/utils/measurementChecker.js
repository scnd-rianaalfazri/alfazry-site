// ============================================================
// measurementChecker.js
// Berisi definisi alat ukur (ketelitian, satuan, toleransi) dan
// fungsi untuk mengecek jawaban siswa terhadap nilai sebenarnya.
// ============================================================

// Definisi tiap alat ukur.
// - unit      : satuan yang dipakai siswa saat menjawab
// - precision : ketelitian alat (hanya untuk ditampilkan di UI)
// - tolerance : toleransi kebenaran jawaban, dalam satuan `unit`
// - toValueInUnit(trueValueCm) : mengonversi nilai sebenarnya
//   (selalu disimpan dalam cm) ke satuan alat tersebut.
export const TOOLS = {
  penggaris: {
    id: "penggaris",
    name: "Penggaris",
    unit: "cm",
    precision: "1 mm (0,1 cm)",
    tolerance: 0.1,
    toValueInUnit: (trueValueCm) => trueValueCm,
  },
  jangka_sorong: {
    id: "jangka_sorong",
    name: "Jangka Sorong",
    unit: "cm",
    precision: "0,01 cm",
    tolerance: 0.01,
    toValueInUnit: (trueValueCm) => trueValueCm,
  },
  mikrometer: {
    id: "mikrometer",
    name: "Mikrometer Sekrup",
    unit: "mm",
    precision: "0,01 mm",
    tolerance: 0.01,
    toValueInUnit: (trueValueCm) => trueValueCm * 10, // cm -> mm
  },
};

// Mengecek jawaban siswa.
// Mengembalikan objek berisi status benar/salah, selisih, dan
// nilai benar yang sudah dikonversi ke satuan alat yang dipakai.
export function checkAnswer(toolId, studentValueRaw) {
  const tool = TOOLS[toolId];
  if (!tool) return null;

  const studentValue = parseFloat(studentValueRaw);
  if (Number.isNaN(studentValue)) {
    return {
      valid: false,
      message: "Masukkan angka yang valid terlebih dahulu.",
    };
  }

  return { valid: true, studentValue, tool };
}

// Membandingkan jawaban siswa dengan nilai sebenarnya (dalam cm)
// menggunakan toleransi alat yang dipilih.
export function evaluateMeasurement(toolId, studentValueRaw, trueValueCm) {
  const tool = TOOLS[toolId];
  if (!tool) return null;

  const studentValue = parseFloat(studentValueRaw);
  const correctValueInUnit = Number(tool.toValueInUnit(trueValueCm).toFixed(3));

  if (Number.isNaN(studentValue)) {
    return {
      isCorrect: false,
      studentValue: null,
      correctValue: correctValueInUnit,
      unit: tool.unit,
      diff: null,
    };
  }

  const diff = Math.abs(studentValue - correctValueInUnit);
  const isCorrect = diff <= tool.tolerance;

  return {
    isCorrect,
    studentValue,
    correctValue: correctValueInUnit,
    unit: tool.unit,
    diff: Number(diff.toFixed(3)),
  };
}
