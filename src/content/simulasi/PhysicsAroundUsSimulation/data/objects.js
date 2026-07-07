// data/objects.js
// Sumber data untuk seluruh benda yang bisa dieksplorasi di Physics Around Us.
// Setiap benda memuat konsep fisika, deskripsi, fun fact, dan tautan lanjutan.

export const CATEGORIES = [
  "Semua",
  "Gerak",
  "Gaya",
  "Energi",
  "Listrik",
  "Gelombang",
  "Optik",
  "Termodinamika",
  "Modern Physics",
];

export const PHYSICS_OBJECTS = [
  {
    id: "sepeda",
    title: "Sepeda",
    icon: "🚲",
    category: "Gerak",
    concepts: ["Kesetimbangan Dinamis", "Gaya Gesek", "Roda dan Poros"],
    description:
      "Sepeda melaju karena kombinasi gaya kayuh, gaya gesek antara ban dan aspal, serta prinsip kesetimbangan dinamis yang menjaga pengendara tetap tegak saat bergerak.",
    fact: "Semakin cepat sepeda melaju, semakin stabil ia berjalan karena efek giroskopik pada roda yang berputar.",
    simulationLink: "#simulasi-kesetimbangan",
    lessonLink: "#materi-gerak-dan-gaya",
  },
  {
    id: "mobil",
    title: "Mobil",
    icon: "🚗",
    category: "Gaya",
    concepts: ["Momentum", "Gaya Gesek", "Percepatan"],
    description:
      "Mesin mobil mengubah energi kimia bahan bakar menjadi gaya dorong yang menghasilkan percepatan, sementara rem memanfaatkan gaya gesek untuk menghentikan momentum kendaraan.",
    fact: "Mobil seberat 1 ton yang melaju 100 km/jam memiliki momentum yang setara dengan hantaman seekor gajah yang berlari.",
    simulationLink: "#simulasi-momentum",
    lessonLink: "#materi-hukum-newton",
  },
  {
    id: "bola",
    title: "Bola",
    icon: "⚽",
    category: "Gerak",
    concepts: ["Momentum", "Gerak Parabola", "Energi Kinetik"],
    description:
      "Saat ditendang, bola menerima momentum dari kaki pemain dan melesat mengikuti lintasan gerak parabola akibat pengaruh gaya gravitasi.",
    fact: "Efek Magnus membuat bola yang berputar dapat melengkung di udara, seperti pada tendangan pisang para pemain sepak bola.",
    simulationLink: "#simulasi-gerak-parabola",
    lessonLink: "#materi-gerak-parabola",
  },
  {
    id: "lampu",
    title: "Lampu",
    icon: "💡",
    category: "Listrik",
    concepts: ["Arus Listrik", "Energi Cahaya", "Hambatan Listrik"],
    description:
      "Lampu mengubah energi listrik menjadi cahaya dan panas ketika arus mengalir melalui filamen atau komponen semikonduktor di dalamnya.",
    fact: "Lampu LED bisa 90% lebih hemat energi dibanding lampu pijar karena hampir seluruh energinya diubah menjadi cahaya, bukan panas.",
    simulationLink: "#simulasi-rangkaian-listrik",
    lessonLink: "#materi-listrik-dinamis",
  },
  {
    id: "smartphone",
    title: "Smartphone",
    icon: "📱",
    category: "Modern Physics",
    concepts: ["Gelombang Elektromagnetik", "Semikonduktor", "Frekuensi"],
    description:
      "Smartphone mengirim dan menerima data lewat gelombang elektromagnetik, sementara chip di dalamnya bekerja berdasarkan sifat semikonduktor material silikon.",
    fact: "Sinyal dari ponselmu menuju menara seluler terdekat menempuh jarak itu dengan kecepatan cahaya.",
    simulationLink: "#simulasi-gelombang-em",
    lessonLink: "#materi-fisika-modern",
  },
  {
    id: "magnet",
    title: "Magnet",
    icon: "🧲",
    category: "Gaya",
    concepts: ["Medan Magnet", "Gaya Magnet", "Induksi Elektromagnetik"],
    description:
      "Magnet menghasilkan medan magnet yang mampu menarik benda feromagnetik dan menjadi dasar kerja motor listrik serta generator.",
    fact: "Bumi sendiri adalah magnet raksasa dengan medan magnet yang melindungi kita dari radiasi berbahaya Matahari.",
    simulationLink: "#simulasi-medan-magnet",
    lessonLink: "#materi-kemagnetan",
  },
  {
    id: "pelangi",
    title: "Pelangi",
    icon: "🌈",
    category: "Optik",
    concepts: ["Dispersi Cahaya", "Pembiasan", "Spektrum Warna"],
    description:
      "Pelangi terbentuk saat cahaya matahari dibiaskan dan diuraikan oleh tetesan air hujan menjadi spektrum warna yang terlihat oleh mata.",
    fact: "Setiap orang sebenarnya melihat pelangi yang sedikit berbeda, karena posisi mata terhadap tetesan air itu unik untuk setiap pengamat.",
    simulationLink: "#simulasi-dispersi-cahaya",
    lessonLink: "#materi-optik-geometri",
  },
  {
    id: "roket",
    title: "Roket",
    icon: "🚀",
    category: "Energi",
    concepts: ["Momentum", "Hukum Newton III", "Gaya Dorong"],
    description:
      "Roket melesat ke angkasa dengan menyemburkan gas panas ke bawah, menghasilkan gaya dorong berlawanan arah sesuai Hukum Newton III.",
    fact: "Roket harus membawa oksidatornya sendiri karena tidak ada oksigen di luar atmosfer untuk membakar bahan bakarnya.",
    simulationLink: "#simulasi-momentum",
    lessonLink: "#materi-hukum-newton",
  },
  {
    id: "kopi",
    title: "Kopi",
    icon: "🍵",
    category: "Termodinamika",
    concepts: ["Perpindahan Kalor", "Konveksi", "Kesetimbangan Termal"],
    description:
      "Kopi panas melepaskan kalor ke udara sekitarnya melalui konveksi dan radiasi hingga akhirnya mencapai kesetimbangan termal dengan lingkungan.",
    fact: "Kopi tanpa susu mendingin lebih cepat karena permukaannya lebih mudah melepas uap panas ke udara.",
    simulationLink: "#simulasi-perpindahan-kalor",
    lessonLink: "#materi-termodinamika",
  },
  {
    id: "ombak",
    title: "Ombak",
    icon: "🌊",
    category: "Gelombang",
    concepts: ["Gelombang Transversal", "Frekuensi", "Amplitudo"],
    description:
      "Ombak laut merupakan gelombang transversal yang merambat di permukaan air, membawa energi tanpa memindahkan air itu sendiri secara permanen.",
    fact: "Air laut sebenarnya hanya bergerak naik-turun secara melingkar, bukan ikut terbawa ombak menuju pantai.",
    simulationLink: "#simulasi-gelombang-transversal",
    lessonLink: "#materi-gelombang",
  },
  {
    id: "satelit",
    title: "Satelit",
    icon: "📡",
    category: "Gaya",
    concepts: ["Gravitasi", "Orbit", "Kecepatan Sudut"],
    description:
      'Satelit tetap mengorbit Bumi karena gaya gravitasi yang menariknya seimbang dengan kecepatan geraknya yang terus "jatuh" mengelilingi planet.',
    fact: "Satelit geostasioner bergerak secepat rotasi Bumi, sehingga tampak diam di satu titik langit yang sama.",
    simulationLink: "#simulasi-gravitasi",
    lessonLink: "#materi-gravitasi",
  },
  {
    id: "pesawat",
    title: "Pesawat",
    icon: "✈️",
    category: "Gerak",
    concepts: ["Gaya Angkat", "Aerodinamika", "Tekanan Udara"],
    description:
      "Pesawat bisa terbang karena bentuk sayapnya menghasilkan gaya angkat dari perbedaan tekanan udara di atas dan di bawah sayap.",
    fact: "Sayap pesawat dirancang sedikit fleksibel agar bisa melengkung hingga beberapa meter saat terbang tanpa patah.",
    simulationLink: "#simulasi-aerodinamika",
    lessonLink: "#materi-fluida",
  },
  // --- Easter Egg: benda rahasia, tersembunyi di antara benda lain ---
  {
    id: "bulan",
    title: "Bulan",
    icon: "🌕",
    category: "Modern Physics",
    isEasterEgg: true,
    concepts: ["Gravitasi", "Gaya Berat"],
    description:
      "Kamu menemukan benda rahasia! Bulan menyimpan cerita tentang bagaimana gravitasi bisa sangat berbeda dari satu benda langit ke benda langit lain.",
    fact: "Beratmu di Bulan hanya sekitar 1/6 beratmu di Bumi, karena gravitasi Bulan jauh lebih lemah.",
    simulationLink: "#simulasi-gravitasi",
    lessonLink: "#materi-gravitasi",
  },
  {
    id: "petir",
    title: "Petir",
    icon: "⚡",
    category: "Listrik",
    isEasterEgg: true,
    concepts: ["Arus Listrik", "Muatan Listrik"],
    description:
      "Kamu menemukan benda rahasia! Petir adalah luahan listrik statis raksasa yang terjadi antara awan dan permukaan bumi.",
    fact: "Petir dapat membawa arus listrik hingga puluhan ribu ampere dalam waktu kurang dari sedetik.",
    simulationLink: "#simulasi-listrik-statis",
    lessonLink: "#materi-listrik-statis",
  },
];

// Daftar misi eksplorasi. Setiap misi menantang pengguna menemukan
// semua benda (non-easter-egg) yang mengandung konsep tertentu.
export const MISSIONS = [
  {
    id: "misi-momentum",
    concept: "Momentum",
    label: "Temukan benda yang memiliki konsep Momentum.",
  },
  {
    id: "misi-gaya-gesek",
    concept: "Gaya Gesek",
    label: "Temukan benda yang memiliki konsep Gaya Gesek.",
  },
  {
    id: "misi-frekuensi",
    concept: "Frekuensi",
    label: "Temukan benda yang memiliki konsep Frekuensi.",
  },
];
