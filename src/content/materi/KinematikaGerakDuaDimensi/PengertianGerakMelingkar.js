import { text } from "framer-motion/client";

const pengantarGerakMelingkar = {
  title: "Pengertian Gerak Melingkar",
  slug: "pengantar-gerak-melingkar",
  description: "Mengenal karakteristik gerak melingkar dan memahami bagaimana posisi serta arah gerak benda berubah ketika bergerak mengikuti lintasan berbentuk lingkaran.",
  chapter: "🏀 Kinematika: Gerak Dua Dimensi",

  content: [
    { blocks: [
        {
          type: "paragraph",
          text: [
            "Sejauh ini, kita sudah menjelajahi berbagai jenis gerak. Kita pernah mempelajari benda yang bergerak lurus, benda yang bergerak naik dan turun, hingga benda yang mengikuti lintasan parabola.",
            "Sekarang, bayangkan sebuah benda yang terus bergerak mengelilingi suatu titik:"
          ] 
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "🚲 Roda sepeda yang berputar saat dikayuh."
              },
              {
                text: "🕐 Jarum jam yang terus mengelilingi pusatnya."
              },
              {
                text: "🌀 Baling-baling kipas angin di kamar."
              },
              {
                text: "🛰️ Satelit yang mengorbit Bumi."
              }
            ]
          }
        },
        {
          type: "paragraph",
          text: [
            "Semua contoh tersebut memperlihatkan pola gerak yang berbeda dari gerak lurus. Selamat datang di dunia Gerak Melingkar!"
          ]
        }
      ]
    },
    {
      heading: "❓ Pertanyaan Besar untuk Dibayangkan",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Sebelum kita masuk ke konsepnya, coba pikirkan tiga hal ini:"
          ]
        },
        {
          type: "list",
          list: {
            type: "orderd",
            items: [
              {
                text: "Apakah benda yang bergerak melingkar memiliki kecepatan?"
              },
              {
                text: "Jika kelajuannya tetap, apakah benda tersebut masih mengalami percepatan?"
              },
              {
                text: "Mengapa benda yang bergerak melingkar tidak bergerak lurus meninggalkan lintasannya?"
              }
            ]
          }
        },
        {
          type: "paragraph",
          text: [
            "Mari kita bedah satu per satu! 🕵️‍♂️"
          ]
        }
      ]
    },
    {
      heading: "⭕ Apa Itu Gerak Melingkar?",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Gerak melingkar adalah gerak suatu benda yang lintasannya berbentuk lingkaran atau mengikuti bagian dari lintasan lingkaran.",
            "Berbeda dengan gerak lurus, posisi benda pada gerak melingkar terus berubah terhadap pusat lingkaran.",
            "Benda memiliki jarak tertentu dari pusat yang disebut jari-jari (radius). Selama benda tetap berada pada lintasan lingkaran, jaraknya terhadap titik pusat akan selalu tetap."
          ]
        }
      ]
    },

    {
      heading: "🎯 Pusat dan Jari-Jari Lingkaran",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Setiap gerak melingkar wajib memiliki titik pusat. Jarak antara posisi benda dan pusat lingkaran disebut sebagai jari-jari atau radius yang dilambangkan dengan huruf:",
            "$r$",
            "Jika benda bergerak mengelilingi pusat dengan radius $r$ yang nilainya konstan (tetap), maka lintasannya akan membentuk lingkaran sempurna.",
            "Radius ini menjadi salah satu besaran kunci dalam menganalisis seluruh dinamika gerak melingkar."
          ]
        }
      ]
    },
    {
      heading: "🔄 Posisi Benda yang Terus Berubah",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Bayangkan sebuah benda bergerak mengelilingi lintasan lingkaran:"
          ]
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "Setiap saat, posisinya terus berubah."
              },
              {
                text: "Benda yang awalnya berada di sebelah kanan pusat, beberapa saat kemudian berada di atas, lalu berpindah ke kiri, bawah, dan akhirnya kembali ke posisi awal. "
              },
            ]
          }
        },
        {
          type: "paragraph",
          text: [
            "Artinya, meskipun benda bergerak dengan pola berulang, arah gerak benda selalu berubah dari waktu ke waktu."
          ]
        }
      ]
    },
    {
      heading: "⚡ Kecepatan Tidak Hanya Tentang Besar (Kelajuan)!",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Ini adalah salah satu fondasi paling krusial dalam memahami gerak melingkar:",
            "Dalam fisika, kecepatan adalah besaran vektor. Artinya, kecepatan memiliki dua komponen utama: besar (kelajuan) dan arah."
          ]
        },
        {
          type: "equation",
          equation: "\\vec{v}"
        },
        {
          type: "paragraph",
          text: [
            "Pada gerak melingkar, arah kecepatan benda terus berubah mengikuti lintasan. Jadi, meskipun kelajuan (besar kecepatannya) konstan/tetap, kecepatannya tetap dianggap berubah karena arah geraknya selalu berubah tiap detik!"
          ]
        }
      ]
    },
    {
      heading: "🧭 Arah Kecepatan pada Lintasan Lingkaran",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Arah kecepatan sesaat pada gerak melingkar selalu menyinggung lintasan lingkaran (disebut arah tangensial).",
            "Sementara itu, jari-jari lingkaran mengarah tegak lurus dari posisi benda menuju ke titik pusat.",
            "Dengan demikian, arah kecepatan tangensial selalu tegak lurus $(90°)$ terhadap jari-jari pada titik tersebut."
          ] 
        }
      ]
    },
    {
      heading: "🌀 Gerak Melingkar Beraturan (GMB)",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Salah satu bentuk gerak melingkar yang paling sederhana adalah Gerak Melingkar Beraturan (GMB)."
          ]
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "Pada GMB, benda mengelilingi lingkaran dengan kelajuan tetap."
              },
              {
                text: "Tapi ingat, jangan sampai terkecoh! Kelajuan tetap bukan berarti benda tidak memiliki percepatan."
              },
              {
                text: "Karena arah kecepatannya terus berubah, benda pada GMB tetap mengalami percepatan (yang dinamakan percepatan sentripetal)."
              }
            ]
          }
        }
      ]
    },
    {
      heading: "⏱️ Periode dan Frekuensi",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Gerak melingkar sering kali bersifat berulang (periodik). Dua besaran penting dalam mengukur siklus ini adalah:"
          ]
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "Periode (T)",
                description: "Waktu yang dibutuhkan benda untuk menyelesaikan 1 putaran penuh.",
                equation: "T = \\frac{t}{n}"
              },
              {
                text: "2. Frekuensi (f)",
                description: "Banyaknya putaran yang dilakukan benda dalam setiap satuan waktu (detik).",
                equation: "f = \\frac{n}{t}",
              },
              {
                text: "Hubungan keduanya:",
                equation: "T = \\frac{1}{f} \\quad \\text{atau} \\quad f = \\frac{1}{T}",
                text: "Semakin cepat benda berputar, semakin kecil periode (waktu) yang dibutuhkan untuk menyelesaikan satu putaran penuh."
              }
            ]
          }
        }
      ]
    },
    {
      heading: "⚠️ Miskonsepsi Fisika",
      blocks: [
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "Miskonsepsi 1",
                description: [
                  "Kelajuan tetap berarti tidak ada percepatan. ❌",
                  "Meskipun kelajuannya konstan, arah kecepatannya selalu berubah tiap detik. Perubahan arah ini menghasilkan percepatan sentripetal. ✔️"
                ]
              },
              {
                text: "Miskonspi 2",
                description: [
                  "Arah kecepatan benda selalu mengarah ke pusat lingkaran. ❌",
                  "Arah kecepatan selalu menyinggung lingkaran (tangensial), sedangkan arah percepatan sentripetal-lah yang menuju ke pusat. ✔️"
                ]
              }
            ]
          }
        }
      ]
    },
    {
      heading: "🌟 *Fun Fact!*",
      blocks: [
        {
          type: "paragraph",
          text: [
            "💡 Tahukah Kamu? Bumi kita melakukan beberapa jenis gerak melingkar/rotasi sekaligus! Bumi berotasi pada porosnya sendiri dan sekaligus berevolusi mengelilingi Matahari. Jadi, ketika kamu sedang duduk diam santai sambil membaca artikel ini, sebenarnya kamu sedang meluncur dan berputar bersama Bumi di ruang angkasa dengan kecepatan ribuan kilometer per jam! Diam menurut pandanganmu belum tentu diam jika dilihat dari kerangka acuan luar angkasa. 🤯"
          ]
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
                text: "Gerak Melingkar adalah gerak benda yang mengikuti lintasan berbentuk lingkaran dengan radius $(r)$ tertentu dari pusat."
              },
              {
                text: "Arah kecepatan pada gerak melingkar selalu menyinggung lingkaran (tangensial) dan selalu berubah-ubah di setiap titik."
              },
              {
                text: "Meskipun kelajuan benda konstan, kecepatan tetap berubah karena arahnya berubah, sehingga benda tetap mengalami percepatan."
              },
              {
                text: "Gerak berulang ini diukur menggunakan besaran Periode $(T)$ dan Frekuensi $(f)$."
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
              question: "Gerak melingkar adalah gerak suatu benda yang....",
              options: [
                "selalu bergerak dengan kecepatan tetap pada lintasan lurus.",
                "bergerak mengikuti lintasan berbentuk lingkaran atau bagian dari lingkaran.",
                "bergerak naik dan turun secara vertikal.",
                "bergerak membentuk lintasan parabola.",
                "bergerak secara acak tanpa lintasan tertentu."
              ],
              answerIndex: 1
            },
            {
              question: "Pada gerak melingkar, arah kecepatan sesaat suatu benda selalu....",
              options: [
                "menuju pusat lingkaran.",
                "menjauhi pusat lingkaran.",
                "sejajar dengan jari-jari lingkaran.",
                "menyinggung lintasan lingkaran (tangensial).",
                "tetap ke arah timur."
              ],
              answerIndex: 3
            },
            {
              question: "Mengapa benda pada Gerak Melingkar Beraturan (GMB) tetap mengalami percepatan meskipun kelajuannya konstan?",
              options: [
                "Karena massa benda terus bertambah.",
                "Karena lintasan benda berubah menjadi parabola.",
                "Karena arah kecepatan selalu berubah selama bergerak.",
                "Karena gaya gravitasi selalu bertambah.",
                "Karena jari-jari lintasan berubah setiap saat."
              ],
              answerIndex: 2
            },
            {
              question: "Sebuah kipas angin berputar 120 kali dalam 60 detik. Besar frekuensi putaran kipas tersebut adalah....",
              options: [
                "0,5 Hz.",
                "1 Hz.",
                "2 Hz.",
                "60 Hz.",
                "120 Hz."
              ],
              answerIndex: 2
            },
            {
              question: "Pernyataan yang benar mengenai periode $(T)$ dan frekuensi $(f)$ adalah....",
              options: [
                "semakin besar frekuensi, semakin besar periode.",
                "periode adalah banyaknya putaran setiap detik.",
                "frekuensi adalah waktu yang dibutuhkan untuk satu putaran.",
                "periode dan frekuensi tidak memiliki hubungan.",
                "semakin besar frekuensi, semakin kecil periode."
                ],
              answerIndex: 4
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
            "Kita sudah memahami karakteristik unik dasar dari gerak melingkar. Tapi... bagaimana cara kita mengukur seberapa cepat sebuah benda berputar? Apakah cukup menggunakan kecepatan linier biasa? Atau kita membutuhkan variabel baru untuk menggambarkan gerak rotasi?",
            "➡️ *Next,* kita menuju portal: [**Besaran-Besaran Gerak Melingkar — Sudut, Periode, Frekuensi, dan Kecepatan Sudut (ω).**](/materi/besaran-besaran gerak melingkar)"
          ]
        }
      ]
    }
  ]
};

export default pengantarGerakMelingkar;