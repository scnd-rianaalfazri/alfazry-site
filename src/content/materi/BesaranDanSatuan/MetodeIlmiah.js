import { caption, image, link } from "framer-motion/client"
import metodeilmiahImg from "/src/assets/Materi/BesaranDanSatuan/MetodeIlmiah1.jpg"
import penjelasanmetodeilmiahImg from "/src/assets/Materi/BesaranDanSatuan/MetodeIlmiah2.jpg"
import langkahlangkahmetodeilmiahImg from "/src/assets/Materi/BesaranDanSatuan/MetodeIlmiah3.jpg"
import contohmetodeilmiahImg from "/src/assets/Materi/BesaranDanSatuan/MetodeIlmiah4.jpg"
import nextmissionbesarandansatuan from "/src/assets/Materi/BesaranDanSatuan/MetodeIlmiah5.jpg"


const metodeilmiah = {
  title: "Metode Ilmiah",
  slug: "metode ilmiah",
  description: "Memahami langkah-langkah sistematis yang digunakan ilmuwan untuk memperoleh pengetahuan yang dapat dipercaya.",
  chapter: "📏 Pengukuran",
  content: [
    {
      image: metodeilmiahImg,
      caption: "Metode ilmiah di laboratorium modern",
      body: [
        "Setelah memahami bahwa fisika mempelajari alam, muncul pertanyaan baru:",
        "",
        "Bagaimana ilmuwan tahu bahwa suatu penjelasan itu benar?",
        "",
        "Jawabannya adalah metode ilmiah.",
        "",
        "Metode ilmiah adalah langkah-langkah yang dilakukan secara sistematis untuk menyelidiki suatu peristiwa dan memperoleh kesimpulan berdasarkan bukti."
      ]
    },

    {
      image: penjelasanmetodeilmiahImg,
      caption: "Science vs guessing: understanding the difference",
      body: [
        "",
        "Metode ilmiah membantu agar hasil penelitian:",
        "✅ Objektif",
        "✅ Dapat diuji",
        "✅ Bisa diulang",
        "✅ Berdasarkan data"
      ]
    },

    {
      image: langkahlangkahmetodeilmiahImg,
      caption: "Langkah-langkah metode ilmiah",

    },

    {
      heading: "① Observasi (Pengamatan)",
      body: [
        "Mengamati suatu fenomena yang terjadi di sekitar.",
        "",
        "Contoh:",
        "Tanaman yang diletakkan dekat jendela tumbuh lebih cepat."
      ]
    },

    {
      heading: "② Merumuskan Masalah",
      body: [
        "Menentukan pertanyaan yang ingin dijawab.",
        "",
        "Contoh:",
        "\"Apakah intensitas cahaya memengaruhi pertumbuhan tanaman?\""
      ]
    },

    {
      heading: "③ Menyusun Hipotesis",
      body: [
        "Membuat dugaan sementara berdasarkan pengetahuan yang dimiliki.",
        "",
        "Contoh:",
        "\"Semakin banyak cahaya yang diterima, semakin cepat tanaman tumbuh.\""
      ]
    },

    {
      heading: "④ Melakukan Eksperimen",
      body: [
        "Menguji hipotesis melalui percobaan yang terkontrol.",
        "",
        "Data dikumpulkan secara sistematis."
      ]
    },

    {
      heading: "⑤ Analisis Data",
      body: [
        "Mengolah dan membandingkan hasil eksperimen.",
        "",
        "Apakah hasilnya mendukung hipotesis atau tidak?"
      ]
    },

    {
      heading: "⑥ Menarik Kesimpulan",
      body: [
        "Menentukan hasil akhir berdasarkan data yang diperoleh."
      ]
    },

    {
      heading: "⑦ Komunikasi Hasil",
      body: [
        "Menyampaikan hasil penelitian agar dapat dipelajari atau diuji ulang oleh orang lain."
      ]
    },

    {
      image: contohmetodeilmiahImg,
      caption: "Contoh metode ilmiah menggunakan es batu",
      body: [
        "Masalah:",
        "\"Kenapa es batu di luar kulkas cepat mencair?\"",
        "",
        "Observasi → Es berubah menjadi air",
        "Hipotesis → Suhu lingkungan memengaruhi kecepatan mencair",
        "Eksperimen → Meletakkan es di tempat berbeda",
        "Kesimpulan → Semakin tinggi suhu, semakin cepat es mencair"
      ]
    },

    {
      image: nextmissionbesarandansatuan,
      caption: "🚀 Next Mission! ➜ Fisika dan pengukuran dalam misi",
      link: "/materi/besaran%20dan%20satuan",
    },

    {
      heading: "Referensi:",
      body: [
        "Serway & Jewett. Physics for Scientists and Engineers.",
        "Halliday, Resnick & Walker. Fundamentals of Physics.",
        "Kemendikbudristek RI. Buku Fisika SMA/MA Kelas X."
      ]
    }
  ]
}

export default metodeilmiah