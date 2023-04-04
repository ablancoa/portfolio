import React, { useState } from 'react';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import '../styles/components/Accordion.scss'

export default function Accordion({ item }) {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <div className={`Accordion`} onClick={handleClick}>
      <div className={`Accordion_Container ${open && 'Active_svg'}`}>
        <div className={`Accordion_Title`}>
          <h3>{item.title}</h3>
          <p>{item.place}</p>
          <p>{item.periode}</p>
        </div>
        <KeyboardArrowUpRoundedIcon sx={{ color: '#ffffff' }} />
      </div>
      <div className={`Experience ${open && 'Active'}`}>
        {
          item.activities.map((activity, index) => (
            <p key={index}>● {activity}</p>
          ))
        }
      </div>

    </div>
  )
}
