import { caption, image, link } from "framer-motion/client"
import img1 from "/src/assets/Materi/HakikatIlmuFisika/mengapa-belajar-fisika1.png"
import img2 from "/src/assets/Materi/HakikatIlmuFisika/mengapa-belajar-fisika2.png"
import img3 from "/src/assets/Materi/HakikatIlmuFisika/mengapa-belajar-fisika3.png"
import img4 from "/src/assets/Materi/HakikatIlmuFisika/mengapa-belajar-fisika4.png"
import img5 from "/src/assets/Materi/HakikatIlmuFisika/mengapa-belajar-fisika5.png"
import img6 from "/src/assets/Materi/HakikatIlmuFisika/portal-apa-itu-fisika.png"

const mengapaBelajarFisika = {
  title: "Mengapa Belajar Fisika?",
  slug: "mengapa-belajar-fisika",
  description: "Memahami mengapa fisika dipelajari dan bagaimana fisika membantu manusia memahami alam semesta.",
  chapter: "🔬 Hakikat Ilmu Fisika & Metode Ilmiah",

  content: [
  {
    blocks: [
      {
        type: "image",
        src: img1
      },
      {
        type: "paragraph",
        text: "Coba kamu renungkan tentang hal ini:"
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
            }
          ]
        }
      },
      {
        type: "paragraph",
        text: "Tebak apa kesamaan dari semua pertanyaan random tapi penting itu? Semuanya dibahas dan dipecahkan dalam fisika!"
      },
    ]
  },
  { heading: "🤔 Jadi, Apa Itu Fisika?", 
    blocks: [
      {
        type: "image",
        src: img2
      },
      {
        type: "paragraph",
        text: [
          "Secara sederhana, Fisika adalah ilmu yang mempelajari gejala-gejala alam beserta hukum-hukum fundamental yang mengaturnya.",
          "Fisika bertindak sebagai 'kacamata tembus pandang'  yang membantu kita memahami bagaimana alam semesta ini bekerja.",
          "Skalanya pun gak main-main—mulai dari tingkah laku partikel sub-atomik yang ukurannya super mini, sampai pergerakan galaksi raksasa yang ada di luar angkasa sana."
        ]
      }
    ]
  },
  { heading: "📚 Gak cuma Teori, tapi ...", 
    blocks: [
      {
        type: "image",
        src: img3
      },
      {
        type: "paragraph",
        text: [
          "Sering kali kita punya miskonsepsi kalau fisika itu ilmu gaib yang cuma ada di dalam laboratorium atau papan tulis ruang kelas yang penuh coretan kapur.",
          "Padahal, kenyataannya kamu hidup bersama fisika setiap hari!",
          "Kamu sedang mempraktikkan fisika saat:"
        ]
      },
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
      }
    ]
  },
  { heading: "🚀 Mengapa Kita Belajar Fisika?", 
    blocks: [
      {
        type: "image",
        src: img4
      },
      {
        type: "paragraph",
        text: [
          "'Bro, kan udah ada kalkulator sama AI, ngapain repot-repot belajar fisika?'",
          "Eits, dengerin dulu.",
          "Belajar fisika itu bukan bertujuan untuk mengubah otakmu jadi mesin penghafal rumus.",
          "Tujuan utamanya jauh lebih keren dari itu. Fisika melatih otak kita untuk memiliki superpower berupa:"
        ]
      },
      {
        type: "list",
        list: {
          type: "unordered",
          items: [
            {
              text: "Berpikir Logis",
              description: "Terbiasa menyusun kesimpulan berdasarkan sebab-akibat yang masuk akal, bukan cuma sekadar 'katanya' atau mitos."
            },
            {
              text: "Memecahkan Masalah (Problem Solving)",
              description: "Melatih mental tangguh untuk memecahkan teka-teki rumit lewat langkah-langkah yang sistematis."
            },
            {
              text: "Menganalisis Data",
              description: "Gak gampang termakan hoax karena terbiasa melihat fakta empiris dan angka yang valid."
            },
            {
              text: "Memahami Teknologi",
              description: "Gak cuma jadi pengguna teknologi yang pasif, tapi tahu cara kerja dasar di balik canggihnya gadget masa kini."
            },
            {
              text: "Menjelaskan Fenomena Alam",
              description: "Punya kepuasan tersendiri karena bisa menjelaskan alasan ilmiah di balik indahnya fenomena semesta."
            }
          ]
        }
      }
    ]
  },
  { heading: "💡 Fisika Mengubah Dunia *(The Tech Trigger)*", 
    blocks: [
      {
        type: "image",
        src: img5
      },
      {
        type: "paragraph",
        text: [
          "Tahukah kamu kalau hampir semua benda canggih yang bikin hidup kita nyaman hari ini lahir dari rahim ilmu fisika?",
          "Tanpa adanya eksperimen dan penemuan rumus fisika oleh para ilmuwan terdahulu, teknologi ini gak akan pernah ada:"
        ]
      },
      {
        type: "list",
        list: {
          type: "unordered",
          items: [
          {
            text: "📱 Smartphone & Internet",
            description: "Lahir dari rekayasa gelombang elektromagnetik dan fisika semikonduktor."
          },
          {
            text: "🛰️ Satelit & Roket",
            description: "Terbang berkat penerapan hukum gravitasi dan mekanika orbital."
          },
          {
            text: "🚄 Kereta Cepat (Maglev)",
            description: "Meluncur cepat karena memanfaatkan gaya tolak-menolak magnetik super kuat."
          },
          {
            text: "☀️ Panel Surya",
            description: "Mengubah cahaya matahari jadi listrik lewat efek fotolistrik."
          },
          {
            text: "🏥 Mesin MRI *(Magnetic Resonance Imaging)*",
            description: "Memindai bagian dalam tubuh di rumah sakit memanfaatkan medan magnetik dan fisika inti."
          }]
        },
      },
      {
        type: "paragraph",
        text: [
          "So, saat kamu membuka Google Maps, menjepret foto selfie dengan kamera ponsel, atau menghubungkan TWS via Bluetooth, di detik yang sama kamu sedang menikmati buah manis dari perkembangan ilmu fisika!"
        ]
      }
    ]
  },
  { heading: "🌟 *Fun Fact*", 
    blocks: [
      {
        type: "paragraph",
        text: "Saat membuka Google Maps, mengambil foto dengan kamera ponsel, atau menghubungkan perangkat melalui *bluetooth*, kamu sedang menikmati hasil perkembangan ilmu fisika."
      }
    ]
  },
  { heading: "⚠️ Miskonsepsi", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "*'Fisika itu kan cuma ilmu menyeramkan yang isinya kumpulan rumus ribet dan bikin pusing?'* ❌.",
          "Gak, gitu!",
          "Rumus dalam fisika itu bukanlah tujuan utama, melainkan hanyalah sebuah alat bantu atau bahasa universal untuk menyederhanakan cara alam bekerja agar bisa dihitung oleh manusia. Padahal rumus hanyalah alat. ✔️",
          "Inti dari fisika adalah cerita di balik rumus tersebut, yaitu memahami polah tingkah alam semesta.."
        ]
      }
    ]
  },
  { heading: "🧭 Roadmap Chapter", 
    blocks: [
      {
        type: "paragraph",
        text: "Perjalanan yang akan dilalui pada chapter ini"
      },
      {
        type: "list",
        list: {
          type: "unordered",
          items: [
            {
              text: "🌍 [Mengapa Belajar Fisika](/materi/mengapa-belajar-fisika)"
            },
            {
              text: "🔬 [Apa Itu Fisika](/materi/apa-itu-fisika)"
            },
            {
              text: "🧩 [Hakikat Ilmu Fisika](/materi/hakikat-ilmu-fisika)"
            },
            {
              text: "⚙️ [Fisika sebagai Produk](/materi/fisika-sebagai-produk)"
            },
            {
              text: "🧪 [Fisika sebagai Proses](/materi/fisika-sebagai-proses)"
            },
            {
              text: "🧠 [Fisika sebagai Sikap](/materi/fisika-sebagai-sikap-ilmiah)"
            },
            {
              text: "🌌 [Ruang Lingkup Fisika](/materi/ruang-lingkup-fisika)"
            },
            {
              text: "🔍 [Metode Ilmiah](/materi/metode-ilmiah)"
            },
            {
              text: "🧪 [Merancang Eksperimen](/materi/merancang-eksperimen)"
            },
            {
              text: "📊 [Mengolah Data](/materi/mengolah-dan-menafsirkan-data)"
            },
            {
              text: "📢 [Komunikasi Ilmiah](/materi/kesimpulan-komunikasi-ilmiah)"
            },
            {
              text: "🥽 [Keselamatan Laboratorium](/materi/keselamatan-kerja-laboratorium)"
            },
            {
              text: "🌍 [Sains dalam Kehidupan](/materi/sains-dalam-kehidupan)"
            },
            {
              text: "🚀 [Mini Project](/materi/mini-project-hakikat-ilmu-fisika)"
            }
          ]
        }
      }
    ]
  },
  { heading: "✨ Inti Materi", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Fisika adalah ilmu yang membantu manusia memahami alam melalui pengamatan, eksperimen, dan penalaran ilmiah yang valid.",
          "Belajar fisika berarti belajar memahami dunia dan lingkungan yang ada di sekitar kita."
        ]
      }
    ]
  },
  { blocks: [
      {
        type: "paragraph",
        text: [
          "Sekarang kita udah tau kan? Secara tidak sadar fisika juga ada disekitar kita.",
          "Lalu sebenarnya...",
          "Apa yang dipelajari dalam fisika?"
        ]
      },
      {
        type: "image",
        src: img6,
        caption: "🚀 Kamu bisa KLIK GAMBAR INI untuk menuju portal selanjutnya",
        link: "/materi/apa-itu-fisika"
      }
    ]
  }]
};

export default mengapaBelajarFisika;