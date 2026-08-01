import { text } from "framer-motion/client";

const pengertianGaya = {
  title: "Pengertian Gaya",
  slug: "pengertian-gaya",
  description: "Memahami konsep gaya sebagai interaksi berupa tarikan atau dorongan yang dapat mengubah keadaan gerak maupun bentuk suatu benda.",
  chapter: "🚀 Dinamika: Gaya dan Hukum Newton",

  content: [
    { blocks: [
        {
          type: "paragraph",
          text: [
            "Pernahkah kamu mendorong meja, menendang bola ke gawang, atau sekadar menarik koper saat liburan?",
            "Semua aktivitas seru itu punya satu kesamaan: ada interaksi fisik yang dinamakan **Gaya**.",
            "Tanpa adanya gaya, dunia kita bakal stagnan—nggak ada benda yang bisa jalan, belok, atau berhenti!"
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
            "Apa sebenarnya definisi gaya secara saintifik?",
            "Bagaimana sebuah tarikan atau dorongan sederhana bisa bikin mobil ngebut, menghentikan smash bola voli, sampai mengubah bentuk kaleng bekas?"
          ]
        }
      ]
    },
    {
      heading: "📍 Apa Itu Gaya?",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Dalam Fisika, **Gaya** adalah interaksi berupa **dorongan** atau **tarikan** yang bekerja pada suatu benda.",
            "Interaksi ini bisa memicu perubahan status gerak (kecepatan dan arah) ataupun bentuk fisik dari benda tersebut.",
            "Kuncinya: Gaya **tidak bisa berdiri sendiri**. Harus ada minimal dua benda yang saling berinteraksi (misal: kakimu dan bola)."
          ] 
        }
      ]
    },
    {
      heading: "🌟 Mengapa Gaya Penting?",
      blocks: [
        {
          type: "heading",
          text: "🌟 Mengapa Gaya Penting?"
        },
        {
          type: "paragraph",
          text: "Gaya adalah fondasi utama dalam cabang fisika yang dinamakan **Dinamika** (ilmu yang mempelajari gerak dan penyebabnya)."
        },
        {
          type: "paragraph",
          text: "Lewat pemahaman tentang gaya, para *engineer* bisa merancang mobil F1 yang stabil, pesawat komersial, hingga meroketkan wahana antariksa menuju Mars!"
        }
      ]
    },

    {
      heading: "📐 Karakteristik Gaya",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Gaya adalah **Besaran Vektor**. Artinya, gaya tidak hanya punya nilai (besar), tapi juga **punya arah**.",
            "Karakteristik utamanya meliputi:"
          ] 
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "**Besar Gaya $(F)$**",
                description: "Seberapa kuat dorongan/tarikannya."
              },
              {
                text: "**Arah Gaya**",
                description: "Ke mana gaya tersebut ditujukan (ke kanan, atas, barat, dsb.)."
              },
              {
                text: "**Titik Tangkap**",
                description: "Lokasi spesifik di mana gaya bekerja pada benda."
              }
            ]
          }
        },
        {
          type: "paragraph",
          text: [
            "⚠️ *Ingat! Dua gaya yang nilainya sama $(10\text{ N})$ bakal menghasilkan efek beda total kalau arahnya berlawanan!*"
          ]
        }
      ]
    },
    {
      heading: "📏 Satuan & Formulasi Sederhana",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Dalam **Sistem Internasional (SI)**, satuan gaya adalah **Newton** $(\text{N})$, yang diambil dari nama fisikawan terkenal *Sir Isaac Newton*."
          ]
        },
        {
          type: "equation",
          equation: "1\\text{ N} = 1\\text{ kg} \\cdot \\text{m/s}^2"
        },
        {
          type: "paragraph",
          text: [
            "Secara matematis sederhana, $1\\text{ N}$ didefinisikan sebagai gaya yang dibutuhkan untuk memberikan percepatan $1\\text{ m/s}^2$ pada benda bermassa $1\\text{ kg}$."
          ]
        }
      ]
    },
    {
      heading: "⚡ Pengaruh Gaya Pada Benda",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Ketika gaya bekerja pada suatu benda, inilah hal-hal yang bisa terjadi:"
          ]
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "**Benda Diam Jadi Bergerak**",
                description: "Mendorong troli belanjaan yang tadinya parkir."
              },
              {
                text: "**Benda Bergerak Jadi Diam**",
                description: "Menginjak rem mobil hingga berhenti di lampu merah."
              },
              {
                text: "**Mengubah Kecepatan**",
                description: "Menekan pedal gas untuk mempercepat laju motor."
              },
              {
                text: "**Mengubah Arah Gerak**",
                description: "Memukul balik bola badminton yang datang dari lawan."
              },
              {
                text: "**Mengubah Bentuk Benda**",
                description: "Meremas kaleng minuman atau menekan adonan kue."
              }
            ]
          }
        }
      ]
    },
    {
      heading: "🌍 Contoh dalam Kehidupan Sehari-hari",
      blocks: [
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "⚽ **Menendang Bola**",
                description: "Gaya otot kaki memberikan impuls awal sehingga bola meluncur."
              },
              {
                text: "🚗 **Pengereman Kendaraan**",
                description: "Gaya gesek antara kampas rem dan roda memperlambat laju kendaraan."
              },
              {
                text: "🪂 **Penerjun Payung**",
                description: "Gaya gesek udara (hambatan udara) menahan gaya gravitasi agar terjun bebas tetap aman."
              },
              {
                text: "🧲 **Tempelan Kulkas**",
                description: "Gaya magnet menarik permukaannya hingga menempel tanpa perekat."
              }
            ]
          }
        }
      ]
    },
    {
      heading: "⚠️ Miskonsepsi Populer",
      blocks: [
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "Miskonsepsi 1",
                description: [
                  "Gaya hanya ada kalau bendanya bergerak. ❌",
                  "Gak, gitu!",
                  "Faktanya, benda diam pun bisa memiliki gaya yang bekerja padanya! Contohnya laptop di atas meja—ia mengalami gaya berat (gravitasi) ke bawah dan gaya normal dari meja ke atas. ✔️"
                ]
              },
              {
                text: "Miskonsepsi 2",
                description: [
                  "Semua gaya pasti bikin benda berpindah tempat. ❌",
                  "Gak, gitu!",
                  "Faktanya, kalau gaya-gaya yang bekerja seimbang (total gaya $F_{\\text{net}} = 0$), benda bakal tetap diam atau mempertahankan kecepatan konstan. ✔️"
                ]
              }
            ]
          }
        }
      ]
    },

    {
      heading: "🌟*Fun Fact*",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Di Stasiun Luar Angkasa Internasional (ISS), jika seorang astronot mendorong dinding ISS, tubuh astronot tersebut justru akan terdorong ke belakang!",
            "Hal ini terjadi karena tidak adanya gaya gesek udara/lantai yang signifikan untuk menahannya, serta berlakunya Hukum III Newton (Aksi-Reaksi)."
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
            "Gaya adalah dorongan atau tarikan akibat interaksi antar benda yang dapat mengubah kecepatan, arah, maupun bentuk benda. Karena memiliki besar ($F$) dan arah, gaya tergolong besaran vektor dengan satuan Newton ($\text{N}$)."
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
                question: "Dalam fisika, gaya didefinisikan sebagai....",
                options: [
                  "interaksi berupa dorongan atau tarikan yang bekerja pada suatu benda.",
                  "besaran yang menunjukkan banyaknya massa suatu benda.",
                  "kemampuan suatu benda untuk melakukan usaha.",
                  "kecepatan benda saat bergerak.",
                  "perubahan posisi suatu benda terhadap waktu."
                ],
                answerIndex: 0
              },
              {
                question: "Mengapa gaya dikatakan sebagai besaran vektor?",
                options: [
                  "Karena hanya memiliki satuan Newton $(N)$.",
                  "Karena hanya memiliki besar tanpa arah.",
                  "Karena memiliki besar, arah, dan titik tangkap.",
                  "Karena selalu menyebabkan benda bergerak.",
                  "Karena hanya bekerja pada benda yang bergerak."
                ],
                answerIndex: 2
              },
              {
                question: "Berikut ini yang bukan merupakan pengaruh gaya terhadap suatu benda adalah....",
                options: [
                  "membuat benda diam menjadi bergerak.",
                  "mengubah arah gerak benda.",
                  "mengubah bentuk benda.",
                  "mengubah massa benda.",
                  "mempercepat atau memperlambat gerak benda."
                ],
                answerIndex: 3
              },
              {
                question: "Sebuah buku diletakkan di atas meja dan tetap diam. Berdasarkan materi, pernyataan yang benar adalah....",
                options: [
                  "tidak ada gaya yang bekerja pada buku.",
                  "buku hanya mengalami gaya gravitasi.",
                  "buku mengalami gaya berat ke bawah dan gaya normal dari meja ke atas sehingga tetap diam.",
                  "buku tetap diam karena massanya nol.",
                  "buku tidak dapat mengalami gaya jika tidak bergerak."
                ],
                answerIndex: 2
              },
              {
                question: "Satuan gaya dalam Sistem Internasional (SI) adalah....",
                options: [
                  "Joule (J).",
                  "Watt (W).",
                  "Pascal (Pa).",
                  "Newton (N).",
                  "Meter per sekon (m/s)."
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
    { blocks: [
        {
          type: "paragraph",
          text: [
            "Selamat! Kamu sudah paham konsep dasar dari Gaya.",
            "Di misi selanjutnya, kita bakal bedah **Jenis-jenis Gaya**—mulai dari gaya sentuh (gesek, normal, tegangan tali) sampai gaya tak sentuh (gravitasi, magnet, listrik)!",
            "➡️ *Next,* kita menuju portal: [Jenis-jenis Gaya](/materi/jenis-jenis-gaya)"
          ]
        }
      ]
    }
  ]
};

export default pengertianGaya;