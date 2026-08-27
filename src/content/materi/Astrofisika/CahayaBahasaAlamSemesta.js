import { text } from "framer-motion/client";
import img1 from "/src/assets/Materi/astrofisika/temperatur-warna1.png"
import img2 from "/src/assets/Materi/astrofisika/temperatur-warna2.png"

const cahayabahasaalamsemesta = {
  title: "Temperatur, Warna, dan Luminositas Bintang",
  slug: "cahaya-bahasa-alam-semesta",
  description:
  "Memahami bagaimana cahaya membawa informasi tentang benda-benda langit sehingga ilmuwan dapat mempelajari alam semesta.",
  chapter: "🌠 Astrofisika",

  content: [
  {
    blocks: [
      {
        type: "paragraph",
        text: [
          "Pernah memperhatikan bahwa api tidak selalu memiliki warna yang sama?",
          "Ada bagian api yang tampak merah, ada yang kuning, bahkan bisa terlihat kebiruan.",
          "Hal serupa terjadi pada bintang. Di langit, kita dapat menemukan bintang yang tampak:",
          "🔴 kemerahan",
          "🟡 kekuningan",
          "⚪ putih",
          "🔵 kebiruan",
          "Pertanyaannya:"
        ]
      },
      {
        type: "quote",
        text: "Apakah warna bintang memberi tahu kita sesuatu tentang suhunya?"
      }
    ]
  },
  { 
    heading: "❓ Pertanyaan Besar", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Bagaimana warna sebuah bintang dapat memberi petunjuk tentang temperaturnya, dan apakah bintang yang tampak lebih terang selalu lebih panas?",
          "Untuk menjawabnya, kita perlu membedakan dua hal:",
          "temperatur dan luminositas."
        ]
      }
    ]
  },
  { heading: "🌡️ Warna dan Temperatur", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Bintang memancarkan radiasi dengan berbagai panjang gelombang. Namun, distribusi energinya tidak sama pada semua panjang gelombang.",
          "Secara sederhana:",
          "Temperatur lebih rendah",
          "Puncak radiasi cenderung ke panjang gelombang lebih panjang",
          "↓",
          "Tampak lebih merah",
          "------------------------------------------------------------------------------------------------------------------------------------------------",
          "Temperatur lebih tinggi",
          "↓",
          "Puncak radiasi cenderung ke panjang gelombang lebih pendek",
          "↓",
          "Tampak lebih biru",
          "------------------------------------------------------------------------------------------------------------------------------------------------",
          "Jadi secara umum:",
          "🔴 Bintang yang lebih merah → temperatur permukaan lebih rendah",
          "🔵 Bintang yang lebih biru → temperatur permukaan lebih tinggi",
        ]
      }
    ]
  },
  { 
    heading: "🌈 Visualisasi Konsep", 
    blocks: [
      {
        type: "paragraph",
        text: "Bayangkan dua bintang:"
      },
      {
        type: "image",
        src: img1
      },
      {
        type: "paragraph",
        text: "Jadi warna bukan sekadar estetika."
      },
      {
        type: "callout",
        variant: "success",
        text: "Warna merupakan petunjuk fisik."
      }
    ]
  },
  { heading: "🔥 Mengapa Benda Panas Bisa Berwarna?", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Konsep ini sebenarnya sudah kita temui dalam kehidupan sehari-hari. Misalnya, logam yang dipanaskan.",
          "Awalnya:"
        ]
      },
      {
        type: "equation",
        equation: "\\text{dingin }\\rightarrow\\text{tidak berpijar}"
      },
      {
        type: "paragraph",
        text: "Semakin panas:"
      },
      {
        type: "equation",
        equation: "\\text{merah }\\rightarrow\\text{kuning }\\rightarrow\\text{hijau}"
      },
      {
        type: "paragraph",
        equation: [
          "Bintang juga memancarkan radiasi karena memiliki temperatur tinggi.",
          "Perbedaannya, proses fisik di dalam bintang jauh lebih kompleks daripada sekadar logam yang dipanaskan."
        ]
      }
    ]
  },
  { 
    heading: "💡 Tahukah Kamu?", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Di page sebelumnya kita sudah belajar bahwa spektrum menyimpan informasi.",
          "Sekarang kita lanjutkan:"
        ]
      },
      {
        type: "image",
        src: img2
      },
      {
        type: "paragraph",
        text: "Secara fisika, hubungan antara temperatur dan panjang gelombang puncak dijelaskan oleh **Hukum Pergeseran Wien.**"
      },
      {
        type: "equation",
        equation: "\\lambda_{max}\\dot\\text{T}=\\text{C}"
      },
      {
        type: "paragraph",
        items: "Keterangan:"
      },
      {
        type: "list",
        list: {
          type: "unordered",
          items: [
            {
              text: "$\\lambda_{max}$ = Panjang gelombang pada intensitas maksimum (dalam meter)."
            },
            {
              text: "$T$: Suhu mutlak benda (dalam Kelvin, K)."
            },
            {
              text: "$C$: Konstanta pergeseran Wien, bernilai sekitar $2,9 \\times 10^3 m \\dot K$."
            }
          ]
        }
      },
      {
        type: "paragraph",
        text: "Yang perlu dipahami terlebih dahulu:"
      },
      {
        type: "quotes",
        text: "Semakin tinggi temperatur, semakin kecil panjang gelombang pada puncak radiasinya."
      }
    ]
  },
  { 
    heading: "🧪 Analisis Konsep", 
    blocks: [
      {
        type: "paragraph",
        text: "Bayangkan dua bintang memiliki temperatur permukaan yang sama. Tetapi:"






      },
      {
        type: "list",
        list: {
          type: "unordered",
          items: [
            {
              text: "Bintang A memiliki ukuran lebih kecil."
            },
            {
              text: "Bintang B memiliki ukuran jauh lebih besar."
            }
          ]
        }
      },
      {
        type: "paragraph",
        text: [
          "Mana yang memiliki luminositas lebih besar?",
          "Bukan karena Bintang B lebih panas.",
          "Tetapi karena:"
        ]
      },
      {
        type: "quote",
        text: "Bintang B memiliki luas permukaan yang lebih besar untuk memancarkan energi."
      },
      {
        type: "paragraph",
        text: "Jadi ketika membandingkan bintang, jangan hanya melihat temperatur. Kita juga perlu mempertimbangkan ukuran bintang."
      }
    ]
  },
  { 
    heading: "🌟 Tiga Informasi Mulai Terhubung", 
    blocks: [
      { 
        type: "paragraph", 
        text: [
          "Sekarang kita sudah memiliki tiga konsep:",
          "🌈 Spektrum → 🌡️ Temperatur",
          "dan",
          "🌡️ Temperatur + 📏 Ukuran → ✨ Luminositas",
          "✨ Luminositas + 📡 Jarak → 💡 Kecerahan yang kita amati",
          "Ini akan menjadi fondasi penting untuk mempelajari karakteristik bintang."
        ] 
      }
    ]
  },
  { heading: "⚠️ Miskonsepsi", 
    blocks: [
      {
        type: "list",
        list: {
          type: "ordered",
          items: [
            {
              text: "Miskonsepsi 1",
              description: [
                "Bintang yang tampak lebih terang pasti lebih panas. ❌",
                "Belum tentu.",
                "Kecerahan yang kita lihat dipengaruhi oleh luminositas dan jarak. ✔️"
              ]
            },
            {
              text: "Miskonsepsi 2",
              description: [
                "Bintang merah berarti tidak panas. ❌",
                "Gak, gitu!",
                "Bintang merah tetap memiliki temperatur yang sangat tinggi. Hanya saja temperaturnya relatif lebih rendah dibandingkan bintang yang lebih biru. ✔️"
              ]
            },
            {
              text: "Miskonsepsi 3",
              description: [
                "Luminositas adalah kecerahan bintang yang kita lihat dari Bumi. ❌",
                "Gak, gitu!",
                "Luminositas adalah total energi yang dipancarkan per satuan waktu, sedangkan kecerahan tampak dipengaruhi oleh jarak pengamat terhadap sumber. ✔️"
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
        text: [
          "Matahari tampak kekuningan jika dilihat dari Bumi, tetapi secara fisika Matahari memancarkan spektrum yang luas.",
          "Warna yang kita lihat bukan berarti Matahari hanya memancarkan cahaya kuning." 
        ]
      },
      {
        type: "quote",
        text: "Satu bintang sebenarnya memancarkan banyak panjang gelombang sekaligus."
      }
    ]
  },
  {
    heading: "🎯 Inti Materi",
    blocks: [
      {
        type: "paragraph",
        text: [
          "Hari ini kita menemukan bahwa:",
          "🌈 Spektrum → 🌡️ Temperatur", 
          "🌡️ Temperatur + 📏 Ukuran → ✨ Luminositas",
          "✨ Luminositas + 📡 Jarak → 💡 Kecerahan yang diamati"
        ]
      },
      {
        type: "paragraph",
        text: "Jadi ketika melihat sebuah bintang, kita tidak cukup hanya bertanya:"
      },
      {
        type: "callout",
        variant: "danger",
        text: "Seberapa terang?"
      },
      {
        type: "paragraph",
        text: "Kita perlu bertanya:"
      },
      {
        type: "callout",
        variant: "success",
        text: "Seberapa panas? Seberapa besar? Seberapa banyak energi yang dipancarkan? Dan seberapa jauh jaraknya?"
      },
      {
        type: "paragraph",
        text: "Itulah cara berpikir seorang astrofisikawan."
      }
    ]
  },
  {
    blocks: [
      { 
        type: "paragraph", 
        text: [
          "Kita sudah tahu bahwa ukuran bintang berhubungan dengan luminositas. Tapi bagaimana ilmuwan bisa mengetahui massa sebuah bintang yang bahkan tidak bisa kita sentuh?"
        ] 
      },
      {
        type: "paragraph",
        text: [
          "Pada page berikutnya kita akan lanjut ke page Massa dan Gravitasi Bintang.",
          "Di sana kita mulai menggunakan konsep gravitasi dan gerak orbit untuk 'menimbang' bintang—tanpa pernah menyentuhnya."
        ]
      }
    ]
  },
  { 
    heading: "Referensi:", 
    blocks: [
     { 
      type: "paragraph", 
      text: [
        "OpenStax Astronomy.",
        "Carroll & Ostlie. An Introduction to Modern Astrophysics.",
        "NASA Science.",
        "ESA Education."
      ] 
    }
  ]
  }]
};

export default cahayabahasaalamsemesta;