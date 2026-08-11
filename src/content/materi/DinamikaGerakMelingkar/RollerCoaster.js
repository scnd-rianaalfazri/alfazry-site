const rollerCoaster = {
  title: "Roller Coaster dan Gaya Sentripetal",
  slug: "roller-coaster-dan-gaya-sentripetal",
  description:
    "Menganalisis gaya-gaya yang bekerja pada benda di lintasan melingkar dan memahami bagaimana resultannya menjaga roller coaster tetap mengikuti lintasan.",

  chapter: "🌀 Dinamika Gerak Melingkar",

  content: [
    {
      heading: "🎢 Mengapa Roller Coaster Tidak Jatuh?",
      blocks: [
        {
          type: "heading",
          text: "🎢 Mengapa Roller Coaster Tidak Jatuh?"
        },
        {
          type: "paragraph",
          text: "Bayangkan sebuah kereta roller coaster melewati bagian lintasan yang berbentuk lingkaran."
        },
        {
          type: "paragraph",
          text: "Pada titik tertentu, kereta bahkan bisa berada di posisi terbalik dengan penumpang berada di atas lintasan."
        },
        {
          type: "paragraph",
          text: "Mengapa kereta tetap mengikuti lintasan?"
        },
        {
          type: "paragraph",
          text: "Apa yang membuat kereta memiliki percepatan menuju pusat lintasan?"
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
          text: "Bagaimana gaya gravitasi dan gaya normal dapat menghasilkan resultan gaya sentripetal pada roller coaster?"
        },
        {
          type: "paragraph",
          text: "Mengapa sensasi yang dirasakan penumpang dapat berbeda di bagian bawah dan bagian atas lintasan?"
        }
      ]
    },

    {
      heading: "🧭 Identifikasi Gaya",
      blocks: [
        {
          type: "heading",
          text: "🧭 Identifikasi Gaya"
        },
        {
          type: "paragraph",
          text: "Untuk menganalisis kereta pada lintasan melingkar vertikal, perhatikan dua gaya utama:"
        },
        {
          type: "paragraph",
          text: "⬇ Gaya berat (W = mg), selalu mengarah ke bawah."
        },
        {
          type: "paragraph",
          text: "⬆ Gaya normal (N), arahnya tegak lurus permukaan lintasan."
        },
        {
          type: "paragraph",
          text: "Arah menuju pusat lintasan berubah sesuai posisi kereta. Karena itu, arah radial harus ditentukan terlebih dahulu sebelum menjumlahkan gaya."
        }
      ]
    },

    {
      heading: "🎨 Visualisasi Konsep",
      blocks: [
        {
          type: "heading",
          text: "🎨 Visualisasi Konsep"
        },
        {
          type: "paragraph",
          text: "Bayangkan roller coaster melewati lintasan berbentuk lingkaran vertikal."
        },
        {
          type: "paragraph",
          text: "Tandai tiga posisi:"
        },
        {
          type: "paragraph",
          text: "🔵 Bagian bawah lintasan → pusat berada di atas kereta."
        },
        {
          type: "paragraph",
          text: "🟣 Bagian samping lintasan → pusat berada ke arah horizontal."
        },
        {
          type: "paragraph",
          text: "🔴 Bagian atas lintasan → pusat berada di bawah kereta."
        },
        {
          type: "paragraph",
          text: "Perubahan posisi pusat ini membuat analisis gaya pada arah radial juga berubah."
        }
      ]
    },

    {
      heading: "📌 Strategi Penyelesaian",
      blocks: [
        {
          type: "heading",
          text: "📌 Strategi Penyelesaian"
        },
        {
          type: "paragraph",
          text: "1️⃣ Tentukan posisi kereta pada lintasan."
        },
        {
          type: "paragraph",
          text: "2️⃣ Tentukan arah pusat lingkaran dari posisi tersebut."
        },
        {
          type: "paragraph",
          text: "3️⃣ Identifikasi gaya berat dan gaya normal."
        },
        {
          type: "paragraph",
          text: "4️⃣ Buat Free Body Diagram."
        },
        {
          type: "paragraph",
          text: "5️⃣ Tentukan gaya yang searah dan berlawanan dengan arah radial."
        },
        {
          type: "paragraph",
          text: "6️⃣ Terapkan Hukum Newton II pada arah radial."
        }
      ]
    },

    {
      heading: "📝 Free Body Diagram",
      blocks: [
        {
          type: "heading",
          text: "📝 Free Body Diagram"
        },
        {
          type: "paragraph",
          text: "FBD harus dibuat berdasarkan posisi kereta."
        },
        {
          type: "paragraph",
          text: "Jangan langsung menganggap gaya normal selalu menuju pusat. Arah gaya normal ditentukan oleh arah permukaan lintasan terhadap kereta."
        },
        {
          type: "paragraph",
          text: "Setelah semua gaya digambar, tentukan komponen gaya yang bekerja pada arah menuju pusat."
        }
      ]
    },

    {
      heading: "⬇️ Analisis di Bagian Bawah",
      blocks: [
        {
          type: "heading",
          text: "⬇️ Analisis di Bagian Bawah"
        },
        {
          type: "paragraph",
          text: "Di bagian bawah lintasan, pusat lingkaran berada di atas kereta."
        },
        {
          type: "paragraph",
          text: "Gaya normal mengarah ke atas, sedangkan gaya berat mengarah ke bawah."
        },
        {
          type: "equation",
          latex: "N - mg = \\frac{mv^2}{r}"
        },
        {
          type: "paragraph",
          text: "Gaya normal harus lebih besar daripada gaya berat agar terdapat resultan gaya menuju pusat."
        }
      ]
    },

    {
      heading: "⬆️ Analisis di Bagian Atas",
      blocks: [
        {
          type: "heading",
          text: "⬆️ Analisis di Bagian Atas"
        },
        {
          type: "paragraph",
          text: "Di bagian atas lintasan, pusat lingkaran berada di bawah kereta."
        },
        {
          type: "paragraph",
          text: "Gaya berat mengarah ke bawah, menuju pusat lintasan."
        },
        {
          type: "paragraph",
          text: "Pada kondisi ketika kereta masih bersentuhan dengan lintasan, gaya normal juga dapat memiliki arah menuju pusat."
        },
        {
          type: "equation",
          latex: "N + mg = \\frac{mv^2}{r}"
        },
        {
          type: "paragraph",
          text: "Dalam kondisi tertentu, gaya gravitasi sendiri dapat menyediakan sebagian besar atau bahkan seluruh kebutuhan gaya sentripetal."
        }
      ]
    },

    {
      heading: "🧪 Contoh Analisis",
      blocks: [
        {
          type: "heading",
          text: "🧪 Contoh Analisis"
        },
        {
          type: "paragraph",
          text: "Sebuah kereta roller coaster bermassa 500 kg melewati bagian bawah lintasan melingkar berjari-jari 20 m dengan kelajuan 10 m/s. Gunakan g = 10 m/s²."
        },
        {
          type: "paragraph",
          text: "Pertama, tentukan kebutuhan resultan gaya menuju pusat."
        },
        {
          type: "equation",
          latex: "F_c = \\frac{mv^2}{r}"
        },
        {
          type: "equation",
          latex: "F_c = \\frac{(500)(10^2)}{20}=2500\\;N"
        },
        {
          type: "paragraph",
          text: "Di bagian bawah, gaya normal dan gaya berat berlawanan arah sehingga:"
        },
        {
          type: "equation",
          latex: "N-mg=2500"
        },
        {
          type: "equation",
          latex: "N-5000=2500"
        },
        {
          type: "equation",
          latex: "N=7500\\;N"
        },
        {
          type: "paragraph",
          text: "Gaya normal menjadi lebih besar daripada berat karena kereta membutuhkan resultan gaya ke arah pusat."
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
          text: "🎢 Loop pada roller coaster."
        },
        {
          type: "paragraph",
          text: "🏍️ Wahana motor yang bergerak pada lintasan vertikal."
        },
        {
          type: "paragraph",
          text: "🎡 Sistem wahana yang bergerak mengikuti lintasan melingkar."
        },
        {
          type: "paragraph",
          text: "🛩️ Pesawat yang melakukan manuver melingkar atau loop."
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
          text: "❌ Gaya sentripetal selalu berasal dari gaya normal."
        },
        {
          type: "paragraph",
          text: "✅ Tidak. Gaya sentripetal merupakan resultan gaya menuju pusat. Pada roller coaster, gaya gravitasi dan gaya normal dapat berkontribusi terhadap resultan tersebut."
        },
        {
          type: "paragraph",
          text: "❌ Gaya berat selalu berlawanan arah dengan gaya sentripetal."
        },
        {
          type: "paragraph",
          text: "✅ Arah gaya sentripetal ditentukan oleh posisi pusat lintasan. Di bagian atas lintasan, gaya berat justru mengarah menuju pusat."
        },
        {
          type: "paragraph",
          text: "❌ Penumpang tetap merasakan gaya yang sama di seluruh lintasan."
        },
        {
          type: "paragraph",
          text: "✅ Gaya normal dapat berubah sesuai posisi dan kelajuan kereta sehingga sensasi berat atau ringan juga dapat berubah."
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
          text: "Sensasi 'lebih berat' yang dirasakan penumpang roller coaster di bagian bawah loop berkaitan dengan gaya normal yang dapat menjadi jauh lebih besar daripada berat tubuhnya."
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
          text: "Pada lintasan melingkar vertikal, gaya sentripetal dapat berasal dari kombinasi gaya gravitasi dan gaya normal. Kunci analisisnya adalah menentukan arah pusat lintasan terlebih dahulu, kemudian menjumlahkan gaya-gaya pada arah radial."
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
          text: "Sekarang kamu sudah melihat bahwa gaya sentripetal dapat berasal dari gaya gesek, tegangan tali, serta kombinasi gaya normal dan gravitasi."
        },
        {
          type: "paragraph",
          text: "Lalu bagaimana dengan benda yang bergerak melingkar di luar angkasa, tanpa tali dan tanpa permukaan yang menyentuhnya?"
        },
        {
          type: "paragraph",
          text: "Pada materi berikutnya, kita akan melihat bagaimana gravitasi menjaga planet dan satelit tetap berada pada orbitnya."
        }
      ]
    }
  ]
};

export default rollerCoaster;