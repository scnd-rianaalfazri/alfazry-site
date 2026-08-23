const planetDanSatelit = {
  title: "Planet dan Satelit: Gravitasi sebagai Gaya Sentripetal",
  slug: "planet-dan-satelit",
  description: "Menganalisis bagaimana gaya gravitasi dapat menjadi penyedia gaya sentripetal yang menjaga planet dan satelit tetap berada pada orbitnya.",
  chapter: "🌀 Dinamika Gerak Melingkar",

  content: [
    {
      heading: "🪐 Mengapa Planet Tidak Terbang Lurus?",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Bumi bergerak mengelilingi Matahari dengan kecepatan yang sangat besar. Namun, Bumi tidak terbang lurus meninggalkan Tata Surya.",
            "Bulan juga terus bergerak mengelilingi Bumi tanpa terlepas begitu saja ke luar angkasa.",
            "Apa yang membuat benda-benda langit tersebut tetap berada pada orbitnya?"
          ]
        }
      ]
    },
    {
      heading: "❓ Pertanyaan Besar",
      blocks: [
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "Bagaimana gaya gravitasi dapat menjaga planet dan satelit tetap bergerak pada lintasan orbit?"
              },
              {
                text: "Apakah gravitasi dapat berperan sebagai gaya sentripetal?"
              }
            ]
          }
        }
      ]
    },
    {
      heading: "🧭 Identifikasi Gaya",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Untuk menyederhanakan model, bayangkan sebuah planet mengorbit bintangnya dalam lintasan hampir melingkar.",
            "Gaya utama yang dianalisis adalah gaya gravitasi antara planet dan bintang.",
            "Gaya gravitasi selalu menarik planet menuju bintang. Arah tersebut sama dengan arah menuju pusat orbit."
          ]
        }
      ]
    },
    {
      heading: "🎨 Visualisasi Konsep",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Bayangkan sebuah planet bergerak mengelilingi sebuah bintang.",
            "Tampilkan:"
          ]
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "Bintang sebagai pusat orbit."
              },
              {
                text: "Planet pada salah satu titik orbit."
              },
              {
                text: "Kecepatan planet yang menyinggung lintasan."
              },
              {
                text: "Gaya gravitasi yang mengarah menuju bintang."
              }
            ]
          }
        },
        {
          type: "paragraph",
          text: "Dengan demikian, arah gravitasi berimpit dengan arah gaya sentripetal."
        }
      ]
    },
    {
      heading: "📌 Strategi Penyelesaian",
      blocks: [
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "Tentukan benda yang sedang mengorbit."
              },
              {
                text: "Tentukan pusat orbit."
              },
              {
                text: "Identifikasi gaya gravitasi."
              },
              {
                text: "Tentukan arah radial menuju pusat."
              },
              {
                text: "Hubungkan gaya gravitasi dengan kebutuhan gaya sentripetal."
              },
              {
                text: "Gunakan Hukum Newton untuk menganalisis geraknya."
              }
            ]
          }
        }
      ]
    },
    {
      heading: "📝 Free Body Diagram",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Pada model sederhana planet yang mengorbit bintang, gaya utama yang dianalisis adalah gaya gravitasi.",
            "Arah gaya gravitasi menuju pusat orbit.",
            "Karena itu, gaya gravitasi menjadi penyedia gaya sentripetal."
          ]
        }
      ]
    },
    {
      heading: "⚖️ Analisis Resultan Gaya",
      blocks: [

        {
          type: "paragraph",
          text: "Menurut Hukum Newton II, resultan gaya menuju pusat harus menghasilkan percepatan sentripetal."
        },
        {
          type: "equation",
          equation: [
            "F_g = F_c",
            "\\frac{GMm}{r^2}=\\frac{mv^2}{r}"
          ]
        },
        {
          type: "paragraph",
          text: "Massa planet dapat disederhanakan dari kedua ruas sehingga diperoleh hubungan antara kelajuan orbit dan jarak planet dari pusat orbit."
        },
        {
          type: "equation",
          equation: "v=\\sqrt{\\frac{GM}{r}}"
        }
      ]
    },
    {
      heading: "🔭 Apa yang Terjadi Jika Orbit Lebih Jauh?",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Dari hubungan kelajuan orbit, kita dapat melihat bahwa benda yang berada pada orbit yang lebih jauh dari pusat gravitasi memiliki kelajuan orbit yang lebih kecil dalam model orbit melingkar.",
            "Jadi, semakin jauh sebuah satelit dari pusat Bumi, kelajuan orbit melingkarnya tidak harus semakin besar."
          ]
        }
      ]
    },
    {
      heading: "🧪 Contoh Soal",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Sebuah satelit bergerak mengelilingi Bumi pada orbit yang dianggap melingkar.",
            "Gaya yang menjaga satelit tetap mengorbit adalah gaya gravitasi Bumi.",
            "Dengan demikian:"
          ]
        },
        {
          type: "equation",
          equation: "F_g=F_c"
        },
        {
          type: "paragraph",
          text: "Artinya, kita tidak perlu menambahkan gaya sentripetal sebagai gaya baru pada Free Body Diagram. Gaya gravitasi itulah yang menyediakan resultan gaya menuju pusat orbit."
        }
      ]
    },
    {
      heading: "🌍 Contoh dalam Kehidupan",
      blocks: [
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "🌎 Bumi mengorbit Matahari."
              },
              {
                text: "🌙 Bulan mengorbit Bumi."
              },
              {
                text: "🛰️ Satelit buatan mengorbit Bumi."
              },
              {
                text: "🪐 Planet-planet mengorbit Matahari."
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
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "Miskonsepsi 1",
                description: [
                  "Satelit tetap mengorbit karena ada gaya sentripetal yang berbeda dari gravitasi. ❌",
                  "Gak, gitu!",
                  "Dalam model orbit melingkar sederhana, gaya gravitasi merupakan gaya yang menyediakan gaya sentripetal. ✔️"
                ]
              },
              {
                text: "Miskonsepsi 2",
                description: [
                  "Planet mengorbit karena ada gaya yang mendorongnya terus ke depan. ❌",
                  "Gak, gitu!",
                  "Gerak tangensial planet merupakan bagian dari keadaan geraknya, sementara gravitasi terus membelokkan arah kecepatannya menuju pusat. ✔️"
                ]
              },
              {
                text: "Miskonsepsi 3",
                description: [
                  "Jika gravitasi tiba-tiba hilang, planet akan tetap mengorbit. ❌",
                  "Gak, gitu!",
                  "Tanpa gaya gravitasi, tidak ada gaya yang membelokkan lintasan. Dalam model sederhana, benda akan melanjutkan gerak mendekati garis lurus sepanjang arah tangennya. ✔️"
                ]
              }
            ]
          }
        }
      ]
    },

    {
      heading: "🌟* Fun Fact*",
      blocks: [
        {
          type: "paragraph",
          text: "Bulan sebenarnya terus 'jatuh' menuju Bumi karena gravitasi. Namun, karena Bulan juga memiliki kecepatan tangensial, permukaan Bumi terus melengkung menjauh di bawah lintasannya sehingga Bulan tetap berada dalam orbit."
        }
      ]
    },

    {
      heading: "✨ Inti Materi",
      blocks: [
        {
          type: "paragraph",
          text: "Pada orbit melingkar sederhana, gaya gravitasi dapat menjadi penyedia gaya sentripetal. Gravitasi terus menarik benda menuju pusat sehingga arah kecepatannya berubah dan benda tetap mengikuti lintasan orbit."
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
                question: "Gaya yang menjaga planet tetap berada pada orbitnya mengelilingi Matahari adalah....",
                options: [
                  "resultan gaya yang arahnya menuju pusat lintasan",
                  "gaya normal saja",
                  "gaya tambahan yang selalu bekerja ke pusat",
                  "gaya gravitasi saja",
                  "gaya yang arahnya menjauhi pusat lintasan"
                ],
                answerIndex: 0
              },
              {
                question: "Di bagian bawah lintasan loop, arah pusat lingkaran berada....",
                options: [
                  "di bawah kereta",
                  "di atas kereta",
                  "di sebelah kiri kereta",
                  "di sebelah kanan kereta",
                  "berlawanan dengan arah gerak kereta"
                ],
                answerIndex: 1
              },
              {
                question: "Sebuah roller coaster bermassa 500 kg bergerak dengan kelajuan 10 m/s pada bagian bawah lintasan berjari-jari 20 m. Jika $g=10 m/s^2$, besar gaya normal pada kereta adalah....",
                options: [
                  "2.500 N",
                  "5.000 N",
                  "7.500 N",
                  "10.000 N",
                  "12.500 N"
                ],
                answerIndex: 2
              },
              {
                question: "Mengapa gaya normal di bagian bawah loop dapat lebih besar daripada gaya berat?",
                options: [
                  "Karena massa kereta bertambah saat bergerak melingkar.",
                  "Karena gaya gravitasi berubah arah menjadi ke atas.",
                  "Karena diperlukan resultan gaya menuju pusat.",
                  "Karena gaya sentripetal merupakan gaya tambahan yang bekerja pada kereta.",
                  "Karena gaya gravitasi tidak bekerja di bagian bawah loop."
                ],
                answerIndex: 2
              },
              {
                question: "Di bagian atas loop, gaya berat kereta mengarah....",
                options: [
                  "menjauhi pusat lintasan",
                  "tegak lurus terhadap pusat lintasan",
                  "berlawanan dengan arah gaya normal dalam semua kondisi",
                  "sejajar dengan arah gerak kereta",
                  "menuju pusat lintasan"
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
          text: [
            "Sekarang kita telah melihat empat situasi berbeda: gaya gesek pada mobil, tegangan tali, gaya normal dan gravitasi pada roller coaster, serta gravitasi pada orbit.",
            "Ternyata satu pola yang sama dapat menjelaskan semuanya: selalu ada resultan gaya menuju pusat.",
            "Selanjutnya, kita akan membawa semua konsep ini keluar dari soal dan melihat bagaimana dinamika gerak melingkar bekerja dalam teknologi dan kehidupan nyata."
          ]
        }
      ]
    }
  ]
};

export default planetDanSatelit;