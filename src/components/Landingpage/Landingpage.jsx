import "./Landingpage.css"
import titleImage from "../../assets/images/Sparkflow-logo-dark.png";
import { Link } from "react-router-dom";
import Formpage from "../../components/Formpage/Formpage.jsx";
export default function Landingpage() {
    const linkStyle = {
        textDecoration: "none",
        color: " #121211",
        fontWeight: "bold"
    }
  return (
    <section id="landingPage">
      <header>
        <img src={titleImage} className="titleImg" />
      </header>
      <section className="landingMain">
        <p>
          Welcome to Sparkflow where our aim is to spark your creative juices
          and get you flowing in a new direction by finding your new favourite
          music. Just give us a clue be it a mood, artist or even a genre of
          music and let us do the rest.So simply click the button below and let
          us spark a love for new music within you.
        </p>
        <div className="buttonHolder">
          <button>
            <Link to="/getstarted" style={linkStyle}>
              {" "}
              Amplify your playlist
            </Link>
          </button>
        </div>
      </section>
      <section id = "userReview">
         
      </section>
    </section>
  );
}
