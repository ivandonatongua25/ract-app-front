import React,{useEffect,useState} from 'react';
import "../Assets/css/components.css";


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
export default UsuarioConPeluche;