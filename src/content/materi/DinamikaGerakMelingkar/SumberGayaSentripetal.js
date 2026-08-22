const sumberGayaSentripetal = {
  title: "Sumber Gaya Sentripetal",
  slug: "sumber-gaya-sentripetal",
  description: "Mengidentifikasi berbagai gaya yang dapat menjadi penyebab resultan gaya sentripetal pada gerak melingkar.",

  chapter: "🌀 Dinamika Gerak Melingkar",

  content: [
    { blocks: [
        {
          type: "paragraph",
          text: [
            "Pada page [sebelumnya](/materi/gaya-sentripetal), kamu telah mengetahui bahwa benda yang bergerak melingkar memerlukan resultan gaya yang mengarah menuju pusat lintasan. Tetapi, apakah selalu ada satu jenis gaya khusus yang disebut gaya sentripetal?",
            "Ternyata tidak.",
            "Gaya sentripetal dapat berasal dari gaya yang berbeda-beda, tergantung pada situasi yang sedang kita analisis."
          ]
        }
      ]
    },
    {
      heading: "❓ Pertanyaan Besar",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Sekarang ubah rasa penasaranmu menjadi pertanyaan.",
            "Gunakan pola sederhana:"
          ]
        },
        {
          type: "quote",
          text:
            "“Mengapa ...?” atau “Bagaimana ...?”"
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "Gaya apa yang dapat menjadi gaya sentripetal dalam berbagai sistem gerak melingkar?"
              },
              {
                text: "Bagaimana kita menentukan gaya mana yang berperan sebagai resultan menuju pusat?"
              }
            ]
          }
        }
      ]
    },
    {
      heading: "🧭 Identifikasi Situasi",
      blocks: [
        {
          type: "paragraph",
          text: "Perhatikan beberapa contoh berikut."
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "🚗 Mobil berbelok di jalan → gaya gesek."
              },
              {
                text: "🪢 Bola diputar dengan tali → tegangan tali."
              },
              {
                text: "🪐 Planet mengorbit Matahari → gaya gravitasi."
              },
              {
                text: "🎢 Roller coaster → gaya normal dan gravitasi dapat memberikan resultan menuju pusat, bergantung pada posisi benda."
              }
            ]
          }
        }
      ]
    },
    {
      heading: "🎨 Visualisasi Konsep",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Bayangkan empat situasi dengan satu kesamaan, yaitu selalu terdapat resultan gaya yang mengarah ke pusat lintasan.",
            "Namun sumber gaya tersebut berbeda.",
            "Inilah ide penting yang perlu kamu pegang:",
            "👉 Yang penting bukan nama gayanya, tetapi apakah resultan gaya memiliki komponen radial menuju pusat."
          ]
        }
      ]
    },
    {
      heading: "📌 Strategi Penyelesaian",
      blocks: [
        {
          type: "paragraph",
          text: "Saat menemukan persoalan dinamika gerak melingkar:"
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: " Tentukan benda yang dianalisis."
              },
              {
                text: "Tentukan posisi pusat lintasan."
              },
              {
                text: "Identifikasi semua gaya yang bekerja."
              },
              {
                text: "Tentukan arah radial menuju pusat"
              },
              {
                text: "Tentukan gaya atau kombinasi gaya yang menghasilkan resultan radial."
              },
              {
                text: "Terapkan Hukum Newton pada arah radial."
              }
            ]
          }
        }
      ]
    },
    {
      heading: "📝 Free Body Diagram",
      blocks: [

        {
          type: "paragraph",
          text: [
            "Free Body Diagram tetap menjadi alat utama. Jangan langsung menuliskan gaya sentripetal sebagai gaya tambahan. Gambarkan terlebih dahulu gaya-gaya nyata yang bekerja pada benda.",
            "Setelah itu, lihat apakah resultan gaya-gaya tersebut memiliki arah menuju pusat."
          ]
        }
      ]
    },
    {
      heading: "⚖️ Analisis Resultan Gaya",
      blocks: [
        {
          type: "paragraph",
          text: "Dalam dinamika gerak melingkar, kita dapat meninjau gaya pada arah radial."
        },
        {
          type: "equation",
          equation: "\\Sigma F_r = \\frac{mv^2}{r}"
        },
        {
          type: "paragraph",
          text: [
            "Persamaan tersebut tidak berarti ada gaya baru bernama $F_c$ yang harus selalu ditambahkan ke FBD.",
            "Sebaliknya, kita menjumlahkan gaya-gaya nyata pada arah radial dan menyamakannya dengan kebutuhan resultan gaya sentripetal."
          ]
        }
      ]
    },
    {
      heading: "🧩 Empat Contoh Sumber Gaya",
      blocks: [
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "🚗 Gaya Gesek ketika mobil Berbelok",
                description: "Pada tikungan datar, gaya gesek antara ban dan jalan dapat memberikan gaya menuju pusat tikungan."
              },
              {
                text: "🪢 Tegangan Tali ketika Bola Diputar",
                description: "Tegangan tali menarik bola menuju pusat sehingga bola dapat bergerak melingkar."
              },
              {
                text: "🪐 Gaya Gravitasi pada Lintasan Orbit",
                description: "Gaya gravitasi memberikan gaya tarik menuju pusat orbit sehingga benda langit dapat tetap mengorbit."
              },
              {
                text: "🎢 Gaya Normal dan Gravitasi pada Roller Coaster",
                description: "Pada bagian tertentu lintasan, gaya normal dan gravitasi dapat bekerja bersama atau berlawanan dalam menghasilkan resultan menuju pusat."
              }
            ]
          }
        }
      ]
    },
    {
      heading: "🧪 Contoh Soal",
      blocks: [
        {
          type: "paragraph",
          text: [
            "**SOAL:**",
            "Sebuah mobil bergerak melewati tikungan datar. Mobil tidak tergelincir keluar lintasan.",
            "Apa yang menyediakan gaya sentripetal?",
            "**JAWABAN:**",
            "**Penyelesaian**",
            "Identifikasi gaya yang bekerja pada mobil. Gaya berat dan gaya normal bekerja vertikal dan saling menyeimbangkan.",
            "**Kesimpulan:**",
            "Pada arah horizontal menuju pusat tikungan, gaya gesek ban dengan jalan memberikan resultan gaya yang menjaga mobil tetap mengikuti tikungan."
          ]
        }
      ]
    },
    {
      heading: "🌍 Contoh dalam Kehidupan",
      blocks: [
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "🚗 Mobil dan sepeda saat menikung."
              },
              {
                text: "🎡 Wahana permainan berputar."
              },
              {
                text: "🪢 Bola yang diputar dengan tali."
              },
              {
                text: "🪐 Satelit yang mengorbit Bumi."
              },
              {
                text: "🎢 Roller coaster pada lintasan melengkung."
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
                  "Setiap benda yang bergerak melingkar selalu memiliki gaya sentripetal sebagai gaya tambahan. ❌",
                  "Gak, gitu!",
                  "Faktanya, gaya sentripetal adalah nama untuk resultan gaya yang mengarah menuju pusat. ✔️"
                ]
              },
              {
                text: "Miskonsepsi 2",
                description: [
                  "Gaya gravitasi, gaya gesek, dan tegangan tali tidak berkaitan dengan gaya sentripetal. ❌",
                  "Gak, gitu!",
                  "Gak gitu, gaya-gaya tersebut dapat menjadi sumber resultan gaya sentripetal dalam situasi tertentu. ✔️"
                ]
              },
              {
                text: "Miskonsepsi 3",
                description: [
                  "Satu benda hanya dapat memiliki satu gaya yang berperan sebagai gaya sentripetal. ❌",
                  "Gak, gitu!",
                  "Beberapa gaya dapat bersama-sama menghasilkan resultan gaya menuju pusat. ✔️"
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
          text: "Satu konsep gaya sentripetal dapat muncul dalam sistem yang sangat berbeda: dari ban sepeda yang mencengkeram jalan hingga gravitasi yang menjaga planet tetap berada dalam orbit."
        }
      ]
    },
    {
      heading: "✨ Inti Materi",
      blocks: [

        {
          type: "paragraph",
          text: "Gaya sentripetal bukan jenis gaya tersendiri. Ia merupakan resultan gaya pada arah radial yang menuju pusat lintasan. Sumbernya dapat berupa satu gaya atau kombinasi beberapa gaya, tergantung pada sistem yang dianalisis."
        }
      ]
    },
    { heading: "🎯 Quick Check", 
      blocks: [
        {
          type: "quickCheck",
          data: {
            questions: [
              {
                question: "Pernyataan yang paling tepat mengenai sumber gaya sentripetal adalah....",
                options: [
                  "gaya sentripetal selalu berasal dari gaya gravitasi.",
                  "gaya sentripetal merupakan gaya baru yang selalu ditambahkan pada FBD.",
                  "gaya sentripetal dapat berasal dari berbagai gaya, tergantung pada situasi yang dianalisis.",
                  "gaya sentripetal hanya dapat berasal dari gaya gesek.",
                  "gaya sentripetal selalu berasal dari tegangan tali."
                ],
                answerIndex: 2
              },
              {
                question: "Sebuah mobil bergerak melewati tikungan datar dan tidak tergelincir. Gaya yang berperan memberikan resultan menuju pusat tikungan adalah....",
                options: [
                  "gaya gravitasi",
                  "gaya normal",
                  "gaya gesek",
                  "gaya tegangan tali",
                  "gaya hambatan udara"
                ],
                answerIndex: 2
              },
              {
                question: "Sebuah bola diputar menggunakan tali sehingga bergerak melingkar. Gaya yang menghasilkan resultan menuju pusat lintasan adalah....",
                options: [
                  "gaya berat",
                  "tegangan tali",
                  "gaya normal",
                  "gaya gesek udara",
                  "gaya apung"
                ],
                answerIndex: 1
              },
              {
                question: "Sebuah satelit bergerak mengorbit Bumi. Gaya yang berperan sebagai sumber resultan gaya menuju pusat orbit adalah....",
                options: [
                  "gaya gesek",
                  "gaya normal",
                  "gaya gravitasi",
                  "gaya tegangan tali",
                  "gaya magnet"
                ],
                answerIndex: 2
              },
              {
                question: "Pada roller coaster yang bergerak melewati lintasan melengkung, pernyataan yang benar adalah....",
                options: [
                  "gaya sentripetal selalu hanya berasal dari gaya gravitasi.",
                  "gaya sentripetal selalu hanya berasal dari gaya normal.",
                  "gaya normal dan gravitasi dapat bersama-sama menghasilkan resultan menuju pusat, bergantung pada posisi benda.",
                  "tidak ada gaya yang mengarah menuju pusat.",
                  "gaya sentripetal harus ditambahkan sebagai gaya baru pada FBD."
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
          text: [
            "Sekarang kamu sudah tahu bahwa sumber gaya sentripetal dapat berbeda-beda. Lalu, bagaimana jika kita benar-benar menganalisis sebuah kendaraan yang sedang berbelok?",
            "Pada materi berikutnya, kita akan membongkar gaya-gaya yang bekerja pada mobil saat melewati tikungan."
          ]
        }
      ]
    }
  ]
};

export default sumberGayaSentripetal;