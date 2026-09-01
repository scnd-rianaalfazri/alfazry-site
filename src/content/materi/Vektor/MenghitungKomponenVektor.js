const menghitungKomponenVektor = {
  title: "Menghitung Komponen Vektor",
  slug: "menghitung komponen vektor",
  description: "Menggunakan trigonometri dasar untuk menentukan komponen horizontal dan vertikal sebuah vektor.",
  chapter: "➡️ Vektor",

  content: [
    { 
      blocks: [
        { type: "paragraph", 
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
    { heading: "✨ Inti Materi", blocks: [
        { type: "paragraph", 
          text: "Untuk sudut terhadap +x: Ax = A cos θ dan Ay = A sin θ, dengan tanda ditentukan oleh arah vektor." 
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
