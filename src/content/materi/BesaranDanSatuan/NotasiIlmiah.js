const notasiilmiah = {
  title: 'Notasi Ilmiah',
  slug: 'notasi ilmiah',
  description: 'Memahami cara menuliskan bilangan sangat besar atau sangat kecil secara ringkas menggunakan notasi ilmiah.',
  chapter: "📏 Pengukuran",

  content: [
    {
      heading: '🌌 Hook — Bagaimana Menulis Angka yang Terlalu Panjang?',
      blocks: [
        { type: "paragraph", text: 'Jarak astronomis dan ukuran mikroskopis dapat menghasilkan angka dengan banyak nol. Apakah kita harus menulis semuanya dalam bentuk biasa?' },
      ]
    },

    {
      heading: '❓ Pertanyaan Besar',
      blocks: [
        { type: "paragraph", text: 'Bagaimana menulis angka sangat besar atau sangat kecil agar ringkas dan tetap bermakna?' },
      ]
    },

    {
      heading: '🔬 Apa Itu Notasi Ilmiah?',
      blocks: [
        { type: "paragraph", text: 'Notasi ilmiah menuliskan bilangan dalam bentuk a × 10ⁿ. Nilai a berada antara 1 dan kurang dari 10, sedangkan n adalah bilangan bulat.' },
      ]
    },

    {
      heading: '👀 Visualisasi Konsep',
      blocks: [
        { type: "paragraph", text: 'Untuk bilangan besar, koma digeser ke kiri sehingga terbentuk angka antara 1 dan 10; jumlah pergeseran menjadi pangkat positif. Untuk bilangan kecil, koma digeser ke kanan; jumlah pergeseran menjadi pangkat negatif.' },
      ]
    },

    {
      heading: '📈 Contoh Bilangan Besar',
      blocks: [
        { type: "paragraph", text: '300.000.000 m = 3 × 10⁸ m. Koma bergeser 8 tempat ke kiri.' },
      ]
    },

    {
      heading: '📉 Contoh Bilangan Kecil',
      blocks: [
        { type: "paragraph", text: '0,0000012 m = 1,2 × 10⁻⁶ m. Koma bergeser 6 tempat ke kanan.' },
      ]
    },

    {
      heading: '🧠 Analisis',
      blocks: [
        { type: "paragraph", text: 'Pangkat positif berkaitan dengan faktor 10 yang besar, sedangkan pangkat negatif menunjukkan faktor yang lebih kecil dari satu.' },
      ]
    },

    {
      heading: '🌍 Contoh di Kehidupan',
      blocks: [
        { type: "paragraph", text: 'Massa Bumi dapat ditulis sekitar 5,97 × 10²⁴ kg. Ukuran mikroskopis juga dapat ditulis dengan pangkat negatif.' },
      ]
    },

    {
      heading: '⚠️ Miskonsepsi',
      blocks: [
        { type: "paragraph", text: 'Pangkat negatif tidak berarti nilai akhirnya negatif. Contoh 10⁻³ = 0,001, yaitu bilangan positif yang lebih kecil dari satu.' },
      ]
    },

    {
      heading: '💡 Fun Fact',
      blocks: [
        { type: "paragraph", text: 'Notasi ilmiah memungkinkan skala partikel dan skala astronomis ditulis dengan pola yang sama.' },
      ]
    },

    {
      heading: '✨ Inti Materi',
      blocks: [
        { type: "paragraph", text: 'Notasi ilmiah adalah cara ringkas untuk menuliskan bilangan sangat besar atau sangat kecil. Kuncinya adalah posisi koma dan tanda pangkat 10.' },
      ]
    },

    {
      heading: "🚀 Next Mission",
      blocks: [
        { type: "paragraph", text: 'Kita sudah bisa menulis angka dengan lebih ringkas. Sekarang saatnya menerjemahkan satuan dari satu bentuk ke bentuk lainnya.' },
        { type: "paragraph", text: '➡️ Selanjutnya: Konversi Satuan.' },
      ],
      link: '/materi/konversi%20satuan'
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

export default notasiilmiah;
