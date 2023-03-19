import React, { useRef } from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { placeholder } from '@cloudinary/react';
import { byRadius } from '@cloudinary/url-gen/actions/roundCorners';
import { cld } from '../../utils/cloudinary';
import { useObserver } from '../../hooks/useObserver'
import '../../styles/about/HeaderContent.scss'

export default function HeaderContent() {
  const animationRef = useRef();
  const animation = useObserver(animationRef, "HeaderAboutAnimation")

  const image = cld.image("Portfolio/Buena").roundCorners(byRadius(8))
  return (
    <div className={`About ${animation}`} ref={animationRef}>
      <AdvancedImage cldImg={image} plugins={[placeholder()]} />
      <div className="Header-title">
        <h2>
          Mi historia
        </h2>
        <p>
          Graduado de Ingenieria eléctrica por la Universidad Tecnológica de la Habana en Cuba en el año 2019, Desde que estaba en la universidad me interese por la programacion, iniciando con Python, Html, CSS y JavaScript.
          Mi primer trabajo fue colaborando en el sitio web mi antiguo empleo  y de ahi en adelante me fui interesando cada vez mas por el desarrollo web.
          Resido actualmente en la ciudad de Santiago de Chile desde el año 2021, donde curse el Magister en Eficiencia Energetica y desarrollo trabajos como freelancer.
        </p>
      </div>
    </div>
  )
}
