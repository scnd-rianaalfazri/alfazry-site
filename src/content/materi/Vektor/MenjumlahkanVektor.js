import { caption, image } from "framer-motion/client"
import menjumlahkanvektorImg from "/src/assets/Materi/Vektor/MenjumlahkanVektor1.jpg"
import resultanvektorImg from "/src/assets/Materi/Vektor/MenjumlahkanVektor2.jpg"
import vektorsegarissamaImg from "/src/assets/Materi/Vektor/MenjumlahkanVektor3.jpg"
import vektorsegarisberlawananIng from "/src/assets/Materi/Vektor/MenjumlahkanVektor4.jpg"
import penjumlahanmetodesegitigaImg from "/src/assets/Materi/Vektor/MenjumlahkanVektor5.jpg"
import penjumlahanmetodejajargenjangImg from "/src/assets/Materi/Vektor/MenjumlahkanVektor6.jpg"
import penjumlahanvektormenggunakankomponenImg from "/src/assets/Materi/Vektor/MenjumlahkanVektor7.jpg"
import penerapanpenjumlahanvektorImg from "/src/assets/Materi/Vektor/MenjumlahkanVektor8.jpg"
import miskonsepsipenjumlahanvektorImg from "/src/assets/Materi/Vektor/MenjumlahkanVektor9.jpg"
import nextmissionresultanvektorsegarisImg from "/src/assets/Materi/Vektor/MenjumlahkanVektor10.jpg"

const menjumlahkanvektor = {
  title: "Menjumlahkan Vektor",
  slug: "menjumlahkan vektor",
  description: "Memahami konsep menggabungkan dua atau lebih vektor untuk mendapatkan resultan vektor.",
  chapter: "➡️ Vektor",
  content: [
    {
      heading: "➕ Menjumlahkan Vektor Tidak Sama Seperti Angka Biasa",
      image: menjumlahkanvektorImg,
      caption: "Ilustrasi: Memjumlahkan vektor",
      body: [
        "Dalam matematika biasa, angka hanya memiliki nilai.",
        "",
        "Namun dalam fisika, vektor memiliki nilai dan arah.",
        "",
        "Karena itu, penjumlahan vektor harus memperhatikan arah setiap vektor."
      ]
    },

    {
      heading: "🏹 Apa Itu Resultan Vektor?",
      image: resultanvektorImg,
      caption: "Ilustrasi: Resultan Vektor",
      body: [
        "Hasil dari penjumlahan beberapa vektor disebut resultan vektor.",
        "",
        "Resultan adalah satu vektor pengganti yang memiliki efek sama dengan gabungan beberapa vektor."
      ]
    },

    {
      heading: "➡️ Vektor Segaris dengan Arah Sama",
      image: vektorsegarissamaImg,
      caption: "Ilustrasi: Penjumlahan vektor segaris & arah sama",
      body: [
        "Jika dua vektor memiliki arah yang sama, maka besarnya dijumlahkan.",
        "",
        "Contoh:",
        "",
        "Gaya 10 N ke kanan + gaya 20 N ke kanan",
        "",
        "Resultan = 30 N ke kanan"
      ]
    },

    {
      heading: "⬅️ Vektor Segaris dengan Arah Berlawanan",
      image: vektorsegarisberlawananIng,
      caption : "Ilustrasi: Penjumlahan vektor segaris dan berlawanan",
      body: [
        "Jika dua vektor berlawanan arah, maka nilainya dikurangkan.",
        "",
        "Arah resultan mengikuti vektor yang lebih besar.",
        "",
        "Contoh:",
        "",
        "30 N ke kanan dan 10 N ke kiri",
        "",
        "Resultan = 20 N ke kanan"
      ]
    },

    {
      heading: "🔺 Penjumlahan Vektor dengan Metode Segitiga",
      image: penjumlahanmetodesegitigaImg,
      caption: "Ilustrasi: Penjumlahan vektor metode segitiga",
      body: [
        "Pada metode segitiga, ujung vektor pertama ditempatkan pada pangkal vektor kedua.",
        "",
        "Vektor resultan ditarik dari pangkal vektor pertama menuju ujung vektor terakhir."
      ]
    },

    {
      heading: "▱ Penjumlahan Vektor dengan Metode Jajargenjang",
      image: penjumlahanmetodejajargenjangImg,
      caption: "Ilustrasi: Penjumlahan vektor metode jajargenjang",
      body: [
        "Metode jajargenjang digunakan untuk dua vektor yang memiliki titik pangkal sama.",
        "",
        "Resultan adalah diagonal dari bentuk jajargenjang yang terbentuk."
      ]
    },

    {
      heading: "🧩 Penjumlahan Vektor Menggunakan Komponen",
      image: penjumlahanvektormenggunakankomponenImg,
      caption: "Ilustrasi: Penjumlahan vektor menggunakan komponen",
      body: [
        "Untuk vektor dua dimensi, cara yang lebih umum adalah menggunakan komponen.",
        "",
        "Langkahnya:",
        "",
        "1. Uraikan setiap vektor menjadi komponen X dan Y",
        "2. Jumlahkan semua komponen X",
        "3. Jumlahkan semua komponen Y",
        "4. Tentukan resultan akhirnya"
      ]
    },

    {
      heading: "🚗 Contoh Penerapan Vektor dalam Kehidupan",
      image: penerapanpenjumlahanvektorImg,
      caption: "Ilustrasi: Contoh penerapan pada penjumlahan vektor",
      list:[
        "Kapal tidak bergerak lurus ke depan, tetapi menyamping karena pengaruh arus. Arah sebenarnya adalah resultan dari arah kapal dan arus",
        "Pesawat tidak sampai tepat diatas tujuan jika ada angin menyamping. Resultan menentukan arah tempuh sebenarnya.",
        "Mobil melaju ke depan tetapi juga tertarik ke bawah oleh gravitasi. Resultan menentukan seberapa cepat mobil benar-benar menanjak",
        "Bola tidak bergerak sesuai tendangan saja,tetapi dipengaruhi oleh angin. Resultan menentukan arah sebenarnya."
      ],
    },

    {
      body: [
        "Penjumlahan vektor juga, digunakan pada:",
        "",
        "💪 Resultan gaya",
        "🚀 Kecepatan benda",
        "🌎 Perpindahan",
        "🔋 Medan listrik"
      ]
    },

    {
      heading: "🧠 Kesalahan yang Sering Terjadi",
      image: miskonsepsipenjumlahanvektorImg,
      caption: "Ilustrasi: Miskonsepsi menjumlahkan vektor",
      body: [
        "❌ Menjumlahkan besar vektor tanpa melihat arah",
        "",
        "Contoh:",
        "10 N ke kanan + 10 N ke kiri bukan 20 N.",
        "",
        "Keduanya dapat saling mengurangi."
      ]
    },

    {
      heading: "✨ Inti Materi",
      body: [
        "Penjumlahan vektor menghasilkan sebuah resultan.",
        "",
        "Arah setiap vektor menentukan bagaimana hasil akhirnya."
      ]
    },

    {
      image: nextmissionresultanvektorsegarisImg,
      caption: "🚀 KLIK GAMBAR INI! Kamu bisa menuju ke portal berikutnya.",
      link: "/materi/resultan%20vektor%20satu%20garis",
      body: [
        "Bagaimana jika dua vektor hanya berada pada satu garis lurus?",
        "",
        "➡️ Selanjutnya: Resultan Vektor Satu Garis."
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

export default menjumlahkanvektor