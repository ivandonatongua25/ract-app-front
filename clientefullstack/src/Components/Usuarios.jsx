import React,{useEffect,useState} from 'react';
import "../Assets/css/components.css";

function Usuario() {
    const [backendData,setBackendData] = useState([{}])
    useEffect(()=>{
        fetch("http://localhost:2050/users").then(response => response.json()).then(data =>{setBackendData(data)} )},[])
    
       // let id;
    return(
        
        <div className="Usuarios">
            <div className='enunciado'>
                
            <h1>Todos Los Usuarios Del Sistema</h1>
        
            </div>
            <div className = 'articulos'>

            {(typeof backendData =="undefined") ?( 
            <p>Loading... no se puede cargar los datos </p>) 
            :(
                backendData.map((us,i)=>(<p className='tarjetaU' key={i}> 

            <div className="posicionamientousuarios">

            <div className="detallesUsuarios">
                <h2 className='detalles'>Detalles</h2>
                <div className='descripcionU'>
                email  : {us.email} <br />
                id : {us.id} <br />
            lastname :  {us.lastname}

                </div>
           
                
                
            </div>
                
            
            
            </div>    
                </p>)
            
            )
        )
        }


            </div>
            

        </div>   
    )  
}

export default Usuario;



/*
 <ul>
            <li> <a href="http://localhost:2050/users" target='_blank' rel = "noreferer">Lista de Usuarios</a> </li>
        
        </ul>
*/
