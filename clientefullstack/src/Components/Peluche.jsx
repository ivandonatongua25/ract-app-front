import React from 'react';
import "../Assets/css/components.css";
import {Link} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

/*
function Peluche() {
    return(
        <ul>
            <li> <a href="http://localhost:2050/users" target='_blank' rel = "noreferer">Lista de Usuarios</a> </li>
        
        </ul>
    );   
}

export default Peluche;
*/

function Peluche(){
    return(
        <div className='peluchemenu'>
            <button className='homeHome'>   <Link target='_blank' to ='/'>Home </Link>  </button>
            <button className='homePeluches'><Link target = "_blank" to ='/Peluches'>Peluches</Link></button>
            <button className='homeUsuarios'><Link target='_blank' to ='/Usuarios'> Usuarios</Link></button>
            <button className='homeRanking'><Link target='_blank' to ='/Ranking'> Rankig</Link></button>
            <button className='login'><Link target='_blank' to ='/Login'>Login </Link> </button>
            <br />

        </div> 

    );
    
    
}
export default Peluche;





/*
<div className='peluchemenu'>
            <button className='homeHome'>   <Link target='_blank' to ='/'>Home </Link>  </button>
            <button className='homePeluches'><Link target = "_blank" to ='/Peluches'>Peluches</Link></button>
            <button className='homeUsuarios'><Link target='_blank' to ='/Usuarios'> Usuarios</Link></button>
            <button className='homeRanking'><Link target='_blank' to ='/Ranking'> Rankig</Link></button>
            <button className='login'><Link target='_blank' to ='/Login'>Login </Link> </button>
            <br />

        </div> */