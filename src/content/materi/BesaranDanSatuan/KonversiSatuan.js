import { body, caption, image } from "framer-motion/client";
import konversisatuanImg from "/src/assets/Materi/BesaranDanSatuan/KonversiSatuan1.jpg";
import fungsikonversiImg from "/src/assets/Materi/BesaranDanSatuan/KonversiSatuan2.jpg";
import prinsipkonversiImg from "/src/assets/Materi/BesaranDanSatuan/KonversiSatuan3.jpg";
import tanggasatuanImg from "/src/assets/Materi/BesaranDanSatuan/KonversiSatuan4.jpg";
import endchapterpengukuranImg from "/src/assets/Materi/BesaranDanSatuan/KonversiSatuan5.jpg";

const konversisatuan = {
  title: "Konversi Satuan",
  slug: "konversi satuan",
  description: "Memahami cara mengubah satuan pengukuran ke bentuk lain tanpa mengubah nilai sebenarnya.",
  chapter: "📏 Pengukuran",
  content: [{ blocks: [{ type: "image", src:

      konversisatuanImg }, { type: "paragraph", text: "Dalam fisika, kita sering menemukan satu besaran dengan satuan yang berbeda." }, { type: "paragraph", text: "Contohnya:" }, { type: "paragraph", text: "Panjang jalan dapat dinyatakan dalam kilometer atau meter." }, { type: "paragraph", text: "Walaupun satuannya berbeda, nilai sebenarnya tetap sama." }, { type: "paragraph", text: "Proses mengubah satuan inilah yang disebut konversi satuan." }] }, { blocks: [{ type: "image", src:













      fungsikonversiImg }, { type: "paragraph", text: "Karena dalam perhitungan fisika, semua besaran harus menggunakan satuan yang sesuai." }, { type: "paragraph", text: "Jika satuan tidak disamakan, hasil perhitungan bisa menjadi salah." }] }, { blocks: [{ type: "image", src:








      prinsipkonversiImg }, { type: "paragraph", text: "Konversi dilakukan dengan menggunakan faktor pengali yang nilainya sama dengan 1." }, { type: "paragraph", text: "Contoh:" }, { type: "paragraph", text: "1 km = 1000 m" }, { type: "paragraph", text: "Artinya:" }, { type: "paragraph", text: "1 km × 1000 m / 1 km = 1000 m" }] }, { blocks: [{ type: "heading", text:












      "📈 Konversi Satuan Besar ke Kecil" }, { type: "paragraph", text: "Jika berpindah ke satuan yang lebih kecil, nilainya dikalikan." }, { type: "paragraph", text: "Contoh:" }, { type: "paragraph", text: "5 km menjadi meter" }, { type: "paragraph", text: "1 km = 1000 m" }, { type: "paragraph", text: "5 km = 5 × 1000 m" }, { type: "paragraph", text: "5 km = 5000 m" }] }, { blocks: [{ type: "heading", text:














      "📉 Konversi Satuan Kecil ke Besar" }, { type: "paragraph", text: "Jika berpindah ke satuan yang lebih besar, nilainya dibagi." }, { type: "paragraph", text: "Contoh:" }, { type: "paragraph", text: "3000 m menjadi km" }, { type: "paragraph", text: "1 km = 1000 m" }, { type: "paragraph", text: "3000 m ÷ 1000 = 3 km" }] }, { blocks: [{ type: "image", src:













      tanggasatuanImg }, { type: "paragraph", text: "Urutan awalan satuan yang sering digunakan:" }, { type: "paragraph", text: "kilo → hekto → deka → satuan dasar → desi → senti → mili" }, { type: "paragraph", text: "Turun satu langkah ×10" }, { type: "paragraph", text: "Naik satu langkah ÷10" }] }, { blocks: [{ type: "heading", text:











      "⚡ Konversi dalam Fisika" }, { type: "paragraph", text: "Contoh kecepatan:" }, { type: "paragraph", text: "72 km/jam harus diubah ke m/s." }, { type: "paragraph", text: "Karena:" }, { type: "paragraph", text: "1 km = 1000 m" }, { type: "paragraph", text: "1 jam = 3600 s" }, { type: "paragraph", text: "Maka:" }, { type: "paragraph", text: "72 km/jam = 20 m/s" }] }, { blocks: [{ type: "heading", text:















      "🧠 Tips Menghindari Kesalahan" }, { type: "paragraph", text: "Sebelum menghitung:" }, { type: "paragraph", text: "1. Perhatikan satuan awal" }, { type: "paragraph", text: "2. Tentukan satuan tujuan" }, { type: "paragraph", text: "3. Gunakan faktor konversi yang benar" }, { type: "paragraph", text: "4. Cek kembali apakah hasilnya masuk akal" }] }, { blocks: [{ type: "heading", text:











      "🎯 Manfaat Konversi Satuan" }, { type: "paragraph", text: "Konversi satuan membantu:" }, { type: "paragraph", text: "✅ Menyamakan satuan dalam perhitungan" }, { type: "paragraph", text: "✅ Menghindari kesalahan rumus" }, { type: "paragraph", text: "✅ Membuat data mudah dibandingkan" }] }, { blocks: [{ type: "heading", text:










      "✨ Inti Materi" }, { type: "paragraph", text: "Angka yang sama bisa memiliki tampilan satuan yang berbeda." }, { type: "paragraph", text: "Konversi satuan adalah 'bahasa penerjemah' dalam fisika yang memastikan setiap besaran berbicara dalam satuan yang sama sehingga rumus dapat bekerja dengan benar dan menghasilkan jawaban yang akurat." }] }, {










    link: "/materi/pengantar%20vektor", blocks: [{ type: "image", src: endchapterpengukuranImg, caption: "🚀 KLIK GAMBAR INI! Kamu bisa menuju ke portal berikutnya." }] }, { blocks: [{ type: "heading", text:



      "Referensi:" }, { type: "paragraph", text: "Halliday, Resnick & Walker. Fundamentals of Physics." }, { type: "paragraph", text: "Serway & Jewett. Physics for Scientists and Engineers." }, { type: "paragraph", text: "Young & Freedman. University Physics with Modern Physics." }, { type: "paragraph", text: "BIPM. The International System of Units (SI Brochure)." }, { type: "paragraph", text: "Kemendikbudristek RI. Buku Fisika SMA/MA Kelas X." }] }]









};

export default konversisatuan;