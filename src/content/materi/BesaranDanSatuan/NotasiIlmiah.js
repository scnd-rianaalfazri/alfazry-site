import { caption, form, image, link } from "framer-motion/client"
import notasiilmiahImg from "/src/assets/Materi/BesaranDanSatuan/NotasiIlmiah1.jpg"
import pengertiannotasiIlmiahImg from "/src/assets/Materi/BesaranDanSatuan/NotasiIlmiah2.jpg"
import jenisjenisbilanganImg from "/src/assets/Materi/BesaranDanSatuan/NotasiIlmiah3.jpg"
import contohnotasiilmiahImg from "/src/assets/Materi/BesaranDanSatuan/NotasiIlmiah4.jpg"
import nextmissionpengukuranImg from "/src/assets/Materi/BesaranDanSatuan/NotasiIlmiah5.jpg"

const notasiilmiah= {
  title: "Notasi Ilmiah",
  slug: "notasi ilmiah",
  description: "Memahami cara menuliskan bilangan sangat besar atau sangat kecil menggunakan bentuk notasi ilmiah.",
  chapter: "📏 Pengukuran",
  content: [
    {
      image: notasiilmiahImg,
      caption: "Notasi ilmiah: kecil dan besar",
      body: [
        "Dalam fisika, kita sering menemukan angka yang sangat besar maupun sangat kecil.",
        "",
        "Contohnya:",
        "Jarak bumi ke matahari sangat besar.",
        "Ukuran atom sangat kecil.",
        "",
        "Jika ditulis dengan angka biasa, bentuknya menjadi panjang dan sulit dibaca.",
        "",
        "Karena itu digunakan notasi ilmiah."
      ]
    },

    {
      image: pengertiannotasiIlmiahImg,
      caption: "Penjelasan notasi ilmiah",
      body: [
        "Notasi ilmiah adalah cara menuliskan bilangan dalam bentuk:",
        "",
        "a × 10ⁿ",
        "",
        "dengan:",
        "a = bilangan antara 1 sampai kurang dari 10",
        "n = pangkat bilangan bulat"
      ]
    },

    {
      image: jenisjenisbilanganImg,
      caption: "Cara menulis notasi ilmiah",
      body: [
        "📈 Menulis Bilangan Besar",
        "Untuk bilangan besar, koma digeser ke kiri.",
        "",
        "Contoh:",
        "300.000.000 m",
        "",
        "Menjadi:",
        "3 × 10⁸ m",
        "",
        "Karena koma bergeser 8 tempat ke kiri.",
        "------------------------------------------------------",
        "📉 Menulis Bilangan Kecil",
        "Untuk bilangan kecil, koma digeser ke kanan.",
        "",
        "Contoh:",
        "0,0000012 m",
        "",
        "Menjadi:",
        "1,2 × 10⁻⁶ m",
        "",
        "Pangkat negatif menunjukkan bilangan yang lebih kecil dari satu."
      ]
    },

    {
      heading: "🧠 Memahami Pangkat 10",
      body: [
        "Beberapa contoh nilai pangkat:",
        "",
        "10² = 100",
        "10³ = 1000",
        "10⁻² = 0,01",
        "10⁻³ = 0,001"
      ]
    },

    {
      heading: "🔄 Mengubah Notasi Ilmiah ke Bentuk Biasa",
      body: [
        "Jika pangkat positif:",
        "Geser koma ke kanan.",
        "",
        "Contoh:",
        "4,5 × 10³",
        "",
        "Menjadi:",
        "4500"
      ]
    },

    {
      heading: "🔄 Mengubah Bentuk Biasa ke Notasi Ilmiah",
      body: [
        "Langkahnya:",
        "",
        "1. Geser koma hingga angka depan antara 1–10",
        "2. Hitung jumlah pergeseran",
        "3. Tentukan pangkat 10"
      ]
    },

    {
      image: contohnotasiilmiahImg,
      caption: "Contoh penggunaan notasi ilmiah",
      body: [
        "Massa bumi:",
        "≈ 5.970.000.000.000.000.000.000.000 kg",
        "",
        "Lebih sederhana ditulis:",
        "≈ 5,97 × 10²⁴ kg",
        "",
        "Notasi ilmiah membuat angka besar lebih mudah dibaca dan dihitung."
      ]
    },

    {
      heading: "🎯 Manfaat Notasi Ilmiah",
      body: [
        "Notasi ilmiah membantu:",
        "",
        "✅ Menyederhanakan angka panjang",
        "✅ Mempermudah operasi matematika",
        "✅ Menulis hasil pengukuran dengan rapi"
      ]
    },

    {
      heading: "✨ Inti Materi",
      body: [
        "Notasi ilmiah adalah bahasa praktis fisika untuk berkomunikasi dengan angka yang sangat besar maupun sangat kecil."
      ]
    },

    {
      image: nextmissionpengukuranImg,
      caption: "🚀 KLIK GAMBAR INI! Kamu bisa menuju ke portal berikutnya.",
      link: "/materi/angka%20penting",
      body: [
        "Fisika membutuhkan angka yang tepat.",
        "Tapi dari mana angka tersebut diperoleh?",
        "",
        "Jawabannya melalui proses pengukuran.",
        "",
        "➡️ Next, kita menuju portal: Pengukuran."
      ]
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

export default notasiilmiah