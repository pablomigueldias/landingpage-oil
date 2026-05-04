import { useState } from 'react'
import './App.css'
import Header from './Header'
import PrincipalSection from './components/PrincipalSection'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import Reviews from './components/Reviews'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="overflow-x-hidden w-full max-w-full">
      <Header />

      <div id="hero" className="container1 bg-image-hero bg-cover bg-center h-screen w-full">
        <PrincipalSection />
      </div>

      <div id="aboutus" className="w-full">
        <AboutUs />
      </div>
      
      <div id="services" className="bg-black w-full overflow-hidden flex items-center flex-col">
        <Services />
        <Reviews id="reviews" />
        <Gallery id="gallery" />
      </div>

      <div id="contact" className="container-contato w-full">
        <Contact />
      </div>

      <div id="footer" className="container-footer bg-black w-full flex items-center flex-col">
        <Footer />
      </div>
    </main>
  )
}

export default App