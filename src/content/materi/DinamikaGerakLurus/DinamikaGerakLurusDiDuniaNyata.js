const dinamikaGerakLurusDuniaNyata = {
  title: "Dinamika Gerak Lurus di Dunia Nyata",
  slug: "dinamika-gerak-lurus-di-dunia-nyata",
  description: "Menemukan penerapan konsep dinamika gerak lurus dalam transportasi, teknologi, industri, dan kehidupan sehari-hari.",
  chapter: "🚀 Dinamika Gerak Lurus",

  content: [
    {
      blocks: [
        {
          type: "paragraph",
          text: [
            "Selama chapter ini, kamu telah mempelajari bagaimana Hukum Newton digunakan untuk menganalisis berbagai gerak lurus.",
            "Konsep-konsep tersebut ternyata tidak hanya digunakan di ruang kelas, tetapi juga menjadi dasar dalam merancang berbagai teknologi yang kita gunakan setiap hari."
          ]
        }
      ]
    },
    {
      heading: "❓ Pertanyaan Besar",
      blocks: [
        {
          type: "paragraph",
          text: "Bagaimana analisis dinamika gerak lurus membantu manusia menciptakan teknologi yang lebih aman dan efisien?"
        }
      ]
    },

    {
      heading: "🚗 Sistem Keselamatan Kendaraan Modern",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Saat mobil berakselerasi atau mengerem, berbagai gaya bekerja pada kendaraan dan penumpangnya.",
            "Selain itu ada prinsip *Inersia* (Hukum I Newton) dan *Impuls-Momentum* sangat menentukan keselamatan pengemudi saat terjadi pengereman mendadak atau benturan:"
          ]
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "**Sabuk Pengaman (Seatbelt):**",
                description: "Menahan tubuh yang ingin terus bergerak maju akibat kelembaman saat mobil berhenti mendadak $(a < 0)$."
              },
              {
                text: "**Airbag (Kantung Udara):**",
                description: "Memperpanjang selang waktu benturan ($Δt$) sehingga gaya impulsif $(F = \\frac{Δp}{Δt})$ yang diterima tubuh berkurang secara drastis."
              },
              {
                text: "**Zona Remuk (Crumple Zone):**",
                description: "Bagian depan mobil dirancang mudah penyok untuk menyerap energi kinetik dan memperlama waktu pengereman saat tabrakan."
              }
            ]
          }
        }
      ]
    },
    {
      heading: "🛗 Teknologi Transportasi & Lift Bangunan Tinggi",
      blocks: [
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "**Sistem Lift Gedung Modern:**",
                description: "Menggunakan perpaduan Hukum II Newton dan sistem *counterweight* (beban penyeimbang) untuk mengatur gaya normal $(N = m(g \\pm a))$ agar penumpang tetap merasa nyaman tanpa guncangan berlebih."
              },
              {
                text: "**Kereta Cepat (Maglev & KRL):**",
                description: "Mengatur akselerasi halus menggunakan gaya dorong terukur ($F = m \\cdot a$) agar penumpang tidak kehilangan keseimbangan akibat gaya kelembaman."
              }
            ] 
          }
        }
      ]
    },
    {
      heading: "🏗️ Industri dan Sistem Robotika",
      blocks: [
        {
          type: "paragraph",
          text:  [
            "Dunia industri bergantung penuh pada perhitungan dinamika gaya yang akurat.",
            "Besarnya gaya yang diberikan harus disesuaikan dengan massa benda agar proses pemindahan berjalan cepat tanpa merusak produk."
          ]
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "**Derek Konstruksi (Crane):**",
                description: "Menggunakan perhitungan gaya tegangan tali $(T)$ dan tegangan maksimum kabel baja agar sanggup mengangkat material berat tanpa putus.",
              },
              {
                text: "**Sabuk Konveyor (Conveyor Belt):**",
                description: "Memanfaatkan gaya gesek kinetik $(f_k)$ dan statis $(f_s)$ presisi agar barang-barang di pabrik dapat berpindah lintas lintasan lurus tanpa tergelincir."
              }
            ]
          }
        }
      ]
    },
    {
      heading: "🏔️ Infrastruktur Jalan",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Kemiringan jalan, jalur evakuasi truk, serta desain tanjakan dan turunan dihitung menggunakan konsep dinamika gerak lurus.",
            "Tujuannya adalah menjaga kendaraan tetap aman saat bergerak pada berbagai kondisi jalan."
          ]
        }
      ]
    },
    {
      heading: "🚀 Dunia Antariksa",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Pada tahap awal peluncuran roket, insinyur menghitung gaya dorong, massa roket, dan percepatan agar roket mampu meninggalkan permukaan Bumi dengan aman.",
            "Seluruh analisis tersebut merupakan penerapan langsung dari Hukum Newton dan dinamika gerak lurus."
          ]
        }
      ]
    },
    {
      heading: "💡 Apa Benang Merahnya?",
      blocks: [
        {
          type: "paragraph",
          text: "Meskipun contoh-contohnya berbeda, semuanya memiliki pola analisis yang sama."
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "Identifikasi gaya yang bekerja."
              },
              {
                text: "Buat Free Body Diagram."
              },
              {
                text: "Tentukan resultan gaya."
              },
              {
                text: "Terapkan Hukum Newton II."
              }
            ]
          }
        }
      ]
    },
    {
      heading: "⚠️ Miskonsepsi",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Dinamika gerak lurus hanya dipelajari untuk menyelesaikan soal fisika. ❌",
            "Gak, gitu!",
            "Faktanya, konsep ini digunakan dalam perancangan kendaraan, lift, robot, mesin industri, hingga sistem transportasi modern. ✔️"
          ]
        }
      ]
    },
    {
      heading: "🌟 Fun Fact",
      blocks: [
        {
          type: "paragraph",
          text: "Sebelum sebuah kendaraan diproduksi, insinyur menjalankan ribuan simulasi komputer (*Crash Test Simulation*) untuk menguji gaya, percepatan, dan keselamatan pada berbagai kondisi jalan. Simulasi tersebut didasarkan pada prinsip dinamika gerak lurus yang sama seperti yang kamu pelajari di chapter ini!"
        }
      ]
    },
    {
      heading: "✨ Inti Materi",
      blocks: [
        {
          type: "paragraph",
          text: "Dinamika gerak lurus merupakan dasar dalam menganalisis berbagai sistem yang bergerak pada lintasan lurus. Konsep ini digunakan untuk merancang teknologi yang lebih aman, efisien, dan andal dalam kehidupan sehari-hari."
        }
      ]
    },
    { blocks: [
        {
          type: "paragraph",
          text: "Sekarang saatnya menggunakan seluruh konsep yang telah dipelajari untuk mengamati fenomena nyata di sekitarmu melalui aktivitas Eksplorasi Fenomena."
        }
      ]
    }
  ]
};

export default dinamikaGerakLurusDuniaNyata;