const transformator = {
  title: "Transformator",
  slug: "transformator",
  description:
    "Memahami prinsip kerja transformator, jenis-jenis transformator, serta perannya dalam sistem transmisi dan distribusi tenaga listrik.",
  chapter: "⚡ Listrik Dinamis: Arus Bolak Balik",

  content: [
    {
      blocks: [
        { type: "heading", text: "⚡ Mengapa Tegangan Listrik Harus Diubah?" },
        {
          type: "paragraph",
          text: "Listrik yang dihasilkan generator tidak selalu memiliki tegangan yang sesuai untuk ditransmisikan atau digunakan langsung oleh peralatan listrik.",
        },
        {
          type: "paragraph",
          text: "Agar penyaluran energi listrik menjadi lebih efisien, tegangan perlu dinaikkan atau diturunkan menggunakan transformator.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "📍 Apa Itu Transformator?" },
        {
          type: "paragraph",
          text: "Transformator atau trafo adalah alat yang digunakan untuk menaikkan atau menurunkan tegangan arus bolak-balik (AC) tanpa mengubah frekuensinya secara signifikan.",
        },
        {
          type: "paragraph",
          text: "Transformator bekerja berdasarkan prinsip induksi elektromagnetik.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🧲 Prinsip Kerja Transformator" },
        {
          type: "paragraph",
          text: "Ketika arus bolak-balik mengalir pada kumparan primer, terbentuk medan magnet yang berubah terhadap waktu.",
        },
        {
          type: "paragraph",
          text: "Perubahan medan magnet tersebut menginduksi gaya gerak listrik (GGL) pada kumparan sekunder sehingga muncul tegangan listrik pada sisi keluaran.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "⚙️ Bagian-Bagian Transformator" },
        {
          type: "paragraph",
          text: "Transformator terdiri atas tiga bagian utama.",
        },
        { type: "paragraph", text: "• Kumparan primer." },
        { type: "paragraph", text: "• Kumparan sekunder." },
        {
          type: "paragraph",
          text: "• Inti besi lunak yang memperkuat jalur fluks magnet.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "📈 Transformator Step-Up" },
        {
          type: "paragraph",
          text: "Transformator step-up digunakan untuk menaikkan tegangan.",
        },
        {
          type: "paragraph",
          text: "Jumlah lilitan kumparan sekunder lebih banyak daripada kumparan primer sehingga tegangan keluaran menjadi lebih besar.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "📉 Transformator Step-Down" },
        {
          type: "paragraph",
          text: "Transformator step-down digunakan untuk menurunkan tegangan.",
        },
        {
          type: "paragraph",
          text: "Jumlah lilitan kumparan sekunder lebih sedikit daripada kumparan primer sehingga tegangan keluaran menjadi lebih kecil.",
        },
      ],
    },
    {
      blocks: [
        {
          type: "heading",
          text: "🏭 Peran Transformator dalam Sistem Kelistrikan",
        },
        {
          type: "paragraph",
          text: "Di pembangkit listrik, transformator step-up menaikkan tegangan hingga ratusan kilovolt sebelum listrik dikirim melalui jaringan transmisi.",
        },
        {
          type: "paragraph",
          text: "Menjelang sampai ke konsumen, transformator step-down menurunkan kembali tegangan agar aman digunakan di rumah dan industri.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🌍 Penerapan dalam Kehidupan" },
        {
          type: "paragraph",
          text: "Transformator digunakan pada gardu induk, adaptor atau charger, catu daya perangkat elektronik, sistem audio, hingga peralatan industri.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "⚠️ Miskonsepsi yang Sering Terjadi" },
        {
          type: "paragraph",
          text: "Banyak siswa mengira transformator dapat digunakan pada arus searah (DC).",
        },
        {
          type: "paragraph",
          text: "Padahal transformator memerlukan perubahan medan magnet yang terjadi secara terus-menerus. Oleh karena itu, transformator bekerja pada arus bolak-balik (AC).",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "📊 Ringkasan Konsep" },
        { type: "paragraph", text: "Arus AC" },
        { type: "paragraph", text: "⬇️" },
        { type: "paragraph", text: "Medan Magnet Berubah" },
        { type: "paragraph", text: "⬇️" },
        { type: "paragraph", text: "Induksi Elektromagnetik" },
        { type: "paragraph", text: "⬇️" },
        { type: "paragraph", text: "Tegangan Berubah" },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🔗 Hubungan dengan Materi Berikutnya" },
        {
          type: "paragraph",
          text: "Setelah memahami cara kerja transformator, kita akan mempelajari bagaimana tegangan tinggi dimanfaatkan untuk mengirim energi listrik ke berbagai daerah melalui jaringan transmisi.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🧠 Inti Materi" },
        {
          type: "paragraph",
          text: "Transformator mengubah besar tegangan arus bolak-balik melalui proses induksi elektromagnetik.",
        },
        {
          type: "paragraph",
          text: "Peralatan ini memungkinkan energi listrik ditransmisikan secara lebih efisien dan didistribusikan dengan aman kepada konsumen.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🚀 Next Mission" },
        {
          type: "paragraph",
          text: "Mengapa listrik dikirim menggunakan tegangan yang sangat tinggi sebelum sampai ke rumah kita?",
        },
        {
          type: "paragraph",
          text: "➡️ Selanjutnya: Transmisi Energi Listrik.",
        },
      ],
    },
  ],
};

export default transformator;
