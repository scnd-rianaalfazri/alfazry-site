const bidangMiringDenganGesekan = {
  title: "Balok pada Bidang Miring dengan Gaya Gesek",
  slug: "bidang-miring-dengan-gesekan",
  description: "Menganalisis gerak balok pada bidang miring yang dipengaruhi oleh gaya gesek menggunakan Hukum Newton II.",

  chapter: "🚀 Dinamika Gerak Lurus",
  content: [
    {
      heading: "⛰️ Mengapa Balok Tidak Selalu Meluncur Cepat?",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Pada materi sebelumnya, kita menganggap bidang miring sangat licin sehingga balok dapat meluncur tanpa hambatan.",
            "Namun, bagaimana jika permukaan bidang kasar?",
            "Mengapa balok bergerak lebih lambat dibandingkan saat berada pada bidang yang licin?"
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
            "Sekarang ubah rasa penasaranmu menjadi pertanyaan.",
            "Gunakan pola sederhana:"
          ]
        },
        {
          type: "quote",
          text:
            "“Mengapa ...?” atau “Bagaimana ...?”"
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "Bagaimana gaya gesek memengaruhi gerak benda pada bidang miring?"
              },
              {
                text: "Mengapa percepatan benda menjadi lebih kecil ketika ada gaya gesek?"
              }
            ]
          }
        }
      ]
    },
    {
      heading: "🧭 Identifikasi Gaya",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Balok berada pada bidang miring yang kasar.",
            "Gaya yang bekerja adalah:"
          ]
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "⬇ Gaya Berat $(W = mg)$"
              },
              {
                text: "↖ Gaya Normal $(N)$"
              },
              {
                text: "⬆ Sepanjang bidang: Gaya Gesek $(f)$"
              }
            ]
          }
        }
      ]
    },
    {
      heading: "🎨 Visualisasi Konsep",
      blocks: [
        {
          type: "paragraph",
          text: "Pada ilustrasi, tampilkan:"
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "Gaya berat $(mg)$ ke bawah."
              },
              {
                text: "Komponen $mg \\sin \\theta$ sejajar bidang."
              },
              {
                text: "Komponen mg cosθ tegak lurus bidang."
              },
              {
                text: "Gaya normal tegak lurus bidang."
              },
              {
                text: "Gaya gesek berlawanan arah gerak."
              }
            ]
          }
        }
      ]
    },
    {
      heading: "📐 Menghitung Gaya Normal",
      blocks: [
        {
          type: "paragraph",
          text: "Karena tidak ada gerak pada arah tegak lurus bidang, maka:"
        },
        {
          type: "equation",
          equation: "N = mg\\cos\\theta"
        }
      ]
    },

    {
      heading: "🧲 Menentukan Gaya Gesek",
      blocks: [
        {
          type: "paragraph",
          text: "Besarnya gaya gesek kinetis bergantung pada gaya normal."
        },
        {
          type: "equation",
          equation: "f_k = \\mu_k N"
        },
        {
          type: "paragraph",
          text: "Karena $N = mg \\cos \\theta$, maka:"
        },
        {
          type: "equation",
          equation: "f_k = \\mu_k mg\\cos\\theta"
        }
      ]
    },
    {
      heading: "⚖️ Menentukan Resultan Gaya",
      blocks: [
        {
          type: "paragraph",
          text: "Sepanjang bidang bekerja dua gaya utama."
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "Komponen berat menarik balok ke bawah."
              },
              {
                text: "Gaya gesek menghambat gerak."
              }
            ]
          }
        },
        {
          type: "equation",
          equation: "\\Sigma F = mg\\sin\\theta - f_k"
        }
      ]
    },
    {
      heading: "📖 Menerapkan Hukum Newton II",
      blocks: [
        {
          type: "equation",
          equation: "mg\\sin\\theta - \\mu_k mg\\cos\\theta = ma"
        },
        {
          type: "paragraph",
          text: "Dengan mengeliminasi massa $(m)$ dari kedua ruas, kita mendapatkan rumus percepatan balok:"
        },
        {
          type: "equation",
          equation: "a = g(\\sin\\theta - \\mu_k\\cos\\theta)"
        },
        {
          type: "paragraph",
          text: "Persamaan ini menunjukkan bahwa percepatan dipengaruhi oleh sudut kemiringan dan koefisien gesek, namun independen terhadap massa benda."
        }
      ]
    },
    {
      heading: "🧪 Contoh Analisis",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Sebuah balok bermassa $m$ meluncur pada bidang miring dengan sudut $\\theta = 30 \\degree dan koefisien gesek kinetis $mu k = 0,2$ (Gunakan $g = \\text{9,8 m/s}^2$).",
            "Penyelesaian langkah demi langkah:"
          ]
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "Hitung nilai sin(30°) dan cos(30°):",
                equation: "\\sin 30^\\circ = 0,5 \\quad \\text{dan} \\quad \\cos 30^\\circ \\approx 0,866"
              },
              {
                text: "Substitusikan nilai ke dalam persamaan percepatan:",
                equation: "a = 9,8 \\times (0,5 - (0,2 \\times 0,866))"
              },
              {
                text: "Sederhanakan hasil perhitungan di dalam kurung:",
                equation: "a = 9,8 \\times (0,5 - 0,1732) = 9,8 \\times 0,3268"
              },
              {
                text: "Hasil akhir percepatan balok:",
                equation: "a \\approx 3,20 \\text{ m/s}^2"
              }
            ]
          }
        }
      ]
    },
    {
      heading: "🌍 Contoh dalam Kehidupan",
      blocks: [
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "🚚 Truk menuruni jalan pegunungan."
              },
              {
                text: "🛹 Skateboard di jalan menurun."
              },
              {
                text: "⛷️ Atlet ski yang mengendalikan kecepatannya."
              },
              {
                text: "🦽 Kursi roda di jalur landai."
              }
            ]
          }
        }
      ]
    },
    {
      heading: "⚠️ Miskonsepsi",
      blocks: [
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "Miskonsepsi 1",
                description: [
                  "Pada bidang miring, gaya gesek selalu sama dengan gaya berat. ❌",
                  "Gak, gitu!",
                  "Faktanya, gaya gesek bergantung pada gaya normal dan koefisien gesek, bukan langsung pada gaya berat. ✔️"
                ]
              },
              {
                text: "Miskonsepsi 2",
                description: [
                  "Semakin besar massa benda, semakin besar percepatannya di bidang miring. ❌",
                  "Gak, gitu!",
                  "Faktanya, selama gaya gesek sebanding dengan gaya normal, massa akan saling menghilangkan sehingga percepatan bebas dari pengaruh massa. ✔️"
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
          text: "Jalur penyelamat *(escape ramp)* di jalan pegunungan dibuat menggunakan kerikil atau pasir tebal untuk memperbesar gaya gesek sehingga truk yang kehilangan kendali dapat berhenti dengan lebih aman."
        }
      ]
    },

    {
      heading: "✨ Inti Materi",
      blocks: [
        {
          type: "paragraph",
          text: "Pada bidang miring yang kasar, percepatan benda ditentukan oleh resultan antara komponen gaya berat yang sejajar bidang dan gaya gesek yang menghambat gerak. Oleh karena itu, analisis harus dilakukan secara bertahap: menentukan gaya normal, menghitung gaya gesek, lalu menerapkan Hukum Newton II."
        }
      ]
    },
    { 
      heading: "🎯 Quick Check", 
      blocks: [
        {
          type: "quickCheck",
          data: {
            questions: [
              {
                question: "Sebuah balok berada di atas lantai kasar dan didorong dengan gaya yang masih lebih kecil dari gaya gesek statis maksimum. Apa yang terjadi?",
                options: [
                  "Balok bergerak dengan percepatan tetap.",
                  "Balok bergerak dengan kecepatan konstan.",
                  "Balok langsung mengalami gaya gesek kinetis.",
                  "Balok mengalami percepatan yang semakin besar.",
                  "Balok tetap diam karena gaya gesek statis menyeimbangkan gaya dorong."
                ],
                answerIndex: 4
              },
              {
                question: "Sebuah balok bermassa 5 kg berada di lantai datar. Jika $g=10 m/s^2$ dan koefisien gesek statisnya 0,4, besar gaya gesek statis maksimum adalah....",
                options: [
                  "10 N",
                  "15 N",
                  "20 N",
                  "25 N",
                  "50 N"
                ],
                answerIndex: 2
              },
              {
                question: "Sebuah balok memiliki gaya gesek statis maksimum 30 N. Jika balok didorong dengan gaya 20 N, besar gaya gesek statis yang bekerja pada balok adalah....",
                options: [
                  "0 N",
                  "10 N",
                  "20 N",
                  "30 N",
                  "50 N"
                  ],
                answerIndex: 2
              },
              {
                question: "Sebuah balok sudah bergerak meluncur di atas lantai kasar. Gaya gesek yang digunakan dalam analisis adalah....",
                options: [
                  "gaya gesek statis",
                  "gaya gesek statis maksimum",
                  "gaya normal",
                  "gaya gesek kinetis",
                  "gaya gravitasi"
                ],
                answerIndex: 3
              },
              {
                question: "Sebuah balok bermassa 4 kg ditarik dengan gaya 25 N di lantai kasar. Jika $g=10 m/s^2$, $\\mu_s = 0,4$ dan $, dan \\mu_k = 0,25, besar percepatan balok adalah....",
                options: [
                  "$1,5 m/s^2$",
                  "$2,0 m/s^2$",
                  "$2,5 m/s^2$",
                  "$3,0 m/s^2$",
                  "$4,0 m/s^2$"
                ],
                answerIndex: 3
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
            "Selama ini kita hanya menganalisis satu benda. Bagaimana jika dua benda saling terhubung oleh tali dan bergerak bersama? Pada materi berikutnya, kita akan mempelajari Sistem Katrol Sederhana.",
            "➡️ *Next,* kita menuju portal: [**Sistem Katrol Sederhana**](/materi/sistem-katrol-sederhana)"
          ] 
        }
      ]
    }
  ]
};

export default bidangMiringDenganGesekan;