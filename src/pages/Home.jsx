import Navbar from '../components/layout/Navbar'
import Hero from '../content/home/Hero'
import FloatingCards from '../content/home/FloatingCards'
import Features from '../content/home/Features'
import Footer from '../components/layout/Footer'
import BackToTopButton from '../components/UI/BackToTopBottom'

export default function Home() {
  return (
    <div className="relative bg-black text-white min-h-screen overflow-x-hidden">

      <Navbar />

      <main className="relative z-10 pt-6">
        <Hero />
        <FloatingCards />
        <Features />
      </main>

      <BackToTopButton />
      <Footer />

    </div>
  )
}
