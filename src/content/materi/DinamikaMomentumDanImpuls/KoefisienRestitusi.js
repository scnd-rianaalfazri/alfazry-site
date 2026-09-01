const koefisienRestitusi = {
  title: "Koefisien Restitusi",
  slug: "koefisien-restitusi",
  description: "Memahami koefisien restitusi sebagai ukuran tingkat kelentingan suatu tumbukan.",
  chapter: "💥 Dinamika: Momentum dan Impuls",

  content: [
    {
      heading: "🎯 Mengapa Bola Memantul dengan Tinggi Berbeda?",
      blocks: [
        { 
          type: "paragraph", 
          text: [
            "Bola basket, bola tenis, dan plastisin dapat dijatuhkan dari ketinggian yang sama tetapi menghasilkan pantulan yang berbeda.",
            "Perbedaan ini memberi petunjuk tentang tingkat kelentingan tumbukan."
          ]
        }
      ]
    },
    {
      heading: "❓ Pertanyaan Besar",
      blocks: [
        { 
          type: "paragraph", 
          text: "Bagaimana kita mengukur seberapa lenting sebuah tumbukan?" 
        }
      ]
    },
    {
      heading: "🎨 Visualisasi Konsep",
      blocks: [
        { 
          type: "paragraph", 
          text: "Semakin besar kemampuan benda untuk memantul kembali relatif terhadap keadaan sebelum tumbukan, semakin tinggi tingkat kelentingannya." 
        }
      ]
    },
    {
      heading: "📐 Definisi Koefisien Restitusi",
      blocks: [
        { 
          type: "equation", 
          equation: "e = v_pisah / v_dekat" 
        },
        { 
          type: "paragraph", 
          text: "Untuk tumbukan satu dimensi, koefisien restitusi dinyatakan sebagai perbandingan kelajuan relatif setelah tumbukan terhadap kelajuan relatif sebelum tumbukan, dengan tanda arah diperhatikan sesuai konvensi yang digunakan." 
        }
      ]
    },
    {
      heading: "🔢 Makna Nilai e",
      blocks: [
        {
          type: "carousel",
          carousel: {
            cards: [
              {
                eyebrow: "KOEFISIEN RESTITUSI",
                title: "$e = 1$",
                text: "Tumbukan lenting sempurna.",
              },
              {
                eyebrow: "KOEFISIEN RESTITUSI",
                title: "$0 < e < 1$",
                text: "Tumbukan lenting sebagian.",
              },
              {
                eyebrow: "KOEFISIEN RESTITUSI",
                title: "$e = 0$",
                text: "Ttumbukan tidak lenting sama sekali.",
              }
            ]
          }
        }
      ]
    },
    {
      heading: "🧪 Contoh Analisis",
      blocks: [
        { 
          type: "paragraph", 
          text: "Jika kelajuan relatif benda setelah tumbukan adalah 2 m/s dan sebelum tumbukan 5 m/s, maka secara sederhana e = 2/5 = 0,4. Nilai tersebut menunjukkan tumbukan lenting sebagian." 
        }
      ]
    },
    {
      heading: "🌍 Contoh dalam Kehidupan",
      blocks: [
        { 
          type: "paragraph", 
          text: "Koefisien restitusi digunakan untuk membandingkan karakter pantulan bola, material permukaan, dan model tumbukan dalam rekayasa." 
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
                  "Koefisien restitusi adalah ukuran energi kinetik yang tersisa secara langsung. ❌",
                  "Gak, gitu!",
                  "Koefisien restitusi membandingkan kecepatan relatif sebelum dan sesudah tumbukan. ✔️"
                ]
              },
              {
                text: "Miskonsepsi 2",
                description: [
                  "Nilai e selalu lebih besar dari 1 pada benda yang sangat memantul. ❌",
                  "Gak, gitu!",
                  "Untuk model tumbukan pasif biasa, nilai e berada dari 0 hingga 1. ✔️"
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
          text: "Dua benda dengan bahan yang sama dapat memiliki karakter tumbukan berbeda jika kondisi permukaan, kecepatan, atau bentuk interaksinya berbeda." 
        }
      ]
    },
    {
      heading: "✨ Inti Materi",
      blocks: [
        { 
          type: "paragraph", 
          text: "Koefisien restitusi membantu mengukur tingkat kelentingan tumbukan dan menghubungkan berbagai karakter tumbukan dalam satu besaran." 
        }
      ]
    },
    {
      blocks: [
        { 
          type: "paragraph", 
          text: "Sekarang kita sudah memahami momentum, impuls, kekekalan momentum, tumbukan, dan kelentingan. Bagaimana semua konsep itu digunakan di dunia nyata?" 
        }
      ]
    }
  ]
};

export default koefisienRestitusi;
