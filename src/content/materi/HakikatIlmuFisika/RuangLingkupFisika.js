import img1 from "/src/assets/Materi/HakikatIlmuFisika/ruang-lingkup-fisika1.png"
import img2 from "/src/assets/Materi/HakikatIlmuFisika/ruang-lingkup-fisika2.png"
import img3 from "/src/assets/Materi/HakikatIlmuFisika/portal-metode-ilmiah.png"
import { text } from "framer-motion/client";

const ruangLingkupFisika = {
  title: "Ruang Lingkup Fisika",
  slug: "ruang-lingkup-fisika",
  description: "Memahami berbagai bidang kajian fisika dan bagaimana semuanya saling berhubungan dalam menjelaskan alam semesta.",
  chapter: "🔬 Hakikat Ilmu Fisika & Metode Ilmiah",

  content: [
  { blocks: [
    {
      type: "image",
      src: img1
    },
    {
        type: "paragraph",
        text: [
          "Apakah fisika cuma membahas rumus menggelindingkan balok atau menghitung kecepatan mobil ngerem??",
          "Ternyata tidak. Fisika memiliki ruang lingkup yang sangat luas, mulai dari gerakan semut sekecil debu di tanah hingga pergerakan galaksi raksasa di ujung semesta.",
          "Secara mendasar, fisika mempelajari materi, energi, gerak, gaya, ruang, waktu, beserta seluruh interaksi yang menyertainya."
        ]
      }
    ]
  },
  { heading: "🧭 Peta Ruang Lingkup Fisika", 
    blocks: [
      {
        type: "image",
        src: img2
      },
      {
        type: "paragraph",
        text: [
          "Ruang lingkup yang luas ini dipetakan ke dalam dua era utama, plus satu ranah inovasi terapan"
        ]
      }
    ]
  },
  { heading: "Pendalaman Era Fisika Klasik (Makro & Dapat Diprediksi)", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Fisika klasik adalah pondasi utama yang menjelaskan fenomena yang bisa kita tangkap dengan indra kita secara langsung. Berikut contoh fenomenanya"
        ]
      },
      {
        type: "carousel",
        carousel: {
          cards: [
            {
              eyebrow: "CABANG ILMU FISIKA: ERA FISIKA KLASIK",
              title: "Mekanika",
              description: "Mekanika menjelaskan bagaimana benda bergerak atau tetap diam karena pengaruh gaya.",
              list: {
                type: "ordered",
                items: [
                  {
                    text: "Bola dilempar ke atas kemudian jatuh",
                    description: "Gravitasi memberi gaya ke bawah sehingga kecepatan bola berubah."
                  },
                  {
                    text: "Mobil direm",
                    description: "Gaya gesekan antara rem dan roda mengurangi kecepatan mobil."
                  },
                  {
                    text: "Kendaraan menikung",
                    description: "Gaya sentripetal membuat arah gerak kendaraan berubah."
                  },
                  {
                    text: "Bandul berayun",
                    description: "Gaya berat dan panjang tali memengaruhi periode ayunan."
                  },
                  {
                    text: "Jembatan dan bangunan tetap berdiri",
                    description: "Gaya-gaya dalam konstruksi berada dalam keseimbangan."
                  }
                ]
              }
            },
            {
              eyebrow: "CABANG ILMU FISIKA: ERA FISIKA KLASIK",
              title: "Fluida",
              description: "Fluida mempelajari perilaku zat cair dan gas yang dapat mengalir.",
              list: {
                type: "ordered",
                items: [
                  {
                    text: "Kapal besi dapat mengapung",
                    description: "Gaya apung dari air lebih besar daripada berat kapal."
                  },
                  {
                    text: "Balon udara terbang",
                    description: "Udara panas di dalam balon lebih renggang sehingga memunculkan gaya apung."
                  },
                  {
                    text: "Sedotan dapat digunakan untuk minum",
                    description: "Perbedaan tekanan mendorong cairan naik."
                  },
                  {
                    text: "Air menyemprot dari keran",
                    description: "Tekanan air mendorong air keluar melalui lubang."
                  },
                  {
                    text: "Sayap pesawat menghasilkan gaya angkat",
                    description: "Perbedaan tekanan udara di atas dan bawah sayap."
                  },
                  {
                    text: "Banjir mengalir lebih cepat di saluran sempit",
                    description: "Perubahan luas penampang memengaruhi kecepatan aliran."
                  }
                ]
              }
            },
            {
              eyebrow: "CABANG ILMU FISIKA: ERA FISIKA KLASIK",
              title: "Termodinamika",
              description: "Termodinamika menjelaskan hubungan antara suhu, kalor, energi, dan usaha.",
              list: {
                type: "ordered",
                items: [
                  {
                    text: "Es mencair",
                    description: "Es menerima kalor sehingga struktur partikelnya berubah."
                  },
                  {
                    text: "Air mendidih",
                    description: "Energi panas meningkatkan energi kinetik partikel air hingga terbentuk uap."
                  },
                  {
                    text: "Mesin kendaraan menghasilkan tenaga",
                    description: "Energi kimia bahan bakar berubah menjadi energi panas, lalu menjadi energi mekanik."
                  },
                  {
                    text: "Kulkas membuat makanan dingin",
                    description: "Kalor dipindahkan dari bagian dalam kulkas ke lingkungan luar."
                  },
                  {
                    text: "Tangan terasa hangat di dekat api",
                    description: "Energi panas menyebar ke tubuh."
                  },
                  {
                    text: "Sarapan terasa dingin setelah beberapa waktu",
                    description: "kalor berpindah dari makanan yang lebih panas ke udara sekitar."
                  }
                ]
              }
            },
            {
              eyebrow: "CABANG ILMU FISIKA: ERA FISIKA KLASIK",
              title: "Optika",
              description: "Optika menjelaskan perilaku cahaya, termasuk pemantulan, pembiasan, dispersi, dan pembentukan bayangan.",
              list: {
                type: "ordered",
                items: [
                  {
                    text: "Bayangan terbentuk",
                    description: "Cahaya bergerak lurus dan terhalang oleh benda tidak transparan."
                  },
                  {
                    text: "Cermin memantulkan wajah",
                    description: "Cahaya dipantulkan kembali ke mata."
                  },
                  {
                    text: "Pelangi muncul setelah hujan",
                    description: "Cahaya matahari dibiaskan dan terurai oleh tetesan air."
                  },
                  {
                    text: "Kacamata memperjelas penglihatan",
                    description: "Lensa membias cahaya sebelum masuk ke mata."
                  },
                  {
                    text: "Kamera menangkap gambar",
                    description: "Cahaya melewati lensa dan terfokus pada sensor."
                  },
                  {
                    text: "Ilusi garis berputar di air",
                    description: "Cahaya berubah arah saat melewati batas air dan udara."
                  }
                ]
              }
            },
            {
              eyebrow: "CABANG ILMU FISIKA: ERA FISIKA KLASIK",
              title: "Akustik",
              description: "Akustik mempelajari pembentukan, perambatan, dan penerimaan gelombang bunyi.",
              list: {
                type: "ordered",
                items: [
                  {
                    text: "Gema di gunung",
                    description: "Bunyi dipantulkan oleh tebing."
                  },
                  {
                    text: "Gaung di ruangan besar",
                    description: "Suara lebih keras saat dekat sumber"
                  },
                  {
                    text: "Headset menghasilkan musik",
                    description: "Getaran membran speaker menimbulkan gelombang bunyi."
                  },
                  {
                    text: "Ruangan berkarpet terdengar lebih sepi",
                    description: "Bahan lunak pada karpet menyerap sebagian bunyi."
                  },
                  {
                    text: "Sonar kapal selam",
                    description: "Gelombang bunyi dipantulkan oleh objek di dalam air untuk mendeteksi posisi."
                  }
                ]
              }
            },
            {
              eyebrow: "CABANG ILMU FISIKA: ERA FISIKA KLASIK",
              title: "Listrik",
              description: "Listrik mempelajari muatan listrik, arus, tegangan, hambatan, dan rangkaian listrik.",
              list: {
                type: "ordered",
                items: [
                  {
                    text: "Lampu menyala",
                    description: "Arus listrik mengalir melalui rangkaian dan mengubah energi listrik menjadi cahaya serta panas."
                  },
                  {
                    text: "HP mengisi daya",
                    description: "Energi listrik dari adaptor mengisi energi kimia baterai."
                  },
                  {
                    text: "Saklar dapat menghidupkan lampu",
                    description: "Saklar membuka atau menutup jalur arus listrik."
                  },
                  {
                    text: "Kipas angin berputar",
                    description: "Arus listrik menggerakkan motor."
                  },
                  {
                    text: "Alat elektronik terasa panas",
                    description: "Sebagian energi listrik berubah menjadi panas akibat hambatan."
                  },
                  {
                    text: "Sengatan listrik berbahaya",
                    description: "Arus listrik dapat melewati tubuh manusia."
                  }
                ]
              }
            },
            {
              eyebrow: "CABANG ILMU FISIKA: ERA FISIKA KLASIK",
              title: "Magnetisme",
              description: "Magnetisme mempelajari magnet, medan magnet, gaya magnet, serta induksi magnetik.",
              list: {
                type: "ordered",
                items: [
                  {
                    text: "Magnet menempel pada pintu kulkas",
                    description: "Medan magnet menarik bahan tertentu."
                  },
                  {
                    text: "Kompas mengarah ke utara",
                    description: "Jarum kompas merespons medan magnet Bumi."
                  },
                  {
                    text: "Motor listrik berputar",
                    description: "Interaksi arus listrik dan medan magnet menghasilkan gaya."
                  },
                  {
                    text: "Kereta maglev melayang",
                    description: "Gaya magnet mengangkat dan menggerakkan kereta."
                  },
                  {
                    text: "Magnet dapat menarik klip besi",
                    description: "Bahan feromagnetik tertarik oleh medan magnet."
                  },
                  {
                    text: "Kartu magnetik dapat terbaca",
                    description: "Informasi disimpan dan dibaca melalui medan magnet."
                  }
                ]
              }
            },
            {
              eyebrow: "CABANG ILMU FISIKA: ERA FISIKA KLASIK",
              title: "Elektromagnetisme",
              description: "Elektromagnetisme menjelaskan hubungan antara listrik dan magnet. Arus listrik dapat menimbulkan medan magnet, sedangkan perubahan medan magnet dapat menimbulkan arus listrik.",
              list: {
                type: "ordered",
                items: [
                  {
                    text: "Kompor induksi memanaskan panci",
                    description: "Medan magnet yang berubah menghasilkan arus pada dasar panci."
                  },
                  {
                    text: "Generator menghasilkan listrik",
                    description: "Perputaran kumparan dalam medan magnet menimbulkan arus listrik."
                  },
                  {
                    text: "Wi-Fi dan sinyal HP",
                    description: "Informasi dikirim melalui gelombang elektromagnetik."
                  },
                  {
                    text: "Dinamo sepeda menyalakan lampu",
                    description: "Gerak roda menghasilkan arus listrik melalui induksi."
                  },
                  {
                    text: "Radio menerima siaran",
                    description: "Antena menangkap gelombang elektromagnetik dari pemancar."
                  },
                  {
                    text: "Relai dan bel elektrik",
                    description: "Elektromagnet menggerakkan bagian mekanis ketika dialiri arus."
                  }
                ]
              }
            }
          ]
        }
      }
    ]
  },
  { heading: "Pendalaman Era Fisika Modern (Mikro & Penuh Kejutan)", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Bagaimana jika fisika dihadapkan dengan sesuatu yang skalanya ekstrem seperti objek yang bergerak secepat cahaya, objek sekecil atom, atau objek super masif seperti bintang.",
          "Nah, hukum fisika klasik runtuh dan tidak berlaku lagi. Di sinilah Fisika Modern lahir membawa aturan baru. Berikut contoh fenomenanya:"
        ]
      },
      {
        type: "carousel",
        carousel: {
          cards: [
            {
              eyebrow: "CABANG ILMU FISIKA: ERA FISIKA MODERN",
              title: "Fisika Kuantum",
              description: "Fisika kuantum mempelajari perilaku materi dan energi pada skala sangat kecil, seperti atom dan elektron.",
              list: {
                type: "ordered",
                items: [
                  {
                    text: "Panel surya menghasilkan listrik",
                    description: "Foton cahaya memindahkan energi ke elektron dalam material semikonduktor."
                  },
                  {
                    text: "LED menyala",
                    description: "Elektron berpindah tingkat energi dan melepaskan cahaya."
                  },
                  {
                    text: "Laser menghasilkan cahaya terfokus",
                    description: "Atom atau molekul memancarkan cahaya dengan panjang gelombang yang seragam."
                  },
                  {
                    text: "Efek fotoelektrik",
                    description: "Cahaya dapat melepaskan elektron dari permukaan logam."
                  },
                  {
                    text: "Mikroskop elektron dapat melihat struktur sangat kecil",
                    description: "Sifat gelombang elektron dimanfaatkan untuk membayangkan objek mikroskopis."
                  }
                ]
              }
            },
            {
              eyebrow: "CABANG ILMU FISIKA: ERA FISIKA MODERN",
              title: "Fisika atom",
              list: {
                type: "ordered",
                items: [
                  {
                    text: "Lampu neon berwarna khas",
                    description: "Elektron pada gas neon berpindah tingkat energi dan melepaskan cahaya."
                  },
                  {
                    text: "Kembang api berwarna",
                    description: "Ion logam tertentu memancarkan cahaya dengan warna khas."
                  },
                  {
                    text: "Spektroskopi digunakan untuk mengenali unsur",
                    description: "Setiap unsur memiliki pola spektrum cahaya yang khas."
                  },
                  {
                    text: "Mikroskop elektron memetakan struktur atom",
                    description: "Interaksi elektron dengan materi digunakan untuk membayangkan permukaan objek."
                  }
                ]
              }
            },
            {
              eyebrow: "CABANG ILMU FISIKA: ERA FISIKA MODERN",
              title: "Relativitas",
              text: "Relativitas menjelaskan hubungan antara ruang, waktu, gerak, energi, dan gravitasi, terutama pada kecepatan sangat tinggi atau medan gravitasi kuat.",
              list: {
                type: "ordered",
                items: [
                  {
                    text: "GPS tetap akurat",
                    description: "Waktu pada satelit dan waktu di Bumi berjalan sedikit berbeda karena perbedaan kecepatan dan gravitasi."
                  },
                  {
                    text: "Jam atom pada satelit",
                    description: "Pengaruh relativitas perlu dikoreksi agar lokasi GPS tetap presisi."
                  },
                  {
                    text: "Cahaya tidak dapat melampaui kecepatan cahaya dalam vakum",
                    description: "Kecepatan cahaya menjadi batas perambatan informasi."
                  },
                  {
                    text: "Lengkungan cahaya di sekitar benda bermassa sangat besar",
                    description: ":Gravitasi dapat membelokkan lintasan cahaya."
                  }
                ]
              }
            },
            {
              eyebrow: "CABANG ILMU FISIKA: ERA FISIKA MODERN",
              title: "Fisika zat padat",
              text: "Fisika zat padat atau fisika benda terkondensasi mempelajari sifat material padat dan cair, termasuk perilaku elektron dalam material.",
              list: {
                type: "ordered",
                items: [
                  {
                    text: "Chip komputer dapat bekerja",
                    description: "Sifat semikonduktor digunakan untuk mengatur aliran elektron."
                  },
                  {
                    text: "Layar HP menyala",
                    description: "Material semikonduktor memancarkan atau mengatur cahaya."
                  },
                  {
                    text: "Kawat tembaga dapat menghantarkan listrik",
                    description: "Elektron bebas bergerak dalam material konduktor."
                  },
                  {
                    text: "Superkonduktor dapat menghantarkan listrik tanpa hambatan",
                    description: "Pada suhu sangat rendah, hambatan listrik menjadi nol."
                  },
                  {
                    text: "Magnet kuat dapat dibuat dari material tertentu",
                    description: "Susunan elektron dan domain magnetik menentukan sifat magnet."
                  }
                ]
              }
            },
            {
              eyebrow: "CABANG ILMU FISIKA: ERA FISIKA MODERN",
              title: "Fisika plasma",
              description: "Plasma adalah gas yang terionisasi sehingga mengandung ion dan elektron bebas. Plasma bersifat reaktif terhadap medan listrik dan magnet.",
              list: {
                type: "ordered",
                items: [
                  {
                    text: "Petir",
                    description: "Udara terionisasi akibat perbedaan potensial listrik yang sangat besar."
                  },
                  {
                    text: "Aurora",
                    description: "Partikel bermuatan dari Matahari berinteraksi dengan atmosfer Bumi dan menghasilkan cahaya."
                  },
                  {
                    text: "Lampu neon dan lampu tabung",
                    description: "Gas terionisasi memancarkan cahaya."
                  },
                  {
                    text: "Nyala matahari dan bintang",
                    description: "Plasma panas dan berenergi tinggi dominan pada bintang."
                  },
                  {
                    text: "Lampu plasma atau plasma globe",
                    description: "Medan listrik tinggi mengionisasi gas di dalam tabung."
                  }
                ]
              }
            },
            {
              eyebrow: "CABANG ILMU FISIKA: ERA FISIKA MODERN",
              title: "Kosmologi",
              description: "Kosmologi mempelajari asal-usul, struktur, perkembangan, dan masa depan alam semesta.",
              list: {
                type: "ordered",
                items: [
                  {
                    text: "Perluasan alam semesta",
                    description: "Galaksi jauh tampak menjauh dari kita, yang menunjukkan ruang antargalaksi mengembang."
                  },
                  {
                    text: "Radiasi latar kosmik mikro",
                    description: "Sisa radiasi dari alam semesta awal yang masih dapat dideteksi."
                  },
                  {
                    text: "Formasi galaksi dan bintang",
                    description: "Gravitasi menarik gas dan debu untuk membentuk struktur besar."
                  },
                  {
                    text: "Supernova",
                    description: "Ledakan bintang besar yang menyebarkan unsur-unsur ke ruang antarbintang."
                  },
                  {
                    text: "Lubang hitam",
                    description: "Gravitasi sangat kuat sehingga cahaya pun tidak dapat lolos dari wilayah tertentu."
                  }
                ]
              }
            }
          ]
        }
      }
    ]
  },
  { heading: "Fisika Terapan & Interdisipliner dengan ilmu lainnya (Kolaborasi & Inovasi)", 
    blocks: [
      {
        type: "paragraph",
        text: "Fisika tidak melulu diam di dalam laboratorium teori, tetapi juga berkolaborasi dengan cabang ilmu lain untuk menciptakan teknologi baru."
      },
      {
        type: "carousel",
        carousel: {
          cards: [
            {
              eyebrow: "CABANG ILMU FISIKA: FISIKA TERAPAN & INTERDISIPLINER",
              title: "Astrofisika",
              description: "Astrofisika menggabungkan fisika dan astronomi untuk mempelajari benda langit.",
              list: {
                type: "ordered",
                items: [
                  {
                    text: "Bintang bersinar",
                    description: "Bintang bersinar disebabkan karena adanya reaksi fusi nuklir menghasilkan energi."
                  },
                  {
                    text: "Gerhana matahari",
                    description: "Bulan menghalangi cahaya Matahari."
                  },
                  {
                    text: "Pasang surut laut",
                    description: "Pasang surut air laut disebabkan karena adanya gravitasi Bulan dan Matahari memengaruhi air laut."
                  },
                  {
                    text: "Hujan meteor",
                    description: "Partikel kecil memasuki atmosfer Bumi dan terbakar karena gesekan."
                  },
                  {
                    text: "Perputaran galaksi",
                    description: "Gravitasi dan distribusi massa menentukan gerak bintang."
                  }
                ]
              }
            },
            {
              eyebrow: "CABANG ILMU FISIKA: FISIKA TERAPAN & INTERDISIPLINER",
              title: "Geofisika",
              description: "Geofisika memanfaatkan fisika untuk mempelajari Bumi.",
              list: {
                type: "ordered",
                items: [
                  {
                    text: "Gempa bumi",
                    description: "Gempa bumi disebabkan karena energi tektonik dilepaskan dan merambat sebagai gelombang seismik."
                  },
                  {
                    text: "Medan magnet Bumi",
                    description: "Medan magent bumi dikarenakan adanya pergerakan materi konduktif di bagian dalam Bumi menghasilkan medan magnet."
                  },
                  {
                    text: "Perubahan suhu tanah",
                    description: "Perubahan suhu tersebut dikarenakan kalor berpindah melalui lapisan tanah."
                  },
                  {
                    text: "Deteksi air tanah",
                    description: "Sifat listrik dan elastisitas batuan digunakan untuk memetakan lapisan bawah permukaan."
                  },
                  {
                    text: "Longsor",
                    description: "Longsor dipengaruni oleh gaya gravitasi, gesekan, kelembapan, dan struktur tanah memengaruhi kestabilan lereng."
                  }
                ]
              }
            },
            {
              eyebrow: "CABANG ILMU FISIKA: FISIKA TERAPAN & INTERDISIPLINER",
              title: "Biofisika",
              description: "Biofisika menggunakan prinsip fisika untuk memahami proses makhluk hidup.",
              list: {
                type: "ordered",
                items: [
                  {
                    text: "Ikan dapat bergerak di air",
                    description: "Ikan dapat bergerak disebabkan karena adanya gaya dorong, hambatan fluida, dan keseimbangan bekerja bersama."
                  },
                  {
                    text: "Burung terbang",
                    description: "Burung terbang dikarenakan adanya gaya angkat, gaya berat, dan aliran udara memengaruhi gerak burung."
                  },
                  {
                    text: "Denyut jantung",
                    description: "Sinyal listrik mengatur kontraksi otot jantung."
                  },
                  {
                    text: "Penglihatan manusia",
                    description: "Cahaya masuk ke mata dan diubah menjadi sinyal saraf."
                  },
                  {
                    text: "Pendengaran",
                    description: "Gelombang bunyi menggetarkan membran telinga dan diterjemahkan oleh sistem saraf."
                  }
                ]
              }
            },
            {
              eyebrow: "CABANG ILMU FISIKA: FISIKA TERAPAN & INTERDISIPLINER",
              title: "Fisika medis",
              description: "Fisika medis menggunakan fisika untuk diagnosis, pengobatan, dan keselamatan pasien.",
              list: {
                type: "ordered",
                items: [
                  {
                    text: "Sinar-X menampilkan tulang",
                    description: "Jaringan keras menyerap radiasi lebih banyak daripada jaringan lunak."
                  },
                  {
                    text: "MRI menggunakan magnet",
                    description: "Medan magnet dan gelombang radio menghasilkan citra bagian dalam tubuh."
                  },
                  {
                    text: "Ultrasonografi",
                    description: "Pantulan gelombang bunyi tinggi yang berasal dari ultrasonografi digunakan untuk membentuk gambar janin atau organ."
                  },
                  {
                    text: "Radioterapi kanker",
                    description: "radiasi terarah pada alat radioterapi digunakan untuk menghambat sel kanker."
                  },
                  {
                    text: "Termometer inframerah",
                    description: "Termometer membaca radiasi inframerah dari tubuh digunakan untuk menentukan suhu."
                  }
                ]
              }
            },
            {
              eyebrow: "CABANG ILMU FISIKA: FISIKA TERAPAN & INTERDISIPLINER",
              title: "Ekonofisika",
              description: "Ekonofisika menerapkan konsep fisika dan analisis matematis untuk memahami sistem ekonomi yang kompleks.",
              list: {
                type: "ordered",
                items: [
                  {
                    text: "Perubahan harga pasar",
                    description: "Perilaku banyak pelaku ekonomi dapat dianalisis seperti sistem yang saling berinteraksi."
                  },
                  {
                    text: "Penyebaran informasi pasar",
                    description: "Pola penyebaran informasi dapat dianalisis menggunakan model jaringan."
                  },
                  {
                    text: "Fluktuasi harga saham",
                    description: "Data harga yang berubah cepat dianalisis dengan metode statistik dan model matematis."
                  },
                  {
                    text: "Efek herd behavior",
                    description: "Keputusan banyak orang dapat mengikuti perilaku kelompok, mirip dengan dinamika sistem kompleks."
                  }
                ]
              }
            },
            {
              eyebrow: "CABANG ILMU FISIKA: FISIKA TERAPAN & INTERDISIPLINER",
              title: "Fisika lingkungan",
              description: "Fisika lingkungan mempelajari interaksi energi, materi, dan lingkungan.",
              list: {
                type: "ordered",
                items: [
                  {
                    text: "Efek rumah kaca",
                    description: "Gas tertentu menyerap dan memancarkan kembali radiasi panas sehingga menyebabkan efek rumah kaca"
                  },
                  {
                    text: "Pemanasan global",
                    description: "Penambahan gas rumah kaca memengaruhi keseimbangan energi Bumi."
                  },
                  {
                    text: "Polusi udara",
                    description: "Partikel dan gas memengaruhi penyerapan serta pemantulan cahaya."
                  },
                  {
                    text: "Panas kota",
                    description: "Material aspal dan bangunan menyerap kalor sehingga suhu kota lebih tinggi."
                  },
                  {
                    text: "Pengolahan air dengan sinar UV",
                    description: "Radiasi ultraviolet digunakan untuk mengurangi mikroorganisme."
                  }
                ]
              }
            },
            {
              eyebrow: "CABANG ILMU FISIKA: FISIKA TERAPAN & INTERDISIPLINER",
              title: "Fisika kimia",
              description: "Fisika kimia mempelajari struktur, energi, dan perubahan materi menggunakan prinsip fisika.",
              list: {
                type: "ordered",
                items: [
                  {
                    text: "Reaksi pembakaran menghasilkan panas",
                    description: "Energi kimia berubah menjadi energi panas dan cahaya."
                  },
                  {
                    text: "Baterai menghasilkan listrik",
                    description: "Reaksi kimia pada baterai menggerakkan elektron melalui rangkaian."
                  },
                  {
                    text: "Larutan berubah warna",
                    description: "Struktur dan tingkat energi molekul menentukan cahaya yang diserap atau dipancarkan."
                  },
                  {
                    text: "Reaksi dapat dipercepat oleh katalis",
                    description: "katalis dapat menurunkan energi aktivasi reaksi."
                  },
                  {
                    text: "Larutan garam dapat menghantarkan listrik",
                    description: "Ion bebas bergerak dalam larutan."
                  }
                ]
              }
            },
            {
              eyebrow: "CABANG ILMU FISIKA: ERA FISIKA MODERN",
              title: "Fisika material",
              description: "Fisika material mempelajari struktur, sifat, dan pengembangan material untuk kebutuhan teknologi.",
              list: {
                type: "ordered",
                items: [
                  {
                    text: "Baja tahan karat tidak mudah berkarat",
                    description: "komposisi material dan struktur kristalnya mengurangi korosi."
                  },
                  {
                    text: "Serat karbon ringan tetapi kuat",
                    description: "Struktur material memungkinkan kekuatan tinggi dengan massa kecil."
                  },
                  {
                    text: "Material baterai lithium",
                    description: "Ion lithium bergerak antara elektroda saat pengisian dan pemakaian daya."
                  },
                  {
                    text: "Panel surya semakin efisien",
                    description: "Pengembangan material semikonduktor meningkatkan penyerapan cahaya."
                  },
                  {
                    text: "Layar ponsel dapat lentur",
                    description: "Material polimer dan lapisan tipis dirancang agar tetap kuat saat ditekuk."
                  }
                ]
              }
            },
            {
              eyebrow: "CABANG ILMU FISIKA: FISIKA TERAPAN & INTERDISIPLINER",
              title: "Fisika Komputasi",
              text: "Fisika komputasi menggabungkan fisika, ilmu komputer, dan matematika terapan untuk memecahkan masalah fisika yang rumit melalui penerapan metode numerik dan simulasi komputer",
              description: "Kamu dapat menggunakan fisika komputasi untuk menggunakan bahkan membuat simulasi atau laboratorium maya (Virtual Lab). Misalnya:",
              list: {
                type: "ordered",
                items: [
                  {
                    text: "Simulasi gerak parabola",
                    description: "Pengguna mengatur sudut lempar dan kecepatan awal bola."
                  },
                  {
                    text: "Simulasi bandul",
                    description: "Pengguna mengatur panjang tali, massa, dan sudut awal."
                  },
                  {
                    text: "Simulasi hambatan udara",
                    description: "pengguna membandingkan bola jatuh dengan dan tanpa hambatan udara."
                  },
                  {
                    text: "Visualisasi gelombang",
                    description: "Pengguna mengatur frekuensi dan amplitudo."
                  },
                  {
                    text: "Simulasi rangkaian listrik",
                    description: "Pengguna mengatur tegangan dan hambatan."
                  },
                  {
                    text: "Simulasi tata surya sederhana",
                    description: "Pengguna dapat mengamati planet bergerak mengelilingi Matahari berdasarkan gravitasi."
                  }
                ]
              }
            }
          ]
        }
      }
    ]
  },
  { heading: "🌍 Contoh dalam Kehidupan", 
    blocks: [
      { type: "paragraph",
         text: [
          "Saat bermain sepak bola:" 
         ]
      },
      {
        type: "list",
        list: {
          type: "unordered",
          items: [
            {
              text: "⚽ Gerak bola dipelajari dalam kinematika."
            },
            {
              text: "💪 Tendangan dijelaskan oleh gaya."
            },
            {
              text: "⚡ Energi berpindah dari kaki ke bola."
            },
            {
              text: "🌬️ Hambatan udara dipelajari dalam fluida."
            }
          ]
        }
      }
    ]
  },
  { heading: "🌟 *Fun Fact*", 
    blocks: [
      { type: "paragraph", 
        text: [
          "Smartphone di tanganmu adalah bukti nyata gabungan berbagai bidang fisika. Gadget tersebut memanfaatkan listrik, gelombang elektromagnetik, optika lensa kamera, fisika material, hingga fisika kuantum pada komponen prosesornya secara bersamaan."
        ]
      }
    ]
  },
  { heading: "⚠️ Miskonsepsi", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Cabang-cabang fisika bukanlah ilmu kaplingan yang berdiri sendiri-sendiri. ❌",
          "Di dunia nyata, berbagai konsep fisika selalu berkolaborasi bersamaan untuk menjelaskan satu fenomena tunggal. ✔️",
          "Contohnya satelit; untuk memahaminya kita butuh kombinasi konsep gerak, gaya gravitasi, energi, hingga relativitas sekaligus."
        ]
      }
    ]
  },
  { heading: "✨ Inti Materi", 
    blocks: [
      {
        type: "paragraph",
        text: [
          "Fisika memiliki ruang lingkup semesta yang super luas. ",
          "Meskipun dibagi menjadi banyak bidang kajian demi mempermudah kita belajar, pada akhirnya seluruh konsep fisika saling berkaitan erat untuk menerjemahkan cara alam semesta bekerja."
        ]
      }
    ]
  },
  { heading: "🎯 Quick Check", 
    blocks: [
      {
        type: "quickCheck",
        data: {
          questions: [
            {
              question: "Ruang lingkup fisika secara umum mempelajari....",
              options: [
                "Makhluk hidup dan interaksinya dengan lingkungan.",
                "Materi, energi, gerak, gaya, ruang, waktu, dan interaksinya.",
                "Struktur bahasa dan komunikasi manusia.",
                "Sejarah perkembangan peradaban dunia.",
                "Perilaku manusia dalam kehidupan sosial."
              ],
              answerIndex: 1
            },
            {
              question: "Manakah yang termasuk cabang fisika klasik?",
              options: [
                "Mekanika Kuantum.",
                "Fisika Partikel.",
                "Mekanika Klasik.",
                "Teori Relativitas.",
                "Fisika Inti."
              ],
              answerIndex: 2
            },
            {
              question: "Mekanika kuantum terutama mempelajari....",
              options: [
                "Gerak planet mengelilingi Matahari.",
                "Perpindahan kalor pada benda.",
                "Perilaku partikel-partikel pada skala atom dan subatom.",
                "Gelombang gempa bumi.",
                "Gerak kendaraan di jalan raya."
              ],
              answerIndex: 2
            },
            {
              question: "Cabang fisika yang memanfaatkan prinsip fisika untuk mempelajari makhluk hidup adalah....",
              options: [
                "Astrofisika.",
                "Geofisika.",
                "Biofisika.",
                "Optika.",
                "Akustik."
              ],
              answerIndex: 2
            },
            {
              question: "Mengapa berbagai cabang fisika perlu dipelajari secara bersama-sama?",
              options: [
                "Karena setiap cabang fisika berdiri sendiri dan tidak saling berhubungan.",
                "Karena satu fenomena di alam sering melibatkan beberapa konsep fisika sekaligus.",
                "Karena semua cabang fisika memiliki rumus yang sama.",
                "Karena fisika hanya digunakan untuk menghitung gerak benda.",
                "Karena setiap cabang fisika hanya dipelajari di laboratorium."
              ],
              answerIndex: 1
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
            }
          ]
        }
      }
    ]
  },
  {
    link: "/materi/metode-ilmiah",
    blocks: [
      {
        type: "paragraph",
        text: [
          "Kita sudah mengetahui apa saja yang dipelajari dalam fisika.",
          "Namun, bagaimana ilmuwan memperoleh semua pengetahuan tersebut?"
        ]
      },
      {
        type: "image",
        src: img3,
        caption: "🚀 Kamu bisa KLIK GAMBAR INI untuk menuju portal selanjutnya",
        link: "/materi/metode-ilmiah"
      }
    ]
  }]
};

export default ruangLingkupFisika;