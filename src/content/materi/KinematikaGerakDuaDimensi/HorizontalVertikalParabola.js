const gerakHorizontalDanVertikal = {
  title: "Gerak Horizontal dan Gerak Vertikal pada Gerak Parabola",
  slug: "gerak-horizontal-dan-vertikal-pada-gerakparabola",
  description: "Memahami bagaimana gerak horizontal dan gerak vertikal bekerja secara bersamaan dan independen dalam membentuk lintasan parabola.",
  chapter: "🏀 Kinematika: Gerak Dua Dimensi",

  content: [
    {
      heading: "🧩 Satu Gerak, Dua Arah",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Bayangkan sebuah bola dilempar miring ke udara.",
            "Dalam waktu yang sama, bola bergerak ke depan (horizontal) sekaligus bergerak naik dan turun (vertikal).",
            "Kalau kita melihatnya sebagai satu gerakan utuh, lintasannya terlihat melengkung dan rumit.",
            "Namun, fisika punya trik rahasia: kita pecah gerakan tersebut menjadi dua komponen terpisah!"
          ]
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "➡️ Gerak horizontal pada Sumbu $x$."
              },
              {
                text: "⬆️ Gerak vertikal pada Sumbu $y$."
              }
            ]
          }
        }
      ]
    },
    {
      heading: "❓ Pertanyaan Besar",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Apakah gerak ke depan dipengaruhi oleh gaya gravitasi?",
            "Mengapa kecepatan horizontal bola tetap konstan selama terbang, sedangkan kecepatan vertikalnya terus berubah?"
          ]
        }
      ]
    },
    {
      heading: "➡️ Komponen Horizontal (Sumbu $x$): Gerak Lurus Beraturan (GLB)",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Pada arah horizontal (Sumbu $x$), tidak ada gaya luar yang bekerja pada benda jika kita mengabaikan gesekan udara.",
            "Sesuai Hukum I Newton, karena percepatan pada arah horizontal sama dengan nol \$(a_{x} = 0)$, maka kecepatan horizontal benda selalu konstan dari awal hingga akhir."
          ]
        },
        {
          type: "paragraph",
          text: "Artinya, gerak pada Sumbu $x$ berlaku Hukum Gerak Lurus Beraturan (GLB)."
        }
      ]
    },
    {
      heading: "⬆️ Komponen Vertikal (Sumbu $y$): Gerak Lurus Berubah Beraturan (GLBB)",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Berbeda dengan arah horizontal, pada arah vertikal (Sumbu $y$) bekerja gaya gravitasi Bumi yang mengarah ke bawah.",
            "Gaya ini memberikan percepatan konstan berupa percepatan gravitasi $(a_{y} = -g)$.",
            "Saat benda bergerak naik, kecepatannya melambat hingga bernilai nol di titik tertinggi. Saat turun kembali, kecepatannya bertambah searah gravitasi.",
            "Artinya, gerak pada Sumbu $y$ berlaku Hukum Gerak Lurus Berubah Beraturan (GLBB)."
          ]
        }
      ]
    },

    {
      heading: "⚖️ Prinsip Independensi Gerak",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Prinsip paling krusial dalam gerak parabola adalah Independensi Gerak (Saling Bebas).",
            "Gerak horizontal (Sumbu $x$) dan gerak vertikal (Sumbu $y$) terjadi secara bersamaan, tetapi sama sekali TIDAK saling mempengaruhi.",
            "Satu-satunya besaran yang menghubungkan kedua sumbu ini adalah **Waktu $(t)$**."
          ]
        }
      ]
    },

    {
      heading: "📐 Persamaan dan Formulasi Penting",
      blocks: [
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "Kecepatan Awal Komponen X dan Y:",
                equation: [
                  "v_{0x} = v_0 \\cos\\theta",
                  "v_{0y} = v_0 \\sin\\theta"
                ]
              },
              {
                text: "2. Kecepatan dan Posisi Horizontal pada waktu t (GLB):",
                equation: [
                  "v_x(t) = v_{0x} = v_0 \\cos\\theta",
                  "x(t) = v_{0x} \\cdot t = (v_0 \\cos\\theta) \\cdot t"
                ]
              },
              {
                text: "3. Kecepatan dan Posisi Vertikal pada waktu t (GLBB):",
                equation: [
                  "v_y(t) = v_{0y} - g \\cdot t = v_0 \\sin\\theta - g \\cdot t",
                  "y(t) = v_{0y} \\cdot t - \\frac{1}{2} g t^2 = (v_0 \\sin\\theta) \\cdot t - \\frac{1}{2} g t^2"
                ]
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
            "Sebuah peluru ditembakkan dengan kecepatan awal $v_0 = 50 m/s$ pada sudut elevasi $\\theta = 37\\degree (\\cos 37\\degree = 0.8, \\sin 37\\degree = 0.6)$. Jika percepatan gravitasi $g = 10 m/s^2$, tentukan posisi peluru $(x, y)$ setelah bergerak selama $t = 2$ detik!",
            "📌 **Pembahasan:**"
          ]
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "Langkah 1: Cari komponen kecepatan awal:",
                equation: [
                  "v_{0x} = 50 \\times 0.8 = 40 \\text{ m/s}",
                  "v_{0y} = 50 \\times 0.6 = 30 \\text{ m/s}"
                ]
              },
              {
                text: "Langkah 2: Hitung posisi horizontal $(x)$ pada $t = 2 s$:",
                equation: [
                  "x = v_{0x} \\cdot t = 40 \\times 2 = 80 \\text{ meter}",
                ]
              },
              {
                text: "Langkah 3: Hitung posisi vertikal $(y)$ pada $t = 2 s$:",
                equation: [
                  "y = v_{0y} \\cdot t - \\frac{1}{2} g t^2 = (30 \\times 2) - \\left(\\frac{1}{2} \\times 10 \\times 2^2\\right) = 60 - 20 = 40 \\text{ meter}"
                ]
              }
            ]
          }
        },
        {
          type: "paragraph",
          text: [
            "Jadi, posisi peluru setelah 2 detik berada pada koordinat $(80 m, 40 m)$."
          ]
        }
      ]
    },
    {
      heading: "⚠️ Miskonsepsi Umum",
      blocks: [
        {
          type: "paragraph",
          text: [
            "*'Di titik tertinggi lintasan parabola, kecepatan benda sama dengan nol, kan?'* ❌",
            "Gak, gitu!",
            "Namun faktanya, di titik tertinggi hanya kecepatan vertikal $(v_{y})$ yang bernilai nol! Kecepatan horizontal $(v_{x})$ masih tetap bernilai $v_0 \\cos\\theta$. Jadi benda tidak berhenti bergerak melainkan terus maju ke depan. ✔️"
          ]
        }
      ]
    },
    {
      heading: "🌟 *Fun Fact*",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Eksperimen Galileo Galilei membuktikan bahwa jika kamu menjatuhkan sebuah bola secara bebas vertikal dan menembakkan bola lain secara horizontal dari ketinggian yang sama pada waktu yang tepat bersamaan, kedua bola akan menyentuh tanah di detik yang persis sama!"
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
            "Gerak parabola dianalisis dengan memisahkan komponen horizontal (Sumbu $x$) dan vertikal (Sumbu $y$).",
            "Sumbu $x$ bergerak secara GLB (kecepatan konstan, $a = 0$).",
            "Sumbu $y$ bergerak secara GLBB (kecepatan berubah akibat percepatan gravitasi, $a = -g$).",
            "Kedua gerak terjadi secara bersamaan dan dihubungkan oleh variabel waktu $(t)$."
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
              question: "Pada gerak parabola, gerak benda pada sumbu X merupakan....",
              options: [
                "gerak Lurus Berubah Beraturan (GLBB).",
                "gerak Jatuh Bebas (GJB).",
                "gerak Lurus Beraturan (GLB).",
                "gerak Melingkar Beraturan (GMB).",
                "gerak Vertikal ke Atas (GVA)."
              ],
              answerIndex: 2
            },
            {
              question: "Mengapa kecepatan benda pada arah horizontal tetap konstan selama gerak parabola (tanpa hambatan udara)?",
              options: [
                "karena gaya gravitasi bekerja ke arah horizontal.",
                "karena tidak ada percepatan pada arah horizontal $(a_{x} = 0)$.",
                "karena kecepatan horizontal selalu bertambah.",
                "karena gaya gravitasi menghilang saat benda bergerak.",
                "karena benda berhenti sesaat di titik tertinggi."
              ],
              answerIndex: 1
            },
            {
              question: "Prinsip Independensi Gerak pada gerak parabola menyatakan bahwa....",
              options: [
                "gerak horizontal menentukan gerak vertikal.",
                "gerak vertikal menentukan gerak horizontal.",
                "gerak horizontal dan vertikal saling memengaruhi setiap saat.",
                "gerak horizontal dan vertikal dapat dianalisis secara terpisah, tetapi dihubungkan oleh waktu.",
                "gerak horizontal hanya terjadi saat benda naik."
              ],
              answerIndex: 3
            },
            {
              question: "Sebuah benda memiliki komponen kecepatan horizontal sebesar 40 m/s. Berapakah posisi horizontal benda setelah 3 detik?",
              options: [
                "40 m.",
                "80 m.",
                "100 m.",
                "120 m.",
                "160 m."
              ],
              answerIndex: 3
            },
            {
              question: "Di titik tertinggi lintasan parabola, keadaan yang benar adalah....",
              options: [
                "kecepatan horizontal dan vertikal sama-sama nol.",
                "hanya kecepatan horizontal yang bernilai nol.",
                "hanya kecepatan vertikal yang bernilai nol, sedangkan kecepatan horizontal tetap ada.",
                "gravitasi berhenti bekerja sesaat.",
                "benda berhenti total sebelum jatuh kembali."
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
            "Sekarang kamu sudah memahami bagaimana gerak horizontal dan vertikal bekerja secara bersamaan dalam membentuk lintasan parabola.",
            "Saatnya mengubah pemahaman tersebut menjadi kalkulasi tingkat lanjut!",
            "Bagaimana cara menentukan tinggi maksimum yang bisa dicapai benda?",
            "Berapa jarak terjauh yang sanggup ditempuh sebelum menyentuh tanah?",
            "➡️ *Next*, kita menuju portal: Persamaan dan Fitur Khusus Gerak Parabola."
          ]
        }
      ]
    }
  ]
};

export default gerakHorizontalDanVertikal;