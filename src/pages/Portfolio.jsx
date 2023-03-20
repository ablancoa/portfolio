import React from 'react';
import HelmetSEO from '../components/HelmetSEO';
import Header from '../components/Header'
import HeaderContent from '../containers/portfolio/HeaderContent';
import Projects from '../containers/portfolio/Projects';
import Separator from '../components/Separator'

export default function Portfolio() {
  const metaTag = {
    title: "Mi Portafolio - Proyectos",
    siteName: "Mi Portafolio",
    url: "/portfolio",
    description: "Mis proyectos realizados con diferentes tecnologías, no dudes en consultarlos, visitarlos o ver si código, asi sabras que te puedo ayudar en el desarrollo de tus páginas",
    image: "https://res.cloudinary.com/dz3zwotvp/image/upload/v1679340727/Portfolio/RSSimage.png"
  }
  return (
    <>
      <HelmetSEO title={metaTag.title} siteName={metaTag.siteName} description={metaTag.description} image={metaTag.image} url={metaTag.url} />
      <Header>
        <HeaderContent />
      </Header>
      <Separator />
      <Projects />
    </>
  )
}
