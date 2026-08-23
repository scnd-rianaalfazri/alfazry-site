const rollerCoaster = {
  title: "Roller Coaster dan Gaya Sentripetal",
  slug: "roller-coaster-dan-gaya-sentripetal",
  description: "Menganalisis gaya-gaya yang bekerja pada benda di lintasan melingkar dan memahami bagaimana resultannya menjaga roller coaster tetap mengikuti lintasan.",
  chapter: "🌀 Dinamika Gerak Melingkar",

  content: [
    {
      heading: "🎢 Mengapa Roller Coaster Tidak Jatuh?",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Bayangkan sebuah kereta roller coaster melewati bagian lintasan yang berbentuk lingkaran.",
            "Pada titik tertentu, kereta bahkan bisa berada di posisi terbalik dengan penumpang berada di atas lintasan.",
            "Mengapa kereta tetap mengikuti lintasan?",
            "Apa yang membuat kereta memiliki percepatan menuju pusat lintasan?"
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
                text: "Bagaimana gaya gravitasi dan gaya normal dapat menghasilkan resultan gaya sentripetal pada roller coaster?"
              },
              {
                text: "Mengapa sensasi yang dirasakan penumpang dapat berbeda di bagian bawah dan bagian atas lintasan?"
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
          text: "Untuk menganalisis kereta pada lintasan melingkar vertikal, perhatikan dua gaya utama:"
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "⬇ Gaya berat $(W = mg)$, selalu mengarah ke bawah."
              },
              {
                text: "⬆ Gaya normal $(N)$, arahnya tegak lurus permukaan lintasan."
              }
            ]
          }
        },
        {
          type: "paragraph",
          text: "Arah menuju pusat lintasan berubah sesuai posisi kereta. Karena itu, arah radial harus ditentukan terlebih dahulu sebelum menjumlahkan gaya."
        }
      ]
    },

    {
      heading: "🎨 Visualisasi Konsep",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Bayangkan roller coaster melewati lintasan berbentuk lingkaran vertikal.",
            "Tandai tiga posisi:"
          ]
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "🔵 Bagian bawah lintasan → pusat berada di atas kereta."
              },
              {
                text: "🟣 Bagian samping lintasan → pusat berada ke arah horizontal."
              },
              {
                text: "🔴 Bagian atas lintasan → pusat berada di bawah kereta."
              }
            ]
          }
        },
        {
          type: "paragraph",
          text: "Perubahan posisi pusat ini membuat analisis gaya pada arah radial juga berubah."
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
                text: "Tentukan posisi kereta pada lintasan."
              },
              {
                text:"Tentukan arah pusat lingkaran dari posisi tersebut."
              },
                            {
                text:" Identifikasi gaya berat dan gaya normal."
              },
              {
                text: "Buat *Free Body Diagram*."
              },
              {
                text: "Tentukan gaya yang searah dan berlawanan dengan arah radial."
              },
              {
                text: "Terapkan Hukum Newton II pada arah radial."
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
            "FBD harus dibuat berdasarkan posisi kereta.",
            "Jangan langsung menganggap gaya normal selalu menuju pusat. Arah gaya normal ditentukan oleh arah permukaan lintasan terhadap kereta.",
            "Setelah semua gaya digambar, tentukan komponen gaya yang bekerja pada arah menuju pusat."
          ]
        }
      ]
    },
    {
      heading: "⬇️ Analisis di Bagian Bawah",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Di bagian bawah lintasan, pusat lingkaran berada di atas kereta.",
            "Gaya normal mengarah ke atas, sedangkan gaya berat mengarah ke bawah."
          ]
        },
        {
          type: "equation",
          equation: "N - mg = \\frac{mv^2}{r}"
        },
        {
          type: "paragraph",
          text: "Gaya normal harus lebih besar daripada gaya berat agar terdapat resultan gaya menuju pusat."
        }
      ]
    },

    {
      heading: "⬆️ Analisis di Bagian Atas",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Di bagian atas lintasan, pusat lingkaran berada di bawah kereta.",
            "Gaya berat mengarah ke bawah, menuju pusat lintasan.",
            "Pada kondisi ketika kereta masih bersentuhan dengan lintasan, gaya normal juga dapat memiliki arah menuju pusat."
          ]
        },
        {
          type: "equation",
          equation: "N + mg = \\frac{mv^2}{r}"
        },
        {
          type: "paragraph",
          text: "Dalam kondisi tertentu, gaya gravitasi sendiri dapat menyediakan sebagian besar atau bahkan seluruh kebutuhan gaya sentripetal."
        }
      ]
    },
    {
      heading: "🧪 Contoh Soal",
      blocks: [
        {
          type: "paragraph",
          text: [
            "*SOAL*",
            "Sebuah kereta roller coaster bermassa $500 \\ kg$ melewati bagian bawah lintasan melingkar berjari-jari $20 \\ m$ dengan kelajuan $10 \\ m/s$. Gunakan $g = 10 \\ m/s^2$.",
            "*JAWAB:**",
            "**Penyelesaian:**"
          ]
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "Pertama, tentukan kebutuhan resultan gaya menuju pusat.",
                equation: [
                  "F_c = \\frac{mv^2}{r}",
                  "F_c = \\frac{(500)(10^2)}{20}=2500\\;N"
                ]
              },
              {
                text: "Di bagian bawah, gaya normal dan gaya berat berlawanan arah sehingga:",
                equation: [
                  "N-mg=2500",
                  "N-5000=2500",
                  "N=7500\\;N"
                ]
              }
            ]
          }
        },
        {
          type: "paragraph",
          text: [
            "*Kesimpulan:*",
            "Gaya normal menjadi lebih besar daripada berat karena kereta membutuhkan resultan gaya ke arah pusat."
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
                text: "🎢 Loop pada roller coaster."
              },
              {
                text: "🏍️ Wahana motor yang bergerak pada lintasan vertikal."
              },
              {
                text: "🎡 Sistem wahana yang bergerak mengikuti lintasan melingkar."
              },
              {
                text: "🛩️ Pesawat yang melakukan manuver melingkar atau loop."
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
                text: "miskonsepsi 1",
                description: [
                  "Gaya sentripetal selalu berasal dari gaya normal. ❌",
                  "Gak, gitu",
                  "Tidak. Gaya sentripetal merupakan resultan gaya menuju pusat. Pada roller coaster, gaya gravitasi dan gaya normal dapat berkontribusi terhadap resultan tersebut. ✔️"
                ]
              },
              {
                text: "Miskonsepsi 2",
                description: [
                  "Gaya berat selalu berlawanan arah dengan gaya sentripetal. ❌",
                  "Gak, gitu!",
                  "Arah gaya sentripetal ditentukan oleh posisi pusat lintasan. Di bagian atas lintasan, gaya berat justru mengarah menuju pusat. ✔️"
                ]
              },
              {
                text: "Miskonsepsi 3",
                description: [
                  "Penumpang tetap merasakan gaya yang sama di seluruh lintasan. ❌",
                  "Gak, gitu!",
                  "Gaya normal dapat berubah sesuai posisi dan kelajuan kereta sehingga sensasi berat atau ringan juga dapat berubah. ✔️"
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
          text: "Sensasi 'lebih berat' yang dirasakan penumpang roller coaster di bagian bawah loop berkaitan dengan gaya normal yang dapat menjadi jauh lebih besar daripada berat tubuhnya."
        }
      ]
    },
    {
      heading: "✨ Inti Materi",
      blocks: [
        {
          type: "paragraph",
          text: "Pada lintasan melingkar vertikal, gaya sentripetal dapat berasal dari kombinasi gaya gravitasi dan gaya normal. Kunci analisisnya adalah menentukan arah pusat lintasan terlebih dahulu, kemudian menjumlahkan gaya-gaya pada arah radial."
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
                question: "Pada roller coaster yang bergerak pada lintasan melingkar vertikal, gaya sentripetal merupakan....",
                options: [
                  "resultan gaya yang arahnya menuju pusat lintasan",
                  "gaya normal saja",
                  "gaya tambahan yang selalu bekerja ke pusat",
                  "gaya gravitasi saja",
                  "gaya yang arahnya menjauhi pusat lintasan"
                ],
                answerIndex: 0
              },
              {
                question: "Di bagian bawah lintasan loop, arah pusat lingkaran berada....",
                options: [
                  "di bawah kereta",
                  "di atas kereta",
                  "di sebelah kiri kereta",
                  "di sebelah kanan kereta",
                  "berlawanan dengan arah gerak kereta"
                ],
                answerIndex: 1
              },
              {
                question: "Sebuah roller coaster bermassa 500 kg bergerak dengan kelajuan 10 m/s pada bagian bawah lintasan berjari-jari 20 m. Jika $g=10 m/s^2$, besar gaya normal pada kereta adalah....",
                options: [
                  "2.500 N",
                  "5.000 N",
                  "7.500 N",
                  "10.000 N",
                  "12.500 N"
                ],
                answerIndex: 2
              },
              {
                question: "Mengapa gaya normal di bagian bawah loop dapat lebih besar daripada gaya berat?",
                options: [
                  "Karena massa kereta bertambah saat bergerak melingkar.",
                  "Karena gaya gravitasi berubah arah menjadi ke atas.",
                  "Karena diperlukan resultan gaya menuju pusat.",
                  "Karena gaya sentripetal merupakan gaya tambahan yang bekerja pada kereta.",
                  "Karena gaya gravitasi tidak bekerja di bagian bawah loop."
                ],
                answerIndex: 2
              },
              {
                question: "Di bagian atas loop, gaya berat kereta mengarah....",
                options: [
                  "menjauhi pusat lintasan",
                  "tegak lurus terhadap pusat lintasan",
                  "berlawanan dengan arah gaya normal dalam semua kondisi",
                  "sejajar dengan arah gerak kereta",
                  "menuju pusat lintasan"
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
          text: [
            "Sekarang kamu sudah melihat bahwa gaya sentripetal dapat berasal dari gaya gesek, tegangan tali, serta kombinasi gaya normal dan gravitasi.",
            "Lalu bagaimana dengan benda yang bergerak melingkar di luar angkasa, tanpa tali dan tanpa permukaan yang menyentuhnya?",
            "Pada page berikutnya, kita akan melihat bagaimana gravitasi menjaga planet dan satelit tetap berada pada orbitnya."
          ]
        }
      ]
    }
  ]
};

export default rollerCoaster;