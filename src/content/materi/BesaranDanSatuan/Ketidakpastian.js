const ketidakpastian = {
  title: 'Ketidakpastian Pengukuran',
  slug: 'ketidakpastian',
  description: 'Memahami keterbatasan hasil pengukuran dan cara menyatakan ketidakpastian secara sederhana.',
  chapter: "📏 Pengukuran",

  content: [
    {
      blocks: [
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
      heading: '✨ Inti Materi',
      blocks: [
        { type: "paragraph", text: 'Pengukuran yang baik bukan berarti tanpa keterbatasan. Pengukuran yang baik memahami dan menyatakan batas ketelitiannya.' },
      ]
    },

    {
      blocks: [
        { 
          type: "paragraph", 
          text: "Kalau alat memiliki batas ketelitian, apakah semua digit pada hasil pengukuran boleh ditulis sembarangan?" 
        }
      ]
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

export default ketidakpastian;
