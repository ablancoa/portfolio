import React, { useRef } from 'react';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import Button from '../../components/Button';
import { useObserver } from '../../hooks/useObserver';
import portada from '../../assets/images/portada.png'
import apiIcon from '../../assets/Icons/api-icon.svg';
import codeSnippet from '../../assets/Icons/code-snippet.svg';
import codeSnippet1 from '../../assets/Icons/code-snippet-1.svg';
import '../../styles/homePage/HeaderContent.scss'

export default function HeaderContent() {

  const imageContainer = useRef();
  const animation = useObserver(imageContainer, "EntryAnimationHeaderHome")

  return (
    <>
      <div className={`Header-title ${animation}`} ref={imageContainer}>
        <h1>Hola, soy <div>Alexander Blanco</div></h1>
        <p>“Soy un desarrollador web front-end apasionado por la creación de soluciones creativas y efectivas para proyectos en línea. Con experiencia en HTML, CSS, JavaScript y frameworks como React, React Next y React Native"</p>
        <Button iconComponent={SendRoundedIcon} text={`Contáctame`} urlToGo={`/contact`} />
      </div>
      <div className={`Header-image`} >
        <img src={portada} className='myImage' rel="preload" alt="Alexander Blanco portada" />
        <img src={apiIcon} alt='icono de api' className='apiIcon' />
        <img src={codeSnippet} className='codeSnippet' alt='Open Init' />
        <img src={codeSnippet1} className='codeSnippet1' alt='close Snippet' />
      </div>
    </>
  )
}
