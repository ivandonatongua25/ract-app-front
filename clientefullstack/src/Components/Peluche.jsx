import React, { useState } from 'react';
import "../Assets/css/components.css";

import { useEffect } from 'react';



const PostForm = () => {
    const [animal, setAnimal] = useState('');
    const [name, setName] = useState('');
    const [color, setColor] = useState('');
    const [accesorio, setAccesorio] = useState('');
    const [backendData,setBackendData] = useState([{}])


useEffect(()=>{
        fetch("http://localhost:2050/peluches").then(response => response.json()).then(data =>{setBackendData(data)} )},[])
    


        const handlePostSubmit = async (e) => {
      
            e.preventDefault();
            try {
              // Enviar los datos del post al backend
            const handle = (animal,name,color,accesorio) => {
                fetch(`http://localhost:2050/conejos/${animal,name,color,accesorio}`, {
                    method: 'POST',
                })
                .then(response => {
                    if (response.ok) {
                        setBackendData(backendData.filter(item => item.name !== name));
                    } else {
                        console.error('Error al crear el elemento');
                    }
                });
            }
              // Limpiar los campos del formulario luego de enviar el post
            setAnimal('');
            setName('');
            setColor('');
            setAccesorio('');
        
            } catch(error) {
            console.error('Error al crear el post:', error);
            }
        };

        return (
    

            <div>
                
            
            <title type={setAnimal(handlePostSubmit.target.value)} placeholder="Título" />
                
            <title type={setName(handlePostSubmit.target.value)} placeholder="Contenido"/>
            <title type={setColor(handlePostSubmit.target.value)} placeholder="Contenido"/>
            <title type={setAccesorio(handlePostSubmit.target.value)} placeholder="Contenido"/>
            
            </div>
            
            
            
            );
            
        }
    ;
    




export default PostForm;
/*
function Peluche() {
    return(
        <ul>
            <li> <a href="http://localhost:2050/users" target='_blank' rel = "noreferer">Lista de Usuarios</a> </li>
        
        </ul>
    );   
}

export default Peluche;
*/
/*
function Peluche(){
    return(
        <div className='peluchemenu'>
            
            <p>hola crearemos un peluche</p>

        </div> 

    );
    
    
}
export default Peluche;*/


/*
<div className='peluchemenu'>
            <button className='homeHome'>   <Link target='_blank' to ='/'>Home </Link>  </button>
            <button className='homePeluches'><Link target = "_blank" to ='/Peluches'>Peluches</Link></button>
            <button className='homeUsuarios'><Link target='_blank' to ='/Usuarios'> Usuarios</Link></button>
            <button className='homeRanking'><Link target='_blank' to ='/Ranking'> Rankig</Link></button>
            <button className='login'><Link target='_blank' to ='/Login'>Login </Link> </button>
            <br />

        </div> */



        /*
<div className='peluchemenu'>
            <button className='homeHome'>   <Link target='_blank' to ='/'>Home </Link>  </button>
            <button className='homePeluches'><Link target = "_blank" to ='/Peluches'>Peluches</Link></button>
            <button className='homeUsuarios'><Link target='_blank' to ='/Usuarios'> Usuarios</Link></button>
            <button className='homeRanking'><Link target='_blank' to ='/Ranking'> Rankig</Link></button>
            <button className='login'><Link target='_blank' to ='/Login'>Login </Link> </button>
            <br />

        </div> 
        */