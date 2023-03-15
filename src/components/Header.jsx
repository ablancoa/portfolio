import React from 'react';
import '../styles/Header.scss'

export default function Header({ children }) {

  return (
    <div className='Header-container'>
      <div className='Header-crystal first'></div>
      <div className='Header-crystal second'></div>
      <div className='Header-crystal third'></div>
      {children}
    </div>
  )
}
