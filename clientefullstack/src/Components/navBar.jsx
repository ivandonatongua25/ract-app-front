import React
from "react";

import { Link } from "react-router-dom";

const links = [

    {
        name: "Home",
        href : "/"

    },

    
    {
        name: "Peluches",
        href : "/peluches"

    },
    {
        name: "PeluchesConUsuarios",
        href : "/peluchesconusuario"

    },
    { 
        name: "Login",
        href : "/login"

    },
    { 
        name: "Ranking",
        href : "/ranking"

    },

]


const navBar = ()=>{       



    return(
<div>
{links.map(link=>(<Link to = {link.href}>{link.href} </Link>))}

</div>

    ) 
}


export default navBar;