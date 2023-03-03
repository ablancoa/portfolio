import React from 'react';
import headerMan from '../assets/headerMan.png';
import headerBackground from '../assets/headerBackground.png';
import headerText from '../assets/headerText.png';
import '../styles/Header.scss'

export default function Header() {
  return (
    <div className='Header-container'>
      <h1>Hola, Soy Alexander Blanco</h1>
      <div className='Header-image'>
        <img src={headerMan} className='headerMan' />
        <img src={headerBackground} className='headerBackground' />
        <img src={headerText} className='headerText' />
      </div>
    </div>
  )
}
