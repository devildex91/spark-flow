import userReviews from "./reviews.json";
import { useState } from "react";
import {useNavigate} from "react-router-dom"

export default function Addreview() {
const [reviews, setReviews] = useState(userReviews);
const navigate = useNavigate();
   
  
 const handleSubmit = (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const formObject = Object.fromEntries(formData.entries());
    
   const newReview = {
      id: reviews.length + 1,
      name: formObject.name,
      review: formObject.review
    };
    
   
    setReviews(prevReview => [...prevReview, newReview]);
        alert(`Thankyou for your review ${formObject.name} we take our users opinions very seriously and are glad you had the time to give us feedback`

        ) 
      
      
      event.target.reset();
      navigate("/");
  };

  
  return (
    <div className="carousel">
      <div className="reviewCard active">
        <h2>What you thinking?</h2>
        <form  onSubmit={handleSubmit} >
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
           
        />
        <label htmlFor="review">Review:</label>
        <textarea
          rows="5"
          cols="21"
          type="text"
          id="review"
          name="review"
      
        ></textarea>
        <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
