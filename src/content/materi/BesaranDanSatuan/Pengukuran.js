import { body, caption, image, link } from "framer-motion/client";
import pengukuranImg from "/src/assets/Materi/BesaranDanSatuan/Pengukuran1.jpg";
import pengertianpengukuranImg from "/src/assets/Materi/BesaranDanSatuan/Pengukuran2.jpg";
import alatukurImg from "/src/assets/Materi/BesaranDanSatuan/Pengukuran3.jpg";
import ketelitianalatukurImg from "/src/assets/Materi/BesaranDanSatuan/Pengukuran4.jpg";
import nextmissinketidakpastianImg from "/src/assets/Materi/BesaranDanSatuan/Pengukuran5.jpg";

const pengukuran = {
  title: "Pengukuran",
  slug: "pengukuran",
  description: "Memahami konsep pengukuran, alat ukur, dan cara memperoleh data dalam fisika.",
  chapter: "📏 Pengukuran",
  content: [{ blocks: [{ type: "image", src:

      pengukuranImg, caption:
      "Pengukuran dalam Dunia Fisika" }, { type: "paragraph", text: "Fisika tidak hanya mengamati fenomena, tetapi juga membutuhkan data." }, { type: "paragraph", text: "Data tersebut diperoleh melalui proses pengukuran." }, { type: "paragraph", text: "Dengan pengukuran, sesuatu yang sebelumnya hanya diamati dapat dinyatakan dalam bentuk angka." }] }, { blocks: [{ type: "image", src:










      pengertianpengukuranImg, caption:
      "Pengenalan konsep pengukuran" }, { type: "paragraph", text: "Pengukuran adalah proses membandingkan suatu besaran dengan satuan standar yang telah ditentukan." }, { type: "paragraph", text: "Hasil pengukuran selalu terdiri dari:" }, { type: "paragraph", text: "Nilai + Satuan" }, { type: "paragraph", text: "Contoh:" }, { type: "paragraph", text: "Panjang meja = 120 cm" }] }, { blocks: [{ type: "heading", text:













      "🧩 Unsur Dalam Pengukuran" }, { type: "paragraph", text: "Dalam proses pengukuran terdapat beberapa komponen:" }, { type: "paragraph", text: "1. Besaran yang diukur" }, { type: "paragraph", text: "2. Alat ukur" }, { type: "paragraph", text: "3. Satuan standar" }, { type: "paragraph", text: "4. Hasil pengukuran" }] }, { blocks: [{ type: "image", src:











      alatukurImg, caption:
      "Alat ukur dalam fisika dan penggunaannya" }, { type: "paragraph", text: "Setiap besaran memiliki alat ukur yang sesuai." }, { type: "paragraph", text: "Contoh:" }, { type: "paragraph", text: "Panjang → mistar, jangka sorong, mikrometer sekrup" }, { type: "paragraph", text: "Massa → neraca" }, { type: "paragraph", text: "Waktu → stopwatch" }, { type: "paragraph", text: "Suhu → termometer" }] }, { blocks: [{ type: "image", src:













      ketelitianalatukurImg, caption:
      "Perbandingan ketelitian alat ukur" }, { type: "paragraph", text: "Setiap alat ukur memiliki tingkat ketelitian yang berbeda." }, { type: "paragraph", text: "Semakin kecil skala terkecil alat ukur, semakin teliti hasil pengukurannya." }, { type: "paragraph", text: "Contoh:" }, { type: "paragraph", text: "Mikrometer sekrup lebih teliti daripada penggaris biasa." }] }, { blocks: [{ type: "heading", text:











      "📊 Pengukuran Tunggal dan Berulang" }, { type: "paragraph", text: "Pengukuran tunggal dilakukan satu kali pengukuran." }, { type: "paragraph", text: "Contoh:" }, { type: "paragraph", text: "Mengukur panjang buku satu kali." }, { type: "paragraph", text: "Pengukuran berulang dilakukan beberapa kali untuk mendapatkan hasil yang lebih terpercaya." }] }, { blocks: [{ type: "heading", text:











      "🎲 Contoh Pengukuran" }, { type: "paragraph", text: "Seorang siswa mengukur panjang pensil menggunakan penggaris." }, { type: "paragraph", text: "Hasil yang diperoleh:" }, { type: "paragraph", text: "15,2 cm" }, { type: "paragraph", text: "Angka 15,2 menunjukkan nilai pengukuran." }, { type: "paragraph", text: "cm menunjukkan satuan yang digunakan." }] }, { blocks: [{ type: "heading", text:












      "⚠️ Kenapa Hasil Pengukuran Bisa Berbeda?" }, { type: "paragraph", text: "Dalam praktiknya, hasil pengukuran bisa memiliki perbedaan karena:" }, { type: "paragraph", text: "✅ Keterbatasan alat ukur" }, { type: "paragraph", text: "✅ Cara membaca alat" }, { type: "paragraph", text: "✅ Kondisi lingkungan" }, { type: "paragraph", text: "✅ Keterampilan pengukur" }] }, { blocks: [{ type: "heading", text:











      "🔬 Pengukuran dalam Metode Ilmiah" }, { type: "paragraph", text: "Pengukuran menjadi bagian penting dalam eksperimen." }, { type: "paragraph", text: "Tanpa data hasil pengukuran, ilmuwan tidak dapat membuktikan suatu hipotesis." }] }, { blocks: [{ type: "heading", text:








      "✨ Inti Materi" }, { type: "paragraph", text: "Pengukuran adalah cara fisika mengubah fenomena alam menjadi data yang dapat dianalisis." }, { type: "paragraph", text: "Semakin baik pengukuran, semakin baik pula kesimpulan yang diperoleh." }] }, {










    link: "/materi/ketidakpastian", blocks: [{ type: "image", src: nextmissinketidakpastianImg, caption: "🚀 KLIK GAMBAR INI! Kamu bisa menuju ke portal berikutnya." }, { type: "paragraph", text: "Apakah hasil pengukuran selalu tepat 100%?" }, { type: "paragraph", text: "Ternyata tidak." }, { type: "paragraph", text: "Setiap pengukuran memiliki batas ketelitian." }, { type: "paragraph", text: "➡️ Next, kita menuju portal: Ketidakpastian Pengukuran." }] }, { blocks: [{ type: "heading", text:











      "Referensi:" }, { type: "paragraph", text: "Halliday, Resnick & Walker. Fundamentals of Physics." }, { type: "paragraph", text: "Serway & Jewett. Physics for Scientists and Engineers." }, { type: "paragraph", text: "Young & Freedman. University Physics with Modern Physics." }, { type: "paragraph", text: "BIPM. The International System of Units (SI Brochure)." }, { type: "paragraph", text: "Kemendikbudristek RI. Buku Fisika SMA/MA Kelas X." }] }]









};

export default pengukuran;