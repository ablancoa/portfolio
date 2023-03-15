import React from 'react';
import Header from '../components/Header'
import HeaderContent from '../containers/portfolio/HeaderContent';
import Projects from '../containers/portfolio/Projects';
import Separator from '../components/Separator'

export default function Portfolio() {
  return (
    <div>
      <Header>
        <HeaderContent />
      </Header>
      <Separator />
      <Projects />
    </div>
  )
}
