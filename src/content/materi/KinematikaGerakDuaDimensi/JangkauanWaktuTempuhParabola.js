const jangkauanDanWaktuTempuh = {
  title: "Jangkauan Maksimum dan Waktu Tempuh Gerak Parabola",
  slug: "jangkauan maksimum dan waktu tempuh gerak parabola",
  description:
    "Menganalisis jarak horizontal yang dapat dicapai benda dan waktu yang dibutuhkan benda selama bergerak dalam lintasan parabola.",

  chapter: "🌌 Kinematika: Gerak Dua Dimensi",

  content: [
    {
      heading: "🎯 Seberapa Jauh Benda Bisa Terbang?",
      blocks: [
        {
          type: "heading",
          text: "🎯 Seberapa Jauh Benda Bisa Terbang?"
        },
        {
          type: "paragraph",
          text: "Bayangkan kamu menendang bola ke depan dengan sudut tertentu."
        },
        {
          type: "paragraph",
          text: "Bola akan bergerak naik, mencapai titik tertinggi, lalu turun kembali ke permukaan."
        },
        {
          type: "paragraph",
          text: "Sekarang kita punya dua pertanyaan baru:"
        },
        {
          type: "paragraph",
          text: "⏱️ Berapa lama bola berada di udara?"
        },
        {
          type: "paragraph",
          text: "📏 Seberapa jauh bola bergerak dari titik awal?"
        },
        {
          type: "paragraph",
          text: "Dua besaran inilah yang akan kita eksplorasi pada page ini."
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
          text: "Bagaimana cara menentukan waktu total sebuah benda berada di udara?"
        },
        {
          type: "paragraph",
          text: "Bagaimana cara menentukan jarak horizontal yang berhasil ditempuh benda?"
        },
        {
          type: "paragraph",
          text: "Apakah sudut peluncuran tertentu dapat membuat benda mencapai jarak paling jauh?"
        }
      ]
    },

    {
      heading: "⏱️ Apa Itu Waktu Tempuh?",
      blocks: [
        {
          type: "heading",
          text: "⏱️ Apa Itu Waktu Tempuh?"
        },
        {
          type: "paragraph",
          text: "Waktu tempuh adalah total waktu yang dibutuhkan benda sejak diluncurkan hingga mencapai titik akhir atau kembali ke permukaan."
        },
        {
          type: "paragraph",
          text: "Jika benda diluncurkan dan mendarat pada ketinggian yang sama, gerak vertikalnya memiliki pola yang simetris."
        },
        {
          type: "paragraph",
          text: "Waktu total di udara dapat dipandang sebagai gabungan:"
        },
        {
          type: "paragraph",
          text: "⬆️ Waktu untuk naik ke titik tertinggi."
        },
        {
          type: "paragraph",
          text: "⬇️ Waktu untuk turun kembali ke ketinggian awal."
        }
      ]
    },

    {
      heading: "📐 Menentukan Waktu Tempuh",
      blocks: [
        {
          type: "heading",
          text: "📐 Menentukan Waktu Tempuh"
        },
        {
          type: "paragraph",
          text: "Untuk kasus ketika benda kembali mendarat pada ketinggian yang sama dengan titik peluncuran, waktu total di udara dapat ditentukan dari komponen kecepatan awal vertikal."
        },
        {
          type: "equation",
          latex: "T=\\frac{2v_0\\sin\\theta}{g}"
        },
        {
          type: "paragraph",
          text: "Persamaan ini menunjukkan bahwa waktu tempuh dipengaruhi oleh kecepatan awal, sudut peluncuran, dan percepatan gravitasi."
        },
        {
          type: "paragraph",
          text: "Semakin besar komponen kecepatan awal ke arah vertikal, semakin lama benda berada di udara."
        }
      ]
    },

    {
      heading: "📏 Apa Itu Jangkauan?",
      blocks: [
        {
          type: "heading",
          text: "📏 Apa Itu Jangkauan?"
        },
        {
          type: "paragraph",
          text: "Jangkauan atau range adalah jarak horizontal antara titik peluncuran dan titik pendaratan benda."
        },
        {
          type: "paragraph",
          text: "Jangkauan menunjukkan seberapa jauh benda berpindah pada arah horizontal selama berada di udara."
        },
        {
          type: "paragraph",
          text: "Karena gerak horizontal memiliki kecepatan konstan dalam kondisi ideal, jangkauan dapat ditentukan dari kecepatan horizontal dan waktu tempuh."
        }
      ]
    },

    {
      heading: "🧮 Menentukan Jangkauan",
      blocks: [
        {
          type: "heading",
          text: "🧮 Menentukan Jangkauan"
        },
        {
          type: "paragraph",
          text: "Persamaan posisi horizontal adalah:"
        },
        {
          type: "equation",
          latex: "x=v_0\\cos\\theta\\,t"
        },
        {
          type: "paragraph",
          text: "Untuk menentukan jangkauan, kita gunakan waktu total benda berada di udara."
        },
        {
          type: "paragraph",
          text: "Jika benda kembali ke ketinggian awal, diperoleh:"
        },
        {
          type: "equation",
          latex: "R=\\frac{v_0^2\\sin(2\\theta)}{g}"
        },
        {
          type: "paragraph",
          text: "Persamaan ini menunjukkan bahwa jangkauan dipengaruhi oleh kecepatan awal, sudut peluncuran, dan gravitasi."
        }
      ]
    },

    {
      heading: "🎯 Sudut untuk Jangkauan Maksimum",
      blocks: [
        {
          type: "heading",
          text: "🎯 Sudut untuk Jangkauan Maksimum"
        },
        {
          type: "paragraph",
          text: "Sekarang muncul pertanyaan menarik: jika kecepatan awal tetap, pada sudut berapa benda dapat mencapai jarak horizontal paling jauh?"
        },
        {
          type: "paragraph",
          text: "Dalam kondisi ideal, ketika titik peluncuran dan titik pendaratan berada pada ketinggian yang sama dan hambatan udara diabaikan, jangkauan maksimum terjadi ketika:"
        },
        {
          type: "equation",
          latex: "\\theta=45^\\circ"
        },
        {
          type: "paragraph",
          text: "Pada sudut ini, komponen horizontal dan vertikal dari kecepatan awal memiliki kombinasi yang menghasilkan jangkauan horizontal maksimum."
        }
      ]
    },

    {
      heading: "🔄 Sudut yang Berbeda, Jangkauan yang Sama",
      blocks: [
        {
          type: "heading",
          text: "🔄 Sudut yang Berbeda, Jangkauan yang Sama"
        },
        {
          type: "paragraph",
          text: "Ada hal menarik lainnya."
        },
        {
          type: "paragraph",
          text: "Dalam kondisi ideal, dua sudut yang saling melengkapi dapat menghasilkan jangkauan yang sama."
        },
        {
          type: "paragraph",
          text: "Contohnya:"
        },
        {
          type: "paragraph",
          text: "30° dan 60°"
        },
        {
          type: "paragraph",
          text: "20° dan 70°"
        },
        {
          type: "paragraph",
          text: "Hal ini terjadi karena nilai sin(2θ) untuk pasangan sudut tersebut sama."
        }
      ]
    },

    {
      heading: "🧩 Hubungan Tiga Besaran",
      blocks: [
        {
          type: "heading",
          text: "🧩 Hubungan Tiga Besaran"
        },
        {
          type: "paragraph",
          text: "Pada gerak parabola, kita dapat melihat hubungan antara:"
        },
        {
          type: "paragraph",
          text: "⏱️ Waktu tempuh → menentukan berapa lama benda berada di udara."
        },
        {
          type: "paragraph",
          text: "📏 Jangkauan → menentukan seberapa jauh benda bergerak secara horizontal."
        },
        {
          type: "📐 Sudut peluncuran → memengaruhi distribusi kecepatan horizontal dan vertikal."
        },
        {
          type: "paragraph",
          text: "Ketiga konsep ini saling berhubungan dan dapat digunakan untuk menganalisis lintasan benda."
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
          text: "Sebuah bola dilempar dengan kecepatan awal v₀ dan sudut θ dari permukaan tanah, kemudian mendarat kembali pada ketinggian yang sama."
        },
        {
          type: "paragraph",
          text: "Untuk menentukan waktu tempuh:"
        },
        {
          type: "paragraph",
          text: "1️⃣ Tentukan komponen kecepatan awal vertikal."
        },
        {
          type: "paragraph",
          text: "2️⃣ Gunakan kondisi posisi vertikal saat kembali ke titik awal."
        },
        {
          type: "paragraph",
          text: "3️⃣ Tentukan waktu total benda di udara."
        },
        {
          type: "paragraph",
          text: "Untuk menentukan jangkauan:"
        },
        {
          type: "paragraph",
          text: "4️⃣ Tentukan komponen kecepatan awal horizontal."
        },
        {
          type: "paragraph",
          text: "5️⃣ Kalikan dengan waktu tempuh."
        },
        {
          type: "paragraph",
          text: "Dengan demikian, kita dapat mengetahui seberapa jauh bola bergerak sebelum kembali ke permukaan."
        }
      ]
    },

    {
      heading: "📊 Membaca Hubungan Sudut dan Jangkauan",
      blocks: [
        {
          type: "heading",
          text: "📊 Membaca Hubungan Sudut dan Jangkauan"
        },
        {
          type: "paragraph",
          text: "Jika kecepatan awal tetap, perubahan sudut peluncuran akan mengubah jangkauan benda."
        },
        {
          type: "paragraph",
          text: "Pada sudut kecil, benda memiliki kecepatan horizontal besar tetapi waktu di udara relatif singkat."
        },
        {
          type: "paragraph",
          text: "Pada sudut besar, benda memiliki komponen kecepatan vertikal yang lebih besar tetapi komponen horizontal lebih kecil."
        },
        {
          type: "paragraph",
          text: "Di antara kedua kondisi tersebut terdapat sudut yang menghasilkan jangkauan maksimum."
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
          text: "🏀 Pemain basket harus mengatur sudut dan kecepatan lemparan agar bola mencapai ring."
        },
        {
          type: "paragraph",
          text: "⚽ Pemain sepak bola mengatur sudut tendangan untuk menentukan seberapa jauh bola melambung."
        },
        {
          type: "🏹 Dalam olahraga panahan, sudut peluncuran memengaruhi lintasan dan jarak tempuh anak panah."
        },
        {
          type: "💦 Pancaran air dari selang dapat memiliki jangkauan berbeda tergantung sudut arah semprotan."
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
          text: "❌ Miskonsepsi 1: Semakin besar sudut peluncuran, semakin jauh jangkauan benda."
        },
        {
          type: "paragraph",
          text: "✅ Faktanya: Jangkauan maksimum dalam kondisi ideal terjadi pada sudut 45° jika titik peluncuran dan pendaratan berada pada ketinggian yang sama."
        },
        {
          type: "paragraph",
          text: "❌ Miskonsepsi 2: Sudut 90° menghasilkan jangkauan paling jauh."
        },
        {
          type: "paragraph",
          text: "✅ Faktanya: Pada sudut 90°, benda bergerak vertikal sehingga perpindahan horizontalnya nol."
        },
        {
          type: "paragraph",
          text: "❌ Miskonsepsi 3: Sudut 30° dan 60° selalu menghasilkan jangkauan yang sama."
        },
        {
          type: "paragraph",
          text: "✅ Faktanya: Hal ini berlaku pada kondisi ideal ketika titik peluncuran dan pendaratan berada pada ketinggian yang sama serta hambatan udara diabaikan."
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
          text: "Dalam kondisi ideal, sudut 45° menghasilkan jangkauan maksimum. Namun, dalam olahraga nyata seperti lempar lembing atau tendangan sepak bola, sudut terbaik tidak selalu 45°."
        },
        {
          type: "paragraph",
          text: "Mengapa? Karena kondisi nyata melibatkan hambatan udara, ketinggian pelepasan, bentuk benda, dan teknik manusia."
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
          text: "Waktu tempuh menunjukkan berapa lama benda berada di udara, sedangkan jangkauan menunjukkan seberapa jauh benda berpindah pada arah horizontal."
        },
        {
          type: "paragraph",
          text: "Untuk benda yang diluncurkan dan mendarat pada ketinggian yang sama, jangkauan maksimum secara ideal terjadi pada sudut 45°."
        },
        {
          type: "paragraph",
          text: "Jangkauan dan waktu tempuh sangat dipengaruhi oleh kecepatan awal dan sudut peluncuran."
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
          text: "Kita sudah berhasil membongkar hampir seluruh rahasia gerak parabola."
        },
        {
          type: "paragraph",
          text: "Kita tahu bagaimana benda bergerak, seberapa tinggi benda dapat mencapai, berapa lama benda berada di udara, dan seberapa jauh benda dapat melaju."
        },
        {
          type: "paragraph",
          text: "Sekarang saatnya melihat bagaimana konsep ini bekerja di dunia nyata."
        },
        {
          type: "paragraph",
          text: "➡️ Selanjutnya: Penerapan Gerak Parabola dalam Kehidupan dan Teknologi."
        }
      ]
    }
  ]
};

export default jangkauanDanWaktuTempuh;
