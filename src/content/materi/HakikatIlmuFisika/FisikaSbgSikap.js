import { caption, image, text } from "framer-motion/client";
import FisikaSgbSikapImg from "/src/assets/Materi/HakikatIlmuFisika/FisikaSebagaiSikap1.jpg";
import PengertianSikapIlmiahImg from "/src/assets/Materi/HakikatIlmuFisika/FisikaSebagaiSikap2.jpg";
import diagramsikapImg from "/src/assets/Materi/HakikatIlmuFisika/FisikaSebagaiSikap3.jpg";
import sikapilmuanImg from "/src/assets/Materi/HakikatIlmuFisika/FisikaSebagaiSikap4.jpg";

const fisikasbgsikap = {
  title: "Fisika sebagai Sikap Ilmiah",
  slug: "fisika sebagai sikap ilmiah",
  description:
    "Memahami sikap ilmiah yang perlu dimiliki dalam mempelajari fisika dan melakukan penyelidikan ilmiah.",
  chapter: "🔬 Hakikat Ilmu Fisika & Metode Ilmiah",

  content: [
    {
      blocks: [
        {
          type: "image",
          src: FisikaSgbSikapImg,
          caption:
            "Sikap ilmiah membantu kita mengambil keputusan berdasarkan bukti, bukan sekadar dugaan.",
        },
        { type: "paragraph", text: "Bayangkan dua orang melakukan percobaan." },
        {
          type: "paragraph",
          text: "Orang pertama langsung menyimpulkan hasilnya tanpa mengukur.",
        },
        {
          type: "paragraph",
          text: "Orang kedua mengamati dengan teliti, mencatat data, lalu menarik kesimpulan berdasarkan bukti.",
        },
        { type: "paragraph", text: "Siapa yang lebih bersikap ilmiah?" },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🧠 Apa Itu Sikap Ilmiah?" },
        {
          type: "image",
          src: PengertianSikapIlmiahImg,
          caption: "Perbandingan dua cara berpikir",
        },
        {
          type: "paragraph",
          text: "Sikap ilmiah adalah cara berpikir dan bertindak yang mendukung proses memperoleh pengetahuan secara objektif.",
        },
        {
          type: "paragraph",
          text: "Sikap ini tidak secara esklusif hanya untuk para ilmuwan atau profesor yang bekerja di dalam laboratorium canggih saja.",
        },
        {
          type: "paragraph",
          text: "Sikap ilmiah sebenarnya sangat berguna dan bisa kita terapkan dalam kehidupan sehari-hari demi menyaring informasi dan mengambil keputusan yang bijak.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🌟 Mengapa Sikap Ilmiah Penting?" },
        {
          type: "image",
          src: diagramsikapImg,
          caption: "Diagram sikap ilmiah",
        },
        {
          type: "paragraph",
          text: "Di era derasnya arus informasi seperti sekarang, memiliki sikap ilmiah bertindak sebagai 'filter' mental kita.",
        },
        {
          type: "paragraph",
          text: "Dengan menanamkan sikap ilmiah, kita dapat:",
        },
        {
          type: "list",
          list: {
            type: "unordered",
            items: [
              {
                text: "Mengambil keputusan berdasarkan bukti: Tidak mudah termakan omongan tanpa dasar nyata.",
              },
              {
                text: "Menghindari kesimpulan yang terburu-buru: Selalu meluangkan waktu untuk memverifikasi kebenaran.",
              },
              {
                text: "Menghargai fakta dan data: Berani bersandar pada kebenaran objektif meskipun terkadang tidak sesuai keinginan kita.",
              },
              {
                text: "Bersikap terbuka terhadap informasi baru: Siap menerima perubahan jika ada bukti baru yang lebih valid.",
              },
            ],
          },
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🔍 Sikap-Sikap Ilmiah" },
        { type: "image", src: sikapilmuanImg, caption: "Sikap-sikap ilmiah" },
        {
          type: "paragraph",
          text: "Untuk menjadi pribadi yang ilmiah, berikut adalah beberapa pilar sikap yang perlu kita asah:",
        },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "🤔 Rasa Ingin Tahu",
                description:
                  "Selalu penasaran dengan cara kerja alam semesta. Mengapa langit biru? Mengapa apel jatuh ke bawah?",
              },
              {
                text: "📏 Telit",
                description:
                  "Cermat dalam mengamati dan tidak ceroboh saat melakukan pengukuran atau analisis.",
              },
              {
                text: "⚖️ Jujur Terhadap Data",
                description:
                  "Mencatat apa adanya hasil pengamatan tanpa memanipulasi atau mengubah data agar terlihat 'sempurna' atau sesuai hipotesis awal.",
              },
              {
                text: "🧩 Berpikir Kritis:",
                description:
                  "Tidak langsung menelan mentah-mentah sebuah informasi, melainkan mempertanyakan kevalidan dan logikanya.",
              },
              {
                text: "🤝 Terbuka (Open-Minded)",
                description:
                  "Menghargai pendapat atau kritik dari orang lain, selama argumen tersebut didukung oleh bukti kuat.",
              },
              {
                text: "💪 Tekun",
                description:
                  "Tidak mudah menyerah ketika eksperimen gagal, melainkan terus mencari tahu letak kesalahannya.",
              },
              {
                text: "🎯 Bertanggung Jawab",
                description:
                  "Siap mempertanggungjawabkan hasil temuan serta proses penelitian yang telah dilakukan.",
              },
            ],
          },
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🌍 Contoh dalam Kehidupan" },
        {
          type: "list",
          list: {
            type: "ordered",
            items: [
              {
                text: "Saat Berselancar di Internet (Life Skill)",
                description: [
                  "Misalnya saat kamu membaca berita viral atau info heboh di media sosial. Seseorang yang memiliki sikap ilmiah tidak akan langsung percaya dan langsung membagikannya (share).",
                  "",
                  "Ia akan bertindak kritis terlebih dahulu:",
                ],

                children: {
                  type: "unordered",
                  items: [
                    "memeriksa dari mana sumber informasinya,",
                    "mencari tahu apakah ada bukti pendukung dari sumber tepercaya, dan",
                    "membandingkannya dengan fakta lain sebelum menyimpulkan berita itu hoax atau bukan.",
                  ],
                },
              },
              {
                text: "Saat Praktikum di Laboratorium Sekolah",
                description: [
                  "Ketika jam praktikum fisika, sikap ilmiah ditunjukkan dengan kedisiplinan tingkat tinggi.",
                  "",
                  "Kamu mencatat angka hasil ukur apa adanya (misal jika hasilnya 4,9 cm ya ditulis 4,9 cm, bukan dibulatkan paksa menjadi 5,0 cm hanya demi terlihat pas sesuai rumus).",
                  "",
                  "Kamu juga mengikuti prosedur keselamatan dan tidak memanipulasi data praktikum kelompokmu.",
                ],
              },
            ],
          },
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "💡 Tahukah Kamu?" },
        {
          type: "paragraph",
          text: "Banyak penemuan besar sains yang mengubah dunia justru tidak berawal dari formula rumit nan megah, melainkan dari rasa ingin tahu terhadap hal-hal sederhana di sekitar kita yang sering dilewatkan orang lain.",
        },
        {
          type: "paragraph",
          text: "Contohnya, Sir Isaac Newton yang penasaran dengan jatuhnya buah apel hingga akhirnya merumuskan Teori Gravitasi Universal!",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "⚠️ Miskonsepsi" },
        {
          type: "paragraph",
          text: "'Berarti kalau bersikap ilmiah, kita harus jadi orang skeptis yang meragukan segala hal di dunia ini dong?' ❌",
        },
        {
          type: "paragraph",
          text: "Gak, gitu! Sikap ilmiah bukan berarti selalu meragukan semua hal tanpa akhir. Sikap ilmiah berarti kita bersedia menerima atau menolak suatu pendapat secara rasional berdasarkan bukti yang dapat dipertanggungjawabkan secara nyata.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "📊 Ringkasan Konsep" },
        { type: "paragraph", text: "Rasa Ingin Tahu" },
        { type: "paragraph", text: "⬇️" },
        { type: "paragraph", text: "Pengamatan" },
        { type: "paragraph", text: "⬇️" },
        { type: "paragraph", text: "Data" },
        { type: "paragraph", text: "⬇️" },
        { type: "paragraph", text: "Analisis" },
        { type: "paragraph", text: "⬇️" },
        { type: "paragraph", text: "Kesimpulan yang Objektif" },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "✨ Inti Materi (Takeaway Message)" },
        {
          type: "paragraph",
          text: "Sikap ilmiah merupakan fondasi paling mendasar dalam mempelajari ilmu fisika maupun saat melakukan penelitian sains lainnya.",
        },
        {
          type: "paragraph",
          text: "Dengan mempraktikkan sikap jujur, teliti, kritis, dan terbuka terhadap kebenaran bukti, kita tidak hanya mampu memperoleh pengetahuan yang lebih dapat dipercaya, tetapi juga melatih diri menjadi individu yang bijak dalam berpikir sehari-hari.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "🎯 Quick Check" },
        {
          type: "quickCheck",
          data: {
            questions: [
              {
                question: "Yang dimaksud sikap ilmiah adalah....",
                options: [
                  "Kemampuan menghafal rumus-rumus fisika.",
                  "Cara berpikir dan bertindak yang mendukung proses memperoleh pengetahuan secara objektif.",
                  "Kemampuan menyelesaikan soal fisika dengan cepat.",
                  "Sikap untuk selalu membenarkan pendapat sendiri.",
                  "Keterampilan menggunakan alat laboratorium.",
                ],

                answerIndex: 1,
              },
              {
                question: "Manakah yang merupakan contoh sikap ilmiah?",
                options: [
                  "Mengubah data agar sesuai dengan hipotesis.",
                  "Menarik kesimpulan tanpa melakukan pengamatan.",
                  "Jujur mencatat hasil pengamatan meskipun tidak sesuai harapan.",
                  "Menolak semua pendapat orang lain.",
                  "Menyalin hasil percobaan kelompok lain.",
                ],

                answerIndex: 2,
              },
              {
                question:
                  "Mengapa sikap ilmiah penting dalam kehidupan sehari-hari?",
                options: [
                  "Agar semua pendapat kita selalu benar.",
                  "Agar dapat mengambil keputusan berdasarkan bukti dan fakta.",
                  "Agar tidak perlu melakukan pengamatan.",
                  "Agar hasil percobaan selalu sesuai harapan.",
                  "Agar lebih mudah menghafal rumus fisika.",
                ],

                answerIndex: 1,
              },
              {
                question:
                  "Saat membaca berita di internet, seseorang yang memiliki sikap ilmiah akan....",
                options: [
                  "Langsung mempercayai isi berita.",
                  "Membagikan berita tanpa memeriksa kebenarannya.",
                  "Memeriksa sumber informasi dan mencari bukti pendukung sebelum menyimpulkan.",
                  "Memilih berita yang sesuai dengan pendapatnya saja.",
                  "Mengabaikan semua informasi yang dibaca.",
                ],

                answerIndex: 2,
              },
              {
                question:
                  "Pernyataan yang benar mengenai sikap ilmiah adalah....",
                options: [
                  "Sikap ilmiah berarti selalu meragukan semua informasi.",
                  "Sikap ilmiah hanya diperlukan oleh ilmuwan di laboratorium.",
                  "Sikap ilmiah berarti menerima atau menolak suatu pendapat berdasarkan bukti yang dapat dipertanggungjawabkan.",
                  "Sikap ilmiah bertujuan membuktikan bahwa pendapat kita selalu benar.",
                  "Sikap ilmiah hanya digunakan saat melakukan praktikum.",
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
      ],
    },
    {
      link: "/materi/ruang-lingkup-fisika",
      blocks: [
        {
          type: "paragraph",
          text: "Apakah kamu memahami apa itu sikap ilmiah sebagai salah satu pilar hakikat fisika?",
        },
        {
          type: "paragraph",
          text: "Namun, setelah memiliki sikap ini, apa saja sih kapling atau bidang luas yang dipelajari di dalam fisika?",
        },
        {
          type: "paragraph",
          text: "➡️ Next, kita menuju portal: Ruang Lingkup Fisika.",
        },
      ],
    },
    {
      blocks: [
        { type: "heading", text: "Referensi:" },
        {
          type: "paragraph",
          text: "Halliday, Resnick & Walker. Fundamentals of Physics.",
        },
        {
          type: "paragraph",
          text: "Serway & Jewett. Physics for Scientists and Engineers.",
        },
        {
          type: "paragraph",
          text: "Young & Freedman. University Physics with Modern Physics.",
        },
        {
          type: "paragraph",
          text: "Kemendikbudristek RI. Buku Fisika SMA/MA.",
        },
      ],
    },
  ],
};

export default fisikasbgsikap;
