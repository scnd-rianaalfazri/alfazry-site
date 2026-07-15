const sistemtansmisidistribusi = {
  title: "Sistem Transmisi dan Distribusi Tenaga Listrik",
  slug: "sistem transmisi distribusi tenaga listrik",
  description:
    "Memahami proses penyaluran energi listrik dari pembangkit hingga ke konsumen serta peran transformator dalam meningkatkan efisiensi transmisi listrik.",
  chapter: "⚡🧲 Transformator",

  content: [
    {
      blocks: [
        { type: "heading", text: "⚡ Bagaimana Listrik Sampai ke Rumah Kita?" },
        {
          type: "paragraph",
          text: "Listrik yang digunakan di rumah berasal dari pembangkit listrik yang dapat berjarak puluhan bahkan ratusan kilometer.",
        },
        {
          type: "paragraph",
          text: "Agar energi listrik dapat dikirim dengan efisien, diperlukan sistem transmisi dan distribusi yang memanfaatkan transformator.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🏭 Tahap Pembangkitan" },
        {
          type: "paragraph",
          text: "Di pembangkit listrik, generator menghasilkan energi listrik dengan tegangan yang masih relatif rendah.",
        },
        {
          type: "paragraph",
          text: "Sebelum dikirim ke berbagai daerah, tegangan dinaikkan menggunakan transformator step-up.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "⬆️ Transmisi Tegangan Tinggi" },
        {
          type: "paragraph",
          text: "Transformator step-up menaikkan tegangan hingga ratusan kilovolt.",
        },
        {
          type: "paragraph",
          text: "Tegangan yang tinggi menyebabkan arus listrik menjadi lebih kecil sehingga rugi-rugi daya pada kabel transmisi dapat dikurangi.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🌉 Jaringan Transmisi" },
        {
          type: "paragraph",
          text: "Energi listrik kemudian dialirkan melalui jaringan transmisi tegangan tinggi menggunakan menara dan kabel penghantar.",
        },
        {
          type: "paragraph",
          text: "Jaringan ini menghubungkan pembangkit dengan gardu induk di berbagai wilayah.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "⬇️ Distribusi Tegangan Menengah dan Rendah" },
        {
          type: "paragraph",
          text: "Di gardu induk, transformator step-down menurunkan tegangan secara bertahap.",
        },
        {
          type: "paragraph",
          text: "Sebelum masuk ke rumah-rumah, tegangan kembali diturunkan menjadi sekitar 220 volt agar aman digunakan.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🏠 Listrik Sampai ke Konsumen" },
        {
          type: "paragraph",
          text: "Setelah melalui jaringan distribusi, energi listrik disalurkan ke rumah, sekolah, rumah sakit, perkantoran, dan industri melalui jaringan listrik lokal.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "📉 Mengapa Tegangan Harus Dinaikkan?" },
        {
          type: "paragraph",
          text: "Rugi-rugi daya pada kabel bergantung pada besar arus listrik.",
        },
        {
          type: "paragraph",
          text: "Dengan menaikkan tegangan, arus menjadi lebih kecil sehingga energi yang hilang selama transmisi juga menjadi jauh lebih sedikit.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "⚠️ Miskonsepsi yang Sering Terjadi" },
        {
          type: "paragraph",
          text: "Banyak siswa mengira listrik dikirim menggunakan tegangan rendah agar lebih aman.",
        },
        {
          type: "paragraph",
          text: "Padahal untuk transmisi jarak jauh digunakan tegangan sangat tinggi agar efisien. Tegangan baru diturunkan ketika listrik mendekati konsumen.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "📊 Ringkasan Konsep" },
        { type: "paragraph", text: "Generator" },
        { type: "paragraph", text: "⬇️" },
        { type: "paragraph", text: "Trafo Step-Up" },
        { type: "paragraph", text: "⬇️" },
        { type: "paragraph", text: "Transmisi Tegangan Tinggi" },
        { type: "paragraph", text: "⬇️" },
        { type: "paragraph", text: "Trafo Step-Down" },
        { type: "paragraph", text: "⬇️" },
        { type: "paragraph", text: "Distribusi" },
        { type: "paragraph", text: "⬇️" },
        { type: "paragraph", text: "Rumah" },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🔗 Hubungan dengan Materi Berikutnya" },
        {
          type: "paragraph",
          text: "Transformator tidak hanya digunakan pada jaringan listrik nasional, tetapi juga pada berbagai perangkat elektronik yang kita gunakan setiap hari.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🧠 Inti Materi" },
        {
          type: "paragraph",
          text: "Sistem transmisi dan distribusi tenaga listrik memanfaatkan transformator untuk menaikkan dan menurunkan tegangan sehingga energi listrik dapat dikirim secara efisien dan aman hingga sampai ke konsumen.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🚀 Next Mission" },
        {
          type: "paragraph",
          text: "Selain digunakan pada jaringan listrik, di mana lagi transformator dimanfaatkan dalam kehidupan sehari-hari?",
        },
        { type: "paragraph", text: "➡️ Selanjutnya: Aplikasi Transformator." },
      ],
    },
  ],
};

export default sistemtansmisidistribusi;
