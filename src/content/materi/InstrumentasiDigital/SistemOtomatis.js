const sistemotomatis = {
  title: "Bagaimana Sistem Otomatis Bekerja?",
  slug: "bagaimana sistem otomatis bekerja",
  description: "Memahami bagaimana sensor, mikrokontroler, dan aktuator bekerja bersama membentuk sistem otomatis yang mampu mengambil keputusan berdasarkan data.",
  chapter: "🤖 Instrumentasi Digital",
  
  content: [
    {
      heading: "❄️ Bagaimana AC Menjaga Suhu Ruangan?",
      body: [
        "Saat AC diatur pada suhu 24°C, kita tidak perlu terus-menerus menyalakan atau mematikannya.",
        "",
        "AC dapat menjaga suhu ruangan secara otomatis karena terus memantau suhu menggunakan sensor, memproses data dengan mikrokontroler, lalu mengatur kerja kompresor sebagai aktuator."
      ]
    },

    {
      heading: "🤖 Apa Itu Sistem Otomatis?",
      body: [
        "Sistem otomatis adalah sistem yang mampu menjalankan suatu tugas secara mandiri berdasarkan data yang diterima dari sensor dan aturan yang telah diprogram.",
        "",
        "Dengan sistem otomatis, manusia tidak perlu mengendalikan perangkat secara terus-menerus."
      ]
    },

    {
      heading: "🔄 Siklus Kerja Sistem Otomatis",
      body: [
        "Sistem otomatis bekerja melalui empat langkah utama.",
        "",
        "Pertama, sensor mengukur kondisi lingkungan. Kedua, mikrokontroler memproses data tersebut. Ketiga, aktuator melakukan tindakan. Terakhir, lingkungan berubah dan sensor kembali melakukan pengukuran. Siklus ini berlangsung berulang-ulang."
      ]
    },

    {
      heading: "📥 Input → Proses → Output",
      body: [
        "Hampir semua sistem otomatis mengikuti pola yang sama.",
        "",
        "Input berasal dari sensor, proses dilakukan oleh mikrokontroler, sedangkan output dihasilkan oleh aktuator."
      ]
    },

    {
      heading: "🏠 Contoh dalam Kehidupan",
      body: [
        "Lampu otomatis menyala ketika ruangan gelap.",
        "Pompa air menyala saat tandon hampir kosong.",
        "Pintu otomatis terbuka ketika ada orang mendekat.",
        "Mesin cuci memilih siklus pencucian berdasarkan program yang telah ditentukan."
      ]
    },

    {
      heading: "🧠 Program Menentukan Perilaku",
      body: [
        "Mikrokontroler tidak mengambil keputusan secara acak.",
        "",
        "Semua tindakan dilakukan berdasarkan program atau algoritma yang dibuat oleh manusia. Program tersebut berisi aturan tentang apa yang harus dilakukan ketika kondisi tertentu terjadi."
      ]
    },

    {
      heading: "⚡ Mengapa Sistem Otomatis Efisien?",
      body: [
        "Sistem otomatis dapat bekerja lebih cepat, konsisten, dan mengurangi kesalahan yang mungkin terjadi jika seluruh proses dilakukan secara manual.",
        "",
        "Karena itulah sistem otomatis banyak digunakan di rumah, industri, transportasi, dan layanan kesehatan."
      ]
    },

    {
      heading: "⚠️ Miskonsepsi yang Sering Terjadi",
      body: [
        "Banyak orang mengira semua sistem otomatis menggunakan kecerdasan buatan.",
        "",
        "Padahal sebagian besar sistem otomatis hanya menjalankan aturan sederhana yang telah diprogram sebelumnya. AI digunakan pada sistem yang membutuhkan kemampuan belajar atau mengenali pola yang lebih kompleks."
      ]
    },

    {
      heading: "📊 Ringkasan Konsep",
      body: [
        "Sensor",
        "⬇️ Input",
        "Mikrokontroler",
        "⬇️ Proses",
        "Aktuator",
        "⬇️ Output",
        "Lingkungan Berubah",
        "⬇️",
        "Sensor Mengukur Kembali"
      ]
    },

    {
      heading: "🔗 Hubungan dengan Materi Berikutnya",
      body: [
        "Agar mikrokontroler dapat mengambil keputusan yang tepat, data dari sensor harus dibaca dan diubah menjadi data digital.",
        "",
        "Proses tersebut disebut akuisisi data."
      ]
    },

    {
      heading: "🧠 Inti Materi",
      body: [
        "Sistem otomatis bekerja melalui siklus pengukuran, pemrosesan, dan tindakan yang berlangsung secara berulang.",
        "",
        "Kolaborasi antara sensor, mikrokontroler, dan aktuator memungkinkan berbagai perangkat modern bekerja tanpa pengawasan terus-menerus."
      ]
    },

    {
      heading: "🚀 Next Mission",
      body: [
        "Bagaimana mikrokontroler membaca sinyal dari sensor sebelum mengambil keputusan?",
        "",
        "➡️ Selanjutnya: Akuisisi Data."
      ]
    }
  ]
}

export default sistemotomatis