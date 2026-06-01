import PascalSimulation from "../content/simulasi/kelas-xi/PascalSimulation";
import MomentumSimulasi from "../content/simulasi/kelas-xi/MomentumSimulasi";

export const simulations = [
  {
    slug: "pascal",
    title: "Hukum Pascal",
    description: "Simulasi interaktif gaya dan tekanan pada piston untuk mempelajari Hukum Pascal.",
    content: [
      {
        heading: "Apa itu Hukum Pascal?",
        body: "Hukum Pascal menyatakan bahwa tekanan yang diberikan pada fluida tertutup ditransmisikan sama ke segala arah dalam fluida tanpa berkurang.",
      },
      {
        heading: "Bagaimana Simulasi Bekerja?",
        body: "Geser pengatur gaya pada piston kecil untuk melihat bagaimana tekanan berubah dan bagaimana gaya keluaran pada piston besar meningkat.",
      },
    ],
    component: PascalSimulation,
  },
  {
    slug: "momentum",
    title: "Momentum",
    description: "Simulasi dua bola yang bertumbukan untuk memahami kekekalan momentum.",
    content: [
      {
        heading: "Hukum Momentum",
        body: "Momentum adalah hasil kali massa dan kecepatan. Total momentum sistem tetap konstan jika tidak ada gaya luar.",
      },
      {
        heading: "Tumbukan Elastis",
        body: "Dalam tumbukan elastis, energi kinetik juga tetap terjaga selain momentum total.",
      },
    ],
    component: MomentumSimulasi,
  },
];
