import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Inicial</Link>
      <Link to="/contato">Contato</Link>
      <Link to="/dpolgpd">LGPD</Link>
      <Link to="/noticias">Notícias</Link>
      <Link to="/a-faculdade">Sobre</Link>
    </nav>
  )
}

export default Navbar
