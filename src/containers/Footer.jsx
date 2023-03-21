import React from 'react';
import { Link } from 'react-router-dom';
import SocialMedia from '../components/SocialMedia';
import '../styles/Footer.scss';

export default function Footer() {
  return (
    <div className='Footer'>
      <div className='Footer-container'>
        <div className="Footer-project">
          <h3>Este portafolio</h3>
          <p>Este sitio web fue creado en su totalidad por mí, con el objetivo de crear un portafolio donde se pueda obtener toda la informacion relevante a mi trabajo y al mismo tiempo crear un portal de comunicación conmigo, para ello se utiliazaron principalmente tecnologías como <a href='https://react.dev/' >React</a>, <a href='https://cloudinary.com/' >Cloudinary</a>, <a href='https://vercel.com/' >Vercel</a>, <a href='https://sass-lang.com/'>Sass</a>.</p>
          <p><a href="https://storyset.com/people"> People illustrations</a>, <a href="https://storyset.com/online">Online illustrations</a>,<a href="https://storyset.com/work">Work illustrations</a> by Storyset</p>



        </div>
        <div className='Footer-description'>
          <h3 className="Footer-title">Sobre mí</h3>
          <p>Tengo un fuerte deseo de seguir creciendo profesionalmente y siempre estoy buscando nuevas oportunidades para mejorar mis habilidades y conocimientos. Soy consciente de la importancia de mantenerme actualizado y adaptarme a las nuevas tecnologías y tendencias en mi campo. Por eso, estoy siempre dispuesto a aprender y participar en actividades de capacitación y desarrollo profesional</p>
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
