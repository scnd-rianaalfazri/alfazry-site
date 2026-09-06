import { m } from "framer-motion";

const hukumarchimedes = {
  title: "Hukum Archimedes",
  slug: "hukum archimedes",
  chapter: "💧 Fluida",
  description: "Memahami gaya apung yang dialami benda ketika berada di dalam fluida.",

  content: [
    { 
      blocks: [
        {
          type: "paragraph",
          text: [
            "Jika kita menjatuhkan paku ke dalam air, paku akan tenggelam. Namun anehnya, kapal yang terbuat dari baja dan massanya jauh lebih besar justru dapat mengapung.",
            "Fenomena ini dapat dijelaskan menggunakan Hukum Archimedes."
          ]
        }
      ]
    },
    { 
      heading: "🏛️ Kisah Eureka!", 
      blocks: [
        {
          type: "paragraph",
          text: [
            "Hukum ini ditemukan oleh ilmuwan Yunani kuno bernama Archimedes. Konon, saat berendam di bak mandi, ia menyadari bahwa air meluap ketika tubuhnya masuk ke dalam bak.",
            "Dari pengamatan tersebut, Archimedes menemukan konsep gaya apung dan berteriak 'Eureka!' yang berarti 'Aku menemukannya!'."
          ]
        }
      ]
    },
    { 
      heading: "📖 Apa Itu Hukum Archimedes?", 
      blocks: [
        {
          type: "paragraph",
          text: [
            "Hukum Archimedes menyatakan bahwa benda yang dicelupkan sebagian atau seluruhnya ke dalam fluida akan mengalami gaya ke atas.",
            "Besarnya gaya apung sama dengan berat fluida yang dipindahkan oleh benda tersebut."
          ]
        }
      ]
    },
    { 
      heading: "🧮 Rumus Gaya Apung", 
      blocks: [
        {
          type: "paragraph",
          text: "Besarnya gaya apung dapat dihitung menggunakan persamaan berikut:"
        },
        {
          type: "equation",
          equation: "F_a = \\rho \\times g \\times V"
        },
        {
          type: "paragraph",
          text: "Keterangan:"
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "$F_a$ = gaya apung $(N)$"
              },
              {
                text: "$\\rho$ = massa jenis fluida $(kg/m^3)$"
              },
              {
                text: "$g$ = percepatan gravitasi $(m/s^2)$"
              },
              {
                text: "$V$ = volume fluida yang dipindahkan $(m^3)$"
              }
            ]
          }
        }
      ]
    },
    { 
      heading: "⚖️ Mengapung, Melayang, atau Tenggelam?", 
      blocks: [
        {
          type: "paragraph",
          text: "Keadaan benda dalam fluida ditentukan oleh perbandingan massa jenis benda dan massa jenis fluida."
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "Jika massa jenis benda lebih kecil dari massa jenis fluida, benda akan mengapung."
              },
              {
                text: "Jika massa jenis benda sama dengan massa jenis fluida, benda akan melayang."
              },
              {
                text: "Jika massa jenis benda lebih besar dari massa jenis fluida, benda akan tenggelam."
              }
            ]
          }
        }
      ]
    },
    { 
      heading: "🧊 Kenapa Es Mengapung di Air?", 
      blocks: [
        {
          type: "paragraph",
          text: [
            "Massa jenis es sekitar $\\text{917 kg/m}^3$, sedangkan massa jenis air sekitar $\\text{1000 kg/m}^3$.",
            "Karena massa jenis es lebih kecil, gaya apung mampu menahan berat es sehingga es mengapung."
          ]
        }
      ]
    },
    { 
      heading: "🧪 Contoh Perhitungan", 
      blocks: [
        {
          type: "paragraph",
          text: [
            "**CONTOH SOAL**",
            "Sebuah benda dicelupkan ke dalam air dan memindahkan air sebanyak $\\text{0,02 m}^3$.",
            "Jika massa jenis air $\\text{1000 kg/m}^3$ dan gravitasi $\\text{10 m/s}^2$, berapakah gaya apung yang bekerja?",
            "**JAWAB:**",
            "Diketahui:"
          ]
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "$F_a = \\text{1000 kg/m}^3$"
              },
              {
                text: "$g = \\text{10 m/s}^2"
              },
              {
                text: "$V = \\text{0,02 m}^3$"
              }
            ]
          }
        },
        {
          type: "paragraph",
          text: [
            "**Ditanyakan:** $F_a$",
            "**Penyelesaian:**",
          ]
        },
        {
          type: "equation",
          equation: "$F_a = 1000 \\times 10 \\times 0,02 = 200 N$"
        },
        {
          type: "paragraph",
          text: [
            "**Kesimpulan:**",
            "Jadi, gaya apung $(F_a)$ yang bekerja pada benda tersebut sebesar $\\text{200 N}$"
          ]
        }
      ]
    },
    { 
      heading: "Hukum Archimedes dalam Kehidupan", 
      blocks: [
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "Kapal laut dapat mengapung karena bentuk lambungnya membuat massa jenis rata-rata kapal lebih kecil daripada massa jenis air."
              },
              {
                text: "Kapal selam mengatur jumlah air dalam tangki ballast untuk naik atau turun di dalam laut."
              },
              {
                text: "Pelampung membantu manusia tetap berada di permukaan air dengan menambah volume dan gaya apung."
              }
            ]
          }
        }
      ]
    },
    { 
      heading: "🎈 Selain di Air, Berlaku di Udara!", 
      blocks: [
        {
          type: "paragraph",
          text: [
            "Hukum Archimedes tidak hanya berlaku pada zat cair. Udara juga merupakan fluida.",
            "Contohnya, pada balon udara. Balon udara panas dapat terbang karena mengalami gaya apung dari udara di sekitarnya."
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
            "Gunung es yang terlihat di permukaan sebenarnya hanya sebagian kecil dari keseluruhan volumenya. Sekitar 90% volume gunung es berada di bawah permukaan laut.",
            "Inilah alasan gunung es dapat menjadi bahaya bagi kapal."
          ]
        }
      ]
    },
    { 
      heading: "✨ Inti Materi",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Benda yang berada di dalam fluida mengalami gaya ke atas yang disebut gaya apung. Besarnya gaya apung sama dengan berat fluida yang dipindahkan",
            "Hukum Archimedes menjelaskan mengapa benda dapat mengapung, melayang, atau tenggelam."
          ]
        }
      ]
    }
  ]
};

export default hukumarchimedes;