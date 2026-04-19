
import Button from "../../components/Button.jsx"
import React, { useState } from "react";
import userReviews from "./reviews.json";
import { Link } from "react-router-dom";


export default function Viewreviews(){

    const linkStyle = {
    textDecoration: "none",
    color: " #121211",
    fontWeight: "bold",
  };
const [currentIndex, setCurrentIndex] = useState(0);
  const { name, review } = userReviews[currentIndex];

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1 === userReviews.length ? 0 : prev + 1));
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? userReviews.length - 1 : prev - 1));
  };
    return(
        <div className="outerContainer">
       

        <div className="reviewCard">
          <h2>Don't believe us?</h2>
          <h3>{name}</h3>
          <div id = "buttonRow">
           <Button onClick={prevReview} 
           content="❮" />
        
          <p>"{review}"</p>
          <Button onClick={nextReview} 
           content="❯" />
           </div>
          <Button 
          Link="/Addreview" 
          content= "Add your own"  />
             
        </div>

       </div>
      
    )
}