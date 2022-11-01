import React, { Component } from "react";
import './style.css';

export class Header extends Component{
  
  render(){
    return(
      <nav className='navbar'>
        <div className='logo'>
          <h1>Front-end <span>DEV</span></h1>
        </div>
        <ul>
          <li><a className='nav-link' href="#sobre">Sobre mim</a></li>
          <li><a className='nav-link' href="">projetos</a></li>
          <li><a className='nav-link' href="#contato">Contate me</a></li>
        </ul>
      </nav>
    );
  }
}