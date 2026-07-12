import { caption, image, text } from "framer-motion/client"
import FisikaSgbSikapImg from "/src/assets/Materi/HakikatIlmuFisika/FisikaSebagaiSikap1.jpg"
import PengertianSikapIlmiahImg from "/src/assets/Materi/HakikatIlmuFisika/FisikaSebagaiSikap2.jpg"
import diagramsikapImg from "/src/assets/Materi/HakikatIlmuFisika/FisikaSebagaiSikap3.jpg"
import sikapilmuanImg from "/src/assets/Materi/HakikatIlmuFisika/FisikaSebagaiSikap4.jpg"

const fisikasbgsikap = {
  title: "Fisika sebagai Sikap Ilmiah",
  slug: "fisika sebagai sikap ilmiah",
  description: "Memahami sikap ilmiah yang perlu dimiliki dalam mempelajari fisika dan melakukan penyelidikan ilmiah.",
  chapter: "🔬 Hakikat Ilmu Fisika & Metode Ilmiah",

  content: [

    {
      image: FisikaSgbSikapImg,
      caption: "Sikap ilmiah membantu kita mengambil keputusan berdasarkan bukti, bukan sekadar dugaan.",
      body: [
        "Bayangkan dua orang melakukan percobaan.",
        "",
        "Orang pertama langsung menyimpulkan hasilnya tanpa mengukur.",
        "",
        "Orang kedua mengamati dengan teliti, mencatat data, lalu menarik kesimpulan berdasarkan bukti.",
        "",
        "Siapa yang lebih bersikap ilmiah?"
      ]
    },

    {
      heading: "🧠 Apa Itu Sikap Ilmiah?",
      caption: "Perbandingan dua cara berpikir",
      image: PengertianSikapIlmiahImg,
      body: [
        "Sikap ilmiah adalah cara berpikir dan bertindak yang mendukung proses memperoleh pengetahuan secara objektif.",
        "",
        "Sikap ini tidak secara esklusif hanya untuk para ilmuwan atau profesor yang bekerja di dalam laboratorium canggih saja.",
        "",
        "Sikap ilmiah sebenarnya sangat berguna dan bisa kita terapkan dalam kehidupan sehari-hari demi menyaring informasi dan mengambil keputusan yang bijak."
      ]
    },

    {
      heading: "🌟 Mengapa Sikap Ilmiah Penting?",
      image: diagramsikapImg,
      caption: "Diagram sikap ilmiah",
      body: [
        "Di era derasnya arus informasi seperti sekarang, memiliki sikap ilmiah bertindak sebagai 'filter' mental kita.",
        "",
        "Dengan menanamkan sikap ilmiah, kita dapat:",
        "",
      ],
      list: {
        type: "unordered",
        items: [
          {
            text: "Mengambil keputusan berdasarkan bukti: Tidak mudah termakan omongan tanpa dasar nyata.",
          },
          {
            text: "Menghindari kesimpulan yang terburu-buru: Selalu meluangkan waktu untuk memverifikasi kebenaran."
          },
          {
            text: "Menghargai fakta dan data: Berani bersandar pada kebenaran objektif meskipun terkadang tidak sesuai keinginan kita."
          },
          {
            text: "Bersikap terbuka terhadap informasi baru: Siap menerima perubahan jika ada bukti baru yang lebih valid."
          }
        ]
      }
    },

    {
      heading: "🔍 Sikap-Sikap Ilmiah",
      caption: "Sikap-sikap ilmiah",
      image: sikapilmuanImg,
      body: [
        "Untuk menjadi pribadi yang ilmiah, berikut adalah beberapa pilar sikap yang perlu kita asah:",
        "",
      ],
      list: {
        type: "ordered",
        items: [
          {
            text: "🤔 Rasa Ingin Tahu",
            description: "Selalu penasaran dengan cara kerja alam semesta. Mengapa langit biru? Mengapa apel jatuh ke bawah?"
          },
          {
            text: "📏 Telit",
            description: "Cermat dalam mengamati dan tidak ceroboh saat melakukan pengukuran atau analisis."
          },
                    {
            text: "⚖️ Jujur Terhadap Data",
            description: "Mencatat apa adanya hasil pengamatan tanpa memanipulasi atau mengubah data agar terlihat 'sempurna' atau sesuai hipotesis awal."
          },
                    {
            text: "🧩 Berpikir Kritis:",
            description: "Tidak langsung menelan mentah-mentah sebuah informasi, melainkan mempertanyakan kevalidan dan logikanya."
          },
                    {
            text: "🤝 Terbuka (Open-Minded)",
            description: "Menghargai pendapat atau kritik dari orang lain, selama argumen tersebut didukung oleh bukti kuat."
          },
                    {
            text: "💪 Tekun",
            description: "Tidak mudah menyerah ketika eksperimen gagal, melainkan terus mencari tahu letak kesalahannya."
          },
          {
            text: "🎯 Bertanggung Jawab",
            description: "Siap mempertanggungjawabkan hasil temuan serta proses penelitian yang telah dilakukan."
          }
        ]
      }
    },

    {
      heading: "🌍 Contoh dalam Kehidupan",
      list : {
        type: "ordered",
        items: [
          {
            text: "Saat Berselancar di Internet (Life Skill)",
            description : [
              "Misalnya saat kamu membaca berita viral atau info heboh di media sosial. Seseorang yang memiliki sikap ilmiah tidak akan langsung percaya dan langsung membagikannya (share).",
              "",
              "Ia akan bertindak kritis terlebih dahulu:",
            ],
            children:{
              type: "unordered",
              items:[
                "memeriksa dari mana sumber informasinya,",
                "mencari tahu apakah ada bukti pendukung dari sumber tepercaya, dan",
                "membandingkannya dengan fakta lain sebelum menyimpulkan berita itu hoax atau bukan."
              ]
            }
          },
          {
            text: "Saat Praktikum di Laboratorium Sekolah",
            description: [
              "Ketika jam praktikum fisika, sikap ilmiah ditunjukkan dengan kedisiplinan tingkat tinggi.",
              "",
              "Kamu mencatat angka hasil ukur apa adanya (misal jika hasilnya 4,9 cm ya ditulis 4,9 cm, bukan dibulatkan paksa menjadi 5,0 cm hanya demi terlihat pas sesuai rumus).",
              "",
              "Kamu juga mengikuti prosedur keselamatan dan tidak memanipulasi data praktikum kelompokmu."
            ]
          },
        ],
      }
    },

    {
      heading: "💡 Tahukah Kamu?",
      body: [
        "Banyak penemuan besar sains yang mengubah dunia justru tidak berawal dari formula rumit nan megah, melainkan dari rasa ingin tahu terhadap hal-hal sederhana di sekitar kita yang sering dilewatkan orang lain.",
        "",
        "Contohnya, Sir Isaac Newton yang penasaran dengan jatuhnya buah apel hingga akhirnya merumuskan Teori Gravitasi Universal!"
      ]
    },

    {
      heading: "⚠️ Miskonsepsi",
      body: [
        "'Berarti kalau bersikap ilmiah, kita harus jadi orang skeptis yang meragukan segala hal di dunia ini dong?' ❌",
        "",
        "Gak, gitu! Sikap ilmiah bukan berarti selalu meragukan semua hal tanpa akhir. Sikap ilmiah berarti kita bersedia menerima atau menolak suatu pendapat secara rasional berdasarkan bukti yang dapat dipertanggungjawabkan secara nyata."
      ]
    },

    {
      heading: "📊 Ringkasan Konsep",
      body: [
        "Rasa Ingin Tahu",
        "⬇️",
        "Pengamatan",
        "⬇️",
        "Data",
        "⬇️",
        "Analisis",
        "⬇️",
        "Kesimpulan yang Objektif"
      ]
    },

    {
      heading: "✨ Inti Materi (Takeaway Message)",
      body: [
        "Sikap ilmiah merupakan fondasi paling mendasar dalam mempelajari ilmu fisika maupun saat melakukan penelitian sains lainnya.",
        "",
        "Dengan mempraktikkan sikap jujur, teliti, kritis, dan terbuka terhadap kebenaran bukti, kita tidak hanya mampu memperoleh pengetahuan yang lebih dapat dipercaya, tetapi juga melatih diri menjadi individu yang bijak dalam berpikir sehari-hari."
      ]
    },

    {
      heading: "🎯 Quick Check",
      quickCheck: {
        questions: [
          {
            question: "Yang dimaksud sikap ilmiah adalah....",
            options: [
              "Kemampuan menghafal rumus-rumus fisika.",
              "Cara berpikir dan bertindak yang mendukung proses memperoleh pengetahuan secara objektif.",
              "Kemampuan menyelesaikan soal fisika dengan cepat.",
              "Sikap untuk selalu membenarkan pendapat sendiri.",
              "Keterampilan menggunakan alat laboratorium."
            ],
            answerIndex: 1,
          },
          {
            question:
              "Manakah yang merupakan contoh sikap ilmiah?",
            options: [
              "Mengubah data agar sesuai dengan hipotesis.",
              "Menarik kesimpulan tanpa melakukan pengamatan.",
              "Jujur mencatat hasil pengamatan meskipun tidak sesuai harapan.",
              "Menolak semua pendapat orang lain.",
              "Menyalin hasil percobaan kelompok lain."
            ],
            answerIndex: 2,
          },
          {
            question: "Mengapa sikap ilmiah penting dalam kehidupan sehari-hari?",
            options: [
              "Agar semua pendapat kita selalu benar.",
              "Agar dapat mengambil keputusan berdasarkan bukti dan fakta.",
              "Agar tidak perlu melakukan pengamatan.",
              "Agar hasil percobaan selalu sesuai harapan.",
              "Agar lebih mudah menghafal rumus fisika."
            ],
            answerIndex: 1,
          },
          {
            question: "Saat membaca berita di internet, seseorang yang memiliki sikap ilmiah akan....",
            options: [
              "Langsung mempercayai isi berita.",
              "Membagikan berita tanpa memeriksa kebenarannya.",
              "Memeriksa sumber informasi dan mencari bukti pendukung sebelum menyimpulkan.",
              "Memilih berita yang sesuai dengan pendapatnya saja.",
              "Mengabaikan semua informasi yang dibaca."
            ],
            answerIndex: 2,
          },
          {
            question:
              "Pernyataan yang benar mengenai sikap ilmiah adalah....",
            options: [
              "Sikap ilmiah berarti selalu meragukan semua informasi.",
              "Sikap ilmiah hanya diperlukan oleh ilmuwan di laboratorium.",
              "Sikap ilmiah berarti menerima atau menolak suatu pendapat berdasarkan bukti yang dapat dipertanggungjawabkan.",
              "Sikap ilmiah bertujuan membuktikan bahwa pendapat kita selalu benar.",
              "Sikap ilmiah hanya digunakan saat melakukan praktikum."
            ],
            answerIndex: 2,
          },
        ],
        scoring: [
          {
            min: 5,
            max: 5,
            emoji: "🏆",
            title: "Mission Complete!",
            message: "Kamu siap memasuki portal berikutnya.",
          },
          {
            min: 4,
            max: 4,
            emoji: "🚀",
            title: "Hampir Sempurna",
            message: "Pemahamanmu sudah sangat baik.",
          },
          {
            min: 2,
            max: 3,
            emoji: "🔄",
            title: "Perlu Sedikit Lagi",
            message: "Coba eksplorasi lagi bagian inti materi.",
          },
          {
            min: 0,
            max: 1,
            emoji: "📖",
            title: "Ulangi Petualangan",
            message: "Tenang, ulangi petualanganmu dari awal.",
          },
        ],
      },
    },

    {
      caption: "🚀 KLIK GAMBAR INI! Kamu bisa menuju ke portal berikutnya.",
      link: "/materi/ruang-lingkup-fisika",
      body: [
        "Apakah kamu memahami apa itu sikap ilmiah sebagai salah satu pilar hakikat fisika?",
        "",
        "Namun, setelah memiliki sikap ini, apa saja sih kapling atau bidang luas yang dipelajari di dalam fisika?",
        "",
        "➡️ Next, kita menuju portal: Ruang Lingkup Fisika."
      ]
    },

    {
      heading: "Referensi:",
      body: [
        "Halliday, Resnick & Walker. Fundamentals of Physics.",
        "Serway & Jewett. Physics for Scientists and Engineers.",
        "Young & Freedman. University Physics with Modern Physics.",
        "Kemendikbudristek RI. Buku Fisika SMA/MA."
      ]
    }

  ]
}

export default fisikasbgsikap