import img1 from"/src/assets/Materi/Vektor/mengenal-vektor-di-dunia-nyata1.png"
import img2 from"/src/assets/Materi/Vektor/mengenal-vektor-di-dunia-nyata2.png"

const mengenalVektorDiDuniaNyata = {
  title: "Mengenal Vektor di Dunia Nyata",
  slug: "mengenal-vektor-di-dunia nyata",
  description: "Menemukan peran besar dan arah dalam berbagai fenomena yang dekat dengan kehidupan.",

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
          text: "Lihat drone, kapal, mobil, atau bahkan angin. Banyak hal di sekitar kita tidak cukup dijelaskan hanya dengan angka." 
        }
      ]
    },
    { 
      heading: "❓ Pertanyaan Besar", 
      blocks: [
        { 
          type: "paragraph", 
          text: "Bagaimana manusia mengubah arah dan besar suatu gerak menjadi informasi yang bisa dianalisis?" 
        }
      ]
    },
    { heading: "🌍 Vektor di Sekitar Kita", 
      blocks: [
        { 
          type: "paragraph", 
          text: "GPS membutuhkan posisi dan arah. Pesawat memperhitungkan kecepatan dan angin. Kapal mempertimbangkan arus. Robot membutuhkan arah gerak untuk bernavigasi." 
        }
      ]
    },
    { heading: "🧭 Sistem Navigasi", 
      blocks: [
        {
          type: "image",
          src: img2
        },
        { 
          type: "paragraph", 
          text: "Zara memproyeksikan koordinat dan arah drone ke ruang holografik. Ia melihat bahwa satu gerak dapat direpresentasikan sebagai panah yang memiliki panjang dan orientasi." 
        }
      ]
    },
    { heading: "🔬 Dari Fenomena ke Model", 
      blocks: [
        { 
          type: "paragraph", 
          text: [
            "Fisika sering mengubah fenomena nyata menjadi model sederhana. Vektor membantu kita membawa informasi arah ke dalam model tersebut." ,
            "Amati → tentukan besar → tentukan arah → representasikan → analisis."
          ]
        }
      ]
    },
    { heading: "⚠️ Miskonsepsi", 
      blocks: [
        { 
          type: "paragraph", 
          text: "Vektor bukan hanya untuk benda yang sedang bergerak. Gaya, medan, dan momentum juga membutuhkan arah." 
        }
      ]
    },
    { heading: "🌟 *Fun Fact*", 
      blocks: [
        { type: "paragraph", 
          text: "Satu pertanyaan sederhana—'ke mana?'—sering menjadi pintu masuk menuju analisis vektor." 
        }
      ]
    },
    { heading: "✨ Inti Materi", 
      blocks: [
        { type: "paragraph", 
          text: "Vektor menghubungkan fenomena nyata dengan model fisika yang memuat besar dan arah." 
        }
      ]
    },
    { 
      blocks: [
        { type: "paragraph", 
          text: "Kalau vektor punya arah dan besar, bagaimana cara menggambarkannya?" 
        }
      ]
    }
  ]
};

export default mengenalVektorDiDuniaNyata;
