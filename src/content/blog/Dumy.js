// ============================================================
// DATA BLOG — Alfazrian Fisika
// ============================================================
// Tinggal copy salah satu object di bawah, ganti isinya, lalu
// tambahkan ke array `blogs`. Urutan di array = urutan tampil
// (yang paling baru taruh di paling atas).
//
// Field yang WAJIB diisi:
//   slug      -> untuk URL, contoh "/blog/kenapa-langit-biru"
//                pakai huruf kecil & tanda "-", tanpa spasi
//   title     -> judul postingan
//   excerpt   -> ringkasan 1-2 kalimat, tampil di card listing
//   date      -> format bebas, contoh "12 Juli 2026"
//   category  -> label singkat, contoh "Opini", "Eksperimen", "Cerita"
//   readTime  -> perkiraan waktu baca, contoh "4 menit"
//   content   -> array section, tiap section BEBAS isi salah satu:
//       { heading: "..." }              -> judul sub-bagian
//       { body: "..." }                 -> satu paragraf teks
//       { body: ["...", "..."] }        -> banyak paragraf sekaligus
//       { image: "url atau import gambar", caption: "..." }
//       { quote: "..." }                -> kutipan/highlight
//
// Field OPSIONAL:
//   coverImage -> gambar sampul yang tampil di halaman detail & card
//   tags       -> array string, contoh ["fisika", "quantum"]
// ============================================================

const dumy = {

  // Contoh 1 — hapus/ganti setelah kamu isi konten sungguhan
    slug: "contoh-cara-menulis-post",
    title: "Contoh: Cara Menulis Postingan Baru",
    excerpt:  "Postingan ini cuma contoh struktur. Hapus atau timpa dengan kontenmu sendiri.",
    date: "4 Juli 2026",
    category: "Panduan",
    readTime: "2 menit",
    tags: ["panduan"],
    content: [
      {
        body:
          "Ini adalah paragraf pembuka. Kamu bisa mulai dengan cerita pendek, pertanyaan, atau fakta menarik seputar fisika.",
      },
      {
        heading: "Sub Judul Bagian Pertama",
      },
      {
        body: [
          "Paragraf pertama di bagian ini.",
          "Paragraf kedua, kalau butuh lebih dari satu.",
        ],
      },
      {
        quote: "Kutipan atau kalimat highlight taruh di sini.",
      },
      {
        heading: "Sub Judul Bagian Kedua",
      },
      {
        body: "Tutup dengan kesimpulan singkat atau ajakan buat lanjut belajar.",
      },
    ],
}

export default dumy