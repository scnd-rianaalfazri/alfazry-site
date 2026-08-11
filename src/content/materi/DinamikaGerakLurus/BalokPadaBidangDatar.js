const balokPadaBidangDatar = {
  title: "Balok pada Bidang Datar",
  slug: "balok-pada-bidang-datar",
  description: "Menganalisis gerak balok pada bidang datar menggunakan Hukum Newton II tanpa mempertimbangkan gaya gesek.",
  chapter: "🚀 Dinamika Gerak Lurus",

  content: [
    { blocks: [
        {
          type: "paragraph",
          text: [
            "Bayangkan sebuah balok berada di atas lantai yang sangat licin tanpa adanya gaya gesek $(f = 0)$.",
            "Kemudian seseorang memberikan gaya dorong mendatar ke arah kanan.",
            "Apa yang akan terjadi pada balok tersebut? Apakah balok bergerak melesat, atau bertambah cepat secara bertahap?"
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
                text: "Bagaimana hubungan antara besar gaya dorong yang diberikan dengan percepatan gerak balok?"
              },
              {
                text: "Mengapa massa balok sangat memengaruhi seberapa tanggap balok tersebut saat didorong?"
              }
            ]
          }
        }
      ]
    },
    {
      heading: "🧭 Identifikasi Gaya pada Bidang Datar",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Ketika balok berada di atas bidang datar licin dan didorong horizontal, terdapat gaya-gaya yang bekerja pada dua sumbu koordinat:"
          ]
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "**Sumbu Y (Vertikal):**",
                description: "Terdapat gaya berat $(W = m \\cdot g)$ ke bawah dan gaya normal $(N)$ dari permukaan lantai ke atas. Karena benda tidak melayang maupun melesat ke dalam lantai, resultan gaya vertikal sama dengan nol $(\\Sigma F_y = 0)$. Maka $N = W$."
              },
              {
                text: "**Sumbu X (Horizontal):**",
                description: "Terdapat gaya dorong/tarik $(F)$ yang bekerja searah bidang. Karena lantai dianggap licin (tanpa gesekan), gaya dorong inilah yang menjadi satu-satunya gaya netto $(\\Sigma F_x = F)$."
              }
            ]
          }
        }
      ]
    },
    {
      heading: "📐 Formulasi Matematika & Hukum Newton II",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Berdasarkan Hukum Newton II, resultan gaya pada arah horizontal menghasilkan percepatan sebesar:"
          ]
        },
        {
          type: "equation",
          equation: "\\Sigma F_x = m \\cdot a \\implies F = m \\cdot a"
        },
        {
          type: "paragraph",
          text: [
            "Sehingga percepatan balok ($a$) dapat dihitung menggunakan rumus:"
          ]
        },
        {
          type: "equation",
          equation: "a = \\frac{F}{m}"
        },
        {
          type: "paragraph",
          text: [
            "Keterangan:"
          ]
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "$F$ = Gaya dorong horizontal $(Newton / N)$",
              },
              {
                text: "$m$ = Massa balok $(kilogram / kg)$",
              },
              {
                text: "$a$ = Percepatan balok $(m/s^2)$"
              }
            ]
          }
        }
      ]
    },

    {
      heading: "✍️ Contoh Soal & Pembahasan",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Sebuah balok bermassa $4\\text{ kg}$ ditarik di atas permukaan lantai licin dengan gaya mendatar $F = 20\\text{ N}$ ke arah kanan. Jika balok awalnya diam $(v_0 = 0)$.",
            "Hitunglah:"
          ]
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "Percepatan yang dialami balok."
              },
              {
                text: "Kecepatan balok setelah bergerak selama $3\\text{ detik}$."
              }
            ]
          }
        },
        {
          type: "paragraph",
          text: [
            "**JAWABAN:**",
            "**Diketahui:**",
            "",
            "**Ditanyakan:**",
            ""
          ]
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "Menghitung percepatan balok $(a)$:",
                equation: "a = \\frac{F}{m} = \\frac{20\\text{ N}}{4\\text{ kg}} = 5\\text{ m/s}^2"
              },
              {
                text: "Menghitung kecepatan akhir $(v_t)$ menggunakan persamaan kinematics (GLBB):",
                equation: "v_t = v_0 + a \\cdot t = 0 + (5 \\cdot 3) = 15\\text{ m/s}"
              }
            ]
          }
        },
        {
          type: "paragraph",
          text : [
            "Jadi, percepatan balok adalah $5\\text{ m/s}^2$ dan kecepatannya setelah $3\\text{ detik}$ adalah $15\\text{ m/s}$ ke arah kanan."
          ]
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
                  "Benda membutuhkan gaya dorong terus-menerus hanya untuk mempertahankan kecepatannya agar tetap konstan di atas bidang datar. ❌",
                  "Faktanya, menurut Hukum Newton I, pada permukaan yang benar-benar licin tanpa gaya gesek, jika gaya dorong dihentikan saat benda sudah bergerak, benda akan tetap melaju dengan kecepatan konstan tanpa perlu didorong lagi! ✔️"
                ]
              },
              {
                text: "Miskonsepsi 2",
                description: [
                  "Massa benda tidak berpengaruh pada gerak jika permukaannya sangat licin. ❌",
                  "**Faktanya:** Walaupun permukaannya licin, massa tetap berperan sebagai inersia/kelembaman. Semakin besar massa benda, semakin kecil percepatan yang dihasilkan oleh gaya $F$ yang sama $(a \\propto \\frac{1}{m})$. ✔️"
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
            "Arena *curling* pada Olimpiade Musim Dingin dirancang khusus agar es sangat licin sehingga gaya gesek mendekati nol. Hal ini membuat batu curling bermassa $19\\text{ kg}$ dapat meluncur jauh mengelilingi arena hanya dengan satu dorongan awal!"
          ]
        }
      ]
    },

    {
      heading: "✨ Inti Materi",
      blocks: [
        {
          type: "paragraph",
          text: "Pada bidang datar tanpa gaya gesek, resultan gaya vertikal saling menghilangkan ($\\Sigma F_y = 0 \\implies N = W$), sedangkan resultan gaya horizontal ditentukan penuh oleh gaya luar ($\\Sigma F_x = F$). Sesuai Hukum Newton II, besar percepatan balok berbanding lurus dengan gaya dorong dan berbanding terbalik dengan massanya ($a = \\frac{F}{m}$)."
        }
      ]
    },

    { blocks: [
        {
          type: "paragraph",
          text: [
            "Pada contoh ini kita menganggap lantai sangat licin sehingga tidak ada gaya gesek.",
            "Namun bagaimana jika permukaan lantai kasar dan muncul gaya gesek ($f$) yang menghambat gerak balok? Pada materi berikutnya, kita akan melihat bagaimana gaya gesek statis dan kinetis mengubah resultan gaya serta percepatan benda!",
            "➡️ *Next,* kita menuju portal: [**Balok pada Bidang Datar dengan Gesekan**](/materi/balok-pada-bidang-datar-dengan-gesekan)"
          ] 
        }
      ]
    }
  ]
};

export default balokPadaBidangDatar;