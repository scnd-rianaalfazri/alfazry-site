import img1 from "/src/assets/Materi/Vektor/menghitung-komponen-vektor1.png"

const menghitungKomponenVektor = {
  title: "Menghitung Komponen Vektor",
  slug: "menghitung-komponen-vektor",
  description: "Menggunakan trigonometri dasar untuk menentukan komponen horizontal dan vertikal sebuah vektor.",
  chapter: "➡️ Vektor",

  content: [
    { 
      blocks: [
        {
          type: "image",
          src: img1
        },
        { 
          type: "paragraph", 
          text: "Sekarang vektor sudah kita pecah. Tinggal satu pertanyaan: berapa besar masing-masing bagiannya?" 
        }
      ]
    },
    { 
      heading: "❓ Pertanyaan Besar", blocks: [
        { 
          type: "paragraph", 
          text: "Bagaimana besar vektor dan sudutnya menentukan besar komponen x dan y?" 
        }
      ]
    },
    { 
      heading: "📐 Hubungan Trigonometri", blocks: [
        { 
          type: "paragraph", 
          text: "Jika $\\theta$ diukur dari sumbu $x$ positif, komponen dapat ditentukan dengan hubungan trigonometri pada segitiga siku-siku." 
        },
        {
          type: "equation",
          equation: [
            "Ax = A cos θ",
            "Ay = A sin θ"
          ]
        }
      ]
    },
    { 
      heading: "🔍 Contoh Analisis", 
      blocks: [
        { 
          type: "paragraph", 
          text: [
            "Misalkan A = 10 N dan θ = 30°. Maka Ax = 10 cos 30° ≈ 8,66 N dan Ay = 10 sin 30° = 5 N." ,
            "Perhatikan tanda komponen jika vektor berada di kuadran lain."
          ]
        }
      ]
    },
    { 
      heading: "🧠 Strategi", 
      blocks: [
        { 
          type: "paragraph", 
          text: "Amati arah → tentukan sudut acuan → gambar segitiga → pilih sin/cos → tentukan tanda → hitung." 
        }
      ]
    },
    { 
      heading: "⚠️ Miskonsepsi", 
      blocks: [
        { 
          type: "paragraph", 
          text: "Kesalahan paling umum adalah menukar sin dan cos atau mengabaikan tanda komponen akibat kuadran." 
        }
      ]
    },
    { heading: "✨ Inti Materi", 
      blocks: [
        { type: "paragraph", 
          text: "Untuk sudut terhadap +x: Ax = A cos θ dan Ay = A sin θ, dengan tanda ditentukan oleh arah vektor." 
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
                question: "Sebuah vektor $A$ membentuk sudut $\\theta$ terhadap sumbu $x$ positif. Rumus yang tepat untuk menentukan komponen $x$ adalah...",
                options: [
                  "$A_x = A\\sin\\theta$",
                  "$A_x = A\\cos\\theta$",
                  "$A_x = A\\tan\\theta$",
                  "$A_x = \\frac{A}{\\cos\\theta}$",
                  "A_x = A + \\cos\\theta"
                ],
                answerIndex: 1
              },
              {
                question: "Jika sudut $\\theta$ diukur dari sumbu $x$ positif, rumus komponen $y$ adalah...",
                options: [
                  "$A_y = A\\cos\\theta$",
                  "$A_y = A\\tan\theta$",
                  "$A_y = A\\sin\\theta$",
                  "$A_y = \\frac{A}{\\sin\\theta$",
                  "A_y =  A − \\sin\\theta"
                ],
                answerIndex: 2
              },
              {
                question: "Sebuah gaya $A = 10 \\: N$ membentuk sudut $30\\degree$ terhadap sumbu $x$ positif. Berapakah komponen $x$-nya?. Gunakan $\\cos30\\degree \\approx 0,866$.",
                options: [
                  "3 N",
                  "5 N",
                  "6,66 N",
                  "8,66 N",
                  "10 N"
                ],
                answerIndex: 3
              },
              {
                question: "Urutan strategi yang paling tepat untuk menghitung komponen vektor adalah...",
                options: [
                  "hitung → pilih sin/cos → gambar segitiga → tentukan arah",
                  "tentukan tanda → hitung → abaikan arah → pilih sudut",
                  "amati arah → tentukan sudut acuan → gambar segitiga → pilih sin/cos → tentukan tanda → hitung",
                  "gambar segitiga → langsung gunakan cos → hitung",
                  "tentukan besar → abaikan kuadran → gunakan sin dan cos"
                ],
                answerIndex: 2
              },
              {
                question: "Jika $R_x < 0$ dan $R_y < 0$, maka resultan berada di...",
                options: [
                  "Kuadran I",
                  "Kuadran II",
                  "Kuadran III",
                  "Kuadran IV",
                  "Sumbu y positif"
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
        { type: "paragraph", 
          text: "Kalau dua vektor bertemu, bagaimana kita menggabungkannya?" 
        }
      ]
    }
  ]
};

export default menghitungKomponenVektor;
