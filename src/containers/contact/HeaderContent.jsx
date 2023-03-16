import React from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { placeholder, responsive } from '@cloudinary/react';
import { cld } from '../../utils/cloudinary';
import '../../styles/contact/Headercontent.scss'

export default function HeaderContent() {

  const image = cld.image('Portfolio/Content_structure');
  return (
    <div className='Contact_Header'>
      <div className='Contact_Header__Title'>
        <h2>Trabajemos juntos</h2>
        <p>¡Gracias por visitar mi portafolio! Si estás interesado en mi trabajo o tienes alguna pregunta, no dudes en ponerte en contacto conmigo. Estaré encantado de escuchar tus comentarios, responder a tus preguntas y discutir cualquier proyecto que tengas en mente. Puedes comunicarte conmigo a través del siguiente formulario o de cualquiera de mis redes sociales. ¡Espero tener noticias tuyas pronto!</p>
      </div>
      <div className='Contact_Header__Image'>
        <AdvancedImage style={{ maxWidth: '400px' }} cldImg={image} alt='Imagen de personas colaborando' plugins={[responsive(), placeholder()]} />
      </div>
    </div>
  )
}
