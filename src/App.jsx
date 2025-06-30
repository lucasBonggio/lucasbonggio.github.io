import { useState } from 'react'
import './App.css'
import NavBar from './components/layout/Nav'
import HeroSection from './components/layout/Hero'


function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <NavBar />
      <HeroSection/>

    </>
  )
}

export default App
