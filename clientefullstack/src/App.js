import React from 'react';
import {  Route,  Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Layout from './Components/Layaout';
import Usuarios from './Components/Usuarios';
import Login from './Components/Login';
import Peluche from './Components/Peluche';
import Peluches from './Components/Peluches';
import Eliminar from './Components/Eliminar';
import Usuario from './Components/Usuario';
import UsuarioConPeluche from './Components/UsuarioConPeluche';
import Menu from './Components/Menu';

import  Ranking from './Components/Ranking';
function App() {
  return (
    <div>
      
      

    <Routes>
        
        <Route  path="/" element={<Layout/>} >
          <Route path="/" element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="*" element={<Contact/>} />
          <Route path="usuarios" element={<Usuarios/>} />
          <Route path="login" element={<Login/>} />
          <Route path="ranking" element={<UsuarioConPeluche/>} />
          <Route path="peluches" element={<Peluches/>} />
          <Route path="eliminar" element={<Eliminar/>} />
          <Route path="usuario" element={<Usuario/>} />
          <Route path="crearPeluche" element={<Peluche/>} />
          <Route path="crearUsPl" element={<Ranking/>} />
          <Route path="menu" element={<Menu/>} />
          
        </Route>
        
        
    </Routes>
    
  

    </div>
    
  );
}

export default App;

/*import logo from './logo.svg';
import './App.css';



import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import Usuario from './Components/Usuario';
import Usuarios from './Components/Usuarios';
import UsuarioPeluche from './Components/Menu';
import UsuarioConPeluche from './Components/UsuarioConPeluche';
import {Link} from 'react-router-dom';
import Peluches from './Components/Peluches';
import Peluche from './Components/Peluche';
import { useState } from 'react';
import navBar from './Components/navBar';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import  Home from './Components/Menu';
import Login from './Components/Login';
import Ranking from './Components/Ranking';




function App() {
  return (
  

  <div className='rutas'>
    
  
  
  <Router>
  
    
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/Peluches" element={<Peluches />} />
        <Route path="/Usuarios" element={<Usuarios />} />
        <Route path="/Ranking" element={<UsuarioConPeluche />} />
        <Route path="/Login" element={<Login />} />
        
        
      </Routes>
      
      <Peluche/>
  </Router>

  </div>
  
      
    
 

  
  );
}

export default App;


/*
 <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Suspense>
  </Router>
*/

/*


    <div className="App"  >
      <header>
      <div className='peluchemenu'>
          
          <Peluche/>
          </div>
      </header>
    
        <body> 
            <Peluches/> 
            <Usuarios/>
            <UsuarioConPeluche/>
          
        </body>
    </div>
  
*/

/*
mport React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Conectar Backend con Frontend</h1>
        {data ? <p>{data.message}</p> : <p>Cargando...</p>}
      </header>
    </div>
  );
}

export default App;
*/