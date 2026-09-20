const pengertianGerakParabola = {
  title: "Pengertian Gerak Parabola",
  slug: "pengertian-gerak-parabola",
  description: "Mengenal gerak parabola sebagai gabungan gerak horizontal dan vertikal dalam model ideal.",
  chapter: "🏀 Kinematika: Gerak Dua Dimensi",

  content: [
    {
      heading: "👀 Hook — Mengapa Bola Membentuk Lintasan Melengkung?",
      blocks: [
        { type: "paragraph", text: 'Bola yang dilempar miring bergerak maju sekaligus naik, mencapai puncak, lalu turun. Jejaknya membentuk lintasan yang dapat dimodelkan sebagai parabola.' },
      ]
    },
    {
      heading: "❓ Pertanyaan Besar",
      blocks: [
        { type: "paragraph", text: 'Mengapa satu benda dapat bergerak maju sekaligus naik-turun?' },
        { type: "paragraph", text: 'Apa yang terjadi pada arah horizontal dan vertikal?' },
      ]
    },
    {
      heading: "🧠 Penjelasan Konsep",
      blocks: [
        { type: "paragraph", text: 'Gerak parabola adalah gerak benda dengan kecepatan awal membentuk sudut terhadap horizontal, kemudian bergerak di bawah pengaruh gravitasi. Dalam model ideal, hambatan udara diabaikan.' },
        { type: "list", list: { type: "unordered", items: ['➡', '️', ' ', 'h', 'o', 'r', 'i', 'z', 'o', 'n', 't', 'a', 'l', ':', ' ', 'a', 'ₓ', '=', '0'] } },
        { type: "list", list: { type: "unordered", items: ['⬆', '️', ' ', 'v', 'e', 'r', 't', 'i', 'k', 'a', 'l', ':', ' ', 'a', 'ᵧ', '=', '−', 'g'] } },
        { type: "list", list: { type: "unordered", items: ['🟣', ' ', 'g', 'a', 'b', 'u', 'n', 'g', 'a', 'n', ':', ' ', 'l', 'i', 'n', 't', 'a', 's', 'a', 'n', ' ', 'p', 'a', 'r', 'a', 'b', 'o', 'l', 'a'] } },
      ]
    },
    {
      heading: "👁️ Visualisasi Konsep",
      blocks: [
        { type: "paragraph", text: 'Akira menampilkan jejak titik posisi bola pada bidang x-y, lalu memisahkan panah kecepatan menjadi komponen horizontal dan vertikal.' },
      ]
    },
    {
      heading: "🔎 Strategi Analisis",
      blocks: [
        { type: "paragraph", text: 'Tentukan v₀ dan θ → uraikan v₀ → analisis x dan y → gabungkan posisi pada waktu yang sama.' },
      ]
    },
    {
      heading: "📐 Rumus",
      blocks: [
        { type: "paragraph", text: 'Model ideal menggunakan:' },
        { type: "equation", equation: 'v_{0x}=v_0\\cos\\theta' },
        { type: "equation", equation: 'v_{0y}=v_0\\sin\\theta' },
        { type: "equation", equation: 'x=v_{0x}t' },
        { type: "equation", equation: 'y=v_{0y}t-\\frac12gt^2' },
      ]
    },
    {
      heading: "🧮 Contoh Analisis",
      blocks: [
        { type: "paragraph", text: 'Untuk v₀=20 m/s dan θ=30°, komponen awalnya v₀x≈17,32 m/s dan v₀y=10 m/s.' },
      ]
    },
    {
      heading: "🌍 Contoh Kehidupan",
      blocks: [
        { type: "paragraph", text: 'Lemparan bola, tendangan melambung, pancaran air, dan simulasi proyektil dapat didekati dengan model ini.' },
      ]
    },
    {
      heading: "⚠️ Miskonsepsi",
      blocks: [
        { type: "paragraph", text: 'Di titik tertinggi benda tidak berhenti total. Yang nol sesaat adalah komponen kecepatan vertikal.' },
      ]
    },
    {
      heading: "🌟 Fun Fact",
      blocks: [
        { type: "paragraph", text: 'Lintasan nyata dapat menyimpang dari parabola ideal karena hambatan udara, angin, dan rotasi benda.' },
      ]
    },
    {
      heading: "✨ Inti Materi",
      blocks: [
        { type: "paragraph", text: 'Gerak parabola dapat dipahami sebagai gerak horizontal dan vertikal yang terjadi bersamaan.' },
      ]
    },
    {
      heading: "🎯 Quick Check",
      blocks: [
        { type: "quickCheck", data: { questions: [
          { question: 'Pada model ideal, percepatan horizontal...', options: ['g', '0', 'v₀', 'r', 'ω'], answerIndex: 1 },
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
        { type: "paragraph", text: 'Sekarang kita bedah gerak tersebut dari waktu ke waktu melalui **Gerak Horizontal dan Vertikal**.' }
      ]
    }
  ]
};

export default pengertianGerakParabola;