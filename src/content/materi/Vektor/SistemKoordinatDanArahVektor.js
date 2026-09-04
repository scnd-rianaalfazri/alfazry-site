import img1 from "/src/assets/Materi/Vektor/sistem-koordinat-dan-arah-vektor1.png"

const sistemKoordinatDanArahVektor = {
  title: "Sistem Koordinat dan Arah Vektor",
  slug: "sistem koordinat dan arah vektor",
  description: "Menggunakan koordinat Cartesius untuk menentukan posisi, arah, dan kuadran vektor.",
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
          text: "Zara harus memberi tahu sistem navigasi ke mana sebuah objek bergerak. Ia membutuhkan bahasa yang konsisten untuk menyatakan arah." 
        }
      ]
    },
    { 
      heading: "❓ Pertanyaan Besar", 
      blocks: [
        { 
          type: "paragraph", 
          text: "Bagaimana sistem koordinat membantu kita mengubah arah menjadi informasi yang bisa dihitung?" 
        }
      ]
    },
    { 
      heading: "📐 Koordinat Cartesius", 
      blocks: [
        { 
          type: "paragraph", 
          text: [
            "Dalam dua dimensi kita menggunakan sumbu x dan y yang saling tegak lurus." ,
            "x biasanya horizontal, sedangkan y vertikal."
          ]
        }
      ]
    },
    { 
      heading: "↔️ Arah Positif dan Negatif", 
      blocks: [
        { 
          type: "paragraph", 
          text: "Ke kanan biasanya +x, ke kiri -x, ke atas +y, dan ke bawah -y." 
        }
      ]
    },
    { 
      heading: "📍 Kuadran", blocks: [
        { 
          type: "paragraph", 
          text: "Kuadran I: (+,+). Kuadran II: (-,+). Kuadran III: (-,-). Kuadran IV: (+,-)." 
        }
      ]
    },
    { 
      heading: "🧭 Sudut Arah", blocks: [
        { 
          type: "paragraph", 
          text: "Arah vektor dapat dinyatakan dengan sudut terhadap sumbu x positif. Kuadran tetap penting karena menentukan tanda komponen." 
        }
      ]
    },
    { 
      heading: "⚠️ Miskonsepsi", 
      blocks: [
        { 
          type: "paragraph", 
          text: "Sudut saja tidak selalu cukup. Kita harus tahu terhadap sumbu apa sudut diukur dan berada di kuadran mana." 
        }
      ]
    },
    { 
      heading: "✨ Inti Materi", 
      blocks: [
        { 
          type: "paragraph", 
          text: "Sistem koordinat menjadi kerangka untuk membaca arah dan menguraikan vektor dalam dua dimensi." 
        }
      ]
    },
    { 
      blocks: [
        { type: "paragraph", 
          text: "Sekarang satu vektor miring akan kita pecah menjadi dua arah yang lebih sederhana." 
        }
      ]
    }
  ]
};

export default sistemKoordinatDanArahVektor;
