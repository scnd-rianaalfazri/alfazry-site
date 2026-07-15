const embeddedsystem = {
  title: "Embedded System",
  slug: "embedded system",
  description:
    "Memahami konsep embedded system sebagai komputer khusus yang dirancang untuk menjalankan tugas tertentu pada berbagai perangkat elektronik modern.",
  chapter: "💻 Elektronika Digital & Embedded System",

  content: [
    {
      blocks: [
        { type: "heading", text: "🤔 Apa Bedanya Komputer dan Mesin Cuci?" },
        {
          type: "paragraph",
          text: "Komputer dapat menjalankan berbagai aplikasi seperti browser, game, editor dokumen, dan pemutar video.",
        },
        {
          type: "paragraph",
          text: "Sebaliknya, mesin cuci hanya memiliki satu tugas utama, yaitu mengatur proses pencucian pakaian.",
        },
        {
          type: "paragraph",
          text: "Meskipun demikian, mesin cuci tetap memiliki 'komputer kecil' di dalamnya yang disebut embedded system.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "💻 Apa Itu Embedded System?" },
        {
          type: "paragraph",
          text: "Embedded system adalah sistem komputer yang dirancang untuk menjalankan fungsi tertentu di dalam suatu perangkat.",
        },
        {
          type: "paragraph",
          text: "Berbeda dengan komputer umum, embedded system dibuat agar bekerja secara efisien untuk satu atau beberapa tugas khusus.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🧩 Komponen Embedded System" },
        {
          type: "paragraph",
          text: "Sebuah embedded system umumnya terdiri atas mikrokontroler atau prosesor, memori, perangkat lunak (firmware), sensor, dan aktuator.",
        },
        {
          type: "paragraph",
          text: "Seluruh komponen tersebut bekerja bersama agar perangkat dapat menjalankan fungsinya.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "⚙️ Bagaimana Embedded System Bekerja?" },
        {
          type: "paragraph",
          text: "Sensor mengumpulkan informasi dari lingkungan.",
        },
        {
          type: "paragraph",
          text: "Mikrokontroler memproses data berdasarkan program yang tersimpan di memori.",
        },
        {
          type: "paragraph",
          text: "Selanjutnya, aktuator menjalankan tindakan sesuai keputusan yang dihasilkan.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🏠 Embedded System di Sekitar Kita" },
        { type: "paragraph", text: "Rice cooker digital menjaga suhu nasi." },
        { type: "paragraph", text: "Mesin cuci mengatur proses pencucian." },
        { type: "paragraph", text: "AC menjaga suhu ruangan." },
        {
          type: "paragraph",
          text: "Kamera digital mengatur fokus secara otomatis.",
        },
        {
          type: "paragraph",
          text: "Smartwatch memantau aktivitas dan kesehatan pengguna.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🚗 Embedded System pada Kendaraan" },
        {
          type: "paragraph",
          text: "Mobil modern memiliki banyak embedded system yang mengatur mesin, rem ABS, airbag, sistem navigasi, hingga hiburan.",
        },
        {
          type: "paragraph",
          text: "Setiap sistem memiliki tugas khusus dan bekerja secara bersamaan.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🤖 Embedded System dan Robot" },
        {
          type: "paragraph",
          text: "Pada robot, embedded system menjadi pusat kendali yang menghubungkan sensor dengan motor atau aktuator lainnya.",
        },
        {
          type: "paragraph",
          text: "Tanpa embedded system, robot tidak dapat mengambil keputusan maupun bergerak secara otomatis.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "⚠️ Miskonsepsi yang Sering Terjadi" },
        {
          type: "paragraph",
          text: "Banyak orang mengira embedded system harus memiliki layar seperti komputer.",
        },
        {
          type: "paragraph",
          text: "Padahal sebagian besar embedded system bekerja tanpa layar dan bahkan tanpa disadari oleh penggunanya.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "📊 Ringkasan Konsep" },
        { type: "paragraph", text: "Sensor" },
        { type: "paragraph", text: "⬇️" },
        { type: "paragraph", text: "Embedded System" },
        { type: "paragraph", text: "⬇️" },
        { type: "paragraph", text: "Program (Firmware)" },
        { type: "paragraph", text: "⬇️" },
        { type: "paragraph", text: "Aktuator" },
        { type: "paragraph", text: "⬇️" },
        { type: "paragraph", text: "Perangkat Bekerja" },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🔗 Hubungan dengan Materi Berikutnya" },
        {
          type: "paragraph",
          text: "Sebuah embedded system jarang bekerja sendirian.",
        },
        {
          type: "paragraph",
          text: "Agar dapat bertukar data dengan sensor, layar, atau perangkat lain, diperlukan protokol komunikasi digital.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🧠 Inti Materi" },
        {
          type: "paragraph",
          text: "Embedded system adalah komputer khusus yang dirancang untuk menjalankan fungsi tertentu pada suatu perangkat.",
        },
        {
          type: "paragraph",
          text: "Konsep ini menjadi dasar berbagai teknologi modern, mulai dari peralatan rumah tangga hingga kendaraan dan robot.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🚀 Next Mission" },
        {
          type: "paragraph",
          text: "Bagaimana mikrokontroler dapat 'berbicara' dengan sensor, layar, atau modul lainnya?",
        },
        {
          type: "paragraph",
          text: "➡️ Selanjutnya: Komunikasi Antar Perangkat (UART, SPI, dan I²C).",
        },
      ],
    },
  ],
};

export default embeddedsystem;
