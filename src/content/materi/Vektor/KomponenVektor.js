import img1 from "/src/assets/Materi/Vektor/komponen-vektor1.png"
import img2 from "/src/assets/Materi/Vektor/komponen-vektor2.png"

const komponenVektor = {
  title: "Komponen Vektor",
  slug: "komponen-vektor",
  description: "Memahami bagaimana satu vektor dapat diuraikan menjadi komponen horizontal dan vertikal.",
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
          text: "Satu panah miring tampak rumit. Bagaimana kalau kita mengubahnya menjadi dua panah yang lebih sederhana?" 
        }
      ]
    },
    { 
      heading: "❓ Pertanyaan Besar", 
      blocks: [
        { type: "paragraph", 
          text: "Bagaimana satu vektor dapat direpresentasikan sebagai gabungan dua komponen yang saling tegak lurus?" 
        }
      ]
    },
    { 
      heading: "🧩 Memecah Vektor", 
      blocks: [
        { 
          type: "paragraph", 
          text: [
            "Sebuah vektor A pada bidang x-y dapat diuraikan menjadi komponen Ax dan Ay." ,
            "Ax mewakili bagian horizontal, sedangkan Ay mewakili bagian vertikal."
          ]
        }
      ]
    },
    { 
      heading: "📐 Segitiga Komponen", 
      blocks: [
        { type: "paragraph", 
          text: "Jika A membentuk sudut θ terhadap +x, maka Ax dan Ay membentuk segitiga siku-siku bersama A." 
        }
      ]
    },
    { 
      heading: "👩‍🔬 Zara Memecah Hologram", 
      blocks: [
        {
          type: "image",
          src: img2
        },
        { 
          type: "paragraph", 
          text: "Zara menarik vektor diagonal menjadi dua panah tegak lurus. Panah diagonal tetap menjadi resultan dari kedua komponen tersebut." 
        }
      ]
    },
    { 
      heading: "⚠️ Miskonsepsi", 
      blocks: [
        { 
          type: "paragraph", 
          text: "Komponen bukan dua vektor baru yang tidak berhubungan. Keduanya adalah bagian dari representasi vektor yang sama pada sumbu yang dipilih." 
        }
      ]
    },
    { 
      heading: "✨ Inti Materi", 
      blocks: [
        { 
          type: "paragraph", 
          text: "Komponen vektor membantu mengubah masalah dua dimensi menjadi analisis pada arah yang lebih sederhana." 
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
                question: "Sebuah vektor $A$ pada bidang $x \\:- \\: y$ dapat diuraikan menjadi...",
                options: [
                  "$A_x$ dan $A_y$",
                  "$A_x$ dan $A_z$",
                  "$A_y$ dan $A_z$",
                  "$A_x^2$ dan $A_y^2",
                  "$A$ dan $2A$",
                ],
                answerIndex: 0
              },
              {
                question: "Dalam komponen vektor, $A_x$ mewakili...",
                options: [
                  "bagian vertikal vektor",
                  "bagian horizontal vektor",
                  "besar resultan vektor",
                  "arah vektor",
                  "sudut vektor"
                ],
                answerIndex: 1
              },
              {
                question: "Jika sebuah vektor $A$ membentuk sudut $\\theta$ terhadap sumbu $+x$, maka $A$, $A_x$, dan $A_y$ dapat membentuk...",
                options: [
                  "segitiga sama sisi",
                  "segitiga sama kaki",
                  "segitiga siku-siku",
                  "segitiga sembarang tanpa sudut",
                  "persegi"
                ],
                answerIndex: 2
              },
              {
                question: "Pernyataan yang paling tepat tentang komponen vektor adalah...",
                options: [
                  "komponen merupakan dua vektor yang sama sekali berbeda dari vektor awal",
                  "komponen hanya digunakan untuk menggambar vektor",
                  "komponen merupakan bagian dari representasi vektor yang sama pada sumbu yang dipilih",
                  "komponen selalu memiliki arah yang sama dengan vektor awal",
                  "komponen membuat vektor awal menjadi lebih besar"
                ],
                answerIndex: 2
              },
              {
                question: "Mengapa komponen vektor berguna dalam analisis fisika?",
                options: [
                  "Karena membuat semua vektor menjadi skalar",
                  "Karena menghilangkan arah dari sebuah vektor",
                  "Karena membuat vektor tidak perlu memiliki besar",
                  "Karena menggantikan vektor dengan satuan baru",
                  "Karena mengubah masalah dua dimensi menjadi analisis pada arah yang lebih sederhana"
                ],
                answerIndex: 4
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
          text: "Kita sudah tahu apa itu Ax dan Ay. Sekarang bagaimana menghitung nilainya?" 
        }
      ]
    }
  ]
};

export default komponenVektor;
