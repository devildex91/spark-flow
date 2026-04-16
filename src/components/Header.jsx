import React from "react"
import mainLogo from "../assets/images/Sparkflow-favicon-dark.png";
import "./Header.css";

export default function header(){
    return (
        <> 
        <header>
             <img src= {mainLogo} alt="main logo"/>
        </header>
        </>
    )
}