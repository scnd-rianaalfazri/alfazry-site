// utils/dimensionData.js
//
// Sumber data untuk Kalkulator Dimensi Fisika.
// Berisi empat hal:
//   1. BASE_DIMENSIONS  -> urutan dimensi pokok yang dipakai (7 dimensi pokok SI)
//   2. VARIABLE_TABLE    -> kamus simbol variabel -> dimensinya (dipakai parser/kalkulator)
//   3. QUANTITY_LIBRARY -> daftar besaran fisika bernama (dipakai fitur pencarian & interpretasi)
//   4. EXAMPLE_FORMULAS -> daftar rumus contoh untuk tombol cepat
//
// Menambah variabel atau besaran baru cukup menambah entri baru di objek/array
// di bawah ini, tidak perlu mengubah logika di file lain (formatter.js dan
// dimensionMath.js sudah ditulis generik terhadap BASE_DIMENSIONS).

/**
 * Urutan dimensi pokok yang didukung kalkulator ini — mencakup ketujuh
 * dimensi pokok Sistem Internasional (SI):
 *   M = Massa (kg), L = Panjang (m), T = Waktu (s), Θ = Suhu (K),
 *   I = Arus Listrik (A), N = Jumlah Zat (mol), J = Intensitas Cahaya (cd)
 * Urutan ini juga menentukan urutan penulisan saat dimensi diformat,
 * misalnya "ML²T⁻²" (Massa lalu Panjang lalu Waktu).
 */
export const BASE_DIMENSIONS = ["M", "L", "T", "Θ", "I", "N", "J"];

/**
 * Dimensi nol (dimensionless), dipakai untuk angka murni seperti koefisien 2, 0.5, dsb.
 */
export const ZERO_DIMENSION = { M: 0, L: 0, T: 0, "Θ": 0, I: 0, N: 0, J: 0 };

/**
 * Membuat objek dimensi baru dengan nilai default 0 pada dimensi yang tidak disebutkan.
 * Membantu penulisan tabel VARIABLE_TABLE/QUANTITY_LIBRARY agar tidak perlu
 * menulis ulang seluruh 7 kunci setiap kali.
 * @param {Partial<{M:number,L:number,T:number,Θ:number,I:number,N:number,J:number}>} partial
 * @returns {{M:number,L:number,T:number,Θ:number,I:number,N:number,J:number}}
 */
function dim(partial = {}) {
  return {
    M: partial.M || 0,
    L: partial.L || 0,
    T: partial.T || 0,
    "Θ": partial["Θ"] || 0,
    I: partial.I || 0,
    N: partial.N || 0,
    J: partial.J || 0,
  };
}

