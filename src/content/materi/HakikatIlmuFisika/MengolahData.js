import img1 from "/src/assets/Materi/HakikatIlmuFisika/portal-kesimpulan-dan-komunikasi-ilmiah.png"

const mengolahData = {
  title: "Mengolah dan Menafsirkan Data",
  slug: "mengolah-dan-menafsirkan-data",
  description: "Memahami cara mengolah, menyajikan, dan menafsirkan data hasil eksperimen agar dapat digunakan untuk menarik kesimpulan yang tepat.",
  chapter: "🔬 Hakikat Ilmu Fisika & Metode Ilmiah",

  content: [
  {
    blocks: [
      {
        type: "paragraph",
        text: [
          "Bayangkan kamu telah melakukan percobaan keren sebanyak sepuluh kali. Selesai nyatet semuanya di buku log.",
          "Apakah petualangan penelitianmu sudah beres sampai di situ?",
          "Eits, belum dong! 🛑 Data-data angka itu barulah baris misterius yang belum bersuara. Biar bermakna dan bisa nge-spill jawabannya, data mentah tersebut harus kita olah dan analisis terlebih dahulu!"
        ]
      }
    ]
  },
  { heading: "📊 Mengapa Data Harus Diolah?", 
    blocks: [
      { 
        type: "paragraph", 
        text: [
          "Sering kali, data mentah itu kelihatan membingungkan—cuma tumpukan angka acak tanpa arah.",
          "Dengan mengolah data (bisa dicari rata-ratanya, dihitung ketidakpastiannya, atau dikelompokkan), kita bisa dengan mudah menemukan pola tersembunyi, membandingkan hasil antar-variabel, dan membuat kesimpulan objektif yang no-cap alias akurat!"
        ] 
      }
    ]
  },
  { heading: "📝 Menyajikan Data", 
    blocks: [
      { 
        type: "paragraph", 
        text: [
          "Biar orang lain gak pusing pas baca hasil risetmu, kamu wajib menyajikannya dalam bentuk visual yang estetik dan informatif. Ada beberapa format penyajian data yang umum digunakan:",
          "📋 Tabel — Untuk menyusun angka secara rapi dan presisi.",
          "📈 Grafik — Untuk melihat tren naik-turun dan hubungan variabel.",
          "📉 Diagram — Bagus untuk membandingkan porsi atau kategori data.",
          "📄 Narasi — Penjelasan teks kasual untuk memperjelas visualnya."
        ]
      },
      {
        type: "list",
        list: 
          {
            type: "unordered",
            list: [
              {
                text : "Tabel",
                description: "Untuk menyusun angka secara rapi dan presisi."
              },
              {
                text: "Grafik",
                description: "Untuk melihat tren naik-turun dan hubungan variabel."
              },
              {
                text: "Diagram",
                description: "Bagus untuk membandingkan porsi atau kategori data."
              },
              {
                text: "Narasi",
                description: "Penjelasan teks kasual untuk memperjelas visualnya."
              }
            ]
          }
      }
    ]
  },
  { heading: "📋 Tabel", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Tabel adalah fondasi awal penyajian data. Dengan tabel, kamu menyimpan data observasi berdasarkan variabel bebas dan terikat secara tertata.",
          "💡 Tips bikin tabel yang *proper*:\n1. Beri judul tabel yang jelas.\n2. Pastikan setiap kolom memiliki nama variabel beserta **satuan SI** yang dipakai (misal: Waktu ($t$) dalam sekon, Jarak ($s$) dalam meter).\n3. Tuliskan batas ketidakpastian alat ukur jika diperlukan."
        ]
      }
    ]
  },
  { heading: "📈 Grafik dan Hubungan Variabel", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Grafik membuat data angkamu 'berbicara'. Dalam Fisika, grafik mempermudah kita melihat hubungan antarvariabel secara langsung:",
          "• **Sumbu X (Horizontal):** Diisi oleh Variabel Bebas (yang kamu ubah-ubah, misal: masa beban, panjang tali).\n• **Sumbu Y (Vertikal):** Diisi oleh Variabel Terikat (yang diukur responsnya, misal: pertambahan panjang, periode ayunan).",
          "Jenis hubungan yang sering muncul pada grafik:\n1. **Linear Berbanding Lurus:** Sumbu Y naik seiring bertambahnya Sumbu X.\n2. **Berbanding Terbalik:** Sumbu Y justru makin kecil saat Sumbu X makin besar.\n3. **Kuadratik/Eksponensial:** Grafik membentuk kurva melengkung secara signifikan."
        ]
      }
    ]
  },
  { heading: "🔍 Menemukan Pola", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Setelah data terpasang di grafik atau tabel, detektif fisika di dalam dirimu harus beraksi! Cari pola yang konsisten dari percobaanmu.",
          "Coba tanyakan hal berikut pada datamu:\n• Apakah nilainya terus meningkat secara konstan?\n• Apakah ada fluktuasi naik-turun yang drastis?\n• Apakah ada *outlier* (data 'aneh' yang nilainya melenceng jauh dibanding data lainnya)?"
        ]
      }
    ]
  },
  { heading: "📖 Menafsirkan Data", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Menafsirkan data berarti menjelaskan **makna di balik pola** tersebut. Apa alasannya grafikmu berbentuk konstan atau melengkung?",
          "⚠️ **Aturan Emas:** Interpretasi harus MURNI berbasis data yang diperoleh, bukan asumsi, opini pribadi, atau sekadar tebak-tebakan!"
        ]
      }
    ]
  },
  { heading: "🌍 Contoh Sederhana", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Kamu menguji apakah panjang tali mempengaruhi periode ayunan ($T$). Data menunjukkan saat panjang tali ($l$) ditambah, periode ($T$) ikut membesar secara melengkung (non-linear).",
          "• **Interpretasi:** Periode ayunan berbanding lurus dengan akar kuadrat panjang tali ($T \\propto \\sqrt{l}$).\n• **Kesimpulan:** Panjang tali terbukti mempengaruhi periode ayunan bandul secara signifikan."
        ]
      }
    ]
  },
  { heading: "💡 Tahukah Kamu?", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Di zaman modern ini, ilmuwan Fisika tidak lagi menghitung ribuan data secara manual! Mereka menggunakan tools AI, pemrograman Python, atau software seperti MATLAB untuk menganalisis terabita data simulasi partikel di CERN hingga sinyal gelombang gravitasi dari luar angkasa."
        ]
      }
    ]
  },
  { heading: "⚠️ Miskonsepsi", 
      blocks: [
      {
        type: "paragraph",
        text: [
          "❌ *'Grafik estetik dan bagus pasti bikin riset kita terbukti benar.'*\n\n✔️ **Fakta:** Grafik yang estetik tidak menjamin riset benar jika datanya tidak valid, alat ukurnya rusak, atau interpretasinya dipaksakan (bias) demi mencocok-cocokkan dengan teori!"
        ]
      }
    ]
  },
  { heading: "📊 Ringkasan Konsep", 
    blocks: [
      { type: "paragraph", 
        text: [
          "Data Mentah",
          "⬇️",
          "Tabel / Grafik",
          "⬇️",
          "Mencari Pola",
          "⬇️",
          "Interpretasi",
          "⬇️",
          "Kesimpulan"
        ]
      }
    ]
  },
  { heading: "✨ Inti Materi *(Takeaway Message)*", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Data eksperimen adalah kunci utama Metode Ilmiah. Mengolah data dengan jujur, objektif, dan sistematis adalah satu-satunya cara untuk menemukan kebenaran ilmiah tanpa prasangka."
        ]
      }
    ]
  },
  { heading:

    "🎯 Quick Check", blocks: [{ type: "heading", text: "🎯 Quick Check" },
    {
      type: "quickCheck",
      data: {
        questions: [
        {
          question: "Mengapa data hasil eksperimen perlu diolah?",
          options: [
            "Agar data terlihat lebih banyak.",
            "Agar hasil eksperimen selalu sesuai dengan hipotesis.",
            "Agar tidak perlu membuat laporan penelitian.",
            "Agar data dapat diubah sesuai keinginan peneliti.",
            "Agar lebih mudah menemukan pola dan menarik kesimpulan yang tepat."
          ],
          answerIndex: 4
        },
        {
          question: "Manakah yang bukan merupakan cara menyajikan data hasil eksperimen?",
          options: [
            "Tabel.",
            "Grafik.",
            "Diagram.",
            "Narasi.",
            "Hipotesis."
          ],
          answerIndex: 4
        },
        {
          question: "Fungsi utama grafik dalam penyajian data adalah....",
          options: [
            "Menambah jumlah data hasil eksperimen.",
            "Menggantikan proses pengamatan.",
            "Memudahkan melihat hubungan antarvariabel dan kecenderungan data.",
            "Membuktikan bahwa hipotesis selalu benar.",
            "Menghilangkan kesalahan pengukuran."
          ],
          answerIndex: 2
        },
        {
          question: "Menafsirkan data berarti....",
          options: [
            "Mengubah data agar sesuai dengan harapan.",
            "Menjelaskan makna pola yang ditemukan berdasarkan data hasil eksperimen.",
            "Menyalin semua data ke dalam tabel.",
            "Menghapus data yang dianggap tidak sesuai.",
            "Membuat grafik tanpa melakukan analisis."
          ],
          answerIndex: 1
        },
        {
          question: "Pernyataan yang benar mengenai pengolahan data adalah....",
          options: [
            "Grafik yang menarik selalu menghasilkan kesimpulan yang benar.",
            "Kesimpulan harus didasarkan pada pendapat peneliti.",
            "Data yang valid perlu dianalisis secara objektif sebelum ditarik kesimpulan.",
            "Data mentah tidak perlu disajikan dalam bentuk tabel atau grafik.",
            "Semua hasil eksperimen pasti menunjukkan pola yang sama."
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
    }]
  },
  { link: "/materi/kesimpulan-dan-komunikasi-ilmiah",
    blocks: [
      {
        type: "paragraph",
        text: [
          "Setelah data berhasil dianalisis, saatnya menyusun kesimpulan dan mengomunikasikan hasil penelitian."
        ]
      },
      {
        type: "image",
        src: img1,
        link: "/materi/kesimpulan-komunikasi-ilmiah"
      }
    ]
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

export default mengolahData;