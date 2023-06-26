import React from "react";
import "./ImageBox.css";
import iso from "./Logos/iso.png";
import green from "./Logos/green.png";
import ssi from "./Logos/ssi.png";
import farm from "./Logos/farm.png";
import nsic from "./Logos/nsic.png";
import bigImage from "./images/bigImage.png";

function ImageBox() {
  return (
    <section id="imagebox">
      <div className="image-box">
        <div className="Certificate-container">
          <img src={iso} alt="Image 1" className="image" />
        </div>
        <div className="Certificate-container">
          <img src={green} alt="Image 2" className="Certificate" />
        </div>
        <div className="Certificate-container">
          <img src={ssi} alt="Image 3" className="Certificate" />
        </div>
        <div className="Certificate-container">
          <img src={farm} alt="Image 4" className="Certificate" />
        </div>
        <div className="Certificate-container">
          <img src={nsic} alt="Image 5" className="Certificate" />
        </div>
      </div>
      <div>
        <p className="qoute">
          You think beyond the platform, we take you across the platform.
        </p>
        <div className="big-image-container">
          <img src={bigImage} alt="Big Image" className="big-image" />
        </div>
      </div>
    </section>
  );
}

export default ImageBox;
