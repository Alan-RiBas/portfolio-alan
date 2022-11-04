import React from "react";
import './App.css';

import {ToastContainer} from 'react-toastify/dist/ReactToastify';
import { Header } from './components/Header';
import { Apresentacao } from './components/Apresentacao';
import { Sobre } from './components/Sobre';
import { Projetos } from "./components/Projetos";
import {Contato}  from './components/Contato';





function App() {
  return (
    <div className="App">
      <ToastContainer />
        <Header/>
        <Apresentacao/>      
        <Sobre/> 
        <Projetos/>
        <Contato/>
    </div>
  );
}

export default App;
