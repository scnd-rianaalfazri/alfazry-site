import { caption, image, text } from "framer-motion/client";
import herohakikatilmufisikaImg from "/src/assets/Materi/HakikatIlmuFisika/MengapaFisika1.jpg";
import pertanyaanfisikaImg from "/src/assets/Materi/HakikatIlmuFisika/MengapaFisika2.jpg";
import pengertianfisika from "/src/assets/Materi/HakikatIlmuFisika/MengapaFisika3.jpg";
import fisikadisekitarkita from "/src/assets/Materi/HakikatIlmuFisika/MengapaFisika4.jpg";
import mengapabelajarfisikaImg from "/src/assets/Materi/HakikatIlmuFisika/MengapaFisika5.jpg";
import fisikamengubahduniaImg from "/src/assets/Materi/HakikatIlmuFisika/MengapaFisika6.jpg";
import tahukahkamuImg from "/src/assets/Materi/HakikatIlmuFisika/MengapaFisika7.jpg";
import intimaterimengapabelajarfisikaImg from "/src/assets/Materi/HakikatIlmuFisika/MengapaFisika8.png";
import miskonsepsimengapafisika from "/src/assets/Materi/HakikatIlmuFisika/Mengapafisika9.jpg";
import nextmissionapaitufisikaImg from "/src/assets/Materi/HakikatIlmuFisika/MengapaFisika10.jpg";

