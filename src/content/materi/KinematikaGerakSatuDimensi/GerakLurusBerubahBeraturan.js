import { text } from "framer-motion/client";

const geraklurusberubahberaturan = {
  title: "Gerak Lurus Berubah Beraturan (GLBB)",
  slug: "gerak-lurus-berubah-beraturan",
  description: "Memahami konsep Gerak Lurus Berubah Beraturan (GLBB), ciri-ciri, persamaan gerak, analisis grafik, serta penerapannya dalam kehidupan sehari-hari.",
  chapter: "↔️↕️ Kinematika: Gerak Satu Dimensi",

  content: [
    {
      heading: "🏎️ Mengapa Mobil Semakin Cepat?",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Saat pedal gas diinjak, mobil tidak langsung meluncur dengan kecepatan maksimum. Kecepatannya bertambah sedikit demi sedikit secara konsisten hingga melaju kencang.",
            "Hal serupa terjadi saat pengemudi menginjak pedal rem. Kecepatan mobil berkurang perlahan hingga akhirnya benar-benar berhenti.",
            "Gerak dengan perubahan kecepatan yang teratur dan konsisten inilah yang dinamakan Gerak Lurus Berubah Beraturan (GLBB)."
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
            "Bagaimana cara memprediksi jarak tempuh benda jika kecepatannya terus berubah setiap detik?",
            "Kuncinya ada pada nilai percepatan yang KONSTAN (TETAP). Karena perubahan kecepatannya teratur, kita dapat menghitung posisi dan waktunya secara presisi!"
          ]
        }
      ]
    },
    {
      heading: "📍 Apa Itu GLBB?",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Gerak Lurus Berubah Beraturan (GLBB) adalah gerak benda pada lintasan lurus dengan percepatan konstan (tetap).",
            "Ciri utama GLBB:"
          ]
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "Lintasan berupa garis lurus."
              },
              {
                text: "Kecepatan $(v)$ berubah secara teratur sepanjang waktu."
              },
              {
                text: "Percepatan $(a)$ nilainya konstan / tidak nol $(a \\neq 0)$."
              }
            ]
          }
        }
      ]
    },
    {
      heading: "⚡ Jenis GLBB: Dipercepat vs Diperlambat",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Berdasarkan arah perubahan kecepatannya, GLBB dibagi menjadi dua:"
          ]
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "**GLBB Dipercepat**",
                children: {
                  type: "unordered",
                  items: [
                    {
                      text: "Kecepatan benda semakin bertambah seiring waktu."
                    },
                    {
                      text: "Nilai percepatan bernilai positif $(a > 0)$"
                    },
                    {
                      text: "Contoh:",
                      description: "Benda jatuh dari ketinggian, mobil yang digas."
                    }
                  ]
                }
              },
              {
                text: "**GLBB Diperlambat**",
                children: {
                  type: "unordered",
                  items: [
                    {
                      text: "Kecepatan benda semakin berkurang seiring waktu."
                    },
                    {
                      text: "Nilai percepatan bernilai negatif $(a < 0)$, sering disebut perlambatan)."
                    },
                    {
                      text: "Contoh:",
                      description: "Bola dilempar tegak lurus ke atas, kendaraan yang direm."
                    }
                  ]
                }
              }
            ]
          }
        }
      ]
    },
    {
      heading: "📐 Persamaan Utama GLBB",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Untuk menyelesaikan berbagai kasus kuantitatif pada GLBB, terdapat 3 rumus sakti yang wajib kamu kuasai:"
          ]
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "Menghitung Kecepatan Akhir $(v_t)$",
                description: "$v_t = v_0 + a \\cdot t$"
              },
              {
                text: "Menghitung Jarak Tempuh $(s)$",
                description: "$s = v_0 \\cdot t + \\frac{1}{2} a \\cdot t^2$"
              },
              {
                text: "Hubungan Kecepatan dan Jarak (Tanpa Variabel Waktu)",
                description: "$v_t^2 = v_0^2 + 2 \\cdot a \\cdot s$"
              }
            ]
          }
        },
        {
          type: "paragraph",
          text: "Keterangan Variabel:"
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
                text: "$v_t$ = Kecepatan akhir pada waktu t $(m/s)$"
              },
              {
                text: "$a$ = Percepatan $(\\text{m/s}^2)$ **Gunakan tanda negatif $(-)$ jika benda diperlambat*"
              },
              {
                text: "$t$ = Waktu tempuh $(s)$"
              },
              {
                text: "$s$ = Jarak tempuh / Perpindahan $(m)$"
              }
            ]
          }
        }
      ]
    },
    {
      heading: "📈 Analisis Grafik GLBB",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Bentuk grafik pada GLBB berbeda signifikan dari GLB"
          ]
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "Grafik Percepatan-Waktu $(a-t)$",
                description: "Berupa garis lurus horizontal datar sejajar sumbu waktu karena nilai percepatannya konstan."
              },
              {
                text: "Grafik Kecepatan-Waktu $(v-t)$",
                description: [
                  "Berupa garis miring linear. Garis naik ke atas menandakan GLBB dipercepat, sedangkan garis miring turun ke bawah menandakan GLBB diperlambat.",
                  "💡 Pro Tip: Luas daerah di bawah grafik $v-t$ menggambarkan total **jarak tempuh $(s)$** benda!"
                ]
              },
              {
                text: "Grafik Posisi-Waktu $(s-t)$",
                description: "Berupa garis melengkung (parabola) karena variabel waktu berpangkat dua $(t^2)$."
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
          type: "heading",
          text: "🧮 Contoh Soal & Pembahasan"
        },
        {
          type: "paragraph",
          text: "📌 **Kasus Pengereman Mobil**"
        },
        {
          type: "paragraph",
          text: "Sebuah mobil melaju dengan kecepatan awal $20\\text{ m/s}$. Tiba-tiba pengemudi melihat halangan di depan dan menginjak rem, sehingga mobil mengalami perlambatan konstan sebesar $4\\text{ m/s}^2$ hingga berhenti. Hitunglah:"
        },
        {
          type: "paragraph",
          text: "a. Waktu yang dibutuhkan mobil sampai benar-benar berhenti."
        },
        {
          type: "paragraph",
          text: "b. Jarak pengereman total sejak rem diinjak sampai mobil berhenti."
        },
        {
          type: "paragraph",
          text: "💡 **Penyelesaian:**"
        },
        {
          type: "paragraph",
          text: "Diketahui:"
        },
        {
          type: "paragraph",
          text: "• $v_0 = 20\\text{ m/s}$"
        },
        {
          type: "paragraph",
          text: "• $v_t = 0\\text{ m/s}$ (karena mobil berhenti)"
        },
        {
          type: "paragraph",
          text: "• $a = -4\\text{ m/s}^2$ (bernilai negatif karena diperlambat/rem)"
        },
        {
          type: "paragraph",
          text: "a. Menghitung waktu berhenti ($t$):"
        },
        {
          type: "paragraph",
          text: "$$v_t = v_0 + a \\cdot t$$"
        },
        {
          type: "paragraph",
          text: "$$0 = 20 + (-4) \\cdot t$$"
        },
        {
          type: "paragraph",
          text: "$$4t = 20 \\implies t = 5\\text{ detik}$$"
        },
        {
          type: "paragraph",
          text: "b. Menghitung jarak pengereman ($s$):"
        },
        {
          type: "paragraph",
          text: "$$v_t^2 = v_0^2 + 2 \\cdot a \\cdot s$$"
        },
        {
          type: "paragraph",
          text: "$$0^2 = 20^2 + 2 \\cdot (-4) \\cdot s$$"
        },
        {
          type: "paragraph",
          text: "$$0 = 400 - 8s$$"
        },
        {
          type: "paragraph",
          text: "$$8s = 400 \\implies s = 50\\text{ meter}$$"
        },
        {
          type: "paragraph",
          text: "Jadi, mobil memerlukan waktu **5 detik** dan jarak sejauh **50 meter** untuk berhenti secara aman."
        }
      ]
    },

    {
      heading: "⚠️ Miskonsepsi Fisika",
      blocks: [
        {
          type: "paragraph",
          text: "❌ **Miskonsepsi:** Mengira GLBB hanya terjadi pada benda yang bergerak makin cepat (akselerasi)."
        },
        {
          type: "paragraph",
          text: "✔️ **Fakta Sebenarnya:** GLBB juga mencakup gerak diperlambat! Selama perubahan kecepatannya konstan (berarah tetap & teratur), gerak tersebut tergolong GLBB."
        }
      ]
    },

    {
      heading: "🌟 Fun Fact",
      blocks: [
        {
          type: "paragraph",
          text: "Saat pesawat terbang akan lepas landas di *runway*, pilot melakukan GLBB dipercepat dengan menggenjot mesin hingga mencapai *take-off speed* (sekitar 240–285 km/jam) hanya dalam lintasan sepanjang beberapa ratus meter!"
        }
      ]
    },

    {
      heading: "🧠 Inti Materi",
      blocks: [
        {
          type: "paragraph",
          text: "• GLBB adalah gerak lurus dengan percepatan konstan ($a = \\text{konstan}$)."
        },
        {
          type: "paragraph",
          text: "• Pada GLBB dipercepat ($a > 0$), kecepatan bertambah teratur. Pada GLBB diperlambat ($a < 0$), kecepatan berkurang teratur."
        },
        {
          type: "paragraph",
          text: "• Luas area di bawah grafik $v-t$ menyatakan besarnya jarak tempuh ($s$)."
        }
      ]
    },

    {
      heading: "🚀 Next Mission",
      blocks: [
        {
          type: "paragraph",
          text: "Tahukah kamu bahwa benda yang jatuh secara bebas tanpa didorong juga merupakan contoh GLBB akibat pengaruh gravitasi Bumi?"
        },
        {
          type: "paragraph",
          text: "➡️ Selanjutnya: Gerak Jatuh Bebas (GJB)."
        }
      ]
    }
  ]
};

export default geraklurusberubahberaturan;