const resultanGaya = {
  title: "Resultan Gaya",
  slug: "resultan-gaya",
  description: "Memahami cara menentukan resultan gaya yang bekerja pada suatu benda serta hubungannya dengan keadaan gerak benda.",
  chapter: "🚀 Dinamika: Gaya dan Hukum Newton",

  content: [
    { 
      blocks: [
        {
          type: "paragraph",
          text: [
            "Dalam kehidupan sehari-hari, sebuah benda jarang hanya mengalami satu gaya tunggal.",
            "Bayangkan kamu dan temanmu sedang menggeser sofa di kamar, atau sebuah mobil yang melaju sambil melawan angin malam.",
            "Lalu timbul pertanyaan penting: *Jika ada banyak gaya yang bekerja sekaligus, bagaimana kita tahu arah dan efek akhir gerakan benda tersebut?*"
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
            "Bagaimana cara menggabungkan beberapa gaya menjadi satu gaya pengganti?",
            "Apakah dua gaya yang besarnya sama pasti bikin benda bergerak?",
          ]
        }
      ]
    },
    {
      heading: "⚖️ Apa Itu Resultan Gaya?",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Resultan gaya adalah **satu gaya tunggal** yang memberikan efek/pengaruh sama seperti gabungan dari seluruh gaya yang bekerja pada suatu benda.",
            "Dalam fisika, resultan gaya dilambangkan dengan simbol notasi sigma $\\Sigma F$."
          ]
        },
        {
          type: "equation",
          equation: "\\Sigma F = F_1 + F_2 + F_3 + \\dots + F_n"
        },
        {
          type: "paragraph",
          text: [
            "Karena gaya merupakan **besaran vektor**, menentukan resultan gaya tidak sekadar menjumlahkan angka, tetapi **harus memperhatikan arahnya**."
          ]
        }
      ]
    },
    {
      heading: "➡️ Kasus 1: Gaya-Gaya Searah",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Jika dua gaya atau lebih bekerja pada arah yang sama (misal: sama-sama ke kanan), kamu tinggal menjumlahkan seluruh nilai gaya tersebut."
          ]
        },
        {
          type: "equation",
          equation: "\\Sigma F = F_1 + F_2"
        },
        {
          type: "paragraph",
          text: [
            "Arah resultan gayanya akan searah dengan gaya-gaya pembentuknya."
          ]
        }
      ]
    },
    {
      heading: "↔️ Kasus 2: Gaya Berlawanan Arah",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Jika gaya bekerja pada arah yang berlawanan, nilai resultan diperoleh dari selisih antara gaya yang lebih besar dan gaya yang lebih kecil."
          ]
        },
        {
          type: "equation",
          equation: "\\Sigma F = F_{\\text{besar}} - F_{\\text{kecil}}"
        },
        {
          type: "paragraph",
          text: [
            "Arah resultan gaya akan **selalu mengikuti arah gaya yang nilainya lebih besar**."
          ]
        }
      ]
    },
    {
      heading: "📐 Kasus 3: Gaya Tegak Lurus (Membentuk Angle 90°)",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Jika dua gaya bekerja membentuk sudut siku-siku ($90^\\circ$), kita dapat menentukan resultannya menggunakan rumus Phytagoras:"
          ]
        },
        {
          type: "equation",
          equation: "\\Sigma F = \\sqrt{F_1^2 + F_2^2}"
        }
      ]
    },
    {
      heading: "🎯 Kondisi Equilibrium: Resultan Gaya Nol",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Jika semua gaya yang bekerja saling menyeimbangkan (saling meniadakan), maka resultan gayanya bernilai nol.",
          ]
        },
        {
          type: "equation",
          equation: "\\Sigma F = 0"
        },
        {
          type: "paragraph",
          text: [
            "Kondisi ini disebut **seimbang (keadaan setimbang)**. Pada kondisi ini:"
          ]
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "Benda yang diam akan **tetap diam**."
              },
              {
                text: "Benda yang bergerak akan **tetap bergerak lurus dengan kecepatan konstan** (GLB)."
              }
            ]
          }
        }
      ]
    },
    {
      heading: "⚡ Resultan Gaya Tidak Nol",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Jika nilai gaya tidak seimbang, maka terdapat **gaya bersih (net force)** yang tersisa pada benda."
          ]
        },
        {
          type: "equation",
          equation: "\\Sigma F \\neq 0"
        },
        {
          type: "paragraph",
          text: [
            "Dampaknya? Benda pasti akan mengalami **percepatan** $(a)$, makin cepat, makin lambat, atau berbelok arah."
          ]
        }
      ]
    },

    {
      heading: "🌍 Contoh Kasus Nyata",
      blocks: [
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
                {
                  text: "🛒 **Mendorong Troli Supermarket**",
                  description: "Dua orang mendorong troli searah membuat kerja jadi ringan karena $F_{\\text{total}} = F_1 + F_2$."
                },
                {
                  text: "🪢 **Tarik Tambang**",
                  description: "Tim A menarik ke kiri dengan $100\\text{ N}$, Tim B menarik ke kanan dengan $120\\text{ N}$. Tim B menang dengan resultan $20\\text{ N}$ ke kanan."
                },
                {
                  text: "📚 **Buku di Atas Meja**",
                  description: "Buku diam karena gaya gravitasi bumi ($W$) yang menarik ke bawah diimbangi sempurna oleh gaya normal ($N$) meja yang mendorong ke atas."
                }
            ]
          }
        }
      ]
    },
    {
      heading: "🧪 Latihan Soal & Analisis",
      blocks: [
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "Sebuah balok didorong ke kanan dengan gaya $F_1 = 50\\text{ N}$ dan ditarik ke kiri oleh gaya gesek $F_2 = 20\\text{ N}$.",
                description: [
                  "Pembahasan",
                  "Diketahui:",
                ],
                children: {
                  type: "unordered",
                  items: [
                    "$F_1 = 50\\text{ N}$ (kanan)",
                    "$F_2 = 20\\text{ N}$ (kiri)"
                  ]
                },
                description: [
                  "Ditanyakan: Resultan gaya dan arah gerak balok?",
                  "Jawab:",
                ],
                equation: [
                  "\\Sigma F = F_1 - F_2 = 50 - 20 = 30\\;\\text{N}",
                ],
                description: [
                  "Resultan gaya bernilai $30\\text{ N}$ dengan arah ke **kanan**."
                ]
              },
              {
                text: "Dua gaya bekerja pada benda padat. $F_1 = 3\\text{ N}$ ke utara dan $F_2 = 4\\text{ N}$ ke timur.",
                description: [
                  "Pembahasan",
                  "Diketahui:",   
                ],
                children: {
                  type: "unordered",
                  items: [
                    "$F_1 = 3\\text{ N}$ (utara)",
                    "$F_2 = 4\\text{ N}$ (timur)"
                  ]
                },
                description: [
                  "Ditanyakan: Resultan gaya dan arah gerak benda?",
                  "Jawab:"
                ],
                equation: [
                  "\\Sigma F = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5\\;\\text{N}"
                ],
                description: [
                  "Resultan gaya yang bekerja adalah $5\\text{ N}$ ke arah timur laut."
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
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "Miskonsepsi: 1",
                description: [
                  "Resultan gaya bernilai nol artinya benda tidak memiliki gaya sama sekali. ❌",
                  "Gak, gitu!",
                  "Faktanya, banyak gaya yang bisa saja sedang bekerja pada benda tersebut, namun besarnya saling menghilangkan hingga bernilai nol (seimbang). ✔️"
                ]
              },
              {
                text: "Miskonsepsi: 2",
                description: [
                  "Kalau $\\Sigma F = 0$, benda pasti diam. ❌",
                  "Gak, gitu!",
                  "Faktanya, benda juga bisa sedang **bergerak lurus beraturan** dengan kecepatan tetap (GLB). ✔️"
                ]
              }
            ]
          }
        }
      ]
    },
    {
      heading: "🌟 *Fun Fact*",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Saat kamu rebahan di kasur sambil nonton reels, kamu nggak benar-benar 'bebas dari gaya'. Kasurmu menahan gaya gravitasi bumi dengan gaya normal yang sama besarnya. Keseimbangan inilah alasan kamu bisa santai tanpa 'melayang' atau 'terperosok' ke inti bumi!"
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
            "Resultan gaya $(\\Sigma F)$ adalah total gabungan dari semua gaya yang bekerja. Arah gaya sangat menentukan operasi matematikanya (searah dijumlah, berlawanan dikurang). Jika $\\Sigma F = 0$ benda seimbang, sedangkan jika $\\Sigma F \\neq 0$ benda akan mengalami perubahan gerak."
          ]
        }
      ]
    },
    { blocks: [
        {
          type: "paragraph",
          text: [
            "Apakah kamu sudah memahami bagaimana beberapa gaya digabungkan menjadi satu resultan gaya?",
            "Di materi berikutnya, kita bakal bedah **Hukum Newton I** untuk membongkar lebih dalam rahasia benda ketika $\\Sigma F = 0$!",
            "➡️ *Next,* kita menuju portal:[**Hukum Newton I**](hukum-newton-satu)"
          ]
        }
      ]
    }
  ]
};

export default resultanGaya;