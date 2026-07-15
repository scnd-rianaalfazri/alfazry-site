const sistemotomatis = {
  title: "Bagaimana Sistem Otomatis Bekerja?",
  slug: "bagaimana sistem otomatis bekerja",
  description:
    "Memahami bagaimana sensor, mikrokontroler, dan aktuator bekerja bersama membentuk sistem otomatis yang mampu mengambil keputusan berdasarkan data.",
  chapter: "🤖 Instrumentasi Digital",

  content: [
    {
      blocks: [
        { type: "heading", text: "❄️ Bagaimana AC Menjaga Suhu Ruangan?" },
        {
          type: "paragraph",
          text: "Saat AC diatur pada suhu 24°C, kita tidak perlu terus-menerus menyalakan atau mematikannya.",
        },
        {
          type: "paragraph",
          text: "AC dapat menjaga suhu ruangan secara otomatis karena terus memantau suhu menggunakan sensor, memproses data dengan mikrokontroler, lalu mengatur kerja kompresor sebagai aktuator.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🤖 Apa Itu Sistem Otomatis?" },
        {
          type: "paragraph",
          text: "Sistem otomatis adalah sistem yang mampu menjalankan suatu tugas secara mandiri berdasarkan data yang diterima dari sensor dan aturan yang telah diprogram.",
        },
        {
          type: "paragraph",
          text: "Dengan sistem otomatis, manusia tidak perlu mengendalikan perangkat secara terus-menerus.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🔄 Siklus Kerja Sistem Otomatis" },
        {
          type: "paragraph",
          text: "Sistem otomatis bekerja melalui empat langkah utama.",
        },
        {
          type: "paragraph",
          text: "Pertama, sensor mengukur kondisi lingkungan. Kedua, mikrokontroler memproses data tersebut. Ketiga, aktuator melakukan tindakan. Terakhir, lingkungan berubah dan sensor kembali melakukan pengukuran. Siklus ini berlangsung berulang-ulang.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "📥 Input → Proses → Output" },
        {
          type: "paragraph",
          text: "Hampir semua sistem otomatis mengikuti pola yang sama.",
        },
        {
          type: "paragraph",
          text: "Input berasal dari sensor, proses dilakukan oleh mikrokontroler, sedangkan output dihasilkan oleh aktuator.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🏠 Contoh dalam Kehidupan" },
        {
          type: "paragraph",
          text: "Lampu otomatis menyala ketika ruangan gelap.",
        },
        {
          type: "paragraph",
          text: "Pompa air menyala saat tandon hampir kosong.",
        },
        {
          type: "paragraph",
          text: "Pintu otomatis terbuka ketika ada orang mendekat.",
        },
        {
          type: "paragraph",
          text: "Mesin cuci memilih siklus pencucian berdasarkan program yang telah ditentukan.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🧠 Program Menentukan Perilaku" },
        {
          type: "paragraph",
          text: "Mikrokontroler tidak mengambil keputusan secara acak.",
        },
        {
          type: "paragraph",
          text: "Semua tindakan dilakukan berdasarkan program atau algoritma yang dibuat oleh manusia. Program tersebut berisi aturan tentang apa yang harus dilakukan ketika kondisi tertentu terjadi.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "⚡ Mengapa Sistem Otomatis Efisien?" },
        {
          type: "paragraph",
          text: "Sistem otomatis dapat bekerja lebih cepat, konsisten, dan mengurangi kesalahan yang mungkin terjadi jika seluruh proses dilakukan secara manual.",
        },
        {
          type: "paragraph",
          text: "Karena itulah sistem otomatis banyak digunakan di rumah, industri, transportasi, dan layanan kesehatan.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "⚠️ Miskonsepsi yang Sering Terjadi" },
        {
          type: "paragraph",
          text: "Banyak orang mengira semua sistem otomatis menggunakan kecerdasan buatan.",
        },
        {
          type: "paragraph",
          text: "Padahal sebagian besar sistem otomatis hanya menjalankan aturan sederhana yang telah diprogram sebelumnya. AI digunakan pada sistem yang membutuhkan kemampuan belajar atau mengenali pola yang lebih kompleks.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "📊 Ringkasan Konsep" },
        { type: "paragraph", text: "Sensor" },
        { type: "paragraph", text: "⬇️ Input" },
        { type: "paragraph", text: "Mikrokontroler" },
        { type: "paragraph", text: "⬇️ Proses" },
        { type: "paragraph", text: "Aktuator" },
        { type: "paragraph", text: "⬇️ Output" },
        { type: "paragraph", text: "Lingkungan Berubah" },
        { type: "paragraph", text: "⬇️" },
        { type: "paragraph", text: "Sensor Mengukur Kembali" },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🔗 Hubungan dengan Materi Berikutnya" },
        {
          type: "paragraph",
          text: "Agar mikrokontroler dapat mengambil keputusan yang tepat, data dari sensor harus dibaca dan diubah menjadi data digital.",
        },
        { type: "paragraph", text: "Proses tersebut disebut akuisisi data." },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🧠 Inti Materi" },
        {
          type: "paragraph",
          text: "Sistem otomatis bekerja melalui siklus pengukuran, pemrosesan, dan tindakan yang berlangsung secara berulang.",
        },
        {
          type: "paragraph",
          text: "Kolaborasi antara sensor, mikrokontroler, dan aktuator memungkinkan berbagai perangkat modern bekerja tanpa pengawasan terus-menerus.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🚀 Next Mission" },
        {
          type: "paragraph",
          text: "Bagaimana mikrokontroler membaca sinyal dari sensor sebelum mengambil keputusan?",
        },
        { type: "paragraph", text: "➡️ Selanjutnya: Akuisisi Data." },
      ],
    },
  ],
};

export default sistemotomatis;
