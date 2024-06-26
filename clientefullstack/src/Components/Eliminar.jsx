import React,{useEffect,useState} from 'react';
import "../Assets/css/components.css";


function Eliminar() {
    const [backendData,setBackendData] = useState([{}])
    useEffect(()=>{
        fetch("http://localhost:2050/users").then(response => response.json()).then(data =>{setBackendData(data)} )},[])
    
        const handleDelete = (id) => {
            const updatedItems = backendData.filter(item => item.id !== id);
            setBackendData(updatedItems);
        };
    return(
        <div>
        <h1>Lista de Elementos</h1>
        <ul>
        {backendData.map(item => (
            <li key={item.id}>
            {item.name}
            <button onClick={() => handleDelete(item.id)}>Eliminar</button>
            </li>
        ))}
        </ul>
    </div>
        
        
)  
}

export default Eliminar;



/*
<ul>
            <li> <a href="http://localhost:2050/users" target='_blank' rel = "noreferer">Lista de Usuarios</a> </li>
        
        </ul>
*/
/*
import React, { useState } from 'react';

function App() {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ]);

  const handleDelete = (id) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
  };

  return (
    <div>
      <h1>Lista de Elementos</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleDelete(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

*/


/*

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

                <div className='descripcionU'>
                    email  : {us.email} <br />
                    id : {us.id} <br />
                    lastname :  {us.lastname} <br />

                </div> 
            <h2 className=' detalles'>
                <button>
                    
                    <Link  to="/usuario">Eliminar</Link>

                </button>
            
            </h2>
                
                
            </div>
                
            
            
            </div>    
                </p>)
            
            )
        )
        }


            </div>
            

        </div>

*/