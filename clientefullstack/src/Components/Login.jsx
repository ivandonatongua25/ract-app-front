
import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { useEffect } from 'react';



const LoginForm = () => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');


const [backendData,setBackendData] = useState([{}])
useEffect(()=>{
    fetch("http://localhost:2050/auth/login").then(response => response.json()).then(data =>{setBackendData(data)} )},[])




const handleLogin = async (e) => {
    e.preventDefault();
    try {
    const response = await backendData.post('http://localhost:2050/auth/login', {
        username,
        password
    });
      // Guardar el token JWT en el almacenamiento local (localStorage) o en una cookie
    localStorage.setItem('token', response.data.token);
    } catch(error) {
console.error('Error al iniciar sesión:', error);
    }
};

return (
<form action=" ">
                    <div>
                    
                        <input   type="text "   placeholder="usuario" required/>
                    
                    </div>
                    <div>
                    
                        <input   type="password "   placeholder="contraseña" required/>
            
                    </div>
                    <button type="submit">
                <Link to="/menu">Logearse</Link>
                </button>
            </form>    

);
};

export default LoginForm;/**import React from "react";
import { Link } from "react-router-dom";

import { useState } from "react";
import { useEffect } from "react";
function Login(){

    const [backendData,setBackendData] = useState([{}])
    useEffect(()=>{
        fetch("http://localhost:2050/auth/login").then(response => response.json()).then(data =>{setBackendData(data)} )},[])
    
    return(
        
        <div>
            <h1>hola login</h1>
            <form action="">
                    <div>
                        <input   type="text "   placeholder="usuario" required/>
                    </div>
                    <div>
                        <input   type="password "   placeholder="contraseña" required/>
                    </div>
                    <button type="submit">
                <Link to="/peluches">Logearse</Link>
                </button>
            </form>
        

        
        
        </div>
        
    
    )
};
export default Login;
*/
/*
<div>
            <label htmlFor="login"> Usuario</label>{}<input type="text" />
            <label htmlFor="">Contraseña</label><input type="text" />
            
        </div>


*/