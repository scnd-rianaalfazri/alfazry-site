const hukumKekekalanMomentum = {
  title: "Hukum Kekekalan Momentum",
  slug: "hukum-kekekalan-momentum",
  description: "Memahami mengapa momentum total sistem tetap ketika resultan gaya luar pada sistem nol.",
  chapter: "💥 Dinamika: Momentum dan Impuls",

  content: [
    {
      blocks: [
        { 
          type: "paragraph", 
          text: "Ketika dua benda bertumbukan, kecepatan keduanya dapat berubah. Namun perubahan itu terjadi melalui interaksi di dalam sistem." 
        },
      ]
    },
    {
      heading: "❓ Pertanyaan Besar",
      blocks: [
        { 
          type: "paragraph", 
          text: "Jika momentum masing-masing benda berubah, apakah momentum total sistem ikut berubah?" 
        },
      ]
    },
    {
      heading: "📦 Menentukan Sistem",
      blocks: [
        { 
          type: "paragraph", 
          text: [
            "Langkah pertama adalah menentukan sistem. Misalnya sistem terdiri dari dua benda yang saling bertumbukan." ,
            "Momentum total sistem adalah jumlah momentum semua benda di dalam sistem."
          ]
        }
      ]
    },
    {
      heading: "🔗 Dari Impuls Menuju Kekekalan Momentum",
      blocks: [
        { 
          type: "paragraph", 
          text: "Gaya interaksi antar benda adalah gaya internal sistem. Berdasarkan Hukum III Newton, gaya-gaya internal tersebut berpasangan sehingga perubahan momentum total akibat interaksi internal saling meniadakan." 
        },
      ]
    },
    {
      heading: "📐 Persamaan Kekekalan Momentum",
      blocks: [
        { 
          type: "equation", 
          equation: [
            "P_{Sebelum} = P_{Sesudah}",
            "m_1 \\dot v_1 + m_2 + v_2 = m_1 \\dot v'_1 \\dot + m_2 \\dot v'_2" 
          ]
        },
        { 
          type: "paragraph", 
          text: "Hubungan ini berlaku ketika resultan gaya luar pada sistem dapat diabaikan." 
        },
      ]
    },
    {
      heading: "🧪 Contoh Analisis",
      blocks: [
        { 
          type: "paragraph", 
          text: "Dua benda bertumbukan. Jangan langsung mencari kecepatan akhir. Tentukan terlebih dahulu sistem, tulis momentum total sebelum tumbukan, tulis momentum total sesudah tumbukan, lalu gunakan persamaan kekekalan momentum." 
        },
      ]
    },
    {
      heading: "🌍 Contoh dalam Kehidupan",
      blocks: [
        { 
          type: "paragraph", 
          text: "Tumbukan kendaraan, dua benda yang saling mendorong, recoil, dan peluncuran roket dapat dianalisis menggunakan prinsip momentum." 
        },
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
                  "Momentum setiap benda selalu tetap. ❌",
                  "Ga, gitu!",
                  "Yang dapat tetap adalah momentum total sistem ketika resultan gaya luar pada sistem nol. ✔️" 
                ]
              },
              {
                text: "Miskonsepsi 2",
                description: [
                  "Momentum dapat kekal tanpa menentukan sistem. ❌",
                  "Gak, gitu!",
                  "Batas sistem harus jelas agar kekekalan momentum dapat dianalisis dengan benar. ✔️"
                ]
              }
            ]
          }
        }
      ]
    },
    {
      heading: "🌟 Fun Fact",
      blocks: [
        { 
          type: "paragraph", 
          text: "Roket dapat memperoleh momentum ke depan karena gas buangan memperoleh momentum ke arah berlawanan. Interaksi internal dalam sistem roket dan gas membantu menjelaskan prinsip tersebut." 
        },
      ]
    },
    {
      heading: "✨ Inti Materi",
      blocks: [
        { 
          type: "paragraph", 
          text: "Momentum total suatu sistem tetap jika resultan gaya luar pada sistem nol atau dapat diabaikan." 
        },
      ]
    },
    {
      heading: "🚀 Next Mission",
      blocks: [
        { 
          type: "paragraph", 
          text: "Sekarang kita tahu bahwa momentum total dapat tetap saat benda saling berinteraksi. Bagaimana jika interaksi itu terjadi dalam waktu sangat singkat dan kedua benda bertumbukan?" 
        }
      ]
    }
  ]
};

export default hukumKekekalanMomentum;
