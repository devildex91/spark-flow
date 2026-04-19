import React from "react";
import {Link, useLocation} from "react-router-dom";



export default function Button(props){
const buttonStyle ={
    color: "#121211",
    backgroundColor: "#f24901",
    borderRadius: "12.5px",
    margin: "5px",
    width: "fit-content"
} 
const linkStyle = {
        textDecoration: "none",
        color: " #121211",
        fontWeight: "bold"
    }

return (
    <button style = {buttonStyle} onClick = {props.onClick}>
        <Link to={props.link} style = {linkStyle}>{props.content} </Link>
</button>
)

}