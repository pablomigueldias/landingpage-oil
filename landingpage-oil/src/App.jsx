import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './Header'
import PrincipalSection from './components/PrincipalSection'
import AboutUs from './components/AboutUs'

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
    </>
  )
}

export default App
