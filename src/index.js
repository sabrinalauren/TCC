import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cadastro_cliente from './cadastro_cliente';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Cadastro_cliente />}  />
    </Routes>
  </BrowserRouter>
</React.StrictMode>
);

