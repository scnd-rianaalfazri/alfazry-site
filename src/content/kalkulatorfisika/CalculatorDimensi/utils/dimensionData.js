// utils/dimensionData.js
//
// Sumber data untuk Kalkulator Dimensi Fisika.
// Berisi tiga hal:
//   1. BASE_DIMENSIONS  -> urutan dimensi pokok yang dipakai (M, L, T, I)
//   2. VARIABLE_TABLE    -> kamus simbol variabel -> dimensinya (dipakai parser/kalkulator)
//   3. QUANTITY_LIBRARY -> daftar besaran fisika bernama (dipakai fitur pencarian & interpretasi)
//   4. EXAMPLE_FORMULAS -> daftar rumus contoh untuk tombol cepat
//
// Menambah variabel atau besaran baru cukup menambah entri baru di objek/array
// di bawah ini, tidak perlu mengubah logika di file lain.

/**
 * Urutan dimensi pokok yang didukung kalkulator ini.
 * M = Massa, L = Panjang, T = Waktu, I = Arus Listrik.
 * Urutan ini juga menentukan urutan penulisan saat dimensi diformat,
 * misalnya "ML²T⁻²" (Massa lalu Panjang lalu Waktu).
 */
export const BASE_DIMENSIONS = ["M", "L", "T", "I"];

/**
 * Dimensi nol (dimensionless), dipakai untuk angka murni seperti koefisien 2, 0.5, dsb.
 */
export const ZERO_DIMENSION = { M: 0, L: 0, T: 0, I: 0 };

/**
 * Membuat objek dimensi baru dengan nilai default 0 pada dimensi yang tidak disebutkan.
 * Membantu penulisan tabel VARIABLE_TABLE agar tidak perlu menulis ulang semua kunci.
 * @param {Partial<{M:number,L:number,T:number,I:number}>} partial
 * @returns {{M:number,L:number,T:number,I:number}}
 */
function dim(partial = {}) {
  return {
    M: partial.M || 0,
    L: partial.L || 0,
    T: partial.T || 0,
    I: partial.I || 0,
  };
}

/**
 * Kamus simbol variabel -> data dimensinya.
 * Simbol yang dipakai di sini adalah simbol satu karakter yang akan dikenali
 * oleh tokenizer/parser saat pengguna mengetik rumus, misalnya "m*v" atau "F=m*a".
 *
 * Catatan penting mengenai simbol "V":
 * Dalam fisika, huruf "V" umum dipakai baik untuk Volume maupun Tegangan Listrik.
 * Karena kalkulator ini memakai satu simbol untuk satu dimensi, "V" di sini
 * didefinisikan sebagai VOLUME (agar rumus ρ = m/V pada contoh rumus benar).
 * Besaran Tegangan Listrik tetap tersedia lewat pencarian besaran (QUANTITY_LIBRARY)
 * dan lewat variabel turunannya (R, C, E) yang sudah dihitung dengan dimensi tegangan
 * standar, walau simbol "V" itu sendiri tidak dipakai sebagai tegangan di parser.
 */
export const VARIABLE_TABLE = {
  m: { name: "Massa", dimension: dim({ M: 1 }) },
  s: { name: "Perpindahan / Jarak", dimension: dim({ L: 1 }) },
  t: { name: "Waktu", dimension: dim({ T: 1 }) },
  r: { name: "Jari-jari / Jarak", dimension: dim({ L: 1 }) },
  h: { name: "Tinggi", dimension: dim({ L: 1 }) },
  x: { name: "Posisi (sumbu x)", dimension: dim({ L: 1 }) },
  y: { name: "Posisi (sumbu y)", dimension: dim({ L: 1 }) },
  z: { name: "Posisi (sumbu z)", dimension: dim({ L: 1 }) },

  v: { name: "Kecepatan", dimension: dim({ L: 1, T: -1 }) },
  a: { name: "Percepatan", dimension: dim({ L: 1, T: -2 }) },

  F: { name: "Gaya", dimension: dim({ M: 1, L: 1, T: -2 }) },
  W: { name: "Usaha / Energi", dimension: dim({ M: 1, L: 2, T: -2 }) },
  P: { name: "Daya", dimension: dim({ M: 1, L: 2, T: -3 }) },
  p: { name: "Tekanan", dimension: dim({ M: 1, L: -1, T: -2 }) },

  "ρ": { name: "Massa Jenis", dimension: dim({ M: 1, L: -3 }) },

  Q: { name: "Muatan Listrik", dimension: dim({ T: 1, I: 1 }) },
  I: { name: "Arus Listrik", dimension: dim({ I: 1 }) },
  V: { name: "Volume", dimension: dim({ L: 3 }) },
  R: { name: "Hambatan Listrik", dimension: dim({ M: 1, L: 2, T: -3, I: -2 }) },
  C: { name: "Kapasitansi", dimension: dim({ M: -1, L: -2, T: 4, I: 2 }) },

  g: { name: "Percepatan Gravitasi", dimension: dim({ L: 1, T: -2 }) },
  k: { name: "Konstanta Pegas", dimension: dim({ M: 1, T: -2 }) },
  E: { name: "Medan Listrik", dimension: dim({ M: 1, L: 1, T: -3, I: -1 }) },
  B: { name: "Medan Magnet", dimension: dim({ M: 1, T: -2, I: -1 }) },

  "μ": { name: "Permeabilitas Magnetik", dimension: dim({ M: 1, L: 1, T: -2, I: -2 }) },
  "λ": { name: "Panjang Gelombang", dimension: dim({ L: 1 }) },
  f: { name: "Frekuensi", dimension: dim({ T: -1 }) },
  "ω": { name: "Kecepatan Sudut", dimension: dim({ T: -1 }) },
};

