import { caption, image } from "framer-motion/client";
import besaranpokokdanturunanImg from "/src/assets/Materi/BesaranDanSatuan/BesaranPokokDanTurunan1.jpg";
import daftarbesaranpokokImg from "/src/assets/Materi/BesaranDanSatuan/BesaranPokokDanTurunan2.jpg";
import contohbesaranturunanImg from "/src/assets/Materi/BesaranDanSatuan/BesaranPokokDanTurunan3.jpg";
import hubunganbesaranpokokdanturunanImg from "/src/assets/Materi/BesaranDanSatuan/BesaranPokokDanTurunan4.jpg";
import nextmissiondimensiImg from "/src/assets/Materi/BesaranDanSatuan/BesaranPokokDanTurunan5.jpg";

const besaranpokokdanturunan = {
  title: "Besaran Pokok dan Turunan",
  slug: "besaran pokok dan turunan",
  description:
  "Memahami perbedaan besaran pokok dan besaran turunan serta hubungan antarbesaran dalam fisika.",
  chapter: "📏 Pengukuran",
  content: [
  {
    blocks: [
    {
      type: "image",
      src: besaranpokokdanturunanImg,
      caption: "Membangun fisika dengan besaran pokok"
    },
    {
      type: "paragraph",
      text: "Dalam fisika, banyak sekali besaran yang kita gunakan."
    },
    {
      type: "paragraph",
      text: "Ada panjang, massa, waktu, kecepatan, gaya, energi, dan masih banyak lagi."
    },
    {
      type: "paragraph",
      text: "Tapi ternyata tidak semuanya berdiri sendiri."
    },
    {
      type: "paragraph",
      text: "Sebagian besaran dibentuk dari gabungan besaran lainnya."
    }]

  },
  {
    blocks: [
    {
      type: "image",
      src: daftarbesaranpokokImg,
      caption: "7 besaran pokok SI dalam fisika"
    },
    {
      type: "paragraph",
      text: "Besaran pokok adalah besaran yang sudah ditetapkan sebagai dasar dan tidak berasal dari gabungan besaran lain."
    },
    {
      type: "paragraph",
      text: "Ada 7 besaran pokok dalam Sistem Internasional (SI)."
    }]

  },
  {
    blocks: [
    {
      type: "image",
      src: contohbesaranturunanImg,
      caption: "Infografis besar turunan fisika"
    },
    {
      type: "paragraph",
      text: "Besaran turunan adalah besaran yang diperoleh dari kombinasi besaran pokok."
    },
    {
      type: "paragraph",
      text: "Artinya, besaran ini dapat diturunkan melalui operasi matematika seperti perkalian atau pembagian."
    }]

  },
  {
    blocks: [
    {
      type: "image",
      src: hubunganbesaranpokokdanturunanImg,
      caption: "Infografis besaran fisika dengan analogi pohon"
    },
    { type: "paragraph", text: "Besaran pokok seperti bahan dasar." },
    {
      type: "paragraph",
      text: "Besaran turunan seperti bangunan yang dibuat dari bahan tersebut."
    },
    {
      type: "paragraph",
      text: "Tanpa besaran pokok, banyak konsep fisika tidak dapat terbentuk."
    }]

  },
  { heading:

    "🎯 Kenapa Harus Dipahami?", blocks: [{ type: "heading", text: "🎯 Kenapa Harus Dipahami?" },
    {
      type: "paragraph",
      text: "Karena hampir semua rumus fisika tersusun dari besaran-besaran ini."
    },
    {
      type: "paragraph",
      text: "Memahami besaran berarti memahami 'bahasa' di balik rumus fisika."
    }]

  },
  { heading:

    "✨ Inti Materi", blocks: [{ type: "heading", text: "✨ Inti Materi" },
    { type: "paragraph", text: "Besaran pokok adalah dasar pengukuran." },
    {
      type: "paragraph",
      text: "Besaran turunan adalah hasil kombinasi dari besaran pokok."
    },
    {
      type: "paragraph",
      text: "Keduanya membuat fisika dapat menjelaskan berbagai fenomena alam."
    }]

  },
  {
    link: "/materi/dimensi",
    blocks: [
    {
      type: "image",
      src: nextmissiondimensiImg,
      caption: "🚀 KLIK GAMBAR INI! Kamu bisa menuju ke portal berikutnya."
    },
    {
      type: "paragraph",
      text: "Kalau sebuah rumus tersusun dari beberapa besaran, bagaimana cara mengecek apakah rumus itu benar?"
    },
    { type: "paragraph", text: "➡️ Netx, kita menuju portal: Dimensi." }]

  },
  { heading:

    "Referensi", blocks: [{ type: "heading", text: "Referensi" },
    {
      type: "paragraph",
      text: "Serway & Jewett. Physics for Scientists and Engineers."
    },
    {
      type: "paragraph",
      text: "Halliday, Resnick & Walker. Fundamentals of Physics."
    },
    {
      type: "paragraph",
      text: "BIPM. The International System of Units (SI Brochure)."
    },
    {
      type: "paragraph",
      text: "Kemendikbudristek RI. Buku Fisika SMA/MA Kelas X."
    }]

  }]

};

export default besaranpokokdanturunan;