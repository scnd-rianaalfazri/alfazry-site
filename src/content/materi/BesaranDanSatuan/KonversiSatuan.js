import img1 from "/src/assets/Materi/BesaranDanSatuan/portal-pengukuran.png"
import img2 from "/src/assets/Materi/BesaranDanSatuan/konversi-satuan1.png"

const konversiSatuan = {
  title: 'Konversi Satuan',
  slug: 'konversi-satuan',
  description: 'Memahami cara mengubah satuan tanpa mengubah nilai fisik sebenarnya dan menerapkannya dalam perhitungan.',
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
          text: "Keduanya menyatakan panjang yang sama. Yang berubah adalah satuannya." 
        },
      ]
    },
    {
      heading: "❓ Pertanyaan Besar",
      blocks: [
        { 
          type: "paragraph", 
          text: "Bagaimana mengubah satuan tanpa mengubah nilai fisik yang sebenarnya?"
        }
      ]
    },
    {
      heading: "📐 Apa Itu Konversi Satuan?",
      blocks: [
        { 
          type: "paragraph", 
          text: "Konversi satuan adalah proses mengubah suatu nilai dari satu satuan ke satuan lain yang setara. Contoh: 1 km = 1000 m." 
        }
      ]
    },

    {
      heading: "👀 Visualisasi Konsep",
      blocks: [
        { 
          type: "paragraph", 
          text: "Bayangkan satu batang panjang yang sama. Jika satuannya dibuat lebih kecil, jumlah satuan yang diperlukan menjadi lebih banyak. Nilai fisiknya tetap sama."
        }
      ]
    },
    {
      heading: "🧮 Faktor Konversi",
      blocks: [
        { 
          type: "paragraph", 
          text: "Konversi dapat dilakukan dengan faktor pengali yang nilainya sama dengan 1. Contoh: 5 km × (1000 m / 1 km) = 5000 m."
        }
      ]
    },
    {
      heading: '📈 Besar ke Kecil',
      blocks: [
        { 
          type: "paragraph", 
          text: "Jika berpindah ke satuan yang lebih kecil, angka biasanya menjadi lebih besar. Contoh: 5 km = 5000 m."
        }
      ]
    },
    {
      heading: "📉 Kecil ke Besar",
      blocks: [
        { 
          type: "paragraph", 
          text: "Jika berpindah ke satuan yang lebih besar, angka biasanya menjadi lebih kecil. Contoh: 3000 m = 3 km." 
        },
      ]
    },
    {
      heading: '⚡ Analisis Contoh — Kecepatan',
      blocks: [
        { 
          type: "paragraph", 
          text: "72 km/jam diubah ke m/s menggunakan 1 km = 1000 m dan 1 jam = 3600 s. Hasilnya 72 km/jam = 20 m/s." 
        }
      ]
    },

    {
      heading: '🌍 Contoh di Kehidupan',
      blocks: [
        { 
          type: "paragraph", 
          text: "Jarak perjalanan → km atau m. Kecepatan kendaraan → km/jam atau m/s. Ukuran benda kecil → mm, cm, atau m."
        }
      ]
    },
    {
      heading: "⚠️ Miskonsepsi",
      blocks: [
        { 
          type: "paragraph", 
          text: "Konversi bukan sekadar menggeser koma tanpa memahami hubungan satuan. Untuk besaran turunan seperti kecepatan, semua bagian satuan harus diperhatikan."
        }
      ]
    },
    {
      heading: "🌟 *Fun Fact*",
      blocks: [
        { 
          type: "paragraph", 
          text: "Kesalahan satuan dapat mengubah hasil perhitungan secara drastis. Karena itu, menyamakan satuan adalah kebiasaan penting sebelum menggunakan rumus fisika."
        }
      ]
    },
    {
      heading: '✨ Inti Materi',
      blocks: [
        { type: "paragraph", text: 'Konversi satuan mengubah cara penulisan suatu besaran tanpa mengubah nilai fisiknya. Gunakan hubungan satuan yang benar dan pastikan seluruh satuan konsisten.' },
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
                question: "Apa yang dimaksud dengan konversi satuan?",
                options: [
                  "Mengubah nilai fisik suatu benda",
                  "Mengubah suatu nilai dari satu satuan ke satuan lain yang setara",
                  "Mengubah jenis besaran menjadi besaran lain",
                  "Mengubah angka pengukuran agar lebih besar",
                  "Menghilangkan satuan dari hasil pengukuran"
                ],
                answerIndex: 1
              },
              {
                question: "Panjang sebuah jalan adalah 5 km. Jika dinyatakan dalam meter, nilainya adalah....",
                options: [
                  "50 m",
                  "500 m",
                  "5.000 m",
                  "50.000 m",
                  "500.000 m"
                ],
                answerIndex: 2
              },
              {
                question: "Ketika 3.000 m dikonversikan menjadi kilometer, hasilnya adalah....",
                options: [
                  "0,3 km",
                  "3 km",
                  "30 km",
                  "300 km",
                  "3.000 km"
                ],
                answerIndex: 1
              },
              {
                question: "Sebuah kendaraan bergerak dengan kecepatan 72 km/jam. Jika dinyatakan dalam satuan SI, kecepatannya adalah....",
                options: [
                  "10 m/s",
                  "15 m/s",
                  "20 m/s",
                  "25 m/s",
                  "30 m/s"
                ],
                answerIndex: 2
              },
              {
                question: "Mengapa pada konversi besaran turunan seperti kecepatan kita harus memperhatikan seluruh bagian satuannya?",
                options: [
                  "Karena hanya angka yang menentukan hasil konversi",
                  "Karena satuan tidak memengaruhi hasil perhitungan",
                  "Karena besaran turunan tidak memiliki satuan",
                  "Karena konversi hanya berlaku untuk besaran pokok",
                  "Karena setiap bagian satuan memiliki hubungan konversi yang harus diperhitungkan"
                ],
                answerIndex: 4
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
        },
        {
          type: "image",
          src: img1,
          link: "/materi/pengukuran",
          caption: "🚀 Kamu bisa KLIK GAMBAR INI untuk menuju portal selanjutnya",
        }
      ]
    }
  ]
};

export default konversiSatuan;
