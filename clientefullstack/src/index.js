import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Usuarios from './Components/Usuarios.jsx';
import Peluches from './Components/Peluches.jsx';
import UsuarioConPeluche from './Components/UsuarioConPeluche.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className = "Pantalla">

          <App />
          
          <Peluches />
          <Usuarios/>
          <UsuarioConPeluche />
    </div>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
