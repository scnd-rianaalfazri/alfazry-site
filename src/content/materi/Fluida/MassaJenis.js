const massaJenis = {
  title: "Massa Jenis Fluida",
  slug: "massa-jenis-fluida",
  chapter: "💧 Fluida",
  description: "Memahami konsep massa jenis dan pengaruhnya dalam kehidupan sehari-hari.",

  content: [
    { 
      heading: "🌊 Kenapa Kapal Besi Bisa Mengapung?", 
      blocks: [
        {
          type: "paragraph",
          text: [
            "Pernah melihat kapal laut yang terbuat dari besi raksasa? Anehnya, benda seberat itu justru bisa mengapung di atas air. Sementara sebuah paku kecil langsung tenggelam.",
            "Rahasianya terletak pada sifat yang disebut massa jenis.",
            "Massa jenis menunjukkan seberapa rapat partikel-partikel penyusun suatu benda atau zat. Semakin besar massa jenisnya, semakin banyak massa yang terkandung dalam setiap satuan volumenya."
          ]
        }
      ]
    },
    { 
      heading: "📦 Apa Itu Massa Jenis?", 
      blocks: [
        {
          type: "paragraph",
          text: [
            "Massa jenis adalah perbandingan antara massa suatu benda dengan volumenya.",
            "Dalam fisika, massa jenis biasanya dilambangkan dengan huruf Yunani rho $(\\rho)$.",
            "Satuan SI massa jenis adalah kilogram per meter kubik $(kg/m^3)$." 
          ]
        }
      ]
    },
    { 
      heading: "🧮 Rumus Massa Jenis", 
      blocks: [
        {
          type: "paragraph",
          text: "Hubungan antara massa, volume, dan massa jenis dapat dituliskan sebagai:"
        },
        {
          type: "equation",
          equation: "\\rho = frac{m}{v}"
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
                text: "$\\rho$ = massa jenis $(kg/m^3)$"
              },
              {
                text: "$m$ = massa benda $(kg)$"
              },
              {
                text: "$V$ = volume benda $(m^3)$"
              },
            ]
          }
        }
      ]
    },
    { 
      heading: "🧪 Contoh Perhitungan", 
      blocks: [
        {
          type: "paragraph",
          text: [
            "**SOAL**",
            "Sebuah balok memiliki massa 2 kg dan volume 0,001 m³. Berapakah massa jenis balok tersebut?",
            "**JAWABAN:**",
            "**Penyelesaian:**"
          ]
        },
        {
          type: "equation",
          equation: [
            "\\rho = frac{2}{0,001}",
            "\\rho = 2000 kg/m^3",
          ]
        },
        {
          type: "paragraph",
          text: [
            "**KESIMPULAN:**",
            "Jadi, nilai massa jenis benda tersebut adalah $2000 kg/m^3$"
          ]
        }
      ]
    },
    { 
      heading: "⚖️ Massa Jenis Beberapa Zat", 
      blocks: [
        {
          type: "table",
          table: {
            headers: ["Zat", "Massa Jenis (kg/m³)"],
            rows: [
              ["Udara", "1,3"],
              ["Air", "1000"],
              ["Es", "917"],
              ["Aluminium", "2700"],
              ["Besi", "7800"],
              ["Emas", "19300"]
            ]
          }
        }
      ]
    },
    { 
      heading: "🧊 Kenapa Es Mengapung?", 
      blocks: [
        {
          type: "paragraph",
          text: [
            "Massa jenis es lebih kecil daripada massa jenis air.",
            "Karena itu, es akan mengapung di permukaan air.",
            "Benda yang massa jenisnya lebih kecil daripada fluida cenderung mengapung, sedangkan yang lebih besar akan tenggelam."
          ]
        }
      ]
    },
    { 
      heading: "🚀 Fakta Menarik", 
      blocks: [
        {
          type: "paragraph",
          text: [
            "Minyak dapat mengapung di atas air karena massa jenisnya lebih kecil.",
            "Balon udara dapat terbang karena udara panas di dalam balon memiliki massa jenis lebih kecil daripada udara di sekitarnya.",
            "Kapal laut dirancang agar massa jenis rata-ratanya lebih kecil daripada massa jenis air laut sehingga dapat mengapung."
          ]
        }
      ]
    },  
    { 
      heading: "🎯 Kesimpulan", 
      blocks: [
        {
          type: "paragraph",
          text: [
            "Massa jenis menunjukkan tingkat kerapatan suatu zat.",
            "Semakin besar massa jenis, semakin besar massa dalam setiap satuan volumenya.",
            "Konsep massa jenis membantu menjelaskan mengapa benda dapat mengapung, melayang, atau tenggelam di dalam fluida."
          ] 
        }
      ]
  }]
};

export default massaJenis;