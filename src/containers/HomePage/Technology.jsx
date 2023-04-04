import React from 'react';
import { technologies } from '../../data/technologies';
import '../../styles/homePage/Technology.scss'

export default function Technology() {
  return (
    <div className='Technology-container'>
      <div className="Technologies">
        {technologies.data.map((item) => (
          <img src={item.url} alt={item.name} key={item.id} />
        ))}
      </div>
    </div>
  )
}
