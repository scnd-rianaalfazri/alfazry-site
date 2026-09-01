const tumbukanLentingSempurna = {
  title: "Tumbukan Lenting Sempurna",
  slug: "tumbukan-lenting-sempurna",
  description: "Memahami karakteristik tumbukan lenting sempurna melalui kekekalan momentum dan energi kinetik.",
  chapter: "💥 Dinamika: Momentum dan Impuls",

  content: [
    {
      blocks: [
        { 
          type: "paragraph", 
          text: [
            "Bayangkan dua benda bertumbukan lalu memantul kembali tanpa kehilangan energi kinetik translasi.",
            "Inilah model tumbukan lenting sempurna."
          ]
        }
      ]
    },
    {
      heading: "❓ Pertanyaan Besar",
      blocks: [
        { type: "paragraph", text: "Apa syarat agar sebuah tumbukan dapat disebut lenting sempurna?" },
      ]
    },
    {
      heading: "🎨 Visualisasi Konsep",
      blocks: [
        { 
          type: "paragraph", 
          text: "Sebelum tumbukan, kedua benda memiliki momentum dan energi kinetik. Setelah tumbukan, keduanya tetap memiliki jumlah momentum dan energi kinetik translasi yang sama." 
        }
      ]
    },
    {
      heading: "⚖️ Kekekalan Momentum",
      blocks: [
        { 
          type: "equation", 
          equation: "m_1 \\dot v_1 + m_2 + v_2 = m_1 \\dot v'_1 \\dot + m_2 \\dot v'_2"
        }
      ]
    },
    {
      heading: "⚡ Kekekalan Energi Kinetik",
      blocks: [
        { 
          type: "equation", 
          equation: "\\frac{1}{2}m_1v_1^2 + frac{1}{2}m_2v_2^2 = \\frac{1}{2}m_1v_1'^2 + \\frac{1}{2}m_2v_2'^2"
        },
        { 
          type: "paragraph", 
          text: "Dua persamaan ini digunakan bersama untuk menganalisis tumbukan lenting sempurna." 
        },
      ]
    },
    {
      heading: "🧪 Contoh Analisis",
      blocks: [
        { 
          type: "paragraph", 
          text: "Dalam soal tumbukan lenting sempurna, identifikasi massa dan kecepatan sebelum tumbukan, tentukan besaran yang ditanyakan, lalu gunakan kekekalan momentum dan energi kinetik sebagai dua kondisi sistem." 
        }
      ]
    },
    {
      heading: "🌍 Contoh dalam Kehidupan",
      blocks: [
        { 
          type: "paragraph", 
          text: "Tumbukan antar molekul pada model gas ideal dan beberapa tumbukan bola keras dapat didekati sebagai tumbukan lenting sempurna." 
        }
      ]
    },
    {
      heading: "⚠️ Miskonsepsi",
      blocks: [
        { 
          type: "paragraph", 
          text: [
            "Tumbukan lenting sempurna berarti benda tidak mengalami perubahan kecepatan. ❌",
            "Kecepatan masing-masing benda dapat berubah, tetapi momentum total dan energi kinetik total tetap. ✔️"
          ]
        }
      ]
    },
    {
      heading: "🌟 Fun Fact",
      blocks: [
        { 
          type: "paragraph", 
          text: "Tumbukan lenting sempurna lebih sering digunakan sebagai model ideal untuk menyederhanakan sistem daripada sebagai gambaran sempurna dari benda makroskopis sehari-hari." 
        }
      ]
    },
    {
      heading: "✨ Inti Materi",
      blocks: [
        { 
          type: "paragraph", 
          text: "Pada tumbukan lenting sempurna, momentum total dan energi kinetik translasi total sama sebelum dan sesudah tumbukan." 
        }
      ]
    },
    { 
      heading: "🎯 Quick Check", 
      blocks: [
        {
          type: "quickCheck",
          data: {
            questions: [
              {
                question: "Syarat utama sebuah tumbukan disebut lenting sempurna adalah....",
                options: [
                  "momentum total dan energi kinetik translasi total sama sebelum dan sesudah tumbukan",
                  "hanya momentum total yang kekal",
                  "hanya energi kinetik total yang kekal",
                  "kedua benda harus memiliki massa yang sama",
                  "kedua benda harus berhenti setelah tumbukan"
                ],
                answerIndex: 0
              },
              {
                question: "Pada tumbukan lenting sempurna, pernyataan yang benar adalah....",
                options: [
                  "kecepatan masing-masing benda pasti tetap",
                  "kecepatan masing-masing benda dapat berubah, tetapi momentum total dan energi kinetik total tetap",
                  "energi kinetik selalu berubah menjadi panas",
                  "kedua benda selalu menyatu",
                  "momentum setiap benda selalu tetap"
                ],
                answerIndex: 1
              },
              {
                question: "Dua benda bertumbukan secara lenting sempurna dalam sistem terisolasi. Besaran yang harus diperhatikan dalam analisis adalah....",
                options: [
                  "massa dan gaya gravitasi saja",
                  "kecepatan akhir saja",
                  "kekekalan momentum dan kekekalan energi kinetik",
                  "percepatan dan waktu tumbukan saja",
                  "gaya normal dan gaya gesek"
                ],
                answerIndex: 2
              },
              {
                question: "Sebuah benda bermassa 2 kg bergerak dengan kecepatan 4 m/s. Energi kinetiknya sebelum tumbukan adalah....",
                options: [
                  "4 J",
                  "8 J",
                  "12 J",
                  "16 J",
                  "32 J"
                ],
                answerIndex: 3
              },
              {
                question: "Pernyataan yang paling tepat mengenai tumbukan lenting sempurna dalam kehidupan nyata adalah....",
                options: [
                  "semua tumbukan benda sehari-hari merupakan tumbukan lenting sempurna",
                  "tumbukan lenting sempurna tidak pernah digunakan dalam fisika",
                  "tumbukan lenting sempurna selalu membuat benda menyatu",
                  "tumbukan lenting sempurna selalu mengubah seluruh energi menjadi panas",
                  "tumbukan lenting sempurna sering digunakan sebagai model ideal untuk menyederhanakan analisis tumbukan"
                ],
                answerIndex: 4
              }
            ],
            scoring: [
              {
                min: 5,
                max: 5,
                emoji: "🏆",
                title: "Mission Complete!",
                message: "Kamu siap memasuki portal berikutnya."
              },
              {
                min: 4,
                max: 4,
                emoji: "🚀",
                title: "Hampir Sempurna",
                message: "Pemahamanmu sudah sangat baik."
              },
              {
                min: 2,
                max: 3,
                emoji: "🔄",
                title: "Perlu Sedikit Lagi",
                message: "Coba eksplorasi lagi bagian inti materi."
              },
              {
                min: 0,
                max: 1,
                emoji: "📖",
                title: "Ulangi Petualangan",
                message: "Tenang, ulangi petualanganmu dari awal."
              }
            ]
          }
        }
      ]
    },
    {
      blocks: [
        { 
          type: "paragraph", 
          text: "Bagaimana jika momentum tetap, tetapi sebagian energi kinetik berubah menjadi bunyi, panas, atau deformasi?" 
        }
      ]
    }
  ]
};

export default tumbukanLentingSempurna;
