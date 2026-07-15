import { caption, image } from "framer-motion/client";
import menjumlahkanvektorImg from "/src/assets/Materi/Vektor/MenjumlahkanVektor1.jpg";
import resultanvektorImg from "/src/assets/Materi/Vektor/MenjumlahkanVektor2.jpg";
import vektorsegarissamaImg from "/src/assets/Materi/Vektor/MenjumlahkanVektor3.jpg";
import vektorsegarisberlawananIng from "/src/assets/Materi/Vektor/MenjumlahkanVektor4.jpg";
import penjumlahanmetodesegitigaImg from "/src/assets/Materi/Vektor/MenjumlahkanVektor5.jpg";
import penjumlahanmetodejajargenjangImg from "/src/assets/Materi/Vektor/MenjumlahkanVektor6.jpg";
import penjumlahanvektormenggunakankomponenImg from "/src/assets/Materi/Vektor/MenjumlahkanVektor7.jpg";
import penerapanpenjumlahanvektorImg from "/src/assets/Materi/Vektor/MenjumlahkanVektor8.jpg";
import miskonsepsipenjumlahanvektorImg from "/src/assets/Materi/Vektor/MenjumlahkanVektor9.jpg";
import nextmissionresultanvektorsegarisImg from "/src/assets/Materi/Vektor/MenjumlahkanVektor10.jpg";