const mengapabelajarfisika = {
  title: "Mengapa Belajar Fisika?",
  slug: "mengapa-belajar-fisika",
  description:
  "Memahami mengapa fisika dipelajari dan bagaimana fisika membantu manusia memahami alam semesta.",
  chapter: "🔬 Hakikat Ilmu Fisika & Metode Ilmiah",

  content: [
  {
    blocks: [
    {
      type: "image",
      src: herohakikatilmufisikaImg,
      caption: "Mengapa Belajar Fisika?"
    },
    {
      type: "paragraph",
      text: "Pernahkah kamu tiba-tiba bengong lalu bertanya-tanya tentang hal ini:"
    }]

  },
  { heading:

    "Semua Berawal dari Pertanyaan", blocks: [{ type: "heading", text: "Semua Berawal dari Pertanyaan" },
    {
      type: "image",
      src: pertanyaanfisikaImg,
      caption: "Pertanyaan-pertanyaan fisika dalam kehidupan sehari-hari"
    },
    {
      type: "explanation",
      text: "Tebak apa kesamaan dari semua pertanyaan random tapi penting itu? Semuanya dibahas dan dipecahkan dalam fisika!"
    },
    {
      type: "list",
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
        }]

      }
    }]

  },
  { heading:

    "🤔 Jadi, Apa Itu Fisika?", blocks: [{ type: "heading", text: "🤔 Jadi, Apa Itu Fisika?" },
    {
      type: "image",
      src: pengertianfisika,
      caption: "Contoh bagian yang dipelajari dalam fisika"
    },
    {
      type: "paragraph",
      text: "Secara sederhana, Fisika adalah ilmu yang mempelajari gejala-gejala alam beserta hukum-hukum fundamental yang mengaturnya."
    },
    {
      type: "paragraph",
      text: "Fisika bertindak sebagai 'kacamata tembus pandang'  yang membantu kita memahami bagaimana alam semesta ini bekerja."
    },
    {
      type: "paragraph",
      text: "Skalanya pun gak main-main—mulai dari tingkah laku partikel sub-atomik yang ukurannya super mini, sampai pergerakan galaksi raksasa yang ada di luar angkasa sana."
    }]

  },
  { heading:

    "📚 Gak cuma Teori, tapi ...", blocks: [{ type: "heading", text: "📚 Gak cuma Teori, tapi ..." },
    {
      type: "image",
      src: fisikadisekitarkita,
      caption: "Benda dan fenomena di sekitar, bagian dari fisika"
    },
    {
      type: "paragraph",
      text: "Sering kali kita punya miskonsepsi kalau fisika itu ilmu gaib yang cuma ada di dalam laboratorium atau papan tulis ruang kelas yang penuh coretan kapur."
    },
    {
      type: "paragraph",
      text: "Padahal, kenyataannya kamu hidup bersama fisika setiap hari!"
    },
    { type: "paragraph", text: "Kamu sedang mempraktikkan fisika saat:" },
    {
      type: "list",
      list: {
        type: "unordered",
        items: [
        {
          text: "Melangkah kaki tanpa terpeleset (ada gaya gesek)."
        },
        {
          text: "Menendang bola dengan teknik melengkung ala anime (ada efek aerodinamika)."
        },
        {
          text: "Mengisi baterai smartphone kesayanganmu (ada aliran arus listrik)."
        },
        {
          text: "Memasak air hingga mendidih buat mie instan (ada transfer kalor)."
        },
        {
          text: "Membuka maps buat sunmori hingga menatap bintang-bintang di langit malam."
        }]

      }
    }]

  },
  { heading:

    "🚀 Mengapa Kita Belajar Fisika?", blocks: [{ type: "heading", text: "🚀 Mengapa Kita Belajar Fisika?" },
    {
      type: "image",
      src: mengapabelajarfisikaImg,
      caption: "Mindmap kegunaan belajar fisika"
    },
    {
      type: "paragraph",
      text: "'Bro, kan udah ada kalkulator sama AI, ngapain repot-repot belajar fisika?'"
    },
    { type: "paragraph", text: "Eits, dengerin dulu." },
    {
      type: "paragraph",
      text: "Belajar fisika itu bukan bertujuan untuk mengubah otakmu jadi mesin penghafal rumus."
    },
    {
      type: "paragraph",
      text: "Tujuan utamanya jauh lebih keren dari itu. Fisika melatih otak kita untuk memiliki superpower berupa:"
    },
    {
      type: "list",
      list: {
        type: "unordered",
        items: [
        {
          text: "Berpikir Logis",
          description:
          "Terbiasa menyusun kesimpulan berdasarkan sebab-akibat yang masuk akal, bukan cuma sekadar 'katanya' atau mitos."
        },
        {
          text: "Memecahkan Masalah (Problem Solving)",
          description:
          "Melatih mental tangguh untuk memecahkan teka-teki rumit lewat langkah-langkah yang sistematis."
        },
        {
          text: "Menganalisis Data",
          description:
          "Gak gampang termakan hoax karena terbiasa melihat fakta empiris dan angka yang valid."
        },
        {
          text: "Memahami Teknologi",
          description:
          "Gak cuma jadi pengguna teknologi yang pasif, tapi tahu cara kerja dasar di balik canggihnya gadget masa kini."
        },
        {
          text: "Menjelaskan Fenomena Alam",
          description:
          "Punya kepuasan tersendiri karena bisa menjelaskan alasan ilmiah di balik indahnya fenomena semesta."
        }]

      }
    }]

  },
  { heading:



    "🌟 Fisika Mengubah Dunia (The Tech Trigger)", blocks: [{ type: "heading", text: "🌟 Fisika Mengubah Dunia (The Tech Trigger)"
    },
    {
      type: "image",
      src: fisikamengubahduniaImg,
      caption: "Fisika mempengaruhi perkembangan teknologi"
    },
    {
      type: "paragraph",
      text: "Tahukah kamu kalau hampir semua benda canggih yang bikin hidup kita nyaman hari ini lahir dari rahim ilmu fisika?"
    },
    {
      type: "paragraph",
      text: "Tanpa adanya eksperimen dan penemuan rumus fisika oleh para ilmuwan terdahulu, teknologi ini gak akan pernah ada:"
    },
    {
      type: "explanation",
      text: [
      "So, saat kamu membuka Google Maps, menjepret foto selfie dengan kamera ponsel, atau menghubungkan TWS via Bluetooth, di detik yang sama kamu sedang menikmati buah manis dari perkembangan ilmu fisika!"]

    },
    {
      type: "list",
      list: {
        type: "unordered",
        items: [
        {
          text: "📱 Smartphone & Internet",
          description:
          "Lahir dari rekayasa gelombang elektromagnetik dan fisika semikonduktor."
        },
        {
          text: "🛰️ Satelit & Roket",
          description:
          "Terbang berkat penerapan hukum gravitasi dan mekanika orbital."
        },
        {
          text: "🚄 Kereta Cepat (Maglev)",
          description:
          "Meluncur cepat karena memanfaatkan gaya tolak-menolak magnetik super kuat."
        },
        {
          text: "☀️ Panel Surya",
          description:
          "Mengubah cahaya matahari jadi listrik lewat efek fotolistrik."
        },
        {
          text: "🏥 Mesin MRI",
          description:
          "Memindai bagian dalam tubuh di rumah sakit memanfaatkan medan magnetik dan fisika inti."
        }]

      }
    }]

  },
  { heading:

    "💡 Tahukah Kamu?", blocks: [{ type: "heading", text: "💡 Tahukah Kamu?" },
    {
      type: "image",
      src: tahukahkamuImg,
      caption: "Teknologi pada smartphone"
    },
    {
      type: "paragraph",
      text: "Saat membuka Google Maps, mengambil foto dengan kamera ponsel, atau menghubungkan perangkat melalui Bluetooth, kamu sedang menikmati hasil perkembangan ilmu fisika."
    }]

  },
  { heading:

    "⚠️ Miskonsepsi", blocks: [{ type: "heading", text: "⚠️ Miskonsepsi" },
    {
      type: "image",
      src: miskonsepsimengapafisika,
      caption: "Miskonsepsi pada pemahaman fisika"
    },
    {
      type: "paragraph",
      text: "Banyak orang mengira fisika hanya berisi rumus yang sulit."
    },
    { type: "paragraph", text: "Padahal rumus hanyalah alat." },
    {
      type: "paragraph",
      text: "Tujuan utama fisika adalah memahami bagaimana alam bekerja."
    }]

  },
  { heading:

    "🧭 Roadmap Chapter", blocks: [{ type: "heading", text: "🧭 Roadmap Chapter" },
    {
      type: "paragraph",
      text: "Perjalanan yang akan dilalui pada chapter ini"
    },
    { type: "paragraph", text: "🔬 Apa itu fisika" },
    { type: "paragraph", text: "🧩 Hakikat ilmu fisika" },
    { type: "paragraph", text: "🌌 Ruang lingkup fisika" },
    { type: "paragraph", text: "⚙️ Fisika sebagai produk" },
    { type: "paragraph", text: "🧪 Fisika sebagai proses" },
    { type: "paragraph", text: "🧠 Fisika sebagai sikap" },
    { type: "paragraph", text: "🔍 Metode ilmiah" },
    { type: "paragraph", text: "🥽 Keselamatan laboratorium" }]

  },
  { heading:

    "✨ Inti Materi", blocks: [{ type: "heading", text: "✨ Inti Materi" },
    {
      type: "image",
      src: intimaterimengapabelajarfisikaImg,
      caption: "Inti materi mengapa belajar fisika"
    },
    {
      type: "paragraph",
      text: "Fisika adalah ilmu yang membantu manusia memahami alam melalui pengamatan, eksperimen, dan penalaran ilmiah."
    },
    {
      type: "paragraph",
      text: "Belajar fisika berarti belajar memahami dunia di sekitar kita."
    }]

  },
  { heading:

    "🎯 Quick Check", blocks: [{ type: "heading", text: "🎯 Quick Check" },
    {
      type: "quickCheck",
      data: {
        questions: [
        {
          question: "Mengapa manusia mempelajari fisika?",
          options: [
          "Untuk menghafal sebanyak mungkin rumus",
          "Agar dapat menyelesaikan soal hitungan dengan cepat.",
          "Agar dapat menghitung lebih cepat daripada komputer",
          "Supaya bisa membuat semua teknologi sendiri",
          "Untuk memahami bagaimana alam bekerja melalui pengamatan dan penalaran ilmiah"],


          answerIndex: 4
        },
        {
          question:
          "Manakah kegiatan berikut yang merupakan contoh penerapan fisika dalam kehidupan sehari-hari?",
          options: [
          "Menggunakan GPS saat bepergian",
          "Menonton film kartun",
          "Menghafal nama-nama negara",
          "Menulis cerita fiksi.",
          "Menggambar pemandangan"],


          answerIndex: 0
        },
        {
          question:
          "Pernyataan yang paling tepat tentang fisika adalah....",
          options: [
          "Ilmu yang hanya dipelajari di laboratorium.",
          "Ilmu yang mempelajari gejala alam dan hukum-hukum yang mengaturnya.",
          "Ilmu yang hanya membahas perhitungan matematika.",
          "Ilmu yang hanya digunakan oleh ilmuwan.",
          "Ilmu yang mempelajari makhluk hidup dan lingkungannya."],


          answerIndex: 1
        },
        {
          question:
          "Manakah kemampuan berikut yang dilatih ketika belajar fisika?",
          options: [
          "Berpikir logis dan memecahkan masalah",
          "Menghafal tanpa memahami konsep",
          "Menebak jawaban tanpa alasan",
          "Mengingat semua rumus tanpa latihan",
          "Mengandalkan intuisi tanpa melakukan pengamatan."],


          answerIndex: 0
        },
        {
          question:
          "Banyak orang menganggap fisika sulit karena penuh rumus. Menurut materi ini, pernyataan yang benar adalah....",
          options: [
          "Rumus adalah tujuan utama belajar fisika.",
          "Rumus hanyalah alat untuk memahami alam.",
          "Fisika hanya digunakan di sekolah.",
          "Semua fenomena alam tidak dapat dijelaskan dengan fisika.",
          "Belajar fisika cukup dengan menghafal semua persamaan."],


          answerIndex: 1
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
    }]

  },
  {
    link: "/materi/apa-itu-fisika",
    blocks: [
    {
      type: "image",
      src: nextmissionapaitufisikaImg,
      caption: "🚀 KLIK GAMBAR INI! Kamu bisa menuju ke portal berikutnya."
    },
    {
      type: "paragraph",
      text: "Sekarang kita tahu mengapa fisika penting."
    },
    { type: "paragraph", text: "Lalu sebenarnya..." },
    { type: "paragraph", text: "Apa yang dipelajari dalam fisika?" },
    {
      type: "paragraph",
      text: "➡️ Next, kita menuju portal: Apa Itu Fisika?"
    }]

  },
  { heading:

    "Referensi:", blocks: [{ type: "heading", text: "Referensi:" },
    {
      type: "paragraph",
      text: "Halliday, Resnick & Walker. Fundamentals of Physics."
    },
    {
      type: "paragraph",
      text: "Serway & Jewett. Physics for Scientists and Engineers."
    },
    {
      type: "paragraph",
      text: "Young & Freedman. University Physics with Modern Physics."
    },
    {
      type: "paragraph",
      text: "Kemendikbudristek RI. Buku Fisika SMA/MA."
    }]

  }]

};

export default mengapabelajarfisika;