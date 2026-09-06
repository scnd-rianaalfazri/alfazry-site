import img1 from "/src/assets/Materi/BesaranDanSatuan/portal-sistem-internasional.png"
import img2 from "/src/assets/Materi/BesaranDanSatuan/besaran-dan-satuan2.png"
import img3 from "/src/assets/Materi/BesaranDanSatuan/besaran-dan-satuan2.png"

const besaranDanSatuan = {
  title: "Besaran dan Satuan",
  slug: "besaran-dan-satuan",
  description: "Memahami bagaimana hasil pengamatan dinyatakan melalui besaran, nilai, dan satuan.",
  chapter: "📏 Pengukuran",

  content: [
    {
      blocks: [
        {
          type: "image",
          src: img2
        },
        { 
          type: "paragraph", 
          text: [
            "Jika seseorang berkata, 'Tinggi pohon itu 10.' Apakah kamu langsung tahu maksudnya?",
            "Belum. Angka membutuhkan konteks dan satuan."
          ] 
        }
      ]
    },
    {
      heading: '❓ Pertanyaan Besar',
      blocks: [
        { 
          type: "paragraph", 
          text: [
            "Apa yang membuat sebuah informasi dapat disebut hasil pengukuran dalam fisika?",
          ]
        }
      ]
    },
    {
      heading: '📐 Apa Itu Besaran?',
      blocks: [
        { 
          type: "paragraph", 
          text: [
            "Besaran adalah sesuatu yang dapat diukur dan dinyatakan dengan angka serta satuan.",
            "Contohnya panjang, massa, waktu, suhu, dan kuat arus."
          ]
        }
      ]
    },
    {
      heading: '👀 Visualisasi Konsep',
      blocks: [
        { 
          type: "paragraph", 
          text: [
            "Amara mengukur panjang meja dan memperoleh 120 cm. 120 adalah nilai hasil pengukuran, sedangkan cm adalah satuan yang digunakan.",
            "Hasil pengukuran dapat dipahami sebagai nilai + satuan."
          ]
        }
      ]
    },
    {
      heading: '🚫 Yang Bukan Besaran',
      blocks: [
        { 
          type: "paragraph", 
          text: "Tidak semua sifat atau penilaian merupakan besaran fisika. Contoh seperti cantik, enak, dan rajin tidak memiliki pengukuran fisika dengan satuan baku yang sesuai."
        },
      ]
    },
    {
      heading: '📏 Apa Itu Satuan?',
      blocks: [
        {
          type: "image",
          src: img3
        },
        { 
          type: "paragraph", 
          text: [
            "Satuan adalah standar pembanding yang digunakan dalam pengukuran.",
            "*Tinggi pohon = 10* belum lengkap",
            "*Tinggi pohon = 10 meter* memberikan informasi yang jelas."
          ]
        }
      ]
    },
    {
      heading: '🧠 Analisis',
      blocks: [
        { 
          type: "paragraph", 
          text: 'Bandingkan "massa tas = 2" dengan "massa tas = 2 kg". Pernyataan kedua lebih bermakna karena satuannya menunjukkan standar pengukuran.' 
        },
      ]
    },
    {
      heading: '🌍 Contoh di Kehidupan',
      blocks: [
        { 
          type: "paragraph", 
          text: 'Membeli beras → kilogram. Mengukur tinggi badan → meter atau sentimeter. Menghitung durasi → detik.' 
        },
      ]
    },
    {
      heading: "⚠️ Miskonsepsi",
      blocks: [
        { 
          type: "paragraph", 
          text: 'Besaran bukan berarti semua hal yang dapat diberi angka. Besaran fisika harus dapat diukur dan dinyatakan dengan satuan yang sesuai.' 
        },
      ]
    },
    {
      heading: "🌟 *Fun Fact*",
      blocks: [
        { 
          type: "paragraph", 
          text: "standar satuan memungkinkan hasil pengukuran dari tempat berbeda dibaca dan dibandingkan dengan cara yang sama." 
        },
      ]
    },
    {
      heading: '✨ Inti Materi',
      blocks: [
        { 
          type: "paragraph", 
          text: 'Besaran menjelaskan apa yang diukur. Nilai menunjukkan hasil pengukuran. Satuan menunjukkan standar yang digunakan.' 
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
                question: "Besaran dalam fisika adalah....",
                options: [
                  "segala sesuatu yang dapat diberi angka",
                  "sesuatu yang dapat diukur dan dinyatakan dengan angka serta satuan",
                  "semua sifat yang dimiliki suatu benda",
                  "hasil pengamatan yang tidak memerlukan satuan",
                  "semua penilaian terhadap suatu benda"
                ],
                answerIndex: 1
              },
              {
                question: "Seseorang mengatakan, 'Panjang meja itu 120.' Mengapa informasi tersebut belum lengkap?",
                options: [
                  "Karena angka 120 terlalu besar",
                  "Karena panjang bukan besaran fisika",
                  "Karena hasil pengukuran membutuhkan satuan sebagai standar pembanding",
                  "Karena meja tidak dapat diukur",
                  "Karena nilai pengukuran harus selalu berupa bilangan desimal"
                ],
                answerIndex: 2
              },
              {
                question: "Pada hasil pengukuran 'panjang meja = 120 cm', yang disebut nilai hasil pengukuran adalah....",
                options: [
                  "Panjang",
                  "Meja",
                  "120",
                  "cm",
                  "120 cm"
                ],
                answerIndex: 2
              },
              {
                question: "Manakah yang bukan merupakan besaran fisika?",
                options: [
                  "Massa",
                  "Waktu",
                  "Suhu",
                  "Panjang",
                  "Rajin"
                ],
                answerIndex: 4
              },
              {
                question: "Pernyataan yang paling tepat mengenai besaran, nilai, dan satuan adalah....",
                options: [
                  "besaran menunjukkan apa yang diukur, nilai menunjukkan hasil pengukuran, dan satuan menunjukkan standar yang digunakan.",
                  "besaran menunjukkan angka, nilai menunjukkan standar, dan satuan menunjukkan apa yang diukur.",
                  "nilai selalu dapat digunakan tanpa satuan.",
                  "satuan hanya digunakan untuk pengukuran panjang.",
                  "besaran dan satuan memiliki arti yang sama."
                ],
                answerIndex: 0
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
          text: "Kalau semua orang harus memahami hasil pengukuran yang sama, kita membutuhkan standar bersama." 
        },
        {
          type: "image",
          src: img1,
          caption: "🚀 Kamu bisa KLIK GAMBAR INI untuk menuju portal selanjutnya",
          link: "/materi/sistem-internasional"
        }
      ],
    }
  ]
};

export default besaranDanSatuan;
