import React, { useRef } from 'react';
import Card from '../../components/Card';
import { data } from '../../data/database'
import { useObserver } from '../../hooks/useObserver'
import '../../styles/portfolio/Projects.scss'

export default function Projects() {

  const animationRef = useRef();
  const animation = useObserver(animationRef, "PortfolioProjectsAnimation")

  const projects = [...data.data];
  const dimension = {
    width: 350,
    height: 200
  }
  return (
    <div className={`Projects ${animation}`} ref={animationRef}>
      {projects.map((project) => (
        <div className='cards' key={project.id}>
          <Card product={project} width={dimension.width} height={dimension.height} />
        </div>
      ))}
    </div>
  )
}
