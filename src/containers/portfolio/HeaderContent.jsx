import React from 'react';
import PortfolioImage from '../../components/PortfolioImage';
import '../../styles/portfolio/HeaderContent.scss'

export default function HeaderConetnt() {

  return (
    <>
      <PortfolioImage />
      <div className="Title">
        <h2>Mis proyectos</h2>
        <p>Me encanta trabajar en proyectos personales para seguir mejorando mis habilidades y aprender nuevas tecnologías. En esta sección de mi portafolio, te presentaré algunos de mis proyectos personales más destacados, en los que he trabajado con HTML, CSS, JavaScript, React, y otras herramientas y tecnologías web."</p>
      </div>
    </>
  )
}
