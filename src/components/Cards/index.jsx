import React, { Component } from "react";
import './style.css';

export default function Cards({image, title, subtitle, parag, link}){
    
  return(

    <div className="cards">
      <div className="card-img-wrapper">
        <img src={image} alt="Jogo de resgatar pessoas"/>
      </div>
      <div className="card-info">
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>{parag}</p>
        <button><a href={link} target="_black">Abrir projeto</a></button>
      </div>
    </div>
  );
}