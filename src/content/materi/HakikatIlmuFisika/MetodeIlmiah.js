import { text } from "framer-motion/client";

const metodeilmiah = {
  title: "Metode Ilmiah",
  slug: "metode-ilmiah",
  description: "Memahami pengertian, tujuan, dan tahapan umum metode ilmiah sebagai cara memperoleh pengetahuan yang dapat dipercaya.",
  chapter: "🔬 Hakikat Ilmu Fisika & Metode Ilmiah",

  content: [
  {
    blocks: [
    {
      type: "paragraph",
      text: [
        "🕵️‍♂️ Kisah Dua Paradigma: Siapa yang Paling Sahih?",
        "Bayangkan ada dua orang temanmu yang sedang jalan-jalan di taman, lalu mereka menyadari sesuatu yang aneh:",
        "Mengapa tanaman A tumbuh subur dan tinggi banget, sedangkan tanaman B di sebelahnya bantet dan layu?",
      ]
    },
    {
      type: "list",
      list:{
        type: "unordered",
        items: [
          {
            text: "Orang pertama langsung nyeletuk tanpa mikir panjang: 'Ah, itu mah karena pupuknya lebih mahal dan bagus aja!'"
          },
          {
            text: "Orang kedua tidak langsung percaya. Dia mulai mengamati jenis tanahnya, mencatat intensitas cahaya matahari, mengukur debit air penyiraman, lalu iseng melakukan percobaan kecil dengan menukar variabelnya."
          }
        ]
      }
    },
    {
      type: "paragraph",
      text: [
        "Sekarang coba tebak, siapa di antara kedua orang tersebut yang lebih mungkin memperoleh jawaban yang benar dan dapat dipercaya?",
        "Tentu saja orang kedua!",
        "Mengapa?",
        "Karena dia tidak memakai asumsi kosong, melainkan menggunakan sebuah fondasi berpikir yang dinamakan Metode Ilmiah."
      ]
    }]
  },
  { heading: "🔍 Apa Itu Metode Ilmiah?", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Secara istilah, Metode ilmiah adalah cara kerja yang sistematis untuk memperoleh pengetahuan berdasarkan pengamatan, bukti empiris, dan penalaran logis.",
          "Metode ini merupakan rules of the game atau panduan utama bagi para ilmuwan untuk menjawab teka-teki alam secara objektif (berdasarkan fakta riil), bukan secara subjektif (berdasarkan perasaan, opini, atau katanya-katanya).",
        ]
      }
    ]
  },
  { heading: "🎯 Mengapa Metode Ilmiah Diperlukan?", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Kalau di dunia ini tidak ada metode ilmiah, pengetahuan manusia bakal dipenuhi oleh dugaan, prasangka, bias kognitif, atau klaim sepihak.",
          "Seseorang bisa saja bilang kalau 'Bumi itu berbentuk segitiga bermuda' tanpa ada yang bisa membantahnya secara objektif.",
          "Nah, dengan adanya metode ilmiah, setiap kesimpulan wajib hukumnya didukung oleh data valid yang dapat diuji dan diulang (replicable) oleh siapa pun, kapan pun, dan di mana pun di belahan bumi ini."
        ]
      }
    ]
  },
  { heading: "🧩 Tahapan Umum Metode Ilmiah", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Biar proses perburuan fakta kamu berjalan rapi, metode ilmiah disusun dalam beberapa tangga tahapan.",
          "Berikut adalah alur proses yang biasa dilewati:"
        ]
      },
      {
        type: "list",
        list: {
          type: "ordered",
          items: [
            {
              text: "👀 Observasi",
              description: "Mengamati fenomena unik atau aneh di sekitar kita menggunakan indra atau alat ukur."
            },
            {
              text: "❓ Merumuskan Masalah",
              description: "Menyusun pertanyaan kritis tentang mengapa dan bagaimana fenomena itu bisa terjadi."
            },
            {
              text: "💭 Menyusun Hipotesis",
              description: "Membuat dugaan ilmiah sementara yang masuk akal untuk menjawab pertanyaan tersebut."
            },
            {
              text: "🧪 Melakukan Eksperimen",
              description: "Menguji hipotesis di laboratorium atau lapangan dengan mengontrol berbagai variabel (bebas, terikat, dan kontrol)."
            },
            {
              text: "📊 Menganalisis Data",
              description: "Mengolah data hasil eksperimen menjadi grafik, tabel, atau statistik agar polanya terlihat jelas."
            },
            {
              text: "📖 Menarik Kesimpulan",
              description: "Memutuskan apakah data yang didapat mendukung hipotesis atau justru mematahkannya."
            },
            {
              text: "📢 Mengomunikasikan Hasil",
              description: "Membagikan temuan kerenmu ke publik atau jurnal ilmiah agar bisa dievaluasi dan bermanfaat bagi peradaban."
            },
          ]
        }
      }
    ]

  },
  { heading: "🔄 Mengapa Tidak Selalu Berjalan Lurus?", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Di film-film, ilmuwan kelihatan gampang banget eksperimen langsung berhasil.",
          "Tapi realitanya, penelitian tidak selalu berjalan mulus sesuai rencana, bro!",
          "Sering kali hasil eksperimen di lapangan justru tidak mendukung hipotesis awal kita.",
          "Apakah itu artinya gagal? Tentu tidak!",
          "Ketika hal itu terjadi, para ilmuwan akan memperbaiki hipotesis mereka atau merancang metode eksperimen baru yang lebih presisi.",
          "Siklus trial and error yang berulang-ulang inilah yang justru membuat ilmu sains terus berkembang dinamis tanpa henti!"
        ]
      }
    ]
  },
  { heading: "🌍 Contoh dalam Kehidupan", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Eits, jangan salah sangka.",
          "Metode ilmiah itu bukan cuma konsumsi eksklusif ilmuwan berjas putih di dalam lab rahasia, lho.",
          "Pola pikir ini dipakai setiap hari oleh berbagai profesi modern:"
        ]
      },
      {
        type: "list",
        list: {
          type: "ordered",
          items: [
            {
              text: "Dokter",
              description: "Menganalisis gejala pasien (observasi) untuk menentukan obat yang pas (kesimpulan).",
            },
            {
              text: "Insinyur & Programmer",
              description: "Mencari penyebab bug pada aplikasi atau retakan jembatan lalu mengujinya secara logis.",
            },
            {
              text:"Pengembang Teknologi",
              description: "Melakukan riset pasar sebelum merilis fitur gadget terbaru agar tepat sasaran."
            }
          ]
        }
      }
    ]
  },
  { heading: "💡 Tahukah Kamu?", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Banyak penemuan hebat yang menyelamatkan umat manusia—mulai dari penemuan vaksin, pemanfaatan arus listrik, hingga jaringan internet 5G yang kamu pakai buat scrolling medsos sekarang",
          "Semuanya dikembangkan lewat penerapan metode ilmiah yang super ketat selama bertahun-tahun!"
        ]
      }
    ]
  },
  { heading: "⚠️ Miskonsepsi", 
    blocks: [
      { type: "paragraph", 
        text: [
          "'Langkah metode ilmiah itu harga mati, kaku, dan urutannya gak boleh ketukar sama sekali!' ❌",
          "Gak, gitu!",
          "Metode ilmiah bukanlah sebuah aturan yang kaku atau checklist saklek tanpa fleksibilitas.",
          "Urutan langkah di atas bisa banget disesuaikan dengan jenis medan penelitian yang kamu hadapi.",
          "Namun, prinsip utamanya tetap sama dan tidak boleh ditawar: wajib menggunakan bukti valid yang dapat diuji secara empiris!"
        ]
       },
    ]
  },
  { heading: "📊 Ringkasan Konsep", 
    blocks: [
      { type: "paragraph", 
        text: "Pertanyaan" 
      },
      { type: "paragraph", 
        text: "⬇️" 
      },
      { type: "paragraph", 
        text: "Penyelidikan" 
      },
      { type: "paragraph", 
        text: "⬇️" 
      },
      { type: "paragraph", 
        text: "Data" 
      },
      { type: "paragraph", 
        text: "⬇️" 
      },
      { type: "paragraph", 
        text: "Kesimpulan" 
      },
      { type: "paragraph", 
        text: "⬇️" 
      },
      { type: "paragraph", 
        text: "Pengetahuan Baru" 
      }
    ]
  },
  { heading: "✨ Inti Materi *(Takeaway Message)*", 
    blocks: [
      {
        type: "paragraph",
        text: "Metode ilmiah adalah cara sistematis untuk memperoleh pengetahuan yang objektif melalui rangkaian pengamatan, eksperimen, dan analisis data yang berlandaskan pada bukti nyata."
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
            question: "Yang dimaksud metode ilmiah adalah....",
            options: [
            "Cara menghafal teori dan rumus fisika.",
            "Cara kerja yang sistematis untuk memperoleh pengetahuan berdasarkan pengamatan, bukti, dan penalaran logis.",
            "Proses membuat alat-alat laboratorium.",
            "Cara menyelesaikan soal fisika tanpa melakukan pengamatan.",
            "Metode yang hanya digunakan oleh ilmuwan di laboratorium."],
            answerIndex: 1
          },
          {
            question: "Mengapa metode ilmiah diperlukan dalam penelitian?",
            options: [
            "Agar hasil penelitian selalu sesuai dengan hipotesis.",
            "Agar kesimpulan didasarkan pada dugaan pribadi.",
            "Agar kesimpulan didukung oleh data yang dapat diuji dan diulang.",
            "Agar penelitian dapat selesai lebih cepat.",
            "Agar eksperimen tidak perlu dilakukan."],
            answerIndex: 2
          },
          {
            question: "Manakah urutan tahapan metode ilmiah yang paling tepat?",
            options: [
            "Hipotesis → Kesimpulan → Observasi → Eksperimen → Analisis.",
            "Observasi → Merumuskan masalah → Hipotesis → Eksperimen → Analisis → Kesimpulan → Mengomunikasikan hasil.",
            "Eksperimen → Observasi → Hipotesis → Kesimpulan → Analisis.",
            "Merumuskan masalah → Kesimpulan → Eksperimen → Hipotesis.",
            "Analisis → Observasi → Eksperimen → Kesimpulan → Hipotesis."],
            answerIndex: 1
          },
          {
            question: "Jika hasil eksperimen tidak mendukung hipotesis, seorang ilmuwan sebaiknya....",
            options: [
            "Mengubah data agar sesuai dengan hipotesis.",
            "Mengabaikan hasil eksperimen dan tetap mempertahankan hipotesis.",
            "Memperbaiki hipotesis atau merancang eksperimen baru berdasarkan hasil yang diperoleh.",
            "Menghentikan penelitian karena dianggap gagal.",
            "Menyalin hasil penelitian orang lain."],
            answerIndex: 2
          },
          {
            question: "Pernyataan yang benar mengenai metode ilmiah adalah....",
            options: [
            "Metode ilmiah hanya digunakan dalam pelajaran fisika.",
            "Metode ilmiah merupakan aturan yang kaku dan tidak dapat disesuaikan.",
            "Metode ilmiah digunakan untuk memperoleh pengetahuan yang objektif berdasarkan bukti.",
            "Metode ilmiah bertujuan membuktikan bahwa hipotesis selalu benar.",
            "Metode ilmiah hanya dilakukan oleh ilmuwan profesional."],
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
    link: "/materi/merancang-eksperimen",
    blocks: [
    {
      type: "paragraph",
      text: [
        "Kita sekarang sudah mengantongi semua tangga tahapan dalam metode ilmiah.",
        "Nah, gimana sih taktik riil untuk menyusun variabel dan mengeksekusi sebuah pengujian di lapangan secara presisi?",
        "➡️ Next, kita menuju portal: Merancang Eksperiment"
      ]
    }]
  },
  { heading: "Referensi:", 
    blocks: [
      { type: "paragraph",
        text: [
          "Referensi:",
          "Kemendikbudristek RI. Buku Fisika SMA/MA.",
          "Halliday, Resnick & Walker. Fundamentals of Physics.",
          "Serway & Jewett. Physics for Scientists and Engineers."
        ]
      },
    ]
  }]
};

export default metodeilmiah;