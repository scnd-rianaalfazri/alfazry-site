import { body, text } from "framer-motion/client"
import { List } from "lucide-react"
import { Children } from "react"

const ruanglingkupfisika = {
  title: "Ruang Lingkup Fisika",
  slug: "ruang lingkup fisika",
  description: "Memahami berbagai bidang kajian fisika dan bagaimana semuanya saling berhubungan dalam menjelaskan alam semesta.",
  chapter: "🔬 Hakikat Ilmu Fisika & Metode Ilmiah",

  content: [
    {
      caption: "Fisika mempelajari alam semesta dari partikel terkecil hingga galaksi terbesar.",
      body: [
        "Apakah fisika cuma membahas rumus menggelindingkan balok atau menghitung kecepatan mobil ngerem??",
        "",
        "Ternyata tidak. Fisika memiliki ruang lingkup yang sangat luas, mulai dari gerakan semut sekecil debu di tanah hingga pergerakan galaksi raksasa di ujung semesta.",
        "",
        "Secara mendasar, fisika mempelajari materi, energi, gerak, gaya, ruang, waktu, beserta seluruh interaksi yang menyertainya.",
      ]
    },

    {
      heading: "🧭 Peta Ruang Lingkup Fisika",
      body: "Ruang lingkup yang luas ini dipetakan ke dalam dua era utama, plus satu ranah inovasi terapan"
    },

    {
      heading: "Pendalaman Era Fisika Klasik (Makro & Dapat Diprediksi)",
      body: "Fisika klasik adalah pondasi utama yang menjelaskan fenomena yang bisa kita tangkap dengan indra kita secara langsung. Berikut contoh fenomenanya",
      list: {
        type: "unordered",
        items: [
          {
            text: "Mekanika Klasik",
            description: "Setiap kali kamu naik kendaraan, mengerem, atau melihat jembatan yang kokoh berdiri, semuanya diatur oleh Hukum Newton tentang gaya, gerak, dan keseimbangan benda.",
          },
          {
            text: "Termodinamika",
            description: "Bukan cuma soal hafalan rumus panas, cabang ini secara estetis mempelajari bagaimana kalor 'berdansa' dan berubah wujud menjadi energi lain. Konsep penting di sini adalah entropi, yaitu derajat ketidakteraturan dalam suatu sistem alam."
          },
          {
            text: "Elektromagnetisme",
            description: "Menyatukan dua kekuatan alam, yaitu listrik dan magnet. Aplikasinya sangat dekat dengan kita, mulai dari alasan kenapa lampu di rumah bisa menyala hingga cara kerja kompas sederhana yang selalu menunjuk ke arah utara."
          },
          {
            text: "Optika",
            description: "Fokus pada perilaku cahaya dan lensa. Ilmu inilah yang mendasari teknologi kamera di smartphone kamu, kacamata, hingga bagaimana mata kita bisa menikmati keindahan visual dunia."
          },
          {
            text: "Akustik (Fisika Gelombang & Bunyi)",
            description: "Mempelajari perambatan gelombang mekanik dan getaran. Ruang lingkupnya luas, mulai dari hal sederhana seperti petikan dawai gitar yang menghasilkan nada indah, hingga teknologi canggih seperti gelombang ultrasonik di dunia medis."
          }
        ]
      }
    },

    {
      heading: "Pendalaman Era Fisika Modern (Mikro & Penuh Kejutan)",
      body : "Ketika para ilmuwan mencoba meneliti sesuatu yang skalanya ekstrem—seperti objek yang bergerak secepat cahaya, objek sekecil atom, atau objek super masif seperti bintang—hukum fisika klasik runtuh dan tidak berlaku lagi. Di sinilah Fisika Modern lahir membawa aturan baru:",
      list: {
        type: "unordered",
        items: [
          {
            text: "Mekanika Kuantum",
            description: "Mekanika kuantum berada di dunia sub-atomik yang liar dan tidak biasa. Di skala ini (atom, elektron, foton), partikel tidak lagi bergerak secara pasti melainkan menggunakan hukum probabilitas. Hebatnya, suatu benda bisa berada di dua tempat sekaligus dan bertingkah ganda: sebagai gelombang sekaligus partikel."
          },
          {
            text: "Teori Relativitas (Albert Einstein)",
            description: "Mengubah total cara pandang manusia terhadap ruang dan waktu. Einstein menjelaskan bahwa gravitasi bukanlah sekadar gaya tarik-menarik biasa, melainkan sebuah kelengkungan ruang-waktu yang disebabkan oleh keberadaan benda bermassa besar (seperti planet atau matahari)."
          },
          {
            text: "Fisika Inti (Nuklir)",
            description: "Berfokus langsung pada 'jantung' atom, yaitu nukleus. Di sini dipelajari gaya kuat yang mengikat proton dan neutron agar tidak hancur, serta pemanfaatan reaksi fisi (pembelahan inti) dan fusi (penggabungan inti)."
          },
          {
            text: "Fisika Partikel",
            description: "Ilmuwan di cabang ini berburu partikel paling fundamental (paling dasar) yang menyusun alam semesta ini. Mereka mendeteksi partikel eksotis seperti quark dan Higgs Boson (sering disebut partikel tuhan) menggunakan alat eksperimen raksasa bernama akselerator partikel."
          }
        ]
      }
    },

    {
      heading: "Fisika Terapan & Interdisipliner (Inovasi Masa Depan)",
      body: "Fisika tidak melulu diam di dalam laboratorium teori, tetapi juga berkolaborasi dengan cabang ilmu lain untuk menciptakan teknologi baru.",
      list: {
        type: "unordered",
        items: [
          {
            text: "Astrofisika & Kosmologi",
            description: "Fisika yang menatap langit dan bintang-bintang. Cabang ini meneliti sifat fisik benda langit, misteri lubang hitam (black hole), serta bagaimana alam semesta ini bermula (Big Bang) dan bagaimana ia akan berakhir nanti."
          },
          {
            text: "Biofisika",
            description: "Menjadi jembatan antara fisika dan biologi. Prinsip fisika digunakan untuk menganalisis fenomena makhluk hidup, contohnya seperti mekanisme kerja sel atau bagaimana impuls saraf (listrik tubuh) mengalir dalam tubuh kita."
          },
          {
            text: "Geofisika",
            description: "Ilmu untuk mengintip apa yang ada di dalam perut bumi tanpa harus menggali semuanya. Caranya adalah dengan memanfaatkan metode fisika, seperti menganalisis pantulan gelombang seismik untuk memetakan struktur bumi dan memahami aktivitas gempa."
          },
          {
            text: "Fisika Komputasi",
            description: "Ketika rumus matematika dalam fisika sudah terlalu rumit untuk dihitung manual dengan kertas dan pulpen, ilmuwan menggunakan coding (baris kode) dan bantuan simulasi komputer. Ini sangat berguna untuk memprediksi fenomena kompleks seperti cuaca atau pergerakan fluida."
          }
        ]
      }
    },

    {
      heading: "🌍 Contoh dalam Kehidupan",
      body: [
        "Saat bermain sepak bola:",
        "",
        "⚽ Gerak bola dipelajari dalam kinematika.",
        "💪 Tendangan dijelaskan oleh gaya.",
        "⚡ Energi berpindah dari kaki ke bola.",
        "🌬️ Hambatan udara dipelajari dalam fluida."
      ]
    },

    {
      heading: "🚀 Perjalananmu di Fisika Alfazrian",
      body: [
        "Di website ini, setiap chapter akan membahas satu bidang fisika secara bertahap.",
        "",
        "Semua chapter saling terhubung sehingga membentuk pemahaman yang utuh."
      ]
    },

    {
      heading: "💡 Tahukah Kamu?",
      body: [
        "📱 Kompleksitas Sebuah Smartphone",
        "",
        "Smartphone di tanganmu adalah bukti nyata gabungan berbagai bidang fisika. Gadget tersebut memanfaatkan listrik, gelombang elektromagnetik, optika lensa kamera, fisika material, hingga fisika kuantum pada komponen prosesornya secara bersamaan."
      ]
    },

    {
      heading: "⚠️ Miskonsepsi",
      body: [
        "Cabang-cabang fisika bukanlah ilmu kaplingan yang berdiri sendiri-sendiri. ",
        "",
        "Di dunia nyata, berbagai konsep fisika selalu berkolaborasi bersamaan untuk menjelaskan satu fenomena tunggal. ",
        "",
        "Contohnya satelit; untuk memahaminya kita butuh kombinasi konsep gerak, gaya gravitasi, energi, hingga relativitas sekaligus."
      ]
    },

    {
      heading: "✨ Inti Materi (Takeaway Message)",
      body: [
        "Fisika memiliki ruang lingkup semesta yang super luas. ",
        "",
        "Meskipun dibagi menjadi banyak bidang kajian demi mempermudah kita belajar, pada akhirnya seluruh konsep fisika saling berkaitan erat untuk menerjemahkan cara alam semesta bekerja."
      ]
    },

    {
      heading: "🎯 Quick Check",
      quickCheck: {
        questions: [
          {
            question: "Ruang lingkup fisika secara umum mempelajari....",
            options: [
              "Makhluk hidup dan interaksinya dengan lingkungan.",
              "Materi, energi, gerak, gaya, ruang, waktu, dan interaksinya.",
              "Struktur bahasa dan komunikasi manusia.",
              "Sejarah perkembangan peradaban dunia.",
              "Perilaku manusia dalam kehidupan sosial."
            ],
            answerIndex: 1,
          },
          {
            question:
              "Manakah yang termasuk cabang fisika klasik?",
            options: [
              "Mekanika Kuantum.",
              "Fisika Partikel.",
              "Mekanika Klasik.",
              "Teori Relativitas.",
              "Fisika Inti."
            ],
            answerIndex: 2,
          },
          {
            question: "Mekanika kuantum terutama mempelajari....",
            options: [
              "Gerak planet mengelilingi Matahari.",
              "Perpindahan kalor pada benda.",
              "Perilaku partikel-partikel pada skala atom dan subatom.",
              "Gelombang gempa bumi.",
              "Gerak kendaraan di jalan raya."
            ],
            answerIndex: 2,
          },
          {
            question: "Cabang fisika yang memanfaatkan prinsip fisika untuk mempelajari makhluk hidup adalah....",
            options: [
              "Astrofisika.",
              "Geofisika.",
              "Biofisika.",
              "Optika.",
              "Akustik."
            ],
            answerIndex: 2,
          },
          {
            question:
              "Mengapa berbagai cabang fisika perlu dipelajari secara bersama-sama?",
            options: [
              "Karena setiap cabang fisika berdiri sendiri dan tidak saling berhubungan.",
              "Karena satu fenomena di alam sering melibatkan beberapa konsep fisika sekaligus.",
              "Karena semua cabang fisika memiliki rumus yang sama.",
              "Karena fisika hanya digunakan untuk menghitung gerak benda.",
              "Karena setiap cabang fisika hanya dipelajari di laboratorium."
            ],
            answerIndex: 1,
          },
        ],
        scoring: [
          {
            min: 5,
            max: 5,
            emoji: "🏆",
            title: "Mission Complete!",
            message: "Kamu siap memasuki portal berikutnya.",
          },
          {
            min: 4,
            max: 4,
            emoji: "🚀",
            title: "Hampir Sempurna",
            message: "Pemahamanmu sudah sangat baik.",
          },
          {
            min: 2,
            max: 3,
            emoji: "🔄",
            title: "Perlu Sedikit Lagi",
            message: "Coba eksplorasi lagi bagian inti materi.",
          },
          {
            min: 0,
            max: 1,
            emoji: "📖",
            title: "Ulangi Petualangan",
            message: "Tenang, ulangi petualanganmu dari awal.",
          },
        ],
      },
    },

    {
      caption: "🚀 KLIK GAMBAR INI! Kamu bisa menuju ke portal berikutnya.",
      link: "/materi/metode-ilmiah",
      body: [
        "Kita sudah mengetahui apa saja yang dipelajari dalam fisika.",
        "",
        "Namun, bagaimana ilmuwan memperoleh semua pengetahuan tersebut?",
        "",
        "➡️ Next, kita menuju portal: Metode Ilmiah."
      ]
    },

    {
      heading: "Referensi:",
      body: [
        "Halliday, Resnick & Walker. Fundamentals of Physics.",
        "Serway & Jewett. Physics for Scientists and Engineers.",
        "Young & Freedman. University Physics with Modern Physics.",
        "Kemendikbudristek RI. Buku Fisika SMA/MA."
      ]
    }

  ]
}

export default ruanglingkupfisika