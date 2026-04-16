import {useState} from "react";

import mainLogo from "../assets/images/Sparkflow-favicon-dark.png";
import "./Navbar.css";

export default function Navbar(){
    return (
        <> 
        <nav>
             <img src= {mainLogo} alt="main logo"/>
              
        </nav>
        </>
    )
}