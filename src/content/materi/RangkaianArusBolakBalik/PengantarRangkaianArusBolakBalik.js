const pengantarrlc = {
  title: "Pengantar Rangkaian Arus Bolak-Balik (RLC)",
  slug: "pengantar-rangkaian-rlc",
  description:
  "Memahami konsep dasar rangkaian arus bolak-balik (RLC), komponen penyusunnya, serta perbedaan perilakunya dibandingkan rangkaian arus searah.",
  chapter: "⚡ Rangkaian Arus Bolak Balik",

  content: [
  { heading:

    "⚡ Mengapa Rangkaian AC Lebih Menarik?", blocks: [{ type: "heading", text: "⚡ Mengapa Rangkaian AC Lebih Menarik?" },
    {
      type: "paragraph",
      text: "Pada chapter sebelumnya, kita telah mempelajari bagaimana arus bolak-balik (AC) dibangkitkan, ditransmisikan, dan dimanfaatkan."
    },
    {
      type: "paragraph",
      text: "Namun, ketika arus AC mengalir melalui sebuah rangkaian, perilakunya tidak sesederhana arus searah (DC). Selain hambatan, terdapat komponen yang dapat menyimpan energi dalam medan listrik maupun medan magnet."
    }]

  },
  { heading:

    "📍 Apa Itu Rangkaian RLC?", blocks: [{ type: "heading", text: "📍 Apa Itu Rangkaian RLC?" },
    {
      type: "paragraph",
      text: "Rangkaian RLC adalah rangkaian listrik yang tersusun atas resistor (R), induktor (L), dan kapasitor (C)."
    },
    {
      type: "paragraph",
      text: "Ketiga komponen tersebut memiliki karakteristik yang berbeda ketika dialiri arus bolak-balik."
    }]

  },
  { heading:

    "🟫 Resistor (R)", blocks: [{ type: "heading", text: "🟫 Resistor (R)" },
    {
      type: "paragraph",
      text: "Resistor berfungsi menghambat aliran arus listrik."
    },
    {
      type: "paragraph",
      text: "Energi listrik yang melewati resistor sebagian besar diubah menjadi energi panas."
    }]

  },
  { heading:

    "🌀 Induktor (L)", blocks: [{ type: "heading", text: "🌀 Induktor (L)" },
    {
      type: "paragraph",
      text: "Induktor adalah komponen yang dapat menyimpan energi dalam bentuk medan magnet ketika dialiri arus listrik."
    },
    {
      type: "paragraph",
      text: "Pada arus bolak-balik, induktor memberikan hambatan yang disebut reaktansi induktif."
    }]

  },
  { heading:

    "🔋 Kapasitor (C)", blocks: [{ type: "heading", text: "🔋 Kapasitor (C)" },
    {
      type: "paragraph",
      text: "Kapasitor menyimpan energi dalam bentuk medan listrik di antara dua pelat penghantar."
    },
    {
      type: "paragraph",
      text: "Pada arus bolak-balik, kapasitor memiliki hambatan yang disebut reaktansi kapasitif."
    }]

  },
  { heading:

    "⚖️ Mengapa Ketiganya Berbeda?", blocks: [{ type: "heading", text: "⚖️ Mengapa Ketiganya Berbeda?" },
    { type: "paragraph", text: "Resistor hanya menghambat arus listrik." },
    {
      type: "paragraph",
      text: "Induktor menyimpan energi dalam medan magnet."
    },
    {
      type: "paragraph",
      text: "Kapasitor menyimpan energi dalam medan listrik."
    },
    {
      type: "paragraph",
      text: "Karena sifatnya berbeda, respons masing-masing komponen terhadap arus AC juga berbeda."
    }]

  },
  { heading:

    "🌍 Penerapan Rangkaian RLC", blocks: [{ type: "heading", text: "🌍 Penerapan Rangkaian RLC" },
    {
      type: "paragraph",
      text: "Rangkaian RLC digunakan pada radio, televisi, speaker, filter elektronik, charger nirkabel, sistem komunikasi, hingga berbagai perangkat industri."
    }]

  },
  { heading:

    "⚠️ Miskonsepsi yang Sering Terjadi", blocks: [{ type: "heading", text: "⚠️ Miskonsepsi yang Sering Terjadi" },
    {
      type: "paragraph",
      text: "Banyak siswa menganggap induktor dan kapasitor hanya berfungsi sebagai hambatan seperti resistor."
    },
    {
      type: "paragraph",
      text: "Padahal keduanya menyimpan dan melepaskan energi secara periodik sehingga perilakunya bergantung pada frekuensi arus AC."
    }]

  },
  { heading:

    "📊 Ringkasan Konsep", blocks: [{ type: "heading", text: "📊 Ringkasan Konsep" },
    { type: "paragraph", text: "Arus AC" },
    { type: "paragraph", text: "⬇️" },
    { type: "paragraph", text: "Resistor (R)" },
    { type: "paragraph", text: "⬇️" },
    { type: "paragraph", text: "Induktor (L)" },
    { type: "paragraph", text: "⬇️" },
    { type: "paragraph", text: "Kapasitor (C)" },
    { type: "paragraph", text: "⬇️" },
    { type: "paragraph", text: "Rangkaian RLC" }]

  },
  { heading:

    "🔗 Hubungan dengan Materi Berikutnya", blocks: [{ type: "heading", text: "🔗 Hubungan dengan Materi Berikutnya" },
    {
      type: "paragraph",
      text: "Untuk memahami rangkaian RLC secara utuh, kita akan mempelajari terlebih dahulu bagaimana sebuah resistor berperilaku ketika dialiri arus bolak-balik."
    }]

  },
  { heading:

    "🧠 Inti Materi", blocks: [{ type: "heading", text: "🧠 Inti Materi" },
    {
      type: "paragraph",
      text: "Rangkaian RLC terdiri atas resistor, induktor, dan kapasitor yang masing-masing memiliki fungsi berbeda dalam mengatur aliran dan penyimpanan energi pada arus bolak-balik."
    },
    {
      type: "paragraph",
      text: "Interaksi ketiga komponen tersebut menghasilkan berbagai fenomena penting, seperti pergeseran fase, impedansi, dan resonansi."
    }]

  },
  { heading:

    "🚀 Next Mission", blocks: [{ type: "heading", text: "🚀 Next Mission" },
    {
      type: "paragraph",
      text: "Bagaimana sebuah resistor berperilaku ketika dialiri arus bolak-balik?"
    },
    { type: "paragraph", text: "➡️ Selanjutnya: Resistor pada Arus AC." }]

  }]

};

export default pengantarrlc;