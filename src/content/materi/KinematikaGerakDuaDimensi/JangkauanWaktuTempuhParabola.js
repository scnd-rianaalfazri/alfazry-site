const jangkauanDanWaktuTempuh = {
  title: "Jangkauan Maksimum dan Waktu Tempuh Gerak Parabola",
  slug: "jangkauan-maksimum-dan-waktu-tempuh-gerak-parabola",
  description: "Menganalisis jarak horizontal yang dapat dicapai benda dan waktu yang dibutuhkan benda selama bergerak dalam lintasan parabola secara mendalam.",
  chapter: "🏀 Kinematika: Gerak Dua Dimensi",

  content: [
    {
      heading: "🎯 Seberapa Jauh Benda Bisa Terbang?",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Bayangkan kamu menendang bola ke depan dengan sudut tertentu. Bola akan bergerak melengkung naik, mencapai titik tertinggi, lalu meluncur turun hingga kembali menyentuh tanah.",
            "Saat mengamati lintasan tersebut, dua pertanyaan utama yang sering muncul adalah:"
          ]
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "⏱️ **Berapa lama** bola melayang di udara?"
              },
              {
                text: "📏 **Seberapa jauh** jarak mendatar dari titik awal hingga bola mendarat?"
              }
            ]
          }
        },
        {
          type: "paragraph",
          text: [
            "Dua besaran ini—**Waktu Tempuh ($T$)** dan **Jangkauan Maksimum ($R$)**—merupakan kunci utama dalam menguasai analisis gerak dua dimensi."
          ]
        }
      ]
    },
    {
      heading: "❓ Pertanyaan Utama",
      blocks: [
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "Bagaimana cara menghitung total waktu benda berada di udara dari kecepatan awal dan sudut lemparan?"
              },
              {
                text: "Bagaimana memprediksi jarak horizontal total yang dicapai oleh benda?"
              },
              {
                text: "Berapa sudut peluncuran optimal agar jangkauan horizontal menjadi sejauh mungkin?"
              }
            ]
          }
        }
      ]
    },
    {
      heading: "⏱️ Waktu Tempuh Total (Total Time of Flight)",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Waktu tempuh total $(T)$ adalah durasi dari saat benda mulai dilemparkan hingga menyentuh dasar kembali pada ketinggian yang sama $(y = 0)$.",
            "Karena sifat simetri gerak parabola (tanpa gesekan udara):"
          ]
        },
        {
          type: "equation",
          equation: "t_{\\text{puncak}} = \\frac{v_0 \\sin\\theta}{g}"
        },
        {
          type: "paragraph",
          text: [
            "Waktu total di udara ($T$) adalah dua kali waktu untuk mencapai puncak ($t_{\\text{puncak}}$):"
          ]
        },
        {
          type: "equation",
          equation: "T = 2 \\times t_{\\text{puncak}} = \\frac{2 v_0 \\sin\\theta}{g}"
        },
        {
          type: "paragraph",
          text: "Keterangan Variabel:"
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "$T$ = Waktu total di udara $(\\text{s})$"
              },
              {
                text: "$v_0$ = Kecepatan awal $(\\text{m/s})$"
              },
              {
                text: "$\\theta$ = Sudut elevasi terhadap sumbu horizontal"
              },
              {
                text: "$g$ = Percepatan gravitasi $(\\text{m/s}^2)$"
              }
            ]
          }
        }
      ]
    },
    {
      heading: "📏 Jangkauan Horizontal *(Range)*",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Jangkauan mendatar ($R$ atau $X_{\\text{maks}}$) didefinisikan sebagai total jarak horizontal dari titik asal peluncuran ke lokasi pendaratan.",
            "Karena sumbu horizontal tidak mengalami percepatan ($a_x = 0$, Gerak Lurus Beraturan), jarak horizontal dirumuskan sebagai:"
          ]
        },
        {
          type: "equation",
          equation: "R = v_x \\cdot T = (v_0 \\cos\\theta) \\cdot \\left(\\frac{2 v_0 \\sin\\theta}{g}\\right)"
        },
        {
          type: "paragraph",
          text: [
            "Dengan mengaplikasikan identitas trigonometri $2 \\sin\\theta \\cos\\theta = \\sin(2\\theta)$, kita mendapatkan rumus praktis jangkauan:"
          ]
        },
        {
          type: "equation",
          equation: "R = \\frac{v_0^2 \\sin(2\\theta)}{g}"
        }
      ]
    },
    {
      heading: "🎯 Analisis Sudut Maksimum & Sudut Komplementer",
      blocks: [
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "**Jangkauan Maksimum ($\\theta = 45^\\circ$)**\nNilai trigonometri $\\sin(2\\theta)$ memiliki nilai maksimum $1$ ketika $2\\theta = 90^\\circ$, sehingga $\\theta = 45^\\circ$. Oleh karena itu, pada kondisi ideal, sudut peluncuran $45^\\circ$ menghasilkan jangkauan paling jauh:" ,
                equation: "R_{\\text{maks}} = \\frac{v_0^2}{g}"
              },
              {
                text: "**Pasangan Sudut Komplementer**\nPasangan sudut peluncuran yang berjumlah $90^\\circ$ (seperti $30^\\circ$ dan $60^\\circ$, atau $15^\\circ$ dan $75^\\circ$) akan menghasilkan jangkauan horizontal yang **sama persis**, karena $\\sin(2 \\times 30^\\circ) = \\sin(120^\\circ) = \\sin(60^\\circ)$."
              }
            ]
          }
        }
      ]
    },
    {
      heading: "🏀 Contoh Aplikasi dalam Kehidupan",
      blocks: [
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "⚽ **Sepak Bola**: Kiper yang melakukan *goal kick* memperhitungkan sudut agar bola jatuh sejauh mungkin di wilayah lawan."
              },
              {
                text: "🎯 **Olahraga Lempar Lembing & Tolak Peluru**: Atlet menyesuaikan sudut lemparan mendekati sudut optimal untuk memaksimalkan jarak jangkauan."
              },
              {
                text: "💦 **Sistem Irigasi Air**: Pemadam kebakaran dan penyiram tanaman mengandalkan pengubahan sudut semprotan untuk memperluas jangkauan siraman."
              }
            ]
          }
        }
      ]
    },
    {
      heading: "⚠️ Miskonsepsi Umum",
      blocks: [
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "Miakonsepsi 1",
                description: [
                  "Semakin besar sudut peluncuran, semakin jauh bola mendarat. ❌",
                  "Gak, gitu!",
                  "Faktanya, makin besar sudut, makin tinggi lintasan dan lama di udara, tetapi jangkauan mendatarnya menyempit setelah melewati $45^\\circ$. ✔️"
                ]
              },
              {
                text: "Miskonsepsi 2",
                description: [
                  "Sudut $45^\\circ$ selalu menjadi sudut terbaik di semua keadaan nyata ❌",
                  "aktanya, di dunia nyata, gesekan udara dan titik pelepasan yang lebih tinggi dari tanah (misalnya lemparan atlet) menggeser sudut optimal menjadi sedikit lebih kecil dari $45^\\circ$ (sekitar $35^\\circ - 42^\\circ$). ✔️"
                ]
              }
            ]
          }
        }
      ]
    },
    {
      heading: "🧮 Latihan Soal & Pembahasan",
      blocks: [
        {
          type: "paragraph",
          text: [
            "**Contoh Soal 1**",
            "Sebuah bola ditendang dengan kecepatan awal $20\\text{ m/s}$ dan sudut elevasi $30^\\circ$. Jika percepatan gravitasi $g = 10\\text{ m/s}^2$.",
            "Tentukan!"
          ]
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "Waktu total bola melayang di udara $(T)$"
              },
              {
                text: "Jangkauan mendatar bola $(R)$"
              }
            ]
          }
        },
        {
          type: "paragraph",
          text: [
            "Diketahui:"
          ]
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "$v_0 = 20\\text{ m/s}$"
              },
              {
                text: "$\\theta = 30^\\circ$"
              },
              {
                text: "$g = 10\\text{ m/s}^2$"
              }
            ]
          }
        },
        {
          type: "paragraph",
          text: [
            "**Pembahasan**"
          ]
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "Menghitung Waktu Tempuh Total $(T)$:",
                equation: "T = \\frac{2 v_0 \\sin\\theta}{g} = \\frac{2 (20) \\sin(30^\\circ)}{10} = \\frac{40 \\times 0{,}5}{10} = 2\\text{ detik}"
              },
              {
                text: "Menghitung Jangkauan $(R)$:",
                equation: "R = \\frac{v_0^2 \\sin(2\\theta)}{g} = \\frac{20^2 \\cdot \\sin(60^\\circ)}{10} = \\frac{400 \\cdot \\frac{1}{2}\\sqrt{3}}{10} = 20\\sqrt{3}\\text{ meter} \\approx 34{,}64\\text{ m}"
              }
            ]
          }
        },
        {
          type: "paragraph",
          text: "---------------------------------------------------------------------------------------------------------------------------------------------------------"
        },
        {
          type: "paragraph",
          text: [
            "**Soal 2**"
          ]
        },
        {
          type: "paragraph",
          text: [
            "Dua buah peluru A dan B ditembakkan dengan kecepatan awal yang sama $v_0$. Peluru A ditembakkan dengan sudut $35^\\circ$, sedangkan peluru B dengan sudut $55^\\circ$. Bandingkan jangkauan horizontal kedua peluru tersebut!",,
            "**Pembahasan**"
          ]
        },
        {
          type: "paragraph",
          text: [
            "Kedua sudut merupakan pasangan sudut komplementer karena $35^\\circ + 55^\\circ = 90^\\circ$.\n",   
          ]
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "Untuk Peluru A:",
                equation: "\\sin(2 \\times 35^\\circ) = \\sin(70^\\circ)"
              },
              {
                text: "Untuk Peluru B:",
                equation: "\\sin(2 \\times 55^\\circ) = \\sin(110^\\circ) = \\sin(180^\\circ - 70^\\circ) = \\sin(70^\\circ)",
              }
            ]
          }
        },
        {
          type: "paragraph",
          text: [
            "Karena nilai $\\sin(2\\theta)$ bernilai sama, maka **Jangkauan Peluru A = Jangkauan Peluru B** $(R_A = R_B)$."
          ]
        }
      ]
    },
    {
      heading: "✨ Inti Materi *(Takeaway Message)*",
      blocks: [
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "**Waktu Melayang Total**:",
                equation: "T = \\frac{2v_0\\sin\\theta}{g}"
              },
              {
                text: "**Jangkauan Mendatar**",
                equation: "R = \\frac{v_0^2\\sin(2\\theta)}{g}"
              },
              {
                text: "**Sudut Maksimum Ideal**",
                description: "$\\theta = 45^\\circ$ menghasilkan jangkauan terjauh."
              },
              {
                text: "**Sudut Komplementer**",
                description: "Pasangan sudut yang jumlahnya $90^\\circ$ menghasilkan jangkauan sejauh yang sama."
              }
            ]
          }
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
              question: "Waktu tempuh total $(T)$ pada gerak parabola adalah.....",
              options: [
                "waktu yang dibutuhkan benda untuk mencapai titik tertinggi saja.",
                "waktu sejak benda dilempar hingga kembali menyentuh tanah pada ketinggian yang sama.",
                "waktu yang dibutuhkan benda bergerak secara horizontal.",
                "waktu yang dibutuhkan benda untuk berhenti bergerak.",
                "selisih waktu antara fase naik dan fase turun."
              ],
              answerIndex: 1
            },
            {
              question: "Sebuah bola ditendang dengan kecepatan awal $20 \\: m/s$ dan sudut elevasi \\: $30\\degree$. Jika percepatan gravitasi $10 \\: m/s^2$, maka waktu total bola berada di udara adalah....",
              options: [
                "1 detik",
                "2 detik",
                "3 detik",
                "4 detik",
                "5 detik."
              ],
              answerIndex: 1
            },
            {
              question: "Pada kondisi ideal (tanpa hambatan udara), sudut peluncuran yang menghasilkan jangkauan horizontal maksimum adalah....",
              options: [
                "30\\degree",
                "35\\degree",
                "45\\degree",
                "60\\degree",
                "90\\degree"
              ],
              answerIndex: 2
            },
            {
              question: "Dua benda ditembakkan dengan kecepatan awal yang sama. Benda A memiliki sudut peluncuran 30\\degree, sedangkan benda B 60°. Pernyataan yang benar adalah....",
              options: [
                "jangkauan A lebih jauh daripada B.",
                "jangkauan B lebih jauh daripada A.",
                "keduanya memiliki jangkauan horizontal yang sama.",
                "waktu tempuh keduanya sama persis.",
                "benda A memiliki tinggi maksimum yang lebih besar."
              ],
              answerIndex: 2
            },
            {
              question: "Pernyataan yang benar mengenai hubungan sudut peluncuran dan jangkauan horizontal adalah....",
              options: [
                "semakin besar sudut peluncuran, semakin jauh jangkauannya tanpa batas.",
                "sudut $90\\degree$ menghasilkan jangkauan paling jauh.",
                "setelah melewati sudut 45\\degree, jangkauan horizontal mulai berkurang pada kondisi ideal.",
                "semua sudut menghasilkan jangkauan yang sama jika kecepatan awalnya sama.",
                "sudut 0\\degree menghasilkan jangkauan maksimum."
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
      heading: "🚀 Next Mission",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Kamu telah berhasil menguasai seluruh persamaan dasar kinematika gerak parabola!",
            "Selanjutnya, mari kita telusuri bagaimana hukum-hukum ini bekerja pada aplikasi kehidupan nyata serta teknologi canggih masa kini.",
            "➡️ *Next*, kita menuju portal: Penerapan Gerak Parabola dalam Kehidupan dan Teknologi."
          ]
        }
      ]
    }
  ]
};

export default jangkauanDanWaktuTempuh;