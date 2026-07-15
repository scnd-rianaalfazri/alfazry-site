const memoridigital = {
  title: "Memori Digital",
  slug: "memori-digital",
  description:
    "Memahami bagaimana komputer menyimpan informasi menggunakan memori digital serta mengenal perbedaan RAM, ROM, dan media penyimpanan.",
  chapter: "💻 Elektronika Digital & Embedded System",

  content: [
    {
      blocks: [
        { type: "heading", text: "🧠 Mengapa Komputer Bisa Mengingat?" },
        {
          type: "paragraph",
          text: "Saat kamu menyimpan tugas sekolah atau menginstal aplikasi, komputer dapat mengingat data tersebut bahkan setelah dimatikan.",
        },
        {
          type: "paragraph",
          text: "Kemampuan ini dimungkinkan oleh memori digital yang menyimpan data dalam bentuk biner (0 dan 1).",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "💾 Apa Itu Memori Digital?" },
        {
          type: "paragraph",
          text: "Memori digital adalah komponen yang digunakan untuk menyimpan data dan instruksi agar dapat digunakan kembali oleh komputer atau perangkat elektronik.",
        },
        {
          type: "paragraph",
          text: "Semua data disimpan sebagai kombinasi bit (0 dan 1).",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "⚡ RAM (Random Access Memory)" },
        {
          type: "paragraph",
          text: "RAM adalah memori sementara yang digunakan saat komputer sedang bekerja.",
        },
        {
          type: "paragraph",
          text: "Data pada RAM akan hilang ketika perangkat dimatikan, sehingga RAM disebut memori volatil.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "📀 ROM (Read Only Memory)" },
        {
          type: "paragraph",
          text: "ROM menyimpan program penting yang diperlukan ketika perangkat pertama kali dinyalakan.",
        },
        {
          type: "paragraph",
          text: "Isi ROM tetap tersimpan meskipun listrik dimatikan, sehingga disebut memori non-volatil.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "💽 Media Penyimpanan" },
        {
          type: "paragraph",
          text: "Selain RAM dan ROM, perangkat juga memiliki media penyimpanan seperti SSD, HDD, kartu memori, dan flash drive.",
        },
        {
          type: "paragraph",
          text: "Media ini digunakan untuk menyimpan data dalam jangka panjang.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🔄 Bagaimana Data Disimpan?" },
        {
          type: "paragraph",
          text: "Data direpresentasikan sebagai deretan bit.",
        },
        {
          type: "paragraph",
          text: "Kombinasi bit tersebut disimpan di dalam sel-sel memori dan dapat dibaca kembali ketika diperlukan.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🌍 Contoh dalam Kehidupan" },
        {
          type: "paragraph",
          text: "Saat kamu membuka aplikasi, data dibaca dari SSD ke RAM agar dapat diproses lebih cepat oleh prosesor.",
        },
        {
          type: "paragraph",
          text: "Ketika aplikasi ditutup, hasil pekerjaan dapat disimpan kembali ke media penyimpanan.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "⚠️ Miskonsepsi yang Sering Terjadi" },
        {
          type: "paragraph",
          text: "Banyak orang menganggap RAM adalah tempat penyimpanan file.",
        },
        {
          type: "paragraph",
          text: "Padahal RAM hanya digunakan sebagai tempat kerja sementara. File tetap disimpan di SSD, HDD, atau media penyimpanan lainnya.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "📊 Ringkasan Konsep" },
        { type: "paragraph", text: "Bit (0 dan 1)" },
        { type: "paragraph", text: "⬇️" },
        { type: "paragraph", text: "Memori Digital" },
        { type: "paragraph", text: "⬇️" },
        { type: "paragraph", text: "RAM" },
        { type: "paragraph", text: "⬇️" },
        { type: "paragraph", text: "ROM" },
        { type: "paragraph", text: "⬇️" },
        { type: "paragraph", text: "SSD / HDD" },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🔗 Hubungan dengan Materi Berikutnya" },
        {
          type: "paragraph",
          text: "Setelah data dapat diproses dan disimpan, perangkat digital perlu berkomunikasi dengan komponen lain.",
        },
        {
          type: "paragraph",
          text: "Pada halaman berikutnya kita akan mempelajari bagaimana mikrokontroler dan perangkat elektronik saling bertukar data melalui berbagai protokol komunikasi.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🧠 Inti Materi" },
        {
          type: "paragraph",
          text: "Memori digital memungkinkan komputer menyimpan data dan instruksi.",
        },
        {
          type: "paragraph",
          text: "RAM digunakan sebagai memori kerja sementara, sedangkan ROM dan media penyimpanan digunakan untuk menyimpan data dalam jangka panjang.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🚀 Next Mission" },
        {
          type: "paragraph",
          text: "Bagaimana dua perangkat elektronik dapat saling bertukar informasi?",
        },
        {
          type: "paragraph",
          text: "➡️ Selanjutnya: Komunikasi Antar Perangkat.",
        },
      ],
    },
  ],
};

export default memoridigital;
