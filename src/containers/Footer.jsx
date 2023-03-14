import React from 'react';
import { Link } from 'react-router-dom';
import SocialMedia from '../components/SocialMedia';
import '../styles/Footer.scss';

export default function Footer() {
  return (
    <div className='Footer'>
      <div className='Footer-container'>
        <div className='Footer-description'>
          <h3 className="Footer-title">Sobre mí</h3>
          <p>Maecenas non ante ullamcorper, fermentum nulla ac, auctor nibh. Etiam arcu tellus, porta sit amet era et, vulputte porta risus.</p>
        </div>
        <div className="Footer-project">
          <h3>Este portafolio</h3>
          <p>Maecenas non ante ullamcorper, fermentum nulla ac, auctor nibh. Etiam arcu tellus, porta sit amet era et, vulputte porta risus. Fusce accumsan sit amet velit vel fermentum. Nulla facilisi. Suspedisse potenti.</p>
        </div>
        <div className='Footer-navigation'>
          <h3>Links</h3>
          <div className="Links">
            <ul>
              <li>
                <Link to='/'>Inicio</Link>
              </li>
              <li>
                <Link to='/portfolio'>Portafilio</Link>
              </li>
              <li>
                <Link to='/about'>Sobre mí</Link>
              </li>
              <li>
                <Link to='/contact'>Contacto</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='Footer-separator'></div>
      <SocialMedia />
    </div>
  )
}
