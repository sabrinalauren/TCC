import './index.scss';
import MeuComponente from '../components/cadastrocliente';
import Componente from '../components/emailesenha';
import React, { useState } from 'react';
import Cabecalho from '../components/cabecalho'; 

export default function cliente() {
  const handleClick = () => {
    
    alert('Botão "Finalizar" clicado!');
  };

  return (
    <header className="cadastro">

        <Cabecalho />
        
      <div className="bordatrasparente">
        <div>
          <button className='pessoafisica'> PESSOA FÍSICA</button>
          <h1>*CAMPO OBRIGATÓRIO</h1>
        </div>

        <MeuComponente />
        <Componente />

        <button className='finalizar' onClick={handleClick}>Finalizar</button>
      </div>
    </header>
  );
}


