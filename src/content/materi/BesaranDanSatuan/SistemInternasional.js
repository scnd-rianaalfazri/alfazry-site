import { caption, header, image, link, table } from "framer-motion/client"
import sisteminternasionalImg from "/src/assets/Materi/BesaranDanSatuan/SistemInternasional1.jpg"
import pengertiansisteminternasionalImg from "/src/assets/Materi/BesaranDanSatuan/SistemInternasional2.jpg"
import daftarsisteminternasionalImg from "/src/assets/Materi/BesaranDanSatuan/SistemInternasional3.jpg"
import awalansatuanImg from "/src/assets/Materi/BesaranDanSatuan/SistemInternasional4.jpg"
import nextmissionbesaranpokokdanturunan from "/src/assets/Materi/BesaranDanSatuan/SistemInternasional5.jpg"

const sisteminternasional = {
  title: "Sistem Internasional",
  slug: "sistem internasional",
  description: "Memahami sistem satuan standar yang digunakan dalam fisika agar hasil pengukuran dapat dibandingkan secara universal.",
  chapter: "📏 Pengukuran",
  content: [
    {
      image: sisteminternasionalImg,
      caption: "Sistem internasional dalam ilmu pengetahuan",
      body: [
        "Dalam fisika, hasil pengukuran harus bisa dipahami oleh semua orang di mana pun berada.",
        "",
        "Bayangkan seorang ilmuwan di Indonesia mengukur panjang suatu benda, lalu ilmuwan di negara lain membaca hasilnya.",
        "",
        "Mereka membutuhkan bahasa pengukuran yang sama.",
        "",
        "Bahasa tersebut adalah Sistem Internasional atau SI."
      ]
    },

    {
      image: pengertiansisteminternasionalImg,
      caption: "Apa itu sistem internasional?",
      body: [
        "Sistem Internasional (SI) adalah sistem satuan standar yang digunakan secara global dalam ilmu pengetahuan dan teknologi.",
        "",
        "SI dibuat agar pengukuran menjadi:",
        "✅ Seragam",
        "✅ Mudah dibandingkan",
        "✅ Tidak membingungkan"
      ]
    },

    {
      image: daftarsisteminternasionalImg,
      caption: "Tujuh besaran pokok SI dalam fisika",
    },

    {
      heading: "Definisi Ketentuan Sistem Internasional",
      table: {
        headers: ["Besaran", "Satuan", "Definisi"],
        rows: [
          ["Panjang (l)", "meter (m)", "Jarak yang ditempuh oleh cahaya dalam ruang hampa selama selang waktu 1/299.792,458 sekon."],
          ["Massa (m)", "kilogram (kg)", "Massa silinder campuran logam platina-iridium yang disimpan di Lembaga Internasional Berat dan Ukuran di Serves, Prancis."],
          ["Waktu (t)", "sekon (s)", "Selang waktu terjadinya 9.192.631.770 getaran dari radiasi elektromagnetik yang dipancarkan oleh atom Cesium-133 dalam transisi antara dua tingkat energi dalam pada keadaan dasar."],
          ["Suhu (T)", "Kelvin (K)", "1/273,16 kali suhu termodinamika titik tripel air, yaitu ketika air murni berada pada keseimbangan dengan es dan uap jenuhnya."],
          ["Intensitas Cahaya (I)", "Candela (Cd)", "Intensitas sumber cahaya dengan frekuensi 5,4 x 10¹⁴ yang memancarkan radiasi 1/683 Watt per steradian."],
          ["Jumlah Zat (n)", "Mole (mol)", "Jumlah zat yang mengandung zat elementer (atom, molekul atau ion) sebanyak atom yang terdapat pada 12 gram istop Karbon C-12."],
          ["Kuat Arus (I)", "Ampere (A)", "Arus listrik apabila mengalir melalui dua kawat konduktor sejajar dan terpisah sejauh 1 meter akan menghasilkan gaya sebesar 2 x 10⁻⁷ N tiap meternya."]
        ]
      },
    },

    {
      heading: "Ketentuan Sistem Internasional",
      body: [
        "Sistem ini disepakati pada konferensi umum ke-11 pada tahun 1960 tentang Berat dan Ukuran, yang diadakan di Paris.",
        "",
        "Satuan Internasional yang sudah ditetapkan oleh para ilmuan memiliki ketetapan diantaranya:",
      ],
      list: {
        type: "unordered",
        items: [
        "Mempunyai nilai tetap, tidak berubah karena apapun.",
        "Bersifat umum.",
        "Mudah ditiru dan diperbanyak.",
        "Mudah diubah atau dikonversi ke satuan lain.",
      ]
      },
    },
    {
      heading: "⚖️ Kenapa Kilogram, Meter, dan Sekon Penting?",
      body: [
        "Hampir semua konsep fisika dibangun dari besaran dasar tersebut.",
        "",
        "Contoh:",
        "Kecepatan membutuhkan panjang dan waktu.",
        "Gaya membutuhkan massa, panjang, dan waktu.",
        "",
        "Jadi, besaran pokok seperti 'blok bangunan' untuk membuat konsep fisika yang lebih kompleks."
      ]
    },

    {
      image: awalansatuanImg,
      caption: "Infografis awalan satuan SI",
      body: [
        "Dalam fisika, nilai yang diukur bisa sangat besar atau sangat kecil.",
        "",
        "Karena itu digunakan awalan satuan untuk mempermudah penulisan.",
        "",
        "Contoh:",
        "kilo (k) = 1000 kali",
        "centi (c) = 1/100",
        "mili (m) = 1/1000",
        "mikro (μ) = 1/1.000.000",
        "",
        "Sebenarnya, tabel prefix itu banyak, namun tidak semua dicantumkan di dalam infografis ini ya.",
        "Kalau mau lebih lengkap, bisa dilihat di web ini, ya! ➡️ BIPM. The Internationa System of Units",
      ]
    },
    
    {
      heading: "✨ Inti Materi",
      body: [
        "SI adalah standar bahasa pengukuran dalam fisika.",
        "",
        "Dengan SI, hasil pengukuran dari berbagai tempat tetap dapat dipahami dan dibandingkan."
      ]
    },

    {
      image: nextmissionbesaranpokokdanturunan,
      caption: "🚀 KLIK GAMBAR INI! Kamu bisa menuju ke portal berikutnya.",
      link: "/materi/besaran%20pokok%20dan%20turunan",
      body: [
        "Kita sudah mengenal satuan dasar.",
        "",
        "Sekarang pertanyaannya:",
        "Bagaimana besaran seperti luas, volume, kecepatan, dan gaya bisa terbentuk?",
        "",
        "➡️ Next, kita menuju portal: Besaran Pokok dan Besaran Turunan."
      ]
    },

    {
      heading: "Referensi:",
      body: [
        "Serway & Jewett. Physics for Scientists and Engineers.",
        "Halliday, Resnick & Walker. Fundamentals of Physics.",
        "BIPM. The International System of Units (SI Brochure).",
        "Kemendikbudristek RI. Buku Fisika SMA/MA Kelas X."
      ]
    }
  ]
}

export default sisteminternasional