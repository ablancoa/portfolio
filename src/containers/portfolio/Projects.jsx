import React from 'react';
import Card from '../../components/Card';
import { data } from '../../data/database'
import '../../styles/portfolio/Projects.scss'

export default function Projects() {
  const projects = [...data.data];
  const dimension = {
    width: 350,
    height: 200
  }
  return (
    <div className='Projects'>
      {projects.map((project) => (
        <div className='cards'>
          <Card product={project} key={project.id} width={dimension.width} height={dimension.height} />
        </div>
      ))}
    </div>
  )
}
