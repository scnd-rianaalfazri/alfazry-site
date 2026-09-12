import img1 from "/src/assets/Materi/Vektor/vektor-satuan-dan-notasi-komponen1.png"

const vektorSatuanDanNotasiKomponen = {
  title: "Vektor Satuan dan Notasi Komponen",
  slug: "vektor-satuan-dan-notasi-komponen",
  description: "Mengenal notasi komponen dan vektor satuan sebagai bahasa ringkas untuk menyatakan vektor.",

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
          text: "Gambar panah bagus untuk melihat vektor. Tapi bagaimana jika kita ingin menuliskannya dengan ringkas?" 
        }
      ]
    },
    { 
      heading: "❓ Pertanyaan Besar", 
      blocks: [
        { 
          type: "paragraph", 
          text: "Bagaimana komponen vektor dapat ditulis dalam bentuk matematis yang efisien?" 
        }
      ]
    },
    { 
      heading: "🧭 Vektor Satuan", 
      blocks: [
        { type: "paragraph", 
          text: [
            "Vektor satuan memiliki besar 1 dan digunakan untuk menunjukkan arah sumbu.",
            "Dalam bidang dua dimensi, î menyatakan arah x dan ĵ menyatakan arah y."
          ]
        }
      ]
    },
    { heading: "✍️ Notasi Komponen", 
      blocks: [
        { 
          type: "paragraph", 
          text: [
            "Sebuah vektor dapat ditulis sebagai A = Ax î + Ay ĵ.",
            "Contoh: A = 3 î + 4 ĵ menunjukkan komponen 3 pada x dan 4 pada y."
          ] 
        }
      ]
    },
    { 
      heading: "🔍 Contoh Analisis", 
      blocks: [
        { type: "paragraph", 
          text: "Untuk A = 3 î + 4 ĵ, besar A = √(3² + 4²) = 5. Arah ditentukan dari perbandingan komponen." 
        }
      ]
    },
    { 
      heading: "⚠️ Miskonsepsi", 
      blocks: [
        { 
          type: "paragraph", 
          text: "î dan ĵ bukan angka biasa yang mengubah satuan. Keduanya adalah penanda arah sumbu dengan besar satu." 
        }
      ]
    },
    { 
      heading: "✨ Inti Materi", 
      blocks: [
        { 
          type: "paragraph", 
          text: "Notasi komponen membuat hubungan antara vektor, arah sumbu, dan perhitungan menjadi lebih ringkas." 
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
                question: "Apa yang dimaksud dengan vektor satuan?",
                options: [
                  "Vektor yang memiliki besar 0",
                  "Vektor yang memiliki besar 1 dan digunakan untuk menunjukkan arah",
                  "Vektor yang hanya memiliki komponen $x$",
                  "Vektor yang hanya memiliki komponen $y$",
                  "Vektor yang tidak memiliki arah"
                ],
                answerIndex: 1
              },
              {
                question: "Dalam bidang dua dimensi, simbol $\\hat{i}$ dan $\\hat{j}$ masing-masing menunjukkan arah...",
                options: [
                  "$x$ dan $y$",
                  "$y$ dan $x$",
                  "$x$ dan $z$",
                  "$z$ dan $y$",
                  "positif dan negatif"
                ],
                answerIndex: 0
              },
              {
                question: "Sebuah vektor ditulis sebagai $A = 3 \\hat{i} + 4 \\hat{j}$. Apa arti angka 3 dan 4 pada notasi tersebut?",
                options: [
                  "besar dan arah vektor",
                  "besar vektor satuan",
                  "komponen vektor pada sumbu $x$ dan $y$",
                  "koordinat titik awal dan akhir",
                  "besar resultan dan sudut"
                ],
                answerIndex: 2
              },
              {
                question: "Sebuah vektor ditulis sebagai $A = 3 \\hat{i} + 4 \\hat{j}$. Berapakah besar vektor $A$?",
                options: [
                  "3",
                  "4",
                  "5",
                  "7",
                  "12"
                ],
                answerIndex: 2
              },
              {
                question: "Pernyataan yang tepat tentang $\\hat{i}$ dan $\\hat{j}$ adalah...",
                options: [
                  "keduanya merupakan penanda arah sumbu dengan besar satu",
                  "keduanya merupakan angka biasa",
                  "keduanya merupakan satuan gaya",
                  "keduanya menentukan besar resultan secara langsung",
                  "keduanya hanya digunakan untuk menggambar vektor"
                ],
                answerIndex: 0
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
          text: "Vektor bukan hanya bisa dijumlahkan. Ada beberapa jenis perkalian dengan makna fisika yang berbeda." 
        }
      ]
    }
  ]
};

export default vektorSatuanDanNotasiKomponen;
