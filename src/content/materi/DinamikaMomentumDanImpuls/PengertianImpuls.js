const pengertianImpuls = {
  title: "Pengertian Impuls",
  slug: "pengertian-impuls",
  description: "Memahami impuls sebagai pengaruh gaya yang bekerja selama selang waktu tertentu.",
  chapter: "💥 Dinamika: Momentum dan Impuls",

  content: [
    {
      heading: "💥 Impuls: Gaya yang Bekerja dalam Waktu",
      blocks: [
        { 
          type: "paragraph", 
          text: [
            "Saat kaki menendang bola, kontak berlangsung sangat singkat. Namun bola dapat berubah dari diam menjadi bergerak cepat.",
            "Ada dua hal yang perlu diperhatikan: seberapa besar gaya diberikan dan berapa lama gaya bekerja."
          ]
        }
      ]
    },
    {
      heading: "❓ Pertanyaan Besar",
      blocks: [
        { 
          type: "paragraph", 
          text: "Bagaimana gaya dan waktu kontak bersama-sama memengaruhi perubahan gerak benda?" 
        },
      ]
    },
    {
      heading: "🧭 Identifikasi Besaran",
      blocks: [
        { 
          type: "paragraph", 
          text: "Pada interaksi singkat, identifikasi gaya rata-rata dan selang waktu gaya bekerja. Keduanya menentukan besar impuls dalam model sederhana." 
        },
      ]
    },
    {
      heading: "🎨 Visualisasi Konsep",
      blocks: [
        { 
          type: "paragraph", 
          text: "Bayangkan dua cara menendang bola. Tendangan dengan gaya lebih besar dapat menghasilkan impuls lebih besar. Begitu juga gaya yang bekerja lebih lama dapat menghasilkan impuls lebih besar jika gaya rata-ratanya sama." 
        },
      ]
    },
    {
      heading: "📐 Rumus Impuls",
      blocks: [
        { 
          type: "equation", 
          equation: "I = FΔt" 
        },
        {
          type: "paragraph",
          text: "Keterangan:"
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "$I$ = Impuls (dalam satuan $N \\dot s \\text{atau} $kg \\dot m/s$)"
              },
              {
                text: "$F$ = Gaya yang diberikan (dalam satuan Newton /$N$)"
              },
              {
                text: "$\\delta\\text{t}$ = Selang waktu gaya bekerja (dalam satuan sekon $(s)$/ detik)"
              },
              {
                text: "$\\delta\\text{p} = Perubahan momentum (dalam satuan $kg \\dot m/s$"
              }
            ]
          }
        },
        { 
          type: "paragraph", 
          text: "Impuls merupakan besaran vektor karena gaya memiliki arah." 
        },
      ]
    },
    {
      heading: "📈 Analisis Faktor",
      blocks: [
        { 
          type: "paragraph", 
          text: "Untuk gaya rata-rata yang sama, memperbesar waktu kontak memperbesar impuls. Untuk waktu yang sama, memperbesar gaya memperbesar impuls." 
        },
      ]
    },
    {
      heading: "🧪 Contoh Analisis",
      blocks: [
        { type: "paragraph", text: "Sebuah gaya rata-rata 100 N bekerja selama 0,2 s. Impulsnya I = FΔt = 100 × 0,2 = 20 N·s." },
        { type: "paragraph", text: "Yang dicari terlebih dahulu adalah gaya rata-rata dan durasi interaksi." },
      ]
    },
    {
      heading: "🌍 Contoh dalam Kehidupan",
      blocks: [
        { 
          type: "paragraph",
           text: "⚽ Tendangan bola, 🏏 pukulan pemukul, 🚗 airbag, 🪖 helm, dan bantalan pelindung melibatkan konsep impuls." 
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
                  "Impuls sama dengan gaya. ❌",
                  "Gak, gitu!",
                  "Impuls bergantung pada gaya dan selang waktu gaya bekerja. ✔️"
                ]
              },
              {
                text: "Miskonsepsi 2",
                description: [
                  "Memperpanjang waktu tumbukan selalu memperbesar perubahan momentum. ❌",
                  "Gak, gitu!",
                  "Jika perubahan momentum yang diperlukan tetap, memperpanjang waktu kontak dapat menurunkan gaya rata-rata. ✔️"
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
          text: "Airbag tidak membuat perubahan momentum penumpang menjadi nol secara ajaib. Airbag membantu mengatur bagaimana perubahan momentum terjadi, terutama dengan memperpanjang waktu interaksi." 
        },
      ]
    },
    {
      heading: "✨ Inti Materi",
      blocks: [
        { 
          type: "paragraph", 
          text: "Impuls menggambarkan pengaruh gaya selama selang waktu tertentu. Besarnya dapat dinyatakan sebagai hasil kali gaya rata-rata dan waktu interaksi." 
        },
      ]
    },
    { 
      heading: "🎯 Quick Check", 
      blocks: [
        {
          type: "quickCheck",
          data: {
            questions: [
              {
                question: "Impuls dapat dipahami sebagai....",
                options: [
                  "ukuran massa suatu benda",
                  "pengaruh gaya yang bekerja selama selang waktu tertentu",
                  "ukuran kecepatan benda",
                  "gaya yang selalu bekerja pada benda diam",
                  "perubahan posisi benda setiap sekon"
                ],
                answerIndex: 1
              },
              {
                question: "Besar impuls dalam model sederhana dapat dihitung menggunakan persamaan....",
                options: [
                  "$I = \\frac{F}{\\Delta t}$",
                  "$I = m a$",
                  "$I = F\\Delta t$",
                  "$I = mv$",
                  "$I= \\frac{m}{v}$"
                ],
                answerIndex: 3
              },
              {
                question: "Sebuah gaya rata-rata 100 N bekerja pada bola selama 0,2 s. Besar impuls yang diberikan adalah....",
                options: [
                  "5 N·s",
                  "10 N·s",
                  "20 N·s",
                  "50 N·s",
                  "200 N·s"
                ],
                answerIndex: 3
              },
              {
                question: "Pernyataan yang tepat mengenai impuls adalah....",
                options: [
                  "impuls hanya ditentukan oleh besar gaya.",
                  "impuls hanya ditentukan oleh massa benda.",
                  "impuls tidak memiliki arah.",
                  "impuls dipengaruhi oleh gaya dan selang waktu gaya bekerja.",
                  "impuls selalu sama dengan gaya gravitasi."
                ],
                answerIndex: 3
              },
              {
                question: "Jika gaya rata-rata yang bekerja pada suatu benda tetap, kemudian waktu kontak diperbesar, maka besar impuls akan....",
                options: [
                  "berkurang",
                  "tetap",
                  "menjadi nol",
                  "bertambah",
                  "tidak dapat ditentukan"
                ],
                answerIndex: 3
              }
            ],
            scoring: [
              {
                min: 5,
                max: 5,
                emoji: "🏆",
                title: "Mission Complete!",
                message: "Kamu siap memasuki portal berikutnya."
              },
              {
                min: 4,
                max: 4,
                emoji: "🚀",
                title: "Hampir Sempurna",
                message: "Pemahamanmu sudah sangat baik."
              },
              {
                min: 2,
                max: 3,
                emoji: "🔄",
                title: "Perlu Sedikit Lagi",
                message: "Coba eksplorasi lagi bagian inti materi."
              },
              {
                min: 0,
                max: 1,
                emoji: "📖",
                title: "Ulangi Petualangan",
                message: "Tenang, ulangi petualanganmu dari awal."
              }
            ]
          }
        }
      ]
    },
    {
      blocks: [
        { 
          type: "paragraph", 
          text: "Momentum menggambarkan keadaan gerak. Impuls menggambarkan pengaruh gaya selama waktu tertentu. Lalu apa hubungan langsung keduanya?" 
        },
      ]
    }
  ]
};

export default pengertianImpuls;
