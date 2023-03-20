import React from 'react';
import { Helmet } from 'react-helmet-async';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import Button from '../components/Button';
import errorIcon from '../assets/images/not-found-error-alert-svgrepo-com.png'
import '../styles/notFound/NotFound.scss'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Mi Portafolio - Not Found</title>
      </Helmet>
      <div className='NotFound'>
        <h1>Lo sentimos, la página que usted busca no existe</h1>
        <img src={errorIcon} alt='404 Error Icon' />
        <Button iconComponent={HomeRoundedIcon} text="Ir al Home" urlToGo='/' />
      </div>
    </>
  )
}
