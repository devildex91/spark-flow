import "./Footer.css";
import copyrightImg from "../assets/images/Sparkflow-favicon-dark.png";

export default function Footer() {
  return (
    <footer>
      <div id="copyrightContainer">
        <img src={copyrightImg} alt="main logo" />
        <span>Copyright 2026</span>
      </div>
    </footer>
  );
}
