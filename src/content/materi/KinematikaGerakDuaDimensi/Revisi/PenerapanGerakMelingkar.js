const penerapanGerakMelingkar = {
  title: "Penerapan Gerak Melingkar dalam Kehidupan dan Teknologi",
  slug: "penerapan-gerak-melingkar-dalam-kehidupan-dan-teknologi",
  description: "Menghubungkan gerak melingkar dengan roda, mesin, kipas, wahana, dan sistem rotasi.",
  chapter: "🏀 Kinematika: Gerak Dua Dimensi",

  content: [
    {
      heading: "🌍 Hook — Roda Tidak Sekadar Berputar",
      blocks: [
        { type: "paragraph", text: 'Saat roda berputar, ada posisi sudut, kecepatan linear, dan perubahan arah kecepatan.' },
      ]
    },
    {
      heading: "❓ Pertanyaan Besar",
      blocks: [
        { type: "paragraph", text: 'Besaran apa yang perlu diamati pada sistem rotasi?' },
        { type: "paragraph", text: 'Mengapa radius penting?' },
      ]
    },
    {
      heading: "🧠 Contoh Penerapan",
      blocks: [
        { type: "list", list: { type: "unordered", items: ['🚲 roda sepeda', '🌀 kipas', '⚙️ mesin', '🎡 wahana', '🛰️ sistem rotasi'] } },
      ]
    },
    {
      heading: "👁️ Visualisasi Konsep",
      blocks: [
        { type: "paragraph", text: 'Tampilkan pusat rotasi, r, v tangensial, dan aₛ menuju pusat secara bersih dan ilmiah.' },
      ]
    },
    {
      heading: "🔎 Analisis Konsep",
      blocks: [
        { type: "paragraph", text: 'Identifikasi pusat → tentukan r → cari T/f/ω/v → tentukan arah aₛ → hubungkan dengan fungsi sistem.' },
      ]
    },
    {
      heading: "📐 Rumus",
      blocks: [
        { type: "equation", equation: 'v=\\omega r' },
        { type: "equation", equation: '\\omega=2\\pi f' },
        { type: "equation", equation: 'a_s=\\frac{v^2}{r}=\\omega^2r' },
      ]
    },
    {
      heading: "🧮 Contoh Analisis",
      blocks: [
        { type: "paragraph", text: 'Pada kipas, titik yang lebih jauh dari poros memiliki v linear lebih besar jika ω sama.' },
      ]
    },
    {
      heading: "⚠️ Miskonsepsi",
      blocks: [
        { type: "paragraph", text: 'Gerak melingkar bukan hanya tentang berputar. Perubahan arah kecepatan juga perlu dianalisis.' },
      ]
    },
    {
      heading: "🌟 Fun Fact",
      blocks: [
        { type: "paragraph", text: 'Sistem roda gigi, sabuk, dan poros memanfaatkan transmisi gerak rotasi dalam banyak mesin.' },
      ]
    },
    {
      heading: "✨ Inti Materi",
      blocks: [
        { type: "paragraph", text: 'Tanyakan tiga hal: seberapa cepat berputar, seberapa jauh dari pusat, dan bagaimana arah gerak berubah.' },
      ]
    },
    {
      heading: "🎯 Quick Check",
      blocks: [
        { type: "quickCheck", data: { questions: [
          { question: 'Pada gerak melingkar, aₛ berkaitan langsung dengan...', options: ['massa', 'jari-jari dan kecepatan', 'warna benda', 'suhu', 'volume'], answerIndex: 1 },
        ], scoring: [
          { min: 5, max: 5, emoji: "✨", title: "Konsep Terkunci", message: "Kamu sudah membaca konsep dengan baik." },
          { min: 3, max: 4, emoji: "🚀", title: "Hampir Terkunci", message: "Cek kembali bagian analisis yang masih samar." },
          { min: 0, max: 2, emoji: "🔎", title: "Amati Lagi", message: "Kembali ke visualisasi dan ikuti alurnya pelan-pelan." }
] } }
      ]
    },
    {
      heading: "🚀 Next Mission",
      blocks: [
        { type: "paragraph", text: 'Sekarang waktunya mengamati fenomena sendiri melalui **Eksplorasi Fenomena: Gerak Dua Dimensi**.' }
      ]
    }
  ]
};

export default penerapanGerakMelingkar;