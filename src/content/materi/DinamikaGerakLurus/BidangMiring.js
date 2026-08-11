const balokPadaBidangMiring = {
  title: "Balok pada Bidang Miring",
  slug: "balok-pada-bidang-miring",
  description: "Menganalisis gerak balok pada bidang miring licin menggunakan Hukum Newton II dan penguraian gaya berat.",
  chapter: "🚀 Dinamika Gerak Lurus",

  content: [
    { blocks: [
        {
          type: "paragraph",
          text: [
            "Bayangkan sebuah balok diletakkan di atas papan yang datar. Balok akan tetap diam.",
            "Sekarang miringkan papan tersebut secara perlahan.",
            "Tanpa didorong, balok mulai bergerak menuruni bidang.",
            "Mengapa hanya dengan memiringkan bidang, balok dapat bergerak sendiri?"
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
            "Mengapa gaya berat dapat membuat benda meluncur pada bidang miring?",
            "Bagaimana menentukan percepatan balok pada bidang miring?"
          ]
        }
      ]
    },
    {
      heading: "🧭 Identifikasi Gaya",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Pada balok bekerja dua gaya utama:"
          ]
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "⬇ Gaya Berat $(W = mg)$"
              },
              {
                text: "↖ Gaya Normal $(N)$"
              }
            ]
          }
        },
        {
          type: "paragraph",
          text: [
            "Karena bidang dianggap licin, tidak ada gaya gesek."
          ]
        }
      ]
    },
    {
      heading: "🧩 Mengapa Gaya Berat Harus Diuraikan?",
      blocks: [

        {
          type: "paragraph",
          text: [
            "Gaya berat selalu mengarah vertikal ke bawah.",
            "Namun, benda bergerak mengikuti arah bidang miring.",
            "Oleh karena itu, gaya berat perlu diuraikan menjadi dua komponen yang sesuai dengan arah bidang."
          ]
        }
      ]
    },
    {
      heading: "📐 Komponen Gaya Berat",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Komponen sejajar bidang menyebabkan balok bergerak menuruni bidang."
          ]
        },
        {
          type: "equation",
          equation: "W_{\\parallel}=mg\\sin\\theta"
        },
        {
          type: "paragraph",
          text: [
            "Komponen tegak lurus bidang menentukan besar gaya normal."
          ]
        },
        {
          type: "equation",
          equation: "W_{\\perp}=mg\\cos\\theta"
        }
      ]
    },

    {
      heading: "📝 Free Body Diagram",
      blocks: [
        {
          type: "paragraph",
          text: "Pada FBD, gambarkan:"
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "Gaya berat $(mg)$ vertikal ke bawah."
              },
              {
                text: "Gaya normal $(N)$ tegak lurus bidang"
              },
              {
                text: "Komponen berat sejajar bidang."
              },
              {
                text: "Komponen berat tegak lurus bidang."
              }
            ]
          }
        }
      ]
    },
    {
      heading: "⚖️ Analisis Gaya",
      blocks: [
        {
          type: "paragraph",
          text: "Pada arah tegak lurus bidang:"
        },
        {
          type: "equation",
          equation: "N = mg\\cos\\theta"
        },
        {
          type: "paragraph",
          text: "Pada arah sejajar bidang:"
        },
        {
          type: "equation",
          equation: "\\Sigma F = mg\\sin\\theta"
        }
      ]
    },
    {
      heading: "📖 Menerapkan Hukum Newton II",
      blocks: [
        {
          type: "equation",
          equation: "mg\\sin\\theta = ma"
        },
        {
          type: "paragraph",
          equation: "Karena massa muncul pada kedua ruas persamaan, massa saling menghilangkan."
        },
        {
          type: "equation",
          equation: "a=g\\sin\\theta"
        },
        {
          type: "paragraph",
          text: "Artinya, pada bidang miring licin percepatan benda hanya bergantung pada percepatan gravitasi dan besar sudut kemiringan bidang."
        }
      ]
    },
    {
      heading: "🧪 Contoh Analisis",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Sebuah balok berada pada bidang miring licin dengan sudut 30°.",
            "Jika g = 10 m/s², maka:"
          ]
        },
        {
          type: "equation",
          equation: "a = 10\\times\\sin30^\\circ = 5\\;m/s^2"
        },
        {
          type: "paragraph",
          text: [
            "Balok bergerak menuruni bidang dengan percepatan $\\\text{5 m/s}^2$."
          ]
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
                text: "Wahana Seluncuran",
                description: "Memanfaatkan sudut landai agar percepatan meluncur terasa mengasyikkan namun tetap aman."
              },
              {
                text: "Olahraga Salju & X-Games",
                description: "Menggunakan permukaan es/salju (hampir licin sempurna) untuk mencapai kecepatan maksimum."
              },
              {
                text: "Ramp Aksesibilitas Modern",
                description: "Desain bidang miring ramah disabilitas yang dirancang presisi membatasi sudut θ agar nilai W_|| tidak melebihi batas aman pertahanan roda."
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
                  "Seluruh gaya berat menyebabkan benda meluncur. ❌",
                  "Gak, gitu!",
                  "Faktanya, hanya komponen gaya berat yang sejajar bidang (mg sin θ) yang menyebabkan benda bergerak sepanjang bidang miring. ✔️"
                ]
              },
              {
                text: "Miskonsepsi 2",
                description: [
                  "Massa yang lebih besar selalu menghasilkan percepatan yang lebih besar pada bidang miring licin. ❌",
                  "Gak, gitu!",
                  "Faktanya, pada bidang miring licin percepatan tidak bergantung pada massa benda. ✔️"
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
          type: "list",
          list: {
            type:"ordered",
            items: [
              {
                text: "*Fun Fact 1*",
                description: "Galileo Galilei pernah memanfaatkan eksperimen bidang miring untuk memperlambat efek gravitasi bumi, sehingga beliau bisa mengukur percepatan benda secara akurat pada zaman di mana jam atom belum diciptakan!"
              },
              {
                text: "*Fun Fact 2*",
                description: "Jalur evakuasi kursi roda dan tanjakan parkir dirancang dengan sudut tertentu agar gaya yang bekerja tetap aman dan mudah dikendalikan oleh pengguna."
              }
            ]
          }
        }
      ]
    },
    {
      heading: "✨ Inti Materi",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Pada bidang miring licin, gaya berat harus diuraikan menjadi komponen sejajar dan tegak lurus bidang. Komponen sejajar bidang menyebabkan percepatan, sedangkan komponen tegak lurus menentukan besar gaya normal.",
            "➡️ *Next,* kita menuju portal: [**Balok pada Bidang Miring](/materi/bidang-miring-dengan-gesekan)"
          ]
        }
      ]
    },

    { blocks: [
        {
          type: "paragraph",
          text: [
            "Pada materi ini bidang dianggap licin sehingga tidak ada gaya gesek.",
            "Namun, bagaimana jika permukaan bidang kasar? Bagaimana gaya gesek mengubah resultan gaya dan percepatan benda? Itulah yang akan kita bahas pada page berikutnya.",
            "➡️ *Next,* kita menuju portal: [**Balok pada Bidang Miring dengan Gesekan**](/materi/bidang-miring-dengan-gesekan)"
          ]
        }
      ]
    }
  ]
};

export default balokPadaBidangMiring;