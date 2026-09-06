import img1 from "/src/assets/Materi/Vektor/pengantar-vektor1.png"
import img2 from "/src/assets/Materi/Vektor/pengantar-vektor2.png"
import img3 from "/src/assets/Materi/Vektor/portal-besaran-skalar-dan-vektor.png"

const pembukaChapterVektor = {
  title: "Pembuka Chapter: Vektor",
  slug: "pembuka-chapter-vektor",
  description: "Memulai perjalanan memahami bagaimana fisika menggambarkan besaran yang memiliki besar dan arah.",
  chapter: "➡️ Vektor",

  content: [
    { 
      blocks: [
        {
          type: "image",
          src: img1
        },
        { 
          type: "paragraph", 
          text: [
            "Bayangkan GPS memberi tahu: sebuah drone bergerak 20 meter. Apakah informasi itu sudah cukup?" ,
            "Belum tentu. Kita juga perlu tahu ke mana drone bergerak."
          ]
        }
      ]
    },
    { heading: "❓ Pertanyaan Besar", 
      blocks: [
        { 
          type: "paragraph", 
          text: "Kenapa dalam fisika, angka saja kadang tidak cukup untuk menggambarkan sebuah gerakan?" 
        }
      ]
    },
    { heading: "🧭 Vektor sebagai Bahasa Arah", 
      blocks: [
        { 
          type: "paragraph", 
          text: [
            "Vektor digunakan untuk menggambarkan besaran yang memiliki besar dan arah." ,
            "Contohnya perpindahan, kecepatan, percepatan, gaya, dan momentum."

          ]
        }
      ]
    },
    { heading: "👩‍🔬 Analisis Vektor", 
      blocks: [
        {
          type: "image",
          src: img2
        },
        { 
          type: "paragraph", 
          text: [
            "Zara mengamati hologram navigasi dan mulai memisahkan informasi 'seberapa besar' dari 'ke arah mana'.",
            "Inilah cara berpikir awal seorang Vector Analyst: besar dan arah harus dipahami bersama."
          ] 
        }
      ]
    },
    { heading: "⚖️ Gambaran Awal Skalar dan Vektor", 
      blocks: [
        { 
          type: "paragraph", 
          text: [
            "Skalar cukup dinyatakan dengan nilai. Vektor membutuhkan nilai sekaligus arah.",
            "Massa, waktu, suhu, dan energi adalah contoh skalar. Perpindahan, kecepatan, percepatan, gaya, dan momentum adalah contoh vektor."
          ]
        }
      ]
    },
    { heading: "✨ Inti Materi", 
        blocks: [
        { 
          type: "paragraph", 
          text: "Vektor adalah cara fisika menggambarkan besaran yang memiliki besar dan arah." 
        }
      ]
    },
    {  
      blocks: [
        { 
          type: "paragraph", 
          text: "Sekarang kita bedah lebih jelas! Besaran mana yang hanya membutuhkan nilai, dan mana yang membutuhkan arah?" 
        },
        {
          type: "image",
          src: img3,
          caption: "🚀 Kamu bisa KLIK GAMBAR INI untuk menuju portal selanjutnya",
          link: "/materi/besaran-skalar-dan-vektor"
        }
      ]
    }
  ]
};

export default pembukaChapterVektor;
