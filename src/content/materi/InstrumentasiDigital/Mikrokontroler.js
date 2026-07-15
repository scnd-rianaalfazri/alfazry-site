const mikrokontroler = {
  title: "Mikrokontroler",
  slug: "mikrokontroler",
  description:
  "Memahami pengertian mikrokontroler, cara kerjanya, serta perannya sebagai pusat kendali dalam sistem instrumentasi digital.",
  chapter: "🤖 Instrumentasi Digital",

  content: [
  { heading:

    "🧠 Siapa yang Mengambil Keputusan?", blocks: [{ type: "heading", text: "🧠 Siapa yang Mengambil Keputusan?" },
    {
      type: "paragraph",
      text: "Sensor dapat mengetahui bahwa ruangan mulai gelap."
    },
    { type: "paragraph", text: "Aktuator dapat menyalakan lampu." },
    {
      type: "paragraph",
      text: "Namun, siapa yang memutuskan kapan lampu harus dinyalakan?"
    },
    {
      type: "paragraph",
      text: "Tugas tersebut dilakukan oleh mikrokontroler, yaitu komponen yang memproses data dari sensor dan menentukan tindakan yang harus dilakukan."
    }]

  },
  { heading:

    "💻 Apa Itu Mikrokontroler?", blocks: [{ type: "heading", text: "💻 Apa Itu Mikrokontroler?" },
    {
      type: "paragraph",
      text: "Mikrokontroler adalah sebuah komputer berukuran kecil yang dirancang untuk mengendalikan perangkat elektronik."
    },
    {
      type: "paragraph",
      text: "Di dalam sebuah mikrokontroler terdapat prosesor (CPU), memori, dan pin input-output (I/O) yang memungkinkan perangkat membaca sensor serta mengendalikan aktuator."
    }]

  },
  { heading:

    "⚙️ Bagaimana Mikrokontroler Bekerja?", blocks: [{ type: "heading", text: "⚙️ Bagaimana Mikrokontroler Bekerja?" },
    {
      type: "paragraph",
      text: "Mikrokontroler menerima data dari sensor melalui pin input."
    },
    {
      type: "paragraph",
      text: "Selanjutnya data diproses sesuai program yang telah dibuat. Berdasarkan hasil pemrosesan tersebut, mikrokontroler mengirimkan perintah ke aktuator melalui pin output."
    }]

  },
  { heading:

    "📥 Input – Proses – Output", blocks: [{ type: "heading", text: "📥 Input – Proses – Output" },
    {
      type: "paragraph",
      text: "Cara kerja mikrokontroler dapat diringkas menjadi tiga langkah utama."
    },
    {
      type: "paragraph",
      text: "Pertama, membaca data (input). Kedua, memproses data sesuai program (process). Ketiga, menghasilkan aksi melalui aktuator (output)."
    }]

  },
  { heading:

    "🔌 Apa yang Bisa Dihubungkan?", blocks: [{ type: "heading", text: "🔌 Apa yang Bisa Dihubungkan?" },
    {
      type: "paragraph",
      text: "Sebuah mikrokontroler dapat dihubungkan dengan berbagai sensor, seperti sensor suhu, cahaya, ultrasonik, atau kelembapan."
    },
    {
      type: "paragraph",
      text: "Mikrokontroler juga dapat mengendalikan LED, motor, buzzer, relay, layar LCD, hingga modul komunikasi seperti Wi-Fi dan Bluetooth."
    }]

  },
  { heading:

    "🛠️ Contoh Mikrokontroler Populer", blocks: [{ type: "heading", text: "🛠️ Contoh Mikrokontroler Populer" },
    {
      type: "paragraph",
      text: "Arduino Uno merupakan salah satu papan mikrokontroler yang populer untuk belajar elektronika dan pemrograman."
    },
    {
      type: "paragraph",
      text: "ESP32 memiliki kemampuan yang lebih tinggi serta sudah dilengkapi Wi-Fi dan Bluetooth sehingga banyak digunakan pada proyek Internet of Things (IoT)."
    }]

  },
  { heading:

    "🌍 Contoh dalam Kehidupan", blocks: [{ type: "heading", text: "🌍 Contoh dalam Kehidupan" },
    {
      type: "paragraph",
      text: "Mikrokontroler digunakan pada mesin cuci otomatis, rice cooker digital, sistem alarm, drone, robot, kendaraan modern, hingga berbagai perangkat rumah pintar."
    }]

  },
  { heading:

    "⚠️ Miskonsepsi yang Sering Terjadi", blocks: [{ type: "heading", text: "⚠️ Miskonsepsi yang Sering Terjadi" },
    {
      type: "paragraph",
      text: "Banyak orang mengira mikrokontroler sama dengan komputer biasa."
    },
    {
      type: "paragraph",
      text: "Padahal mikrokontroler dirancang untuk menjalankan tugas tertentu secara efisien, sedangkan komputer umum dapat menjalankan banyak jenis aplikasi yang lebih kompleks."
    }]

  },
  { heading:

    "📊 Ringkasan Konsep", blocks: [{ type: "heading", text: "📊 Ringkasan Konsep" },
    { type: "paragraph", text: "Sensor" },
    { type: "paragraph", text: "⬇️" },
    { type: "paragraph", text: "Input" },
    { type: "paragraph", text: "⬇️" },
    { type: "paragraph", text: "Mikrokontroler" },
    { type: "paragraph", text: "⬇️" },
    { type: "paragraph", text: "Program" },
    { type: "paragraph", text: "⬇️" },
    { type: "paragraph", text: "Output" },
    { type: "paragraph", text: "⬇️" },
    { type: "paragraph", text: "Aktuator" }]

  },
  { heading:

    "🔗 Hubungan dengan Materi Berikutnya", blocks: [{ type: "heading", text: "🔗 Hubungan dengan Materi Berikutnya" },
    {
      type: "paragraph",
      text: "Mikrokontroler dapat menjalankan berbagai program untuk membuat perangkat bekerja secara otomatis."
    },
    {
      type: "paragraph",
      text: "Pada halaman berikutnya kita akan mempelajari bagaimana sebuah sistem otomatis mengambil keputusan berdasarkan data dari sensor."
    }]

  },
  { heading:

    "🧠 Inti Materi", blocks: [{ type: "heading", text: "🧠 Inti Materi" },
    {
      type: "paragraph",
      text: "Mikrokontroler merupakan pusat kendali yang menerima data dari sensor, memprosesnya sesuai program, lalu mengendalikan aktuator."
    },
    {
      type: "paragraph",
      text: "Tanpa mikrokontroler, sensor dan aktuator tidak dapat bekerja sebagai sebuah sistem otomatis yang terintegrasi."
    }]

  },
  { heading:

    "🚀 Next Mission", blocks: [{ type: "heading", text: "🚀 Next Mission" },
    {
      type: "paragraph",
      text: "Bagaimana sebuah sistem dapat mengambil keputusan sendiri berdasarkan data yang diterima?"
    },
    {
      type: "paragraph",
      text: "➡️ Selanjutnya: Bagaimana Sistem Otomatis Bekerja?"
    }]

  }]

};

export default mikrokontroler;