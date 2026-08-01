const gerakLurusBeraturan = {
  title: "Gerak Lurus Beraturan",
  slug: "gerak-lurus-beraturan",
  description: "Memahami konsep gerak lurus beraturan (GLB), ciri-ciri utama, persamaan matematika, analisis grafik v-t & s-t, serta penerapannya.",
  chapter: "↔️↕️ Kinematika: Gerak Satu Dimensi",

  content: [
    {
      heading: "🚗 Gerak dengan Kecepatan Tetap",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Tidak semua benda yang bergerak mengalami perubahan kecepatan (akselerasi/pengereman).",
            "Bayangkan kamu naik mobil di jalan tol lurus yang sepi dengan mengaktifkan fitur *cruise control* pada $80\\text{ km/jam}$. Jarum speedometer akan terus berada di angka yang sama!",
            "Dalam fisika, gerak lintasan lurus dengan kecepatan yang konstan ini disebut **Gerak Lurus Beraturan (GLB)**."
          ]
        },
      ]
    },

    {
      heading: "📍 Apa Itu GLB?",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Gerak Lurus Beraturan (GLB) adalah gerak suatu benda pada lintasan lurus dengan kecepatan yang selalu konstan (tetap) dari waktu ke waktu.",
            "Konsekuensinya, benda menempuh jarak yang sama untuk setiap selang waktu yang sama."
          ]
        }
      ]
    },

    {
      heading: "✨ Ciri-Ciri Utama GLB",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Sebuah gerakan dikategorikan sebagai GLB jika memenuhi syarat-syarat berikut:"
          ]
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "**Lintasan lurus**",
                description: "Arah gerak tidak berubah-ubah."
              },
              {
                text: "**Kecepatan konstan $(v = tetap/konstan)$**",
                description: "Besarnya kecepatan maupun arahnya tidak bertambah atau berkurang."
              },
              {
                text: "**Percepatan nol $(a = 0)$**",
                description: "Karena kecepatannya tidak berubah, maka tidak ada percepatan sama sekali."
              }
            ]
          }
        }
      ]
    },
    {
      heading: "📐 Formulasi Matematika (Rumus GLB)",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Hubungan antara posisi/jarak, kecepatan, dan waktu pada GLB dirumuskan secara sederhana:",
            "$s = v \\times t$",
            "Atau jika memperhitungkan posisi awal ($s_0$):",
            "$s(t) = s_0 + (v \\times t)$",
            "Keterangan:"
          ]
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "$s$ = Posisi / Jarak tempuh (m)"
              },
              {
                text: "$s_0$ = Posisi awal (m)"
              },
              {
                text: "$v$ = Kecepatan (m/s)"
              },
              {
                text: "$t$ = Waktu (s)"
              }
            ]
          }
        }
      ]
    },

    {
      heading: "📊 Analisis Grafik GLB",
      blocks: [
        {
          type: "paragraph",
          text: [
            "GLB memiliki dua bentuk grafik dasar yang sering keluar di soal-soal fisika:"
          ]
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "**Grafik Kecepatan terhadap Waktu ($v - t$)**",
                description: [
                  "Berupa garis lurus horizontal mendatar.",
                  "Luas daerah di bawah grafik $v - t$ merepresentasikan **jarak tempuh ($s$)**."
                ]
              },
              {
                text: "**Grafik Posisi terhadap Waktu ($s - t$)**",
                description: [
                  "Berupa garis miring miring ke atas linear.",
                  "Kemiringan (gradien) garis menunjukkan nilai **kecepatan ($v$)**.",
                ]
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
            "**Soal:**",
            "Sebuah kereta cepat bergerak lurus dengan kecepatan konstan $72\\text{ km/jam}$. Hitunglah jarak yang ditempuh kereta tersebut dalam waktu $10\\text{ detik}$!",
            "**Pembahasan & Konversi Satuan:**"
          ]
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "Kecepatan ($v$) = $72\\text{ km/jam} = \\frac{72.000\\text{ m}}{3.600\\text{ s}} = 20\\text{ m/s}$"
              },
              {
                text: "Waktu ($t$) = $10\\text{ s}$"
              }
            ]
          }
        },
        {
          type: "paragraph",
          text: [
            "**Jawab:**",
            "$s = v \\times t = 20\\text{ m/s} \\times 10\\text{ s} = 200\\text{ meter}$",     
            "**Kesimpulan:**",
            "Dalam waktu $10\\text{ detik}$, kereta telah menempuh jarak sejauh $200\\text{ meter}$."
          ] 
        }
      ]
    },
    {
      heading: "⚠️ Miskonsepsi Populer",
      blocks: [
        {
          type: "paragraph",
          text: [
            "*'Benda yang kecepatannya besar pasti memiliki percepatan yang besar juga.'*❌",
            "Gak, gitu!",
            "Faktanya, pada GLB mau seberapa pun besarnya kecepatan suatu benda (misalnya $1.000\\text{ km/jam}$), jika nilainya tetap konstan, maka percepatannya adalah **NOL** ($a = 0$). ✔️"
          ]
        }
      ]
    },

    {
      heading: "🌟 Contoh Nyata GLB di Dunia Nyata",
      blocks: [
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "🚆 Kereta maglev saat melaju stabil di lintasan lurus lurus."
              },
              {
                text: "🏭 Barang yang berjalan di atas sistem pita konveyor (*conveyor belt*) pabrik."
              },
              {
                text: "🚀 Pesawat luar angkasa di ruang hampa udara saat mesinnya dimatikan (mempertahankan kecepatan konstan sesuai Hukum I Newton)."
              }
            ]
          }
        }
      ]
    },
    {
      heading: "✨ Inti Materi *(Takeaway Message)*",
      blocks: [
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "GLB adalah gerak lintasan lurus dengan kecepatan konstan."
              },
              {
                text: "Pada GLB, percepatan selalu bernilai nol ($a = 0$)"
              },
              {
                text: "Persamaan utama GLB: $s = v \\times t$."
              }
            ]
          }
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
              question: "Sebuah benda dikatakan mengalami Gerak Lurus Beraturan (GLB) apabila....",
              options: [
                "bergerak lurus dengan kecepatan yang selalu konstan.",
                "bergerak pada lintasan melingkar dengan kelajuan tetap.",
                "bergerak lurus dengan percepatan yang selalu bertambah.",
                "bergerak dengan kecepatan yang berubah-ubah setiap saat.",
                "bergerak bolak-balik pada lintasan yang sama."
              ],
              answerIndex: 0
            },
            {
              question: "Manakah yang merupakan ciri utama GLB?",
              options: [
                "kecepatan berubah secara teratur.",
                "percepatan bernilai positif.",
                "percepatan bernilai nol karena kecepatan tetap.",
                "jarak tempuh selalu lebih kecil dari perpindahan.",
                "arah gerak selalu berubah."
              ],
              answerIndex: 2
            },
            {
              question: "Sebuah kereta bergerak dengan kecepatan tetap 20 m/s selama 10 sekon. Jarak yang ditempuh kereta adalah....",
              options: [
                "20 meter.",
                "100 meter.",
                "200 meter.",
                "300 meter.",
                "400 meter."
              ],
              answerIndex: 2
            },
            {
              question: "Bentuk grafik kecepatan terhadap waktu (v–t) pada Gerak Lurus Beraturan adalah....",
              options: [
                "garis lurus menurun.",
                "kurva parabola.",
                "garis lurus horizontal.",
                "garis zig-zag.",
                "kurva melengkung ke atas."
              ],
              answerIndex: 2
            },
            {
              question: "Pernyataan yang benar mengenai grafik posisi terhadap waktu (s–t) pada GLB adalah....",
              options: [
                "garis horizontal menunjukkan kecepatan konstan.",
                "luas di bawah grafik menunjukkan percepatan.",
                "grafik selalu berbentuk parabola.",
                "grafik hanya dapat digunakan untuk benda yang diam.",
                "grafik berbentuk garis lurus, dan kemiringan (gradien) garis menunjukkan besar kecepatan.",
                ],
              answerIndex: 3
            }],
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
            }]
          }
        }
      ]
    },
    {
      heading: "🚀 Next Mission",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Bagaimana jika suatu benda bergerak lurus tetapi kecepatannya berubah secara teratur karena ada percepatan tetap?",
            "➡️ *Next*, menuju portal: **[Gerak Lurus Berubah Beraturan (GLBB).](/materi/gerak-lurus-berubah-beraturan)**"
          ]
        }
      ]
    }
  ]
};

export default gerakLurusBeraturan;