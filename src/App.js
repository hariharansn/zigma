import React, { Component } from "react";
import Home from "./Components/Home/Home";
import ImageBox from "./Components/InfoBox/ImageBox";
import Navbar from "./Components/NavBar/NavBar";
import Service from "./Components/Service/Service";
import CardSlider from "./Components/CardSlide/CardSlider";
import Products from "./Components/Products/Products";
import ContactForm from "./Components/Contact/ContactForm";
import PartnersComponent from "./Components/Partners/PartnersComponent";
import "./App.css";
import Client from "./Components/Client/Client";
import Footer from "./Components/Footer/Footer";

export default class App extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    const scrollArrow = document.getElementById("scrollArrow");

    if (document.documentElement.scrollTop > 200) {
      scrollArrow.style.display = "block";
    } else {
      scrollArrow.style.display = "none";
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render() {
    return (
      <>
        <Navbar />
        <Home />
        <ImageBox />
        <Service />
        <CardSlider />
        <Products />
        <PartnersComponent />
        <Client />
        <ContactForm />
        <Footer />

        <div id="scrollArrowContainer">
          <button id="scrollArrow" onClick={this.scrollToTop}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="15"
                cy="15"
                r="13.5"
                transform="rotate(90 15 15)"
                stroke="white"
                strokeWidth="3"
              />
              <path
                d="M10.0786 19.2L13.459 13.2346C14.2206 11.8905 16.1537 11.8807 16.929 13.2169L20.4002 19.2"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </>
    );
  }
}
