import { text } from "framer-motion/client";

const gayaGesek = {
  title: "Gaya Gesek",
  slug: "gaya-gesek",
  description: "Memahami gaya gesek sebagai gaya kontak yang menghambat atau membantu gerak benda pada permukaan yang saling bersentuhan.",
  chapter: "🚀 Dinamika: Gaya dan Hukum Newton",

  content: [
    { blocks: [
        {
          type: "paragraph",
          text: [
            "Bayangkan berjalan di atas lantai keramik yang kering. Kamu dapat melangkah dengan mudah tanpa tergelincir.",
            "Namun ketika lantai menjadi basah atau licin karena tumpahan oli, berjalan menjadi jauh lebih sulit. Mengapa permukaan yang berbeda dapat memengaruhi cara kita bergerak?"
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
            "Mengapa permukaan dapat menghambat gerak benda? Apakah gaya gesek selalu merugikan?"
          ]
        }
      ]
    },
    {
      heading: "🛞 Apa Itu Gaya Gesek?",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Gaya Gesek $(f)$ adalah gaya kontak yang bekerja searah bidang sentuh dan selalu berlawanan arah dengan arah gerak atau kecenderungan gerak benda.",
            "Besarnya gaya gesek sangat bergantung pada tingkat kekasaran permukaan bidang (koefisien gesek $\\mu$) serta seberapa kuat kedua permukaan saling menekan (Gaya Normal $N$)."
          ]
        }
      ]
    },
    {
      heading: "📐 Formulasi & Jenis Gaya Gesek",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Gaya gesek dibagi menjadi dua jenis utama:"
          ]
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "Gaya Gesek Statis ( $f_s$ )",
                description: "Bekerja saat benda dalam keadaan diam atau tepat akan bergerak. Nilai maksimum gaya gesek statis dirumuskan sebagai:",
                equation: "f_{s,\\text{maks}} = \\mu_s \\cdot N"
              },
              {
                text: "Gaya Gesek Kinetis $(f_k)$",
                description: "Bekerja saat benda sudah dalam keadaan bergerak meluncur. Dirumuskan sebagai:",
                equation: "f_k = \\mu_k \\cdot N"
              }
            ]
          }
        },
        {
          type: "paragraph",
          text: [
            "Keterangan:"
          ]
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "$N$ = Gaya normal (N)"
              },
              {
                text: "$\\mu_s$ = Koefisien gesek statis"
              },
              {
                text: "$\\mu_k$ = Koefisien gesek kinetis (selalu bernilai lebih kecil dari $\\mu_s$, yaitu $\\mu_k < \\mu_s$)."
              }
            ]
          }
        }
      ]
    },
    {
      heading: "🚦 3 Kondisi Analisis Gerak Benda",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Ketika gaya luar $F$ ditarik vertikal horizontal pada benda diam bermassa $m$ di atas lantai kasar:"
          ]
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              "**Benda Diam**: Jika $F < f_{s,\\text{maks}}$, maka gaya gesek yang bekerja adalah $f_s = F$. Benda tetap diam ($a = 0$).",
              "**Tepat Akan Bergerak**: Jika $F = f_{s,\\text{maks}}$, benda tepat pada batas akan bergerak ($a = 0$).",
              "**Benda Bergerak**: Jika $F > f_{s,\\text{maks}}$, benda meluncur! Gaya gesek yang bekerja berubah menjadi $f_k$, dan percepatan dihitung dengan Hukum II Newton: $a = \\frac{F - f_k}{m}$."
            ]
          }
        }
      ]
    },
    {
      heading: "📝 Contoh Soal & Pembahasan",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Sebuah balok kayu bermassa $m = 4\\text{ kg}$ berada di atas lantai datar kasar dengan $\\mu_s = 0,4$ dan $\\mu_k = 0,2$. Jika balok ditarik dengan gaya horizontal $F = 20\\text{ N}$ dan $g = 10\\text{ m/s}^2$, tentukan gaya gesek yang bekerja dan percepatan balok!",
            "**JAWABAN:**",
            "**Diketahui:**",
          ]
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "$m = 4\\text{ kg}$"
              },
              {
                text: "$\\mu_s = 0,4$"
              },
              {
                text: "$\\mu_k = 0,2$"
              },
              {
                text: "$\\mu_s = 0,4$"
              },
              {
                text: "$\\mu_k = 0,2$"
              }
            ]
          }
        },
        {
          type: "paragraph",
          text: [
            "**Ditanyakan:**",
            "",
            "**Penyelesaian:**",
          ]
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "Hitung Gaya Normal:",
                equation: "N = W = m \\cdot g = 4 \\cdot 10 = 40\\text{ N}"
              },
              {
                text: "Hitung Gaya Gesek Statis Maksimum:",
                equation: "f_{s,\\text{maks}} = \\mu_s \\cdot N = 0,4 \\cdot 40 = 16\\text{ N}"
              },
              {
                text: "Bandingkan Gaya Tarik $F$ dengan $f_{s,\\text{maks}}$:",
                equation: "Karena $F = 20\\text{ N} > f_{s,\\text{maks}} = 16\\text{ N}$, balok **bergerak**."
              },
              {
                text: "Hitung Gaya Gesek Kinetis ($f_k$) dan Percepatan ($a$):",
                equation: "f_k = \\mu_k \\cdot N = 0,2 \\cdot 40 = 8\\text{ N}$$\n$$a = \\frac{\\Sigma F}{m} = \\frac{F - f_k}{m} = \\frac{20 - 8}{4} = 3\\text{ m/s}^2"
              }
            ]
          }
        },
        {
          type: "paragraph",
          text: "Jadi, gaya gesek yang bekerja adalah **$8\\text{ N}$** dan percepatan balok adalah **$3\\text{ m/s}^2$**"
        }
      ]
    },

    {
      heading: "⚠️ Fact Check & Miskonsepsi",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Gaya gesek selalu bernilai negatif dan hanya merugikan manusia. ❌",
            "Gak, gitu!",
            "Tidak selamanya! Tanpa gaya gesek statis antara telapak sepatu dan tanah, kita tidak akan bisa berjalan maju. Begitu juga ban kendaraan yang membutuhkan gesekan agar dapat mencengkeram jalanan. ✔️"
          ]
        }
      ]
    },
    {
      heading: "🌟 *Fun Fact*",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Ban mobil Formula 1 dirancang menggunakan kompon karet khusus agar menghasilkan gaya gesek yang sangat besar. Hal ini memungkinkan mobil melaju sangat cepat saat menikung tanpa kehilangan traksi."
          ]
        }
      ]
    },
    {
      heading: "✨ Inti Materi",
      blocks: [
        {
          type: "paragraph",
          text: [
            "Gaya gesek adalah gaya kontak yang arahnya berlawanan dengan gerak atau kecenderungan gerak benda. Gaya gesek terdiri atas gaya gesek statis dan gaya gesek kinetis, serta memiliki peran penting dalam berbagai aktivitas sehari-hari."
          ]
        }
      ]
    },
    { heading: "🎯 Quick Check", 
      blocks: [
        {
          type: "quickCheck",
          data: {
            questions: [
              {
                question: "Gaya gesek adalah....",
                options: [
                  "gaya yang selalu searah dengan gerak benda.",
                  "gaya kontak yang bekerja berlawanan arah dengan gerak.",
                  "gaya tarik yang diberikan oleh tali pada benda.",
                  "gaya yang bekerja tanpa adanya sentuhan.",
                  "gaya yang selalu mempercepat gerak benda."
                ],
                answerIndex: 1
              },
              {
                question: "Gaya gesek statis bekerja ketika....",
                options: [
                  "benda sudah bergerak meluncur di atas permukaan.",
                  "benda berada dalam keadaan diam",
                  "benda bergerak dengan percepatan tetap.",
                  "tidak ada gaya yang bekerja pada benda.",
                  "benda berada di ruang hampa."
                ],
                answerIndex: 1
              },
              {
                question: "Manakah pernyataan yang benar mengenai gaya gesek?",
                options: [
                  "gaya gesek selalu merugikan dalam semua keadaan.",
                  "gaya gesek selalu searah dengan gerak benda.",
                  "tanpa gaya gesek, manusia akan kesulitan berjalan dan kendaraan sulit berhenti.",
                  "gaya gesek hanya bekerja pada benda yang bergerak.",
                  "gaya gesek tidak dipengaruhi oleh gaya normal."
                ],
                answerIndex: 2
              },
              {
                question: "Sebuah balok ditarik di atas lantai kasar dengan gaya yang lebih kecil daripada gaya gesek statis maksimum $(F<f_{s,maks}). Apa yang terjadi pada balok?",
                options: [
                  "balok bergerak dengan percepatan tetap.",
                  "balok bergerak dengan kecepatan konstan.",
                  "balok tetap diam",
                  "balok bergerak karena gaya gesek menjadi nol.",
                  "balok mengalami gaya gesek kinetis."
                ],
                answerIndex: 2
              },
              {
                question: "Sebuah balok bermassa $5$ kg berada di atas lantai datar. Jika koefisien gesek kinetis $0,2$ dan percepatan gravitasi $\\text{10 m/s}^2$, maka besar gaya gesek kinetis yang bekerja pada balok adalah....",
                options: [
                  "5 N.",
                  "10 N.",
                  "20 N.",
                  "30 N",
                  "50 N."
                ],
                answerIndex: 1
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
    { blocks: [
        {
          type: "paragraph",
          text: [
            "Sekarang apakah kamu telah mengenal berbagai gaya yang sering bekerja pada benda?",
            "Namun, bagaimana cara menggambarkan semua gaya tersebut agar lebih mudah dianalisis?",
            "Pada misi berikutnya, kita akan mempelajari Diagram Gaya atau Free Body Diagram (FBD), alat penting yang digunakan untuk menganalisis gaya pada suatu benda."
          ]
        }
      ]
    }
  ]
};

export default gayaGesek;