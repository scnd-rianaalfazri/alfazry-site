const akuisisidata = {
  title: "Akuisisi Data",
  slug: "akuisisi data",
  description:
  "Memahami bagaimana data dari sensor diperoleh, diubah menjadi data digital, lalu diproses oleh mikrokontroler.",
  chapter: "🤖 Instrumentasi Digital",

  content: [
  { heading:



    "📊 Bagaimana Mikrokontroler Membaca Sensor?", blocks: [{ type: "heading", text: "📊 Bagaimana Mikrokontroler Membaca Sensor?"
    },
    {
      type: "paragraph",
      text: "Sensor menghasilkan sinyal sebagai hasil pengukuran terhadap lingkungan."
    },
    {
      type: "paragraph",
      text: "Namun mikrokontroler tidak dapat memahami besaran fisika secara langsung. Mikrokontroler hanya dapat memproses data dalam bentuk angka digital."
    },
    {
      type: "paragraph",
      text: "Karena itu diperlukan proses yang disebut akuisisi data."
    }]

  },
  { heading:

    "📥 Apa Itu Akuisisi Data?", blocks: [{ type: "heading", text: "📥 Apa Itu Akuisisi Data?" },
    {
      type: "paragraph",
      text: "Akuisisi data adalah proses mengambil informasi dari sensor, kemudian mengubahnya menjadi data digital yang dapat diproses oleh mikrokontroler atau komputer."
    },
    {
      type: "paragraph",
      text: "Proses ini menjadi langkah pertama sebelum sistem dapat mengambil keputusan."
    }]

  },
  { heading:

    "🌡️ Dari Besaran Fisika Menjadi Angka", blocks: [{ type: "heading", text: "🌡️ Dari Besaran Fisika Menjadi Angka" },
    {
      type: "paragraph",
      text: "Ketika suhu berubah, sensor suhu menghasilkan perubahan sinyal listrik."
    },
    {
      type: "paragraph",
      text: "Sinyal tersebut kemudian dibaca oleh mikrokontroler dan diubah menjadi nilai digital, misalnya 28°C atau 35°C."
    }]

  },
  { heading:

    "🔄 Analog dan Digital", blocks: [{ type: "heading", text: "🔄 Analog dan Digital" },
    {
      type: "paragraph",
      text: "Banyak sensor menghasilkan sinyal analog, yaitu sinyal yang berubah secara kontinu."
    },
    {
      type: "paragraph",
      text: "Sementara itu, mikrokontroler bekerja menggunakan data digital yang berupa angka-angka diskret. Oleh karena itu diperlukan proses konversi dari analog ke digital."
    }]

  },
  { heading:

    "⚡ Apa Itu ADC?", blocks: [{ type: "heading", text: "⚡ Apa Itu ADC?" },
    {
      type: "paragraph",
      text: "ADC (Analog to Digital Converter) adalah komponen yang mengubah sinyal analog menjadi data digital."
    },
    {
      type: "paragraph",
      text: "Sebagian besar mikrokontroler modern sudah memiliki ADC bawaan sehingga dapat langsung membaca banyak jenis sensor analog."
    }]

  },
  { heading:

    "📈 Mengapa Data Digital Penting?", blocks: [{ type: "heading", text: "📈 Mengapa Data Digital Penting?" },
    {
      type: "paragraph",
      text: "Data digital mudah disimpan, diolah, dikirim melalui jaringan, dan dianalisis oleh komputer."
    },
    {
      type: "paragraph",
      text: "Inilah alasan hampir semua sistem elektronik modern menggunakan data digital sebagai dasar pengambilan keputusan."
    }]

  },
  { heading:

    "🌍 Contoh dalam Kehidupan", blocks: [{ type: "heading", text: "🌍 Contoh dalam Kehidupan" },
    {
      type: "paragraph",
      text: "Smartwatch mengubah detak jantung menjadi angka."
    },
    {
      type: "paragraph",
      text: "Sensor cuaca mengubah suhu dan kelembapan menjadi data digital."
    },
    {
      type: "paragraph",
      text: "Mobil modern membaca kecepatan, tekanan ban, dan putaran mesin dalam bentuk data yang diproses setiap saat."
    }]

  },
  { heading:

    "⚠️ Miskonsepsi yang Sering Terjadi", blocks: [{ type: "heading", text: "⚠️ Miskonsepsi yang Sering Terjadi" },
    {
      type: "paragraph",
      text: "Banyak orang mengira sensor langsung menghasilkan angka seperti yang terlihat di layar."
    },
    {
      type: "paragraph",
      text: "Padahal yang dihasilkan sensor biasanya berupa sinyal listrik. Angka yang kita lihat muncul setelah proses akuisisi data dan pemrosesan oleh mikrokontroler."
    }]

  },
  { heading:

    "📊 Ringkasan Konsep", blocks: [{ type: "heading", text: "📊 Ringkasan Konsep" },
    { type: "paragraph", text: "Besaran Fisika" },
    { type: "paragraph", text: "⬇️" },
    { type: "paragraph", text: "Sensor" },
    { type: "paragraph", text: "⬇️" },
    { type: "paragraph", text: "Sinyal Analog" },
    { type: "paragraph", text: "⬇️" },
    { type: "paragraph", text: "ADC" },
    { type: "paragraph", text: "⬇️" },
    { type: "paragraph", text: "Data Digital" },
    { type: "paragraph", text: "⬇️" },
    { type: "paragraph", text: "Mikrokontroler" }]

  },
  { heading:

    "🔗 Hubungan dengan Materi Berikutnya", blocks: [{ type: "heading", text: "🔗 Hubungan dengan Materi Berikutnya" },
    {
      type: "paragraph",
      text: "Setelah data berhasil dibaca, sistem harus menentukan tindakan yang tepat berdasarkan data tersebut."
    },
    {
      type: "paragraph",
      text: "Pada halaman berikutnya kita akan mempelajari sistem kendali (control system), yaitu bagaimana perangkat mengambil keputusan menggunakan data sensor."
    }]

  },
  { heading:

    "🧠 Inti Materi", blocks: [{ type: "heading", text: "🧠 Inti Materi" },
    {
      type: "paragraph",
      text: "Akuisisi data adalah proses mengubah hasil pengukuran sensor menjadi data digital yang dapat diproses oleh mikrokontroler."
    },
    {
      type: "paragraph",
      text: "Tanpa proses ini, sistem otomatis tidak dapat memahami kondisi lingkungan maupun mengambil keputusan."
    }]

  },
  { heading:

    "🚀 Next Mission", blocks: [{ type: "heading", text: "🚀 Next Mission" },
    {
      type: "paragraph",
      text: "Bagaimana sistem menentukan kapan harus menyalakan lampu, mematikan pompa, atau mengatur suhu ruangan?"
    },
    { type: "paragraph", text: "➡️ Selanjutnya: Sistem Kendali." }]

  }]

};

export default akuisisidata;