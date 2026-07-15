import { body, caption, image, link } from "framer-motion/client";
import ketidakpastianImg from "/src/assets/Materi/BesaranDanSatuan/Ketidakpastian1.jpg";
import pengertiaketidakpastianImg from "/src/assets/Materi/BesaranDanSatuan/Ketidakpastian2.jpg";
import penyebabketidakpastianImg from "/src/assets/Materi/BesaranDanSatuan/Ketidakpastian3.jpg";
import menulishasilpengukuranImg from "/src/assets/Materi/BesaranDanSatuan/Ketidakpastian4.jpg";
import nextmissionkonversisatuanImg from "/src/assets/Materi/BesaranDanSatuan/Ketidakpastian5.jpg";

const ketidakpastian = {
  title: "Ketidakpastian",
  slug: "ketidakpastian",
  description:
    "Memahami penyebab ketidakpastian dalam pengukuran dan cara menyatakan hasil pengukuran dengan benar.",
  chapter: "📏 Pengukuran",
  content: [
    {
      blocks: [
        { type: "image", src: ketidakpastianImg },
        {
          type: "paragraph",
          text: "Dalam fisika, setiap pengukuran memiliki keterbatasan.",
        },
        {
          type: "paragraph",
          text: "Walaupun menggunakan alat ukur yang baik, hasil pengukuran tidak mungkin benar-benar sempurna.",
        },
        {
          type: "paragraph",
          text: "Karena itu, setiap hasil pengukuran memiliki nilai ketidakpastian.",
        },
      ],
    },
    {
      blocks: [
        { type: "image", src: pengertiaketidakpastianImg },
        {
          type: "paragraph",
          text: "Ketidakpastian pengukuran adalah perkiraan batas penyimpangan suatu hasil pengukuran terhadap nilai sebenarnya.",
        },
        {
          type: "paragraph",
          text: "Artinya, hasil pengukuran selalu memiliki kemungkinan berada sedikit di atas atau di bawah nilai sebenarnya.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "📏 Contoh Sederhana" },
        {
          type: "paragraph",
          text: "Sebuah pensil diukur menggunakan penggaris.",
        },
        { type: "paragraph", text: "Hasil pengukuran:" },
        { type: "paragraph", text: "15,2 cm" },
        {
          type: "paragraph",
          text: "Angka tersebut bukan berarti panjang pensil pasti tepat 15,200000 cm.",
        },
        {
          type: "paragraph",
          text: "Ada batas ketelitian yang dipengaruhi oleh alat ukur.",
        },
      ],
    },
    {
      blocks: [
        { type: "image", src: penyebabketidakpastianImg },
        {
          type: "paragraph",
          text: "Beberapa faktor yang menyebabkan hasil pengukuran tidak sempurna:",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🛠️ 1. Keterbatasan Alat Ukur" },
        { type: "paragraph", text: "Setiap alat memiliki skala terkecil." },
        { type: "paragraph", text: "Contoh:" },
        {
          type: "paragraph",
          text: "Penggaris dengan skala milimeter tidak dapat membaca ukuran lebih kecil dari ketelitiannya.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "👀 2. Kesalahan Pembacaan" },
        {
          type: "paragraph",
          text: "Posisi mata saat membaca alat ukur dapat memengaruhi hasil.",
        },
        {
          type: "paragraph",
          text: "Pembacaan yang tidak tepat dapat menyebabkan kesalahan pengukuran.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🌡️ 3. Faktor Lingkungan" },
        {
          type: "paragraph",
          text: "Kondisi sekitar juga dapat memengaruhi pengukuran.",
        },
        { type: "paragraph", text: "Contoh:" },
        {
          type: "paragraph",
          text: "Perubahan suhu dapat memengaruhi ukuran benda atau alat ukur tertentu.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🧑‍🔬 4. Faktor Pengamat" },
        {
          type: "paragraph",
          text: "Kemampuan dan cara seseorang melakukan pengukuran juga dapat memengaruhi hasil.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "📊 Pengukuran Tunggal dan Berulang" },
        {
          type: "paragraph",
          text: "Pengukuran tunggal menghasilkan satu data.",
        },
        {
          type: "paragraph",
          text: "Pengukuran berulang dilakukan beberapa kali untuk mengurangi pengaruh kesalahan acak.",
        },
        {
          type: "paragraph",
          text: "Data yang lebih banyak membantu menghasilkan kesimpulan yang lebih terpercaya.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "➕ Menuliskan Hasil Pengukuran" },
        {
          type: "paragraph",
          text: "Hasil pengukuran dapat ditulis dalam bentuk:",
        },
        { type: "paragraph", text: "Nilai pengukuran ± ketidakpastian" },
        { type: "paragraph", text: "Contoh:" },
        { type: "paragraph", text: "Panjang benda = (15,2 ± 0,1) cm" },
        {
          type: "paragraph",
          text: "Artinya nilai sebenarnya diperkirakan berada di sekitar rentang tersebut.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🎯 Kenapa Ketidakpastian Penting?" },
        {
          type: "paragraph",
          text: "Ketidakpastian membuat laporan ilmiah menjadi lebih jujur.",
        },
        {
          type: "paragraph",
          text: "Ilmuwan tidak hanya menyampaikan angka, tetapi juga menunjukkan seberapa yakin terhadap hasil tersebut.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "✨ Inti Materi" },
        {
          type: "paragraph",
          text: "Pengukuran yang baik bukan berarti tanpa kesalahan.",
        },
        {
          type: "paragraph",
          text: "Pengukuran yang baik adalah pengukuran yang mengetahui batas ketelitiannya.",
        },
      ],
    },
    {
      link: "/materi/konversi%20satuan",
      blocks: [
        {
          type: "image",
          src: nextmissionkonversisatuanImg,
          caption: "🚀 KLIK GAMBAR INI! Kamu bisa menuju ke portal berikutnya.",
        },
        {
          type: "paragraph",
          text: "Dalam fisika, nilai hasil pengukuran sering memiliki satuan yang berbeda.",
        },
        {
          type: "paragraph",
          text: "Bagaimana cara mengubah satuan tanpa mengubah nilai sebenarnya?",
        },
        {
          type: "paragraph",
          text: "➡️ Next, kita menuju portal: Konversi Satuan.",
        },
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
          text: "JCGM. Evaluation of measurement data — Guide to the Expression of Uncertainty in Measurement (GUM).",
        },
        {
          type: "paragraph",
          text: "Kemendikbudristek RI. Buku Fisika SMA/MA Kelas X.",
        },
      ],
    },
  ],
};

export default ketidakpastian;
