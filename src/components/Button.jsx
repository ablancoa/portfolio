import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Button.scss'

export default function Button({ iconComponent, urlToGo, text }) {
  const Icon = iconComponent;
  return (
    <button type='button' className='Header-Button'>
      <div>
        <Icon sx={{ color: '#e5e5e5' }} />
        <Link to={`${urlToGo}`}>{text}</Link>
      </div>
    </button>
  )
}
