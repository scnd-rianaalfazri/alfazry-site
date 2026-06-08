import hukumkekekalanmomentumImg from "../../../../assets/Materi/MomentumImpuls/HukumKekekalanMomentum.png"

const hukumkekekalanmomentum = {
  title: "Hukum Kekekalan Momentum",
  slug: "hukum kekekalan momentum",
  description: "Memahami mengapa total momentum sistem selalu tetap selama tidak ada gaya luar yang bekerja.",
  content: [
    {
      heading: "⚖️ Apa Itu Hukum Kekekalan Momentum?",
      body: [
        "Ketika dua benda bertumbukan, kita mungkin melihat kecepatannya berubah. Ada yang melambat, ada yang memantul, bahkan ada yang bergerak bersama setelah tumbukan.",
        "Meskipun demikian, terdapat satu besaran yang tetap terjaga, yaitu momentum total sistem.",
        "Prinsip inilah yang dikenal sebagai Hukum Kekekalan Momentum.",
        "Hukum ini menyatakan bahwa jumlah momentum seluruh benda sebelum tumbukan sama dengan jumlah momentum seluruh benda setelah tumbukan, selama tidak ada gaya luar yang bekerja pada sistem."
      ]
    },

    {
      image: hukumkekekalanmomentumImg,
      caption: "Ilustrasi Hukum Kekekalan Momentum"
    },

    {
      heading: "🎯 Pernyataan Hukum Kekekalan Momentum",
      body: [
        "Jika resultan gaya luar pada sistem sama dengan nol, maka momentum total sistem akan tetap."
      ],
      equation: [
        "Σp sebelum = Σp sesudah"
      ]
    },

    {
      heading: "🧮 Persamaan Umum",
      body: [
        "Untuk tumbukan dua benda pada satu garis lurus, hukum kekekalan momentum dituliskan sebagai:"
      ],
      equation: [
        "m₁v₁ + m₂v₂ = m₁v₁' + m₂v₂'"
      ],
      explanation: [
        "m₁ = massa benda 1 (kg)",
        "m₂ = massa benda 2 (kg)",
        "v₁ = kecepatan awal benda 1 (m/s)",
        "v₂ = kecepatan awal benda 2 (m/s)",
        "v₁' = kecepatan akhir benda 1 (m/s)",
        "v₂' = kecepatan akhir benda 2 (m/s)"
      ]
    },

    {
      heading: "🔍 Dari Mana Rumus Ini Berasal?",
      body: [
        "Hukum kekekalan momentum dapat diturunkan dari Hukum III Newton.",
        "Saat tumbukan terjadi, benda 1 memberikan gaya pada benda 2 dan benda 2 memberikan gaya yang sama besar tetapi berlawanan arah pada benda 1."
      ],
      equation: [
        "F₁₂ = -F₂₁"
      ]
    },

    {
      heading: "⚡ Hubungan dengan Impuls",
      body: [
        "Karena kedua gaya bekerja selama waktu tumbukan yang sama, maka:"
      ],
      equation: [
        "F₁₂Δt = -F₂₁Δt",
        "Δp₂ = -Δp₁"
      ]
    },

    {
      heading: "📌 Bentuk Momentum",
      body: [
        "Perubahan momentum kedua benda dapat dituliskan sebagai:"
      ],
      equation: [
        "(p₂' - p₂) = -(p₁' - p₁)"
      ]
    },

    {
      heading: "✨ Hasil Akhir",
      body: [
        "Setelah disusun kembali, diperoleh persamaan hukum kekekalan momentum:"
      ],
      equation: [
        "m₁v₁ + m₂v₂ = m₁v₁' + m₂v₂'"
      ]
    },

    {
      heading: "🌍 Contoh dalam Kehidupan Sehari-hari",
      body: [
        "Saat dua bola biliar bertumbukan, momentum total keduanya tetap.",
        "Ketika senapan menembakkan peluru, peluru bergerak ke depan dan senapan terdorong ke belakang sebagai bentuk kekekalan momentum.",
        "Roket dapat meluncur ke atas karena gas hasil pembakaran didorong ke bawah sehingga momentum total sistem tetap terjaga."
      ]
    },

    {
      heading: "🚀 Fakta Menarik",
      body: [
        "Momentum total tetap bukan berarti setiap benda memiliki momentum yang tetap.",
        "Yang tetap adalah jumlah momentum seluruh benda dalam sistem.",
        "Satu benda bisa kehilangan momentum, sementara benda lain memperoleh momentum dalam jumlah yang sama."
      ]
    },

    {
      heading: "📝 Kesimpulan",
      body: [
        "Momentum total suatu sistem akan tetap selama tidak ada gaya luar yang bekerja.",
        "Jumlah momentum sebelum tumbukan sama dengan jumlah momentum setelah tumbukan.",
        "Prinsip ini menjadi dasar untuk menganalisis berbagai jenis tumbukan dalam fisika."
      ]
    }
  ]
}

export default hukumkekekalanmomentum