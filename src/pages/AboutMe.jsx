import React from 'react';
import Header from '../components/Header';
import HeaderContent from '../containers/about/HeaderContent';
import Separator from '../components/Separator'
import Education from '../containers/about/Education';
import Work from '../containers/about/Work';
import Courses from '../containers/about/Courses';
import Aptitud from '../containers/about/Aptitud';
import '../styles/about/About.scss'

export default function AboutMe() {
  return (
    <div>
      <Header>
        <HeaderContent />
      </Header>
      <Separator />
      <div className='Information'>
        <Education />
        <Work />
      </div>
      <Separator />
      <div className="About_habilities">
        <Courses />
        <Aptitud />
      </div>
    </div>
  )
}
