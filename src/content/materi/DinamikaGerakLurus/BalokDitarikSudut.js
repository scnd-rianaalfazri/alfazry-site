const balokDitarikSudut = {
  title: "Balok Ditarik dengan Sudut Tertentu",
  slug: "balok-ditarik-dengan-sudut",
  description:
    "Menganalisis pengaruh gaya tarik yang membentuk sudut terhadap bidang datar menggunakan Hukum Newton II dan konsep komponen gaya.",

  chapter: "🚀 Dinamika Gerak Lurus",

  content: [
    {
      heading: "🧳 Mengapa Menarik Koper Lebih Mudah?",
      blocks: [
        {
          type: "heading",
          text: "🧳 Mengapa Menarik Koper Lebih Mudah?"
        },
        {
          type: "paragraph",
          text: "Saat bepergian, kebanyakan orang tidak mendorong koper dari belakang, tetapi menariknya menggunakan pegangan yang membentuk sudut terhadap lantai."
        },
        {
          type: "paragraph",
          text: "Mengapa cara ini terasa lebih ringan?"
        },
        {
          type: "paragraph",
          text: "Apakah arah gaya yang diberikan memengaruhi besar gaya gesek dan percepatan benda?"
        }
      ]
    },

    {
      heading: "❓ Pertanyaan Besar",
      blocks: [
        {
          type: "heading",
          text: "❓ Pertanyaan Besar"
        },
        {
          type: "paragraph",
          text: "Bagaimana jika gaya tidak bekerja sejajar permukaan?"
        },
        {
          type: "paragraph",
          text: "Mengapa gaya yang miring perlu diuraikan menjadi beberapa komponen?"
        }
      ]
    },

    {
      heading: "🧭 Identifikasi Gaya",
      blocks: [
        {
          type: "heading",
          text: "🧭 Identifikasi Gaya"
        },
        {
          type: "paragraph",
          text: "Pada balok bekerja empat gaya utama:"
        },
        {
          type: "paragraph",
          text: "⬇ Gaya Berat (W)"
        },
        {
          type: "paragraph",
          text: "⬆ Gaya Normal (N)"
        },
        {
          type: "paragraph",
          text: "⬅ Gaya Gesek (f)"
        },
        {
          type: "paragraph",
          text: "↗ Gaya Tarik (F) yang membentuk sudut θ terhadap bidang datar."
        }
      ]
    },

    {
      heading: "💡 Mengapa Gaya Harus Diuraikan?",
      blocks: [
        {
          type: "heading",
          text: "💡 Mengapa Gaya Harus Diuraikan?"
        },
        {
          type: "paragraph",
          text: "Karena gaya tarik tidak sejajar dengan bidang, pengaruhnya tidak hanya ke arah horizontal."
        },
        {
          type: "paragraph",
          text: "Sebagian gaya menarik balok ke depan, sedangkan sebagian lainnya mengurangi tekanan balok pada lantai."
        },
        {
          type: "paragraph",
          text: "Oleh karena itu, gaya perlu diuraikan menjadi dua komponen."
        }
      ]
    },

    {
      heading: "📐 Komponen Gaya",
      blocks: [
        {
          type: "heading",
          text: "📐 Komponen Gaya"
        },
        {
          type: "paragraph",
          text: "Komponen horizontal bertugas menggerakkan balok."
        },
        {
          type: "equation",
          latex: "F_x = F\\cos\\theta"
        },
        {
          type: "paragraph",
          text: "Komponen vertikal mengurangi gaya normal."
        },
        {
          type: "equation",
          latex: "F_y = F\\sin\\theta"
        }
      ]
    },

    {
      heading: "⚖️ Analisis Gaya",
      blocks: [
        {
          type: "heading",
          text: "⚖️ Analisis Gaya"
        },
        {
          type: "paragraph",
          text: "Pada arah vertikal:"
        },
        {
          type: "equation",
          latex: "N + F_y = W"
        },
        {
          type: "paragraph",
          text: "Karena sebagian gaya menarik balok ke atas, gaya normal menjadi lebih kecil."
        },
        {
          type: "paragraph",
          text: "Akibatnya, gaya gesek juga ikut berkurang."
        }
      ]
    },

    {
      heading: "➡️ Analisis Gerak Horizontal",
      blocks: [
        {
          type: "heading",
          text: "➡️ Analisis Gerak Horizontal"
        },
        {
          type: "paragraph",
          text: "Resultan gaya horizontal diperoleh dari selisih antara komponen horizontal gaya tarik dan gaya gesek."
        },
        {
          type: "equation",
          latex: "\\Sigma F = F\\cos\\theta - f"
        },
        {
          type: "paragraph",
          text: "Kemudian Hukum Newton II digunakan untuk menentukan percepatan benda."
        },
        {
          type: "equation",
          latex: "F\\cos\\theta-f=ma"
        }
      ]
    },

    {
      heading: "🧪 Contoh Analisis",
      blocks: [
        {
          type: "heading",
          text: "🧪 Contoh Analisis"
        },
        {
          type: "paragraph",
          text: "Sebuah balok ditarik dengan gaya 100 N membentuk sudut 37° terhadap lantai."
        },
        {
          type: "paragraph",
          text: "Komponen horizontal gaya tarik adalah sekitar 80 N, sedangkan komponen vertikalnya sekitar 60 N."
        },
        {
          type: "paragraph",
          text: "Komponen vertikal mengurangi gaya normal, sehingga gaya gesek menjadi lebih kecil dibanding jika balok didorong secara mendatar."
        }
      ]
    },

    {
      heading: "🌍 Contoh dalam Kehidupan",
      blocks: [
        {
          type: "heading",
          text: "🌍 Contoh dalam Kehidupan"
        },
        {
          type: "paragraph",
          text: "🧳 Menarik koper."
        },
        {
          type: "paragraph",
          text: "🛷 Menarik kereta luncur menggunakan tali."
        },
        {
          type: "paragraph",
          text: "🚜 Traktor menarik gerobak."
        },
        {
          type: "paragraph",
          text: "🐎 Kuda menarik delman."
        }
      ]
    },

    {
      heading: "⚠️ Miskonsepsi",
      blocks: [
        {
          type: "heading",
          text: "⚠️ Miskonsepsi"
        },
        {
          type: "paragraph",
          text: "❌ Seluruh gaya tarik digunakan untuk menggerakkan benda."
        },
        {
          type: "paragraph",
          text: "✅ Faktanya, hanya komponen horizontal yang menyebabkan percepatan pada arah gerak."
        },
        {
          type: "paragraph",
          text: "❌ Menarik dan mendorong benda dengan gaya yang sama selalu menghasilkan percepatan yang sama."
        },
        {
          type: "paragraph",
          text: "✅ Faktanya, gaya tarik yang memiliki komponen ke atas dapat mengurangi gaya normal sehingga gaya gesek menjadi lebih kecil."
        }
      ]
    },

    {
      heading: "🌟 Fun Fact",
      blocks: [
        {
          type: "heading",
          text: "🌟 Fun Fact"
        },
        {
          type: "paragraph",
          text: "Pegangan koper modern dirancang miring agar saat ditarik muncul komponen gaya ke atas yang mengurangi tekanan roda pada permukaan. Akibatnya, koper terasa lebih ringan dan lebih mudah digerakkan."
        }
      ]
    },

    {
      heading: "🧠 Inti Materi",
      blocks: [
        {
          type: "heading",
          text: "🧠 Inti Materi"
        },
        {
          type: "paragraph",
          text: "Jika gaya bekerja membentuk sudut terhadap bidang, gaya tersebut harus diuraikan menjadi komponen horizontal dan vertikal. Komponen horizontal menyebabkan percepatan, sedangkan komponen vertikal memengaruhi gaya normal dan besar gaya gesek."
        }
      ]
    },

    {
      heading: "🚀 Next Mission",
      blocks: [
        {
          type: "heading",
          text: "🚀 Next Mission"
        },
        {
          type: "paragraph",
          text: "Pada materi ini, bidang tempat balok bergerak masih datar."
        },
        {
          type: "paragraph",
          text: "Lalu bagaimana jika justru bidangnya yang miring? Mengapa benda dapat meluncur tanpa didorong? Untuk menjawabnya, kita akan mempelajari dinamika pada bidang miring."
        }
      ]
    }
  ]
};

export default balokDitarikSudut;