
const percepatan = {
  title: "Percepatan",
  slug: "percepatan",
  description: "Memahami konsep percepatan sebagai perubahan kecepatan terhadap waktu beserta penerapannya dalam kehidupan sehari-hari.",
  chapter: "↔️↕️ Kinematika: Gerak Satu Dimensi",

  content: [
    {
      blocks: [
        {
          type: "paragraph",
          text: [
            "Ketika lampu lalu lintas berubah dari merah ke hijau, pengemudi menginjak pedal gas dan mobil perlahan melaju semakin cepat.",
            "Sebaliknya, saat mendekati persimpangan atau lampu merah, rem diinjak dan kendaraan akan melambat hingga akhirnya berhenti total.",
            "Nah, perubahan kecepatan seiring berjalannya waktu inilah yang di dalam fisika kita sebut sebagai **PERCEPATAN** (*Acceleration*)."
          ]
        },
      ]
    },
    {
      heading: "❓ Pertanyaan Besar",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Apakah percepatan selalu berarti gerak benda makin cepat?",
          ]
        }
      ]
    },
    {
      heading: "⚡ Apa Itu Percepatan?",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Percepatan adalah besarnya perubahan kecepatan suatu benda dalam selang waktu tertentu.",
            "Karena kecepatan adalah besaran vektor (punya nilai dan arah), maka percepatan juga merupakan BESARAN VEKTOR. Artinya, percepatan punya arah tertentu!"
          ]
        }
      ]
    },
    {
      heading: "👀 Visualisasi Konsep",
      blocks: [
        {
          type: "paragraph",
          text: "Berikut ini adalah tabel perubahan kecepatan pada mobil dalam setiap detiknya"
        },
        {
          type: "table",
          table: {
            headers: ["Waktu (detik ke ...)", "Kecepatan"],
            rows: [
              ["0 s", "0 m/s"],
              ["1 s", "5 m/s"],
              ["2 s", "10 m/s"],
              ["3 s", "15 m/s"],
              ["4 s", "20 m/s"],
              ["5 s", "25 m/s"]
            ]
          }
        },
        { 
          type: "paragraph", 
          text: [
            "Berapakah nilai percepatan $(a)$ dari tabel tersebut",
            "Yap!",
            "Percepatannya adalah $\\text{5 m/s}^2$. Artinya, kecepatan bertambah 5 m/s setiap detik.",
            "Pola perubahan inilah yang menunjukkan percepatan.",
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
            "Secara matematis, percepatan rata-rata ($\\vec{a}$) dirumuskan sebagai berikut:"
          ]
        },
        {
          type: "equation",
          equation: "\\vec{a} = \\frac{\\Delta \\vec{v}}{\\Delta t} = \\frac{\\vec{v}_t - \\vec{v}_0}{t_t - t_0}"
        },
        {
          type: "paragraph",
          text: "**Keterangan:**"
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "$\\vec{a}$ = Percepatan (m/s²)"
              },
              {
                text: "$\\Delta \\vec{v}$ = Perubahan kecepatan (m/s)"
              },
              {
                text: "$\\vec{v}_t$ = Kecepatan akhir (m/s)"
              },
              {
                text: "$\\vec{v}_0$ = Kecepatan awal (m/s)"
              },
              {
                text: "$\\Delta t$ = Selang waktu (s)"
              }
            ]
          }
        }
      ]
    },
    {
      heading: "🔄 Jenis-Jenis Percepatan",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Berdasarkan perubahan nilainya, percepatan dibagi menjadi beberapa kondisi:"
          ]
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "**Percepatan Positif (a > 0):**",
                description: "Benda bergerak makin cepat seiring waktu (arah percepatan searah dengan arah gerak)."
              },
              {
                text: "**Percepatan Negatif / Perlambatan (a < 0):**",
                description: "Benda bergerak makin lambat (arah percepatan berlawanan dengan arah gerak, misalnya saat rem diinjak)."
              },
              {
                text: "**Percepatan Nol (a = 0)**",
                description: "Benda bergerak dengan kecepatan konstan/tetap atau benda sedang diam."
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
            "Sebuah mobil mula-mula bergerak dengan kecepatan $10\\text{ m/s}$. Setelah menginjak gas selama $5\\text{ detik}$, kecepatannya bertambah menjadi $25\\text{ m/s}$. Berapakah percepatan rata-rata mobil tersebut?"
          ]
        },
        {
          type: "paragraph",
          text: "**Diketahui:**"
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "Kecepatan awal ($\\vec{v}_0$) = $10\\text{ m/s}$"
              },
              {
                text: "Kecepatan akhir ($\\vec{v}_t$) = $25\\text{ m/s}$"
              },
              {
                text: "Selang waktu ($\\Delta t$) = $5\\text{ s}$"
              }
            ]
          }
        },
        {
          type: "paragraph",
          text: [
            "**Jawab:**",
            "$\\vec{a} = \\frac{\\vec{v}_t - \\vec{v}_0}{\\Delta t} = \\frac{25 - 10}{5} = \\frac{15}{5} = 3\\text{ m/s}^2$",
            "**Kesimpulan:**",
            "Kecepatan mobil bertambah sebesar $3\\text{ m/s}$ setiap detiknya!"
          ]
        }
      ]
    },

    {
      heading: "⚠️ Miskonsepsi",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Benda yang kecepatannya tinggi pasti percepatannya juga tinggi. ❌",
            "Tidak selalu!",
            "Faktanya, Pesawat jet yang terbang lurus dengan kecepatan konstan $900\\text{ km/jam}$ memiliki percepatan **NOL** ($a = 0$) karena kecepatannya tidak berubah. ✔️",
            "Percepatan hanya terjadi jika ada **perubahan** kecepatan!"
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
            "Mobil Formula 1 (F1) dapat berakselerasi dari $0$ hingga $100\\text{ km/jam}$ hanya dalam waktu sekitar $2.5\\text{ detik}$! Nilai percepatannya sangat ekstrem hingga mampu memberikan dorongan gravitasi buatan (g-force) yang dirasakan oleh sang pembalap."
          ]
        }
      ]
    },
    {
      heading: "✨ Inti Materi",
      blocks: [
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "Percepatan adalah perubahan kecepatan per satuan waktu ($\\vec{a} = \\frac{\\Delta \\vec{v}}{\\Delta t}$)."
              },
              {
                text: "Percepatan merupakan besaran **Vektor** (memiliki nilai dan arah)."
              },
              {
                text: "Bernilai **positif** jika makin cepat, **negatif** jika diperlambat, dan **nol** jika kecepatan konstan."
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
              question: "Percepatan adalah....",
              options: [
                "jarak yang ditempuh benda setiap satuan waktu.",
                "perubahan kecepatan suatu benda dalam selang waktu tertentu.",
                "perubahan posisi benda terhadap titik acuan.",
                "panjang lintasan yang ditempuh benda.",
                "gaya yang bekerja pada suatu benda."
              ],
              answerIndex: 1
            },
            {
              question: "Mengapa percepatan termasuk besaran vektor?",
              options: [
                "Karena nilainya selalu positif.",
                "Karena hanya bergantung pada waktu.",
                "Karena memiliki besar dan arah.",
                "Karena selalu dihitung menggunakan jarak.",
                "Karena nilainya selalu konstan."
              ],
              answerIndex: 2
            },
            {
              question: "Sebuah mobil mengalami perubahan kecepatan dari 10 m/s menjadi 25 m/s dalam waktu 5 sekon. Besar percepatan rata-rata mobil tersebut adalah....",
              options: [
                "2 m/s².",
                "3 m/s².",
                "5 m/s².",
                "7 m/s².",
                "15 m/s²."
              ],
              answerIndex: 1
            },
            {
              question: "Sebuah pesawat terbang dengan kecepatan 900 km/jam secara lurus dan tetap. Pernyataan yang benar adalah....",
              options: [
                "percepatannya positif.",
                "percepatannya negatif.",
                "percepatannya nol karena kecepatan tidak berubah.",
                "percepatannya sama dengan kecepatannya.",
                "percepatannya semakin besar seiring waktu."
              ],
              answerIndex: 2
            },
            {
              question: "Saat seorang pengemudi menginjak rem sehingga mobil semakin melambat, kondisi tersebut menunjukkan....",
              options: [
                "percepatan positif.",
                "percepatan nol.",
                "percepatan negatif (perlambatan).",
                "tidak terjadi percepatan karena mobil masih bergerak.",
                "kelajuan dan percepatan selalu bertambah."
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
      blocks: [
        {
          type: "paragraph",
          text: "Bagaimana jika sebuah benda bergerak lurus dengan kecepatan yang selalu tetap tanpa ada percepatan sama sekali?",
        }
      ]
    }
  ]
};

export default percepatan;