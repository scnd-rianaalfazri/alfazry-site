import img1 from "/src/assets/Materi/Vektor/besar-dan-arah-vektor1.png"
import img2 from "/src/assets/Materi/Vektor/portal-sistem-koordinat-dan-arah-vektor.png"

const besarDanArahVektor = {
  title: "Besar dan Arah Vektor",
  slug: "besar-dan-arah-vektor",
  description: "Memahami magnitude dan arah sebagai dua informasi utama sebuah vektor.",
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
          text: [
            "Dua vektor bisa sama besar tetapi menuju arah berbeda. Apakah keduanya sama?",
            "Tidak. Arah membuat keduanya menjadi informasi yang berbeda."
          ]
        }
      ]
    },
    { heading: "❓ Pertanyaan Besar", blocks: [
        { type: "paragraph", 
          text: "Bagaimana kita menyatakan seberapa besar sebuah vektor dan ke mana arahnya?" 
        }
      ]
    },
    { heading: "📏 Besar atau Magnitude", blocks: [
        { type: "paragraph", 
          text: [
            "Besar vektor menunjukkan ukuran efek atau nilai vektor tanpa memperhatikan orientasinya.",
            "Notasi umum: $|A|$."
          ] 
        }
      ]
    },
    { heading: "🧭 Arah Vektor", blocks: [
        { 
          type: "paragraph", 
          text: [
            "Arah dapat dinyatakan dengan arah mata angin, tanda positif-negatif, atau sudut terhadap sumbu acuan." ,
            "Untuk analisis dua dimensi, sudut sering diukur dari sumbu x positif."
          ]
        }
      ]
    },
    { heading: "🔍 Contoh Analisis", 
      blocks: [
        { type: "paragraph", 
          text: "Sebuah gaya $20 N$ membentuk sudut $30\\degree$ terhadap sumbu $x$ positif. Informasinya lengkap karena kita mengetahui besar 20 N dan arah $30\\degree$." 
        }
      ]
    },
    { heading: "⚠️ Miskonsepsi", blocks: [
        { 
          type: "paragraph", 
          text: "Mengetahui besar vektor saja belum cukup untuk menentukan hasil penjumlahan vektor secara umum." 
        }
      ]
    },
    { 
      heading: "✨ Inti Materi", 
      blocks: [
        { 
          type: "paragraph", 
          text: "Sebuah vektor secara lengkap membutuhkan dua hal: besar dan arah." 
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
                question: "Sebuah vektor dikatakan lengkap jika diketahui...",
                options: [
                  "nilai saja",
                  "satuan saja",
                  "arah saja",
                  "besar dan arah",
                  "besar dan satuan saja"
                ],
                answerIndex: 3
              },
              {
                question: "Notasi yang umum digunakan untuk menyatakan besar atau magnitude vektor A adalah...",
                options: [
                  "$A^2$",
                  "$|A|$",
                  "\\vec{A}",
                  "\\delta A$",
                  "1/A"
                ],
                answerIndex: 1
              },
              {
                question: "Sebuah gaya sebesar 20 N membentuk sudut $30\\degree$ terhadap sumbu x positif. Informasi tersebut menunjukkan bahwa gaya telah dinyatakan secara lengkap karena...",
                options: [
                  "hanya diketahui satuannya",
                  "hanya diketahui arahnya",
                  "diketahui besar dan arahnya",
                  "sudah memiliki komponen x dan y",
                  "tidak memerlukan sistem koordinat"
                ],
                answerIndex: 2
              },
              {
                question: "Dua vektor memiliki besar yang sama, tetapi arahnya berbeda. Berdasarkan materi, kedua vektor tersebut...",
                options: [
                  "selalu merupakan vektor yang sama",
                  "tidak dapat dianggap memiliki informasi yang sama",
                  "pasti memiliki resultan nol",
                  "tidak termasuk besaran vektor",
                  "harus memiliki satuan yang berbeda"
                ],
                answerIndex: 1
              },
              {
                question: "Mengapa mengetahui besar dua vektor saja belum cukup untuk menentukan hasil penjumlahannya secara umum?",
                options: [
                  "Karena satuan vektor selalu berbeda",
                  "Karena besar vektor tidak memiliki nilai",
                  "Karena arah vektor memengaruhi hasil penjumlahan",
                  "Karena semua vektor harus berada pada sumbu y",
                  "Karena vektor tidak dapat dijumlahkan"
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
          text: "Untuk membaca arah dengan konsisten, kita membutuhkan sistem koordinat." 
        },
        {
          type: "image",
          src: img2,
          caption: "🚀 Kamu bisa KLIK GAMBAR INI untuk menuju portal selanjutnya",
          link: "/materi/sistem-koordinat-dan-arah-vektor"
        }
      ]
    }
  ]
};

export default besarDanArahVektor;
