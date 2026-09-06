const besaranGerakMelingkar = {
  title: "Besaran-Besaran Gerak Melingkar",
  slug: "besaran-besaran-gerak-melingkar",
  description: "Mengenal besaran sudut, perpindahan sudut, periode, frekuensi, dan hubungan matematis antarbesaran dalam gerak melingkar.",
  chapter: "🏀 Kinematika: Gerak Dua Dimensi",

  content: [
    { blocks: [
        {
          type: "paragraph",
          text: [
            "Ketika sebuah benda bergerak lurus, kita dapat dengan mudah menggambarkan geraknya menggunakan jarak, perpindahan, kelajuan, dan kecepatan.",
            "Namun, bagaimana jika benda tersebut berputar? Misalnya roda sepeda yang berputar satu putaran penuh atau jarum jam yang bergerak dari angka 12 ke angka 3.",
            "Untuk menggambarkan gerakan seperti ini, variabel jarak lurus biasa $(s)$ kurang praktis. Kita membutuhkan besaran baru yang berbasis sudut dan putaran!"
          ]
        }
      ]
    },
    {
      heading: "📐Posisi Sudut (θ) dan Radian",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Posisi sudut $(\theta)$ menyatakan posisi titik atau benda pada lintasan melingkar dihitung dari sumbu acuan.",
            "Dalam Fisika, satuan Internasional (SI) untuk posisi sudut bukan derajat $(\\degree)$, melainkan **Radian $(rad)$**."
          ]
        },
        {
          type: "equation",
          equation: "\\theta = \\frac{s}{r}"
        },
        {
          type: "paragraph",
          text: [
            "Di mana $s$ adalah panjang busur lintasan $(m)$ dan $r$ adalah jari-jari lingkaran $(m)$."
          ]
        },
        {
          type: "paragraph",
          text: [
            "💡 Konversi Satuan Sudut yang Wajib Diketahui",
          ]
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "$1 \\text{ putaran penuh} = 360^\\circ = 2\\pi \\text{ rad}$"
              },
              {
                text: "$1 \\text{ rad} \\approx 57,3^\\circ$"
              },
              {
                text: "$\\pi \\text{ rad} = 180^\\circ$"
              }
            ]
          }
        }
      ]
    },
    {
      heading: "⏱️  Periode (T) dan Frekuensi (f)",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Gerak melingkar sering kali bersifat periodik (berulang secara teratur). Dua besaran kunci untuk mengukur keberulangan ini adalah Periode dan Frekuensi.",
          ]
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "**Periode $(T)$**",
                description: "Waktu yang dibutuhkan untuk melakukan 1 kali putaran penuh (satuan: sekon / $s$)",
                equation: "T = \\frac{t}{n}"
              },
              {
                text: "**Frekuensi $(f)$**",
                description: "Banyaknya putaran yang terjadi dalam waktu 1 sekon (satuan: Hertz / $Hz$ atau $\\text{s}^{-1}$)",
                equation: "f = \\frac{n}{t}"
              }
            ]
          }
        },
        {
          text: "Hubungan timbal balik antara Periode dan Frekuensi",
          equation: "T = \\frac{1}{f} \\quad \\text{atau} \\quad f = \\frac{1}{T}"
        }
      ]
    },
    {
      heading: "Kecepatan Sudut $(\\omega)$",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Kecepatan sudut / frekuensi sudut $(\\omega$, dibaca *omega*) menyatakan seberapa cepat perubahan posisi sudut terjadi tiap satuan waktu (satuan: $\\text{rad/s}$)."
          ]
        },
        {
          type: "equation",
          equation: "\\omega = \\frac{\\Delta \\theta}{\\Delta t}"
        },
        {
          type: "paragraph",
          text: [
            "Jika benda melakukan satu putaran penuh ($\\Delta \\theta = 2\\pi \\text{ rad}$) dalam waktu satu periode ($t = T$), maka rumus kecepatan sudut dapat ditulis:"
          ]
        },
        {
          type: "equation",
          equation: "\\omega = \\frac{2\\pi}{T} = 2\\pi f"
        },
        {
          type: "paragraph",
          text: [
            "📌 Satuan Populer: RPM (Rotation Per Minute)",
            "Dalam kehidupan sehari-hari (seperti speedometer kendaraan atau kipas angin), kecepatan putar sering dinyatakan dalam **rpm**.\n\nCara konversi rpm ke rad/s:"
          ]
        },
        {
          type: "equation",
          equation: "1 \\text{ rpm} = 1 \\frac{\\text{putaran}}{\\text{menit}} = \\frac{2\\pi \\text{ rad}}{60 \\text{ s}} = \\frac{\\pi}{30} \\text{ rad/s}"
        }
      ]
    },
    {
      heading: "📝 Contoh Soal & Pembahasan",
      blocks: [
        {
          type: "paragraph",
          text: [
            "**Soal:**",
            " Sebuah roda CD berputar sebanyak 120 putaran dalam waktu 30 detik. Hitunglah:"
          ]
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "Frekuensi dan periode putaran roda."
              },
              {
                text: "Kecepatan sudut ($\\omega)$ roda tersebut dalam $\\text{rad/s}$"
              }
            ]
          }
        },
        {
          type: "paragraph",
          text: [
            "**Pembahasan**",
            "Diketahui:"
          ]
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "n = 120 \\text{ putaran}"
              },
              {
                text: "t = 30 \\text{ sekon}"
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
                text: "Frekuensi ($f$) dan Periode ($T$):",
                equation: [
                  "f = \\frac{n}{t} = \\frac{120}{30} = 4 \\text{ Hz}",
                  "T = \\frac{1}{f} = \\frac{1}{4} = 0{,}25 \\text{ sekon}"
                ]
              },
              {
                text: "Kecepatan Sudut ($\\omega$):",
                equation: [
                  "\\omega = 2\\pi f = 2\\pi \\cdot 4 = 8\\pi \\text{ rad/s} \\approx 25{,}13 \\text{ rad/s}"
                ]
              }
            ]
          }
        }
      ]
    },
    {
      heading: "⚠️ Miskonsepsi yang Sering Terjadi",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Menganggap Periode $(T)$ dan Frekuensi $(f)$ adalah dua hal yang sama karena sama-sama mengukur putaran. ❌ ",
            "Padalah, gak gitu!",
            "Faktanya, periode fokus pada **waktu** per satu putaran, sedangkan Frekuensi fokus pada **jumlah putaran** per satu satuan waktu. Keduanya berbanding terbalik $(T = \\frac {1}{f})$. ✔️"
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
            type: "ordered",
            items: [
              {
                text: "Posisi sudut dinyatakan dalam **Radian (rad)**, di mana:",
                equation: "1 \\text{ putaran} = 2\\pi \\text{ rad}"
              },
              {
                text: "**Periode ($T$)** = waktu 1 putaran",
                equation: "T = \\frac{t}{n}"
              },
              {
                text: "**Frekuensi ($f$)** = jumlah putaran per detik",
                equation: "f = {n}{t}"
              },
              {
                text: "**Kecepatan Sudut ($\\omega$)** = mengukur kelajuan rotasi dengan rumus:",
                equation: "\\omega = \\frac{2\\pi}{T} = 2\\pi f"
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
              question: "Dalam Sistem Internasional (SI), satuan untuk posisi sudut $(\\theta)$ adalah....",
              options: [
                "derajat $(\\degree)$.",
                "putaran.",
                "radian $(\\text{rad}).$",
                "meter $(\\text{m})$.",
                "hertz $(\\text{Hz})$."
              ],
              answerIndex: 2
            },
            {
              question: "Pernyataan yang benar mengenai periode dan frekuensi adalah....",
              options: [
                "periode adalah banyaknya putaran setiap detik.",
                "frekuensi adalah waktu yang diperlukan untuk satu putaran.",
                "periode dan frekuensi merupakan besaran yang saling berbanding lurus.",
                "periode adalah waktu untuk satu putaran, sedangkan frekuensi adalah banyaknya putaran tiap detik.",
                "periode dan frekuensi memiliki satuan yang sama."
              ],
              answerIndex: 4
            },
            {
              question: "Sebuah roda berputar sebanyak 150 putaran dalam 30 detik. Besar frekuensi putaran roda tersebut adalah....",
              options: [
                "2 Hz.",
                "3 Hz.",
                "5 Hz.",
                "30 Hz.",
                "150 Hz."
              ],
              answerIndex: 2
            },
            {
              question: "Jika suatu benda memiliki frekuensi 10 Hz, maka kecepatan sudutnya adalah....",
              options: [
                "$5\\pi\\text{ rad/s}$.",
                "$10\\pi\\text{ rad/s}$.",
                "$20\\pi\\text{ rad/s}$.",
                "$40\\pi\\text{ rad/s}$.",
                "$100\\pi\\text{ rad/s}$."
              ],
              answerIndex: 2
            },
            {
              question: "Berdasarkan materi, hubungan antara kecepatan sudut $(\\omega)$, periode $(T)$, dan frekuensi $(f)$ yang benar adalah....",
              options: [
                "$\\omega=\\frac{T}{2\\pi}$",
                "$\\omega=\\frac{2\\pi}{f}$",
                "$\\omega=\\frac{f}{2\\pi}$",
                "$\\omega=2\\pi\\text{T}$",
                "$\\omega=2\\pi\\text{f}$"
                ],
              answerIndex: 4
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
    { blocks: [
        {
          type: "paragraph",
          text: [
            "Kita sudah mengenal besaran sudut, periode, frekuensi, dan kecepatan sudut.",
            "Tapi masih ada satu pertanyaan penting: Seberapa cepat sebenarnya lintasan tepi benda meluncur di udara jika diukur dengan meter per sekon?",
            "➡️ *Next,* kita menuju portal: [**Kecepatan Linear dan Kecepatan Sudut serta Hubungan Anteduanya.**](/materi/kecepatan-linear-dan-kecepatan-sudut)"
          ]
        }
      ]
    }
  ]
};

export default besaranGerakMelingkar;