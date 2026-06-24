import { caption, form, image } from "framer-motion/client"
import menghitungkomponenvektorImg from "/src/assets/Materi/Vektor/MenghitungKomponenVektor1.jpg"
import vektormembentuksikusikuImg from "/src/assets/Materi/Vektor/MenghitungKomponenVektor2.jpg"
import komponenxImg from "/src/assets/Materi/Vektor/MenghitungKomponenVektor3.jpg"
import komponenyImg from "/src/assets/Materi/Vektor/MenghitungKomponenVektor4.jpg"
import rumuskomponenvektorImg from "/src/assets/Materi/Vektor/MenghitungKomponenVektor5.jpg"
import caraperhitungankomponenvektorImg from "/src/assets/Materi/Vektor/MenghitungKomponenVektor6.jpg"
import tandakomponenkoordinatImg from "/src/assets/Materi/Vektor/MenghitungKomponenVektor7.jpg"
import penerapanmenghitungkomponenvektorImg from "/src/assets/Materi/Vektor/MenghitungKomponenVektor8.jpg"
import nextmissionmenjumlahkanvektorImg from "/src/assets/Materi/Vektor/MenghitungKomponenVektor9.jpg"

const menghitungkomponenvektor = {
  title: "Menghitung Komponen Vektor",
  slug: "menghitung komponen vektor",
  description: "Memahami cara menentukan besar komponen horizontal dan vertikal dari sebuah vektor menggunakan trigonometri.",
  chapter: "➡️ Vektor",
  content: [
    {
      heading: "📐 Dari Gambar Menjadi Perhitungan",
      image: menghitungkomponenvektorImg,
      body: [
        "Sebuah vektor yang membentuk sudut dapat diuraikan menjadi dua komponen:",
        "",
        "➡️ Komponen horizontal (X)",
        "⬆️ Komponen vertikal (Y)",
        "",
        "Untuk mengetahui besar masing-masing komponen, kita menggunakan konsep trigonometri."
      ]
    },

    {
      image: vektormembentuksikusikuImg,
      body: [
        "Ketika sebuah vektor diuraikan, terbentuk segitiga siku-siku.",
        "",
        "Vektor awal menjadi sisi miring.",
        "",
        "Komponen X dan Y menjadi sisi lainnya."
      ]
    },

    {
      image: komponenxImg,
      body: [
        "Komponen X menunjukkan bagian vektor yang searah dengan sumbu horizontal.",
        "",
        "Jika sudut diukur dari sumbu X, maka:",
        "",
        "Komponen X menggunakan fungsi cosinus."
      ]
    },

    {
      image: komponenyImg,
      body: [
        "Komponen Y menunjukkan bagian vektor yang searah dengan sumbu vertikal.",
        "",
        "Jika sudut diukur dari sumbu X, maka:",
        "",
        "Komponen Y menggunakan fungsi sinus."
      ]
    },

    {
      image: rumuskomponenvektorImg,
      body: [
        "Misalkan sebuah vektor memiliki besar A dan membentuk sudut θ terhadap sumbu X.",
        "",
        "Komponen horizontal:",
        "Ax = A cos θ",
        "",
        "Komponen vertikal:",
        "Ay = A sin θ"
      ]
    },

    {
      image: caraperhitungankomponenvektorImg,
      body: [
        "Sebuah gaya sebesar 100 N membentuk sudut 30° terhadap arah horizontal.",
        "",
        "Gaya tersebut dapat dipecah menjadi:",
        "",
        "Komponen ke arah horizontal",
        "Komponen ke arah vertikal",
        "",
        "Sehingga gaya miring tersebut lebih mudah dianalisis."
      ]
    },

    {
      image: tandakomponenkoordinatImg,
      body: [
        "Nilai komponen bergantung pada arah vektor.",
        "",
        "Ke kanan → komponen X positif",
        "Ke kiri → komponen X negatif",
        "",
        "Ke atas → komponen Y positif",
        "Ke bawah → komponen Y negatif"
      ]
    },

    {
      image: penerapanmenghitungkomponenvektorImg,
      body: [
        "Pada bidang miring, gaya gravitasi dapat diuraikan menjadi:",
        "",
        "Komponen sejajar bidang",
        "Komponen tegak lurus bidang",
        "",
        "Dengan cara ini, gaya yang kompleks menjadi lebih mudah dihitung."
      ]
    },

    {
      heading: "🎯 Kenapa Komponen Vektor Penting?",
      body: [
        "Karena hukum fisika sering bekerja pada arah tertentu.",
        "",
        "Dengan komponen vektor, kita dapat menghitung pengaruh setiap arah secara terpisah."
      ]
    },

    {
      heading: "✨ Inti Materi",
      body: [
        "Satu vektor dapat diuraikan menjadi komponen X dan Y.",
        "",
        "Trigonometri membantu menentukan besar masing-masing komponen tersebut."
      ]
    },

    {
      image: nextmissionmenjumlahkanvektorImg,
      caption: "🚀 KLIK GAMBAR INI! Kamu bisa menuju ke portal berikutnya.",
      link: "/materi/menjumlahkan%20vektor",
      body: [
        "Kalau vektor bisa dipecah, bagaimana kalau beberapa vektor digabung menjadi satu?",
        "",
        "➡️ Next, kita menuju portal: Penjumlahan Vektor."
      ]
    },

    {
      heading: "Referensi:",
      body: [
        "Halliday, D., Resnick, R., & Walker, J. Fundamentals of Physics.",
        "Serway, R. A., & Jewett, J. W. Physics for Scientists and Engineers.",
        "Young, H. D., & Freedman, R. A. University Physics with Modern Physics.",
        "Kemendikbudristek RI. Buku Fisika SMA/MA Kelas X.",
        "OpenStax. Physics 2e."
      ]
    }
  ]
}

export default menghitungkomponenvektor