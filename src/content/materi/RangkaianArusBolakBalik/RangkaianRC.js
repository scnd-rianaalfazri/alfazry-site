const rangkaianrc = {
  title: "Rangkaian RC",
  slug: "rangkaian-rc",
  description:
    "Memahami karakteristik rangkaian RC pada arus bolak-balik (AC), hubungan fase, impedansi, dan penerapannya.",
  chapter: "⚡ Rangkaian Arus Bolak Balik",

  content: [
    {
      blocks: [
        {
          type: "heading",
          text: "⚡ Apa yang Terjadi Jika Resistor dan Kapasitor Digabungkan?",
        },
        {
          type: "paragraph",
          text: "Resistor menghambat aliran arus listrik, sedangkan kapasitor menyimpan energi dalam bentuk medan listrik.",
        },
        {
          type: "paragraph",
          text: "Ketika keduanya disusun dalam satu rangkaian arus bolak-balik (AC), muncul hubungan fase yang berbeda dibandingkan rangkaian RL.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "📍 Apa Itu Rangkaian RC?" },
        {
          type: "paragraph",
          text: "Rangkaian RC adalah rangkaian arus bolak-balik yang terdiri atas sebuah resistor (R) dan sebuah kapasitor (C).",
        },
        {
          type: "paragraph",
          text: "Kedua komponen bekerja bersama sehingga arus tidak lagi sefase dengan tegangan.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "📐 Hubungan Fase" },
        {
          type: "paragraph",
          text: "Pada rangkaian RC, arus mendahului tegangan.",
        },
        {
          type: "paragraph",
          text: "Besarnya pergeseran fase bergantung pada perbandingan antara hambatan resistor dan reaktansi kapasitif.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "📏 Impedansi" },
        {
          type: "paragraph",
          text: "Hambatan total pada rangkaian RC disebut impedansi (Z).",
        },
        {
          type: "paragraph",
          text: "Impedansi merupakan gabungan antara hambatan resistor dan reaktansi kapasitif.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "📊 Segitiga Impedansi" },
        {
          type: "paragraph",
          text: "Hubungan antara hambatan, reaktansi kapasitif, dan impedansi dapat digambarkan menggunakan segitiga impedansi.",
        },
        {
          type: "paragraph",
          text: "Segitiga ini membantu menentukan besar impedansi dan sudut fase.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "⚡ Faktor Daya" },
        {
          type: "paragraph",
          text: "Karena terdapat pergeseran fase antara tegangan dan arus, faktor daya pada rangkaian RC juga bernilai kurang dari satu.",
        },
        {
          type: "paragraph",
          text: "Semakin besar sudut fase, semakin kecil faktor dayanya.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🌍 Penerapan dalam Kehidupan" },
        {
          type: "paragraph",
          text: "Rangkaian RC digunakan pada filter frekuensi, rangkaian timer, pengolah sinyal, osilator, kamera elektronik, dan sistem audio.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "⚠️ Miskonsepsi yang Sering Terjadi" },
        {
          type: "paragraph",
          text: "Banyak siswa mengira kapasitor hanya berfungsi sebagai penyimpan muatan.",
        },
        {
          type: "paragraph",
          text: "Padahal pada arus AC, kapasitor juga memengaruhi besar arus, impedansi, dan hubungan fase dalam rangkaian.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "📊 Ringkasan Konsep" },
        { type: "paragraph", text: "Resistor" },
        { type: "paragraph", text: "⬇️" },
        { type: "paragraph", text: "Kapasitor" },
        { type: "paragraph", text: "⬇️" },
        { type: "paragraph", text: "Impedansi" },
        { type: "paragraph", text: "⬇️" },
        { type: "paragraph", text: "Arus Mendahului" },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🔗 Hubungan dengan Materi Berikutnya" },
        {
          type: "paragraph",
          text: "Setelah memahami rangkaian RL dan RC, kita akan mempelajari rangkaian LC yang memperlihatkan pertukaran energi antara induktor dan kapasitor.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🧠 Inti Materi" },
        {
          type: "paragraph",
          text: "Rangkaian RC merupakan gabungan resistor dan kapasitor pada arus bolak-balik.",
        },
        {
          type: "paragraph",
          text: "Keberadaan kapasitor menyebabkan arus mendahului tegangan, sedangkan hambatan total dinyatakan oleh impedansi.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🚀 Next Mission" },
        {
          type: "paragraph",
          text: "Bagaimana energi berpindah antara induktor dan kapasitor tanpa adanya resistor?",
        },
        { type: "paragraph", text: "➡️ Selanjutnya: Rangkaian LC." },
      ],
    },
  ],
};

export default rangkaianrc;
