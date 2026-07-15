import hukumkekekalanmomentumbolabertumbukanImg from "/src/assets/Materi/MomentumImpuls/HukumKekekalanMomentumBolaBertumbukan.png";

const hukumkekekalanmomentum = {
  title: "Hukum Kekekalan Momentum",
  slug: "hukum kekekalan momentum",
  description:
    "Memahami mengapa total momentum sistem selalu tetap selama tidak ada gaya luar yang bekerja.",
  chapter: "💥 Dinamika: Momentum dan Impuls",

  content: [
    {
      blocks: [
        { type: "heading", text: "⚖️ Apa Itu Hukum Kekekalan Momentum?" },
        { type: "image", src: hukumkekekalanmomentumbolabertumbukanImg },
        {
          type: "paragraph",
          text: "Ketika dua benda bertumbukan, kita mungkin melihat kecepatannya berubah. Ada yang melambat, ada yang memantul, bahkan ada yang bergerak bersama setelah tumbukan.",
        },
        {
          type: "paragraph",
          text: "Meskipun demikian, terdapat satu besaran yang tetap terjaga, yaitu momentum total sistem.",
        },
        {
          type: "paragraph",
          text: "Prinsip inilah yang dikenal sebagai Hukum Kekekalan Momentum.",
        },
        {
          type: "paragraph",
          text: "Hukum ini menyatakan bahwa jumlah momentum seluruh benda sebelum tumbukan sama dengan jumlah momentum seluruh benda setelah tumbukan, selama tidak ada gaya luar yang bekerja pada sistem.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🔗 Dari Impuls Menuju Kekekalan Momentum" },
        {
          type: "paragraph",
          text: "Pada materi sebelumnya kita mempelajari bahwa impuls menyebabkan perubahan momentum.",
        },
        {
          type: "paragraph",
          text: "Namun bagaimana jika dua benda saling berinteraksi dalam suatu sistem?",
        },
        {
          type: "paragraph",
          text: "Apakah momentum dapat hilang begitu saja?",
        },
        {
          type: "paragraph",
          text: "Untuk menjawab pertanyaan tersebut, kita perlu memahami Hukum Kekekalan Momentum.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "📦 Apa Itu Sistem Terisolasi?" },
        {
          type: "paragraph",
          text: "Dalam fisika, momentum hanya akan kekal pada sistem terisolasi.",
        },
        {
          type: "paragraph",
          text: "Sistem terisolasi adalah sistem yang tidak mengalami resultan gaya luar.",
        },
        {
          type: "paragraph",
          text: "Artinya seluruh gaya yang bekerja hanya berasal dari interaksi antar benda di dalam sistem.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🎯 Pernyataan Hukum Kekekalan Momentum" },
        {
          type: "paragraph",
          text: "Jika resultan gaya luar pada sistem sama dengan nol, maka momentum total sistem akan tetap.",
        },
        { type: "equation", equation: ["Σp sebelum = Σp sesudah"] },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "⚖️ Momentum Total Sistem" },
        {
          type: "paragraph",
          text: "Momentum total sistem diperoleh dari penjumlahan momentum seluruh benda dalam sistem.",
        },
        {
          type: "paragraph",
          text: "Ketika dua benda saling bertumbukan, momentum masing-masing benda dapat berubah.",
        },
        {
          type: "paragraph",
          text: "Namun jumlah momentum total sistem tetap.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🧮 Persamaan Umum" },
        {
          type: "paragraph",
          text: "Untuk tumbukan dua benda pada satu garis lurus, hukum kekekalan momentum dituliskan sebagai:",
        },
        { type: "equation", equation: ["m₁v₁ + m₂v₂ = m₁v₁' + m₂v₂'"] },
        {
          type: "explanation",
          text: [
            "m₁ = massa benda 1 (kg)",
            "m₂ = massa benda 2 (kg)",
            "v₁ = kecepatan awal benda 1 (m/s)",
            "v₂ = kecepatan awal benda 2 (m/s)",
            "v₁' = kecepatan akhir benda 1 (m/s)",
            "v₂' = kecepatan akhir benda 2 (m/s)",
          ],
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🔍 Dari Mana Rumus Ini Berasal?" },
        {
          type: "paragraph",
          text: "Hukum kekekalan momentum dapat diturunkan dari Hukum III Newton.",
        },
        {
          type: "paragraph",
          text: "Saat tumbukan terjadi, benda 1 memberikan gaya pada benda 2 dan benda 2 memberikan gaya yang sama besar tetapi berlawanan arah pada benda 1.",
        },
        { type: "equation", equation: ["F₁₂ = -F₂₁"] },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "⚡ Hubungan dengan Impuls" },
        {
          type: "paragraph",
          text: "Karena kedua gaya bekerja selama waktu tumbukan yang sama, maka:",
        },
        { type: "equation", equation: ["F₁₂Δt = -F₂₁Δt", "Δp₂ = -Δp₁"] },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "📌 Bentuk Momentum" },
        {
          type: "paragraph",
          text: "Perubahan momentum kedua benda dapat dituliskan sebagai:",
        },
        { type: "equation", equation: ["(p₂' - p₂) = -(p₁' - p₁)"] },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "✨ Hasil Akhir" },
        {
          type: "paragraph",
          text: "Setelah disusun kembali, diperoleh persamaan hukum kekekalan momentum:",
        },
        { type: "equation", equation: ["m₁v₁ + m₂v₂ = m₁v₁' + m₂v₂'"] },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🎯 Makna Persamaan" },
        {
          type: "paragraph",
          text: "Persamaan ini menunjukkan bahwa momentum tidak diciptakan maupun dimusnahkan.",
        },
        {
          type: "paragraph",
          text: "Momentum hanya berpindah dari satu benda ke benda lain.",
        },
        {
          type: "paragraph",
          text: "Karena itu total momentum sistem tetap terjaga.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🪙 Analogi Sederhana" },
        {
          type: "paragraph",
          text: "Coba bayangkan, momentum seperti uang yang dimiliki sekelompok orang.",
        },
        {
          type: "paragraph",
          text: "Uang dapat berpindah dari satu orang ke orang lain.",
        },
        {
          type: "paragraph",
          text: "Namun jumlah uang seluruh kelompok tetap sama selama tidak ada uang yang masuk atau keluar dari kelompok tersebut.",
        },
        {
          type: "paragraph",
          text: "Hal yang sama terjadi pada momentum dalam sistem terisolasi.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "⚠️ Miskonsepsi yang Sering Terjadi" },
        {
          type: "paragraph",
          text: "Momentum total yang kekal bukan berarti momentum setiap benda tetap.",
        },
        {
          type: "paragraph",
          text: "Momentum masing-masing benda dapat berubah selama interaksi berlangsung.",
        },
        {
          type: "paragraph",
          text: "Yang tetap adalah jumlah momentum seluruh sistem.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🌍 Contoh dalam Kehidupan Sehari-hari" },
        {
          type: "paragraph",
          text: "Saat dua bola biliar bertumbukan, momentum total keduanya tetap.",
        },
        {
          type: "paragraph",
          text: "Ketika senapan menembakkan peluru, peluru bergerak ke depan dan senapan terdorong ke belakang sebagai bentuk kekekalan momentum.",
        },
        {
          type: "paragraph",
          text: "Roket dapat meluncur ke atas karena gas hasil pembakaran didorong ke bawah sehingga momentum total sistem tetap terjaga.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🚀 Fakta Menarik" },
        {
          type: "paragraph",
          text: "Momentum total tetap bukan berarti setiap benda memiliki momentum yang tetap.",
        },
        {
          type: "paragraph",
          text: "Yang tetap adalah jumlah momentum seluruh benda dalam sistem.",
        },
        {
          type: "paragraph",
          text: "Satu benda bisa kehilangan momentum, sementara benda lain memperoleh momentum dalam jumlah yang sama.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "✨ Inti Materi" },
        {
          type: "paragraph",
          text: "Momentum total suatu sistem akan tetap selama tidak ada resultan gaya luar yang bekerja.",
        },
        {
          type: "paragraph",
          text: "Momentum dapat berpindah antar benda, tetapi tidak hilang dari sistem.",
        },
        {
          type: "paragraph",
          text: "Prinsip ini dikenal sebagai Hukum Kekekalan Momentum dan menjadi dasar analisis berbagai peristiwa tumbukan.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🚀 Next Mission" },
        {
          type: "paragraph",
          text: "Jika momentum selalu kekal saat dua benda berinteraksi, apakah semua tumbukan memiliki sifat yang sama?",
        },
        { type: "paragraph", text: "Ternyata tidak." },
        {
          type: "paragraph",
          text: "➡️ Next, portal selanjutnya: Pengantar Tumbukan.",
        },
      ],
    },
  ],
};

export default hukumkekekalanmomentum;
