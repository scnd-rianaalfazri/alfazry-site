const gerakHorizontalDanVertikal = {
  title: "Gerak Horizontal dan Vertikal pada Gerak Parabola",
  slug: "gerak-horizontal-dan-vertikal-pada-gerak-parabola",
  description: "Melihat bagaimana komponen horizontal dan vertikal berkembang terhadap waktu.",
  chapter: "🏀 Kinematika: Gerak Dua Dimensi",

  content: [
    {
      heading: "👀 Hook — Satu Bola, Dua Cerita",
      blocks: [
        { type: "paragraph", text: 'Pada rekaman yang dihentikan frame demi frame, bola terus maju secara horizontal, sementara gerak vertikalnya diperlambat gravitasi.' },
      ]
    },
    {
      heading: "❓ Pertanyaan Besar",
      blocks: [
        { type: "paragraph", text: 'Apakah gerak x dan y berubah dengan cara yang sama?' },
        { type: "paragraph", text: 'Mengapa keduanya dapat dianalisis terpisah tetapi tetap menghasilkan satu lintasan?' },
      ]
    },
    {
      heading: "🧠 Penjelasan Konsep",
      blocks: [
        { type: "paragraph", text: 'Pada model ideal, vₓ tetap. Pada arah vertikal, vᵧ berubah karena percepatan gravitasi −g.' },
        { type: "list", list: { type: "unordered", items: ['x', ' ', '→', ' ', 'p', 'o', 's', 'i', 's', 'i', ' ', 'm', 'e', 'n', 'd', 'a', 't', 'a', 'r'] } },
        { type: "list", list: { type: "unordered", items: ['y', ' ', '→', ' ', 'p', 'o', 's', 'i', 's', 'i', ' ', 'v', 'e', 'r', 't', 'i', 'k', 'a', 'l'] } },
        { type: "list", list: { type: "unordered", items: ['t', ' ', '→', ' ', 'p', 'e', 'n', 'g', 'h', 'u', 'b', 'u', 'n', 'g', ' ', 'k', 'e', 'd', 'u', 'a', ' ', 'k', 'o', 'm', 'p', 'o', 'n', 'e', 'n'] } },
      ]
    },
    {
      heading: "👁️ Visualisasi Konsep",
      blocks: [
        { type: "paragraph", text: 'Plot beberapa posisi pada waktu yang sama: setiap titik memiliki x(t) dan y(t). Gabungan titik-titik itulah lintasan benda.' },
      ]
    },
    {
      heading: "🔎 Strategi Analisis",
      blocks: [
        { type: "paragraph", text: 'Pilih t → hitung x(t) → hitung y(t) → pasangkan (x,y) → ulangi untuk beberapa waktu.' },
      ]
    },
    {
      heading: "📐 Rumus",
      blocks: [
        { type: "equation", equation: 'x=v_{0x}t' },
        { type: "equation", equation: 'v_x=v_{0x}' },
        { type: "equation", equation: 'y=v_{0y}t-\\frac12gt^2' },
        { type: "equation", equation: 'v_y=v_{0y}-gt' },
      ]
    },
    {
      heading: "🧮 Contoh Analisis",
      blocks: [
        { type: "paragraph", text: 'Untuk v₀=20 m/s, θ=30°, g=10 m/s², pada t=1 s diperoleh x≈17,32 m dan y=5 m.' },
      ]
    },
    {
      heading: "🌍 Contoh Kehidupan",
      blocks: [
        { type: "paragraph", text: 'Video gerak olahraga dapat dianalisis dari posisi objek pada frame-frame berbeda.' },
      ]
    },
    {
      heading: "⚠️ Miskonsepsi",
      blocks: [
        { type: "paragraph", text: 'x dan y dihitung terpisah, tetapi harus menggunakan waktu yang sama karena berasal dari benda yang sama.' },
      ]
    },
    {
      heading: "🌟 Fun Fact",
      blocks: [
        { type: "paragraph", text: 'Analisis video modern dapat mengekstrak posisi objek dari frame lalu merekonstruksi lintasannya.' },
      ]
    },
    {
      heading: "✨ Inti Materi",
      blocks: [
        { type: "paragraph", text: 'Pisahkan x dan y untuk mempermudah analisis, tetapi jangan memisahkan waktunya.' },
      ]
    },
    {
      heading: "🎯 Quick Check",
      blocks: [
        { type: "quickCheck", data: { questions: [
          { question: 'Pada model ideal, vₓ...', options: ['nol', 'bertambah', 'berkurang', 'tetap', 'acak'], answerIndex: 3 },
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
        { type: "paragraph", text: 'Setelah hubungan x dan y jelas, kita susun semuanya menjadi **Persamaan Gerak Parabola**.' }
      ]
    }
  ]
};

export default gerakHorizontalDanVertikal;