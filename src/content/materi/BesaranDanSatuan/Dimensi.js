const dimensi = {
  title: "Dimensi",
  slug: "dimensi",
  description: "Memahami konsep dimensi besaran fisika dan penggunaannya untuk menganalisis persamaan fisika.",
  chapter: "📏 Pengukuran",
  content: [
    {
      heading: "🧬 Dimensi — Sidik Jari Sebuah Besaran",
      body: [
        "Setiap besaran fisika memiliki identitas yang menunjukkan penyusunnya.",
        "",
        "Identitas tersebut disebut dimensi.",
        "",
        "Kalau satuan menunjukkan 'berapa ukurannya', maka dimensi menunjukkan 'tersusun dari apa besaran tersebut'."
      ]
    },

    {
      heading: "🤔 Kenapa Dimensi Dibutuhkan?",
      body: [
        "Dalam fisika, sebuah rumus tidak boleh dibuat sembarangan.",
        "",
        "Dimensi membantu ilmuwan mengecek apakah sebuah persamaan sudah benar atau belum.",
        "",
        "Jika dimensi ruas kiri dan kanan sama, maka persamaan tersebut kemungkinan benar."
      ]
    },

    {
      heading: "📏 Dimensi Besaran Pokok",
      body: [
        "Setiap besaran pokok memiliki simbol dimensi:",
        "",
        "Panjang → [L]",
        "Massa → [M]",
        "Waktu → [T]",
        "Suhu → [Θ]",
        "Kuat arus listrik → [I]",
        "Jumlah zat → [N]",
        "Intensitas cahaya → [J]"
      ]
    },

    {
      heading: "🚗 Contoh Dimensi Kecepatan",
      body: [
        "Kecepatan diperoleh dari:",
        "",
        "kecepatan = jarak / waktu",
        "",
        "Jarak memiliki dimensi [L]",
        "Waktu memiliki dimensi [T]",
        "",
        "Maka dimensi kecepatan adalah:",
        "[L][T⁻¹]"
      ]
    },

    {
      heading: "⚡ Contoh Dimensi Gaya",
      body: [
        "Menurut hukum Newton:",
        "",
        "gaya = massa × percepatan",
        "",
        "Massa → [M]",
        "Percepatan → [L][T⁻²]",
        "",
        "Maka:",
        "Gaya → [M][L][T⁻²]"
      ]
    },

    {
      heading: "🔍 Analisis Dimensi",
      body: [
        "Analisis dimensi adalah cara menguji suatu persamaan dengan membandingkan dimensinya.",
        "",
        "Contoh:",
        "Apakah persamaan jarak = kecepatan × waktu benar?",
        "",
        "Kecepatan → [L][T⁻¹]",
        "Waktu → [T]",
        "",
        "Hasil:",
        "[L][T⁻¹] × [T] = [L]",
        "",
        "Karena sama dengan dimensi jarak, persamaan tersebut sesuai."
      ]
    },

    {
      heading: "🎯 Manfaat Dimensi",
      body: [
        "Dimensi digunakan untuk:",
        "",
        "✅ Mengecek kebenaran rumus",
        "✅ Menentukan satuan suatu besaran",
        "✅ Membantu memahami hubungan antarbesaran"
      ]
    },

    {
      heading: "✨ Inti Materi",
      body: [
        "Dimensi adalah cara fisika mengenali struktur sebuah besaran.",
        "",
        "Dengan dimensi, kita dapat melihat apakah sebuah rumus memiliki hubungan yang logis."
      ]
    },

    {
      heading: "🚀 Next Mission",
      body: [
        "Dalam fisika, hasil pengukuran tidak hanya harus benar, tetapi juga harus ditulis dengan aturan yang tepat.",
        "",
        "➡️ Selanjutnya: Angka Penting."
      ]
    },

    {
      heading: "Referensi:",
      body: [
        "Halliday, Resnick & Walker. Fundamentals of Physics.",
        "Serway & Jewett. Physics for Scientists and Engineers.",
        "Young & Freedman. University Physics with Modern Physics.",
        "Kemendikbudristek RI. Buku Fisika SMA/MA Kelas X."
      ]
    }
  ]
}

export default dimensi