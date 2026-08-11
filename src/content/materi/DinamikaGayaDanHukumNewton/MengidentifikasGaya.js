const mengidentifikasiGaya = {
  title: "Mengidentifikasi Gaya yang Bekerja pada Benda",
  slug: "mengidentifikasi-gaya",
  description: "Belajar mengenali semua gaya yang bekerja pada suatu benda sebagai langkah awal wajib sebelum menggambarkan Free Body Diagram (FBD) dan menyelesaikan soal dinamika.",
  chapter: "🚀 Dinamika: Gaya dan Hukum Newton",

  content: [
    { blocks: [
        {
          type: "paragraph",
          text: [
            "Seorang fisikawan atau insinyur handal tidak pernah langsung memuntahkan rumus matematika begitu melihat benda bergerak atau diam.",
            "Langkah pertama yang selalu dilakukan adalah menjadi 'Detektif Gaya'—mengidentifikasi dan mendata semua gaya yang sedang 'mengeroyok' benda tersebut!",
            "Semakin tepat dan teliti kamu dalam mengenali gaya-gaya ini, semakin jamin makin mulus langkahmu dalam menentukan arah gerak dan menghitung percepatan benda."
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
            "Bagaimana cara mendeteksi gaya apa saja yang sedang bekerja pada suatu benda tanpa ada yang kelewatan?",
            "Pertanyaan wajib bagi seorang detektif gaya:",
            "Apakah benda bersentuhan dengan permukaan? Apakah ada tali yang menariknya? Apakah benda berada dalam medan gravitasi?"
          ]
        }
      ]
    },
    {
      heading: "📋 Panduan Lakukan Checklist Gaya",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Biar kamu nggak bingung atau ada gaya yang 'ketinggalan', gunakan rumus analisis checklist 5 gaya utama berikut:"
          ]
        },
        {
            type: "list",
            list: {
                type: "ordered",
                items: [
                "1. 🌍 Gaya Berat ($W$): Apakah benda memiliki massa dan berada di planet berkali-kali gravitasi? (Arah selalu tegak lurus menuju pusat bumi / ke bawah).",
                "2. 🛏️ Gaya Normal ($N$): Apakah benda menempel atau bersentuhan dengan suatu permukaan? (Arah selalu tegak lurus keluar dari permukaan bidang).",
                "3. 🧵 Gaya Tegangan Tali ($T$): Apakah ada tali, rantai, atau kabel yang menarik benda? (Arah selalu menjauhi benda menyusuri tali).",
                "4. 👟 Gaya Gesek ($f$): Apakah permukaannya kasar dan ada kecenderungan benda bergeser? (Arah selalu berlawanan dengan arah/kecenderungan gerak).",
                "5. 🚗 Gaya Luar / Dorongan / Tarikan ($F$): Apakah ada mesin, tangan, atau agen luar yang sengaja mendorong/menarik benda?"
            ]       
            }
        },
      ]
    },
    {
      heading: "🧮 Kasus Analisis Nyata: Menjadi Detektif di Lapangan",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Mari kita uji kemampuan detektifmu pada 3 skenario berbeda:"
          ]
        },
        {
            type: "list",
            list: {
                type: "ordered",
                list: [
                    {
                        text: "Skenario A",
                        description: "Buku Diam di Atas Meja Datar",
                        children: {
                            type: "unordered",
                            items: [
                                {
                                    text: "Ada bumi? Ya -> Gaya Berat ($W$) ke bawah."
                                },
                                {
                                    text: "Nempel permukaan meja? Ya -> Gaya Normal ($N$) ke atas."
                                },
                                {
                                    text: "Ada tali / dorongan / gesekan? Tidak."
                                },
                                {
                                    text: "👉 Total gaya yang bekerja: 2 Gaya ($W$ dan $N$)."
                                }
                            ]
                        }
                    },
                    {
                        text: "Skenario B",
                        description: "Balok Ditarik Tali Miring di Lantai Kasar",
                        children: {
                            type: "unordered",
                            items: [
                                {
                                    text: "Gaya Berat ($W$) -> Ke bawah.\n• Gaya Normal ($N$) -> Ke atas (tegak lurus lantai)."
                                },
                                {
                                    text: "Gaya Tegangan Tali ($T$) -> Miring searah tali."
                                },
                                {
                                    text: "Gaya Gesek ($f$) -> Ke belakang / berlawanan arah tarikan."
                                },
                                {
                                    text: "👉 Total gaya yang bekerja: 4 Gaya ($W$, $N$, $T$, dan $f$)."
                                }
                            ]
                        }
                    },
                    {
                        text: "Skenario C",
                        description: "Mobil Meluncur Turun di Bidang Miring Kasar",
                        children: {
                            type: "unordered",
                            items: [
                                {
                                    text: "Gaya Berat ($W$) -> Lurus ke bawah menuju pusat bumi."
                                },
                                {
                                    text: "Gaya Normal ($N$) -> Tegak lurus tegak keluar dari bidang miring."
                                },
                                {
                                    text: "Gaya Gesek ($f$) -> Ke atas menyusuri bidang miring.\n👉 Total gaya yang bekerja: 3 Gaya ($W$, $N$, dan $f$)."
                                }
                            ]
                        }
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
          type: "paragraph",
          text: [
            "'Benda yang sedang bergerak pasti punya gaya dorong searah geraknya.' ❌",
            "Gak, gitu!",
            "Faktanya, TIDAK SELALU! Benda yang meluncur di atas es atau bola yang dilempar ke atas bergerak karena memiliki *kecepatan* ($v$), bukan karena masih ada gaya dorong yang bekerja padanya. Jangan memasukkan gaya 'imajiner' yang sebenarnya sudah tidak ada! ✔️"
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
            "Insinyur NASA dan pembuat mobil balap Formula 1 hampir selalu memulai analisis mekanika dengan mengidentifikasi semua gaya yang bekerja. Langkah sederhana ini membantu mereka merancang roket, jembatan, robot, hingga mobil balap super aman!"
          ]
        }
      ]
    },
    {
      heading: "✨ Inti Materi",
      blocks: [
        {
          type: "paragraph",
          text: "Sebelum menyelesaikan soal dinamika fisika, kita harus mampu mengenali semua gaya yang bekerja pada benda secara presisi. Gaya yang paling sering ditemui adalah gaya berat ($W$), gaya normal ($N$), gaya tegangan tali ($T$), gaya gesek ($f$), dan gaya luar ($F$)."
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
                question: "Langkah pertama yang sebaiknya dilakukan sebelum menyelesaikan soal dinamika adalah....",
                options: [
                  "menghitung percepatan benda.",
                  "mengidentifikasi semua gaya yang bekerja pada benda.",
                  "menghitung massa benda.",
                  "menentukan kecepatan akhir benda.",
                  "langsung menggunakan rumus Hukum Newton."
                ],
                answerIndex: 1
              },
              {
                question: "Sebuah buku diletakkan diam di atas meja datar. Gaya yang bekerja pada buku adalah....",
                options: [
                  "gaya berat dan gaya normal.",
                  "gaya berat dan gaya gesek.",
                  "gaya normal dan gaya tegangan tali.",
                  "gaya dorong dan gaya gesek.",
                  "gaya berat, gaya normal, dan gaya tegangan tali."
                ],
                answerIndex: 0
              },
              {
                question: "Sebuah balok ditarik menggunakan tali di atas lantai kasar. Gaya yang tidak bekerja pada balok adalah....",
                options: [
                  "gaya berat.",
                  "gaya normal.",
                  "gaya tegangan tali.",
                  "gaya gesek.",
                  "gaya apung."
                ],
                answerIndex: 1
              },
              {
                question: "Sebuah mobil meluncur menuruni bidang miring yang kasar. Gaya gesek pada mobil arahnya....",
                options: [
                  "tegak lurus bidang miring.",
                  "ke bawah menuju pusat Bumi.",
                  "ke bawah sepanjang bidang miring.",
                  "ke atas sepanjang bidang miring",
                  "sejajar dengan gaya normal."
                ],
                answerIndex: 3
              },
              {
                question: "Seorang siswa melempar bola ke atas. Setelah bola terlepas dari tangan dan hambatan udara diabaikan, gaya yang bekerja pada bola adalah....",
                options: [
                  "gaya dorong dari tangan dan gaya berat.",
                  "gaya dorong dari tangan saja.",
                  "gaya berat saja.",
                  "gaya berat dan gaya normal.",
                  "gaya berat dan gaya tegangan tali."
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
            "Sekarang kamu sudah jago mengenali gaya-gaya yang bekerja pada suatu benda.",
            "Pada misi berikutnya, kita akan belajar menggambarkan semua gaya tersebut ke dalam sebuah Diagram Gaya atau Free Body Diagram (FBD), yaitu alat utama yang digunakan fisikawan dan insinyur untuk menganalisis gerak benda! 🎯",
            "➡️ *Next, kita menuju portal:* "
          ]
        }
      ]
    }
  ]
};

export default mengidentifikasiGaya;