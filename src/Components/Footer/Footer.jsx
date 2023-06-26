import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-media-icons">
        <a href="https://facebook.com">
          <FaFacebook />
        </a>
        <a href="https://twitter.com">
          <FaTwitter />
        </a>
        <a href="https://instagram.com">
          <FaInstagram />
        </a>
      </div>

      <ul className="permalinks">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#imagebox">Info</a>
        </li>
        <li>
          <a href="#service">Service</a>
        </li>
        <li>
          <a href="#cardSlide">Enterpise</a>
        </li>
        <li>
          <a href="#product">Our Product</a>
        </li>
        <li>
          <a href="#client">Our Hero</a>
        </li>
        <li>
          <a href="#partner">Our Associate</a>
        </li>
        <li>
          <a href="https://zigma-blog.netlify.app/">Blog</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
