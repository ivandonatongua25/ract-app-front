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






  );
}

export default App;
