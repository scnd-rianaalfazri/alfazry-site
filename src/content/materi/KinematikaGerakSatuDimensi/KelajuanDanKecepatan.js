import { text } from "framer-motion/client";

const kelajuandankecepatan = {
  title: "Kelajuan dan Kecepatan",
  slug: "kelajuan-dan-kecepatan",
  description: "Memahami perbedaan kelajuan dan kecepatan serta kaitannya dengan jarak, perpindahan, dan arah gerak.",
  chapter: "↔️↕️ Kinematika: Gerak Satu Dimensi",

  content: [
    {
      heading: "🏎️ Apakah Cepat Selalu Berarti Sama?",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Dalam kehidupan sehari-hari kita sering mendengar celetukan, 'Wah, mobil itu melaju sangat cepat!'",
            "Namun di dunia Fisika, kata 'cepat' itu punya dua makna yang beda banget: Kelajuan dan Kecepatan.",
            "Sekilas terdengar mirip, tapi cara hitung dan konsep dasarnya bertolak belakang!"
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
            "Mengapa dua kendaraan bisa bergerak dengan kelajuan yang sama, tetapi kecepatannya berbeda?",
            "Jawabannya simpel: bergantung pada apakah kita memperhatikan arah geraknya atau tidak!"
          ]
        }
      ]
    },
    {
      heading: "📏 Apa Itu Kelajuan?",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Kelajuan adalah besarnya jarak total yang ditempuh benda dalam setiap satuan waktu.",
            "Kelajuan **TIDAK** peduli benda itu mau belok ke kanan, kiri, atau muter-muter. Karena cuma punya nilai (besar) tanpa arah, kelajuan termasuk besaran skalar."
          ]
        }
      ]
    },
    {
      heading: "🏹 Apa Itu Kecepatan?",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Kecepatan adalah perubahan perpindahan posisi benda dalam setiap satuan waktu.",
            "Selain punya nilai, kecepatan wajib punya arah gerak (misal: 60 km/jam ke utara). Karena punya besar DAN arah, kecepatan termasuk besaran vektor."
          ]
        }
      ]
    },
    {
      heading: "📐 Rumus & Formulasi Matematika",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Secara matematis, kelajuan ($v$) dan kecepatan ($\\vec{v}$) dirumuskan sebagai berikut:"
          ]
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "**Kelajuan Rata-rata:**",
                description: [
                  "$v = \\frac{s}{t}$",
                  "Keterangan:"
                ],
                children: {
                  type: "unordered",
                  items: [
                    {
                      text: "$v$ = kelajuan (m/s)"
                    },
                    {
                      text: "$s$ = total jarak (m)"
                    },
                    {
                      text: "$t$ = total waktu (s)"
                    }
                  ]
                }
              },
              {
                text: "**Kecepatan Rata-rata:**",
                description: [
                  "$\\vec{v} = \\frac{\\Delta x}{\\Delta t} = \\frac{x_2 - x_1}{t_2 - t_1}$",
                  "Keterangan:"
                ],
                children: {
                  type: "unordered",
                  items: [
                    {
                      text: "$\\vec{v}$ = kecepatan (m/s)"
                    },
                    {
                      text: "$\\Delta x$ = perpindahan posisi (m)"
                    },
                    {
                      text: "$\\Delta t$ = selisih waktu (s)"
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
      heading: "⚔️ Kelajuan vs Kecepatan: Apa Bedanya?",
      blocks: [
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "**Jenis Besaran:**",
                children: {
                  type: "unordered",
                  items: [
                    {
                      text: "Kelajuan = Skalar"
                    },
                    {
                      text: "Kecepatan = Vektor"
                    }
                  ]
                }
              },
              {
                text: "**Acuan Dasar:**",
                children: {
                  type: "unordered",
                  items: [
                    {
                      text: "Kelajuan berbasis Jarak"
                    },
                    {
                      text: "Kecepatan berbasis Perpindahan"
                    }
                  ]
                }
              },
              {
                text: "**Pengaruh Arah:**",
                children: {
                  type: "unordered",
                  items: [
                    {
                      text: "Kelajuan tidak butuh arah"
                    },
                    {
                      text: "Kecepatan sangat butuh arah"
                    }
                  ]
                }
              },
              {
                text: "**Nilai:**",
                children: {
                  type: "unordered",
                  items: [
                    {
                      text: "Kelajuan selalu positif ($\\ge 0$)"
                    },
                    {
                      text: "Kecepatan bisa bernilai negatif (menunjukkan arah)"
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
      heading: "🎯 Visualisasi Konsep & Studi Kasus",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Bayangkan kamu berlari mengelilingi lapangan bola sejauh 400 meter dalam waktu 100 detik dan kembali ke titik start persis.", 
          ]
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "📏 **Kelajuanmu:** $v = \\frac{400\\text{ m}}{100\\text{ s}} = 4\\text{ m/s}$",
                description: [
                  "Ada nilainya karena kamu memang berkeringat menempuh jarak."
                ]
              },
              {
                text: "🏹 **Kecepatanmu:** $\\vec{v} = \\frac{0\\text{ m}}{100\\text{ s}} = 0\\text{ m/s}$",
                description: "Kecepatan rata-ratamu NOL! Kenapa? Karena kamu balik lagi ke posisi awal, perpindahanmu dianggap nol"
              }
            ]
          }
        }
      ]
    },

    {
      heading: "✍️ Contoh Soal & Pembahasan",
      blocks: [
        {
          type: "paragraph",
          text: [
            "**Soal:**",
            "Sebuah mobil bergerak ke arah timur sejauh 80 meter selama 4 detik, lalu berbalik arah ke barat sejauh 20 meter selama 2 detik. Hitunglah kelajuan rata-rata dan kecepatan rata-rata mobil tersebut!",
            "**Jawaban:**",
          ]
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "Total Jarak ($s$) = $80\\text{ m} + 20\\text{ m} = 100\\text{ m}$"
              },
              {
                text: "Perpindahan ($\\Delta x$) = $80\\text{ m} - 20\\text{ m} = 60\\text{ m}$ (ke timur)"
              },
              {
                text: "Total Waktu ($t$) = $4\\text{ s} + 2\\text{ s} = 6\\text{ s}$"
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
                text: "Kelajuan rata-rata:",
                description: [
                    "$v = \\frac{100}{6} = 16{,}67\\text{ m/s}$"
                ]
               },
               {
                text: "Kecepatan rata-rata:",
                description: [
                   "$\\vec{v} = \\frac{60}{6} = 10\\text{ m/s}$ (ke arah timur)"
                ]
              }
            ]
          }
        },
        {
          type: "paragraph",
          text: [
            "**Kesimpulan:**",
            "Jadi kelajuanya adalah $16{,}67\\text{ m/s}$ dan kecepatnya adalah $10\\text{ m/s}$ (ke arah timur)"
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
            type: "ordered",
            items: [
              {
                text: "Spedometer",
                description: [
                  "Speedometer di motor/mobilmu itu menunjukkan kelajuan sesaat.",
                  "Dia cuma memunculkan angka (misal: 40 km/jam) tanpa memberi tahu kamu lagi jalan ke utara atau selatan."
                ]
              },
              {
                text: "GPS",
                description: [
                  "Sedangkan Google Maps atau GPS navigasi pesawat memperhitungkan arah gerak dan posisi acuan, makanya memanfaatkan konsep kecepatan!"
                ]
              }
            ]
          }
        }
      ]
    },
    {
      heading: "⚠️ Miskonsepsi Populer",
      blocks: [
        {
          type: "paragraph",
          text: [
            "*'Kelajuan dan Kecepatan itu sama aja kok, cuma beda bahasa Inggrisnya (Speed & Velocity).'* ❌",
            "Faktanya, dalam bahasa sehari-hari mungkin dianggap mirip. Tapi dalam Fisika, salah membedakan besaran skalar dan vektor ini bisa bikin perhitungan navigasi roket/pesawat nyasar jauh! ✔️"
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
            "Tahu gak?",
            "Bumi kita berotasi dengan kelajuan sekitar 1.670 km/jam di area khatulistiwa! Tapi karena kita bergerak bersama atmosfer dan bumi membentuk lintasan melingkar, kita tidak merasa 'terlempar'."
          ]
        }
      ]
    },
    {
      heading: "🧠 Inti Materi (Takeaway Message)",
      blocks: [
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "**Kelajuan (Speed):**",
                description: "Jarak / Waktu $\\rightarrow$ Skalar (Hanya Punya Besar)."
              },
              {
                text: "**Kecepatan (Velocity):**",
                description: "Perpindahan / Waktu $\\rightarrow$ Vektor (Punya Besar + Arah)."
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
              question: "Pernyataan yang benar mengenai kelajuan adalah....",
              options: [
                "perubahan perpindahan tiap satuan waktu.",
                "besaran yang memiliki besar dan arah.",
                "jarak total yang ditempuh benda tiap satuan waktu.",
                "selalu dihitung menggunakan perpindahan.",
                "nilainya dapat bernilai negatif."
              ],
              answerIndex: 2
            },
            {
              question: "Perbedaan utama antara kelajuan dan kecepatan adalah....",
              options: [
                "kelajuan menggunakan satuan meter, sedangkan kecepatan menggunakan kilometer.",
                "kelajuan memperhatikan arah, sedangkan kecepatan tidak.",
                "kelajuan berdasarkan jarak, sedangkan kecepatan berdasarkan perpindahan dan arah.",
                "kelajuan hanya digunakan pada benda diam.",
                "kecepatan selalu lebih besar daripada kelajuan."
              ],
              answerIndex: 2
            },
            {
              question: "Seorang pelari mengelilingi lintasan stadion sejauh 400 meter dalam 100 sekon dan kembali ke titik awal. Berapakah kecepatan rata-rata pelari tersebut?",
              options: [
                "0 m/s.",
                "2 m/s.",
                "4 m/s.",
                "100 m/s.",
                "400 m/s."
              ],
              answerIndex: 0
            },
            {
              question: "Sebuah mobil bergerak 80 meter ke timur, kemudian kembali 20 meter ke barat dalam waktu total 6 sekon. Berapakah kecepatan rata-rata mobil tersebut?",
              options: [
                "16,67 m/s ke timur.",
                "13,33 m/s ke timur.",
                "10 m/s ke timur.",
                "10 m/s ke barat.",
                "0 m/s."
              ],
              answerIndex: 2
            },
            {
              question: "Alat pada kendaraan yang menunjukkan angka seperti 40 km/jam tanpa menunjukkan arah gerak adalah....",
              options: [
                "kompas.",
                "GPS.",
                "speedometer.",
                "akselerometer.",
                "barometer."
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
          type: "heading",
          text: "🚀 Next Mission"
        },
        {
          type: "paragraph",
          text: "Bagaimana jika kelajuan atau kecepatan suatu benda tidak konstan alias berubah-ubah seiring waktu? Bikin makin cepat atau makin lambat?"
        },
        {
          type: "paragraph",
          text: "➡️ **Materi Selanjutnya:** Percepatan (Acceleration)."
        }
      ]
    }
  ]
};

export default kelajuandankecepatan;