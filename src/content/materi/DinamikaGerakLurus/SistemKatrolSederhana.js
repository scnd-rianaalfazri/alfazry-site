const sistemKatrolSederhana = {
  title: "Sistem Katrol Sederhana",
  slug: "sistem-katrol-sederhana",
  description: "Menganalisis gerak dua benda yang dihubungkan oleh tali melalui katrol menggunakan Hukum Newton II.",
  chapter: "🚀 Dinamika Gerak Lurus",

  content: [
    {
      blocks: [
        {
          type: "paragraph",
          text: [
            "Bayangkan dua buah balok dihubungkan oleh seutas tali yang melewati sebuah katrol.",
            "Ketika salah satu balok bergerak turun, balok lainnya akan bergerak naik.",
            "Mengapa kedua balok selalu bergerak bersama?",
            "Bagaimana cara menentukan percepatan dan tegangan talinya?"
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
                text: "Bagaimana Hukum II Newton diterapkan ketika terdapat lebih dari satu benda yang bergerak secara bersamaan?"
              },
              {
                text: "Mengapa kedua benda yang bergerak ke arah berbeda (satu naik, satu turun) memiliki besar percepatan yang sama?"
              }
            ]
          }
        }
      ]
    },
    {
      heading: "🧭 Asumsi Sistem",
      blocks: [
        {
          type: "paragraph",
          text: "Agar analisis sistem katrol lebih sederhana dan fokus pada prinsip utama Hukum II Newton, kita menggunakan beberapa asumsi ideal:"
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "Tali tidak bermassa (massa tali diabaikan)."
              },
              {
                text: "Katrol licin/ideal (tidak memiliki gaya gesekan dan massa katrol diabaikan)."
              },
              {
                text: "Tali tidak dapat mulur (panjang tali konstan)."
              }
            ]
          }
        },
        {
          type: "paragraph",
          text: "Dengan asumsi-asumsi tersebut, kedua benda akan memiliki besar percepatan $(a)$ yang sama dan besar tegangan tali $(T)$ sama di seluruh bagian tali."
        }
      ]
    },
    {
      heading: "🧭 Identifikasi Gaya",
      blocks: [
        {
          type: "paragraph",
          text: "Untuk setiap benda, identifikasi gaya secara terpisah."
        },
        {
          type: "ordered",
          list: {
            type: "ordered",
            items: [
              {
                text: "Balok 1:",
                description: [
                  "⬇ Berat $(W_1)$",
                  "⬆ Tegangan Tali $(T)$"
                ]
              },
              {
                text: "Balok 2:",
                description: [
                  "⬇ Berat $(W_2)$",
                  "⬆ Tegangan Tali $(T)$"
                ]
              }
            ]
          }
        }
      ]
    },
    {
      heading: "🎨 Visualisasi Konsep",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Tampilkan ilustrasi dua balok yang dihubungkan oleh tali melalui sebuah katrol.",
            "Berikan arah gaya berat, tegangan tali, serta arah percepatan masing-masing balok."
          ]
        }
      ]
    },
    {
      heading: "📌 Strategi Penyelesaian",
      blocks: [
        {
          text: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "Tentukan arah gerak sistem (balok yang lebih berat akan bergerak turun, benda yang lebih ringan akan bergerak naik)."
              },
              {
                text: "Gambar Diagram Gaya Bebas *(Free Body Diagram)* untuk setiap balok secara terpisah."
              },
              {
                text: "Terapkan Hukum II Newton $(\Sigma F = m \cdot a)$ pada masing-masing benda. Catatan: Gaya yang searah dengan gerak bernilai positif, sedangkan yang berlawanan bernilai negatif."
              },
              {
                text: "Gabungkan (substitusi/eliminasi) persamaan kedua benda untuk menemukan besar percepatan sistem $(a)$."
              },
              {
                text: "Substitusikan nilai percepatan $(a)$ ke salah satu persamaan awal untuk memperoleh besar tegangan tali $(T)$."
              }
            ]
          }
        }
      ]
    },
    {
      heading: "⚖️ Menerapkan Hukum Newton II",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Misalkan balok 1 $(m_1)$ lebih berat dari balok 2 $(m_2)$, sehingga balok 1 bergerak turun dan balok 2 bergerak naik.",
          ]
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "Persamaan untuk Balok 1 (bergerak turun):",
                equation: [
                  "\Sigma F_1 = m_1 \cdot a",
                  "W_1 - T = m_1 \cdot a",
                  "m_1 g - T = m_1 a \quad \text{--- (Persamaan 1)} \text{}"
                ]
              },
              {
                text: "Persamaan untuk Balok 2 (bergerak naik):",
                equation: [
                  "\Sigma F_2 = m_2 \cdot a",
                  "T - W_2 = m_2 \cdot a",
                  "T - m_2 g = m_2 a"
                ]
              },
              {
                text: "Menghitung Percepatan Sistem £(a)$ dengan menjumlahkan Persamaan 1 dan Persamaan 2:",
                equation: [
                  "(m_1 g - T) + (T - m_2 g) = m_1 a + m_2 a",
                  "m_1 g - m_2 g = (m_1 + m_2) a",
                  "(m_1 - m_2) g = (m_1 + m_2) a",
                  "a = \frac{m_1 - m_2}{m_1 + m_2} \cdot g"
                ]
              }
            ]
          }
        }
      ]
    },
    {
      heading: "🧪 Contoh Analisis",
      blocks: [
        {
          type: "paragraph",
          text: [
            "**SOAL:**",
            "Dua buah balok $m_1 = 5\text{ kg}$ dan $m_2 = 3\text{ kg}$ dihubungkan oleh tali melalui katrol licin. Tentukan besar percepatan sistem dan tegangan tali jika percepatan gravitasi $g = 10\text{ m/s}^2$!",
            "**JAWABAN:**",
            "**Diketahui:**",
            "",
            "**Ditanyakan:**",
            "",
            "**Penyelesaian:**"
          ]
        },
        {
          type: "list",
          items: {
            type: "ordered",
            items: [
              {
                text: "Hitung percepatan sistem $(a)$:",
                equation: [
                  "a = \frac{m_1 - m_2}{m_1 + m_2} \cdot g",
                  "a = \frac{5 - 3}{5 + 3} \cdot 10 = \frac{2}{8} \cdot 10 = 2{,}5\text{ m/s}^2"
                ]
              },
              {
                text: "Hitung tegangan tali $(T)$:",
                equation: [
                  "T = T - m_2 g = m_2 a \implies T = m_2 (g + a)",
                  "T = 3 \cdot (10 + 2{,}5) = 3 \cdot 12{,}5 = 37{,}5\text{ N}"
                ]
              }
            ]
          }
        }
      ]
    },
    {
      heading: "🌍 Contoh dalam Kehidupan",
      blocks: [
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "Katrol pengangkat material bangunan",
                description: "Memudahkan pengangkatan beban berat."
              },
              {
                text: "Sistem penyeimbang pada lift",
                description: "Penggunaan beban pembanding *(counterweight)*."
              },
              {
                text: "Mekanisme layar panggung teater",
                description: "Menaikkan dan menurunkan latar/layar panggung dengan lancar."
              },
              {
                text: "Katrol pada kapal layar",
                description: "Mengatur layar dan mengangkat jangkar/beban."
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
          type: "ordered",
          items: {
            type: "ordered",
            items: [
              {
                text: "Miskonsepsi 1",
                description: [
                  "Kedua balok memiliki percepatan yang berbeda. ❌",
                  "Gak, gitu!",
                  "Faktanya, karena dihubungkan oleh tali yang tidak mulur, kedua balok memiliki besar percepatan yang sama, hanya arahnya yang berlawanan. ✔️"
                ]
              },
              {
                text: "Miskonsepsi 2",
                description: [
                  "Tegangan tali berbeda pada setiap sisi katrol. ❌",
                  "Gak, gitu!",
                  "Faktanya, pada katrol ideal, tegangan tali bernilai sama di seluruh bagian tali. ✔️"
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
          text: "Sistem lift modern memanfaatkan prinsip katrol dan pemberat $(counterweight)$. Beban penyeimbang ini dirancang hampir menyamai berat kabin lift, sehingga motor penggerak lift hanya perlu mengeluarkan energi sedikit untuk menggerakkan lift naik atau turun."
        }
      ]
    },
    {
      heading: "✨ Inti Materi",
      blocks: [
        {
          type: "paragraph",
          text: "Pada sistem katrol sederhana, setiap benda harus dianalisis secara terpisah menggunakan Free Body Diagram dan Hukum Newton II. Meskipun arah geraknya berbeda, kedua benda memiliki besar percepatan yang sama karena dihubungkan oleh tali yang tidak mulur."
        }
      ]
    },
    { 
      heading: "🎯 Quick Check", 
      blocks: [
        {
          type: "quickCheck",
          data: {
            questions: [
              {
                question: "Pada sistem katrol sederhana dengan tali yang tidak dapat mulur, kedua balok memiliki....",
                options: [
                  "massa yang selalu sama",
                  "kecepatan yang selalu sama arah",
                  "besar percepatan yang sama, tetapi arahnya berlawanan",
                  "gaya berat yang selalu sama",
                  "tegangan tali yang berbeda pada setiap sisi"
                ],
                answerIndex: 2
              },
              {
                question: "Pada katrol ideal, pernyataan yang benar mengenai tegangan tali adalah....",
                options: [
                  "tegangan tali sama besar di seluruh bagian tali",
                  "tegangan tali selalu lebih besar daripada gaya berat",
                  "tegangan tali bernilai nol karena katrol licin",
                  "tegangan selalu berbeda pada setiap sisi katrol",
                  "tegangan hanya bekerja pada benda yang lebih berat"
                ],
                answerIndex: 0
              },
              {
                question: "Dua balok bermassa 5 kg dan 3 kg dihubungkan dengan tali melalui katrol licin. Jika $g=10 m/s^2$, besar percepatan sistem adalah....",
                options: [
                  "$1,25 m/s^2$",
                  "$2,0 m/s^2$",
                  "$2,5 m/s^2$",
                  "$5,0 m/s^2$",
                  "$8,0 m/s^2$"
                ],
                answerIndex: 2
              },
              {
                question: "Jika balok $m_1$ lebih berat daripada $m_2$, maka....",
                options: [
                  "$m_1$ bergerak turun dan $m_2$ bergerak naik",
                  "$m_1$ bergerak naik dan $m_2$ bergerak turun",
                  "kedua balok bergerak turun",
                  "kedua balok tetap diam",
                  "Hanya $m_1$ yang mengalami percepatan"
                ],
                answerIndex: 0
              },
              {
                question: "Mengapa kedua balok dalam sistem katrol sederhana memiliki besar percepatan yang sama?",
                options: [
                  "karena massa kedua balok harus sama",
                  "karena gaya berat kedua balok selalu sama",
                  "karena tegangan tali selalu lebih besar daripada berat benda",
                  "karena katrol memberikan gaya yang sama pada kedua benda",
                  "karena kedua balok dihubungkan oleh tali yang tidak dapat mulur"
                ],
                answerIndex: 4
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
            "Selain sistem katrol, ada contoh lain yang melibatkan percepatan vertikal, yaitu lift. Mengapa berat badan terasa berbeda saat lift mulai bergerak naik atau turun? Itulah yang akan kita pelajari di page berikutnya.",
            "➡️ *Next,* kita menuju portal: [Lift](/materi/lift)"
          ]
        }
      ]
    }
  ]
};

export default sistemKatrolSederhana;