/**
 * Kamus simbol variabel -> data dimensinya.
 * Simbol yang dipakai di sini adalah simbol satu (atau beberapa) karakter yang
 * akan dikenali oleh tokenizer/parser saat pengguna mengetik rumus, misalnya
 * "m*v" atau "F=m*a". Tokenizer mencocokkan simbol terpanjang lebih dulu,
 * sehingga simbol dua karakter seperti "Iv" tetap aman dipakai.
 *
 * Catatan penting mengenai simbol yang sengaja dipisah dari kembarannya
 * di dunia nyata, untuk menghindari tabrakan (setiap simbol hanya boleh
 * memetakan ke satu dimensi):
 * - "V" di sini adalah VOLUME (bukan tegangan listrik), agar ρ = m/V benar.
 *   Tegangan listrik tetap tersedia lewat pencarian besaran (QUANTITY_LIBRARY).
 * - "T" (huruf besar) di sini adalah SUHU, sedangkan "t" (huruf kecil) adalah
 *   WAKTU — ini konvensi standar di buku fisika manapun, dan tidak bentrok
 *   dengan huruf dimensi pokok "T" (waktu) yang hanya dipakai sebagai label
 *   tampilan hasil, bukan simbol input.
 * - "c" di sini adalah KALOR JENIS (bukan kecepatan cahaya), karena lebih
 *   relevan untuk materi Kalor tingkat SMA.
 * - "ρ" tetap MASSA JENIS (bukan resistivitas listrik, yang juga umum
 *   memakai simbol sama); resistivitas tersedia lewat pencarian besaran saja.
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
  "α": { name: "Percepatan Sudut", dimension: dim({ T: -2 }) },

  F: { name: "Gaya", dimension: dim({ M: 1, L: 1, T: -2 }) },
  W: { name: "Usaha / Energi", dimension: dim({ M: 1, L: 2, T: -2 }) },
  P: { name: "Daya", dimension: dim({ M: 1, L: 2, T: -3 }) },
  p: { name: "Tekanan", dimension: dim({ M: 1, L: -1, T: -2 }) },
  "τ": { name: "Torsi / Momen Gaya", dimension: dim({ M: 1, L: 2, T: -2 }) },

  "ρ": { name: "Massa Jenis", dimension: dim({ M: 1, L: -3 }) },

  Q: { name: "Muatan Listrik", dimension: dim({ T: 1, I: 1 }) },
  I: { name: "Arus Listrik", dimension: dim({ I: 1 }) },
  V: { name: "Volume", dimension: dim({ L: 3 }) },
  R: { name: "Hambatan Listrik", dimension: dim({ M: 1, L: 2, T: -3, I: -2 }) },
  C: { name: "Kapasitansi", dimension: dim({ M: -1, L: -2, T: 4, I: 2 }) },
  "Φ": { name: "Fluks Magnetik", dimension: dim({ M: 1, L: 2, T: -2, I: -1 }) },
  "ε": { name: "Permitivitas Listrik", dimension: dim({ M: -1, L: -3, T: 4, I: 2 }) },

  g: { name: "Percepatan Gravitasi", dimension: dim({ L: 1, T: -2 }) },
  k: { name: "Konstanta Pegas", dimension: dim({ M: 1, T: -2 }) },
  E: { name: "Medan Listrik", dimension: dim({ M: 1, L: 1, T: -3, I: -1 }) },
  B: { name: "Medan Magnet", dimension: dim({ M: 1, T: -2, I: -1 }) },

  "μ": { name: "Permeabilitas Magnetik", dimension: dim({ M: 1, L: 1, T: -2, I: -2 }) },
  "λ": { name: "Panjang Gelombang", dimension: dim({ L: 1 }) },
  f: { name: "Frekuensi", dimension: dim({ T: -1 }) },
  "ω": { name: "Kecepatan Sudut", dimension: dim({ T: -1 }) },

  T: { name: "Suhu (Temperatur Mutlak)", dimension: dim({ "Θ": 1 }) },
  c: { name: "Kalor Jenis", dimension: dim({ L: 2, T: -2, "Θ": -1 }) },
  n: { name: "Jumlah Mol (Zat)", dimension: dim({ N: 1 }) },
  Iv: { name: "Intensitas Cahaya", dimension: dim({ J: 1 }) },
};

/**
 * Pustaka besaran fisika bernama, dipakai oleh:
 * - Fitur "Cari Dimensi Besaran" (pencarian berdasarkan nama seperti "Energi")
 * - Fitur "Interpretasi" (mencocokkan dimensi hasil perhitungan dengan nama besaran)
 *
 * `aliases` berisi kata kunci alternatif (huruf kecil semua) yang juga cocok saat dicari.
 * Entri di sini TIDAK harus punya simbol unik di VARIABLE_TABLE — beberapa
 * besaran (mis. Kalor, Impuls, Modulus Young) memang berbagi dimensi yang
 * sama persis dengan besaran lain yang sudah punya simbol, sehingga cukup
 * didaftarkan sebagai alias/entri pencarian tanpa perlu simbol input baru.
 */
