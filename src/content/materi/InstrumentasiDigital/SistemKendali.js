const sistemkendali = {
  title: "Sistem Kendali (Control System)",
  slug: "sistem kendali",
  description: "Memahami bagaimana suatu sistem mengambil keputusan menggunakan data dari sensor serta mengenal sistem kendali terbuka dan tertutup.",
  chapter: "🤖 Instrumentasi Digital",

  content: [
    {
      heading: "❄️ Mengapa AC Lebih 'Pintar' daripada Kipas Angin?",
      body: [
        "Saat menggunakan kipas angin, kecepatan putaran tetap sama sampai kita mengubahnya secara manual.",
        "",
        "Berbeda dengan AC. Setelah suhu ruangan mencapai nilai yang diinginkan, AC akan mengurangi atau menghentikan kerja kompresor secara otomatis.",
        "",
        "Kemampuan ini dimungkinkan oleh sistem kendali."
      ]
    },

    {
      heading: "🎯 Apa Itu Sistem Kendali?",
      body: [
        "Sistem kendali adalah mekanisme yang mengatur kerja suatu perangkat agar mencapai tujuan tertentu berdasarkan aturan yang telah ditetapkan.",
        "",
        "Dalam sistem instrumentasi digital, keputusan dibuat berdasarkan data yang diperoleh dari sensor."
      ]
    },

    {
      heading: "🔄 Apa Itu Feedback?",
      body: [
        "Feedback atau umpan balik adalah informasi mengenai hasil kerja suatu sistem yang digunakan untuk menentukan tindakan berikutnya.",
        "",
        "Dengan adanya feedback, sistem dapat mengetahui apakah tujuan yang diinginkan sudah tercapai atau masih perlu penyesuaian."
      ]
    },

    {
      heading: "📂 Sistem Kendali Terbuka (Open Loop)",
      body: [
        "Pada sistem kendali terbuka, perangkat bekerja sesuai program tanpa memeriksa hasil akhirnya.",
        "",
        "Karena tidak menggunakan feedback, sistem tidak mengetahui apakah tujuan yang diinginkan benar-benar tercapai."
      ]
    },

    {
      heading: "📂 Contoh Open Loop",
      body: [
        "Kipas angin dengan tiga tingkat kecepatan merupakan contoh sederhana.",
        "",
        "Motor akan berputar sesuai pilihan pengguna tanpa mengetahui apakah ruangan sudah terasa sejuk."
      ]
    },

    {
      heading: "🔁 Sistem Kendali Tertutup (Closed Loop)",
      body: [
        "Pada sistem kendali tertutup, sensor terus mengukur kondisi lingkungan.",
        "",
        "Hasil pengukuran dikirim kembali ke mikrokontroler sebagai feedback sehingga sistem dapat menyesuaikan tindakannya secara otomatis."
      ]
    },

    {
      heading: "📂 Contoh Closed Loop",
      body: [
        "AC menggunakan sensor suhu untuk memantau kondisi ruangan secara terus-menerus.",
        "",
        "Jika suhu naik, kompresor bekerja lebih keras. Jika suhu sudah sesuai, kompresor akan mengurangi kerja atau berhenti sementara."
      ]
    },

    {
      heading: "🌍 Contoh Lain di Kehidupan",
      body: [
        "Cruise control pada mobil menjaga kecepatan kendaraan.",
        "Drone menjaga keseimbangan saat terbang.",
        "Rice cooker digital menjaga suhu nasi.",
        "Smart greenhouse mengatur kelembapan tanah dan udara secara otomatis."
      ]
    },

    {
      heading: "⚠️ Miskonsepsi yang Sering Terjadi",
      body: [
        "Banyak orang mengira semua sistem otomatis selalu menggunakan feedback.",
        "",
        "Padahal beberapa sistem sederhana cukup menggunakan sistem kendali terbuka karena tidak memerlukan penyesuaian terhadap perubahan kondisi."
      ]
    },

    {
      heading: "📊 Ringkasan Konsep",
      body: [
        "Sensor",
        "⬇️",
        "Feedback",
        "⬇️",
        "Mikrokontroler",
        "⬇️",
        "Keputusan",
        "⬇️",
        "Aktuator",
        "⬇️",
        "Lingkungan"
      ]
    },

    {
      heading: "🔗 Hubungan dengan Materi Berikutnya",
      body: [
        "Konsep sistem kendali digunakan di berbagai bidang, mulai dari rumah sakit, industri, transportasi, hingga pertanian modern.",
        "",
        "Pada halaman berikutnya kita akan melihat bagaimana instrumentasi digital diterapkan dalam kehidupan sehari-hari."
      ]
    },

    {
      heading: "🧠 Inti Materi",
      body: [
        "Sistem kendali memungkinkan perangkat mengambil keputusan berdasarkan data dari sensor.",
        "",
        "Sistem kendali tertutup menggunakan feedback sehingga mampu menyesuaikan tindakan secara otomatis ketika kondisi berubah."
      ]
    },

    {
      heading: "🚀 Next Mission",
      body: [
        "Di mana saja kita dapat menemukan sistem instrumentasi digital dalam kehidupan sehari-hari?",
        "",
        "➡️ Selanjutnya: Instrumentasi Digital dalam Kehidupan."
      ]
    }
  ]
}

export default sistemkendali