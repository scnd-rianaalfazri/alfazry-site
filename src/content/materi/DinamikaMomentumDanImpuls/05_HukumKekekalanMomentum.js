import hukumkekekalanmomentumbolabertumbukanImg from "/src/assets/Materi/MomentumImpuls/HukumKekekalanMomentumBolaBertumbukan.png";

const hukumKekekalanMomentum = {
  title: "Hukum Kekekalan Momentum",
  slug: "hukum-kekekalan-momentum",
  description: "Memahami mengapa momentum total sistem tetap ketika resultan gaya luar pada sistem nol.",
  chapter: "💥 Dinamika: Momentum dan Impuls",

  content: [
    {
      heading: "⚖️ Ketika Dua Benda Saling Berinteraksi",
      blocks: [
        { type: "image", src: hukumkekekalanmomentumbolabertumbukanImg, caption: "Dua benda bertumbukan" },
        { type: "paragraph", text: "Ketika dua benda bertumbukan, kecepatan keduanya dapat berubah. Namun perubahan itu terjadi melalui interaksi di dalam sistem." },
      ]
    },
    {
      heading: "❓ Pertanyaan Besar",
      blocks: [
        { type: "heading", text: "❓ Pertanyaan Besar" },
        { type: "paragraph", text: "Jika momentum masing-masing benda berubah, apakah momentum total sistem ikut berubah?" },
      ]
    },
    {
      heading: "📦 Menentukan Sistem",
      blocks: [
        { type: "heading", text: "📦 Menentukan Sistem" },
        { type: "paragraph", text: "Langkah pertama adalah menentukan sistem. Misalnya sistem terdiri dari dua benda yang saling bertumbukan." },
        { type: "paragraph", text: "Momentum total sistem adalah jumlah momentum semua benda di dalam sistem." },
      ]
    },
    {
      heading: "🔗 Dari Impuls Menuju Kekekalan Momentum",
      blocks: [
        { type: "heading", text: "🔗 Dari Impuls Menuju Kekekalan Momentum" },
        { type: "paragraph", text: "Gaya interaksi antar benda adalah gaya internal sistem. Berdasarkan Hukum III Newton, gaya-gaya internal tersebut berpasangan sehingga perubahan momentum total akibat interaksi internal saling meniadakan." },
      ]
    },
    {
      heading: "📐 Persamaan Kekekalan Momentum",
      blocks: [
        { type: "heading", text: "📐 Persamaan Kekekalan Momentum" },
        { type: "equation", equation: "p_total,sebelum = p_total,sesudah" },
        { type: "equation", equation: "m₁v₁ + m₂v₂ = m₁v₁′ + m₂v₂′" },
        { type: "paragraph", text: "Hubungan ini berlaku ketika resultan gaya luar pada sistem dapat diabaikan." },
      ]
    },
    {
      heading: "🧪 Contoh Analisis",
      blocks: [
        { type: "heading", text: "🧪 Contoh Analisis" },
        { type: "paragraph", text: "Dua benda bertumbukan. Jangan langsung mencari kecepatan akhir. Tentukan terlebih dahulu sistem, tulis momentum total sebelum tumbukan, tulis momentum total sesudah tumbukan, lalu gunakan persamaan kekekalan momentum." },
      ]
    },
    {
      heading: "🌍 Contoh dalam Kehidupan",
      blocks: [
        { type: "heading", text: "🌍 Contoh dalam Kehidupan" },
        { type: "paragraph", text: "Tumbukan kendaraan, dua benda yang saling mendorong, recoil, dan peluncuran roket dapat dianalisis menggunakan prinsip momentum." },
      ]
    },
    {
      heading: "⚠️ Miskonsepsi",
      blocks: [
        { type: "heading", text: "⚠️ Miskonsepsi" },
        { type: "paragraph", text: "❌ Momentum setiap benda selalu tetap." },
        { type: "paragraph", text: "✅ Yang dapat tetap adalah momentum total sistem ketika resultan gaya luar pada sistem nol." },
        { type: "paragraph", text: "❌ Momentum dapat kekal tanpa menentukan sistem." },
        { type: "paragraph", text: "✅ Batas sistem harus jelas agar kekekalan momentum dapat dianalisis dengan benar." },
      ]
    },
    {
      heading: "🌟 Fun Fact",
      blocks: [
        { type: "heading", text: "🌟 Fun Fact" },
        { type: "paragraph", text: "Roket dapat memperoleh momentum ke depan karena gas buangan memperoleh momentum ke arah berlawanan. Interaksi internal dalam sistem roket dan gas membantu menjelaskan prinsip tersebut." },
      ]
    },
    {
      heading: "🧠 Inti Materi",
      blocks: [
        { type: "heading", text: "🧠 Inti Materi" },
        { type: "paragraph", text: "Momentum total suatu sistem tetap jika resultan gaya luar pada sistem nol atau dapat diabaikan." },
      ]
    },
    {
      heading: "🚀 Next Mission",
      blocks: [
        { type: "heading", text: "🚀 Next Mission" },
        { type: "paragraph", text: "Sekarang kita tahu bahwa momentum total dapat tetap saat benda saling berinteraksi. Bagaimana jika interaksi itu terjadi dalam waktu sangat singkat dan kedua benda bertumbukan?" },
        { type: "paragraph", text: "➡️ Selanjutnya: Pengantar Tumbukan." },
      ]
    }
  ]
};

export default hukumKekekalanMomentum;
