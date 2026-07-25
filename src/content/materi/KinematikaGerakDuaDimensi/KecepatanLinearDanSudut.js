const kecepatanLinearDanSudut = {
  title: "Kecepatan Linear dan Kecepatan Sudut",
  slug: "kecepatan-linear-dan-kecepatan-sudut",
  description:
    "Memahami perbedaan kecepatan linear dan kecepatan sudut serta hubungan keduanya dalam gerak melingkar.",

  chapter: "🌌 Kinematika: Gerak Dua Dimensi",

  content: [
    {
      heading: "⚙️ Dua Cara Mengukur Kecepatan",
      blocks: [
        {
          type: "heading",
          text: "⚙️ Dua Cara Mengukur Kecepatan"
        },
        {
          type: "paragraph",
          text: "Saat sebuah mobil melaju di jalan lurus, kita cukup menyatakan kecepatannya dalam satuan meter per sekon."
        },
        {
          type: "paragraph",
          text: "Namun pada gerak melingkar, kita dapat melihat gerakan tersebut dari dua sudut pandang yang berbeda."
        },
        {
          type: "paragraph",
          text: "Kita dapat mengukur seberapa cepat benda menempuh lintasan lingkaran atau seberapa cepat sudutnya berubah."
        },
        {
          type: "paragraph",
          text: "Karena itu, gerak melingkar memiliki dua jenis kecepatan, yaitu kecepatan linear dan kecepatan sudut."
        }
      ]
    },

    {
      heading: "❓ Pertanyaan Besar",
      blocks: [
        {
          type: "heading",
          text: "❓ Pertanyaan Besar"
        },
        {
          type: "paragraph",
          text: "Mengapa dua titik pada roda yang sama dapat memiliki kecepatan yang berbeda?"
        },
        {
          type: "paragraph",
          text: "Mengapa bagian tepi kipas bergerak jauh lebih cepat daripada bagian dekat porosnya?"
        }
      ]
    },

    {
      heading: "🚗 Apa Itu Kecepatan Linear?",
      blocks: [
        {
          type: "heading",
          text: "🚗 Apa Itu Kecepatan Linear?"
        },
        {
          type: "paragraph",
          text: "Kecepatan linear adalah kecepatan benda saat bergerak sepanjang lintasan lingkaran."
        },
        {
          type: "paragraph",
          text: "Arah kecepatan linear selalu menyinggung lintasan lingkaran sehingga disebut juga kecepatan tangensial."
        },
        {
          type: "equation",
          latex: "v=\\frac{s}{t}"
        },
        {
          type: "paragraph",
          text: "Satuan kecepatan linear adalah meter per sekon (m/s)."
        }
      ]
    },

    {
      heading: "🌀 Apa Itu Kecepatan Sudut?",
      blocks: [
        {
          type: "heading",
          text: "🌀 Apa Itu Kecepatan Sudut?"
        },
        {
          type: "paragraph",
          text: "Kecepatan sudut menyatakan seberapa cepat sudut benda berubah terhadap waktu."
        },
        {
          type: "equation",
          latex: "\\omega=\\frac{\\Delta\\theta}{\\Delta t}"
        },
        {
          type: "paragraph",
          text: "Simbol kecepatan sudut adalah ω (omega)."
        },
        {
          type: "paragraph",
          text: "Satuan SI untuk kecepatan sudut adalah radian per sekon (rad/s)."
        }
      ]
    },

    {
      heading: "🔗 Hubungan Kecepatan Linear dan Kecepatan Sudut",
      blocks: [
        {
          type: "heading",
          text: "🔗 Hubungan Kecepatan Linear dan Kecepatan Sudut"
        },
        {
          type: "paragraph",
          text: "Kecepatan linear bergantung pada jari-jari lintasan dan kecepatan sudut."
        },
        {
          type: "equation",
          latex: "v=\\omega r"
        },
        {
          type: "paragraph",
          text: "Semakin besar jari-jari, semakin besar pula kecepatan linearnya jika kecepatan sudut tetap."
        }
      ]
    },

    {
      heading: "🎡 Mengapa Bagian Tepi Lebih Cepat?",
      blocks: [
        {
          type: "heading",
          text: "🎡 Mengapa Bagian Tepi Lebih Cepat?"
        },
        {
          type: "paragraph",
          text: "Bayangkan sebuah komidi putar."
        },
        {
          type: "paragraph",
          text: "Anak yang duduk di dekat pusat hanya menempuh lintasan kecil setiap putaran."
        },
        {
          type: "paragraph",
          text: "Sebaliknya, anak yang duduk di tepi harus menempuh lintasan yang jauh lebih panjang dalam waktu yang sama."
        },
        {
          type: "paragraph",
          text: "Akibatnya, kecepatan linear di bagian tepi lebih besar meskipun keduanya memiliki kecepatan sudut yang sama."
        }
      ]
    },

    {
      heading: "🌍 Contoh dalam Kehidupan",
      blocks: [
        {
          type: "heading",
          text: "🌍 Contoh dalam Kehidupan"
        },
        {
          type: "paragraph",
          text: "• Ujung baling-baling kipas bergerak lebih cepat daripada bagian dekat poros."
        },
        {
          type: "paragraph",
          text: "• Ban mobil bagian luar memiliki kecepatan linear lebih besar daripada titik yang lebih dekat ke pusat roda."
        },
        {
          type: "paragraph",
          text: "• Saat melempar palu atletik, bagian bola bergerak jauh lebih cepat dibanding tangan atlet."
        }
      ]
    },

    {
      heading: "🧪 Contoh Perhitungan",
      blocks: [
        {
          type: "heading",
          text: "🧪 Contoh Perhitungan"
        },
        {
          type: "paragraph",
          text: "Sebuah roda memiliki jari-jari 0,4 meter dan berputar dengan kecepatan sudut 15 rad/s."
        },
        {
          type: "paragraph",
          text: "Kecepatan linearnya dapat dihitung menggunakan persamaan:"
        },
        {
          type: "equation",
          latex: "v=\\omega r"
        },
        {
          type: "paragraph",
          text: "v = 15 × 0,4 = 6 m/s."
        }
      ]
    },

    {
      heading: "⚠️ Miskonsepsi",
      blocks: [
        {
          type: "heading",
          text: "⚠️ Miskonsepsi"
        },
        {
          type: "paragraph",
          text: "❌ Semua titik pada roda memiliki kecepatan linear yang sama."
        },
        {
          type: "paragraph",
          text: "✅ Faktanya, hanya kecepatan sudutnya yang sama. Kecepatan linear bergantung pada jari-jari."
        },
        {
          type: "paragraph",
          text: "❌ Kecepatan linear selalu mengarah ke pusat lingkaran."
        },
        {
          type: "paragraph",
          text: "✅ Faktanya, arah kecepatan linear selalu menyinggung lintasan lingkaran."
        },
        {
          type: "paragraph",
          text: "❌ Kecepatan sudut menggunakan satuan m/s."
        },
        {
          type: "paragraph",
          text: "✅ Faktanya, satuan kecepatan sudut adalah rad/s."
        }
      ]
    },

    {
      heading: "🌟 Fun Fact",
      blocks: [
        {
          type: "heading",
          text: "🌟 Fun Fact"
        },
        {
          type: "paragraph",
          text: "Ujung baling-baling helikopter dapat bergerak hingga ratusan meter per sekon. Karena itulah desain baling-baling harus sangat presisi agar tetap aman saat berputar dengan kecepatan tinggi."
        }
      ]
    },

    {
      heading: "🧠 Inti Materi",
      blocks: [
        {
          type: "heading",
          text: "🧠 Inti Materi"
        },
        {
          type: "paragraph",
          text: "Gerak melingkar memiliki dua jenis kecepatan."
        },
        {
          type: "paragraph",
          text: "Kecepatan linear menyatakan seberapa cepat benda bergerak sepanjang lintasan, sedangkan kecepatan sudut menyatakan seberapa cepat sudut berubah terhadap waktu."
        },
        {
          type: "paragraph",
          text: "Keduanya dihubungkan oleh persamaan v = ωr."
        }
      ]
    },

    {
      heading: "🚀 Next Mission",
      blocks: [
        {
          type: "heading",
          text: "🚀 Next Mission"
        },
        {
          type: "paragraph",
          text: "Walaupun besar kecepatan sebuah benda bisa tetap, ternyata arah kecepatannya terus berubah ketika bergerak melingkar."
        },
        {
          type: "paragraph",
          text: "Perubahan arah ini menyebabkan munculnya percepatan yang selalu mengarah ke pusat lingkaran."
        },
        {
          type: "paragraph",
          text: "Pada misi berikutnya, kita akan mempelajari Percepatan Sentripetal dan Gaya Sentripetal serta alasan mengapa benda dapat tetap bergerak pada lintasan melingkar."
        }
      ]
    }
  ]
};

export default kecepatanLinearDanSudut;