import { body, caption, image, link } from "framer-motion/client"
import pengukuranImg from "/src/assets/Materi/BesaranDanSatuan/Pengukuran1.jpg"
import pengertianpengukuranImg from "/src/assets/Materi/BesaranDanSatuan/Pengukuran2.jpg"
import alatukurImg from "/src/assets/Materi/BesaranDanSatuan/Pengukuran3.jpg"
import ketelitianalatukurImg from "/src/assets/Materi/BesaranDanSatuan/Pengukuran4.jpg"
import nextmissinketidakpastianImg from "/src/assets/Materi/BesaranDanSatuan/Pengukuran5.jpg"

const pengukuran = {
  title: "Pengukuran",
  slug: "pengukuran",
  description: "Memahami konsep pengukuran, alat ukur, dan cara memperoleh data dalam fisika.",
  chapter: "📏 Pengukuran",
  content: [
    {
      image: pengukuranImg,
      caption: "Pengukuran dalam Dunia Fisika",
      body: [
        "Fisika tidak hanya mengamati fenomena, tetapi juga membutuhkan data.",
        "",
        "Data tersebut diperoleh melalui proses pengukuran.",
        "",
        "Dengan pengukuran, sesuatu yang sebelumnya hanya diamati dapat dinyatakan dalam bentuk angka."
      ]
    },

    {
      image: pengertianpengukuranImg,
      caption: "Pengenalan konsep pengukuran",
      body: [
        "Pengukuran adalah proses membandingkan suatu besaran dengan satuan standar yang telah ditentukan.",
        "",
        "Hasil pengukuran selalu terdiri dari:",
        "",
        "Nilai + Satuan",
        "",
        "Contoh:",
        "Panjang meja = 120 cm"
      ]
    },

    {
      heading: "🧩 Unsur Dalam Pengukuran",
      body: [
        "Dalam proses pengukuran terdapat beberapa komponen:",
        "",
        "1. Besaran yang diukur",
        "2. Alat ukur",
        "3. Satuan standar",
        "4. Hasil pengukuran"
      ]
    },

    {
      image: alatukurImg,
      caption: "Alat ukur dalam fisika dan penggunaannya",
      body: [
        "Setiap besaran memiliki alat ukur yang sesuai.",
        "",
        "Contoh:",
        "",
        "Panjang → mistar, jangka sorong, mikrometer sekrup",
        "Massa → neraca",
        "Waktu → stopwatch",
        "Suhu → termometer"
      ]
    },

    {
      image: ketelitianalatukurImg,
      caption: "Perbandingan ketelitian alat ukur",
      body: [
        "Setiap alat ukur memiliki tingkat ketelitian yang berbeda.",
        "",
        "Semakin kecil skala terkecil alat ukur, semakin teliti hasil pengukurannya.",
        "",
        "Contoh:",
        "Mikrometer sekrup lebih teliti daripada penggaris biasa."
      ]
    },

    {
      heading: "📊 Pengukuran Tunggal dan Berulang",
      body: [
        "Pengukuran tunggal dilakukan satu kali pengukuran.",
        "",
        "Contoh:",
        "Mengukur panjang buku satu kali.",
        "",
        "Pengukuran berulang dilakukan beberapa kali untuk mendapatkan hasil yang lebih terpercaya."
      ]
    },

    {
      heading: "🎲 Contoh Pengukuran",
      body: [
        "Seorang siswa mengukur panjang pensil menggunakan penggaris.",
        "",
        "Hasil yang diperoleh:",
        "15,2 cm",
        "",
        "Angka 15,2 menunjukkan nilai pengukuran.",
        "cm menunjukkan satuan yang digunakan."
      ]
    },

    {
      heading: "⚠️ Kenapa Hasil Pengukuran Bisa Berbeda?",
      body: [
        "Dalam praktiknya, hasil pengukuran bisa memiliki perbedaan karena:",
        "",
        "✅ Keterbatasan alat ukur",
        "✅ Cara membaca alat",
        "✅ Kondisi lingkungan",
        "✅ Keterampilan pengukur"
      ]
    },

    {
      heading: "🔬 Pengukuran dalam Metode Ilmiah",
      body: [
        "Pengukuran menjadi bagian penting dalam eksperimen.",
        "",
        "Tanpa data hasil pengukuran, ilmuwan tidak dapat membuktikan suatu hipotesis."
      ]
    },

    {
      heading: "✨ Inti Materi",
      body: [
        "Pengukuran adalah cara fisika mengubah fenomena alam menjadi data yang dapat dianalisis.",
        "",
        "Semakin baik pengukuran, semakin baik pula kesimpulan yang diperoleh."
      ]
    },

    {
      image: nextmissinketidakpastianImg,
      caption: "🚀 KLIK GAMBAR INI! Kamu bisa menuju ke portal berikutnya.",
      link: "/materi/ketidakpastian",
    },

    {
      heading:"Referensi:",
      body: [
        "Halliday, Resnick & Walker. Fundamentals of Physics.",
        "Serway & Jewett. Physics for Scientists and Engineers.",
        "Young & Freedman. University Physics with Modern Physics.",
        "BIPM. The International System of Units (SI Brochure).",
        "Kemendikbudristek RI. Buku Fisika SMA/MA Kelas X."
      ]
    }
  ]
}

export default pengukuran