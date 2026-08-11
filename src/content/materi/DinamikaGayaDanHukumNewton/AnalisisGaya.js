const analisisGaya = {
  title: "Analisis Gaya pada Berbagai Kasus",
  slug: "analisis-gaya",
  description: "Menganalisis gaya-gaya yang bekerja pada berbagai situasi menggunakan Free Body Diagram dan Hukum Newton.",
  chapter: "🚀 Dinamika: Gaya dan Hukum Newton",

  content: [
    { blocks: [
        {
          type: "paragraph",
          text: [
            "Sekarang kamu telah mengenal berbagai jenis gaya dan mampu membuat *Free Body Diagram (FBD)*.",
            "Langkah berikutnya adalah menggunakan semua konsep tersebut untuk menganalisis berbagai situasi nyata.",
            "Seorang fisikawan tidak langsung menghafal rumus akhir. Mereka terlebih dahulu mengidentifikasi gaya, menggambar FBD, menguraikan vektor gaya ke sumbu koordinat, lalu menerapkan Hukum Newton."
          ]
        }
      ]
    },
    {
      heading: "❓ Strategi 5 Langkah Analisis",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Setiap kali menemukan masalah dinamika, gunakan alur sistematis berikut agar penyelesaian masalah jadi lebih rapi dan bebas keliru:"
          ]
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text:"**Isolasi Benda**",
                description: "Tentukan benda mana yang menjadi fokus analisis kamu.",
              },
              {
                text: "**Gambar FBD**",
                description: "Gambarkan semua gaya luar yang bekerja pada benda tersebut (Gaya Berat $W$, Gaya Normal $N$, Tali $T$, Gesek $f$, atau Gaya Tarik $F$)."
              },
              {
                text: "**Tentukan Sumbu Koordinat**",
                description: "Buat sumbu $X$ sejajar dengan arah gerak/kemiringan dan sumbu $Y$ tegak lurus dengannya."
              },
              {
                text: "**Uraikan Gaya Bersudut**",
                description: "Gunakan trigonometri untuk memecah gaya yang miring menjadi komponen $F \\cos\\theta$ dan $F \\sin\\theta$."
              },
              {
                text: "**Terapkan Hukum Newton**",
                description: "Gunakan $\\Sigma F_y = 0$ (jika diam vertikal) dan $\\Sigma F_x = m \\cdot a$ (jika bergerak horizontal)."
              }
            ]
          }

        }
      ]
    },
    {
      heading: "📐 Studi Kasus 1: Benda ditarik Gaya Bersudut di Atas Lantai Kasar",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Bayangkan balok bermassa $m$ ditarik dengan gaya $F$ membentuk sudut $\\theta$ terhadap bidang horizontal pada lantai kasar dengan koefisien gesek kinetis $\\mu_k$.",
            "Penguraian gaya pada masing-masing sumbu:"
          ]
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "**Sumbu Y (Keseimbangan Vertikal):**",
                equation: "\\Sigma F_y = 0 \\implies N + F \\sin\\theta - W = 0 \\implies N = m \\cdot g - F \\sin\\theta",
                description: "Perhatikan bahwa gaya tarik ke atas ($F \\sin\\theta$) mengurangi gaya tekan balok ke lantai, sehingga gaya normal $N$ menjadi lebih kecil!"
              },
              {
                text: "**Sumbu X (Dinamika Horisontal):**",
                equation: [
                  "\\Sigma F_x = m \\cdot a \\implies F \\cos\\theta - f_k = m \\cdot a",,
                  "F \\cos\\theta - \\mu_k (m \\cdot g - F \\sin\\theta) = m \\cdot a"
                ]
              }
            ]
          }
        }
      ]
    },
    {
      heading: "🏔️ Studi Kasus 2: Balok Meluncur di Bidang Miring",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Pada bidang miring dengan sudut $\\theta$, gaya berat $W$ diuraikan terhadap sumbu sejajar dan tegak lurus bidang:"
          ]
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "Komponen gaya berat sejajar bidang:",
                description: "$W_x = m \\cdot g \\sin\\theta$ (Mendorong benda ke bawah)",
              },
              {
                text: "Komponen gaya berat tegak lurus bidang:",
                description: "$W_y = m \\cdot g \\cos\\theta$ (Menekan permukaan)",
              },
              {
                text: "Gaya Normal:",
                description: " $N = m \\cdot g \\cos\\theta$"
              }
            ]
          }
        },
        {
          type: "paragraph",
          text: "Jika bidang miring **kasar** ($\\mu_k$), maka persamaan percepatannya adalah:"
        },
        {
          type: "formula",
          text: "\\Sigma F_x = m \\cdot a \\implies m \\cdot g \\sin\\theta - f_k = m \\cdot a"
        },
        {
          type: "formula",
          text: "a = g (\\sin\\theta - \\mu_k \\cos\\theta)"
        }
      ]
    },
    {
      heading: "📝 Contoh Soal & Pembahasan",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Sebuah benda bermassa $4\\text{ kg}$ berada di atas bidang miring licin dengan sudut kemiringan $\\theta = 30^\\circ$. Jika percepatan gravitasi $g = 10\\text{ m/s}^2$, berapakah percepatan balok saat meluncur turun?",
            "**JAWABAN:**",
            "**Diketahui:**",
            "",
            "**Ditanyakan:**",
            "**Penyelesaian:**",
          ]
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "Langkah 1 (Identifikasi Data):",
                description: "$m = 4\\text{ kg}$, $\\theta = 30^\\circ$, $g = 10\\text{ m/s}^2$, licin $\\implies f_k = 0$.",
              },
              {
                text: "Langkah 2 (FBD & Persamaan):",
                description: "Gaya yang menyebabkan benda bergerak meluncur turun hanya gaya berat komponen sejajar bidang $(W_x = m \\cdot g \\sin\\theta)$."
              },
              {
                text: "**Langkah 3 (Hukum Newton II):** $\\Sigma F_x = m \\cdot a$",
                equation: [
                  "$$m \\cdot g \\sin(30^\\circ) = m \\cdot a$$",
                  "$$a = g \\sin(30^\\circ) = 10 \\cdot 0,5 = 5\\text{ m/s}^2$$"
                ]
              }
            ]
          }
        },
        {
          type: "paragraph",
          text: [
            "**Kesimpulan:**",
            "Balok meluncur ke bawah dengan percepatan $5\\text{ m/s}^2$ (massa benda ternyata tidak mempengaruhi besar percepatan pada bidang miring licin!)."
          ]
        }
      ]
    },

    {
      heading: "⚠️ Fact Check & Miskonsepsi Populer",
      blocks: [
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "**Miskonsepsi 1**",
                description: [
                  "Mengira komponen sejajar bidang miring selalu menggunakan $\\cos\\theta$. ❌",
                  "Gak, gitu!",
                  "Faktanya, pada bidang miring, gaya berat yang sejajar bidang justru menggunakan **$m \\cdot g \\sin\\theta$**, sedangkan gaya normal tegak lurus menggunakan **$m \\cdot g \\cos\\theta$**. ✔️",
                ]
              },
              {
                text: "**Miskonsepsi 2",
                description: [
                  "Mengira rumus Gaya Normal selalu $N = m \\cdot g$. ❌",
                  "Gak, gitu!",
                  "Faktanya, $N = m \\cdot g$ hanya berlaku pada bidang datar tanpa gaya luar tambahan. Jika benda berada di bidang miring atau ditarik sudut miring, nilai $N$ akan berubah! ✔️"
                ]
              },
              {
                text: "**Miskonsepsi 3",
                description: [
                  "Massa benda mempengaruhi kecepatan jatuhnya benda di bidang miring licin. ❌",
                  "Gak, gitu!",
                  "Pada bidang miring licin, percepatan $a = g \\sin\\theta$. Variabel massa ($m$) saling menghilangkan! ✔️"
                ]
              }
            ]
          }
        }
      ]
    },
    {
      heading: "🌟 Fun Fact",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Perangkat lunak simulasi teknik (FEA/CAD) yang digunakan untuk merancang mobil balap, pesawat terbang, robot, hingga satelit ruang angkasa melakukan analisis gaya dengan prinsip 5 langkah yang sama persis seperti yang kamu pelajari di halaman ini. Bedanya, komputer memproses jutaan vektor gaya dalam hitungan milidetik!"
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
            "Analisis dinamika selalu dimulai dengan mengenali gaya yang bekerja pada benda, membuat Free Body Diagram (FBD), menguraikan gaya pada sumbu $X$ dan $Y$, lalu menerapkan Hukum Newton ($\\Sigma F = 0$ atau $\\Sigma F = m \\cdot a$). Urutan berpikir yang sistematis membuat masalah fisika yang rumit menjadi sangat logis dan mudah diselesaikan."
          ]
        }
      ]
    },
    { blocks: [
        {
          type: "paragraph",
          text: [
            "Kamu kini telah mampu menganalisis berbagai kasus dinamika menggunakan Hukum Newton!",
            "Pada misi berikutnya, kita akan melihat bagaimana konsep ini digunakan dalam fenomena kehidupan nyata yang lebih spesifik, seperti analisis gerak lift, sistem katrol (Mesin Atwood), hingga ayunan konis.",
            "➡️ *Next,* kita menuju portal: []()"
          ]
        }
      ]
    }
  ]
};

export default analisisGaya;