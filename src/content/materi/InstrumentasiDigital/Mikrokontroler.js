const mikrokontroler = {
  title: "Mikrokontroler",
  slug: "mikrokontroler",
  description: "Memahami pengertian mikrokontroler, cara kerjanya, serta perannya sebagai pusat kendali dalam sistem instrumentasi digital.",
  chapter: "🤖 Instrumentasi Digital",
  
  content: [
    {
      heading: "🧠 Siapa yang Mengambil Keputusan?",
      body: [
        "Sensor dapat mengetahui bahwa ruangan mulai gelap.",
        "Aktuator dapat menyalakan lampu.",
        "",
        "Namun, siapa yang memutuskan kapan lampu harus dinyalakan?",
        "",
        "Tugas tersebut dilakukan oleh mikrokontroler, yaitu komponen yang memproses data dari sensor dan menentukan tindakan yang harus dilakukan."
      ]
    },

    {
      heading: "💻 Apa Itu Mikrokontroler?",
      body: [
        "Mikrokontroler adalah sebuah komputer berukuran kecil yang dirancang untuk mengendalikan perangkat elektronik.",
        "",
        "Di dalam sebuah mikrokontroler terdapat prosesor (CPU), memori, dan pin input-output (I/O) yang memungkinkan perangkat membaca sensor serta mengendalikan aktuator."
      ]
    },

    {
      heading: "⚙️ Bagaimana Mikrokontroler Bekerja?",
      body: [
        "Mikrokontroler menerima data dari sensor melalui pin input.",
        "",
        "Selanjutnya data diproses sesuai program yang telah dibuat. Berdasarkan hasil pemrosesan tersebut, mikrokontroler mengirimkan perintah ke aktuator melalui pin output."
      ]
    },

    {
      heading: "📥 Input – Proses – Output",
      body: [
        "Cara kerja mikrokontroler dapat diringkas menjadi tiga langkah utama.",
        "",
        "Pertama, membaca data (input). Kedua, memproses data sesuai program (process). Ketiga, menghasilkan aksi melalui aktuator (output)."
      ]
    },

    {
      heading: "🔌 Apa yang Bisa Dihubungkan?",
      body: [
        "Sebuah mikrokontroler dapat dihubungkan dengan berbagai sensor, seperti sensor suhu, cahaya, ultrasonik, atau kelembapan.",
        "",
        "Mikrokontroler juga dapat mengendalikan LED, motor, buzzer, relay, layar LCD, hingga modul komunikasi seperti Wi-Fi dan Bluetooth."
      ]
    },

    {
      heading: "🛠️ Contoh Mikrokontroler Populer",
      body: [
        "Arduino Uno merupakan salah satu papan mikrokontroler yang populer untuk belajar elektronika dan pemrograman.",
        "",
        "ESP32 memiliki kemampuan yang lebih tinggi serta sudah dilengkapi Wi-Fi dan Bluetooth sehingga banyak digunakan pada proyek Internet of Things (IoT)."
      ]
    },

    {
      heading: "🌍 Contoh dalam Kehidupan",
      body: [
        "Mikrokontroler digunakan pada mesin cuci otomatis, rice cooker digital, sistem alarm, drone, robot, kendaraan modern, hingga berbagai perangkat rumah pintar."
      ]
    },

    {
      heading: "⚠️ Miskonsepsi yang Sering Terjadi",
      body: [
        "Banyak orang mengira mikrokontroler sama dengan komputer biasa.",
        "",
        "Padahal mikrokontroler dirancang untuk menjalankan tugas tertentu secara efisien, sedangkan komputer umum dapat menjalankan banyak jenis aplikasi yang lebih kompleks."
      ]
    },

    {
      heading: "📊 Ringkasan Konsep",
      body: [
        "Sensor",
        "⬇️",
        "Input",
        "⬇️",
        "Mikrokontroler",
        "⬇️",
        "Program",
        "⬇️",
        "Output",
        "⬇️",
        "Aktuator"
      ]
    },

    {
      heading: "🔗 Hubungan dengan Materi Berikutnya",
      body: [
        "Mikrokontroler dapat menjalankan berbagai program untuk membuat perangkat bekerja secara otomatis.",
        "",
        "Pada halaman berikutnya kita akan mempelajari bagaimana sebuah sistem otomatis mengambil keputusan berdasarkan data dari sensor."
      ]
    },

    {
      heading: "🧠 Inti Materi",
      body: [
        "Mikrokontroler merupakan pusat kendali yang menerima data dari sensor, memprosesnya sesuai program, lalu mengendalikan aktuator.",
        "",
        "Tanpa mikrokontroler, sensor dan aktuator tidak dapat bekerja sebagai sebuah sistem otomatis yang terintegrasi."
      ]
    },

    {
      heading: "🚀 Next Mission",
      body: [
        "Bagaimana sebuah sistem dapat mengambil keputusan sendiri berdasarkan data yang diterima?",
        "",
        "➡️ Selanjutnya: Bagaimana Sistem Otomatis Bekerja?"
      ]
    }
  ]
}

export default mikrokontroler