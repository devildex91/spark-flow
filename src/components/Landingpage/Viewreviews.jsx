

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
        <div className="carousel">
       

        <div className="reviewCard active">
          <h2>Don't believe us?</h2>
          <h3>{name}</h3>
          <div id = "buttonRow">
           <button onClick={prevReview} className="nav-btn">
          ❮
        </button>
          <p>"{review}"</p>
           <button onClick={nextReview} className="nav-btn">
          ❯
        </button></div>
          <button ><Link to="/Addreview" style={linkStyle}>
              Add your own
            </Link></button>
        </div>

       </div>
      
    )
}