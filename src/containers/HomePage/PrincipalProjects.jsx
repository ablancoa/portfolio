import React from 'react';
import { AdvancedImage } from '@cloudinary/react';
import Card from '../../components/Card';
import { cld } from '../../utils/cloudinary';
import { data } from '../../data/database';
import '../../styles/homePage/PrincipalProjects.scss'

export default function PrincipalProjects() {

  const codeBracket = cld.image('Portfolio/code_brackets1');
  const projects = [...data.data];
  const projectToShow = projects.slice(0, 3);
  const dimensions = {
    width: 180,
    height: 100
  }

  return (
    <div className="Description-projects">
      <h2>Principales Proyectos</h2>
      <p>A cada proyecto le dedico lo mejor de mi, lo asumo como si fuera propio y lo desarrollo simpre dando mi mejor esfuerzo</p>
      <div className="Principal-porjects">
        <AdvancedImage cldImg={codeBracket} alt='bracket left' className='bracket-left' />
        <div className='Projects-container'>
          {projectToShow.map((item) => (
            <Card key={item.id} product={item} width={dimensions.width} height={dimensions.height} />
          ))}
        </div>
        <AdvancedImage cldImg={codeBracket} alt='bracket right' />
      </div>
    </div>
  )
}


