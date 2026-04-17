import "./Landingmain.css"
import {Link} from "react-router-dom"
 import Formpage from "../../components/Formpage/Formpage.jsx"
export default function Landingmain() {

   const linkStyle = {
        textDecoration: "none",
        color: "orangered",
        fontWeight: "bold"
    }
   return (
    <section className = "landingMain">
    <p>Welcome to Sparkflow where our aim is to spark your creative juices and get you flowing in a new direction by finding 
        your new favourite music. Just give us a clue be it a mood, artist or even a genre of music and let us do the rest.So
         simply click the button below and let us spark a love for new music within you.
    </p>
    <div className = "buttonHolder">
     <button><Link to = "/getstarted" style = {linkStyle}> Amplify your playlist</Link></button>
     </div>
    </section>
 )

}