import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/SocialMedia.scss'

export default function SocialMedia() {
  return (
    <div className="Social-network">
      <Link to='https://github.com/ablancoa' >
        <GitHubIcon alt="Github Icon" sx={{ color: "#000000" }} />
      </Link>
      <Link to='https://www.linkedin.com/in/alexander-blanco-amador/' >
        <LinkedInIcon alt="LinkedIn Icon" sx={{ color: "#000000" }} />
      </Link>
      <Link to='https://www.instagram.com/blancoamador95/'  >
        <InstagramIcon alt="Instagram Icon" sx={{ color: "#000000" }} />
      </Link>
      <Link to='https://www.facebook.com/alexander.blanco.7777/' >
        <FacebookIcon alt="Facebook Icon" sx={{ color: "#000000" }} />
      </Link>
    </div>
  )
}
