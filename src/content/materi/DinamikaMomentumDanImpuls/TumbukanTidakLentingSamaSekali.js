const tumbukanTidakLentingSamaSekali = {
  title: "Tumbukan Tidak Lenting Sama Sekali",
  slug: "tumbukan-tidak-lenting-sama-sekali",
  description: "Memahami tumbukan ketika dua benda menyatu setelah tumbukan dan bergerak dengan kecepatan akhir yang sama.",
  chapter: "💥 Dinamika: Momentum dan Impuls",

  content: [
    {
      blocks: [
        { 
          type: "paragraph", 
          text: [
            "Bayangkan dua benda bertumbukan lalu menempel dan bergerak bersama.",
            "Interaksi seperti ini disebut tumbukan tidak lenting sama sekali."
          ] 
        }
      ]
    },
    {
      heading: "❓ Pertanyaan Besar",
      blocks: [
        { 
          type: "paragraph", 
          text: "Jika kedua benda akhirnya bergerak bersama, bagaimana menentukan kecepatan akhirnya?" 
        },
      ]
    },
    {
      heading: "🧭 Identifikasi Sistem",
      blocks: [
        { 
          type: "paragraph", 
          text: "Tentukan kedua benda sebagai satu sistem. Karena keduanya menyatu setelah tumbukan, keduanya memiliki satu kecepatan akhir yang sama." 
        },
      ]
    },
    {
      heading: "📐 Kekekalan Momentum",
      blocks: [
        { 
          type: "equation", 
          equation: "m_1v_1 + m_2v_2 = (m_1 + m_2)v'",
        },
        { 
          type: "paragraph", 
          text: "Persamaan ini berasal dari kekekalan momentum pada sistem yang sesuai." 
        }
      ]
    },
    {
      heading: "📉 Energi Kinetik",
      blocks: [
        { 
          type: "paragraph", 
          text: "Energi kinetik translasi tidak kekal. Sebagian energi berubah menjadi deformasi, panas, bunyi, dan bentuk energi lainnya." 
        }
      ]
    },
    {
      heading: "🧪 Contoh Analisis",
      blocks: [
        { 
          type: "paragraph", 
          text: "Dua benda bermassa berbeda bergerak saling mendekat lalu menyatu. Tentukan arah positif terlebih dahulu, masukkan kecepatan dengan tanda yang sesuai, lalu gunakan kekekalan momentum untuk mencari kecepatan bersama." 
        }
      ]
    },
    {
      heading: "🌍 Contoh dalam Kehidupan",
      blocks: [
        { 
          type: "paragraph", 
          text: "Dua benda plastisin yang saling menempel merupakan contoh sederhana. Pada kecelakaan tertentu, kendaraan juga dapat mengalami tumbukan yang mendekati model ini." 
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
                  "Jika benda menyatu, momentum tidak kekal. ❌",
                  "Gak, gitu!",
                  "Momentum total tetap jika sistem memenuhi syarat kekekalan momentum. ✔️"
                ]
              },
              {
                text: "Miskonsepsi 2",
                description: [
                  "Semua energi kinetik hilang. ❌",
                  "Gak, gitu",
                  "Energi kinetik berubah ke bentuk energi lain; energi total tetap. ✔️"
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
          text: "Tumbukan tidak lenting sama sekali merupakan model dengan kehilangan energi kinetik translasi terbesar di antara tumbukan yang dibahas dalam konteks koefisien restitusi, dengan e = 0." 
        }
      ]
    },
    {
      heading: "🌟 *Fun Fact*",
      blocks: [
        { 
          type: "paragraph", 
          text: "Pada tumbukan tidak lenting sama sekali, benda menyatu setelah tumbukan dan memiliki kecepatan akhir yang sama, sementara momentum total sistem tetap dalam kondisi yang sesuai."
        }
      ]
    },
    {
      blocks: [
        { 
          type: "paragraph", 
          text: "Kita sudah membedakan tiga karakter tumbukan. Tetapi bagaimana cara mengukur tingkat kelentingannya secara kuantitatif?" 
        }
      ]
    }
  ]
};

export default tumbukanTidakLentingSamaSekali;
