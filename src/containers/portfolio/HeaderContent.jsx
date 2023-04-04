import React, { useRef } from 'react';
import PortfolioImage from '../../components/PortfolioImage';
import { useObserver } from '../../hooks/useObserver'
import '../../styles/portfolio/HeaderContent.scss'

export default function HeaderConetnt() {
  const animationRef = useRef()
  const animation = useObserver(animationRef, "HeaderPortfolioAnimation")

  return (
    <>
      <PortfolioImage />
      <div className={`Title ${animation}`} ref={animationRef}>
        <h2>Mis proyectos</h2>
        <p>Me encanta trabajar en proyectos personales para seguir mejorando mis habilidades y aprender nuevas tecnologías. <br />En esta sección de mi portafolio, te presentaré algunos de mis proyectos personales más destacados, en los que he trabajado con HTML, CSS, JavaScript, React, y otras herramientas y tecnologías web."</p>
      </div>
    </>
  )
}
