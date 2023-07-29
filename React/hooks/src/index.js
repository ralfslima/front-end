import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Exemplo01_state from'./hooks/Exemplo01_state';
import Exemplo02_effect from './hooks/Exemplo02_effect';
import Exemplo03_api from './hooks/Exemplo03_api';
import Atividade01 from './hooks/Atividade01';
import Atividade02 from './hooks/Atividade02';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Atividade02 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
