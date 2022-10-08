import { Component } from "react";
import './style.css';

export class Header extends Component{
  
  render(){
    return(
      <nav className='navbar'>
        <div className='logo'>
          <h1>Front-end <span>Alan</span></h1>
        </div>
        <ul>
          <li><label className='nav-link' for="">Sobre mim</label></li>
          <li><label className='nav-link' for="">projetos</label></li>
          <li><label className='nav-link' for="">Contate me</label></li>
        </ul>
      </nav>
    );
  }
}