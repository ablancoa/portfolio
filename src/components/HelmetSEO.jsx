import React from 'react';
import { Helmet } from 'react-helmet-async';
import cardImage from '../assets/images/logo192.png'

export default function HelmetSEO({ title, siteName, url, description, image, }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@ablancoa' />
      <meta name='twitter:creator' content='@ablancoa' />
      <meta name='twitter:title' content={siteName} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />
      <meta name='og:title' content={siteName} />
      <meta name='og:description' content={description} />
      <meta name='og:image' content={cardImage} />
      <meta name='og:url' content={url} />
      <meta name='og:site_name' content={siteName} />
      <meta name='og:locale' content='es_ES' />
      <meta name='og:type' content='article' />
    </Helmet>
  )
}
