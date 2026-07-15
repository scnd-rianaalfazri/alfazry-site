import { body, caption } from "framer-motion/client";
import mengapakitaharusmengukurImg from "/src/assets/Materi/BesaranDanSatuan/PengantarBesaranDanSatuan1.jpg";
import katakatatidakcukupImg from "/src/assets/Materi/BesaranDanSatuan/PengantarBesaranDanSatuan2.jpg";
import daripengamatandatadataImg from "/src/assets/Materi/BesaranDanSatuan/PengantarBesaranDanSatuan3.jpg";
import pengukuranadadimanamanaImg from "/src/assets/Materi/BesaranDanSatuan/PengantarBesaranDanSatuan4.jpg";
import tahukahkamuImg from "/src/assets/Materi/BesaranDanSatuan/PengantarBesaranDanSatuan5.jpg";
import miskonsepsibesarandansatuanImg from "/src/assets/Materi/BesaranDanSatuan/PengantarBesaranDanSatuan6.jpg";
import pentingnyapengukuranImg from "/src/assets/Materi/BesaranDanSatuan/PengantarBesaranDanSatuan7.jpg";
import intichapterImg from "/src/assets/Materi/BesaranDanSatuan/PengantarBesaranDanSatuan8.jpg";
import nextmissionImg from "/src/assets/Materi/BesaranDanSatuan/PengantarBesaranDanSatuan9.jpg";
import cobatebakImg from "/src/assets/Materi/BesaranDanSatuan/PengantarBesaranDanSatuan10.jpg";

