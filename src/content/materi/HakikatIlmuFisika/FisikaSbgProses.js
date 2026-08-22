import img1 from "/src/assets/Materi/HakikatIlmuFisika/fisika-sebagai-proses3.png"
import img2 from "/src/assets/Materi/HakikatIlmuFisika/fisika-sebagai-proses1.png"
import img3 from "/src/assets/Materi/HakikatIlmuFisika/fisika-sebagai-proses2.png"
import img4 from "/src/assets/Materi/HakikatIlmuFisika/portal-fisika-sebagai-sikap.png"

const fisikaSebagaiProses = {
  title: "Fisika sebagai Proses",
  slug: "fisika-sebagai-proses",
  description: "Memahami bahwa pengetahuan fisika diperoleh melalui proses penyelidikan ilmiah yang sistematis.",
  chapter: "🔬 Hakikat Ilmu Fisika & Metode Ilmiah",

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
          "Pernahkah kamu merenung sejenak dan bertanya: Mengapa buah apel jatuh tegak lurus ke bawah, tetapi Bulan yang sangat besar itu tidak jatuh menabrak Bumi?",
          "Pertanyaan-pertanyaan sederhana seperti itulah yang sering kali menjadi gerbang awal dari sebuah penemuan ilmiah yang mengubah peradaban.",
          "Dalam ilmu fisika, pengetahuan tidak pernah muncul dari tebakan acak, ramalan, atau cocoklogi. Semuanya dibangun melalui sebuah proses penyelidikan yang sistematis."
        ]
      }
    ]
  },
  { heading: "🧪 Apa yang Dimaksud Fisika sebagai Proses?", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Fisika sebagai proses *(physics as a process)* adalah cara atau metodologi yang digunakan oleh para ilmuwan untuk memperoleh pengetahuan tentang alam semesta.",
          "Pengetahuan fisika tidak turun begitu saja dari langit, melainkan diraih secara bertahap melalui rantai pengamatan yang ketat, pengujian di laboratorium, analisis data yang objektif, dan penarikan kesimpulan berdasarkan bukti-bukti nyata."
        ]
      }
    ]
  },
  { heading: "🔄 Bagaimana Pengetahuan Fisika Dibangun?",
    blocks: [
      { type: "carousel",
        carousel: {
          cards: [
            {
              eyebrow: "FISIKA DALAM PROSES PENEMUAN",
              title: "👀 Mengamati fenomena",
              text: "Melihat dan mencermati kejadian unik di sekitar alam.",
              description: [
                "Contoh:",
                "Saat sebuah bola dilempar vertikal ke atas, bola bergerak semakin lambat, berhenti sesaat di titik tertinggi, lalu bergerak kembali ke bawah."
              ]
            },
            {
              eyebrow: "FISIKA DALAM PROSES PENEMUAN",
              title: "❓ Mengajukan pertanyaan",
              text: "Merumuskan masalah yang ingin dipecahkan (Mengapa? Bagaimana?).",
              description: [
                "Contoh:",
                "Mengapa bola yang sedang bergerak ke atas justru semakin lambat? Mengapa bola kemudian berhenti sesaat dan jatuh kembali ke tanah?"
              ]
            },
            {
              eyebrow: "FISIKA DALAM PROSES PENEMUAN",
              title: "💭 Menyusun hipotesis",
              text: "Membuat dugaan atau jawaban sementara yang logis.",
              description: [
                "Contoh:",
                "Bola mengalami gaya gravitasi yang arahnya ke bawah sehingga kecepatannya terus berkurang ketika bola bergerak ke atas."
              ]
            },
            {
              eyebrow: "FISIKA DALAM PROSES PENEMUAN",
              title: "🧪 Melakukan eksperimen",
              text: "Menguji hipotesis secara langsung melalui serangkaian percobaan terkontrol.",
              description: [
                "Contoh:",
                "Lempar bola secara vertikal dengan beberapa kondisi awal yang berbeda. Catat waktu dan posisi bola menggunakan sensor gerak atau video analisis.",
                "Bandingkan perubahan posisi dan kecepatannya selama bola bergerak naik hingga kembali turun."
              ]
            },
            {
              eyebrow: "FISIKA DALAM PROSES PENEMUAN",
              title: "📊 Menganalisis data",
              text: "Mengolah, membaca, dan menginterpretasikan angka atau hasil dari eksperimen.",
              description: [
                "Contoh:",
                "Dari data posisi dan waktu, terlihat bahwa kecepatan bola berkurang secara teratur saat bergerak ke atas. Setelah mencapai titik tertinggi, arah geraknya berubah dan bola mulai bergerak ke bawah.",
                "Data menunjukkan adanya percepatan yang arahnya ke bawah selama gerak berlangsung."
              ]
            },
            {
              eyebrow: "FISIKA DALAM PROSES PENEMUAN",
              title: "📖 Menarik kesimpulan",
              text: "Menentukan apakah data eksperimen mendukung atau justru membantah hipotesis awal.",
              description: [
                "Contoh:",
                "Hasil eksperimen mendukung hipotesis bahwa gravitasi memengaruhi gerak bola. Gravitasi memberikan percepatan ke bawah sehingga bola melambat ketika naik dan semakin cepat ketika turun.",
                "Dari pengamatan dan eksperimen yang konsisten, kita dapat membangun pemahaman tentang gerak vertikal dan pengaruh gravitasi."
              ]
            }
          ]
        }
      }
    ]
  },
  { heading: "🔍 Mengapa Harus Berdasarkan Bukti?", 
    blocks: [
      {
        type: "image",
        src: img2
      },
      {
        type: "paragraph",
        text: [
          "Dalam dunia sains, sebuah pendapat atau teori tidak akan dianggap benar hanya karena terdengar masuk akal atau karena diucapkan oleh orang terkenal.",
          "Pendapat tanpa data hanyalah rumor.",
          "Setiap pernyataan ilmiah wajib didukung oleh data valid dan hasil eksperimen empiris yang dapat diuji kembali *(reproducible)* oleh siapa pun, kapan pun, dan di mana pun."
        ]
      }
    ]
  },
  { heading: 
    "🔁 Proses yang Terus Berulang", 
    blocks: [
      {
        type: "image",
        src: img3
      },
      {
        type: "paragraph",
        text: [
          "Penelitian ilmiah hampir tidak pernah langsung sukses pada percobaan pertama. Kegagalan adalah makanan sehari-hari para ilmuwan.",
          "Oleh karena itu, penelitian fisika adalah proses yang terus berulang (siklus) demi mendekati kebenaran yang paling akurat.",
          "Jika hasil eksperimen tidak sesuai, ilmuwan akan kembali ke meja kerja untuk mengulang eksperimen, memperbaiki metode pengumpulan data, atau bahkan merombak total hipotesis mereka demi mendapatkan hasil yang valid."
        ]
      }
    ]
  },
  { heading: "🌍 Contoh dalam Kehidupan", 
    caption: "Penelitian di lab futuristik", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Bayangkan kamu sedang penasaran: *'Apakah panjang tali pada ayunan akan memengaruhi waktu yang dibutuhkan bandul untuk berayun?'*",
          "Sebagai orang yang berpikir ilmiah, kamu tidak boleh cuma menebak-nebak (*'Kayaknya sih makin panjang makin cepet...'*).",
          "Kamu harus bertindak! Kamu ambil tali dengan berbagai ukuran variasi, mengikat beban, mengayunkannya, menghitung waktunya dengan stopwatch, lalu mencatat datanya secara jujur.",
          "Dari data itulah kamu baru bisa menarik kesimpulan yang valid."
        ]
      }
    ]
  },
  { heading: "💡 Tahukah Kamu?", 
    caption: "Penemuan besar dimuali dari pengamatan.", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Banyak penemuan besar dalam sejarah fisika lahir dari pengamatan hal-hal remeh yang kemudian diinvestigasi secara serius melalui eksperimen mendalam.",
          "Kuncinya bukan seberapa rumit alatnya, melainkan seberapa konsisten proses ilmiah yang dijalankan!"
        ]
      }
    ]
  },
  { heading: "⚠️ Miskonsepsi", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "*'Tujuan eksperimen itu untuk membuktikan kalau tebakan (hipotesis) kita 100% benar, kan?'* ❌",
          "Gak, gitu! ",
          "Eksperimen bukan alat untuk validasi ego agar hipotesis kita terlihat selalu benar.",
          "Tujuan utama eksperimen adalah untuk menguji secara objektif apakah hipotesis tersebut didukung oleh bukti nyata atau tidak. ",
          "Hipotesis yang terbukti salah lewat eksperimen tetaplah sebuah kontribusi besar bagi sains karena memberi tahu peneliti lain jalan mana yang buntu."
        ]
      }
    ]
  },
  { heading: "✨ Inti Materi", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Fisika berkembang secara dinamis melalui proses ilmiah yang sistematis, objektif, dan berbasis pada bukti (evidence-based) yang didapatkan dari hasil pengamatan maupun eksperimen nyata."
        ]
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
              question: "Yang dimaksud fisika sebagai proses adalah....",
              options: [
                "Kumpulan hukum dan teori yang telah ditemukan.",
                "Cara ilmuwan memperoleh pengetahuan melalui penyelidikan ilmiah.",
                "Sikap yang harus dimiliki setiap ilmuwan.",
                "Penggunaan teknologi dalam kehidupan sehari-hari.",
                "Cabang fisika yang mempelajari gerak benda."
            ],
              answerIndex: 1
            },
            {
              question: "Manakah urutan proses ilmiah yang paling tepat?",
              options: [
                "Kesimpulan → Hipotesis → Pengamatan → Eksperimen",
                "Pengamatan → Pertanyaan → Hipotesis → Eksperimen → Analisis → Kesimpulan",
                "Hipotesis → Kesimpulan → Pengamatan → Analisis",
                "Eksperimen → Pengamatan → Hipotesis → Kesimpulan",
                "Pengamatan → Eksperimen → Kesimpulan → Hipotesis → Analisis"
              ],
              answerIndex: 1
            },
            {
              question: "Mengapa hasil penelitian ilmiah harus didukung oleh bukti?",
              options: [
                "Agar hasilnya terlihat lebih menarik.",
                "Karena pendapat seseorang selalu benar.",
                "Agar kesimpulan dapat diuji dan dipercaya oleh orang lain.",
                "Supaya eksperimen tidak perlu diulang.",
                "Karena semua hipotesis pasti benar."
              ],
              answerIndex: 2
            },
            {
              question: "Seorang siswa ingin mengetahui apakah panjang tali memengaruhi waktu ayunan bandul. Langkah yang paling tepat adalah....",
              options: [
                "Menebak hasilnya tanpa melakukan percobaan.",
                "Bertanya kepada teman lalu langsung menarik kesimpulan.",
                "Melakukan eksperimen, mencatat data, kemudian menganalisis hasilnya.",
                "Mencari jawaban di internet tanpa melakukan pengamatan.",
                "Mengubah hasil pengamatan agar sesuai dengan dugaan."
              ],
              answerIndex: 2
            },
            {
              question: "Pernyataan yang benar mengenai hipotesis adalah....",
              options: [
                "Hipotesis harus selalu terbukti benar.",
                "Hipotesis adalah dugaan sementara yang perlu diuji melalui eksperimen.",
                "Hipotesis sama dengan kesimpulan akhir penelitian.",
                "Hipotesis tidak boleh berubah meskipun data menunjukkan hasil yang berbeda.",
                "Hipotesis dibuat setelah eksperimen selesai dilakukan."
              ],
              answerIndex: 1
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
    link: "/materi/fisika-sebagai-sikap",
    blocks: [
      {
        type: "paragraph",
        text: [
          "Apakah kamu sudah paham bagaimana ilmu fisika itu diproses dan dibangun?",
          "Namun, proses ilmiah yang keren ini tidak akan berjalan lancar tanpa adanya karakter atau mindset yang benar dari sang peneliti.",
          "Selain menghasilkan pengetahuan dan metode, fisika juga membentuk karakter serta cara berperilaku seorang ilmuwan.",
        ]
      },
      {
        type: "image",
        src: img4,
        caption: "🚀 Kamu bisa KLIK GAMBAR INI untuk menuju portal selanjutnya",
        link: "/materi/fisika-sebagai-sikap"
      }
    ]
  },
  { heading: "Referensi:", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Halliday, Resnick & Walker. Fundamentals of Physics.",
          "Serway & Jewett. Physics for Scientists and Engineers.",
          "Young & Freedman. University Physics with Modern Physics.",
          "Kemendikbudristek RI. Buku Fisika SMA/MA."
        ]
      }
    ]
  }]
};

export default fisikaSebagaiProses;