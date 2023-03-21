import React, { useRef } from 'react';
import { AdvancedImage } from '@cloudinary/react';
import CoPresentRoundedIcon from '@mui/icons-material/CoPresentRounded';
import { fill } from '@cloudinary/url-gen/actions/resize';
import Button from '../../components/Button';
import { useObserver } from '../../hooks/useObserver';
import { cld } from '../../utils/cloudinary';

export default function Description() {

  const descriptionImageContainer = useRef()
  const animation = useObserver(descriptionImageContainer, "EntryAnimationHomeDescription", 0.5)

  const developerImage = cld.image('Portfolio/Developer_activity-blue').resize(fill().width(400).height(400));
  return (
    <div className={`Description ${animation}`} ref={descriptionImageContainer} >
      <AdvancedImage cldImg={developerImage} alt='developer image' />
      <div className="Description-title">
        <h2>Descripción</h2>
        <p> Graduado de Ingeniería eléctrica desde 2019 pero desde 2022 me adentré por completo en este maravilloso mundo de las tecnologias, que siempre fue mi pasión y decidí dar el salto.
          Me apasiona aprender nuevas tecnologías y mantenerme actualizado en las últimas tendencias de desarrollo web para poder ofrecer soluciones innovadoras a mis clientes. Estoy emocionado por la oportunidad de trabajar en proyectos desafiantes y seguir creciendo como profesional en este campo en constante evolución.</p>
        <Button iconComponent={CoPresentRoundedIcon} text={`Conóceme`} urlToGo={`/about`} />
      </div>
    </div>
  )
}
