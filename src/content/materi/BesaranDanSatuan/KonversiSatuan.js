import { body, image } from "framer-motion/client"
import konversisatuanImg from "/src/assets/Materi/BesaranDanSatuan/KonversiSatuan1.jpg"
import fungsikonversiImg from "/src/assets/Materi/BesaranDanSatuan/KonversiSatuan2.jpg"
import prinsipkonversiImg from "/src/assets/Materi/BesaranDanSatuan/KonversiSatuan3.jpg"
import tanggasatuanImg from "/src/assets/Materi/BesaranDanSatuan/KonversiSatuan4.jpg"
import endchapterpengukuranImg from "/src/assets/Materi/BesaranDanSatuan/KonversiSatuan5.jpg"

const konversisatuan = {
  title: "Konversi Satuan",
  slug: "konversi satuan",
  description: "Memahami cara mengubah satuan pengukuran ke bentuk lain tanpa mengubah nilai sebenarnya.",
  chapter: "📏 Pengukuran",
  content: [
    {
      image: konversisatuanImg,
      body: [
        "Dalam fisika, kita sering menemukan satu besaran dengan satuan yang berbeda.",
        "",
        "Contohnya:",
        "Panjang jalan dapat dinyatakan dalam kilometer atau meter.",
        "",
        "Walaupun satuannya berbeda, nilai sebenarnya tetap sama.",
        "",
        "Proses mengubah satuan inilah yang disebut konversi satuan."
      ]
    },

    {
      image: fungsikonversiImg,
      body: [
        "Karena dalam perhitungan fisika, semua besaran harus menggunakan satuan yang sesuai.",
        "",
        "Jika satuan tidak disamakan, hasil perhitungan bisa menjadi salah."
      ]
    },

    {
      image: prinsipkonversiImg,
      body: [
        "Konversi dilakukan dengan menggunakan faktor pengali yang nilainya sama dengan 1.",
        "",
        "Contoh:",
        "1 km = 1000 m",
        "",
        "Artinya:",
        "1 km × 1000 m / 1 km = 1000 m"
      ]
    },

    {
      heading: "📈 Konversi Satuan Besar ke Kecil",
      body: [
        "Jika berpindah ke satuan yang lebih kecil, nilainya dikalikan.",
        "",
        "Contoh:",
        "5 km menjadi meter",
        "",
        "1 km = 1000 m",
        "",
        "5 km = 5 × 1000 m",
        "5 km = 5000 m"
      ]
    },

    {
      heading: "📉 Konversi Satuan Kecil ke Besar",
      body: [
        "Jika berpindah ke satuan yang lebih besar, nilainya dibagi.",
        "",
        "Contoh:",
        "3000 m menjadi km",
        "",
        "1 km = 1000 m",
        "",
        "3000 m ÷ 1000 = 3 km"
      ]
    },

    {
      image: tanggasatuanImg,
      body: [
        "Urutan awalan satuan yang sering digunakan:",
        "",
        "kilo → hekto → deka → satuan dasar → desi → senti → mili",
        "",
        "Turun satu langkah ×10",
        "Naik satu langkah ÷10"
      ]
    },

    {
      heading: "⚡ Konversi dalam Fisika",
      body: [
        "Contoh kecepatan:",
        "",
        "72 km/jam harus diubah ke m/s.",
        "",
        "Karena:",
        "1 km = 1000 m",
        "1 jam = 3600 s",
        "",
        "Maka:",
        "72 km/jam = 20 m/s"
      ]
    },

    {
      heading: "🧠 Tips Menghindari Kesalahan",
      body: [
        "Sebelum menghitung:",
        "",
        "1. Perhatikan satuan awal",
        "2. Tentukan satuan tujuan",
        "3. Gunakan faktor konversi yang benar",
        "4. Cek kembali apakah hasilnya masuk akal"
      ]
    },

    {
      heading: "🎯 Manfaat Konversi Satuan",
      body: [
        "Konversi satuan membantu:",
        "",
        "✅ Menyamakan satuan dalam perhitungan",
        "✅ Menghindari kesalahan rumus",
        "✅ Membuat data mudah dibandingkan"
      ]
    },

    {
      image: endchapterpengukuranImg,
      link: "/materi/pengantar%20vektor",
    },

    {
      heading: "Referensi:",
      body:[
       "Halliday, Resnick & Walker. Fundamentals of Physics.",
       "Serway & Jewett. Physics for Scientists and Engineers.",
       "Young & Freedman. University Physics with Modern Physics.",
       "BIPM. The International System of Units (SI Brochure).",
       "Kemendikbudristek RI. Buku Fisika SMA/MA Kelas X." 
      ]
    }
  ]
}

export default konversisatuan