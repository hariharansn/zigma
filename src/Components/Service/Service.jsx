import React from "react";
import "./Service.css";
import { ReactComponent as AppManage } from "./images/expertise_icon1.svg";
import { ReactComponent as ItConsult } from "./images/expertise_icon2.svg";
import { ReactComponent as Developement } from "./images/expertise_icon3.svg";

const Service = () => {
  return (
    <section id="service">
      <div className="service-container">
        <div className="centered-text">
          <h1>Our Expertise</h1>
          <p>
            Right from app development to scaling your organization, we have all
            the capabilities you need
          </p>
        </div>

        <div className="service-card-container">
          <div className="services">
            <div className="icon">
              <AppManage />
            </div>
            <h1>App Development</h1>
            <p>
              Build a secure, future-proof application through the latest
              technologies and enhance your user experience
            </p>
          </div>

          <div className="services">
            <div className="icon">
              <ItConsult />
            </div>
            <h1>Technology Consulting</h1>
            <p>
              Explore new opportunities, get insights and overcome your barriers
              by consulting with our experts
            </p>
          </div>

          <div className="services">
            <div className="icon">
              <Developement />
            </div>

            <h1>Research and Development</h1>
            <p>
              Analyze, solve complex challenges and develop solutions that
              create a revolution
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
