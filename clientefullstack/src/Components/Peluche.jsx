import React from 'react';
import "../Assets/css/components.css";
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
            <button className='homeHome'>Home</button>
            <button className='homePeluches'>Peluches</button>
            <button className='homeUsuarios'>Usuarios</button>
            <button className='homeRanking'>Ranking</button>
            <button className='login'>Login </button>
        </div>
       

    );
    
    
}
export default Peluche;