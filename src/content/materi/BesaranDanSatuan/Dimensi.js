const dimensi = {
  title: 'Dimensi',
  slug: 'dimensi',
  description: 'Memahami dimensi besaran fisika dan menggunakannya untuk melihat struktur serta konsistensi persamaan.',
  chapter: "📏 Pengukuran",

  content: [
    {
      blocks: [
        { 
          type: "paragraph", 
          text: "Bayangkan seseorang menulis rumus yang terlihat meyakinkan. Apakah kita bisa memeriksa apakah struktur rumus itu masuk akal?"
        },
      ]
    },
    {
      heading: '❓ Pertanyaan Besar',
      blocks: [
        { 
          type: "paragraph", 
          text: "Bagaimana cara melihat 'susunan' sebuah besaran dan mengecek konsistensi sebuah persamaan?"
        }
      ]
    },
    {
      heading: '🧩 Apa Itu Dimensi?',
      blocks: [
        { 
          type: "paragraph", 
          text: "Dimensi menunjukkan jenis besaran dasar yang menyusun sebuah besaran fisika. Satuan menunjukkan standar ukur, sedangkan dimensi menunjukkan struktur dasar besaran."
        }
      ]
    },
    {
      heading: '👀 Visualisasi Konsep',
      blocks: [
        { type: "paragraph", 
          text: "Bayangkan besaran turunan seperti sebuah resep. Dimensi membantu melihat bahan dasar apa saja yang menyusun resep tersebut."
        }
      ]
    },
    {
      heading: '🧮 Contoh Dimensi Kecepatan',
      blocks: [
        { type: "paragraph", 
          text: "Kecepatan = jarak / waktu. Jarak memiliki dimensi [L], waktu [T], sehingga dimensi kecepatan adalah [L][T⁻¹]."
        }
      ]
    },
    {
      heading: "⚡ Contoh Dimensi Gaya",
      blocks: [
        { 
          type: "paragraph", 
          text: "Gaya berkaitan dengan massa × percepatan. Massa → [M], percepatan → [L][T⁻²], sehingga gaya → [M][L][T⁻²]."
        }
      ]
    },
    {
      heading: "🧠 Analisis — Cek Konsistensi",
      blocks: [
        { type: "paragraph", text: 'Jika dua ruas persamaan memiliki dimensi berbeda, persamaan tersebut tidak konsisten secara dimensional. Analisis dimensi membantu menemukan kesalahan struktur, tetapi tidak selalu membuktikan rumus pasti benar.' },
      ]
    },
    {
      heading: "🌍 Contoh di Kehidupan",
      blocks: [
        { 
          type: "paragraph", 
          text: "Kecepatan kendaraan memiliki struktur panjang per waktu. Karena itu satuan seperti m/s masuk akal untuk menyatakan kecepatan."
        }
      ]
    },
    {
      heading: "⚠️ Miskonsepsi",
      blocks: [
        { 
          type: "paragraph", 
          text: "Dimensi bukan sama dengan satuan. Kecepatan dapat dinyatakan m/s atau km/jam, tetapi dimensinya tetap [L][T⁻¹]."
        }
      ]
    },
    {
      heading: "🌟 *Fun Fact*",
      blocks: [
        { 
          type: "paragraph", 
          text: "Analisis dimensi dapat membantu menebak bentuk hubungan antarbesaran dalam model fisika."
        }
      ]
    },
    {
      heading: "✨ Inti Materi",
      blocks: [
        { 
          type: "paragraph", 
          text: "Dimensi menunjukkan struktur dasar sebuah besaran dan membantu memeriksa konsistensi dimensional persamaan." 
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
                question: "Apa yang ditunjukkan oleh dimensi suatu besaran fisika?",
                options: [
                  "Alat yang digunakan untuk mengukur besaran",
                  "Standar satuan yang digunakan dalam pengukuran",
                  "Jenis besaran dasar yang menyusun besaran tersebut",
                  "Nilai numerik hasil pengukuran",
                  "Tingkat ketelitian suatu alat ukur"
                ],
                answerIndex: 2
              },
              {
                question: "Dimensi kecepatan adalah....",
                options: [
                  "$[L][T]$",
                  "$[L][T^{-1}]$",
                  "$[L][T^{-2}]$",
                  "$[M][L][T^{-1}]$",
                  "$[M][L][T^{−2}]$"
                ],
                answerIndex: 1
              },
              {
                question: "Berdasarkan hubungan $F = ma$, dimensi gaya adalah....",
                options: [
                  "$[M][L]$",
                  "$[M][T^{-1}]$",
                  "$[L][T^{-2}]$",
                  "$[M][L][T^{-1}]$",
                  "[M][L][T^{−2}]$"
                ],
                answerIndex: 4
              },
              {
                question: "Sebuah persamaan memiliki ruas kiri berdimensi $[L][T^{-1}]$, sedangkan ruas kanannya berdimensi $[L][T^{-2}]$. Berdasarkan analisis dimensi, persamaan tersebut....",
                options: [
                  "tidak konsisten secara dimensional",
                  "pasti benar",
                  "pasti memiliki nilai nol",
                  "hanya salah jika menggunakan satuan SI",
                  "tetap benar karena angka dapat menyesuaikannya"
                ],
                answerIndex: 0
              },
              {
                question: "Pernyataan yang paling tepat mengenai dimensi dan satuan adalah....",
                options: [
                  "dimensi dan satuan merupakan hal yang sama.",
                  "dimensi berubah ketika satuan diubah.",
                  "satuan menunjukkan struktur dasar besaran, sedangkan dimensi menunjukkan standar pengukuran.",
                  "satuan dapat berbeda, tetapi dimensi suatu besaran tetap sama.",
                  "dimensi hanya digunakan untuk besaran pokok."
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
          text: "Kita sudah mengenal struktur besaran. Sekarang saatnya melihat bagaimana angka pengukuran benar-benar diperoleh."
        }
      ]
    }
  ]
};

export default dimensi;
