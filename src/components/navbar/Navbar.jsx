import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css";
import { IoMdMenu } from "react-icons/io";
import { IoIosCloseCircle } from "react-icons/io";


 const Navbar = () => {
    
     const[navBarOpen, setNavBarOpen] = useState(false)
    const links=[
        {
            id:1,
            link: "Home"
        },
        {
            id:2,
            link: "Services"
        },
        {
            id:3,
            link: "homework"
        },
        {
            id:4,
            link: "Benefits" 
        },
    ];
  return (
    <div className={!navBarOpen === true ? StyleSheet.navBar: StyleSheet.navBarOpen}>
        <p>Restaurante Di Santina | comida fusion  </p>
        {!navBarOpen ? (
        <IoMdMenu  onClick={() => setNavBarOpen(!navBarOpen)} size={25}/>
        ):(
        <IoIosCloseCircle   onClick={() => setNavBarOpen(!navBarOpen)} size={25}/>
        )}
        {navBarOpen && (
            <ul>
            {links.map((x) =>(
             <div>
                <Link>{x.link === "HomeWeWork" ? "How we work" : x.link}</Link>
             </div>
            ))}
        </ul>
        )}
    </div>
  );
};
export default Navbar