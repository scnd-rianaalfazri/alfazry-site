import { caption, image, text } from "framer-motion/client";
import fisikaSbgProsesImg from "/src/assets/Materi/HakikatIlmuFisika/FisikaSebagaiProses1.jpg";
import prosesilmiahImg from "/src/assets/Materi/HakikatIlmuFisika/FisikaSebagaiProses2.jpg";
import intimateriImg from "/src/assets/Materi/HakikatIlmuFisika/FisikaSebagaiProses3.jpg";
import definisifisikasbgprosesImg from "/src/assets/Materi/HakikatIlmuFisika/FisikaSebagaiProses5.jpg";
import buktiprosesfisikaImg from "/src/assets/Materi/HakikatIlmuFisika/FisikaSebagaiProses4.jpg";
import sikluspenelitianImg from "/src/assets/Materi/HakikatIlmuFisika/FisikaSebagaiProses7.jpg";
import contohkehidupanImg from "/src/assets/Materi/HakikatIlmuFisika/FisikaSebagaiProses8.jpg";
import tahukahkamuImg from "/src/assets/Materi/HakikatIlmuFisika/FisikaSebagaiProses9.jpg";
import ringkasanImg from "/src/assets/Materi/HakikatIlmuFisika/FisikaSebagaiProses10.jpg";
import miskonsepsiImg from "/src/assets/Materi/HakikatIlmuFisika/FisikaSebagaiProses11.jpg";
import nextmissionfisikasebagaisikapImg from "/src/assets/Materi/HakikatIlmuFisika/FisikaSebagaiProses14.jpg";
import bonusImg from "/src/assets/Materi/HakikatIlmuFisika/FisikaSebagaiProses15.jpg";
import { List } from "lucide-react";

