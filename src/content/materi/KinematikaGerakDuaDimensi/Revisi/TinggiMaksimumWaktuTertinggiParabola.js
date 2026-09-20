const tinggiMaksimumDanWaktuTertinggi = {
  title: "Tinggi Maksimum dan Waktu Mencapai Titik Tertinggi",
  slug: "tinggi-maksimum-dan-waktu-mencapai-titik-tertinggi",
  description: "Menganalisis kondisi vᵧ=0 pada titik tertinggi dan menentukan waktu serta tinggi maksimum.",
  chapter: "🏀 Kinematika: Gerak Dua Dimensi",

  content: [
    {
      heading: "👀 Hook — Berhenti Naik, Apakah Berhenti Bergerak?",
      blocks: [
        { type: "paragraph", text: "Bola seperti berhenti sesaat di puncak. Tetapi 'berhenti naik' tidak sama dengan 'berhenti bergerak'." },
      ]
    },
    {
      heading: "❓ Pertanyaan Besar",
      blocks: [
        { type: "paragraph", text: 'Apa yang terjadi pada vᵧ di puncak?' },
        { type: "paragraph", text: 'Bagaimana menentukan waktu dan tinggi maksimum?' },
      ]
    },
    {
      heading: "🧠 Penjelasan Konsep",
      blocks: [
        { type: "paragraph", text: 'Di titik tertinggi, vᵧ=0 sesaat. vₓ tetap ada pada model ideal.' },
        { type: "list", list: { type: "unordered", items: ['n', 'a', 'i', 'k', ' ', '→', ' ', 'v', 'ᵧ', ' ', 'p', 'o', 's', 'i', 't', 'i', 'f'] } },
        { type: "list", list: { type: "unordered", items: ['p', 'u', 'n', 'c', 'a', 'k', ' ', '→', ' ', 'v', 'ᵧ', '=', '0'] } },
        { type: "list", list: { type: "unordered", items: ['t', 'u', 'r', 'u', 'n', ' ', '→', ' ', 'v', 'ᵧ', ' ', 'n', 'e', 'g', 'a', 't', 'i', 'f'] } },
      ]
    },
    {
      heading: "👁️ Visualisasi Konsep",
      blocks: [
        { type: "paragraph", text: 'Tampilkan lintasan dan panah v: di puncak panah vertikal hilang sesaat, tetapi panah horizontal tetap ada.' },
      ]
    },
    {
      heading: "🔎 Strategi Analisis",
      blocks: [
        { type: "paragraph", text: 'Gunakan kondisi puncak vᵧ=0 → cari t_maks → masukkan t_maks ke y(t) untuk memperoleh H_maks.' },
      ]
    },
    {
      heading: "📐 Rumus",
      blocks: [
        { type: "equation", equation: 't_{maks}=\\frac{v_0\\sin\\theta}{g}' },
        { type: "equation", equation: 'H_{maks}=\\frac{v_0^2\\sin^2\\theta}{2g}' },
      ]
    },
    {
      heading: "🧮 Contoh Analisis",
      blocks: [
        { type: "paragraph", text: 'v₀=20 m/s, θ=30°, g=10 m/s² menghasilkan t_maks=1 s dan H_maks=5 m.' },
      ]
    },
    {
      heading: "🌍 Contoh Kehidupan",
      blocks: [
        { type: "paragraph", text: 'Titik tertinggi berguna untuk memperkirakan apakah bola melewati objek atau mencapai ketinggian tertentu.' },
      ]
    },
    {
      heading: "⚠️ Miskonsepsi",
      blocks: [
        { type: "paragraph", text: 'Benda tidak berhenti total di puncak. Hanya vᵧ yang nol sesaat.' },
      ]
    },
    {
      heading: "🌟 Fun Fact",
      blocks: [
        { type: "paragraph", text: 'Grafik vᵧ terhadap waktu pada model ideal berbentuk garis lurus karena percepatan vertikal konstan.' },
      ]
    },
    {
      heading: "✨ Inti Materi",
      blocks: [
        { type: "paragraph", text: 'Kunci analisis puncak adalah kondisi vᵧ=0, bukan v=0.' },
      ]
    },
    {
      heading: "🎯 Quick Check",
      blocks: [
        { type: "quickCheck", data: { questions: [
          { question: 'Pada titik tertinggi, yang bernilai nol adalah...', options: ['v total', 'vₓ', 'vᵧ', 'g', 'massa'], answerIndex: 2 },
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
        { type: "paragraph", text: 'Setelah mengetahui puncak, kita lanjut ke dua pertanyaan besar: **berapa lama di udara dan seberapa jauh benda mendarat?**' }
      ]
    }
  ]
};

export default tinggiMaksimumDanWaktuTertinggi;