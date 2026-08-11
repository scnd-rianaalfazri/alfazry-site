const gayaNormal = {
  title: "Gaya Normal",
  slug: "gaya-normal",
  description: "Memahami gaya normal sebagai gaya kontak yang diberikan permukaan untuk menopang benda dalam berbagai kondisi lintasan.",
  chapter: "🚀 Dinamika: Gaya dan Hukum Newton",

  content: [
    { blocks: [
        {
          type: "paragraph",
          text: [
            "Bayangkan sebuah buku diletakkan di atas meja.",
            "Buku selalu mengalami gaya berat $(W = m \\cdot g)$ yang menariknya lurus ke bawah menuju pusat Bumi.",
            "Namun, kenyataannya buku tidak terus bergerak turun menembus meja. Buku melayang diam begitu saja di atas permukaan meja.",
            "Apa gaya misterius yang menahan dan menopang buku tersebut agar tidak jatuh menembus lantai?"
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
                text: "Gaya apa yang diberikan permukaan tanah atau meja untuk menopang benda?"
              },
              {
                text: "Apakah besar gaya normal selalu sama dengan besar gaya berat benda?"
              },
              {
                text: "Ke mana arah gaya normal jika permukaan bendanya miring?"
              }
            ]
          }
        }
      ]
    },
    {
      heading: "🖐️ Apa Itu Gaya Normal?",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Gaya Normal $(N)$ adalah gaya kontak atau gaya sentuh yang diberikan oleh suatu permukaan terhadap benda yang menyentuhnya. Kata 'normal' dalam matematika berarti **tegak lurus**.",
            "Arah gaya normal **selalu tegak lurus $(90^\\circ)$ menjauhi permukaan bidang sentuh**, ke mana pun arah bidang tersebut menghadap."
          ]
        }
      ]
    },
    {
      heading: "📐 Formulasi Gaya Normal dalam Berbagai Kondisi",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Gaya normal bersifat pasif—besarnya menyesuaikan dengan kondisi gaya-gaya lain yang bekerja pada benda. Berikut beberapa skenario utamanya:"
          ]
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "**Bidang Datar Horizontal (Tanpa Gaya Luar Vertikal):**",
                equation: "$$N = W = m \\cdot g$$"
              },
              {
                text: "**Bidang Datar dengan Gaya Luar Vertikal $(F)$:**",
                children: {
                  type: "unordered",
                  items: [
                    {
                      text: "Jika benda ditekan ke bawah dengan gaya",
                      equation: "$F$: $$N = W + F$$"
                    },
                    {
                      text: "Jika benda ditarik ke atas dengan gaya",
                      description: "$F$: $$N = W - F$$"
                    }
                  ]
                }
              },
              {
                text: "**Bidang Miring dengan Sudut Kemiringan $\\theta$:**",
                equation: "$$N = W \\cos\\theta = m \\cdot g \\cos\\theta$$"
              },
              {
                text: "**Di Dalam Lift yang Bergerak Vertikal (Massa Benda $m$):**",
                children: {
                  type: "unordered",
                  items: [
                    {
                      text: "Lift dipercepat ke atas (percepatan $+a$):",
                      equation: "$$N = m(g + a)$$ (Kamu merasa lebih berat!)"
                    },
                    {
                      text: "Lift dipercepat ke bawah (percepatan $-a$):",
                      equation: "$$N = m(g - a)$$ (Kamu merasa melayang/lebih ringan!)"
                    }
                  ]
                }
              }
            ]
          },
        }
      ]
    },
    {
      heading: "📝 Contoh Soal & Pembahasan",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Sebuah balok bermassa $m = 4\\text{ kg}$ diletakkan di atas bidang miring licin dengan sudut kemiringan $\\theta = 60^\\circ$. Jika percepatan gravitasi $g = 10\\text{ m/s}^2$, hitunglah besar gaya normal yang bekerja pada balok tersebut!",
            "**JAWABAN:**",
            "**Diketahui:**",
          ]
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "$\\cos(60^\\circ) = 0.5$",
              },
              {
                text: "$m = k \\text{ kg}"
              },
              {
                text: "$g = 10 \\text{m/s}^2$"
              }
            ]
          }
        },
        {
          type: "paragraph",
          text: [    
            "**Ditanyakan:**",
            "Gaya normal $(N)$ yang bekerja pada beda tesebut",
            "**Penyelesaian:**"
          ]
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "Tentukan gaya berat balok:",
                equation: [
                  "W = m \\cdot g",
                  "W = 4\\text{ kg} \\times 10\\text{ m/s}^2",
                  "W = 40\\text{ N}"
                ]
              },
              {
                text: "Masukkan ke rumus gaya normal bidang miring:",
                equation: [
                  "N = W \\cos\\theta",
                  "N = 40 \\cdot \\cos(60^\\circ)",
                  "N = 40 \\times 0.5",
                  "N = 20\\text{ N}"
                ]
              }
            ]
          }
        },
        {
          type: "paragraph",
          text: [
            "**KESIMPULAN:**",
            "Jadi, besar gaya normal yang dialami balok adalah **$20\\text{ N}$** tegak lurus terhadap bidang miring."
          ]
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
                text: "**Miskonsepsi 1:**",
                description: [
                  "Gaya normal dan Gaya berat selalu sama besar $(N = W)$ ❌",
                  "Gaya normal hanya sama dengan gaya berat pada bidang horizontal diam tanpa gaya luar vertikal. Pada bidang miring atau lift bergerak, besarnya $N$ berbeda dari $W$. ✔️"
                ] 
              },
              {
                text: "**Miskonsepsi 2:**",
                description: [
                  {
                    text: "**Miskonsepsi 2:**",
                    description: [
                      "Gaya Normal dan Gaya Berat adalah pasangan aksi-reaksi Hukum Newton III. ❌",
                      "Gak, gitu!",
                      "Meskipun $N$ dan $W$ bernilai sama pada meja datar, keduanya bekerja pada **satu benda yang sama** (buku) dan penyebab gayanya berbeda.",
                      "Pasangan aksi-reaksi gaya berat buku adalah gaya tarik bumi pada buku, sedangkan pasangan reaksi gaya normal meja adalah gaya tekan buku pada meja.Meskipun $N$ dan $W$ bernilai sama pada meja datar, keduanya bekerja pada **satu benda yang sama** (buku) dan penyebab gayanya berbeda. Pasangan aksi-reaksi gaya berat buku adalah gaya tarik bumi pada buku, sedangkan pasangan reaksi gaya normal meja adalah gaya tekan buku pada meja.Meskipun $N$ dan $W$ bernilai sama pada meja datar, keduanya bekerja pada **satu benda yang sama** (buku) dan penyebab gayanya berbeda. Pasangan aksi-reaksi gaya berat buku adalah gaya tarik bumi pada buku, sedangkan pasangan reaksi gaya normal meja adalah gaya tekan buku pada meja.Meskipun $N$ dan $W$ bernilai sama pada meja datar, keduanya bekerja pada **satu benda yang sama** (buku) dan penyebab gayanya berbeda. Pasangan aksi-reaksi gaya berat buku adalah gaya tarik bumi pada buku, sedangkan pasangan reaksi gaya normal meja adalah gaya tekan buku pada meja. ✔️"
                    ]
                  }
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
            "Saat berada di dalam lift yang sedang bergerak naik atau turun dengan percepatan, gaya normal yang kamu rasakan dapat berubah. Inilah sebabnya kamu kadang merasa tubuhmu 'bertambah berat' ketika lift melaju naik mendadak, atau merasa seolah 'ketinggalan organ tubuh' ketika lift meluncur turun!"
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
            "Gaya normal adalah gaya kontak yang diberikan permukaan kepada benda dan arahnya selalu tegak lurus terhadap permukaan. Besarnya bergantung pada kondisi benda dan tidak selalu sama dengan gaya berat."
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
                question: "Pernyataan yang benar mengenai gaya gravitasi adalah....",
                options: [
                  "gaya kontak yang diberikan oleh permukaan.",
                  "gaya tarik Bumi yang bekerja pada suatu benda.",
                  "gaya gesek yang menghambat gerak benda.",
                  "gaya tarik yang diberikan oleh tali pada benda.",
                  "gaya yang selalu searah dengan gerak benda."
                ],
                answerIndex: 0
              },
              {
                question: "Sebuah buku bermassa $\\text{3 kg}$ diletakkan diam di atas meja datar tanpa gaya vertikal lain. Jika $\\text{g = 10 m/s}^2$, maka besar gaya normal yang bekerja pada buku adalah....",
                options: [
                  "3 N.",
                  "10 N.",
                  "20 N.",
                  "30 N.",
                  "60 N."
                ],
                answerIndex: 3
              },
              {
                question: "Manakah pernyataan yang benar mengenai arah gaya normal?",
                options: [
                  "Selalu menuju pusat Bumi.",
                  "Selalu searah dengan gaya berat.",
                  "Selalu sejajar dengan permukaan bidang.",
                  "Selalu tegak lurus terhadap permukaan bidang sentuh.",
                  "Selalu berlawanan arah dengan gerak benda."
                ],
                answerIndex: 3
              },
              {
                question: "Sebuah balok berada pada bidang miring licin. Dibandingkan dengan balok yang berada di bidang datar, besar gaya normal pada balok di bidang miring adalah....",
                options: [
                  "selalu lebih besar daripada gaya berat.",
                  "selalu sama dengan gaya berat.",
                  "lebih kecil daripada gaya berat.",
                  "sama dengan nol.",
                  "tidak dipengaruhi oleh sudut kemiringan."
                ],
                answerIndex: 2
              },
              {
                question: "Pernyataan yang benar mengenai gaya normal dan gaya berat adalah....",
                options: [
                  "gaya normal dan gaya berat selalu merupakan pasangan aksi–reaksi Hukum Newton III.",
                  "gaya normal selalu sama besar dengan gaya berat pada semua kondisi.",
                  "gaya normal dan gaya berat dapat bernilai sama pada bidang datar, tetapi keduanya bekerja pada benda yang sama sehingga bukan pasangan aksi–reaksi.",
                  "gaya normal hanya muncul jika benda bergerak.",
                  "gaya berat selalu lebih kecil daripada gaya normal."
                ],
                answerIndex: 2
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
    { blocks: [
        {
          type: "paragraph",
          text: [
            "Selain permukaan, benda juga dapat ditarik atau ditahan oleh tali.",
            "Pada misi berikutnya, kita akan mempelajari gaya tegangan tali dan bagaimana gaya ini bekerja pada berbagai sistem seperti ember, katrol, dan ayunan.",
            "➡️ *Next,* kita menuju portal: [**Gaya Tegangan Tali**](/materi/gaya-tegangan-tali)"
          ]
        }
      ]
    }
  ]
};

export default gayaNormal;