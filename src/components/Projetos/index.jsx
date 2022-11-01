import React, { Component } from "react";
import './style.css';

export class Projetos extends Component{
  render(){
    return(
      <section className='projetos cards' id='projetos'>
          <div className='card'>item 1</div>
          <div className='card'>item 2</div>
          <div className='card'>item 3</div>
          <div className='card'>item 4</div>
          <div className='card'>item 5</div>
          <div className='card'>item 6</div>
          <div className='card'>item 7</div>
          <div className='card'>item 8</div>
      </section>
    );
  }
}