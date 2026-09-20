const pengantarGerakDuaDimensi = {
  title: "Pengantar Gerak Dua Dimensi",
  slug: "pengantar-gerak-dua-dimensi",
  description: "Membangun cara berpikir untuk membaca gerak yang berlangsung pada dua arah sekaligus.",
  chapter: "🏀 Kinematika: Gerak Dua Dimensi",

  content: [
    {
      heading: "👀 Hook — Satu Gerakan, Dua Arah",
      blocks: [
        { type: "paragraph", text: 'Pernah melihat bola ditendang miring? Dalam satu gerakan, bola bisa bergerak maju sekaligus naik, lalu turun kembali.' },
        { type: "paragraph", text: 'Akira tidak langsung mencari rumus. Ia mulai dengan mengamati lintasan dan bertanya: apa yang terjadi pada arah horizontal dan vertikal?' },
      ]
    },
    {
      heading: "❓ Pertanyaan Besar",
      blocks: [
        { type: "paragraph", text: 'Bagaimana satu benda bisa bergerak ke dua arah pada saat yang sama?' },
        { type: "paragraph", text: 'Bisakah gerak yang tampak rumit diurai menjadi dua gerak yang lebih sederhana?' },
      ]
    },
    {
      heading: "🧠 Penjelasan Konsep",
      blocks: [
        { type: "paragraph", text: 'Gerak dua dimensi adalah gerak benda yang posisi atau kecepatannya berubah pada dua arah dalam sebuah bidang.' },
        { type: "paragraph", text: 'Sumbu x dan y bukan dua gerakan yang terpisah. Keduanya adalah cara kita merepresentasikan satu gerakan agar lebih mudah dianalisis.' },
        { type: "list", list: { type: "unordered", items: ['➡️ x = horizontal', '⬆️ y = vertikal', '📍 posisi = (x,y)', '🧭 lintasan = perubahan posisi terhadap waktu'] } },
      ]
    },
    {
      heading: "👁️ Visualisasi Konsep",
      blocks: [
        { type: "paragraph", text: 'Bayangkan Akira menampilkan jejak gerak sebuah bola pada bidang koordinat. Setiap titik jejak memiliki nilai x dan y.' },
      ]
    },
    {
      heading: "🔎 Analisis Konsep",
      blocks: [
        { type: "paragraph", text: 'Gunakan pola: amati posisi → tentukan titik acuan → pilih arah positif → pisahkan informasi x dan y → gabungkan kembali untuk membaca lintasan.' },
      ]
    },
    {
      heading: "📐 Rumus Dasar",
      blocks: [
        { type: "paragraph", text: 'Pada tahap ini rumus bukan tujuan utama. Posisi dapat ditulis sebagai gabungan komponen horizontal dan vertikal.' },
        { type: "equation", equation: '\\vec r = x\\hat i + y\\hat j' },
      ]
    },
    {
      heading: "🏀 Contoh Kehidupan",
      blocks: [
        { type: "paragraph", text: 'Bola basket, tendangan sepak bola, drone, dan objek game 2D semuanya dapat dibaca melalui koordinat x-y.' },
      ]
    },
    {
      heading: "⚠️ Miskonsepsi",
      blocks: [
        { type: "paragraph", text: 'Gerak dua dimensi tidak selalu berarti lintasannya melengkung. Yang penting adalah posisi membutuhkan dua koordinat untuk dideskripsikan.' },
      ]
    },
    {
      heading: "🌟 Fun Fact",
      blocks: [
        { type: "paragraph", text: 'Game, robotika, navigasi, dan animasi komputer banyak menggunakan koordinat dan vektor untuk menentukan posisi serta arah gerak.' },
      ]
    },
    {
      heading: "✨ Inti Materi",
      blocks: [
        { type: "paragraph", text: 'Gerak dua dimensi menjadi lebih mudah ketika kita tidak mencoba membaca seluruh gerak sekaligus. Pecah menjadi komponen x dan y, analisis masing-masing, lalu hubungkan kembali.' },
      ]
    },
    {
      heading: "🎯 Quick Check",
      blocks: [
        { type: "quickCheck", data: { questions: [
          { question: 'Pada gerak dua dimensi, posisi benda dinyatakan dengan...', options: ['massa dan waktu', 'kelajuan dan percepatan', 'pasangan koordinat (x,y)', 'gaya dan momentum', 'suhu dan energi'], answerIndex: 2 },
          { question: 'Mengapa gerak diuraikan ke sumbu x dan y?', options: ['Agar benda lebih cepat', 'Agar analisis tiap arah lebih sederhana', 'Agar gravitasi hilang', 'Agar lintasan menjadi lurus', 'Agar massa berubah'], answerIndex: 1 },
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
        { type: "paragraph", text: 'Gerak sudah bisa kita baca dari posisi. Berikutnya kita belajar membedah satu vektor miring menjadi komponen horizontal dan vertikal: **Analisis Sumbu X dan Y**.' }
      ]
    }
  ]
};

export default pengantarGerakDuaDimensi;