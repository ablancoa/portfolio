import React, { useRef } from 'react';
import HelmetSEO from '../components/HelmetSEO';
import Header from '../components/Header';
import HeaderContent from '../containers/about/HeaderContent';
import Separator from '../components/Separator'
import Education from '../containers/about/Education';
import Work from '../containers/about/Work';
import Courses from '../containers/about/Courses';
import Aptitud from '../containers/about/Aptitud';
import { useObserver } from '../hooks/useObserver';
import '../styles/about/About.scss'

export default function AboutMe() {
  const animationInformationRef = useRef();
  const animationInformation = useObserver(animationInformationRef, "AboutInformationAnimation");
  const animationHabilityRef = useRef();
  const animationHability = useObserver(animationHabilityRef, "AboutHabilityAnimation");

  const metaTag = {
    title: "AlexDev - Sobre mí",
    siteName: "AlexDev",
    url: "http://www.alexdev.cl/about",
    description: "Acá conoceras la información más relevante sobre mi, estudios, experiencia laboral, cursos y otras aptitudes",
  }

  return (
    <div>
      <HelmetSEO title={metaTag.title} siteName={metaTag.siteName} description={metaTag.description} image={metaTag.image} url={metaTag.url} />
      <Header>
        <HeaderContent />
      </Header>
      <Separator />
      <div className={`Information ${animationInformation}`} ref={animationInformationRef}>
        <Education />
        <Work />
      </div>
      <Separator />
      <div className={`About_habilities ${animationHability}`} ref={animationHabilityRef}>
        <Courses />
        <Aptitud />
      </div>
    </div>
  )
}
