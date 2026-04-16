import "./Header.css";
import React from "react";
import titleImage from ".../assets/images/SparkFlow-logo-dark.png"

export default function Header() {
    return(
    <header>
    <img src = {titleImage} className = "titleImg"/>
    </header>
)}