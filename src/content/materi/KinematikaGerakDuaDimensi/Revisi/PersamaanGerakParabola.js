const persamaanGerakParabola = {
  title: "Persamaan Gerak Parabola",
  slug: "persamaan-gerak-parabola",
  description: "Menyusun persamaan posisi dan kecepatan gerak parabola dari komponen x dan y.",
  chapter: "🏀 Kinematika: Gerak Dua Dimensi",

  content: [
    {
      heading: "👀 Hook — Bisakah Kita Memprediksi Posisi Bola?",
      blocks: [
        { type: "paragraph", text: 'Jika v₀, θ, g, dan waktu diketahui, posisi bola dapat diprediksi tanpa harus menebak dari gambar.' },
      ]
    },
    {
      heading: "❓ Pertanyaan Besar",
      blocks: [
        { type: "paragraph", text: 'Bagaimana posisi x dan y dihitung dari waktu?' },
        { type: "paragraph", text: 'Bagaimana persamaan itu menggambarkan lintasan?' },
      ]
    },
    {
      heading: "🧠 Penjelasan Konsep",
      blocks: [
        { type: "paragraph", text: 'Persamaan dibangun dari dua model: gerak horizontal tanpa percepatan dan gerak vertikal dengan percepatan gravitasi.' },
      ]
    },
    {
      heading: "👁️ Visualisasi Konsep",
      blocks: [
        { type: "paragraph", text: 'x(t) memberi posisi mendatar, y(t) memberi posisi vertikal. Pasangan keduanya menghasilkan satu titik pada lintasan.' },
      ]
    },
    {
      heading: "🔎 Strategi Analisis",
      blocks: [
        { type: "paragraph", text: 'Tentukan data → cari v₀x dan v₀y → hitung x(t) → hitung y(t) → baca posisi (x,y).' },
      ]
    },
    {
      heading: "📐 Rumus",
      blocks: [
        { type: "equation", equation: 'x=v_0\\cos\\theta\\,t' },
        { type: "equation", equation: 'y=v_0\\sin\\theta\\,t-\\frac12gt^2' },
        { type: "equation", equation: 'v_x=v_0\\cos\\theta' },
        { type: "equation", equation: 'v_y=v_0\\sin\\theta-gt' },
      ]
    },
    {
      heading: "🧮 Contoh Analisis",
      blocks: [
        { type: "paragraph", text: 'v₀=20 m/s, θ=30°, g=10 m/s², t=1 s menghasilkan posisi sekitar (17,32 m, 5 m).' },
      ]
    },
    {
      heading: "🌍 Contoh Kehidupan",
      blocks: [
        { type: "paragraph", text: 'Persamaan ini dapat menjadi dasar simulasi lintasan, animasi fisika, dan prediksi posisi proyektil.' },
      ]
    },
    {
      heading: "⚠️ Miskonsepsi",
      blocks: [
        { type: "paragraph", text: 'Persamaan bukan sekadar tempat memasukkan angka. Setiap suku mewakili kontribusi fisika tertentu.' },
      ]
    },
    {
      heading: "🌟 Fun Fact",
      blocks: [
        { type: "paragraph", text: 'Memasukkan banyak nilai t ke persamaan dapat menghasilkan titik-titik yang membentuk parabola secara real-time.' },
      ]
    },
    {
      heading: "✨ Inti Materi",
      blocks: [
        { type: "paragraph", text: 'Persamaan gerak parabola lahir dari konsep: uraikan vektor → analisis x dan y → gunakan waktu yang sama.' },
      ]
    },
    {
      heading: "🎯 Quick Check",
      blocks: [
        { type: "quickCheck", data: { questions: [
          { question: 'Persamaan posisi horizontal yang benar adalah...', options: ['x=v₀ sinθ t', 'x=v₀ cosθ t', 'x=gt', 'x=v₀t²', 'x=½gt²'], answerIndex: 1 },
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
        { type: "paragraph", text: 'Berikutnya kita mencari satu momen penting dalam lintasan: **Tinggi Maksimum dan Waktu ke Titik Tertinggi**.' }
      ]
    }
  ]
};

export default persamaanGerakParabola;