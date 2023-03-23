import React from 'react';
import HelmetSEO from '../components/HelmetSEO';
import Header from '../components/Header';
import HeaderContent from '../containers/contact/HeaderContent';
import Separator from '../components/Separator'
import Form from '../containers/contact/Form';

export default function Contact() {
  const metaTag = {
    title: "AlexDev - Contactame",
    siteName: "AlexDev",
    url: "http://www.alexdev.cl/contact",
    description: "Ponte en contacto conmigo, dejame saber si quieres que trabajemos juntos, duda o sugerencias que desees. Estaré atento ¡Contactame sin compromiso!",
  }
  return (
    <>
      <HelmetSEO title={metaTag.title} siteName={metaTag.siteName} description={metaTag.description} image={metaTag.image} url={metaTag.url} />
      <Header>
        <HeaderContent />
      </Header>
      <Separator />
      <Form />
    </>
  )
}
