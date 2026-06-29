const carakerjagps = {
  title: "Cara Kerja GPS",
  slug: "cara kerja gps",
  description: "Memahami prinsip kerja Global Positioning System (GPS), peran satelit, serta bagaimana smartphone menentukan lokasi menggunakan sinyal dari beberapa satelit.",
  chapter: "📡 Gelombang Elektromagnetik",

  content: [
    {
      heading: "🗺️ Bagaimana Google Maps Mengetahui Lokasimu?",
      body: [
        "Saat membuka aplikasi Google Maps, titik biru yang menunjukkan lokasi kita biasanya muncul hanya dalam beberapa detik.",
        "",
        "Menariknya, tidak ada orang yang sedang mengamati posisi kita dari luar angkasa. Smartphone dapat menentukan lokasinya sendiri dengan menerima sinyal dari satelit GPS."
      ]
    },

    {
      heading: "🛰️ Apa Itu GPS?",
      body: [
        "Global Positioning System (GPS) adalah sistem navigasi berbasis satelit yang digunakan untuk menentukan posisi suatu objek di permukaan Bumi.",
        "",
        "GPS terdiri atas puluhan satelit yang mengorbit Bumi dan terus-menerus mengirimkan sinyal ke segala arah."
      ]
    },

    {
      heading: "📡 Peran Satelit GPS",
      body: [
        "Setiap satelit GPS memancarkan sinyal yang berisi informasi mengenai waktu pengiriman sinyal dan posisi satelit saat itu.",
        "",
        "Smartphone menerima sinyal tersebut, kemudian menghitung berapa lama waktu yang dibutuhkan sinyal untuk tiba."
      ]
    },

    {
      heading: "📏 Mengukur Jarak dengan Waktu",
      body: [
        "Karena sinyal GPS merambat dengan kecepatan cahaya, smartphone dapat menghitung jarak ke setiap satelit berdasarkan waktu tempuh sinyal.",
        "",
        "Semakin lama sinyal tiba, semakin jauh posisi satelit terhadap smartphone."
      ]
    },

    {
      heading: "📍 Menentukan Posisi dengan Trilaterasi",
      body: [
        "Satu satelit hanya menunjukkan bahwa kita berada di suatu permukaan berbentuk bola dengan jari-jari tertentu.",
        "",
        "Dengan dua satelit, posisi menjadi lebih terbatas. Dengan tiga satelit, lokasi dapat diperkirakan. Untuk memperoleh posisi yang lebih akurat, GPS umumnya menggunakan sedikitnya empat satelit."
      ]
    },

    {
      heading: "📱 Peran Smartphone",
      body: [
        "Smartphone tidak memancarkan sinyal ke satelit saat menentukan lokasi GPS.",
        "",
        "Perangkat hanya menerima sinyal dari beberapa satelit, kemudian menghitung posisinya menggunakan data yang diterima."
      ]
    },

    {
      heading: "🌍 Contoh Penerapan GPS",
      body: [
        "GPS digunakan pada aplikasi navigasi, transportasi online, pelacakan kendaraan, kapal, pesawat, kegiatan pendakian, survei pemetaan, hingga pertanian presisi."
      ]
    },

    {
      heading: "⚠️ Faktor yang Memengaruhi Akurasi",
      body: [
        "Akurasi GPS dapat dipengaruhi oleh gedung tinggi, pegunungan, cuaca, maupun posisi satelit.",
        "",
        "Semakin banyak satelit yang dapat diterima smartphone, umumnya semakin baik pula ketelitian posisi yang diperoleh."
      ]
    },

    {
      heading: "⚠️ Miskonsepsi yang Sering Terjadi",
      body: [
        "Banyak orang mengira satelit GPS melihat atau memotret posisi smartphone.",
        "",
        "Padahal satelit hanya mengirimkan sinyal. Smartphone-lah yang menghitung sendiri posisinya berdasarkan sinyal yang diterima."
      ]
    },

    {
      heading: "📊 Ringkasan Konsep",
      body: [
        "Satelit GPS",
        "⬇️",
        "Mengirim Sinyal",
        "⬇️",
        "Smartphone Menerima",
        "⬇️",
        "Menghitung Jarak",
        "⬇️",
        "Trilaterasi",
        "⬇️",
        "Posisi Diketahui"
      ]
    },

    {
      heading: "🔗 Hubungan dengan Materi Berikutnya",
      body: [
        "GPS memanfaatkan satelit untuk menentukan posisi. Selanjutnya kita akan mempelajari bagaimana jaringan seluler memungkinkan smartphone saling berkomunikasi melalui BTS dan internet."
      ]
    },

    {
      heading: "🧠 Inti Materi",
      body: [
        "GPS menentukan posisi dengan menghitung jarak ke beberapa satelit berdasarkan waktu tempuh sinyal.",
        "",
        "Dengan teknik trilaterasi, smartphone dapat mengetahui lokasinya secara akurat tanpa perlu mengirim sinyal ke satelit."
      ]
    },

    {
      heading: "🚀 Next Mission",
      body: [
        "Bagaimana smartphone tetap bisa menerima telepon saat berpindah dari satu kota ke kota lain?",
        "",
        "➡️ Selanjutnya: Cara Kerja Jaringan Seluler."
      ]
    }
  ]
}

export default carakerjagps