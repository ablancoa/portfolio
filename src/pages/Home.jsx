import React from 'react';
import Header from '../containers/HomePage/Header';
import WorkOutlineRoundedIcon from '@mui/icons-material/WorkOutlineRounded';
import Button from '../components/Button';
import Description from '../containers/HomePage/Description';
import Technology from '../containers/HomePage/Technology';
import PrincipalProjects from '../containers/HomePage/PrincipalProjects';
import Separator from '../components/Separator';
import '../styles/Home.scss'

export default function Home() {


  return (
    <div className='Home'>
      <Header />
      <Separator />
      <Description />
      <PrincipalProjects />
      <div className='Button-container'>
        <Button iconComponent={WorkOutlineRoundedIcon} text='Ir al portafolio' urlToGo={`/portfolio`} />
      </div>
      <Technology />
    </div>
  )
}
