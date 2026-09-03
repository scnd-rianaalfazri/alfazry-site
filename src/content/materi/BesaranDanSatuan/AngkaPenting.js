import img1 from "/src/assets/Materi/BesaranDanSatuan/portal-notasi-ilmiah.png"
import img2 from "/src/assets/Materi/BesaranDanSatuan/angka-penting1.png"

const angkaPenting = {
  title: "Angka Penting",
  slug: "angka-penting",
  description: "Memahami makna angka penting dan cara menuliskan hasil pengukuran sesuai ketelitian data.",
  chapter: "📏 Pengukuran",

  content: [
    {
      blocks: [
        {
          type: "image",
          src: img2
        },
        { 
          type: "paragraph", 
          text: "Sebuah penggaris menghasilkan panjang 12,3 cm. Menambahkan banyak digit tidak membuat alat menjadi lebih teliti."
        },
      ]
    },
    {
      heading: "❓ Pertanyaan Besar",
      blocks: [
        { 
          type: "paragraph", 
          text: "Bagaimana menuliskan hasil pengukuran tanpa melebih-lebihkan ketelitiannya?" 
        },
      ]
    },
    {
      heading: "🧠 Apa Itu Angka Penting?",
      blocks: [
        { 
          type: "paragraph", 
          text: "Angka penting adalah digit-digit pada hasil pengukuran yang bermakna dalam menunjukkan ketelitian hasil tersebut."
        },
      ]
    },
    {
      heading: "👀 Visualisasi Konsep",
      blocks: [
        { 
          type: "paragraph", 
          text: "Bayangkan Amara membaca skala alat. Digit yang dapat didukung oleh pembacaan alat menjadi bagian dari informasi pengukuran. Digit tambahan yang tidak didukung alat dapat menyesatkan."
        },
      ]
    },
    {
      heading: "📏 Contoh",
      blocks: [
        { 
          type: "paragraph", 
          text: "Hasil pengukuran 12,3 cm tidak seharusnya ditulis menjadi 12,300000 cm hanya agar terlihat lebih presisi."
        },
      ]
    },
    {
      heading: "🧮 Pembulatan",
      blocks: [
        { 
          type: "paragraph", 
          text: "Pembulatan digunakan agar hasil perhitungan sesuai dengan tingkat ketelitian data. Jika digit berikutnya lebih dari 5, dibulatkan naik; jika kurang dari 5, dibulatkan turun. Untuk kasus tepat 5, gunakan konvensi pembulatan yang konsisten."
          },
      ]
    },
    {
      heading: "🧠 Analisis",
      blocks: [
        { 
          type: "paragraph", 
          text: "Angka penting bukan sekadar menghitung jumlah digit. Tujuan utamanya adalah menjaga komunikasi data agar tidak memberikan klaim ketelitian yang berlebihan."
        },
      ]
    },
    {
      heading: "🌍 Contoh di Kehidupan",
      blocks: [
        { 
          type: "paragraph", 
          text: "Saat mencatat panjang, massa, atau hasil eksperimen, jumlah digit yang ditulis harus sesuai dengan informasi yang benar-benar didukung oleh pengukuran."
        },
      ]
    },
    {
      heading: "⚠️ Miskonsepsi",
      blocks: [
        { 
          type: "paragraph", 
          text: "Lebih banyak digit tidak selalu berarti lebih akurat. Digit yang tidak didukung pengukuran justru dapat menyesatkan."
        },
      ]
    },
    {
      heading: "🌟 *Fun Fact*",
      blocks: [
        { 
          type: "paragraph", 
          text: "Angka penting adalah salah satu cara fisika 'jujur' terhadap keterbatasan pengukuran." 
        },
      ]
    },
    {
      heading: "✨ Inti Materi",
      blocks: [
        { 
          type: "paragraph", 
          text: "Angka penting membantu menyatakan hasil pengukuran sesuai tingkat ketelitiannya."
        },
      ]
    },
    {
      blocks: [
        { 
          type: "paragraph", 
          text: "Sekarang kita tahu bagaimana menjaga makna digit. Lalu bagaimana jika angkanya sangat besar atau sangat kecil?"
        },
        {
          type: "image",
          src: img1,
          link: "/materi/notasi-ilmiah",
          caption: "🚀 Kamu bisa KLIK GAMBAR INI untuk menuju portal selanjutnya",
        }
      ]
    }
  ]
};

export default angkaPenting;
