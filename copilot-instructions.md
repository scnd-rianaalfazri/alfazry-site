# Instruksi untuk GitHub Copilot — Alfazrian Fisika

Proyek ini adalah situs belajar fisika (React + Vite + Tailwind). Konten
materi disimpan sebagai file JS biasa di `src/content/materi/**/*.js`,
lalu dirender oleh `src/pages/DetailMateri.jsx`.

Ikuti aturan skema di bawah ini SETIAP KALI membuat atau mengedit file
konten materi (`src/content/materi/**/*.js`). Jangan pernah menghasilkan
format lama yang sudah dihapus dukungannya (lihat bagian "Format yang
SUDAH TIDAK DIDUKUNG").

## Struktur dasar satu file materi

```js
import fotoImg from "../../../assets/materi/.../foto.jpg" // kalau ada gambar

const namaMateri = {
  title: "Judul Materi",
  slug: "judul-materi", // dipakai di URL /materi/:slug
  description: "Ringkasan 1 kalimat.",
  chapter: "🔬 Nama Bab",
  content: [
    { /* section 1 */ },
    { /* section 2 */ },
  ],
}

export default namaMateri
```

Tiap `section` di `content` boleh punya `heading` (opsional — kalau ada,
otomatis jadi sub-card yang bisa dibuka/tutup) lalu isinya lewat SALAH SATU
dari dua cara berikut.

## Cara 1 — field lama (masih didukung, urutan tampil TETAP)

Boleh dipakai kalau isinya sederhana dan tidak butuh urutan campur-campur:

```js
{
  heading: "Judul Section",
  image: fotoImg,
  caption: "Keterangan gambar",
  body: "Satu paragraf." ,        // atau array of string untuk banyak paragraf
  equation: "F = ma",
  explanation: "Catatan tambahan.",
  table: { headers: [...], rows: [...] },
  list: { type: "unordered", items: [...] },   // WAJIB format object, lihat bagian List
  quickCheck: { questions: [...], scoring: [...] },
}
```

Urutan tampil field lama ini SELALU: image → body → equation → explanation
→ table → list → quickCheck. Kalau butuh urutan lain, pakai Cara 2.

## Cara 2 — `blocks` (urutan bebas, bisa diulang)

Dipakai kalau butuh menyisipkan gambar di tengah paragraf, tabel sebelum
paragraf penutup, dll:

```js
{
  heading: "Judul Section",
  blocks: [
    { type: "paragraph", text: "Paragraf pembuka." },
    { type: "image", src: fotoImg, caption: "Keterangan" },
    { type: "heading", text: "Sub-judul di tengah konten" },
    { type: "list", list: { type: "ordered", items: [...] } },
    { type: "table", table: { headers: [...], rows: [...] } },
    { type: "equation", equation: "F = ma" },
    { type: "explanation", text: "Catatan." },
    { type: "quickCheck", data: { questions: [...] } },
    { type: "paragraph", text: "Paragraf lain, boleh berkali-kali." },
  ],
}
```

Tipe block yang valid: `paragraph`, `image`, `heading`, `equation`,
`table`, `list`, `explanation`, `quickCheck`. Jangan pakai tipe lain.

## Format `list` (WAJIB object, tidak boleh array biasa)

```js
// Datar
list: {
  type: "ordered",      // atau "unordered"
  items: ["Poin 1", "Poin 2"],
}

// Bercabang + penjelasan per poin (opsional, boleh berlapis-lapis)
list: {
  type: "ordered",
  items: [
    {
      text: "Poin utama",
      description: "Paragraf penjelasan poin ini.", // string atau array of string
      children: {
        type: "unordered",
        items: ["Sub A", "Sub B"],
      },
    },
    "Poin biasa tanpa penjelasan/cabang, boleh string langsung",
  ],
}
```

## Format teks kaya (bold/italic/underline)

Semua field teks (`body`, `explanation`, isi `list`, isi `table`,
`heading`, soal & opsi `quickCheck`) dirender lewat komponen `RichText`
dan mendukung sintaks ini LANGSUNG di dalam string:

- `**teks**` → tebal
- `*teks*` → miring
- `__teks__` → garis bawah

Contoh: `"Fisika itu **penting**, bukan cuma *dihafal*."`

## Format yang SUDAH TIDAK DIDUKUNG — JANGAN dihasilkan

```js
// ❌ SALAH — list sebagai array biasa (format lama, sudah dihapus)
list: ["Poin 1", "Poin 2"]

// ✅ BENAR — harus dibungkus object
list: { type: "unordered", items: ["Poin 1", "Poin 2"] }
```

Kalau menemukan file lama dengan `list: [...]` (array langsung setelah
`list:`), itu artinya file tersebut BELUM dimigrasi — migrasikan dengan
membungkusnya jadi `{ type: "unordered", items: [...] }` TANPA mengubah
isi/urutan/kata-kata di dalam array sama sekali.

## Batasan penting saat mengedit/migrasi

- Jangan pernah mengubah kata-kata konten (teks, angka, nama variabel
  import gambar) — hanya boleh mengubah STRUKTUR pembungkusnya.
- Jangan sentuh `src/components/layout/QuickCheck.jsx`,
  `src/components/layout/RichText.jsx`, atau `src/pages/DetailMateri.jsx`
  kecuali diminta eksplisit.
- Setelah migrasi, proyek harus tetap lolos `npm run build` tanpa error.
- Kalau ragu satu file formatnya sudah benar atau belum, JANGAN diubah —
  laporkan saja, jangan menebak.
