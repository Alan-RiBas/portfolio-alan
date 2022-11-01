import React, { Component } from "react";
import './style.css';

export default class Contato extends Component{

  render(){
    return(
      <section id="contato" className='contato'>
        <div className='contato-titulo'>
          <h2>Entre em contato</h2>
        </div>

        <form methods=''>
          <div className='contato-form'>    
            <div className='formulario-area'>
              <div className='formulario'>           
                <div className='box-user'>
                  <label for="nome">Nome</label>
                  <input required type="text" name="nome" id='nome'/>
                </div>
                <div className='box-user'>  
                  <label for="email">Email</label>
                  <input required type="email" name="email" id='email'/>
                </div>
              </div>


              <div className='formulario'>                
                <div className='box-user'>
                  <label for="sobrenome">Sobrenome</label>
                  <input required type="text" name="sobrenome" id='sobrenome'/>
                </div>
                <div className='box-user'> 
                    <label for="telefone">Telefone</label>
                    <input required type="number" name="telefone" id='telefone'/>
                </div>
              </div>
          
            </div>
            <div className='campo-msg'>
              <label for="menssagem">Menssagem</label>
              <textarea required rows="5" cols="33" name="menssagem" id="menssagem"/>
            </div>
          </div>
        </form>
      </section>
    );
  }
}