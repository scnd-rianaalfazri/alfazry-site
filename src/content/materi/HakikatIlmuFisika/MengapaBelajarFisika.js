import { caption, image } from "framer-motion/client"
import herohakikatilmufisikaImg from "/src/assets/Materi/HakikatIlmuFisika/MengapaFisika1.jpg"
import pertanyaanfisikaImg from "/src/assets/Materi/HakikatIlmuFisika/MengapaFisika2.jpg"
import pengertianfisika from "/src/assets/Materi/HakikatIlmuFisika/MengapaFisika3.jpg"
import fisikadisekitarkita from "/src/assets/Materi/HakikatIlmuFisika/MengapaFisika4.jpg"
import mengapabelajarfisikaImg from "/src/assets/Materi/HakikatIlmuFisika/MengapaFisika5.jpg"
import fisikamengubahduniaImg from "/src/assets/Materi/HakikatIlmuFisika/MengapaFisika6.jpg"
import tahukahkamuImg from "/src/assets/Materi/HakikatIlmuFisika/MengapaFisika7.jpg"
import intimaterimengapabelajarfisikaImg from "/src/assets/Materi/HakikatIlmuFisika/MengapaFisika8.png"
import miskonsepsimengapafisika from "/src/assets/Materi/HakikatIlmuFisika/Mengapafisika9.jpg"
import nextmissionapaitufisikaImg from "/src/assets/Materi/HakikatIlmuFisika/MengapaFisika10.jpg"

