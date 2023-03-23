import React, { useRef, Suspense } from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { placeholder } from '@cloudinary/react';
import { byRadius } from '@cloudinary/url-gen/actions/roundCorners';
import { cld } from '../../utils/cloudinary';
import { useObserver } from '../../hooks/useObserver'
import '../../styles/about/HeaderContent.scss'

export default function HeaderContent() {
  const animationRef = useRef();
  const animation = useObserver(animationRef, "HeaderAboutAnimation")

  const renderLoader = () => <p>Loader</p>
  const image = cld.image("Portfolio/Buena").roundCorners(byRadius(8))
  return (
    <div className={`About ${animation}`} ref={animationRef}>
      <Suspense fallback={renderLoader()}>
        <AdvancedImage cldImg={image} plugins={[placeholder()]} rel="preload" />
      </Suspense>
      <div className="Header-title">
        <h2>
          Quién soy
        </h2>
        <p>
          Graduado de Ingenieria eléctrica por la Universidad Tecnológica de la Habana en Cuba en el año 2019, Desde que estaba en la universidad me interesé por la programación, iniciando con Python, Html, CSS y JavaScript. <br />
          Mi primer trabajo fue colaborando en el sitio web de mi antiguo empleo  y de ahi en adelante me fui interesando cada vez más por el desarrollo web.
          Resido actualmente en la ciudad de Santiago de Chile desde el año 2021, donde cursé el Magister en Eficiencia Energética y desarrollo trabajos como freelancer.
        </p>
        <p>
          Creo firmemente en la importancia del trabajo en equipo y las relaciones profesionales sólidas. Siempre me enfoco en trabajar con mis colegas, intercambiar ideas y contribuir positivamente al trabajo. Trato de aprender de mis compañeros y compartir mis conocimientos para ayudar a mejorar la calidad de la colaboración.
          En definitiva, mi compromiso con el trabajo se basa en la colaboración, el aprendizaje continuo y la construcción de relaciones profesionales sólidas para alcanzar el éxito y un buen lugar de trabajo.
        </p>
      </div>
    </div>
  )
}
