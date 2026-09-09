import img1 from "/src/assets/Materi/GerakSatuDimensi/pembuka-chapter-gerak-satu-dimensi1.png"

const pembukaChapterGerakSatuDimensi = {
  title: "Pembuka Chapter: Gerak Satu Dimensi",
  slug: "pembuka-chapter-gerak-satu-dimensi",
  description: "Memulai perjalanan memahami bagaimana fisika membaca, mengukur, dan menganalisis gerak pada satu dimensi.",
  chapter: "↔️↕️ Kinematika: Gerak Satu Dimensi",

  content: [
    {
      blocks: [
        {
          type: "image",
          src: img1
        },
        {
          type: "paragraph", 
          text: [
            "Sekarang kamu mungkin sedang duduk diam di depan layar. Nah, coba pikirkan lebih jauh. Ketika duduk di kursi, kamu tidak bergerak. Tetapi, Sebenarnya kamu bersama Bumi sedang bergerak mengelilingi Matahari.",
            "Jadi, pertanyaan sederhana seperti 'Apakah benda ini bergerak?' ternyata tidak sesederhana kelihatannya."
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
                text: "Bagaimana fisika mendeskripsikan sesuatu yang bergerak?"
              },
              {
                text: "Bagaimana kita mengetahui posisi benda? Seberapa jauh benda berpindah? Seberapa cepat geraknya? Dan, apakah geraknya berubah?"
              }
            ]
          }
        }
      ]
    },
    {
      heading: "🧭 Peta Perjalanan Chapter",
      blocks: [
        {
          type: "paragraph",
          text: "Inilah, perjalanan yang akan dilalui pada chapter ini"
        },
        {
          type: "list", 
          list: {
            type: "unordered", 
            items: 
            [
              {
                text: "Menentukan titik acuan dan posisi."
              },
              {
                text: "Membedakan jarak dan perpindahan."
              },
              {
                text: "Menghubungkan perubahan posisi dengan waktu."
              },
              {
                text: "Memahami kelajuan dan kecepatan."
              },
              {
                text: "Menganalisis perubahan kecepatan melalui percepatan."
              },
              {
                text: "Mengenali pola GLB dan GLBB."
              },
              {
                text: "Membaca cerita gerak melalui grafik."
              },
              {
                text: "Menerapkan konsep pada gerak vertikal dan fenomena nyata."
              }
            ]
          }
        }
      ]
    },
    {
      heading: "🌌 Benang Merah",
      blocks: [
        {
          type: "paragraph", 
          text: [
            "Gerak bukan sekadar benda yang berpindah tempat. Gerak adalah perubahan posisi yang dapat kita ukur, visualisasikan, dan analisis.",
            "Mulai sekarang, dunia di sekitar kita akan terasa seperti laboratorium gerak yang sangat besar."
          ]
        }
      ]
    },
    {
      blocks: [
        {
          type: "paragraph", 
          text: "Langkah pertama kita adalah memahami pertanyaan paling mendasar, kapan sebuah benda dikatakan bergerak?"
        }
      ]
    }
  ]
};

export default pembukaChapterGerakSatuDimensi;
