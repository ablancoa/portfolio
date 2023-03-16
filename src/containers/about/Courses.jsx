import React from 'react';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import { personalData } from '../../data/personalDB';
import '../../styles/about/Courses.scss';

export default function Courses() {
  return (
    <div className='Courses'>
      <div className='Courses_title'>
        <HistoryEduIcon sx={{ color: '#ffffff', marginRight: '5px' }} />
        <h2>Cursos e idiomas</h2>
      </div>
      <div className="Courses_description">
        {personalData.courses.map((item) => (
          <div className="Course" key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.school}</p>
            <p>{item.periode}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
