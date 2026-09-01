import img1 from "/src/assets/Materi/HakikatIlmuFisika/portal-kesimpulan-dan-komunikasi-ilmiah.png"
import img2 from "/src/assets/Materi/HakikatIlmuFisika/mengolah-dan-menafsirkan-data1.png"
import img3 from "/src/assets/Materi/HakikatIlmuFisika/mengolah-dan-menafsirkan-data2.png"

const mengolahData = {
  title: "Mengolah dan Menafsirkan Data",
  slug: "mengolah-dan-menafsirkan-data",
  description: "Memahami cara mengolah, menyajikan, dan menafsirkan data hasil eksperimen agar dapat digunakan untuk menarik kesimpulan yang tepat.",
  chapter: "🔬 Hakikat Ilmu Fisika & Metode Ilmiah",

  content: [
  {
    blocks: [
      {
        type: "image",
        src: img2
      },
      {
        type: "paragraph",
        text: [
          "Bayangkan kamu telah melakukan percobaan keren sebanyak sepuluh kali. Selesai nyatet semuanya di buku log.",
          "Apakah petualangan penelitianmu sudah beres sampai di situ?",
          "Eits, belum dong!",
          "🛑 Data-data angka itu barulah baris misterius yang belum bersuara. Biar bermakna dan bisa nge-spill jawabannya, data mentah tersebut harus kita olah dan analisis terlebih dahulu!"
        ]
      }
    ]
  },
  { heading: "📊 Mengapa Data Harus Diolah?", 
    blocks: [
      { 
        type: "paragraph", 
        text: [
          "Sering kali, data mentah itu kelihatan membingungkan—cuma tumpukan angka acak tanpa arah.",
          "Dengan mengolah data (bisa dicari rata-ratanya, dihitung ketidakpastiannya, atau dikelompokkan), kita bisa dengan mudah menemukan pola tersembunyi, membandingkan hasil antar-variabel, dan membuat kesimpulan objektif yang no-cap alias akurat!"
        ] 
      }
    ]
  },
  { heading: "📝 Menyajikan Data", 
    blocks: [
      { 
        type: "paragraph", 
        text: [
          "Biar orang lain gak pusing pas baca hasil risetmu, kamu wajib menyajikannya dalam bentuk visual yang estetik dan informatif. Ada beberapa format penyajian data yang umum digunakan:",
        ]
      },
      {
        type: "carousel",
        carousel: {
          cards: [
            {
              eyebrow: "CARA MENYAJIKAN DATA",
              title: "📋 Tabel",
              text: "Tabel adalah fondasi awal penyajian data. Dengan tabel, kamu menyimpan data observasi berdasarkan variabel bebas dan terikat secara tertata."
            },
            {
              eyebrow: "CARA MENYAJIKAN DATA",
              title: "📈 Grafik",
              text: "Grafik berfungsi untuk menyusun angka secara rapi dan presisi. Grafik membuat data angkamu 'berbicara'. Dalam Fisika, grafik mempermudah kita melihat hubungan antarvariabel secara langsung:"
            },
            {
              eyebrow: "CARA MENYAJIKAN DATA",
              title: "📉 Diagram",
              text: "Bagus untuk membandingkan porsi atau kategori data.",
            },
            {
              eyebrow: "CARA MENYAJIKAN DATA",
              title: "📄 Narasi",
              text: "Penjelasan teks kasual untuk memperjelas visualnya."
            }
          ]
        }
      }
    ]
  },
  {
    heading: "Cara Menyajikan Data",
    blocks: [
      {
        type: "list",
        list: {
          type: "ordered",
          style: "upperAlpha",
          items: [
            {
              text: "📋 **TABEL**",
              description: [
                "Tabel berguna untuk menyusun angka secara rapi dan presisi.",
                "💡 Tips bikin tabel yang *proper*:"
              ],
              children: {
                type: "ordered",
                items: [
                  {
                    text: "Beri judul tabel yang jelas."
                  },
                  {
                    text: "Pastikan setiap kolom memiliki nama variabel beserta **satuan SI** yang dipakai, misalnya:",
                    children: {
                      type: "unordered",
                      items: [
                        {
                          text: "Waktu $(t)$ dalam sekon"
                        },
                        {
                          text: "Jarak $(s)$ dalam meter"
                        }
                      ]
                    }
                  },
                  {
                    text: "Tuliskan batas ketidakpastian alat ukur jika diperlukan."
                  } 
                ]
              }
            },
            {
              text: "📈 **GRAFIK**",
              children: {
                type: "ordered",
                items: [
                  {
                    text: "**Sumbu X (Horizontal):**",
                    description: [
                      "Diisi oleh Variabel Bebas (yang kamu ubah-ubah, misalnya: "
                    ],
                    children: {
                      type: "unordered",
                      items: [
                        {
                          text: "masa beban"
                        },
                        {
                          text: "panjang tali"
                        }
                      ]
                    }
                  },
                  {
                    text: "**Sumbu Y (Vertikal):**",
                    description: [
                      " Diisi oleh Variabel Terikat (yang diukur responsnya, misal:"
                    ],
                    children: {
                      type: "unordered",
                      items: [
                        {
                          text: "pertambahan panjang"
                        },
                        {
                          text: "periode ayunan"
                        }
                      ]
                    }
                  },
                  {
                    text: "Jenis hubungan yang sering muncul pada grafik:",
                    children: {
                      type: "unordered",
                      items: [
                        {
                          text: "**Linear Berbanding Lurus:**",
                          description: "Sumbu Y naik seiring bertambahnya Sumbu X"
                        },
                        {
                          text: "**Berbanding Terbalik:**",
                          description: "Sumbu Y justru makin kecil saat Sumbu X makin besar."
                        },
                        {
                          text: "**Kuadratik/Eksponensial:**",
                          description:"Grafik membentuk kurva melengkung secara signifikan." 
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              text: "📉 **DIAGRAM**",
              description: [
                "Setelah data terpasang di grafik atau tabel, detektif fisika di dalam dirimu harus beraksi! Cari pola yang konsisten dari percobaanmu.",
                "Coba tanyakan hal berikut pada datamu:"
              ],
              children: {
                type: "ordered",
                items: [
                  {
                    text: "Apakah nilainya terus meningkat secara konstan?"
                  },
                  {
                    text: "Apakah ada fluktuasi naik-turun yang drastis?"
                  },
                  {
                    text: "Apakah ada *outlier* (data 'aneh' yang nilainya melenceng jauh dibanding data lainnya)?"
                  }
                ]
              }
            },
            {
              text: "📄 **NARASI**",
              description: [
                "Menafsirkan data berarti menjelaskan **makna di balik pola** tersebut. Apa alasannya grafikmu berbentuk konstan atau melengkung?",
                "⚠️ **Aturan Emas:**",
                "Interpretasi harus MURNI berbasis data yang diperoleh, bukan asumsi, opini pribadi, atau sekadar tebak-tebakan!"
              ]
            }
          ]
        }
      }
    ]
  },
  { 
    heading: "🌍 Contoh Sederhana", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Kamu menguji apakah panjang tali mempengaruhi periode ayunan $(T)$. Data menunjukkan saat panjang tali $(l)$ ditambah, periode $(T)$ ikut membesar secara melengkung (non-linear).",
          "**Interpretasi:**",
          "Periode ayunan berbanding lurus dengan akar kuadrat panjang tali $(T \\propto \\sqrt{l})$",
          "**Kesimpulan:**",
          "Panjang tali terbukti mempengaruhi periode ayunan bandul secara signifikan."
        ]
      }
    ]
  },
  { heading: "🌟 *Fun Fact*", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Di zaman modern ini, ilmuwan Fisika tidak lagi menghitung ribuan data secara manual! Mereka menggunakan tools AI, pemrograman Python, atau software seperti MATLAB untuk menganalisis terabita data simulasi partikel di CERN hingga sinyal gelombang gravitasi dari luar angkasa."
        ]
      }
    ]
  },
  { heading: "⚠️ Miskonsepsi", 
      blocks: [
        {
          type: "image",
          src: img3
        },
        {
        type: "paragraph",
        text: [
          "*'Grafik estetik dan bagus pasti bikin riset kita terbukti benar.' ❌",
          "Gak, gitu!",
          "Faktanya, grafik yang estetik tidak menjamin riset benar jika datanya tidak valid, alat ukurnya rusak, atau interpretasinya dipaksakan (bias) demi mencocok-cocokkan dengan teori! ✔️"
        ]
      }
    ]
  },
  { heading: "✨ Inti Materi", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Data eksperimen adalah kunci utama Metode Ilmiah. Mengolah data dengan jujur, objektif, dan sistematis adalah satu-satunya cara untuk menemukan kebenaran ilmiah tanpa prasangka."
        ]
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
            question: "Mengapa data hasil eksperimen perlu diolah?",
            options: [
              "Agar data terlihat lebih banyak.",
              "Agar hasil eksperimen selalu sesuai dengan hipotesis.",
              "Agar tidak perlu membuat laporan penelitian.",
              "Agar data dapat diubah sesuai keinginan peneliti.",
              "Agar lebih mudah menemukan pola dan menarik kesimpulan yang tepat."
            ],
            answerIndex: 4
          },
          {
            question: "Manakah yang bukan merupakan cara menyajikan data hasil eksperimen?",
            options: [
              "Tabel.",
              "Grafik.",
              "Diagram.",
              "Narasi.",
              "Hipotesis."
            ],
            answerIndex: 4
          },
          {
            question: "Fungsi utama grafik dalam penyajian data adalah....",
            options: [
              "Menambah jumlah data hasil eksperimen.",
              "Menggantikan proses pengamatan.",
              "Memudahkan melihat hubungan antarvariabel dan kecenderungan data.",
              "Membuktikan bahwa hipotesis selalu benar.",
              "Menghilangkan kesalahan pengukuran."
            ],
            answerIndex: 2
          },
          {
            question: "Menafsirkan data berarti....",
            options: [
              "Mengubah data agar sesuai dengan harapan.",
              "Menjelaskan makna pola yang ditemukan berdasarkan data hasil eksperimen.",
              "Menyalin semua data ke dalam tabel.",
              "Menghapus data yang dianggap tidak sesuai.",
              "Membuat grafik tanpa melakukan analisis."
            ],
            answerIndex: 1
          },
          {
            question: "Pernyataan yang benar mengenai pengolahan data adalah....",
            options: [
              "Grafik yang menarik selalu menghasilkan kesimpulan yang benar.",
              "Kesimpulan harus didasarkan pada pendapat peneliti.",
              "Data yang valid perlu dianalisis secara objektif sebelum ditarik kesimpulan.",
              "Data mentah tidak perlu disajikan dalam bentuk tabel atau grafik.",
              "Semua hasil eksperimen pasti menunjukkan pola yang sama."
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
    }]
  },
  { 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Setelah data berhasil dianalisis, saatnya menyusun kesimpulan dan mengomunikasikan hasil penelitian."
        ]
      },
      {
        type: "image",
        src: img1,
        caption: "🚀 Kamu bisa KLIK GAMBAR INI untuk menuju portal selanjutnya",
        link: "/materi/kesimpulan-komunikasi-ilmiah"
      }
    ]
  }]
};

export default mengolahData;