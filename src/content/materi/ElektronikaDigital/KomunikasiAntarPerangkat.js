const komunikasiantarperangkat = {
  title: "Komunikasi Antar Perangkat",
  slug: "komunikasi antar perangkat",
  description:
    "Memahami bagaimana perangkat elektronik saling bertukar data menggunakan protokol komunikasi digital seperti UART, SPI, I²C, dan CAN.",
  chapter: "💻 Elektronika Digital & Embedded System",

  content: [
    {
      blocks: [
        {
          type: "heading",
          text: "💬 Mengapa Perangkat Elektronik Harus Berkomunikasi?",
        },
        {
          type: "paragraph",
          text: "Sebuah mikrokontroler jarang bekerja sendiri.",
        },
        {
          type: "paragraph",
          text: "Agar dapat membaca sensor, mengirim data ke layar, atau terhubung dengan modul Wi-Fi, perangkat harus saling bertukar informasi melalui jalur komunikasi digital.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🔌 Apa Itu Protokol Komunikasi?" },
        {
          type: "paragraph",
          text: "Protokol komunikasi adalah sekumpulan aturan yang mengatur cara perangkat elektronik mengirim dan menerima data.",
        },
        {
          type: "paragraph",
          text: "Dengan aturan yang sama, berbagai perangkat dari produsen yang berbeda dapat saling bekerja sama.",
        },
      ],
    },
    {
      blocks: [
        {
          type: "heading",
          text: "📨 UART (Universal Asynchronous Receiver Transmitter)",
        },
        {
          type: "paragraph",
          text: "UART merupakan protokol komunikasi sederhana yang menghubungkan dua perangkat melalui jalur pengirim (TX) dan penerima (RX).",
        },
        {
          type: "paragraph",
          text: "UART sering digunakan untuk menghubungkan mikrokontroler dengan komputer atau modul GPS.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "⚡ SPI (Serial Peripheral Interface)" },
        {
          type: "paragraph",
          text: "SPI memungkinkan pertukaran data dengan kecepatan tinggi antara mikrokontroler dan perangkat lain.",
        },
        {
          type: "paragraph",
          text: "Protokol ini banyak digunakan pada layar, kartu memori, dan sensor berkecepatan tinggi.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🔗 I²C (Inter-Integrated Circuit)" },
        {
          type: "paragraph",
          text: "I²C memungkinkan banyak perangkat berbagi dua jalur komunikasi yang sama, yaitu SDA (data) dan SCL (clock).",
        },
        {
          type: "paragraph",
          text: "Karena hanya membutuhkan sedikit kabel, I²C sangat populer untuk menghubungkan sensor, modul RTC, dan layar OLED.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🚗 CAN (Controller Area Network)" },
        {
          type: "paragraph",
          text: "CAN dirancang untuk komunikasi yang andal pada lingkungan dengan banyak perangkat.",
        },
        {
          type: "paragraph",
          text: "Protokol ini banyak digunakan pada kendaraan modern agar berbagai modul elektronik dapat saling bertukar informasi.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🌍 Contoh dalam Kehidupan" },
        {
          type: "paragraph",
          text: "Mobil modern menggunakan jaringan CAN untuk menghubungkan sistem mesin, rem ABS, airbag, dan panel instrumen.",
        },
        {
          type: "paragraph",
          text: "Pada proyek Arduino atau ESP32, sensor suhu dapat berkomunikasi melalui I²C, sedangkan modul GPS sering menggunakan UART.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "⚠️ Miskonsepsi yang Sering Terjadi" },
        {
          type: "paragraph",
          text: "Banyak orang mengira semua perangkat elektronik menggunakan jenis komunikasi yang sama.",
        },
        {
          type: "paragraph",
          text: "Padahal setiap protokol memiliki kelebihan dan dirancang untuk kebutuhan yang berbeda, seperti kecepatan, jumlah perangkat, atau keandalan komunikasi.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "📊 Ringkasan Konsep" },
        { type: "paragraph", text: "Sensor / Modul" },
        { type: "paragraph", text: "⬇️" },
        { type: "paragraph", text: "UART • SPI • I²C • CAN" },
        { type: "paragraph", text: "⬇️" },
        { type: "paragraph", text: "Mikrokontroler" },
        { type: "paragraph", text: "⬇️" },
        { type: "paragraph", text: "Pemrosesan Data" },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🔗 Hubungan dengan Materi Berikutnya" },
        {
          type: "paragraph",
          text: "Agar semua komponen dapat bekerja bersama, diperlukan papan tempat komponen dirakit dan dihubungkan.",
        },
        {
          type: "paragraph",
          text: "Pada halaman berikutnya kita akan mengenal PCB (Printed Circuit Board) dan berbagai komponen elektronika digital.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🧠 Inti Materi" },
        {
          type: "paragraph",
          text: "Protokol komunikasi memungkinkan berbagai perangkat elektronik bertukar data secara teratur dan andal.",
        },
        {
          type: "paragraph",
          text: "Pemilihan protokol bergantung pada kebutuhan sistem, seperti kecepatan, jumlah perangkat, dan lingkungan kerja.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🚀 Next Mission" },
        {
          type: "paragraph",
          text: "Bagaimana semua komponen elektronik disusun menjadi sebuah perangkat yang ringkas dan rapi?",
        },
        {
          type: "paragraph",
          text: "➡️ Selanjutnya: PCB dan Komponen Elektronik.",
        },
      ],
    },
  ],
};

export default komunikasiantarperangkat;
