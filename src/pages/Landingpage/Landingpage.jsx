import "./Landingpage.css";
import Button from "../../components/Button.jsx"
import titleImage from "../../assets/images/Sparkflow-logo-dark.png";
import compPic from "../../assets/images/landing-page-pic.jpg";
import { Link } from "react-router-dom";
import Reviews from "./Reviews";
export default function Landingpage() {
  const linkStyle = {
    textDecoration: "none",
    color: " #121211",
    fontWeight: "bold",
  };

  return (
    <section id="landingPage">
      <header>
        <h1>
        <img src={titleImage} className="titleImg" />
        </h1>
      </header>
      <section className="landingMain">
        <img src={compPic} className="hidden" />
        <div className="outerContainer">
         

        <div className="reviewCard topCard">
          
        <p>
          Welcome to Sparkflow where our aim is to spark your creative juices
          and get you flowing in a new direction by finding your new favourite
          music. Just give us a clue be it a mood, artist or even a genre of
          music and let us do the rest.So simply click the button below and let
          us spark a love for new music within you.
        </p>
        <div className="buttonHolder">
          <Button 
          link="/getstarted"
          content="Amplify your playlist"/>
            
        </div>
        </div>
        </div>
      </section>
      <Reviews />
    </section>
  );
}
