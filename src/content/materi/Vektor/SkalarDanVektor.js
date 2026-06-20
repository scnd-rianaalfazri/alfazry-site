import { caption, header, image, link } from "framer-motion/client"
import skalardanvektorImg from "/src/assets/Materi/Vektor/BesaranSkalarDanVektor1.jpg"
import besaranskalarImg from "/src/assets/Materi/Vektor/BesaranSkalarDanVektor2.jpg"
import besaranvektorImg from "/src/assets/Materi/Vektor/BesaranSkalarDanVektor3.jpg"
import perbedaanjarakdanperpindahanImg from "/src/assets/Materi/Vektor/BesaranSkalarDanVektor4.jpg"
import perbedaankelajuandankecepatanImg from "/src/assets/Materi/Vektor/BesaranSkalarDanVektor5.jpg"
import nextmissionrepresentasivektorImg from "/src/assets/Materi/Vektor/BesaranSkalarDanVektor6.jpg"

const skalardanvektor = {
  title: "Besaran Skalar dan Vektor",
  slug: "besaran skalar dan vektor",
  description: "Memahami perbedaan besaran skalar dan vektor berdasarkan nilai serta arah dalam fisika.",
  chapter: "➡️ Vektor",
  content: [
    {
      image: skalardanvektorImg,
      body: [
        "Dalam fisika, tidak semua besaran memiliki karakter yang sama.",
        "",
        "Ada besaran yang cukup dinyatakan dengan nilai saja.",
        "",
        "Ada juga besaran yang membutuhkan nilai dan arah agar informasinya lengkap.",
        "",
        "Dua kelompok tersebut adalah besaran skalar dan besaran vektor."
      ]
    },

    {
      image: besaranskalarImg,
      body: [
        "Besaran skalar adalah besaran yang hanya memiliki nilai (besar) tanpa arah.",
        "",
        "Artinya, informasi tentang arahnya tidak diperlukan untuk menjelaskan besaran tersebut.",
        "📌 Contoh Besaran Skalar",
        "Beberapa contoh besaran skalar:",
        "",
        "⚖️ Massa → 5 kg",
        "⏱️ Waktu → 20 sekon",
        "🌡️ Suhu → 30°C",
        "📏 Jarak → 10 meter",
        "⚡ Energi → 500 joule",
        "",
        "Semua contoh tersebut cukup dijelaskan dengan nilai dan satuan.",
      ]
    },

    {
      image: besaranvektorImg,
      body: [
        "📌 Contoh Besaran Vektor",
        "Beberapa contoh besaran vektor:",
        "",
        "🚗 Perpindahan",
        "🚀 Kecepatan",
        "💨 Percepatan",
        "⚡ Gaya",
        "🔄 Momentum",
        "",
        "Besaran tersebut membutuhkan informasi arah."
      ]
    },

    {
      image: perbedaanjarakdanperpindahanImg,
      body: [
        "Misalnya seseorang berjalan 5 meter ke timur.",
        "",
        "Jarak:",
        "Hanya menyatakan panjang lintasan → 5 meter.",
        "",
        "Perpindahan:",
        "Menyatakan perubahan posisi beserta arah → 5 meter ke timur.",
        "",
        "Jarak termasuk skalar, perpindahan termasuk vektor."
      ]
    },

    {
      image: perbedaankelajuandankecepatanImg,
      body: [
        "Kelajuan:",
        "Hanya menunjukkan seberapa cepat benda bergerak.",
        "",
        "Contoh:",
        "60 km/jam",
        "",
        "Kecepatan:",
        "Memiliki besar dan arah.",
        "",
        "Contoh:",
        "60 km/jam ke arah utara."
      ]
    },

    {
      heading: "🧠 Cara Mudah Mengingat",
      body: [
        "Skalar = 'berapa besar?'",
        "",
        "Vektor = 'berapa besar dan ke arah mana?'",
        "",
        "Kalau arah memengaruhi hasil, biasanya besaran tersebut adalah vektor."
      ]
    },

    {
      heading: "✨ Inti Materi",
      body: [
        "Besaran skalar hanya memiliki nilai.",
        "",
        "Besaran vektor memiliki nilai dan arah.",
        "",
        "Perbedaan ini menjadi dasar untuk memahami gerak dan gaya dalam fisika."
      ]
    },

    {
      image: nextmissionrepresentasivektorImg,
      caption: "🚀 KLIK GAMBAR INI! Kamu bisa menuju ke portal berikutnya.",
      link: "/materi/representasi%20vektor",
      body: [
        "Jika vektor memiliki arah, bagaimana cara menggambarkannya secara visual?",
        "",
        "➡️ Portal selanjutnya: Representasi Vektor."
      ]
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

export default skalardanvektor