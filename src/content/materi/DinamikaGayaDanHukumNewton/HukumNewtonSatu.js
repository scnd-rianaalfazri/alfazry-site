const hukumNewtonSatu = {
  title: "Hukum Newton I (Hukum Inersia)",
  slug: "hukum-newton-satu",
  description: "Memahami Hukum Newton I dan konsep inersia sebagai kecenderungan alami benda mempertahankan keadaan geraknya.",
  chapter: "🚀 Dinamika: Gaya dan Hukum Newton",

  content: [
    {
      heading: "🚌 Mengapa Tubuh Terdorong Saat Kendaraan Berhenti?",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Pernahkah kamu naik bus atau mobil yang tiba-tiba mengerem mendadak?",
            "Meskipun kendaraan berhenti, tubuhmu justru terasa terdorong ke depan.",
            "Sebaliknya, ketika kendaraan mulai bergerak secara tiba-tiba, tubuhmu terasa tertarik ke belakang.",
            "Mengapa hal itu bisa terjadi? Apakah ada gaya misterius yang mendadak mendorong tubuhmu?"
          ]
        }
      ]
    },
    {
      heading: "❓ Pertanyaan Besar",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Mengapa benda cenderung mempertahankan keadaan geraknya?",
            "Apa yang terjadi jika resultan gaya (\\\\Sigma F) yang bekerja pada benda bernilai nol?"
          ]
        }
      ]
    },
    {
      heading: "📖 Bunyi Hukum Newton I",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Hukum Newton I menyatakan bahwa:"
          ]
        },
        {
          type: "quote",
          text: "Suatu benda akan tetap diam atau bergerak lurus beraturan selama resultan gaya yang bekerja padanya sama dengan nol."
        }
      ]
    },
    {
      heading: "⚖️ Resultan Gaya Nol $(\\Sigma F = 0)$",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Pada materi sebelumnya, kita tahu bahwa gaya bekerja dari berbagai arah.",
            "Jika semua gaya yang bekerja saling menyeimbangkan, maka resultan gayanya sama dengan nol:"
          ]
        },
        {
          type: "equation",
          equation: "Sigma F = 0"
        },
        {
          type: "paragraph",
          text: [
            "Dalam kondisi ini, benda tidak mengalami percepatan (a = 0). Artinya:",
          ]
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
            "Jika benda awalnya diam (v = 0), benda akan TETAP DIAM.",
            "Jika benda awalnya bergerak dengan kecepatan v, benda akan TETAP BERGERAK LURUS BERATURAN (GLB) dengan kecepatan konstan."
            ]
          }
        }
      ]
    },
    {
      heading: "🪨 Apa Itu Inersia (Kelembaman)?",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Inersia atau kelembaman adalah sifat alami setiap benda untuk 'kemalasannya' mengubah keadaan gerak.",
            "Benda cenderung mempertahankan posisinya:",
          ]
        },
        {
          type: "unordered",
          list: {
            type: "unordered",
            items: [
              "• Benda diam ingin tetap diam.",
              "• Benda bergerak ingin tetap bergerak lurus.",
            ]
          }
        },
        {
          type: "paragraph",
          text: [
            "Agar keadaan gerak benda berubah, harus ada resultan gaya luar yang bekerja pada benda tersebut."
          ]
        }
      ]
    },
    {
      heading: "🏋️ Faktor yang Mempengaruhi Inersia",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Besarnya kelembaman suatu benda sangat bergantung pada massanya $(m)$.",
            "Semakin besar massa suatu benda, semakin besar pula inersianya, sehingga semakin sulit untuk mengubah keadaan geraknya.",
            "Contohnya: Mendorong truk yang mogok jauh lebih berat daripada mendorong sepeda mini. Truk bukan 'malas', tetapi memiliki massa dan kelembaman yang sangat besar!"
          ]
        }
      ]
    },
    {
      heading: "🌍 Contoh Fenomena Inersia dalam Kehidupan",
      blocks: [
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "🚌 Bus Mengerem Mendadak",
                description: "Tubuh terdorong ke depan karena mempertahankan kecepatan awal saat bus melaju."
              },
              {
                text: "🪙 Trik Koin dan Gelas",
                description: "Jika kartu di bawah koin ditarik dengan sangat cepat, koin akan tetap di posisinya dan jatuh tepat ke dalam gelas."
              },
              {
                text: "🚗 Sabuk Pengaman (Seatbelt)",
                description: "Menahan tubuh dari inersia ke depan saat mobil bertabrakan atau mengerem mendadak."
              },
              {
                text: "🏒 Keping Hoki Es",
                description: "Keping hoki yang dipukul di atas es licin meluncur sangat jauh karena gaya gesek yang hampir nol."
              }
            ]
          }
        }
      ]
    },
    {
      heading: "🔬 Mengapa Sabuk Pengaman Penting?",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Saat mobil melaju kencang dan mendadak berhenti, tubuh penumpang masih melaju dengan kecepatan mobil sebelum pengereman akibat sifat inersia.",
            "Di sinilah sabuk pengaman bekerja—ia memberikan gaya eksternal penahan agar tubuh berhenti secara aman dan terhindar dari benturan keras dengan kaca depan atau dashboard."
          ]
        }
      ]
    },
    {
      heading: "⚠️ Miskonsepsi Fisika",
      blocks: [
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "Miskonsepsi 1",
                description: [
                  "Agar benda tetap bergerak lurus, harus selalu ada gaya yang terus mendorongnya. ❌",
                  "Jika resultan gaya bernilai nol (\\\\Sigma F = 0), benda akan terus bergerak lurus dengan kecepatan tetap tanpa perlu dorongan terus-menerus. ✔️"
                ]
              },
              {
                text: "Miskonsepsi 2",
                description: [
                  "Benda yang diam berarti tidak ada gaya sama sekali yang bekerja padanya. ❌",
                  "Benda diam bisa saja dialiri banyak gaya (misal: gaya berat dan gaya normal), namun semua gaya tersebut saling menyeimbangkan sehingga \\\\Sigma F = 0. ✔️"
                ]
              }
            ]
          }
        }
      ]
    },
    {
      heading: "🌟 *Fun Fact*",
      blocks: [
        {
          type: "paragraph",
          text: [
            "🚀 Di ruang hampa udara luar angkasa, pesawat luar angkasa seperti Voyager dapat terus meluncur tanpa perlu menyalakan mesin selamanya, selama tidak ada resultan gaya luar (seperti gravitasi planet lain) yang menghentikannya!"
          ]
        }
      ]
    },
    {
      heading: "✨ Inti Materi *(Takeaway Message)*",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Hukum Newton I menjelaskan bahwa benda akan mempertahankan keadaan diam atau bergerak lurus beraturan jika resultan gaya yang bekerja padanya sama dengan nol. Sifat mempertahankan keadaan gerak ini disebut inersia atau kelembaman."
          ]
        }
      ]
    },
    { blocks: [
        {
          type: "paragraph",
          text: [
            "Sekarang apakah kamu sudah paham apa yang terjadi ketika resultan gaya sama dengan nol $(\\Sigma F = 0)$?",
            "Lalu, apa yang terjadi jika resultan gaya nilainya TIDAK NOL $(\\Sigma F \\neq 0)$?",
            "Pada materi berikutnya, kita akan mempelajari Hukum Newton II dan melihat bagaimana resultan gaya menentukan besar percepatan suatu benda!",
            "➡️ *Next,* kita menuju portal:[**Hukum Newton II**](hukum-newton-dua)"
          ]
        }
      ]
    }
  ]
};

export default hukumNewtonSatu;