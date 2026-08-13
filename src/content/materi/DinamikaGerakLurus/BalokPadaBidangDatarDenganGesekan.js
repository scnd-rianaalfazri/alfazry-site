const balokPadaBidangDatarGesekan = {
  title: "Balok pada Bidang Datar dengan Gaya Gesek",
  slug: "balok-pada-bidang-datar-gesekan",
  description: "Menganalisis gerak balok pada bidang datar kasar yang dipengaruhi oleh gaya dorong dan gaya gesek menggunakan Hukum Newton II.",
  chapter: "🚀 Dinamika Gerak Lurus",

  content: [
    { 
      blocks: [
        {
          type: "paragraph",
          text: [
            "Pada materi sebelumnya, kita menganggap lantai sangat licin sehingga balok dapat bergerak tanpa hambatan.",
            "Namun, dalam kehidupan nyata, kondisi ideal tersebut hampir tidak pernah ada. Saat kamu mendorong meja, lemari, atau koper di atas lantai, selalu ada gaya yang berusaha menghambat geraknya.",
            "Gaya penahan tersebut adalah **Gaya Gesek** $(f)$. Lantas, bagaimana cara kita menghitung percepatan balok jika permukaannya kasar?"
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
                text: "Berapa besar gaya minimal yang dibutuhkan agar balok di atas lantai kasar bisa mulai bergerak?"
              },
              {
                text: "Gaya gesek mana yang bekerja saat balok sudah meluncur: Gesek Statis ($f_s$) atau Gesek Kinetis ($f_k$)?"
              },
              {
                text: "Bagaimana hubungan antara koefisien gesek, gaya normal, dan percepatan benda?"
              }
            ]
          }
        }
      ]
    },
    {
      heading: "🔍 Analisis Gaya (Free Body Diagram)",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Mari kita uraikan gaya-gaya yang bekerja pada balok bermassa $m$ yang ditarik/didorong horizontal dengan gaya $F$ di atas permukaan kasar:"
          ]
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "**Sumbu Vertikal (Sumbu Y):",
                description: "** Benda tidak melayang maupun melesak ke dalam lantai, sehingga berlaku **Hukum Newton I** $(\Sigma F_y = 0)$:",
                equation: "N - W = 0 \\implies N = W = m \\cdot g"
              },
              {
                text: "**Gaya Gesek Statis Maksimum ($f_{s,\\text{maks}}$):**",
                description: "Hambatan terbesar sebelum benda bergerak:",
                equation: "f_{s,\\text{maks}} = \\mu_s \\cdot N = \\mu_s \\cdot m \\cdot g"
              },
              {
                text: "**Gaya Gesek Kinetis ($f_k$):**",
                description: "Hambatan yang bekerja saat benda sudah bergerak:",
                equation: "f_k = \\mu_k \\cdot N = \\mu_k \\cdot m \\cdot g"
              }
            ]
          }
        }
      ]
    },
    {
      heading: "⚖️ 3 Kondisi Keadaan Benda",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Sebelum menghitung percepatan, kamu **wajib** membandingkan gaya tarik/dorong ($F$) dengan gaya gesek statis maksimum $(f_{s,\\text{maks}})$:"
          ]
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "**Jika $F < f_{s,\\text{maks}}$:** Benda **DIAM**.",
                equation: "a = 0 \\quad \\text{dan} \\quad f_s = F"
              },
              {
                text: "**Jika $F = f_{s,\\text{maks}}$:** Benda **TEPAT AKAN BERGERAK**.",
                equation: "a = 0 \\quad \\text{dan} \\quad f_s = f_{s,\\text{maks}}"
              },
              {
                text: "**Jika $F > f_{s,\\text{maks}}$:** Benda **BERGERAK** (Akselerasi).",
                description: "Gaya gesek yang berlaku berpindah menjadi gaya gesek kinetis $(f_k)$. Berdasarkan **Hukum Newton II** $(\Sigma F_x = m \\cdot a)$:",
                equation: "F - f_k = m \\cdot a \\implies a = \\frac{F - f_k}{m}"
              }
            ]
          }
        }
      ]
    },
    {
      heading: "📝 Contoh Soal & Pembahasan",
      blocks: [
        {
          type: "paragraph",
          text: [
            "**SOAL:**",
            "Sebuah balok kayu bermassa $m = 4\\text{ kg}$ berada di atas lantai datar yang kasar. Koefisien gesek statis $\\mu_s = 0{,}4$ dan koefisien gesek kinetis $\\mu_k = 0{,}25$. Jika g = $10\\text{ m/s}^2$, tentukan percepatan balok jika ditarik gaya horizontal sebesar $F = 20\\text{ N}$!",
            "**JAWABAN:**",
            "**Diketahui:**",
            "",
            "**Ditanyakan:**",
            "",
          ]
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "**Langkah 1:",
                description: "** Hitung Gaya Normal ($N$)",
                equation: "N = m \\cdot g = 4 \\cdot 10 = 40\\text{ N}"
              },
              {
                text: "**Langkah 2:**",
                description: "Hitung $f_{s,\\text{maks}}$ untuk cek kondisi benda",
                equation: "f_{s,\\text{maks}} = \\mu_s \\cdot N = 0{,}4 \\cdot 40 = 16\\text{ N}"
              },
              {
                text: "**Langkah 3:**",
                description: "Bandingkan $F$ dengan $f_{s,\\text{maks}}$",
                equation: "Karena $F = 20\\text{ N} > f_{s,\\text{maks}} = 16\\text{ N}$, maka balok **BERGERAK**! Gaya gesek yang dipakai adalah $f_k$."
              },
              {
                text: "**Langkah 4:",
                description: "** Hitung $f_k$ dan Percepatan ($a$)",
                equation: [
                  "f_k = \\mu_k \\cdot N = 0{,}25 \\cdot 40 = 10\\text{ N}",
                  "a = \\frac{F - f_k}{m} = \\frac{20 - 10}{4} = \\frac{10}{4} = 2{,}5\\text{ m/s}^2"
                ]
              }
            ]
          }
        },
        {
          type: "paragraph",
          text: [
            "**KESIMPULAN:**",
            "Balok bergerak dengan percepatan $2{,}5\\text{ m/s}^2$."
          ]
        }
      ]
    },
    {
      heading: "⚠️ Miskonsepsi Umum",
      blocks: [
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "Miskonsepsi 1",
                description: [
                  "Benda yang sedang bergerak selalu dipengaruhi oleh koefisien gesek statis $(\mu_s)$. ❌",
                  "$\\mu_s$ **HANYA** digunakan untuk menguji apakah benda mulai bergerak atau tidak. Begitu benda meluncur/bergerak, gaya gesek yang bekerja otomatis berganti menjadi gaya gesek kinetis $(f_k)$ menggunakan $\\mu_k$.✔️"
                ]
              },
              {
                text: "Miskonsepsi 2",
                description: [
                  "Gaya gesek statis nilainya selalu sama dengan $f_{s,\\text{maks}}$. ❌",
                  "Gaya gesek statis bersifat adaptif! Jika $f_{s,\\text{maks}} = 16\\text{ N}$ tetapi kamu hanya mendorong dengan $F = 5\\text{ N}$, maka besar gaya gesek statis saat itu adalah $5\\text{ N}$ (bukan $16\\text{ N}$). ✔️"
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
          text: "Tim bobsled Olimpiade berusaha mengurangi gaya gesek sekecil mungkin dengan membuat permukaan lintasan sangat halus dan menggunakan pisau luncur khusus agar kereta dapat melaju lebih cepat."
        }
      ]
    },

    {
      heading: "✨ Inti Materi",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Pada bidang datar yang memiliki gaya gesek, percepatan benda ditentukan oleh resultan gaya horizontal, yaitu selisih antara gaya dorong dan gaya gesek kinetis $(a = \\frac{F - f_k}{m})$. Semakin besar resultan gaya, semakin besar percepatan benda."
          ]
        }
      ]
    },

    { blocks: [
        {
          type: "paragraph",
          text: [
            "Pada dua kasus sebelumnya, gaya dorong selalu bekerja sejajar dengan permukaan.",
            "Namun, bagaimana jika gaya diberikan dengan arah miring, seperti saat menarik koper menggunakan pegangan atau menarik gerobak dengan tali? Apakah gaya normal dan gaya geseknya akan berubah?",
            "➡️ *Next,* kita menuju portal: [**Balok pada Bidang Miring**](/materi/balok-pada-bidang-miring)"
          ]
        }
      ]
    }
  ]
};

export default balokPadaBidangDatarGesekan;