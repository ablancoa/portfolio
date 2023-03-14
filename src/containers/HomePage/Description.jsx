import React from 'react';
import { AdvancedImage } from '@cloudinary/react';
import CoPresentRoundedIcon from '@mui/icons-material/CoPresentRounded';
import Button from '../../components/Button';
import { cld } from '../../utils/cloudinary';

export default function Description() {

  const developerImage = cld.image('Portfolio/Developer_activity');
  return (
    <div className="Description">
      <AdvancedImage cldImg={developerImage} alt='developer image' />
      <div className="Description-title">
        <h2>Descripción</h2>
        <p> Graduado de Ingenieria electrica desde 2019 pero desde 2022 me adentre por completo en este maravilloso mundo de las tecnologias el cual siempre fue mi pasion y decidi dar el salto.
          Me apasiona aprender nuevas tecnologías y mantenerme actualizado en las últimas tendencias de desarrollo web para poder ofrecer soluciones innovadoras a mis clientes. Estoy emocionado por la oportunidad de trabajar en proyectos desafiantes y seguir creciendo como profesional en este campo en constante evolución.</p>
        <Button iconComponent={CoPresentRoundedIcon} text={`Conoceme`} urlToGo={`/about`} />
      </div>
    </div>
  )
}
