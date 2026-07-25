import { text } from "framer-motion/client";

const analisissumbuxdany = {
  title: "Analisis Sumbu X dan Y",
  slug: "analisis-sumbu-x-dan-y",
  description: "Memahami cara menganalisis gerak benda berdasarkan komponen horizontal dan vertikal.",
  chapter: "🏀 Kinematika: Gerak Dua Dimensi",
  content: [
    {
      blocks: [
        {
          type: "paragraph",
          text: [
            "Bayangkan sebuah drone sedang terbang di atas sebuah lapangan.",
            "Kalau kita hanya mengatakan drone berada 20 meter dari titik awal, informasi itu belum cukup untuk mengetahui posisi drone secara tepat.",
            "Kita juga perlu tahu: 20 meter ke arah mana?",
            "Untuk menentukan posisi benda yang bergerak pada bidang, kita membutuhkan dua informasi: posisi pada arah horizontal dan posisi pada arah vertikal."
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
            "Bagaimana cara menentukan posisi sebuah benda yang bergerak ke kanan sekaligus ke atas?",
            "Bagaimana cara mengetahui seberapa besar gerak benda pada arah horizontal dan vertikal?"
          ]
        }
      ]
    },
    {
      heading: "📍 Posisi pada Bidang Dua Dimensi",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Pada gerak dua dimensi, posisi benda dapat ditentukan menggunakan sistem koordinat Kartesius.",  
          ]
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "Sumbu X digunakan untuk menunjukkan posisi horizontal."
              },
              {
                text: "Sumbu Y digunakan untuk menunjukkan posisi vertikal."
              }
            ]
          }
        },
        {
          type: "paragraph",
          text: [
            "Posisi sebuah benda dapat dituliskan sebagai pasangan koordinat (x, y).",
            "Contohnya, posisi P(4, 3) berarti benda berada 4 satuan ke arah horizontal dan 3 satuan ke arah vertikal dari titik acuan."
          ]
        }
      ]
    },
    {
      heading: "🧭 Titik Acuan dan Arah",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Sebelum menganalisis gerak, kita perlu menentukan titik acuan dan arah positif.",
            "Biasanya:"
          ]
        },
        {
          type: "list",
          items: {
            items: [
              {
                text: "➡️ Arah kanan dianggap positif pada sumbu X."
              },
              {
                text: "⬅️ Arah kiri dianggap negatif pada sumbu X."
              },
              {
                text: "⬆️ Arah atas dianggap positif pada sumbu Y."
              },
              {
                text : "⬇️ Arah bawah dianggap negatif pada sumbu Y."
              }
            ]
          }
        },
        {
          type: "paragraph",
          text: [
            "Pemilihan arah positif sebenarnya bebas, tetapi harus digunakan secara konsisten sepanjang analisis."
          ]
        }
      ]
    },
    {
      heading: "➡️ Apa Itu Komponen Vektor?",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Sebuah vektor yang arahnya miring dapat diuraikan menjadi dua komponen yang saling tegak lurus.",
            "Komponen pertama berada pada arah horizontal atau sumbu X.",
            "Komponen kedua berada pada arah vertikal atau sumbu Y.",
            "Dengan menguraikan vektor, kita dapat menganalisis gerak pada masing-masing arah secara lebih sederhana."
          ]
        }
      ]
    },

    {
      heading: "📐 Menguraikan Vektor",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Misalkan sebuah benda bergerak dengan kecepatan awal $v_0$ membentuk sudut $\\theta$ terhadap arah horizontal.",
            "Kecepatan tersebut dapat diuraikan menjadi:"
          ]
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "$v_{0x} = v_0 \\cos\\theta$"
              },
              {
                text: "$v_{0y} = v_0 \\sin\\theta$"
              }
            ]
          }
        },
        {
          type: "paragraph",
          text: [
            "Komponen $v_{0x}$ menunjukkan bagian kecepatan yang bekerja pada arah horizontal.",
            "Komponen $v_{0y}$ menunjukkan bagian kecepatan yang bekerja pada arah vertikal.",
            "**Keterangan:**"
          ]
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "$v_0$ = besar kecepatan awal $(m/s)$"
              },
              {
                text: "$v_{0x}$ = komponen kecepatan awal pada arah X $(m/s)$"
              },
              {
                text: "$v_{0y}$ = komponen kecepatan awal pada arah Y $(m/s)$"
              },
              {
                text: "$\\theta$ = sudut elevasi terhadap arah horizontal"
              }
            ]
          }
        }
      ]
    },
    {
      heading: "🧮 Menghitung Vektor Total",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Jika kita mengetahui besar komponen X dan Y, kita dapat mencari besar kecepatan total $(v)$ menggunakan dalil Pythagoras:"
          ]
        },
        {
          type: "equation",
          equation: "v = \\sqrt{v_x^2 + v_y^2}"
        },
        {
          type: "paragraph",
          text: [
            "Sedangkan untuk mencari arah atau sudut $(\\theta)$ yang dibentuk terhadap sumbu X positif:"
          ]
        },
        {
          type: "equation",
          equation: "\\tan\\theta = \\frac{v_y}{v_x}"
        }
      ]
    },
    {
      heading: "🎯 Visualisasi Konsep",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Bayangkan sebuah bola ditendang dengan arah miring ke atas.",
            "Vektor kecepatan bola menunjuk ke arah miring.",
            "Sekarang pecah vektor tersebut menjadi dua:"
          ]
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "➡️ Satu bagian mendorong bola bergerak ke depan."
              },
              {
                text: "⬆️ Satu bagian membuat bola bergerak ke atas."
              }
            ]
          } 
        },
        {
          type: "paragraph",
          text: [
            "Kedua komponen tersebut jika digabungkan kembali akan menghasilkan vektor kecepatan awal bola."
          ]
        }
      ]
    },
    {
      heading: "🏀 Contoh dalam Kehidupan",
      blocks: [
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "🏀 Saat pemain basket melakukan shooting, kecepatan bola memiliki komponen horizontal dan vertikal."
              },
              {
                text: "⚽ Saat pemain sepak bola melakukan tendangan melambung, bola bergerak maju sekaligus naik."
              },
              {
                text: "🚀 Saat sebuah roket diluncurkan dengan sudut tertentu, kecepatannya dapat diuraikan menjadi komponen horizontal dan vertikal."
              }
            ]
          }
        }
      ]
    },
    {
      heading: "💡 Contoh Soal & Pembahasan",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Sebuah bola ditendang dengan kecepatan awal $v_0$ = $20 m/s$ dan sudut elevasi $\\theta = 30\\degree$ terhadap bidang horizontal. Hitunglah besar komponen kecepatan awal pada arah horizontal $v_{0x}$ dan vertikal $v_{0y}$!",
            "📌 **Pembahasan:**",
            "Diketahui:"
          ]
        },
        {
          type: "paragraph",
          text: "Diketahui: v₀ = 20 m/s, θ = 30°"
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "Komponen Sumbu X (Horizontal):",
                description: "$v_{0x} = v_0 \\cos 30^\\circ = 20 \\times \\frac{\\sqrt{3}}{2} = 10\\sqrt{3} \\text{ m/s} \\approx 17.32 \\text{ m/s}$"
              },
              {
                text: "2. Komponen Sumbu Y (Vertikal):",
                description: "$v_{0y} = v_0 \\sin 30^\\circ = 20 \\times \\frac{1}{2} = 10 \\text{ m/s}$"
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
          type: "paragraph",
          text: [
            "Banyak siswa mengira bahwa komponen vektor adalah dua gerakan tambahan yang benar-benar terpisah dari gerak benda.",
            "Sebenarnya, komponen X dan Y hanyalah cara matematis untuk merepresentasikan satu vektor dalam dua arah yang saling tegak lurus.",
            "Jika kedua komponen digabungkan kembali, kita mendapatkan vektor awal yang sama."
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
            "Komputer dalam game modern juga menggunakan konsep vektor untuk menentukan arah dan kecepatan objek dalam dunia 2D maupun 3D.",
            "Jadi, ketika karakter dalam game bergerak secara diagonal, sistem sebenarnya dapat menghitung gerak tersebut berdasarkan komponen arah horizontal dan vertikal."
          ]
        }
      ]
    },
    {
      heading: "✨ Inti Materi *(Takeaway Message)*",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Pada gerak dua dimensi, posisi benda dapat dinyatakan menggunakan koordinat X dan Y.",
            "Vektor yang arahnya miring dapat diuraikan menjadi komponen horizontal dan vertikal.",
            "Komponen vektor membantu kita menganalisis gerak pada masing-masing arah secara lebih sederhana."
          ]
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
              question: "Pada gerak dua dimensi, posisi sebuah benda dinyatakan menggunakan....",
              options: [
                "massa dan waktu.",
                "kelajuan dan percepatan.",
                "pasangan koordinat $(x,y)$.",
                "jarak dan kelajuan.",
                "gaya dan momentum."
              ],
              answerIndex: 2
            },
            {
              question: "Sebuah benda bergerak dengan kecepatan awal $v_0$ membentuk sudut $\\theta$ terhadap arah horizontal. Komponen kecepatan awal pada sumbu X dirumuskan sebagai....",
              options: [
                "$v_{0x} = v_0 \\sin\\theta$",
                "$v_{0x} = v_0 \\tan\\theta$",
                "$v_{0x} = v_0 \\cos\\theta$",
                "$v_{0x} = v_0 \\cot\\theta$",
                "$v_{0x} = v_0^2 \\sin\\theta$"
              ],
              answerIndex: 2
            },
            {
              question: "Mengapa sebuah vektor diuraikan menjadi komponen pada sumbu X dan Y?",
              options: [
                "Agar gerak benda menjadi lebih cepat.",
                "Agar gerak horizontal dan vertikal dapat dianalisis dengan lebih sederhana.",
                "Agar arah gerak benda berubah menjadi lurus.",
                "Agar gravitasi tidak memengaruhi benda.",
                "Agar nilai kecepatan benda menjadi lebih besar."
              ],
              answerIndex: 1
            },
            {
              question: "Sebuah bola ditendang dengan kecepatan awal $20 m/s$ dan sudut elevasi $30\\degree$. Besar komponen kecepatan awal pada arah vertikal adalah....",
              options: [
                "$5 m/s$.",
                "$10 m/s$.",
                "$15 m/s$.",
                "$17,32 m/s$.",
                "$20 m/s$."
              ],
              answerIndex: 1
            },
            {
              question: "Pernyataan yang benar mengenai komponen vektor adalah....",
              options: [
                "komponen X dan Y merupakan dua gerakan yang saling memengaruhi.",
                "komponen vektor adalah dua vektor baru yang tidak berhubungan dengan vektor awal.",
                "jika komponen X dan Y digabungkan kembali, akan diperoleh vektor awal yang sama.",
                "komponen vektor hanya digunakan pada gerak satu dimensi.",
                "komponen horizontal selalu lebih besar daripada komponen vertikal."
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
            "Sekarang kamu sudah bisa menguraikan sebuah vektor menjadi komponen horizontal dan vertikal.",
            "Tapi apa yang terjadi jika sebuah benda diluncurkan dengan sudut tertentu dan hanya gravitasi yang bekerja padanya?",
            "Lintasannya ternyata membentuk pola yang sangat menarik.",
            "➡️ Next, kita menuju portal: [**Gerak Parabola**](/materi/gerak-parabola)."
          ]
        }
      ]
    }
  ]
};

export default analisissumbuxdany;