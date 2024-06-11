import React,{useEffect,useState} from 'react';


function Peluches() {
    const [backendData,setBackendData] = useState([{}])
    useEffect(()=>{
        fetch("http://localhost:2050/peluches").then(response => response.json()).then(data =>{setBackendData(data)} )},[])
    
    return(
                
        <div className="Peluches">
            <h1>Todos Los Peluches Del Sistema</h1>
        
            {(typeof backendData =="undefined") ?( 
            <p>Loading... no se puede cargar los datos </p>) 
            :(
                backendData.map((us,i)=>(<p key={i}> 
                
            <div className="detallespeluches">
            animal = [{us.animal}] <br />
            name =[{us.name}] <br />
            color = [{us.color}]  <br />
            accesorio = [{us.accesorio}] <br />
                
                
            </div>    
            
            

            
        
                
                
                </p>)
            
            )
        )
        }

        </div>   
    

      
    )
    
}
export default Peluches;