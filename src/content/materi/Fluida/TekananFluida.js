import tekananfluidaImg from "/src/assets/Materi/Fluida/TekananFluida.png"
const tekananfluida = {
  title: "Tekanan Fluida",
  slug: "tekanan fluida",
  description: "Memahami konsep tekanan pada fluida dan faktor-faktor yang memengaruhinya.",
  chapter: "💧 Fluida",
  
  content: [
    {
      heading: "🤔 Kenapa Paku Lebih Mudah Menembus Kayu?",
      image: tekananfluidaImg,
      caption: "Paku memiliki luas bidang tekan yang lebih kecil, sehingga tekanannya lebih besar.",
      body: [
        "Coba bandingkan ujung paku dengan ujung jari kamu.",
        "Saat menekan kayu menggunakan jari, kayu tidak akan tertembus. Tetapi saat menggunakan paku dengan gaya yang sama, kayu bisa tertusuk.",
        "Hal ini terjadi karena tekanan yang diberikan paku jauh lebih besar daripada tekanan yang diberikan jari."
      ]
    },
    {
      heading: "📖 Apa Itu Tekanan?",
      body: [
        "Tekanan adalah besarnya gaya yang bekerja pada setiap satuan luas permukaan.",
        "Semakin besar gaya yang diberikan, semakin besar tekanannya.",
        "Sebaliknya, semakin besar luas bidang tekan, semakin kecil tekanannya."
      ]
    },
    {
      heading: "🧮 Rumus Tekanan",
      body: [
        "Secara matematis, tekanan dapat dihitung menggunakan rumus berikut:"
      ],
      formula: "P = F / A"
    },
    {
      heading: "📚 Keterangan Rumus",
      body: [
        "P = tekanan (Pascal atau Pa)",
        "F = gaya tekan (Newton atau N)",
        "A = luas bidang tekan (m²)"
      ]
    },
    {
      heading: "🧪 Contoh Perhitungan",
      body: [
        "Sebuah gaya sebesar 100 N bekerja pada permukaan seluas 0,5 m².",
        "Berapakah tekanan yang dihasilkan?"
      ],
      formula: "P = 100 / 0,5 = 200 Pa"
    },
    {
      heading: "🎯 Faktor yang Memengaruhi Tekanan",
      body: [
        "Besarnya tekanan dipengaruhi oleh dua faktor utama:",
        "1. Besar gaya yang diberikan.",
        "2. Luas bidang tempat gaya bekerja."
      ]
    },
    {
      heading: "👟 Contoh dalam Kehidupan Sehari-hari",
      body: [
        "Sepatu hak tinggi memiliki luas bidang tekan yang kecil sehingga tekanannya besar.",
        "Ban traktor dibuat lebar agar tekanannya kecil dan tidak mudah terperosok ke tanah.",
        "Pisau dibuat tajam agar luas bidang tekannya kecil sehingga lebih mudah memotong."
      ]
    },
    {
      heading: "🌊 Tekanan pada Fluida",
      body: [
        "Fluida seperti air dan udara juga dapat memberikan tekanan.",
        "Berbeda dengan benda padat, tekanan pada fluida dapat bekerja ke segala arah.",
        "Saat menyelam semakin dalam ke dalam air, tekanan yang dirasakan tubuh akan semakin besar."
      ]
    },
    {
      heading: "🚀 Fakta Menarik",
      body: [
        "Tekanan udara di puncak gunung lebih kecil dibandingkan di permukaan laut.",
        "Penyelam harus menggunakan peralatan khusus karena tekanan air meningkat seiring bertambahnya kedalaman.",
        "Bendungan dibuat lebih tebal di bagian bawah karena tekanan air terbesar terjadi pada bagian tersebut."
      ]
    },
    {
      heading: "🎯 Kesimpulan",
      body: [
        "Tekanan adalah gaya per satuan luas.",
        "Tekanan bertambah jika gaya diperbesar atau luas bidang tekan diperkecil.",
        "Konsep tekanan menjadi dasar untuk memahami tekanan hidrostatis, hukum Pascal, dan hukum Archimedes."
      ]
    }
  ]
};

export default tekananfluida;