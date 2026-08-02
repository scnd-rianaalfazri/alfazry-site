const hukumNewtonDua = {
  title: "Hukum Newton II: Hubungan Gaya, Massa, dan Percepatan",
  slug: "hukum-newton-dua",
  description: "Memahami hubungan antara resultan gaya, massa, dan percepatan melalui Hukum Newton II.",
  chapter: "🚀 Dinamika: Gaya dan Hukum Newton",

  content: [
    { blocks: [
        {
          type: "paragraph",
          text: [
            "Bayangkan sebuah mobil balap dan sebuah truk membawa muatan penuh.",
            "Jika keduanya diberi dorongan yang sama, apakah keduanya akan mengalami percepatan yang sama?",
            "Ternyata tidak! Mobil balap dapat berakselerasi jauh lebih cepat daripada truk.",
            "Mengapa hal itu bisa terjadi? Semua ini dijelaskan secara presisi oleh Hukum Newton II!"
          ]
        }
      ]
    },
    {
      heading: "❓ Pertanyaan Besar",
      blocks: [
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "Apa yang menentukan besar percepatan suatu benda?"
              },
              {
                text: "Bagaimana hubungan matematis antara gaya, massa, dan percepatan?"
              }
            ]
          }
        }
      ]
    },
    {
      heading: "📖 Bunyi Hukum Newton II",
      blocks: [
        {
          type: "quote",
          text: "Percepatan suatu benda berbanding lurus dengan resultan gaya yang bekerja padanya dan berbanding terbalik dengan massanya, serta arahnya searah dengan resultan gaya tersebut."
        }
      ]
    },
    {
      heading: "🎮 Eksplorasi Hubungan Gaya dan Massa",
      blocks: [
        {
          type: "table",
          table: {
            headers: ["Gaya (N)", "Massa (kg)", "Percepatan (m/s²)"],
            rows: [
              ["↑", "Tetap", "↑"],
              ["↓", "Tetap", "↓"],
              ["Tetap", "↑", "↓"],
              ["Tetap", "↓", "↑"]
            ]
          }
        }
      ]   
    },
    {
      heading: "⚖️ Formulasi Matematika Hukum Newton II",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Secara matematis, Hukum Newton II dapat dirumuskan menjadi:"
          ]
        },
        {
          type: "equation",
          equation: "\\Sigma F = m \\cdot a"
        },
        {
          type: "paragraph",
          text: [
            "Atau jika kita ingin mencari besarnya percepatan (a):"
          ]
        },
        {
          type: "equation",
          equation: "a = \\frac{\\Sigma F}{m}"
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
                text: "$\\Sigma F$ = Resultan Gaya yang bekerja pada benda (Newton / $N$)"
              },
              {
                text: "$m$ = Massa total benda (kilogram / kg)"
              },
              {
                text: "$a$ = Percepatan benda (meter per sekon kuadrat / m/s²)"
              }
            ]
          }
        }
      ]
    },
    {
      heading: "📊 Analisis Hubungan Besaran (Proporsionalitas)",
      blocks: [
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "Hubungan Gaya dan Percepatan $(a ∝ ΣF)$: Semakin besar resultan gaya yang bekerja pada suatu benda (dengan massa konstan), maka percepatannya akan semakin besar."
              },
              {
                text: "Hubungan Massa dan Percepatan $(a ∝ 1/m)$: Semakin besar massa suatu benda (dengan resultan gaya konstan), maka percepatannya justru akan semakin kecil."
              }

            ]
          }
        }
      ]
    },
    {
      heading: "🎯 Contoh Soal & Pembahasan",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Sebuah mobil mainan bermassa 2 kg didorong oleh dua gaya searah masing-masing F1 = 6 N dan F2 = 4 N. Berapakah percepatan yang dialami mobil mainan tersebut?",
            "**JAWABAN**",
            "**Diketahui:**",
          ]
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "Massa mobil mainan, m = 2 kg"
              },
              {
                text: "Gaya pertama, F1 = 6 N"
              },
              {
                text: "Gaya kedua, F2 = 4 N"
              }
            ]
          }
        },
        {
          type: "paragraph",
          text: [
            "**Penyelesaian:**"
          ]
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "Hitung total Resultan Gaya: $\\Sigma F = F_1 + F_2 = 6\\text{ N} + 4\\text{ N} = 10\\text{ N}$"
              },
              {
                text: "Masukkan ke rumus percepatan: $a = \\frac{\\Sigma F}{m} = \\frac{10\\text{ N}}{2\\text{ kg}} = 5\\text{ m/s}^2$"
              }
            ]
          }
        },
        {
          type: "paragraph",
          text: [
            "**KESIMPULAN:**",
            "Mobil mainan mengalami percepatan sebesar 5 m/s² ke arah dorongan."
          ]
        }
      ]
    },
    {
      heading: "⚠️ Miskonsepsi Umum",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Gaya yang lebih besar selalu menghasilkan Kecepatan yang lebih besar secara instan. ❌",
            "Gak, gitu!",
            "Gaya tidak secara langsung menentukan kecepatan awal, melainkan menentukan PERCEPATAN (perubahan kecepatan tiap detik). ✔️"
          ]
        }
      ]
    },
    {
      heading: "🌟 *Fun Fact*",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Mobil Formula 1 dapat berakselerasi dari 0 hingga 100 km/jam dalam waktu sekitar 2–3 detik. Hal ini dimungkinkan karena kombinasi mesin yang menghasilkan gaya dorong besar dan desain kendaraan yang ringan."
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
            "Hukum Newton II menjelaskan bahwa percepatan suatu benda ditentukan oleh resultan gaya yang bekerja padanya dan massanya. Semakin besar gaya, semakin besar percepatan. Semakin besar massa, semakin kecil percepatannya."
          ]
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
                question: "Hukum Newton II menyatakan bahwa percepatan suatu benda....",
                options: [
                  "berbanding lurus dengan massa benda.",
                  "berbanding terbalik dengan resultan gaya.",
                  "berbanding lurus dengan resultan gaya dan berbanding terbalik dengan massa benda.",
                  "selalu bernilai tetap meskipun gaya berubah.",
                  "tidak dipengaruhi oleh massa maupun gaya."
                ],
                answerIndex: 2
              },
              {
                question: "Sebuah benda bermassa 4 kg dikenai resultan gaya sebesar 20 N. Besar percepatan benda tersebut adalah....",
                options: [
                  "2 m/s².",
                  "4 m/s².",
                  "5 m/s².",
                  "20 m/s².",
                  "80 m/s²."
                ],
                answerIndex: 2
              },
              {
                question: "Dua benda dikenai resultan gaya yang sama. Benda A bermassa 2 kg, sedangkan benda B bermassa 8 kg. Pernyataan yang benar adalah....",
                options: [
                  "kedua benda memiliki percepatan yang sama.",
                  "benda B memiliki percepatan lebih besar.",
                  "benda A memiliki percepatan lebih besar",
                  "massa tidak memengaruhi percepatan benda.",
                  "percepatan kedua benda selalu nol."
                ],
                answerIndex: 2
              },
              {
                question: "Jika massa suatu benda tetap, kemudian resultan gaya yang bekerja dilipatgandakan, maka percepatan benda akan.....",
                options: [
                  "menjadi setengahnya.",
                  "tetap.",
                  "menjadi dua kali lebih besar.",
                  "menjadi empat kali lebih besar.",
                  "menjadi nol."
                ],
                answerIndex: 2
              },
              {
                question: "Pernyataan yang benar mengenai Hukum Newton II adalah....",
                options: [
                  "Gaya yang besar langsung membuat benda memiliki kecepatan tinggi.",
                  "Gaya menentukan besar percepatan",
                  "Massa yang lebih besar selalu membuat benda bergerak lebih cepat.",
                  "Resultan gaya nol menyebabkan percepatan semakin besar.",
                  "Percepatan tidak memiliki arah."
                ],
                answerIndex: 1
              }
            ],
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
            "Sekarang kamu telah memahami bagaimana gaya menyebabkan percepatan.",
            "Namun, ketika kamu mendorong meja, mengapa meja juga seolah 'mendorong balik' tanganmu?",
            "Fenomena tersebut akan dijelaskan melalui Hukum Newton III tentang aksi dan reaksi.",
            "➡️ *Next,* kita menuju portal: [**Hukum Newton III: Aksi dan Reaksi**](/materi/hukum-newton-tiga)."
          ]
        }
      ]
    }
  ]
};

export default hukumNewtonDua;