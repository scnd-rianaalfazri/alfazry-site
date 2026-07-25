import { text } from "framer-motion/client";

const miniprojecthakikatilmufisika = {
  title: "Mini Project: Hakikat Ilmu Fisika",
  slug: "mini-project-hakikat-ilmu-fisika",
  description: "Menerapkan metode ilmiah melalui penyelidikan sederhana untuk menjawab pertanyaan berdasarkan bukti.",
  chapter: "🔬 Hakikat Ilmu Fisika & Metode Ilmiah",

  content: [
  {
    blocks: [
      {
        type: "paragraph",
        text: [
          "Selama mempelajari chapter ini, kamu telah memahami bagaimana cara kerja ilmuwan dalam menemukan pengetahuan baru berdasarkan bukti konkrit.",
          "Sekarang giliran kamu!",
          "Pilih satu pertanyaan sederhana dari fenomena di sekitarmu, lakukan penyelidikan mandiri, lalu tarik kesimpulan berdasarkan data yang kamu peroleh."
        ]
      }
    ]
  },
  { heading: "🎯 Tujuan Project", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Melalui mini project ini, kamu diharapkan mampu melatih skill dasar seperti seorang ilmuwan:"
        ]
      },
      {
        type: "list",
        list: {
          type: "unordered",
          items: [
            {
              text: "Mengajukan pertanyaan ilmiah."
            },
            {
              text: "Menyusun hipotesis (dugaan sementara)."
            },
            {
              text: "Menentukan variabel penelitian (bebas, terikat, dan kontrol)."
            },
            {
              text: "Melakukan eksperimen sederhana secara sistematis."
            },
            {
              text: "Mengolah dan menganalisis data hasil pengamatan."
            },
            {
              text: "Menarik kesimpulan berdasarkan bukti ilmiah."
            }
          ]
        }
      },
    ]

  },
  { heading: "🧪 Pilih Salah Satu Topik", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Bingung mau mulai dari mana? Kamu bisa memilih salah satu contoh ide penyelidikan sederhana berikut:"
        ]
      },
      {
        type: "list",
        list: {
          type: "ordered",
          items: [
            {
              text: "🌱 Pertumbuhan Tanaman",
              description: "Apakah cahaya memengaruhi kecepatan pertumbuhan kecambah?"
            },
            {
              text: "💧 Kelarutan Zat",
              description: "Apakah suhu air memengaruhi seberapa cepat gula larut?"
            },
            {
              text: "⚽ Dinamika Gerak",
              description: "Apakah kemiringan bidang memengaruhi kecepatan meluncur mobil mainan?"
            },
            {
              text: "🪂 Aerodinamika",
              description: "Apakah luas permukaan kertas memengaruhi waktu jatuh benda ke tanah?"
            },
            {
              text: "🧲 Kemagnetan",
              description: "Apakah jumlah magnet berbanding lurus dengan kekuatan gaya tariknya?"
            }
          ]
        }
      },
    ]
  },
  { heading: "📝 Langkah Pengerjaan", 
    blocks: [
      { type: "text", 
        text: [
          "Ikuti alur kerja ilmiah berikut agar penyelidikanmu berjalan terstruktur:"
        ]
      },
      {
        type: "list",
        list: {
          type: "ordered",
          items: [
            {
              type: "Tentukan pertanyaan penelitian yang ingin kamu jawab."
            },
            {
              type: "Susun hipotesis atau dugaan jawaban sementara."
            },
            {
              type: "Identifikasi variabel",
              description: "Tentukan!",
              children: {
                type: "unordered",
                items: [
                  {
                    text: "Variabel bebas",
                  },
                  {
                    text: "Variabel terikat",
                  },
                  {
                    text: "Variabel kontrol"
                  }
                ]
              }
            },
            {
              text: "Siapkan alat dan bahan yang diperlukan di sekitarmu."
            },
            {
              text: "Lakukan percobaan dengan cermat dan utamakan keselamatan."
            },
            {
              text: "Catat data hasil percobaan secara teliti."
            },
            {
              text: "Olah data ke dalam bentuk tabel atau grafik agar mudah dibaca."
            },
            {
              text: "Tarik kesimpulan berdasarkan analisis data."
            }
          ]
        }
      }
    ]
  },
  { heading: "📄 Laporan Project", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Buat laporan ringkas hasil eksperimenmu menggunakan struktur sederhana berikut:"
        ]
      },
      { type: "list", 
        list: {
          type: "unordered",
          items: [
            {
              text: "📌 Judul",
              description: "Nama eksperimen yang menarik."
            },
            {
              text: "🎯 Tujuan",
              description: "Alasan kamu melakukan eksperimen."
            },
            {
              text: "💭 Hipotesis",
              description: "Dugaan awal sebelum eksperimen dilakukan."
            },
            {
              text: "🧪 Alat & Bahan",
              description: "Daftar perlengkapan yang digunakan."
            },
            {
              text: "📋 Langkah Kerja",
              description: "Tahapan eksperimen yang dilakukan."
            },
            {
              text: "📊 Data",
              description: "Catatan angka, pengamatan, atau grafik."
            },
            {
              text: "📈 Analisis",
              description: "Penjelasan mengenai temuan dari data."
            },
            {
              text: "📖 Kesimpulan",
              description: "Jawaban akhir atas pertanyaan penelitianmu."
            }
          ]
        } 
      },
    ]
  },
  { heading: "🤝 Presentasikan Hasilmu", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Setelah laporan selesai, bagikan hasil penyelidikanmu kepada teman-teman atau gurumu!",
          "Bahan Diskusi:",
          "Jelaskan apakah hasil eksperimenmu sesuai dengan hipotesis awal atau justru berbeda.",
          "Sampaikan alasan serta analisis ilmiah di baliknya!"
        ]
      }
    ]
  },
  { heading: "💡 Tahukah Kamu?", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Banyak penemuan teknologi modern dan revolusi sains dunia berawal dari pertanyaan-pertanyaan sederhana sehari-hari yang kemudian diuji secara konsisten melalui eksperimen dan metode ilmiah."
        ]
      }
    ]
  },
  { heading: "⚠️ Miskonsepsi", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "'Jika hasil eksperimen tidak sesuai dengan hipotesis awal, artinya eksperimen gagal.' ❌",
          "Dalam sains, hipotesis yang tidak terbukti bukan berarti eksperimen gagal.",
          "Temuan tersebut justru memberikan informasi baru yang berharga dan dapat menjadi acuan penting untuk penelitian selanjutnya!"
        ]
      }
    ]
  },
  { heading: "📊 Ringkasan Project", 
    blocks: 
    [
      { type: "paragraph", 
        text: [
          "Pertanyaan",
          "⬇️",
          "Hipotesis",
          "⬇️",
          "Eksperimen",
          "⬇️",
          "Data",
          "⬇️",
          "Kesimpulan",
          "⬇️",
          "Presentasi"
        ]
      }
    ]
  },
  { heading:  "✨ Inti Project", 
    blocks: [
      {
        type: "paragraph",
        text: "Melalui project ini kamu telah mempraktikkan cara kerja ilmuwan dalam memperoleh pengetahuan berdasarkan bukti."
      }
    ]
  },
  {
    link: "/materi/penutup-hakikat-fisika",
    blocks: [
    {
      type: "paragraph",
      text: [
        "Selamat! Kamu telah menyelesaikan proyek pertamamu.",
        "➡️ Next, kita menuju portal terakhir: [Penutup Chapter](/materi/penutup-hakikat-fisika)."
      ]
    }
  ]

  },
  { heading: "Referensi:", 
    blocks: [
      { type: "heading", 
        text: [
          "Referensi:" ,
          "Kemendikbudristek RI. Buku Fisika SMA/MA.",
          "Halliday, Resnick & Walker. Fundamentals of Physics.",
          "Serway & Jewett. Physics for Scientists and Engineers."
        ]
      }
    ]
  }]
};

export default miniprojecthakikatilmufisika;