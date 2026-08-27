const bendaDiputarDenganTali = {
  title: "Benda Diputar dengan Tali",
  slug: "benda-diputar-dengan-tali",
  description: "Menganalisis bagaimana tegangan tali menjadi penyedia gaya sentripetal pada benda yang bergerak melingkar.",
  chapter: "🌀 Dinamika Gerak Melingkar",

  content: [
    {
      blocks: [
        {
          type: "paragraph",
          text: [
            "Ambil sebuah bola kecil, ikat dengan tali, lalu putar secara horizontal. Lalu, selama tali tetap tegang bola bergerak mengikuti lintasan melingkar.",
            "Tetapi jika tali tiba-tiba putus, bola tidak lagi bergerak melingkar.",
            "Apa yang sebenarnya dilakukan oleh tali terhadap bola?"
          ]
        }
      ]
    },
    {
      heading: "❓ Pertanyaan Besar",
      blocks: [
        {
          type: "list",
          list: {
            type: "ordered",
            items:[
              {
                text: "Bagaimana tegangan tali dapat menjaga benda tetap bergerak pada lintasan melingkar?"
              },
              {
                text: "Apa yang terjadi pada gerak benda ketika tali tidak lagi memberikan gaya menuju pusat?"
              }
            ]
          }
        }
      ]
    },
    {
      heading: "🧭 Identifikasi Gaya",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Untuk menyederhanakan analisis, anggap sebuah benda diputar pada bidang horizontal dengan tali dan hambatan lain diabaikan.",
            "Pada benda bekerja tegangan tali yang arahnya menuju pusat lintasan.",
            "Tegangan tali inilah yang menyediakan resultan gaya sentripetal."
          ]
        }
      ]
    },
    {
      heading: "🎨 Visualisasi Konsep",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Bayangkan benda bergerak mengelilingi pusat dengan tali sebagai penghubung.",
            "Tampilkan:"
          ]
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "Arah kecepatan sesaat menyinggung lintasan."
              },
              {
                text: "Arah tegangan tali menuju pusat."
              },
              {
                text: "Arah percepatan sentripetal menuju pusat."
              }
            ]
          }
        },
        {
          type: "paragraph",
          text: "Tali tidak membuat benda bergerak ke depan. Tali terus menarik benda ke arah pusat sehingga arah kecepatannya berubah."
        }
      ]
    },

    {
      heading: "📌 Strategi Penyelesaian",
      blocks: [
        {
          type: "list",
          list: {
            type: "ordered",
            items: {
              type: "ordered",
              items: [
                {
                  text: "Tentukan benda yang dianalisis."
                },
                {
                  text: "Tentukan pusat lintasan."
                },
                {
                  text: "Identifikasi gaya yang bekerja"
                },
                {
                  text: "Tentukan arah radial menuju pusat."
                },
                {
                  text: "Buat *Free Body Diagram.*"
                },
                {
                  text: "Hubungkan tegangan tali dengan kebutuhan gaya sentripetal"
                }
              ]
            }
          }
        }
      ]
    },
    {
      heading: "📝 *Free Body Diagram*",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Pada model sederhana ini, tegangan tali menjadi gaya utama yang dianalisis pada arah radial. Arah tegangan selalu menuju pusat lintasan.",
            "Karena itu:"
          ]
        },
        {
          type: "equation",
          equation: "T = F_c"
        }
      ]
    },
    {
      heading: "⚖️ Analisis Resultan Gaya",
      blocks: [
        {
          type: "paragraph",
          text: "Menurut Hukum Newton II, resultan gaya pada arah radial harus menghasilkan percepatan sentripetal."
        },
        {
          type: "equation",
          equation: "T = \\frac{mv^2}{r}"
        },
        {
          type: "paragraph",
          text: "Persamaan ini menunjukkan bahwa semakin cepat benda bergerak atau semakin besar massanya, semakin besar tegangan tali yang diperlukan."
        }
      ]
    },
    {
      heading: "🔄 Apa yang Terjadi Jika Tali Putus?",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Saat tali putus, tegangan tali tidak lagi bekerja. Akibatnya, tidak ada lagi gaya yang menyediakan resultan sentripetal dari tali. Benda kemudian tidak melanjutkan gerak melingkarnya",
            "Jika hambatan lain diabaikan, benda akan bergerak sesaat dalam arah garis singgung lintasan pada titik ketika tali putus."
          ]
        }
      ]
    },
    {
      heading: "🧪 Contoh  Soal",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Sebuah benda bermassa 0,5 kg diputar dengan kelajuan 6 m/s menggunakan tali sepanjang 2 m.",
            "Tegangan tali yang dibutuhkan adalah:"
          ]
        },
        {
          type: "equation",
          equation: "T=\\frac{(0.5)(6^2)}{2}=9\\;N"
        },
        {
          type: "paragraph",
          text: "Jadi, pada model sederhana ini, tegangan tali sebesar 9 N menyediakan resultan gaya menuju pusat."
        }
      ]
    },
    {
      heading: "🌍 Contoh dalam Kehidupan",
      blocks: [
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "🪢 Bola yang diputar menggunakan tali."
              },
              {
                text: "🔨 Olahraga lempar martil."
              },
              {
                text: "🎠 Benda pada wahana yang bergerak melingkar."
              },
              {
                text: "🛰️ Mekanisme tertentu pada sistem kabel dan alat pemutar."
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
                  "Tali mendorong benda menuju pusat. ❌",
                  "Gak, gitu!",
                  "Tali memberikan gaya tegangan yang menarik benda menuju pusat. ✔️"
                ]
              },
              {
                text: "Miskonsepsi 2",
                description: [
                  "Ketika tali putus, benda langsung bergerak menjauhi pusat secara radial. ❌",
                  "Gak, gitu!",
                  "Benda bergerak mengikuti arah garis singgung lintasan pada titik ketika tali putus, jika gaya lain diabaikan. ✔️"
                ]
              },
              {
                text: "Miskonsepsi 3",
                description: [
                  "Semakin panjang tali, semakin besar gaya sentripetal yang dibutuhkan untuk kelajuan yang sama. ❌",
                  "Gak, gitu!",
                  "Untuk massa dan kelajuan tetap, kebutuhan gaya sentripetal justru berkurang ketika jari-jari lintasan diperbesar. ✔️"
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
          text: "Dalam olahraga lempar martil, atlet memutar bola logam yang terhubung dengan kawat. Tegangan pada kawat berperan penting dalam menghasilkan gaya yang menjaga bola tetap bergerak melingkar sebelum dilepaskan."
        }
      ]
    },

    {
      heading: "✨ Inti Materi",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Pada benda yang diputar dengan tali, tegangan tali dapat menjadi penyedia gaya sentripetal. Tegangan tersebut menarik benda menuju pusat dan terus mengubah arah kecepatannya.",
            "Jika tali putus, gaya menuju pusat dari tali hilang sehingga benda tidak lagi mengikuti lintasan melingkar."
          ]
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
                question: "Pada benda yang diputar menggunakan tali secara horizontal, gaya yang menyediakan gaya sentripetal adalah....",
                options: [
                  "tegangan tali",
                  "gaya sentrifugal",
                  "gaya normal",                  
                  "gaya gesek udara",
                  "gaya hambatan udara"
                ],
                answerIndex: 0
              },
              {
                question: "Arah tegangan tali pada benda yang sedang diputar adalah....",
                options: [
                  "enjauhi pusat lintasan",
                  "sejajar dengan arah kecepatan",
                  "tegak lurus terhadap tali",
                  "menuju pusat lintasan",
                  "berlawanan dengan arah gravitasi"
                ],
                answerIndex: 3
              },
              {
                question: "Sebuah benda bermassa 0,5 kg diputar dengan kelajuan 6 m/s menggunakan tali sepanjang 2 m. Besar tegangan tali yang diperlukan adalah....",
                options: [
                  "3 N",
                  "6 N",
                  "9 N",
                  "12 N",
                  "18 N"
                ],
                answerIndex: 2
              },
              {
                question: "Jika tali tiba-tiba putus saat benda sedang bergerak melingkar, benda akan....",
                options: [
                  "bergerak menuju pusat lintasan",
                  "bergerak menjauhi pusat secara radial",
                  "langsung berhenti",
                  "bergerak sesaat sepanjang garis singgung lintasan",
                  "tetap bergerak melingkar tanpa perubahan"
                ],
                answerIndex: 3
              },
              {
                question: "Jika massa dan kelajuan benda tetap, tetapi panjang tali diperbesar, maka gaya sentripetal yang dibutuhkan akan....",
                options: [
                  "semakin besar",
                  "semakin kecil",
                  "tetap sama",
                  "menjadi nol",
                  "tidak dapat ditentukan"
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
          text: [
            "Sekarang kamu sudah melihat dua contoh berbeda: gaya gesek pada mobil dan tegangan tali pada benda yang diputar.",
            "Tetapi bagaimana jika benda bergerak melingkar tanpa tali dan tanpa ban yang mencengkeram jalan?",
            "Pada materi berikutnya, kita akan melihat gerak melingkar pada lintasan yang lebih ekstrem: roller coaster."
          ]
        }
      ]
    }
  ]
};

export default bendaDiputarDenganTali;