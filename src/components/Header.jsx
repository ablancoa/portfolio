import React from 'react';
import { fill } from '@cloudinary/url-gen/actions/resize';
import { CloudinaryImage } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';
import { Link } from 'react-router-dom';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import apiIcon from '../assets/Icons/api-icon.svg';
import codeSnippet from '../assets/Icons/code-snippet.svg';
import codeSnippet1 from '../assets/Icons/code-snippet-1.svg';
import '../styles/Header.scss'

export default function Header() {

  console.log(process.env.REACT_APP_CLOUDINARY_CLOUD)
  const portadaImage = new CloudinaryImage('Portfolio/portada', { cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD }).resize(fill().width(300).height(300));

  const handleClick = () => {

  }


  return (
    <div className='Header-container'>
      <div className='Header-crystal first'></div>
      <div className='Header-crystal second'></div>
      <div className='Header-crystal third'></div>
      <div className='Header-title'>
        <h1>Hola, soy Alexander Blanco</h1>
        <p>“Soy un desarrollador web front-end apasionado por la creación de soluciones creativas y efectivas para proyectos en línea. Con experiencia en HTML, CSS, JavaScript y frameworks como React, React Next y React Native"</p>
        <button type='button' onClick={handleClick} className='Header-Button'>
          <div>
            <SendRoundedIcon color='#ffffff' />
            <Link to={`/contact`}>Contactame</Link>
          </div>
        </button>
      </div>
      <div className='Header-image'>
        <AdvancedImage cldImg={portadaImage} className='myImage' />
        <img src={apiIcon} alt='icono de api' className='apiIcon' />
        <img src={codeSnippet} className='codeSnippet' alt='Open Init' />
        <img src={codeSnippet1} className='codeSnippet1' alt='close Snippet' />
      </div>

    </div>
  )
}
