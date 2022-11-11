import React,{useRef} from "react";
import emailjs from '@emailjs/browser';

import {toast} from 'react-toastify/dist/ReactToastify';
import 'react-toastify/dist/ReactToastify.css';


import './style.css';
// import Mensagem from '../Mensagens/Mensagem';

export function Contato(){

  const notifySuccess = (msg) => {
    toast.success(msg, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const notifyError = (msg) => {
    toast.error(msg, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  
  const form = useRef();    
  
  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_7sh06bo', 'template_886awwj', form.current, 'IDw5fJyVbHSyJb-2X')
    .then((result) => {
        alert('Email enviado com sucesso!');
      }, (error) => {
        alert("Ocorreu um erro ao enviar email.");
      });
  };



  return(
    <section id="contato" className='contato'>
      <div className='contato-titulo'>
        <h2>Entre em contato</h2>
      </div>

      <form ref={form} onSubmit={sendEmail}>
        <div className='contato-form'>    
          <div className='formulario-area'>
            <div className='formulario'>           
              <div className='box-user'>
                <label for="nome">Nome</label>
                <input required type="text" name="user_name" id='nome'/>
              </div>
              <div className='box-user'>  
                <label for="email">Email</label>
                <input required type="email" name="user_email" id='email'/>
              </div>
            </div>

            <div className='formulario'>                
              <div className='box-user'>
                <label for="sobrenome">Sobrenome</label>
                <input required type="text" name="user_lastname" id='sobrenome'/>
              </div>
              <div className='box-user'> 
                  <label for="tel">Telefone</label>
                  <input type="number" name="user_phone" id='telefone'/>
              </div>
            </div>
        
          </div>
          <div className='campo-msg'>
            <label for="menssagem">Menssagem</label>
            <textarea required rows="5" cols="33" name="message" id="menssagem"/>
            <button type="submit" value="Send">Enviar</button>
          </div>
        </div>
      </form>
    </section>
  );
}