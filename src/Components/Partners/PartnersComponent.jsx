import React, { useState, useEffect } from "react";
import "./PartnersComponent.css";
import Partner from "./images/partner.png";
import epson from "./logos/epson.png";
import cdac from "./logos/cdac.png";
import datamini from "./logos/datamini.png";
import dlink from "./logos/dlink.png";
import hp from "./logos/hp.png";
import redfox from "./logos/redfox.png";
import hiFocus from "./logos/hi-focus.png";
import hpEnterprise from "./logos/hp-enterprise.png";
import microsoft from "./logos/microsoft.png";

const PartnersComponent = () => {
  const [logoIndex, setLogoIndex] = useState(0);
  const logos = [
    epson,
    hp,
    cdac,
    datamini,
    dlink,
    redfox,
    hiFocus,
    hpEnterprise,
    microsoft
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLogoIndex((prevIndex) => (prevIndex + 2) % logos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="partner">
      <div className="partners-container">
        <div className="partner-left-half">
          <div className="partners-content">
            <h1>We work with great minds like you</h1>
            <p>
              We are very selective about who we work or partner with. We have
              worked with small startups and huge corporations but we only do
              work that excites us and with people who are as passionate as we
              are.
            </p>
            <div className="logos-container">
              {logos.slice(logoIndex, logoIndex + 3).map((logo, index) => (
                <img
                  className="partner-logo"
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="partner-right-half">
          <img src={Partner} alt="Partner Banner" />
        </div>
      </div>
    </section>
  );
};

export default PartnersComponent;
