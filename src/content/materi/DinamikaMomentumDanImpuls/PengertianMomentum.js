const pengertianMomentum = {
  title: "Pengertian Momentum",
  slug: "pengertian-momentum",
  description: "Memahami momentum sebagai ukuran gerak yang dipengaruhi massa dan kecepatan.",
  chapter: "💥 Dinamika: Momentum dan Impuls",

  content: [
    {
      blocks: [
        { 
          type: "paragraph", 
          text: [
            "Pernah kepikiran kenapa truk yang melaju terasa jauh lebih sulit dihentikan dibandingkan sepeda dengan kecepatan yang sama?",
            "Perbedaannya bukan hanya pada kecepatan. Massa benda juga ikut menentukan."
          ]
        }
      ]
    },
    {
      heading: "❓ Pertanyaan Besar",
      blocks: [
        { 
          type: "paragraph", 
          text: "Bagaimana massa dan kecepatan bersama-sama menggambarkan seberapa besar gerak suatu benda?" 
        },
      ]
    },
    {
      heading: "🎨 Visualisasi Konsep",
      blocks: [
        { 
          type: "paragraph", 
          text: "Bayangkan tiga benda: bola tenis, truk, dan kereta api. Jika semuanya bergerak, benda yang lebih besar massanya atau lebih tinggi kecepatannya dapat memiliki momentum lebih besar." 
        },
      ]
    },
    {
      heading: "⚖️ Faktor yang Memengaruhi Momentum",
      blocks: [
        { 
          type: "paragraph", 
          text: "Momentum dipengaruhi oleh massa dan kecepatan. Jika massa bertambah pada kecepatan yang sama, momentum bertambah. Jika kecepatan bertambah pada massa yang sama, momentum juga bertambah." 
        },
      ]
    },
    {
      heading: "📐 Rumus Momentum",
      blocks: [
        { 
          type: "equation", 
          equation: "p = mv" 
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "p = momentum",
              },
              {
                text: "m = massa"
              },
              {
                text: "v = kecepatan"
              }
            ]
          }
        },
        {
          type: "Karena kecepatan memiliki arah, momentum merupakan besaran vektor."
        }
      ]
    },
    {
      heading: "🧭 Arah Momentum",
      blocks: [
        { 
          type: "paragraph", 
          text: "Arah momentum selalu sama dengan arah kecepatan benda. Jika benda bergerak ke kanan, momentumnya ke kanan; jika bergerak ke kiri, momentumnya ke kiri." 
        },
      ]
    },
    {
      heading: "🧪 Contoh Analisis",
      blocks: [
        { 
          type: "paragraph", 
          text: "Sebuah benda bermassa 2 kg bergerak dengan kecepatan 5 m/s. Momentum benda adalah p = mv = 2 × 5 = 10 kg·m/s." 
        },
        { type: "paragraph", text: "Amati pola penyelesaiannya: identifikasi massa dan kecepatan → pilih persamaan → substitusi → simpulkan besar dan arah momentum." },
      ]
    },
    {
      heading: "🌍 Contoh dalam Kehidupan",
      blocks: [
        { 
          type: "paragraph", 
          text: "🚚 Truk, 🚆 kereta api, 🏀 bola olahraga, dan 🚗 kendaraan semuanya memiliki momentum ketika bergerak." 
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
                  "Benda yang lebih cepat selalu memiliki momentum lebih besar. ❌",
                  "Tidak selalu. Massa juga berpengaruh. ✔️"
                ]
              },
              {
                text: "Miskonsepsi 2",
                description: [
                  "Momentum adalah besaran skalar. ❌",
                  "Momentum adalah besaran vektor. ✔️"
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
          text: "Dua benda dapat memiliki momentum yang sama meskipun massa dan kecepatannya berbeda, selama hasil kali massa dan kecepatan serta arahnya sama." 
        },
      ]
    },
    {
      blocks: [
        { 
          type: "paragraph", 
          text: "Sekarang kita tahu bagaimana menggambarkan gerak sebuah benda. Tetapi apa yang terjadi ketika sebuah gaya bekerja padanya hanya dalam waktu yang sangat singkat?" 
        }
      ]
    }
  ]
};

export default pengertianMomentum;
