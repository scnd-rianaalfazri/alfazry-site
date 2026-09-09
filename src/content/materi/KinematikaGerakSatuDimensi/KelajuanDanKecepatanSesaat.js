const kelajuanDanKecepatanSesaat = {
  title: "Kelajuan dan Kecepatan Sesaat",
  slug: "kelajuan-dan-kecepatan-sesaat",
  description: "Memahami kelajuan dan kecepatan pada suatu saat tertentu serta membedakannya dari nilai rata-rata.",
  chapter: "↔️↕️ Kinematika: Gerak Satu Dimensi",

  content: [
    {
      heading: "🚀 Hook",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Coba deh, perhatikan speedometer pada sepeda motor atau mobil. Angka yang kamu lihat terus berubah selama perjalanan. Ketika angka menunjukkan 60 km/jam, apakah itu berarti kendaraan selalu bergerak dengan kelajuan 60 km/jam sepanjang perjalanan?",
            "Belum tentu. Angka tersebut hanya memberi tahu kita bagaimana gerak kendaraan pada saat itu."
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
                  text: "Apa perbedaan antara kelajuan rata-rata selama perjalanan dengan kelajuan benda pada suatu saat tertentu?"
                },
                {
                  text: "Bagaimana fisika mendeskripsikan kecepatan benda yang terus berubah setiap saat?"
                }
            ]
          }
        }
      ]
    },
    {
      heading: "⚡ Mengapa Kita Membutuhkan Konsep Sesaat?",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Kelajuan rata-rata dan kecepatan rata-rata memberikan gambaran umum tentang seluruh perjalanan. Namun, kadang kita ingin mengetahui kondisi gerak pada satu momen tertentu.",
            "Misalnya, sebuah mobil menempuh perjalanan selama satu jam dengan kelajuan rata-rata 40 km/jam. Selama perjalanan, mobil mungkin pernah berhenti, bergerak lambat, atau melaju jauh lebih cepat dari 40 km/jam.",
            "Karena itu, nilai rata-rata tidak selalu mampu menceritakan apa yang terjadi pada setiap momen."
          ]
            
        }
      ]
    },
    {
      heading: "🚗 Kelajuan Sesaat",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Kelajuan sesaat adalah kelajuan benda pada suatu saat tertentu. Speedometer kendaraan merupakan contoh sederhana alat yang membantu menunjukkan kelajuan kendaraan pada saat tertentu.",
            "Jika speedometer menunjukkan 60 km/jam, angka tersebut menggambarkan kelajuan kendaraan pada momen ketika pengukuran dilakukan, bukan otomatis kelajuan rata-rata seluruh perjalanan."
          ]
            
        }
      ]
    },
    {
      heading: "🧭 Kecepatan Sesaat",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Kecepatan sesaat adalah kecepatan benda pada suatu saat tertentu. Karena kecepatan merupakan besaran vektor, kecepatan sesaat tidak hanya berkaitan dengan besar gerak, tetapi juga arah gerak berdasarkan sistem koordinat yang digunakan."
          ]   
        }
      ]
    },
    {
      heading: "👀 Visualisasi Konsep",
      blocks: [
        {
          type: "paragraph",
          text:
            "Bayangkan sebuah kendaraan melakukan perjalanan dengan pola berikut:"
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: {
               type: "unordered",
               items: [
                 {
                    text:  "Ketika mulai bergerak, kelajuan rendah." 
                 },
                 {
                    text: "Beberapa saat kemudian, kelajuan meningkat."
                 },
                 {
                    text: "Mendekati lampu merah, kelajuan berkurang."
                 },
                 {
                    text: "Saat berhenti, kelajuan sesaat bernilai 0."
                 },
                 {
                    text: "Setelah lampu hijau, kelajuan kembali berubah."
                 }
               ]
            }
          }
        },
        {
          type: "paragraph",
          text: "Gerakan tersebut dapat memiliki satu nilai kelajuan rata-rata untuk seluruh perjalanan, tetapi memiliki banyak nilai kelajuan sesaat yang berbeda."
        }
      ]
    },
    {
      heading: "⚖️ Rata-Rata vs Sesaat",
      blocks: [
        {
          type: "table",
          table: {
            rows: [
              ["Kelajuan rata-rata", "Menggambarkan total jarak dibandingkan dengan total waktu."],
              ["Kecepatan rata-rata", "Menggambarkan total perpindahan dibandingkan dengan total waktu."],
              ["Kelajuan sesaat", "Menggambarkan kelajuan pada satu momen tertentu."],
              ["Kecepatan sesaat", "Menggambarkan kecepatan pada satu momen tertentu."]
            ]
          }
        }
      ]
    },
    {
      heading: "🔍 Analisis Konsep",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Gunakan pola berpikir berikut ketika menganalisis masalah gerak:",
            "Amati → Tentukan interval atau saat yang ditanyakan → Identifikasi apakah yang dicari nilai rata-rata atau sesaat → Tentukan besaran yang digunakan → Interpretasikan hasil.",
            "Jika soal membahas keseluruhan perjalanan, perhatikan konsep rata-rata. Jika soal menanyakan keadaan pada momen tertentu, perhatikan konsep sesaat."
          ]
        }
      ]
    },
    {
      heading: "📊 Hubungan dengan Grafik Gerak",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Konsep kecepatan sesaat menjadi semakin menarik ketika kita mempelajari grafik posisi terhadap waktu.",
            "Secara konsep, kecepatan sesaat dapat dipahami dari kemiringan grafik posisi-waktu pada suatu titik tertentu. Pada grafik yang melengkung, kemiringan dapat berbeda dari satu titik ke titik lainnya.",
            "Inilah salah satu alasan mengapa grafik menjadi bahasa penting dalam mempelajari gerak."
          ]    
        }
      ]
    },
    {
      heading: "📐 Rumus Kelajuan dan Kecepatan Sesaat",
      blocks: [
        {
          type: "paragraph",
          text: "Sebenarnya, nilai dari kelajuan sesaat itu sama saja dengan kecepatan sesaat. Jadi, untuk penjelasan ini, saya akan menggunakan istilah **kecepatan sesaat** saja, ya."
        },
        {
          type: "equation",
          equation: "v = \\lim_{\\Delta t \\to 0} \\frac{\\Delta x}{\\Delta t}"
        },
        {
          type: "paragraph",
          text: [
            "Konsep kecepatan sesaat ini didapat dari jarak yang ditempuh dari perpindahan benda dalam selang waktu yang sangat singkat (mendekati nol).",
            "Jika menggunakan fungsi turunan, maka:"
          ]
        },
        {
          type: "equation",
          equation: "v(t) = \\frac{dx(t)}{dt}"
        },
        {
          type: "paragraph",
          text: "dengan:"
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "$v(t)$ = fungsi kecepatan dalam variabel t $(m/s)$"
              },
              {
                text: "$x(t)$ = fungsi posisi atau jarak dalam variabel (t)"
              },
              {
                text: "$t$ = waktu $(s)$"
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
            "**SOAL 1**",
            "Posisi bus Transjakarta dinyatakan oleh persamaan fungsi $x=4t^2+2t$ dengan $x$ dalam meter dan $t$ dalam sekon.",
            "Tentukan kecepatan sesaat benda pada $t=3$ sekon.",
            "**JAWAB:**",
            "**Penyelesaian:**",
            "Turunkan persamaan posisi"
          ]
        },
        {
          type: "equation",
          equation: "x=4t^2+2t" 
        },
        {
          type: "paragraph",
          text: "Sehingga akan menjadi:"
        },
        {
          type: "equation",
          equation: "v=8t+2"
        },
        {
          type: "paragraph",
          text: "Masukkan $t=3$:"
        },
        {
          type: "equation",
          equation: [
            "v=8(3)+2",
            "v=24+2",
            "v=\\text{26 m/s}"
          ]
        },
        {
          type: "paragraph",
          text: [
            "**Kesimpulan:**",
            "Kecepatan benda pada detik ke-3 adalah: **26 m/s**"
          ]
        }
      ]
    },
    {
      heading: "⚠️ Miskonsepsi",
      blocks: [
        {
          type: "list",
          list : {
            type: "ordered",
            items: [
                {
                    text: "Miskonsepsi 1",
                    description: [
                        "Kelajuan rata-rata selalu sama dengan angka yang terlihat pada speedometer. ❌",
                        "Gak, gitu",
                        "Kelajuan rata-rata menggambarkan keseluruhan perjalanan, sedangkan speedometer menunjukkan kondisi kelajuan pada suatu saat. ✔ "
                    ]
                },
                {
                    text: "Miskonsepsi 2",
                    description: [
                        "Jika kelajuan rata-rata 60 km/jam, kendaraan selalu bergerak dengan kelajuan 60 km/jam. ❌",
                        "Gak, gitu!",
                        "Kendaraan dapat bergerak dengan kelajuan yang berubah-ubah dan tetap memiliki nilai rata-rata 60 km/jam. ✔"
                    ]
                }
            ]
          }
        }
      ]
    },
    {
      heading: "✨ *Fun Fact*",
      blocks: [
        {
          type: "paragraph",
          text:
            "Informasi gerak sesaat dan gerak rata-rata dapat memberikan gambaran yang berbeda. Karena itu, fisikawan harus selalu memperhatikan pertanyaan: kondisi gerak pada saat kapan yang sedang kita analisis?"
        }
      ]
    },
    {
      heading: "✨ Inti Materi",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Besaran rata-rata membantu kita melihat gambaran besar perjalanan. Besaran sesaat membantu kita melihat apa yang sedang terjadi pada satu momen tertentu.",
            "Keduanya tidak saling menggantikan. Keduanya menjawab pertanyaan yang berbeda tentang gerak."
          ]
            
        }
      ]
    },
    {
      blocks: [
        {
          type: "paragraph",
          text: [
            "Sekarang kita sudah memahami bagaimana mendeskripsikan gerak melalui kelajuan dan kecepatan, baik secara rata-rata maupun pada suatu saat tertentu.",
            "Tetapi ada satu pertanyaan berikutnya: bagaimana jika kecepatan benda terus berubah?"
          ]    
        }
      ]
    }
  ]
};

export default kelajuanDanKecepatanSesaat;
