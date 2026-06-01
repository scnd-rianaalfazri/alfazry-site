import VirLabMomentumSimulation from "./VirLabMomentumSimulation"
const MomentumSimulation = {
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
    component: VirLabMomentumSimulation,
  }
export default MomentumSimulation