const mengapabelajarfisika = {
  title: "Mengapa Belajar Fisika?",
  slug: "mengapa-belajar-fisika",
  description: "Memahami mengapa fisika dipelajari dan bagaimana fisika membantu manusia memahami alam semesta.",
  chapter: "🔬 Hakikat Ilmu Fisika & Metode Ilmiah",

  content: [
    {
      image: herohakikatilmufisikaImg,
      caption: "Mengapa Belajar Fisika?",
      body: [
        "Pernahkah kamu tiba-tiba bengong lalu bertanya-tanya tentang hal ini:",
      ],
    },
    {
      heading: "Semua Berawal dari Pertanyaan",
      image: pertanyaanfisikaImg,
      caption: "Pertanyaan-pertanyaan fisika dalam kehidupan sehari-hari",
      list: {
        type: "unordered",
        items: [
          {
            text: "Mengapa sih langit di siang hari berwarna biru, tapi pas sore berubah jadi senja aesthetic kemerahan?"
          },
          {
            text: "Mengapa pelangi selalu muncul pasca hujan dengan warna-warni yang mejikuhibiniu?"
          },
          {
            text: "Mengapa benda apa pun yang kita lepas dari tangan selalu jatuh ke bawah, gak pernah melayang ke atas?"
          },
          {
            text: "Bagaimana bisa burung besi seberat ratusan ton (pesawat) meluncur bebas di udara tanpa jatuh?"
          },
          {
            text: "Bagaimana ceritanya internet dan sinyal GPS di HP kita bisa tahu lokasi tukang bakso terdekat secara real-time?"
          }
        ]
      },
      explanation: "Tebak apa kesamaan dari semua pertanyaan random tapi penting itu? Semuanya dibahas dan dipecahkan dalam fisika!"
    },

    {
      heading: "🤔 Jadi, Apa Itu Fisika?",
      caption: "Contoh bagian yang dipelajari dalam fisika",
      image: pengertianfisika,
      body: [
        "Secara sederhana, Fisika adalah ilmu yang mempelajari gejala-gejala alam beserta hukum-hukum fundamental yang mengaturnya.",
        "",
        "Fisika bertindak sebagai 'kacamata tembus pandang'  yang membantu kita memahami bagaimana alam semesta ini bekerja.",
        "",
        "Skalanya pun gak main-main—mulai dari tingkah laku partikel sub-atomik yang ukurannya super mini, sampai pergerakan galaksi raksasa yang ada di luar angkasa sana."
      ]
    },

    {
      heading: "📚 Gak cuma Teori, tapi ...",
      image: fisikadisekitarkita,
      caption: "Benda dan fenomena di sekitar, bagian dari fisika",
      body: [
        "Sering kali kita mengira fisika hanya ada di ruang kelas.",
        "",
        "Padahal setiap hari kita mengalaminya.",
        "",
        "Saat berjalan, bermain sepak bola, mengisi baterai ponsel, memasak air, menggunakan GPS, hingga melihat bintang di langit malam."
      ]
    },

    {
      heading: "🚀 Mengapa Kita Belajar Fisika?",
      image: mengapabelajarfisikaImg,
      caption: "Mindmap kegunaan belajar fisika",
      body: [
        "Belajar fisika bukan hanya untuk menghafal rumus.",
        "",
        "Fisika melatih kita untuk:",
        "",
        "✅ Berpikir logis",
        "✅ Memecahkan masalah",
        "✅ Menganalisis data",
        "✅ Memahami teknologi",
        "✅ Menjelaskan fenomena alam"
      ]
    },

    {
      heading: "🌟 Fisika Mengubah Dunia",
      image: fisikamengubahduniaImg,
      caption: "Fisika mempengaruhi perkembangan teknologi",
      body: [
        "Banyak teknologi modern lahir dari pemahaman fisika.",
        "",
        "Contohnya:",
        "",
        "📱 Smartphone",
        "🛰️ Satelit",
        "🚄 Kereta cepat",
        "☀️ Panel surya",
        "🏥 MRI",
        "🚀 Roket"
      ]
    },

    {
      heading: "💡 Tahukah Kamu?",
      image: tahukahkamuImg,
      caption: "Teknologi pada smartphone",
      body: [
        "Saat membuka Google Maps, mengambil foto dengan kamera ponsel, atau menghubungkan perangkat melalui Bluetooth, kamu sedang menikmati hasil perkembangan ilmu fisika."
      ]
    },

    {
      heading: "⚠️ Miskonsepsi",
      image: miskonsepsimengapafisika,
      caption: "Miskonsepsi pada pemahaman fisika",
      body: [
        "Banyak orang mengira fisika hanya berisi rumus yang sulit.",
        "",
        "Padahal rumus hanyalah alat.",
        "",
        "Tujuan utama fisika adalah memahami bagaimana alam bekerja."
      ]
    },

    {
      heading: "🧭 Roadmap Chapter",
      body: [
        "Perjalanan yang akan dilalui pada chapter ini",
        "",
        "🔬 Apa itu fisika",
        "🧩 Hakikat ilmu fisika",
        "🌌 Ruang lingkup fisika",
        "⚙️ Fisika sebagai produk",
        "🧪 Fisika sebagai proses",
        "🧠 Fisika sebagai sikap",
        "🔍 Metode ilmiah",
        "🥽 Keselamatan laboratorium"
      ]
    },

    {
      heading: "✨ Inti Materi",
      image: intimaterimengapabelajarfisikaImg,
      caption: "Inti materi mengapa belajar fisika",
      body: [
        "Fisika adalah ilmu yang membantu manusia memahami alam melalui pengamatan, eksperimen, dan penalaran ilmiah.",
        "",
        "Belajar fisika berarti belajar memahami dunia di sekitar kita."
      ]
    },

    {
      heading: "🎯 Quick Check",
      quickCheck: {
        questions: [
          {
            question: "Mengapa manusia mempelajari fisika?",
            options: [
              "Untuk menghafal sebanyak mungkin rumus",
              "Agar dapat menyelesaikan soal hitungan dengan cepat.",
              "Agar dapat menghitung lebih cepat daripada komputer",
              "Supaya bisa membuat semua teknologi sendiri",
              "Untuk memahami bagaimana alam bekerja melalui pengamatan dan penalaran ilmiah",
            ],
            answerIndex: 4,
          },
          {
            question:
              "Manakah kegiatan berikut yang merupakan contoh penerapan fisika dalam kehidupan sehari-hari?",
            options: [
              "Menggunakan GPS saat bepergian",
              "Menonton film kartun",
              "Menghafal nama-nama negara",
              "Menulis cerita fiksi.",
              "Menggambar pemandangan"
            ],
            answerIndex: 0,
          },
          {
            question: "Pernyataan yang paling tepat tentang fisika adalah....",
            options: [
              "Ilmu yang hanya dipelajari di laboratorium.",
              "Ilmu yang mempelajari gejala alam dan hukum-hukum yang mengaturnya.",
              "Ilmu yang hanya membahas perhitungan matematika.",
              "Ilmu yang hanya digunakan oleh ilmuwan.",
              "Ilmu yang mempelajari makhluk hidup dan lingkungannya."
            ],
            answerIndex: 1,
          },
          {
            question: "Manakah kemampuan berikut yang dilatih ketika belajar fisika?",
            options: [
              "Berpikir logis dan memecahkan masalah",
              "Menghafal tanpa memahami konsep",
              "Menebak jawaban tanpa alasan",
              "Mengingat semua rumus tanpa latihan",
              "Mengandalkan intuisi tanpa melakukan pengamatan."
            ],
            answerIndex: 0,
          },
          {
            question:
              "Banyak orang menganggap fisika sulit karena penuh rumus. Menurut materi ini, pernyataan yang benar adalah....",
            options: [
              "Rumus adalah tujuan utama belajar fisika.",
              "Rumus hanyalah alat untuk memahami alam.",
              "Fisika hanya digunakan di sekolah.",
              "Semua fenomena alam tidak dapat dijelaskan dengan fisika.",
              "Belajar fisika cukup dengan menghafal semua persamaan."
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
      image: nextmissionapaitufisikaImg,
      caption: "🚀 KLIK GAMBAR INI! Kamu bisa menuju ke portal berikutnya.",
      link: "/materi/apa-itu-fisika",
      body: [
        "Sekarang kita tahu mengapa fisika penting.",
        "",
        "Lalu sebenarnya...",
        "",
        "Apa yang dipelajari dalam fisika?",
        "",
        "➡️ Next, kita menuju portal: Apa Itu Fisika?"
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

export default mengapabelajarfisika