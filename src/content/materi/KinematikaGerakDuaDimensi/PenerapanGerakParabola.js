const penerapangerakparabola = {
  title: "Penerapan Gerak Parabola dalam Kehidupan dan Teknologi",
  slug: "penerapan-gerak-parabola-dalam-kehidupan-dan-teknologi",
  description:
    "Mengeksplorasi penerapan konsep gerak parabola dalam olahraga, kehidupan sehari-hari, teknologi, simulasi komputer, dan berbagai sistem nyata.",

  chapter: "🏀 Kinematika: Gerak Dua Dimensi",

  content: [
    { blocks: [
        {
          type: "paragraph",
          text: [
            "Kita sudah membedah gerak parabola dari berbagai sisi.",
            "Kita sudah tahu bahwa gerak parabola dapat diuraikan menjadi gerak horizontal dan vertikal.",
            "Kita juga sudah mempelajari posisi, kecepatan, tinggi maksimum, waktu tempuh, dan jangkauan.",
            "Sekarang muncul pertanyaan yang lebih menarik:",
            "Untuk apa semua konsep ini digunakan?",
            "Jawabannya: ternyata di sekitar kita ada banyak sekali fenomena dan teknologi yang melibatkan konsep gerak dua dimensi ini!"
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
                text: "Di mana saja gerak parabola dapat kita temukan dalam kehidupan sehari-hari dan olahraga?"
              },
              {
                text: "Bagaimana ilmuwan dan insinyur memanfaatkan prinsip gerak parabola dalam merancang teknologi?"
              },
              {
                text: "Mengapa model gerak parabola ideal sangat berguna meskipun dunia nyata memiliki gesekan udara?"
              }
            ]
          }
        }
      ]
    },
    {
      heading: "⚽ Penerapan dalam Dunia Olahraga",
      blocks: [
        {
          type: "paragraph",
          text: "Dalam olahraga, memahami sudut peluncuran dan kecepatan awal secara intuitif sering kali menjadi pembeda antara kemenangan dan kekalahan."
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "**Basket (Three-Point & Free Throw)**",
                description: "Pemain secara tidak sadar memperhitungkan sudut pelepasan bola agar lintasan parabola bola dapat melengkung masuk ke ring dengan presisi tinggi."
              },
              {
                text: "**Sepak Bola (Tendangan Melambung & Free Kick)**",
                description: "Umpan lambung atau tendangan jarak jauh memanfaatkan sudut elevasi tertentu agar bola melewati jangkuan pemain lawan dan jatuh tepat di sasaran."
              },
              {
                text: "**Atletik (Tolakan & Lemparan)**",
                description: "Pada lempar lembing, tolak peluru, dan lompat jauh, sudut tumpuan atau pelepasan dioptimalkan mendekati sudut ideal untuk memaksimalkan jangkauan horizontal $(R)$."
              }

            ]
          }
        },
      ]
    },
    {
      heading: "🛠️ 2. Penerapan dalam Teknologi & Rekayasa",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Prinsip kinematika dua dimensi digunakan secara intensif dalam bidang keteknikan dan manufaktur:"
          ]
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "**Sistem Irigasi & Air Mancur**",
                description: "Nozzel penyiram tanaman otomatis dirancang memutar dengan sudut kalkulasi agar jangkauan semprotan air dapat menutupi area lahan secara efisien."
              },
              {
                text: "**Pelontar Bantuan Penyelamat (Rescue Projectile)**",
                description: "Alat pelontar pelampung atau tali penyelamat pada kapal menggunakan perhitungan gerak parabola agar pertolongan mendarat presisi di dekat korban."
              },
              {
                text: "**Seni Kembang Api**",
                description: "Ketinggian ledakan dan penyebaran percikan kembang api dihitung menggunakan komponen kecepatan vertikal dan horizontal."
              }
            ]
          }
        }
      ]
    },
    {
      heading: "🎮Simulasi Komputer & Game Development",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Pernah main game seperti *Angry Birds*, *Worms*, atau game panahan dan Artileri? Mesin game (*physics engine*) secara realtime menjalankan rumus posisi:"
          ]
        },
        {
          type: "equation",
          equation: [
            "x(t) = v_0 \\cos\\theta \\cdot t",
            "y(t) = v_0 \\sin\\theta \\cdot t - \\frac{1}{2} g t^2"
          ]
        },
        {
          type: "paragraph",
          text: [
            "Dengan memperbarui nilai $(x, y)$ pada setiap *frame* layar, animasi gerakan benda terasa mulus, realistis, dan sesuai dengan hukum fisika."
          ]
        }
      ]
    },
    {
      heading: "🍃 Dunia Nyata vs Model Ideal (Hambatan Udara)",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Model parabola sederhana berasumsi tidak ada gesekan udara. Namun di dunia nyata, hambatan udara (*air resistance/drag*) mempengaruhi gerakan benda:"
          ]
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "**Jangkauan Berkurang**",
                description: "Hambatan udara memperlambat kelajuan horizontal, sehingga jarak tempuh mendatar menjadi lebih pendek dari teori ideal."
              },
              {
                text: "**Lintasan Asimetris**",
                description: "Fasa penurunan benda menjadi lebih curam dibandingkan fasa kenaikan."
              },
              {
                text: "**Sudut Optimal Berubah**",
                description: "Karena adanya hambatan udara, sudut optimal untuk jangkauan maksimum dalam praktik nyata berkisar antara $35^\\circ - 42^\\circ$ (bukan tepat $45^\\circ$)."
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
          type: "paragraph",
          text: [
            "Karena dunia nyata memiliki gesekan udara, rumus gerak parabola ideal tidak ada gunanya sama sekali. ❌ ",
            "Gak, gitu!",
            "Faktanya, model ideal adalah fondasi utama! Fisikawan dan insinyur menggunakan perhitungan ideal terlebih dahulu sebagai estimasi dasar sebelum menambahkan koreksi efek hambatan udara. ✔️"
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
            "Konsep gerak parabola melandasi berbagai fenomena visual, sistem mekanis, serta simulasi digital di sekitar kita.",
            "Model ideal membantu kita memahami pola dasar suatu fenomena sebelum memasukkan faktor-faktor yang lebih kompleks.",
            "Dengan memahami gerak parabola, kita belajar bagaimana fisika menghubungkan fenomena alam, matematika, dan teknologi."
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
              question: "Manakah kegiatan berikut yang memanfaatkan konsep gerak parabola dalam olahraga?",
              options: [
                "Pelari sprint berlari di lintasan lurus.",
                "Perenang bergerak di dalam air.",
                "Bola basket yang dilempar menuju ring.",
                "Pesepeda mengayuh di jalan datar.",
                "Pemain catur memindahkan bidak."
              ],
              answerIndex: 2
            },
            {
              question: "Dalam pengembangan game seperti Angry Birds atau Worms, konsep gerak parabola digunakan untuk....",
              options: [
                "mengatur warna latar belakang permainan.",
                "menghitung skor pemain secara otomatis.",
                "mempercepat koneksi internet saat bermain.",
                "menentukan tingkat kesulitan permainan.",
                "menentukan lintasan gerak objek agar tampak realistis."
              ],
              answerIndex: 4
            },
            {
              question: "Pengaruh hambatan udara terhadap gerak parabola di dunia nyata adalah....",
              options: [
                "jangkauan benda menjadi lebih jauh daripada teori ideal.",
                "lintasan tetap simetris seperti model ideal.",
                "hambatan udara tidak memengaruhi gerak benda sama sekali.",
                "jangkauan benda berkurang dan lintasan menjadi tidak simetris.",
                "sudut optimum selalu tetap 45\\degree."
              ],
              answerIndex: 3
            },
            {
              question: "Mengapa model gerak parabola ideal tetap digunakan meskipun di dunia nyata terdapat hambatan udara?",
              options: [
                "Karena hambatan udara sebenarnya tidak ada.",
                "Karena model ideal menjadi dasar untuk memperkirakan gerak sebelum ditambahkan koreksi akibat hambatan udara.",
                "Karena hasil model ideal selalu sama persis dengan kondisi nyata.",
                "Karena model ideal hanya digunakan dalam olahraga.",
                "Karena model ideal tidak memerlukan perhitungan matematika."
              ],
              answerIndex: 1
            },
            {
              question: "Menurut materi, pada kondisi dunia nyata dengan adanya hambatan udara, sudut peluncuran optimum untuk memperoleh jangkauan maksimum umumnya berada pada kisaran....",
              options: [
                "0\\degree–15\\degree.",
                "20\\degree–30\\degree.",
                "35\\degree–42\\degree.",
                "Tepat 45\\degree.",
                "60\\degree–75\\degree."
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
            "Kita sudah menjelajahi gerak dua dimensi dari berbagai sisi.",
            "Mulai dari memahami posisi dan komponen vektor, membedah gerak parabola, hingga menghitung tinggi maksimum, waktu tempuh, dan jangkauan.",
            "Apa yang sebenarnya sudah kita pahami?",
            "➡️ *Next,* kita menuju portal: [**Pengertian Gerak Melingkar**](/materi/penerapan-gerak-melingkar)"
          ]
        }
      ]
    }
  ]
};

export default penerapangerakparabola;