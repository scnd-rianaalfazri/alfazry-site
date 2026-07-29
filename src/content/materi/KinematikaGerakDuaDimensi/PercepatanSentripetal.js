const percepatanSentripetal = {
  title: "Percepatan Sentripetal",
  slug: "percepatan-sentripetal",
  description:
    "Memahami mengapa benda yang bergerak melingkar tetap mengalami percepatan meskipun kelajuannya konstan, serta cara menghitungnya.",

  chapter: "🌌 Kinematika: Gerak Dua Dimensi",

  content: [
    {
      heading: "🎢 Kelajuan Konstan, tapi Kok Berkelajuan?",
      blocks: [
        {
          type: "heading",
          text: "🎢 Kelajuan Konstan, tapi Kok Berkelajuan?"
        },
        {
          type: "paragraph",
          text: "Pernahkah kamu menaiki komidi putar atau kendaraan yang berbelok mulus dengan kecepatan speedometer yang stabil?"
        },
        {
          type: "paragraph",
          text: "Meskipun jarum speedometer menunjukkan angka yang konstan, secara fisika tubuhmu sebenarnya sedang mengalami percepatan!"
        },
        {
          type: "paragraph",
          text: "Mengapa hal itu bisa terjadi? Mari kita usut alasannya."
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
          text: "Jika angka pada speedometer tidak berubah, mengapa benda yang bergerak melingkar tetap dikatakan mengalami percepatan?"
        },
        {
          type: "paragraph",
          text: "Ke arah manakah vektor percepatan tersebut mengarah?"
        }
      ]
    },

    {
      heading: "🚀 Rahasia Vektor Kecepatan",
      blocks: [
        {
          type: "heading",
          text: "🚀 Rahasia Vektor Kecepatan"
        },
        {
          type: "paragraph",
          text: "Ingat kembali bahwa kecepatan adalah besaran vektor yang memiliki dua komponen: besar (kelajuan) dan arah."
        },
        {
          type: "paragraph",
          text: "Percepatan didefinisikan sebagai perubahan kecepatan terhadap waktu."
        },
        {
          type: "paragraph",
          text: "Pada gerak melingkar beraturan, nilai besar kecepatannya memang tetap, tetapi arah kecepatannya terus berubah setiap milidetik menyinggung lintasan."
        },
        {
          type: "paragraph",
          text: "Karena arahnya terus berubah, maka nilai perubahan kecepatannya tidak nol. Inilah mengapa timbul percepatan!"
        }
      ]
    },

    {
      heading: "🎯 Apa itu Percepatan Sentripetal?",
      blocks: [
        {
          type: "heading",
          text: "🎯 Apa itu Percepatan Sentripetal?"
        },
        {
          type: "paragraph",
          text: "Percepatan yang bertugas khusus untuk mengubah arah kecepatan (bukan besarnya) dan selalu mengarah ke pusat lingkaran disebut percepatan sentripetal."
        },
        {
          type: "paragraph",
          text: "Istilah 'sentripetal' berasal dari bahasa Latin: centrum (pusat) dan petere (menuju/mencari), yang berarti 'mencari pusat'."
        },
        {
          type: "equation",
          latex: "a_c = \\frac{v^2}{r}"
        },
        {
          type: "paragraph",
          text: "Persamaan di atas menunjukkan bahwa nilai percepatan sentripetal (a_c) bertambah besar jika kelajuan linear (v) makin tinggi atau radius lintasan (r) makin sempit."
        }
      ]
    },

    {
      heading: "🌀 Hubungan dengan Kecepatan Sudut",
      blocks: [
        {
          type: "heading",
          text: "🌀 Hubungan dengan Kecepatan Sudut"
        },
        {
          type: "paragraph",
          text: "Jika kamu lebih sering menggunakan kecepatan sudut (ω) daripada kecepatan linear (v), kita bisa menyubstitusikan persamaan v = ωr ke dalam rumus utama."
        },
        {
          type: "paragraph",
          text: "Sehingga diperoleh bentuk persamaan alternatif:"
        },
        {
          type: "equation",
          latex: "a_c = \\omega^2 r"
        },
        {
          type: "paragraph",
          text: "Kedua formula ini memberikan hasil yang identik, tinggal disesuaikan dengan variabel yang diketahui pada kasus yang kamu hadapi."
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
          text: "Sebuah mobil melaju dengan kelajuan konstan 20 m/s saat melintasi tikungan bundaran berjari-jari 50 m."
        },
        {
          type: "paragraph",
          text: "Besar percepatan sentripetal yang dialami mobil dapat dihitung sebagai berikut:"
        },
        {
          type: "equation",
          latex: "a_c = \\frac{20^2}{50} = \\frac{400}{50} = 8 \\text{ m/s}^2"
        },
        {
          type: "paragraph",
          text: "Artinya, meskipun kelajuannya tidak bertambah, mobil tersebut terus mengalami percepatan sebesar 8 m/s² yang selalu mengarah ke titik pusat bundaran."
        }
      ]
    },

    {
      heading: "⚠️ Miskonsepsi Populer",
      blocks: [
        {
          type: "heading",
          text: "⚠️ Miskonsepsi Populer"
        },
        {
          type: "paragraph",
          text: "❌ Jika kelajuan konstan, maka percepatan pasti sama dengan nol."
        },
        {
          type: "paragraph",
          text: "✅ Faktanya, percepatan nol hanya berlaku jika besar DAN arah kecepatan tidak berubah (gerak lurus beraturan)."
        },
        {
          type: "paragraph",
          text: "❌ Percepatan sentripetal arahnya searah dengan laju kendaraan."
        },
        {
          type: "paragraph",
          text: "✅ Faktanya, arah percepatan sentripetal tegak lurus terhadap arah kecepatan linear—yaitu selalu mengarah ke pusat lingkaran."
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
          text: "Para pembalap Formula 1 harus melatih otot leher mereka secara ekstrim! Saat melibas tikungan tajam pada kecepatan tinggi, mereka mengalami percepatan sentripetal hingga 5G hingga 6G (5–6 kali percepatan gravitasi bumi), yang membuat kepala terasa 5 kali lebih berat ke arah luar lintasan."
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
          text: "Benda yang bergerak melingkar selalu mengalami percepatan sentripetal akibat perubahan arah kecepatan linearnya."
        },
        {
          type: "paragraph",
          text: "Vektor percepatan sentripetal selalu tegak lurus terhadap kecepatan linear dan konsisten mengarah ke pusat lintasan melingkar."
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
          text: "Pada misi berikutnya, kita akan mengeksplorasi berbagai penerapan gerak melingkar dalam kehidupan sehari-hari, teknologi modern, hingga eksplorasi antariksa."
        },
        {
          type: "paragraph",
          text: ""
        }
      ]
    }
  ]
};

export default percepatanSentripetal;

