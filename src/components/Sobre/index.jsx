import React , { Component } from "react";
import './style.css';

import { FaGithub, FaLinkedinIn, FaUserAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

import { handleSlideDown } from "../../handle_functions";

export class Sobre extends Component{

  componentDidMount(){
    handleSlideDown();
  }
  componentDidUpdate(){
    handleSlideDown();
  }

  render(){
    const linkedIn = 'https://www.linkedin.com/in/alan-batista-de-oliveira-ribas-2b60a61a2/';
    const gitHub = 'https://www.linkedin.com/in/alan-batista-de-oliveira-ribas-2b60a61a2/';
    return(
      <section className='sobre' id='sobre'>
            <div className='descricao'>
              <h2>Sobre mim</h2>
              <p>👋🏻 Olá, meu nome é Alan, moro em Curitiba, PR.
                🖥 Apaixonado por programação, com ênfase em tecnologias Web.
                📚 Atualmente cursando Analise e Desenvolvimento de Sistemas;
                Full-Stack Developer - DevStars - Cursando.</p>
            </div>
            <div className='info'>
              <div className='info-name'>
                <div className='icone'><FaUserAlt/></div>
                <strong>Nome Completo</strong>
                <p>Alan Batista de Oliveira Ribas</p>
              </div>
              <div className='info-email'>
                <div className='icone'><AiOutlineMail/></div>
                <strong>Email</strong>
                <p>alanbatista.ribas@gmail.com</p>
              </div>
              <div className='info-linkedin'>
                <div className='icone'><FaLinkedinIn/></div>
                <strong>LinkedIn</strong>
                <a href={linkedIn} >Clique aqui!</a>
              </div>
              <div className='info-github'>
                <div className='icone'><FaGithub/></div>
                <strong>GitHub</strong>
                <a href={gitHub}>Alan-RiBas</a>
              </div>
            </div>
      </section>
    );
  }
}