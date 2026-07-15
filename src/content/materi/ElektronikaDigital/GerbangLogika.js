const gerbanglogika = {
  title: "Gerbang Logika (Logic Gates)",
  slug: "gerbang logika",
  description:
    "Memahami konsep gerbang logika sebagai dasar pengambilan keputusan pada sistem digital serta mengenal gerbang AND, OR, NOT, NAND, NOR, XOR, dan XNOR.",
  chapter: "💻 Elektronika Digital & Embedded System",

  content: [
    {
      blocks: [
        { type: "heading", text: "🤔 Bagaimana Komputer Mengambil Keputusan?" },
        {
          type: "paragraph",
          text: "Saat kamu memasukkan PIN smartphone, perangkat dapat langsung menentukan apakah PIN tersebut benar atau salah.",
        },
        {
          type: "paragraph",
          text: "Komputer melakukan hal itu menggunakan rangkaian sederhana yang disebut gerbang logika (logic gates).",
        },
        {
          type: "paragraph",
          text: "Gerbang logika menjadi dasar cara komputer 'berpikir' dalam bentuk logika digital.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🚪 Apa Itu Gerbang Logika?" },
        {
          type: "paragraph",
          text: "Gerbang logika adalah rangkaian elektronik yang menerima satu atau lebih masukan (input), kemudian menghasilkan keluaran (output) berdasarkan aturan logika tertentu.",
        },
        {
          type: "paragraph",
          text: "Masukan dan keluaran dinyatakan dalam bentuk logika 0 dan 1.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "✅ Gerbang AND" },
        {
          type: "paragraph",
          text: "Gerbang AND menghasilkan keluaran 1 hanya jika semua input bernilai 1.",
        },
        {
          type: "paragraph",
          text: "Jika salah satu input bernilai 0, maka keluarannya tetap 0.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "✅ Gerbang OR" },
        {
          type: "paragraph",
          text: "Gerbang OR menghasilkan keluaran 1 jika minimal satu input bernilai 1.",
        },
        {
          type: "paragraph",
          text: "Keluaran hanya bernilai 0 jika semua input bernilai 0.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🔄 Gerbang NOT" },
        { type: "paragraph", text: "Gerbang NOT hanya memiliki satu input." },
        {
          type: "paragraph",
          text: "Gerbang ini membalik logika: 1 menjadi 0 dan 0 menjadi 1.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "⚡ Gerbang Lainnya" },
        {
          type: "paragraph",
          text: "Selain AND, OR, dan NOT, terdapat gerbang NAND, NOR, XOR, dan XNOR.",
        },
        {
          type: "paragraph",
          text: "Gerbang-gerbang ini merupakan kombinasi atau pengembangan dari gerbang dasar dan banyak digunakan dalam prosesor serta rangkaian digital modern.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🌍 Contoh dalam Kehidupan" },
        {
          type: "paragraph",
          text: "Alarm keamanan dapat menggunakan logika AND, misalnya alarm aktif jika pintu tertutup DAN sistem keamanan diaktifkan.",
        },
        {
          type: "paragraph",
          text: "Lampu darurat dapat menggunakan logika OR, misalnya menyala jika tombol manual ditekan ATAU sensor mendeteksi keadaan darurat.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "💻 Mengapa Gerbang Logika Penting?" },
        {
          type: "paragraph",
          text: "Semua operasi pada komputer, kalkulator, smartphone, dan mikrokontroler pada akhirnya dibangun dari jutaan hingga miliaran gerbang logika yang bekerja sangat cepat.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "⚠️ Miskonsepsi yang Sering Terjadi" },
        {
          type: "paragraph",
          text: "Banyak orang mengira prosesor melakukan perhitungan menggunakan rumus yang rumit.",
        },
        {
          type: "paragraph",
          text: "Padahal di tingkat paling dasar, prosesor hanya mengolah kombinasi logika 0 dan 1 melalui gerbang logika.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "📊 Ringkasan Konsep" },
        { type: "paragraph", text: "Input (0/1)" },
        { type: "paragraph", text: "⬇️" },
        { type: "paragraph", text: "Gerbang Logika" },
        { type: "paragraph", text: "⬇️" },
        { type: "paragraph", text: "Output (0/1)" },
        { type: "paragraph", text: "⬇️" },
        { type: "paragraph", text: "Keputusan Digital" },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🔗 Hubungan dengan Materi Berikutnya" },
        {
          type: "paragraph",
          text: "Satu gerbang logika hanya dapat melakukan operasi sederhana.",
        },
        {
          type: "paragraph",
          text: "Pada halaman berikutnya kita akan mempelajari bagaimana beberapa gerbang logika digabungkan menjadi rangkaian logika yang mampu melakukan tugas lebih kompleks.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🧠 Inti Materi" },
        {
          type: "paragraph",
          text: "Gerbang logika merupakan dasar pengambilan keputusan dalam sistem digital.",
        },
        {
          type: "paragraph",
          text: "Melalui kombinasi gerbang logika, komputer dapat melakukan perhitungan, menyimpan data, dan menjalankan berbagai aplikasi modern.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🚀 Next Mission" },
        {
          type: "paragraph",
          text: "Bagaimana jika beberapa gerbang logika digabungkan menjadi satu rangkaian yang lebih kompleks?",
        },
        { type: "paragraph", text: "➡️ Selanjutnya: Rangkaian Logika." },
      ],
    },
  ],
};

export default gerbanglogika;
