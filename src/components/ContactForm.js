import React, { useRef } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import apiKey from '../assets/data/emailjs';

const ContactFormStyles = styled.div`
  width: 100%;
  .form__group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 1.5rem;
    padding: 1.2rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  input[type='submit'] {
    padding: 0.1rem;
    z-index: 1;
    height: 5rem;
    width: 18rem;
    border: 0;
    outline: none;
    background-color: var(--accent);
    color: var(--dark-bg);
    font-size: 2rem;
    font-family: 'Ginger Bold';
    text-transform: uppercase;
    display: inline-block;
    cursor: pointer;
    clip-path: polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0);
    cursor: pointer;
  }
`;

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    console.log(name, email, message);

    emailjs
      .sendForm('gmail', apiKey.TEMPLATE_ID, form.current, apiKey.USER_ID)
      .then(
        (result) => {
          e.target.name.value = '';
          e.target.email.value= '';
          e.target.message.value='Message sent successfully :)'; 
        },
        (error) => {
          e.target.name.value = '';
          e.target.email.value = '';
          e.target.message.value = "Can't send message at this moment :(";
        }
      );
  };
  return (
    <div>
      <ContactFormStyles>
        <form ref={form} onSubmit={sendEmail}>
          <div className='form__group'>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' name='name' required />
          </div>
          <div className='form__group'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='email' required />
          </div>
          <div className='form__group'>
            <label htmlFor='message'>Message</label>
            <textarea id='message' name='message' required />
          </div>
          <input type='submit' value='Send' />
        </form>
      </ContactFormStyles>
    </div>
  );
}
