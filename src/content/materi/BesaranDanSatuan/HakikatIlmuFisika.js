import { caption, image, link } from "framer-motion/client"
import hakikatilmufisikaImg from "/src/assets/Materi/BesaranDanSatuan/HakikatIlmuFisika1.jpg"
import pembelajaranfisikaImg from "/src/assets/Materi/BesaranDanSatuan/HakikatIlmuFisika2.jpg"
import caraberpikirfisikawanImg from "/src/assets/Materi/BesaranDanSatuan/HakikatIlmuFisika3.jpg"
import penjelasanbelajarfisikaImg from "/src/assets/Materi/BesaranDanSatuan/HakikatIlmuFisika4.jpg"
import nextmissionmetodeilmiahImg from "/src/assets/Materi/BesaranDanSatuan/HakikatIlmuFisika5.jpg"

const hakikatilmufisika = {
  title: "Hakikat Ilmu Fisika",
  slug: "hakikat ilmu fisika",
  description: "Memahami konsep dasar dan pentingnya ilmu fisika dalam memahami alam semesta.",
  content: [
    {
      image: hakikatilmufisikaImg,
      caption: "🌌 Hakikat Fisika — Kenapa Dunia Bisa Dipahami?",
      body: [
        "Pernah kepikiran nggak…",
        "Kenapa bola yang dilempar selalu jatuh ke bawah?",
        "Kenapa pelangi punya warna yang berbeda-beda?",
        "Kenapa HP bisa mengisi daya dan pesawat bisa terbang?",
        "",
        "Semua pertanyaan itu dipelajari dalam fisika.",
        "",
        "Fisika adalah cabang ilmu pengetahuan yang mempelajari gejala alam untuk menemukan pola, hubungan, dan hukum yang mengatur alam semesta.",
        "",
        "Fisika bukan sekadar kumpulan rumus. Fisika adalah cara berpikir untuk memahami bagaimana alam bekerja."
      ]
    },

    {
      image: pembelajaranfisikaImg,
      caption: "Fisika mempelajari berbagai fenomena di sekitar kita, dari yang kecil sampai yang sangat besar."
    },

    {
      image: caraberpikirfisikawanImg,
      caption: "🧠 Cara Berpikir Seorang Fisikawan",
      body: [
        "Saat melihat suatu peristiwa, fisika tidak langsung percaya pada tebakan.",
        "",
        "Fisika mengajak kita untuk:",
        "👀 Mengamati",
        "❓ Bertanya",
        "🧪 Menguji",
        "📊 Mengumpulkan data",
        "🧩 Menarik kesimpulan",
        "",
        "Karena itu, belajar fisika sebenarnya juga belajar berpikir kritis."
      ]
    },

    {
      image: pembelajaranfisikaImg,
      caption: "✨ Kenapa Belajar Fisika?",
      body: [
        "Saat memahami fisika, kita tidak hanya tahu bahwa sesuatu terjadi—tetapi juga mengerti mengapa itu bisa terjadi."
      ]
    },

    {
      image: nextmissionmetodeilmiahImg,
      caption: "🚀 Next Mission",
      link: "../BesaranDanSatuan/MetodeIlmiah.js"
    },

    {
      heading: "Referensi:",
      body: [
        "Serway & Jewett. Physics for Scientists and Engineers.",
        "Halliday, Resnick & Walker. Fundamentals of Physics.",
        "Kemendikbudristek RI. Buku Fisika SMA/MA Kelas X."
      ]
    },
  ]
}

export default hakikatilmufisika