const fisikasbgproses = {
  title: "Fisika sebagai Proses",
  slug: "fisika-sebagai-proses",
  description:
  "Memahami bahwa pengetahuan fisika diperoleh melalui proses penyelidikan ilmiah yang sistematis.",
  chapter: "🔬 Hakikat Ilmu Fisika & Metode Ilmiah",

  content: [
  {
    blocks: [
    {
      type: "image",
      src: fisikaSbgProsesImg,
      caption: "Setiap penemuan besar dimulai dari rasa ingin tahu."
    },
    {
      type: "paragraph",
      text: "Pernahkah kamu merenung sejenak dan bertanya: Mengapa buah apel jatuh tegak lurus ke bawah, tetapi Bulan yang sangat besar itu tidak jatuh menabrak Bumi?"
    },
    {
      type: "paragraph",
      text: "ertanyaan-pertanyaan sederhana seperti itulah yang sering kali menjadi gerbang awal dari sebuah penemuan ilmiah yang mengubah peradaban."
    },
    {
      type: "paragraph",
      text: "Dalam ilmu fisika, pengetahuan tidak pernah muncul dari tebakan acak, ramalan, atau cocoklogi. Semuanya dibangun melalui sebuah proses penyelidikan yang sistematis."
    }]

  },
  { heading:



    "🧪 Apa yang Dimaksud Fisika sebagai Proses?", blocks: [{ type: "heading", text: "🧪 Apa yang Dimaksud Fisika sebagai Proses?"
    },
    {
      type: "image",
      src: definisifisikasbgprosesImg,
      caption: "pengamatan di sekitar lingkungan"
    },
    {
      type: "paragraph",
      text: "Fisika sebagai proses (physics as a process) adalah cara atau metodologi yang digunakan oleh para ilmuwan untuk memperoleh pengetahuan tentang alam semesta."
    },
    {
      type: "paragraph",
      text: "Pengetahuan fisika tidak turun begitu saja dari langit, melainkan diraih secara bertahap melalui rantai pengamatan yang ketat, pengujian di laboratorium, analisis data yang objektif, dan penarikan kesimpulan berdasarkan bukti-bukti nyata."
    }]

  },
  { heading:



































    "🔄 Bagaimana Pengetahuan Fisika Dibangun?", List: { type: "unordered", items: [{ text: "👀 Mengamati fenomena", description: "Melihat dan mencermati kejadian unik di sekitar alam." }, { text: "❓ Mengajukan pertanyaan", description: "Merumuskan masalah yang ingin dipecahkan (Mengapa? Bagaimana?)." }, { text: "💭 Menyusun hipotesi", description: "Membuat dugaan atau jawaban sementara yang logis." }, { text: "🧪 Melakukan eksperimen", description: "Menguji hipotesis secara langsung melalui serangkaian percobaan terkontrol." }, { text: "📊 Menganalisis data", description: "Mengolah, membaca, dan menginterpretasikan angka atau hasil dari eksperimen." }, { text: "📖 Menarik kesimpulan", description: "Menentukan apakah data eksperimen mendukung atau justru membantah hipotesis awal." }] }, blocks: [{ type: "heading", text: "🔄 Bagaimana Pengetahuan Fisika Dibangun?" },
    { type: "image", src: prosesilmiahImg, caption: "Proses ilmiah" },
    {
      type: "paragraph",
      text: "Secara umum, para fisikawan bekerja menggunakan alur berpikir yang terstruktur yang dinamakan Metode Ilmiah. Tahapan-tahapan proses ilmiah ini meliputi:"
    }]

  },
  { heading:

    "🔍 Mengapa Harus Berdasarkan Bukti?", blocks: [{ type: "heading", text: "🔍 Mengapa Harus Berdasarkan Bukti?" },
    {
      type: "image",
      src: buktiprosesfisikaImg,
      caption: "Pendapat vs bukti"
    },
    {
      type: "paragraph",
      text: "Dalam dunia sains, sebuah pendapat atau teori tidak akan dianggap benar hanya karena terdengar masuk akal atau karena diucapkan oleh orang terkenal."
    },
    { type: "paragraph", text: "Pendapat tanpa data hanyalah rumor." },
    {
      type: "paragraph",
      text: "Setiap pernyataan ilmiah wajib didukung oleh data valid dan hasil eksperimen empiris yang dapat diuji kembali (reproducible) oleh siapa pun, kapan pun, dan di mana pun."
    }]

  },
  { heading:

    "🔁 Proses yang Terus Berulang", blocks: [{ type: "heading", text: "🔁 Proses yang Terus Berulang" },
    {
      type: "image",
      src: sikluspenelitianImg,
      caption: "Siklus penelitian ilmiah"
    },
    {
      type: "paragraph",
      text: "Penelitian ilmiah hampir tidak pernah langsung sukses pada percobaan pertama. Kegagalan adalah makanan sehari-hari para ilmuwan."
    },
    {
      type: "paragraph",
      text: "Oleh karena itu, penelitian fisika adalah proses yang terus berulang (siklus) demi mendekati kebenaran yang paling akurat."
    },
    {
      type: "paragraph",
      text: "Jika hasil eksperimen tidak sesuai, ilmuwan akan kembali ke meja kerja untuk mengulang eksperimen, memperbaiki metode pengumpulan data, atau bahkan merombak total hipotesis mereka demi mendapatkan hasil yang valid."
    }]

  },
  { heading:


    "🌍 Contoh dalam Kehidupan", Caption: "Penelitian di lab futuristik", blocks: [{ type: "heading", text: "🌍 Contoh dalam Kehidupan" },
    { type: "image", src: contohkehidupanImg },
    {
      type: "paragraph",
      text: "Bayangkan kamu sedang penasaran: 'Apakah panjang tali pada ayunan akan memengaruhi waktu yang dibutuhkan bandul untuk berayun?'"
    },
    {
      type: "paragraph",
      text: "Sebagai orang yang berpikir ilmiah, kamu tidak boleh cuma menebak-nebak ('Kayaknya sih makin panjang makin cepet...')."
    },
    {
      type: "paragraph",
      text: "Kamu harus bertindak! Kamu ambil tali dengan berbagai ukuran variasi, mengikat beban, mengayunkannya, menghitung waktunya dengan stopwatch, lalu mencatat datanya secara jujur."
    },
    {
      type: "paragraph",
      text: "Dari data itulah kamu baru bisa menarik kesimpulan yang valid."
    }]

  },
  { heading:


    "💡 Tahukah Kamu?", Caption: "Penemuan besar dimuali dari pengamatan.", blocks: [{ type: "heading", text: "💡 Tahukah Kamu?" },
    { type: "image", src: tahukahkamuImg },
    {
      type: "paragraph",
      text: "Banyak penemuan besar dalam sejarah fisika lahir dari pengamatan hal-hal remeh yang kemudian diinvestigasi secara serius melalui eksperimen mendalam."
    },
    {
      type: "paragraph",
      text: "Kuncinya bukan seberapa rumit alatnya, melainkan seberapa konsisten proses ilmiah yang dijalankan!"
    }]

  },
  { heading:

    "⚠️ Miskonsepsi", blocks: [{ type: "heading", text: "⚠️ Miskonsepsi" },
    {
      type: "image",
      src: miskonsepsiImg,
      caption: "Miskonsepsi tentang hipotesis"
    },
    {
      type: "paragraph",
      text: "'Tujuan eksperimen itu untuk membuktikan kalau tebakan (hipotesis) kita 100% benar, kan?' ❌"
    },
    { type: "paragraph", text: "Gak, gitu! " },
    {
      type: "paragraph",
      text: "Eksperimen bukan alat untuk validasi ego agar hipotesis kita terlihat selalu benar."
    },
    {
      type: "paragraph",
      text: "Tujuan utama eksperimen adalah untuk menguji secara objektif apakah hipotesis tersebut didukung oleh bukti nyata atau tidak."
    },
    {
      type: "paragraph",
      text: "Hipotesis yang terbukti salah lewat eksperimen tetaplah sebuah kontribusi besar bagi sains karena memberi tahu peneliti lain jalan mana yang buntu."
    }]

  },
  { heading:

    "📊 Ringkasan Konsep", blocks: [{ type: "heading", text: "📊 Ringkasan Konsep" },
    {
      type: "image",
      src: ringkasanImg,
      caption: "Ilustrasi ringkasan konsep"
    },
    { type: "paragraph", text: "Fenomena Alam" },
    { type: "paragraph", text: "⬇️" },
    { type: "paragraph", text: "Pengamatan" },
    { type: "paragraph", text: "⬇️" },
    { type: "paragraph", text: "Hipotesis" },
    { type: "paragraph", text: "⬇️" },
    { type: "paragraph", text: "Eksperimen" },
    { type: "paragraph", text: "⬇️" },
    { type: "paragraph", text: "Analisis" },
    { type: "paragraph", text: "⬇️" },
    { type: "paragraph", text: "Kesimpulan" }]

  },
  { heading:

    "✨ Inti Materi (Takeaway Message)", blocks: [{ type: "heading", text: "✨ Inti Materi (Takeaway Message)" },
    {
      type: "paragraph",
      text: "Fisika berkembang secara dinamis melalui proses ilmiah yang sistematis, objektif, dan berbasis pada bukti (evidence-based) yang didapatkan dari hasil pengamatan maupun eksperimen nyata."
    }]

  },
  { heading:

    "🔍 Bonus", blocks: [{ type: "heading", text: "🔍 Bonus" },
    { type: "image", src: bonusImg }]

  },
  { heading:

    "🎯 Quick Check", blocks: [{ type: "heading", text: "🎯 Quick Check" },
    {
      type: "quickCheck",
      data: {
        questions: [
        {
          question: "Yang dimaksud fisika sebagai proses adalah....",
          options: [
          "Kumpulan hukum dan teori yang telah ditemukan.",
          "Cara ilmuwan memperoleh pengetahuan melalui penyelidikan ilmiah.",
          "Sikap yang harus dimiliki setiap ilmuwan.",
          "Penggunaan teknologi dalam kehidupan sehari-hari.",
          "Cabang fisika yang mempelajari gerak benda."],


          answerIndex: 1
        },
        {
          question: "Manakah urutan proses ilmiah yang paling tepat?",
          options: [
          "Kesimpulan → Hipotesis → Pengamatan → Eksperimen",
          "Pengamatan → Pertanyaan → Hipotesis → Eksperimen → Analisis → Kesimpulan",
          "Hipotesis → Kesimpulan → Pengamatan → Analisis",
          "Eksperimen → Pengamatan → Hipotesis → Kesimpulan",
          "Pengamatan → Eksperimen → Kesimpulan → Hipotesis → Analisis"],


          answerIndex: 1
        },
        {
          question:
          "Mengapa hasil penelitian ilmiah harus didukung oleh bukti?",
          options: [
          "Agar hasilnya terlihat lebih menarik.",
          "Karena pendapat seseorang selalu benar.",
          "Agar kesimpulan dapat diuji dan dipercaya oleh orang lain.",
          "Supaya eksperimen tidak perlu diulang.",
          "Karena semua hipotesis pasti benar."],


          answerIndex: 2
        },
        {
          question:
          "Seorang siswa ingin mengetahui apakah panjang tali memengaruhi waktu ayunan bandul. Langkah yang paling tepat adalah....",
          options: [
          "Menebak hasilnya tanpa melakukan percobaan.",
          "Bertanya kepada teman lalu langsung menarik kesimpulan.",
          "Melakukan eksperimen, mencatat data, kemudian menganalisis hasilnya.",
          "Mencari jawaban di internet tanpa melakukan pengamatan.",
          "Mengubah hasil pengamatan agar sesuai dengan dugaan."],


          answerIndex: 2
        },
        {
          question: "Pernyataan yang benar mengenai hipotesis adalah....",
          options: [
          "Hipotesis harus selalu terbukti benar.",
          "Hipotesis adalah dugaan sementara yang perlu diuji melalui eksperimen.",
          "Hipotesis sama dengan kesimpulan akhir penelitian.",
          "Hipotesis tidak boleh berubah meskipun data menunjukkan hasil yang berbeda.",
          "Hipotesis dibuat setelah eksperimen selesai dilakukan."],


          answerIndex: 1
        }],


        scoring: [
        {
          min: 5,
          max: 5,
          emoji: "🏆",
          title: "Mission Complete!",
          message: "Kamu siap memasuki portal berikutnya."
        },
        {
          min: 4,
          max: 4,
          emoji: "🚀",
          title: "Hampir Sempurna",
          message: "Pemahamanmu sudah sangat baik."
        },
        {
          min: 2,
          max: 3,
          emoji: "🔄",
          title: "Perlu Sedikit Lagi",
          message: "Coba eksplorasi lagi bagian inti materi."
        },
        {
          min: 0,
          max: 1,
          emoji: "📖",
          title: "Ulangi Petualangan",
          message: "Tenang, ulangi petualanganmu dari awal."
        }]
      }
    }]
  },
  {
    link: "/materi/fisika-sebagai-sikap",
    blocks: [
    {
      type: "image",
      src: nextmissionfisikasebagaisikapImg,
      caption: "🚀 KLIK GAMBAR INI! Kamu bisa menuju ke portal berikutnya."
    },
    {
      type: "paragraph",
      text: "Apakah kamu sudah paham bagaimana ilmu fisika itu diproses dan dibangun?"
    },
    {
      type: "paragraph",
      text: "Namun, proses ilmiah yang keren ini tidak akan berjalan lancar tanpa adanya karakter atau mindset yang benar dari sang peneliti."
    },
    {
      type: "paragraph",
      text: "Selain menghasilkan pengetahuan dan metode, fisika juga membentuk karakter serta cara berperilaku seorang ilmuwan."
    },
    {
      type: "paragraph",
      text: "➡️ Next, kita menuju portal: Fisika sebagai Sikap Ilmiah."
    }]

  },
  { heading:

    "Referensi:", blocks: [{ type: "heading", text: "Referensi:" },
    {
      type: "paragraph",
      text: "Halliday, Resnick & Walker. Fundamentals of Physics."
    },
    {
      type: "paragraph",
      text: "Serway & Jewett. Physics for Scientists and Engineers."
    },
    {
      type: "paragraph",
      text: "Young & Freedman. University Physics with Modern Physics."
    },
    {
      type: "paragraph",
      text: "Kemendikbudristek RI. Buku Fisika SMA/MA."
    }]

  }]

};

export default fisikasbgproses;