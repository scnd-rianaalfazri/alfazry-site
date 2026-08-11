import hubunganmomentumimpulstendanganbolaImg from "/src/assets/Materi/MomentumImpuls/HubunganMomentumImpulsTendanganBola.png";
import hubunganmomentumimpulsboladantembokImg from "/src/assets/Materi/MomentumImpuls/HubunganMomentuImpulsBolaDanTembok.png";

const hubunganMomentumImpuls = {
  title: "Hubungan Antara Momentum dan Impuls",
  slug: "hubungan-momentum-dan-impuls",
  description: "Memahami bahwa impuls menyebabkan perubahan momentum suatu benda.",
  chapter: "💥 Dinamika: Momentum dan Impuls",

  content: [
    {
      heading: "🔗 Momentum dan Impuls: Duo yang Tidak Bisa Dipisahkan",
      blocks: [
        { type: "image", src: hubunganmomentumimpulstendanganbolaImg, caption: "Ilustrasi hubungan momentum dan impuls saat menendang bola" },
        { type: "paragraph", text: "Momentum menggambarkan keadaan gerak benda. Impuls menggambarkan pengaruh gaya selama selang waktu tertentu." },
        { type: "paragraph", text: "Sekarang kita mencari jembatan yang menghubungkan keduanya." },
      ]
    },
    {
      heading: "❓ Pertanyaan Besar",
      blocks: [
        { type: "heading", text: "❓ Pertanyaan Besar" },
        { type: "paragraph", text: "Jika gaya bekerja pada benda selama waktu tertentu, bagaimana perubahan momentum benda dapat dijelaskan?" },
      ]
    },
    {
      heading: "🔄 Alur Terjadinya Perubahan Momentum",
      blocks: [
        { type: "heading", text: "🔄 Alur Terjadinya Perubahan Momentum" },
        { type: "paragraph", text: "Gaya bekerja → muncul impuls → momentum berubah → gerak benda berubah." },
      ]
    },
    {
      heading: "⚡ Dari Hukum II Newton Menuju Impuls",
      blocks: [
        { type: "heading", text: "⚡ Dari Hukum II Newton Menuju Impuls" },
        { type: "paragraph", text: "Hubungan impuls dan momentum dapat diturunkan dari hubungan gaya dengan perubahan momentum." },
        { type: "equation", equation: "F = Δp / Δt" },
        { type: "paragraph", text: "Kalikan kedua ruas dengan Δt untuk memperoleh hubungan antara gaya, waktu, dan perubahan momentum." },
      ]
    },
    {
      heading: "🧮 Penurunan Persamaan",
      blocks: [
        { type: "heading", text: "🧮 Penurunan Persamaan" },
        { type: "equation", equation: "FΔt = Δp" },
        { type: "equation", equation: "I = Δp" },
        { type: "paragraph", text: "Jadi impuls yang diberikan pada benda sama dengan perubahan momentum benda." },
      ]
    },
    {
      heading: "🎨 Visualisasi Konsep",
      blocks: [
        { type: "image", src: hubunganmomentumimpulsboladantembokImg, caption: "Perubahan momentum saat bola berinteraksi dengan tembok" },
        { type: "paragraph", text: "Ketika bola menumbuk tembok, kecepatannya dapat berubah besar dan arah. Perubahan tersebut berarti momentum bola berubah. Interaksi gaya selama waktu tumbukan menghasilkan impuls." },
      ]
    },
    {
      heading: "🧪 Contoh Analisis",
      blocks: [
        { type: "heading", text: "🧪 Contoh Analisis" },
        { type: "paragraph", text: "Sebuah bola bermassa 0,5 kg berubah kecepatan dari 4 m/s menjadi 10 m/s searah. Perubahan momentumnya adalah Δp = m(v₂ − v₁) = 0,5 × 6 = 3 kg·m/s." },
        { type: "paragraph", text: "Maka impuls yang diterima bola adalah 3 N·s." },
      ]
    },
    {
      heading: "🌍 Contoh dalam Kehidupan",
      blocks: [
        { type: "heading", text: "🌍 Contoh dalam Kehidupan" },
        { type: "paragraph", text: "Tendangan, pukulan, tumbukan, dan sistem keselamatan kendaraan dapat dianalisis dengan hubungan I = Δp." },
      ]
    },
    {
      heading: "⚠️ Miskonsepsi",
      blocks: [
        { type: "heading", text: "⚠️ Miskonsepsi" },
        { type: "paragraph", text: "❌ Impuls adalah besaran yang terpisah dari perubahan momentum." },
        { type: "paragraph", text: "✅ Impuls secara fisika berkaitan langsung dengan perubahan momentum." },
        { type: "paragraph", text: "❌ Jika benda kembali ke arah semula setelah tumbukan, momentumnya tidak berubah." },
        { type: "paragraph", text: "✅ Perubahan arah kecepatan berarti momentum berubah arah." },
      ]
    },
    {
      heading: "🌟 Fun Fact",
      blocks: [
        { type: "heading", text: "🌟 Fun Fact" },
        { type: "paragraph", text: "Sebuah bola yang memantul dapat mengalami perubahan momentum yang besar meskipun kelajuannya sebelum dan sesudah tumbukan hampir sama, karena arah kecepatannya berubah." },
      ]
    },
    {
      heading: "🧠 Inti Materi",
      blocks: [
        { type: "heading", text: "🧠 Inti Materi" },
        { type: "paragraph", text: "Impuls adalah perubahan momentum. Hubungan ini menjadi dasar untuk menganalisis interaksi singkat, termasuk tumbukan." },
      ]
    },
    {
      heading: "🚀 Next Mission",
      blocks: [
        { type: "heading", text: "🚀 Next Mission" },
        { type: "paragraph", text: "Jika dua benda saling memberikan gaya, momentum masing-masing dapat berubah. Tetapi apakah momentum total sistem juga berubah?" },
        { type: "paragraph", text: "➡️ Selanjutnya: Hukum Kekekalan Momentum." },
      ]
    }
  ]
};

export default hubunganMomentumImpuls;
