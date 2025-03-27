import Navbar from './components/Navbar'
import Highlights from './components/Highlights'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'
import Model from './components/Model'
import HowItWorks from './components/HowItWorks'

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Features />
      <Model />
      <HowItWorks />
      <Footer />
    </main>
  )
}

export default App
