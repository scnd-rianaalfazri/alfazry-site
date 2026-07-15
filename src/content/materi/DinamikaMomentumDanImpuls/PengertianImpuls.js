import impulstendangbolaImg from "/src/assets/Materi/MomentumImpuls/ImpulsTendanganBola.png";
import impulsairbagImg from "/src/assets/Materi/MomentumImpuls/ImpulsAirbag.png";
const pengertianimpuls = {
  title: "Pengertian Impuls",
  slug: "impuls",
  description:
    "Memahami konsep impuls dan hubungannya dengan perubahan momentum.",
  chapter: "💥 Dinamika: Momentum dan Impuls",

  content: [
    {
      blocks: [
        { type: "heading", text: "💥 Impuls: Si Pengubah Momentum" },
        {
          type: "image",
          src: impulstendangbolaImg,
          caption: "Ilustrasi impuls saat menendang bola",
        },
        {
          type: "paragraph",
          text: "Pernah nggak sih kamu menendang bola hingga melaju kencang? Atau melihat raket tenis memukul bola hanya dalam sepersekian detik?",
        },
        {
          type: "paragraph",
          text: "Di balik peristiwa tersebut terdapat konsep fisika yang disebut impuls.",
        },
        {
          type: "paragraph",
          text: "Impuls adalah besarnya pengaruh gaya yang bekerja pada suatu benda selama selang waktu tertentu sehingga menyebabkan perubahan momentum.",
        },
        {
          type: "paragraph",
          text: "Semakin besar gaya yang diberikan atau semakin lama gaya bekerja, semakin besar pula impuls yang dihasilkan.",
        },
        {
          type: "paragraph",
          text: "Karena impuls memiliki besar dan arah, impuls termasuk besaran vektor.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🔗 Hubungan dengan Momentum" },
        {
          type: "paragraph",
          text: "Pada materi sebelumnya, kita telah mempelajari bahwa momentum menunjukkan kecenderungan benda untuk mempertahankan geraknya.",
        },
        { type: "paragraph", text: "Namun momentum tidak selalu tetap." },
        {
          type: "paragraph",
          text: "Ketika suatu gaya bekerja pada benda selama selang waktu tertentu, momentum benda dapat berubah.",
        },
        {
          type: "paragraph",
          text: "Perubahan momentum inilah yang dipelajari melalui konsep impuls.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🔄 Alur Terjadinya Impuls" },
        {
          type: "paragraph",
          text: "Konsep impuls dapat diringkas sebagai berikut:",
        },
        { type: "paragraph", text: "Gaya bekerja" },
        { type: "paragraph", text: "⬇️" },
        { type: "paragraph", text: "Terjadi impuls" },
        { type: "paragraph", text: "⬇️" },
        { type: "paragraph", text: "Momentum berubah" },
        { type: "paragraph", text: "⬇️" },
        { type: "paragraph", text: "Gerak benda berubah" },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "⚡ Persamaan Impuls" },
        {
          type: "paragraph",
          text: "Secara matematis, impuls merupakan hasil kali antara gaya dan waktu kerja gaya.",
        },
        { type: "equation", equation: "I = F × Δt" },
        {
          type: "explanation",
          text: ["I = impuls (N·s)", "F = gaya (N)", "Δt = selang waktu (s)"],
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🎯 Faktor yang Memengaruhi Impuls" },
        {
          type: "paragraph",
          text: "Besar impuls dipengaruhi oleh dua faktor utama:",
        },
        { type: "paragraph", text: "⚡ Besar gaya yang bekerja" },
        { type: "paragraph", text: "⏱️ Lama waktu gaya bekerja" },
        {
          type: "paragraph",
          text: "Semakin besar gaya atau semakin lama waktu kontak, semakin besar impuls yang dihasilkan.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🎯 Hubungan Impuls dan Momentum" },
        {
          type: "paragraph",
          text: "Salah satu konsep paling penting dalam materi ini adalah bahwa impuls sama dengan perubahan momentum.",
        },
        {
          type: "paragraph",
          text: "Artinya, ketika suatu gaya bekerja pada benda dalam selang waktu tertentu, momentum benda akan berubah.",
        },
        {
          type: "paragraph",
          text: "Semakin besar impuls yang diberikan, semakin besar pula perubahan momentum yang terjadi.",
        },
        { type: "equation", equation: "I = Δp" },
        {
          type: "explanation",
          text: ["I = impuls", "Δp = perubahan momentum"],
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🧮 Menurunkan Persamaan Impuls" },
        {
          type: "paragraph",
          text: "Hubungan antara impuls dan momentum dapat diturunkan dari Hukum II Newton.",
        },
        {
          type: "paragraph",
          text: "Kita mulai dari persamaan gaya sebagai laju perubahan momentum.",
        },
        { type: "equation", equation: "F = \\frac{\\Delta p}{\\Delta t}" },
        { type: "explanation", text: ["Kalikan kedua ruas dengan Δt"] },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "📌 Hasil Penurunan" },
        {
          type: "paragraph",
          text: "Setelah kedua ruas dikalikan dengan selang waktu, diperoleh hubungan:",
        },
        { type: "equation", equation: "FΔt = Δp" },
        { type: "explanation", text: ["Karena FΔt adalah impuls, maka:"] },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "✨ Teorema Impuls-Momentum" },
        {
          type: "paragraph",
          text: "Teorema Impuls-Momentum menyatakan bahwa impuls yang bekerja pada suatu benda sama dengan perubahan momentumnya.",
        },
        {
          type: "paragraph",
          text: "Inilah alasan mengapa impuls sering disebut sebagai penyebab berubahnya momentum.",
        },
        { type: "equation", equation: "I = Δp = mv₂ − mv₁" },
        {
          type: "explanation",
          text: [
            "m = massa benda (kg)",
            "v₁ = kecepatan awal (m/s)",
            "v₂ = kecepatan akhir (m/s)",
          ],
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "📏 Satuan Impuls" },
        {
          type: "paragraph",
          text: "Karena impuls diperoleh dari gaya dikali waktu, satuannya adalah Newton sekon.",
        },
        { type: "equation", equation: "N·s" },
        {
          type: "explanation",
          text: [
            "1 N·s = 1 kg·m/s",
            "Satuan impuls setara dengan satuan momentum.",
          ],
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "📐 Dimensi Impuls" },
        {
          type: "paragraph",
          text: "Dimensi impuls dapat diperoleh dari dimensi gaya dikalikan waktu.",
        },
        { type: "equation", equation: "[M][L][T]⁻¹" },
        {
          type: "explanation",
          text: ["Dimensi impuls sama dengan dimensi momentum."],
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "📈 Impuls dan Grafik Gaya-Waktu" },
        {
          type: "paragraph",
          text: "Impuls juga dapat ditentukan menggunakan grafik gaya terhadap waktu.",
        },
        {
          type: "paragraph",
          text: "Pada grafik F–t, impuls sama dengan luas daerah di bawah kurva.",
        },
        {
          type: "paragraph",
          text: "Semakin besar luas daerah tersebut, semakin besar impuls yang diberikan pada benda.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "⚠️ Miskonsepsi yang Sering Terjadi" },
        {
          type: "paragraph",
          text: "Banyak siswa mengira impuls hanya bergantung pada besar gaya.",
        },
        {
          type: "paragraph",
          text: "Padahal waktu kontak juga berperan penting.",
        },
        {
          type: "paragraph",
          text: "Gaya kecil yang bekerja dalam waktu lama dapat menghasilkan impuls yang sama dengan gaya besar yang bekerja dalam waktu singkat.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🌍 Impuls dalam Kehidupan Sehari-hari" },
        {
          type: "image",
          src: impulsairbagImg,
          caption: "Ilustrasi impuls dalam sistem airbag",
        },
        {
          type: "paragraph",
          text: "Airbag pada mobil dirancang untuk memperpanjang waktu tumbukan sehingga gaya benturan yang diterima penumpang menjadi lebih kecil.",
        },
        { type: "paragraph", text: "Ada lagi, contoh lainya:" },
        {
          type: "paragraph",
          text: "Matras lompat tinggi dibuat empuk agar waktu berhentinya atlet lebih lama dan risiko cedera berkurang.",
        },
        {
          type: "paragraph",
          text: "Sarung tinju dibuat lebih tebal untuk memperbesar waktu kontak saat pukulan terjadi.",
        },
        {
          type: "paragraph",
          text: "Saat menangkap bola, tangan biasanya ditarik ke belakang agar waktu kontak bertambah sehingga terasa lebih nyaman.",
        },
        {
          type: "paragraph",
          text: "🥚 Kemasan telur dibuat lunak untuk memperpanjang waktu tumbukan sehingga telur tidak mudah pecah.",
        },
        {
          type: "paragraph",
          text: "Helm sepeda motor membantu memperpanjang waktu benturan sehingga mengurangi gaya yang diterima kepala.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🚀 Fakta Menarik" },
        {
          type: "paragraph",
          text: "Dua benda dapat mengalami perubahan momentum yang sama meskipun gaya yang bekerja berbeda.",
        },
        { type: "paragraph", text: "Kuncinya terletak pada nilai impulsnya." },
        {
          type: "paragraph",
          text: "Gaya besar dalam waktu singkat bisa menghasilkan impuls yang sama dengan gaya kecil dalam waktu yang lebih lama.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "📝 Kesimpulan" },
        {
          type: "paragraph",
          text: "Impuls adalah hasil kali gaya dan waktu kerja gaya.",
        },
        {
          type: "paragraph",
          text: "Impuls menyebabkan perubahan momentum pada suatu benda.",
        },
        {
          type: "paragraph",
          text: "Hubungan antara impuls dan momentum dirumuskan sebagai I = Δp.",
        },
        {
          type: "paragraph",
          text: "Semakin besar impuls yang diberikan, semakin besar perubahan momentum yang terjadi.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "✨ Inti Materi" },
        {
          type: "paragraph",
          text: "Impuls adalah hasil kali gaya dan selang waktu kerja gaya.",
        },
        {
          type: "paragraph",
          text: "Impuls menyebabkan perubahan momentum pada benda.",
        },
        {
          type: "paragraph",
          text: "Semakin besar gaya atau semakin lama gaya bekerja, semakin besar impuls yang dihasilkan.",
        },
        {
          type: "paragraph",
          text: "Hubungan antara impuls dan momentum dirumuskan sebagai impuls sama dengan perubahan momentum.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🚀 Next Mission" },
        {
          type: "paragraph",
          text: "Momentum dan impuls memiliki hubungan yang sangat erat.",
        },
        {
          type: "paragraph",
          text: "Bagaimana hubungan matematis antara keduanya?",
        },
        {
          type: "paragraph",
          text: "➡️ Next, menuju portal: Hubungan Momentum dan Impuls.",
        },
      ],
    },
  ],
};

export default pengertianimpuls;
