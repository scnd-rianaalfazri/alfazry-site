const notasiilmiah = {
  title: 'Notasi Ilmiah',
  slug: 'notasi ilmiah',
  description: 'Memahami cara menuliskan bilangan sangat besar atau sangat kecil secara ringkas menggunakan notasi ilmiah.',
  chapter: "📏 Pengukuran",

  content: [
    {
      heading: '🌌 Hook — Bagaimana Menulis Angka yang Terlalu Panjang?',
      blocks: [
        { 
          type: "paragraph", 
          text: "Jarak astronomis dan ukuran mikroskopis dapat menghasilkan angka dengan banyak nol. Apakah kita harus menulis semuanya dalam bentuk biasa?" 
        },
      ]
    },
    {
      heading: '❓ Pertanyaan Besar',
      blocks: [
        { 
          type: "paragraph", 
          text: "Bagaimana menulis angka sangat besar atau sangat kecil agar ringkas dan tetap bermakna?"
        },
      ]
    },
    {
      heading: '🔬 Apa Itu Notasi Ilmiah?',
      blocks: [
        { 
          type: "paragraph", 
          text: "Notasi ilmiah menuliskan bilangan dalam bentuk $a \\times 10^n$. Nilai $a$ berada antara 1 dan kurang dari 10, sedangkan $n$ adalah bilangan bulat."
        },
      ]
    },
    {
      heading: '👀 Visualisasi Konsep',
      blocks: [
        { 
          type: "paragraph", 
          text: "Untuk bilangan besar, koma digeser ke kiri sehingga terbentuk angka antara 1 dan 10; jumlah pergeseran menjadi pangkat positif. Untuk bilangan kecil, koma digeser ke kanan; jumlah pergeseran menjadi pangkat negatif."
        },
      ]
    },
    {
      heading: '📈 Contoh Bilangan Besar',
      blocks: [
        { 
          type: "paragraph", 
          text: "300.000.000 $m = 3 \\times 10^8 m$. Koma bergeser 8 tempat ke kiri."
        },
      ]
    },
    {
      heading: '📉 Contoh Bilangan Kecil',
      blocks: [
        { 
          type: "paragraph", 
          text: "0,0000012 $m = 1,2 × 10^6 m$. Koma bergeser 6 tempat ke kanan."
        },
      ]
    },
    {
      heading: '🧠 Analisis',
      blocks: [
        { 
          type: "paragraph", 
          text: "Pangkat positif berkaitan dengan faktor 10 yang besar, sedangkan pangkat negatif menunjukkan faktor yang lebih kecil dari satu."
        },
      ]
    },
    {
      heading: '🌍 Contoh di Kehidupan',
      blocks: [
        { 
          type: "paragraph",
          text: "Massa Bumi dapat ditulis sekitar $5,97 \\times 10^24 kg$. Ukuran mikroskopis juga dapat ditulis dengan pangkat negatif."
        }
      ]
    },
    {
      heading: '⚠️ Miskonsepsi',
      blocks: [
        { 
          type: "paragraph", 
          text: "Pangkat negatif tidak berarti nilai akhirnya negatif. Contoh $10^{-3} = 0,001$, yaitu bilangan positif yang lebih kecil dari satu."
        }
      ]
    },
    {
      heading: "🌟 *Fun Fact*",
      blocks: [
        { 
          type: "paragraph", 
          text: "Notasi ilmiah memungkinkan skala partikel dan skala astronomis ditulis dengan pola yang sama." 
        }
      ]
    },
    {
      heading: '✨ Inti Materi',
      blocks: [
        { 
          type: "paragraph", 
          text: "Notasi ilmiah adalah cara ringkas untuk menuliskan bilangan sangat besar atau sangat kecil. Kuncinya adalah posisi koma dan tanda pangkat 10."
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
                question: "Bentuk umum notasi ilmiah adalah....",
                options: [
                  "$a + 10^n$",
                  "$a \\times 10^n$, dengan $1 \\leq a < 10$",
                  "$10a^n$",
                  "$a \\times n^{10}$",
                  "$an \\times 10$"
                ],
                answerIndex: 1
              },
              {
                question: "Bilangan 300.000.000 m jika ditulis dalam notasi ilmiah menjadi....",
                options: [
                  "$3 \\times 10^6$ m",
                  "$3 \\times 10^7$ m",
                  "$3 \\times 10^8$ m",
                  "$30 \\times 10^7$ m",
                  "300 \\times 10^6$ m"
                ],
                answerIndex: 2
              },
              {
                question: "Ketika mengubah bilangan yang sangat besar ke bentuk notasi ilmiah, koma desimal digeser....",
                options: [
                  "ke kanan dan pangkatnya negatif",
                  "ke kanan dan pangkatnya positif",
                  "ke kiri dan pangkatnya positif",
                  "ke kiri dan pangkatnya negatif",
                  "tidak perlu digeser"
                ],
                answerIndex: 2
              },
              {
                question: "Nilai $10^{-3}$ adalah....",
                options: [
                  "$-1000$",
                  "$-0,001$",
                  "$0,001$",
                  "$0,01$",
                  "$1000$"
                ],
                answerIndex: 2
              },
              {
                question: "Massa Bumi dapat ditulis sekitar $5,97 \\times 10^{24}$ kg. Angka tersebut menunjukkan bahwa notasi ilmiah....",
                options: [
                  "hanya digunakan untuk bilangan kecil",
                  "hanya digunakan dalam matematika",
                  "membuat bilangan sangat besar atau sangat kecil menjadi lebih ringkas",
                  "mengubah nilai suatu besaran menjadi lebih kecil",
                  "menghilangkan satuan dari suatu besaran"
                ],
                answerIndex: 2
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
          text: "Kita sudah bisa menulis angka dengan lebih ringkas. Sekarang saatnya menerjemahkan satuan dari satu bentuk ke bentuk lainnya."
        }
      ]
    }
  ]
};

export default notasiilmiah;
