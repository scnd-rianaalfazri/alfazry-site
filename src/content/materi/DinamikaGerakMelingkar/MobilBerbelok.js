const mobilBerbelok = {
  title: "Mobil Berbelok di Tikungan",
  slug: "mobil-berbelok-di-tikungan",
  description: "Menganalisis peran gaya gesek sebagai penyedia gaya sentripetal pada kendaraan yang bergerak di tikungan datar.",
  chapter: "🌀 Dinamika Gerak Melingkar",

  content: [
    { blocks: [
        {
          type: "paragraph",
          text: [
            "Bayangkan sebuah mobil sedang melaju di jalan lurus. Ketika pengemudi memutar kemudi, mobil mulai mengikuti tikungan.",
            "Padahal menurut Hukum Newton I, benda yang bergerak akan cenderung mempertahankan geraknya dalam garis lurus.",
            "Lalu apa yang membuat mobil dapat membelok?",
            "Jawabannya ada pada interaksi antara ban dan permukaan jalan."
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
            items: [
              {
                text: "Bagaimana gaya gesek antara ban dan jalan dapat membuat mobil mengikuti lintasan melingkar?"
              },
              {
                text: "Apa yang terjadi jika mobil melaju terlalu cepat saat melewati tikungan?"
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
            "Anggap mobil melewati tikungan datar tanpa kemiringan jalan.",
            "Gaya yang bekerja pada mobil adalah:"
          ]
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "⬇ Gaya berat (W)"
              },
              {
                text: "⬆ Gaya normal (N)"
              },
              {
                text: "↔ Gaya gesek antara ban dan jalan"
              },
              {
                text: "Gaya gesek memiliki arah menuju pusat tikungan dan menjadi penyedia gaya sentripetal."
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
            "Bayangkan mobil sedang berada di sebuah tikungan berbentuk lingkaran.",
            "Tampilkan:"
          ]
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "Arah kecepatan mobil yang menyinggung lintasan."
              },
              {
                text: "Pusat tikungan."
              },
              {
                text: "Arah gaya gesek menuju pusat."
              },
              {
                text: "Arah percepatan sentripetal menuju pusat."
              }
            ]
          }
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
            items: [
              {
                text: "Tentukan posisi mobil dan pusat tikungan."
              },
              {
                text: "Identifikasi semua gaya yang bekerja."
              },
              {
                text: "Tentukan arah radial menuju pusat."
              },
              {
                text: "Buat Free Body Diagram."
              },
              {
                text: "Analisis gaya pada arah radial."
              },
              {
                text: "Terapkan Hukum Newton II."
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
            "Pada mobil terdapat gaya berat ke bawah dan gaya normal ke atas.",
            "Keduanya saling menyeimbangkan pada arah vertikal.",
            "Pada arah horizontal menuju pusat tikungan terdapat gaya gesek.",
            "Jadi, untuk tikungan datar:",
            "Gaya gesek → penyedia gaya sentripetal."
          ]
        }
      ]
    },
    {
      heading: "⚖️ Analisis Resultan Gaya",
      blocks: [
        {
          type: "paragraph",
          text: "Pada arah vertikal:"
        },
        {
          type: "equation",
          equation: "N = mg"
        },
        {
          type: "paragraph",
          text: "Pada arah radial:"
        },
        {
          type: "equation",
          equation: "f = \\frac{mv^2}{r}"
        },
        {
          type: "paragraph",
          text: "Artinya, gaya gesek harus menyediakan resultan gaya yang cukup untuk mempertahankan mobil pada lintasan melingkar."
        }
      ]
    },

    {
      heading: "🧲 Batas Gaya Gesek",
      blocks: [
        {
          type: "paragraph",
          text: "Gaya gesek tidak dapat bertambah tanpa batas. Pada kondisi tikungan dan model gesekan yang digunakan, terdapat batas gaya gesek maksimum."
        },
        {
          type: "equation",
          equation: "f_{maks}=\\mu_s N"
        },
        {
          type: "paragraph",
          text: "Karena $\\text{N = mg}:"
        },
        {
          type: "equation",
          equation: "f_{maks}=\\mu_s mg"
        },
        {
          type: "paragraph",
          text: "Jika kebutuhan gaya sentripetal melebihi kemampuan gaya gesek, mobil dapat kehilangan cengkeraman dan mulai tergelincir."
        }
      ]
    },
    {
      heading: "🧪 Contoh Soal",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Sebuah mobil bermassa $\\text{1.000 kg}$ melewati tikungan datar berjari-jari $\\text{50 m}$ dengan kelajuan $\\text{10 m/s}$.",
            "Gaya sentripetal yang dibutuhkan adalah:"
          ]
        },
        {
          type: "equation",
          equation: "F_c=\\frac{(1000)(10^2)}{50}=2000\\;N"
        },
        {
          type: "paragraph",
          text: [
            "Artinya, diperlukan resultan gaya horizontal sebesar $\\text{2.000 N}$ menuju pusat tikungan.",
            "Pada tikungan datar, gaya tersebut disediakan oleh gaya gesek antara ban dan jalan."
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
            type: "unordered",
            items: [
              {
                text: "🚗 Mobil melewati tikungan."
              },
              {
                text: "🏍️ Sepeda motor menikung."
              },
              {
                text: "🚲 Sepeda membelok di jalan."
              },
              {
                text: "🏎️ Mobil balap melewati tikungan dengan kecepatan tinggi."
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
                  "Mobil dapat berbelok karena ada gaya sentrifugal yang mendorong mobil ke arah luar. ❌",
                  "Dalam kerangka acuan jalan yang dianggap inersial, gaya horizontal yang menjaga mobil tetap berbelok adalah gaya gesek yang arahnya menuju pusat tikungan. ✔️"
                ]
              },
              {
                text: "Miskonsepsi 2",
                description: [
                  "Semakin cepat mobil, semakin kecil gaya sentripetal yang diperlukan. ❌",
                  "Untuk massa dan jari-jari yang sama, kebutuhan gaya sentripetal meningkat sebanding dengan kuadrat kelajuan. ✔️"
                ]
              },
              {
                text: "Miskonsepsi 3",
                description: [
                  "Ban yang tidak tergelincir berarti tidak ada gaya gesek. ❌",
                  "Gaya gesek statis dapat bekerja tanpa menyebabkan permukaan ban tergelincir relatif terhadap jalan. ✔️"
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
          text: "Ban kendaraan dirancang dengan pola dan material tertentu agar mampu menghasilkan gaya gesek yang cukup dengan permukaan jalan. Karena itu, kondisi jalan yang basah atau licin dapat membuat kendaraan lebih sulit dikendalikan saat menikung."
        }
      ]
    },
    {
      heading: "✨ Inti Materi",
      blocks: [
        {
          type: "paragraph",
          text: "Pada tikungan datar, gaya gesek statis antara ban dan jalan dapat menjadi penyedia gaya sentripetal. Semakin besar kelajuan kendaraan, semakin besar gaya sentripetal yang dibutuhkan. Jika kebutuhan tersebut melampaui batas gaya gesek yang tersedia, kendaraan dapat tergelincir."
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
                question: "Pada tikungan datar, gaya yang berperan sebagai penyedia gaya sentripetal pada mobil adalah....",
                options: [
                  "gaya gesek",
                  "aya gravitasi",
                  "gaya normal",                  
                  "gaya sentrifugal",
                  "gaya hambatan udara"
                ],
                answerIndex: 0
              },
              {
                question: "Sebuah mobil bermassa 1.000 kg bergerak dengan kelajuan 10 m/s pada tikungan berjari-jari 50 m. Besar gaya sentripetal yang dibutuhkan mobil adalah....",
                options: [
                  "200 N",
                  "500 N",
                  "1.000 N",
                  "2.000 N",
                  "5.000 N",
                ],
                answerIndex: 3
              },
              {
                question: "Jika kelajuan mobil di tikungan diperbesar, sedangkan massa dan jari-jari tikungan tetap, maka kebutuhan gaya sentripetal akan....",
                options: [
                  "berkurang",
                  "tetap",
                  "bertambah sebanding dengan kelajuan",
                  "bertambah sebanding dengan kuadrat kelajuan",
                  "menjadi nol"
                ],
                answerIndex: 3
              },
              {
                question: "Sebuah mobil tidak tergelincir saat menikung meskipun gaya gesek yang bekerja adalah gaya gesek statis. Pernyataan yang tepat adalah....",
                options: [
                  "gaya gesek statis hanya bekerja ketika mobil diam.",
                  "gaya gesek statis dapat bekerja tanpa terjadi tergelincir relatif antara ban dan jalan.",
                  "gaya gesek statis selalu berlawanan dengan arah kecepatan mobil.",
                  "gaya gesek statis tidak dapat menghasilkan gaya sentripetal.",
                  "gaya gesek statis selalu bernilai nol."
                ],
                answerIndex: 1
              },
              {
                question: "Jika kebutuhan gaya sentripetal mobil melebihi gaya gesek maksimum yang dapat diberikan jalan, maka....",
                options: [
                  "mobil akan semakin mudah berbelok.",
                  "gaya gravitasi menjadi lebih besar.",
                  "mobil dapat kehilangan cengkeraman dan mulai tergelincir.",
                  "gaya normal menjadi nol.",
                  "mobil akan otomatis berhenti."
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
            "Pada mobil, gaya sentripetal berasal dari interaksi ban dengan jalan. Tetapi, bagaimana jika benda tidak menyentuh permukaan jalan sama sekali dan tetap dapat bergerak melingkar?",
            "Pada materi berikutnya, kita akan memutar sebuah benda menggunakan tali dan mencari tahu bagaimana tegangan tali menjadi penyedia gaya sentripetal."
          ]
        }
      ]
    }
  ]
};

export default mobilBerbelok;