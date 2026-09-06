import img1 from "/src/assets/Materi/Vektor/penutup-chapter-vektor1.png"

const penutupChapterVektor = {
  title: "Penutup Chapter: Vektor",
  slug: "penutup-chapter-vektor",
  description: "Menutup perjalanan Vektor dengan refleksi konsep dan jembatan menuju Kinematika.",
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
          text: "Kamu baru saja menyelesaikan perjalanan dari pertanyaan sederhana tentang arah hingga analisis vektor dua dimensi." 
        }
      ]
    },
    { 
      blocks: [
        { 
          type: "paragraph", 
          text: "Skalar dan vektor → representasi → besar dan arah → koordinat → komponen → penjumlahan → resultan 1D dan 2D → arah resultan → notasi komponen → perkalian vektor → aplikasi." 
        }
      ]
    },
    { heading: "🧩 Pola Berpikir yang Dikuasai", 
      blocks: [
        { 
          type: "paragraph", 
          text: [
            "Amati → Identifikasi → Visualisasi → Analisis → Rumus → Kesimpulan." ,
            "Kamu tidak hanya belajar rumus. Kamu belajar mengubah arah dan besar menjadi model fisika."
          ]
        }
      ]
    },
    { 
      heading: "🌍 Melihat Dunia dengan Cara Baru", 
      blocks: [
        { 
          type: "paragraph", 
          text: "Sekarang ketika melihat kendaraan bergerak, angin bertiup, bola melaju, atau drone bernavigasi, kamu bisa mulai bertanya: seberapa besar? ke mana? dan apa resultannya?" 
        }
      ]
    },
    { heading: "🪞 Refleksi", 
      blocks: [
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "Konsep vektor mana yang paling mengubah cara kamu melihat fenomena fisika?" 
              },
              {
                text: "Bagian mana yang masih ingin kamu eksplorasi lagi?"
              }
            ]
          }
        }
      ]
    },
    { 
      heading: "👀 Sekilas Chapter Berikutnya", 
      blocks: [
        { 
          type: "paragraph", 
          text: "Kita sudah memiliki bahasa untuk menyatakan arah. Sekarang gunakan bahasa itu untuk menjawab pertanyaan yang lebih besar: bagaimana posisi suatu benda berubah terhadap waktu?" 
        }
      ]
    }
  ]
};
export default penutupChapterVektor;
