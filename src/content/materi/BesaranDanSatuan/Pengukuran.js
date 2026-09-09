import img1 from "/src/assets/Materi/BesaranDanSatuan/portal-ketidakpastianpengukuran.png"

const pengukuran = {
  title: 'Pengukuran',
  slug: 'pengukuran',
  description: 'Memahami proses pengukuran, pemilihan alat ukur, ketelitian, dan cara memperoleh data fisika.',
  chapter: "📏 Pengukuran",

  content: [
    {
      blocks: [
        { 
          type: "paragraph", 
          text: "Dalam eksperimen kita sering melihat angka seperti 15,2 cm, 2,0 kg, atau 10 s. Tapi dari mana angka-angka itu berasal?" 
        }
      ]
    },
    {
      heading: "❓ Pertanyaan Besar",
      blocks: [
        { type: "paragraph", 
          text: "Bagaimana cara memperoleh data pengukuran yang dapat dipercaya?" 
        }
      ]
    },
    {
      heading: "📏 Apa Itu Pengukuran?",
      blocks: [
        { 
          type: "paragraph", 
          text: "Pengukuran adalah proses membandingkan suatu besaran dengan satuan standar yang telah ditentukan. Hasil pengukuran dinyatakan sebagai nilai dan satuan."
        }
      ]
    },
    {
      heading: '👀 Visualisasi Konsep',
      blocks: [
        { 
          type: "paragraph", 
          text: "Amara menentukan besaran yang akan diukur, memilih instrumen yang sesuai, menempatkan alat dengan benar, membaca skala, lalu mencatat hasil."
        }
      ]
    },
    {
      heading: '🧰 Memilih Alat Ukur',
      blocks: [
        { 
          type: "paragraph", 
          text: "Panjang → mistar, jangka sorong, mikrometer sekrup. Massa → neraca. Waktu → stopwatch. Suhu → termometer." 
        }
      ]
    },
    {
      heading: '🧠 Analisis — Mengapa Alat Berbeda?',
      blocks: [
        { 
          type: "paragraph", 
          text: "Setiap alat memiliki skala terkecil dan kemampuan baca berbeda. Pemilihan alat harus mempertimbangkan besaran, rentang, dan ketelitian yang dibutuhkan." 
        }
      ]
    },
    {
      heading: '📊 Pengukuran Tunggal dan Berulang',
      blocks: [
        { 
          type: "paragraph", 
          text: "Pengukuran tunggal dilakukan satu kali. Pengukuran berulang dilakukan beberapa kali untuk memperoleh data yang lebih informatif dan membantu mengurangi pengaruh kesalahan acak." 
        }
      ]
    },
    {
      heading: '🌍 Contoh di Kehidupan',
      blocks: [
        { type: "paragraph", 
          text: "Saat membuat meja, panjang harus diukur. Saat memasak, massa atau volume bahan perlu diukur. Pengukuran membuat keputusan menjadi lebih objektif." 
        }
      ]
    },
    {
      heading: '⚠️ Miskonsepsi',
      blocks: [
        { type: "paragraph", 
          text: "Alat yang lebih canggih tidak otomatis membuat semua hasil lebih baik. Alat harus sesuai dengan besaran, rentang, ketelitian, dan cara penggunaan."
        }
      ]
    },
    {
      heading: "🌟 *Fun Fact*",
      blocks: [
        { 
          type: "paragraph", 
          text: "Dalam eksperimen ilmiah, cara alat digunakan dapat sama pentingnya dengan kualitas alat itu sendiri." 
        }
      ]
    },
    {
      heading: '✨ Inti Materi',
      blocks: [
        { 
          type: "paragraph", 
          text: "Pengukuran mengubah fenomena menjadi data. Pengukuran yang baik membutuhkan alat, satuan, teknik, dan pencatatan yang sesuai." 
        }
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
                question: "Pengukuran adalah proses....",
                options: [
                  "membandingkan suatu besaran dengan satuan standar",
                  "menghafalkan nilai suatu besaran",
                  "mengubah satuan menjadi angka",
                  "menentukan massa suatu benda saja",
                  "memperkirakan nilai tanpa menggunakan alat"
                ],
                answerIndex: 0
              },
              {
                question: "Manakah pasangan besaran dan alat ukur yang tepat?",
                options: [
                  "Panjang — jangka sorong",
                  "Massa — mistar",
                  "Massa — termometer",
                  "Suhu — stopwatch",
                  "Waktu — neraca"
                ],
                answerIndex: 0
              },
              {
                question: "Mengapa pemilihan alat ukur perlu disesuaikan dengan objek yang akan diukur?",
                options: [
                  "Karena setiap alat memiliki skala terkecil dan kemampuan baca yang berbeda",
                  "Agar semua hasil pengukuran memiliki nilai yang sama",
                  "Agar proses pengukuran selalu lebih cepat",
                  "Karena semua alat ukur memiliki ketelitian yang sama",
                  "Supaya hasil pengukuran tidak memerlukan satuan"
                ],
                answerIndex: 0
              },
              {
                question: "Apa tujuan utama melakukan pengukuran secara berulang?",
                options: [
                  "Mengubah nilai hasil pengukuran",
                  "Memperbesar nilai hasil pengukuran",
                  "Membantu memperoleh data yang lebih informatif dan mengurangi pengaruh kesalahan acak",
                  "Menghilangkan seluruh kesalahan dalam pengukuran",
                  "Menggantikan fungsi alat ukur"
                ],
                answerIndex: 2
              },
              {
                question: "Pernyataan yang paling tepat mengenai pengukuran yang baik adalah....",
                options: [
                  "membutuhkan alat, satuan, teknik, dan pencatatan yang sesuai",
                  "selalu menggunakan alat yang paling canggih",
                  "cukup menggunakan alat tanpa memperhatikan cara penggunaannya",
                  "hanya bergantung pada kemampuan orang yang melakukan pengukuran",
                  "tidak memerlukan ketelitian selama hasilnya berupa angka"
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
          text: "Kita sudah memperoleh data pengukuran. Namun, apakah hasil itu selalu tepat tanpa batas?"
        },
        {
          type: "image",
          src: img1,
          link: "/materi/ketidakpastian",
          caption: "🚀 Kamu bisa KLIK GAMBAR INI untuk menuju portal selanjutnya",
        }
      ]
    }
  ]
};

export default pengukuran;
