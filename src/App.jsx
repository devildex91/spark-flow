import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Landingpage from "./components/Landingpage/Landingpage.jsx";
import Formpage from "./components/Formpage/Formpage.jsx";
import Resultspage from "./components/Resultspage/Resultspage.jsx";
import Closerlook from "./components/Closerlookpage/Closerlook.jsx";
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
