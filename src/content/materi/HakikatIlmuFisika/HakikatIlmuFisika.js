import img1 from "/src/assets/Materi/HakikatIlmuFisika/hakikat-ilmu-fisika1.png"
import img2 from "/src/assets/Materi/HakikatIlmuFisika/hakikat-ilmu-fisika2.png"
import img3 from "/src/assets/Materi/HakikatIlmuFisika/portal-fisika-sebagai-produk.png"

const hakikatIlmuFisika = {
  title: "Hakikat Ilmu Fisika",
  slug: "hakikat-ilmu-fisika",
  description:  "Memahami hakikat ilmu fisika sebagai produk, proses, dan sikap ilmiah dalam mempelajari alam.",
  chapter: "🔬 Hakikat Ilmu Fisika & Metode Ilmiah",

  content: [
  {
    blocks: [
      {
        type: "image",
        src: img1
      },
      {
        type: "paragraph",
        text: [
          "Banyak yang mengira kalau belajar fisika itu berarti siap-siap pusing ketemu kumpulan rumus matematis yang njelimet.",
          "Padahal, rumus itu cuma 'bahasa' buat menjelaskan sesuatu yang jauh lebih besar. Hakikat ilmu fisika sebenarnya adalah cara pandang untuk memahami bagaimana alam semesta ini bekerja.",
          "Para ilmuwan membagi hakikat fisika menjadi 3 pilar utama: [Fisika sebagai Produk](/materi/fisika-sebagai-produk), [Fisika sebagai Proses](/materi/fisika-sebagai-proses), dan [Fisika sebagai Sikap](/materi/fisika-sebagai-sikap). Let's spill the details!"
        ]
      }
    ]
  },
  { heading: "🌱 Apa yang Dimaksud Hakikat Ilmu Fisika?", 
    blocks: [
      {
        type: "paragraph",
        text: "Hakikat ilmu fisika adalah karakter atau sifat dasar fisika sebagai ilmu pengetahuan.",
      },
      {
        type: "quote",
        text: "Fisika tidak hanya menghasilkan pengetahuan, tetapi juga memiliki cara kerja dan sikap yang harus dimiliki seorang ilmuwan."
      }
    ]
  },
  { heading: "🧩 Tiga Pilar Hakikat Fisika", 
    blocks: [
      {
        type: "image",
        src: img2
      },
      {
        type: "list",
        list: {
          type: "ordered",
          items: [
            {
              text: "[Fisika sebagai Produk (*A Body of Knowledge*)](/materi/fisika-sebagai-produk)",
              description: [
                "Pilar pertama adalah kumpulan pengetahuan yang berhasil dikumpulkan oleh para ilmuwan selama berabad-abad.",
                "Produk fisika ini gak asal tebak, tapi sudah teruji dan tersistematisasi dalam beberapa bentuk:"
              ],
              children: {
                type: "unordered",
                items: [
                  {
                    text: "Fakta"
                  },
                  {
                    text: "Konsep"
                  },
                  {
                    text: "Prinsip"
                  },
                  {
                    text: "Hukum"
                  },
                  {
                    text: "Model"
                  }
                ]
              }
            },
            {
              text: "[Fisika sebagai Proses (*A Way of Investigating*)](/materi/fisika-sebagai-proses)",
              description: [
                "Fisika gak jatuh dari langit secara instan. Ada proses investigasi yang ketat di baliknya.",
                "Pilar proses ini menggambarkan langkah-langkah metodologis atau metode ilmiah yang digunakan ilmuwan untuk membuktikan sesuatu.",
                "Proses ini dimulai dari melakukan pengamatan (observasi), merumuskan masalah, menyusun hipotesis, melakukan eksperimen seru di lab, menganalisis data empiris, sampai akhirnya menarik kesimpulan. No data, no-cap!"
              ]
            },
            {
              text: "[Fisika sebagai Sikap (*A Way of Thinking*)](/materi/fisika-sebagai-sikap)",
              description: [
                "Pilar terakhir dan yang paling penting adalah *mindset* atau sikap ilmiah.",
                "Untuk bisa mengungkap rahasia alam, kamu harus punya karakteristik berpikir tertentu, di antaranya:"
              ],
              children: {
                type: "unordered",
                items: [
                  {
                    text: "Rasa ingin tahu yang tinggi (*curiosity* yang gak ada habisnya)."
                  },
                  {
                    text: "Jujur dan objektif (mencatat data apa adanya, gak dimanipulasi demi konten atau hasil instan)."
                  },
                  {
                    text: "Terbuka dan kritis (siap menerima kritik dan perubahan kalau ada bukti baru yang lebih valid)."
                  },
                  {
                    text: "Tekun dan gak gampang menyerah walau eksperimen gagal berulang kali."
                  }
                ]
              }
            },
          ]
        }
      }
    ]
  },
  { heading: "🌍 Mengapa Hakikat Fisika Penting?", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Dengan memahami hakikat fisika, kita tidak hanya mengetahui hasil akhir suatu penemuan.",
          "Kita juga memahami bagaimana pengetahuan tersebut diperoleh dan mengapa hasilnya dapat dipercaya."
        ]
      },
    ]
  },
  { heading:  "🌟 *Fun Fact*", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Banyak teori fisika yang kita gunakan saat ini telah mengalami penyempurnaan selama ratusan tahun.",
          "Hal ini menunjukkan bahwa ilmu pengetahuan selalu berkembang ketika ditemukan bukti-bukti baru."
        ]
      }
    ]
  },
  { heading: "⚠️ Miskonsepsi", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Fisika bukan kumpulan rumus yang harus dihafal. ❌",
          "Rumus hanyalah alat untuk menjelaskan hubungan antarbesaran. ✔️",
          "Yang lebih penting adalah memahami konsep dan cara berpikir ilmiah di baliknya."
        ]
      },
    ]
  },
  { heading: "✨ Inti Materi", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Hakikat ilmu fisika terdiri atas tiga aspek yang saling berkaitan, yaitu fisika sebagai produk, proses, dan sikap ilmiah.",
          "Ketiga aspek inilah yang membentuk cara kerja ilmu pengetahuan."
        ]
      },
    ]
  },
  { heading: "🎯 Quick Check", 
    blocks: [
      {
        type: "quickCheck",
        data: {
          questions: [
            {
              question: "Hakikat ilmu fisika adalah....",
              options: [
                "Kumpulan rumus yang harus dihafal.",
                "Karakter atau sifat dasar fisika",
                "Cara menghitung besaran fisika.",
                "Cabang ilmu yang hanya mempelajari gerak benda."
              ],
              answerIndex: 1
            },
            {
              question: "Manakah yang bukan termasuk tiga pilar hakikat ilmu fisika?",
              options: [
                "Fisika sebagai Produk",
                "Fisika sebagai Proses",
                "Fisika sebagai Sikap Ilmiah",
                "Fisika sebagai Teknologi"
              ],
              answerIndex: 3
            },
            {
              question: "Seorang ilmuwan melakukan pengamatan, menyusun hipotesis, melakukan eksperimen, lalu menarik kesimpulan. Kegiatan tersebut menunjukkan fisika sebagai....",
              options: [
                  "Produk", 
                  "Proses", 
                  "Sikap", 
                  "Teknologi"
                ],
              answerIndex: 1
            },
            {
              question:
              "Sikap berikut yang mencerminkan sikap ilmiah adalah....",
              options: [
                "Mengubah data agar sesuai dengan harapan.",
                "Menghafal semua rumus tanpa memahami konsep.",
                "Jujur terhadap hasil eksperimen meskipun tidak sesuai dugaan.",
                "Menolak pendapat orang lain tanpa bukti."
              ],
              answerIndex: 2
            },
            {
              question: "Contoh fisika sebagai produk adalah....",
              options: [
                "Melakukan percobaan di laboratorium.",
                "Mengamati gerak benda setiap hari.",
                "Hukum Newton, teori, konsep, dan prinsip yang telah ditemukan.",
                "Bersikap teliti saat melakukan pengukuran."
              ],
              answerIndex: 2
            }
          ],
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
      }
    ]
  },
  { blocks: [
      {
        type: "paragraph",
        text: [
          "Kita sudah mengenal tiga pilar hakikat fisika.",
          "Sekarang kita akan mempelajari pilar pertama.",
          "➡️ Next, kita menuju portal: [**Fisika sebagai Produk.**](/materi/fisika-sebagai-produk)"
        ]
      },
      {
        type: "image",
        src: img3,
        caption: "🚀 Kamu bisa KLIK GAMBAR INI untuk menuju portal selanjutnya",
        link: "/materi/fisika-sebagai-produk"
      }
    ]
  }]
};

export default hakikatIlmuFisika;