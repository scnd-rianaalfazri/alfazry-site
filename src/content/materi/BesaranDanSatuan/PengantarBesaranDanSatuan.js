import img1 from "/src/assets/Materi/BesaranDanSatuan/portal-besaran-dan-satuan.png"
import img2 from "/src/assets/Materi/BesaranDanSatuan/pengantar-besaran1.png"
import img3 from "/src/assets/Materi/BesaranDanSatuan/pengantar-besaran2.png"

const pengantarbesarandansatuan = {
  title: "Pengantar Besaran dan Satuan",
  slug: "pengantar-besaran-dan-satuan",
  description: "Memahami pentingnya pengukuran sebagai dasar fisika untuk mengubah pengamatan menjadi data yang objektif.",
  chapter: "📏 Pengukuran",

  content: [
    {
      blocks: [
        {
          type: "image",
          src: img2
        },
        { 
          type: "paragraph", 
          text: [
            "Bayangkan seorang teman berkata, \"Tas ini berat.\" Teman lain berkata, \"Motor itu sangat cepat.\"",
            "Menurutmu, seberapa berat? Seberapa cepat? Kata-kata itu memberi gambaran, tetapi belum memberi data yang bisa dibandingkan."
          ]
        }
      ]
    },
    {
      heading: "❓ Pertanyaan Besar",
      blocks: [
        { 
          type: "paragraph", 
          text: "Bagaimana fisika mengubah sesuatu yang kita amati menjadi informasi yang objektif?" 
        }
      ]
    },
    {
      heading: "📏 Dari Pengamatan Menjadi Data",
      blocks: [
        { 
          type: "paragraph", 
          text: [
            "Fisika dibangun melalui pengamatan dan metode ilmiah. Agar pengamatan dapat dianalisis, fenomena perlu dinyatakan dalam data." ,
            "Pengukuran membantu mengubah pengamatan menjadi data yang dapat dibandingkan dan dianalisis."
          ]
        }
      ]
    },
    {
      heading: "👀 Visualisasi Konsep",
      blocks: [
        {
          type: "image",
          src: img3
        },
        { 
          type: "paragraph", 
          text: [
            "Bayangkan kalian mengukur panjang sebuah benda. Ia memilih alat, menentukan satuan, membaca skala, lalu mencatat hasilnya.",
            "Jadi, pengukuran bukan sekadar melihat angka. Ada proses di balik angka tersebut."
          ] 
        }
      ]
    },
    {
      heading: "🧠 Analisis",
      blocks: [
        { 
          type: "paragraph", 
          text: [
            "jika dua orang mengukur benda yang sama menggunakan alat dan satuan yang sesuai, hasilnya dapat dibandingkan.",
            "Standar dan prosedur membuat data menjadi lebih bermakna."
          ] 
        },
      ]
    },
    {
      heading: "🌍 Pengukuran Ada di Sekitar Kita",
      blocks: [
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "⌚ Waktu "
              },
              {
                text: "🌡️ Suhu",
              },
              {
                text: "⚖️ massa"
              },
              {
                text: "📏 panjang",
              },
              {
                text: "🚗 kecepatan"
              }
            ]
          }
        },
        { 
          type: "paragraph", 
          text: "Itu adalah contoh besaran yang kita temui setiap hari."
        }
      ]
    },
    {
      heading: "⚠️ Miskonsepsi",
      blocks: [
        { 
          type: "paragraph", 
          text: "Pengukuran bukan hanya membaca angka pada alat ukur. Pengukuran juga mencakup pemilihan alat, satuan, teknik membaca, dan pemahaman terhadap keterbatasan hasil."
        },
      ]
    },
    {
      heading: "🌟 *Fun Fact*",
      blocks: [
        { 
          type: "paragraph", 
          text: "Pengukuran jarak Bumi–Bulan menggunakan laser dapat dilakukan dengan ketelitian yang sangat tinggi meskipun jaraknya sekitar 384.400 km."
        },
      ]
    },
    {
      heading: "✨ Inti Materi",
      blocks: [
        { 
          type: "paragraph", 
          text: "Pengukuran adalah cara fisika mengubah fenomena alam menjadi data yang dapat dinyatakan, dibandingkan, dan dianalisis."
        },
      ]
    },
    {
      heading: "📝 Latihan",
      blocks: [
        { 
          type: "paragraph", 
          text: "Kita sudah tahu mengapa pengukuran penting. Sekarang kita perlu memahami apa yang sebenarnya diukur dan bagaimana hasilnya dinyatakan."
        },
        {
          type: "image",
          src: img1,
          caption: "🚀 Kamu bisa KLIK GAMBAR INI untuk menuju portal selanjutnya",
          link: "/materi/besaran-dan-satuan"
        }
      ]
    }
  ]
};

export default pengantarbesarandansatuan;
