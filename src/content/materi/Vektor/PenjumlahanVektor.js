import img1 from "/src/assets/Materi/Vektor/penjumlahan-vektor1.png"

const penjumlahanVektor = {
  title: "Penjumlahan Vektor",
  slug: "penjumlahan-vektor",
  description: "Memahami cara menggabungkan dua atau lebih vektor menggunakan pendekatan geometris dan komponen.",
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
          text: "Dua orang mendorong benda dari arah berbeda. Apakah hasilnya tinggal 10 + 20?" 
        }
      ]
    },
    { 
      heading: "❓ Pertanyaan Besar", 
      blocks: [
        { 
          type: "paragraph", 
          text: "Bagaimana arah memengaruhi hasil penjumlahan vektor?" 
        }
      ]
    },
    { 
      heading: "🏹 Metode Segitiga", 
      blocks: [
        { type: "paragraph", 
          text: "Letakkan pangkal vektor kedua pada ujung vektor pertama. Resultan ditarik dari pangkal vektor pertama menuju ujung vektor terakhir." 
        }
      ]
    },
    { 
      heading: "▱ Metode Jajargenjang", 
      blocks: [
        { 
          type: "paragraph", 
          text: "Letakkan dua vektor dari pangkal yang sama. Diagonal jajargenjang menunjukkan resultannya." 
        }
      ]
    },
    { 
      heading: "🧩 Metode Komponen", 
      blocks: [
        { type: "paragraph", 
          text: "Untuk persoalan dua dimensi yang lebih kompleks, uraikan setiap vektor menjadi komponen x dan y, lalu jumlahkan komponen searah." 
        }
      ]
    },
    { 
      heading: "🔍 Contoh Analisis", 
      blocks: [
        { type: "paragraph", 
          text: "Jika A = 3 N ke kanan dan B = 4 N ke atas, maka Rx = 3 N dan Ry = 4 N. Resultannya kemudian dicari dari kedua komponen tersebut." 
        }
      ]
    },
    { 
      heading: "⚠️ Miskonsepsi", 
      blocks: [
        { type: "paragraph", 
          text: "Penjumlahan vektor tidak selalu berarti menjumlahkan besar angkanya secara langsung. Arah harus ikut dianalisis." 
        }
      ]
    },
    { 
      heading: "✨ Inti Materi", 
      blocks: [
        { type: "paragraph", 
          text: "Vektor dapat dijumlahkan secara geometris atau melalui komponen. Metode dipilih sesuai bentuk masalah." 
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
                question: "Dua gaya bekerja pada sebuah benda dari arah yang berbeda. Mengapa resultannya tidak selalu dapat diperoleh dengan langsung menjumlahkan besar kedua gaya?",
                options: [
                  "Karena arah setiap vektor harus ikut dianalisis",
                  "Karena gaya tidak memiliki satuan",
                  "Karena besar gaya selalu berubah",
                  "Karena semua gaya harus berada pada sumbu $x$",
                  "Karena vektor tidak dapat dijumlahkan"
                ],
                answerIndex: 0
              },
              {
                question: "Pada metode segitiga, bagaimana cara meletakkan vektor kedua?",
                options: [
                  "Pangkal vektor kedua diletakkan di pangkal vektor pertama",
                  "Ujung vektor kedua diletakkan di pangkal vektor pertama",
                  "Pangkal vektor kedua diletakkan pada ujung vektor pertama",
                  "Kedua vektor harus dibuat tegak lurus",
                  "Kedua vektor harus dibuat sejajar"
                ],
                answerIndex: 2
              },
              {
                question: "Pada metode jajargenjang, dua vektor diletakkan...",
                options: [
                  "pada garis yang sama",
                  "dari pangkal yang sama",
                  "dari ujung yang berbeda",
                  "saling berlawanan arah",
                  "tanpa memperhatikan arah",
                ],
                answerIndex: 1
              },
              {
                question: "Sebuah gaya $A = 3\\:N$ ke kanan dan gaya $B = 4\\:N$ ke atas bekerja pada sebuah benda. Berdasarkan metode komponen, nilai $R_x$ dan $R_y$ adalah...",
                options: [
                  "$R_x = 4 \\: N$, $R_y = 3 \\: N$",
                  "$R_x = 7 \\: N$, $R_y = 0$",
                  "$R_x = 0$, $R_y = 7 \\: N$",
                  "$R_x = 3 \\: N$,\ R_y = 4\,N$",
                  "$R_x =3 N$, $R_y = 3N$"
                ],
                answerIndex: 3
              },
              {
                question: "Untuk persoalan vektor dua dimensi yang lebih kompleks, metode yang paling sesuai adalah...",
                options: [
                  "menjumlahkan semua besar vektor secara langsung",
                  "mengabaikan arah setiap vektor",
                  "menggunakan metode segitiga tanpa memperhatikan arah",
                  "mengubah semua vektor menjadi skalar",
                  "menguraikan vektor menjadi komponen \(x\) dan \(y\), lalu menjumlahkan komponen searah"
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
          text: "Kita mulai dari kasus paling sederhana: semua vektor berada pada satu garis." 
        }
      ]
    }
  ]
};
export default penjumlahanVektor;
