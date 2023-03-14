import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from './Footer';
import '../styles/Layout.scss'

export default function Layout() {
  return (
    <div className='Layout'>
      <NavBar />
      <Outlet className='mainOutlet' />
      <Footer />
    </div>
  )
}
