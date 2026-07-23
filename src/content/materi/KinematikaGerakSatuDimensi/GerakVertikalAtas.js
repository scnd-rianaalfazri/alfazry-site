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