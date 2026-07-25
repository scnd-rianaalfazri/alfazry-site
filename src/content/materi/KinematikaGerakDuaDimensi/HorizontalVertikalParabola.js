const gerakHorizontalDanVertikal = {
  title: "Gerak Horizontal dan Gerak Vertikal pada Gerak Parabola",
  slug: "gerak-horizontal-dan-vertikal-pada-gerakparabola",
  description: "Memahami bagaimana gerak horizontal dan gerak vertikal bekerja secara bersamaan dalam membentuk lintasan parabola.",
  chapter: "🌌 Kinematika: Gerak Dua Dimensi",

  content: [
    {
      heading: "🧩 Satu Gerak, Dua Arah",
      blocks: [
        {
          type: "heading",
          text: "🧩 Satu Gerak, Dua Arah"
        },
        {
          type: "paragraph",
          text: "Bayangkan sebuah bola dilempar miring ke udara."
        },
        {
          type: "paragraph",
          text: "Dalam waktu yang sama, bola bergerak ke depan dan bergerak naik atau turun."
        },
        {
          type: "paragraph",
          text: "Kalau kita melihatnya sebagai satu gerakan, lintasannya terlihat cukup rumit."
        },
        {
          type: "paragraph",
          text: "Namun, ada sebuah trik sederhana: kita pecah gerakan tersebut menjadi dua arah."
        },
        {
          type: "paragraph",
          text: "➡️ Gerak horizontal pada sumbu X."
        },
        {
          type: "paragraph",
          text: "⬆️ Gerak vertikal pada sumbu Y."
        },
        {
          type: "paragraph",
          text: "Dengan cara ini, gerak parabola menjadi jauh lebih mudah dianalisis."
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
          text: "Jika sebuah benda bergerak maju sekaligus naik dan turun, apakah gerak pada arah horizontal memengaruhi gerak vertikal?"
        },
        {
          type: "paragraph",
          text: "Apa yang terjadi pada kecepatan benda pada masing-masing arah?"
        },
        {
          type: "paragraph",
          text: "Dan mengapa kita bisa menganalisis kedua gerak tersebut secara terpisah?"
        }
      ]
    },

    {
      heading: "➡️ Gerak pada Arah Horizontal",
      blocks: [
        {
          type: "heading",
          text: "➡️ Gerak pada Arah Horizontal"
        },
        {
          type: "paragraph",
          text: "Pada arah horizontal atau sumbu X, benda bergerak ke depan."
        },
        {
          type: "paragraph",
          text: "Dalam model ideal, hambatan udara diabaikan dan tidak ada gaya horizontal yang bekerja pada benda."
        },
        {
          type: "paragraph",
          text: "Akibatnya, tidak ada percepatan horizontal."
        },
        {
          type: "paragraph",
          text: "Artinya, kecepatan horizontal benda tetap konstan selama gerak berlangsung."
        },
        {
          type: "paragraph",
          text: "Jadi, gerak horizontal pada gerak parabola dapat dianalisis seperti Gerak Lurus Beraturan (GLB)."
        }
      ]
    },

    {
      heading: "📐 Komponen Kecepatan Horizontal",
      blocks: [
        {
          type: "heading",
          text: "📐 Komponen Kecepatan Horizontal"
        },
        {
          type: "paragraph",
          text: "Jika benda diluncurkan dengan kecepatan awal v₀ pada sudut θ terhadap horizontal, maka sebagian dari kecepatan awal tersebut bekerja pada arah X."
        },
        {
          type: "equation",
          latex: "v_{0x}=v_0\\cos\\theta"
        },
        {
          type: "paragraph",
          text: "Karena percepatan horizontal bernilai nol, maka:"
        },
        {
          type: "equation",
          latex: "a_x=0"
        },
        {
          type: "paragraph",
          text: "Akibatnya, kecepatan horizontal tetap:"
        },
        {
          type: "equation",
          latex: "v_x=v_{0x}"
        }
      ]
    },

    {
      heading: "⬆️ Gerak pada Arah Vertikal",
      blocks: [
        {
          type: "heading",
          text: "⬆️ Gerak pada Arah Vertikal"
        },
        {
          type: "paragraph",
          text: "Pada arah vertikal atau sumbu Y, benda mengalami pengaruh gravitasi."
        },
        {
          type: "paragraph",
          text: "Ketika benda bergerak naik, gravitasi bekerja berlawanan arah dengan gerak sehingga kecepatan vertikal semakin berkurang."
        },
        {
          type: "paragraph",
          text: "Di titik tertinggi, kecepatan vertikal sesaat menjadi nol."
        },
        {
          type: "paragraph",
          text: "Setelah itu, benda mulai bergerak turun dan kecepatan vertikalnya semakin besar ke arah bawah."
        },
        {
          type: "paragraph",
          text: "Gerak vertikal ini dapat dianalisis seperti Gerak Lurus Berubah Beraturan (GLBB)."
        }
      ]
    },

    {
      heading: "📐 Komponen Kecepatan Vertikal",
      blocks: [
        {
          type: "heading",
          text: "📐 Komponen Kecepatan Vertikal"
        },
        {
          type: "paragraph",
          text: "Komponen kecepatan awal pada arah vertikal adalah:"
        },
        {
          type: "equation",
          latex: "v_{0y}=v_0\\sin\\theta"
        },
        {
          type: "paragraph",
          text: "Jika arah ke atas dianggap positif, maka percepatan gravitasi bernilai negatif:"
        },
        {
          type: "equation",
          latex: "a_y=-g"
        },
        {
          type: "paragraph",
          text: "Kecepatan vertikal pada waktu tertentu dapat ditentukan dengan persamaan GLBB:"
        },
        {
          type: "equation",
          latex: "v_y=v_{0y}-gt"
        }
      ]
    },

    {
      heading: "🔄 Dua Gerak yang Berjalan Bersamaan",
      blocks: [
        {
          type: "heading",
          text: "🔄 Dua Gerak yang Berjalan Bersamaan"
        },
        {
          type: "paragraph",
          text: "Inilah bagian paling menarik dari gerak parabola."
        },
        {
          type: "paragraph",
          text: "Gerak horizontal dan vertikal berlangsung pada waktu yang sama, tetapi masing-masing memiliki karakteristik yang berbeda."
        },
        {
          type: "paragraph",
          text: "➡️ Horizontal: kecepatan konstan."
        },
        {
          type: "paragraph",
          text: "⬆️ Vertikal: kecepatan berubah akibat gravitasi."
        },
        {
          type: "paragraph",
          text: "Keduanya menggunakan waktu yang sama. Pada setiap saat, posisi benda dapat ditentukan dari posisi horizontal dan posisi vertikalnya."
        }
      ]
    },

    {
      heading: "⏱️ Waktu sebagai Penghubung",
      blocks: [
        {
          type: "heading",
          text: "⏱️ Waktu sebagai Penghubung"
        },
        {
          type: "paragraph",
          text: "Meskipun gerak horizontal dan vertikal dianalisis secara terpisah, keduanya tetap terjadi pada waktu yang sama."
        },
        {
          type: "paragraph",
          text: "Misalnya, setelah 2 detik:"
        },
        {
          type: "paragraph",
          text: "➡️ Benda sudah berpindah sejauh tertentu pada arah horizontal."
        },
        {
          type: "paragraph",
          text: "⬆️ Pada saat yang sama, benda juga sudah berada pada ketinggian tertentu."
        },
        {
          type: "paragraph",
          text: "Jadi, waktu menjadi penghubung antara gerak X dan gerak Y."
        }
      ]
    },

    {
      heading: "🎯 Visualisasi Konsep",
      blocks: [
        {
          type: "heading",
          text: "🎯 Visualisasi Konsep"
        },
        {
          type: "paragraph",
          text: "Bayangkan sebuah bola bergerak dari titik A menuju titik B."
        },
        {
          type: "paragraph",
          text: "Pada setiap waktu tertentu, posisi bola dapat dibayangkan sebagai gabungan dua informasi:"
        },
        {
          type: "paragraph",
          text: "📏 Seberapa jauh bola telah bergerak ke samping."
        },
        {
          type: "paragraph",
          text: "📐 Seberapa tinggi atau rendah posisi bola."
        },
        {
          type: "paragraph",
          text: "Ketika kedua posisi tersebut digabungkan pada bidang X-Y, terbentuklah titik-titik yang membentuk lintasan parabola."
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
          text: "Bayangkan seorang pemain basket melakukan shooting."
        },
        {
          type: "paragraph",
          text: "Bola memiliki kecepatan horizontal yang membuatnya bergerak menuju ring."
        },
        {
          type: "paragraph",
          text: "Pada saat yang sama, bola memiliki kecepatan vertikal yang membuatnya bergerak naik sebelum akhirnya turun menuju ring."
        },
        {
          type: "paragraph",
          text: "Jika sudut dan kecepatan awal tepat, lintasan bola akan membawa bola melewati ring."
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
          text: "❌ Miskonsepsi 1: Kecepatan horizontal semakin kecil saat benda naik."
        },
        {
          type: "paragraph",
          text: "✅ Faktanya: Dalam kondisi ideal tanpa hambatan udara, kecepatan horizontal tetap konstan."
        },
        {
          type: "paragraph",
          text: "❌ Miskonsepsi 2: Ketika benda mencapai titik tertinggi, benda berhenti."
        },
        {
          type: "paragraph",
          text: "✅ Faktanya: Kecepatan vertikal memang nol sesaat, tetapi kecepatan horizontal tetap ada."
        },
        {
          type: "paragraph",
          text: "❌ Miskonsepsi 3: Gerak horizontal dan vertikal tidak berhubungan sama sekali."
        },
        {
          type: "paragraph",
          text: "✅ Faktanya: Keduanya dapat dianalisis secara independen, tetapi tetap terjadi pada waktu yang sama dan bersama-sama menentukan posisi benda."
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
          text: "Gerak parabola dapat dipahami sebagai 'dua cerita gerak' yang berlangsung dalam satu waktu."
        },
        {
          type: "paragraph",
          text: "Satu cerita berlangsung di arah horizontal, sementara cerita lainnya berlangsung di arah vertikal. Ketika keduanya digabungkan, kita melihat satu lintasan parabola."
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
          text: "Gerak parabola dapat dianalisis dengan memisahkan gerak menjadi komponen horizontal dan vertikal."
        },
        {
          type: "paragraph",
          text: "Pada arah horizontal, benda bergerak dengan kecepatan konstan dalam kondisi ideal."
        },
        {
          type: "paragraph",
          text: "Pada arah vertikal, benda mengalami percepatan gravitasi sehingga kecepatannya berubah."
        },
        {
          type: "paragraph",
          text: "Kedua gerak terjadi secara bersamaan dan memiliki waktu yang sama."
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
          text: "Sekarang kita sudah memahami bagaimana gerak horizontal dan vertikal bekerja secara bersamaan."
        },
        {
          type: "paragraph",
          text: "Saatnya mengubah pemahaman tersebut menjadi persamaan matematika."
        },
        {
          type: "paragraph",
          text: "Bagaimana menentukan posisi benda setelah beberapa detik?"
        },
        {
          type: "paragraph",
          text: "Bagaimana menentukan posisi horizontal dan vertikalnya?"
        },
        {
          type: "paragraph",
          text: "➡️ Selanjutnya: Persamaan Gerak Parabola."
        }
      ]
    }
  ]
};

export default gerakHorizontalDanVertikal;