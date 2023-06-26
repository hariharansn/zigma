import React, { useRef } from "react";
import "./CardSlider.css";
import leftImage from "./icons/cricle-left.png";
import rightImage from "./icons/cricle-right.png";
import consulting from "./images/consulting.jpg";
import appManage from "./images/app-manage.png";
import database from "./images/database.png";
import infraManage from "./images/infrastructure-manage.png";
import securityManage from "./images/security-manage.png";

const CardSlider = () => {
  const sliderRef = useRef(null);

  const slideLeft = () => {
    const cardWidth = sliderRef.current.querySelector(".card").offsetWidth;
    const scrollPosition = sliderRef.current.scrollLeft - cardWidth;

    sliderRef.current.scrollTo({
      left: scrollPosition,
      behavior: "smooth"
    });
  };

  const slideRight = () => {
    sliderRef.current.scrollBy({
      left: sliderRef.current.offsetWidth,
      behavior: "smooth"
    });
  };

  return (
    <section id="cardSlide">
      <div className="card-slider-container">
        <div className="centered-text">
          <h1> Our Modules</h1>
          <p>
            Zigma aims to provide customized functionality that meets a
            company's specific operational and strategic requirements.
          </p>
        </div>

        <div className="arrow-container">
          <div className="arrow arrow-left" onClick={slideLeft}>
            <img src={leftImage} alt="Left Arrow" />
          </div>
          <div className="arrow arrow-right" onClick={slideRight}>
            <img src={rightImage} alt="Right Arrow" />
          </div>
        </div>
        <div className="card-slider" ref={sliderRef}>
          <div className="card">
            <div className="card-image">
              <img src={consulting} alt="Card Image" />
            </div>
            <div className="card-text">
              <h2>Consulting Services</h2>
              <p>
                We help organizations to improve their performance, analysis of
                existing organizational problems and the development of plans
                for improvement.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-image">
              <img src={appManage} alt="Card Image" />
            </div>
            <div className="card-text">
              <h2>Application Management Services</h2>
              <p>
                Applications management service provide application consulting,
                custom application development, testing and quality assurance
                services.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-image">
              <img src={database} alt="Card Image" />
            </div>
            <div className="card-text">
              <h2>Data Management Services</h2>
              <p>
                Data management is the development and execution of
                architectures, policies, practices and procedures in order to
                manage the information lifecycle needs of an enterprise in an
                effective manner.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-image">
              <img src={infraManage} alt="Card Image" />
            </div>
            <div className="card-text">
              <h2>Infrastructure Management Services</h2>
              <p>
                Infrastructure as a Service is a provision model in which an
                organization outsources the equipment used to support
                operations, including storage, hardware, servers and networking
                components
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-image">
              <img src={securityManage} alt="Card Image" />
            </div>
            <div className="card-text">
              <h2>Security Management</h2>
              <p>
                Today's organizations have a complex security management
                challenge on their hands. They need to orchestrate a broad range
                of security processes and technologies to secure their
                organizations in the face of increasing pressure to demonstrate
                compliance with a host of new regulations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSlider;
