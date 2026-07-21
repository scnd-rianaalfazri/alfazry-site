import { text } from "framer-motion/client";

const percepatan = {
  title: "Percepatan",
  slug: "percepatan",
  description: "Memahami konsep percepatan sebagai perubahan kecepatan terhadap waktu beserta penerapannya dalam kehidupan sehari-hari.",
  chapter: "↔️↕️ Kinematika: Gerak Satu Dimensi",

  content: [
    {
      heading: "🏎️ Mengapa Kendaraan Bisa Semakin Cepat?",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Ketika lampu lalu lintas berubah dari merah ke hijau, pengemudi menginjak pedal gas dan mobil perlahan melaju semakin cepat.",
            "Sebaliknya, saat mendekati persimpangan atau lampu merah, rem diinjak dan kendaraan akan melambat hingga akhirnya berhenti total.",
            "Perubahan kecepatan seiring berjalannya waktu inilah yang di dalam fisika kita sebut sebagai Percepatan (Acceleration)."
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
            "Jawabannya: TIDAK! Dalam fisika, pengereman (membuat benda lambat) atau perpindahan arah gerak juga termasuk bagian dari percepatan."
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
                text: "**Percepatan Positif ($a>0$):**",
                description: "Benda bergerak makin cepat seiring waktu (arah percepatan searah dengan arah gerak)."
              },
              {
                text: "**Percepatan Negatif / Perlambatan ($a < 0$):**",
                description: "Benda bergerak makin lambat (arah percepatan berlawanan dengan arah gerak, misalnya saat rem diinjak)."
              },
              {
                text: "**Percepatan Nol ($a = 0$)**",
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
          text: "**Soal:** Sebuah mobil mula-mula bergerak dengan kecepatan $10\\text{ m/s}$. Setelah menginjak gas selama $5\\text{ detik}$, kecepatannya bertambah menjadi $25\\text{ m/s}$. Berapakah percepatan rata-rata mobil tersebut?"
        },
        {
          type: "paragraph",
          text: "**Diketahui:**\n• Kecepatan awal ($\\vec{v}_0$) = $10\\text{ m/s}$\n• Kecepatan akhir ($\\vec{v}_t$) = $25\\text{ m/s}$\n• Selang waktu ($\\Delta t$) = $5\\text{ s}$"
        },
        {
          type: "paragraph",
          text: "**Jawab:**"
        },
        {
          type: "paragraph",
          text: "$$\\vec{a} = \\frac{\\vec{v}_t - \\vec{v}_0}{\\Delta t} = \\frac{25 - 10}{5} = \\frac{15}{5} = 3\\text{ m/s}^2$$"
        },
        {
          type: "paragraph",
          text: "**Kesimpulan:** Kecepatan mobil bertambah sebesar $3\\text{ m/s}$ setiap detiknya!"
        }
      ]
    },

    {
      heading: "⚠️ Miskonsepsi Populer",
      blocks: [
        {
          type: "heading",
          text: "⚠️ Miskonsepsi Populer"
        },
        {
          type: "paragraph",
          text: "❌ *'Benda yang kecepatannya tinggi pasti percepatannya juga tinggi.'*"
        },
        {
          type: "paragraph",
          text: "✔️ **Faktanya:** Tidak selalu! Pesawat jet yang terbang lurus dengan kecepatan konstan $900\\text{ km/jam}$ memiliki percepatan **NOL** ($a = 0$) karena kecepatannya tidak berubah."
        },
        {
          type: "paragraph",
          text: "Percepatan hanya terjadi jika ada **perubahan** kecepatan!"
        }
      ]
    },

    {
      heading: "🌟 Fun Fact",
      blocks: [
        {
          type: "heading",
          text: "🌟 Fun Fact"
        },
        {
          type: "paragraph",
          text: "Mobil Formula 1 (F1) dapat berakselerasi dari $0$ hingga $100\\text{ km/jam}$ hanya dalam waktu sekitar $2.5\\text{ detik}$! Nilai percepatannya sangat ekstrem hingga mampu memberikan dorongan gravitasi buatan (g-force) yang dirasakan oleh sang pembalap."
        }
      ]
    },

    {
      heading: "🧠 Inti Materi (TL;DR)",
      blocks: [
        {
          type: "heading",
          text: "🧠 Inti Materi (TL;DR)"
        },
        {
          type: "paragraph",
          text: "• Percepatan adalah perubahan kecepatan per satuan waktu ($\\vec{a} = \\frac{\\Delta \\vec{v}}{\\Delta t}$)."
        },
        {
          type: "paragraph",
          text: "• Percepatan merupakan besaran **Vektor** (memiliki nilai dan arah)."
        },
        {
          type: "paragraph",
          text: "• Bernilai **positif** jika makin cepat, **negatif** jika diperlambat, dan **nol** jika kecepatan konstan."
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
          text: "Bagaimana jika sebuah benda bergerak lurus dengan kecepatan yang selalu tetap tanpa ada percepatan sama sekali?"
        },
        {
          type: "paragraph",
          text: "➡️ **Materi Selanjutnya:** Gerak Lurus Beraturan (GLB)."
        }
      ]
    }
  ]
};

export default percepatan;