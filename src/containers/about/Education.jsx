import React from 'react';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import { personalData } from '../../data/personalDB';
import '../../styles/about/Education.scss'

export default function Education() {
  return (
    <div className='Education'>
      <div className="Education_content">
        <SchoolRoundedIcon sx={{ color: "#fca311", marginTop: '5px', marginRight: '5px' }} />
        <h2>Mi educacion</h2>
      </div>
      {personalData.education.map((item) => (
        <div className={`Education_item number${item.id}`} key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.school}</p>
          <p>{item.periode}</p>
        </div>
      ))}
    </div>
  )
}
