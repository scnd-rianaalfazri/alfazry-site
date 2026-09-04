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
