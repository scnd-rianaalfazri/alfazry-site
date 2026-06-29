const komunikasiantarperangkat = {
  title: "Komunikasi Antar Perangkat",
  slug: "komunikasi antar perangkat",
  description: "Memahami bagaimana perangkat elektronik saling bertukar data menggunakan protokol komunikasi digital seperti UART, SPI, I²C, dan CAN.",
  chapter: "💻 Elektronika Digital & Embedded System",
  
  content: [
    {
      heading: "💬 Mengapa Perangkat Elektronik Harus Berkomunikasi?",
      body: [
        "Sebuah mikrokontroler jarang bekerja sendiri.",
        "",
        "Agar dapat membaca sensor, mengirim data ke layar, atau terhubung dengan modul Wi-Fi, perangkat harus saling bertukar informasi melalui jalur komunikasi digital."
      ]
    },

    {
      heading: "🔌 Apa Itu Protokol Komunikasi?",
      body: [
        "Protokol komunikasi adalah sekumpulan aturan yang mengatur cara perangkat elektronik mengirim dan menerima data.",
        "",
        "Dengan aturan yang sama, berbagai perangkat dari produsen yang berbeda dapat saling bekerja sama."
      ]
    },

    {
      heading: "📨 UART (Universal Asynchronous Receiver Transmitter)",
      body: [
        "UART merupakan protokol komunikasi sederhana yang menghubungkan dua perangkat melalui jalur pengirim (TX) dan penerima (RX).",
        "",
        "UART sering digunakan untuk menghubungkan mikrokontroler dengan komputer atau modul GPS."
      ]
    },

    {
      heading: "⚡ SPI (Serial Peripheral Interface)",
      body: [
        "SPI memungkinkan pertukaran data dengan kecepatan tinggi antara mikrokontroler dan perangkat lain.",
        "",
        "Protokol ini banyak digunakan pada layar, kartu memori, dan sensor berkecepatan tinggi."
      ]
    },

    {
      heading: "🔗 I²C (Inter-Integrated Circuit)",
      body: [
        "I²C memungkinkan banyak perangkat berbagi dua jalur komunikasi yang sama, yaitu SDA (data) dan SCL (clock).",
        "",
        "Karena hanya membutuhkan sedikit kabel, I²C sangat populer untuk menghubungkan sensor, modul RTC, dan layar OLED."
      ]
    },

    {
      heading: "🚗 CAN (Controller Area Network)",
      body: [
        "CAN dirancang untuk komunikasi yang andal pada lingkungan dengan banyak perangkat.",
        "",
        "Protokol ini banyak digunakan pada kendaraan modern agar berbagai modul elektronik dapat saling bertukar informasi."
      ]
    },

    {
      heading: "🌍 Contoh dalam Kehidupan",
      body: [
        "Mobil modern menggunakan jaringan CAN untuk menghubungkan sistem mesin, rem ABS, airbag, dan panel instrumen.",
        "",
        "Pada proyek Arduino atau ESP32, sensor suhu dapat berkomunikasi melalui I²C, sedangkan modul GPS sering menggunakan UART."
      ]
    },

    {
      heading: "⚠️ Miskonsepsi yang Sering Terjadi",
      body: [
        "Banyak orang mengira semua perangkat elektronik menggunakan jenis komunikasi yang sama.",
        "",
        "Padahal setiap protokol memiliki kelebihan dan dirancang untuk kebutuhan yang berbeda, seperti kecepatan, jumlah perangkat, atau keandalan komunikasi."
      ]
    },

    {
      heading: "📊 Ringkasan Konsep",
      body: [
        "Sensor / Modul",
        "⬇️",
        "UART • SPI • I²C • CAN",
        "⬇️",
        "Mikrokontroler",
        "⬇️",
        "Pemrosesan Data"
      ]
    },

    {
      heading: "🔗 Hubungan dengan Materi Berikutnya",
      body: [
        "Agar semua komponen dapat bekerja bersama, diperlukan papan tempat komponen dirakit dan dihubungkan.",
        "",
        "Pada halaman berikutnya kita akan mengenal PCB (Printed Circuit Board) dan berbagai komponen elektronika digital."
      ]
    },

    {
      heading: "🧠 Inti Materi",
      body: [
        "Protokol komunikasi memungkinkan berbagai perangkat elektronik bertukar data secara teratur dan andal.",
        "",
        "Pemilihan protokol bergantung pada kebutuhan sistem, seperti kecepatan, jumlah perangkat, dan lingkungan kerja."
      ]
    },

    {
      heading: "🚀 Next Mission",
      body: [
        "Bagaimana semua komponen elektronik disusun menjadi sebuah perangkat yang ringkas dan rapi?",
        "",
        "➡️ Selanjutnya: PCB dan Komponen Elektronik."
      ]
    }
  ]
}

export default komunikasiantarperangkat