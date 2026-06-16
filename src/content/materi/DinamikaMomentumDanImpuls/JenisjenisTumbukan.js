import JenisjenisTumbukanImg from"/src/assets/Materi/MomentumImpuls/JenisjenisTumbukan.png";
const jenistumbukan = {
title: "Jenis-Jenis Tumbukan",
slug: "jenis-jenis tumbukan",
description: "Memahami berbagai jenis tumbukan berdasarkan perubahan energi kinetiknya.",
chapter: "💥 Dinamika: Momentum dan Impuls",

content: [
  {
    heading: "💥 Apa Itu Tumbukan?",
    image: JenisjenisTumbukanImg,
    caption: "Ilustrasi berbagai jenis tumbukan",
    body: [
    "Tumbukan adalah peristiwa ketika dua benda saling bertemu dan memberikan gaya satu sama lain dalam waktu yang sangat singkat.",
    "Selama tumbukan berlangsung, momentum total sistem selalu tetap sesuai dengan Hukum Kekekalan Momentum.",
    "Namun, energi kinetik tidak selalu tetap.",
    "Berdasarkan perubahan energi kinetiknya, tumbukan dibedakan menjadi tiga jenis utama."
    ]
  },

  {
    heading: "⚖️ Hukum yang Selalu Berlaku",
    body: [
      "Pada semua jenis tumbukan, momentum total sistem sebelum dan sesudah tumbukan tetap."
    ],
    equation: "Σp sebelum = Σp sesudah"
  },

  {
    heading: "🥎 Tumbukan Lenting Sempurna",
    body: [
      "Tumbukan lenting sempurna adalah tumbukan yang tidak menyebabkan kehilangan energi kinetik.",
      "Momentum total dan energi kinetik total sama-sama kekal.",
      "Jenis tumbukan ini sangat ideal dan jarang ditemukan secara sempurna di kehidupan nyata.",
      "Contoh yang paling mendekati adalah tumbukan antar partikel mikroskopis atau bola baja yang sangat elastis."
    ],
    list: [
      "✅ Momentum kekal",
      "✅ Energi kinetik kekal",
      "✅ Koefisien restitusi (e) = 1"
    ]
  },

  {
    heading: "🏀 Tumbukan Lenting Sebagian",
    body: [
      "Tumbukan lenting sebagian adalah tumbukan yang menyebabkan sebagian energi kinetik berubah menjadi bentuk energi lain seperti panas, bunyi, atau deformasi benda.",
      "Jenis tumbukan ini paling sering ditemukan dalam kehidupan sehari-hari.",
      "Misalnya saat bola basket dipantulkan ke lantai. Bola masih memantul, tetapi tidak mencapai ketinggian semula."
    ],
    list: [
      "✅ Momentum kekal",
      "❌ Energi kinetik tidak kekal",
      "✅ 0 < e < 1"
    ]
  },

  {
    heading: "🧲 Tumbukan Tidak Lenting Sama Sekali",
    body: [
      "Tumbukan tidak lenting sama sekali terjadi ketika kedua benda bergerak bersama setelah bertumbukan.",
      "Pada tumbukan ini kehilangan energi kinetik mencapai nilai maksimum.",
      "Contohnya adalah gumpalan plastisin yang saling bertabrakan lalu menempel menjadi satu."
    ],
    equation: "v₁' = v₂'",
    explanation: [
      "Setelah tumbukan kedua benda memiliki kecepatan yang sama."
    ],
    list: [
      "✅ Momentum kekal",
      "❌ Energi kinetik tidak kekal",
      "✅ e = 0"
    ]
  },

  {
    heading: "📊 Perbandingan Jenis Tumbukan",
    table: {
      headers: [
        "Jenis Tumbukan",
        "Momentum",
        "Energi Kinetik",
        "Koefisien Restitusi"
      ],
      rows: [
        ["Lenting Sempurna", "Kekal", "Kekal", "e = 1"],
        ["Lenting Sebagian", "Kekal", "Berkurang", "0 < e < 1"],
        ["Tidak Lenting Sama Sekali", "Kekal", "Berkurang Maksimum", "e = 0"]
      ]
    }
  },

  {
    heading: "🎯 Koefisien Restitusi",
    body: [
      "Koefisien restitusi menunjukkan tingkat kelentingan suatu tumbukan.",
      "Nilainya berada di antara 0 hingga 1.",
      "Semakin besar nilai e, semakin elastis tumbukan tersebut."
    ],
    equation: "e =\\frac {(kecepatan saling menjauh)}{(kecepatan saling mendekat)}"
  },

  {
    heading: "🌍 Contoh dalam Kehidupan Sehari-hari",
    body: [
      "Jenis tumbukan dapat ditemukan di berbagai aktivitas sehari-hari."
    ],
    list: [
      "🎾 Bola tenis memantul di lapangan → lenting sebagian.",
      "🏀 Bola basket memantul di lantai → lenting sebagian.",
      "⚛️ Tumbukan partikel gas ideal → mendekati lenting sempurna.",
      "🧱 Plastisin yang saling menempel setelah bertabrakan → tidak lenting sama sekali.",
      "🚗 Tabrakan mobil → umumnya termasuk lenting sebagian."
    ]
  },

  {
    heading: "🚀 Fakta Menarik",
    body: [
      "Tidak ada tumbukan yang benar-benar lenting sempurna di dunia nyata.",
      "Selalu ada sebagian energi yang berubah menjadi panas, bunyi, atau deformasi benda.",
      "Karena itu tumbukan lenting sempurna biasanya digunakan sebagai model ideal dalam fisika."
    ]
  },

  {
    heading: "📝 Kesimpulan",
    body: [
      "Semua tumbukan memenuhi Hukum Kekekalan Momentum.",
      "Perbedaan utama tiap jenis tumbukan terletak pada perubahan energi kinetiknya.",
      "Tumbukan lenting sempurna mempertahankan energi kinetik, sedangkan tumbukan lenting sebagian dan tidak lenting sama sekali mengalami kehilangan energi kinetik."
    ]
  }

  ]
}

export default jenistumbukan
