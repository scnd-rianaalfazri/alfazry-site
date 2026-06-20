import { caption, image } from "framer-motion/client"
import besaranpokokdanturunanImg from "/src/assets/Materi/BesaranDanSatuan/BesaranPokokDanTurunan1.jpg"
import daftarbesaranpokokImg from "/src/assets/Materi/BesaranDanSatuan/BesaranPokokDanTurunan2.jpg"
import contohbesaranturunanImg from "/src/assets/Materi/BesaranDanSatuan/BesaranPokokDanTurunan3.jpg"
import hubunganbesaranpokokdanturunanImg from "/src/assets/Materi/BesaranDanSatuan/BesaranPokokDanTurunan4.jpg"
import nextmissiondimensiImg from "/src/assets/Materi/BesaranDanSatuan/BesaranPokokDanTurunan5.jpg"

const besaranpokokdanturunan = {
  title: "Besaran Pokok dan Turunan",
  slug: "besaran pokok dan turunan",
  description: "Memahami perbedaan besaran pokok dan besaran turunan serta hubungan antarbesaran dalam fisika.",
  chapter: "📏 Pengukuran",
  content: [
    {
      image: besaranpokokdanturunanImg,
      caption: "Membangun fisika dengan besaran pokok",
      body: [
        "Dalam fisika, banyak sekali besaran yang kita gunakan.",
        "",
        "Ada panjang, massa, waktu, kecepatan, gaya, energi, dan masih banyak lagi.",
        "",
        "Tapi ternyata tidak semuanya berdiri sendiri.",
        "Sebagian besaran dibentuk dari gabungan besaran lainnya."
      ]
    },

    {
      image: daftarbesaranpokokImg,
      caption: "7 besaran pokok SI dalam fisika",
      body: [
        "Besaran pokok adalah besaran yang sudah ditetapkan sebagai dasar dan tidak berasal dari gabungan besaran lain.",
        "",
        "Ada 7 besaran pokok dalam Sistem Internasional (SI)."
      ]
    },

    {
      image: contohbesaranturunanImg,
      caption: "Infografis besar turunan fisika",
      body: [
        "Besaran turunan adalah besaran yang diperoleh dari kombinasi besaran pokok.",
        "",
        "Artinya, besaran ini dapat diturunkan melalui operasi matematika seperti perkalian atau pembagian."
      ]
    },

    {
      image: hubunganbesaranpokokdanturunanImg,
      caption: "Infografis besaran fisika dengan analogi pohon",
      body: [
        "Besaran pokok seperti bahan dasar.",
        "",
        "Besaran turunan seperti bangunan yang dibuat dari bahan tersebut.",
        "",
        "Tanpa besaran pokok, banyak konsep fisika tidak dapat terbentuk."
      ]
    },

    {
      heading: "🎯 Kenapa Harus Dipahami?",
      body: [
        "Karena hampir semua rumus fisika tersusun dari besaran-besaran ini.",
        "",
        "Memahami besaran berarti memahami 'bahasa' di balik rumus fisika."
      ]
    },

    {
      heading: "✨ Inti Materi",
      body: [
        "Besaran pokok adalah dasar pengukuran.",
        "",
        "Besaran turunan adalah hasil kombinasi dari besaran pokok.",
        "",
        "Keduanya membuat fisika dapat menjelaskan berbagai fenomena alam."
      ]
    },

    {
      image: nextmissiondimensiImg,
      caption: "🚀 KLIK GAMBAR INI! Kamu bisa menuju ke portal berikutnya.",
      link: "/materi/dimensi",
    },

    {
      heading: "Referensi",
      body: [
        "Serway & Jewett. Physics for Scientists and Engineers.",
        "Halliday, Resnick & Walker. Fundamentals of Physics.",
        "BIPM. The International System of Units (SI Brochure).",
        "Kemendikbudristek RI. Buku Fisika SMA/MA Kelas X."
      ]
    }
  ]
}

export default besaranpokokdanturunan