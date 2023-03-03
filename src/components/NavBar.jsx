import React from 'react';
import { NavLink } from 'react-router-dom';
import htmlLogo from '../assets/Icons/html5-logo.svg'
import cssLogo from '../assets/Icons/css3-logo.svg'
import jsLogo from '../assets/Icons/javascript-logo.svg'
import '../styles/NavBar.scss'

export default function NavBar() {
  return (
    <div className='Navbar'>
      <div className='icons-container'>
        <img src={htmlLogo} alt="Icono HTML" className='icon icon-html' />
        <img src={cssLogo} alt="Icono CSS3" className='icon icon-css' />
        <img src={jsLogo} alt="Icono de JavaScript" className='icon icon-js' />
      </div>
      <nav className='Navbar-links'>
        <ul>
          <li>
            <NavLink
              to={`/`}
              className={({ isActive }) =>
                isActive
                  ? "active"
                  : undefined
              }
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`portfolio`}
              className={({ isActive }) =>
                isActive
                  ? "active"
                  : undefined
              }
            >
              Portafolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`about`}
              className={({ isActive }) =>
                isActive
                  ? "active"
                  : undefined
              }
            >
              Sobre mí
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`contact`}
              className={({ isActive }) =>
                isActive
                  ? "active"
                  : undefined
              }
            >
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}
