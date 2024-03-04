import React, { useRef } from 'react';
import './contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs';
import emailjs from 'emailjs-com';

const Contact = () => {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pu7ktxe', 'template_h1iuc6w', form.current, 'xMQiJ-2ZB667oIR_z')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Ask me any question</h5>
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className='contact__option'>
            <a href="mailto:rlobzowski@gmail.com" target='_blank' rel='noreferrer'><AiOutlineMail /></a>
            <h5>rlobzowski@gmail.com</h5>
          </article>

          <article className='contact__option'>
            <a href="https://www.linkedin.com/in/rafal-lobzowski/" target='_blank' rel='noreferrer'><BsLinkedin /></a>
            <h5>/rafal-lobzowski</h5>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Full Name' required />
          <input type="text" name='email' placeholder='Email' required />
          <textarea name="message" rows="10" placeholder='Message...' required></textarea>
          <button type='submit' className='btn btn-primary'>Send</button>
        </form>
      </div>

    </section >
  )
}

export default Contact