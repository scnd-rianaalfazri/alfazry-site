const fluidadinamis = {
  title: "Fluida Dinamis",
  slug: "fluida dinamis",
  description: "Memahami konsep fluida dinamis, karakteristik aliran fluida, serta perbedaannya dengan fluida statis.",
  chapter: "💧 Fluida",

  content: [
    { 
      heading: "🌊 Mengapa Air Sungai Selalu Mengalir?", 
      blocks: [
        {
          type: "paragraph",
          text: [
            "Air sungai terus bergerak dari daerah yang lebih tinggi menuju daerah yang lebih rendah. Begitu pula air yang mengalir di dalam pipa, darah yang mengalir di pembuluh darah, hingga udara yang bergerak di atmosfer.",
            "Semua fenomena tersebut dipelajari dalam fluida dinamis."
          ]
        }
      ]
    },
    { 
      heading: "📍 Apa Itu Fluida Dinamis?", 
      blocks: [
        {
          type: "paragraph",
          text: "Fluida dinamis adalah fluida yang sedang bergerak atau mengalir. Pada fluida dinamis, setiap partikel fluida memiliki kecepatan sehingga terjadi perpindahan massa dari satu tempat ke tempat lain."
        }
      ]
    },
    { 
      heading: "⚖️ Fluida Statis vs Fluida Dinamis", 
      blocks: [
        {
          type: "paragraph",
          text: "Pada fluida statis, fluida berada dalam keadaan diam sehingga hanya dipengaruhi oleh tekanan hidrostatis. Sebaliknya, pada fluida dinamis fluida bergerak sehingga selain tekanan, kecepatan aliran juga harus diperhatikan."
        }
      ]
    },
    { 
      heading: "💡 Karakteristik Fluida Dinamis", 
      blocks: [
        {
          type: "paragraph",
          text: "Fluida dinamis memiliki beberapa karakteristik diantaranya (Acuan dalam model fluida ideal):"
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "Tidak mengalami gesekan",
                description: "Saat mengalir, gesekan antara fluida dan dindingnya bisa diabaikan atau tidak dihitung."
              },
              {
                text: "Garis arus atau *streamline*.",
                description: "Alirannya mengikuti lintasan yang ada. Jadi, tidak mengalami turbulensi (arusnya acak, biasanya di pusaran)."
              },
              {
                text: "Tunak atau *steady*.",
                description: "Kecepatan fluida pada setiap titik sifatnya konstan (tidak berubah-ubah tergantung waktu)."
              },
              {
                text: "Tidak termampatkan (inkompresibel)",
                description: "Volume dan massa jenis fluida tidak berubah meskipun diberi tekanan."
              }
            ]
          }
        }
      ]
    },

    { 
      heading: "📊 Besaran-besaran pada Fluida Dinamis", 
      blocks: [
        {
          type: "paragraph",
          text: "Dalam fluida dinamis kita akan mempelajari debit aliran, kecepatan fluida, luas penampang, tekanan, dan energi fluida."
        }
      ]
    },
    { 
      heading: "🏭 Fluida Dinamis dalam Kehidupan", 
      blocks: [
        {
          type: "paragraph",
          text: "Konsep fluida dinamis digunakan dalam sistem perpipaan, irigasi, pembuluh darah, saluran air, hingga mesin industri."
        }
      ]
    },
    { 
      heading: "✈️ Fluida Dinamis dalam Teknologi", 
      blocks: [
        {
          type: "paragraph",
          text: "Prinsip fluida dinamis digunakan pada sayap pesawat, ventilasi udara, karburator, semprotan parfum, dan berbagai teknologi lainnya."
        }
      ]
    },
    { 
      heading: "⚠️ Miskonsepsi yang Sering Terjadi", 
      blocks: [
        {
          type: "paragraph",
          text: [
            "Banyak siswa mengira bahwa tekanan fluida selalu sama selama fluida mengalir.",
            "Padahal tekanan dapat berubah akibat perubahan kecepatan maupun ketinggian aliran."
          ]
        }
      ]
    },
    { 
      heading: "🔗 Hubungan dengan Materi Berikutnya", 
      blocks: [
        {
          type: "paragraph",
          text: "Untuk mengetahui banyaknya fluida yang mengalir setiap detik, kita perlu memahami konsep debit aliran."
        }
      ]
    },
    { 
      heading: "✨ Inti Materi", 
      blocks: [
        {
          type: "paragraph",
          text: "Fluida dinamis mempelajari perilaku fluida yang sedang bergerak. Dalam pembahasannya, konsep kecepatan, tekanan, dan energi fluida saling berkaitan untuk menjelaskan berbagai fenomena aliran."
        }
      ]
    },
    { 
      blocks: [
        {
          type: "paragraph",
          text: "Bagaimana cara menghitung banyaknya air yang mengalir melalui sebuah pipa setiap detik?"
        }
      ]
    }
  ]
};

export default fluidadinamis;