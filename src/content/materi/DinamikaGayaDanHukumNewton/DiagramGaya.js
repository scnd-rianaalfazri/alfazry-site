import { textDefaultProps } from "recharts/types/component/Text";

const freeBodyDiagram = {
  title: "Diagram Gaya (Free Body Diagram)",
  slug: "free-body-diagram",
  description: "Memahami Free Body Diagram (FBD) sebagai alat visualisasi utama untuk mengisolasi benda dan menggambarkan seluruh gaya eksternal sebelum menerapkan Hukum Newton.",
  chapter: "🚀 Dinamika: Gaya dan Hukum Newton",

  content: [
    { blocks: [
        {
          type: "paragraph",
          text: [
            "Bayangkan sebuah balok ditarik menggunakan tali miring di atas lantai kasar. Pada saat yang sama, gravitasi menariknya ke bawah dan lantai menahannya ke atas.",
            "Jika semua gaya tersebut hanya dibayangkan di dalam kepala, analisis fisika akan sangat rentan terhadap kekeliruan.",
            "Karena itulah fisikawan menggunakan Diagram Gaya Bebas atau Free Body Diagram (FBD) — sebuah 'senjata rahasia' visual untuk mengisolasi benda dan memetakan setiap gaya yang bekerja padanya secara sistematis."
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
            "Bagaimana cara menggambar semua gaya yang bekerja pada suatu benda tanpa ada yang terlewat atau tertukar?",
            "Mengapa gaya reaksi dari benda lain atau gaya net/resultan TIDAK boleh digambar di dalam Free Body Diagram?"
          ]
        }
      ]
    },
    {
      heading: "🖌️ Apa Itu Free Body Diagram (FBD)?",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Free Body Diagram (FBD) adalah sketsa grafis sederhana yang menampilkan satu benda yang 'diisolasi' dari lingkungannya beserta seluruh vektor gaya luar (eksternal) yang bekerja langsung pada benda tersebut.",
            "Dalam FBD, bentuk asli benda sering kali disederhanakan menjadi sebuah titik pusat massa atau kotak sederhana agar fokus analisis tetap berada pada arah dan besar vektor gaya."
          ]
        }
      ]
    },
    {
      heading: "📋 Step-by-Step Menggambar FBD Seperti Pro",
      blocks: [
        {
          type: "paragraph",
          text: "Agar FBD kamu selalu akurat, ikuti 4 langkah mutlak berikut:"
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "Isolasi Benda",
                description: "Gambarkan benda sebagai kotak atau titik tunggal terpisah dari lingkungan (pisahkan dari lantai, tali, atau benda lain)"
              },
              {
                text:"Identifikasi Gaya Kontak",
                description: "Periksa apakah benda bersentuhan dengan permukaan (ada Gaya Normal $N$ dan Gaya Gesek $f$) atau terikat tali (ada Gaya Tegangan Tali $T$)."
              },
              {
                text: "Identifikasi Gaya Tanpa Kontak",
                description: "Gambarkan gaya medan gravitasi, yaitu Gaya Berat ($W = m \\cdot g$) yang selalu mengarah lurus ke pusat Bumi (ke bawah)."
              },              {
                text: "Tentukan Sumbu Koordinat ($X$ dan $Y$)",
                description: "Pilihlah sumbu koordinat yang sejajar dan tegak lurus terhadap arah perkiraan gerak benda."
              }
            ]
          }
        }
      ]
    },
    {
      heading: "📐 Menguraikan Gaya pada Sumbu X dan Y",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Jika terdapat gaya yang membentuk sudut $\\theta$ terhadap sumbu utama, gaya tersebut harus diuraikan menjadi dua komponen tegak lurus menggunakan trigonometri:"
          ]
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "Komponen Horizontal",
                description: "F_x = F \\cos\\theta"
              },
              {
                text: "Komponen Vertikal",
                description: "F_y = F \\sin\\theta"
              }
            ]
          }
        },
        {
          type: "paragraph",
          text: [
            "Khusus untuk benda di atas bidang miring dengan sudut kemiringan $\\theta$, urai gaya berat $W$ menjadi:"
          ]
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "Gaya pendorong sejajar bidang miring: $W_x = W \\sin\\theta$"
              },
              {
                text: "Gaya penekan tegak lurus bidang miring: $W_y = W \\cos\\theta$"
              }
            ]
          }
        }
      ]
    },
    {
      heading: "✏️ Contoh Studi Kasus & Pembahasan",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Sebuah balok bermassa $m = 4\\text{ kg}$ berada di atas bidang miring kasar dengan sudut $\\theta = 30^\\circ$. Jika percepatan gravitasi $g = 10\\text{ m/s}^2$, gambarkan FBD dan tentukan gaya normal yang bekerja pada balok!",
            "**PEMBAHASAN:**",
            "Diketahui:"
          ]
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "Hitung Gaya Berat",
                equation: "W = m \\cdot g = 4\\text{ kg} \\times 10\\text{ m/s}^2 = 40\\text{ N}"
              },
              {
                text: "Urai komponen gaya berat tegak lurus bidang miring",
                equation: "W_y = W \\cos 30^\\circ = 40 \\times 0{,}866 = 34{,}64\\text{ N}"
              },
              {
                text: "Terapkan Hukum Newton I pada sumbu tegak lurus bidang miring (sumbu Y):",
                equation: "\\Sigma F_y = 0 \\implies N - W_y = 0 \\implies N = W_y = 34{,}64\\text{ N}"
              }
            ]
          }
        }
      ]
    },
    {
      heading: "⚠️ Miskonsepsi & Fact Check",
      blocks: [
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "Miskonsepsi 1",
                description: [
                  "Memasukkan Gaya Resultan $(\\Sigma F)$ atau Gaya Inersia $(m \\cdot a)$ ke dalam diagram. ❌",
                  "Gak, gitu!",
                  "Faktanya, FBD HANYA boleh memuat gaya-gaya eksternal nyata. $m \\cdot a$ adalah HAKIKAT / EFEK dari resultan gaya, bukan gaya fisik tersendiri! ✔️"
                ]
              }
            ]
          }
        },
        {
          type: "paragraph",
          text: [
            "Menggambar gaya aksi dan gaya reaksi pada diagram benda yang sama. ❌",
            "Gak, gitu!",
            "Faktanya, pasangan gaya aksi-reaksi Hukum Newton III bekerja pada DUA benda yang berbeda. Dalam FBD satu benda, gaya yang digambar HANYA gaya yang dialami oleh benda tersebut. ✔️"
          ]
        }
      ]
    },
    {
      heading: "🌟 Fun Fact",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Hampir semua analisis mekanika di bidang teknik sipil, robotika modern, desain super-car, hingga industri kedirgantaraan NASA diawali dengan membuat Free Body Diagram. Tanpa FBD, perhitungan struktur jembatan atau roket bisa berantakan!"
          ]
        }
      ]
    },
    {
      heading: "✨ Inti Materi",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Free Body Diagram adalah representasi visual dari semua gaya luar yang bekerja pada satu benda yang terisolasi.",
            "Dengan menggambar FBD secara akurat dan menguraikannya pada sumbu $X$ dan $Y$, analisis Hukum Newton ($\bSigma F = 0$ atau $\\Sigma F = m \\cdot a$) dapat dilakukan dengan jauh lebih mudah dan presisi."
          ]
        }
      ]
    },

    { blocks: [
        {
          type: "paragraph",
          text: [
            "Sekarang kamu sudah jago mengisolasi benda dan menggambar panah gaya-gayanya!",
            "Pada misi berikutnya, kita akan menggunakan Free Body Diagram untuk menyelesaikan berbagai sistem mekanika kompleks, seperti sistem katrol tunggal dan ganda (Mesin Atwood)!",
            "➡️ *Next,* kita menuju portal: Penerapan Hukum Newton pada Sistem Katrol."
          ]
        }
      ]
    }
  ]
};

export default freeBodyDiagram;