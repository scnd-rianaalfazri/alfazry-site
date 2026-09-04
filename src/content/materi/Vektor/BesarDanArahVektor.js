import img1 from "/src/assets/Materi/Vektor/besar-dan-arah-vektor1.png"

const besarDanArahVektor = {
  title: "Besar dan Arah Vektor",
  slug: "besar-dan-arah-vektor",
  description: "Memahami magnitude dan arah sebagai dua informasi utama sebuah vektor.",
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
            "Dua vektor bisa sama besar tetapi menuju arah berbeda. Apakah keduanya sama?",
            "Tidak. Arah membuat keduanya menjadi informasi yang berbeda."
          ]
        }
      ]
    },
    { heading: "❓ Pertanyaan Besar", blocks: [
        { type: "paragraph", 
          text: "Bagaimana kita menyatakan seberapa besar sebuah vektor dan ke mana arahnya?" 
        }
      ]
    },
    { heading: "📏 Besar atau Magnitude", blocks: [
        { type: "paragraph", 
          text: [
            "Besar vektor menunjukkan ukuran efek atau nilai vektor tanpa memperhatikan orientasinya.",
            "Notasi umum: $|A|$."
          ] 
        }
      ]
    },
    { heading: "🧭 Arah Vektor", blocks: [
        { 
          type: "paragraph", 
          text: [
            "Arah dapat dinyatakan dengan arah mata angin, tanda positif-negatif, atau sudut terhadap sumbu acuan." ,
            "Untuk analisis dua dimensi, sudut sering diukur dari sumbu x positif."
          ]
        }
      ]
    },
    { heading: "🔍 Contoh Analisis", 
      blocks: [
        { type: "paragraph", 
          text: "Sebuah gaya $20 N$ membentuk sudut $30\\degree$ terhadap sumbu $x$ positif. Informasinya lengkap karena kita mengetahui besar 20 N dan arah $30\\degree$." 
        }
      ]
    },
    { heading: "⚠️ Miskonsepsi", blocks: [
        { 
          type: "paragraph", 
          text: "Mengetahui besar vektor saja belum cukup untuk menentukan hasil penjumlahan vektor secara umum." 
        }
      ]
    },
    { 
      heading: "✨ Inti Materi", 
      blocks: [
        { 
          type: "paragraph", 
          text: "Sebuah vektor secara lengkap membutuhkan dua hal: besar dan arah." 
        }
      ]
    },
    { 
      blocks: [
        { type: "paragraph", 
          text: "Untuk membaca arah dengan konsisten, kita membutuhkan sistem koordinat." 
        }
      ]
    }
  ]
};

export default besarDanArahVektor;
