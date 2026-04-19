

import "./App.css";
import Navbar from "./layouts/Navbar.jsx";
import Footer from "./layouts/Footer.jsx";
import Landingpage from "./pages/Landingpage/Landingpage.jsx";
import Formpage from "./pages/Formpage/Formpage.jsx";
import Resultspage from "./pages/Resultspage/Resultspage.jsx";
import Closerlook from "./pages/Closerlookpage/Closerlook.jsx";
import { Routes, Route } from "react-router-dom";

export default function App() {


  return (
    <section id="main">
      
      <Navbar />
      <Routes>
        <Route path="/*" element={<Landingpage />} />
        <Route path="/getstarted" element={<Formpage />} />
        <Route path="/Results" element={<Resultspage />} />
        <Route path="/Closerlook" element={<Closerlook />} />
      </Routes>
      <Footer />
    </section>
  );
}
