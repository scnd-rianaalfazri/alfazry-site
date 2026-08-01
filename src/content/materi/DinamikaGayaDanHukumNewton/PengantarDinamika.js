import { text } from "framer-motion/client";

const pengantarDinamika = {
  title: "Pengantar Dinamika",
  slug: "pengantar-dinamika",
  description: "Memahami perbedaan antara kinematika dan dinamika serta mengenal gaya sebagai penyebab perubahan gerak benda.",
  chapter: "🚀 Dinamika: Gaya dan Hukum Newton",

  content: [
    { blocks: [
        {
          type: "paragraph",
          text: [
            "Selamat datang di chapter baru! Pada chapter sebelumnya, kamu telah mempelajari bagaimana benda bergerak melalui konsep gerak lurus, gerak parabola, dan gerak melingkar.",
            "Sekarang saatnya menjawab pertanyaan yang jauh lebih menarik:",
            "“Mengapa benda bisa bergerak? Mengapa benda dapat berhenti, dipercepat, atau berubah arah?”"
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
            "Apa yang sebenarnya menyebabkan sebuah benda berubah keadaan geraknya?",
            "Coba bayangkan: 'Mengapa bola yang ditendang dapat melaju kencang, sedangkan bola yang dibiarkan di atas rumput akan tetap diam?'"
          ]
        }
      ]
    },
    {
      heading: "⚙️ Apa Itu Dinamika?",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Dinamika adalah cabang fisika yang mempelajari penyebab suatu benda mengalami perubahan gerak.",
            "Jika kinematika menjelaskan **bagaimana** benda bergerak, maka dinamika menjelaskan **mengapa** benda tersebut bisa bergerak.",
            "Fokus utama dinamika adalah hubungan antara **gaya** dan **gerak benda**."
          ]
        }
      ]
    },
    {
      heading: "🆚 Kinematika vs Dinamika",
      blocks: [
        {
          type: "heading",
          text: "🆚 Kinematika vs Dinamika"
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "**Kinematika**",
                description: "Mempelajari posisi, perpindahan, kecepatan, dan percepatan *tanpa* membahas penyebabnya."
              },
              {
                text: "**Dinamika**",
                description: "Mempelajari *gaya* sebagai penyebab benda mengalami perubahan gerak."
              }
            ]
          }
        },
        {
          type: "paragraph",
          text: [
            "Kedua cabang ini saling melengkapi untuk menjelaskan gerak benda secara utuh dan komprehensif."
          ]
        }
      ]
    },
    {
      heading: "💪 Gaya Sebagai Penyebab Gerak",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Dalam kehidupan sehari-hari, hampir semua perubahan gerak disebabkan oleh gaya.",
            "Saat kamu mendorong meja, menendang bola, mengerem sepeda, atau menarik koper, sebenarnya kamu sedang memberikan gaya pada benda tersebut.",
            "Gaya inilah yang menyebabkan benda mulai bergerak, berhenti, berubah kecepatan, atau berubah arah."
          ]
        }
      ]
    },
    {
      heading: "🌍 Dinamika Ada di Sekitar Kita",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Konsep dinamika digunakan hampir di semua bidang teknologi modern:"
          ]
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "**Insinyur Otomotif**",
                description: "Memanfaatkannya untuk merancang sistem pengereman kendaraan yang aman."
              },
              {
                text: "**Perancang Pesawat**",
                description: "Menggunakannya untuk menghitung gaya angkat udara."
              },
              {
                text: "**Ilmuwan Antariksa**",
                description: "Menggunakannya untuk menentukan lintasan roket dan satelit."
              }
            ]
          }
        }
      ]
    },
    {
      heading: "🔍 Apa yang Akan Dipelajari?",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Pada chapter ini kamu akan mempelajari:"
          ]
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "Konsep gaya dan resultan gaya.",
              },
              {
                text: "Hukum Newton I, II, dan III.",
              },
              {
                text: "Berbagai jenis gaya yang bekerja pada benda (Gaya Berat, Normal, Gesek, dll).",
              },
              {
                text: "Cara menggambar Diagram Gaya Bebas / *Free Body Diagram* (FBD).",
              },
              {
                text: "Analisis berbagai kasus dinamika dalam kehidupan sehari-hari."
              }
            ]
          }
        }
      ]
    },
    {
      heading: "⚠️ Miskonsepsi Popular",
      blocks: [
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "Miskonsepsi 1",
                description: [
                  "Semua benda yang bergerak pasti selalu diberi gaya. ❌",
                  "Faktanya, benda dapat tetap bergerak lurus beraturan meskipun resultan gaya yang bekerja padanya nol (Hukum I Newton). ✔️"
                ]
              },
              {
                text: "Miskonsepsi 2",
                description: [
                  "Gaya hanya dapat membuat benda bergerak. ❌",
                  "Faktanya, gaya juga dapat menghentikan benda, mengubah arah gerak, mempercepat, memperlambat, bahkan mengubah bentuk benda. ✔️"
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
            "Selama lebih dari 300 tahun, Hukum Newton menjadi dasar utama dalam merancang kendaraan, jembatan, pesawat terbang, hingga misi eksplorasi luar angkasa. Bahkan hingga sekarang, konsep ini masih digunakan dalam berbagai teknologi modern!"
          ]
        }
      ]
    },

    {
      heading: "✨ Inti Materi *(Takeaway Message)*",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Dinamika mempelajari penyebab perubahan gerak suatu benda. Penyebab tersebut adalah **gaya** yang bekerja pada benda. Dengan memahami dinamika, kita dapat menjelaskan mengapa benda dapat bergerak, berhenti, dipercepat, maupun berubah arah."
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
                question: "Cabang fisika yang mempelajari penyebab suatu benda mengalami perubahan gerak adalah....",
                options: [
                  "kinematika.",
                  "kinamika.",
                  "termodinamika.",
                  "optika.",
                  "gelombang."
                ],
                answerIndex: 1
              },
              {
                question: "Perbedaan yang tepat antara kinematika dan dinamika adalah....",
                options: [
                  "kinematika mempelajari gaya, sedangkan dinamika mempelajari suhu.",
                  "kinematika mempelajari penyebab gerak, sedangkan dinamika mempelajari bentuk benda.",
                  "kinematika menjelaskan bagaimana benda bergerak, sedangkan dinamika menjelaskan mengapa benda bergerak.",
                  "kinematika hanya berlaku untuk benda diam, sedangkan dinamika hanya berlaku untuk benda bergerak.",
                  "kinematika dan dinamika memiliki pembahasan yang sama."
                ],
                answerIndex: 3
              },
              {
                question: "Manakah kegiatan berikut yang menunjukkan adanya gaya yang mengubah arah gerak suatu benda?",
                options: [
                  "buku diletakkan di atas meja.",
                  "bola ditendang hingga berubah arah menuju gawang.",
                  "lampu dinyalakan di ruang kelas.",
                  "air dipanaskan hingga mendidih.",
                  "es batu mencair di bawah sinar matahari."
                ],
                answerIndex: 1
              },
              {
                question: "Berdasarkan materi, gaya tidak hanya dapat membuat benda bergerak, tetapi juga dapat....",
                options: [
                  "mengubah massa benda.",
                  "mengubah warna benda.",
                  "mengubah bentuk dan arah gerak benda.",
                  "menghilangkan gaya gravitasi.",
                  "memperbesar volume semua benda."
                ],
                answerIndex: 2
              },
              {
                question: "Konsep dinamika banyak dimanfaatkan dalam kehidupan sehari-hari. Contoh penerapannya yang benar adalah....",
                options: [
                  "insinyur otomotif menggunakan dinamika untuk merancang sistem pengereman.",
                  "dokter menggunakan dinamika untuk menentukan golongan darah.",
                  "koki menggunakan dinamika untuk menentukan rasa makanan.",
                  "pelukis menggunakan dinamika untuk memilih warna cat.",
                  "musisi menggunakan dinamika untuk menentukan tinggi nada."
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
            "Sekarang kamu telah memahami tujuan mempelajari dinamika.",
            "Pada misi berikutnya, kita akan mengenal lebih dekat apa itu gaya, bagaimana gaya bekerja, dan mengapa gaya menjadi konsep utama dalam seluruh pembahasan dinamika!",
            "➡️ *Next,* kita menuju portal: [**Pengertian Gaya**](/materi/pengertian-gaya)"
          ]
        }
      ]
    }
  ]
};

export default pengantarDinamika;