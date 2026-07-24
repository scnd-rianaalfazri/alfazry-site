import { text } from "framer-motion/client";

const gerakvertikalatas = {
  title: "Gerak Vertikal ke Atas",
  slug: "gerak-vertikal-atas",
  description: "Memahami konsep gerak vertikal ke atas sebagai gerak lurus berubah beraturan (GLBB) yang diperlambat oleh gaya gravitasi Bumi.",
  chapter: "↔️↕️ Kinematika: Gerak Satu Dimensi",

  content: [
    {
      heading: "🚀 Benda yang Dilempar ke Atas",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Ketika kamu melempar bola basket atau koin lurus ke atas, benda tersebut tidak akan terus meluncur ke langit selamanya.",
            "Benda akan bergerak ke atas, kecepatannya makin berkurang, berhenti sesaat di titik tertinggi, lalu berbalik arah dan jatuh kembali ke bawah.",
            "Gerakan ini dikenal sebagai Gerak Vertikal ke Atas (GVA)."
          ]
        }
      ]
    },

    {
      heading: "📍 Apa Itu Gerak Vertikal ke Atas?",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Gerak Vertikal ke Atas (GVA) adalah gerak benda yang dilemparkan lurus ke atas dengan memiliki kecepatan awal $(v_0 > 0)$ dan lintasannya berupa garis lurus vertikal.",
            "Karena arah gerak benda ke atas berlawanan dengan arah gaya gravitasi Bumi yang menarik ke bawah, benda mengalami perlambatan konstan sebesar $a = -g$.",
            "Oleh karena itu, GVA merupakan salah satu bentuk Gerak Lurus Berubah Beraturan (GLBB) diperlambat."
          ]
        }
      ]
    },

    {
      heading: "⭐ Ciri-Ciri Utama GVA",
      blocks: [
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "Memiliki kecepatan awal wajib $(v_0 \\neq 0)$. Tanpa $v_0$, benda tidak akan pernah bisa naik."
              },
              {
                text: "Kecepatan benda terus berkurang seiring bertambahnya ketinggian."
              },
              {
                text: "Di titik tertinggi, kecepatan benda bernilai nol $(v_t = 0)$ untuk sesaat."
              },
              {
                text: "Percepatan yang bekerja bernilai negatif terhadap arah gerak $(a = -g)$."
              }
            ]
          }
        }
      ]
    },
    {
      heading: "📐 Persamaan Gerak Vertikal ke Atas",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Persamaan umum GVA diturunkan dari rumus GLBB diperlambat $(a = -g)$:",
            "$v_t = v_0 - gt$",
            "$h = v_0 t - \\frac{1}{2}gt^2$",
            "$v_t^2 = v_0^2 - 2gh$"
          ]
        }
      ]
    },

    {
      heading: "🔝 Kondisi Khusus: Titik Tertinggi (Tinggi Maksimum)",
      blocks: [
        {
          type: "paragraph",
          text: "Saat mencapai titik puncak atau tinggi maksimum ($h_{\\text{max}}$), benda berhenti bergerak ke atas secara instan, sehingga $v_t = 0$."
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "Waktu untuk mencapai titik tertinggi $(t_{\\text{max}})$:",
                description: "$t_{\\text{max}} = \\frac{v_0}{g}$"
              },
              {
                text: "Ketinggian maksimum yang dapat dicapai $(h_{\\text{max}})$:",
                description: "$h_{\\text{max}} = \\frac{v_0^2}{2g}$"
              }
            ]
          }
        },
        {
          type: "paragraph",
          text: [
            "💡 Simetri Gerak: ",
            "*Waktu yang dibutuhkan benda untuk naik ke titik tertinggi $(t_{\\text{naik}})$ persis sama dengan waktu yang dibutuhkan untuk turun kembali ke posisi awal ($t_{\\text{turun}}$).*"
          ]
        }
      ]
    },

    {
      heading: "🧮 Contoh Soal & Pembahasan",
      blocks: [
        {
          type: "paragraph",
          text: [
            "**Soal:**" ,
            "Sebuah bola dilemparkan vertikal ke atas dengan kecepatan awal $30\\text{ m/s}$. Jika percepatan gravitasi $g = 10\\text{ m/s}^2$. Hitunglah:"   
          ]
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "Waktu yang dibutuhkan bola untuk mencapai titik tertinggi."
              },
              {
                text: "Tinggi maksimum yang dicapai bola."
              }
            ]
          }
        },
        {
          type: "paragraph",
          text: [
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
                text: "$v_0 = 30\\text{ m/s}$"
              },
              {
                text: "$g = 10\\text{ m/s}^2$"
              },
              {
                text: "$v_t = 0$ (di titik tertinggi)"
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
                text: "Mencari $t_{\\text{max}}$",
                description: "$t_{\\text{max}} = \\frac{v_0}{g} = \\frac{30}{10} = 3\\text{ detik}$s"
              },
              {
                text: "b. Mencari $h_{\\text{max}}$",
                description: "$h_{\\text{max}} = \\frac{v_0^2}{2g} = \\frac{30^2}{2(10)} = \\frac{900}{20} = 45\\text{ meter}$"
              }
            ]
          }
        },
        {
          type: "paragraph",
          text: "Jadi, bola membutuhkan waktu **3 detik** untuk sampai di puncak dan mencapai ketinggian maksimum **45 meter**."
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
              "🏀 Lemparan bola basket saat melakukan *jump shot*.",
              "⛲ Semburan air dari pancuran air mancur ke udara.",
              "🪙 Melempar koin ke atas saat melakukan pengundian (*coin toss*).",
              "🎆 Kembang api yang meluncur lurus sebelum meledak di langit."
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
            "'Di titik tertinggi, gravitasi berhenti bekerja karena kecepatan benda nol.' ❌",
            "Faktanya gravitasi Bumi tidak pernah berhenti bekerja! Di titik puncak, hanya kecepatannya yang nol $(v = 0)$, tetapi percepatan gravitasi tetap ada $(a = -g)$. Karena itulah bola langsung berbalik arah dan jatuh ke bawah, bukan melayang diam di udara. ✔️"
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
                text: "Gerak Vertikal ke Atas adalah GLBB diperlambat dengan percepatan $a = -g$."
              },
              {
                text: "Syarat mutlak GVA adalah memiliki kecepatan awal $(v_0 > 0)$."
              },
              {
                text: "Di titik puncak/tertinggi, $v_t = 0$."
              },
              {
                text: "Waktu naik sama dengan waktu turun $(t_{\\text{naik}} = t_{\\text{turun}})$."
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
              question: "Gerak Vertikal ke Atas (GVA) adalah....",
              options: [
                "gerak benda yang dilempar lurus ke atas dengan kecepatan awal sehingga mengalami perlambatan akibat gravitasi.",
                "gerak benda yang dijatuhkan tanpa kecepatan awal.",
                "gerak benda yang dilempar mendatar dengan kecepatan tetap.",
                "gerak benda pada lintasan melingkar dengan percepatan tetap.",
                "gerak benda yang selalu dipercepat ke atas."
              ],
              answerIndex: 2
            },
            {
              question: "Ketika sebuah bola mencapai titik tertinggi, keadaan yang benar adalah....",
              options: [
                "kecepatan dan percepatan sama-sama nol.",
                "kecepatan nol, tetapi percepatan gravitasi tetap bekerja ke bawah.",
                "kecepatan maksimum dan percepatan nol.",
                "gravitasi berhenti bekerja sehingga bola melayang.",
                "bola bergerak dengan kecepatan konstan."
              ],
              answerIndex: 1
            },
            {
              question: "Sebuah bola dilempar vertikal ke atas dengan kecepatan awal 30 m/s. Jika percepatan gravitasi 10 m/s², waktu yang diperlukan untuk mencapai titik tertinggi adalah....",
              options: [
                "2 sekon.",
                "3 sekon.",
                "4 sekon.",
                "5 sekon.",
                "6 sekon."
              ],
              answerIndex: 1
            },
            {
              question: "Manakah yang merupakan contoh Gerak Vertikal ke Atas dalam kehidupan sehari-hari?",
              options: [
                "buah kelapa yang jatuh dari pohon.",
                "mobil yang melaju di jalan tol.",
                "bola basket yang dilempar lurus ke atas saat melakukan jump shot.",
                "kereta yang bergerak di rel lurus.",
                "kapal yang berlayar di laut."
              ],
              answerIndex: 2
            },
            {
              question: "Pernyataan yang benar mengenai Gerak Vertikal ke Atas adalah....",
              options: [
                "kecepatan benda bertambah selama bergerak ke atas.",
                "percepatan benda bernilai nol selama gerak berlangsung.",
                "waktu yang diperlukan benda untuk naik ke titik tertinggi sama dengan waktu yang diperlukan untuk kembali ke posisi awal (dengan hambatan udara diabaikan).",
                "Gerak Vertikal ke Atas tidak dipengaruhi oleh gravitasi.",
                "Kecepatan awal benda harus nol."
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
            "Bagaimana jika kita melempar benda ke bawah dari atas gedung dengan memberikan dorongan atau kecepatan awal tertentu?",
            "➡️ Next, kita menuju portal: [**Gerak Vertikal ke Bawah (GVB)**](/materi/gerak-vertikal-bawah)."
          ]
        }
      ]
    }
  ]
};

export default gerakvertikalatas;