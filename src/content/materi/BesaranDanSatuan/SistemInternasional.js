import { caption, image, link } from "framer-motion/client"
import sisteminternasionalImg from "/src/assets/Materi/BesaranDanSatuan/SistemInternasional1.jpg"
import pengertiansisteminternasionalImg from "/src/assets/Materi/BesaranDanSatuan/SistemInternasional2.jpg"
import daftarsisteminternasionalImg from "/src/assets/Materi/BesaranDanSatuan/SistemInternasional3.jpg"
import awalansatuanImg from "/src/assets/Materi/BesaranDanSatuan/SistemInternasional4.jpg"
import nextmissionbesaranpokokdanturunan from "/src/assets/Materi/BesaranDanSatuan/SistemInternasional5.jpg"

const sisteminternasional = {
  title: "Sistem Internasional",
  slug: "sistem internasional",
  description: "Memahami sistem satuan standar yang digunakan dalam fisika agar hasil pengukuran dapat dibandingkan secara universal.",
  chapter: "📏 Pengukuran",
  content: [
    {
      image: sisteminternasionalImg,
      caption: "Sistem internasional dalam ilmu pengetahuan",
      body: [
        "Dalam fisika, hasil pengukuran harus bisa dipahami oleh semua orang di mana pun berada.",
        "",
        "Bayangkan seorang ilmuwan di Indonesia mengukur panjang suatu benda, lalu ilmuwan di negara lain membaca hasilnya.",
        "",
        "Mereka membutuhkan bahasa pengukuran yang sama.",
        "",
        "Bahasa tersebut adalah Sistem Internasional atau SI."
      ]
    },

    {
      image: pengertiansisteminternasionalImg,
      caption: "Apa itu sistem internasional?",
      body: [
        "Sistem Internasional (SI) adalah sistem satuan standar yang digunakan secara global dalam ilmu pengetahuan dan teknologi.",
        "",
        "SI dibuat agar pengukuran menjadi:",
        "✅ Seragam",
        "✅ Mudah dibandingkan",
        "✅ Tidak membingungkan"
      ]
    },

    {
      image: daftarsisteminternasionalImg,
      caption: "Tujuh besaran pokok SI dalam fisika",
    },

    {
      heading: "⚖️ Kenapa Kilogram, Meter, dan Sekon Penting?",
      body: [
        "Hampir semua konsep fisika dibangun dari besaran dasar tersebut.",
        "",
        "Contoh:",
        "Kecepatan membutuhkan panjang dan waktu.",
        "Gaya membutuhkan massa, panjang, dan waktu.",
        "",
        "Jadi, besaran pokok seperti 'blok bangunan' untuk membuat konsep fisika yang lebih kompleks."
      ]
    },

    {
      image: awalansatuanImg,
      caption: "Infografis awalan satuan SI",
      body: [
        "Dalam fisika, nilai yang diukur bisa sangat besar atau sangat kecil.",
        "",
        "Karena itu digunakan awalan satuan untuk mempermudah penulisan.",
        "",
        "Contoh:",
        "kilo (k) = 1000 kali",
        "centi (c) = 1/100",
        "mili (m) = 1/1000",
        "mikro (μ) = 1/1.000.000",
        "",
        "Sebenarnya, tabel prefix itu banyak, namun tidak semua dicantumkan di dalam infografis ini ya.",
        "Kalau mau lebih lengkap, bisa dilihat di web ini, ya! ➡️ BIPM. The Internationa System of Units",
      ]
    },
    
    {
      heading: "✨ Inti Materi",
      body: [
        "SI adalah standar bahasa pengukuran dalam fisika.",
        "",
        "Dengan SI, hasil pengukuran dari berbagai tempat tetap dapat dipahami dan dibandingkan."
      ]
    },

    {
      image: nextmissionbesaranpokokdanturunan,
      caption: "🚀 Next Mission! ➜ Besaran Fisika Dasar",
      link: "/materi/besaran%20pokok%20dan%20turunan",
    },

    {
      heading: "Referensi:",
      body: [
        "Serway & Jewett. Physics for Scientists and Engineers.",
        "Halliday, Resnick & Walker. Fundamentals of Physics.",
        "BIPM. The International System of Units (SI Brochure).",
        "Kemendikbudristek RI. Buku Fisika SMA/MA Kelas X."
      ]
    }
  ]
}

export default sisteminternasional