import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import ErrorIcon from '@mui/icons-material/Error';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import '../styles/LoaderEmail.scss'

export default function LoaderEmail({ status }) {

  return (
    <>
      {status === 'empty' && (
        <div className='Contact_Social'>
          <h2>Espero tus mensajes 😉</h2>
          <p>Muchas gracias por haberte interesado en mi, espero con ansias su mensaje</p>
        </div >
      )
      }

      {status === 'loading' && (
        <div className='Contact_Social'>
          <div className='SendIcon'>
            <SendIcon sx={{ color: '#fff', width: 50, height: 50 }} />
          </div>
          <div className="Circle_container">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
          <h3>Enviando Email</h3>
        </div >
      )
      }

      {status === 'success' && (
        <div className='Contact_Social'>
          <div className='DoneIcon'>
            <DoneRoundedIcon sx={{ color: '#fff', width: 50, height: 50 }} />
          </div>
          <h3>Correo enviado con exito. 😆</h3>
        </div>
      )
      }

      {status === 'error' && (
        <div className='Contact_Social'>
          <div className='ErrorIcon'>
            <ErrorIcon sx={{ color: '#fff', width: 50, height: 50 }} />
          </div>
          <h3>Error al enviar el mesaje</h3>
          <p>Por favor, contatame a traves de cualquiera de mis redes sociales al fondo de la página</p>
        </div>
      )
      }
    </>
  )
}
