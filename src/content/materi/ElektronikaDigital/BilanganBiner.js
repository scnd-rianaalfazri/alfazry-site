const bilanganbiner = {
  title: "Bilangan Biner",
  slug: "bilangan biner",
  description:
    "Memahami konsep bilangan biner sebagai bahasa dasar komputer dan bagaimana data direpresentasikan menggunakan angka 0 dan 1.",
  chapter: "💻 Elektronika Digital & Embedded System",

  content: [
    {
      blocks: [
        {
          type: "heading",
          text: "💻 Mengapa Komputer Hanya Mengenal 0 dan 1?",
        },
        {
          type: "paragraph",
          text: "Komputer tidak memahami huruf, gambar, musik, maupun video secara langsung.",
        },
        {
          type: "paragraph",
          text: "Semua informasi tersebut diubah menjadi kombinasi angka 0 dan 1 yang disebut bilangan biner.",
        },
        {
          type: "paragraph",
          text: "Inilah bahasa paling dasar yang digunakan oleh semua sistem digital.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🔢 Apa Itu Bilangan Biner?" },
        {
          type: "paragraph",
          text: "Bilangan biner adalah sistem bilangan yang hanya menggunakan dua angka, yaitu 0 dan 1.",
        },
        {
          type: "paragraph",
          text: "Sistem ini disebut juga sistem berbasis dua (base-2), berbeda dengan sistem desimal yang kita gunakan sehari-hari dan berbasis sepuluh (base-10).",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "⚡ Mengapa Hanya 0 dan 1?" },
        {
          type: "paragraph",
          text: "Perangkat elektronik lebih mudah membedakan dua keadaan listrik, misalnya tidak ada tegangan dan ada tegangan.",
        },
        {
          type: "paragraph",
          text: "Keadaan tersebut direpresentasikan sebagai logika 0 dan logika 1 sehingga proses pengolahan data menjadi lebih andal.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "📊 Nilai Tempat pada Bilangan Biner" },
        {
          type: "paragraph",
          text: "Setiap digit biner memiliki nilai tempat yang merupakan pangkat dua.",
        },
        {
          type: "paragraph",
          text: "Dari kanan ke kiri nilainya adalah 1, 2, 4, 8, 16, 32, dan seterusnya.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🧮 Contoh Konversi" },
        {
          type: "paragraph",
          text: "Bilangan biner 1011 dapat diubah ke desimal dengan menjumlahkan nilai tempat yang bernilai 1.",
        },
        { type: "paragraph", text: "1011₂ = 8 + 2 + 1 = 11₁₀." },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "💾 Bit dan Byte" },
        {
          type: "paragraph",
          text: "Satu digit biner disebut bit (binary digit).",
        },
        {
          type: "paragraph",
          text: "Delapan bit membentuk satu byte, yang menjadi satuan dasar penyimpanan data pada komputer.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "📁 Biner dalam Kehidupan Sehari-hari" },
        {
          type: "paragraph",
          text: "Semua file digital, seperti foto, lagu, video, dan dokumen, sebenarnya disimpan sebagai deretan bit.",
        },
        {
          type: "paragraph",
          text: "Komputer kemudian menerjemahkan deretan bit tersebut menjadi informasi yang dapat kita lihat atau dengar.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "⚠️ Miskonsepsi yang Sering Terjadi" },
        {
          type: "paragraph",
          text: "Banyak orang mengira angka 0 berarti 'mati' dan angka 1 berarti 'hidup'.",
        },
        {
          type: "paragraph",
          text: "Padahal dalam elektronika digital, 0 dan 1 hanyalah representasi dua keadaan logika yang dapat diwujudkan dengan berbagai kondisi listrik, bukan selalu sakelar mati atau menyala.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "📊 Ringkasan Konsep" },
        { type: "paragraph", text: "Tegangan Listrik" },
        { type: "paragraph", text: "⬇️" },
        { type: "paragraph", text: "Logika 0 dan 1" },
        { type: "paragraph", text: "⬇️" },
        { type: "paragraph", text: "Bilangan Biner" },
        { type: "paragraph", text: "⬇️" },
        { type: "paragraph", text: "Data Digital" },
        { type: "paragraph", text: "⬇️" },
        { type: "paragraph", text: "Komputer" },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🔗 Hubungan dengan Materi Berikutnya" },
        {
          type: "paragraph",
          text: "Bilangan biner menjadi dasar bagi semua proses logika dalam komputer.",
        },
        {
          type: "paragraph",
          text: "Pada halaman berikutnya kita akan mempelajari bagaimana angka 0 dan 1 diolah menggunakan gerbang logika (logic gates).",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🧠 Inti Materi" },
        {
          type: "paragraph",
          text: "Bilangan biner merupakan bahasa dasar komputer yang menggunakan dua keadaan logika, yaitu 0 dan 1.",
        },
        {
          type: "paragraph",
          text: "Melalui kombinasi kedua angka tersebut, komputer dapat menyimpan, mengolah, dan mengirim berbagai jenis informasi digital.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🚀 Next Mission" },
        {
          type: "paragraph",
          text: "Bagaimana komputer menggunakan angka 0 dan 1 untuk mengambil keputusan?",
        },
        {
          type: "paragraph",
          text: "➡️ Selanjutnya: Gerbang Logika (Logic Gates).",
        },
      ],
    },
  ],
};

export default bilanganbiner;
