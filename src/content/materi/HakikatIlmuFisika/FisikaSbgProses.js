import { caption, image } from "framer-motion/client"
import fisikaSbgProsesImg from "/src/assets/Materi/HakikatIlmuFisika/FisikaSebagaiProses1.jpg"
import prosesilmiahImg from "/src/assets/Materi/HakikatIlmuFisika/FisikaSebagaiProses2.jpg"
import intimateriImg from "/src/assets/Materi/HakikatIlmuFisika/FisikaSebagaiProses3.jpg"
import definisifisikasbgprosesImg from "/src/assets/Materi/HakikatIlmuFisika/FisikaSebagaiProses5.jpg"
import buktiprosesfisikaImg from "/src/assets/Materi/HakikatIlmuFisika/FisikaSebagaiProses4.jpg"
import sikluspenelitianImg from "/src/assets/Materi/HakikatIlmuFisika/FisikaSebagaiProses7.jpg"
import contohkehidupanImg from "/src/assets/Materi/HakikatIlmuFisika/FisikaSebagaiProses8.jpg"
import tahukahkamuImg from "/src/assets/Materi/HakikatIlmuFisika/FisikaSebagaiProses9.jpg"
import ringkasanImg from "/src/assets/Materi/HakikatIlmuFisika/FisikaSebagaiProses10.jpg"
import miskonsepsiImg from "/src/assets/Materi/HakikatIlmuFisika/FisikaSebagaiProses11.jpg"
import nextmissionfisikasebagaisikapImg from "/src/assets/Materi/HakikatIlmuFisika/FisikaSebagaiProses14.jpg"
import bonusImg from "/src/assets/Materi/HakikatIlmuFisika/FisikaSebagaiProses15.jpg"

