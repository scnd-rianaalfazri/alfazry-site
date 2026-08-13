const lift = {
  title: "Lift yang Bergerak",
  slug: "lift-yang-bergerak",
  description: "Menganalisis gaya yang bekerja pada seseorang di dalam lift yang bergerak naik, turun, atau diam menggunakan Hukum II Newton.",
  chapter: "🚀 Dinamika Gerak Lurus",

  content: [
    {
      heading: "🛗 Mengapa Tubuh Terasa Lebih Berat?",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Saat lift mulai bergerak naik, tubuh sering terasa lebih berat dan seolah tertekan ke lantai.",
            "Sebaliknya, ketika lift mulai turun, tubuh terasa sedikit 'melayang' atau lebih ringan.",
            "Padahal massa tubuhmu tidak berubah sama sekali! Lalu mengapa sensasi berat tersebut bisa berubah-ubah?"
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
                text: "Apakah berat badan yang diukur oleh timbangan di dalam lift berubah ketika lift bergerak?"
              },
              {
                text: "Gaya apa yang sebenarnya dirasakan oleh telapak kaki kita sebagai indikator 'berat' di dalam lift?"
              },
              {
                text: "Apa yang terjadi jika tali lift tiba-tiba putus?"
              }
            ]
          }
        }
      ]
    },
    {
      heading: "📊 Analisis Gaya pada Lift (Free Body Diagram)",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Sensasi 'berat' yang dirasakan oleh tubuh kita—atau yang terbaca oleh timbangan badan di dalam lift—sebenarnya bukanlah Gaya Berat nyata $(W)$, melainkan **Gaya Normal $(N)$** yaitu gaya tekan balik dari lantai lift terhadap kaki kita (sering disebut *Berat Semu*).",
            "Dua gaya utama yang bekerja pada seseorang bermassa $m$ di dalam lift adalah:"
          ]
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "**Gaya Berat $(W = m \\cdot g)$:**",
                description: "Mengarah lurus ke bawah menuju pusat Bumi."
              },
              {
                text: "**Gaya Normal $(N)$:**",
                description: "Mengarah ke atas, tegak lurus lantai lift."
              }
            ]
          }
        },
        {
          type: "paragraph",
          text: "Sesuai dengan **Hukum II Newton** pada sumbu vertikal $(Y)$:"
        },
        {
          type: "equation",
          equation: "\\Sigma F_y = m \\cdot a \\Rightarrow N - W = m \\cdot a"
        }
      ]
    },
    {
      heading: "⚙️ 4 Skenario Kondisi Gerak Lift",
      blocks: [
        {
          type: "paragraph",
          text: "Besar Gaya Normal ($N$) atau gaya tekan lantai sangat bergantung pada arah dan keberadaan percepatan $(a)$:"
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "**Lift Diam atau Bergerak dengan Kecepatan Konstan ($a = 0$):**",
                equation: "N = W = m \\cdot g",
                description: "Gaya desakan lantai sama persis dengan gaya berat asli. Tubuh terasa biasa saja."
              },
              {
                text: "**Lift Bergerak Naik Dipercepat / Turun Diperlambat ($+a$ ke atas):**",
                equation: "N = W + m \\cdot a = m(g + a)",
                description: "Karena $N > W$, gaya dorong lantai ke kaki meningkat. **Tubuh terasa lebih berat!**"
              },
              {
                text: "**Lift Bergerak Turun Dipercepat / Naik Diperlambat ($-a$ ke bawah):**",
                equation: "N = W - m \\cdot a = m(g - a)",
                description: "Karena $N < W$, desakan lantai berkurang. **Tubuh terasa lebih ringan!**"
              },
              {
                text: "**Tali Lift Putus / Gerak Jatuh Bebas ($a = g$ ke bawah):**",
                equation: "N = m(g - g) = 0",
                description: "Lantai lift jatuh dengan percepatan sama persis dengan tubuhmu. Kaki tidak lagi menekan lantai ($N = 0$). Kamu mengalami kondisi **tanpa bobot (*weightlessness*)**!"
              }
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
            "**SOAL:**",
            "Seorang siswa bermassa $50\\text{ kg}$ berdiri di atas timbangan badan di dalam sebuah lift. Jika percepatan gravitasi $g = 10\\text{ m/s}^2$, berapakah jarum skala yang ditunjukkan timbangan ketika lift bergerak naik dengan percepatan $2\\text{ m/s}^2$?",
            "**JAWABAN:**",
            "**Diketahui:**",
            "",
            "**Ditanyakan:**",
            "",
            "**Penyelesaian:**",
          ]
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "**Identifikasi Variabel**",
                children: {
                  type: "unordered",
                  itens: [
                    {
                      text: "Massa siswa $(m) = 50\\text{ kg}$"
                    },
                    {
                      text: "Percepatan gravitasi ($g$) = $10\\text{ m/s}^2$"
                    },
                    {
                      text: "Percepatan lift ($a$) = $2\\text{ m/s}^2$ (Arah ke atas / naik)"
                    }
                  ]
                }
              },
              {
                text: "**Langkah 2: Gunakan Persamaan Lift Bergerak Naik Dipercepat**",
                equation: [
                  "N = m(g + a)",
                  "N = 50\\text{ kg} \\cdot (10 + 2)\\text{ m/s}^2 = 50 \\cdot 12 = 600\\text{ N}",

                ]
              },
              {
                text: "**Langkah 3: Konversi ke Skala Timbangan (Massa Semu)**",
                equation: "m_{\\text{semu}} = \\frac{N}{g} = \\frac{600\\text{ N}}{10\\text{ m/s}^2} = 60\\text{ kg}"
              }
            ]
          }
        },
        {
          type: "paragraph",
          text: [
            "**KESIMPULAN:**",
            "Timbangan akan menunjukkan angka $60\\text{ kg}$ (terasa $10\\text{ kg}$ lebih berat dari massa asli!)."
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
                text: "Pengurangan Massa Tubuh di Lift",
                description: [
                  "'Massa tubuh kita bertambah saat lift bergerak naik dan berkurang saat lift meluncur turun.' ❌",
                  "Gak, gitu!",
                  "Faktanya, massa $(m)$ adalah jumlah materi tubuh yang bernilai konstan di mana pun. Yang berubah hanyalah **Gaya Normal $(N)$** atau desakan lantai yang dipengaruhi oleh percepatan lift! ✔️"
                ]
              },
              {
                text: "Berat Tubuh Bertambah",
                description: [
                  "Lift bergerak naik pasti selalu membuat tubuh terasa lebih berat.",
                  "Gak gitu, tubuh terasa lebih berat hanya saat naik **dipercepat**. Ketika lift naik dan mulai mengerem/lambat menjelang sampai lantai tujuan (diperlambat), tubuh justru terasa **lebih ringan**! ✔️"
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
          text: "Astronot yang diluncurkan ke luar angkasa dapat merasakan gaya tekan beberapa kali lebih besar daripada berat tubuhnya (hingga 3G - 4G) akibat percepatan roket yang sangat tinggi pada fase awal peluncuran!"
        }
      ]
    },
    {
      heading: "✨ Inti Materi",
      blocks: [
        {
          type: "paragraph",
          text: "Pada sistem lift, massa dan gaya berat tetap. Yang berubah adalah gaya normal akibat percepatan lift. Besar gaya normal inilah yang menentukan sensasi tubuh terasa lebih berat, lebih ringan, atau tetap seperti biasa."
        }
      ]
    },
    { blocks: [
        {
          type: "paragraph",
          text: [
            "Kini kamu telah mempelajari berbagai penerapan Hukum Newton pada gerak lurus, mulai dari balok di bidang datar, bidang miring, sistem katrol, hingga lift.",
            "Selanjutnya, kita akan mengetahui bagaimana gerak lurus ini diterapkan di dalam kehidupan nyata.",
            "➡️ *Next:* kita menuju portal: [**Dinamika Gerak Lurus di Dunia Nyata**](/materi/dinamika-gerak-lurus-di-dunia-nyata)"
          ]
        }
      ]
    }
  ]
};

export default lift;