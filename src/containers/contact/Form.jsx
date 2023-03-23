import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import { useObserver } from '../../hooks/useObserver';
import LoaderEmail from '../../components/LoaderEmail';
import logo from '../../assets/images/logo.png'
import '../../styles/contact/Form.scss'

export default function Form() {
  const form = useRef(null);
  const [sendingEmail, setSendingEmail] = useState("empty");
  const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  const animationRef = useRef();
  const animation = useObserver(animationRef, "FormAnimationEntry")

  const sendEmail = async (event) => {
    event.preventDefault();
    setSendingEmail('loading');
    try {
      await emailjs.sendForm(serviceID, templateID, form.current, publicKey)
        .then((result) => {
          console.log(result.text);
          form.current[0].value = "";
          form.current[1].value = "";
          form.current[2].value = "";
          setSendingEmail('success');
        }, (error) => {
          console.log(error.text);
          setSendingEmail('error');
        });
    } catch (error) {
      setSendingEmail('error');
      throw error
    }
  }

  const handleChange = (event) => {
    event.target.value ?
      event.target.classList.add('Active_input')
      :
      event.target.classList.remove('Active_input')
  }

  return (
    <div className={`Contact_Container ${animation}`} ref={animationRef}>
      <div className='Contact_Container__Image'>
        <img src={logo} alt="logo" width='300px' />
        <LoaderEmail status={sendingEmail} />
      </div>
      <form ref={form} className='Contact_Form' onSubmit={sendEmail}>
        <div className='Form_input'>
          <input id="name" type='text' required={true} name="user_name" onChange={handleChange} />
          <label htmlFor='name'>Nombre</label>
        </div>
        <div className='Form_input'>
          <input id='email' type='email' required={true} autoComplete='false' name="user_email" onChange={handleChange} />
          <label htmlFor='email'>Email</label>
        </div>
        <div className="Form_input">
          <textarea id='message' type='text' required={true} name="message" onChange={handleChange} />
          <label htmlFor='message'>Mensaje</label>
        </div>
        <button type='submit'>Enviar</button>
      </form>

    </div>
  )
}
