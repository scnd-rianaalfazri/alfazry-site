import img1 from "/src/assets/Materi/GerakSatuDimensi/pengertian-gerak1.png"

const pengertianGerak = {
  title: "Pengertian Gerak",
  slug: "pengertian-gerak",
  description: "Memahami konsep dasar gerak melalui posisi, titik acuan, dan perubahan posisi.",
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
            "Bayangkan, kamu duduk di dalam kereta yang sedang melaju. Bagi teman di sebelahmu, kamu **DIAM**.",
            "Tetapi, bagi seseorang di peron (tempat pemberhentian transportasi umum yang berfungsi sebagai tempat naik dan turun penumpang), kamu sedang **BERGERAK**",
            "Jadi, mana yang benar?",
            "Fisika menjawab: keduanya bisa benar, tergantung titik acuannya."
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
                text: "Apakah sebuah benda dapat dianggap diam dan bergerak pada saat yang sama?"
              },
              {
                text: "Apa yang harus kita tentukan sebelum menyimpulkan bahwa sebuah benda bergerak?"
              }
            ]
          }
        }
      ]
    },
    {
      heading: "📍 Konsep Inti antara Posisi dan Gerak",
      blocks: [
        {
          type: "paragraph", 
          text: [
            "Gerak adalah perubahan posisi suatu benda terhadap titik acuan dalam selang waktu tertentu. Oleh karena itu, sebelum membahas gerak kita harus mengetahui tiga hal:"
          ]
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "Benda yang diamati,"
              },
              {
                text: "titik acuan,"
              },
              {
                text: "dan perubahan posisinya."
              }
            ]
          }
        }
      ]
    },
    {
      heading: "🧭 Titik Acuan",
      blocks: [
        {
          type: "paragraph", 
          text: "Titik acuan adalah posisi atau benda yang digunakan sebagai pembanding. Tanpa titik acuan, pernyataan 'benda ini bergerak' belum lengkap secara fisika."
        }
      ]
    },
    {
      heading: "👀 Visualisasi Konsep",
      blocks: [
        {
          type: "list", 
          list: {
            type: "ordered",
            items: [
              {
                text: "Penumpang terhadap kursi kereta: posisinya tetap, sehingga dianggap diam."
              },
              {
                text: "Penumpang terhadap stasiun: posisinya berubah, sehingga dianggap bergerak."
              }
            ]
          }
        }
      ]
    },
    {
      heading: "🧠 Analisis Konsep",
      blocks: [
        {
          type: "paragraph", 
          text: [
            "Gunakan pola sederhana: Amati benda → Tentukan acuan → Bandingkan posisi pada waktu berbeda → Simpulkan.",
            "Pola ini akan terus digunakan pada beberapa page materi berikutnya."
          ]
        }
      ]
    },
    {
      heading: "⚠️ Miskonsepsi",
      blocks: [
        {
          type: "paragraph", 
          text: [
            "Jika sebuah benda terlihat diam, berarti benda tersebut benar-benar diam. ❌",
            "Gak, selalu",
            "Diam dan bergerak selalu bergantung pada acuan yang digunakan. ✔"
          ]
        }
      ]
    },
    {
      heading: "✨ *Fun Fact*",
      blocks: [
        {
          type: "paragraph", 
          text: [
            "Meskipun kamu lagi rebahan santai di kasur dan ngerasa 'diam'. Secara kosmis, kamu sebenarnya lagi ikutan ngebut bersama Bumi berotasi dan berevolusi mengelilingi Matahari dengan kecepatan fantastis yaitu sekitar 107.000 km/jam!",
            "Kebayang nggak tuh?"
          ]
        }
      ]
    },
    {
      heading: "✨ Inti Materi",
      blocks: [
        {
          type: "paragraph",
          text: "Gerak adalah perubahan posisi terhadap titik acuan. Karena itu, konsep posisi dan acuan menjadi fondasi seluruh kinematika."
        },
      ]
    },
    {
      blocks: [
        {
          type: "paragraph", 
          text: "Kita sudah tahu kapan benda dikatakan bergerak. Sekarang, bagaimana cara menggambarkan seberapa jauh benda melakukan perjalanan?"
        }
      ]
    }
  ]
};

export default pengertianGerak;
