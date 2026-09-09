import img1 from "/src/assets/Materi/GerakSatuDimensi/jarak-dan-perpindahan1.png"

const jarakDanPerpindahan = {
  title: "Jarak dan Perpindahan",
  slug: "jarak-dan-perpindahan",
  description: "Membedakan total lintasan dengan perubahan posisi dari titik awal ke titik akhir.",
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
            "Bayangkan, kamu jalan kaki 50 meter ke arah timur. Akhirnya kamu balik lagi 50 meter ke arah barat menuju posisi awal kamu",
            "Pertanyaannya, begini! Apakah kamu sudah melangkah sejauh 100 meter atau kamu malah nggak pindah sama sekali?",
            "Nah, di dalam  fisika, ada yang namanya jarak dan perpindahan. Apa itu? *Let's spill the tea!*"
          ]
        }
      ]
    },
    {
      heading: "❓ Pertanyaan Besar",
      blocks: [
        { 
          type: "paragraph",
          text: "Mengapa seseorang dapat menempuh jarak tertentu tetapi memiliki perpindahan nol?"
        },
      ]
    },
    {
      heading: "📏 Jarak",
      blocks: [
        {
          type: "paragraph", 
          text: [
            "Jarak adalah total panjang seluruh lintasan yang ditempuh. Nggak peduli lintasanya belok-belok, muter-muter, atau mondar-mandir semua langkah itu bakal dihitung kumulatif (keseluruhan).",
            "Jarak merupakan besaran skalar, sehingga hanya memiliki nilai tanpa arah."
          ]
        }
      ]
    },
    {
      heading: "🏹 Perpindahan",
      blocks: [
        {
          type: "paragraph", 
          text: [
            "Nah, berbeda dengan perpindahan. Perpindahan hanya fokus sama perubahan posisi dari titik awal ditarik garis lurus ke titik akhir",
            "Perpindahan merupakan besaran vektor karena memiliki nilai dan arah."
          ]
        }
      ]
    },
    {
      heading: "👀 Visualisasi Konsep",
      blocks: [
        {
          type: "paragraph", 
          text: [
            "Rumah → Warung sejauh 5 m → kembali ke Rumah sejauh 5 m.",
            "Jarak total = 10 m. Perpindahan = 0 karena posisi awal dan posisi akhir sama."
          ]
        }
      ]
    },
    {
      heading: "🧠 Analisis Konsep",
      blocks: [
        {
          type: "paragraph", 
          text: "Amati lintasan → Tandai posisi awal → Tandai posisi akhir → Hitung total lintasan untuk jarak → Bandingkan posisi awal dan akhir untuk perpindahan."
        }
      ]
    },
    {
      heading: "⚖️ Bandingkan",
      blocks: [
        {
          type: "list", 
          list: {
            type: "unordered", 
            items: [
              {
                text: "Jarak: total lintasan, skalar, selalu bernilai nol atau positif." 
              },
              {
                text: "Perpindahan: perubahan posisi, vektor, dapat bernilai positif, negatif, atau nol pada satu dimensi."
              } 
            ]
          }
        }
      ]
    },
    {
      heading: "⚠️ Miskonsepsi",
      blocks: [
        {
          type: "paragraph", 
          text: [
            "Jarak dan perpindahan selalu memiliki nilai yang sama. ❌",
            "Nggak, selalu ya!",
            "Nilainya sama hanya pada kondisi tertentu, misalnya benda bergerak lurus satu arah tanpa kembali. ✔ "
          ]
        }
      ]
    },
    {
      heading: "✨ *Fun Fact*",
      blocks: [
        {
          type: "paragraph", 
          text: "Pelari yang mengelilingi lintasan dan kembali ke garis start dapat menempuh jarak sangat jauh, tetapi perpindahan akhirnya tetap nol."
        }
      ]
    },
    {
      heading: "✨ Inti Materi",
      blocks: [
        {
          type: "paragraph", 
          text: "Jarak menjawab 'seberapa panjang lintasan yang ditempuh?'. Perpindahan menjawab 'seberapa berubah posisi dari awal ke akhir?'."
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
              question: "Pernyataan yang benar tentang jarak adalah....",
              options: [
                "Perubahan posisi dari titik awal ke titik akhir.",
                "Panjang seluruh lintasan yang ditempuh tanpa memperhatikan arah.",
                "Besaran yang selalu bernilai nol jika kembali ke titik awal.",
                "Besaran yang memiliki besar dan arah."
              ],
              answerIndex: 1
            },
            {
              question: "Perpindahan merupakan besaran vektor karena....",
              options: [
                "Selalu bernilai positif.",
                "Hanya dihitung menggunakan waktu.",
                "Memiliki besar dan arah.",
                "Nilainya selalu sama dengan jarak.",
                "Tidak bergantung pada posisi awal dan akhir."
              ],
              answerIndex: 2
            },
            {
              question: "Seorang siswa berjalan 8 meter ke timur, kemudian kembali 8 meter ke barat hingga ke posisi semula. Besar perpindahannya adalah....",
              options: [
                "16 meter.",
                "8 meter.",
                "4 meter.",
                "0 meter.",
                "2 meter."
                ],
              answerIndex: 3
            },
            {
              question:
              "Seorang pelari menyelesaikan satu putaran penuh lintasan stadion dan berhenti tepat di garis start. Pernyataan yang benar adalah....",
              options: [
                "Jarak = 0 m dan perpindahan = panjang lintasan.",
                "Jarak = perpindahan.",
                "Jarak = panjang lintasan stadion, sedangkan perpindahan = 0 m.",
                "Jarak dan perpindahan sama-sama 0 m.",
                "Perpindahan lebih besar daripada jarak."
              ],
              answerIndex: 2
            },
            {
              question: "Nilai jarak dan perpindahan akan sama apabila....",
              options: [
                "Benda bergerak bolak-balik pada lintasan yang sama.",
                "Benda bergerak membentuk lintasan melingkar.",
                "Benda bergerak lurus dalam satu arah tanpa berbalik.",
                "Benda kembali ke titik awal.",
                "Benda bergerak dengan kecepatan tetap."
              ],
              answerIndex: 2
            }],
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
            }]
          }
        }
      ]
    },
    {
      blocks: [
        {
          type: "paragraph", 
          text: "Sekarang kita sudah bisa mengukur perjalanan. Pertanyaan berikutnya: seberapa cepat perjalanan itu terjadi?"
        }
      ]
    },
  ]
};

export default jarakDanPerpindahan;
