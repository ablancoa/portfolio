import React, { useEffect, useRef, useState } from 'react';
import { fill } from '@cloudinary/url-gen/actions/resize';
import { AdvancedImage } from '@cloudinary/react';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import Button from '../../components/Button';
import { cld } from '../../utils/cloudinary'
import { useObserver } from '../../hooks/useObserver';
import apiIcon from '../../assets/Icons/api-icon.svg';
import codeSnippet from '../../assets/Icons/code-snippet.svg';
import codeSnippet1 from '../../assets/Icons/code-snippet-1.svg';
import '../../styles/homePage/HeaderContent.scss'

export default function HeaderContent() {
  const portadaImage = cld.image('Portfolio/portada').resize(fill().width(400).height(400));

  const imageContainer = useRef();
  const animation = useObserver(imageContainer, "EntryAnimationHeaderHome")

  return (
    <>
      <div className={`Header-title ${animation}`} ref={imageContainer}>
        <h1>Hola, soy Alexander Blanco</h1>
        <p>“Soy un desarrollador web front-end apasionado por la creación de soluciones creativas y efectivas para proyectos en línea. Con experiencia en HTML, CSS, JavaScript y frameworks como React, React Next y React Native"</p>
        <Button iconComponent={SendRoundedIcon} text={`Contactame`} urlToGo={`/contact`} />
      </div>
      <div className={`Header-image`} >
        <AdvancedImage cldImg={portadaImage} className='myImage' />
        <img src={apiIcon} alt='icono de api' className='apiIcon' />
        <img src={codeSnippet} className='codeSnippet' alt='Open Init' />
        <img src={codeSnippet1} className='codeSnippet1' alt='close Snippet' />
      </div>
    </>
  )
}
