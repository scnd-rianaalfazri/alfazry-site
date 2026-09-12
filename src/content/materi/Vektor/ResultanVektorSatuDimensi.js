import img1 from "/src/assets/Materi/Vektor/resultan-vektor-satu-dimnesi1.png"

const resultanVektorSatuGaris = {
  title: "Resultan Vektor Satu Dimensi",
  slug: "resultan-vektor-satu-dimensi",
  description: "Menentukan resultan beberapa vektor yang bekerja pada satu garis lurus berdasarkan besar dan arah.",

  chapter: "➡️ Vektor",
  content: [
    { 
      blocks: [
        {
          type: "image",
          src: img1
        },
        { 
          type: "paragraph", 
          text: "Dua gaya bekerja pada satu benda: 40 N ke kanan dan 15 N ke kiri. Mana yang menang?" 
        }
      ]
    },
    { 
      heading: "❓ Pertanyaan Besar", 
      blocks: [
        { 
          type: "paragraph", 
          text: "Bagaimana menentukan satu vektor pengganti dari beberapa vektor yang segaris?" 
        }
      ]
    },
    { 
      heading: "➕ Arah Sama", 
      blocks: [
        { type: "paragraph", 
          text: [
            "Jika arah sama, besar vektor dijumlahkan.",
            "20 N ke kanan + 30 N ke kanan = 50 N ke kanan."
          ]
        }
      ]
    },
    { 
      heading: "➖ Arah Berlawanan", 
      blocks: [
        { type: "paragraph", 
          text: [
            "Jika arah berlawanan, besar vektor dikurangkan dan arah resultan mengikuti vektor yang lebih besar." ,
            "40 N ke kanan + 15 N ke kiri = 25 N ke kanan."
          ]
        }
      ]
    },
    { 
      heading: "↔️ Tanda Positif dan Negatif", 
      blocks: [
        { 
          type: "paragraph", 
          text: "Kita dapat memilih kanan sebagai positif dan kiri sebagai negatif. Dengan begitu, penjumlahan vektor dapat dilakukan secara aljabar." 
        }
      ]
    },
    { 
      heading: "⚖️ Resultan Nol",
      blocks: [
        { 
          type: "paragraph", 
          text: "20 N ke kanan + 20 N ke kiri = 0 N. Kedua vektor saling meniadakan secara resultan." 
        }
      ]
    },
    { 
      heading: "⚠️ Miskonsepsi", 
      blocks: [
        { 
          type: "paragraph", 
          text: "Resultan nol tidak otomatis berarti benda pasti diam. Resultan gaya nol berarti percepatan nol; benda dapat tetap bergerak dengan kecepatan konstan." 
        }
      ]
    },
    { 
      heading: "✨ Inti Materi", 
      blocks: [
        { 
          type: "paragraph", 
          text: "Segaris: arah sama dijumlahkan; arah berlawanan dikurangkan dengan tanda yang konsisten." 
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
                question: "Dua vektor bekerja pada satu garis dengan arah yang sama. Cara menentukan resultannya adalah...",
                options: [
                  "mengurangkan besar kedua vektor",
                  "menjumlahkan besar kedua vektor",
                  "mengalikan besar kedua vektor",
                  "membagi besar kedua vektor",
                  "mengabaikan arah vektor"
                ],
                answerIndex: 1
              },
              {
                question: "Sebuah benda mendapat gaya 40 N ke kanan dan 15 N ke kiri. Besar dan arah resultan gayanya adalah...",
                options: [
                  "25 N ke kiri",
                  "25 N ke kanan",
                  "55 N ke kanan",
                  "55 N ke kiri",
                  "0 N"
                ],
                answerIndex: 1
              },
              {
                question: "Jika kanan dipilih sebagai arah positif dan kiri sebagai arah negatif, maka gaya 30 N ke kiri dapat dituliskan sebagai...",
                options: [
                  "+30 N",
                  "+15 N",
                  "0 N",
                  "−30 N",
                  "−15 N"
                ],
                answerIndex: 3
              },
              {
                question: "Dua vektor bekerja pada satu garis: 20 N ke kanan dan 20 N ke kiri. Resultannya adalah...",
                options: [
                  "40 N ke kanan",
                  "40 N ke kiri",
                  "20 N ke kanan",
                  "20 N ke kiri",
                  "0 N"
                ],
                answerIndex: 4
              },
              {
                question: "Pernyataan yang tepat tentang resultan nol adalah...",
                options: [
                  "benda pasti diam",
                  "benda pasti berhenti bergerak",
                  "benda memiliki percepatan maksimum",
                  "percepatan benda nol, tetapi benda dapat tetap bergerak dengan kecepatan konstan",
                  "tidak ada gaya yang bekerja pada benda"
                ],
                answerIndex: 3
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
           text: "Bagaimana jika vektornya tidak lagi segaris, tetapi membentuk sudut?" 
        }
      ]
    }
  ]
};

export default resultanVektorSatuGaris;
