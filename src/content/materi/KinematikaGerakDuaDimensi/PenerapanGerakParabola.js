import { text } from "framer-motion/client";

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
      heading: "⚽ 1. Penerapan dalam Dunia Olahraga",
      blocks: [
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "⚽ Penerapan dalam Dunia Olahraga",
                description: [
                  "Dalam olahraga, memahami sudut peluncuran dan kecepatan awal secara intuitif sering kali menjadi pembeda antara kemenangan dan kekalahan."
                ],
                children: {
                  type: "unordered",
                  item: [
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
              }
            ]
          }
        }
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
            type: "unordered",
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
      heading: "🎮 3. Simulasi Komputer & Game Development",
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
          type: "paragraph",
          text: "1️⃣ **Jangkauan Berkurang**: Hambatan udara memperlambat kelajuan horizontal, sehingga jarak tempuh mendatar menjadi lebih pendek dari teori ideal."
        },
        {
          type: "paragraph",
          text: "2️⃣ **Lintasan Asimetris**: Fasa penurunan benda menjadi lebih curam dibandingkan fasa kenaikan."
        },
        {
          type: "paragraph",
          text: "3️⃣ **Sudut Optimal Berubah**: Karena adanya hambatan udara, sudut optimal untuk jangkauan maksimum dalam praktik nyata berkisar antara $35^\\circ - 42^\\circ$ (bukan tepat $45^\\circ$)."
        }
      ]
    },

    {
      heading: "⚠️ Miskonsepsi Umum",
      blocks: [
        {
          type: "paragraph",
          text: "❌ **Miskonsepsi**: Karena dunia nyata memiliki gesekan udara, rumus gerak parabola ideal tidak ada gunanya sama sekali."
        },
        {
          type: "paragraph",
          text: "✅ **Fakta**: Model ideal adalah fondasi utama! Fisikawan dan insinyur menggunakan perhitungan ideal terlebih dahulu sebagai estimasi dasar sebelum menambahkan koreksi efek hambatan udara."
        }
      ]
    },

    {
      heading: "🧠 Inti Materi",
      blocks: [
        {
          type: "paragraph",
          text: "Konsep gerak parabola melandasi berbagai fenomena visual, sistem mekanis, serta simulasi digital di sekitar kita."
        },
        {
          type: "paragraph",
          text: "Model ideal membantu kita memahami pola dasar suatu fenomena sebelum memasukkan faktor-faktor yang lebih kompleks."
        },
        {
          type: "paragraph",
          text: "Dengan memahami gerak parabola, kita belajar bagaimana fisika menghubungkan fenomena alam, matematika, dan teknologi."
        }
      ]
    },

    {
      heading: "🚀 Next Mission",
      blocks: [

        {
          type: "paragraph",
          text: "Kita sudah menjelajahi gerak dua dimensi dari berbagai sisi."
        },
        {
          type: "paragraph",
          text: "Mulai dari memahami posisi dan komponen vektor, membedah gerak parabola, hingga menghitung tinggi maksimum, waktu tempuh, dan jangkauan."
        },
        {
          type: "paragraph",
          text: "Sekarang waktunya berhenti sejenak dan melihat kembali seluruh perjalanan kita."
        },
        {
          type: "paragraph",
          text: "Apa yang sebenarnya sudah kita pahami?"
        },
        {
          type: "paragraph",
          text: "Dan bagaimana semua konsep tersebut saling terhubung?"
        },
        {
          type: "paragraph",
          text: "➡️ **Selanjutnya**: *Kesimpulan Chapter — Kinematika Gerak Dua Dimensi.*"
        }
      ]
    }
  ]
};

export default penerapangerakparabola;