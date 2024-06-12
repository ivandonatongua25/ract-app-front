import React,{useEffect,useState} from 'react';
import "../Assets/css/components.css";


function Peluches() {
    const [backendData,setBackendData] = useState([{}])
    useEffect(()=>{
        fetch("http://localhost:2050/peluches").then(response => response.json()).then(data =>{setBackendData(data)} )},[])
    
    return(
                
        <div className="Peluches">
            <div className='enunciado'> 
                <h1>Todos Los Peluches Del Sistema</h1>

            </div>
            <div className='articulos'>
                {(typeof backendData =="undefined") ?( 
                <p>Loading... no se puede cargar los datos </p>) 
                :(
                backendData.map((us,i)=>(<p className='tarjeta' key={i}> 
                
                <div className='posicionespeluches'>
                <div className="detallespeluches">
                    animal : {us.animal} <br />
                    name :{us.name} <br />
                    color : {us.color}  <br />
                    accesorio : {us.accesorio} <br />    
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
export default Peluches;