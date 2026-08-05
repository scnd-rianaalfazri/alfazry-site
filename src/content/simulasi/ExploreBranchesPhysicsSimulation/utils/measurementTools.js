// ============================================================
// measurementTools.js
// Konfigurasi tiga alat ukur: nama, satuan, ketelitian, dan tips
// cara membaca skalanya. Tidak ada lagi fungsi pengecekan jawaban
// di sini — simulasi ini murni alat bantu praktikum pengganti alat
// fisik, bukan kuis.
// ============================================================

export const TOOLS = {
  penggaris: {
    id: "penggaris",
    name: "Penggaris",
    unit: "cm",
    precision: "1 mm (0,1 cm)",
    readingTip:
      "Sejajarkan angka 0 penggaris dengan ujung kiri benda (geser badan penggaris). Baca garis skala yang berimpit dengan ujung kanan benda. Setiap garis kecil = 1 mm.",
  },
  jangka_sorong: {
    id: "jangka_sorong",
    name: "Jangka Sorong",
    unit: "cm",
    precision: "0,01 cm",
    readingTip:
      "Geser rahang geser sampai kedua rahang menyentuh kedua sisi benda. Baca angka skala utama tepat sebelum garis 0 skala nonius, lalu tambahkan angka skala nonius yang paling sejajar dengan skala utama.",
  },
  mikrometer: {
    id: "mikrometer",
    name: "Mikrometer Sekrup",
    unit: "mm",
    precision: "0,01 mm",
    readingTip:
      "Putar thimble sampai anvil dan spindle menjepit benda. Baca skala utama pada sleeve (garis atas = mm penuh, garis bawah = 0,5 mm), lalu tambahkan angka pada skala thimble yang sejajar garis datum × 0,01 mm.",
  },
};

export const TOOL_LIST = Object.values(TOOLS);
