import { text } from "framer-motion/client";

const gayaSentripetal = {
  title: "Gaya Sentripetal",
  slug: "gaya-sentripetal",
  description: "Memahami gaya sentripetal sebagai resultan gaya yang menjaga benda tetap bergerak pada lintasan melingkar.",
  chapter: "🌀 Dinamika Gerak Melingkar",

  content: [
    {
      blocks: [
        {
          type: "paragraph",
          text: [
            "Bayangkan sebuah bola yang diputar menggunakan tali. Bola terus bergerak mengelilingi tanganmu meskipun secara alami benda yang bergerak cenderung mempertahankan geraknya dalam garis lurus.",
            "Lalu apa yang membuat bola terus-menerus membelok menuju pusat lintasan?",
            "Jawabannya berkaitan dengan resultan gaya yang bekerja pada benda."
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
            "Apa yang menyebabkan benda tetap berada pada lintasan melingkar?",
            "Mengapa resultan gaya pada gerak melingkar harus mengarah menuju pusat?"
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
            "Perhatikan bola yang diputar menggunakan tali.",
            "Gaya yang bekerja pada bola adalah tegangan tali yang arahnya menuju pusat lintasan.",
            "Dalam kasus ini, tegangan tali menjadi gaya yang menghasilkan resultan gaya menuju pusat."
          ]
        }
      ]
    },
    {
      heading: "🎨 Visualisasi Konsep",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Bayangkan sebuah benda bergerak melingkar.",
            "Gambarkan:"
          ]
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "Kecepatan sesaat menyinggung lintasan." 
              },
              {
                text: "Resultan gaya mengarah menuju pusat."
              },
              {
                text: "Percepatan sentripetal juga mengarah menuju pusat."
              }
            ]
          }
        },
        {
          type: "paragraph",
          text: "Ketiga arah ini membantu kita memahami mengapa benda terus membelok mengikuti lintasan lingkaran."
        }
      ]
    },
    {
      heading: "📌 Strategi Penyelesaian",
      blocks: [
        {
          type: "paragraph",
          text: "Gunakan pola analisis berikut:"
        },
        {
          type: "list",
          list: {
            type: "orderd",
            items: [
              {
                text: "Tentukan benda yang dianalisis."
              },
              {
                text: "Identifikasi seluruh gaya yang bekerja."
              },
              {
                text: "Tentukan arah menuju pusat lintasan."
              },
              {
                text: "Buat Free Body Diagram."
              },
              {
                text: "Tentukan resultan gaya yang mengarah ke pusat."
              },
              {
                text: "Hubungkan resultan gaya dengan percepatan melalui Hukum Newton II."
              }
            ]
          }
        }
      ]
    },
    {
      heading: "📝 Free Body Diagram",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Pada bola yang diputar dengan tali, gaya utama yang dianalisis adalah tegangan tali. Arah tegangan tali menuju pusat lintasan.",
            "Karena gaya inilah yang menyebabkan perubahan arah gerak, tegangan tali menjadi sumber gaya sentripetal pada sistem ini."
          ]
        }
      ]
    },
    {
      heading: "⚖️ Analisis Resultan Gaya",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Menurut Hukum Newton II, percepatan muncul karena adanya resultan gaya.",
            "Pada gerak melingkar, percepatan sentripetal mengarah menuju pusat. Karena itu, resultan gaya juga harus memiliki arah menuju pusat."
          ]
        },
        {
          type: "equation",
          eqution: "\\Sigma F_{\\text{radial}} = ma_c"
        },
        {
          type: "paragraph",
          text: "Inilah yang disebut sebagai gaya sentripetal."
        }
      ]
    },
    {
      heading: "📐 Besar Gaya Sentripetal",
      blocks: [
        {
          type: "paragraph",
          text: "Karena besar percepatan sentripetal bergantung pada kelajuan dan jari-jari lintasan, besar resultan gaya menuju pusat juga bergantung pada kedua besaran tersebut."
        },
        {
          type: "equation",
          equation: "F_c = \\frac{mv^2}{r}"
        },
        {
          type: "paragraph",
          text: "Semakin besar massa benda atau kelajuannya, semakin besar gaya sentripetal yang diperlukan. Sebaliknya, semakin besar jari-jari lintasan, semakin kecil gaya sentripetal yang diperlukan untuk kelajuan yang sama."
        }
      ]
    },

    {
      heading: "🧪 Contoh Soal",
      blocks: [
        {
          type: "paragraph",
          text: [
            "**SOAL**",
            "Sebuah bola bermassa 0,5 kg bergerak melingkar dengan kelajuan 4 m/s pada lintasan berjari-jari 2 m.",
            "Untuk mengetahui besar resultan gaya menuju pusat, gunakan hubungan antara massa, kelajuan, dan jari-jari lintasan."
          ]
        },
        {
          type: "equation",
          equation: "F_c = \\frac{(0.5)(4^2)}{2} = 4\\;N"
        },
        {
          type: "paragraph",
          text: "Jadi, diperlukan resultan gaya sebesar 4 N yang arahnya menuju pusat lintasan."
        }
      ]
    },

    {
      heading: "🌍 Contoh dalam Kehidupan",
      blocks: [
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "🚗 Gaya gesek antara ban dan jalan menjaga mobil tetap mengikuti tikungan."
              },
              {
                text: "🪢 Tegangan tali menjaga bola tetap bergerak melingkar."
              },
              {
                text: "🎢 Gaya normal dan gravitasi dapat menghasilkan resultan gaya menuju pusat pada roller coaster."
              },
              {
                text: "🪐 Gaya gravitasi menjaga planet dan satelit tetap berada pada orbitnya."
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
                items: [
                  "Gaya sentripetal adalah gaya tambahan yang selalu muncul pada benda yang bergerak melingkar. ❌",
                  "Gaya sentripetal bukan gaya baru. Istilah tersebut digunakan untuk menyatakan resultan gaya yang arahnya menuju pusat lintasan. ✔️"
                ]
              },
              {
                text: "Miskonsepsi 2",
                items: [
                  "Gaya sentripetal dan gaya sentrifugal adalah pasangan gaya aksi-reaksi. ❌",
                  "Keduanya bukan pasangan Hukum Newton III. Gaya sentripetal adalah resultan gaya pada benda dalam kerangka acuan inersial, sedangkan gaya sentrifugal merupakan konsep gaya semu yang digunakan dalam kerangka berotasi. ✔️"
                ]
              },
              {
                text: "Miskonsepsi 3",
                description:[
                  "Jika kelajuan benda tetap, maka tidak ada percepatan. ❌",
                  "Pada gerak melingkar beraturan, kelajuan dapat tetap tetapi arah kecepatan berubah sehingga tetap terdapat percepatan sentripetal. ✔️"
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
          text: "Jika tali yang digunakan untuk memutar bola tiba-tiba putus, bola tidak terbang menuju luar lingkaran secara radial. Bola akan bergerak mengikuti arah garis singgung lintasan pada saat tali putus."
        }
      ]
    },
    {
      heading: "✨ Inti Materi",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Gaya sentripetal bukan jenis gaya baru, melainkan resultan gaya yang arahnya menuju pusat lintasan dan menyebabkan perubahan arah kecepatan pada gerak melingkar.",
            "Sumber gaya sentripetal dapat berbeda-beda bergantung pada situasi. Tegangan tali, gaya gesek, gaya gravitasi, atau gaya normal dapat menjadi bagian dari resultan gaya yang berperan sebagai gaya sentripetal."
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
                question: "Gaya sentripetal pada gerak melingkar merupakan....",
                options: [
                  "gaya tambahan yang selalu muncul pada benda.",
                  "gaya yang selalu berlawanan dengan arah gerak benda.",
                  "gaya yang arahnya menjauhi pusat lintasan.",
                  "resultan gaya yang arahnya menuju pusat lintasan.",
                  "gaya yang hanya muncul ketika benda diputar menggunakan tali."
                ],
                answerIndex: 3
              },
              {
                question: "Sebuah bola diputar menggunakan tali sehingga bergerak melingkar. Gaya yang berperan sebagai gaya sentripetal pada bola adalah....",
                options: [
                  "gaya berat yang selalu mengarah ke bawah.",
                  "tegangan tali yang mengarah menuju pusat lintasan.",
                  "gaya sentrifugal yang mengarah keluar.",
                  "gaya gesek udara yang mengarah ke belakang.",
                  "massa bola yang bekerja menuju pusat."
                ],
                answerIndex: 1
              },
              {
                question: "Sebuah benda bermassa 2 kg bergerak dengan kelajuan 6 m/s pada lintasan berjari-jari 3 m. Besar gaya sentripetal yang diperlukan adalah....",
                options: [
                  "4 N",
                  "12 N",
                  "18 N",
                  "24 N",
                  "36 N"
                ],
                answerIndex: 3
              },
              {
                question: "JJika kelajuan benda yang bergerak melingkar diperbesar menjadi dua kali semula, sedangkan massa dan jari-jari lintasan tetap, maka gaya sentripetal yang diperlukan menjadi....",
                options: [
                  "setengah kali",
                  "tetap",
                  "dua kali",
                  "empat kali",
                  "delapan kali"
                ],
                answerIndex: 3
              },
              {
                question: "Pernyataan yang benar mengenai gaya sentripetal adalah....",
                options: [
                  "gaya sentripetal merupakan gaya baru yang selalu bekerja pada benda.",
                  "gaya sentripetal dan gaya sentrifugal selalu merupakan pasangan aksi–reaksi.",
                  "jika kelajuan benda tetap, maka percepatannya pasti nol.",
                  "gaya sentripetal merupakan resultan gaya menuju pusat",
                  "gaya sentripetal selalu berasal dari gaya tegangan tali."
                ],
                answerIndex: 3
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
    {
      blocks: [
        {
          type: "paragraph",
          text: [
            "Sekarang kalian sudah tahu, kan? Bahwa gaya sentripetal bukan gaya baru.",
            "Pertanyaan berikutnya menjadi lebih menarik.",
            "Jika gaya sentripetal bukan jenis gaya tersendiri, lalu gaya apa yang sebenarnya menjadi penyebabnya dalam berbagai situasi?",
            "Pada page berikutnya, kita akan membongkar berbagai sumber gaya sentripetal.",
            "➡️ Next, kita menuju portal: [**Sumbar Gaya Sentripetal**](/materi/sumber-gaya-sentripetal)"
          ]
        }
      ]
    }
  ]
};

export default gayaSentripetal;