import React from 'react';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import Accordion from '../../components/Accordion';
import { personalData } from '../../data/personalDB';
import '../../styles/about/Work.scss'

export default function Work() {
  return (
    <div className='Work'>
      <div className='Work_experience'>
        <WorkRoundedIcon sx={{ color: '#fca311', marginRight: '5px' }} />
        <h2>Experiencia laboral</h2>
      </div>
      {personalData.experience.map((item) => (
        <Accordion item={item} key={item.id} />
      ))}
    </div>
  )
}
