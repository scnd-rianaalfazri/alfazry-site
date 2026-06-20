import { body, image, link } from "framer-motion/client"
import vektorImg from "/src/assets/Materi/Vektor/PengertianVektor1.jpg"
import pengertianvektorImg from "/src/assets/Materi/Vektor/PengertianVektor2.jpg"
import contohbesaranvektorImg from "/src/assets/Materi/Vektor/PengertianVektor3.jpg"
import fungsivektor1Img from "/src/assets/Materi/Vektor/PengertianVektor4.jpg"
import fungsivektor2Img from "/src/assets/Materi/Vektor/PengertianVektor5.jpg"
import nextmissionskalarvsvektor from "/src/assets/Materi/Vektor/PengertianVektor6.jpg"

const pengantarvektor = {
  title: "Apa Itu Vektor?",
  slug: "pengantar vektor",
  description: "Memahami sistem satuan standar yang digunakan dalam fisika agar hasil pengukuran dapat dibandingkan secara universal.",
  chapter: "➡️ Vektor",
  content: [
    {
      image: vektorImg,
      body: [
        "Dalam kehidupan sehari-hari, kita sering menyebut suatu nilai tanpa memikirkan arah.",
        "",
        "Contoh:",
        "\"Jarak rumah ke sekolah adalah 5 km.\"",
        "",
        "Namun dalam fisika, informasi tersebut belum selalu cukup.",
        "",
        "Kadang kita perlu tahu:",
        "\"Ke arah mana perpindahannya?\"",
        "",
        "Di sinilah konsep vektor digunakan."
      ]
    },

    {
      image: pengertianvektorImg,
      body: [
        "Vektor adalah besaran fisika yang memiliki dua informasi penting:",
        "",
        "① Besar (nilai)",
        "② Arah",
        "",
        "Karena memiliki arah, vektor tidak dapat hanya dinyatakan dengan angka saja."
      ]
    },

    {
      image: contohbesaranvektorImg,
      body: [
        "Beberapa contoh besaran vektor dalam fisika:",
        "",
        "🚗 Kecepatan",
        "➡️ Perpindahan",
        "⚡ Gaya",
        "🌎 Percepatan",
        "🚀 Momentum",
        "",
        "Semua besaran tersebut memiliki nilai dan arah."
      ]
    },

    {
      heading: "🔢 Contoh Sederhana Vektor",
      body: [
        "Misalnya:",
        "",
        "Sebuah mobil bergerak dengan kecepatan 60 km/jam ke arah timur.",
        "",
        "Angka 60 km/jam menunjukkan besar.",
        "Arah timur menunjukkan arah vektor."
      ]
    },

    {
      image: fungsivektor2Img,
      body: [
        "↔️ Kenapa Fisika Membutuhkan Vektor?",
        "Banyak fenomena alam tidak cukup dijelaskan hanya dengan angka.",
        "",
        "Contoh:",
        "Dua orang menarik sebuah benda dari arah berbeda.",
        "",
        "Untuk mengetahui gerakan benda, kita harus memperhatikan besar dan arah gaya."
      ]
    },

    {
      image: fungsivektor1Img,
      body: [
        "Tanpa sadar kita sering menggunakan konsep vektor:",
        "",
        "🧭 Menentukan arah perjalanan",
        "🚗 Mengetahui arah kendaraan bergerak",
        "💨 Menentukan arah angin",
        "🏀 Mengatur arah lemparan bola"
      ]
    },

    {
      heading: "⚖️ Vektor vs Skalar (Gambaran Awal)",
      body: [
        "Ada besaran yang hanya memiliki nilai tanpa arah.",
        "",
        "Besaran seperti itu disebut skalar.",
        "",
        "Contoh:",
        "Massa, waktu, suhu, dan energi.",
        "",
        "Sedangkan vektor memiliki nilai dan arah."
      ]
    },

    {
      heading: "✨ Inti Materi",
      body: [
        "Vektor adalah cara fisika menggambarkan besaran yang memiliki arah.",
        "",
        "Dengan vektor, fenomena seperti gerak, gaya, dan perpindahan dapat dijelaskan lebih akurat."
      ]
    },

    {
      image: nextmissionskalarvsvektor,
      link: "/materi/besaran%20skalar%20dan%20vektor",
    },

    {
      heading: "Referensi:",
      body: [
        "Halliday, D., Resnick, R., & Walker, J. Fundamentals of Physics.",
        "Serway, R. A., & Jewett, J. W. Physics for Scientists and Engineers.",
        "Young, H. D., & Freedman, R. A. University Physics with Modern Physics.",
        "Kemendikbudristek RI. Buku Fisika SMA/MA Kelas X.",
        "OpenStax. Physics 2e."
      ]
    }
  ]
}

export default pengantarvektor