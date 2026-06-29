const akuisisidata = {
  title: "Akuisisi Data",
  slug: "akuisisi data",
  description: "Memahami bagaimana data dari sensor diperoleh, diubah menjadi data digital, lalu diproses oleh mikrokontroler.",
  chapter: "🤖 Instrumentasi Digital",

  content: [
    {
      heading: "📊 Bagaimana Mikrokontroler Membaca Sensor?",
      body: [
        "Sensor menghasilkan sinyal sebagai hasil pengukuran terhadap lingkungan.",
        "",
        "Namun mikrokontroler tidak dapat memahami besaran fisika secara langsung. Mikrokontroler hanya dapat memproses data dalam bentuk angka digital.",
        "",
        "Karena itu diperlukan proses yang disebut akuisisi data."
      ]
    },

    {
      heading: "📥 Apa Itu Akuisisi Data?",
      body: [
        "Akuisisi data adalah proses mengambil informasi dari sensor, kemudian mengubahnya menjadi data digital yang dapat diproses oleh mikrokontroler atau komputer.",
        "",
        "Proses ini menjadi langkah pertama sebelum sistem dapat mengambil keputusan."
      ]
    },

    {
      heading: "🌡️ Dari Besaran Fisika Menjadi Angka",
      body: [
        "Ketika suhu berubah, sensor suhu menghasilkan perubahan sinyal listrik.",
        "",
        "Sinyal tersebut kemudian dibaca oleh mikrokontroler dan diubah menjadi nilai digital, misalnya 28°C atau 35°C."
      ]
    },

    {
      heading: "🔄 Analog dan Digital",
      body: [
        "Banyak sensor menghasilkan sinyal analog, yaitu sinyal yang berubah secara kontinu.",
        "",
        "Sementara itu, mikrokontroler bekerja menggunakan data digital yang berupa angka-angka diskret. Oleh karena itu diperlukan proses konversi dari analog ke digital."
      ]
    },

    {
      heading: "⚡ Apa Itu ADC?",
      body: [
        "ADC (Analog to Digital Converter) adalah komponen yang mengubah sinyal analog menjadi data digital.",
        "",
        "Sebagian besar mikrokontroler modern sudah memiliki ADC bawaan sehingga dapat langsung membaca banyak jenis sensor analog."
      ]
    },

    {
      heading: "📈 Mengapa Data Digital Penting?",
      body: [
        "Data digital mudah disimpan, diolah, dikirim melalui jaringan, dan dianalisis oleh komputer.",
        "",
        "Inilah alasan hampir semua sistem elektronik modern menggunakan data digital sebagai dasar pengambilan keputusan."
      ]
    },

    {
      heading: "🌍 Contoh dalam Kehidupan",
      body: [
        "Smartwatch mengubah detak jantung menjadi angka.",
        "Sensor cuaca mengubah suhu dan kelembapan menjadi data digital.",
        "Mobil modern membaca kecepatan, tekanan ban, dan putaran mesin dalam bentuk data yang diproses setiap saat."
      ]
    },

    {
      heading: "⚠️ Miskonsepsi yang Sering Terjadi",
      body: [
        "Banyak orang mengira sensor langsung menghasilkan angka seperti yang terlihat di layar.",
        "",
        "Padahal yang dihasilkan sensor biasanya berupa sinyal listrik. Angka yang kita lihat muncul setelah proses akuisisi data dan pemrosesan oleh mikrokontroler."
      ]
    },

    {
      heading: "📊 Ringkasan Konsep",
      body: [
        "Besaran Fisika",
        "⬇️",
        "Sensor",
        "⬇️",
        "Sinyal Analog",
        "⬇️",
        "ADC",
        "⬇️",
        "Data Digital",
        "⬇️",
        "Mikrokontroler"
      ]
    },

    {
      heading: "🔗 Hubungan dengan Materi Berikutnya",
      body: [
        "Setelah data berhasil dibaca, sistem harus menentukan tindakan yang tepat berdasarkan data tersebut.",
        "",
        "Pada halaman berikutnya kita akan mempelajari sistem kendali (control system), yaitu bagaimana perangkat mengambil keputusan menggunakan data sensor."
      ]
    },

    {
      heading: "🧠 Inti Materi",
      body: [
        "Akuisisi data adalah proses mengubah hasil pengukuran sensor menjadi data digital yang dapat diproses oleh mikrokontroler.",
        "",
        "Tanpa proses ini, sistem otomatis tidak dapat memahami kondisi lingkungan maupun mengambil keputusan."
      ]
    },

    {
      heading: "🚀 Next Mission",
      body: [
        "Bagaimana sistem menentukan kapan harus menyalakan lampu, mematikan pompa, atau mengatur suhu ruangan?",
        "",
        "➡️ Selanjutnya: Sistem Kendali."
      ]
    }
  ]
}

export default akuisisidata