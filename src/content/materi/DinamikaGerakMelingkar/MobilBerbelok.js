const mobilBerbelok = {
  title: "Mobil Berbelok di Tikungan",
  slug: "mobil-berbelok-di-tikungan",
  description:
    "Menganalisis peran gaya gesek sebagai penyedia gaya sentripetal pada kendaraan yang bergerak di tikungan datar.",

  chapter: "🌀 Dinamika Gerak Melingkar",

  content: [
    {
      heading: "🚗 Mengapa Mobil Tidak Terus Bergerak Lurus?",
      blocks: [
        {
          type: "heading",
          text: "🚗 Mengapa Mobil Tidak Terus Bergerak Lurus?"
        },
        {
          type: "paragraph",
          text: "Bayangkan sebuah mobil sedang melaju di jalan lurus. Ketika pengemudi memutar kemudi, mobil mulai mengikuti tikungan."
        },
        {
          type: "paragraph",
          text: "Padahal menurut Hukum Newton I, benda yang bergerak akan cenderung mempertahankan geraknya dalam garis lurus."
        },
        {
          type: "paragraph",
          text: "Lalu apa yang membuat mobil dapat membelok?"
        },
        {
          type: "paragraph",
          text: "Jawabannya ada pada interaksi antara ban dan permukaan jalan."
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
          text: "Bagaimana gaya gesek antara ban dan jalan dapat membuat mobil mengikuti lintasan melingkar?"
        },
        {
          type: "paragraph",
          text: "Apa yang terjadi jika mobil melaju terlalu cepat saat melewati tikungan?"
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
          text: "Anggap mobil melewati tikungan datar tanpa kemiringan jalan."
        },
        {
          type: "paragraph",
          text: "Gaya yang bekerja pada mobil adalah:"
        },
        {
          type: "paragraph",
          text: "⬇ Gaya berat (W)"
        },
        {
          type: "paragraph",
          text: "⬆ Gaya normal (N)"
        },
        {
          type: "paragraph",
          text: "↔ Gaya gesek antara ban dan jalan"
        },
        {
          type: "paragraph",
          text: "Gaya gesek memiliki arah menuju pusat tikungan dan menjadi penyedia gaya sentripetal."
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
          text: "Bayangkan mobil sedang berada di sebuah tikungan berbentuk lingkaran."
        },
        {
          type: "paragraph",
          text: "Tampilkan:"
        },
        {
          type: "paragraph",
          text: "• Arah kecepatan mobil yang menyinggung lintasan."
        },
        {
          type: "paragraph",
          text: "• Pusat tikungan."
        },
        {
          type: "paragraph",
          text: "• Arah gaya gesek menuju pusat."
        },
        {
          type: "paragraph",
          text: "• Arah percepatan sentripetal menuju pusat."
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
          text: "1️⃣ Tentukan posisi mobil dan pusat tikungan."
        },
        {
          type: "paragraph",
          text: "2️⃣ Identifikasi semua gaya yang bekerja."
        },
        {
          type: "paragraph",
          text: "3️⃣ Tentukan arah radial menuju pusat."
        },
        {
          type: "paragraph",
          text: "4️⃣ Buat Free Body Diagram."
        },
        {
          type: "paragraph",
          text: "5️⃣ Analisis gaya pada arah radial."
        },
        {
          type: "paragraph",
          text: "6️⃣ Terapkan Hukum Newton II."
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
          text: "Pada mobil terdapat gaya berat ke bawah dan gaya normal ke atas."
        },
        {
          type: "paragraph",
          text: "Keduanya saling menyeimbangkan pada arah vertikal."
        },
        {
          type: "paragraph",
          text: "Pada arah horizontal menuju pusat tikungan terdapat gaya gesek."
        },
        {
          type: "paragraph",
          text: "Jadi, untuk tikungan datar:"
        },
        {
          type: "paragraph",
          text: "Gaya gesek → penyedia gaya sentripetal."
        }
      ]
    },

    {
      heading: "⚖️ Analisis Resultan Gaya",
      blocks: [
        {
          type: "heading",
          text: "⚖️ Analisis Resultan Gaya"
        },
        {
          type: "paragraph",
          text: "Pada arah vertikal:"
        },
        {
          type: "equation",
          latex: "N = mg"
        },
        {
          type: "paragraph",
          text: "Pada arah radial:"
        },
        {
          type: "equation",
          latex: "f = \\frac{mv^2}{r}"
        },
        {
          type: "paragraph",
          text: "Artinya, gaya gesek harus menyediakan resultan gaya yang cukup untuk mempertahankan mobil pada lintasan melingkar."
        }
      ]
    },

    {
      heading: "🧲 Batas Gaya Gesek",
      blocks: [
        {
          type: "heading",
          text: "🧲 Batas Gaya Gesek"
        },
        {
          type: "paragraph",
          text: "Gaya gesek tidak dapat bertambah tanpa batas. Pada kondisi tikungan dan model gesekan yang digunakan, terdapat batas gaya gesek maksimum."
        },
        {
          type: "equation",
          latex: "f_{maks}=\\mu_s N"
        },
        {
          type: "paragraph",
          text: "Karena N = mg:"
        },
        {
          type: "equation",
          latex: "f_{maks}=\\mu_s mg"
        },
        {
          type: "paragraph",
          text: "Jika kebutuhan gaya sentripetal melebihi kemampuan gaya gesek, mobil dapat kehilangan cengkeraman dan mulai tergelincir."
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
          text: "Sebuah mobil bermassa 1.000 kg melewati tikungan datar berjari-jari 50 m dengan kelajuan 10 m/s."
        },
        {
          type: "paragraph",
          text: "Gaya sentripetal yang dibutuhkan adalah:"
        },
        {
          type: "equation",
          latex: "F_c=\\frac{(1000)(10^2)}{50}=2000\\;N"
        },
        {
          type: "paragraph",
          text: "Artinya, diperlukan resultan gaya horizontal sebesar 2.000 N menuju pusat tikungan."
        },
        {
          type: "paragraph",
          text: "Pada tikungan datar, gaya tersebut disediakan oleh gaya gesek antara ban dan jalan."
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
          text: "🚗 Mobil melewati tikungan."
        },
        {
          type: "paragraph",
          text: "🏍️ Sepeda motor menikung."
        },
        {
          type: "paragraph",
          text: "🚲 Sepeda membelok di jalan."
        },
        {
          type: "paragraph",
          text: "🏎️ Mobil balap melewati tikungan dengan kecepatan tinggi."
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
          text: "❌ Mobil dapat berbelok karena ada gaya sentrifugal yang mendorong mobil ke arah luar."
        },
        {
          type: "paragraph",
          text: "✅ Dalam kerangka acuan jalan yang dianggap inersial, gaya horizontal yang menjaga mobil tetap berbelok adalah gaya gesek yang arahnya menuju pusat tikungan."
        },
        {
          type: "paragraph",
          text: "❌ Semakin cepat mobil, semakin kecil gaya sentripetal yang diperlukan."
        },
        {
          type: "paragraph",
          text: "✅ Untuk massa dan jari-jari yang sama, kebutuhan gaya sentripetal meningkat sebanding dengan kuadrat kelajuan."
        },
        {
          type: "paragraph",
          text: "❌ Ban yang tidak tergelincir berarti tidak ada gaya gesek."
        },
        {
          type: "paragraph",
          text: "✅ Gaya gesek statis dapat bekerja tanpa menyebabkan permukaan ban tergelincir relatif terhadap jalan."
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
          text: "Ban kendaraan dirancang dengan pola dan material tertentu agar mampu menghasilkan gaya gesek yang cukup dengan permukaan jalan. Karena itu, kondisi jalan yang basah atau licin dapat membuat kendaraan lebih sulit dikendalikan saat menikung."
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
          text: "Pada tikungan datar, gaya gesek statis antara ban dan jalan dapat menjadi penyedia gaya sentripetal. Semakin besar kelajuan kendaraan, semakin besar gaya sentripetal yang dibutuhkan. Jika kebutuhan tersebut melampaui batas gaya gesek yang tersedia, kendaraan dapat tergelincir."
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
          text: "Pada mobil, gaya sentripetal berasal dari interaksi ban dengan jalan."
        },
        {
          type: "paragraph",
          text: "Tapi bagaimana jika benda tidak menyentuh permukaan jalan sama sekali dan tetap dapat bergerak melingkar?"
        },
        {
          type: "paragraph",
          text: "Pada materi berikutnya, kita akan memutar sebuah benda menggunakan tali dan mencari tahu bagaimana tegangan tali menjadi penyedia gaya sentripetal."
        }
      ]
    }
  ]
};

export default mobilBerbelok;