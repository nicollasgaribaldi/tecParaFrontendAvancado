import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DpoLgpd from './pages/DpoLgpd'
import Inicial from './pages/Inicial'
import Contato from './pages/Contato'
import Noticias from './pages/Noticias'
import Faculdade from './pages/Faculdade'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Inicial />}/>
      <Route path="/dpolgpd" element={<DpoLgpd />}/>
      <Route path="/contato" element={<Contato />}/>
      <Route path="/noticias" element={<Noticias />}/>
      <Route path="/a-faculdade" element={<Faculdade />}/>
    </Routes>

    </BrowserRouter>
  )
}

export default App
