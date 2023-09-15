import './index.scss';
import MeuComponente from '../components/cadastrocliente';
import Componente from '../components/emailesenha';
import React, { useState } from 'react';

export default function cliente() {
  const handleClick = () => {
    // Lógica a ser executada quando o botão "Finalizar" é clicado
    alert('Botão "Finalizar" clicado!');
  };

  return (
    <header className="cadastro">
      <div className="bordatrasparente">
        <div>
          <button className='pessoafisica'>PESSOA FÍSICA</button>
          <h1>*CAMPO OBRIGATÓRIO</h1>
        </div>

        <MeuComponente />
        <Componente />

        <button className='finalizar' onClick={handleClick}>Finalizar</button>
      </div>
    </header>
  );
}


