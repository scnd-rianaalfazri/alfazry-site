import img1 from "/src/assets/Materi/Vektor/besaran-skalar-dan-vektor1.png"
import img2 from "/src/assets/Materi/Vektor/portal-representasi-vektor.png"

const besaranSkalarDanVektor = {
  title: "Besaran Skalar dan Vektor",
  slug: "besaran-skalar-dan-vektor",
  description: "Membedakan besaran skalar dan vektor berdasarkan informasi yang diperlukan untuk mendeskripsikannya.",
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
            "Sebuah mobil melaju 60 km/jam. Apakah kamu sudah tahu arah geraknya?",
            "Angkanya memberi tahu seberapa cepat, tetapi belum memberi tahu ke mana." 
          ]
        }
      ]
    },
    { heading: "❓ Pertanyaan Besar", blocks: [
        { 
          type: "paragraph", 
          text: "Kapan sebuah besaran cukup dinyatakan dengan nilai, dan kapan arah menjadi bagian penting dari informasinya?" 
        }
      ]
    },
    { heading: "🔢 Skalar", blocks: [
        { 
          type: "paragraph", 
          text: [
            "Besaran skalar hanya membutuhkan nilai dan satuan.",
            "Contoh: massa 5 kg, waktu 20 s, suhu 30 °C, jarak 10 m, dan energi 500 J."
          ]
        }
      ]
    },
    { heading: "🧭 Vektor", blocks: [
        { 
          type: "paragraph", 
          text: [
            "Besaran vektor membutuhkan besar dan arah.",
            "Contoh: perpindahan 5 m ke timur, kecepatan 60 km/jam ke utara, gaya 20 N ke kanan."
          ] 
        }
      ]
    },
    { 
      heading: "🔍 Contoh Analisis", 
      blocks: [
        { 
          type: "paragraph", 
          text: [
            "Seseorang berjalan 5 m ke timur. Jaraknya 5 m, sedangkan perpindahannya 5 m ke timur.",
            "Jarak tidak membutuhkan arah; perpindahan membutuhkan arah."
          ]
        }
      ]
    },
    { heading: "⚠️ Miskonsepsi", blocks: [
        { 
          type: "paragraph", 
          text: [
            "Vektor bukan berarti 'semua besaran yang digambar dengan panah'. Panah adalah salah satu cara merepresentasikan vektor. ❌",
            "Gak, gitu!",
            "Kelajuan dan kecepatan juga bukan hal yang sama: kelajuan skalar, sedangkan kecepatan vektor. ✔️"
          ]
        }
      ]
    },
    { heading: "🌟 *Fun Fact*", 
      blocks: [
        { type: "paragraph", 
          text: "Sistem navigasi modern harus memperhitungkan arah, bukan hanya jarak. Karena itu konsep vektor sangat dekat dengan GPS, drone, pesawat, dan robot." 
        }
      ]
    },
    { 
      heading: "✨ Inti Materi", 
      blocks: [
        { 
          type: "paragraph", 
          text: "Skalar = besar/nilai. Vektor = besar/nilai + arah." 
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
                question: "Perbedaan utama antara besaran skalar dan vektor adalah....",
                options: [
                  "skalar memiliki arah, sedangkan vektor tidak",
                  "skalar hanya memiliki satuan, sedangkan vektor tidak",
                  "skalar membutuhkan nilai dan arah, sedangkan vektor hanya nilai",
                  "skalar cukup dinyatakan dengan nilai dan satuan, sedangkan vektor membutuhkan besar dan arah",
                  "skalar dan vektor tidak memiliki perbedaan"
                ],
                answerIndex: 3
              },
              {
                question: "Manakah yang merupakan besaran skalar?",
                options: [
                  "Perpindahan",
                  "Kecepatan",
                  "Gaya",
                  "Jarak",
                  "Percepatan",
                ],
                answerIndex: 3
              },
              {
                question: "Pernyataan 'mobil bergerak dengan kecepatan 60 km/jam ke utara' merupakan besaran vektor karena....",
                options: [
                  "memiliki satuan km/jam",
                  "memiliki nilai dan arah",
                  "memiliki nilai yang besar",
                  "menunjukkan benda yang bergerak",
                  "menggunakan satuan SI"
                ],
                answerIndex: 1
              },
              {
                question: "Seseorang berjalan 5 m ke timur. Pernyataan yang tepat adalah....",
                options: [
                  "jarak dan perpindahan keduanya merupakan skalar",
                  "jarak merupakan vektor, sedangkan perpindahan skalar",
                  "jarak dan perpindahan tidak dapat dibandingkan",
                  "jarak merupakan skalar, sedangkan perpindahan merupakan vektor",
                  "jarak dan perpindahan selalu bernilai nol"
                ],
                answerIndex: 3
              },
              {
                question: "Pernyataan yang paling tepat adalah....",
                options: [
                  "kelajuan dan kecepatan merupakan besaran skalar",
                  "kelajuan merupakan vektor karena berhubungan dengan gerak",
                  "kecepatan merupakan skalar karena hanya memiliki nilai",
                  "kelajuan merupakan skalar, sedangkan kecepatan merupakan vektor",
                  "semua besaran yang menggunakan satuan meter merupakan vektor"
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
          type: "image",
          src: img2,
          caption: "🚀 Kamu bisa KLIK GAMBAR INI untuk menuju portal selanjutnya",
          link: "/materi/representasi-vektor"
        },
        { 
          type: "paragraph", 
          text: "Kalau vektor punya arah dan besar, bagaimana cara menggambarkannya?" 
        }
      ]
    }
  ]
};

export default besaranSkalarDanVektor;
