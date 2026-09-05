import img1 from "/src/assets/Materi/Vektor/resultan-vektor-satu-dimnesi1.png"

const resultanVektorSatuGaris = {
  title: "Resultan Vektor Satu Dimensi",
  slug: "resultan-vektor-satu-dimensi",
  description: "Menentukan resultan beberapa vektor yang bekerja pada satu garis lurus berdasarkan besar dan arah.",

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
          text: "Dua gaya bekerja pada satu benda: 40 N ke kanan dan 15 N ke kiri. Mana yang menang?" 
        }
      ]
    },
    { 
      heading: "❓ Pertanyaan Besar", 
      blocks: [
        { 
          type: "paragraph", 
          text: "Bagaimana menentukan satu vektor pengganti dari beberapa vektor yang segaris?" 
        }
      ]
    },
    { 
      heading: "➕ Arah Sama", 
      blocks: [
        { type: "paragraph", 
          text: [
            "Jika arah sama, besar vektor dijumlahkan.",
            "20 N ke kanan + 30 N ke kanan = 50 N ke kanan."
          ]
        }
      ]
    },
    { 
      heading: "➖ Arah Berlawanan", 
      blocks: [
        { type: "paragraph", 
          text: [
            "Jika arah berlawanan, besar vektor dikurangkan dan arah resultan mengikuti vektor yang lebih besar." ,
            "40 N ke kanan + 15 N ke kiri = 25 N ke kanan."
          ]
        }
      ]
    },
    { 
      heading: "↔️ Tanda Positif dan Negatif", 
      blocks: [
        { 
          type: "paragraph", 
          text: "Kita dapat memilih kanan sebagai positif dan kiri sebagai negatif. Dengan begitu, penjumlahan vektor dapat dilakukan secara aljabar." 
        }
      ]
    },
    { 
      heading: "⚖️ Resultan Nol", blocks: [
        { 
          type: "paragraph", 
          text: "20 N ke kanan + 20 N ke kiri = 0 N. Kedua vektor saling meniadakan secara resultan." 
        }
      ]
    },
    { 
      heading: "⚠️ Miskonsepsi", 
      blocks: [
        { 
          type: "paragraph", 
          text: "Resultan nol tidak otomatis berarti benda pasti diam. Resultan gaya nol berarti percepatan nol; benda dapat tetap bergerak dengan kecepatan konstan." 
        }
      ]
    },
    { 
      heading: "✨ Inti Materi", blocks: [
        { 
          type: "paragraph", 
          text: "Segaris: arah sama dijumlahkan; arah berlawanan dikurangkan dengan tanda yang konsisten." 
        }
      ]
    },
    { 
      blocks: [
        {
           type: "paragraph", 
           text: "Bagaimana jika vektornya tidak lagi segaris, tetapi membentuk sudut?" 
        }
      ]
    }
  ]
};

export default resultanVektorSatuGaris;
