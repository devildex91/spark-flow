import userReviews from "./reviews.json";
import "./Reviews.css";
import { Routes, Route } from "react-router-dom";
import Viewreviews from "./Viewreviews";
import Addreview from "./Addreview";
export default function Reviews() {
  return (
    <section className="reviewContainer">
      <Routes>
        <Route path="/" element={<Viewreviews />} />
        <Route path="/Addreview" element={<Addreview />} />
      </Routes>
    </section>
  );
}
