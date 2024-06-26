import React,{useEffect,useState} from 'react';
import "../Assets/css/components.css";
import { Link } from 'react-router-dom';




function Peluches() {
    const [backendData,setBackendData] = useState([{}])
    useEffect(()=>{
        fetch("http://localhost:2050/peluches").then(response => response.json()).then(data =>{setBackendData(data)} )},[])
        
const handleDelete = (id) => {
    fetch(`http://localhost:2050/peluches/${id}`, {
        method: 'DELETE',
    })
    .then(response => {
        if (response.ok) {
            setBackendData(backendData.filter(item => item.id !== id));
        } else {
            console.error('Error al eliminar el elemento');
        }
    });

        }
    return(
                
        <div className="Peluches">
            <div className='enunciado'> 
                <h1>Todos Los Peluches Del Sistema</h1>
                <Link to = "/crearPeluche">
                    <button>
                    crear Peluche Nuevo
                    </button>

                    </Link>

            </div>
            <div >
           
            </div>
            <div className='articulos'>
                {(typeof backendData =="undefined") ?( 
                <p>Loading... no se puede cargar los datos </p>) 
                :(
                backendData.map((us)=>(<p className='tarjeta' key={us.id}> 
                
                <div className='posicionespeluches'>
                <div className="detallespeluches">
                
                    <h2 className=' detalles'><button onClick={() => handleDelete(us.id)}>Eliminar</button></h2>
                    <div className="descripcion">
                    animal : {us.animal} <br />
                    name :{us.name} <br />
                    color : {us.color}  <br />
                    accesorio : {us.accesorio} <br /> 
                    

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
export default Peluches;