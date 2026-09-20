const jangkauanDanWaktuTempuh = {
  title: "Jangkauan Maksimum dan Waktu Tempuh Gerak Parabola",
  slug: "jangkauan-maksimum-dan-waktu-tempuh-gerak-parabola",
  description: "Menganalisis waktu tempuh dan jangkauan horizontal pada kondisi ideal dengan titik awal dan akhir setinggi sama.",
  chapter: "🏀 Kinematika: Gerak Dua Dimensi",

  content: [
    {
      heading: "👀 Hook — Seberapa Jauh Bola Akan Mendarat?",
      blocks: [
        { type: "paragraph", text: 'Dua bola dengan v₀ sama dapat memiliki lintasan berbeda ketika sudutnya berbeda. Kita perlu menghitung, bukan menebak.' },
      ]
    },
    {
      heading: "❓ Pertanyaan Besar",
      blocks: [
        { type: "paragraph", text: 'Bagaimana menentukan waktu total di udara?' },
        { type: "paragraph", text: 'Bagaimana menentukan jangkauan?' },
        { type: "paragraph", text: 'Mengapa 45° menghasilkan jangkauan maksimum pada kondisi ideal tertentu?' },
      ]
    },
    {
      heading: "🧠 Penjelasan Konsep",
      blocks: [
        { type: "paragraph", text: 'Jika titik awal dan akhir setinggi sama serta hambatan udara diabaikan, waktu naik dan turun simetris. Jangkauan kemudian bergantung pada vₓ dan waktu total.' },
      ]
    },
    {
      heading: "👁️ Visualisasi Konsep",
      blocks: [
        { type: "paragraph", text: 'Tampilkan lintasan dengan garis vertikal melalui puncak, lalu tunjukkan R sebagai jarak horizontal dari awal ke akhir.' },
      ]
    },
    {
      heading: "🔎 Strategi Analisis",
      blocks: [
        { type: "paragraph", text: 'Pastikan kondisi titik awal-akhir → cari T → cari vₓ → gunakan R=vₓT → cek asumsi model.' },
      ]
    },
    {
      heading: "📐 Rumus",
      blocks: [
        { type: "equation", equation: 'T=\\frac{2v_0\\sin\\theta}{g}' },
        { type: "equation", equation: 'R=\\frac{v_0^2\\sin(2\\theta)}{g}' },
        { type: "equation", equation: 'R_{maks}=\\frac{v_0^2}{g}\\quad(\\theta=45^\\circ)' },
      ]
    },
    {
      heading: "🧮 Contoh Analisis",
      blocks: [
        { type: "paragraph", text: 'v₀=20 m/s, θ=30°, g=10 m/s² menghasilkan T=2 s dan R≈34,64 m.' },
      ]
    },
    {
      heading: "🌍 Contoh Kehidupan",
      blocks: [
        { type: "paragraph", text: 'Lintasan bola, pancaran air, dan model proyektil dapat dianalisis dengan konsep ini, tetapi kondisi nyata dapat mengubah hasil.' },
      ]
    },
    {
      heading: "⚠️ Miskonsepsi",
      blocks: [
        { type: "paragraph", text: '45° adalah sudut maksimum untuk model ideal tertentu, bukan aturan mutlak semua kondisi nyata.' },
      ]
    },
    {
      heading: "🌟 Fun Fact",
      blocks: [
        { type: "paragraph", text: 'Sudut komplementer seperti 30° dan 60° dapat menghasilkan jangkauan ideal sama jika v₀ sama dan titik awal-akhir setinggi sama.' },
      ]
    },
    {
      heading: "✨ Inti Materi",
      blocks: [
        { type: "paragraph", text: 'Jangkauan dipengaruhi v₀, θ, g, dan asumsi model.' },
      ]
    },
    {
      heading: "🎯 Quick Check",
      blocks: [
        { type: "quickCheck", data: { questions: [
          { question: 'Pada kondisi ideal dengan titik awal dan akhir setinggi sama, sudut jangkauan maksimum adalah...', options: ['15°', '30°', '45°', '60°', '90°'], answerIndex: 2 },
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
        { type: "paragraph", text: 'Gerak parabola sudah kita baca dari posisi hingga jangkauan. Sekarang kita masuk ke bentuk gerak lain: **Gerak Melingkar**.' }
      ]
    }
  ]
};

export default jangkauanDanWaktuTempuh;