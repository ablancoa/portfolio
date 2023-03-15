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
      <AdvancedImage cldImg={projectImage} className='images person' />
      <img src={engine} alt="engine" className='images cloud' />
      <img src={engrane1} alt="engine1" className='images engine1' />
      <img src={engrane2} alt="engine2" className='images engine2' />
      <img src={vectorUp} alt="vectorUp" className='images vectorUp' />
      <img src={vectorDown} alt="vectorDown" className='images vectorDown' />
    </div>

  )
}
