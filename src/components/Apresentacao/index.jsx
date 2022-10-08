import { Component } from 'react';
import './style.css';

export class Apresentacao extends Component{

  render(){
    const alanImg = require('../../img/Alan.png');

    return(
      <section className='apresentacao'>
        <div className='cartao-visita'>
          <div>
            <h1>Olá, Eu sou</h1>
            <h1>Alan Batista de oliveira Ribas</h1> 
          </div>
          <p>Desenvolvedor Front-end</p>
          <a href='#'>Baixar CV</a>
        </div>
        <div className='box'>
          <div className='alan-img'>  
            <img src={alanImg} alt="Desenvolvedor Alan Ribas"/>
          </div>
        </div>
      </section>
    );
  }
}
