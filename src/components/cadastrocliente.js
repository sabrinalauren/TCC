import React, { useState } from 'react';
import './cadastrocliente.scss';

export default function MeuComponente() {
  const [info1, setInfo1] = useState('');
  const [info2, setInfo2] = useState('');
  const [info3, setInfo3] = useState('');
  const [info4, setInfo4] = useState('');
  const [info5, setInfo5] = useState('');
  const [info6, setInfo6] = useState('');
  const [info7, setInfo7] = useState('');
  const [info8, setInfo8] = useState('');
  const [info9, setInfo9] = useState('');
  const [info10, setInfo10] = useState('');
  const [info11, setInfo11] = useState('');
  const [info12, setInfo12] = useState('');


  const handleInfo1Change = (event) => {
    setInfo1(event.target.value);
  };

  const handleInfo2Change = (event) => {
    setInfo2(event.target.value);
  };

  const handleInfo3Change = (event) => {
    setInfo3(event.target.value);
  };

  const handleInfo4Change = (event) => {
    setInfo4(event.target.value);
  };

  const handleInfo5Change = (event) => {
    setInfo5(event.target.value);
  };

  const handleInfo6Change = (event) => {
    setInfo6(event.target.value);
  };

  const handleInfo7Change = (event) => {
    setInfo7(event.target.value);
  };

  
  const handleInfo8Change = (event) => {
    setInfo8(event.target.value);
  };

  const handleInfo9Change = (event) => {
    setInfo9(event.target.value);
  };

  const handleInfo10Change = (event) => {
    setInfo10(event.target.value);
  };

  const handleInfo11Change = (event) => {
    setInfo11(event.target.value);
  };

  const handleInfo12Change = (event) => {
    setInfo12(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

  };

  return (
    <div className='caixinha'>
      <form onSubmit={handleSubmit}>
        <input className='Nomecompleto'
          type="text"
          placeholder="*Nome completo"
          value={info1}
          onChange={handleInfo1Change}
        />

        <span className="icone">&#9998;</span>

        <input className='Sexo'
          type="text"
          placeholder="*Sexo"
          value={info2}
          onChange={handleInfo2Change}
        />
        <span className="icone">&#9998;</span>

        <input  className='Datadenascimento'
          type="date" 
          placeholder="*Data de nascimento"
          value={info3}
          onChange={handleInfo3Change}
        />

        <input className='CPF'
          type="text"
          placeholder="*CPF"
          value={info4}
          onChange={handleInfo4Change}
        />

        <span className="icone">&#9998;</span>

        <input className='Seutelefone'
          type="text"
          placeholder="*Seu telefone"
          value={info5}
          onChange={handleInfo5Change}
        />

        <span className="icone">&#9998;</span>

        <input className='Tipodeendereço'
          type="text"
          placeholder="*Tipo de endereço"
          value={info6}
          onChange={handleInfo6Change}
        />

        <span className="icone">&#9998;</span>

        <input className='CEP'
          type="text"
          placeholder="*CEP"
          value={info7}
          onChange={handleInfo7Change}
        />

        <span className="icone">&#9998;</span>

        <input className='N°ecomplemento'
          type="text"
          placeholder="*N° e complemento"
          value={info8}
          onChange={handleInfo8Change}
        />

        <span className="icone">&#9998;</span>

        <input className='Nomedarua'
          type="text"
          placeholder="*Nome da rua"
          value={info9}
          onChange={handleInfo9Change}
        />

        <span className="icone">&#9998;</span>

        <input className='Bairro'
          type="text"
          placeholder="*Bairro"
          value={info10}
          onChange={handleInfo10Change}
        />

        <span className="icone">&#9998;</span>

        <input className='Cidade'
          type="text"
          placeholder="*Cidade"
          value={info11}
          onChange={handleInfo11Change}
        />

        <span className="icone">&#9998;</span>

        <input className='Estado'
          type="text"
          placeholder="*Estado"
          value={info12}
          onChange={handleInfo12Change}
        />

    <span className="icone">&#9998;</span>

      </form>
    </div>
  );
}