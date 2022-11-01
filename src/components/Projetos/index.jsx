import React, { Component } from "react";
import Cards  from '../Cards';
import './style.css';
import toDoListImg from '../../img/toDoList.png';
import previsaoTempo from '../../img/previsao-do-tempo.png';


export class Projetos extends Component{
  state ={
    img: [
        {
          id:1,
          src: toDoListImg,
          title: 'Lista de Tarefas',
          subTitle: 'JavaScript(LocalStorage) - HTML - CSS',
          paragraph: 'Projeto feito com JavaScript para organização pessoal, utilizando LocalStorage, para armazenamento de dados.',
          link: 'https://to-do-list-pied-iota.vercel.app'
        },
        {
          id:2,
          src: previsaoTempo,
          title: 'Previsão do Tempo',
          subTitle: 'JavaScript - HTML - CSS',
          paragraph: 'Projeto consumindo API Open weather. Feito com JavaScript trazendo a previsao do tempo atual.',
          link: 'https://previsao-do-tempo-zeta.vercel.app',
        },
    ]
  };
  

  render(){
    
    const {img} = this.state;

    return(
      <section className="sessao-projetos " id="projetos">
            <div className="sessao-header">
              <h1>Projetos</h1>
            </div>
            <div className="projetos">
              {img.map(card =>(
                <Cards
                  image={card.src}
                  title={card.title}
                  subtitle={card.subTitle}
                  parag={card.paragraph}
                  link={card.link}
                />
              ))}
            </div>
      </section>
    );
  }
}