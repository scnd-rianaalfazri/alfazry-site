const penerapangerakParabola = {
  title: "Penerapan Gerak Parabola dalam Kehidupan dan Teknologi",
  slug: "penerapan-gerak-parabola-dalam-kehidupan-dan-teknologi",
  description: "Menghubungkan model gerak parabola dengan olahraga, pancaran air, dan simulasi.",
  chapter: "🏀 Kinematika: Gerak Dua Dimensi",

  content: [
    {
      heading: "🌍 Hook — Rumus yang Ada di Sekitar Kita",
      blocks: [
        { type: "paragraph", text: 'Bola basket, tendangan melambung, dan pancaran air tampak berbeda, tetapi semuanya dapat dianalisis melalui perubahan posisi terhadap waktu.' },
      ]
    },
    {
      heading: "❓ Pertanyaan Besar",
      blocks: [
        { type: "paragraph", text: 'Di mana kita dapat mengamati gerak parabola?' },
        { type: "paragraph", text: 'Kapan model ideal cocok digunakan?' },
      ]
    },
    {
      heading: "🧠 Contoh Penerapan",
      blocks: [
        { type: "list", list: { type: "unordered", items: ['🏀 basket → lintasan bola', '⚽ sepak bola → tendangan melambung', '💦 air → pancaran', '🎮 simulasi → posisi dihitung dari x dan y'] } },
      ]
    },
    {
      heading: "👁️ Visualisasi Konsep",
      blocks: [
        { type: "paragraph", text: 'Akira menggunakan motion tracker untuk menampilkan titik-titik posisi pada bidang x-y dan membandingkan model ideal dengan lintasan nyata.' },
      ]
    },
    {
      heading: "🔎 Analisis Konsep",
      blocks: [
        { type: "paragraph", text: 'Amati → identifikasi x dan y → cek asumsi → gunakan model → bandingkan prediksi dengan fenomena.' },
      ]
    },
    {
      heading: "📐 Rumus yang Relevan",
      blocks: [
        { type: "equation", equation: 'x=v_0\\cos\\theta\\,t' },
        { type: "equation", equation: 'y=v_0\\sin\\theta\\,t-\\frac12gt^2' },
      ]
    },
    {
      heading: "🧮 Contoh Analisis",
      blocks: [
        { type: "paragraph", text: 'Lintasan dari video dapat dibandingkan dengan model untuk melihat apakah hambatan udara atau faktor lain cukup besar untuk diperhitungkan.' },
      ]
    },
    {
      heading: "⚠️ Miskonsepsi",
      blocks: [
        { type: "paragraph", text: 'Model parabola ideal bukan berarti semua lintasan nyata harus parabola sempurna.' },
      ]
    },
    {
      heading: "🌟 Fun Fact",
      blocks: [
        { type: "paragraph", text: 'Analisis video dapat membantu atlet mempelajari sudut pelepasan dan lintasan benda.' },
      ]
    },
    {
      heading: "✨ Inti Materi",
      blocks: [
        { type: "paragraph", text: 'Penerapan fisika berarti menggunakan model untuk membuat prediksi lalu membandingkannya dengan dunia nyata.' },
      ]
    },
    {
      heading: "🎯 Quick Check",
      blocks: [
        { type: "quickCheck", data: { questions: [
          { question: 'Dalam model gerak parabola ideal, hambatan udara biasanya...', options: ['diperbesar', 'diabaikan', 'menjadi gravitasi', 'menjadi nol massa', 'selalu dominan'], answerIndex: 1 },
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
        { type: "paragraph", text: 'Sekarang kita lakukan hal yang sama pada gerak melingkar dan sistem rotasi.' }
      ]
    }
  ]
};

export default penerapangerakParabola;