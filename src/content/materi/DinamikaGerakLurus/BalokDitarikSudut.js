const balokDitarikSudut = {
  title: "Balok Ditarik dengan Sudut Tertentu",
  slug: "balok-ditarik-dengan-sudut",
  description: "Menganalisis pengaruh gaya tarik yang membentuk sudut terhadap bidang datar menggunakan Hukum Newton II dan konsep komponen gaya.",
  chapter: "🚀 Dinamika Gerak Lurus",

  content: [
    {
      blocks: [
        {
          type: "paragraph",
          text: [
            "Saat bepergian, kebanyakan orang tidak mendorong koper dari belakang, tetapi menariknya menggunakan pegangan yang membentuk sudut terhadap lantai.",
            "Mengapa cara ini terasa lebih ringan?",
            "Apakah arah gaya yang diberikan memengaruhi besar gaya gesek dan percepatan benda?"
          ]
        }
      ]
    },
    {
      heading: "❓ Pertanyaan Besar",
      blocks: [
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "Bagaimana jika gaya tidak bekerja sejajar permukaan?"
              },
              {
                text: "Mengapa gaya yang miring perlu diuraikan menjadi beberapa komponen?"
              }
            ]
          }
        }
      ]
    },
    {
      heading: "🧭 Identifikasi Gaya",
      blocks: [
        {
          type: "paragraph",
          text: "Pada balok bekerja empat gaya utama:"
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "⬇ Gaya Berat (W)"
              },
              {
                text: "⬆ Gaya Normal (N)"
              },
              {
                text: "⬅ Gaya Gesek (f)"
              },
              {
                text: "↗ Gaya Tarik (F) yang membentuk sudut θ terhadap bidang datar."
              }
            ]
          }
        }
      ]
    },
    {
      heading: "💡 Mengapa Gaya Harus Diuraikan?",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Karena gaya tarik tidak sejajar dengan bidang, pengaruhnya tidak hanya ke arah horizontal. Sebagian gaya menarik balok ke depan, sedangkan sebagian lainnya mengurangi tekanan balok pada lantai.",
            "Oleh karena itu, gaya perlu diuraikan menjadi dua komponen."
          ]
        }
      ]
    },
    {
      heading: "📐 Komponen Gaya",
      blocks: [
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "Komponen horizontal bertugas menggerakkan balok.",
                equation: "F_x = F\\cos\\theta"
              },
              {
                text: "Komponen vertikal mengurangi gaya normal.",
                equation: "F_y = F\\sin\\theta"
              }
            ]
          }
        }
      ]
    },
    {
      heading: "⚖️ Analisis Gaya",
      blocks: [
        {
          type: "paragraph",
          text: "Pada arah vertikal:"
        },
        {
          type: "equation",
          equation: "N + F_y = W"
        },
        {
          type: "paragraph",
          text: [
            "Karena sebagian gaya menarik balok ke atas, gaya normal menjadi lebih kecil.",
            "Akibatnya, gaya gesek juga ikut berkurang."
          ]
        }
      ]
    },
    {
      heading: "➡️ Analisis Gerak Horizontal",
      blocks: [
        {
          type: "paragraph",
          text: "Resultan gaya horizontal diperoleh dari selisih antara komponen horizontal gaya tarik dan gaya gesek."
        },
        {
          type: "equation",
          equation: "\\Sigma F = F\\cos\\theta - f"
        },
        {
          type: "paragraph",
          text: "Kemudian Hukum Newton II digunakan untuk menentukan percepatan benda."
        },
        {
          type: "equation",
          equation: "F\\cos\\theta-f=ma"
        }
      ]
    },
    {
      heading: "🧪 Contoh Analisis",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Sebuah balok ditarik dengan gaya 100 N membentuk sudut 37° terhadap lantai.",
            "Komponen horizontal gaya tarik adalah sekitar 80 N, sedangkan komponen vertikalnya sekitar 60 N.",
            "Komponen vertikal mengurangi gaya normal, sehingga gaya gesek menjadi lebih kecil dibanding jika balok didorong secara mendatar."
          ]
        }
      ]
    },
    {
      heading: "🌍 Contoh dalam Kehidupan",
      blocks: [
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "🧳 Menarik koper."
              },
              {
                text: "🛷 Menarik kereta luncur menggunakan tali."
              },
              {
                text: "🚜 Traktor menarik gerobak."
              },
              {
                text: "🐎 Kuda menarik delman."
              }
            ]
          }
        }
      ]
    },
    {
      heading: "⚠️ Miskonsepsi",
      blocks: [
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "Miskonsepsi 1",
                description: [
                  "Seluruh gaya tarik digunakan untuk menggerakkan benda. ❌",
                  "Gak, gitu!",
                  "Faktanya, hanya komponen horizontal yang menyebabkan percepatan pada arah gerak. ✔️"
                ]
              },
              {
                text: "Miskonsepsi 2",
                description: [
                  "Menarik dan mendorong benda dengan gaya yang sama selalu menghasilkan percepatan yang sama. ❌",
                  "Gak, gitu!",
                  "Faktanya, gaya tarik yang memiliki komponen ke atas dapat mengurangi gaya normal sehingga gaya gesek menjadi lebih kecil. ✔️"
                ]
              }
            ]
          }
        }
      ]
    },
    {
      heading: "🌟 *Fun Fact*",
      blocks: [
        {
          type: "paragraph",
          text: "Pegangan koper modern dirancang miring agar saat ditarik muncul komponen gaya ke atas yang mengurangi tekanan roda pada permukaan. Akibatnya, koper terasa lebih ringan dan lebih mudah digerakkan."
        }
      ]
    },
    {
      heading: "✨ Inti Materi",
      blocks: [
        {
          type: "paragraph",
          text: "Jika gaya bekerja membentuk sudut terhadap bidang, gaya tersebut harus diuraikan menjadi komponen horizontal dan vertikal. Komponen horizontal menyebabkan percepatan, sedangkan komponen vertikal memengaruhi gaya normal dan besar gaya gesek."
        }
      ]
    },
    {
      blocks: [
        {
          type: "paragraph",
          text: [
            "Pada page ini, bidang tempat balok bergerak masih datar. Lalu bagaimana jika justru bidangnya yang miring? Mengapa benda dapat meluncur tanpa didorong?",
            "Untuk menjawabnya, kita akan mempelajari dinamika pada bidang miring."
          ]
        }
      ]
    }
  ]
};

export default balokDitarikSudut;