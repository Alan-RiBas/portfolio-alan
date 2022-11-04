import React, {useState, useEffect, useRef} from "react";
import Cards  from '../Cards';
import {motion} from 'framer-motion/dist/framer-motion';

import './style.css';


import toDoListImg from '../../img/toDoList.png';
import previsaoTempo from '../../img/previsao-do-tempo.png';


export function Projetos (){
  const img ={
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
      {
        id:3,
        src: toDoListImg,
        title: 'Lista de Tarefas',
          subTitle: 'JavaScript(LocalStorage) - HTML - CSS',
          paragraph: 'Projeto feito com JavaScript para organização pessoal, utilizando LocalStorage, para armazenamento de dados.',
          link: 'https://to-do-list-pied-iota.vercel.app'
        },
        {
          id:4,
          src: previsaoTempo,
          title: 'Previsão do Tempo',
          subTitle: 'JavaScript - HTML - CSS',
          paragraph: 'Projeto consumindo API Open weather. Feito com JavaScript trazendo a previsao do tempo atual.',
          link: 'https://previsao-do-tempo-zeta.vercel.app',
        },
      ]
  }

  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(()=>{
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  },[]);
  return(
    <section className="sessao-projetos " id="projetos">
            <div className="sessao-header">
              <h1>Projetos</h1>
            </div>
            <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}} >
              <motion.div 
              className="projetos"
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              >
                {img.img.map(card =>(
                  <Cards
                  key={card.id}
                  image={card.src}
                  title={card.title}
                  subtitle={card.subTitle}
                  parag={card.paragraph}
                  link={card.link}
                  />
                ))}
              </motion.div>
            </motion.div>
      </section>
    );
}