import React from 'react';
import Header from '../containers/portfolio/Header';
import Projects from '../containers/portfolio/Projects';
import Separator from '../components/Separator'

export default function Portfolio() {
  return (
    <div>
      <Header />
      <Separator />
      <Projects />
    </div>
  )
}
