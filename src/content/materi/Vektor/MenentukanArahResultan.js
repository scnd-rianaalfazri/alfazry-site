import img1 from "/src/assets/Materi/Vektor/menetukan-arah-resultan1.png"

const menentukanArahResultan = {
  title: "Menentukan Arah Resultan",
  slug: "menentukan-arah-resultan",
  description: "Menentukan orientasi resultan dari komponen-komponennya dengan mempertimbangkan sudut dan kuadran.",
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
          text: "Kita sudah mendapatkan besar resultan. Tapi sistem navigasi masih bertanya: 'arahnya ke mana?'" 
        }
      ]
    },
    { 
      heading: "❓ Pertanyaan Besar", 
      blocks: [
        { type: "paragraph", 
          text: "Bagaimana menentukan arah resultan dari Rx dan Ry?" 
        }
      ]
    },
    { 
      blocks: [
        { 
          type: "paragraph", 
          text: [
            "Jika sudut diukur dari sumbu $x$, hubungan dasarnya adalah $\\tan \\degree = \\frac{Ry}{Rx}$.",
            "Maka $\\theta = \\tan^{-1}(frac{Ry}{Rx}), dengan interpretasi arah mengikuti kuadran."
          ]
        }
      ]
    },
    { 
      heading: "🧭 Periksa Kuadran", 
      blocks: [
        { 
          type: "paragraph", 
          text: [
            "Tanda $Rx$ dan $Ry$ menunjukkan kuadran: (+,+) I; (-,+) II; (-,-) III; (+,-) IV.",
            "Ini mencegah kita mengambil sudut yang benar secara kalkulator tetapi salah secara arah fisika."
          ]
        }
      ]
    },
    { heading: "🔍 Contoh Analisis", 
      blocks: [
        { type: "paragraph", 
          text: "Jika Rx positif dan Ry positif, resultan berada di kuadran I. Jika Rx negatif dan Ry positif, resultan berada di kuadran II." 
        }
      ]
    },
    { 
      heading: "⚠️ Miskonsepsi", 
      blocks: [
        { 
          type: "paragraph", 
          text: "Menghitung $tan^{-1}$ saja tidak selalu cukup. Tanda komponen dan kuadran harus diperiksa." 
        }
      ]
    },
    { 
      heading: "✨ Inti Materi", 
      blocks: [
        { 
          type: "paragraph", 
          text: "Resultan lengkap = besar + arah. Sudut dan kuadran harus dibaca bersama." 
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
                question: "Untuk menentukan arah resultan dari komponen $R_x$ dan $R_y$, hubungan dasar yang digunakan adalah...",
                options: [
                  "$\\sin \\theta = \\frac{R_y}{R_x}$",
                  "$\\cos \\theta = \\frac{R_y}{R_x}$",
                  "$\\tan \\theta = \\frac{R_y}{R_x}$",
                  "$\\tan \\theta = \frac{R_x}{R_y}$",
                  "$R = R_x + R_y$"
                ],
                answerIndex: 2
              },
              {
                question: "Jika $R_x$ positif dan $R_y$ positif, maka arah resultan berada di...",
                options: [
                  "kuadran I",
                  "kuadran II",
                  "kuadran III",
                  "kuadran IV",
                  "tepat pada sumbu x"
                ],
                answerIndex: 0
              },
              {
                question: "Sebuah resultan memiliki $R_x < 0$ dan $R_y > 0$. Resultan tersebut berada di...",
                options: [
                  "kuadran I",
                  "kuadran II",
                  "kuadran III",
                  "kuadran IV",
                  "sumbu x negatif"
                ],
                answerIndex: 1
              },
              {
                question: "Mengapa menghitung $\\tan^{-1}\\left(\\frac{R_y}{R_x}\\right)$ saja belum tentu cukup untuk menentukan arah resultan?",
                options: [
                  "Karena besar resultan harus diketahui terlebih dahulu",
                  "Karena kalkulator tidak dapat menghitung sudut",
                  "Karena satuan $R_x$ dan $R_y$ harus berbeda",
                  "Karena tanda komponen menentukan kuadran resultan",
                  "Karena resultan tidak memiliki arah"
                ],
                answerIndex: 3
              },
              {
                question: "Jika $R_x < 0$ dan $R_y < 0$, maka resultan berada di...",
                options: [
                  "Kuadran I",
                  "Kuadran II",
                  "Kuadran III",
                  "Kuadran IV",
                  "Sumbu y positif"
                ],
                answerIndex: 2
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
          text: "Sekarang kita naik satu level: bagaimana fisikawan menuliskan vektor secara lebih ringkas?" 
        }
      ]
    }
  ]
};

export default menentukanArahResultan;
