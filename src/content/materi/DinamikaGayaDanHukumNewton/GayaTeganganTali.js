const gayaTeganganTali = {
  title: "Gaya Tegangan Tali",
  slug: "gaya-tegangan-tali",
  description: "Memahami gaya tegangan tali sebagai gaya tarik yang diteruskan melalui tali, kabel, atau kawat tegang dalam berbagai kondisi fisika.",
  chapter: "🚀 Dinamika: Gaya dan Hukum Newton",

  content: [
    { blocks: [
        {
          type: "paragraph",
          text: [
            "Bayangkan kamu menimba air dari sumur menggunakan ember yang diikat dengan tali.",
            "Ketika tali ditarik ke atas, ember ikut terangkat. Padahal tanganmu tidak menyentuh ember secara langsung.",
            "Lalu, bagaimana gaya dari tanganmu dapat sampai ke ember? Jawabannya terletak pada gaya yang merambat sepanjang tali tersebut!"
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
                text: "Bagaimana tali dapat meneruskan gaya dari satu benda ke benda lainnya?"
              },
              {
                text: "Apakah besar gaya tegangan pada kedua ujung tali selalu sama?"
              },
              {
                text: "Apa yang terjadi pada gaya tegangan tali jika sistem bergerak naik atau turun dengan percepatan?"
              }
            ]
          }
        }
      ]
    },
    {
      heading: "🧵 Apa Itu Gaya Tegangan Tali?",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Gaya Tegangan Tali (disimbolkan dengan huruf $T$ dari kata *Tension*) adalah gaya tarik yang diteruskan melalui tali, kawat, kabel, atau rantai ketika ditarik oleh gaya dari kedua ujungnya.",
            "Beberapa karakteristik utama Gaya Tegangan Tali yang wajib kamu ingat:"
          ]
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "**Hanya Bekerja Saat Tegang:**",
                description: "Gaya tegangan tali hanya ada jika tali dalam kondisi tegang/kencang. Jika tali kendor, nilainya $T = 0$."
              },
              {
                text: "**Gaya Tarik (Bukan Dorong):**",
                description: "Tali hanya bisa menarik benda, tidak bisa mendorong benda.",
              },
              {
                text: "**Arah Gaya Meninggalkan Benda:**",
                description: "Arah gaya tegangan tali selalu menjauhi benda yang ditinjau (mengikuti arah bentangan tali)."
              },
              {
                text: "**Tali Ideal:**",
                description: "Dalam fisika dasar, tali dianggap ideal (massa tali diabaikan dan tidak mulur), sehingga besar gaya tegangan di seluruh bagian tali bernilai sama."
              }
            ]
          }
        }
      ]
    },
    {
      heading: "📐 Formulasi Matematika Gaya Tegangan Tali",
      blocks: [
        {
          type: "paragraph",
          text: "Besar gaya tegangan tali sangat bergantung pada kondisi gerak dan susunan sistem benda. Mari kita bedah beberapa kasus umum:"
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "Benda Digantung Vertikal (Diam atau Bergerak Konstan)",
                description: "Berdasarkan Hukum I Newton $(\\Sigma F = 0)$:",
                equation: "T = W = m \\cdot g"
              },
              {
                text: "Benda Ditarik Vertikal dengan Percepatan $(a)$",
                description: "Berdasarkan Hukum II Newton $(\\Sigma F = m \\cdot a)$:",
                children: {
                  type: "unordered",
                  items: [
                    {
                      text: "**Bergerak/Ditarik Ke Atas:**",
                      equation: "T = m(g + a)",
                      description:  "(Tegangan tali makin **besar**)",
                    },
                    {
                      text: "**Bergerak/Diturunkan Ke Bawah:**",
                      equation: "T = m(g - a)",
                      description: "(Tegangan tali makin **kecil**)"
                    }
                  ]
                }
              },
              {
                text: "Dua Benda Dihubungkan Tali pada Bidang Datar Licin",
                description: "Jika benda $m_1$ dan $m_2$ dihubungkan tali lalu ditarik gaya $F$ pada $m_2$:",
                equation: "a = \\frac{F}{m_1 + m_2} \\quad \\implies \\quad T = m_1 \\cdot a = \\left(\\frac{m_1}{m_1 + m_2}\\right) F"
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
           "Sebuah ember berisi air dengan massa total $4\\text{ kg}$ ditarik ke atas dari sumur menggunakan seutas tali. Jika percepatan gravitasi $g = 10\\text{ m/s}^2$, hitunglah gaya tegangan tali jika ember ditarik ke atas dengan percepatan konstan $2\\text{ m/s}^2$!",
           "**JAWABAN**",
           "**Diketahui:**",
          ]
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "$m = 4\\text{ kg}$"
              },
              {
                text: "$g = 10\\text{ m/s}^2$"
              },
              {
                text: "$a = 2\\text{ m/s}^2$ (ke atas)."
              }
            ]
          }
        },
        {
          type: "paragraph",
          text: [
            "**Ditanya:**",
            "Gaya tegangan tali ($T$)?",
            "**Penyelesaian:**",
            "**Gunakan Rumus Vertikal Ke Atas:** $T = m(g + a)$",
            "**Hitung:**"
          ]
        },
        {
          type: "equation",
          equation: [
            "T = 4 \\cdot (10 + 2) = 4 \\cdot 12 = 48\\text{ N}"
          ]
        },
        {
          type: "paragraph",
          text: [
            "**KESIMPULAN:**",
            "Jadi, besar gaya tegangan tali saat ember ditarik naik dengan percepatan adalah **$48\\text{ Newton}$**."
          ]
        }
      ]
    },
    {
      heading: "⚠️ Miskonsepsi Populer (Fact Check!)",
      blocks: [
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "Miskonsepsi 1",
                description: [
                  "Tali kendor tetap memiliki gaya tegangan tali. ❌",
                  "Gak, gitu!",
                  "Faktanya, gaya tegangan tali *hanya* ada ketika tali teregang/tegang. Jika kendor, nilainya $0\\text{ N}$. ✔️"
                ]
              },
              {
                text: "Miskonsepsi 2",
                description: [
                  "Gaya tegangan tali selalu bernilai sama dengan gaya berat benda ($T = W$). ❌",
                  "Gak, gitu!",
                  "Faktanya, $T = W$ hanya berlaku jika benda diam atau bergerak dengan kecepatan konstan (GLB). Jika benda dipercepat naik atau turun, $T \\neq W$. ✔️"
                ]
              },
              {
                text: "Miskonsepsi 3",
                description: [
                  "Gaya tegangan tali bisa mendorong benda. ❌",
                  "Gak, gitu!",
                  "Faktanya, tali tidak memiliki sifat kaku seperti batang besi, sehingga tali hanya bisa memberikan gaya **tarik**, tidak bisa gaya dorong. ✔️"
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
            "Jembatan gantung modern menggunakan kabel baja super tebal yang mampu menahan gaya tegangan hingga jutaan Newton. Tanpa perhitungan gaya tegangan tali yang presisi dari para insinyur, kabel dapat putus dan jembatan tidak akan sanggup menopang beban kendaraan yang melintas!"
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
            "Gaya tegangan tali adalah gaya tarik yang diteruskan melalui tali, kabel, atau kawat yang tegang. Arah gaya selalu mengikuti arah tali, menjauhi benda yang ditinjau, dan hanya muncul ketika tali dalam keadaan tegang."
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
                question: "Gaya tegangan tali adalah....",
                options: [
                  "gaya dorong yang diberikan tali pada benda.",
                  "gaya tarik yang diteruskan melalui tali, kabel, atau kawat yang tegang.",
                  "gaya gesek antara tali dan benda.",
                  "gaya gravitasi yang bekerja pada tali.",
                  "gaya normal yang diberikan tali pada benda."
                ],
                answerIndex: 1
              },
              {
                question: "Pernyataan yang benar mengenai gaya tegangan tali adalah....",
                options: [
                  "tali dapat memberikan gaya tarik maupun gaya dorong.",
                  "gaya tegangan tetap ada meskipun tali kendur.",
                  "arah gaya tegangan selalu mengikuti arah tali dan menjauhi benda yang ditinjau.",
                  "besar gaya tegangan selalu lebih kecil daripada gaya berat.",
                  "gaya tegangan hanya muncul pada benda yang bergerak."
                ],
                answerIndex: 2
              },
              {
                question: "Sebuah benda bermassa 5 kg digantung diam pada seutas tali. Jika $\\text{g = 10 m/s}^2$, maka besar gaya tegangan talinya adalah....",
                options: [
                  "5 N.",
                  "10 N.",
                  "25 N.",
                  "50 N.",
                  "60 N."
                ],
                answerIndex: 3
              },
              {
                question: "Sebuah ember bermassa 4 kg ditarik ke atas dengan percepatan $\\text {2 m/s}^2$. Jika $\\text {g = 10 m/s}^2$, maka besar gaya tegangan tali adalah....",
                options: [
                  "32 N.",
                  "40 N.",
                  "48 N.",
                  "52 N.",
                  "60 N."
                ],
                answerIndex: 2
              },
              {
                question: "Pernyataan yang benar mengenai gaya tegangan tali adalah....",
                options: [
                  "gaya tegangan selalu sama dengan gaya berat pada semua kondisi.",
                  "tali yang kendur tetap memiliki gaya tegangan yang besar.",
                  "pada tali ideal yang tegang, besar gaya tegangan di setiap bagian tali adalah sama.",
                  "gaya tegangan bekerja tegak lurus terhadap permukaan bidang.",
                  "gaya tegangan merupakan gaya tak kontak."
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
            "Selain gaya gravitasi, gaya normal, dan gaya tegangan tali, masih ada satu gaya yang sangat berperan dalam kehidupan sehari-hari.",
            "Mengapa kita tidak terpeleset saat berjalan? Mengapa mobil dapat mengerem dan berhenti?",
            "Jawabannya ada pada **Gaya Gesek** yang akan kita pelajari pada misi berikutnya!",
            "➡️ *Next,* kita menuju portal: [**Gaya Gesek**](/materi/gaya-gesek)"
          ]
        }
      ]
    }
  ]
};

export default gayaTeganganTali;