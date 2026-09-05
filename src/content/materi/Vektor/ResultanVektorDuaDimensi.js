import img1 from "/src/assets/Materi/Vektor/resultan-vektor-dua-dimensi1.png"

const resultanVektorDuaDimensi = {
  title: "Resultan Vektor Dua Dimensi",
  slug: "resultan-vektor-dua-dimensi",
  description: "Menentukan resultan vektor pada bidang dua dimensi menggunakan komponen x dan y.",
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
          text: "Satu vektor bergerak ke timur, yang lain ke utara. Resultannya tidak bisa ditemukan hanya dengan 10 + 20."
        }
      ]
    },
    { 
      heading: "❓ Pertanyaan Besar", 
      blocks: [
        { 
          type: "paragraph", 
          text: "Bagaimana kita menggabungkan vektor yang memiliki arah berbeda?"
        }
      ]
    },
    { 
      heading: "🧩 Uraikan Menjadi Komponen", 
      blocks: [
        { 
          type: "paragraph", 
          text: "Setiap vektor diuraikan menjadi komponen x dan y. Komponen yang searah kemudian dijumlahkan." ,
        },
        {
          type: "equation",
          equation: "Rx = \\sigma Ax"
        },
        {
          type: "paragraph",
          text: "dan"
        },
        {
          type: "equation",
          equation: "Ry = \\sigma Ay"
        }
      ]
    },
    { 
      heading: "📐 Besar Resultan", blocks: [
        { 
          type: "paragraph", 
          text: "Setelah $Rx$ dan $Ry$ diketahui, keduanya menjadi sisi siku-siku segitiga resultan." 
        },
        {
          type: "equation",
          equation: "R = sqrt{Rx^2 + Ry^2}"
        }
      ]
    },
    { heading: "🔍 Contoh Analisis", blocks: [
        { type: "paragraph", 
          text: [
            "Jika Rx = 3 N dan Ry = 4 N, maka R = √(3² + 4²) = 5 N." ,
            "Langkah pentingnya bukan sekadar menghafal 3-4-5, tetapi memahami bahwa Rx dan Ry adalah komponen tegak lurus dari resultan."
          ]
        }
      ]
    },
    { heading: "⚠️ Miskonsepsi", blocks: [
        { 
          type: "paragraph", 
          text: "Jangan menjumlahkan besar semua vektor lalu berharap hasilnya menjadi resultan jika arah berbeda." 
        }
      ]
    },
    { heading: "✨ Inti Materi", blocks: [
        { 
          type: "paragraph", 
          text: "Untuk vektor dua dimensi: uraikan → jumlahkan komponen → cari besar resultan." 
        }
      ]
    },
    { 
      blocks: [
        { 
          type: "paragraph", 
          text: "Resultan belum lengkap. Kita juga harus tahu ke mana arahnya." 
        }
      ]
    }
  ]
};

export default resultanVektorDuaDimensi;
