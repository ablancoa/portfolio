import React from 'react';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import { personalData } from '../../data/personalDB';
import '../../styles/about/Aptitud.scss'

export default function Aptitud() {
  return (
    <div className='Aptitud_container'>
      <h2>Principales aptitudes</h2>
      <div className='Aptitud_card'>
        {personalData.aptitudes.map((item) => (
          <div className="Aptitud" key={item.id}>
            <p>{item.ability}</p>
            <div className='Aptitud_porcent__container'>
              <div className='Aptitud_porcent' style={{ maxWidth: (item.level * 15) }}></div>
            </div>
          </div>
        ))}
      </div>
      <div className='Aptitud_download'>
        <p>Descargar CV en formato PDF</p>
        <button className='Download_button'>
          <ArrowDownwardRoundedIcon sx={{ color: '#ffffff', marginRight: '15px' }} />
          <a href='https://drive.google.com/file/d/19F7ePhxgn5wvFW3yft3tucR4Fn-cWM-x/view?usp=share_link'>
            Descargar
          </a>
        </button>
      </div>
    </div>
  )
}
