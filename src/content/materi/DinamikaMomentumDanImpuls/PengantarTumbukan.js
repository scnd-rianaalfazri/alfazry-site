const pengantarTumbukan = {
  title: "Pengantar Tumbukan",
  slug: "pengantar-tumbukan",
  description: "Mengenal tumbukan sebagai interaksi singkat dan membedakan perilaku energi kinetik pada berbagai tumbukan.",
  chapter: "💥 Dinamika: Momentum dan Impuls",

  content: [
    {
      blocks: [
        { 
          type: "paragraph", 
          text: [
            "Dua bola bertabrakan. Dalam waktu sangat singkat, kecepatan keduanya berubah." ,
            "Namun tidak semua tumbukan menghasilkan perilaku yang sama. Ada benda yang memantul kuat, ada yang hanya sedikit memantul, dan ada yang menyatu."
          ]
        }
      ]
    },
    {
      heading: "❓ Pertanyaan Besar",
      blocks: [
        { 
          type: "paragraph", 
          text: "Jika momentum total dapat tetap, apa yang membedakan satu tumbukan dengan tumbukan lainnya?" 
        },
      ]
    },
    {
      heading: "🔍 Apa yang Kita Amati?",
      blocks: [
        { 
          type: "paragraph", 
          text: "Perhatikan tiga kemungkinan: benda memantul hampir sempurna, benda memantul tetapi kehilangan sebagian energi kinetik, atau benda menyatu setelah tumbukan." 
        },
      ]
    },
    {
      heading: "⚖️ Momentum dan Energi Kinetik",
      blocks: [
        { 
          type: "paragraph", 
          text: [
            "Dalam sistem terisolasi, momentum total kekal. Namun energi kinetik tidak selalu kekal dalam bentuk energi kinetik translasi." ,
            "Sebagian energi dapat berubah menjadi panas, bunyi, deformasi, dan bentuk energi lainnya."
          ]
        }
      ]
    },
    {
      heading: "🧩 Tiga Karakteristik Tumbukan",
      blocks: [
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "💫 Lenting sempurna",
                description: "Momentum dan energi kinetik kekal."
              },
              {
                text: "⚡ Lenting sebagian",
                description: "Momentum kekal, energi kinetik translasi berkurang."
              },
              {
                text: "💥 Tidak lenting sama sekali",
                description: "Benda menyatu setelah tumbukan dan kehilangan energi kinetik translasi paling besar untuk kondisi yang dibandingkan."
              }
            ]
          }
        }
      ]
    },
    {
      heading: "⚠️ Miskonsepsi",
      blocks: [
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "Miskonsepsi 1",
                description: [
                  "Energi kinetik yang berkurang berarti energi hilang. ❌",
                  "Gak, gitu!",
                  "Energi berubah ke bentuk lain. ✔️"
                ]
              },
              {
                text: "Miskonsepsi 2",
                description: [
                  "Semua tumbukan memiliki karakter yang sama. ❌",
                  "Gak, gitu!",
                  "Kelentingan dan perubahan energi kinetik dapat berbeda. ✔️"
                ]
              }
            ]
          }
        }
      ]
    },
    {
      heading: "🌟 *Fun Fact*",
      blocks: [
        { 
          type: "paragraph", 
          text: "Tumbukan di dunia nyata hampir selalu melibatkan deformasi, bunyi, atau panas sehingga tumbukan yang benar-benar lenting sempurna merupakan model ideal." 
        },
      ]
    },
    {
      heading: "✨ Inti Materi",
      blocks: [
        { 
          type: "paragraph", 
          text: "Tumbukan adalah interaksi singkat yang mengubah gerak benda. Momentum sistem dapat kekal, sementara energi kinetik translasi dapat berperilaku berbeda." 
        },
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
                question: "Tumbukan merupakan....",
                options: [
                  "gerakan benda tanpa adanya interaksi",
                  "interaksi antara dua benda yang berlangsung dalam waktu relatif singkat",
                  "perubahan energi tanpa perubahan gerak",
                  "gerakan benda yang selalu menghasilkan panas",
                  "peristiwa ketika dua benda selalu menyatu"
                ],
                answerIndex: 1
              },
              {
                question: "Pada tumbukan lenting sempurna....",
                options: [
                  "hanya momentum yang kekal",
                  "hanya energi kinetik yang kekal",
                  "benda selalu menyatu setelah tumbukan",
                  "energi kinetik selalu berubah menjadi panas",
                  "momentum dan energi kinetik sama-sama kekal"
                ],
                answerIndex: 4
              },
              {
                question: "Dua benda bertumbukan dan setelah tumbukan keduanya bergerak bersama sebagai satu kesatuan. Tumbukan tersebut termasuk....",
                options: [
                  "tumbukan lenting sempurna",
                  "tumbukan lenting sebagian",
                  "tumbukan tidak lenting sama sekali",
                  "tumbukan elastis ideal",
                  "tumbukan tanpa impuls"
                ],
                answerIndex: 2
              },
              {
                question: "Dalam sistem terisolasi, besaran yang dapat tetap kekal pada berbagai jenis tumbukan adalah....",
                options: [
                  "kecepatan setiap benda",
                  "knergi kinetik setiap benda",
                  "momentum total sistem",
                  "gaya pada setiap benda",
                  "percepatan setiap benda"
                ],
                answerIndex: 2
              },
              {
                question: "Pada tumbukan nyata, sebagian energi kinetik translasi dapat berubah menjadi....",
                options: [
                  "massa benda saja",
                  "panas, bunyi, dan deformasi",
                  "omentum yang hilang",
                  "gaya gravitasi",
                  "kecepatan cahaya"
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
          text: "Kita akan mulai dari kondisi paling ideal: tumbukan ketika momentum dan energi kinetik sama-sama kekal." 
        },
      ]
    }
  ]
};

export default pengantarTumbukan;
