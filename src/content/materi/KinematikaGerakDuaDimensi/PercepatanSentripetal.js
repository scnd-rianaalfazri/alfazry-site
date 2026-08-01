const percepatanSentripetal = {
  title: "Percepatan Sentripetal",
  slug: "percepatan-sentripetal",
  description: "Memahami mengapa benda yang bergerak melingkar tetap mengalami percepatan meskipun kelajuannya konstan, serta cara menghitungnya.",
  chapter: "🏀 Kinematika: Gerak Dua Dimensi",

  content: [
    { blocks: [
        {
          type: "paragraph",
          text: [
            "Pernahkah kamu menaiki komidi putar atau kendaraan yang berbelok mulus dengan kecepatan speedometer yang stabil?",
            "Meskipun jarum speedometer menunjukkan angka yang konstan, secara fisika tubuhmu sebenarnya sedang mengalami percepatan!",
            "Mengapa hal itu bisa terjadi? Mari kita usut alasannya."
          ]
        }
      ]
    },
    {
      heading: "❓ Pertanyaan Besar",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Jika angka pada speedometer tidak berubah, mengapa benda yang bergerak melingkar tetap dikatakan mengalami percepatan?",
            "Ke arah manakah vektor percepatan tersebut mengarah?"
          ]
        }
      ]
    },
    {
      heading: "🚀 Rahasia Vektor Kecepatan",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Ingat kembali bahwa kecepatan adalah besaran vektor yang memiliki dua komponen: besar (kelajuan) dan arah."
          ]
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "besar (kelajuan)"
              },
              {
                text: "arah"
              }
            ]
          }
        },
        {
          type: "paragraph",
          text: [
            "Percepatan didefinisikan sebagai perubahan kecepatan terhadap waktu.",
            "Pada gerak melingkar beraturan, nilai besar kecepatannya memang tetap, tetapi arah kecepatannya terus berubah setiap milidetik menyinggung lintasan.",
            "Karena arahnya terus berubah, maka nilai perubahan kecepatannya tidak nol. Inilah mengapa timbul percepatan!"
          ]
        }
      ]
    },
    {
      heading: "🎯 Apa itu Percepatan Sentripetal?",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Percepatan yang bertugas khusus untuk mengubah arah kecepatan (bukan besarnya) dan selalu mengarah ke pusat lingkaran disebut percepatan sentripetal.",
            "Istilah 'sentripetal' berasal dari bahasa Latin: *centrum* (pusat) dan *petere* (menuju/mencari), yang berarti 'mencari pusat'."
          ]
        },
        {
          type: "equation",
          equation: "a_c = \\frac{v^2}{r}"
        },
        {
          type: "paragraph",
          text: [
            "Persamaan di atas menunjukkan bahwa nilai percepatan sentripetal $(a_c)$ bertambah besar jika kelajuan linear $(v)$ makin tinggi atau radius lintasan $(r)$ makin sempit."
          ]
        }
      ]
    },
    {
      heading: "🌀 Hubungan dengan Kecepatan Sudut",
      blocks: [

        
        {
          type: "paragraph",
          text: [
            "Jika kamu lebih sering menggunakan kecepatan sudut $(\\omega)$ daripada kecepatan linear $(v)$, kita bisa menyubstitusikan persamaan $v = \\omega r$ ke dalam rumus utama.",
            "Sehingga diperoleh bentuk persamaan alternatif:"
          ]
        },
        {
          type: "equation",
          equation: "a_c = \\omega^2 r"
        },
        {
          type: "paragraph",
          text: [
            "Kedua formula ini memberikan hasil yang identik, tinggal disesuaikan dengan variabel yang diketahui pada kasus yang kamu hadapi."
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
            "**Soal**",
            "Sebuah mobil melaju dengan kelajuan konstan 20 m/s saat melintasi tikungan bundaran berjari-jari 50 m.",
            "Besar percepatan sentripetal yang dialami mobil dapat dihitung sebagai berikut:"
          ]
        },
        {
          type: "equation",
          equation: "a_c = \\frac{20^2}{50} = \\frac{400}{50} = 8 \\text{ m/s}^2"
        },
        {
          type: "paragraph",
          text: [
            "Artinya, meskipun kelajuannya tidak bertambah, mobil tersebut terus mengalami percepatan sebesar $8 m/s^2$ yang selalu mengarah ke titik pusat bundaran."
          ]
        }
      ]
    },
    {
      heading: "⚠️ Miskonsepsi Populer",
      blocks: [
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "Miskonsepsi 1",
                description: [
                  "Jika kelajuan konstan, maka percepatan pasti sama dengan nol. ❌",
                  "Gak, gitu",
                  "Faktanya, percepatan nol hanya berlaku jika besar DAN arah kecepatan tidak berubah (gerak lurus beraturan). ✔️"
                ]
              },
              {
                text: "Miskonsepsi 2",
                description: [
                    "Percepatan sentripetal arahnya searah dengan laju kendaraan. ❌",
                    "Gak, gitu",
                    "Faktanya, arah percepatan sentripetal tegak lurus terhadap arah kecepatan linear—yaitu selalu mengarah ke pusat lingkaran. ✔️"
                ]
              }
            ]
          }
        }
      ]
    },
    {
      heading: "🌟 *Fun Fact*",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Para pembalap Formula 1 harus melatih otot leher mereka secara ekstrim! Saat melibas tikungan tajam pada kecepatan tinggi, mereka mengalami percepatan sentripetal hingga 5G hingga 6G (5–6 kali percepatan gravitasi bumi), yang membuat kepala terasa 5 kali lebih berat ke arah luar lintasan."
          ]
        }
      ]
    },
    {
      heading: "✨ Inti Materi *(Takeaway Message)*",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Benda yang bergerak melingkar selalu mengalami percepatan sentripetal akibat perubahan arah kecepatan linearnya.",
            "Vektor percepatan sentripetal selalu tegak lurus terhadap kecepatan linear dan konsisten mengarah ke pusat lintasan melingkar."
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
              question: "Mengapa benda yang bergerak melingkar beraturan tetap mengalami percepatan meskipun kelajuannya konstan?",
              options: [
                "Karena massanya terus bertambah.",
                "Karena arah kecepatannya terus berubah.",
                "Karena jari-jari lintasannya selalu berubah.",
                "Karena gaya gravitasi selalu bertambah besar.",
                "Karena kecepatan linearnya bernilai nol."
              ],
              answerIndex: 1
            },
            {
              question: "Arah percepatan sentripetal pada gerak melingkar selalu....",
              options: [
                "searah dengan kecepatan linear.",
                "menjauhi pusat lingkaran.",
                "menuju pusat lingkaran.",
                "sejajar dengan lintasan lingkaran.",
                "berlawanan arah dengan gaya gravitasi."
              ],
              answerIndex: 2
            },
            {
              question: "Sebuah mobil melaju dengan kelajuan 20 m/s pada tikungan berjari-jari 50 m. Besar percepatan sentripetal mobil tersebut adalah....",
              options: [
                "$\\text{4 m/s}^².",
                "$\\text{6 m/s}^².",
                "$\\text{8 m/s}^².",
                "$\\text{10 m/s}^².",
                "$\\text{20 m/s}^².",
              ],
              answerIndex: 2
            },
            {
              question: "Jika sebuah benda bergerak melingkar dengan kecepatan sudut $\\omega$, maka persamaan percepatan sentripetal yang benar adalah....",
              options: [
                "$a_c = \\omega r$",
                "$a_c = \\frac{\\omega}{r}$",
                "$a_c = \\omega^2 r$",
                "$a_c = \\frac{r}{\\omega}",
                "$a_c= \\frac{\\omega^2}{r}"
              ],
              answerIndex: 2
            },
            {
              question: "Pernyataan yang benar mengenai percepatan sentripetal adalah....",
              options: [
                "percepatan sentripetal memperbesar kelajuan benda setiap saat.",
                "percepatan sentripetal selalu searah dengan kecepatan linear.",
                "percepatan sentripetal hanya muncul jika kelajuan berubah.",
                "percepatan sentripetal berfungsi mengubah arah kecepatan sehingga benda tetap bergerak pada lintasan melingkar.",
                "percepatan sentripetal selalu bernilai nol pada Gerak Melingkar Beraturan."
                ],
              answerIndex: 3
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
    { blocks: [
        {
          type: "paragraph",
          text: [
            "Pada misi berikutnya, kita akan mengeksplorasi berbagai penerapan gerak melingkar dalam kehidupan sehari-hari, teknologi modern, hingga eksplorasi antariksa.",
            "➡️ *Next*, kita menuju portal: [Penerapan Gerak Parabola dalam Kehidupan dan Teknologi](/materi/penerapan-gerak-parabola-dalam-kehidupan-dan-teknologi)"
          ]
        }
      ]
    }
  ]
};

export default percepatanSentripetal;

