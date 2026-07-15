import { caption, form, image, link } from "framer-motion/client";
import notasiilmiahImg from "/src/assets/Materi/BesaranDanSatuan/NotasiIlmiah1.jpg";
import pengertiannotasiIlmiahImg from "/src/assets/Materi/BesaranDanSatuan/NotasiIlmiah2.jpg";
import jenisjenisbilanganImg from "/src/assets/Materi/BesaranDanSatuan/NotasiIlmiah3.jpg";
import contohnotasiilmiahImg from "/src/assets/Materi/BesaranDanSatuan/NotasiIlmiah4.jpg";
import nextmissionpengukuranImg from "/src/assets/Materi/BesaranDanSatuan/NotasiIlmiah5.jpg";

const notasiilmiah = {
  title: "Notasi Ilmiah",
  slug: "notasi ilmiah",
  description:
  "Memahami cara menuliskan bilangan sangat besar atau sangat kecil menggunakan bentuk notasi ilmiah.",
  chapter: "📏 Pengukuran",
  content: [
  {
    blocks: [
    {
      type: "image",
      src: notasiilmiahImg,
      caption: "Notasi ilmiah: kecil dan besar"
    },
    {
      type: "paragraph",
      text: "Dalam fisika, kita sering menemukan angka yang sangat besar maupun sangat kecil."
    },
    { type: "paragraph", text: "Contohnya:" },
    { type: "paragraph", text: "Jarak bumi ke matahari sangat besar." },
    { type: "paragraph", text: "Ukuran atom sangat kecil." },
    {
      type: "paragraph",
      text: "Jika ditulis dengan angka biasa, bentuknya menjadi panjang dan sulit dibaca."
    },
    { type: "paragraph", text: "Karena itu digunakan notasi ilmiah." }]

  },
  {
    blocks: [
    {
      type: "image",
      src: pengertiannotasiIlmiahImg,
      caption: "Penjelasan notasi ilmiah"
    },
    {
      type: "paragraph",
      text: "Notasi ilmiah adalah cara menuliskan bilangan dalam bentuk:"
    },
    { type: "paragraph", text: "a × 10ⁿ" },
    { type: "paragraph", text: "dengan:" },
    {
      type: "paragraph",
      text: "a = bilangan antara 1 sampai kurang dari 10"
    },
    { type: "paragraph", text: "n = pangkat bilangan bulat" }]

  },
  {
    blocks: [
    {
      type: "image",
      src: jenisjenisbilanganImg,
      caption: "Cara menulis notasi ilmiah"
    },
    { type: "paragraph", text: "📈 Menulis Bilangan Besar" },
    {
      type: "paragraph",
      text: "Untuk bilangan besar, koma digeser ke kiri."
    },
    { type: "paragraph", text: "Contoh:" },
    { type: "paragraph", text: "300.000.000 m" },
    { type: "paragraph", text: "Menjadi:" },
    { type: "paragraph", text: "3 × 10⁸ m" },
    { type: "paragraph", text: "Karena koma bergeser 8 tempat ke kiri." },
    {
      type: "paragraph",
      text: "------------------------------------------------------"
    },
    { type: "paragraph", text: "📉 Menulis Bilangan Kecil" },
    {
      type: "paragraph",
      text: "Untuk bilangan kecil, koma digeser ke kanan."
    },
    { type: "paragraph", text: "Contoh:" },
    { type: "paragraph", text: "0,0000012 m" },
    { type: "paragraph", text: "Menjadi:" },
    { type: "paragraph", text: "1,2 × 10⁻⁶ m" },
    {
      type: "paragraph",
      text: "Pangkat negatif menunjukkan bilangan yang lebih kecil dari satu."
    }]

  },
  { heading:

    "🧠 Memahami Pangkat 10", blocks: [{ type: "heading", text: "🧠 Memahami Pangkat 10" },
    { type: "paragraph", text: "Beberapa contoh nilai pangkat:" },
    { type: "paragraph", text: "10² = 100" },
    { type: "paragraph", text: "10³ = 1000" },
    { type: "paragraph", text: "10⁻² = 0,01" },
    { type: "paragraph", text: "10⁻³ = 0,001" }]

  },
  { heading:

    "🔄 Mengubah Notasi Ilmiah ke Bentuk Biasa", blocks: [{ type: "heading", text: "🔄 Mengubah Notasi Ilmiah ke Bentuk Biasa" },
    { type: "paragraph", text: "Jika pangkat positif:" },
    { type: "paragraph", text: "Geser koma ke kanan." },
    { type: "paragraph", text: "Contoh:" },
    { type: "paragraph", text: "4,5 × 10³" },
    { type: "paragraph", text: "Menjadi:" },
    { type: "paragraph", text: "4500" }]

  },
  { heading:

    "🔄 Mengubah Bentuk Biasa ke Notasi Ilmiah", blocks: [{ type: "heading", text: "🔄 Mengubah Bentuk Biasa ke Notasi Ilmiah" },
    { type: "paragraph", text: "Langkahnya:" },
    {
      type: "paragraph",
      text: "1. Geser koma hingga angka depan antara 1–10"
    },
    { type: "paragraph", text: "2. Hitung jumlah pergeseran" },
    { type: "paragraph", text: "3. Tentukan pangkat 10" }]

  },
  {
    blocks: [
    {
      type: "image",
      src: contohnotasiilmiahImg,
      caption: "Contoh penggunaan notasi ilmiah"
    },
    { type: "paragraph", text: "Massa bumi:" },
    { type: "paragraph", text: "≈ 5.970.000.000.000.000.000.000.000 kg" },
    { type: "paragraph", text: "Lebih sederhana ditulis:" },
    { type: "paragraph", text: "≈ 5,97 × 10²⁴ kg" },
    {
      type: "paragraph",
      text: "Notasi ilmiah membuat angka besar lebih mudah dibaca dan dihitung."
    }]

  },
  { heading:

    "🎯 Manfaat Notasi Ilmiah", blocks: [{ type: "heading", text: "🎯 Manfaat Notasi Ilmiah" },
    { type: "paragraph", text: "Notasi ilmiah membantu:" },
    { type: "paragraph", text: "✅ Menyederhanakan angka panjang" },
    { type: "paragraph", text: "✅ Mempermudah operasi matematika" },
    { type: "paragraph", text: "✅ Menulis hasil pengukuran dengan rapi" }]

  },
  { heading:

    "✨ Inti Materi", blocks: [{ type: "heading", text: "✨ Inti Materi" },
    {
      type: "paragraph",
      text: "Notasi ilmiah adalah bahasa praktis fisika untuk berkomunikasi dengan angka yang sangat besar maupun sangat kecil."
    }]

  },
  {
    link: "/materi/angka%20penting",
    blocks: [
    {
      type: "image",
      src: nextmissionpengukuranImg,
      caption: "🚀 KLIK GAMBAR INI! Kamu bisa menuju ke portal berikutnya."
    },
    { type: "paragraph", text: "Fisika membutuhkan angka yang tepat." },
    { type: "paragraph", text: "Tapi dari mana angka tersebut diperoleh?" },
    { type: "paragraph", text: "Jawabannya melalui proses pengukuran." },
    { type: "paragraph", text: "➡️ Next, kita menuju portal: Pengukuran." }]

  },
  { heading:

    "Referensi:", blocks: [{ type: "heading", text: "Referensi:" },
    {
      type: "paragraph",
      text: "Serway & Jewett. Physics for Scientists and Engineers."
    },
    {
      type: "paragraph",
      text: "Halliday, Resnick & Walker. Fundamentals of Physics."
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

export default notasiilmiah;