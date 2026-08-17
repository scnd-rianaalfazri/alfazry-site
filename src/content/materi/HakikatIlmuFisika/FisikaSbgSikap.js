import img1 from "/src/assets/Materi/HakikatIlmuFisika/fisika-sebagai-sikap1.png"
import img2 from "/src/assets/Materi/HakikatIlmuFisika/fisika-sebagai-sikap2.png"
import img3 from "/src/assets/Materi/HakikatIlmuFisika/portal-ruang-lingkup-fisika.png"

const fisikaSebagaiSikap = {
  title: "Fisika sebagai Sikap",
  slug: "fisika-sebagai-sikap",
  description: "Memahami sikap ilmiah yang perlu dimiliki dalam mempelajari fisika dan melakukan penyelidikan ilmiah.",
  chapter: "🔬 Hakikat Ilmu Fisika & Metode Ilmiah",

  content: [
    {
    blocks: [
      {
        type: "image",
        src: img1
      },
      { type: "paragraph", 
        text: [
          "Bayangkan dua orang melakukan percobaan.",
          "Orang pertama langsung menyimpulkan hasilnya tanpa mengukur.",
          "Orang kedua mengamati dengan teliti, mencatat data, lalu menarik kesimpulan berdasarkan bukti.",
          "Siapa yang lebih bersikap ilmiah?"
          ]  
      }
    ]
  },
  { heading: "🧠 Apa Itu Sikap Ilmiah?", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Sikap ilmiah adalah cara berpikir dan bertindak yang mendukung proses memperoleh pengetahuan secara objektif.",
          "Sikap ini tidak secara esklusif hanya untuk para ilmuwan atau profesor yang bekerja di dalam laboratorium canggih saja.",
          "Sikap ilmiah sebenarnya sangat berguna dan bisa kita terapkan dalam kehidupan sehari-hari demi menyaring informasi dan mengambil keputusan yang bijak."
        ]
      }
    ]
  },
  { heading: "🌟 Mengapa Sikap Ilmiah Penting?", 
    blocks: [
      {
        type: "image",
        src: img2
      },
      {
        type: "paragraph",
        text: [
          "Di era derasnya arus informasi seperti sekarang, memiliki sikap ilmiah bertindak sebagai 'filter' mental kita.",
          "Dengan menanamkan sikap ilmiah, kita dapat:"
        ]
      },
      {
        type: "list",
        list: {
          type: "unordered",
          items: [
            {
              text: "Mengambil keputusan berdasarkan bukti",
              description: "Tidak mudah termakan omongan tanpa dasar nyata."
            },
            {
              text: "Menghindari kesimpulan yang terburu-buru",
              description: "Selalu meluangkan waktu untuk memverifikasi kebenaran."
            },
            {
              text: "Menghargai fakta dan data",
              description: "Berani bersandar pada kebenaran objektif meskipun terkadang tidak sesuai keinginan kita."
            },
            {
              text: "Bersikap terbuka terhadap informasi baru",
              description: "Siap menerima perubahan jika ada bukti baru yang lebih valid."
            }
          ]
        }
      }
    ]
  },
  { heading: "🔍 Sikap-Sikap Ilmiah", 
    blocks: [
      {
        type: "paragraph",
        text: "Untuk menjadi pribadi yang ilmiah, berikut adalah beberapa pilar sikap yang perlu kita asah:"
      },
      {
        type: "carousel",
        carousel: {
          cards: [
            {
              eyebrow: "FISIKA SEBAGAI SIKAP ILMIAH",
              title: "🤔 Rasa Ingin Tahu",
              text: "Punya rasa penasaran dengan cara kerja alam semesta.",
              description: [
                "Contoh:",
                "Saat melihat pelangi, kamu tidak hanya mengaguminya, tetapi mulai bertanya: mengapa cahaya Matahari bisa menghasilkan warna-warna tersebut?"
              ]
            },
            {
              eyebrow: "FISIKA SEBAGAI SIKAP ILMIAH",
              title: "📏 Teliti",
              text: "Cermat dalam mengamati dan tidak ceroboh saat melakukan pengukuran atau analisis.",
              description: [
                "Contoh:",
                "Saat mengukur panjang meja, kamu membaca skala alat ukur dengan posisi mata yang tepat dan mencatat hasil sesuai ketelitian alat."
              ]
            },
            {
              eyebrow: "FISIKA SEBAGAI SIKAP ILMIAH",
              title: "⚖️ Jujur Terhadap Data",
              text: "Mencatat apa adanya hasil pengamatan tanpa memanipulasi atau mengubah data agar terlihat 'sempurna' atau sesuai hipotesis awal.",
              description: [
                "Contoh:",
                "Jika hasil percobaan tidak sesuai prediksi, kamu tetap mencatat hasil tersebut dan mencari tahu kemungkinan penyebab perbedaannya."
              ]
            },
            {
              eyebrow: "FISIKA SEBAGAI SIKAP ILMIAH",
              title: "🧩 Berpikir Kritis",
              text: "Tidak langsung menelan mentah-mentah sebuah informasi, melainkan mempertanyakan kevalidan dan logikanya.",
              description: [
                "Contoh:",
                "Saat melihat video yang mengatakan bahwa sebuah benda dapat bergerak tanpa energi, kamu bertanya: apa buktinya, bagaimana percobaannya dilakukan, dan apakah klaim tersebut sesuai dengan hukum fisika?"
              ]
            },
            {
              eyebrow: "FISIKA SEBAGAI SIKAP ILMIAH",
              title: "🤝 Terbuka (Open-Minded)",
              text: "Menghargai pendapat atau kritik dari orang lain, selama argumen tersebut didukung oleh bukti kuat.",
              description: [
                "Contoh:",
                "Ketika teman menunjukkan bahwa kesimpulanmu kurang tepat berdasarkan data percobaan, kamu mau mempertimbangkan pendapat tersebut dan memeriksa kembali hasil pengamatan."
              ]
            },
            {
              eyebrow: "FISIKA SEBAGAI SIKAP ILMIAH",
              title: "💪 Tekun",
              text: "Tidak mudah menyerah ketika eksperimen gagal, melainkan terus mencari tahu letak kesalahannya.",
              description: [
                "Contoh:",
                "Jika percobaan gerak tidak menghasilkan data yang sesuai, kamu mencoba memeriksa kembali alat, prosedur, dan cara pengukuran sebelum mengulang percobaan."
              ]
            },
            {
              eyebrow: "FISIKA SEBAGAI SIKAP ILMIAH",
              title: "🎯 Bertanggung Jawab",
              text: "Siap mempertanggungjawabkan hasil temuan serta proses penelitian yang telah dilakukan.",
              description: [
                "Contoh:",
                "Saat mempresentasikan hasil percobaan, kamu menjelaskan bagaimana data diperoleh, menyebutkan keterbatasan percobaan, dan tidak mengklaim sesuatu yang tidak didukung oleh bukti."
              ]
            }
          ]
        }
      }
    ]
  },
  { heading: "🌍 Contoh dalam Kehidupan", 
    blocks: [
      {
        type: "list",
        list: {
          type: "ordered",
          items: [
            {
              text: "Saat Berselancar di Internet *(Life Skill)*",
              description: [
                "Misalnya saat kamu membaca berita viral atau info heboh di media sosial. Seseorang yang memiliki sikap ilmiah tidak akan langsung percaya dan langsung membagikannya (share).",
                "Ia akan bertindak kritis terlebih dahulu:"
              ],
              children: {
                type: "unordered",
                items: [
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
                "Kamu mencatat angka hasil ukur apa adanya (misal jika hasilnya 4,9 cm ya ditulis 4,9 cm, bukan dibulatkan paksa menjadi 5,0 cm hanya demi terlihat pas sesuai rumus).",
                "Kamu juga mengikuti prosedur keselamatan dan tidak memanipulasi data praktikum kelompokmu."
              ]
            }
          ]
        }
      }
    ]
  },
  { heading: "🌟 *Fun Fact*", 
    blocks: [
        {
          type: "paragraph",
          text: [
            "Banyak penemuan besar sains yang mengubah dunia justru tidak berawal dari formula rumit nan megah, melainkan dari rasa ingin tahu terhadap hal-hal sederhana di sekitar kita yang sering dilewatkan orang lain.",
            "Contohnya, Sir Isaac Newton yang penasaran dengan jatuhnya buah apel hingga akhirnya merumuskan Teori Gravitasi Universal!"
          ]
        }
      ]
    },
    { heading: "⚠️ Miskonsepsi", 
      blocks: [
        {
          type: "paragraph",
          text: [
            "*'Berarti kalau bersikap ilmiah, kita harus jadi orang skeptis yang meragukan segala hal di dunia ini dong?'* ❌",
            "Gak, gitu!",
            "Sikap ilmiah bukan berarti selalu meragukan semua hal tanpa akhir. Sikap ilmiah berarti kita bersedia menerima atau menolak suatu pendapat secara rasional berdasarkan bukti yang dapat dipertanggungjawabkan secara nyata."
          ]
        },
      ]
    },
    { heading: "✨ Inti Materi", 
      blocks: [
        {
          type: "paragraph",
          text: [
            "Sikap ilmiah merupakan fondasi paling mendasar dalam mempelajari ilmu fisika maupun saat melakukan penelitian sains lainnya.",
            "Dengan mempraktikkan sikap jujur, teliti, kritis, dan terbuka terhadap kebenaran bukti, kita tidak hanya mampu memperoleh pengetahuan yang lebih dapat dipercaya, tetapi juga melatih diri menjadi individu yang bijak dalam berpikir sehari-hari."
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
                question: "Yang dimaksud sikap ilmiah adalah....",
                options: [
                  "Kemampuan menghafal rumus-rumus fisika.",
                  "Cara berpikir dan bertindak yang mendukung proses memperoleh pengetahuan secara objektif.",
                  "Kemampuan menyelesaikan soal fisika dengan cepat.",
                  "Sikap untuk selalu membenarkan pendapat sendiri.",
                  "Keterampilan menggunakan alat laboratorium."
                ],
                answerIndex: 1
              },
              {
                question: "Manakah yang merupakan contoh sikap ilmiah?",
                options: [
                  "Mengubah data agar sesuai dengan hipotesis.",
                  "Menarik kesimpulan tanpa melakukan pengamatan.",
                  "Jujur mencatat hasil pengamatan meskipun tidak sesuai harapan.",
                  "Menolak semua pendapat orang lain.",
                  "Menyalin hasil percobaan kelompok lain."
                ],
                answerIndex: 2
              },
              {
                question:
                "Mengapa sikap ilmiah penting dalam kehidupan sehari-hari?",
                options: [
                  "Agar semua pendapat kita selalu benar.",
                  "Agar dapat mengambil keputusan berdasarkan bukti dan fakta.",
                  "Agar tidak perlu melakukan pengamatan.",
                  "Agar hasil percobaan selalu sesuai harapan.",
                  "Agar lebih mudah menghafal rumus fisika."
                ],
                answerIndex: 1
              },
              {
                question:
                "Saat membaca berita di internet, seseorang yang memiliki sikap ilmiah akan....",
                options: [
                  "Langsung mempercayai isi berita.",
                  "Membagikan berita tanpa memeriksa kebenarannya.",
                  "Memeriksa sumber informasi dan mencari bukti pendukung sebelum menyimpulkan.",
                  "Memilih berita yang sesuai dengan pendapatnya saja.",
                  "Mengabaikan semua informasi yang dibaca."
                ],
                answerIndex: 2
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
        }]
    },
    { blocks: [
        {
          type: "paragraph",
          text: [
            "Apakah kamu memahami apa itu sikap ilmiah sebagai salah satu pilar hakikat fisika?",
            "Namun, setelah memiliki sikap ini, apa saja sih kapling atau bidang luas yang dipelajari di dalam fisika?"
          ]
        },
        {
          type: "image",
          src: img3,
          caption: "🚀 Kamu bisa KLIK GAMBAR INI untuk menuju portal selanjutnya",
          link: "/materi/ruang-lingkup-fisika"
        }
      ]
    },
    { heading: "Referensi:", 
      blocks: [
        { type: "heading", 
          text: [
            "Referensi:",
            "Halliday, Resnick & Walker. Fundamentals of Physics.",
            "Serway & Jewett. Physics for Scientists and Engineers.",
            "Young & Freedman. University Physics with Modern Physics.",
            "Kemendikbudristek RI. Buku Fisika SMA/MA."
          ]
        }
      ]
    }
  ]
};

export default fisikaSebagaiSikap;