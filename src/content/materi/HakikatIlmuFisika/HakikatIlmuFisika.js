import { caption, header, image, link, table } from "framer-motion/client"
import hakikatilmufisikaImg from "/src/assets/Materi/BesaranDanSatuan/HakikatIlmuFisika1.jpg"
import pembelajaranfisikaImg from "/src/assets/Materi/BesaranDanSatuan/HakikatIlmuFisika2.jpg"
import caraberpikirfisikawanImg from "/src/assets/Materi/BesaranDanSatuan/HakikatIlmuFisika3.jpg"
import penjelasanbelajarfisikaImg from "/src/assets/Materi/BesaranDanSatuan/HakikatIlmuFisika4.jpg"
import nextmissionmetodeilmiahImg from "/src/assets/Materi/BesaranDanSatuan/HakikatIlmuFisika5.jpg"
import ruanglingkupfisikaImg from "/src/assets/Materi/BesaranDanSatuan/HakikatIlmuFisika6.jpg"

const hakikatilmufisika = {
  title: "Hakikat Ilmu Fisika",
  slug: "hakikat ilmu fisika",
  description: "Memahami konsep dasar dan pentingnya ilmu fisika dalam memahami alam semesta.",
  chapter: "🔬 Hakikat Ilmu Fisika & Metode Ilmiah",
  content: [
    {
      image: hakikatilmufisikaImg,
      caption: "Ilustrasi: Menjelajahi Fisika, Dunia dan Alam Semesta",
      body: [
        "Pernah kepikiran, nggak?",
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
      caption: "Ilustrasi: Fisika dalam kehidupan sehari-hari.",
      body: [
        "Saat memahami fisika, kita tidak hanya tahu bahwa sesuatu terjadi—tetapi juga mengerti mengapa itu bisa terjadi."
      ]
    },

    {
      heading: "📚 Fisika sebagai Produk",
      body: [
        "Selama ratusan tahun para ilmuwan mengumpulkan potongan-potongan puzzle tentang alam semesta. Hasil dari proses panjang tersebut membentuk apa yang kita kenal sebagai produk fisika.",
        "Produk fisika merupakan kumpulan pengetahuan yang membantu kita memahami berbagai fenomena di sekitar kita, mulai dari benda yang jatuh ke tanah hingga gerak planet di luar angkasa.",
        "",
        "Pengetahuan tersebut tersusun dalam beberapa bentuk:"
        ],
      table: {
        headers: ["Bentuk Pengetahuan", "Penjelasan", "Contoh"],
        rows : [
          ["Fakta", "Kenyataan yang dapat diamati dan dibuktikan melalui pengamatan atau eksperimen.", "Magnet menarik benda yang terbuat dari besi."],
          ["Konsep", "Gagasan atau ide yang digunakan untuk menjelaskan suatu fenomena alam.", "Gaya, massa, energi, kecepatan."],
          ["Prinsip dan Hukum", "Aturan yang menjelaskan hubungan antar gejala alam berdasarkan hasil pengamatan dan eksperimen yang berulang.", "Hukum Newton, Hukum Gravitasi, Hukum Kekekalan Energi."],
          ["Persamaan Matematika", "Bentuk matematis yang digunakan untuk menggambarkan hubungan antar besaran fisika.", "F = m x a"],
          ["Teori dan Model", "Penjelasan ilmiah yang didukung oleh banyak bukti dan digunakan untuk memahami fenomena yang lebih kompleks.", "Model Atom Bohr, Teori Relativitas, Teori Big Bang."]
        ],
      }
    },

    {
      image: caraberpikirfisikawanImg,
      caption: "Ilustrasi: Cara Berpikir ilmiah fisikawan",
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
      image: ruanglingkupfisikaImg,
      caption: "Ilustrasi: Ruang Lingkup Fisika",
      body: [
        "Fisika memeluk segala hal yang ada di dalam kosmos ini—dari yang paling megah hingga yang paling tak kasat mata."
      ]
    },

    {
      heading: "✨ Inti Materi",
      body: [
        "Fisika adalah jendela untuk memahami alam semesta.",
        "",
        " Dengan rasa ingin tahu, pengamatan, dan pemikiran logis, fisika mengungkap berbagai rahasia alam, mulai dari benda yang jatuh ke bumi hingga gerak galaksi yang jauh di luar angkasa."
      ]
    },

    {
      image: nextmissionmetodeilmiahImg,
      caption: "🚀 KLIK GAMBAR INI! Kamu bisa menuju ke portal berikutnya.",
      link: "/materi/metode%20ilmiah",
      body: [
        "Kalau fisika ingin memahami alam, pertanyaannya sekarang:",
        "",
        "Bagaimana cara ilmuwan memastikan hasil pengamatannya benar?",
        "",
        "➡️ Next, kita menuju portal: Metode Ilmiah."
      ]
    },

    {
      heading: "Referensi:",
      body: [
        "Serway & Jewett. Physics for Scientists and Engineers.",
        "Halliday, Resnick & Walker. Fundamentals of Physics.",
        "Kemendikbudristek RI. Buku Fisika SMA/MA Kelas X."
      ]
    },
  ],
}

export default hakikatilmufisika