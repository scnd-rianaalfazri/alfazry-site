const gayagravitasidangayaberat = {
  title: "Gaya Gravitasi dan Gaya Berat",
  slug: "gaya-gravitasi-dan-gaya-berat",
  description: "Memahami perbedaan gaya gravitasi dan gaya berat, rumus matematisnya, serta pengaruh massa benda dan percepatan gravitasi terhadap berat suatu benda.",
  chapter: "🚀 Dinamika: Konsep Dasar",

  content: [
    { blocks: [
        {
          type: "paragraph",
          text: [
            "Pernah mikir gak, kenapa pas kamu melempar HP atau apel ke atas, benda itu bakal selalu balik jatuh ke bawah? Kenapa gak melayang ke luar angkasa aja?",
            "Jawabannya ada pada fenomena tak kasatmata yang dinamakan **Gaya Gravitasi**. Di Bumi, gaya inilah yang menarik semua benda bermassa menuju ke pusat Bumi."
          ]
        }
      ]
    },
    {
      heading: "🌌 Apa Itu Gaya Gravitasi?",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Gaya gravitasi adalah gaya tarik-menarik yang terjadi antara dua benda yang memiliki massa. Sir Isaac Newton menyatakan bahwa **setiap benda bermassa di alam semesta ini saling menarik satu sama lain**.",
            "Secara matematis, Hukum Gravitasi Universal Newton dirumuskan sebagai:"
          ]
        },
        {
          type: "equation",
          equation: "F = G \\cdot \\frac{m_1 \\cdot m_2}{r^2}"
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "$F$ = Gaya gravitasi antar benda (Newton / $\\text{N}$)"
              },
              {
                text: "$G$ = Konstanta gravitasi umum $(6{,}674 \\times 10^{-11} \\text{ N}\\cdot\\text{m}^2/\\text{kg}^2)$"
              },
              {
                text: "$m_1, m_2$ = Massa kedua benda $(\\text{kg})$"
              },
              {
                text: "$r$ = Jarak antara pusat massa kedua benda $(\\text{m})$"
              }
            ]
          }
        }
      ]
    },
    {
      heading: "⚖️ Gaya Berat: Gravitasi Spesifik di Planet Kita",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Gaya berat (sering disingkat **Berat**) adalah gaya gravitasi yang bekerja pada suatu benda akibat tarikan dari planet tempat benda tersebut berada (seperti Bumi).",
            "Arah gaya berat selalu tegak lurus mengarah ke **pusat planet / pusat Bumi**.",
            "Persamaan gaya berat dirumuskan secara sederhana:"
          ]
        },
        {
          type: "equation",
          equation: "W = m \\cdot g"
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "$W$ = Gaya berat ($\\text{N}$"
              },
              {
                text: "$m$ = Massa benda ($\\text{kg}$)"
              },
              {
                text: "$g$ = Percepatan gravitasi setempat ($\\text{m/s}^2$ atau $\\text{N/kg}$, di Bumi rata-rata $9{,}8 \\text{ m/s}^2$ atau $10 \\text{ m/s}^2$)"
              }
            ]
          }
        }
      ]
    },
    {
      heading: "🧠 Perbedaan Utama: Massa vs Berat",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Banyak orang salah kaprah menganggap **massa** dan **berat** itu sama. Padahal di dunia fisika, keduanya beda banget, lho! Yuk bedah perbedaannya:"
          ]
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "📦 **Massa ($m$):**",
                children: {
                  type: "unordered",
                  items: [
                    {
                      text: "Jumlah materi yang terkandung dalam suatu benda."
                    },
                    {
                      text: "Nilainya **TETAP/KONSTAN** di mana pun berada (Bumi, Bulan, luar angkasa)."
                    },
                    {
                      text: "Merupakan besaran skalar (hanya punya nilai)."
                    },
                    {
                      text: "Satuan SI: Kilogram ($\\text{kg}$)."
                    }
                  ]
                }
              },
              {
                text: "⚖️ **Berat ($W$):",
                children: {
                  type: "unordered",
                  items: [
                    {
                      text: "Gaya gravitasi yang bekerja pada benda tersebut."
                    },
                    {
                      text: "Nilainya **BERUBAH-UBAH** tergantung besar gravitasi tempat tersebut."
                    },
                    {
                      text: "Merupakan besaran vektor (punya nilai dan arah menuju pusat planet)."
                    },
                    {
                      text: "Satuan SI: Newton ($\\text{N}$)."
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
      heading: "✏️ Contoh Soal & Pembahasan",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Seorang astronot memiliki massa $60 \\text{ kg}$. Jika percepatan gravitasi di Bumi adalah $10 \\text{ m/s}^2$ dan gravitasi di Bulan adalah $1{,}6 \\text{ m/s}^2$, hitunglah:",
          ]
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "Berat astronot di Bumi."
              },
              {
                text: "Berat astronot saat berada di Bulan."
              }
            ]
          }
        },
        {
          type: "paragraph",
          text: [
            "**JAWABAN:**",
            "**Diketahui:**",

          ]
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [

            ]
          }
        },
        {
          type: "paragraph",
          text: [
            "Penyelesaian:"
          ]
        },
        {
          type: "list",
          list: [
            {
              text: "Berat di Bumi ($W_{\\text{Bumi}}$):",
              equation: "W_{\\text{Bumi}} = m \\cdot g_{\\text{Bumi}}$$\n$$W_{\\text{Bumi}} = 60 \\text{ kg} \\times 10 \\text{ m/s}^2 = 600 \\text{ N}"
            },
            {
              text: "Berat di Bulan ($W_{\\text{Bulan}}$):",
              description: "Massa astronot tetap $60 \\text{ kg}$ di Bulan.*\n$$W_{\\text{Bulan}} = m \\cdot g_{\\text{Bulan}}$$\n$$W_{\\text{Bulan}} = 60 \\text{ kg} \\times 1{,}6 \\text{ m/s}^2 = 96 \\text{ N}"
            }
          ]
        },
        {
          type: "paragraph",
          text: [
            "**KESIMPULAN:**",
            "Massa astronot tetap $60 \\text{ kg}$, tetapi beratnya di Bulan menjadi jauh lebih ringan dibanding saat berada di Bumi!",
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
                  "'Berat badan gue 55 kg.' ❌",
                  "Tetapi, ...",
                  "Faktanya secara ilmiah, '55 kg' adalah **massa**, bukan berat. Berat kamu yang sebenarnya adalah $55 \\text{ kg} \\times 10 \\text{ m/s}^2 = 550 \\text{ Newton}$! ✔️",
                  "Memang Kalau dalam kebiasaan sehari-hari, kita menyebut massa dengan istilah berat dan menggunakan satuan kilogram (kg). Karena hal tersebut lebih mudah dikenal, tetapi dalam fisika keduanya dibedakan secara tegas antara massa dan gaya berat"
                ]
              },
              {
                text: "Miskonsepsi 2",
                description: [
                  "Astronot di stasiun luar angkasa (ISS) melayang karena tidak ada gravitasi. ❌",
                  "Faktanya, gravitasi di orbit ISS sebenarnya masih ada sekitar 90% gravitasi Bumi! Mereka melayang bukan karena nol gravitasi, melainkan karena sedang berada dalam kondisi **jatuh bebas terus-menerus** (*free fall*) mengelilingi Bumi. ✔️"
                ]
              }
            ]
          }
        }
      ]
    },
    {
      heading: "✨ Inti Materi",
      blocks: [
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "**Gaya Gravitasi**",
                description: "Gaya tarik antar benda bermassa di alam semesta."
              },
              {
                text: "**Gaya Berat ($W$)**",
                description: "Gaya gravitasi yang dialami benda akibat tarikan planet tempat ia berada ($W = m \\cdot g$)."
              },
              {
                text: "**Massa** sifatnya tetap di mana pun, sedangkan **Berat** berubah sesuai besarnya percepatan gravitasi tempat benda berada."
              }
            ]
          }
        }
      ]
    },
    { blocks: [
        {
          type: "paragraph",
          text: [
            "Sekarang, apakah kamu sudah tahu kalau benda yang ditarik Bumi mengalami gaya berat?",
            "Tapi, kenapa benda yang ditaruh di atas meja gak terus menembus lantai ke bawah? Gaya apa yang menahannya?",
            "➡️ *Next,* kita menuju portal: [**Gaya Normal**](/materi/gaya-normal)."
          ]
        }
      ]
    }
  ]
};

export default gayagravitasidangayaberat;