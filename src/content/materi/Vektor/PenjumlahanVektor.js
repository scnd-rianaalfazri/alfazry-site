import img1 from "/src/assets/Materi/Vektor/penjumlahan-vektor1.png"

const penjumlahanVektor = {
  title: "Penjumlahan Vektor",
  slug: "penjumlahan-vektor",
  description: "Memahami cara menggabungkan dua atau lebih vektor menggunakan pendekatan geometris dan komponen.",
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
          text: "Dua orang mendorong benda dari arah berbeda. Apakah hasilnya tinggal 10 + 20?" 
        }
      ]
    },
    { 
      heading: "❓ Pertanyaan Besar", 
      blocks: [
        { 
          type: "paragraph", 
          text: "Bagaimana arah memengaruhi hasil penjumlahan vektor?" 
        }
      ]
    },
    { 
      heading: "🏹 Metode Segitiga", 
      blocks: [
        { type: "paragraph", 
          text: "Letakkan pangkal vektor kedua pada ujung vektor pertama. Resultan ditarik dari pangkal vektor pertama menuju ujung vektor terakhir." 
        }
      ]
    },
    { 
      heading: "▱ Metode Jajargenjang", 
      blocks: [
        { 
          type: "paragraph", 
          text: "Letakkan dua vektor dari pangkal yang sama. Diagonal jajargenjang menunjukkan resultannya." 
        }
      ]
    },
    { 
      heading: "🧩 Metode Komponen", 
      blocks: [
        { type: "paragraph", 
          text: "Untuk persoalan dua dimensi yang lebih kompleks, uraikan setiap vektor menjadi komponen x dan y, lalu jumlahkan komponen searah." 
        }
      ]
    },
    { 
      heading: "🔍 Contoh Analisis", 
      blocks: [
        { type: "paragraph", 
          text: "Jika A = 3 N ke kanan dan B = 4 N ke atas, maka Rx = 3 N dan Ry = 4 N. Resultannya kemudian dicari dari kedua komponen tersebut." 
        }
      ]
    },
    { 
      heading: "⚠️ Miskonsepsi", blocks: [
        { type: "paragraph", 
          text: "Penjumlahan vektor tidak selalu berarti menjumlahkan besar angkanya secara langsung. Arah harus ikut dianalisis." 
        }
      ]
    },
    { 
      heading: "✨ Inti Materi", blocks: [
        { type: "paragraph", 
          text: "Vektor dapat dijumlahkan secara geometris atau melalui komponen. Metode dipilih sesuai bentuk masalah." 
        }
      ]
    },
    { 
      blocks: [
        { 
          type: "paragraph", 
          text: "Kita mulai dari kasus paling sederhana: semua vektor berada pada satu garis." 
        }
      ]
    }
  ]
};
export default penjumlahanVektor;
