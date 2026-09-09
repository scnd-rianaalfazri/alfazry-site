import img1 from "/src/assets/Materi/BesaranDanSatuan/ketidakpastian-pengukuran1.png"
import img2 from "/src/assets/Materi/BesaranDanSatuan/portal-angka-penting.png"

const ketidakpastianPengukuran = {
  title: 'Ketidakpastian Pengukuran',
  slug: 'ketidakpastian',
  description: 'Memahami keterbatasan hasil pengukuran dan cara menyatakan ketidakpastian secara sederhana.',
  chapter: "📏 Pengukuran",

  content: [
    {
      blocks: [
        {
          type: "image",
          src: img1
        },
        { 
          type: "paragraph", 
          text: [
            "Sebuah pensil diukur dan hasilnya 15,2 cm.",
            "Apakah panjangnya benar-benar tepat 15,200000... cm?",
            "Tidak." 
          ]
          },
      ]
    },
    {
      heading: '❓ Pertanyaan Besar',
      blocks: [
        { 
          type: "paragraph", 
          text: "Bagaimana kita menunjukkan bahwa sebuah hasil pengukuran memiliki keterbatasan?",
        },
      ]
    },
    {
      heading: '📐 Apa Itu Ketidakpastian?',
      blocks: [
        { 
          type: "paragraph", 
          text: "Ketidakpastian pengukuran adalah perkiraan batas penyimpangan suatu hasil pengukuran terhadap nilai sebenarnya."
        },
      ]
    },
    {
      heading: '👀 Visualisasi Konsep',
      blocks: [
        { type: "paragraph", text: 'Amara membaca skala alat ukur. Skala alat tidak dapat memberikan digit tanpa batas. Kemampuan alat ikut menentukan batas ketelitian hasil.' },
      ]
    },
    {
      heading: '🛠️ Sumber Ketidakpastian',
      blocks: [
        { 
          type: "paragraph", 
          text: "Keterbatasan alat ukur, kesalahan atau keterbatasan pembacaan, faktor lingkungan, serta cara dan keterampilan pengamat dapat memengaruhi hasil." 
        },
      ]
    },
    {
      heading: '🧠 Analisis — Tunggal dan Berulang',
      blocks: [
        { 
          type: "paragraph", 
          text: "Pengukuran tunggal menghasilkan satu data. Pengukuran berulang menghasilkan beberapa data dan dapat membantu mengurangi pengaruh kesalahan acak." 
        },
      ]
    },
    {
      heading: '➕ Menuliskan Hasil Pengukuran',
      blocks: [
        { 
          type: "paragraph", 
          text: "Secara sederhana, hasil dapat ditulis sebagai nilai pengukuran ± ketidakpastian. Contoh: panjang benda = (15,2 ± 0,1) cm." 
        },
      ]
    },
    {
      heading: '🌍 Contoh di Kehidupan',
      blocks: [
        { 
          type: "paragraph", 
          text: "Saat mengukur suhu, massa, atau panjang, hasil dipengaruhi oleh benda, alat, lingkungan, dan cara pengukuran." 
        },
      ]
    },
    {
      heading: '⚠️ Miskonsepsi',
      blocks: [
        { 
          type: "paragraph", 
          text: "Ketidakpastian bukan berarti hasil pengukuran salah total. Ketidakpastian adalah cara ilmiah menyatakan batas kemampuan hasil pengukuran." 
        },
      ]
    },
    {
      heading: "🌟 *Fun Fact*",
      blocks: [
        { 
          type: "paragraph", 
          text: "Ilmuwan tidak hanya melaporkan angka hasil eksperimen, tetapi juga memperhatikan ketidakpastian yang menyertai angka tersebut." 
        },
      ]
    },
    {
      heading: "✨ Inti Materi",
      blocks: [
        { 
          type: "paragraph", 
          text: "Pengukuran yang baik bukan berarti tanpa keterbatasan. Pengukuran yang baik memahami dan menyatakan batas ketelitiannya."
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
                question: "Ketidakpastian pengukuran adalah....",
                options: [
                  "kesalahan total dalam melakukan pengukuran",
                  "perkiraan batas penyimpangan hasil pengukuran terhadap nilai sebenarnya",
                  "angka yang selalu ditambahkan pada hasil pengukuran",
                  "kesalahan yang hanya disebabkan oleh alat ukur",
                  "nilai sebenarnya dari suatu besaran"
                ],
                answerIndex: 1
              },
              {
                question: "Mengapa hasil pengukuran tidak dapat dinyatakan dengan digit tanpa batas?",
                options: [
                  "Karena semua alat ukur selalu rusak",
                  "Karena benda yang diukur selalu berubah ukuran",
                  "Karena alat ukur memiliki keterbatasan dalam ketelitian dan pembacaan skala",
                  "Karena hasil pengukuran tidak memerlukan angka",
                  "Karena satuan tidak dapat digunakan dalam pengukuran"
                ],
                answerIndex: 2
              },
              {
                question: "Hasil pengukuran panjang suatu benda ditulis sebagai $15,2 \\pm 0,1$ cm. Angka 0,1 cm menunjukkan....",
                options: [
                  "panjang sebenarnya benda",
                  "nilai utama hasil pengukuran",
                  "satuan pengukuran",
                  "ketidakpastian pengukuran",
                  "kesalahan total pengamat"
                ],
                answerIndex: 3
              },
              {
                question: "Manakah yang dapat menjadi sumber ketidakpastian dalam pengukuran?",
                options: [
                  "Keterbatasan alat ukur",
                  "Cara pembacaan skala",
                  "Faktor lingkungan",
                  "Keterampilan pengamat",
                  "Semua jawaban benar"
                ],
                answerIndex: 4
              },
              {
                question: "Pernyataan yang paling tepat mengenai ketidakpastian pengukuran adalah....",
                options: [
                  "ketidakpastian berarti hasil pengukuran pasti salah",
                  "pengukuran yang baik harus memiliki ketidakpastian nol",
                  "ketidakpastian menunjukkan batas kemampuan dan ketelitian hasil pengukuran",
                  "ketidakpastian hanya terjadi pada pengukuran panjang",
                  "ketidakpastian dapat dihilangkan sepenuhnya dengan alat yang lebih canggih"
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
          text: "Kalau alat memiliki batas ketelitian, apakah semua digit pada hasil pengukuran boleh ditulis sembarangan?" 
        },
        {
          type: "image",
          src: img2,
          link: "/materi/angka-penting",
          caption: "🚀 Kamu bisa KLIK GAMBAR INI untuk menuju portal selanjutnya",         
        }
      ]
    }
  ]
};

export default ketidakpastianPengukuran;
