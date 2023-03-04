import React from 'react';
import { fill } from '@cloudinary/url-gen/actions/resize';
import { CloudinaryImage } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';
import apiIcon from '../assets/Icons/api-icon.svg';
import component from '../assets/Icons/component.png';
import searchBar from '../assets/Icons/search-bar.png';
import codeSnippet from '../assets/Icons/code-snippet.svg';
import codeSnippet1 from '../assets/Icons/code-snippet-1.svg';
import '../styles/Header.scss'

export default function Header() {

  console.log(process.env.REACT_APP_CLOUDINARY_CLOUD)
  const portadaImage = new CloudinaryImage('Portfolio/portada_qwuy4w', { cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD }).resize(fill().width(300).height(300));


  return (
    <div className='Header-container'>
      <h1>Hola, soy Alexander Blanco</h1>
      <div className='Header-image'>
        <AdvancedImage cldImg={portadaImage} className='myImage' />
        <img src={apiIcon} alt='icono de api' className='apiIcon' />
        <img src={component} alt='icono de componente' className='component' />
        <img src={searchBar} alt='icono de barra de busqueda' className='searchBar' />
        <img src={codeSnippet} className='codeSnippet' alt='Open Init' />
        <img src={codeSnippet1} className='codeSnippet1' alt='close Snippet' />
      </div>
    </div>
  )
}
