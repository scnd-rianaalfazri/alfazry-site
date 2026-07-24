const gerakjatuhbebas = {
  title: "Gerak Jatuh Bebas",
  slug: "gerak-jatuh-bebas",
  description: "Memahami Gerak Jatuh Bebas sebagai salah satu bentuk Gerak Lurus Berubah Beraturan yang dipengaruhi oleh gravitasi Bumi.",
  chapter: "↔️↕️ Kinematika: Gerak Satu Dimensi",

  content: [
    {
      heading: "🍎 Mengapa Semua Benda Jatuh ke Bawah?",
      blocks: [

        {
          type: "paragraph",
          text: [
            "Pernahkah kamu menjatuhkan sebuah apel, buku, atau bola? Semua benda tersebut selalu bergerak menuju permukaan Bumi.",
            "Mengapa benda tidak melayang ke atas atau bergerak ke samping?",
            "Jawabannya adalah karena adanya gaya gravitasi yang selalu menarik benda menuju pusat Bumi."
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
            "Apakah benda yang lebih berat akan jatuh lebih cepat daripada benda yang lebih ringan?",
            "Mengapa semua benda tampak semakin cepat ketika mendekati tanah?"
          ]
        }
      ]
    },
    {
      heading: "🍎 Apa Itu Gerak Jatuh Bebas?",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Gerak Jatuh Bebas (GJB) adalah gerak suatu benda yang dijatuhkan tanpa kecepatan awal $(v_0 = 0)$ dan hanya dipengaruhi oleh gaya gravitasi.",
            "Karena percepatannya selalu tetap, Gerak Jatuh Bebas merupakan salah satu bentuk khusus dari Gerak Lurus Berubah Beraturan (GLBB)."
          ]
        }
      ]
    },
    {
      heading: "⭐ Ciri-Ciri Gerak Jatuh Bebas",
      blocks: [
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "Kecepatan awal bernilai nol $(v_0 = 0)$."
              },
              {
                text: "Lintasan berupa garis lurus vertikal ke bawah."
              },
              {
                text: "Gerakannya hanya dipengaruhi oleh gaya gravitasi (hambatan udara diabaikan)."
              },
              {
                text: "Percepatan gerak benda sama dengan percepatan gravitasi $(a = g)$."
              }
            ]
          }
        }
      ]
    },
    {
      heading: "📐 Persamaan Gerak Jatuh Bebas",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Karena kecepatan awal bernilai nol $(v_0 = 0)$, tiga rumus utama GLBB bertransformasi menjadi lebih sederhana:",    
          ]
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "$v = gt$",
              },
              {
                text: "$h = \\frac{1}{2}gt^2$",
              },
              {
                text: "$v^2 = 2gh$"
              }
            ]
          }
        },
        {
          type: "paragraph",
          text: [
            "**Keterangan:**"
          ]
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "v = kecepatan benda pada saat tertentu $(m/s)$"
              },
              {
                text: "g = percepatan gravitasi $(≈ 9,8 m/s^2$ atau dibulatkan menjadi $10 m/s^2)$"
              },
              {
                text: "t = waktu tempuh atau waktu jatuh $(s)$"
              },
              {
                text: "h = ketinggian atau jarak tempuh jatuh $(m)$"
              }
            ]
          }
        }
      ]
    },
    {
      heading: "🎯 Visualisasi Konsep",
      blocks: [
        {
          type: "paragraph",
          text: "Bayangkan sebuah bola dijatuhkan dari atas gedung."
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "Detik ke-0: Bola baru dilepas, $v = 0 m/s$."
              },
              {
                text: "Detik ke-1: Kecepatan bola bertambah menjadi $9,8 m/s$."
              },
              {
                text: "Detik ke-2: Kecepatan bola bertambah lagi menjadi $19,6 m/s$."
              }
            ]
          }
        },
        {
          type: "paragraph",
          text: [
            "Semakin lama jatuh, kecepatan bola terus bertambah secara konstan akibat percepatan gravitasi."
          ]
        }
      ]
    },
    {
      heading: "📊 Grafik Gerak",
      blocks: [
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "Grafik Ketinggian terhadap Waktu (h-t)",
                description: "Berbentuk parabola/kurva karena jarak berbanding lurus dengan kuadrat waktu ($h \\propto t^2$)."
              },
              {
                text: "Grafik Kecepatan terhadap Waktu (v-t)",
                description: "Berupa garis lurus miring ke atas yang dimulai dari titik asal (0,0)."
              },
              {
                text: "Grafik Percepatan terhadap Waktu (a-t)",
                description: "Berupa garis lurus horizontal konstan pada nilai g."
              }
            ]
          }
        }
      ]
    },
    {
      heading: "🧮 Contoh Soal & Pembahasan",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Sebuah kelapa jatuh bebas dari pohonnya yang berketinggian 20 meter. Jika percepatan gravitasi bumi $g = 10\\text{ m/s}^2$, hitunglah waktu yang dibutuhkan kelapa untuk sampai di tanah dan kecepatannya sesaat sebelum menyentuh tanah!",
            "**💡 Penyelesaian:**",
            "Diketahui:"
          ]
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "$h = 20\\text{ m}$"
              },
              {
                text: "$g = 10\\text{ m/s}^2$"
              },
              {
                text: "$v_0 = 0$"
              }
            ]
          }
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "Mencari waktu jatuh $(t)$",
                description: [
                  "$h = \\frac{1}{2}gt^2 \\implies 20 = \\frac{1}{2}(10)t^2 \\implies 20 = 5t^2 \\implies t^2 = 4 \\implies t = 2\\text{ detik}$"
                ]
              },
              {
                text: "2. Mencari kecepatan saat menyentuh tanah ($v$)",
                description: "$v = gt = 10 \\times 2 = 20\\text{ m/s}$"
              }
            ]
          }
        },
        {
          type: "paragraph",
          text: [
            "Jadi, kelapa menyentuh tanah dalam waktu **2 detik** dengan kecepatan **20 m/s**."
          ]
        }
      ]
    },
    {
      heading: "🧪 Mini Lab: Uji Miskonsepsi di Rumah",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Cobalah ambil selembar kertas dan sebuah koin. Jatuhkan keduanya secara bersamaan dari ketinggian yang sama. Koin akan jatuh lebih dulu karena kertas terhambat oleh udara.",
            "Sekarang, remas kertas tersebut hingga menjadi bola padat yang kecil. Jatuhkan kembali bersama koin. Hasilnya? Keduanya akan menyentuh lantai secara hampir bersamaan! Ini membuktikan bahwa berat benda tidak memengaruhi kecepatan jatuh jika hambatan udara diabaikan."
          ]
        }
      ]
    },
    {
      heading: "🌎 Contoh dalam Kehidupan",
      blocks: [
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "🍎 Buah yang lepas dari tangkainya dan jatuh ke tanah."
              },
              {
                text: "🪂 Benda yang tidak sengaja terlepas dari genggaman di atas gedung."
              },
              {
                text: "🛰️ Tetesan air hujan di awal jatuhnya sebelum mencapai kecepatan terminal."
              }
            ]
          }
        }
      ]
    },
    {
      heading: "⚠️ Miskonsepsi Umum",
      blocks: [
        {
          type: "paragraph",
          text: [
            "*Benda yang lebih berat jatuh lebih cepat daripada benda yang lebih ringan.* ❌",
            "Namun faktanya, massa ($m$) tidak ada di dalam rumus Gerak Jatuh Bebas! Jika hambatan udara ditiadakan (misalnya di ruang hampa), sebuah bola besi dan sebuah bulu ayam akan jatuh dengan kecepatan dan waktu yang persis sama. ✔️"
          ]
        }
      ]
    },
    {
      heading: "🌟 Fun Fact",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Astronot Apollo 15, David Scott, pernah membuktikan teori Galileo Galilei ini secara langsung di Bulan pada tahun 1971. Ia menjatuhkan sebuah palu geologi dan bulu elang secara bersamaan. Karena Bulan tidak memiliki atmosfer (hampa udara), keduanya mendarat di permukaan Bulan persis secara bersamaan!"
          ]
        }
      ]
    },

    {
      heading: "✨ Inti Materi *(Takeaway Message)*",
      blocks: [
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "Gerak Jatuh Bebas (GJB) adalah GLBB vertikal ke bawah tanpa kecepatan awal $(v_0 = 0)$."
              },
              {
                text: "Percepatan yang dialami benda selalu konstan yaitu sebesar $g$ (gravitasi)."
              },
              {
                text: "• Waktu dan kecepatan jatuh hanya dipengaruhi oleh ketinggian $(h)$ dan percepatan gravitasi $(g)$, bukan oleh massa benda."
              }
            ]
          }
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
              question: "Gerak Jatuh Bebas (GJB) adalah....",
              options: [
                "gerak benda yang dilempar ke atas dengan kecepatan awal tertentu.",
                "gerak benda yang dijatuhkan tanpa kecepatan awal dan hanya dipengaruhi oleh gaya gravitasi.",
                "gerak benda pada lintasan melingkar dengan kecepatan tetap.",
                "gerak benda dengan percepatan nol.",
                "gerak benda yang dipengaruhi oleh gaya dorong mesin."
              ],
              answerIndex: 1
            },
            {
              question: "Manakah yang merupakan ciri-ciri Gerak Jatuh Bebas?",
              options: [
                "Kecepatan awal tidak nol dan lintasan melingkar.",
                "Kecepatan awal nol, lintasan vertikal ke bawah, serta hanya dipengaruhi gravitasi.",
                "Kecepatan selalu tetap sepanjang gerak.",
                "Percepatan bernilai nol.",
                "Benda bergerak dengan lintasan horizontal."
              ],
              answerIndex: 1
            },
            {
              question: "Sebuah bola dijatuhkan dari keadaan diam. Jika percepatan gravitasi 10 m/s², berapakah kecepatan bola setelah 3 sekon?",
              options: [
                "10 m/s.",
                "20 m/s.",
                "25 m/s.",
                "30 m/s.",
                "40 m/s."
              ],
              answerIndex: 3
            },
            {
              question: "Mengapa bola besi dan bulu ayam dapat jatuh bersamaan di ruang hampa udara?",
              options: [
                "Karena massa keduanya sama.",
                "Karena gaya gravitasi tidak bekerja di ruang hampa.",
                "Karena hambatan udara tidak ada sehingga massa tidak memengaruhi waktu jatuh.",
                "Karena bulu ayam memiliki percepatan lebih besar.",
                "Karena benda yang ringan selalu dipercepat lebih besar."
              ],
              answerIndex: 2
            },
            {
              question: "Pernyataan yang benar mengenai Gerak Jatuh Bebas adalah....",
              options: [
                "semakin berat benda, semakin cepat benda jatuh dalam semua kondisi.",
                "gerak Jatuh Bebas merupakan salah satu bentuk GLBB dengan percepatan gravitasi yang konstan.",
                "gerak Jatuh Bebas memiliki percepatan nol.",
                "gerak Jatuh Bebas hanya terjadi jika ada gaya dorong dari luar.",
                "kecepatan benda selalu tetap selama jatuh."
                ],
              answerIndex: 1
            }],
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
            }]
          }
        }
      ]
    },
    {
      heading: "🚀 Next Mission",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Bagaimana jika sebuah benda justru kita lemparkan ke atas terlebih dahulu dengan kecepatan awal tertentu?",
            "➡️ Next, menuju portal: [**Gerak Vertikal ke Atas (GVA).**](/materi/gerak-vertikal-atas)"
          ]
        }
      ]
    }
  ]
};

export default gerakjatuhbebas;