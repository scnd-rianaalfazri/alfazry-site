import img1 from "/src/assets/Materi/Vektor/vektor-satuan-dan-notasi-komponen1.png"

const vektorSatuanDanNotasiKomponen = {
  title: "Vektor Satuan dan Notasi Komponen",
  slug: "vektor-satuan-dan-notasi-komponen",
  description: "Mengenal notasi komponen dan vektor satuan sebagai bahasa ringkas untuk menyatakan vektor.",

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
          text: "Gambar panah bagus untuk melihat vektor. Tapi bagaimana jika kita ingin menuliskannya dengan ringkas?" 
        }
      ]
    },
    { 
      heading: "❓ Pertanyaan Besar", 
      blocks: [
        { 
          type: "paragraph", 
          text: "Bagaimana komponen vektor dapat ditulis dalam bentuk matematis yang efisien?" 
        }
      ]
    },
    { 
      heading: "🧭 Vektor Satuan", 
      blocks: [
        { type: "paragraph", 
          text: [
            "Vektor satuan memiliki besar 1 dan digunakan untuk menunjukkan arah sumbu.",
            "Dalam bidang dua dimensi, î menyatakan arah x dan ĵ menyatakan arah y."
          ]
        }
      ]
    },
    { heading: "✍️ Notasi Komponen", 
      blocks: [
        { 
          type: "paragraph", 
          text: [
            "Sebuah vektor dapat ditulis sebagai A = Ax î + Ay ĵ.",
            "Contoh: A = 3 î + 4 ĵ menunjukkan komponen 3 pada x dan 4 pada y."
          ] 
        }
      ]
    },
    { 
      heading: "🔍 Contoh Analisis", 
      blocks: [
        { type: "paragraph", 
          text: "Untuk A = 3 î + 4 ĵ, besar A = √(3² + 4²) = 5. Arah ditentukan dari perbandingan komponen." 
        }
      ]
    },
    { 
      heading: "⚠️ Miskonsepsi", 
      blocks: [
        { 
          type: "paragraph", 
          text: "î dan ĵ bukan angka biasa yang mengubah satuan. Keduanya adalah penanda arah sumbu dengan besar satu." 
        }
      ]
    },
    { 
      heading: "✨ Inti Materi", 
      blocks: [
        { 
          type: "paragraph", 
          text: "Notasi komponen membuat hubungan antara vektor, arah sumbu, dan perhitungan menjadi lebih ringkas." 
        }
      ]
    },
    { 
      blocks: [
        { 
          type: "paragraph", 
          text: "Vektor bukan hanya bisa dijumlahkan. Ada beberapa jenis perkalian dengan makna fisika yang berbeda." 
        }
      ]
    }
  ]
};

export default vektorSatuanDanNotasiKomponen;
