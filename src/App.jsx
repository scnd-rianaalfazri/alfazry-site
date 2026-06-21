import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Materi from "./pages/Materi"
import Simulasi from "./pages/Simulasi"
import KalkulatorFisika from "./pages/KalkulatorFisika"
import DetailSimulasi from "./pages/DetailSimulasi"
import DetailMateri from "./pages/DetailMateri"
import DetailKakulatorFisika from "./pages/DetailKalkulatorFisika"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/materi" element={<Materi />} />
      <Route path="/simulasi" element={<Simulasi />} />
      <Route path="/kalkulatorfisika" element={<KalkulatorFisika />} />
      <Route path="/simulasi/:slug" element={<DetailSimulasi />} />
      <Route path="/materi/:slug" element={<DetailMateri />} />  
      <Route path="/kalkulatorfisika/:slug" element={<DetailKakulatorFisika />} />       
    </Routes>
  )
}

export default App
