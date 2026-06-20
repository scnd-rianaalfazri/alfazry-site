import { body, caption, image, link } from "framer-motion/client"
import angkapentingImg from "/src/assets/Materi/BesaranDanSatuan/AngkaPenting1.jpg"
import fungsiangkapentingImg from "/src/assets/Materi/BesaranDanSatuan/AngkaPenting2.jpg"
import aturanangkapentingImg from "/src/assets/Materi/BesaranDanSatuan/AngkaPenting3.jpg"
import operasihitungangkapentingImg from "/src/assets/Materi/BesaranDanSatuan/AngkaPenting4.jpg"
import nextmissionnotasiilmiahImg from "/src/assets/Materi/BesaranDanSatuan/AngkaPenting5.jpg" 

const angkapenting = {
  title: "Angka Penting",
  slug: "angka penting",
  description: "Memahami aturan penulisan angka penting dan penggunaannya dalam hasil pengukuran fisika.",
  chapter: "📏 Pengukuran",
  content: [
    {
      image: angkapentingImg,
      caption: "Laboratorium futuristik: mempelajari presisi pengukuran.",
      body: [
        "Dalam fisika, hasil pengukuran selalu memiliki batas ketelitian.",
        "",
        "Sebuah alat ukur tidak mungkin memberikan nilai yang benar-benar sempurna.",
        "",
        "Karena itu, angka pada hasil pengukuran harus ditulis sesuai tingkat ketelitian alat.",
        "",
        "Angka yang menunjukkan ketelitian pengukuran disebut angka penting."
      ]
    },

    {
      image: fungsiangkapentingImg,
      caption: "Kenapa angka penting dalam pengukuran?",
      body: [
        "Misalnya panjang sebuah benda diukur menggunakan penggaris.",
        "",
        "Hasil pengukuran mungkin 12,3 cm, bukan 12,347892 cm.",
        "",
        "Menulis terlalu banyak angka dapat memberikan kesan bahwa pengukuran lebih teliti dari kemampuan alat."
      ]
    },

    {
      image: aturanangkapentingImg,
      caption: "Infografis Aturan angka penting",
    },

    {
      image: operasihitungangkapentingImg,
      caption: "Infografis operasi bilangan angka penting",
    },

    {
      heading: "🔢 Aturan Pembulatan",
      body: "Aturan pembulatan angka penting digunakan untuk memastikan hasil perhitungan sesuai dengan tingkat ketelitian data. Aturannya sederhana:",
      list: [ 
        "Jika lebih dari 5 (> 5): Bulatkan ke atas (angka sebelumnya ditambah 1). Contoh: 3,76 → menjadi 3,8.",
        "Jika kurang dari 5 (< 5): Bulatkan ke bawah (angka dihilangkan). Contoh: 3,74 → menjadi 3,7.",
        "Kalau tepat bernilai 5, jika angka sebelum angka 5 adalah ganjil, bulatkan ke atas. Contoh: 3,75 → menjadi 3,8.",
        "Kalau tepat bernilai 5, jika angka sebelum angka 5 adalah genap, bulatkan ke bawah. Contoh: 3,65 → menjadi 3,6."
      ]
    },

    {
      heading: "🎯 Manfaat Angka Penting",
      body: [
        "Angka penting membantu ilmuwan:",
        "",
        "✅ Menulis hasil pengukuran dengan tepat",
        "✅ Menghindari kesalahan ketelitian",
        "✅ Menunjukkan kualitas data eksperimen"
      ]
    },

    {
      heading: "✨ Inti Materi",
      body: [
        "Angka penting bukan sekadar aturan menghitung angka.",
        "",
        "Angka penting adalah cara fisika menghargai batas kemampuan alat ukur."
      ]
    },

    {
      image: nextmissionnotasiilmiahImg,
      caption: "🚀 KLIK GAMBAR INI! Kamu bisa lanjut ke halaman berikutnya.",
      link: "/materi/angka%20penting"
    },

    {
      heading: "Referensi:",
      body: [
        "Serway & Jewett. Physics for Scientists and Engineers.",
        "Halliday, Resnick & Walker. Fundamentals of Physics.",
        "Young & Freedman. University Physics with Modern Physics.",
        "Kemendikbudristek RI. Buku Fisika SMA/MA Kelas X."
      ]
    }
  ]
}

export default angkapenting