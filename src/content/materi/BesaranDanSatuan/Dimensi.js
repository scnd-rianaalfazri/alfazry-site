import { caption, image } from "framer-motion/client";
import dimensiImg from "/src/assets/Materi/BesaranDanSatuan/Dimensi1.jpg";
import fungsidimensiImg from "/src/assets/Materi/BesaranDanSatuan/Dimensi2.jpg";
import daftardimensiImg from "/src/assets/Materi/BesaranDanSatuan/Dimensi3.jpg";
import analisisdimensiImg from "/src/assets/Materi/BesaranDanSatuan/Dimensi4.jpg";
import nextmissionangkapenting from "/src/assets/Materi/BesaranDanSatuan/Dimensi5.jpg";

const dimensi = {
  title: "Dimensi",
  slug: "dimensi",
  description:
  "Memahami konsep dimensi besaran fisika dan penggunaannya untuk menganalisis persamaan fisika.",
  chapter: "📏 Pengukuran",
  content: [
  {
    blocks: [
    {
      type: "image",
      src: dimensiImg,
      caption: "Dimensi fisika dalam dunia futuristik"
    },
    {
      type: "paragraph",
      text: "Setiap besaran fisika memiliki identitas yang menunjukkan penyusunnya."
    },
    { type: "paragraph", text: "Identitas tersebut disebut dimensi." },
    {
      type: "paragraph",
      text: "Kalau satuan menunjukkan 'berapa ukurannya', maka dimensi menunjukkan 'tersusun dari apa besaran tersebut'."
    }]

  },
  {
    blocks: [
    {
      type: "image",
      src: fungsidimensiImg,
      caption: "Kenapa dimensi penting dalam fisika?"
    },
    {
      type: "paragraph",
      text: "Dalam fisika, sebuah rumus tidak boleh dibuat sembarangan."
    },
    {
      type: "paragraph",
      text: "Dimensi membantu ilmuwan mengecek apakah sebuah persamaan sudah benar atau belum."
    },
    {
      type: "paragraph",
      text: "Jika dimensi ruas kiri dan kanan sama, maka persamaan tersebut kemungkinan benar."
    }]

  },
  {
    blocks: [
    {
      type: "image",
      src: daftardimensiImg,
      caption: "7 dimensi dasar fisika"
    },
    {
      type: "paragraph",
      text: "Setiap besaran pokok memiliki simbol dimensi."
    }]

  },
  { heading:

    "🚗 Contoh Dimensi Kecepatan", blocks: [{ type: "heading", text: "🚗 Contoh Dimensi Kecepatan" },
    { type: "paragraph", text: "Kecepatan diperoleh dari:" },
    { type: "paragraph", text: "kecepatan = jarak / waktu" },
    { type: "paragraph", text: "Jarak memiliki dimensi [L]" },
    { type: "paragraph", text: "Waktu memiliki dimensi [T]" },
    { type: "paragraph", text: "Maka dimensi kecepatan adalah:" },
    { type: "paragraph", text: "[L][T⁻¹]" }]

  },
  { heading:

    "⚡ Contoh Dimensi Gaya", blocks: [{ type: "heading", text: "⚡ Contoh Dimensi Gaya" },
    { type: "paragraph", text: "Menurut hukum Newton:" },
    { type: "paragraph", text: "gaya = massa × percepatan" },
    { type: "paragraph", text: "Massa → [M]" },
    { type: "paragraph", text: "Percepatan → [L][T⁻²]" },
    { type: "paragraph", text: "Maka:" },
    { type: "paragraph", text: "Gaya → [M][L][T⁻²]" }]

  },
  {
    blocks: [
    {
      type: "image",
      src: analisisdimensiImg,
      caption: "Infografis analisis dimensi."
    }]

  },
  { heading:

    "🎯 Manfaat Dimensi", blocks: [{ type: "heading", text: "🎯 Manfaat Dimensi" },
    { type: "paragraph", text: "Dimensi digunakan untuk:" },
    { type: "paragraph", text: "✅ Mengecek kebenaran rumus" },
    { type: "paragraph", text: "✅ Menentukan satuan suatu besaran" },
    {
      type: "paragraph",
      text: "✅ Membantu memahami hubungan antarbesaran"
    }]

  },
  { heading:

    "✨ Inti Materi", blocks: [{ type: "heading", text: "✨ Inti Materi" },
    {
      type: "paragraph",
      text: "Dimensi adalah cara fisika mengenali struktur sebuah besaran."
    },
    {
      type: "paragraph",
      text: "Dengan dimensi, kita dapat melihat apakah sebuah rumus memiliki hubungan yang logis."
    }]

  },
  {
    link: "/materi/angka%20penting",
    blocks: [
    {
      type: "image",
      src: nextmissionangkapenting,
      caption: "🚀 KLIK GAMBAR INI! Kamu bisa menuju ke portal berikutnya."
    },
    {
      type: "paragraph",
      text: "Dalam fisika, hasil pengukuran tidak hanya harus benar, tetapi juga harus ditulis dengan aturan yang tepat."
    },
    { type: "paragraph", text: "➡️ Next, kita menuju: Angka Penting." }]

  },
  { heading:

    "Referensi:", blocks: [{ type: "heading", text: "Referensi:" },
    {
      type: "paragraph",
      text: "Halliday, Resnick & Walker. Fundamentals of Physics."
    },
    {
      type: "paragraph",
      text: "Serway & Jewett. Physics for Scientists and Engineers."
    },
    {
      type: "paragraph",
      text: "Young & Freedman. University Physics with Modern Physics."
    },
    {
      type: "paragraph",
      text: "Kemendikbudristek RI. Buku Fisika SMA/MA Kelas X."
    }]

  }]

};

export default dimensi;