export const QUANTITY_LIBRARY = [
  // --- Mekanika dasar ---
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
    name: "Periode",
    aliases: ["periode"],
    formula: "T = 1 / f",
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
    name: "Percepatan Sudut",
    aliases: ["percepatan sudut"],
    formula: "α = ω / t",
    dimension: dim({ T: -2 }),
  },
  {
    name: "Gaya",
    aliases: ["gaya", "force", "gaya normal", "gaya berat"],
    formula: "F = m × a",
    dimension: dim({ M: 1, L: 1, T: -2 }),
  },
  {
    name: "Energi atau Usaha",
    aliases: [
      "energi",
      "usaha",
      "kerja",
      "energi kinetik",
      "energi potensial",
      "energi mekanik",
    ],
    formula: "W = F × s",
    dimension: dim({ M: 1, L: 2, T: -2 }),
  },
  {
    name: "Daya",
    aliases: ["daya", "power", "daya listrik"],
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
    name: "Momentum Sudut",
    aliases: ["momentum sudut"],
    formula: "L = I × ω",
    dimension: dim({ M: 1, L: 2, T: -1 }),
  },
  {
    name: "Momen Inersia",
    aliases: ["momen inersia"],
    formula: "I = m × r²",
    dimension: dim({ M: 1, L: 2 }),
  },
  {
    name: "Torsi / Momen Gaya",
    aliases: ["torsi", "momen gaya"],
    formula: "τ = F × r",
    dimension: dim({ M: 1, L: 2, T: -2 }),
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
    name: "Modulus Elastisitas (Modulus Young)",
    aliases: ["modulus young", "modulus elastisitas"],
    formula: "E = tegangan / regangan",
    dimension: dim({ M: 1, L: -1, T: -2 }),
  },
  {
    name: "Tegangan Permukaan",
    aliases: ["tegangan permukaan"],
    formula: "γ = F / l",
    dimension: dim({ M: 1, T: -2 }),
  },
  {
    name: "Viskositas",
    aliases: ["viskositas", "kekentalan"],
    formula: "η = F / (A × (dv/dx))",
    dimension: dim({ M: 1, L: -1, T: -1 }),
  },
  {
    name: "Debit Aliran",
    aliases: ["debit", "debit aliran"],
    formula: "Q = V / t",
    dimension: dim({ L: 3, T: -1 }),
  },

  // --- Gelombang & Optik ---
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
    name: "Intensitas Gelombang / Bunyi",
    aliases: ["intensitas gelombang", "intensitas bunyi"],
    formula: "I = P / A",
    dimension: dim({ M: 1, T: -3 }),
  },
  {
    name: "Kekuatan Lensa",
    aliases: ["kekuatan lensa", "daya lensa"],
    formula: "P = 1 / f",
    dimension: dim({ L: -1 }),
  },
  {
    name: "Intensitas Cahaya",
    aliases: ["intensitas cahaya"],
    formula: "Iv",
    dimension: dim({ J: 1 }),
  },

  // --- Listrik & Magnet ---
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
    aliases: [
      "tegangan",
      "tegangan listrik",
      "beda potensial",
      "voltase",
      "ggl",
      "ggl induksi",
    ],
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
    name: "Resistivitas (Hambatan Jenis)",
    aliases: ["resistivitas", "hambatan jenis"],
    formula: "ρ = R × A / l",
    dimension: dim({ M: 1, L: 3, T: -3, I: -2 }),
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
    name: "Fluks Magnetik",
    aliases: ["fluks magnetik"],
    formula: "Φ = B × A",
    dimension: dim({ M: 1, L: 2, T: -2, I: -1 }),
  },
  {
    name: "Permeabilitas Magnetik",
    aliases: ["permeabilitas magnetik"],
    formula: "μ = B × r / I",
    dimension: dim({ M: 1, L: 1, T: -2, I: -2 }),
  },
  {
    name: "Permitivitas Listrik",
    aliases: ["permitivitas listrik"],
    formula: "ε = Q² / (F × r²)",
    dimension: dim({ M: -1, L: -3, T: 4, I: 2 }),
  },

  // --- Termodinamika ---
  {
    name: "Suhu (Temperatur Mutlak)",
    aliases: ["suhu", "temperatur"],
    formula: "T",
    dimension: dim({ "Θ": 1 }),
  },
  {
    name: "Kalor",
    aliases: ["kalor", "panas"],
    formula: "Q = m × c × ΔT",
    dimension: dim({ M: 1, L: 2, T: -2 }),
  },
  {
    name: "Kapasitas Kalor",
    aliases: ["kapasitas kalor", "kapasitas panas"],
    formula: "C = Q / ΔT",
    dimension: dim({ M: 1, L: 2, T: -2, "Θ": -1 }),
  },
  {
    name: "Kalor Jenis",
    aliases: ["kalor jenis", "panas jenis"],
    formula: "c = Q / (m × ΔT)",
    dimension: dim({ L: 2, T: -2, "Θ": -1 }),
  },
  {
    name: "Konduktivitas Termal",
    aliases: ["konduktivitas termal", "daya hantar kalor"],
    formula: "k = (Q × d) / (A × t × ΔT)",
    dimension: dim({ M: 1, L: 1, T: -3, "Θ": -1 }),
  },
  {
    name: "Entropi",
    aliases: ["entropi"],
    formula: "S = Q / T",
    dimension: dim({ M: 1, L: 2, T: -2, "Θ": -1 }),
  },
  {
    name: "Jumlah Mol (Zat)",
    aliases: ["jumlah mol", "jumlah zat", "mol"],
    formula: "n",
    dimension: dim({ N: 1 }),
  },
  {
    name: "Konstanta Gas Universal",
    aliases: ["konstanta gas", "konstanta gas universal"],
    formula: "R = (P × V) / (n × T)",
    dimension: dim({ M: 1, L: 2, T: -2, "Θ": -1, N: -1 }),
  },

  // --- Radioaktivitas / Fisika Modern (dasar) ---
  {
    name: "Aktivitas Radioaktif",
    aliases: ["aktivitas radioaktif", "laju peluruhan"],
    formula: "A = λ × N",
    dimension: dim({ T: -1 }),
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