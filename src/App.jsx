import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/layout/Nav'


function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <NavBar />

    </>
  )
}

export default App
