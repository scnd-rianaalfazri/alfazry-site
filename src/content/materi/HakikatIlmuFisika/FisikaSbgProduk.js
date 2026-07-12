import fisikasbgprodukImg from "/src/assets/Materi/HakikatIlmuFisika/FisikaSebagaiProduk1.jpg"
import faktafisikaImg from "/src/assets/Materi/HakikatIlmuFisika/FisikaSebagaiProduk4.jpg"
import bentukprodukfisika2Img from "/src/assets/Materi/HakikatIlmuFisika/FisikaSebagaiProduk2.jpg"
import konsepfisikaImg from "/src/assets/Materi/HakikatIlmuFisika/FisikaSebagaiProduk5.jpg"
import prinsipfisikaImg from "/src/assets/Materi/HakikatIlmuFisika/FisikaSebagaiProduk6.jpg"
import hukumfisikaImg from "/src/assets/Materi/HakikatIlmuFisika/FisikaSebagaiProduk8.jpg"
import teorifisikaImg from "/src/assets/Materi/HakikatIlmuFisika/FisikaSebagaiProduk9.jpg"
import nextmissionfisikasbgprosesImg from "/src/assets/Materi/HakikatIlmuFisika/FisikaSebagaiProduk7.jpg"
import modelfisikaImg from "/src/assets/Materi/HakikatIlmuFisika/FisikaSebagaiProduk10.jpg"
import pentingnyafisikaImg from "/src/assets/Materi/HakikatIlmuFisika/FisikaSebagaiProduk11.jpg"
import tahukahkamuImg from "/src/assets/Materi/HakikatIlmuFisika/FisikaSebagaiProduk12.jpg"
import miskonsepsiImg from "/src/assets/Materi/HakikatIlmuFisika/FisikaSebagaiProduk13.jpg"
import intimateriImg from "/src/assets/Materi/HakikatIlmuFisika/FisikaSebagaiProduk14.jpg"
import { caption, image } from "framer-motion/client"
import { List } from "lucide-react"


