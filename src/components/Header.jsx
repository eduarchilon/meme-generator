import React from 'react'
import logo from '../img/logo.png'

function Header() {
  return (
    <div className='header'>
        <img src={logo} alt="logo" />
        <h1 className='header-titulo'>Meme Generator</h1>
    </div>
  )
}

export default Header;
