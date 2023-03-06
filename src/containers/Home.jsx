import React from 'react';
import Header from '../components/Header';
import '../styles/Home.scss'

export default function Home() {
  return (
    <div className='Home'>
      <Header />
      <div className="Separator"></div>
      <div className="Description">
        {/* <img src="" alt="" /> */}
        <p>Descripcion</p>
      </div>
      <div className="Description-projects">
        <h3>Principales Proyectos</h3>
        <p></p>
        <div className="Principal-porjects">
          Proyectos
          Ir al Portafolio
        </div>
      </div>
      <div className='Description-Technologyes'>
        tecnologias
      </div>
    </div>
  )
}
