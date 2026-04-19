import "./Navbar.css";
import React from "react";
import Button from "../components/Button.jsx"
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
               <Button
                 link="/"
                 content="Home"
                 />
                  <Button
                 link="/getstarted"
                 content="New search"
                 />
               
               </div>
            }
             

        </nav>
        </>
    )
}