import React
, { useEffect } from "react";

import { useState } from "react";

function Ranking() {
    const [count, setCount] = useState(0);
    const [backendData,setBackendData] = useState([{}])
    useEffect(() => {
        //fetch fel ranking y traerlo desde el bakend
        fetch("http://localhost:2050/ranking").then(response => response.json()).then(data =>{setBackendData(data)} )},[])
      
    ;
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
        
      </div>
    );
  }
  export default Ranking;

  /*
  
function UsuarioConPeluche() {
    const [backendData,setBackendData] = useState([{}])
    useEffect(()=>{
        fetch("http://localhost:2050/conejos").then(response => response.json()).then(data =>{setBackendData(data)} )},[])
    
    return(
                
        <div className="UsuarioConPeluches">
            <div className='enunciadoUCP'> 
                <h1 className ="letra" >Todos Los Usuarios Con Peluches Del Sistema</h1>

            </div>
            <div className='articulosUCP'>
                {(typeof backendData =="undefined") ?( 
                <p>Loading... no se puede cargar los datos </p>) 
                :(
                backendData.map((us,i)=>(<p className='tarjetaUCP' key={i}> 
                
                <div className='posicionesUsuarioConPeluches'>
                <div className="detallesusuariopeluches">
                <h2 className=' detalles'><button><a href="../Assets/img/images.png">Detalles </a></button></h2>

                    <div className='descripcion'>
                    email : {us.email} <br/>
                    nombreAnimal : {us.nombreAnimal} <br />
                    imgAnimal : {us.imgAnimal} <br />
                    imgAccesorio :{us.imgAccesorio} <br />
                    color : {us.color}  <br /> 

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
  
  */ 

/*

*/