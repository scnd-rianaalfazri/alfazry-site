import img1 from "/src/assets/Materi/BesaranDanSatuan/portal-dimensi.png"

const besaranpokokdanturunan = {
  title: 'Besaran Pokok dan Turunan',
  slug: 'besaran-pokok-dan-turunan',
  description: 'Memahami perbedaan besaran pokok dan besaran turunan serta hubungan antarbesaran.',
  chapter: "📏 Pengukuran",

  content: [
    {
      blocks: [
        { 
          type: "paragraph", 
          text: "Panjang, massa, waktu, kecepatan, gaya, dan energi sama-sama digunakan dalam fisika. Tapi apakah semuanya merupakan besaran dasar?" 
        },
      ]
    },
    {
      heading: "❓ Pertanyaan Besar",
      blocks: [
        { 
          type: "paragraph", 
          text: "Mana besaran yang menjadi fondasi, dan mana yang dapat dibangun dari besaran lain?"
        },
      ]
    },
    {
      heading: "🧱 Besaran Pokok",
      blocks: [
        { 
          type: "paragraph", 
          text: "Besaran pokok adalah besaran yang ditetapkan sebagai dasar dan tidak diturunkan dari besaran lain. Dalam [Sistem Internasional (SI)](/materi/sistem-internasional) terdapat tujuh besaran pokok." 
        },
        {
        type: "carousel",
        carousel: {
          cards: [
            {
              eyebrow: "📚 FUNGSI DARI BESARAN POKOK 01",
              title: "Panjang",
              text: "Satuan SI: meter $(m)$",
              description: "Besaran pokok yang mengukur jarak antara dua titik."
            },
            {
              eyebrow: "📚 FUNGSI DARI BESARAN POKOK 02",
              title: "Massa",
              text: "Satuan SI: kilogram $(kg)$",
              description: "Besaran pokok yang mengukur jumlah materi dalam suatu benda."
            },
            {
              eyebrow: "📚 FUNGSI DARI BESARAN POKOK 03",
              title: "Waktu",
              text: "Satuan SI: sekon $(s)$",
              description: "Besaran pokok yang mengukur durasi atau interval antara dua peristiwa."
            },
            {
              eyebrow: "📚 FUNGSI DARI BESARAN POKOK 04",
              title: "Suhu",
              text: "Satuan SI: kelvin $(K)$",
              description: "Besaran pokok yang mengukur tingkat panas atau dinginnya suatu benda."    
            },
            {
              eyebrow: "📚 FUNGSI DARI BESARAN POKOK 05",
              title: "Kuat Arus Listrik",
              text: "Satuan SI: ampere $(A)$",
              description: "Besaran pokok yang mengukur jumlah muatan listrik yang mengalir dalam suatu konduktor."
            },
            {
              eyebrow: "📚 FUNGSI DARI BESARAN POKOK 06",
              title: "Intensitas Cahaya",
              text: "Satuan SI: candela $(cd)$",
              description: "Besaran pokok yang mengukur intensitas cahaya yang dipancarkan dalam arah tertentu."
            },
            [
              {
                eyebrow: "📚 FUNGSI DARI BESARAN POKOK 07",
                title: "Jumlah Zat",
                text: "Satuan SI: mole $(mol)$",
                description: "Besaran pokok yang mengukur jumlah partikel (atom, molekul, ion) dalam suatu zat."
              }
            ]
          ]
        }
      }  
      ]
    },
    {
      heading: "🏗️ Besaran Turunan",
      blocks: [
        { 
          type: "paragraph", 
          text: [
            "Besaran turunan diperoleh dari kombinasi besaran pokok melalui hubungan matematis, misalnya perkalian atau pembagian." ,
            "Berikut ini contoh besaran turunan yang umum digunakan dalam fisika."
          ]
        },
        {
          type: "carousel",
          carousel: {
            cards: [
              {
                eyebrow: "📚 FUNGSI DARI BESARAN TURUNAN 01",
                title: "Luas",
                text: "Satuan SI: meter persegi $(m^2)$",
                description: [
                  "Besaran turunan yang diperoleh dari perkalian dua besaran panjang.",
                  "Berfungsi untuk mengukur area permukaan suatu benda."
                ]
              },
              {
                eyebrow: "📚 FUNGSI DARI BESARAN TURUNAN 02",
                title: "Volume",
                text: "Satuan SI: meter kubik $(m^3)$",
                description: [
                  "Besaran turunan yang diperoleh dari perkalian tiga besaran panjang.",
                  "Berfungsi untuk mengukur ruang yang ditempati oleh suatu benda."
                ]
              },
              {
                eyebrow: "📚 FUNGSI DARI BESARAN TURUNAN 03",
                title: "Kecepatan",
                text: "Satuan SI: meter per detik $(m/s)$",
                description: [
                  "Besaran turunan yang diperoleh dari pembagian jarak dengan waktu.",
                  "Berfungsi untuk mengukur laju perpindahan suatu benda."
                ]
              },
              {
                eyebrow: "📚 FUNGSI DARI BESARAN TURUNAN 04",
                title: "Gaya",
                text: "Satuan SI: newton $(N)$",
                description: [
                  "Besaran turunan yang diperoleh dari perkalian massa dengan percepatan.",
                  "Berfungsi untuk mengukur interaksi yang dapat mengubah gerak suatu benda."
                ]
              },
              {
                eyebrow: "📚 FUNGSI DARI BESARAN TURUNAN 05",
                title: "Energi",
                text: "Satuan SI: joule $(J)$",
                description: [
                  "Besaran turunan yang diperoleh dari perkalian gaya dengan jarak.",
                  "Berfungsi untuk mengukur kemampuan suatu sistem untuk melakukan kerja."
                ]
              },
              {
                eyebrow: "📚 FUNGSI DARI BESARAN TURUNAN 06",
                title: "Daya",
                text: "Satuan SI: watt $(W)$",
                description: [
                  "Besaran turunan yang diperoleh dari pembagian energi dengan waktu.",
                  "Berfungsi untuk mengukur laju perubahan energi."
                ]
              }
            ]
          }
        }
      ]
    },
    {
      heading: "👀 Visualisasi Konsep",
      blocks: [
        { 
          type: "paragraph", 
          text: "Bayangkan besaran pokok sebagai bahan dasar bangunan. Besaran turunan seperti bagian bangunan yang dapat dibuat dari kombinasi bahan tersebut."
        },
      ]
    },
    {
      heading: "🧠 Analisis Contoh",
      blocks: [
        { 
          type: "paragraph", 
          text: "Kecepatan = jarak / waktu, sehingga kecepatan merupakan besaran turunan. Gaya juga merupakan besaran turunan karena berkaitan dengan massa dan percepatan." 
        },
      ]
    },
    {
      heading: "🌍 Contoh di Kehidupan",
      blocks: [
        { 
          type: "paragraph", 
          text: "Kecepatan kendaraan, luas meja, volume botol, dan gaya merupakan contoh besaran turunan. Massa dan waktu merupakan besaran pokok."
        },
      ]
    },
    {
      heading: "⚠️ Miskonsepsi",
      blocks: [
        { 
          type: "paragraph", 
          text: "Besaran turunan bukan berarti besaran yang kurang penting. 'Turunan' hanya menunjukkan bahwa besaran tersebut dapat dinyatakan melalui kombinasi besaran pokok."
        },
      ]
    },
    {
      heading: "🌟 *Fun Fact*",
      blocks: [
        { 
          type: "paragraph", 
          text: "Satuan turunan seperti newton dan joule dapat ditelusuri kembali ke satuan dasar SI."
        }
      ]
    },
    {
      heading: "✨ Inti Materi",
      blocks: [
        { 
          type: "paragraph", 
          text: "Besaran pokok adalah fondasi sistem pengukuran. Besaran turunan dibentuk dari kombinasi besaran pokok." 
        }
      ]
    },
    { 
      heading: "🎯 Quick Check", 
      blocks: [
        {
          type: "quickCheck",
          data: {
            questions: [
              {
                question: "Besaran pokok adalah....",
                options: [
                  "besaran yang selalu memiliki satuan khusus",
                  "besaran yang diperoleh dari kombinasi besaran lain",
                  "besaran yang ditetapkan sebagai dasar dan tidak diturunkan dari besaran lain",
                  "besaran yang hanya digunakan dalam kehidupan sehari-hari",
                  "besaran yang nilainya selalu tetap"
                ],
                answerIndex: 2
              },
              {
                question: "Manakah pasangan yang seluruhnya merupakan besaran pokok?",
                options: [
                  "Panjang dan massa",
                  "Kecepatan dan waktu",
                  "Gaya dan massa",
                  "Energi dan panjang",
                  "Luas dan volume"
                ],
                answerIndex: 0
              },
              {
                question: "Kecepatan termasuk besaran turunan karena....",
                options: [
                  "kecepatan tidak dapat diukur",
                  "kecepatan hanya digunakan pada benda bergerak",
                  "kecepatan diperoleh dari hubungan antara jarak dan waktu",
                  "kecepatan merupakan besaran yang paling sering digunakan",
                  "kecepatan tidak memiliki satuan SI"
                ],
                answerIndex: 2
              },
              {
                question: "Manakah yang merupakan contoh besaran turunan?",
                options: [
                  "Massa",
                  "Waktu",
                  "Panjang",
                  "Suhu",
                  "Gaya"
                ],
                answerIndex: 4
              },
              {
                question: "Pernyataan yang paling tepat mengenai besaran turunan adalah....",
                options: [
                  "besaran turunan kurang penting dibandingkan besaran pokok",
                  "besaran turunan hanya dapat diperoleh melalui pengukuran langsung",
                  "besaran turunan tidak memiliki satuan",
                  "besaran turunan diperoleh dari kombinasi besaran pokok melalui hubungan matematis",
                  "besaran turunan tidak dapat digunakan untuk menjelaskan fenomena fisika"
                ],
                answerIndex: 3
              }
            ],
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
              }
            ]
          }
        }
      ]
    },
    {
      blocks: [
        { 
          type: "paragraph", 
          text: "Kalau sebuah besaran dibangun dari besaran lain, bagaimana kita mengenali struktur di baliknya?" 
        },
        {
          type: "image",
          src: img1,
          caption: "🚀 Kamu bisa KLIK GAMBAR INI untuk menuju portal selanjutnya",
          link: "/materi/dimensi"
        }
      ]
    }
  ]
};

export default besaranpokokdanturunan;
