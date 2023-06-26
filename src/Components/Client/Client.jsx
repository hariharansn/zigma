import React from "react";
import "./Client.css";
import dinakaran from "./logos/dinakaran.png";
import elcot from "./logos/elcot.png";
import kla from "./logos/kla.png";
import madrasFertilizer from "./logos/madras-fertilizer.png";
import msme from "./logos/msme.png";
import murugappa from "./logos/murugappa.png";
import ozoneGroup from "./logos/ozone-group.png";
import tata from "./logos/tata.png";
import tnGovt from "./logos/tn-govt.png";
import tnpcb from "./logos/tnpcb.png";
import tnsc from "./logos/tnsc.png";
import cdac from "./logos/cdac.png";
import datamini from "./logos/datamini.png";
import epson from "./logos/epson.png";
import dlink from "./logos/dlink.png";

import hp from "./logos/hp.png";

import redfox from "./logos/redfox.png";

import hiFocus from "./logos/hi-focus.png";

const Client = () => {
  const frames = [
    { id: 1, logo: dinakaran },
    { id: 2, logo: elcot },
    { id: 3, logo: kla },
    { id: 4, logo: madrasFertilizer },
    { id: 5, logo: msme },
    { id: 6, logo: murugappa },
    { id: 7, logo: ozoneGroup },
    { id: 8, logo: tata },
    { id: 9, logo: tnGovt },
    { id: 10, logo: tnpcb },
    { id: 11, logo: tnsc },
    { id: 12, logo: cdac },
    { id: 13, logo: datamini },
    { id: 14, logo: epson },
    { id: 15, logo: hiFocus },
    { id: 16, logo: dlink },
    { id: 17, logo: murugappa },
    { id: 18, logo: hp },
    { id: 19, logo: redfox }
  ];

  return (
    <section id="client">
      <div className="client-container">
        <div className="centered-text">
          <h1>Wall of Fame</h1>
          <p>
            Here is a list of <b>15+ Satisfied clients</b> which inspired us and
            touched a million lives{" "}
          </p>
        </div>

        <div className="frame-slider">
          <div className="frame-collection">
            {frames.map(
              (frame, index) =>
                index % 2 !== 0 && (
                  <div key={frame.id} className="frame">
                    <div className="frame-logo">
                      <img src={frame.logo} alt={`Logo ${frame.id}`} />
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
        <div className="frame-slider">
          <div className="frame-collection">
            {frames.map(
              (frame, index) =>
                index % 2 === 0 && (
                  <div key={frame.id} className="frame">
                    <div className="frame-logo">
                      <img src={frame.logo} alt={`Logo ${frame.id}`} />
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;
