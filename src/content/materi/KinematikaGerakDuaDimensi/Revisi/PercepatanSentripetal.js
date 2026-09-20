const percepatanSentripetal = {
  title: "Percepatan Sentripetal",
  slug: "percepatan-sentripetal",
  description: "Memahami mengapa gerak melingkar mengalami percepatan meskipun kelajuannya dapat tetap.",
  chapter: "🏀 Kinematika: Gerak Dua Dimensi",

  content: [
    {
      heading: "👀 Hook — Speed Tetap, Kok Tubuh Berubah Arah?",
      blocks: [
        { type: "paragraph", text: 'Saat kendaraan menikung dengan speedometer tetap, arah gerak berubah. Karena kecepatan adalah vektor, perubahan arah berarti perubahan kecepatan.' },
      ]
    },
    {
      heading: "❓ Pertanyaan Besar",
      blocks: [
        { type: "paragraph", text: 'Bagaimana arah kecepatan berubah jika kelajuan tetap?' },
        { type: "paragraph", text: 'Ke mana arah percepatan pada gerak melingkar?' },
      ]
    },
    {
      heading: "🧠 Penjelasan Konsep",
      blocks: [
        { type: "paragraph", text: 'Percepatan sentripetal adalah percepatan yang mengarah menuju pusat lintasan dan terkait dengan perubahan arah kecepatan.' },
        { type: "list", list: { type: "unordered", items: ['v', ' ', '→', ' ', 't', 'a', 'n', 'g', 'e', 'n', 's', 'i', 'a', 'l'] } },
        { type: "list", list: { type: "unordered", items: ['a', 'ₛ', ' ', '→', ' ', 'm', 'e', 'n', 'u', 'j', 'u', ' ', 'p', 'u', 's', 'a', 't'] } },
        { type: "list", list: { type: "unordered", items: ['k', 'e', 'l', 'a', 'j', 'u', 'a', 'n', ' ', 'd', 'a', 'p', 'a', 't', ' ', 't', 'e', 't', 'a', 'p'] } },
      ]
    },
    {
      heading: "👁️ Visualisasi Konsep",
      blocks: [
        { type: "paragraph", text: 'Tampilkan v menyinggung lingkaran dan aₛ menuju pusat pada titik yang sama.' },
      ]
    },
    {
      heading: "🔎 Analisis Konsep",
      blocks: [
        { type: "paragraph", text: 'Identifikasi r dan v/ω → tentukan arah aₛ → gunakan rumus → hubungkan dengan perubahan arah v.' },
      ]
    },
    {
      heading: "📐 Rumus",
      blocks: [
        { type: "equation", equation: 'a_s=\\frac{v^2}{r}' },
        { type: "equation", equation: 'a_s=\\omega^2r' },
      ]
    },
    {
      heading: "🧮 Contoh Analisis",
      blocks: [
        { type: "paragraph", text: 'Jika v=10 m/s dan r=5 m, aₛ=20 m/s² menuju pusat.' },
      ]
    },
    {
      heading: "🌍 Contoh Kehidupan",
      blocks: [
        { type: "paragraph", text: 'Kendaraan menikung, wahana berputar, baling-baling, dan sistem rotasi.' },
      ]
    },
    {
      heading: "⚠️ Miskonsepsi",
      blocks: [
        { type: "paragraph", text: "Percepatan sentripetal bukan 'gaya baru'. Istilah ini menyatakan percepatan yang arahnya menuju pusat." },
      ]
    },
    {
      heading: "🌟 Fun Fact",
      blocks: [
        { type: "paragraph", text: 'Untuk v yang sama, tikungan dengan r lebih kecil membutuhkan aₛ lebih besar.' },
      ]
    },
    {
      heading: "✨ Inti Materi",
      blocks: [
        { type: "paragraph", text: 'Perubahan arah saja sudah cukup untuk menghasilkan percepatan.' },
      ]
    },
    {
      heading: "🎯 Quick Check",
      blocks: [
        { type: "quickCheck", data: { questions: [
          { question: 'Arah percepatan sentripetal adalah...', options: ['menjauh dari pusat', 'menyinggung lintasan', 'menuju pusat', 'selalu ke atas', 'selalu ke bawah'], answerIndex: 2 },
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
        { type: "paragraph", text: 'Konsep gerak sudah lengkap. Sekarang kita lihat bagaimana model ini dipakai pada fenomena nyata.' }
      ]
    }
  ]
};

export default percepatanSentripetal;