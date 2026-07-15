import { body, caption, image, link } from "framer-motion/client";
import angkapentingImg from "/src/assets/Materi/BesaranDanSatuan/AngkaPenting1.jpg";
import fungsiangkapentingImg from "/src/assets/Materi/BesaranDanSatuan/AngkaPenting2.jpg";
import aturanangkapentingImg from "/src/assets/Materi/BesaranDanSatuan/AngkaPenting3.jpg";
import operasihitungangkapentingImg from "/src/assets/Materi/BesaranDanSatuan/AngkaPenting4.jpg";
import nextmissionnotasiilmiahImg from "/src/assets/Materi/BesaranDanSatuan/AngkaPenting5.jpg";

const angkapenting = {
  title: "Angka Penting",
  slug: "angka penting",
  description:
  "Memahami aturan penulisan angka penting dan penggunaannya dalam hasil pengukuran fisika.",
  chapter: "📏 Pengukuran",
  content: [
  {
    blocks: [
    {
      type: "image",
      src: angkapentingImg,
      caption:
      "Ilustrasi: Mempelajari ketelitian alat ukur di labolatoruim modern"
    },
    {
      type: "paragraph",
      text: "Dalam fisika, hasil pengukuran selalu memiliki batas ketelitian."
    },
    {
      type: "paragraph",
      text: "Sebuah alat ukur tidak mungkin memberikan nilai yang benar-benar sempurna."
    },
    {
      type: "paragraph",
      text: "Karena itu, angka pada hasil pengukuran harus ditulis sesuai tingkat ketelitian alat."
    },
    {
      type: "paragraph",
      text: "Angka yang menunjukkan ketelitian pengukuran disebut angka penting."
    }]

  },
  {
    blocks: [
    {
      type: "image",
      src: fungsiangkapentingImg,
      caption: "Ilustrasi: Kenapa angka penting dalam pengukuran?"
    },
    {
      type: "paragraph",
      text: "Misalnya panjang sebuah benda diukur menggunakan penggaris."
    },
    {
      type: "paragraph",
      text: "Hasil pengukuran mungkin 12,3 cm, bukan 12,347892 cm."
    },
    {
      type: "paragraph",
      text: "Menulis terlalu banyak angka dapat memberikan kesan bahwa pengukuran lebih teliti dari kemampuan alat."
    }]

  },
  {
    blocks: [
    {
      type: "image",
      src: aturanangkapentingImg,
      caption: "Ilustrasi:  Aturan angka penting"
    }]

  },
  {
    blocks: [
    {
      type: "image",
      src: operasihitungangkapentingImg,
      caption: "Ilustrasi: Operasi bilangan angka penting"
    }]

  },
  { heading:

    "🔢 Aturan Pembulatan", blocks: [{ type: "heading", text: "🔢 Aturan Pembulatan" },
    {
      type: "paragraph",
      text: "Aturan pembulatan angka penting digunakan untuk memastikan hasil perhitungan sesuai dengan tingkat ketelitian data. Aturannya sederhana:"
    },
    {
      type: "list",
      list: {
        type: "unordered",
        items: [
        "Jika lebih dari 5 (> 5): Bulatkan ke atas (angka sebelumnya ditambah 1). Contoh: 3,76 → menjadi 3,8.",
        "Jika kurang dari 5 (< 5): Bulatkan ke bawah (angka dihilangkan). Contoh: 3,74 → menjadi 3,7.",
        "Kalau tepat bernilai 5, jika angka sebelum angka 5 adalah ganjil, bulatkan ke atas. Contoh: 3,75 → menjadi 3,8.",
        "Kalau tepat bernilai 5, jika angka sebelum angka 5 adalah genap, bulatkan ke bawah. Contoh: 3,65 → menjadi 3,6."]

      }
    }]

  },
  { heading:

    "🎯 Manfaat Angka Penting", blocks: [{ type: "heading", text: "🎯 Manfaat Angka Penting" },
    { type: "paragraph", text: "Angka penting membantu ilmuwan:" },
    { type: "paragraph", text: "✅ Menulis hasil pengukuran dengan tepat" },
    { type: "paragraph", text: "✅ Menghindari kesalahan ketelitian" },
    { type: "paragraph", text: "✅ Menunjukkan kualitas data eksperimen" }]

  },
  { heading:

    "✨ Inti Materi", blocks: [{ type: "heading", text: "✨ Inti Materi" },
    {
      type: "paragraph",
      text: "Angka penting bukan sekadar aturan menghitung angka."
    },
    {
      type: "paragraph",
      text: "Angka penting adalah cara fisika menghargai batas kemampuan alat ukur."
    }]

  },
  {
    link: "/materi/angka%20penting",
    blocks: [
    {
      type: "image",
      src: nextmissionnotasiilmiahImg,
      caption: "🚀 KLIK GAMBAR INI! Kamu bisa menuju ke portal berikutnya."
    },
    {
      type: "paragraph",
      text: "Kalau angka bisa sangat besar atau sangat kecil, bagaimana cara menuliskannya agar lebih sederhana?"
    },
    {
      type: "paragraph",
      text: "➡️ Next, kita menuju portal: Notasi Ilmiah."
    }]

  },
  { heading:

    "Referensi:", blocks: [{ type: "heading", text: "Referensi:" },
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
      text: "Young & Freedman. University Physics with Modern Physics."
    },
    {
      type: "paragraph",
      text: "Kemendikbudristek RI. Buku Fisika SMA/MA Kelas X."
    }]

  }]

};

export default angkapenting;