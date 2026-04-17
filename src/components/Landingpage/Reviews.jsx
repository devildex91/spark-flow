import React, { useState } from "react";
import userReviews from "./reviews.json";
import "./Reviews.css";
export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { name, review } = userReviews[currentIndex];

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1 === userReviews.length ? 0 : prev + 1));
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? userReviews.length - 1 : prev - 1));
  };

  return (
    <section className="reviewContainer">
      <div className="carousel">
        <button onClick={prevReview} className="nav-btn">
          ❮
        </button>

        <div className="reviewCard active">
          <h2>Don't believe us?</h2>
          <h3>{name}</h3>
          <p>"{review}"</p>
        </div>

        <button onClick={nextReview} className="nav-btn">
          ❯
        </button>
      </div>
    </section>
  );
}
