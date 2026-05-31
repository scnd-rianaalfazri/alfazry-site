import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import FloatingCard from'./components/UI/FloatingCards'
import Features from './components/sections/Features'
import Footer from './components/layout/Footer'

export default function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <FloatingCard/>
      <Features />
      <Footer />
    </div>
  )
}