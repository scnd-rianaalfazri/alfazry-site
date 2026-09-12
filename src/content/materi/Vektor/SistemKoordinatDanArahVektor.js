import img1 from "/src/assets/Materi/Vektor/sistem-koordinat-dan-arah-vektor1.png"

const sistemKoordinatDanArahVektor = {
  title: "Sistem Koordinat dan Arah Vektor",
  slug: "sistem-koordinat-dan-arah-vektor",
  description: "Menggunakan koordinat Cartesius untuk menentukan posisi, arah, dan kuadran vektor.",
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
          text: "Zara harus memberi tahu sistem navigasi ke mana sebuah objek bergerak. Ia membutuhkan bahasa yang konsisten untuk menyatakan arah." 
        }
      ]
    },
    { 
      heading: "❓ Pertanyaan Besar", 
      blocks: [
        { 
          type: "paragraph", 
          text: "Bagaimana sistem koordinat membantu kita mengubah arah menjadi informasi yang bisa dihitung?" 
        }
      ]
    },
    { 
      heading: "📐 Koordinat Cartesius", 
      blocks: [
        { 
          type: "paragraph", 
          text: [
            "Dalam dua dimensi kita menggunakan sumbu x dan y yang saling tegak lurus." ,
            "x biasanya horizontal, sedangkan y vertikal."
          ]
        }
      ]
    },
    { 
      heading: "↔️ Arah Positif dan Negatif", 
      blocks: [
        { 
          type: "paragraph", 
          text: "Ke kanan biasanya +x, ke kiri -x, ke atas +y, dan ke bawah -y." 
        }
      ]
    },
    { 
      heading: "📍 Kuadran", 
      blocks: [
        { 
          type: "paragraph", 
          text: "Kuadran I: (+,+). Kuadran II: (-,+). Kuadran III: (-,-). Kuadran IV: (+,-)." 
        }
      ]
    },
    { 
      heading: "🧭 Sudut Arah", 
      blocks: [
        { 
          type: "paragraph", 
          text: "Arah vektor dapat dinyatakan dengan sudut terhadap sumbu x positif. Kuadran tetap penting karena menentukan tanda komponen." 
        }
      ]
    },
    { 
      heading: "⚠️ Miskonsepsi", 
      blocks: [
        { 
          type: "paragraph", 
          text: "Sudut saja tidak selalu cukup. Kita harus tahu terhadap sumbu apa sudut diukur dan berada di kuadran mana." 
        }
      ]
    },
    { 
      heading: "✨ Inti Materi", 
      blocks: [
        { 
          type: "paragraph", 
          text: "Sistem koordinat menjadi kerangka untuk membaca arah dan menguraikan vektor dalam dua dimensi." 
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
                question: "Dalam sistem koordinat Cartesius dua dimensi, sumbu \(x\) dan \(y\) memiliki posisi...",
                options: [
                  "sejajar",
                  "saling berlawanan",
                  "membentuk garis yang sama",
                  "tidak memiliki hubungan",
                  "saling tegak lurus",
                ],
                answerIndex: 4
              },
              {
                question: "Dalam konvensi sistem koordinat yang digunakan pada materi, arah ke kanan dan ke atas berturut-turut dinyatakan sebagai...",
                options: [
                  "$-x$ dan $-y$",
                  "$-x$ dan $+y$",
                  "$+x$ dan $+y$",
                  "$+x$ dan $-y$",
                  "$0x$ dan $0y$"
                ],
                answerIndex: 2
              },
              {
                question: "Sebuah vektor memiliki komponen $x$ negatif dan komponen $y$ positif. Vektor tersebut berada di...",
                options: [
                  "kuadran I",
                  "kuadran II",
                  "kuadran III",
                  "kuadran IV",
                  "titik asal"
                ],
                answerIndex: 1
              },
              {
                question: "Sebuah vektor memiliki komponen $x$ positif dan komponen $y$ negatif. Vektor tersebut berada di...",
                options: [
                  "kuadran I",
                  "kuadran II",
                  "kuadran III",
                  "kuadran IV",
                  "tidak dapat ditemukan"
                ],
                answerIndex: 3
              },
              {
                question: "Mengapa mengetahui sudut saja belum selalu cukup untuk menentukan arah sebuah vektor?",
                options: [
                  "Karena besar vektor selalu berubah",
                  "Karena sudut tidak dapat dihitung",
                  "Karena kita perlu mengetahui terhadap sumbu apa sudut diukur dan kuadrannya",
                  "Karena vektor tidak memiliki arah",
                  "Karena semua sudut harus diukur terhadap sumbu $y$"
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
          text: "Sekarang satu vektor miring akan kita pecah menjadi dua arah yang lebih sederhana." 
        }
      ]
    }
  ]
};

export default sistemKoordinatDanArahVektor;
