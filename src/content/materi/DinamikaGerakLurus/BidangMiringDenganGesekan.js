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
          type: "paragraph",
          text: "❌ Pada bidang miring, gaya gesek selalu sama dengan gaya berat."
        },
        {
          type: "paragraph",
          text: "✅ Faktanya, gaya gesek bergantung pada gaya normal dan koefisien gesek, bukan langsung pada gaya berat."
        },
        {
          type: "paragraph",
          text: "❌ Semakin besar massa benda, semakin besar percepatannya di bidang miring."
        },
        {
          type: "paragraph",
          text: "✅ Faktanya, selama gaya gesek sebanding dengan gaya normal, massa akan saling menghilangkan sehingga percepatan bebas dari pengaruh massa."
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