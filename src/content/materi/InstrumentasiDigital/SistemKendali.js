const sistemkendali = {
  title: "Sistem Kendali (Control System)",
  slug: "sistem kendali",
  description:
    "Memahami bagaimana suatu sistem mengambil keputusan menggunakan data dari sensor serta mengenal sistem kendali terbuka dan tertutup.",
  chapter: "🤖 Instrumentasi Digital",

  content: [
    {
      blocks: [
        {
          type: "heading",
          text: "❄️ Mengapa AC Lebih 'Pintar' daripada Kipas Angin?",
        },
        {
          type: "paragraph",
          text: "Saat menggunakan kipas angin, kecepatan putaran tetap sama sampai kita mengubahnya secara manual.",
        },
        {
          type: "paragraph",
          text: "Berbeda dengan AC. Setelah suhu ruangan mencapai nilai yang diinginkan, AC akan mengurangi atau menghentikan kerja kompresor secara otomatis.",
        },
        {
          type: "paragraph",
          text: "Kemampuan ini dimungkinkan oleh sistem kendali.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🎯 Apa Itu Sistem Kendali?" },
        {
          type: "paragraph",
          text: "Sistem kendali adalah mekanisme yang mengatur kerja suatu perangkat agar mencapai tujuan tertentu berdasarkan aturan yang telah ditetapkan.",
        },
        {
          type: "paragraph",
          text: "Dalam sistem instrumentasi digital, keputusan dibuat berdasarkan data yang diperoleh dari sensor.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🔄 Apa Itu Feedback?" },
        {
          type: "paragraph",
          text: "Feedback atau umpan balik adalah informasi mengenai hasil kerja suatu sistem yang digunakan untuk menentukan tindakan berikutnya.",
        },
        {
          type: "paragraph",
          text: "Dengan adanya feedback, sistem dapat mengetahui apakah tujuan yang diinginkan sudah tercapai atau masih perlu penyesuaian.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "📂 Sistem Kendali Terbuka (Open Loop)" },
        {
          type: "paragraph",
          text: "Pada sistem kendali terbuka, perangkat bekerja sesuai program tanpa memeriksa hasil akhirnya.",
        },
        {
          type: "paragraph",
          text: "Karena tidak menggunakan feedback, sistem tidak mengetahui apakah tujuan yang diinginkan benar-benar tercapai.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "📂 Contoh Open Loop" },
        {
          type: "paragraph",
          text: "Kipas angin dengan tiga tingkat kecepatan merupakan contoh sederhana.",
        },
        {
          type: "paragraph",
          text: "Motor akan berputar sesuai pilihan pengguna tanpa mengetahui apakah ruangan sudah terasa sejuk.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🔁 Sistem Kendali Tertutup (Closed Loop)" },
        {
          type: "paragraph",
          text: "Pada sistem kendali tertutup, sensor terus mengukur kondisi lingkungan.",
        },
        {
          type: "paragraph",
          text: "Hasil pengukuran dikirim kembali ke mikrokontroler sebagai feedback sehingga sistem dapat menyesuaikan tindakannya secara otomatis.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "📂 Contoh Closed Loop" },
        {
          type: "paragraph",
          text: "AC menggunakan sensor suhu untuk memantau kondisi ruangan secara terus-menerus.",
        },
        {
          type: "paragraph",
          text: "Jika suhu naik, kompresor bekerja lebih keras. Jika suhu sudah sesuai, kompresor akan mengurangi kerja atau berhenti sementara.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🌍 Contoh Lain di Kehidupan" },
        {
          type: "paragraph",
          text: "Cruise control pada mobil menjaga kecepatan kendaraan.",
        },
        { type: "paragraph", text: "Drone menjaga keseimbangan saat terbang." },
        { type: "paragraph", text: "Rice cooker digital menjaga suhu nasi." },
        {
          type: "paragraph",
          text: "Smart greenhouse mengatur kelembapan tanah dan udara secara otomatis.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "⚠️ Miskonsepsi yang Sering Terjadi" },
        {
          type: "paragraph",
          text: "Banyak orang mengira semua sistem otomatis selalu menggunakan feedback.",
        },
        {
          type: "paragraph",
          text: "Padahal beberapa sistem sederhana cukup menggunakan sistem kendali terbuka karena tidak memerlukan penyesuaian terhadap perubahan kondisi.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "📊 Ringkasan Konsep" },
        { type: "paragraph", text: "Sensor" },
        { type: "paragraph", text: "⬇️" },
        { type: "paragraph", text: "Feedback" },
        { type: "paragraph", text: "⬇️" },
        { type: "paragraph", text: "Mikrokontroler" },
        { type: "paragraph", text: "⬇️" },
        { type: "paragraph", text: "Keputusan" },
        { type: "paragraph", text: "⬇️" },
        { type: "paragraph", text: "Aktuator" },
        { type: "paragraph", text: "⬇️" },
        { type: "paragraph", text: "Lingkungan" },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🔗 Hubungan dengan Materi Berikutnya" },
        {
          type: "paragraph",
          text: "Konsep sistem kendali digunakan di berbagai bidang, mulai dari rumah sakit, industri, transportasi, hingga pertanian modern.",
        },
        {
          type: "paragraph",
          text: "Pada halaman berikutnya kita akan melihat bagaimana instrumentasi digital diterapkan dalam kehidupan sehari-hari.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🧠 Inti Materi" },
        {
          type: "paragraph",
          text: "Sistem kendali memungkinkan perangkat mengambil keputusan berdasarkan data dari sensor.",
        },
        {
          type: "paragraph",
          text: "Sistem kendali tertutup menggunakan feedback sehingga mampu menyesuaikan tindakan secara otomatis ketika kondisi berubah.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🚀 Next Mission" },
        {
          type: "paragraph",
          text: "Di mana saja kita dapat menemukan sistem instrumentasi digital dalam kehidupan sehari-hari?",
        },
        {
          type: "paragraph",
          text: "➡️ Selanjutnya: Instrumentasi Digital dalam Kehidupan.",
        },
      ],
    },
  ],
};

export default sistemkendali;
