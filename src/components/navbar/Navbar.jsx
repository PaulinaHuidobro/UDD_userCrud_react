import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';


const Navbar = () => {
  return (
    
     <div className="navbar"> {/* Utilizamos un div para contener el Navbar */}
     <img src='https://previews.123rf.com/images/lovecta/lovecta1711/lovecta171100015/89498155-redondo-logotipo-verde-logotipo-de-vector-vegano-signo-de-comida-vegana-con-hojas-dise%C3%B1o.jpg' alt="Imagen del restaurante" className="restaurant-logo"></img>
      <h1>Vita, comida vegana</h1>
      <div className="nav-links">
      
    <Link className= "boton-home" to= {'/'}>
        {" "}
        SOBRE NOSOTROS {" "}
        </Link>                                                                                        
    <Link className= "boton-reserva" to= {'/reservas'}> 
    {" "}
    RESERVAS{" "}
    </Link>                                                                                                                                                                   
    <Link className= "boton-perfil" to= {'/menu'}>
    {" "}
    NUESTRA CARTA {" "}
    </Link> 
     </div>  
     </div>
                                                                                                                                                                                                                                                                                                                                                                                                                
  );
};

export default Navbar;
