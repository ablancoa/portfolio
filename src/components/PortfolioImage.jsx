import React from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { fill } from '@cloudinary/url-gen/actions/resize';
import { cld } from '../utils/cloudinary';
import engine from '../assets/images/Website_Creator.svg'
import engrane1 from '../assets/images/engrane1.svg'
import engrane2 from '../assets/images/engrane2.svg'
import vectorUp from '../assets/images/vectorUp.svg'
import vectorDown from '../assets/images/vectorDown.svg'
import '../styles/portfolio/PortfolioImage.scss'

export default function PortfolioImage() {
  const projectImage = cld.image(`Portfolio/Website_Creator-blue`).resize(fill().width(400).height(400));
  return (
    <div className="Image-container">
      <AdvancedImage cldImg={projectImage} className='images person' rel="preload" alt='Projects Image' width='100%' />
      <img src={engine} alt="engine" className='images cloud' rel="preload" />
      <img src={engrane1} alt="engine1" className='images engine1' rel="preload" />
      <img src={engrane2} alt="engine2" className='images engine2' rel="preload" />
      <img src={vectorUp} alt="vectorUp" className='images vectorUp' rel="preload" />
      <img src={vectorDown} alt="vectorDown" className='images vectorDown' rel="preload" />
    </div>

  )
}
