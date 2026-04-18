import "./Navbar.css";
import React from "react";
import {Link, useLocation} from "react-router-dom";
import mainLogo from "../assets/images/Sparkflow-favicon-dark.png";


export default function Navbar(){
    //uselocation variable for ease of use
    const location = useLocation();
   
    const linkStyle = {
        textDecoration: "none",
        color: " #121211",
        fontWeight: "bold"
    }
    //condition for ternary operator for buttons
       const hideNavButtons =
  location.pathname === "/" || location.pathname === "/Addreview";
   
    return (
        <> 
        <nav>
             <img src= {mainLogo} alt="main logo"/>
             {!hideNavButtons && 
             <div className ="navButtons">
               <button>
                 <Link to="/" style = {linkStyle}> Home </Link>
               </button>
                <button>
                 <Link to="/getstarted" style = {linkStyle} > New Search </Link>
               </button>
               </div>
            }
             

        </nav>
        </>
    )
}