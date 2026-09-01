const pengantarFluida = {
  title: "Pengantar Fluida",
  slug: "pengantar-fluida",
  chapter: "💧 Fluida",
  description: "Mengenal konsep dasar fluida, jenis-jenis fluida, karakteristiknya, serta peran penting fluida dalam kehidupan sehari-hari.",

  content: [
    { 
      blocks: [
        { 
          type: "paragraph", 
          text: [
            "Coba perhatikan lingkungan di sekitarmu." ,
            "Air yang kamu minum, udara yang kamu hirup, darah yang mengalir dalam tubuh, hingga awan yang bergerak di langit merupakan contoh fluida.",
            "Tanpa fluida, kehidupan di Bumi tidak akan berlangsung seperti sekarang."
          ]
        }
      ]
  },
  { 
    heading: "🤔 Apa Itu Fluida?", 
    blocks: [
    {
      type: "paragraph",
      text: [
        "Fluida adalah zat yang dapat mengalir dan tidak mampu mempertahankan bentuknya sendiri.",
        "Bentuk fluida selalu menyesuaikan wadah yang ditempatinya.",
        "Karena dapat mengalir, fluida memiliki sifat yang berbeda dengan benda padat."
      ]
    }
  ]
  },
  { 
    heading: "💧 Jenis-Jenis Fluida", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Secara umum fluida dibedakan menjadi dua jenis, yaitu zat cair dan gas.",
          "Keduanya sama-sama dapat mengalir, tetapi memiliki karakteristik yang berbeda."
        ]
      },
      {
        type: "carousel",
        carousel: {
          cards: [
            {

              eyebrow: "PERBEDAAN FLUIDA CAIR DAN GAS",
              title: "🧪 Fluida Cair",
              text: "Zat cair memiliki volume tetap tetapi bentuknya mengikuti wadah.",
              description: "Contohnya adalah air, minyak, alkohol, dan bensin."
            },
            {
              eyebrow: "PERBEDAAN FLUIDA CAIR DAN GAS",
              title: "💨 Fluida Gas",
              text: "Gas akan memenuhi seluruh ruang yang tersedia.",
              description: "Contohnya adalah udara, oksigen, karbon dioksida, dan uap air."
            }
          ]
        }
      }
    ]
  },
  { 
    heading: "⚡ Karakteristik Fluida", 
    blocks: [
      {
        type: "list",
        list: {
          type: "ordered",
          items: [
            {
              text: "Mengalir dari daerah bertekanan tinggi ke daerah bertekanan rendah."
            },
            {
              text: "Memberikan tekanan ke segala arah."
            },
            {
              text: "Memiliki massa dan volume."
            },
            {
              text: "Menghasilkan gaya apung."
            },
            {
              text: "Mampu mentransmisikan tekanan."
            }
          ]
        }
      }
    ]
  },
  { heading: "🌎 Fluida dalam Kehidupan Sehari-Hari", 
    blocks: [
      {
        type: "list",
        list: {
          type: "ordered",
          items: [
            {
              text: "Saat minum menggunakan sedotan, kita memanfaatkan perbedaan tekanan."
            },
            {
              text: "Saat kapal mengapung di laut, berlaku prinsip gaya apung."
            },
            {
              text: "Saat mobil direm, sistem hidrolik memanfaatkan tekanan fluida."
            },
            {
              text: "Saat pesawat terbang, aliran udara menghasilkan gaya angkat pada sayap."
            }
          ]
        }
      }
    ]
  },
  { 
    heading: "🚢 Mengapa Kapal Bisa Mengapung?", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Meskipun terbuat dari baja yang berat, kapal dapat mengapung karena adanya gaya apung yang diberikan oleh air.",
          "Fenomena ini akan dipelajari melalui Hukum Archimedes."
        ]
      }
    ]
  },
  { 
    heading: "🚗 Mengapa Dongkrak Hidrolik Bisa Mengangkat Mobil?", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Tekanan yang diberikan pada fluida dapat diteruskan ke segala arah.",
          "Prinsip ini menjadi dasar kerja dongkrak dan rem hidrolik yang akan dipelajari pada Hukum Pascal."
        ]
      }
    ]
  },
  { 
    heading: "✈️ Mengapa Pesawat Bisa Terbang?", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Aliran udara di sekitar sayap pesawat menghasilkan perbedaan tekanan yang menciptakan gaya angkat.",
          "Fenomena ini dijelaskan oleh Hukum Bernoulli."
        ]
      }
    ]
  },
  { 
    heading: "🔬 Mengapa Kita Belajar Fluida?", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Fluida tidak hanya penting dalam fisika, tetapi juga dalam teknik, kedokteran, meteorologi, transportasi, hingga teknologi antariksa.",
          "Memahami fluida membantu kita menjelaskan berbagai fenomena alam dan teknologi modern."
        ]
      }
    ]
  },
  { heading: "🧭 Roadmap Chapter", 
    blocks: [
      {
        type: "paragraph",
        text: "Perjalanan yang akan dilalui pada chapter ini"
      },
      {
        type: "list",
        list: {
          type: "unordered",
          items: [
            {
              text: "Massa Jenis"
            },
            {
              text: "Tekanan"
            },
            {
              text: "Tekanan Hidrostatis"
            },
            {
              text: "Hukum Pascal"
            },
            {
              text: "Hukum Archimedes"
            },
            {
              text: "Tegangan Permukaan"
            },
            {
              text: "Meniskus"
            },
            {
              text: "Kapilaritas"
            },
            {
              text: "Viskositas"
            },
            {
              text: "Fluida Dinamis"
            },
            {
              text: "Debit Aliran"
            },
            {
              text: "Persamaan Kontinuitas"
            },
            {
              text: "Hukum Bernoulli"
            },
            {
              text: "Aplikasi Fluida"
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
        type: "list",
        list: {
          type: "ordered",
          items: [
            {
              text: "Sekitar 71% permukaan Bumi tertutup oleh air."
            },
            {
              text: "Tubuh manusia juga sebagian besar tersusun atas cairan."
            },
            {
              text: "Atmosfer Bumi merupakan fluida gas yang melindungi kehidupan dari berbagai ancaman luar angkasa."
            }
          ]
        }
      }
    ]
  },
  { 
    heading: "✨ Inti Materi", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Fluida adalah zat yang dapat mengalir dan mengikuti bentuk wadahnya.",,
          "Fluida terdiri atas zat cair dan gas.",
          "Konsep fluida digunakan untuk menjelaskan berbagai fenomena mulai dari kapal yang mengapung hingga pesawat yang terbang."
        ]

      }
    ]
  },
  { 
    blocks: [
      {
        type: "paragraph",
        text: "Mengapa ada benda yang mengapung sementara benda lain tenggelam?"
      }
    ]
  }]
};

export default pengantarFluida;