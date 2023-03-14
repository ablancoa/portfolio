import React from 'react';
import PortfolioImage from '../../components/PortfolioImage';
import '../../styles/portfolio/Header.scss'

export default function Header() {

  return (
    <div>
      <div className="Portfolio_header">
        <div className="Image-container">
          <PortfolioImage />
        </div>
        <div className="Title">
          <h2>Mis proyectos</h2>
          <p>Me encanta trabajar en proyectos personales para seguir mejorando mis habilidades y aprender nuevas tecnologías. En esta sección de mi portafolio, te presentaré algunos de mis proyectos personales más destacados, en los que he trabajado con HTML, CSS, JavaScript, React, y otras herramientas y tecnologías web."</p>
        </div>
      </div>
    </div>
  )
}
