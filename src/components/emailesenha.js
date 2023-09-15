import React, { useState } from 'react';
import './emailesenha.scss';

export default function Componente() {
  const [info12, setInfo12] = useState('');
  const [info13, setInfo13] = useState('');

  const handleInfo12Change = (event) => {
    setInfo12(event.target.value);
  };

  const handleInfo13Change = (event) => {
    setInfo13(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className='caixinha2'>
      <form onSubmit={handleSubmit}>
        <input className='Email'
          type="email"
          placeholder="*Email"
          value={info12}
          onChange={handleInfo12Change}
        />

        <input className='senha'
          type="password"
          placeholder="*Senha"
          value={info13}
          onChange={handleInfo13Change}
        />
      </form>
    </div>
  );
}