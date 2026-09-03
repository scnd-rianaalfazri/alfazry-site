import img1 from "/src/assets/Materi/BesaranDanSatuan/portal-besaran-pokok-dan-besaran-turunan.png"
import img2 from "/src/assets/Materi/BesaranDanSatuan/sistem-internasional1.png"

const sisteminternasional = {
  title: 'Sistem Internasional',
  slug: 'sistem-internasional',
  description: 'Memahami Sistem Internasional (SI) sebagai standar satuan agar hasil pengukuran dapat dibandingkan secara universal.',
  chapter: "📏 Pengukuran",

  content: [
    {
      blocks: [
        {
          type: "image",
          src: img2
        },
        { 
          type: "paragraph", 
          text: "Bayangkan ilmuwan di dua negara mengukur benda yang sama dengan standar berbeda. Bagaimana mereka membandingkan hasilnya?"
        },
      ]
    },
    {
      heading: '❓ Pertanyaan Besar',
      blocks: [
        { 
          type: "paragraph", 
          text: "Bagaimana manusia membuat bahasa pengukuran yang dapat digunakan bersama?"
        }
      ]
    },
    {
      heading: '🌐 Apa Itu SI?',
      blocks: [
        { 
          type: "paragraph", 
          text: [
            "Sistem Internasional (SI) adalah sistem satuan standar yang digunakan secara global dalam ilmu pengetahuan dan teknologi.",
            "SI membuat pengukuran lebih seragam, mudah dibandingkan, dan tidak membingungkan."
          ]
        }
      ]
    },
    {
      heading: '👀 Visualisasi Konsep',
      blocks: [
        { 
          type: "paragraph", 
          text: [
            "Bayangkan Amara bekerja di stasiun pengukuran: panjang dalam meter, massa dalam kilogram, dan waktu dalam sekon.",
            "Standar yang sama membuat data dari berbagai tempat dapat dibandingkan."
          ]
        }
      ]
    }, 
    {
      heading: '📋 Tujuh Besaran Pokok SI',
      blocks: [
        {
          type: "table",
          table: {
            headers: ["Besaran Pokok", "Satuan SI", "Definisi"],
            rows: [
              ["Panjang", "meter $(m)$", "Jarak yang ditempuh cahaya dalam vakum selama $\\frac{1}{299.792.458}$ sekon"], 
              ["Massa", "kilogram $(kg)$", "Massa silinder campuran logam Platina-Iridium yang disimpan di Lembaga Internasional Berat dan Ukuran di Serves, Prancis"],
              ["Waktu", "sekon $(s)$", "Selang waktu terjadinya 9,192,631,770 getaran radiasi elektromagnetik yang dipancarkan oleh atom Cesium-133 dalam transisi antara dua tingkat energi dalam pada keadaan dasar"],
              ["Suhu", "kelvin $(K)$", "$\\frac{1}{273,16}$ kali suhu termodinamika titik tripel air, yaitu ketika tripel air berada dalam kesetimbangan dengan es dan uap jenuhnya"],
              ["Jumlah zat", "mole $(mol)$", "Jumlah zat yang mengandung zat elementer (atom, molekul, ion) sebanyak atom yang terdapat pada 12 gram isotop karbon-12"],
              ["Kuat arus listrik", "ampere $(A)$", "Arus listrik apabila dua konduktor lurus sejajar tak hingga panjangnya, ditempatkan 1 meter terpisah di ruang hampa, menghasilkan gaya sebesar $2 \\times 10^{-7}$ newton per meter panjang konduktor"],
              ["Intensitas cahaya", "candela $(cd)$", "Intensitas sumber cahaya dalam arah tertentu dari sumber yang memancarkan radiasi monokromatik dengan frekuensi $540 \\times 10^{14} \\text{ Hz}$ dan memiliki intensitas radian sebesar $\\frac{1}{683} \\text{Watt per steradian}$"]
            ]
          }
        }
      ]
    },
    {
      heading: '🧠 Analisis',
      blocks: [
        { 
          type: "paragraph", 
          text: "Satuan standar bukan untuk membuat fisika rumit. Justru standar membuat komunikasi data menjadi lebih sederhana dan konsisten."
        },
      ]
    },
    {
      heading: '🔢 Awalan Satuan',
      blocks: [
        { 
          type: "paragraph", 
          text: [
            "Untuk nilai sangat besar atau kecil digunakan awalan satuan, misalnya kilo = $10^3$, centi = $10^{-2}$, mili = $10^{-3}$, dan mikro = $10^{-6}$.",
            "Berikut ini beberapa awalan satuan yang umum digunakan dalam SI."
          ]
        },
        { 
          type: "table",
          table: {
            headers: ["Awalan", "Simbol", "Faktor"],
            rows: [
              ["Tera-", "T", "$10^{12}$"],
              ["Giga-", "G", "$10^9$"],
              ["Mega-", "M", "$10^6$"],
              ["kilo-", "k", "$10^3$"],
              ["hecto-", "h", "$10^2$"],
              ["deka-", "da", "$10^1$"],
              ["mili-", "m", "$10^{-3}$"],
              ["mikro-", "μ", "$10^{-6}$"],
              ["nano-", "n", "$10^{-9}$"],
              ["piko-", "p", "$10^{-12}$"]
            ]
          }
        }
      ]
    },
    {
      heading: '🌍 Contoh di Kehidupan',
      blocks: [
        { 
          type: "paragraph", 
          text: "Jarak perjalanan dapat dinyatakan dalam kilometer. Ukuran benda kecil dapat dinyatakan dalam milimeter. Awalan membantu menuliskan nilai secara praktis."
        },
      ]
    },
    {
      heading: "⚠️ Miskonsepsi",
      blocks: [
        { 
          type: "paragraph", 
          text: "SI bukan sekadar daftar satuan. SI adalah sistem standar yang membuat pengukuran dapat digunakan dan dibandingkan secara konsisten."
        },
      ]
    },
    {
      heading: "🌟 *Fun Fact*",
      blocks: [
        { 
          type: "paragraph", 
          text: "Definisi satuan SI modern menggunakan konstanta alam tertentu agar standar pengukuran tidak bergantung pada satu benda fisik tertentu." 
        },
      ]
    },
    {
      heading: '✨ Inti Materi',
      blocks: [
        { 
          type: "paragraph", 
          text: "SI adalah bahasa standar pengukuran dalam fisika. Tujuh besaran pokok menjadi fondasi sistem ini."
        },
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
                question: "Apa tujuan utama Sistem Internasional (SI) dalam pengukuran?",
                options: [
                  "Menyeragamkan satuan agar hasil pengukuran dapat dibandingkan secara global",
                  "Membuat semua hasil pengukuran memiliki nilai yang sama",
                  "Mengurangi jumlah besaran yang dipelajari dalam fisika",
                  "Menggantikan seluruh alat ukur yang digunakan manusia",
                  "Membatasi penggunaan satuan hanya dalam bidang fisika"
                ],
                answerIndex: 0
              },
              {
                question: "Manakah pasangan besaran pokok dan satuan SI yang benar?",
                options: [
                  "Waktu — sekon (s)",
                  "Panjang — kilogram (kg)",
                  "Massa — meter (m)",
                  "Suhu — ampere (A)",
                  "Kuat arus listrik — kelvin (K)"
                ],
                answerIndex: 0
              },
              {
                question: "Satuan SI untuk intensitas cahaya adalah....",
                options: [
                  "Ampere (A)",
                  "Mole (mol)",
                  "Kelvin (K)",
                  "Candela (cd)",
                  "Sekon (s)"
                ],
                answerIndex: 3
              },
              {
                question: "Sebuah jarak dinyatakan sebagai 5 km. Berdasarkan awalan SI, nilai tersebut setara dengan....",
                options: [
                  "$\\text{5 × 10}^{-3}$ m",
                  "$\\text{5 × 10}^{-2}$ m",
                  "$\\text{5 × 10}^{1}$ m",
                  "$\\text{5 × 10}^{2}$ m",
                  "$\\text{5 × 10}^{3}$ m",
                ],
                answerIndex: 4
              },
              {
                question: "Mengapa penggunaan satuan standar penting dalam ilmu pengetahuan?",
                options: [
                  "Agar ilmuwan selalu menggunakan alat ukur yang sama",
                  "Agar semua benda memiliki nilai pengukuran yang sama",
                  "Agar data hasil pengukuran dari berbagai tempat dapat dibandingkan secara konsisten",
                  "Agar pengukuran hanya dapat dilakukan di laboratorium",
                  "Agar penggunaan awalan satuan tidak diperlukan"
                ],
                answerIndex: 2
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
          text: "Kita sudah mengenal fondasi SI. Sekarang kita akan melihat bagaimana besaran fisika dibangun dari fondasi tersebut."
        },
        {
          type: "image",
          src: img1,
          caption: "🚀 Kamu bisa KLIK GAMBAR INI untuk menuju portal selanjutnya",
          link: "/materi/besaran-pokok-dan-turunan"
        }
      ]
    }
  ]
};

export default sisteminternasional;
