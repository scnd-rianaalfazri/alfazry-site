const gerakVertikalBawah = {
  title: "Gerak Vertikal ke Bawah",
  slug: "gerak-vertikal-bawah",
  description: "Memahami konsep gerak vertikal ke bawah sebagai gerak lurus berubah beraturan (GLBB) dipercepat yang memiliki kecepatan awal.",
  chapter: "↔️↕️ Kinematika: Gerak Satu Dimensi",

  content: [
    {
      heading: "⬇️ Benda yang Bergerak Turun",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Tidak semua benda yang bergerak ke bawah atau jatuh itu berawal dari keadaan diam.",
            "Bayangkan kamu melempar bola kriket ke bawah dari lantai dua rumahmu, atau memukul bola smash saat bermain bulu tangkis ke arah tanah.",
            "Benda-benda tersebut sudah diberi dorongan awal (kecepatan awal) menuju ke bawah, lalu gerakannya makin cepat akibat ditarik gaya gravitasi.",
            "Gerakan seperti ini disebut Gerak Vertikal ke Bawah (GVB)."
          ]
        }
      ]
    },

    {
      heading: "📍 Apa Itu Gerak Vertikal ke Bawah?",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Gerak Vertikal ke Bawah (GVB) adalah gerak suatu benda pada lintasan lurus vertikal mengarah ke bawah dengan memiliki kecepatan awal $(v_0 > 0)$ dan dipengaruhi oleh percepatan gravitasi Bumi.",
            "Karena arah gerak benda searah dengan arah gaya gravitasi Bumi, benda mengalami percepatan konstan positif $(a = +g)$.",
            "Oleh sebab itu, GVB merupakan bentuk dari Gerak Lurus Berubah Beraturan (GLBB) dipercepat."
          ]
        }
      ]
    },

    {
      heading: "⚡ Perbedaan GVB vs Gerak Jatuh Bebas (GJB)",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Sering bingung bedain GVB dan GJB? Kunci utamanya ada pada kecepatan awal $(v_0)$:"
          ]
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "**Gerak Jatuh Bebas (GJB).**",
                description: "Benda dilepas begitu saja tanpa dorongan sama sekali $(v_0 = 0)$"
              },
              {
                text: "**Gerak Vertikal ke Bawah (GVB)**",
                description: "Benda dilempar atau didorong ke bawah sehingga sudah punya kecepatan awal $(v_0 > 0)$."
              }
            ]
          } 
        }
      ]
    },

    {
      heading: "📐 Persamaan Gerak Vertikal ke Bawah",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Rumus GVB diturunkan langsung dari persamaan GLBB dipercepat $(a = +g)$:",
            "$v_t = v_0 + gt$",
            "$h = v_0 t + \\frac{1}{2}gt^2$",
            "$v_t^2 = v_0^2 + 2gh$"
          ]
        },
        {
          type: "paragraph",
          text: [
            "Keterangan:"
          ]
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "$v_0$ = Kecepatan awal $(m/s)$"
              },
              {
                text: "$v_t$ = Kecepatan pada waktu $t$ $(m/s)$"
              },
              {
                text: "$g$ = Percepatan gravitasi $(m/s^2)$"
              },
              {
                text: "$h$ = Ketinggian / jarak tempuh vertikal $(m)$"
              },
              {
                text: "$t$ = Waktu tempuh $(s)$"
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
            "**Soal**",
            "Seorang anak melempar batu lurus ke bawah dari atap gedung berketinggian $20\\text{ meter}$ dengan kecepatan awal $5\\text{ m/s}$. Jika percepatan gravitasi $g = 10\\text{ m/s}^2$, berapa kecepatan batu tepat saat menyentuh tanah?",
            "**Pembahasan:**",
            "Diketahui:",
          ]
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "$v_0 = 5\\text{ m/s}$"
              },
              {
                text: "$h = 20\\text{ m}$"
              },
              {
                text: "$g = 10\\text{ m/s}^2$"
              }
            ]
          }
        },
        {
          type: "paragraph",
          text: [
            "Gunakan rumus kecepatan akhir tanpa variabel waktu, yaitu $(v_t^2 = v_0^2 + 2gh)$:",
            "$v_t^2 = (5)^2 + 2(10)(20)$",
            "$v_t^2 = 25 + 400 = 425$",
            "$v_t = \\sqrt{425} \\approx 20,62\\text{ m/s}$",
            "Jadi, kecepatan batu tepat sebelum menyentuh tanah adalah sekitar **$20,62\\text{ m/s}$**."
          ]
        }
      ]
    },

    {
      heading: "🌍 Penerapan dalam Kehidupan",
      blocks: [
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              "🏀 Lemparan bola basket ke lantai saat melakukan *bounce pass*.",
              "🏐 Pukulan *spike* atau *smash* bola voli ke arah bawah.",
              "💧 Semburan air dari pompa air atau selang yang diarahkan langsung ke bawah.",
              "🎯 Melempar anak panah atau kelereng lurus ke bawah."
            ]
          } 
        }
      ]
    },

    {
      heading: "🧠 Miskonsepsi yang Sering Terjadi",
      blocks: [
        {
          type: "paragraph",
          text: [
            "*'Semua benda yang bergerak jatuh ke bawah itu dinamakan Gerak Jatuh Bebas (GJB).'* ❌",,
            "Gak, gitu!",
            "Faktanya, tidak semua gerak ke bawah adalah GJB! Jika benda diberi dorongan atau leparan awal $(v_0 > 0)$, gerakannya dikategorikan sebagai Gerak Vertikal ke Bawah (GVB). Sebutan 'bebas' pada GJB berarti bebas dari dorongan awal."
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
                text: "GVB adalah GLBB dipercepat searah gravitasi Bumi dengan tanda $+g$."
              },
              {
                text: "Ciri khas utama GVB adalah memiliki kecepatan awal wajib $(v_0 > 0)$."
              },
              {
                text: "Kecepatan benda terus bertambah besar seiring berkurangnya ketinggian."
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
              question: "Gerak Vertikal ke Bawah (GVB) adalah....",
              options: [
                "gerak benda yang dijatuhkan tanpa kecepatan awal.",
                "gerak benda yang dilempar ke atas dengan kecepatan awal tertentu.",
                "gerak benda yang bergerak vertikal ke bawah dengan kecepatan awal dan dipengaruhi oleh gravitasi.",
                "gerak benda yang bergerak horizontal dengan kecepatan tetap.",
                "gerak benda yang memiliki percepatan nol."
              ],
              answerIndex: 2
            },
            {
              question: "Perbedaan utama antara Gerak Vertikal ke Bawah (GVB) dan Gerak Jatuh Bebas (GJB) adalah....",
              options: [
                "GVB memiliki kecepatan awal, sedangkan GJB dimulai dari keadaan diam.",
                "GVB tidak dipengaruhi gravitasi, sedangkan GJB dipengaruhi gravitasi.",
                "GVB memiliki percepatan nol, sedangkan GJB memiliki percepatan tetap.",
                "GVB bergerak ke atas, sedangkan GJB bergerak ke bawah.",
                "GVB memiliki kecepatan tetap, sedangkan GJB memiliki kecepatan yang berubah."
              ],
              answerIndex: 0
            },
            {
              question: "Sebuah batu dilempar vertikal ke bawah dengan kecepatan awal 5 m/s. Jika percepatan gravitasi 10 m/s², berapakah kecepatan batu setelah 2 sekon?",
              options: [
                "10 m/s.",
                "15 m/s.",
                "20 m/s.",
                "25 m/s.",
                "30 m/s."
              ],
              answerIndex: 3
            },
            {
              question: "Sebuah benda dilempar ke bawah dengan kecepatan awal 5 m/s dari ketinggian 20 meter. Jika g = 10 m/s², kecepatan benda sesaat sebelum menyentuh tanah adalah sekitar....",
              options: [
                "15,62 m/s.",
                "18,25 m/s.",
                "20,62 m/s.",
                "25,00 m/s.",
                "30,62 m/s."
              ],
              answerIndex: 2
            },
            {
              question: "Pernyataan yang benar mengenai Gerak Vertikal ke Bawah adalah....",
              options: [
                "semua benda yang bergerak ke bawah pasti mengalami Gerak Jatuh Bebas.",
                "GVB memiliki kecepatan awal nol, sedangkan GJB memiliki kecepatan awal tertentu.",
                "GVB merupakan GLBB dipercepat karena arah gerak benda searah dengan gravitasi.",
                "pada GVB, kecepatan benda selalu tetap selama bergerak.",
                "GVB tidak dipengaruhi oleh percepatan gravitasi."
                ],
              answerIndex: 2
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
            "Selamat! Kamu telah menyelesaikan seluruh rangkaian pembahasan gerak lurus satu dimensi (GLB, GLBB, GJB, GVA, dan GVB).",
            "➡️ Next, kita menuju portal: Penutup Gerak Satu Dimensi"
          ]
        }
      ]
    }
  ]
};

export default gerakVertikalBawah;