/**
 * Pustaka besaran fisika bernama, dipakai oleh:
 * - Fitur "Cari Dimensi Besaran" (pencarian berdasarkan nama seperti "Energi")
 * - Fitur "Interpretasi" (mencocokkan dimensi hasil perhitungan dengan nama besaran)
 *
 * `aliases` berisi kata kunci alternatif (huruf kecil semua) yang juga cocok saat dicari.
 */
export const QUANTITY_LIBRARY = [
  {
    name: "Massa",
    aliases: ["massa", "berat massa"],
    formula: "m",
    dimension: dim({ M: 1 }),
  },
  {
    name: "Panjang / Jarak",
    aliases: ["panjang", "jarak", "perpindahan"],
    formula: "s",
    dimension: dim({ L: 1 }),
  },
  {
    name: "Waktu",
    aliases: ["waktu"],
    formula: "t",
    dimension: dim({ T: 1 }),
  },
  {
    name: "Kecepatan",
    aliases: ["kecepatan", "laju"],
    formula: "v = s / t",
    dimension: dim({ L: 1, T: -1 }),
  },
  {
    name: "Percepatan",
    aliases: ["percepatan", "akselerasi"],
    formula: "a = v / t",
    dimension: dim({ L: 1, T: -2 }),
  },
  {
    name: "Gaya",
    aliases: ["gaya", "force"],
    formula: "F = m × a",
    dimension: dim({ M: 1, L: 1, T: -2 }),
  },
  {
    name: "Energi atau Usaha",
    aliases: ["energi", "usaha", "kerja", "energi kinetik", "energi potensial"],
    formula: "W = F × s",
    dimension: dim({ M: 1, L: 2, T: -2 }),
  },
  {
    name: "Daya",
    aliases: ["daya", "power"],
    formula: "P = W / t",
    dimension: dim({ M: 1, L: 2, T: -3 }),
  },
  {
    name: "Momentum",
    aliases: ["momentum", "impuls"],
    formula: "p = m × v",
    dimension: dim({ M: 1, L: 1, T: -1 }),
  },
  {
    name: "Tekanan",
    aliases: ["tekanan", "pressure"],
    formula: "P = F / A",
    dimension: dim({ M: 1, L: -1, T: -2 }),
  },
  {
    name: "Massa Jenis",
    aliases: ["massa jenis", "densitas", "kerapatan"],
    formula: "ρ = m / V",
    dimension: dim({ M: 1, L: -3 }),
  },
  {
    name: "Volume",
    aliases: ["volume", "isi"],
    formula: "V = p × l × t",
    dimension: dim({ L: 3 }),
  },
  {
    name: "Frekuensi",
    aliases: ["frekuensi"],
    formula: "f = 1 / t",
    dimension: dim({ T: -1 }),
  },
  {
    name: "Kecepatan Sudut",
    aliases: ["kecepatan sudut", "omega"],
    formula: "ω = 2πf",
    dimension: dim({ T: -1 }),
  },
  {
    name: "Panjang Gelombang",
    aliases: ["panjang gelombang"],
    formula: "λ = v / f",
    dimension: dim({ L: 1 }),
  },
  {
    name: "Muatan Listrik",
    aliases: ["muatan listrik", "muatan"],
    formula: "Q = I × t",
    dimension: dim({ T: 1, I: 1 }),
  },
  {
    name: "Arus Listrik",
    aliases: ["arus listrik", "arus"],
    formula: "I",
    dimension: dim({ I: 1 }),
  },
  {
    name: "Tegangan Listrik (Beda Potensial)",
    aliases: ["tegangan", "tegangan listrik", "beda potensial", "voltase"],
    formula: "V = W / Q",
    dimension: dim({ M: 1, L: 2, T: -3, I: -1 }),
  },
  {
    name: "Hambatan Listrik",
    aliases: ["hambatan", "hambatan listrik", "resistansi"],
    formula: "R = V / I",
    dimension: dim({ M: 1, L: 2, T: -3, I: -2 }),
  },
  {
    name: "Kapasitansi",
    aliases: ["kapasitansi", "kapasitas listrik"],
    formula: "C = Q / V",
    dimension: dim({ M: -1, L: -2, T: 4, I: 2 }),
  },
  {
    name: "Medan Listrik",
    aliases: ["medan listrik"],
    formula: "E = F / Q",
    dimension: dim({ M: 1, L: 1, T: -3, I: -1 }),
  },
  {
    name: "Medan Magnet",
    aliases: ["medan magnet", "induksi magnetik"],
    formula: "B = F / (I × v)",
    dimension: dim({ M: 1, T: -2, I: -1 }),
  },
  {
    name: "Percepatan Gravitasi",
    aliases: ["percepatan gravitasi", "gravitasi"],
    formula: "g",
    dimension: dim({ L: 1, T: -2 }),
  },
  {
    name: "Konstanta Pegas",
    aliases: ["konstanta pegas", "tetapan pegas"],
    formula: "k = F / x",
    dimension: dim({ M: 1, T: -2 }),
  },
];

/**
 * Daftar rumus contoh untuk tombol cepat di UI (Fitur 8).
 */
export const EXAMPLE_FORMULAS = [
  "F=m*a",
  "W=F*s",
  "P=W/t",
  "ρ=m/V",
  "v=s/t",
  "a=v/t",
];
