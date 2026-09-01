import img1 from "/src/assets/Materi/HakikatIlmuFisika/portal-penutup-chapter-hakikat-ilmu-fisika.png"

const eksplorasiFenomena = {
  title: "Eksplorasi Fenomena",
  slug: "eksplorasi-fenomena-hakikat-ilmu-fisika",
  description: "Mengamati fenomena sederhana di sekitar dan melatih cara berpikir ilmiah melalui pertanyaan, bukti, analisis, dan refleksi.",
  chapter: "🔬 Hakikat Ilmu Fisika & Metode Ilmiah",

  content: [

    // =========================================================
    // 1. HOOK
    // =========================================================

    {
      blocks: [
        {
          type: "paragraph",
          text: [
            "Pernah merasa bahwa fisika cuma ada di buku dan laboratorium?",
            "",
            "Coba berhenti sebentar.",
            "",
            "Lihat benda di sekitarmu.",
            "",
            "Ada benda yang jatuh. Air mengalir. Cahaya memantul. Suara bergetar. Benda bisa menjadi panas.",
            "",
            "Semuanya sedang memberi kita petunjuk tentang bagaimana alam bekerja."
          ]
        },
        {
          type: "paragraph",
          text:
            "Sekarang, jangan buru-buru mencari rumus. Kali ini kita akan belajar melakukan sesuatu yang lebih penting: **mengamati.**"
        }
      ]
    },

    // =========================================================
    // 2. TUJUAN EKSPLORASI
    // =========================================================

    {
      heading: "🎯 Tujuan Eksplorasi",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Pada eksplorasi ini kamu akan berlatih menjadi pengamat sains.",
            "",
            "Bukan untuk langsung menemukan jawaban yang sempurna.",
            "",
            "Tetapi untuk belajar melihat fenomena, mengajukan pertanyaan, mencari bukti, dan membangun penjelasan berdasarkan apa yang kamu amati."
          ]
        },

        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "👀 Mengamati fenomena"
              },
              {
                text: "❓ Mengajukan pertanyaan"
              },
              {
                text: "🔎 Mencari bukti"
              },
              {
                text: "🧠 Menghubungkan fenomena dengan konsep fisika"
              },
              {
                text: "💭 Menyusun penjelasan sementara"
              },
              {
                text: "🔄 Merefleksikan hasil pengamatan"
              }
            ]
          }
        }
      ]
    },

    // =========================================================
    // 3. PILIH FENOMENA
    // =========================================================

    {
      heading: "🔭 Pilih Fenomena",
      blocks: [
        {
          type: "paragraph",
          text:
            "Pilih satu fenomena yang bisa kamu temukan di sekitar. Tidak perlu alat canggih. Dunia di sekitarmu sudah cukup menjadi laboratorium."
        },

        {
          type: "carousel",
          carousel: {
            cards: [
              {
                eyebrow: "FENOMENA 01",
                title: "🪂 Benda Jatuh",
                text:
                  "Lepaskan sebuah benda dari tanganmu. Apa yang terjadi? Apakah semua benda jatuh dengan cara yang sama?"
              },
              {
                eyebrow: "FENOMENA 02",
                title: "💧 Air Mengalir",
                text:
                  "Perhatikan air ketika dituangkan dari tempat yang lebih tinggi. Ke mana air bergerak? Apa yang menentukan arah alirannya?"
              },
              {
                eyebrow: "FENOMENA 03",
                title: "🌈 Cahaya & Warna",
                text:
                  "Amati cahaya yang mengenai permukaan berbeda. Apa yang terjadi ketika cahaya bertemu kaca, air, atau permukaan mengilap?"
              },
              {
                eyebrow: "FENOMENA 04",
                title: "🎸 Senar Bergetar",
                text:
                  "Petik senar gitar atau benda elastis lainnya. Apa yang kamu lihat dan dengar ketika senar bergetar?"
              },
              {
                eyebrow: "FENOMENA 05",
                title: "🌡️ Benda Memanas",
                text:
                  "Perhatikan benda yang berada di dekat sumber panas. Bagaimana perubahan yang terjadi setelah beberapa saat?"
              },
              {
                eyebrow: "FENOMENA 06",
                title: "🌬️ Angin Menggerakkan Benda",
                text:
                  "Amati daun, tirai, atau benda ringan ketika terkena angin. Mengapa benda tersebut bergerak?"
              }
            ]
          }
        }
      ]
    },

    // =========================================================
    // 4. LANGKAH PENGAMATAN
    // =========================================================

    {
      heading: "👀 Langkah Pengamatan",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Sekarang pilih satu fenomena. Jangan langsung menjelaskan penyebabnya.",
            "Amati terlebih dahulu apa yang benar-benar terjadi."
          ]        
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "Perhatikan fenomenanya selama beberapa saat."
              },
              {
                text: "Catat apa yang kamu lihat, dengar, atau rasakan."
              },
              {
                text: "Perhatikan perubahan yang terjadi."
              },
              {
                text: "Cari pola yang mungkin muncul."
              },
              {
                text: "Pisahkan antara apa yang kamu amati dan apa yang kamu pikirkan."
              }
            ]
          }
        },
        {
          type: "callout",
          variant: "info",
          title: "🧠 Ingat!",
          text:
            "Pengamatan bukan tebakan. Tuliskan apa yang benar-benar kamu lihat atau ukur."
        }
      ]
    },

    // =========================================================
    // 5. PERTANYAAN BESAR
    // =========================================================

    {
      heading: "❓ Pertanyaan Besar",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Sekarang ubah rasa penasaranmu menjadi pertanyaan.",
            "Gunakan pola sederhana:"
          ]
        },
        {
          type: "quote",
          text:
            "“Mengapa ...?” atau “Bagaimana ...?”"
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "Mengapa benda tersebut bergerak?"
              },
              {
                text: "Mengapa perubahan terjadi?"
              },
              {
                text: "Apa yang memengaruhi fenomena tersebut?"
              },
              {
                text: "Apa yang akan terjadi jika salah satu kondisi diubah?"
              }
            ]
          }
        },
        {
          type: "paragraph",
          text:
            "Tulis satu pertanyaan yang menurutmu paling menarik."
        }
      ]
    },

    // =========================================================
    // 6. LEMBAR ANALISIS
    // =========================================================

    {
      heading: "🔬 Lembar Analisis",
      blocks: [
        {
          type: "paragraph",
          text:
            "Gunakan tabel sederhana berikut untuk mengubah pengamatanmu menjadi informasi ilmiah."
        },
        {
          type: "table",
          table: {
            headers: [
              "Bagian",
              "Catatanmu"
            ],
            rows: [
              [
                "Fenomena yang diamati",
                "Apa yang kamu amati?"
              ],
              [
                "Pertanyaan",
                "Apa yang ingin kamu ketahui?"
              ],
              [
                "Bukti",
                "Apa yang mendukung pengamatanmu?"
              ],
              [
                "Faktor yang mungkin berpengaruh",
                "Apa saja yang mungkin memengaruhi fenomena?"
              ],
              [
                "Dugaan sementara",
                "Menurutmu, apa yang mungkin menjelaskan fenomena?"
              ],
              [
                "Kesimpulan sementara",
                "Apa yang dapat kamu simpulkan dari pengamatan?"
              ]
            ]
          }
        }
      ]
    },

    // =========================================================
    // 7. BEDAKAN FAKTA DAN DUGAAN
    // =========================================================

    {
      heading: "🧠 Fakta ≠ Dugaan",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Ini bagian penting dalam berpikir ilmiah.",
            "",
            "Coba bedakan antara apa yang benar-benar kamu amati dengan apa yang kamu pikirkan sebagai penjelasan."
          ]
        },

        {
          type: "table",
          table: {
            headers: [
              "Pengamatan",
              "Interpretasi"
            ],
            rows: [
              [
                "Benda bergerak menuju tanah.",
                "Ada gaya gravitasi yang memengaruhinya."
              ],
              [
                "Air bergerak menuju bagian yang lebih rendah.",
                "Perbedaan ketinggian memengaruhi gerak air."
              ],
              [
                "Senar menghasilkan suara ketika dipetik.",
                "Getaran senar menghasilkan gelombang bunyi."
              ]
            ]
          }
        },
        {
          type: "callout",
          variant: "warning",
          title: "⚠️ Jangan buru-buru yakin",
          text:
            "Dalam sains, penjelasan yang menarik tetap perlu diuji. Bukti lebih penting daripada sekadar merasa bahwa jawaban kita benar."
        }
      ]
    },

    // =========================================================
    // 8. HUBUNGKAN DENGAN HAKIKAT FISIKA
    // =========================================================

    {
      heading: "🧩 Di Mana Letak Hakikat Fisikanya?",
      blocks: [
        {
          type: "paragraph",
          text:
            "Perhatikan apa yang baru saja kamu lakukan."
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "Kamu menemukan fenomena → **Fisika sebagai objek kajian**"
              },
              {
                text: "Kamu melakukan pengamatan → **Fisika sebagai proses**"
              },
              {
                text: "Kamu mencari penjelasan → **Fisika sebagai pengetahuan**"
              },
              {
                text: "Kamu jujur terhadap hasil pengamatan → **Sikap ilmiah**"
              }
            ]
          }
        },
        {
          type: "paragraph",
          text:
            "Jadi, hakikat fisika sebenarnya tidak jauh dari kehidupanmu. Kamu hanya perlu melihat dunia dengan cara yang sedikit berbeda."
        }
      ]
    },

    // =========================================================
    // 9. REFLEKSI
    // ========================================================

    {
      heading: "💭 Refleksi",
      blocks: [
        {
          type: "paragraph",
          text:
            "Sebelum melanjutkan, berhenti sebentar dan pikirkan pengalamanmu."
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "Apa fenomena yang paling menarik perhatianmu?"
              },
              {
                text: "Apa pertanyaan baru yang muncul setelah mengamatinya?"
              },
              {
                text: "Apakah dugaan awalmu sesuai dengan hasil pengamatan?"
              },
              {
                text: "Bukti apa yang masih kamu perlukan?"
              },
              {
                text: "Apa yang berubah dari cara pandangmu terhadap fenomena tersebut?"
              }
            ]
          }
        },
        {
          type: "paragraph",
          text:
            "Tidak harus semua pertanyaan terjawab hari ini. Dalam sains, pertanyaan baru justru sering menjadi awal dari penyelidikan berikutnya."
        }
      ]
    },

    // =========================================================
    // 10. TANTANGAN TAMBAHAN
    // =========================================================

    {
      heading: "🚀 Tantangan Tambahan",
      blocks: [
        {
          type: "paragraph",
          text:
            "Sekarang naik satu level."
        },
        {
          type: "paragraph",
          text:
            "Cari fenomena lain yang terlihat berbeda, tetapi menurutmu memiliki pola fisika yang mirip."
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "Temukan 2 fenomena."
              },
              {
                text: "Catat persamaannya."
              },
              {
                text: "Catat perbedaannya."
              },
              {
                text: "Ajukan satu pertanyaan yang dapat menghubungkan keduanya."
              }
            ]
          }
        },
        {
          type: "callout",
          variant: "success",
          title: "🌌 Think Like a Physicist",
          text:
            "Fisika bukan hanya mencari jawaban. Fisika juga mencari pola di balik berbagai kejadian."
        }
      ]
    },

    // =========================================================
    // 11. APA YANG KAMU LATIH
    // =========================================================

    {
      heading: "🧠 Apa yang Kamu Latih?",
      blocks: [
        {
          type: "paragraph",
          text:
            "Tanpa sadar, kamu baru saja melatih beberapa kemampuan dasar seorang ilmuwan."
        },
        {
          type: "carousel",
          carousel: {
            cards: [
              {
                eyebrow: "01",
                title: "👀 Observasi",
                text:
                  "Belajar memperhatikan fenomena sebelum memberikan penjelasan."
              },
              {
                eyebrow: "02",
                title: "❓ Bertanya",
                text:
                  "Mengubah rasa penasaran menjadi pertanyaan yang dapat diselidiki."
              },
              {
                eyebrow: "03",
                title: "🔎 Mencari Bukti",
                text:
                  "Tidak hanya percaya pada dugaan, tetapi mencari data yang mendukungnya."
              },
              {
                eyebrow: "04",
                title: "🧠 Berpikir Kritis",
                text:
                  "Membedakan fakta, interpretasi, dan dugaan."
              },
              {
                eyebrow: "05",
                title: "🔄 Refleksi",
                text:
                  "Mengevaluasi kembali cara berpikir berdasarkan hasil pengamatan."
              }
            ]
          }
        }
      ]
    },

    // =========================================================
    // 12. CLOSING
    // =========================================================

    {
      blocks: [
        {
          type: "paragraph",
          text: [
            "Kamu baru saja melakukan sesuatu yang dilakukan ilmuwan setiap hari:",
            "",
            "**mengamati dunia dan mencoba memahaminya.**"
          ]
        },
        {
          type: "paragraph",
          text:
            "Tidak ada laboratorium raksasa. Tidak ada alat supercanggih. Hanya rasa ingin tahu, pengamatan, dan kemauan untuk mencari tahu."
        },
        {
          type: "paragraph",
          text:
            "Dan dari sanalah fisika dimulai."
        }
      ]
    },

    // =========================================================
    // 13. NEXT MISSION
    // =========================================================

    {
      blocks: [
        {
          type: "paragraph",
          text: [
            "Eksplorasi selesai.",
            "Kamu sudah belajar melihat fenomena dengan cara seorang pengamat sains.",
            "Sekarang pertanyaannya:",
            "👉 Bagaimana pengamatan tersebut dapat diubah menjadi pengetahuan yang dapat dipercaya?",
          ]
        },
        {
          type: "image",
          src: img1,
          link: "/materi/penutup-hakikat-fisika",
          caption: "🚀 Kamu bisa KLIK GAMBAR INI untuk menuju portal selanjutnya",
        }
      ]
    }
  ]
}

export default eksplorasiFenomena