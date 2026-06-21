import Navbar from '../components/layout/Navbar'
import Hero from '../components/sections/Hero'
import FloatingCards from '../components/UI/FloatingCards'
import Features from '../components/sections/Features'
import Footer from '../components/layout/Footer'

export default function Home() {
  return (
    <div className="relative bg-black text-white min-h-screen overflow-x-hidden">

      <Navbar />

      <main className="relative z-10 pt-6">
        <Hero />
        <FloatingCards />
        <Features />
      </main>

      <Footer />

    </div>
  )
}
