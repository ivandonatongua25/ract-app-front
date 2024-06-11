import React,{useEffect,useState} from 'react';

function UsuarioConPeluche() {
    const [backendData,setBackendData] = useState([{}])
    useEffect(()=>{
    fetch("http://localhost:2050/conejos").then(response => response.json()).then(data =>{setBackendData(data)} )},[])
    
    return(
        <div className="UsuarioPeluches">
        <h1>Todos Los  Usuarios con Peluches Del Sistema</h1>
    
        {(typeof backendData =="undefined") ?( 
        <p>Loading... no se puede cargar los datos </p>) 
        :(
            backendData.map((us,i)=>(<p key={i}> 
            
        <div className="detallesusuariopeluches">
        email = [{us.email}] <br />
        nombreAnimal = [{us.nombreAnimal}] <br />
        imgAnimal =[{us.imgAnimal}] <br />
        imgAccesoriio = [{us.imgAccesorio}]  <br />
        color = [{us.color}] <br />
            

            
            
        </div>    
        
        

        
    
            
            
            </p>)
        
        )
    )
    }

    </div>   )    
}
export default UsuarioConPeluche;
