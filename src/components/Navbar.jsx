import "./Navbar.css";
import React from "react";
import {Link, useLocation} from "react-router-dom";
import mainLogo from "../assets/images/Sparkflow-favicon-dark.png";


export default function Navbar(props){
    const location = useLocation();
   
    const linkStyle = {
        textDecoration: "none",
        color: " #121211",
        fontWeight: "bold"
    }
     
   

    return (
        <> 
        <nav>
             <img src= {mainLogo} alt="main logo"/>
             {location.pathname !=="/" && 
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