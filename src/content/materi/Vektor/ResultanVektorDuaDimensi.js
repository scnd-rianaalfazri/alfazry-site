import img1 from "/src/assets/Materi/Vektor/resultan-vektor-dua-dimensi1.png"

const resultanVektorDuaDimensi = {
  title: "Resultan Vektor Dua Dimensi",
  slug: "resultan-vektor-dua-dimensi",
  description: "Menentukan resultan vektor pada bidang dua dimensi menggunakan komponen x dan y.",
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
          text: "Satu vektor bergerak ke timur, yang lain ke utara. Resultannya tidak bisa ditemukan hanya dengan 10 + 20."
        }
      ]
    },
    { 
      heading: "❓ Pertanyaan Besar", 
      blocks: [
        { 
          type: "paragraph", 
          text: "Bagaimana kita menggabungkan vektor yang memiliki arah berbeda?"
        }
      ]
    },
    { 
      heading: "🧩 Uraikan Menjadi Komponen", 
      blocks: [
        { 
          type: "paragraph", 
          text: "Setiap vektor diuraikan menjadi komponen x dan y. Komponen yang searah kemudian dijumlahkan." ,
        },
        {
          type: "equation",
          equation: "Rx = \\sigma Ax"
        },
        {
          type: "paragraph",
          text: "dan"
        },
        {
          type: "equation",
          equation: "Ry = \\sigma Ay"
        }
      ]
    },
    { 
      heading: "📐 Besar Resultan", 
      blocks: [
        { 
          type: "paragraph", 
          text: "Setelah $Rx$ dan $Ry$ diketahui, keduanya menjadi sisi siku-siku segitiga resultan." 
        },
        {
          type: "equation",
          equation: "R = sqrt{Rx^2 + Ry^2}"
        }
      ]
    },
    { heading: "🔍 Contoh Analisis", 
      blocks: [
        { type: "paragraph", 
          text: [
            "Jika Rx = 3 N dan Ry = 4 N, maka R = √(3² + 4²) = 5 N." ,
            "Langkah pentingnya bukan sekadar menghafal 3-4-5, tetapi memahami bahwa Rx dan Ry adalah komponen tegak lurus dari resultan."
          ]
        }
      ]
    },
    { heading: "⚠️ Miskonsepsi", 
      blocks: [
        { 
          type: "paragraph", 
          text: "Jangan menjumlahkan besar semua vektor lalu berharap hasilnya menjadi resultan jika arah berbeda." 
        }
      ]
    },
    { heading: "✨ Inti Materi", 
      blocks: [
        { 
          type: "paragraph", 
          text: "Untuk vektor dua dimensi: uraikan → jumlahkan komponen → cari besar resultan." 
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
                question: "Mengapa dua vektor yang memiliki arah berbeda tidak dapat langsung dijumlahkan berdasarkan besar angkanya saja?",
                options: [
                  "Karena vektor tidak memiliki satuan",
                  "Karena besar vektor selalu berubah",
                  "Karena semua vektor harus berada pada sumbu $x$",
                  "Karena vektor tidak dapat dijumlahkan",
                  "Karena arah setiap vektor harus diperhitungkan"
                ],
                answerIndex: 4
              },
              {
                question: "Langkah pertama yang dilakukan untuk menentukan resultan vektor dua dimensi adalah...",
                options: [
                  "langsung menghitung besar resultan",
                  "menguraikan setiap vektor menjadi komponen $x$ dan $y$",
                  "menjumlahkan semua besar vektor",
                  "menghitung sudut resultan terlebih dahulu",
                  "mengabaikan arah vektor"
                ],
                answerIndex: 1
              },
              {
                question: "Jika beberapa vektor memiliki komponen horizontal $A_x$, maka komponen resultan pada sumbu $x$ diperoleh dengan...",
                options: [
                  "mengalikan semua $A_x$",
                  "membagi semua $A_x$",
                  "menjumlahkan komponen $x$ yang searah",
                  "mengabaikan komponen $x$",
                  "mengkuadratkan semua $A_x$"
                ],
                answerIndex: 2
              },
              {
                question: "Diketahui $R_x = 3 \\: N$ dan $R_y = 4\\: N$. Berapakah besar resultannya?",
                options: [
                  "3 N",
                  "4 N",
                  "5 N",
                  "6 N",
                  "7 N"
                ],
                answerIndex: 2
              },
              {
                question: "Urutan yang tepat untuk menentukan besar resultan vektor dua dimensi adalah...",
                options: [
                  "jumlahkan besar → uraikan → simpulkan",
                  "uraikan → jumlahkan komponen → cari besar resultan",
                  "cari sudut → jumlahkan besar → uraikan",
                  "uraikan → cari sudut → abaikan komponen",
                  "jumlahkan semua vektor → cari satuan → simpulkan"
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
          text: "Resultan belum lengkap. Kita juga harus tahu ke mana arahnya." 
        }
      ]
    }
  ]
};

export default resultanVektorDuaDimensi;