const pengantarbesarandansatuan = {
  title: "Mengapa Kita Harus Mengukur?",
  slug: "mengapa kita harus mengukur",
  description:
    "Memahami pentingnya pengukuran sebagai dasar dalam fisika untuk menggambarkan fenomena alam secara objektif.",
  chapter: "📏 Pengukuran",

  content: [
    {
      blocks: [
        {
          type: "image",
          src: mengapakitaharusmengukurImg,
          caption: "Setiap penemuan ilmiah dimulai dari sebuah pengukuran.",
        },
        { type: "paragraph", text: "Bayangkan seorang teman berkata," },
        { type: "paragraph", text: '"Tas ini berat."' },
        { type: "paragraph", text: "Lalu teman lain berkata," },
        { type: "paragraph", text: '"Motor itu melaju sangat cepat."' },
        { type: "paragraph", text: "Menurutmu..." },
        { type: "paragraph", text: "Seberapa berat?" },
        { type: "paragraph", text: "Seberapa cepat?" },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🤔 Mengapa Kata-Kata Saja Tidak Cukup?" },
        {
          type: "image",
          src: katakatatidakcukupImg,
          caption:
            "Kata-kata seperti besar, kecil, cepat, atau berat tidak cukup untuk menjelaskan suatu fenomena.",
        },
        {
          type: "paragraph",
          text: "Dalam kehidupan sehari-hari, kita sering menggunakan kata seperti besar, kecil, panjang, cepat, atau berat.",
        },
        {
          type: "paragraph",
          text: "Namun dalam fisika, kata-kata tersebut belum cukup untuk menjelaskan suatu fenomena.",
        },
        {
          type: "paragraph",
          text: "Fisika membutuhkan sesuatu yang dapat dibandingkan, diuji, dan dihitung.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "📏 Dari Pengamatan Menjadi Data" },
        {
          type: "image",
          src: daripengamatandatadataImg,
          caption:
            "Pengukuran adalah proses mengubah pengamatan menjadi data yang dapat dianalisis.",
        },
        {
          type: "paragraph",
          text: "Di chapter sebelumnya kamu belajar bahwa fisika dibangun melalui metode ilmiah.",
        },
        {
          type: "paragraph",
          text: "Nah, agar sebuah pengamatan dapat dianalisis, kita harus mengubahnya menjadi data.",
        },
        {
          type: "paragraph",
          text: "Cara mengubah fenomena menjadi data adalah melalui pengukuran.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🌍 Pengukuran Ada di Mana-Mana" },
        {
          type: "image",
          src: pengukuranadadimanamanaImg,
          caption: "Ini beberapa alat ukur",
        },
        {
          type: "paragraph",
          text: "Tanpa disadari, setiap hari kita melakukan pengukuran.",
        },
        { type: "paragraph", text: "⌚ Melihat waktu." },
        { type: "paragraph", text: "🌡️ Mengukur suhu tubuh." },
        { type: "paragraph", text: "⚖️ Menimbang massa badan." },
        { type: "paragraph", text: "🚗 Melihat kecepatan kendaraan." },
        { type: "paragraph", text: "📱 Mengukur kapasitas penyimpanan data." },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🚀 Mengapa Pengukuran Sangat Penting?" },
        {
          type: "image",
          src: pentingnyapengukuranImg,
          caption: "Pengukuran adalah dasar dari semua penemuan ilmiah.",
        },
        {
          type: "paragraph",
          text: "Seluruh cabang fisika bergantung pada pengukuran.",
        },
        { type: "paragraph", text: "Tanpa pengukuran, kita tidak dapat:" },
        { type: "paragraph", text: "✅ Menentukan kecepatan benda." },
        { type: "paragraph", text: "✅ Menghitung gaya." },
        { type: "paragraph", text: "✅ Mengetahui energi." },
        { type: "paragraph", text: "✅ Membandingkan hasil eksperimen." },
        { type: "paragraph", text: "✅ Membuktikan suatu teori." },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "💡 Tahukah Kamu?" },
        {
          type: "image",
          src: tahukahkamuImg,
          caption: "Ketelitian pada laser",
        },
        {
          type: "paragraph",
          text: "Ketika ilmuwan mengukur jarak Bumi ke Bulan menggunakan laser, ketelitiannya dapat mencapai beberapa milimeter meskipun jaraknya sekitar 384.400 kilometer.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "⚠️ Miskonsepsi" },
        {
          type: "image",
          src: miskonsepsibesarandansatuanImg,
          caption:
            "Banyak orang mengira pengukuran hanya berarti membaca angka pada alat ukur.",
        },
        {
          type: "paragraph",
          text: "Banyak orang mengira pengukuran hanya berarti membaca angka pada alat ukur.",
        },
        {
          type: "paragraph",
          text: "Padahal pengukuran juga mencakup memilih alat yang tepat, menggunakan satuan yang benar, dan memahami batas ketelitian hasil pengukuran.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🗺️ Misi Chapter Ini" },
        { type: "paragraph", text: "Pada chapter ini kamu akan mempelajari:" },
        { type: "paragraph", text: "📏 Besaran dan Satuan" },
        { type: "paragraph", text: "🌐 Sistem Internasional (SI)" },
        { type: "paragraph", text: "🧱 Besaran Pokok & Turunan" },
        { type: "paragraph", text: "🧩 Dimensi" },
        { type: "paragraph", text: "🔬 Pengukuran" },
        { type: "paragraph", text: "📉 Ketidakpastian" },
        { type: "paragraph", text: "🔢 Angka Penting" },
        { type: "paragraph", text: "🚀 Notasi Ilmiah" },
        { type: "paragraph", text: "🔄 Konversi Satuan" },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "✨ Inti Chapter" },
        {
          type: "image",
          src: intichapterImg,
          caption:
            "Pengukuran adalah bahasa yang digunakan fisika untuk menggambarkan alam secara objektif.",
        },
        {
          type: "paragraph",
          text: "Pengukuran adalah bahasa yang digunakan fisika untuk menggambarkan alam secara objektif.",
        },
        {
          type: "paragraph",
          text: "Semakin teliti pengukuran, semakin dapat dipercaya data yang diperoleh.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "⁉️ Coba Tebak?" },
        {
          type: "image",
          src: cobatebakImg,
          caption: "Manakah yang bisa diukur?",
        },
        {
          type: "paragraph",
          text: "✔️ Objektif = Dapat diukur mengunakan alat dan satuan",
        },
        {
          type: "paragraph",
          text: "❌ Subjektif = Berdasarkan perasaan dan pendapat",
        },
      ],
    },
    {
      link: "/materi/besaran%20dan%20satuan",
      blocks: [
        {
          type: "image",
          src: nextmissionImg,
          caption: "🚀 KLIK GAMBAR INI! Misi pertamamu dimulai di sini.",
        },
        {
          type: "paragraph",
          text: "Setelah memahami mengapa pengukuran penting, sekarang saatnya mengenal dua konsep paling dasar dalam dunia pengukuran.",
        },
        { type: "paragraph", text: "➡️ Next Mission: Besaran dan Satuan." },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "Referensi:" },
        {
          type: "paragraph",
          text: "Halliday, Resnick & Walker. Fundamentals of Physics.",
        },
        {
          type: "paragraph",
          text: "Serway & Jewett. Physics for Scientists and Engineers.",
        },
        {
          type: "paragraph",
          text: "Young & Freedman. University Physics with Modern Physics.",
        },
        {
          type: "paragraph",
          text: "BIPM. The International System of Units (SI Brochure).",
        },
        {
          type: "paragraph",
          text: "Kemendikbudristek RI. Buku Fisika SMA/MA Kelas X.",
        },
      ],
    },
  ],
};

export default pengantarbesarandansatuan;
