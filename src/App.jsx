import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Materi from "./pages/Materi"
import Simulasi from "./pages/Simulasi"
import DetailSimulasi from "./pages/DetailSimulasi"
import DetailMateri from "./pages/DetailMateri"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/materi" element={<Materi />} />
      <Route path="/simulasi" element={<Simulasi />} />
      <Route path="/simulasi/:slug" element={<DetailSimulasi />} />
      <Route path="/materials/:slug" element={<DetailMateri />} />
    </Routes>
  )
}

export default App
