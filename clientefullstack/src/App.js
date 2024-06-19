import logo from './logo.svg';
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
  <Peluche/>
    
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/Peluches" element={<Peluches />} />
        <Route path="/Usuarios" element={<Usuarios />} />
        <Route path="/Ranking" element={<UsuarioConPeluche />} />
        <Route path="/Login" element={<Login />} />
        
        
      </Routes>
      
  
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
