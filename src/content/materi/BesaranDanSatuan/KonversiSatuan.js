const konversisatuan = {
  title: 'Konversi Satuan',
  slug: 'konversi satuan',
  description: 'Memahami cara mengubah satuan tanpa mengubah nilai fisik sebenarnya dan menerapkannya dalam perhitungan.',
  chapter: "📏 Pengukuran",

  content: [
    {
      heading: '🔄 Hook — 1 km dan 1000 m, Mana yang Lebih Panjang?',
      blocks: [
        { type: "paragraph", text: 'Keduanya menyatakan panjang yang sama. Yang berubah adalah satuannya.' },
      ]
    },

    {
      heading: '❓ Pertanyaan Besar',
      blocks: [
        { type: "paragraph", text: 'Bagaimana mengubah satuan tanpa mengubah nilai fisik yang sebenarnya?' },
      ]
    },

    {
      heading: '📐 Apa Itu Konversi Satuan?',
      blocks: [
        { type: "paragraph", text: 'Konversi satuan adalah proses mengubah suatu nilai dari satu satuan ke satuan lain yang setara. Contoh: 1 km = 1000 m.' },
      ]
    },

    {
      heading: '👀 Visualisasi Konsep',
      blocks: [
        { type: "paragraph", text: 'Bayangkan satu batang panjang yang sama. Jika satuannya dibuat lebih kecil, jumlah satuan yang diperlukan menjadi lebih banyak. Nilai fisiknya tetap sama.' },
      ]
    },

    {
      heading: '🧮 Faktor Konversi',
      blocks: [
        { type: "paragraph", text: 'Konversi dapat dilakukan dengan faktor pengali yang nilainya sama dengan 1. Contoh: 5 km × (1000 m / 1 km) = 5000 m.' },
      ]
    },

    {
      heading: '📈 Besar ke Kecil',
      blocks: [
        { type: "paragraph", text: 'Jika berpindah ke satuan yang lebih kecil, angka biasanya menjadi lebih besar. Contoh: 5 km = 5000 m.' },
      ]
    },

    {
      heading: '📉 Kecil ke Besar',
      blocks: [
        { type: "paragraph", text: 'Jika berpindah ke satuan yang lebih besar, angka biasanya menjadi lebih kecil. Contoh: 3000 m = 3 km.' },
      ]
    },

    {
      heading: '⚡ Analisis Contoh — Kecepatan',
      blocks: [
        { type: "paragraph", text: '72 km/jam diubah ke m/s menggunakan 1 km = 1000 m dan 1 jam = 3600 s. Hasilnya 72 km/jam = 20 m/s.' },
      ]
    },

    {
      heading: '🌍 Contoh di Kehidupan',
      blocks: [
        { type: "paragraph", text: 'Jarak perjalanan → km atau m. Kecepatan kendaraan → km/jam atau m/s. Ukuran benda kecil → mm, cm, atau m.' },
      ]
    },

    {
      heading: '⚠️ Miskonsepsi',
      blocks: [
        { type: "paragraph", text: 'Konversi bukan sekadar menggeser koma tanpa memahami hubungan satuan. Untuk besaran turunan seperti kecepatan, semua bagian satuan harus diperhatikan.' },
      ]
    },

    {
      heading: '💡 Fun Fact',
      blocks: [
        { type: "paragraph", text: 'Kesalahan satuan dapat mengubah hasil perhitungan secara drastis. Karena itu, menyamakan satuan adalah kebiasaan penting sebelum menggunakan rumus fisika.' },
      ]
    },

    {
      heading: '✨ Inti Materi',
      blocks: [
        { type: "paragraph", text: 'Konversi satuan mengubah cara penulisan suatu besaran tanpa mengubah nilai fisiknya. Gunakan hubungan satuan yang benar dan pastikan seluruh satuan konsisten.' },
      ]
    },

    {
      heading: "🚀 Next Mission",
      blocks: [
        { type: "paragraph", text: 'Kamu sudah memahami bagaimana fisika mengubah pengamatan menjadi data, menggunakan standar, membaca ketelitian, dan mengelola satuan.' },
        { type: "paragraph", text: '➡️ Berikutnya kita bisa membawa semua konsep itu ke Konsep di Dunia Nyata dan Eksplorasi Fenomena chapter.' },
      ],
      link: '/materi/konsep-di-dunia-nyata-besaran-dan-satuan'
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

export default konversisatuan;
