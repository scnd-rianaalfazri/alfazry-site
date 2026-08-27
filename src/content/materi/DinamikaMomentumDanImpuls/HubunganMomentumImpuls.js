const hubunganMomentumImpuls = {
  title: "Hubungan Antara Momentum dan Impuls",
  slug: "hubungan-momentum-dan-impuls",
  description: "Memahami bahwa impuls menyebabkan perubahan momentum suatu benda.",
  chapter: "💥 Dinamika: Momentum dan Impuls",

  content: [
    {
      blocks: [
        { 
          type: "paragraph", 
          text: [
            "Momentum menggambarkan keadaan gerak benda. Impuls menggambarkan pengaruh gaya selama selang waktu tertentu.",
            "Sekarang kita mencari jembatan yang menghubungkan keduanya."
          ]
        }
      ]
    },
    {
      heading: "❓ Pertanyaan Besar",
      blocks: [
        { 
          type: "paragraph", 
          text: "Jika gaya bekerja pada benda selama waktu tertentu, bagaimana perubahan momentum benda dapat dijelaskan?" 
        },
      ]
    },
    {
      heading: "🔄 Alur Terjadinya Perubahan Momentum",
      blocks: [
        { 
          type: "paragraph", 
          text: "Gaya bekerja → muncul impuls → momentum berubah → gerak benda berubah." 
        },
      ]
    },
    {
      heading: "⚡ Dari Hukum II Newton Menuju Impuls",
      blocks: [
        { 
          type: "paragraph", 
          text: "Hubungan impuls dan momentum dapat diturunkan dari hubungan gaya dengan perubahan momentum." 
        },
        { 
          type: "equation", 
          equation: "F = Δp / Δt" 
        },
        { 
          type: "paragraph", 
          text: "Kalikan kedua ruas dengan Δt untuk memperoleh hubungan antara gaya, waktu, dan perubahan momentum." 
        },
      ]
    },
    {
      heading: "🧮 Penurunan Persamaan",
      blocks: [
        { 
          type: "equation", 
          equation: [
            "FΔt = Δp",
            "I = Δp"
          ]
        },
        { 
          type: "paragraph", 
          text: "Jadi impuls yang diberikan pada benda sama dengan perubahan momentum benda." 
        },
      ]
    },
    {
      heading: "🎨 Visualisasi Konsep",
      blocks: [
        { 
          type: "paragraph", 
          text: "Ketika bola menumbuk tembok, kecepatannya dapat berubah besar dan arah. Perubahan tersebut berarti momentum bola berubah. Interaksi gaya selama waktu tumbukan menghasilkan impuls." 
        },
      ]
    },
    {
      heading: "🧪 Contoh Analisis",
      blocks: [
        { type: "paragraph", text: "Sebuah bola bermassa 0,5 kg berubah kecepatan dari 4 m/s menjadi 10 m/s searah. Perubahan momentumnya adalah Δp = m(v₂ − v₁) = 0,5 × 6 = 3 kg·m/s." },
        { type: "paragraph", text: "Maka impuls yang diterima bola adalah 3 N·s." },
      ]
    },
    {
      heading: "🌍 Contoh dalam Kehidupan",
      blocks: [
        { 
          type: "paragraph", 
          text: "Tendangan, pukulan, tumbukan, dan sistem keselamatan kendaraan dapat dianalisis dengan hubungan $I = \\delta\\text{p}." 
        },
      ]
    },
    {
      heading: "⚠️ Miskonsepsi",
      blocks: [
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "Miskonsepsi 1",
                description: [
                  "Impuls adalah besaran yang terpisah dari perubahan momentum. ❌",
                  "Gak, gitu!",
                  "Impuls secara fisika berkaitan langsung dengan perubahan momentum. ✔️"
                ]
              },
              {
                text: "Miskonsepsi 2",
                description: [
                  "Jika benda kembali ke arah semula setelah tumbukan, momentumnya tidak berubah. ❌",
                  "Gak, gitu!",
                  "Perubahan arah kecepatan berarti momentum berubah arah. ✔️"
                ]
              }
            ]
          }
        }
      ]
    },
    {
      heading: "🌟 *Fun Fact*",
      blocks: [
        { 
          type: "paragraph", 
          text: "Sebuah bola yang memantul dapat mengalami perubahan momentum yang besar meskipun kelajuannya sebelum dan sesudah tumbukan hampir sama, karena arah kecepatannya berubah." 
        },
      ]
    },
    {
      heading: "✨ Inti Materi",
      blocks: [
        { 
          type: "paragraph", 
          text: "Impuls adalah perubahan momentum. Hubungan ini menjadi dasar untuk menganalisis interaksi singkat, termasuk tumbukan." 
        },
      ]
    },
    {
      blocks: [
        { 
          type: "paragraph", 
          text: "Jika dua benda saling memberikan gaya, momentum masing-masing dapat berubah. Tetapi apakah momentum total sistem juga berubah?" 
        }
      ]
    }
  ]
};

export default hubunganMomentumImpuls;
