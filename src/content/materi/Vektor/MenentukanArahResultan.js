const menentukanArahResultan = {
  title: "Menentukan Arah Resultan",
  slug: "menentukan arah resultan",
  description: "Menentukan orientasi resultan dari komponen-komponennya dengan mempertimbangkan sudut dan kuadran.",
  chapter: "➡️ Vektor",

  content: [
    { 
      blocks: [
        { 
          type: "paragraph", 
          text: "Kita sudah mendapatkan besar resultan. Tapi sistem navigasi masih bertanya: 'arahnya ke mana?'" 
        }
      ]
    },
    { 
      heading: "❓ Pertanyaan Besar", 
      blocks: [
        { type: "paragraph", 
          text: "Bagaimana menentukan arah resultan dari Rx dan Ry?" 
        }
      ]
    },
    { 
      blocks: [
        { 
          type: "paragraph", 
          text: [
            "Jika sudut diukur dari sumbu $x$, hubungan dasarnya adalah $\\tan \\degree = \\frac{Ry}{Rx}$.",
            "Maka $\\theta = \\tan^{-1}(frac{Ry}{Rx}), dengan interpretasi arah mengikuti kuadran."
          ]
        }
      ]
    },
    { 
      heading: "🧭 Periksa Kuadran", 
      blocks: [
        { 
          type: "paragraph", 
          text: [
            "Tanda $Rx$ dan $Ry$ menunjukkan kuadran: (+,+) I; (-,+) II; (-,-) III; (+,-) IV.",
            "Ini mencegah kita mengambil sudut yang benar secara kalkulator tetapi salah secara arah fisika."
          ]
        }
      ]
    },
    { heading: "🔍 Contoh Analisis", 
      blocks: [
        { type: "paragraph", 
          text: "Jika Rx positif dan Ry positif, resultan berada di kuadran I. Jika Rx negatif dan Ry positif, resultan berada di kuadran II." 
        }
      ]
    },
    { 
      heading: "⚠️ Miskonsepsi", 
      blocks: [
        { 
          type: "paragraph", 
          text: "Menghitung $tan^{-1}$ saja tidak selalu cukup. Tanda komponen dan kuadran harus diperiksa." 
        }
      ]
    },
    { 
      heading: "✨ Inti Materi", 
      blocks: [
        { 
          type: "paragraph", 
          text: "Resultan lengkap = besar + arah. Sudut dan kuadran harus dibaca bersama." 
        }
      ]
    },
    { 
      blocks: [
        { 
          type: "paragraph", 
          text: "Sekarang kita naik satu level: bagaimana fisikawan menuliskan vektor secara lebih ringkas?" 
        }
      ]
    }
  ]
};

export default menentukanArahResultan;
