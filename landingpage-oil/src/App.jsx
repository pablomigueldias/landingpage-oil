import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './Header'
import PrincipalSection from './components/PrincipalSection'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import Reviews from './components/Reviews'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container1 bg-image-hero bg-cover bg-center h-screen">
        <Header />
        <PrincipalSection />
      </div>
      <div className="aboutus">
        <AboutUs />
      </div>
      <div className="services bg-black h-full flex items-center flex-col">
        <Services />
        <Reviews />
        <Gallery />
      </div>
      <div className="container-contato">
        <Contact />
      </div>
    </>
  )
}

export default App
