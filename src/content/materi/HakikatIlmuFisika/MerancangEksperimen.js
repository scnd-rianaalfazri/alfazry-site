const merancangEksperimen = {
  title: "Merancang Eksperimen",
  slug: "merancang-eksperimen",
  description: "Memahami bagaimana merancang eksperimen yang baik dengan menentukan variabel, alat, bahan, dan prosedur secara sistematis.",
  chapter: "🔬 Hakikat Ilmu Fisika & Metode Ilmiah",

  content: [
  {
    blocks: [
    {
      type: "paragraph",
      text: [
        "🧐 Paradoks Ayunan Bandul: Bisakah Kita Asal Tebak?",
        "Bayangkan kamu sedang bosan di kelas fisika, lalu tiba-kira kamu penasaran: 'Kalau gue ganti panjang tali bandul ini jadi lebih pendek, ayunannya bakal makin cepat atau makin lambat ya?'",
        "Pertanyaannya, apakah cukup dengan cuma asal ganti tali lalu menyimpulkan hasilnya begitu saja? Bagaimana dengan berat/massa bandul yang berayun?",
        "Bagaimana dengan besar sudut awal saat kamu menarik tali tersebut? Terus kalau lokasinya dipindah ke tempat tinggi, apakah efeknya sama?",
        "Nah, di sinilah insting detektif fisikamu diuji.",
        "Sebelum melangkah langsung ke laboratorium, semua hal printilan tadi wajib kamu rencanakan secara matang biar tidak terjadi kekacauan data."
      ]
    }]
  },
  { heading: "🧪 Apa Itu Eksperimen?", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Secara sederhana, eksperimen adalah kegiatan untuk menguji hipotesis melalui serangkaian percobaan yang terencana.",
          "Dalam dunia sains, bereksperimen itu mirip seperti bermain game simulator.",
          "Kita dengan sengaja mengubah satu faktor tertentu (tombol kontrol), kemudian mengamati dengan saksama apa pengaruh dari perubahan itu terhadap faktor lainnya."
        ]
      }
    ]
  },
  { heading: "🎯 Tujuan Eksperimen", 
    blocks: [
      { type: "paragraph", 
        text: [
           "Kita tidak melakukan percobaan cuma buat seru-seruan atau sekadar bikin laboratorium berantakan ya.",
           "Eksperimen dilakukan untuk:"
        ]
      },
      {
        type: "list",
        list: {
          type: "ordered",
          items: [
            {
              text: "Menguji Hipotesis",
              description: "Membuktikan apakah dugaan awal kita terbukti benar secara faktual atau salah."
            },
            {
              text: "Menemukan Hubungan Sebab-Akibat",
              description: "Mencari tahu siapa pemicu utama di balik sebuah fenomena fisis."
            },
            {
              text: "Mengumpulkan Data Valid",
              description: "Mendapatkan angka atau informasi akurat yang siap dianalisis lebih lanjut."
            }
          ]
        }
      }
    ]
  },
  { heading: "📊 Variabel dalam Eksperimen", 
    blocks: [
      {
        type: "paragraph",
        text: "Agar hasil percobaanmu sah, dipercaya, dan tidak didebat oleh komunitas sains, kamu harus mengenali tiga jenis variabel berikut ini 👇"
      }
    ]
  },
  { heading: "🟢 Variabel Bebas", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Ini adalah faktor atau kondisi yang sengaja diubah-ubah atau dimanipulasi oleh kamu sebagai peneliti sejak awal.",
          "Kamu yang memegang kendali penuh atas perubahan ini."
        ]
      },
      {
        type: "list",
        list: {
          type: "unordered",
          items: [
            {
              text: "Contoh kasus pada bandul",
              description: "Panjang tali bandul (misal divariasi dari 20 cm, 40 cm, hingga 60 cm)."
            }
          ]
        }
      }
    ]
  },
  { heading: "🔵 Variabel Terikat", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Ini adalah hasil akhir atau respons yang diamati, diukur, dan dicatat.",
          "Variabel ini nilainya berubah justru karena adanya pengaruh dari variabel bebas tadi."
        ]
      },
      {
        type: "list",
        list: {
          type: "unordered",
          items: [
            {
              text: "Contoh pada kasus bandul",
              description: "Periode ayunan bandul (waktu yang dibutuhkan untuk satu getaran penuh)."
            }
          ]
        }
      }
    ]
  },
  { heading: "🟡 Variabel Kontrol", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Ini adalah faktor-faktor luar yang wajib dijaga tetap sama, konisten, dan tidak boleh berubah sepanjang pengujian dilakukan.",
          "Tujuannya? Biar adil!"
        ]
      },
      {
        type: "list",
        list: {
          type: "unordered",
          items: [
            {
              text: "Contoh pada kasus bandul",
              description: "Massa beban bandul, sudut awal tarikan ayunan, serta lokasi/ruangan percobaan."
            }
          ]
        }
      }
    ]

  },
  { heading: "⚖️ Mengapa Harus Fair Test?", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Eksperimen yang keren dan ideal menerapkan prinsip Fair Test.",
          "Artinya, hanya ada satu variabel bebas saja yang diubah dalam satu waktu.",
          "Bayangkan kalau kamu mengubah panjang tali sekaligus mengganti massa bandulnya secara bersamaan.",
          "Pas hasil ayunannya berubah, kamu pasti bakal pusing sendiri: 'Ini ayunannya berubah gara-gara talinya memendek atau gara-gara bebannya makin berat ya?'",
          "Tuh kan, kalau terlalu banyak faktor yang berubah sekaligus, kita bakal kehilangan jejak penyebab asli dari perubahan hasil tersebut."
        ]
      }
    ]
  },
  { heading: "🌍 Contoh Rancangan Eksperimen", 
    blocks: [
      { type: "paragraph", 
        text: "Pertanyaan:" 
      },
      {
        type: "paragraph",
        text: [
          "Apakah panjang tali memengaruhi periode bandul?",
          "Mari kita breakdown rencana pengujian kita ke dalam struktur rancangan yang rapi:"
        ],
      },
      {
        type: "list",
        list: {
          type: "ordered",
          items: [
            {
              text: "Pertanyaan Utama",
              description: "Apakah panjang tali memengaruhi periode suatu bandul?"
            },
            {
              text: "Variabel Bebas",
              description: "Panjang tali bandul."
            },
            {
              text: "Variabel Terikat",
              description: "Periode atau waktu ayunan."
            },
            {
              text: "Variabel Kontrol",
              description: "Massa bandul, besar sudut ayunan, dan lokasi pengujian."
            },      
          ]
        }
      }
    ]
  },
  { heading:  "💡 Tahukah Kamu?", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Ilmuwan profesional di dunia nyata jarang banget puas cuma dengan melakukan satu kali percobaan.",
          "Mereka biasanya melakukan beberapa kali pengulangan (repetition) pada variasi yang sama.",
          "Kenapa?",
          "Biar datanya makin meyakinkan, menekan tingkat galat (error), dan membuktikan kalau hasilnya bukan cuma kebetulan atau keberuntungan semata!"
        ]
      }
    ]
  },
  { heading: "⚠️ Miskonsepsi", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "'Makin banyak variabel yang gue ubah dan mainkan sekaligus, berarti eksperimen gue makin canggih dan kelihatan pro!' ❌",
          "Gak gitu!",
          "Mengubah banyak variabel acak secara bersamaan tidak akan membuat eksperimenmu naik level.",
          "Justru itu bakal bikin data yang terkumpul jadi bias, bertabrakan, dan super sulit buat dianalisis.",
          "Keep it simple, track one thing at a time!"
        ]
      }
    ]
  },
  { heading: "📊 Ringkasan Konsep", 
    blocks: [
      { type: "paragraph", 
        text: "Hipotesis" 
      },
      { type: "paragraph", 
        text: "⬇️" 
      },
      { type: "paragraph", 
        text: "Menentukan Variabel" 
      },
      { type: "paragraph", 
        text: "⬇️" 
      },
      { type: "paragraph", 
        text: "Menyusun Prosedur" 
      },
      { type: "paragraph", 
        text: "⬇️" 
      },
      { type: "paragraph", 
        text: "Melakukan Percobaan" 
      },
      { type: "paragraph", 
        text: "⬇️" 
      },
      { type: "paragraph", 
        text: "Mengumpulkan Data" 
      }
    ]
  },
  { heading: "✨ Inti Materi (Takeaway Message)", 
    blocks: [
      {
        type: "paragraph",
        text: "Eksperimen yang baik memerlukan perencanaan yang matang dengan menentukan variabel bebas, variabel terikat, dan variabel kontrol secara jelas."
      }
    ]
  },
  { heading: "🎯 Quick Check", 
    blocks: [
      {
        type: "quickCheck",
        data: {
          questions: [
          {
            question: "Tujuan utama melakukan eksperimen adalah....",
            options: [
            "Menghafal langkah-langkah praktikum.",
            "Menguji hipotesis melalui percobaan yang terencana.",
            "Membuktikan bahwa semua hipotesis pasti benar.",
            "Menghasilkan alat laboratorium baru.",
            "Mengurangi jumlah data yang dikumpulkan."],
            answerIndex: 1
          },
          {
            question:
            "Dalam eksperimen tentang pengaruh panjang tali terhadap periode ayunan bandul, variabel bebas adalah....",
            options: [
            "Massa bandul.",
            "Sudut awal ayunan.",
            "Periode ayunan bandul.",
            "Panjang tali bandul.",
            "Lokasi percobaan."],
            answerIndex: 3
          },
          {
            question:
            "Manakah yang merupakan variabel terikat pada eksperimen bandul?",
            options: [
            "Panjang tali.",
            "Massa bandul.",
            "Periode ayunan bandul.",
            "Jenis tali yang digunakan.",
            "Suhu ruangan."],
            answerIndex: 2
          },
          {
            question:
            "Mengapa variabel kontrol perlu dijaga tetap selama eksperimen?",
            options: [
            "Agar percobaan selesai lebih cepat.",
            "Agar hasil percobaan terlihat lebih menarik.",
            "Agar pengaruh variabel bebas terhadap hasil dapat diamati dengan adil.",
            "Agar tidak perlu melakukan pengukuran.",
            "Agar semua hipotesis terbukti benar."],
            answerIndex: 2
          },
          {
            question: "Pernyataan yang benar mengenai fair test adalah....",
            options: [
            "Semua variabel harus diubah secara bersamaan.",
            "Variabel terikat harus dibuat tetap.",
            "Eksperimen cukup dilakukan satu kali tanpa pengulangan.",
            "Hasil eksperimen harus selalu sesuai dengan hipotesis.",
            "Hanya satu variabel bebas yang diubah, sedangkan variabel lainnya dikendalikan."],
            answerIndex: 4
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
    link: "/materi/mengolah-data",
    blocks: [
    {
      type: "paragraph",
      text: "Setelah eksperimen selesai dilakukan, data yang diperoleh harus diolah dan dianalisis."
    },
    {
      type: "paragraph",
      text: "➡️ Next, kita menuju portal: Mengolah & Menafsirkan Data."
    }]
  },
  { heading: "Referensi:", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Kemendikbudristek RI. Buku Fisika SMA/MA.",
          "Halliday, Resnick & Walker. Fundamentals of Physics.",
          "Serway & Jewett. Physics for Scientists and Engineers."
        ]
      }
    ]
  }]
};

export default merancangEksperimen;