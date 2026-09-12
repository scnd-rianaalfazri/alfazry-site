import img1 from "/src/assets/Materi/Vektor/perkalian-vektor1.png"

const perkalianVektor = {
  title: "Perkalian Vektor",
  slug: "perkalian vektor",
  description: "Memahami perkalian vektor dengan skalar, dot product, dan pengantar cross product.",
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
          text: "Vektor bisa dijumlahkan. Tapi bagaimana jika sebuah vektor harus diperbesar, diproyeksikan, atau menghasilkan arah baru?" 
        }
      ]
    },
    { 
      heading: "❓ Pertanyaan Besar", blocks: [
        { 
          type: "paragraph", 
          text: "Mengapa ada lebih dari satu jenis perkalian vektor?" 
        }
      ]
    },
    { 
      heading: "🔢 Perkalian dengan Skalar", 
      blocks: [
        { 
          type: "paragraph", 
          text: "Mengalikan vektor dengan bilangan mengubah besar vektor. Jika skalar positif, arah tetap; jika negatif, arah berbalik." 
        }
      ]
    },
    { 
      heading: "🔵 Dot Product", 
      blocks: [
        { 
          type: "paragraph", 
          text: "Dot product menghasilkan skalar dan berkaitan dengan seberapa besar dua vektor memiliki arah yang sama." 
        },
        {
          type: "equation",
          equation: "A \\dot B = |A||B| \\cos \\theta."
        },
        { 
          type: "paragraph", 
          text: "Contoh penting dalam fisika: $W = F \\dot s$." 
        }
      ]
    },
    { 
      heading: "✖️ Cross Product",
      blocks: [
        { 
          type: "paragraph", 
          text: "Cross product menghasilkan vektor yang arahnya tegak lurus terhadap bidang yang dibentuk dua vektor." 
        },
        {
          type: "equation",
          equation: "|A \\times B| = |A||B| \\sin \\theta."
        },
        { 
          type: "paragraph", 
          text: "Konsep ini akan muncul kembali pada torsi dan elektromagnetisme." 
        }
      ]
    },
    { 
      heading: "⚠️ Miskonsepsi", 
      blocks: [
        { 
          type: "paragraph", 
          text: "Dot product dan cross product bukan sekadar dua cara menulis perkalian. Jenis hasil dan makna fisiknya berbeda." 
        }
      ]
    },
    { 
      heading: "✨ Inti Materi", 
      blocks: [
        { 
          type: "paragraph", 
          text: "Skalar × vektor mengubah besar; dot product menghasilkan skalar; cross product menghasilkan vektor." 
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
                question: "Apa yang terjadi jika sebuah vektor dikalikan dengan skalar positif?",
                options: [
                  "Besarnya tetap dan arahnya berbalik",
                  "Besarnya berubah dan arahnya tetap",
                  "Besarnya dan arahnya selalu berubah",
                  "Vektor berubah menjadi skalar",
                  "Vektor menjadi nol"
                ],
                answerIndex: 1
              },
              {
                question: "Jika sebuah vektor dikalikan dengan skalar negatif, maka...",
                options: [
                  "besarnya selalu tetap",
                  "arah tetap dan besar berkurang",
                  "arah vektor berbalik",
                  "vektor berubah menjadi skalar",
                  "vektor tidak dapat digunakan lagi"
                ],
                answerIndex: 2
              },
              {
                question: "Hasil dari dot product dua buah vektor adalah...",
                options: [
                  "vektor",
                  "skalar",
                  "matriks",
                  "bilangan kompleks",
                  "sudut"
                ],
                answerIndex: 1
              },
              {
                question: "Dua vektor $A$ dan $B$ membentuk sudut $\\theta$. Rumus dot product yang tepat adalah...",
                options: [
                  "$A \\cdot B = |A||B|\\sin\\theta$",
                  "$A \\cdot B = |A|+|B|\\cos\\theta$",
                  "$A \\cdot B = |A||B|\\cos\\theta$",
                  "$A \\cdot B = |A||B|\\tan\\theta$",
                  "$A \\cdot B = //frac{∣A∣}{∣B∣} \\cos\\theta$"
                ],
                answerIndex: 2
              },
              {
                question: "Pernyataan yang tepat tentang cross product adalah...",
                options: [
                  "menghasilkan skalar yang menunjukkan kesamaan arah",
                  "menghasilkan vektor yang tegak lurus terhadap bidang yang dibentuk kedua vektor",
                  "hanya dapat digunakan untuk vektor yang sejajar",
                  "menghasilkan skalar tanpa memperhatikan sudut",
                  "selalu menghasilkan vektor yang searah dengan kedua vektor"
                ],
                answerIndex: 1
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
          text: "Sekarang kita lihat mengapa semua konsep ini penting dalam fisika." 
        }
      ]
    }
  ]
};

export default perkalianVektor;
