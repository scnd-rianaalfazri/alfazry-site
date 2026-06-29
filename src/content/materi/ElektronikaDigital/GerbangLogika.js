const gerbanglogika = {
  title: "Gerbang Logika (Logic Gates)",
  slug: "gerbang logika",
  description: "Memahami konsep gerbang logika sebagai dasar pengambilan keputusan pada sistem digital serta mengenal gerbang AND, OR, NOT, NAND, NOR, XOR, dan XNOR.",
  chapter: "💻 Elektronika Digital & Embedded System",
  
  content: [
    {
      heading: "🤔 Bagaimana Komputer Mengambil Keputusan?",
      body: [
        "Saat kamu memasukkan PIN smartphone, perangkat dapat langsung menentukan apakah PIN tersebut benar atau salah.",
        "",
        "Komputer melakukan hal itu menggunakan rangkaian sederhana yang disebut gerbang logika (logic gates).",
        "",
        "Gerbang logika menjadi dasar cara komputer 'berpikir' dalam bentuk logika digital."
      ]
    },

    {
      heading: "🚪 Apa Itu Gerbang Logika?",
      body: [
        "Gerbang logika adalah rangkaian elektronik yang menerima satu atau lebih masukan (input), kemudian menghasilkan keluaran (output) berdasarkan aturan logika tertentu.",
        "",
        "Masukan dan keluaran dinyatakan dalam bentuk logika 0 dan 1."
      ]
    },

    {
      heading: "✅ Gerbang AND",
      body: [
        "Gerbang AND menghasilkan keluaran 1 hanya jika semua input bernilai 1.",
        "",
        "Jika salah satu input bernilai 0, maka keluarannya tetap 0."
      ]
    },

    {
      heading: "✅ Gerbang OR",
      body: [
        "Gerbang OR menghasilkan keluaran 1 jika minimal satu input bernilai 1.",
        "",
        "Keluaran hanya bernilai 0 jika semua input bernilai 0."
      ]
    },

    {
      heading: "🔄 Gerbang NOT",
      body: [
        "Gerbang NOT hanya memiliki satu input.",
        "",
        "Gerbang ini membalik logika: 1 menjadi 0 dan 0 menjadi 1."
      ]
    },

    {
      heading: "⚡ Gerbang Lainnya",
      body: [
        "Selain AND, OR, dan NOT, terdapat gerbang NAND, NOR, XOR, dan XNOR.",
        "",
        "Gerbang-gerbang ini merupakan kombinasi atau pengembangan dari gerbang dasar dan banyak digunakan dalam prosesor serta rangkaian digital modern."
      ]
    },

    {
      heading: "🌍 Contoh dalam Kehidupan",
      body: [
        "Alarm keamanan dapat menggunakan logika AND, misalnya alarm aktif jika pintu tertutup DAN sistem keamanan diaktifkan.",
        "",
        "Lampu darurat dapat menggunakan logika OR, misalnya menyala jika tombol manual ditekan ATAU sensor mendeteksi keadaan darurat."
      ]
    },

    {
      heading: "💻 Mengapa Gerbang Logika Penting?",
      body: [
        "Semua operasi pada komputer, kalkulator, smartphone, dan mikrokontroler pada akhirnya dibangun dari jutaan hingga miliaran gerbang logika yang bekerja sangat cepat."
      ]
    },

    {
      heading: "⚠️ Miskonsepsi yang Sering Terjadi",
      body: [
        "Banyak orang mengira prosesor melakukan perhitungan menggunakan rumus yang rumit.",
        "",
        "Padahal di tingkat paling dasar, prosesor hanya mengolah kombinasi logika 0 dan 1 melalui gerbang logika."
      ]
    },

    {
      heading: "📊 Ringkasan Konsep",
      body: [
        "Input (0/1)",
        "⬇️",
        "Gerbang Logika",
        "⬇️",
        "Output (0/1)",
        "⬇️",
        "Keputusan Digital"
      ]
    },

    {
      heading: "🔗 Hubungan dengan Materi Berikutnya",
      body: [
        "Satu gerbang logika hanya dapat melakukan operasi sederhana.",
        "",
        "Pada halaman berikutnya kita akan mempelajari bagaimana beberapa gerbang logika digabungkan menjadi rangkaian logika yang mampu melakukan tugas lebih kompleks."
      ]
    },

    {
      heading: "🧠 Inti Materi",
      body: [
        "Gerbang logika merupakan dasar pengambilan keputusan dalam sistem digital.",
        "",
        "Melalui kombinasi gerbang logika, komputer dapat melakukan perhitungan, menyimpan data, dan menjalankan berbagai aplikasi modern."
      ]
    },

    {
      heading: "🚀 Next Mission",
      body: [
        "Bagaimana jika beberapa gerbang logika digabungkan menjadi satu rangkaian yang lebih kompleks?",
        "",
        "➡️ Selanjutnya: Rangkaian Logika."
      ]
    }
  ]
}

export default gerbanglogika