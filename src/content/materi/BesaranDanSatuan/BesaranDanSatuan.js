import img1 from "/src/assets/Materi/BesaranDanSatuan/portal-sistem-internasional.png"

const besarandansatuan = {
  title: 'Besaran dan Satuan',
  slug: 'besaran-dan-satuan',
  description: 'Memahami bagaimana hasil pengamatan dinyatakan melalui besaran, nilai, dan satuan.',
  chapter: "📏 Pengukuran",

  content: [
    {
      blocks: [
        { 
          type: "paragraph", 
          text: [
            "Jika seseorang berkata, 'Tinggi pohon itu 10.' Apakah kamu langsung tahu maksudnya?",
            "Belum. Angka membutuhkan konteks dan satuan."
          ] 
        }
      ]
    },
    {
      heading: '❓ Pertanyaan Besar',
      blocks: [
        { 
          type: "paragraph", 
          text: [
            "Apa yang membuat sebuah informasi dapat disebut hasil pengukuran dalam fisika?",
          ]
        }
      ]
    },
    {
      heading: '📐 Apa Itu Besaran?',
      blocks: [
        { 
          type: "paragraph", 
          text: [
            "Besaran adalah sesuatu yang dapat diukur dan dinyatakan dengan angka serta satuan.",
            "Contohnya panjang, massa, waktu, suhu, dan kuat arus."
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
            "Amara mengukur panjang meja dan memperoleh 120 cm. 120 adalah nilai hasil pengukuran, sedangkan cm adalah satuan yang digunakan.",
            "Hasil pengukuran dapat dipahami sebagai nilai + satuan."
          ]
        }
      ]
    },
    {
      heading: '🚫 Yang Bukan Besaran',
      blocks: [
        { 
          type: "paragraph", 
          text: "Tidak semua sifat atau penilaian merupakan besaran fisika. Contoh seperti cantik, enak, dan rajin tidak memiliki pengukuran fisika dengan satuan baku yang sesuai."
        },
      ]
    },
    {
      heading: '📏 Apa Itu Satuan?',
      blocks: [
        { 
          type: "paragraph", 
          text: [
            "Satuan adalah standar pembanding yang digunakan dalam pengukuran.",
            "*Tinggi pohon = 10* belum lengkap",
            "*Tinggi pohon = 10 meter* memberikan informasi yang jelas."
          ]
        }
      ]
    },
    {
      heading: '🧠 Analisis',
      blocks: [
        { 
          type: "paragraph", 
          text: 'Bandingkan "massa tas = 2" dengan "massa tas = 2 kg". Pernyataan kedua lebih bermakna karena satuannya menunjukkan standar pengukuran.' 
        },
      ]
    },
    {
      heading: '🌍 Contoh di Kehidupan',
      blocks: [
        { 
          type: "paragraph", 
          text: 'Membeli beras → kilogram. Mengukur tinggi badan → meter atau sentimeter. Menghitung durasi → detik.' 
        },
      ]
    },
    {
      heading: "⚠️ Miskonsepsi",
      blocks: [
        { 
          type: "paragraph", 
          text: 'Besaran bukan berarti semua hal yang dapat diberi angka. Besaran fisika harus dapat diukur dan dinyatakan dengan satuan yang sesuai.' 
        },
      ]
    },
    {
      heading: "🌟 *Fun Fact*",
      blocks: [
        { 
          type: "paragraph", 
          text: "standar satuan memungkinkan hasil pengukuran dari tempat berbeda dibaca dan dibandingkan dengan cara yang sama." 
        },
      ]
    },
    {
      heading: '✨ Inti Materi',
      blocks: [
        { 
          type: "paragraph", 
          text: 'Besaran menjelaskan apa yang diukur. Nilai menunjukkan hasil pengukuran. Satuan menunjukkan standar yang digunakan.' 
        },
      ]
    },
    {
      blocks: [
        { 
          type: "paragraph", 
          text: "Kalau semua orang harus memahami hasil pengukuran yang sama, kita membutuhkan standar bersama." 
        },
        {
          type: "image",
          src: img1,
          caption: "🚀 Kamu bisa KLIK GAMBAR INI untuk menuju portal selanjutnya",
          link: "/materi/sistem-internasional"
        }
      ],
    },
    {
      heading: "📚 Referensi",
      blocks: [
        { 
          type: "paragraph", 
          text: [
            "Halliday, Resnick & Walker. Fundamentals of Physics.",
            "Serway & Jewett. Physics for Scientists and Engineers.",
            "Young & Freedman. University Physics with Modern Physics.",
            "Kemendikbudristek RI. Buku Fisika SMA/MA Kelas X."
          ]
        }
      ]
    }
  ]
};

export default besarandansatuan;
