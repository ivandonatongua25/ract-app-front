import React,{useEffect,useState} from 'react';
import "../Assets/css/components.css";

function UsuarioConPeluche() {
    const [backendData,setBackendData] = useState([{}])
    useEffect(()=>{
    fetch("http://localhost:2050/conejos").then(response => response.json()).then(data =>{setBackendData(data)} )},[])
    
    return(
        <div className="UsuarioConPeluches">
            
            
            <div className='enunciado'> 
                
                <h1>Todos Los  Usuarios con Peluches Del Sistema</h1>
            
            </div>
            <div className="articulos">

            {(typeof backendData =="undefined") ?( 
            <p>Loading... no se puede cargar los datos </p>) 
            :(
            backendData.map((us,i)=>(<p className='tarjetaUCP' key={i}> 
            <div className='posicionesUsuarioConPeluches'>
                <div className="detallesusuariopeluches">
                    <div className='letras'>
                        email : {us.email} <br />
                        nombreAnimal : {us.nombreAnimal} <br />
                        imgAnimal :{us.imgAnimal} <br />
                        imgAccesorio : {us.imgAccesorio}  <br />
                        color : {us.color} <br />

                    </div>
                       
            
            
                </div> 

            </div>      
        
        

        
    
            
            
            </p>)
        
        )
    )
    }


        </div>
        

    </div>   )    
}
export default UsuarioConPeluche;
