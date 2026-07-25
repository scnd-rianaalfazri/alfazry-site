const besaranGerakMelingkar = {
  title: "Besaran-Besaran Gerak Melingkar",
  slug: "besaran-besaran gerak melingkar",
  description:
    "Mengenal besaran sudut, perpindahan sudut, periode, frekuensi, dan hubungan antarbesaran dalam gerak melingkar.",

  chapter: "🌌 Kinematika: Gerak Dua Dimensi",

  content: [
    {
      heading: "🌀 Mengukur Gerak yang Berputar",
      blocks: [
        {
          type: "heading",
          text: "🌀 Mengukur Gerak yang Berputar"
        },
        {
          type: "paragraph",
          text: "Ketika sebuah benda bergerak lurus, kita dapat dengan mudah menggambarkan geraknya menggunakan jarak, perpindahan, kelajuan, dan kecepatan."
        },
        {
          type: "paragraph",
          text: "Namun, bagaimana jika benda tersebut berputar?"
        },
        {
          type: "paragraph",
          text: "Misalnya roda sepeda berputar satu putaran penuh."
        },
        {
          type: "paragraph",
          text: "Atau jarum jam bergerak dari angka 12 menuju angka 3."
        },
        {
          type: "paragraph",
          text: "Untuk menggambarkan gerakan seperti ini, kita membutuhkan besaran yang berkaitan dengan sudut."
        },
        {
          type: "paragraph",
          text: "Di sinilah konsep besaran sudut mulai digunakan."
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
          text: "Bagaimana kita mengetahui seberapa jauh sebuah benda telah berputar?"
        },
        {
          type: "paragraph",
          text: "Apa hubungan antara satu putaran penuh dengan sudut?"
        },
        {
          type: "paragraph",
          text: "Bagaimana cara menentukan seberapa cepat sebuah benda berputar?"
        }
      ]
    },

    {
      heading: "📐 Posisi Sudut",
      blocks: [
        {
          type: "heading",
          text: "📐 Posisi Sudut"
        },
        {
          type: "paragraph",
          text: "Pada gerak melingkar, posisi benda dapat dinyatakan menggunakan sudut terhadap suatu arah acuan."
        },
        {
          type: "paragraph",
          text: "Besaran sudut ini biasanya dilambangkan dengan θ."
        },
        {
          type: "equation",
          latex: "\\theta"
        },
        {
          type: "paragraph",
          text: "Bayangkan sebuah titik bergerak mengelilingi lingkaran. Semakin jauh titik tersebut berputar dari posisi awalnya, semakin besar sudut yang telah ditempuh."
        },
        {
          type: "paragraph",
          text: "Jadi, posisi sudut membantu kita mengetahui posisi benda berdasarkan orientasinya terhadap pusat lingkaran."
        }
      ]
    },

    {
      heading: "🔄 Perpindahan Sudut",
      blocks: [
        {
          type: "heading",
          text: "🔄 Perpindahan Sudut"
        },
        {
          type: "paragraph",
          text: "Jika benda berpindah dari satu posisi sudut ke posisi lainnya, kita dapat menentukan perubahan posisi sudut tersebut."
        },
        {
          type: "equation",
          latex: "\\Delta\\theta=\\theta_2-\\theta_1"
        },
        {
          type: "paragraph",
          text: "Perpindahan sudut menunjukkan seberapa besar perubahan orientasi benda selama bergerak."
        },
        {
          type: "paragraph",
          text: "Besaran ini berbeda dari jarak yang ditempuh benda sepanjang lintasan lingkaran."
        },
        {
          type: "paragraph",
          text: "Sebuah benda dapat menempuh jarak yang cukup panjang sepanjang lintasan, sementara posisi sudutnya juga mengalami perubahan tertentu."
        }
      ]
    },

    {
      heading: "⭕ Satu Putaran Penuh",
      blocks: [
        {
          type: "heading",
          text: "⭕ Satu Putaran Penuh"
        },
        {
          type: "paragraph",
          text: "Ketika sebuah benda menyelesaikan satu putaran penuh, benda tersebut kembali ke posisi awalnya."
        },
        {
          type: "paragraph",
          text: "Satu putaran penuh dapat dinyatakan dalam dua cara:"
        },
        {
          type: "paragraph",
          text: "360°"
        },
        {
          type: "paragraph",
          text: "atau"
        },
        {
          type: "equation",
          latex: "2\\pi\\ \\text{rad}"
        },
        {
          type: "paragraph",
          text: "Kedua bentuk tersebut menyatakan besar sudut yang sama."
        }
      ]
    },

    {
      heading: "📏 Derajat dan Radian",
      blocks: [
        {
          type: "heading",
          text: "📏 Derajat dan Radian"
        },
        {
          type: "paragraph",
          text: "Dalam kehidupan sehari-hari, kita sering menggunakan derajat untuk menyatakan sudut."
        },
        {
          type: "paragraph",
          text: "Namun, dalam fisika dan matematika, radian sering digunakan karena lebih sesuai dengan hubungan antara sudut dan panjang busur."
        },
        {
          type: "paragraph",
          text: "Hubungan antara derajat dan radian:"
        },
        {
          type: "equation",
          latex: "180^\\circ=\\pi\\ \\text{rad}"
        },
        {
          type: "paragraph",
          text: "Sehingga:"
        },
        {
          type: "equation",
          latex: "360^\\circ=2\\pi\\ \\text{rad}"
        }
      ]
    },

    {
      heading: "🌐 Apa Itu Radian?",
      blocks: [
        {
          type: "heading",
          text: "🌐 Apa Itu Radian?"
        },
        {
          type: "paragraph",
          text: "Radian merupakan satuan sudut yang didefinisikan berdasarkan hubungan antara panjang busur dan jari-jari lingkaran."
        },
        {
          type: "paragraph",
          text: "Jika panjang busur yang ditempuh sama dengan panjang jari-jari lingkaran, maka sudut yang terbentuk adalah satu radian."
        },
        {
          type: "equation",
          latex: "\\theta=\\frac{s}{r}"
        },
        {
          type: "paragraph",
          text: "Dengan θ dalam radian, s adalah panjang busur, dan r adalah jari-jari lingkaran."
        },
        {
          type: "paragraph",
          text: "Hubungan ini menjadi sangat penting ketika kita menghubungkan gerak melingkar dengan gerak linear."
        }
      ]
    },

    {
      heading: "📏 Panjang Busur",
      blocks: [
        {
          type: "heading",
          text: "📏 Panjang Busur"
        },
        {
          type: "paragraph",
          text: "Jika sebuah benda bergerak sepanjang lintasan lingkaran, benda tersebut menempuh jarak yang disebut panjang busur."
        },
        {
          type: "equation",
          latex: "s=r\\theta"
        },
        {
          type: "paragraph",
          text: "Persamaan ini menunjukkan hubungan langsung antara panjang lintasan, radius, dan perpindahan sudut dalam radian."
        },
        {
          type: "paragraph",
          text: "Semakin besar radius lingkaran, semakin panjang lintasan yang ditempuh untuk perubahan sudut yang sama."
        }
      ]
    },

    {
      heading: "⏱️ Periode",
      blocks: [
        {
          type: "heading",
          text: "⏱️ Periode"
        },
        {
          type: "paragraph",
          text: "Sekarang kita kembali ke pertanyaan tentang waktu."
        },
        {
          type: "paragraph",
          text: "Periode adalah waktu yang dibutuhkan benda untuk menyelesaikan satu putaran penuh."
        },
        {
          type: "equation",
          latex: "T"
        },
        {
          type: "paragraph",
          text: "Satuan periode dalam SI adalah sekon atau detik (s)."
        },
        {
          type: "paragraph",
          text: "Jika sebuah roda membutuhkan waktu 2 sekon untuk menyelesaikan satu putaran, maka periodenya adalah 2 sekon."
        }
      ]
    },

    {
      heading: "🔢 Frekuensi",
      blocks: [
        {
          type: "heading",
          text: "🔢 Frekuensi"
        },
        {
          type: "paragraph",
          text: "Frekuensi menunjukkan banyaknya putaran yang dilakukan benda dalam setiap satuan waktu."
        },
        {
          type: "equation",
          latex: "f=\\frac{1}{T}"
        },
        {
          type: "paragraph",
          text: "Satuan frekuensi adalah hertz (Hz)."
        },
        {
          type: "paragraph",
          text: "Satu hertz berarti satu putaran atau satu siklus setiap sekon."
        }
      ]
    },

    {
      heading: "🔄 Hubungan Periode dan Frekuensi",
      blocks: [
        {
          type: "heading",
          text: "🔄 Hubungan Periode dan Frekuensi"
        },
        {
          type: "paragraph",
          text: "Periode dan frekuensi memiliki hubungan yang berbanding terbalik."
        },
        {
          type: "paragraph",
          text: "Jika waktu untuk satu putaran semakin kecil, jumlah putaran setiap sekon akan semakin besar."
        },
        {
          type: "paragraph",
          text: "Sebaliknya, jika satu putaran membutuhkan waktu lebih lama, frekuensinya semakin kecil."
        },
        {
          type: "paragraph",
          text: "Jadi:"
        },
        {
          type: "paragraph",
          text: "⏱️ Periode besar → Frekuensi kecil."
        },
        {
          type: "paragraph",
          text: "⚡ Periode kecil → Frekuensi besar."
        }
      ]
    },

    {
      heading: "🧠 Cara Membaca Gerak Melingkar",
      blocks: [
        {
          type: "heading",
          text: "🧠 Cara Membaca Gerak Melingkar"
        },
        {
          type: "paragraph",
          text: "Saat menganalisis sebuah benda yang bergerak melingkar, kita dapat mengajukan beberapa pertanyaan."
        },
        {
          type: "paragraph",
          text: "1️⃣ Berapa besar sudut yang telah ditempuh?"
        },
        {
          type: "paragraph",
          text: "2️⃣ Berapa panjang lintasan yang telah ditempuh?"
        },
        {
          type: "paragraph",
          text: "3️⃣ Berapa waktu yang dibutuhkan untuk satu putaran?"
        },
        {
          type: "paragraph",
          text: "4️⃣ Berapa banyak putaran yang dilakukan setiap sekon?"
        },
        {
          type: "paragraph",
          text: "Pertanyaan-pertanyaan ini akan membantu kita menentukan besaran gerak melingkar yang diperlukan."
        }
      ]
    },

    {
      heading: "🎯 Contoh Analisis",
      blocks: [
        {
          type: "heading",
          text: "🎯 Contoh Analisis"
        },
        {
          type: "paragraph",
          text: "Sebuah roda berputar sebanyak 5 kali dalam waktu 10 sekon."
        },
        {
          type: "paragraph",
          text: "Kita dapat menganalisis geraknya dengan beberapa cara."
        },
        {
          type: "paragraph",
          text: "Pertama, tentukan frekuensi dengan membandingkan jumlah putaran terhadap waktu."
        },
        {
          type: "paragraph",
          text: "Kemudian, gunakan hubungan antara periode dan frekuensi untuk menentukan waktu yang diperlukan roda menyelesaikan satu putaran."
        },
        {
          type: "paragraph",
          text: "Dengan dua besaran ini, kita sudah memiliki informasi dasar mengenai seberapa cepat roda berputar."
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
          text: "❌ Miskonsepsi 1: Satu putaran penuh sama dengan sudut 1 radian."
        },
        {
          type: "paragraph",
          text: "✅ Faktanya: Satu putaran penuh sama dengan 2π radian atau 360°."
        },
        {
          type: "paragraph",
          text: "❌ Miskonsepsi 2: Periode dan frekuensi adalah dua besaran yang tidak berhubungan."
        },
        {
          type: "paragraph",
          text: "✅ Faktanya: Periode dan frekuensi saling berbanding terbalik."
        },
        {
          type: "paragraph",
          text: "❌ Miskonsepsi 3: Radian hanya merupakan cara lain menuliskan derajat."
        },
        {
          type: "paragraph",
          text: "✅ Faktanya: Radian memiliki definisi geometris berdasarkan perbandingan panjang busur dan jari-jari."
        },
        {
          type: "paragraph",
          text: "❌ Miskonsepsi 4: Frekuensi menunjukkan waktu yang dibutuhkan untuk satu putaran."
        },
        {
          type: "paragraph",
          text: "✅ Faktanya: Waktu untuk satu putaran adalah periode. Frekuensi menunjukkan banyaknya putaran setiap satuan waktu."
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
          text: "Satuan radian sebenarnya sangat dekat dengan geometri lingkaran."
        },
        {
          type: "paragraph",
          text: "Ketika kita menggunakan radian, hubungan antara sudut dan panjang busur menjadi sangat sederhana."
        },
        {
          type: "paragraph",
          text: "Inilah alasan mengapa radian sangat sering digunakan dalam fisika untuk menganalisis gerak rotasi dan gerak melingkar."
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
          text: "Gerak melingkar dapat dijelaskan menggunakan besaran sudut dan besaran periodik."
        },
        {
          type: "paragraph",
          text: "Posisi sudut menunjukkan posisi benda terhadap pusat lingkaran, sedangkan perpindahan sudut menunjukkan perubahan posisi sudut."
        },
        {
          type: "paragraph",
          text: "Radian menghubungkan sudut dengan panjang busur."
        },
        {
          type: "paragraph",
          text: "Periode menunjukkan waktu untuk satu putaran, sedangkan frekuensi menunjukkan banyaknya putaran setiap satuan waktu."
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
          text: "Sekarang kita sudah memiliki bahasa untuk menggambarkan gerak melingkar."
        },
        {
          type: "paragraph",
          text: "Kita bisa berbicara tentang sudut, panjang busur, periode, dan frekuensi."
        },
        {
          type: "paragraph",
          text: "Tapi masih ada satu pertanyaan penting:"
        },
        {
          type: "paragraph",
          text: "Seberapa cepat sebenarnya sebuah benda bergerak ketika berputar?"
        },
        {
          type: "paragraph",
          text: "Apakah kecepatan linear dan kecepatan sudut itu sama?"
        },
        {
          type: "paragraph",
          text: "➡️ Selanjutnya: Kecepatan Linear dan Kecepatan Sudut."
        }
      ]
    }
  ]
};

export default besaranGerakMelingkar;