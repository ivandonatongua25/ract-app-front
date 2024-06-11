import React,{useEffect,useState} from 'react';

function Usuario() {
    const [backendData,setBackendData] = useState([{}])
    useEffect(()=>{
        fetch("http://localhost:2050/users").then(response => response.json()).then(data =>{setBackendData(data)} )},[])
    
       // let id;
    return(
        
        <div className="Usuarios">
            <h1>Todos Los Usuarios Del Sistema</h1>
        
            {(typeof backendData =="undefined") ?( 
            <p>Loading... no se puede cargar los datos </p>) 
            :(
                backendData.map((us,i)=>(<p key={i}> 
                
            <div className="detallesUsuaer">
            email = [{us.email}] <br />
            id =[{us.id}] <br />
            lastname = [{us.lastname}]
                
                
            </div>    
            
        

        
        
                
                
                </p>)
            
            )
        )
        }

        </div>   
    )  
}

export default Usuario;



/*
 <ul>
            <li> <a href="http://localhost:2050/users" target='_blank' rel = "noreferer">Lista de Usuarios</a> </li>
        
        </ul>
*/
