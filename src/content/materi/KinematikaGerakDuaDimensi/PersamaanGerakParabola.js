import { text } from "framer-motion/client";

const persamaangerakparabola = {
  title: "Persamaan Gerak Parabola",
  slug: "persamaan-gerak-parabola",
  description: "Menyusun dan memahami persamaan posisi serta kecepatan pada arah horizontal dan vertikal dalam gerak parabola.",
  chapter: "🏀 Kinematika: Gerak Dua Dimensi",

  content: [
    { blocks: [
        {
          type: "paragraph",
          text: [
            "Sekarang kita sudah tahu bahwa gerak parabola sebenarnya merupakan gabungan dua gerak: gerak horizontal dan gerak vertikal.",
            "Tapi bagaimana kita bisa mengetahui posisi benda setelah 1 detik, 2 detik, atau 3 detik?",
            "Di sinilah persamaan gerak mulai digunakan.",
            "Dengan persamaan matematika, kita dapat memprediksi posisi dan kecepatan benda pada waktu tertentu tanpa harus mengamati gerak benda secara langsung."
          ]
        }
      ]
    },

    {
      heading: "❓ Pertanyaan Besar",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Bagaimana cara menentukan posisi benda pada arah horizontal dan vertikal setelah bergerak selama waktu tertentu?",
            "Bagaimana posisi benda berubah dari waktu ke waktu hingga membentuk lintasan parabola?"
          ]
        }
      ]
    },
    {
      heading: "🎯 Titik Awal Gerak",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Untuk menganalisis gerak parabola, langkah pertama yang perlu dilakukan adalah menentukan sistem koordinat dan titik awal.",
            "Misalkan sebuah benda diluncurkan dari titik awal (0,0) dengan kecepatan awal v₀ dan sudut elevasi θ terhadap sumbu horizontal.",
            "Kecepatan awal ini diuraikan menjadi dua komponen:"
          ]
        },
        {
          type: "equation",
          equation: [
            "v_0{x} = v_0 \\cos \\theta",
            "v_0{y} = v_0 \\sin \\theta"
          ]
        },
        {
          type: "paragraph",
          text: [
            "Komponen $v_0{x}$ digunakan untuk menganalisis gerak pada sumbu $x$, sedangkan $v_0{y}$ digunakan untuk menganalisis gerak pada sumbu $y$."
          ]
        }
      ]
    },
    {
      heading: "➡️ Persamaan Posisi Horizontal (Sumbu $x$)",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Pada arah horizontal, benda bergerak dengan kecepatan konstan karena hambatan udara diabaikan.",
            "Gerak ini dianalisis sebagai Gerak Lurus Beraturan (GLB).",
            "Posisi horizontal benda setelah waktu $t$ ditentukan oleh persamaan:"
          ]
        },
        {
          type: "equation",
          equation: "x = v_{0x} \\; · \\; t"
        },
        {
          type: "paragraph",
          text: [
            "Dengan memasukkan komponen kecepatan awal horizontal, didapatkan:"
          ]
        },
        {
          type: "equation",
          equation: "x = v_0 \\cos\\theta \\; · \\; t"
        },
        {
          type: "paragraph",
          text: [
            "Persamaan ini menunjukkan bahwa posisi horizontal bertambah secara linier seiring bertambahnya waktu."
          ]
        }
      ]
    },
    {
      heading: "⬆️ Persamaan Posisi Vertikal (Sumbu Y)",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Pada arah vertikal, benda mengalami percepatan gravitasi g yang arahnya ke bawah.",
            "Jika arah ke atas dianggap positif, maka gerak vertikal dianalisis sebagai Gerak Lurus Berubah Beraturan (GLBB).",
            "Posisi vertikal benda setelah waktu t ditentukan oleh persamaan:"
          ]
        },
        {
          type: "equation",
          equation: [
            "y = v_{oy} \\: · \\: t - \\frac{1}{2} g t^2"
          ]
        },
        {
          type: "paragraph",
          text: [
            "Dengan memasukkan komponen kecepatan awal vertikal, didapatkan:"
          ]
        },
        {
          type: "equation",
          equation: "y = v_0 \\sin\\theta \\: · \\: t - \\frac{1}{2} g t^2"
        },
        {
          type: "paragraph",
          text: [
            "Persamaan ini menunjukkan bahwa posisi vertikal dipengaruhi oleh kecepatan awal ke atas dan pengaruh gravitasi yang menarik benda ke bawah."
          ]
        }
      ]
    },
    {
      heading: "🔄 Menggabungkan Posisi X dan Y",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Kedua persamaan posisi menggunakan waktu t yang sama.",
            "Dengan menggabungkan persamaan posisi horizontal dan vertikal, kita dapat menentukan posisi benda pada bidang dua dimensi dalam bentuk koordinat $(x, y)$:"
          ]
        },
        {
          type: "equation",
          equation: "x = v_0 \\cos\\theta \\: · \\: t"
        },
        {
          type: "equation",
          equation: "y = v_0 \\sin\\theta \\: · \\: t - \\frac{1}{2} g t^2"
        }
      ]
    },
    {
      heading: "⚡ Persamaan Kecepatan pada Waktu t",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Selain posisi, kita juga dapat menentukan komponen kecepatan benda pada waktu $t$.",
            "Komponen kecepatan horizontal tetap konstan:"
          ]
        },
        {
          type: "equation",
          equation: "v_x = v_{0x} = v_0\\cos\\theta"
        },
        {
          type: "paragraph",
          text: [
            "Komponen kecepatan vertikal berubah akibat percepatan gravitasi:"
          ]
        },
        {
          type: "equation",
          equation: "v_y = v_{0y} \\: - \\: g t = v_0 \\sin \\theta - g t"
        },
        {
          type: "paragraph",
          text: [
            "Besar kecepatan total benda pada waktu $t$ dapat ditentukan menggunakan rumus resultan vektor:"
          ]
        },
        {
          type: "equation",
          equation: "v = \\sqrt{{v_x}^2 + {v_y}^2}"
        }
      ]
    },

    {
      heading: "📊 Dari Persamaan Menjadi Lintasan",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Bagaimana persamaan-persamaan tersebut membentuk lintasan parabola?",
            "Ketika waktu $t$ berjalan, posisi $x$ terus bertambah karena benda bergerak ke depan.",
            "Pada saat yang sama, posisi $y$ naik hingga mencapai titik tertentu lalu berbalik turun.",
            "Jika titik-titik koordinat $(x, y)$ digambarkan pada grafik, hasilnya adalah lintasan berbentuk kurva melengkung yang dinamakan parabola."
          ]
        }
      ]
    },

    {
      heading: "🎯 Contoh Kasus Sederhana",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Misalkan sebuah benda dilempar dengan kecepatan awal $v_0 = 20 \\: m/s$ dan sudut $\\theta = 30\\degree$.",
            "Langkah analisis:"
          ]
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "Hitung komponen kecepatan awal",
                equation: [
                  "v_{0x} = 20\\cos 30\\degree",
                  "v_{0y} = 20 \\sin 30\\degree"
                ]
              },
              {
                text: "Masukkan nilai $t$ ke persamaan $x = v{0x}\\:·\\: t$ untuk mencari posisi horizontal."
              },
              {
                text: "Masukkan nilai $t$ ke persamaan $y = v_{0y} · \\: t - \\frac{1}{2} g t^2$ untuk mencari posisi vertikal."
              },
              {
                text: "Gabungkan hasil $x$ dan $y$ menjadi koordinat posisi benda."
              }
            ]
          } 
        }
      ]
    },
    {
      heading: "🧠 Mindset & Cara Berpikir",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Ketika melihat persamaan gerak parabola, jangan langsung menganggapnya sebagai sekumpulan rumus yang rumit.",
            "Ingatlah bahwa persamaan tersebut sebenarnya hanya gabungan dari dua konsep sederhana:"
          ]
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "Gerak horizontal bergerak lurus beraturan (GLB)."
              },
              {
                text: "Gerak vertikal dipengaruhi gravitasi (GLBB)."
              }
            ]
          }
        },
        {
          type: "paragraph",
          text: [
            "Variabel waktu t menjadi jembatan yang menghubungkan kedua gerak tersebut."
          ]
        }
      ]
    },

    {
      heading: "⚠️ Miskonsepsi Populer",
      blocks: [
        {
            Type: "list",
            list: {
              type: "list",
              list: {
                type: "ordered",
                items: [
                  {
                    text: "Miskonsepsi 1",
                    description: [
                      "Persamaan gerak parabola adalah satu rumus terpisah yang tidak berhubungan dengan GLB dan GLBB. ❌",
                      "Gak, gitu!",
                      "Faktanya, persamaan gerak parabola merupakan gabungan dari persamaan GLB pada sumbu horizontal dan GLBB pada sumbu vertikal. ✔️"
                    ]
                  },
                  {
                    text: "Miskonsepsi 2",
                    description: [
                      "Kecepatan horizontal $v_x$ berubah seiring bertambahnya waktu. ❌ ",
                      "Tanpa hambatan udara, $v_x$ bernilai tetap sepanjang gerakan. ✔️"
                    ]
                  }
                ]
              }
            }
        }
      ]
    },
    {
      heading: "🌟 *Fun Fact*",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Tahukah kamu?",
            "Dalam pembuatan game seperti Angry Birds atau game panahan, komputer menggunakan persamaan $x = v_{0x} · \\: t$ dan $y = v_{0y} · \\: t \\: - \\frac{1}{2} g t^2$ untuk menghitung lintasan objek di layar.",
            "Dengan menghitung koordinat $(x, y)$ setiap saat, komputer dapat menampilkan gerakan melengkung yang realistis."
          ]
        }
      ]
    },

    {
      heading: "✨ Inti Materi *(Takeaway Message)*",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Persamaan gerak parabola dibangun dari dua komponen gerak.",
            "Gerak horizontal dianalisis sebagai GLB dengan kecepatan konstan.",
            "Gerak vertikal dianalisis sebagai GLBB dengan percepatan gravitasi.",
            "Kedua komponen menggunakan waktu yang sama untuk menentukan posisi benda pada bidang dua dimensi."
          ]
        }
      ]
    },
    {
      heading: "🚀 Next Mission",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Sekarang kamu sudah bisa menentukan posisi dan kecepatan benda pada waktu tertentu.",
            "Tapi ada beberapa pertanyaan menarik yang belum kita jawab.",
            "Seberapa tinggi benda bisa mencapai titik tertingginya?",
            "Berapa lama benda membutuhkan waktu untuk mencapai titik tersebut?",
            "➡️ *Next*, portal selanjutnya: [**Tinggi Maksimum dan Waktu Mencapai Titik Tertinggi**](/materi/jangkauan-maksimum-dan-waktu-tempuh-gerak-parabola)."
          ]
        }
      ]
    }
  ]
};

export default persamaangerakparabola;