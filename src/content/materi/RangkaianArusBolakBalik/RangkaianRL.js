const rangkaianrl = {
  title: "Rangkaian RL",
  slug: "rangkaian-rl",
  description: "Memahami karakteristik rangkaian RL pada arus bolak-balik (AC), hubungan fase, impedansi, dan penerapannya.",
  description: "Memahami perilaku resistor pada rangkaian arus bolak-balik (AC), hubungan antara tegangan dan arus, serta daya yang dihasilkan.",
  chapter: "⚡ Rangkaian Arus Bolak Balik",

  content: [
    {
      heading: "⚡ Apa yang Terjadi Jika Resistor dan Induktor Digabungkan?",
      body: [
        "Pada resistor murni, tegangan dan arus selalu sefase. Sebaliknya, pada induktor murni, arus tertinggal terhadap tegangan sebesar 90°.",
        "",
        "Ketika resistor dan induktor disusun dalam satu rangkaian AC, perilaku rangkaian menjadi perpaduan dari kedua komponen tersebut."
      ]
    },

    {
      heading: "📍 Apa Itu Rangkaian RL?",
      body: [
        "Rangkaian RL adalah rangkaian arus bolak-balik yang terdiri atas sebuah resistor (R) dan sebuah induktor (L).",
        "",
        "Kedua komponen bekerja bersama sehingga arus tidak lagi sefase dengan tegangan."
      ]
    },

    {
      heading: "📐 Hubungan Fase",
      body: [
        "Pada rangkaian RL, arus tertinggal terhadap tegangan.",
        "",
        "Namun, besar keterlambatan tersebut tidak selalu 90°. Nilainya bergantung pada perbandingan antara hambatan resistor dan reaktansi induktif."
      ]
    },

    {
      heading: "📏 Impedansi",
      body: [
        "Pada rangkaian AC, hambatan total disebut impedansi (Z).",
        "",
        "Impedansi merupakan gabungan antara hambatan resistor dan reaktansi induktif sehingga menentukan besar arus yang mengalir."
      ]
    },

    {
      heading: "📊 Segitiga Impedansi",
      body: [
        "Hubungan antara hambatan, reaktansi induktif, dan impedansi dapat digambarkan menggunakan segitiga impedansi.",
        "",
        "Segitiga ini memudahkan analisis hubungan fase pada rangkaian RL."
      ]
    },

    {
      heading: "⚡ Faktor Daya",
      body: [
        "Karena terdapat pergeseran fase antara tegangan dan arus, tidak seluruh daya listrik berubah menjadi energi yang berguna.",
        "",
        "Besarnya efisiensi penggunaan daya dinyatakan dengan faktor daya (cos φ)."
      ]
    },

    {
      heading: "🌍 Penerapan dalam Kehidupan",
      body: [
        "Rangkaian RL banyak digunakan pada motor listrik, transformator, relai, elektromagnet, serta berbagai sistem kontrol industri."
      ]
    },

    {
      heading: "⚠️ Miskonsepsi yang Sering Terjadi",
      body: [
        "Banyak siswa menganggap hambatan total rangkaian RL cukup dijumlahkan seperti pada rangkaian DC.",
        "",
        "Padahal pada arus AC, hambatan resistor dan reaktansi induktif harus digabungkan secara vektor melalui konsep impedansi."
      ]
    },

    {
      heading: "📊 Ringkasan Konsep",
      body: [
        "Resistor",
        "⬇️",
        "Induktor",
        "⬇️",
        "Impedansi",
        "⬇️",
        "Arus Tertinggal"
      ]
    },

    {
      heading: "🔗 Hubungan dengan Materi Berikutnya",
      body: [
        "Jika pada rangkaian RL arus tertinggal terhadap tegangan, maka pada rangkaian RC arus justru mendahului tegangan."
      ]
    },

    {
      heading: "🧠 Inti Materi",
      body: [
        "Rangkaian RL merupakan gabungan resistor dan induktor pada arus bolak-balik.",
        "",
        "Keberadaan induktor menyebabkan arus tertinggal terhadap tegangan, sedangkan besar hambatan total dinyatakan oleh impedansi."
      ]
    },

    {
      heading: "🚀 Next Mission",
      body: [
        "Apa yang terjadi jika resistor dipadukan dengan kapasitor dalam satu rangkaian?",
        "",
        "➡️ Selanjutnya: Rangkaian RC."
      ]
    }
  ]
}

export default rangkaianrl