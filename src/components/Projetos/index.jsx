import React, {useState, useEffect, useRef} from "react";
import {motion} from 'framer-motion/dist/es/index';

import img from '../../dataProj/data';
import Cards  from '../Cards';

import './style.css';

export function Projetos (){
 
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