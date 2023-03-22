import React, { useRef } from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { quality } from '@cloudinary/url-gen/actions/delivery';
import { placeholder, responsive } from '@cloudinary/react';
import { cld } from '../../utils/cloudinary';
import { useObserver } from '../../hooks/useObserver';
import '../../styles/contact/Headercontent.scss'

export default function HeaderContent() {
  const animationRef = useRef();
  const animation = useObserver(animationRef, "HeaderAnimationEntry");

  const image = cld.image('Portfolio/Content_structure').delivery(quality(100));
  return (
    <div className={`Contact_Header ${animation}`} ref={animationRef}>
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
