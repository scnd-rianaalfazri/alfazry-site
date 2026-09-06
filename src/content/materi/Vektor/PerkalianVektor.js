import img1 from "/src/assets/Materi/Vektor/perkalian-vektor1.png"

const perkalianVektor = {
  title: "Perkalian Vektor",
  slug: "perkalian vektor",
  description: "Memahami perkalian vektor dengan skalar, dot product, dan pengantar cross product.",
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
          text: "Vektor bisa dijumlahkan. Tapi bagaimana jika sebuah vektor harus diperbesar, diproyeksikan, atau menghasilkan arah baru?" 
        }
      ]
    },
    { 
      heading: "❓ Pertanyaan Besar", blocks: [
        { 
          type: "paragraph", 
          text: "Mengapa ada lebih dari satu jenis perkalian vektor?" 
        }
      ]
    },
    { 
      heading: "🔢 Perkalian dengan Skalar", 
      blocks: [
        { 
          type: "paragraph", 
          text: "Mengalikan vektor dengan bilangan mengubah besar vektor. Jika skalar positif, arah tetap; jika negatif, arah berbalik." 
        }
      ]
    },
    { 
      heading: "🔵 Dot Product", 
      blocks: [
        { 
          type: "paragraph", 
          text: "Dot product menghasilkan skalar dan berkaitan dengan seberapa besar dua vektor memiliki arah yang sama." 
        },
        {
          type: "equation",
          equation: "A \\dot B = |A||B| \\cos \\theta."
        },
        { 
          type: "paragraph", 
          text: "Contoh penting dalam fisika: $W = F \\dot s$." 
        }
      ]
    },
    { 
      heading: "✖️ Cross Product",
      blocks: [
        { 
          type: "paragraph", 
          text: "Cross product menghasilkan vektor yang arahnya tegak lurus terhadap bidang yang dibentuk dua vektor." 
        },
        {
          type: "equation",
          equation: "|A \\times B| = |A||B| \\sin \\theta."
        },
        { 
          type: "paragraph", 
          text: "Konsep ini akan muncul kembali pada torsi dan elektromagnetisme." 
        }
      ]
    },
    { 
      heading: "⚠️ Miskonsepsi", 
      blocks: [
        { 
          type: "paragraph", 
          text: "Dot product dan cross product bukan sekadar dua cara menulis perkalian. Jenis hasil dan makna fisiknya berbeda." 
        }
      ]
    },
    { 
      heading: "✨ Inti Materi", 
      blocks: [
        { 
          type: "paragraph", 
          text: "Skalar × vektor mengubah besar; dot product menghasilkan skalar; cross product menghasilkan vektor." 
        }
      ]
    },
    { 
      blocks: [
        { 
          type: "paragraph", 
          text: "Sekarang kita lihat mengapa semua konsep ini penting dalam fisika." 
        }
      ]
    }
  ]
};

export default perkalianVektor;
