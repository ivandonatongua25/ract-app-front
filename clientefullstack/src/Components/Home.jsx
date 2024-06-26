import React from 'react';
import { Outlet } from "react-router";
import { Link } from "react-router-dom";



function Home() {
  return (

    <div>
      <h2>Home</h2>
      <p>Bienvenido a la página de inicio.</p>
      <div>
        <nav>
        <ul>
            <li>
            <Link to="/login">Login</Link>
            </li>
            <li>
            <Link to="/ranking">Ranking</Link>
            </li>
          
        </ul>
        </nav>
        <hr/>        <Outlet/>
    </div>
    
    
    </div>
    
  );
}

export default Home;
/*

*/