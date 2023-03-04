import React from 'react';
import { Link } from 'react-router-dom';
import githubIcon from '../assets/Icons/github-icon.svg';
import linkedinIcon from '../assets/Icons/linkedin-icon.svg';
import instagramIcon from '../assets/Icons/instagram-icon.svg';
import facebook from '../assets/Icons/facebook-icon.svg';
import '../styles/SocialMedia.scss'

export default function SocialMedia() {
  return (
    <div className="Social-network">
      <Link to='https://github.com/ablancoa' >
        <img src={githubIcon} alt="Github Icon" />
      </Link>
      <Link to='https://www.linkedin.com/in/alexander-blanco-amador/' >
        <img src={linkedinIcon} alt="LinkedIn Icon" />
      </Link>
      <Link to='https://www.instagram.com/blancoamador95/' >
        <img src={instagramIcon} alt="Instagram Icon" />
      </Link>
      <Link to='https://www.facebook.com/alexander.blanco.7777/' >
        <img src={facebook} alt="Facebook Icon" />
      </Link>
    </div>
  )
}