const fisikasebagaiproduk = {
  title: "Fisika sebagai Produk",
  slug: "fisika-sebagai-produk",
  description: "Memahami bahwa fisika menghasilkan berbagai bentuk pengetahuan ilmiah seperti fakta, konsep, hukum, prinsip, teori, dan model.",
  chapter: "🔬 Hakikat Ilmu Fisika & Metode Ilmiah",

  content: [
    {
      image: fisikasbgprodukImg,
      caption: "Pengetahuan ilmiah merupakan hasil dari proses penyelidikan.",
      body: [
        "Pernahkah kamu bertanya-tanya, mengapa kita bisa tahu dengan sangat yakin kalau Bumi itu mengelilingi Matahari?",
        "",
        "Atau mengapa kita sangat percaya kalau benda yang dilepaskan di udara pasti akan langsung jatuh ke bawah?",
        "",
        "Semua pengetahuan berharga tersebut tidak muncul secara instan, tidak lewat mimpi semalam, dan jelas bukan hasil cocoklogi.",
        "",
        "Kumpulan pengetahuan itu adalah hasil akhir, atau produk, dari proses penyelidikan ilmiah super ketat yang telah dilakukan dan diuji berulang kali oleh para ilmuwan lintas generasi."
      ]
    },
 
    {
      heading: "⚙️ Apa yang Dimaksud Produk dalam Fisika?",
      image: bentukprodukfisika2Img,
      caption: "Beberapa produk fisika",    
      body: [
        "Dalam hakikat ilmu fisika, Fisika sebagai Produk (physics as a product) adalah kumpulan atau seluruh hasil pengetahuan yang didapatkan melalui proses ilmiah.",
        "",
        "Ibarat sebuah pabrik, jika proses ilmiah adalah mesin dan cara kerjanya, maka pengetahuan-pengetahuan inilah barang jadi yang siap digunakan.",
        "",
        "Produk-produk ilmiah ini menjadi fondasi utama bagi peradaban manusia untuk memahami, memprediksi, dan menjelaskan berbagai macam fenomena alam yang terjadi di sekitar kita.",
        "",
        "Produk fisika bukanlah satu hal yang monoton. Di dalamnya, kumpulan pengetahuan ini terbagi menjadi beberapa bentuk utama. Mari kita bedah satu per satu:"
      ]
    },

    {
      heading: "Produk Fisika yang Pertama: 📌 Fakta",
      image: faktafisikaImg,
      caption: "Ilustrasi fakta fisika",
      body: [
        "Fakta adalah kenyataan objektif yang dapat diamati atau diukur secara langsung menggunakan indra maupun alat ukur, dan kebenarannya telah disepakati bersama.",
        "",
        "Contoh:",
      ],
      list: {
        type: "unordered",
        items: [
          {
            text: "Air murni mendidih pada suhu sekitar $100^\circ\text{C}$ pada tekanan udara normal (1 atmosfer)."
          },
          {
            text: "Benda apa pun yang massanya dilepaskan di dekat permukaan Bumi akan jatuh bebas menuju pusat Bumi."
          }
        ]
      }
    },

    {
      heading: "Produk Fisika yang Kedua:💡 Konsep",
      image: konsepfisikaImg,
      caption: "Ilustrasi konsep fisika",
      body: [
        "Konsep adalah abstraksi mental, gagasan, atau pengertian yang dibuat untuk mengelompokkan fenomena-fenomena alam yang sejenis agar lebih mudah dijelaskan.",
        "",
        "Contoh:",
        "",
        "Istilah-istilah seperti Gaya, Energi, Usaha, dan Momentum."
      ]
    },

    {
      heading: "Produk Fisika yang Ketiga:📏 Prinsip",
      image: prinsipfisikaImg,
      caption: "Ilustrasi prinsip fisika",
      body: [
        "Prinsip merupakan pernyataan yang menjelaskan hubungan umum antara beberapa konsep yang saling berkaitan erat.",
        "",
        "Contoh:",
        "",
        "Prinsip Kekekalan Energi menyatakan bahwa energi tidak dapat diciptakan maupun dimusnahkan, melainkan hanya dapat berubah dari satu bentuk ke bentuk energi lainnya."
      ]
    },

    {
      heading: "Produk Fisika yang Keempat:⚖️ Hukum",
      image: hukumfisikaImg,
      caption: "Ilustrasi hukum fisika",
      body: [
        "Hukum fisika adalah aturan atau hubungan matematis yang selalu berlaku pada kondisi tertentu.",
        "",
        "Hukum dirumuskan berdasarkan hasil pengamatan dan eksperimen yang sangat konsisten.",
        "",
        "Contoh:",
      ],
      list: {
        type: "unordered",
        items:[
          {
            text: "Hukum Newton tentang Gerak"
          },
          {
            text: "Hukum Ohm tentang kelistrikan"
          },
          {
            text: "Hukum Coulomb tentang gaya elektrostatis"
          }
        ] 
      }
    },
 
    {
      heading: "Produk Fisika yang Kelima: 🌌 Teori",
      image: teorifisikaImg,
      caption: "Ilustrasi teori fisika",
      body: [
        "Teori adalah penjelasan ilmiah yang mendalam, komprehensif, didukung oleh gunung bukti eksperimen, serta mampu memprediksi fenomena baru yang belum teramati sebelumnya.",
        "",
        "Contoh:"
      ],
      list: {
        type: "unordered",
        items: [
          {
            text: "Teori Relativitas"
          },
          {
            text: "Teori Kuantum"
          }
        ]
      }
    },

    {
      heading: "Dan yang terakhir: 🧱 Model",
      image: modelfisikaImg,
      caption: "Ilustrasi model fisika",
      body: [
        "Model adalah representasi buatan atau penyederhanaan yang membantu kita memvisualisasikan dan memahami sistem alam semesta yang terlalu rumit, terlalu besar, atau terlalu mikro untuk dilihat langsung.",
        "",
        "Contoh:"
      ],
      list: {
        type: "unordered",
        items: [
          {
            text: "Model atom Bohr,"
          },
          {
            text: "diagram tata surya,"
          },
          {
            text: "persamaan matematika rumit, hingga"
          },
          {
            text: "simulasi grafis komputer"
          }
        ]
      }
    },

    {
      heading: "🌍 Mengapa Produk Fisika Penting?",
      image: pentingnyafisikaImg,
      caption: "Contoh beberapa perkembangan teknologi",
      body: [
        "Tanpa adanya produk fisika berupa konsep, hukum, dan teori, kita akan hidup dalam kegelapan tanpa tahu cara kerja semesta.",
        "",
        "Produk fisika inilah yang menjadi bahan bakar utama bagi perkembangan teknologi modern.",
        "",
        "Gadget yang kamu pegang sekarang, internet, satelit, hingga kendaraan listrik semuanya bisa ada karena manusia berhasil merumuskan produk-produk fisika ini!"
      ]
    },

    {
      heading: "💡 Tahukah Kamu?",
      image: tahukahkamuImg,
      caption: "Hukum vs teori",
      body: [
        "Banyak orang salah mengira kalau teori bisa 'naik kelas' menjadi hukum jika sudah makin terbukti.",
        "",
        "Itu miskonsepsi!",
        "Hukum dan teori punya peran yang berbeda secara total:",
        "",
      ],
      list: {
        type: "unordered",
        items: [
          {
            text: "Hukum menjelaskan apa hubungan yang teramati (misal: benda saling tarik-menarik), sedangkan"
          },
          {
            text: "teori menjelaskan mengapa hubungan tersebut bisa terjadi (misal: karena massa melengkungkan ruang-waktu)."
          }
        ]
      }
    },

    {
      heading: "⚠️ Miskonsepsi",
      image: miskonsepsiImg,
      caption: "Miskonsepsi teori ilmiah",
      body: [
        "'Yaa, itu kan baru sebatas 'Teori Ilmiah', berarti masih sekadar dugaan atau tebakan kosong dong?' ❌.",
        "",
        "Gak, gitu! Dalam bahasa sehari-hari, kata 'teori' sering diartikan sebagai omong kosong atau asumsi",
        "",
        "Tapi dalam dunia sains, Teori Ilmiah adalah kasta penjelasan tertinggi.",
        "",
        "Sebuah gagasan baru bisa diakui sebagai teori setelah lolos uji validasi ekstrem, didukung oleh banyak bukti empiris, dan belum bisa dipatahkan oleh eksperimen apa pun."
      ]
    },

    {
      heading: "📊 Ringkasan Konsep",
      body: [
        "Proses Ilmiah",
        "⬇️",
        "Fakta",
        "⬇️",
        "Konsep",
        "⬇️",
        "Prinsip",
        "⬇️",
        "Hukum",
        "⬇️",
        "Teori",
        "⬇️",
        "Model"
      ]
    },

    {
      heading: "✨ Inti Materi (Takeaway Message)",
      image: intimateriImg,
      caption: "Inti materi",
      body: [
        "Fisika sebagai produk merupakan perpustakaan besar berisi kumpulan pengetahuan ilmiah yang dihasilkan secara valid melalui metode penyelidikan ilmiah.",
        "",
        "Produk inilah yang kita gunakan untuk membaca rahasia alam semesta dan menciptakan teknologi masa depan."
      ]
    },

    {
      heading: "🎯 Quick Check",
      quickCheck: {
        questions: [
          {
            question: "Yang dimaksud fisika sebagai produk adalah....",
            options: [
              "Cara ilmuwan melakukan eksperimen.",
              "Proses mengamati dan menguji suatu hipotesis.",
              "Kumpulan pengetahuan ilmiah yang dihasilkan melalui proses ilmiah.",
              "Sikap yang harus dimiliki seorang ilmuwan.",
              "Peralatan yang digunakan di laboratorium."
            ],
            answerIndex: 2,
          },
          {
            question:
              "Manakah contoh konsep dalam fisika?.",
            options: [
              "Hukum Newton",
              "Teori Relativitas",
              "Energi",
              "Air mendidih pada suhu 100°C (1 atm)",
              "Model atom Bohr."
            ],
            answerIndex: 2,
          },
          {
            question: "Pernyataan 'Benda yang dilepaskan akan jatuh menuju permukaan Bumi' merupakan contoh....",
            options: [
              "Fakta",
              "Prinsip",
              "Teori",
              "Konsep",
              "Model"
            ],
            answerIndex: 0,
          },
          {
            question: "Pernyataan yang benar mengenai hukum dan teori ilmiah adalah....",
            options: [
              "Teori hanyalah dugaan yang belum dibuktikan.",
              "Hukum menjelaskan mengapa suatu fenomena terjadi, sedangkan teori hanya menjelaskan apa yang terjadi.",
              "Hukum menjelaskan hubungan yang teramati, sedangkan teori menjelaskan mengapa hubungan tersebut dapat terjadi.",
              "Hukum selalu lebih benar daripada teori.",
              "Hukum dan teori memiliki arti yang sama dalam sains."
            ],
            answerIndex: 2,
          },
          {
            question:
              "Mengapa model digunakan dalam fisika?",
            options: [
              "Untuk menggantikan eksperimen sepenuhnya.",
              "Untuk membuat rumus menjadi lebih rumit.",
              "Untuk membantu memahami sistem yang kompleks melalui representasi yang lebih sederhana.",
              "Agar semua fenomena dapat diamati secara langsung.",
              "Untuk membuktikan bahwa semua teori selalu benar."
            ],
            answerIndex: 2,
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
      image: nextmissionfisikasbgprosesImg,
      caption: "🚀 KLIK GAMBAR INI! Kamu bisa menuju ke portal berikutnya.",
      link: "/materi/fisika-sebagai-proses",
      body: [
        "Sekarang kamu sudah tahu, kan? Apa saja wujud 'produk' yang dihasilkan dalam fisika?",
        "",
        "Tapi, bagaimana cara para ilmuwan terdahulu bisa memproses dan menemukan semua rumus, hukum, dan teori keren ini?",
        "",
        "➡️ Next, kita menuju portal: Fisika sebagai Proses."
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

export default fisikasebagaiproduk