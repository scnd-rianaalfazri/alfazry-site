import img1 from "/src/assets/Materi/HakikatIlmuFisika/apa-itu-fisika1.png"
import img2 from "/src/assets/Materi/HakikatIlmuFisika/apa-itu-fisika2.png"
import img3 from "/src/assets/Materi/HakikatIlmuFisika/apa-itu-fisika3.png"
import img4 from "/src/assets/Materi/HakikatIlmuFisika/apa-itu-fisika4.png"
import img5 from "/src/assets/Materi/HakikatIlmuFisika/apa-itu-fisika5.png"
import img6 from "/src/assets/Materi/HakikatIlmuFisika/portal-hakikat-ilmu-fisika.png"

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
  { heading: "🔬 Pengertian Fisika", 
    blocks: [
      {
        type: "paragraph",
        text: "Secara ilmiah, Fisika adalah cabang ilmu pengetahuan alam (sains) yang mempelajari materi, energi, gerak, gaya, ruang, waktu, beserta interaksi kompleks di antara semuanya.",   
      },
      {
        type: "quote",
        text: "Melalui fisika, manusia berusaha menguraikan *source code* alias cara kerja alam semesta."
      },
      {
        type: "paragraph",
        text: "Kita tidak tebak-tebakan, melainkan menggunakan fondasi kuat berupa pengamatan yang presisi, eksperimen yang terukur, serta penalaran ilmiah yang logis."
      }
    ]
  },
  {
    heading: "Ciri-ciri fisika sebagai ilmu",
    blocks: [
      {
        type: "list",
        list: {
          type: "ordered",
          items: [
            {
              text: "Empiris",
              description: "Fisika didasarkan pada hasil pengamatan dan pengalaman yang dapat diuji."
            },
            {
              text: "Objektif",
              description: "Kesimpulan fisika harus didasarkan pada data, bukan keinginan atau pendapat pribadi."
            },
            {
              text: "Sistematis",
              description: "Pengetahuan fisika disusun secara teratur dan saling berhubungan."
            },
            {
              text: "Kuantitatif",
              description: "Banyak gejala fisika dijelaskan menggunakan besaran, satuan, pengukuran, dan matematika."
            },
            {
              text: "Dapat diuji",
              description: "Pernyataan atau hipotesis dalam fisika harus dapat diuji melalui pengamatan atau eksperimen."
            },
            {
              text: "Terbuka terhadap perkembangan",
              description: "Pengetahuan fisika dapat diperbaiki atau dikembangkan apabila ditemukan bukti baru."
            }
          ]
        }
      }
    ]
  },
  { 
    heading: "🌌 Apa yang Dipelajari Fisika?", 
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
            }
          ]
        }
      },
      {
        type: "paragraph",
        text: [
          "Karena mencakup segala hal dari yang terkecil sampai yang terbesar di semesta ini, tidak heran kalau fisika sering dijuluki sebagai ilmu dasar *(the fundamental science)* bagi banyak cabang sains lainnya."
        ]
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
  { 
    heading: "🧩 Cabang-Cabang Fisika", 
    blocks: [
      {
        type: "image",
        src: img3
      },
      {
        type: "paragraph",
        text: [
          "Berikut adalah peta cabang fisika yang dijamin bikin kita makin kagum sama cara kerja semesta:",
          "Cabang fisika klasik *(The Foundation)*"
        ]
      },
      {
        type: "table",
        table: {
          headers: ["Cabang", "Kajian"],
          rows: [
            ["Mekanika", "Gerak, gaya, keseimbangan, dan energi"],
            ["Fluida", "Zat cair dan gas yang dapat mengalir"],
            ["Termodinamika", "Suhu, kalor, usaha, dan energi"],
            ["Optika", "	Cahaya, cermin, lensa, dan alat optik"],
            ["Akustik", "Bunyi dan gelombang suara"],
            ["Listrik", "Muatan, arus, tegangan, dan rangkaian"],
            ["Magnetisme", "Magnet, medan magnet, dan induksi"],
            ["Elektromagnetisme", "Hubungan antara listrik dan magnet"]
          ]
        }
      },
      {
        type: "paragraph",
        text: "Fisika Modern *(The Frontier)*"
      },
      {
        type: "table",
        table: {
          headers: ["Cabang", "Kajian"],
          rows: [
            ["Fisika kuantum", "Materi dan energi pada skala atomik"],
            ["Fisika atom", "Struktur dan sifat atom"],
            ["Fisika inti", "Inti atom dan reaksi nuklir"],
            ["Fisika partikel", "Partikel dasar penyusun materi"],
            ["Relativitas", "Ruang, waktu, gerak, dan gravitasi"],
            ["Fisika zat padat", "Sifat bahan padat"],
            ["Fisika plasma", "Gas terionisasi"],
            ["Kosmologi", "Asal-usul dan perkembangan alam semesta"],
            ["Fisika material", "Sifat dan pengembangan material"]
          ]
        }
      },
      {
        type: "paragraph",
        text: "Fisika Terapan & Interdisipliner *(The Innovation)*"
      },
      {
        type: "table",
        table: {
          headers: ["Cabang", "Kajian"],
          rows: [
            ["Astrofisika", "Menggabungkan antara fisika dan astronomi untuk mempelajari benda langit."],
            ["Geofisika", "Memanfaatkan fisika untuk mempelajari Bumi."],
            ["Biofisika", "Menggunakan prinsip fisika untuk memahami proses makhluk hidup."],
            ["Fisika medis", "Menggunakan fisika untuk diagnosis, pengobatan, dan keselamatan pasien."],
            ["Ekonofisika", "Menerapkan konsep fisika dan analisis matematis untuk memahami sistem ekonomi yang kompleks."],
            ["Fisika lingkungan", "Mempelajari interaksi energi, materi, dan lingkungan."],
            ["Fisika kimia", "Mempelajari struktur, energi, dan perubahan materi menggunakan prinsip fisika."]
          ]
        }
      },
      {
        type: "paragraph",
        text: [
          "[KLIK DISINI](/materi/ruang-lingkup-fisika) untuk mmembaca penjelasan fenomena nyata dari setiap cabang fisika klasik, fisika modern, dan bidang interdisipliner"
        ]
      },
    ]
  },
  { 
    heading: "🚀 Fisika dalam Kehidupan", 
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
          type: "ordered",
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
  { heading: "🌟 *Fun Fact*", 
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
        ]
      },
      {
        type: "image",
        src: img6,
        caption: "🚀 Kamu bisa KLIK GAMBAR INI untuk menuju portal selanjutnya",
        link: "/materi/hakikat-ilmu-fisika"
      }
    ]
  }
]
};

export default apaItuFisika;