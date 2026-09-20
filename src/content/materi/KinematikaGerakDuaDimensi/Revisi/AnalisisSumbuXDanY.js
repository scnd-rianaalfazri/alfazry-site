const analisissumbuxdany = {
  title: "Analisis Sumbu X dan Y",
  slug: "analisis-sumbu-x-dan-y",
  description: "Menganalisis posisi dan vektor gerak melalui komponen horizontal dan vertikal.",
  chapter: "🏀 Kinematika: Gerak Dua Dimensi",

  content: [
    {
      heading: "👀 Hook — Ke Mana Sebenarnya Benda Bergerak?",
      blocks: [
        { type: "paragraph", text: "Sebuah bola bergerak ke kanan-atas. Informasi '20 m/s' belum cukup. Kita juga perlu membaca arahnya." },
      ]
    },
    {
      heading: "❓ Pertanyaan Besar",
      blocks: [
        { type: "paragraph", text: 'Bagaimana sebuah vektor miring dapat dibaca sebagai dua komponen?' },
        { type: "paragraph", text: 'Bagaimana komponen itu membantu analisis gerak?' },
      ]
    },
    {
      heading: "🧭 Identifikasi Arah",
      blocks: [
        { type: "paragraph", text: 'Tentukan titik acuan dan arah positif sebelum menghitung.' },
        { type: "list", list: { type: "unordered", items: ['➡️ kanan = +x', '⬅️ kiri = −x', '⬆️ atas = +y', '⬇️ bawah = −y'] } },
      ]
    },
    {
      heading: "👁️ Visualisasi Konsep",
      blocks: [
        { type: "paragraph", text: 'Gambarkan v₀ sebagai sisi miring segitiga siku-siku. v₀x adalah sisi horizontal dan v₀y sisi vertikal.' },
      ]
    },
    {
      heading: "🔎 Strategi Analisis",
      blocks: [
        { type: "paragraph", text: 'Urutannya: gambar vektor → tentukan sudut → identifikasi sisi x dan y → gunakan sin/cos → cek kembali hasilnya.' },
      ]
    },
    {
      heading: "📐 Rumus",
      blocks: [
        { type: "paragraph", text: 'Komponen kecepatan awal untuk sudut θ terhadap horizontal:' },
        { type: "equation", equation: 'v_{0x}=v_0\\cos\\theta' },
        { type: "equation", equation: 'v_{0y}=v_0\\sin\\theta' },
        { type: "equation", equation: 'v=\\sqrt{v_x^2+v_y^2}' },
        { type: "equation", equation: '\\tan\\theta=\\frac{v_y}{v_x}' },
      ]
    },
    {
      heading: "🧮 Contoh Analisis",
      blocks: [
        { type: "paragraph", text: 'Untuk v₀=20 m/s dan θ=30°, v₀x≈17,32 m/s dan v₀y=10 m/s. Jika kedua komponen digabungkan, kita kembali pada satu vektor awal.' },
      ]
    },
    {
      heading: "🌍 Contoh Kehidupan",
      blocks: [
        { type: "paragraph", text: 'Shooting basket, tendangan sepak bola, lintasan drone, dan simulasi game menggunakan ide komponen arah.' },
      ]
    },
    {
      heading: "⚠️ Miskonsepsi",
      blocks: [
        { type: "paragraph", text: 'Komponen x dan y bukan dua kecepatan tambahan. Keduanya adalah representasi dari satu vektor yang sama.' },
      ]
    },
    {
      heading: "🌟 Fun Fact",
      blocks: [
        { type: "paragraph", text: 'Gerak diagonal dalam game 2D dapat dibangun dari perubahan x dan perubahan y.' },
      ]
    },
    {
      heading: "✨ Inti Materi",
      blocks: [
        { type: "paragraph", text: 'Jika arah gerak terlihat rumit, jangan langsung mencari rumus baru. Uraikan vektornya menjadi komponen x dan y.' },
      ]
    },
    {
      heading: "🎯 Quick Check",
      blocks: [
        { type: "quickCheck", data: { questions: [
          { question: 'Komponen horizontal dari v₀ adalah...', options: ['v₀ sin θ', 'v₀ cos θ', 'v₀ tan θ', 'v₀/g', 'v₀²'], answerIndex: 1 },
          { question: 'Tujuan menguraikan vektor adalah...', options: ['menghilangkan gravitasi', 'mempermudah analisis tiap arah', 'mengubah massa', 'membuat benda berhenti', 'menambah kecepatan'], answerIndex: 1 },
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
        { type: "paragraph", text: 'Komponen sudah kita pahami. Berikutnya kita lihat apa yang terjadi ketika keduanya bekerja bersamaan pada benda yang dilempar: **Gerak Parabola**.' }
      ]
    }
  ]
};

export default analisissumbuxdany;