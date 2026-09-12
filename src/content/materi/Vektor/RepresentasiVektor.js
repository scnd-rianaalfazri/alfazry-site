import img1 from "/src/assets/Materi/Vektor/representasi-vektor1.png"
import img2 from "/src/assets/Materi/Vektor/representasi-vektor2.png"
import img3 from "/src/assets/Materi/Vektor/portal-besar-dan-arah-vektor.png"

const representasiVektor = {
  title: "Representasi Vektor",
  slug: "representasi-vektor",
  description: "Memahami cara menggambarkan vektor menggunakan panah, panjang, dan arah.",
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
          text: "Kalau sebuah vektor tidak bisa kita lihat secara langsung, bagaimana cara membuatnya terlihat?" 
        }
      ]
    },
    { heading: "❓ Pertanyaan Besar", blocks: [
        { type: "paragraph", 
          text: "Bagaimana sebuah gambar sederhana dapat menyimpan informasi besar dan arah sekaligus?" 
        }
      ]
    },
    { heading: "🏹 Panah sebagai Representasi", blocks: [
        { type: "paragraph", 
          text: [
            "Vektor biasanya digambarkan sebagai anak panah. Panjang panah merepresentasikan besar vektor, sedangkan arah ujung panah menunjukkan arah vektor.",
            "Contoh: A → menunjukkan vektor A ke kanan."
          ] 
        }
      ]
    },
    { heading: "📏 Skala Vektor", 
      blocks: [
        { 
          type: "paragraph", 
          text: [
            "Agar gambar memiliki makna kuantitatif, kita dapat menggunakan skala." ,
            "Misalnya 1 cm pada gambar mewakili 10 N. Maka vektor 30 N digambar sepanjang 3 cm."
          ]
        }
      ]
    },
    { 
      heading: "🧭 Cara Memetakan Vektor", 
      blocks: [
        {
          type: "image",
          src: img2
        },
        { 
          type: "paragraph", 
          text: "Zara menggeser panah holografik tanpa mengubah panjang dan arahnya. Ia mulai melihat bahwa posisi gambar dapat berubah, tetapi karakter vektornya tetap." 
        }
      ]
    },
    { heading: "⚠️ Miskonsepsi", 
      blocks: [
        { 
          type: "paragraph", 
          text: "Vektor yang dipindahkan secara paralel tanpa mengubah besar dan arah tetap merepresentasikan vektor yang sama dalam konteks matematika vektor bebas." 
        }
      ]
    },
    { heading: "🌟 *Fun Fact*", 
      blocks: [
        { type: "paragraph", 
          text: "Satu panah dapat menyimpan dua informasi sekaligus: seberapa besar dan ke mana." 
        }
      ]
    },
    { 
      heading: "✨ Inti Materi", 
      blocks: [
        { type: "paragraph", 
          text: "Dalam representasi vektor, panjang panah berkaitan dengan besar dan ujung panah menunjukkan arah." 
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
                question: "Dalam representasi vektor menggunakan anak panah, panjang panah menunjukkan...",
                options: [
                  "arah vektor",
                  "besar vektor",
                  "posisi vektor",
                  "satuan vektor",
                  "titik asal vektor"
                ],
                answerIndex: 1
              },
              {
                question: "Arah sebuah vektor pada gambar anak panah ditunjukkan oleh...",
                options: [
                  "panjang pangkal panah",
                  "ketebalan garis",
                  "ujung atau kepala panah",
                  "ukuran gambar",
                  "titik tengah panah"
                ],
                answerIndex: 2
              },
              {
                question: "Sebuah gambar menggunakan skala 1 cm = 10 N. Jika sebuah gaya sebesar 30 N ingin digambarkan, panjang anak panah yang diperlukan adalah...",
                options: [
                  "0,3 cm",
                  "1 cm",
                  "2 cm",
                  "3 cm",
                  "30 cm"
                ],
                answerIndex: 3
              },
              {
                question: "Sebuah vektor dipindahkan secara paralel ke tempat lain tanpa mengubah panjang dan arahnya. Dalam konteks vektor bebas, vektor tersebut...",
                options: [
                  "berubah menjadi skalar",
                  "memiliki besar yang berbeda",
                  "memiliki arah yang berbeda",
                  "tetap merepresentasikan vektor yang sama",
                  "tidak dapat lagi disebut vektor"
                ],
                answerIndex: 3
              },
              {
                question: "Mengapa penggunaan skala penting ketika menggambarkan vektor?",
                options: [
                  "Agar arah vektor selalu berubah",
                  "Agar gambar dapat menyimpan makna kuantitatif tentang besar vektor",
                  "Agar semua vektor memiliki panjang yang sama",
                  "Agar vektor tidak membutuhkan arah",
                  "Agar posisi vektor tidak dapat dipindahkan"
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
          type: "image",
          src: img3,
          caption: "🚀 Kamu bisa KLIK GAMBAR INI untuk menuju portal selanjutnya",
          link: "/materi/besar-dan-arah-vektor"
        },
        { 
          type: "paragraph", 
          text: "Sebelum menghitung, kita perlu bisa membaca dua informasi utama: besar dan arah." 
        }
      ]
    }
  ]
};

export default representasiVektor;
