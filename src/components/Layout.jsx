import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import '../styles/Layout.scss'

export default function Layout() {
  return (
    <div className='Layout'>
      <div className='Layout-container'>
        <NavBar />
        <Outlet className='mainOutlet' />
      </div>
    </div>
  )
}
