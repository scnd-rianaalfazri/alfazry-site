import img1 from "/src/assets/Materi/astrofisika/spektrum-cahaya1.png"
import img2 from "/src/assets/Materi/astrofisika/spektrum-cahaya2.png"
import img3 from "/src/assets/Materi/astrofisika/spektrum-cahaya3.png"
import img4 from "/src/assets/Materi/astrofisika/spektrum-cahaya4.png"
import img5 from "/src/assets/Materi/astrofisika/spektrum-cahaya5.png"

const spektrumCahaya = {
  title: "Spektrum Cahaya",
  slug: "spektrum-cahaya",
  description: "Memahami bagaimana berbagai jenis gelombang elektromagnetik (cahaya) digunakan untuk mengungkap informasi dari alam semesta.",
  chapter: "🌠 Astrofisika",

  content: [
  {
    blocks: [
      {
        type: "paragraph",
        text: [
          "Bayangkan kamu melihat dua bintang di langit. Keduanya tampak seperti titik cahaya.",
          "Kamu tidak bisa menyentuhnya.",
          "Tidak bisa mengambil sampelnya.",
          "Tidak bisa mengukur suhunya dengan termometer.",
          "Tapi ternyata, dari cahaya yang sampai ke teleskop, kita bisa mengetahui banyak hal tentang bintang tersebut."
        ]
      },
      {
        type: "quote",
        text: "Bagaimana cahaya bisa 'bercerita' tentang sesuatu yang sangat jauh?"
      }
    ]
  },
  {
    heading: "❓ Pertanyaan Besar",
    block: [
      {
        type: "paragraph",
        text: "Apa yang sebenarnya dapat kita pelajari dari cahaya sebuah bintang?"
      }
    ]
  },
  { heading: "🌈 Cahaya Tidak Sesederhana yang Terlihat", 
    blocks: [
      {
        type: "image",
        src: img1,
      },
      {
        type: "paragraph",
        text: [
          "Ketika cahaya putih melewati prisma, cahaya tersebut dapat diuraikan menjadi berbagai warna.",
          "Urutan warna yang kita kenal:",
          "merah → jingga → kuning → hijau → biru → nila → ungu",
          "Namun sebenarnya cahaya tidak berhenti pada warna yang dapat dilihat mata.",
          "Cahaya merupakan bagian dari spektrum elektromagnetik."
        ]
      }
    ]
  },
  { 
    heading: "📡 Anggota Spektrum Elektromagnetik", 
    blocks: [
      {
        type: "carousel",
        carousel: {
          cards: [
            {
              eyebrow: "SPEKTRUM ELEKTRIMAGNETIK",
              title: "Gelombang radio",
              list: {
                type: "unordered",
                items: [
                  "Frekuensi $(f)$: $(> 10 \\text{ cm}\)$ sampai ribuan kilometer",
                  "Panjang gelombang $(\\lambda)$: $<3\\text{ GHz} \\: (\\text{kurang dari }3 \\times 10^9)$"
                ]
              }
            },
            {
              eyebrow: "SPEKTRUM ELEKTRIMAGNETIK",
              title: "Gelombang mikro",
              list: {
                type: "unordered",
                items: [
                  "Frekuensi $(f)$:  $(1\\text{ mm} - 10\\text{ cm})$",
                  "Panjang gelombang $(\\lambda)$: $3\\text{ GHz} - 300\\text{ GHz} \\: (3 \\times 10^9 - 3 \\times 10^{11}\\text{ Hz})$"
                ]
              }
            },
            {
              eyebrow: "SPEKTRUM ELEKTRIMAGNETIK",
              title: "Sinar inframerah",
              list: {
                type: "unordered",
                items: [
                  "Frekuensi $(f)$:  $(750\\text{ mm} - 1\\text{ mm})$",
                  "Panjang gelombang $(\\lambda)$: $300\\text{ GHz} - 400\\text{ THz} \\: (4 \\times 10^{11} - 4 \\times 10^{14}\\text{ Hz})$"
                ]
              }
            },
            {
              eyebrow: "SPEKTRUM ELEKTRIMAGNETIK",
              title: "Cahaya tampak",
              list: {
                type: "unordered",
                items: [
                  "Frekuensi $(f)$:  $(380\\text{ mm} - 750\\text{ mm})$",
                  "Panjang gelombang $(\\lambda)$: $400\\text{ THz} - 790\\text{ THz} \\: (4 \\times 10^{14} - 7,9 \\times 10^{14}\\text{ Hz})$"
                ]
              }
            },
            {
              eyebrow: "SPEKTRUM ELEKTRIMAGNETIK",
              title: "Sinar ultraviolet",
              list: {
                type: "unordered",
                items: [
                  "Frekuensi $(f)$:  $(10\\text{ mm} - 380\\text{ mm})$",
                  "Panjang gelombang $(\\lambda)$: $790\\text{ THz} - 300\\text{ PHz} \\: (7,9 \\times 10^{14} - 3 \\times 10^{16}\\text{ Hz})$"
                ]
              }
            },
            {
              eyebrow: "SPEKTRUM ELEKTRIMAGNETIK",
              title: "Sinar X",
              list: {
                type: "unordered",
                items: [
                  "Frekuensi $(f)$:  $(0,01\\text{ mm} - 10\\text{ mm})$",
                  "Panjang gelombang $(\\lambda)$: $30\\text{ PHz} - 300\\text{ PHz} \\: (30 \\times 10^{16} - 3 \\times 10^{19}\\text{ Hz})$"
                ]
              }
            },
            {
              eyebrow: "SPEKTRUM ELEKTRIMAGNETIK",
              title: "Sinar gamma",
              list: {
                type: "unordered",
                items: [
                  "Frekuensi $(f)$:  $(<0,01\\text{ mm}\\text{ lebih kecil dari ukuran atom})$",
                  "Panjang gelombang $(\\lambda)$: $>30\\text{ EHz} \\: (\\text{lebih besar dari }30 \\times 10^{19})$"
                ]
              }
            },
          ]
        }
      },
      {
        type: "paragraph",
        text: [
          "Setiap bagian spektrum membawa informasi yang berbeda tentang alam semesta.",
          "Jadi ketika astrofisikawan mengamati sebuah objek, mereka tidak hanya bertanya:"
        ]
      },
      {
        type: "quote",
        text: "Apa warnanya?"
      },
      {
        type: "paragraph",
        text: "Tetapi juga:"
      },
      {
        type: "quote",
        text: "Radiasi apa yang datang dari objek tersebut?"
      }
    ]
  },
  { heading: "🔬 Dari Cahaya Menjadi Spektrum", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Ketika cahaya dari sebuah bintang dianalisis berdasarkan panjang gelombangnya, kita memperoleh spektrum.",
          "Secara konseptual:"
        ]
      },
      {
        type: "image",
        src: img2
      },
      {
        type: "paragraph",
        text: [
          "Dan di sinilah sesuatu yang menarik muncul. Spektrum sebuah bintang tidak selalu berupa warna yang mulus.",
          "Ada pola tertentu di dalamnya."
        ]
      }
    ]
  },
  { 
    heading: "🧬 Spektrum sebagai 'Sidik Jari'", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Setiap unsur kimia dapat menghasilkan pola garis spektrum tertentu.",
          "Misalnya secara sederhana:"
        ]
      },
      {
        type: "image",
        src: img3
      },
      {
        type: "paragraph",
        text: [
          "Pola tersebut dapat dibandingkan dengan hasil eksperimen di laboratorium.",
          "Jika pola tertentu cocok dengan unsur tertentu, kita mendapatkan petunjuk:"
        ]
      },
      {
        type: "callout",
        variant: "warning",
        text: "Unsur tersebut kemungkinan terdapat pada bintang."
      },
      {
        type: "paragraph",
        text: "Jadi meskipun kita tidak dapat mengambil sampel bintang, kita tetap bisa mempelajari komposisinya melalui cahaya."
      }
    ]
  },
  { heading: "🧪 Dari Laboratorium ke Bintang", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Di Bumi:",
          "Unsur",
          "⏬",
          "Eksperimen",
          "⏬",
          "Spektrum",
          "Di luar angkasa:",
          "Bintang",
          "⏬",
          "Cahaya",
          "⏬",
          "Spektrum",
          "⏬",
          "Bandingkan",
          "⏬",
          "Komposisi",
          "Artinya, eksperimen di laboratorium membantu kita memahami objek yang berada jauh di luar laboratorium tersebut."
        ]
      }
    ]
  },
  { heading: "🧠 Analisis Konsep", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Bayangkan teleskop menerima cahaya dari sebuah bintang. Dalam spektrumnya ditemukan pola yang cocok dengan hidrogen.",
          "Apa yang dapat kita simpulkan?",
          "Bukan:"
        ]
      },
      {
        type: "callout",
        variant: "danger",
        text: "Bintang itu seluruhnya terbuat dari hidrogen."
      },
      {
        type: "paragraph",
        text: "Kesimpulan yang lebih hati-hati:"
      },
      {
        type: "callout",
        variant: "success",
        text: "Spektrum memberikan bukti bahwa hidrogen berkontribusi pada cahaya yang kita amati dari bintang tersebut."
      },
      {
        type: "paragraph",
        text: [
          "Inilah pentingnya membedakan:",
          "**data → interpretasi → kesimpulan.**"
        ]
      }
    ]
  },
  { heading: "🌡️ Tapi Spektrum Tidak Hanya Memberi Tahu Komposisi", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Cahaya bintang juga membawa informasi tentang kondisi fisiknya. Misalnya distribusi energi pada berbagai panjang gelombang dapat membantu ilmuwan memperkirakan temperatur permukaan bintang.",
          "Secara konseptual:"
        ]
      },
      {
        type: "image",
        src: img4
      },
      {
        type: "paragraph",
        text: "Jadi satu sumber informasi—cahaya—dapat digunakan untuk menjawab banyak pertanyaan."
      }
    ]
  },
  { heading: "🔭 Dari Satu Bintang, Kita Bisa Membaca Banyak Hal", 
    blocks: [
      { 
        type: "paragraph", 
        text: "Secara bertahap:" 
      },
      {
        type: "image",
        src: img5
      }
    ]
  },
  {
    heading: "⚠️ Miskonsepsi",
    blocks: [
      {
        type: "list",
        list : {
          type: "ordered",
          items: [
            {
              text: "Miskonsepsi 1",
              description: [
                "Spektrum hanya menunjukkan warna bintang. ❌",
                "Gak, gitu!",
                "Spektrum dapat mengandung informasi tentang komposisi, temperatur, gerakan, dan sifat fisik lainnya. ✔️"
              ]
            },
            {
              text: "Miskonsepsi 2",
              description: [
                "Kalau sebuah unsur ditemukan dalam spektrum, berarti kita sudah mengambil sampel unsur tersebut dari bintang. ❌",
                "Gak, gitu!",
                "Informasinya diperoleh dari radiasi yang sampai ke detektor. ✔️"
              ]
            },
            {
              text: "Miskonsepsi 3",
              description: [
                "Semakin terang bintang, semakin panas bintangnya. ❌",
                "Gak, gitu!",
                "Kecerahan yang kita lihat juga dipengaruhi oleh jarak dan luminositas. ✔️"
              ]
            }
          ]
        }
      }
    ]
  },
  {
    heading: "✨ *Fun Fact*",
    blocks: [
      {
        type: "paragraph",
        text: [
          "Astronom dapat mengetahui keberadaan unsur-unsur tertentu pada bintang yang jaraknya sangat jauh tanpa pernah mengambil sampel langsung dari bintang tersebut.",
          "Alam semesta seolah mengirimkan kode informasi melalui cahaya, dan fisika membantu kita membacanya."
        ]
      }
    ]
  },
  { heading: "✨ Inti Materi", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Cahaya dari bintang membawa informasi tentang bintang tersebut. Dengan menganalisis spektrum, ilmuwan dapat memperoleh petunjuk tentang komposisi, temperatur, gerakan, dan berbagai sifat fisik lainnya.",
          "Jadi teleskop bukan hanya alat untuk melihat lebih jauh.",
          "Teleskop adalah alat untuk mengumpulkan informasi yang kemudian dibaca menggunakan fisika."
        ]
      }
    ]
  },
  {
    blocks: [
      {
        type: "paragraph",
        text: [
          "Kalau spektrum bisa memberi tahu temperatur sebuah bintang, mengapa ada bintang yang tampak merah, sementara yang lain tampak biru?",
          "Page berikutnya kita akan mempelajari temperatur, warna, dan luminositas bintang.",
          "Di sana kita mulai menghubungkan warna → temperatur → energi yang dipancarkan bintang, sebelum nanti masuk ke massa, evolusi, dan bagaimana bintang sebenarnya 'hidup'.",
        ]
      }
    ]
  },
  { heading: "Referensi:", 
    blocks: [
      { 
        type: "paragraph", 
        text: [
          "OpenStax Astronomy.",
          "NASA Science.",
          "ESA Education.",
          "Carroll & Ostlie. An Introduction to Modern Astrophysics."
        ] 
      }
    ]
  }]

};

export default spektrumCahaya;