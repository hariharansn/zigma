import React from "react";
import "./Home.css";
import BackgroundImage from "./images/background.jpg";
import OverlayImage from "./images/homebanner.jpg";

function Home() {
  return (
    <section id="home">
      <div className="home-container">
        <div
          className="background-image"
          style={{ backgroundImage: `url(${BackgroundImage})` }}
        ></div>
        <div className="home-content">
          <div className="home-right-half">
            <h1>We are continually on the lookout for new advancements.</h1>
            <p>We update and keep you updated as well.</p>
            <a href="#contact" className="button">
              Book Your Consultation
            </a>
          </div>
          <div className="overlay-image">
            <img src={OverlayImage} alt="Overlay" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
