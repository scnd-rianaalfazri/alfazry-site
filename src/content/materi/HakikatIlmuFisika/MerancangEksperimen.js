import { link } from "framer-motion/client";
import img1 from "/src/assets/Materi/HakikatIlmuFisika/merancang-eksperimen1.png"
import img2 from "/src/assets/Materi/HakikatIlmuFisika/merancang-eksperimen2.png"
import img3 from "/src/assets/Materi/HakikatIlmuFisika/portal-mengolah-dan-menafsirkan-data.png"

const merancangEksperimen = {
  title: "Merancang Eksperimen",
  slug: "merancang-eksperimen",
  description: "Memahami bagaimana merancang eksperimen yang baik dengan menentukan variabel, alat, bahan, dan prosedur secara sistematis.",
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
          "Bayangkan kamu sedang bosan di kelas fisika, lalu tiba-kira kamu penasaran: 'Kalau gue ganti panjang tali bandul ini jadi lebih pendek, ayunannya bakal makin cepat atau makin lambat ya?'",
          "Pertanyaannya, apakah cukup dengan cuma asal ganti tali lalu menyimpulkan hasilnya begitu saja? Bagaimana dengan berat/massa bandul yang berayun?",
          "Bagaimana dengan besar sudut awal saat kamu menarik tali tersebut? Terus kalau lokasinya dipindah ke tempat tinggi, apakah efeknya sama?",
          "Nah, di sinilah insting detektif fisikamu diuji.",
          "Sebelum melangkah langsung ke laboratorium, semua hal printilan tadi wajib kamu rencanakan secara matang biar tidak terjadi kekacauan data."
        ]
      }
    ]
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
      },
      {
        type: "carousel",
        carousel: {
          cards: [
            {
              eyebrow: "JENIS-JENIS VARIABEL PENELITIAN",
              title: "🟢 Variabel Bebas",
              text: "Ini adalah faktor atau kondisi yang sengaja diubah-ubah atau dimanipulasi oleh kamu sebagai peneliti sejak awal. Kamu yang memegang kendali penuh atas perubahan ini.",
              description: [
                "Contoh:",
                "**Kasus pada Bandul**",
                "Panjang tali bandul (misal divariasi dari 20 cm, 40 cm, hingga 60 cm)."
              ]
            },
            {
              eyebrow: "JENIS-JENIS VARIABEL PENELITIAN",
              title: "🔵 Variabel Terikat",
              text: "Ini adalah hasil akhir atau respons yang diamati, diukur, dan dicatat. Variabel ini nilainya berubah justru karena adanya pengaruh dari variabel bebas tadi.",
              description: [
                "Contoh:",
                "**Kasus pada Bandul**",
                "Periode ayunan bandul (waktu yang dibutuhkan untuk satu getaran penuh)."
              ]
            },
            {
              eyebrow: "JENIS-JENIS VARIABEL PENELITIAN",
              title: "🟡 Variabel Kontrol",
              text: "Ini adalah faktor-faktor luar yang wajib dijaga tetap sama, konisten, dan tidak boleh berubah sepanjang pengujian dilakukan. Tujuannya? Biar adil!",
              description: [
                "Contoh",
                "**Kasus pada Bandul**",
                "Massa beban bandul, sudut awal tarikan ayunan, serta lokasi/ruangan percobaan."
              ]
            }
          ]
        }
      }
    ]
  },
  { heading: "⚖️ Mengapa Harus *Fair Test*?", 
    blocks: [
      {
        type: "image",
        src: img2
      },
      {
        type: "paragraph",
        text: [
          "Eksperimen yang keren dan ideal menerapkan prinsip *Fair Test*. Artinya, hanya ada satu variabel bebas saja yang diubah dalam satu waktu.Bayangkan kalau kamu mengubah panjang tali sekaligus mengganti massa bandulnya secara bersamaan.",
          "Pas hasil ayunannya berubah, kamu pasti bakal pusing sendiri: 'Ini ayunannya berubah gara-gara talinya memendek atau gara-gara bebannya makin berat ya?'",
          "Tuh kan, kalau terlalu banyak faktor yang berubah sekaligus, kita bakal kehilangan jejak penyebab asli dari perubahan hasil tersebut."
        ]
      }
    ]
  },
  {
    heading: "🌍 Contoh dalam Kehidupan",
    blocks: [
      {
        type: "paragraph",
        text: [
          "Ternyata prinsip merancang eksperimen dan *fair test* tidak cuma berlaku di laboratorium. Dalam kehidupan sehari-hari, kita sering melakukan eksperimen kecil tanpa sadar.",
          "Misalnya, kamu ingin tahu: **apakah jenis tanah memengaruhi pertumbuhan tanaman?**",
          "Kamu menanam jenis tanaman yang sama pada dua pot dengan jenis tanah yang berbeda. Setelah beberapa hari, kamu mengukur tinggi tanaman dan membandingkan hasilnya.",
          "Tapi tunggu dulu. Kalau tanaman pertama mendapat lebih banyak air, lebih banyak cahaya, atau menggunakan pot yang berbeda ukuran, apakah perbandingannya masih adil?",
          "Agar eksperimennya fair, kamu perlu membuat kondisi lainnya tetap sama. Jenis tanaman, ukuran pot, jumlah air, lama penyinaran, dan waktu pengamatan harus dikendalikan.",
          "Dengan begitu, ketika pertumbuhan kedua tanaman berbeda, kamu punya alasan yang lebih kuat untuk mengatakan bahwa **jenis tanah kemungkinan memengaruhi pertumbuhan tanaman**.",
          "Inilah cara berpikir ilmiah bekerja dalam kehidupan sehari-hari yaitu ubah satu hal, kendalikan hal lainnya, amati hasilnya, lalu tarik kesimpulan berdasarkan data."
        ]
      }
    ]
  },
  { heading: "✨ Inti Materi", 
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
                "Mengurangi jumlah data yang dikumpulkan."
              ],
              answerIndex: 1
            },
            {
              question: "Dalam eksperimen tentang pengaruh panjang tali terhadap periode ayunan bandul, variabel bebas adalah....",
              options: [
                "Massa bandul.",
                "Sudut awal ayunan.",
                "Periode ayunan bandul.",
                "Panjang tali bandul.",
                "Lokasi percobaan."
              ],
              answerIndex: 3
            },
            {
              question: "Manakah yang merupakan variabel terikat pada eksperimen bandul?",
              options: [
                "Panjang tali.",
                "Massa bandul.",
                "Periode ayunan bandul.",
                "Jenis tali yang digunakan.",
                "Suhu ruangan."
              ],
              answerIndex: 2
            },
            {
              question: "Mengapa variabel kontrol perlu dijaga tetap selama eksperimen?",
              options: [
                "Agar percobaan selesai lebih cepat.",
                "Agar hasil percobaan terlihat lebih menarik.",
                "Agar pengaruh variabel bebas terhadap hasil dapat diamati dengan adil.",
                "Agar tidak perlu melakukan pengukuran.",
                "Agar semua hipotesis terbukti benar."]
                ,
              answerIndex: 2
            },
            {
              question: "Pernyataan yang benar mengenai fair test adalah....",
              options: [
                "Semua variabel harus diubah secara bersamaan.",
                "Variabel terikat harus dibuat tetap.",
                "Eksperimen cukup dilakukan satu kali tanpa pengulangan.",
                "Hasil eksperimen harus selalu sesuai dengan hipotesis.",
                "Hanya satu variabel bebas yang diubah, sedangkan variabel lainnya dikendalikan."
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
    link: "/materi/mengolah-data",
    blocks: [
      {
        type: "paragraph",
        text: [
          "Setelah eksperimen selesai dilakukan, data yang diperoleh harus diolah dan dianalisis.",
        ] 
      },
      {
        type: "image",
        src: img3,
        caption: "🚀 Kamu bisa KLIK GAMBAR INI untuk menuju portal selanjutnya",
        link: "/materi/mengolah-dan-menafsirkan-data"
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

export default merancangEksperimen;