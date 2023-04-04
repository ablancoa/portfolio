import React from 'react';
import WorkOutlineRoundedIcon from '@mui/icons-material/WorkOutlineRounded';
import HelmetSEO from '../components/HelmetSEO';
import Header from '../components/Header';
import HeaderContent from '../containers/HomePage/HeaderContent';
import Button from '../components/Button';
import Description from '../containers/HomePage/Description';
import Technology from '../containers/HomePage/Technology';
import PrincipalProjects from '../containers/HomePage/PrincipalProjects';
import Separator from '../components/Separator';
import '../styles/homePage/Home.scss'

export default function Home() {

  const metaTag = {
    title: "AlebaDev - Home",
    siteName: "AlebaDev",
    url: "http://www.alebadev.cl/",
    description: "¿Buscas un desarrollador web front-end especializado en React? Entra en mi página web y descubre mis proyectos, quien soy y en que te puedo ayudar. ¡Contactame sin compromiso!",
  }

  return (
    <>
      <HelmetSEO title={metaTag.title} siteName={metaTag.siteName} description={metaTag.description} image={metaTag.image} url={metaTag.url} />
      <div className='Home'>
        <Header>
          <HeaderContent />
        </Header>
        <Separator />
        <Description />
        <PrincipalProjects />
        <div className='Button-container'>
          <Button iconComponent={WorkOutlineRoundedIcon} text='Ir al portafolio' urlToGo={`/portfolio`} />
        </div>
        <Technology />
      </div>
    </>
  )
}
