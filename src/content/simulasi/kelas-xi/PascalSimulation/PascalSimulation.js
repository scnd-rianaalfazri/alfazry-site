import VirLabPascalSimulation from "./VirLabPascalSimulation"
const PascalSimulation = {
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
    component: VirLabPascalSimulation,
  }
export default PascalSimulation