const fisikasbgproses = {
  title: "Fisika sebagai Proses",
  slug: "fisika-sebagai-proses",
  description: "Memahami bahwa pengetahuan fisika diperoleh melalui proses penyelidikan ilmiah yang sistematis.",
  chapter: "🔬 Hakikat Ilmu Fisika & Metode Ilmiah",

  content: [

    {
      image: fisikaSbgProsesImg,
      caption: "Setiap penemuan besar dimulai dari rasa ingin tahu.",
      body: [
        "Pernahkah kamu bertanya mengapa apel jatuh ke bawah, tetapi Bulan tidak jatuh ke Bumi?",
        "",
        "Pertanyaan sederhana seperti itu dapat menjadi awal dari sebuah penemuan ilmiah.",
        "",
        "Dalam fisika, pengetahuan tidak muncul karena tebakan, melainkan melalui proses penyelidikan yang sistematis."
      ]
    },

    {
      heading: "🧪 Apa yang Dimaksud Fisika sebagai Proses?",
      image: definisifisikasbgprosesImg,
      caption: "pengamatan di sekitar lingkungan",
      body: [
        "Fisika sebagai proses adalah cara ilmuwan memperoleh pengetahuan tentang alam.",
        "",
        "Pengetahuan tersebut diperoleh melalui pengamatan, pengujian, analisis, dan penarikan kesimpulan berdasarkan bukti."
      ]
    },

    {
      heading: "🔄 Bagaimana Pengetahuan Fisika Dibangun?",
      image: prosesilmiahImg,
      caption: "Proses ilmiah",
      body: [
        "Secara umum, proses ilmiah berlangsung melalui tahapan berikut:",
        "",
        "👀 Mengamati fenomena",
        "❓ Mengajukan pertanyaan",
        "💭 Menyusun dugaan sementara (hipotesis)",
        "🧪 Melakukan eksperimen",
        "📊 Menganalisis data",
        "📖 Menarik kesimpulan"
      ]
    },

    {
      heading: "🔍 Mengapa Harus Berdasarkan Bukti?",
      image: buktiprosesfisikaImg,
      caption: "Pendapat vs bukti",
      body: [
        "Dalam sains, sebuah pendapat belum tentu benar hanya karena terdengar masuk akal.",
        "",
        "Setiap pernyataan harus didukung oleh data dan hasil eksperimen yang dapat diuji kembali oleh orang lain."
      ]
    },

    {
      heading: "🔁 Proses yang Terus Berulang",
      image: sikluspenelitianImg,
      caption: "Siklus penelitian ilmiah",
      body: [
        "Penelitian ilmiah tidak selalu berhasil pada percobaan pertama. Karena penelitian ialah proses yang terus berulang sampai mendekati kebenaran.",
        "",
        "Sering kali ilmuwan harus mengulang eksperimen, memperbaiki metode, atau mengembangkan hipotesis baru hingga memperoleh hasil yang lebih baik."

      ]
    },

    {
      heading: "🌍 Contoh dalam Kehidupan",
      image: contohkehidupanImg,
      Caption: "Penelitian di lab futuristik",
      body: [
        "Misalnya, seorang siswa ingin mengetahui apakah panjang tali memengaruhi waktu ayunan bandul.",
        "",
        "Ia tidak cukup hanya menebak jawabannya, tetapi harus melakukan percobaan dan mencatat hasilnya."
      ]
    },

    {
      heading: "💡 Tahukah Kamu?",
      image: tahukahkamuImg,
      Caption: "Penemuan besar dimuali dari pengamatan.",
      body: [
        "Banyak penemuan besar dalam sejarah lahir dari pengamatan sederhana yang kemudian diteliti lebih lanjut melalui eksperimen."
      ]
    },

    {
      heading: "⚠️ Miskonsepsi",
      image: miskonsepsiImg,
      caption: "Miskonsepsi tentang hipotesis",
      body: [
        "Eksperimen bukan dilakukan untuk membuktikan bahwa hipotesis kita pasti benar.",
        "",
        "Tujuan eksperimen adalah menguji apakah hipotesis tersebut didukung oleh bukti."
      ]
    },

    {
      heading: "📊 Ringkasan Konsep",
      image: ringkasanImg,
      caption: "Ilustrasi ringkasan konsep",
      body: [
        "Fenomena Alam",
        "⬇️",
        "Pengamatan",
        "⬇️",
        "Hipotesis",
        "⬇️",
        "Eksperimen",
        "⬇️",
        "Analisis",
        "⬇️",
        "Kesimpulan"
      ]
    },

    {
      heading: "✨ Inti Materi",

      body: [
        "Fisika berkembang melalui proses ilmiah yang sistematis, objektif, dan didasarkan pada bukti hasil pengamatan maupun eksperimen."
      ]
    },

    {
      heading: "🔍 Bonus",
      image: bonusImg,
    },

    {
      heading: "🎯 Quick Check",
      quickCheck: {
        questions: [
          {
            question: "Yang dimaksud fisika sebagai proses adalah....",
            options: [
              "Kumpulan hukum dan teori yang telah ditemukan.",
              "Cara ilmuwan memperoleh pengetahuan melalui penyelidikan ilmiah.",
              "Sikap yang harus dimiliki setiap ilmuwan.",
              "Penggunaan teknologi dalam kehidupan sehari-hari.",
              "Cabang fisika yang mempelajari gerak benda."
            ],
            answerIndex: 1,
          },
          {
            question:
              "Manakah urutan proses ilmiah yang paling tepat?",
            options: [
              "Kesimpulan → Hipotesis → Pengamatan → Eksperimen",
              "Pengamatan → Pertanyaan → Hipotesis → Eksperimen → Analisis → Kesimpulan",
              "Hipotesis → Kesimpulan → Pengamatan → Analisis",
              "Eksperimen → Pengamatan → Hipotesis → Kesimpulan",
              "Pengamatan → Eksperimen → Kesimpulan → Hipotesis → Analisis"
            ],
            answerIndex: 1,
          },
          {
            question: "Mengapa hasil penelitian ilmiah harus didukung oleh bukti?",
            options: [
              "Agar hasilnya terlihat lebih menarik.",
              "Karena pendapat seseorang selalu benar.",
              "Agar kesimpulan dapat diuji dan dipercaya oleh orang lain.",
              "Supaya eksperimen tidak perlu diulang.",
              "Karena semua hipotesis pasti benar."
            ],
            answerIndex: 0,
          },
          {
            question: "Seorang siswa ingin mengetahui apakah panjang tali memengaruhi waktu ayunan bandul. Langkah yang paling tepat adalah....",
            options: [
              "Menebak hasilnya tanpa melakukan percobaan.",
              "Bertanya kepada teman lalu langsung menarik kesimpulan.",
              "Melakukan eksperimen, mencatat data, kemudian menganalisis hasilnya.",
              "Mencari jawaban di internet tanpa melakukan pengamatan.",
              "Mengubah hasil pengamatan agar sesuai dengan dugaan."
            ],
            answerIndex: 2,
          },
          {
            question:
              "Pernyataan yang benar mengenai hipotesis adalah....",
            options: [
              "Hipotesis harus selalu terbukti benar.",
              "Hipotesis adalah dugaan sementara yang perlu diuji melalui eksperimen.",
              "Hipotesis sama dengan kesimpulan akhir penelitian.",
              "Hipotesis tidak boleh berubah meskipun data menunjukkan hasil yang berbeda.",
              "Hipotesis dibuat setelah eksperimen selesai dilakukan."
            ],
            answerIndex: 2,
          },
        ],
        scoring: [
          {
            min: 5,
            max: 5,
            emoji: "🏆",
            title: "Mission Complete!",
            message: "Kamu siap memasuki portal berikutnya.",
          },
          {
            min: 4,
            max: 4,
            emoji: "🚀",
            title: "Hampir Sempurna",
            message: "Pemahamanmu sudah sangat baik.",
          },
          {
            min: 2,
            max: 3,
            emoji: "🔄",
            title: "Perlu Sedikit Lagi",
            message: "Coba eksplorasi lagi bagian inti materi.",
          },
          {
            min: 0,
            max: 1,
            emoji: "📖",
            title: "Ulangi Petualangan",
            message: "Tenang, ulangi petualanganmu dari awal.",
          },
        ],
      },
    },

    {
      caption: "🚀 KLIK GAMBAR INI! Kamu bisa menuju ke portal berikutnya.",
      image: nextmissionfisikasebagaisikapImg,
      link: "/materi/fisika-sebagai-sikap",
      body: [
        "Selain menghasilkan pengetahuan dan memiliki proses ilmiah, fisika juga membentuk karakter seorang ilmuwan.",
        "",
        "➡️ Next, kita menuju portal: Fisika sebagai Sikap Ilmiah."
      ]
    },

    {
      heading: "Referensi:",
      body: [
        "Halliday, Resnick & Walker. Fundamentals of Physics.",
        "Serway & Jewett. Physics for Scientists and Engineers.",
        "Young & Freedman. University Physics with Modern Physics.",
        "Kemendikbudristek RI. Buku Fisika SMA/MA."
      ]
    }

  ]
}

export default fisikasbgproses