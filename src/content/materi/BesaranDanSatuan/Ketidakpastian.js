import { body, caption, image, link } from "framer-motion/client"
import ketidakpastianImg from "/src/assets/Materi/BesaranDanSatuan/Ketidakpastian1.jpg"
import pengertiaketidakpastianImg from "/src/assets/Materi/BesaranDanSatuan/Ketidakpastian2.jpg"
import penyebabketidakpastianImg from "/src/assets/Materi/BesaranDanSatuan/Ketidakpastian3.jpg"
import menulishasilpengukuranImg from "/src/assets/Materi/BesaranDanSatuan/Ketidakpastian4.jpg"
import nextmissionkonversisatuanImg from "/src/assets/Materi/BesaranDanSatuan/Ketidakpastian5.jpg"

const ketidakpastian = {
  title: "Ketidakpastian",
  slug: "ketidakpastian",
  description: "Memahami penyebab ketidakpastian dalam pengukuran dan cara menyatakan hasil pengukuran dengan benar.",
  chapter: "📏 Pengukuran",
  content: [
    {
      image: ketidakpastianImg,
      body: [
        "Dalam fisika, setiap pengukuran memiliki keterbatasan.",
        "",
        "Walaupun menggunakan alat ukur yang baik, hasil pengukuran tidak mungkin benar-benar sempurna.",
        "",
        "Karena itu, setiap hasil pengukuran memiliki nilai ketidakpastian."
      ]
    },

    {
      image: pengertiaketidakpastianImg,
      body: [
        "Ketidakpastian pengukuran adalah perkiraan batas penyimpangan suatu hasil pengukuran terhadap nilai sebenarnya.",
        "",
        "Artinya, hasil pengukuran selalu memiliki kemungkinan berada sedikit di atas atau di bawah nilai sebenarnya."
      ]
    },

    {
      heading: "📏 Contoh Sederhana",
      body: [
        "Sebuah pensil diukur menggunakan penggaris.",
        "",
        "Hasil pengukuran:",
        "15,2 cm",
        "",
        "Angka tersebut bukan berarti panjang pensil pasti tepat 15,200000 cm.",
        "",
        "Ada batas ketelitian yang dipengaruhi oleh alat ukur."
      ]
    },

    {
      image: penyebabketidakpastianImg,
      body: [
        "Beberapa faktor yang menyebabkan hasil pengukuran tidak sempurna:"
      ]
    },

    {
      heading: "🛠️ 1. Keterbatasan Alat Ukur",
      body: [
        "Setiap alat memiliki skala terkecil.",
        "",
        "Contoh:",
        "Penggaris dengan skala milimeter tidak dapat membaca ukuran lebih kecil dari ketelitiannya."
      ]
    },

    {
      heading: "👀 2. Kesalahan Pembacaan",
      body: [
        "Posisi mata saat membaca alat ukur dapat memengaruhi hasil.",
        "",
        "Pembacaan yang tidak tepat dapat menyebabkan kesalahan pengukuran."
      ]
    },

    {
      heading: "🌡️ 3. Faktor Lingkungan",
      body: [
        "Kondisi sekitar juga dapat memengaruhi pengukuran.",
        "",
        "Contoh:",
        "Perubahan suhu dapat memengaruhi ukuran benda atau alat ukur tertentu."
      ]
    },

    {
      heading: "🧑‍🔬 4. Faktor Pengamat",
      body: [
        "Kemampuan dan cara seseorang melakukan pengukuran juga dapat memengaruhi hasil."
      ]
    },

    {
      heading: "📊 Pengukuran Tunggal dan Berulang",
      body: [
        "Pengukuran tunggal menghasilkan satu data.",
        "",
        "Pengukuran berulang dilakukan beberapa kali untuk mengurangi pengaruh kesalahan acak.",
        "",
        "Data yang lebih banyak membantu menghasilkan kesimpulan yang lebih terpercaya."
      ]
    },

    {
      heading: "➕ Menuliskan Hasil Pengukuran",
      body: [
        "Hasil pengukuran dapat ditulis dalam bentuk:",
        "",
        "Nilai pengukuran ± ketidakpastian",
        "",
        "Contoh:",
        "Panjang benda = (15,2 ± 0,1) cm",
        "",
        "Artinya nilai sebenarnya diperkirakan berada di sekitar rentang tersebut."
      ]
    },

    {
      heading: "🎯 Kenapa Ketidakpastian Penting?",
      body: [
        "Ketidakpastian membuat laporan ilmiah menjadi lebih jujur.",
        "",
        "Ilmuwan tidak hanya menyampaikan angka, tetapi juga menunjukkan seberapa yakin terhadap hasil tersebut."
      ]
    },

    {
      heading: "✨ Inti Materi",
      body: [
        "Pengukuran yang baik bukan berarti tanpa kesalahan.",
        "",
        "Pengukuran yang baik adalah pengukuran yang mengetahui batas ketelitiannya."
      ]
    },

    {
      image: nextmissionkonversisatuanImg,
      caption: "🚀 KLIK GAMBAR INI! Kamu bisa menuju ke portal berikutnya.",
      link: "/materi/konversi%20satuan",
      body: [
        "Dalam fisika, nilai hasil pengukuran sering memiliki satuan yang berbeda.",
        "",
        "Bagaimana cara mengubah satuan tanpa mengubah nilai sebenarnya?",
        "",
        "➡️ Next, kita menuju portal: Konversi Satuan."
      ]
    },

    {
      heading: "Referensi:",
      body: [
        "Halliday, Resnick & Walker. Fundamentals of Physics.",
        "Serway & Jewett. Physics for Scientists and Engineers.",
        "Young & Freedman. University Physics with Modern Physics.",
        "JCGM. Evaluation of measurement data — Guide to the Expression of Uncertainty in Measurement (GUM).",
        "Kemendikbudristek RI. Buku Fisika SMA/MA Kelas X."
      ]
    }
  ]
}

export default ketidakpastian