const menjumlahkanvektor = {
  title: "Menjumlahkan Vektor",
  slug: "menjumlahkan vektor",
  description:
    "Memahami konsep menggabungkan dua atau lebih vektor untuk mendapatkan resultan vektor.",
  chapter: "➡️ Vektor",
  content: [
    {
      blocks: [
        {
          type: "heading",
          text: "➕ Menjumlahkan Vektor Tidak Sama Seperti Angka Biasa",
        },
        {
          type: "image",
          src: menjumlahkanvektorImg,
          caption: "Ilustrasi: Memjumlahkan vektor",
        },
        {
          type: "paragraph",
          text: "Dalam matematika biasa, angka hanya memiliki nilai.",
        },
        {
          type: "paragraph",
          text: "Namun dalam fisika, vektor memiliki nilai dan arah.",
        },
        {
          type: "paragraph",
          text: "Karena itu, penjumlahan vektor harus memperhatikan arah setiap vektor.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🏹 Apa Itu Resultan Vektor?" },
        {
          type: "image",
          src: resultanvektorImg,
          caption: "Ilustrasi: Resultan Vektor",
        },
        {
          type: "paragraph",
          text: "Hasil dari penjumlahan beberapa vektor disebut resultan vektor.",
        },
        {
          type: "paragraph",
          text: "Resultan adalah satu vektor pengganti yang memiliki efek sama dengan gabungan beberapa vektor.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "➡️ Vektor Segaris dengan Arah Sama" },
        {
          type: "image",
          src: vektorsegarissamaImg,
          caption: "Ilustrasi: Penjumlahan vektor segaris & arah sama",
        },
        {
          type: "paragraph",
          text: "Jika dua vektor memiliki arah yang sama, maka besarnya dijumlahkan.",
        },
        { type: "paragraph", text: "Contoh:" },
        { type: "paragraph", text: "Gaya 10 N ke kanan + gaya 20 N ke kanan" },
        { type: "paragraph", text: "Resultan = 30 N ke kanan" },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "⬅️ Vektor Segaris dengan Arah Berlawanan" },
        {
          type: "image",
          src: vektorsegarisberlawananIng,
          caption: "Ilustrasi: Penjumlahan vektor segaris dan berlawanan",
        },
        {
          type: "paragraph",
          text: "Jika dua vektor berlawanan arah, maka nilainya dikurangkan.",
        },
        {
          type: "paragraph",
          text: "Arah resultan mengikuti vektor yang lebih besar.",
        },
        { type: "paragraph", text: "Contoh:" },
        { type: "paragraph", text: "30 N ke kanan dan 10 N ke kiri" },
        { type: "paragraph", text: "Resultan = 20 N ke kanan" },
      ],
    },
    {
      blocks: [
        {
          type: "heading",
          text: "🔺 Penjumlahan Vektor dengan Metode Segitiga",
        },
        {
          type: "image",
          src: penjumlahanmetodesegitigaImg,
          caption: "Ilustrasi: Penjumlahan vektor metode segitiga",
        },
        {
          type: "paragraph",
          text: "Pada metode segitiga, ujung vektor pertama ditempatkan pada pangkal vektor kedua.",
        },
        {
          type: "paragraph",
          text: "Vektor resultan ditarik dari pangkal vektor pertama menuju ujung vektor terakhir.",
        },
      ],
    },
    {
      blocks: [
        {
          type: "heading",
          text: "▱ Penjumlahan Vektor dengan Metode Jajargenjang",
        },
        {
          type: "image",
          src: penjumlahanmetodejajargenjangImg,
          caption: "Ilustrasi: Penjumlahan vektor metode jajargenjang",
        },
        {
          type: "paragraph",
          text: "Metode jajargenjang digunakan untuk dua vektor yang memiliki titik pangkal sama.",
        },
        {
          type: "paragraph",
          text: "Resultan adalah diagonal dari bentuk jajargenjang yang terbentuk.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🧩 Penjumlahan Vektor Menggunakan Komponen" },
        {
          type: "image",
          src: penjumlahanvektormenggunakankomponenImg,
          caption: "Ilustrasi: Penjumlahan vektor menggunakan komponen",
        },
        {
          type: "paragraph",
          text: "Untuk vektor dua dimensi, cara yang lebih umum adalah menggunakan komponen.",
        },
        { type: "paragraph", text: "Langkahnya:" },
        {
          type: "paragraph",
          text: "1. Uraikan setiap vektor menjadi komponen X dan Y",
        },
        { type: "paragraph", text: "2. Jumlahkan semua komponen X" },
        { type: "paragraph", text: "3. Jumlahkan semua komponen Y" },
        { type: "paragraph", text: "4. Tentukan resultan akhirnya" },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🚗 Contoh Penerapan Vektor dalam Kehidupan" },
        {
          type: "image",
          src: penerapanpenjumlahanvektorImg,
          caption: "Ilustrasi: Contoh penerapan pada penjumlahan vektor",
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              "Kapal tidak bergerak lurus ke depan, tetapi menyamping karena pengaruh arus. Arah sebenarnya adalah resultan dari arah kapal dan arus",
              "Pesawat tidak sampai tepat diatas tujuan jika ada angin menyamping. Resultan menentukan arah tempuh sebenarnya.",
              "Mobil melaju ke depan tetapi juga tertarik ke bawah oleh gravitasi. Resultan menentukan seberapa cepat mobil benar-benar menanjak",
              "Bola tidak bergerak sesuai tendangan saja,tetapi dipengaruhi oleh angin. Resultan menentukan arah sebenarnya.",
            ],
          },
        },
      ],
    },
    {
      blocks: [
        { type: "paragraph", text: "Penjumlahan vektor juga, digunakan pada:" },
        { type: "paragraph", text: "💪 Resultan gaya" },
        { type: "paragraph", text: "🚀 Kecepatan benda" },
        { type: "paragraph", text: "🌎 Perpindahan" },
        { type: "paragraph", text: "🔋 Medan listrik" },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🧠 Kesalahan yang Sering Terjadi" },
        {
          type: "image",
          src: miskonsepsipenjumlahanvektorImg,
          caption: "Ilustrasi: Miskonsepsi menjumlahkan vektor",
        },
        {
          type: "paragraph",
          text: "❌ Menjumlahkan besar vektor tanpa melihat arah",
        },
        { type: "paragraph", text: "Contoh:" },
        { type: "paragraph", text: "10 N ke kanan + 10 N ke kiri bukan 20 N." },
        { type: "paragraph", text: "Keduanya dapat saling mengurangi." },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "✨ Inti Materi" },
        {
          type: "paragraph",
          text: "Penjumlahan vektor menghasilkan sebuah resultan.",
        },
        {
          type: "paragraph",
          text: "Arah setiap vektor menentukan bagaimana hasil akhirnya.",
        },
      ],
    },
    {
      link: "/materi/resultan%20vektor%20satu%20garis",
      blocks: [
        {
          type: "image",
          src: nextmissionresultanvektorsegarisImg,
          caption: "🚀 KLIK GAMBAR INI! Kamu bisa menuju ke portal berikutnya.",
        },
        {
          type: "paragraph",
          text: "Bagaimana jika dua vektor hanya berada pada satu garis lurus?",
        },
        {
          type: "paragraph",
          text: "➡️ Selanjutnya: Resultan Vektor Satu Garis.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "Referensi:" },
        {
          type: "paragraph",
          text: "Halliday, D., Resnick, R., & Walker, J. Fundamentals of Physics.",
        },
        {
          type: "paragraph",
          text: "Serway, R. A., & Jewett, J. W. Physics for Scientists and Engineers.",
        },
        {
          type: "paragraph",
          text: "Young, H. D., & Freedman, R. A. University Physics with Modern Physics.",
        },
        {
          type: "paragraph",
          text: "Kemendikbudristek RI. Buku Fisika SMA/MA Kelas X.",
        },
        { type: "paragraph", text: "OpenStax. Physics 2e." },
      ],
    },
  ],
};

export default menjumlahkanvektor;
