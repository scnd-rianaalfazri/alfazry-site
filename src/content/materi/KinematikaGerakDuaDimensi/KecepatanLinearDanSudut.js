const kecepatanLinearDanSudut = {
  title: "Kecepatan Linear dan Kecepatan Sudut",
  slug: "kecepatan-linear-dan-kecepatan-sudut",
  description: "Memahami perbedaan kecepatan linear dan kecepatan sudut serta hubungan keduanya dalam gerak melingkar.",
  chapter: "🏀 Kinematika: Gerak Dua Dimensi",

  content: [
    {
      heading: "⚙️ Dua Cara Mengukur Kecepatan",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Saat sebuah mobil melaju di jalan lurus, kita cukup menyatakan kecepatannya dalam satuan meter per sekon $(m/s$).",
            "Namun pada gerak melingkar, kita dapat melihat gerakan tersebut dari dua sudut pandang yang berbeda:"
          ]
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "Mengukur seberapa cepat benda menempuh lintasan lingkaran secara fisik (Kecepatan Linear)."
              },
              {
                text: "Mengukur seberapa cepat sudut putarannya berubah terhadap waktu (Kecepatan Sudut)."
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
            "Mengapa dua titik pada roda yang sama dapat memiliki kecepatan linear yang berbeda?",
            "Mengapa bagian tepi kipas angin terasa 'ngebut' banget, sedangkan bagian dekat porosnya berputar santai?"
          ]
        }
      ]
    },
    {
      heading: "🚗 Apa Itu Kecepatan Linear $(v)$?",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Kecepatan linear (kecepatan tangensial) adalah kecepatan benda saat bergerak sepanjang lintasan melingkar.",
            "Arah kecepatan linear selalu menyinggung lintasan lingkaran (tegak lurus terhadap jari-jari)."
          ]
        },
        {
          type: "equation",
          equation: "v = \frac{s}{t}"
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
                text: "v = kecepatan linear $(m/s)$"
              },
              {
                text: "s = panjang busur lintasan $(m)$"
              },
              {
                text: "t = waktu $(s)$"
              }
            ]
          }
        },
        {
          type: "paragraph",
          text: [
            "Jika benda menempuh satu putaran penuh $(s = \\frac{2}{\\pi}r)$ dalam waktu satu periode $(T)$, kecepatannya juga dapat dirumuskan:"
          ]
        },
        {
          type: "equation",
          equation: "v = \frac{2\pi r}{T} = 2\pi f r"
        }
      ]
    },
    {
      heading: "🌀 Apa Itu Kecepatan Sudut $(\\omega)$?",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Kecepatan sudut *(angular velocity)* menyatakan seberapa cepat sudut yang dibentuk benda berubah terhadap waktu.",
            "Simbol kecepatan sudut adalah $\\omega$ (omega) dengan satuan SI radian per sekon $(rad/s)$"
          ]
        },
        {
          type: "equation",
          equation: "\\omega = \\frac{\\Delta\\theta}{\\Delta t}"
        },
        {
          type: "paragraph",
          text: [
            "Dalam satu putaran penuh, perubahan sudut $\\Delta\\theta = 2\\pi \\text{ rad}$, sehingga:"
          ]
        },
        {
          type: "equation",
          latex: "\omega = \frac{2\pi}{T} = 2\pi f"
        }
      ]
    },
    {
      heading: "🔗 Hubungan Kecepatan Linear dan Kecepatan Sudut",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Jembatan penghubung antara kecepatan linear $(v)$ dan kecepatan sudut $(\\omega)$ adalah jari-jari lintasan $(r)$."
          ]
        },
        {
          type: "equation",
          equation: "v = \omega \cdot r"
        },
        {
          type: "paragraph",
          text: [
            "Persamaan ini menunjukkan bahwa kecepatan linear berbanding lurus dengan jarak titik dari pusat putaran $(r)$."
          ]
        }
      ]
    },
    {
      heading: "🎡 Mengapa Bagian Tepi Lebih Cepat?",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Bayangkan dua anak naik komidi putar:"
          ]
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "Anak A duduk dekat poros ($r$ kecil)"
              },
              {
                text: "Anak B di bagian tepi ($r$ besar)"
              }
            ]
          }
        },
        {
          type: "paragraph",
          text: [
            "Kedua anak menyelesaikannya dalam waktu yang sama, sehingga kecepatan sudut $(\\omega)$ mereka SAMA.",
            "Namun, anak B di tepi harus menempuh keliling lingkaran yang jauh lebih besar dibanding anak A. Oleh karena itu, kecepatan linear $(v)$ anak B jauh lebih BESAR."
          ]
        }
      ]
    },
    {
      heading: "⚠️ Miskonsepsi Populer",
      blocks: [
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "Miskonsepsi 1",
                description: [
                  "Semua titik pada benda yang berputar memiliki kecepatan linear yang sama. ❌",
                  "Gak, gitu!",
                  "Faktanya, kecepatan sudut $(\\omega)$ memang sama untuk seluruh titik, tetapi kecepatan linear $(v)$ berbeda tergantung jaraknya ke pusat $(r)$. ✔️"
                ]
              },
              {
                text: "Miskonsepsi 2",
                description: [
                  "Satuan Kecepatan Sudut adalah m/s. ❌ ",
                  "Faktanya, satuan SI untuk kecepatan sudut adalah $rad/s$. Satuan $m/s$ khusus untuk kecepatan linear. ✔️"
                ]
              }
            ]
          }
        }
      ]
    },
    {
      heading: "🌟 *Fun Fact!*",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Ujung baling-baling helikopter dapat berputar dengan kecepatan linear hingga ratusan meter per sekon, bahkan mendekati kecepatan suara!",
            "Karena itu, perancangan struktur ujung baling-baling membutuhkan presisi tinggi agar tidak patah akibat gaya mekanis yang sangat besar."
          ]
        }
      ]
    },
    {
      heading: "🧪 Contoh Soal & Pembahasan",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Sebuah roda berjari-jari 0,5 meter berputar dengan kecepatan sudut konstan 20 rad/s. Hitunglah kecepatan linear suatu titik di tepi roda!",
            "**Pembahasan:**",
            "Diketahui:"
          ]
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "$r$ = 0,5 m"
              },
              {
                text: "$\\omega$ = 20 rad/s."
              }
            ]
          }
        },
        {
          type: "equation",
          equation: "v = \\omega \\cdot r = 20 \\times 0,5 = 10 \\text{ m/s}"
        },
        {
          type: "paragraph",
          text: [
            "**Kesimpulan:**",
            "Jadi, kecepatan linear titik di tepi roda tersebut adalah 10 m/s."
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
                text: "Kecepatan Linear $(v)$",
                description: "Seberapa cepat benda mengelilingi lintasan (satuan: m/s)"
              },
              {
                text: "Kecepatan Sudut $(\\omega)$",
                description: "Seberapa cepat sudut putaran bertambah (satuan: rad/s)"
              },
              {
                text: "Hubungan keduanya dihubungkan oleh jari-jari",
                equation: "v = \\omega r"
              }
            ]
          }
        },
      ]
    },
    { blocks: [
        {
          type: "paragraph",
          text: [
            "Walaupun besar kecepatan sebuah benda bisa tetap, ternyata arah kecepatannya terus berubah ketika bergerak melingkar.",
            "Perubahan arah ini menyebabkan munculnya percepatan yang selalu mengarah ke pusat lingkaran.",
            "*Next,* portal selanjutnya: [**Percepatan Sentripetal**](/materi/percepatan-sentripetal)"
          ]
        }
      ]
    }
  ]
};

export default kecepatanLinearDanSudut;