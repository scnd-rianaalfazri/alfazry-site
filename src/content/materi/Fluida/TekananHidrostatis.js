import { text } from "framer-motion/client";

const tekananHidrostatis = {
  title: "Tekanan Hidrostatis",
  slug: "tekanan-hidrostatis",
  chapter: "💧 Fluida",
  description: "Memahami tekanan hidrostatis, faktor-faktor yang memengaruhinya, serta penerapannya dalam kehidupan sehari-hari.",

  content: [
    { heading: "🤿 Mengapa Telinga Terasa Sakit Saat Menyelam Lebih Dalam?", 
      blocks: [
        {
          type: "paragraph",
          text: [
            "Saat menyelam ke dalam air, kita akan merasakan tekanan yang semakin besar pada telinga.",
            "Semakin dalam posisi kita di dalam air, semakin besar tekanan yang dialami tubuh.",
            "Fenomena ini dijelaskan oleh konsep tekanan hidrostatis."
          ]
        }
      ]
    },
    { 
      heading: "📍 Apa Itu Tekanan Hidrostatis?", 
      blocks: [
        {
          type: "paragraph",
          text: "Tekanan hidrostatis adalah tekanan yang diberikan oleh zat cair yang diam akibat pengaruh gravitasi."
        }
      ]
    },
  { 
    heading: "💡 Mengapa Tekanan Muncul?", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Setiap lapisan air memiliki massa dan berat. Lapisan air yang berada di atas akan menekan lapisan air di bawahnya.",
          "Akibatnya, semakin dalam suatu titik berada di dalam zat cair, semakin besar tekanan yang diterimanya."
        ]
      }
    ]
  },
  { 
    heading: "🌊 Faktor yang Memengaruhi Tekanan Hidrostatis", 
    blocks: [
      {
        type: "paragraph",
        text: "Tekanan hidrostatis dipengaruhi oleh:"
      },
      {
        type: "list",
        items: {
          type: "ordered",
          items: [
            {
              text: "📦 Massa jenis zat cair $(\\rho)$",
              description: "Semakin besar massa jenis zat cair, semakin besar tekanan hidrostatis yang dihasilkan."
            },
            {
              text: "🌍 Percepatan gravitasi $(m/s^2)$",
              description: "Semakin besar percepatan gravitasi, semakin besar pula tekanan hidrostatis yang dihasilkan."
            },
            {
              text: "📏 Kedalaman titik yang ditinjau $(m)$",
              description: "Semakin dalam posisi suatu titik dari permukaan zat cair, semakin besar tekanan hidrostatisnya."
            }
          ]
        }
      },
      {
        type: "paragraph",
        text: "Tetapi, perlu diingat bahwa tekanana hidrostatis itu: "
      },
      {
        type: "list",
        list: {
          type: "ordered",
          items: [
            {
              text: "⚠️ Tidak Bergantung Bentuk Wadah",
              description: "Tekanan hidrostatis tidak dipengaruhi bentuk wadah. Pada kedalaman yang sama, tekanan hidrostatis selalu sama meskipun bentuk wadah berbeda."
            },
            {
              text: "⚖️ Tidak Bergantung Volume Air",
              description: "Meskipun jumlah air dalam wadah berbeda, tekanan hidrostatis pada kedalaman yang sama tetap bernilai sama."
            }
          ]
        }
      }
    ]
  },
  { 
    heading: "🎯 Kedalaman Sama, Tekanan Sama", 
    blocks: [
      {
        type: "paragraph",
        text: "Dua titik yang berada pada kedalaman yang sama dalam zat cair yang sama akan memiliki tekanan hidrostatis yang sama."
      }
    ]
  },
  { 
    heading: "Tekanan Hidrostatis dalam Kehidupan", 
    blocks: [
      {
        type: "list",
        list: {
          type: "ordered",
          items: [
            {
              text: "🏊 Perenang dan Penyelam", 
              description: "Perenang yang berada dekat permukaan menerima tekanan lebih kecil dibandingkan penyelam yang berada jauh di bawah permukaan."
            },
            {
              text: "🚢 Bendungan",
              description: "Dinding bendungan dibuat lebih tebal di bagian bawah karena tekanan air semakin besar pada kedalaman yang lebih dalam."
            },
            {
              text: "🐟 Ikan Laut Dalam",
              description: "Ikan yang hidup di laut dalam mampu bertahan pada tekanan yang sangat besar karena memiliki adaptasi khusus."
            },
            {
              text: "⚙️ Kapal Selam",
              description: "Kapal selam dirancang dengan struktur yang kuat agar mampu menahan tekanan hidrostatis yang besar di kedalaman laut."
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
        text: [
          "Banyak siswa mengira tekanan hidrostatis bergantung pada bentuk wadah atau banyaknya air.",
          "Padahal tekanan hidrostatis hanya bergantung pada massa jenis fluida, gravitasi, dan kedalaman."
        ]
      }
    ]
  },
  { 
    heading: "🔗 Hubungan dengan Page Berikutnya", 
    blocks: [
      {
        type: "paragraph",
        text: "Konsep tekanan pada fluida diam menjadi dasar untuk memahami Hukum Pascal dan sistem hidrolik."
      }
    ]
  },
  { 
    heading: "✨ Inti Materi", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Tekanan hidrostatis adalah tekanan yang diberikan oleh zat cair yang diam akibat gravitasi. Tekanan hidrostatis juga, bertambah seiring bertambahnya kedalaman.",
          "Tekanan ini tidak bergantung pada bentuk wadah, tetapi bergantung pada massa jenis fluida, gravitasi, dan kedalaman."
        ]
      }
    ]
  },
  { 
    blocks: [
      {
        type: "paragraph",
        text: "Bagaimana tekanan pada fluida dapat diteruskan ke segala arah dan dimanfaatkan untuk mengangkat mobil?"
      }
    ]
  }]
};

export default tekananHidrostatis;