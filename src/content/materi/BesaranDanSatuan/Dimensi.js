import { caption, image } from "framer-motion/client"
import dimensiImg from "/src/assets/Materi/BesaranDanSatuan/Dimensi1.jpg"
import fungsidimensiImg from "/src/assets/Materi/BesaranDanSatuan/Dimensi2.jpg"
import daftardimensiImg from "/src/assets/Materi/BesaranDanSatuan/Dimensi3.jpg"
import analisisdimensiImg from "/src/assets/Materi/BesaranDanSatuan/Dimensi4.jpg"
import nextmissionangkapenting from "/src/assets/Materi/BesaranDanSatuan/Dimensi5.jpg"


const dimensi = {
  title: "Dimensi",
  slug: "dimensi",
  description: "Memahami konsep dimensi besaran fisika dan penggunaannya untuk menganalisis persamaan fisika.",
  chapter: "📏 Pengukuran",
  content: [
    {
      image: dimensiImg,
      caption: "Dimensi fisika dalam dunia futuristik",
      body: [
        "Setiap besaran fisika memiliki identitas yang menunjukkan penyusunnya.",
        "",
        "Identitas tersebut disebut dimensi.",
        "",
        "Kalau satuan menunjukkan 'berapa ukurannya', maka dimensi menunjukkan 'tersusun dari apa besaran tersebut'."
      ]
    },

    {
      image: fungsidimensiImg,
      caption: "Kenapa dimensi penting dalam fisika?",
      body: [
        "Dalam fisika, sebuah rumus tidak boleh dibuat sembarangan.",
        "",
        "Dimensi membantu ilmuwan mengecek apakah sebuah persamaan sudah benar atau belum.",
        "",
        "Jika dimensi ruas kiri dan kanan sama, maka persamaan tersebut kemungkinan benar."
      ]
    },

    {
      image: daftardimensiImg,
      caption: "7 dimensi dasar fisika",
      body: [
        "Setiap besaran pokok memiliki simbol dimensi.",
      ]
    },

    {
      heading: "🚗 Contoh Dimensi Kecepatan",
      body: [
        "Kecepatan diperoleh dari:",
        "",
        "kecepatan = jarak / waktu",
        "",
        "Jarak memiliki dimensi [L]",
        "Waktu memiliki dimensi [T]",
        "",
        "Maka dimensi kecepatan adalah:",
        "[L][T⁻¹]"
      ]
    },

    {
      heading: "⚡ Contoh Dimensi Gaya",
      body: [
        "Menurut hukum Newton:",
        "",
        "gaya = massa × percepatan",
        "",
        "Massa → [M]",
        "Percepatan → [L][T⁻²]",
        "",
        "Maka:",
        "Gaya → [M][L][T⁻²]"
      ]
    },

    {
      image: analisisdimensiImg,
      caption: "Infografis analisis dimensi.",
    },

    {
      heading: "🎯 Manfaat Dimensi",
      body: [
        "Dimensi digunakan untuk:",
        "",
        "✅ Mengecek kebenaran rumus",
        "✅ Menentukan satuan suatu besaran",
        "✅ Membantu memahami hubungan antarbesaran"
      ]
    },

    {
      heading: "✨ Inti Materi",
      body: [
        "Dimensi adalah cara fisika mengenali struktur sebuah besaran.",
        "",
        "Dengan dimensi, kita dapat melihat apakah sebuah rumus memiliki hubungan yang logis."
      ]
    },

    {
      image: nextmissionangkapenting,
      caption: "🚀 KLIK GAMBAR INI! Kamu bisa menuju ke portal berikutnya.",
      link: "/materi/angka%20penting",
      body: [
        "Dalam fisika, hasil pengukuran tidak hanya harus benar, tetapi juga harus ditulis dengan aturan yang tepat.",
        "",
        "➡️ Next, kita masuk ke portal: Angka Penting."
      ]
    },

    {
      heading: "Referensi:",
      body: [
        "Halliday, Resnick & Walker. Fundamentals of Physics.",
        "Serway & Jewett. Physics for Scientists and Engineers.",
        "Young & Freedman. University Physics with Modern Physics.",
        "Kemendikbudristek RI. Buku Fisika SMA/MA Kelas X."
      ]
    }
  ]
}

export default dimensi