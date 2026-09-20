const kecepatanLinearDanSudut = {
  title: "Kecepatan Linear dan Kecepatan Sudut",
  slug: "kecepatan-linear-dan-kecepatan-sudut",
  description: "Memahami dua cara membaca kecepatan pada gerak melingkar dan hubungan v=ωr.",
  chapter: "🏀 Kinematika: Gerak Dua Dimensi",

  content: [
    {
      heading: "👀 Hook — Tepi Roda Terasa Lebih Ngebut",
      blocks: [
        { type: "paragraph", text: 'Pada roda yang sama, titik di tepi menempuh lintasan lebih panjang daripada titik dekat poros dalam waktu yang sama.' },
      ]
    },
    {
      heading: "❓ Pertanyaan Besar",
      blocks: [
        { type: "paragraph", text: 'Apa beda kecepatan linear dan kecepatan sudut?' },
        { type: "paragraph", text: 'Mengapa dua titik pada roda memiliki v berbeda?' },
      ]
    },
    {
      heading: "🧠 Penjelasan Konsep",
      blocks: [
        { type: "paragraph", text: 'ω mengukur perubahan sudut terhadap waktu. v mengukur gerak sepanjang lintasan. Pada benda tegar yang sama, ω sama tetapi v bergantung pada r.' },
        { type: "list", list: { type: "unordered", items: ['r', ' ', 'k', 'e', 'c', 'i', 'l', ' ', '→', ' ', 'v', ' ', 'k', 'e', 'c', 'i', 'l'] } },
        { type: "list", list: { type: "unordered", items: ['r', ' ', 'b', 'e', 's', 'a', 'r', ' ', '→', ' ', 'v', ' ', 'b', 'e', 's', 'a', 'r'] } },
        { type: "list", list: { type: "unordered", items: ['ω', ' ', 's', 'a', 'm', 'a', ' ', 'p', 'a', 'd', 'a', ' ', 'b', 'e', 'n', 'd', 'a', ' ', 't', 'e', 'g', 'a', 'r'] } },
      ]
    },
    {
      heading: "👁️ Visualisasi Konsep",
      blocks: [
        { type: "paragraph", text: 'Tampilkan dua titik pada roda dengan panah v tangensial berbeda panjang dan panah ω yang sama secara konseptual.' },
      ]
    },
    {
      heading: "🔎 Analisis Konsep",
      blocks: [
        { type: "paragraph", text: 'Identifikasi v atau ω → cari r dan T/f bila perlu → gunakan v=ωr → cek satuan.' },
      ]
    },
    {
      heading: "📐 Rumus",
      blocks: [
        { type: "equation", equation: 'v=\\frac{s}{t}' },
        { type: "equation", equation: '\\omega=\\frac{\\Delta\\theta}{\\Delta t}' },
        { type: "equation", equation: 'v=\\omega r' },
        { type: "equation", equation: 'v=\\frac{2\\pi r}{T}=2\\pi fr' },
      ]
    },
    {
      heading: "🧮 Contoh Analisis",
      blocks: [
        { type: "paragraph", text: 'Jika r=0,5 m dan ω=20 rad/s, v=10 m/s.' },
      ]
    },
    {
      heading: "🌍 Contoh Kehidupan",
      blocks: [
        { type: "paragraph", text: 'Roda kendaraan, kipas, mesin, dan sistem transmisi rotasi.' },
      ]
    },
    {
      heading: "⚠️ Miskonsepsi",
      blocks: [
        { type: "paragraph", text: 'Tidak semua titik pada roda memiliki v linear sama. Yang sama adalah ω untuk benda tegar yang berputar bersama.' },
      ]
    },
    {
      heading: "🌟 Fun Fact",
      blocks: [
        { type: "paragraph", text: 'v=ωr menjelaskan mengapa titik lebih jauh dari pusat bergerak lebih cepat secara linear.' },
      ]
    },
    {
      heading: "✨ Inti Materi",
      blocks: [
        { type: "paragraph", text: 'Kecepatan sudut membaca putaran dari pusat; kecepatan linear membaca gerak sepanjang lintasan.' },
      ]
    },
    {
      heading: "🎯 Quick Check",
      blocks: [
        { type: "quickCheck", data: { questions: [
          { question: 'Jika ω sama dan r diperbesar, v akan...', options: ['mengecil', 'tetap', 'nol', 'membesar', 'acak'], answerIndex: 3 },
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
        { type: "paragraph", text: 'Arah kecepatan terus berubah. Sekarang kita cari konsekuensinya: **Percepatan Sentripetal**.' }
      ]
    }
  ]
};

export default kecepatanLinearDanSudut;