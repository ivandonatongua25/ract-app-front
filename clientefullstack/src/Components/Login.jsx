import React from "react";
import { Link } from "react-router-dom";
import App from "../App";
import { useState } from "react";
import { useEffect } from "react";
function Login(){

    const [backendData,setBackendData] = useState([{}])
    useEffect(()=>{
        fetch("http://localhost:2050/auth/login").then(response => response.json()).then(data =>{setBackendData(data)} )},[])
    
    return(
        
        <div>
<h1>
        hola login</h1>
        <div>
            <label htmlFor="login"> Usuario</label>{}<input type="text" />
            <label htmlFor="">Contraseña</label><input type="text" />
            <button>
                <Link to="/">Logearse</Link>
                </button>
        </div>


        
        
        </div>
        
    
    )
};
export default Login;