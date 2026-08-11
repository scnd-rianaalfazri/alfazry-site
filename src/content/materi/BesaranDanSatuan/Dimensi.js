const dimensi = {
  title: 'Dimensi',
  slug: 'dimensi',
  description: 'Memahami dimensi besaran fisika dan menggunakannya untuk melihat struktur serta konsistensi persamaan.',
  chapter: "📏 Pengukuran",

  content: [
    {
      heading: '🔎 Hook — Apakah Rumus Bisa Diperiksa?',
      blocks: [
        { type: "paragraph", text: 'Bayangkan seseorang menulis rumus yang terlihat meyakinkan. Apakah kita bisa memeriksa apakah struktur rumus itu masuk akal?' },
      ]
    },

    {
      heading: '❓ Pertanyaan Besar',
      blocks: [
        { type: "paragraph", text: 'Bagaimana cara melihat "susunan" sebuah besaran dan mengecek konsistensi sebuah persamaan?' },
      ]
    },

    {
      heading: '🧩 Apa Itu Dimensi?',
      blocks: [
        { type: "paragraph", text: 'Dimensi menunjukkan jenis besaran dasar yang menyusun sebuah besaran fisika. Satuan menunjukkan standar ukur, sedangkan dimensi menunjukkan struktur dasar besaran.' },
      ]
    },

    {
      heading: '👀 Visualisasi Konsep',
      blocks: [
        { type: "paragraph", text: 'Bayangkan besaran turunan seperti sebuah resep. Dimensi membantu melihat bahan dasar apa saja yang menyusun resep tersebut.' },
      ]
    },

    {
      heading: '🧮 Contoh Dimensi Kecepatan',
      blocks: [
        { type: "paragraph", text: 'Kecepatan = jarak / waktu. Jarak memiliki dimensi [L], waktu [T], sehingga dimensi kecepatan adalah [L][T⁻¹].' },
      ]
    },

    {
      heading: '⚡ Contoh Dimensi Gaya',
      blocks: [
        { type: "paragraph", text: 'Gaya berkaitan dengan massa × percepatan. Massa → [M], percepatan → [L][T⁻²], sehingga gaya → [M][L][T⁻²].' },
      ]
    },

    {
      heading: '🧠 Analisis — Cek Konsistensi',
      blocks: [
        { type: "paragraph", text: 'Jika dua ruas persamaan memiliki dimensi berbeda, persamaan tersebut tidak konsisten secara dimensional. Analisis dimensi membantu menemukan kesalahan struktur, tetapi tidak selalu membuktikan rumus pasti benar.' },
      ]
    },

    {
      heading: '🌍 Contoh di Kehidupan',
      blocks: [
        { type: "paragraph", text: 'Kecepatan kendaraan memiliki struktur panjang per waktu. Karena itu satuan seperti m/s masuk akal untuk menyatakan kecepatan.' },
      ]
    },

    {
      heading: '⚠️ Miskonsepsi',
      blocks: [
        { type: "paragraph", text: 'Dimensi bukan sama dengan satuan. Kecepatan dapat dinyatakan m/s atau km/jam, tetapi dimensinya tetap [L][T⁻¹].' },
      ]
    },

    {
      heading: '💡 Fun Fact',
      blocks: [
        { type: "paragraph", text: 'Analisis dimensi dapat membantu menebak bentuk hubungan antarbesaran dalam model fisika.' },
      ]
    },

    {
      heading: '✨ Inti Materi',
      blocks: [
        { type: "paragraph", text: 'Dimensi menunjukkan struktur dasar sebuah besaran dan membantu memeriksa konsistensi dimensional persamaan.' },
      ]
    },

    {
      heading: "🚀 Next Mission",
      blocks: [
        { type: "paragraph", text: 'Kita sudah mengenal struktur besaran. Sekarang saatnya melihat bagaimana angka pengukuran benar-benar diperoleh.' },
        { type: "paragraph", text: '➡️ Selanjutnya: Pengukuran.' },
      ],
      link: '/materi/pengukuran'
    },
    {
      heading: "📚 Referensi",
      blocks: [
        { type: "paragraph", text: 'Halliday, Resnick & Walker. Fundamentals of Physics.' },
        { type: "paragraph", text: 'Serway & Jewett. Physics for Scientists and Engineers.' },
        { type: "paragraph", text: 'Young & Freedman. University Physics with Modern Physics.' },
        { type: "paragraph", text: 'Kemendikbudristek RI. Buku Fisika SMA/MA Kelas X.' },
      ]
    }
  ]
};

export default dimensi;
