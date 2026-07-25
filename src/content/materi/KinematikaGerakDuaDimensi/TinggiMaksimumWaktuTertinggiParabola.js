const tinggiMaksimumDanWaktuTertinggi = {
  title: "Tinggi Maksimum dan Waktu Mencapai Titik Tertinggi",
  slug: "tinggi maksimum dan waktu mencapai titik tertinggi",
  description:
    "Menganalisis waktu yang dibutuhkan benda untuk mencapai titik tertinggi dan menentukan ketinggian maksimum dalam gerak parabola.",

  chapter: "🌌 Kinematika: Gerak Dua Dimensi",

  content: [
    {
      heading: "🚀 Seberapa Tinggi Benda Bisa Terbang?",
      blocks: [
        {
          type: "heading",
          text: "🚀 Seberapa Tinggi Benda Bisa Terbang?"
        },
        {
          type: "paragraph",
          text: "Bayangkan sebuah bola dilempar miring ke udara."
        },
        {
          type: "paragraph",
          text: "Bola terus bergerak naik, tetapi gravitasi terus menariknya ke bawah. Akibatnya, gerak vertikal bola semakin melambat."
        },
        {
          type: "paragraph",
          text: "Sampai akhirnya bola mencapai satu titik di mana geraknya tidak lagi naik."
        },
        {
          type: "paragraph",
          text: "Itulah titik tertinggi atau puncak lintasan."
        },
        {
          type: "paragraph",
          text: "Tapi berapa lama bola membutuhkan waktu untuk sampai ke sana? Dan seberapa tinggi posisi bola pada titik tersebut?"
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
          text: "Apa yang terjadi pada kecepatan benda ketika mencapai titik tertinggi?"
        },
        {
          type: "paragraph",
          text: "Bagaimana kita menentukan waktu yang dibutuhkan untuk mencapai titik tersebut?"
        },
        {
          type: "paragraph",
          text: "Bagaimana cara menghitung tinggi maksimum yang dapat dicapai benda?"
        }
      ]
    },

    {
      heading: "🎯 Apa yang Terjadi di Titik Tertinggi?",
      blocks: [
        {
          type: "heading",
          text: "🎯 Apa yang Terjadi di Titik Tertinggi?"
        },
        {
          type: "paragraph",
          text: "Pada gerak parabola, kita telah mengetahui bahwa gerak vertikal dipengaruhi oleh gravitasi."
        },
        {
          type: "paragraph",
          text: "Saat benda bergerak naik, kecepatan vertikalnya semakin kecil."
        },
        {
          type: "paragraph",
          text: "Ketika mencapai titik tertinggi, benda berhenti naik sesaat."
        },
        {
          type: "paragraph",
          text: "Artinya, pada saat tersebut kecepatan vertikal benda bernilai nol."
        },
        {
          type: "paragraph",
          text: "Namun, ingat: benda tidak berhenti total."
        },
        {
          type: "paragraph",
          text: "Kecepatan horizontal masih tetap ada sehingga benda masih bergerak ke depan."
        }
      ]
    },

    {
      heading: "⚡ Kunci Menentukan Titik Tertinggi",
      blocks: [
        {
          type: "heading",
          text: "⚡ Kunci Menentukan Titik Tertinggi"
        },
        {
          type: "paragraph",
          text: "Kita sudah mengetahui persamaan kecepatan vertikal:"
        },
        {
          type: "equation",
          latex: "v_y=v_0\\sin\\theta-gt"
        },
        {
          type: "paragraph",
          text: "Di titik tertinggi, kecepatan vertikal bernilai nol."
        },
        {
          type: "equation",
          latex: "v_y=0"
        },
        {
          type: "paragraph",
          text: "Maka:"
        },
        {
          type: "equation",
          latex: "0=v_0\\sin\\theta-gt"
        }
      ]
    },

    {
      heading: "⏱️ Waktu Mencapai Titik Tertinggi",
      blocks: [
        {
          type: "heading",
          text: "⏱️ Waktu Mencapai Titik Tertinggi"
        },
        {
          type: "paragraph",
          text: "Dari kondisi di titik tertinggi, kita dapat menentukan waktu yang dibutuhkan benda untuk mencapai puncak lintasan."
        },
        {
          type: "equation",
          latex: "t_{maks}=\\frac{v_0\\sin\\theta}{g}"
        },
        {
          type: "paragraph",
          text: "Waktu ini hanya ditentukan oleh komponen kecepatan awal pada arah vertikal dan percepatan gravitasi."
        },
        {
          type: "paragraph",
          text: "Semakin besar komponen kecepatan awal ke atas, semakin lama benda mencapai titik tertinggi."
        },
        {
          type: "paragraph",
          text: "Sebaliknya, semakin besar percepatan gravitasi, semakin cepat benda mencapai titik tertinggi."
        }
      ]
    },

    {
      heading: "📐 Menentukan Tinggi Maksimum",
      blocks: [
        {
          type: "heading",
          text: "📐 Menentukan Tinggi Maksimum"
        },
        {
          type: "paragraph",
          text: "Setelah mengetahui waktu mencapai titik tertinggi, kita dapat menentukan ketinggian maksimum benda."
        },
        {
          type: "paragraph",
          text: "Gunakan persamaan posisi vertikal:"
        },
        {
          type: "equation",
          latex: "y=v_0\\sin\\theta\\,t-\\frac{1}{2}gt^2"
        },
        {
          type: "paragraph",
          text: "Pada titik tertinggi, waktu t digantikan dengan waktu mencapai titik maksimum."
        },
        {
          type: "equation",
          latex: "H_{maks}=\\frac{v_0^2\\sin^2\\theta}{2g}"
        },
        {
          type: "paragraph",
          text: "Persamaan ini digunakan jika titik peluncuran dijadikan sebagai titik acuan ketinggian nol."
        }
      ]
    },

    {
      heading: "🧠 Membaca Makna Rumus",
      blocks: [
        {
          type: "heading",
          text: "🧠 Membaca Makna Rumus"
        },
        {
          type: "paragraph",
          text: "Perhatikan bahwa tinggi maksimum dipengaruhi oleh kecepatan awal, sudut peluncuran, dan gravitasi."
        },
        {
          type: "paragraph",
          text: "Kecepatan awal yang lebih besar dapat membuat benda mencapai ketinggian yang lebih tinggi."
        },
        {
          type: "paragraph",
          text: "Sudut peluncuran menentukan seberapa besar kecepatan awal diarahkan ke atas."
        },
        {
          type: "paragraph",
          text: "Sementara itu, gravitasi bekerja melawan gerak vertikal benda."
        }
      ]
    },

    {
      heading: "🔄 Hubungan Waktu dan Tinggi Maksimum",
      blocks: [
        {
          type: "heading",
          text: "🔄 Hubungan Waktu dan Tinggi Maksimum"
        },
        {
          type: "paragraph",
          text: "Waktu mencapai titik tertinggi dan tinggi maksimum merupakan dua besaran yang saling berkaitan."
        },
        {
          type: "paragraph",
          text: "Semakin lama benda bergerak naik sebelum mencapai puncak, biasanya semakin besar pula ketinggian yang dapat dicapai."
        },
        {
          type: "paragraph",
          text: "Namun, waktu dan tinggi maksimum tidak selalu memiliki hubungan yang sederhana karena keduanya juga dipengaruhi oleh kecepatan awal dan sudut peluncuran."
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
          text: "Sebuah bola dilempar dengan kecepatan awal tertentu pada sudut elevasi tertentu."
        },
        {
          type: "paragraph",
          text: "Untuk menentukan waktu mencapai titik tertinggi:"
        },
        {
          type: "paragraph",
          text: "1️⃣ Tentukan kecepatan awal v₀."
        },
        {
          type: "paragraph",
          text: "2️⃣ Tentukan sudut peluncuran θ."
        },
        {
          type: "paragraph",
          text: "3️⃣ Tentukan komponen kecepatan awal vertikal."
        },
        {
          type: "paragraph",
          text: "4️⃣ Gunakan kondisi vᵧ = 0 pada titik tertinggi."
        },
        {
          type: "paragraph",
          text: "5️⃣ Hitung waktu mencapai titik tertinggi."
        },
        {
          type: "paragraph",
          text: "Setelah itu, waktu tersebut dapat digunakan untuk menentukan tinggi maksimum."
        }
      ]
    },

    {
      heading: "📊 Membaca Grafik Kecepatan Vertikal",
      blocks: [
        {
          type: "heading",
          text: "📊 Membaca Grafik Kecepatan Vertikal"
        },
        {
          type: "paragraph",
          text: "Jika kecepatan vertikal diplot terhadap waktu, grafiknya berbentuk garis lurus yang menurun."
        },
        {
          type: "paragraph",
          text: "Saat benda bergerak naik, kecepatan vertikal bernilai positif."
        },
        {
          type: "paragraph",
          text: "Ketika mencapai titik tertinggi, grafik melewati nilai nol."
        },
        {
          type: "paragraph",
          text: "Setelah itu, kecepatan vertikal bernilai negatif karena benda bergerak turun."
        },
        {
          type: "paragraph",
          text: "Titik ketika grafik memotong vᵧ = 0 menunjukkan waktu saat benda mencapai titik tertinggi."
        }
      ]
    },

    {
      heading: "🏀 Contoh dalam Kehidupan",
      blocks: [
        {
          type: "heading",
          text: "🏀 Contoh dalam Kehidupan"
        },
        {
          type: "paragraph",
          text: "🏀 Bola basket mencapai titik tertinggi sebelum mulai turun menuju ring."
        },
        {
          type: "⚽ Bola yang ditendang melambung memiliki titik puncak lintasan sebelum jatuh ke tanah."
        },
        {
          type: "🎆 Kembang api mencapai ketinggian tertentu sebelum efek ledakannya terlihat di langit."
        },
        {
          type: "💦 Air dari selang memiliki titik tertinggi sebelum kembali turun."
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
          text: "❌ Miskonsepsi 1: Di titik tertinggi, kecepatan benda sama dengan nol."
        },
        {
          type: "paragraph",
          text: "✅ Faktanya: Hanya kecepatan vertikal yang bernilai nol. Kecepatan horizontal tetap ada."
        },
        {
          type: "paragraph",
          text: "❌ Miskonsepsi 2: Percepatan benda menjadi nol di titik tertinggi."
        },
        {
          type: "paragraph",
          text: "✅ Faktanya: Percepatan gravitasi tetap bekerja ke arah bawah sepanjang gerak benda."
        },
        {
          type: "paragraph",
          text: "❌ Miskonsepsi 3: Benda berhenti beberapa saat di titik tertinggi."
        },
        {
          type: "paragraph",
          text: "✅ Faktanya: Benda hanya memiliki kecepatan vertikal nol sesaat, kemudian langsung mulai bergerak turun."
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
          text: "Dalam kondisi ideal dan jika benda kembali ke ketinggian awal, waktu yang dibutuhkan untuk naik ke titik tertinggi sama dengan waktu yang dibutuhkan untuk turun kembali ke ketinggian awal."
        },
        {
          type: "paragraph",
          text: "Ini terjadi karena gerak vertikal dipengaruhi oleh percepatan gravitasi yang konstan dan lintasannya bersifat simetris."
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
          text: "Titik tertinggi pada gerak parabola terjadi ketika kecepatan vertikal benda bernilai nol."
        },
        {
          type: "paragraph",
          text: "Pada titik tersebut, benda masih memiliki kecepatan horizontal sehingga tetap bergerak maju."
        },
        {
          type: "paragraph",
          text: "Waktu mencapai titik tertinggi ditentukan oleh komponen kecepatan awal vertikal dan percepatan gravitasi."
        },
        {
          type: "paragraph",
          text: "Tinggi maksimum menunjukkan seberapa jauh benda dapat mencapai posisi vertikal tertinggi dari titik acuannya."
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
          text: "Kita sudah berhasil menemukan puncak lintasan."
        },
        {
          type: "paragraph",
          text: "Sekarang muncul pertanyaan berikutnya:"
        },
        {
          type: "paragraph",
          text: "Seberapa jauh benda dapat bergerak sebelum kembali ke tanah?"
        },
        {
          type: "paragraph",
          text: "Berapa lama total waktu benda berada di udara?"
        },
        {
          type: "paragraph",
          text: "➡️ Selanjutnya: Jangkauan Maksimum dan Waktu Tempuh Gerak Parabola."
        }
      ]
    }
  ]
};

export default tinggiMaksimumDanWaktuTertinggi;