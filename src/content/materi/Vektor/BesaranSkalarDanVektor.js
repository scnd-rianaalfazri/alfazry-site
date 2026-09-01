const besaranSkalarDanVektor = {
  title: "Besaran Skalar dan Vektor",
  slug: "besaran-skalar-dan-vektor",
  description: "Membedakan besaran skalar dan vektor berdasarkan informasi yang diperlukan untuk mendeskripsikannya.",
  chapter: "➡️ Vektor",

  content: [
    { 
      blocks: [
        { 
          type: "paragraph", 
          text: [
            "Sebuah mobil melaju 60 km/jam. Apakah kamu sudah tahu arah geraknya?",
            "Angkanya memberi tahu seberapa cepat, tetapi belum memberi tahu ke mana." 
          ]
        }
      ]
    },
    { heading: "❓ Pertanyaan Besar", blocks: [
        { 
          type: "paragraph", 
          text: "Kapan sebuah besaran cukup dinyatakan dengan nilai, dan kapan arah menjadi bagian penting dari informasinya?" 
        }
      ]
    },
    { heading: "🔢 Skalar", blocks: [
        { 
          type: "paragraph", 
          text: [
            "Besaran skalar hanya membutuhkan nilai dan satuan.",
            "Contoh: massa 5 kg, waktu 20 s, suhu 30 °C, jarak 10 m, dan energi 500 J."
          ]
        }
      ]
    },
    { heading: "🧭 Vektor", blocks: [
        { 
          type: "paragraph", 
          text: [
            "Besaran vektor membutuhkan besar dan arah.",
            "Contoh: perpindahan 5 m ke timur, kecepatan 60 km/jam ke utara, gaya 20 N ke kanan."
          ] 
        }
      ]
    },
    { 
      heading: "🔍 Contoh Analisis", 
      blocks: [
        { 
          type: "paragraph", 
          text: [
            "Seseorang berjalan 5 m ke timur. Jaraknya 5 m, sedangkan perpindahannya 5 m ke timur.",
            "Jarak tidak membutuhkan arah; perpindahan membutuhkan arah."
          ]
        }
      ]
    },
    { heading: "⚠️ Miskonsepsi", blocks: [
        { 
          type: "paragraph", 
          text: [
            "Vektor bukan berarti 'semua besaran yang digambar dengan panah'. Panah adalah salah satu cara merepresentasikan vektor. ❌",
            "Gak, gitu!",
            "Kelajuan dan kecepatan juga bukan hal yang sama: kelajuan skalar, sedangkan kecepatan vektor. ✔️"
          ]
        }
      ]
    },
    { heading: "🌟 *Fun Fact*", 
      blocks: [
        { type: "paragraph", 
          text: "Sistem navigasi modern harus memperhitungkan arah, bukan hanya jarak. Karena itu konsep vektor sangat dekat dengan GPS, drone, pesawat, dan robot." 
        }
      ]
    },
    { 
      heading: "✨ Inti Materi", 
      blocks: [
        { 
          type: "paragraph", 
          text: "Skalar = besar/nilai. Vektor = besar/nilai + arah." 
        }
      ]
    },
    { 
      blocks: [
        { 
          type: "paragraph", 
          text: "Sekarang cari tahu: di mana saja vektor sebenarnya bekerja di dunia nyata?" 
        }
      ]
    }
  ]
};

export default besaranSkalarDanVektor;
