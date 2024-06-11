import logo from './logo.svg';
import './App.css';


import Usuario from './Components/Usuario';
import Usuarios from './Components/Usuarios';
import UsuarioPeluche from './Components/UsuarioPeluche';
import UsuarioConPeluche from './Components/UsuarioConPeluche';
import {Route,Link} from 'react-router-dom';
import Peluches from './Components/Peluches';
import peluche from './Components/Peluche';


function App() {
  return (
    <div className="App">
    
    <body>
      
    <Peluches/> 
    <Usuarios/>
    <UsuarioConPeluche/>
    <div>
    <peluche/>

    </div>
  
   

  
    </body>
  </div>




  
    /*
   



    

<Link to  = "/peluche/"  > Peluche por id</Link>

<Link to  = "/Usuarios/"  > Lista total de Usuarios</Link>

  <Link to  = "/UsuarioPeluche/" > Usuario con peluche</Link> 
  <Link to  = "/UsuarioConPeluche/" > Lista de Usuarios con peluche</Link>
    
    
    
    
    
    
     
<Route path="/peluches" exact = {true} Component={Peluches} />
      <Route path="/peluche" Component={peluche} />
     
     
      <Route path="/UsuarioPeluche"  Component={UsuarioPeluche} />
      <Route path="/UsuarioConPeluche"  Component={UsuarioConPeluche} />
    

  



      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
      
    */






  );
}

export default App;
