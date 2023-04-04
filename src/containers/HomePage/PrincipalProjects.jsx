import React, { useRef } from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { Adjust } from '@cloudinary/url-gen/actions/adjust';
import Card from '../../components/Card';
import { cld } from '../../utils/cloudinary';
import { useObserver } from '../../hooks/useObserver';
import { data } from '../../data/database';
import '../../styles/homePage/PrincipalProjects.scss'

export default function PrincipalProjects() {
  const descriptionContainer = useRef();
  const animation = useObserver(descriptionContainer, "EntreyAnimationUp", 0.5)

  const codeBracket = cld.image('Portfolio/code_brackets1').adjust(Adjust.replaceColor('#e5e5e5').tolerance(17));
  const projects = [...data.data];
  const projectToShow = projects.slice(0, 3);
  const dimensions = {
    width: 180,
    height: 100
  }

  return (
    <div className={`Description-projects ${animation}`} ref={descriptionContainer}>
      <h2>Principales Proyectos</h2>
      <p>A cada proyecto le dedico lo mejor de mí, lo asumo como si fuera propio y lo desarrollo simpre dando mi mejor esfuerzo</p>
      <div className="Principal-porjects">
        <AdvancedImage cldImg={codeBracket} alt='bracket left' className='bracket-left' width='94px' height='255px' />
        <div className='Projects-container'>
          {projectToShow.map((item) => (
            <Card key={item.id} product={item} width={dimensions.width} height={dimensions.height} />
          ))}
        </div>
        <AdvancedImage cldImg={codeBracket} alt='bracket right' width='94px' height='255px' />
      </div>
    </div>
  )
}


