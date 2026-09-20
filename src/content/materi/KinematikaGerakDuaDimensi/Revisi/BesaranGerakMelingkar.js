const besaranGerakMelingkar = {
  title: "Besaran-Besaran Gerak Melingkar",
  slug: "besaran-besaran-gerak-melingkar",
  description: "Menghubungkan posisi sudut, radian, periode, dan frekuensi.",
  chapter: "🏀 Kinematika: Gerak Dua Dimensi",

  content: [
    {
      heading: "👀 Hook — Bagaimana Mengukur Putaran?",
      blocks: [
        { type: "paragraph", text: "Untuk roda dan jarum jam, menyatakan 'seperempat putaran' sering lebih bermakna daripada jarak lurus." },
      ]
    },
    {
      heading: "❓ Pertanyaan Besar",
      blocks: [
        { type: "paragraph", text: 'Bagaimana sudut dinyatakan dalam SI?' },
        { type: "paragraph", text: 'Bagaimana periode dan frekuensi menggambarkan gerak berulang?' },
      ]
    },
    {
      heading: "🧠 Penjelasan Konsep",
      blocks: [
        { type: "paragraph", text: 'Radian menghubungkan panjang busur dengan jari-jari. Periode adalah waktu satu putaran, frekuensi adalah banyak putaran tiap sekon.' },
        { type: "list", list: { type: "unordered", items: ['θ', ' ', '→', ' ', 's', 'u', 'd', 'u', 't'] } },
        { type: "list", list: { type: "unordered", items: ['s', ' ', '→', ' ', 'p', 'a', 'n', 'j', 'a', 'n', 'g', ' ', 'b', 'u', 's', 'u', 'r'] } },
        { type: "list", list: { type: "unordered", items: ['r', ' ', '→', ' ', 'j', 'a', 'r', 'i', '-', 'j', 'a', 'r', 'i'] } },
        { type: "list", list: { type: "unordered", items: ['T', ' ', '→', ' ', 'w', 'a', 'k', 't', 'u', ' ', 's', 'a', 't', 'u', ' ', 'p', 'u', 't', 'a', 'r', 'a', 'n'] } },
        { type: "list", list: { type: "unordered", items: ['f', ' ', '→', ' ', 'p', 'u', 't', 'a', 'r', 'a', 'n', ' ', 'p', 'e', 'r', ' ', 's', 'e', 'k', 'o', 'n'] } },
      ]
    },
    {
      heading: "👁️ Visualisasi Konsep",
      blocks: [
        { type: "paragraph", text: 'Gambarkan busur s pada lingkaran berjari-jari r dan sudut pusat θ.' },
      ]
    },
    {
      heading: "🔎 Analisis Konsep",
      blocks: [
        { type: "paragraph", text: 'Identifikasi jumlah putaran/sudut → ubah ke radian jika diperlukan → tentukan T atau f → gunakan hubungan yang sesuai.' },
      ]
    },
    {
      heading: "📐 Rumus",
      blocks: [
        { type: "equation", equation: '\\theta=\\frac{s}{r}' },
        { type: "equation", equation: '360^\\circ=2\\pi\\ rad' },
        { type: "equation", equation: 'T=\\frac1f' },
        { type: "equation", equation: 'f=\\frac1T' },
      ]
    },
    {
      heading: "🧮 Contoh Analisis",
      blocks: [
        { type: "paragraph", text: '120 putaran dalam 60 s memberi f=2 Hz dan T=0,5 s.' },
      ]
    },
    {
      heading: "🌍 Contoh Kehidupan",
      blocks: [
        { type: "paragraph", text: 'Kecepatan putar kipas, motor, roda, dan mesin sering dikaitkan dengan frekuensi atau periode.' },
      ]
    },
    {
      heading: "⚠️ Miskonsepsi",
      blocks: [
        { type: "paragraph", text: 'Radian bukan sekadar cara lain menulis derajat; radian adalah satuan sudut yang langsung terhubung dengan s/r.' },
      ]
    },
    {
      heading: "🌟 Fun Fact",
      blocks: [
        { type: "paragraph", text: 'Hubungan s=rθ bekerja langsung ketika θ dinyatakan dalam radian.' },
      ]
    },
    {
      heading: "✨ Inti Materi",
      blocks: [
        { type: "paragraph", text: "Periode menjawab 'berapa lama satu putaran?', frekuensi menjawab 'berapa putaran tiap sekon?'." },
      ]
    },
    {
      heading: "🎯 Quick Check",
      blocks: [
        { type: "quickCheck", data: { questions: [
          { question: 'Hubungan periode dan frekuensi adalah...', options: ['T=f', 'T=f²', 'T=1/f', 'T=2f', 'T=f/2'], answerIndex: 2 },
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
        { type: "paragraph", text: 'Sekarang kita hubungkan putaran dengan gerak titik pada lintasan: **Kecepatan Linear dan Kecepatan Sudut**.' }
      ]
    }
  ]
};

export default besaranGerakMelingkar;