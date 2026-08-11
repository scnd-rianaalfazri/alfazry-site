import img1 from "/src/assets/Materi/HakikatIlmuFisika/apa-itu-fisika1.png"
import img2 from "/src/assets/Materi/HakikatIlmuFisika/apa-itu-fisika2.png"
import img3 from "/src/assets/Materi/HakikatIlmuFisika/apa-itu-fisika3.png"
import img4 from "/src/assets/Materi/HakikatIlmuFisika/apa-itu-fisika4.png"
import img5 from "/src/assets/Materi/HakikatIlmuFisika/apa-itu-fisika5.png"

const apaItuFisika = {
  title: "Apa Itu Fisika?",
  slug: "apa-itu-fisika",
  description: "Memahami pengertian fisika, objek kajiannya, dan perannya dalam memahami alam semesta.",
  chapter: "🔬 Hakikat Ilmu Fisika & Metode Ilmiah",

  content: [
  {
    blocks: [
      {
        type: "image",
        src: img1,
      },
      {
        type: "paragraph",
        text: "Coba sejenak kamu pause kesibukanmu dan perhatikan sekelilingmu."
      },
      {
        type: "list",
        list: {
          type: "unordered",
          items: [
            {
              text: "Mengapa saat kamu melepaskan pulpen, benda itu selalu jatuh ke tanah?"
            },
            {
              text: "Mengapa air selalu mengalir dari tempat tinggi ke tempat yang lebih rendah?"
            },
            {
              text: "Mengapa lampu di kamarmu bisa langsung menyala begitu sakelar ditekan?"
            },
            {
              text: "Bagaimana bisa suara musik dari earphone temanmu terdengar sampai ke tempatmu duduk?"
            }
          ]
        }
      },
      {
        type: "paragraph",
        text: [
          "Apakah semua kejadian itu terjadi secara kebetulan atau karena sihir?",
          "Tentu tidak! Semua fenomena tersebut diatur oleh skenario besar bernama hukum-hukum alam, dan ilmu yang bertugas membongkar rahasia di balik hukum alam itu adalah Fisika."
        ]
      }
    ]
  },
  { heading: "🔬 Fisika di Sekeliling Kita", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Apakah semua kejadian itu terjadi secara kebetulan atau karena sihir?",
          "Tentu tidak!",
          "Semua fenomena tersebut diatur oleh skenario besar bernama hukum-hukum alam, dan ilmu yang bertugas membongkar rahasia di balik hukum alam itu adalah Fisika."
        ]
      }
    ]
  },
  { heading: "🔬 Pengertian Fisika", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Secara ilmiah, Fisika adalah cabang ilmu pengetahuan alam (sains) yang mempelajari materi, energi, gerak, gaya, ruang, waktu, beserta interaksi kompleks di antara semuanya.",
          "Melalui fisika, manusia berusaha menguraikan source code alias cara kerja alam semesta.",
          "Kita tidak tebak-tebakan, melainkan menggunakan fondasi kuat berupa pengamatan yang presisi, eksperimen yang terukur, serta penalaran ilmiah yang logis."
        ]
      }
    ]
  },
  { heading: "🌌 Apa yang Dipelajari Fisika?", 
    blocks: [
      {
        type: "image",
        src: img2
      },
      {
        type: "paragraph",
        text: "Ruang lingkup objek kajian fisika itu bener-bener mind-blowing karena skalanya yang sangat ekstrem!"
      },
      {
        type: "list",
        list: {
          type: "unordered",
          items: [
          {
            text: "Skala Mikroskopis",
            description:
            "Fisika masuk ke dunia super kecil, membedah partikel-partikel fundamental yang ukurannya jauh lebih mini daripada atom (seperti elektron dan kuark)."
          },
          {
            text: "Skala Kosmis",
            description:
            "Fisika melompat jauh ke luar angkasa untuk meneropong struktur alam semesta yang super raksasa, galaksi, hingga black hole."
          }]
        }
      },
      {
        type: "paragraph",
        text: [
        "Karena mencakup segala hal dari yang terkecil sampai yang terbesar di semesta ini, tidak heran kalau fisika sering dijuluki sebagai ilmu dasar (the fundamental science) bagi banyak cabang sains lainnya."
        ]
      }
    ]
  },
  { heading: "🧩 Cabang-Cabang Fisika", 
    blocks: [
      {
        type: "image",
        src: img3
      },
      {
        type: "paragraph",
        text: [
          "Agar pembahasannya tidak tumpang tindih, ilmu fisika dibagi ke dalam beberapa era dan disiplin.",
          "Berikut adalah peta cabang fisika yang dijamin bikin kita makin kagum sama cara kerja semesta:"
        ]
      },
      {
        type: "list",
        list: {
          type: "ordered",
          items: [
          {
            text: "Fisika Klasik *(The Foundation)*",
            description:
            "Ini adalah fondasi awal yang membahas fenomena alam yang bisa kita lihat dan rasakan langsung dalam skala sehari-hari.",
            children: {
              type: "unordered",
              items: [
                {
                  text: "Mekanika Klasik",
                  description: "Rajanya hukum gerak. Cabang ini membedah bagaimana benda bergerak, gaya-gaya yang memengaruhinya, dan keseimbangan benda. Rumah bagi Hukum Newton."
                },
                {
                  text: "Termodinamika",
                  description: "Cabang yang puitis tentang bagaimana kalor (panas) berpindah, berdansa, dan berubah wujud menjadi energi lain, termasuk membahas konsep entropi yang misterius."
                },
                {
                  text: "Elektromagnetisme",
                  description: "Ilmu yang menyatukan fenomena kelistrikan dan kemagnetan. Inilah alasan mengapa gadget-mu bisa dicharge dan kompas bisa menunjuk arah utara."
                },
                {
                  text: "Optika",
                  description: "Ilmu yang khusus mempelajari cahaya, lensa, pantulan, dan bagaimana mata atau kamera menangkap keindahan visual dunia."
                },
                {
                  text: "Akustik (Fisika Gelombang & Bunyi)",
                  description: "Mempelajari bagaimana gelombang mekanik merambat, bergetar, dan menghasilkan suara—mulai dari petikan dawai gitar hingga gelombang ultrasonik medis."
                }
              ]
            }
          },
          {
            text: "Fisika Modern *(The Frontier)*",
            description:  "Ketika teknologi berkembang dan para ilmuwan mulai masuk ke skala ekstrem—super cepat (mendekati kecepatan cahaya) atau super kecil (dunia atom)—hukum fisika klasik mulai runtuh. Dari sanalah lahir era baru setelah abad ke-20 yang penuh kejutan.",
            children: {
              type: "unordered",
              items: [
              {
                text: "Mekanika Kuantum.",
                description: [
                  "Selamat datang di dunia sub-atomik yang liar!",
                  "Di skala atom dan elektron, partikel bisa bertingkah seperti gelombang, dan suatu benda bisa berada di dua kondisi sekaligus (probabilitas)."
                ]
              },
              {
                text: "Teori Relativitas (Einstein)",
                description: [
                  "Mengubah total cara kita memandang ruang dan waktu.",
                  "Einstein membuktikan bahwa gravitasi bukanlah gaya tarik gaib biasa, melainkan kelengkungan ruang-waktu akibat adanya massa yang besar (seperti planet atau bintang)."
                ]
              },
              {
                text: "Fisika Inti (Nuklir)",
                description: [
                  "Fokus meneliti 'jantung' dari atom, yaitu nukleus.",
                  "Mempelajari gaya kuat yang mengikat proton dan neutron, serta pemanfaatan reaksi fisi dan fusi."
                ]
              },
              {
                text: "Fisika Partikel",
                description: "Berburu partikel paling fundamental yang menyusun alam semesta (seperti Quark dan Higgs Boson) menggunakan mesin akselerator raksasa."
              }]
            }
          },
          {
            text: "Fisika Terapan & Interdisipliner (The Innovation)",
            description: "Fisika tidak cuma berdiam diri di lab, tapi juga berkolaborasi dengan bidang ilmu lain untuk melahirkan inovasi masa depan.",
            children: {
              type: "unordered",
              items: [
              {
                text: "Astrofisika & Kosmologi",
                description: [
                  "Fisika yang menatap langit.",
                  "Mempelajari sifat fisik benda-benda langit, jalannya bintang, hingga bagaimana alam semesta ini bermula (Big Bang) dan bagaimana ia akan berakhir."
                ]
              },
              {
                text: "Biofisika",
                description: [
                  "Jembatan antara fisika dan biologi.",
                  "Menganalisis fenomena biologis makhluk hidup (seperti mekanisme kerja sel atau aliran impuls saraf di otak) menggunakan prinsip-prinsip fisika."
                ]
              },
              {
                text: "Geofisika",
                description: "Menggunakan metode fisik (seperti gelombang seismik) untuk mengintip isi perut bumi dan memetakan potensi gempa atau struktur geologi."
              },
              {
                text: "Fisika Komputasi",
                description: "Ketika rumus matematika fisika sudah terlalu rumit untuk dihitung manual, baris-baris kode (coding) dan simulasi komputer mengambil alih untuk memprediksi fenomena kompleks."
              }]
            }
          }]
        }
      }
    ]
  },
  { heading: "🌍 Mengapa Fisika Disebut Ilmu Dasar?", 
    blocks: [
      { type: "paragraph", 
        text: "Sederhana saja!" },
      {
        type: "list",
        list: {
          type: "ordered",
          items: [
            {
              text: "Ilmu Kimia memerlukan konsep struktur atom dan energi ikatan (Fisika)."
            },
            {
              text: "Ilmu Biologi menggunakan prinsip mekanika dan fluida pada sistem peredaran darah serta kerja otot tubuh."
            },
            {
              text: "Ilmu Teknik/Rekayasa menerapkan hukum-hukum fisika untuk merancang gedung, jembatan, mesin, hingga roket."
            }
          ]
        }
      }
    ]
  },
  { heading: "🚀 Fisika dalam Kehidupan", 
    blocks: [
      {
        type: "image",
        src: img4
      },
      {
        type: "paragraph",
        text: "Fisika hadir hampir di setiap teknologi modern."
      },
      {
        type: "list",
        list: {
          type: "unordered",
          items: [
            {
              text: "📱 Smartphone & Internet",
              description: "Berbasis mekanika kuantum pada semikonduktor chip-nya."
            },
            {
              text: "🚗 Kendaraan Listrik",
              description: "Memanfaatkan prinsip elektromagnetisme dan konversi energi."
            },
            {
              text: "🏥 Dunia Medis (MRI & X-Ray",
              description: "Menggunakan teknologi fisika inti dan gelombang untuk memindai bagian dalam tubuh manusia tanpa pembedahan."
            },
            {
              text: "☀️ Panel Surya & Satelit:",
              description: "Menggunakan efek fotolistrik dan mekanika orbital."
            }
          ]
        }
      }
    ]
  },
  { heading: "💡 Tahukah Kamu?", 
    blocks: [
      {
        type: "image",
        src: img5
      },
      {
        type: "paragraph",
        text: [
          "Fisikawan itu tidak selalu berakhir menjadi profesor berkacamata tebal yang mengurung diri di laboratorium, lho!",
          "Kemampuan problem solving dan pemodelan matematis anak fisika membuat mereka banyak dicari di berbagai industri kreatif, perusahaan teknologi raksasa (Tech Giants), lembaga antariksa (seperti NASA/BRIN), dunia finansial, hingga pengembangan Artificial Intelligence (AI)."
        ]
      },
    ]
  },
  { heading: "⚠️ Miskonsepsi", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "'Fisika itu kan cuma ilmu yang mempelajari benda bergerak dan menghitung kecepatan mobil lewat rumus, ya?' ❌",
          "Wah, itu sempit banget! Gerak benda hanyalah satu dari sekian banyak menu di dalam fisika.",
          "Fisika juga mempelajari hal-hal tak kasat mata seperti radiasi cahaya, aliran kalor, arus listrik, gelombang wifi, hingga sifat dasar dari ruang dan waktu itu sendiri. ✔️",
          "Jadi, jangan cuma batasi fisika hanya sebatas rumus kecepatan $(v = \\frac{s}{t})$"
        ]
      }
    ]
  },
  { heading: "✨ Inti Materi", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Fisika adalah ilmu yang mempelajari hukum-hukum fundamental alam semesta untuk menjelaskan berbagai fenomena, mulai dari skala sub-atomik (mikroskopis) yang tak kasat mata hingga skala kosmik (makroskopis) yang megah."
        ]
      }
    ]
  },
  { heading: "🎯 Quick Check", 
    blocks: [
      {
        type: "quickCheck",
        data: {
          questions: [
          {
            question: "Apa yang dipelajari dalam ilmu fisika?",
            options: [
              "Hanya benda yang bergerak",
              "Hanya planet dan bintang",
              "Sejarah perkembangan kehidupan di Bumi.",
              "Materi, energi, gerak, gaya, ruang, waktu, dan interaksinya",
              "Makhluk hidup dan ekosistem"
            ],
            answerIndex: 3
          },
          {
            question: "Peristiwa berikut yang merupakan contoh fenomena fisika adalah....",
            options: [
              "Daun membuat makanan melalui fotosintesis",
              "Batu jatuh ke tanah karena gravitasi",
              "Bunga mekar pada musim tertentu",
              "Besi yang bereaksi dengan air akan membentuk karat",
              "Jamur berkembang biak"
            ],
            answerIndex: 1
          },
          {
            question: "Mengapa fisika sering disebut sebagai ilmu dasar?",
            options: [
              "Karena hanya dipelajari di sekolah.",
              "Karena menjadi dasar bagi banyak cabang ilmu pengetahuan dan teknologi.",
              "Karena merupakan ilmu yang paling mudah dipelajari.",
              "DKarena hanya membahas hukum Newton.",
              "Karena hanya digunakan oleh para fisikawan."
            ],
            answerIndex: 1
          },
          {
            question: "Manakah yang bukan termasuk cabang ilmu fisika?",
            options: [
              "Mekanika",
              "Termodinamika",
              "Optika",
              "Botani",
              "Elektronika"
            ],
            answerIndex: 3
          },
          {
            question: "Pernyataan yang paling tepat mengenai fisika adalah....",
            options: [
              "Fisika hanya mempelajari benda yang bergerak.",
              "Fisika hanya digunakan di laboratorium.",
              "Fisika membantu menjelaskan berbagai fenomena alam melalui hukum-hukum alam.",
              "Fisika hanya berguna bagi ilmuwan.",
              "Fisika hanya mempelajari benda-benda yang dapat dilihat secara langsung."
            ],
            answerIndex: 2
          }],
          scoring: [
          {
            min: 5,
            max: 5,
            emoji: "🏆",
            title: "Mission Complete!",
            message: "Kamu siap memasuki portal berikutnya."
          },
          {
            min: 4,
            max: 4,
            emoji: "🚀",
            title: "Hampir Sempurna",
            message: "Pemahamanmu sudah sangat baik."
          },
          {
            min: 2,
            max: 3,
            emoji: "🔄",
            title: "Perlu Sedikit Lagi",
            message: "Coba eksplorasi lagi bagian inti materi."
          },
          {
            min: 0,
            max: 1,
            emoji: "📖",
            title: "Ulangi Petualangan",
            message: "Tenang, ulangi petualanganmu dari awal."
          }]
        }
      }
    ]
  },
  {
    link: "/materi/hakikat-ilmu-fisika",
    blocks: [
      {
        type: "paragraph",
        text: [
          "Mungkin, sekarang kamu sudah apa itu fisika serta cabang-cabang serunya.",
          "Namun, setelah tahu objek kajiannya, apa sebenarnya esensi atau 'Hakikat' dari ilmu fisika itu sendiri bagi peradaban?",
          "➡️ Next, kita menuju portal: [**Hakikat Ilmu Fisika.**](/materi/hakikat-ilmu-fisika)"
        ]
      }
    ]
  },
  { heading: "Referensi:", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Halliday, Resnick & Walker. Fundamentals of Physics.",
          "Serway & Jewett. Physics for Scientists and Engineers.",
          "Young & Freedman. University Physics with Modern Physics.",
          "Kemendikbudristek RI. Buku Fisika SMA/MA."
        ]
      }
    ]
  }]
};

export default apaItuFisika;