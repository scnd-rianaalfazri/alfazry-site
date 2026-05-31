import Navbar from '../components/layout/Navbar'
import Hero from '../components/sections/Hero'
import FloatingCards from '../components/UI/FloatingCards'
import Features from '../components/sections/Features'
import Footer from '../components/layout/Footer'

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <FloatingCards />
      <Features />
      <Footer />
    </div>
  )
}
