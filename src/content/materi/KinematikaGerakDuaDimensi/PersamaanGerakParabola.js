const persamaanGerakParabola = {
  title: "Persamaan Gerak Parabola",
  slug: "persamaan gerak parabola",
  description:
    "Menyusun dan memahami persamaan posisi serta kecepatan pada arah horizontal dan vertikal dalam gerak parabola.",

  chapter: "🌌 Kinematika: Gerak Dua Dimensi",

  content: [
    {
      heading: "🧭 Mengubah Gerak Menjadi Persamaan",
      blocks: [
        {
          type: "heading",
          text: "🧭 Mengubah Gerak Menjadi Persamaan"
        },
        {
          type: "paragraph",
          text: "Sekarang kita sudah tahu bahwa gerak parabola sebenarnya merupakan gabungan dua gerak: gerak horizontal dan gerak vertikal."
        },
        {
          type: "paragraph",
          text: "Tapi bagaimana kita bisa mengetahui posisi benda setelah 1 detik, 2 detik, atau 3 detik?"
        },
        {
          type: "paragraph",
          text: "Di sinilah persamaan gerak mulai digunakan."
        },
        {
          type: "paragraph",
          text: "Dengan persamaan matematika, kita dapat memprediksi posisi dan kecepatan benda pada waktu tertentu tanpa harus mengamati gerak benda secara langsung."
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
          text: "Bagaimana cara menentukan posisi benda pada arah horizontal dan vertikal setelah bergerak selama waktu tertentu?"
        },
        {
          type: "paragraph",
          text: "Bagaimana posisi benda berubah dari waktu ke waktu hingga akhirnya membentuk lintasan parabola?"
        }
      ]
    },

    {
      heading: "🎯 Titik Awal Gerak",
      blocks: [
        {
          type: "heading",
          text: "🎯 Titik Awal Gerak"
        },
        {
          type: "paragraph",
          text: "Untuk menganalisis gerak parabola, kita perlu menentukan sistem koordinat dan titik awal."
        },
        {
          type: "paragraph",
          text: "Misalkan sebuah benda diluncurkan dari titik awal dengan kecepatan awal v₀ dan sudut elevasi θ terhadap arah horizontal."
        },
        {
          type: "paragraph",
          text: "Kecepatan awal tersebut kita uraikan menjadi dua komponen:"
        },
        {
          type: "equation",
          latex: "v_{0x}=v_0\\cos\\theta"
        },
        {
          type: "equation",
          latex: "v_{0y}=v_0\\sin\\theta"
        },
        {
          type: "paragraph",
          text: "Komponen v₀x digunakan untuk menganalisis gerak pada sumbu X, sedangkan v₀y digunakan untuk menganalisis gerak pada sumbu Y."
        }
      ]
    },

    {
      heading: "➡️ Persamaan Posisi Horizontal",
      blocks: [
        {
          type: "heading",
          text: "➡️ Persamaan Posisi Horizontal"
        },
        {
          type: "paragraph",
          text: "Pada arah horizontal, benda bergerak dengan kecepatan konstan karena percepatan horizontal dianggap nol."
        },
        {
          type: "paragraph",
          text: "Karena gerak horizontal dapat dianalisis sebagai GLB, posisi horizontal benda setelah waktu tertentu dapat ditentukan dari kecepatan horizontal dan waktu."
        },
        {
          type: "equation",
          latex: "x=v_{0x}t"
        },
        {
          type: "paragraph",
          text: "Dengan memasukkan komponen kecepatan awal horizontal, diperoleh:"
        },
        {
          type: "equation",
          latex: "x=v_0\\cos\\theta\\,t"
        },
        {
          type: "paragraph",
          text: "Artinya, semakin lama benda bergerak, semakin jauh posisi benda berpindah pada arah horizontal."
        }
      ]
    },

    {
      heading: "⬆️ Persamaan Posisi Vertikal",
      blocks: [
        {
          type: "heading",
          text: "⬆️ Persamaan Posisi Vertikal"
        },
        {
          type: "paragraph",
          text: "Pada arah vertikal, benda mengalami percepatan gravitasi."
        },
        {
          type: "paragraph",
          text: "Jika arah ke atas dianggap positif dan titik awal berada pada y = 0, maka posisi vertikal benda setelah waktu tertentu dapat ditentukan menggunakan persamaan GLBB."
        },
        {
          type: "equation",
          latex: "y=v_{0y}t-\\frac{1}{2}gt^2"
        },
        {
          type: "paragraph",
          text: "Dengan memasukkan komponen kecepatan awal vertikal, diperoleh:"
        },
        {
          type: "equation",
          latex: "y=v_0\\sin\\theta\\,t-\\frac{1}{2}gt^2"
        },
        {
          type: "paragraph",
          text: "Persamaan ini menunjukkan bahwa posisi vertikal dipengaruhi oleh dua hal: kecepatan awal ke atas dan pengaruh gravitasi."
        }
      ]
    },

    {
      heading: "🔄 Menggabungkan Posisi X dan Y",
      blocks: [
        {
          type: "heading",
          text: "🔄 Menggabungkan Posisi X dan Y"
        },
        {
          type: "paragraph",
          text: "Sekarang kita memiliki dua persamaan yang menggambarkan posisi benda."
        },
        {
          type: "paragraph",
          text: "Arah horizontal:"
        },
        {
          type: "equation",
          latex: "x=v_0\\cos\\theta\\,t"
        },
        {
          type: "paragraph",
          text: "Arah vertikal:"
        },
        {
          type: "equation",
          latex: "y=v_0\\sin\\theta\\,t-\\frac{1}{2}gt^2"
        },
        {
          type: "paragraph",
          text: "Kedua persamaan tersebut menggunakan waktu t yang sama."
        },
        {
          type: "paragraph",
          text: "Dengan menggabungkan posisi horizontal dan vertikal pada setiap waktu, kita dapat menentukan posisi benda di bidang dua dimensi."
        }
      ]
    },

    {
      heading: "⚡ Persamaan Kecepatan",
      blocks: [
        {
          type: "heading",
          text: "⚡ Persamaan Kecepatan"
        },
        {
          type: "paragraph",
          text: "Selain posisi, kita juga dapat menentukan kecepatan benda pada setiap saat."
        },
        {
          type: "paragraph",
          text: "Pada arah horizontal, kecepatan tetap:"
        },
        {
          type: "equation",
          latex: "v_x=v_0\\cos\\theta"
        },
        {
          type: "paragraph",
          text: "Pada arah vertikal, kecepatan berubah akibat gravitasi:"
        },
        {
          type: "equation",
          latex: "v_y=v_0\\sin\\theta-gt"
        },
        {
          type: "paragraph",
          text: "Jadi, meskipun kecepatan horizontal tetap, kecepatan vertikal terus berubah sepanjang lintasan."
        }
      ]
    },

    {
      heading: "📊 Dari Persamaan Menjadi Lintasan",
      blocks: [
        {
          type: "heading",
          text: "📊 Dari Persamaan Menjadi Lintasan"
        },
        {
          type: "paragraph",
          text: "Sekarang kita bisa melihat bagaimana lintasan parabola terbentuk."
        },
        {
          type: "paragraph",
          text: "Ketika waktu bertambah, posisi horizontal terus bertambah karena benda bergerak maju."
        },
        {
          type: "paragraph",
          text: "Pada saat yang sama, posisi vertikal awalnya bertambah karena benda naik, kemudian berkurang karena gravitasi menarik benda ke bawah."
        },
        {
          type: "paragraph",
          text: "Jika semua posisi pada setiap waktu diplot pada bidang X-Y, titik-titik tersebut akan membentuk lintasan parabola."
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
          text: "Sebuah bola dilempar dengan kecepatan awal v₀ pada sudut θ."
        },
        {
          type: "paragraph",
          text: "Untuk mengetahui posisi bola setelah waktu t:"
        },
        {
          type: "paragraph",
          text: "1️⃣ Tentukan komponen kecepatan awal horizontal."
        },
        {
          type: "paragraph",
          text: "2️⃣ Tentukan komponen kecepatan awal vertikal."
        },
        {
          type: "paragraph",
          text: "3️⃣ Gunakan persamaan posisi horizontal untuk mencari x."
        },
        {
          type: "paragraph",
          text: "4️⃣ Gunakan persamaan posisi vertikal untuk mencari y."
        },
        {
          type: "paragraph",
          text: "5️⃣ Pasangkan nilai x dan y untuk mengetahui posisi benda pada bidang."
        }
      ]
    },

    {
      heading: "🧠 Cara Berpikir",
      blocks: [
        {
          type: "heading",
          text: "🧠 Cara Berpikir"
        },
        {
          type: "paragraph",
          text: "Saat menghadapi soal gerak parabola, jangan langsung mencari satu rumus ajaib."
        },
        {
          type: "paragraph",
          text: "Tanyakan terlebih dahulu:"
        },
        {
          type: "paragraph",
          text: "➡️ Apa yang terjadi pada arah X?"
        },
        {
          type: "paragraph",
          text: "⬆️ Apa yang terjadi pada arah Y?"
        },
        {
          type: "paragraph",
          text: "⏱️ Berapa waktu yang digunakan?"
        },
        {
          type: "paragraph",
          text: "Jika tiga pertanyaan ini sudah terjawab, sebagian besar masalah gerak parabola akan terasa jauh lebih sederhana."
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
          text: "❌ Miskonsepsi 1: Persamaan gerak parabola adalah satu rumus khusus yang berbeda sepenuhnya dari GLB dan GLBB."
        },
        {
          type: "paragraph",
          text: "✅ Faktanya: Persamaan gerak parabola berasal dari gabungan konsep GLB pada arah horizontal dan GLBB pada arah vertikal."
        },
        {
          type: "paragraph",
          text: "❌ Miskonsepsi 2: Kecepatan horizontal selalu berubah karena benda bergerak melengkung."
        },
        {
          type: "paragraph",
          text: "✅ Faktanya: Dalam kondisi ideal, kecepatan horizontal tetap konstan."
        },
        {
          type: "paragraph",
          text: "❌ Miskonsepsi 3: Saat memasukkan waktu, gerak horizontal dan vertikal menggunakan waktu yang berbeda."
        },
        {
          type: "paragraph",
          text: "✅ Faktanya: Kedua komponen menggunakan waktu yang sama karena merupakan gerak dari benda yang sama."
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
          text: "Sebuah komputer dapat menghitung lintasan proyektil dengan melakukan perhitungan posisi X dan Y secara berulang setiap frame."
        },
        {
          type: "paragraph",
          text: "Inilah salah satu konsep dasar yang digunakan dalam simulasi fisika dan game untuk membuat objek terlihat bergerak secara realistis."
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
          text: "Persamaan gerak parabola dibangun dari dua komponen gerak."
        },
        {
          type: "paragraph",
          text: "Gerak horizontal dianalisis sebagai GLB dengan kecepatan konstan."
        },
        {
          type: "paragraph",
          text: "Gerak vertikal dianalisis sebagai GLBB dengan percepatan gravitasi."
        },
        {
          type: "paragraph",
          text: "Kedua komponen menggunakan waktu yang sama untuk menentukan posisi benda pada bidang dua dimensi."
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
          text: "Sekarang kamu sudah bisa menentukan posisi dan kecepatan benda pada waktu tertentu."
        },
        {
          type: "paragraph",
          text: "Tapi ada beberapa pertanyaan menarik yang belum kita jawab."
        },
        {
          type: "paragraph",
          text: "Seberapa tinggi benda bisa mencapai titik tertingginya?"
        },
        {
          type: "paragraph",
          text: "Berapa lama benda membutuhkan waktu untuk mencapai titik tersebut?"
        },
        {
          type: "paragraph",
          text: "➡️ Selanjutnya: Tinggi Maksimum dan Waktu Mencapai Titik Tertinggi."
        }
      ]
    }
  ]
};

export default persamaanGerakParabola;