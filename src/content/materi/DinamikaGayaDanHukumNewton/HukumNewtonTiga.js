const hukumNewtonTiga = {
  title: "Hukum Newton III: Aksi dan Reaksi",
  slug: "hukum-newton-tiga",
  description: "Memahami Hukum Newton III serta pasangan gaya aksi dan reaksi yang selalu muncul ketika dua benda saling berinteraksi.",
  chapter: "🚀 Dinamika: Gaya dan Hukum Newton",

  content: [
    { blocks: [
        {
          type: "paragraph",
          text: [
            "Coba tekan permukaan meja menggunakan telapak tanganmu.",
            "Semakin kuat kamu menekan meja, semakin kuat pula tekanan yang kamu rasakan pada tanganmu.",
            "Padahal, meja terlihat diam.",
            "Mengapa meja bisa 'mendorong balik' tanganmu?"
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
            "Mengapa setiap gaya selalu memiliki pasangan?",
            "Apakah gaya aksi dan reaksi saling meniadakan?"
          ]
        }
      ]
    },
    {
      heading: "📖 Bunyi Hukum Newton III",
      blocks: [
        {
          type: "paragraph",
          text: [
            'Hukum Newton III menyatakan bahwa: "Ketika benda A memberikan gaya pada benda B, maka benda B akan memberikan gaya yang sama besar tetapi berlawanan arah kepada benda A."',
            "Artinya, gaya tidak pernah muncul sendirian di alam semesta. Gaya selalu muncul dalam bentuk pasangan aksi-reaksi."
          ]
        }
      ]
    },
    {
      heading: "📐 Formulasi Matematika",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Secara matematis, Hukum Newton III dapat dituliskan sebagai:"
          ]
        },
        {
          type: "equation",
          equation: "F_{\\text{aksi}} = -F_{\\text{reaksi}}"
        },
        {
          type: "paragraph",
          text: [
            "Keterangan:"
          ]
        },
        {
          type: "list",
          text: {
            type: "unordered",
            items: [
              {
                text: "$F_{\\text{aksi}}$ = gaya yang diberikan benda pertama kepada benda kedua (N)",
              },
              {
                text: "$F_{\\text{reaksi}}$ = gaya balik yang diberikan benda kedua kepada benda pertama (N)",
              },
              {
                text: "Tanda minus ($-$) menunjukkan bahwa arah gaya reaksi berlawanan dengan arah gaya aksi."
              }
            ]
          }
        }
      ]
    },
    {
      heading: "🎯 3 Syarat Mutlak Pasangan Gaya Aksi-Reaksi",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Banyak orang sering terkecoh menentukan mana gaya yang termasuk pasangan aksi-reaksi. Suatu pasangan gaya HANYA disebut aksi-reaksi jika memenuhi 3 kriteria ini:"
          ]
        },
        {
          type: "list",
          list: {
            type: "numbered",
            items: [
              {
                text: "**Sama Besar:** Nilai/magnitudo kedua gaya tepat sama ($|F_{\\text{aksi}}| = |F_{\\text{reaksi}}|$).",
              },
              {
                text: "**Berlawanan Arah:** Arah kedua gaya tepat $180^\\circ$ berkebalikan.",
              },
              {
                text: "**Bekerja pada Benda yang BERBEDA:** Gaya aksi bekerja pada benda B, sedangkan gaya reaksi bekerja pada benda A."
              }   
            ]
          }
        }
      ]
    },
    {
      heading: "⚠️ Miskonsepsi Populer",
      blocks: [
        {
          type: "list",
          list: {
            type: "Ordered",
            items: [
              {
                text: "Miskonsepsi 1",
                description: [
                  "Gaya aksi dan gaya reaksi saling meniadakan sehingga resultan gayanya nol dan benda tidak bisa bergerak. ❌",
                  "Gaya aksi dan reaksi **TIDAK PERNAH** saling meniadakan! Mengapa? Karena kedua gaya tersebut bekerja pada **dua benda yang berbeda**, bukan pada satu benda yang sama. Resultan gaya $\\Sigma F = 0$ hanya berlaku jika gaya-gaya tersebut bekerja pada benda yang sama. ✔️"
                ]
              },
              {
                text: "Miskomunikasi 2",
                description: [
                  "Gaya Normal ($N$) dan Gaya Berat ($W$) pada buku di atas meja adalah pasangan aksi-reaksi. ❌",
                  "Salah! Gaya Normal dan Gaya Berat pada buku keduanya bekerja pada **buku itu sendiri** (satu benda). Pasangan reaksi dari gaya berat buku (tarikan Bumi pada buku) adalah gaya tarik buku pada Bumi! ✔️"
                ]
              }
            ]
          }
        }
      ]
    },
    {
      heading: "💡 Contoh Penerapan dalam Kehidupan Sehari-hari",
      blocks: [
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              "🚣 **Mendayung Perahu:** Kamu mendorong air ke belakang ($F_{\\text{aksi}}$), air mendorong perahu ke depan ($F_{\\text{reaksi}}$).",
              "🏃 **Berjalan / Berlari:** Kaki menekan tanah ke belakang ($F_{\\text{aksi}}$), tanah mendorong kaki ke depan ($F_{\\text{reaksi}}$).",
              "🚀 **Peluncuran Roket:** Roket menyemburkan gas panas ke bawah ($F_{\\text{aksi}}$), gas mendorong roket meluncur ke atas ($F_{\\text{reaksi}}$).",
              "🏊 **Berenang:** Tangan mendorong air ke belakang ($F_{\\text{aksi}}$), air mendorong tubuh perenang melaju ke depan ($F_{\\text{reaksi}}$)."
            ]         
          }
        }
      ]
    },
    {
      heading: "✏️ Contoh Soal & Pembahasan",
      blocks: [
        {
          type: "paragraph",
          text: [
            "**__SOAL 1:__**",
            "Seorang atlet renang mendorong dinding kolam dengan gaya sebesar $150\\text{ N}$ ke arah barat. Berapakah besar dan arah gaya yang diberikan dinding kolam pada kaki atlet tersebut?",
            "**JAWABAN**",
            "*Diketahui:*",
            "$F_{aksi} = 150 \\text{ N ke arah barat}$",
            "*Ditanyakan:*",
            "$F_{reaksi}$",
            "**Penyelesaian:**"
          ]
        },
        {
          type: "equation",
          equation: "F_{\\text{reaksi}} = -F_{\\text{aksi}}"
        },
        {
          type: "paragraph",
          text: [
            "Gaya aksi yang diberikan atlet adalah $150\\text{ N}$ ke barat. Maka, gaya reaksi yang diberikan dinding kolam pada kaki atlet adalah **$150\\text{ N}$ ke arah timur** (berlawanan arah dengan gaya aksi)."
          ]
        },
        {
          type: "paragraph",
          text: [
            "**---------------------------------------------------------------------------------------------------------------------------------------------------------**",
            "**__SOAL 2__**",
            "Sebuah bus berukuran besar bertabrakan dengan seekor lalat. Gaya tabrakan manakah yang lebih besar: gaya bus pada lalat atau gaya lalat pada bus?",
            "**JAWABAN**",
            "Menurut Hukum Newton III, besar gaya aksi-reaksi **selalu tepat sama** ($|F_{\\text{aksi}}| = |F_{\\text{reaksi}}|$). Jadi, besar gaya bus pada lalat **sama persis** dengan besar gaya lalat pada bus. Namun, karena massa lalat jauh lebih kecil ($a = F/m$), percepatan deselerasi lalat sangat besar sehingga lalat mengalami kerusakan parah, sementara percepatan bus hampir tidak terasa."
          ]
        }
      ]
    },
    {
      heading: "🌟 *Fun Fact*",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Gurita dan cumi-cumi bergerak menggunakan prinsip Hukum Newton III. Mereka menyemburkan air ke belakang sehingga tubuhnya terdorong ke depan. Mekanisme ini dikenal sebagai jet propulsion."
          ]
        }
      ]
    },
    {
      heading: "✨ Inti Materi",
      blocks: [
        {
          type: "paragraph",
          text: "Hukum Newton III menyatakan bahwa setiap gaya selalu memiliki pasangan gaya yang sama besar, berlawanan arah, dan bekerja pada dua benda yang berbeda. Oleh karena itu, gaya aksi dan reaksi tidak pernah saling meniadakan."
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
                question: "Hukum Newton I menyatakan bahwa....",
                options: [
                  "benda tetap diam atau bergerak lurus beraturan.",
                  "benda akan selalu bergerak jika diberi gaya.",
                  "benda akan mengalami percepatan jika massanya besar." ,
                  "semua benda yang bergerak pasti mengalami percepatan.",
                  "gaya selalu sebanding dengan kecepatan benda."
                ],
                answerIndex: 0
              },
              {
                question: "Sifat suatu benda yang cenderung mempertahankan keadaan diam atau bergerak lurus beraturan disebut....",
                options: [
                  "elastisitas.",
                  "momentum.",
                  "inersia (kelembaman).",
                  "gravitasi.",
                  "usaha."
                ],
                answerIndex: 2
              },
              {
                question: "Mengapa tubuh penumpang terdorong ke depan ketika mobil mengerem secara tiba-tiba?",
                options: [
                  "Karena gaya gravitasi bertambah besar.",
                  "Karena tubuh berusaha mempertahankan keadaan geraknya akibat inersia.",
                  "Karena massa tubuh tiba-tiba bertambah.",
                  "Karena gaya mesin mobil mendorong tubuh ke depan.",
                  "Karena gaya gesek antara ban dan jalan menghilang."
                ],
                answerIndex: 1
              },
              {
                question: "Sebuah buku diletakkan di atas meja dan tetap diam. Pernyataan yang benar adalah....",
                options: [
                  "tidak ada gaya yang bekerja pada buku.",
                  "resultan gaya pada buku sama dengan nol",
                  "buku tetap diam karena massanya sangat kecil.",
                  "gaya gravitasi tidak bekerja pada buku.",
                  "gaya normal lebih besar daripada gaya berat."
                ],
                answerIndex: 1
              },
              {
                question: "Dua benda memiliki massa yang berbeda. Benda A bermassa 5 kg, sedangkan benda B bermassa 50 kg. Pernyataan yang benar mengenai inersia kedua benda adalah....",
                options: [
                  "benda A memiliki inersia lebih besar daripada benda B.",
                  "kedua benda memiliki inersia yang sama.",
                  "benda B memiliki inersia lebih besar sehingga lebih sulit mengubah keadaan geraknya.",
                  "inersia tidak dipengaruhi oleh massa benda.",
                  "benda yang lebih besar massanya selalu bergerak lebih cepat."
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
            "Sekarang kamu telah memahami bagaimana gaya bekerja melalui tiga Hukum Newton.",
            "Namun, gaya yang dibahas Newton berasal dari berbagai sumber. Pada misi berikutnya, kita akan mengenal berbagai gaya yang bekerja di alam, mulai dari gaya gravitasi, gaya normal, gaya gesek, hingga gaya tegangan tali.",
            "➡️ *Next,* kita menuju portal: [**Jenis-jenis Gaya**](/materi/jenis-jenis-gaya)"
          ]
        }
      ]
    }
  ]
};

export default hukumNewtonTiga;