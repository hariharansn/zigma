import React, { useState, useRef } from "react";
import "./ContactForm.css";
import Support from "./images/Support.png";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const form = useRef(null);
  const [isSent, setIsSent] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6i8w27n",
        "template_zltnrlh",
        form.current,
        "5r51-yvvKkxhW5MhI"
      )
      .then(() => {
        setIsSent(true);
      })
      .catch(() => {
        setIsSent(false);
      });
    e.target.reset();
  };

  const handleInputChange = (event, setter) => {
    setter(event.target.value);
  };

  return (
    <section id="contact">
      <div className="support-container">
        <div className="support-card">
          <div className="contact-left-half">
            <div className="support-info-container">
              <h3>Have a Project in mind?</h3>
              <p>Let's talk about it</p>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-label">Email:</span>
                  <a href="mailto:info@zigma.com">info@zigma.com</a>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Call:</span>
                  <span className="phone-number">
                    +91 860 892 3844 /+91 860 892 3844
                  </span>
                </div>
              </div>
            </div>
            <div className="image-container">
              <img src={Support} alt="Project Image" />
            </div>
          </div>
          <div className="contact-right-half">
            <div className="form-container">
              <form ref={form} onSubmit={sendEmail}>
                <div className="form-group" onSubmit={sendEmail}>
                  <div className="input-container">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      onChange={(event) => handleInputChange(event, setName)}
                      required
                    />
                    <label className={name ? "input-label" : ""} htmlFor="name">
                      Name
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-container">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={phone}
                      onChange={(event) => handleInputChange(event, setPhone)}
                      required
                    />
                    <label
                      className={phone ? "input-label" : ""}
                      htmlFor="phone"
                    >
                      Phone
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-container">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(event) => handleInputChange(event, setEmail)}
                      required
                    />
                    <label
                      className={email ? "input-label" : ""}
                      htmlFor="email"
                    >
                      Email
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-container">
                    <textarea
                      id="message"
                      name="message"
                      value={message}
                      onChange={(event) => handleInputChange(event, setMessage)}
                      required
                    />
                    <label
                      className={message ? "input-label" : ""}
                      htmlFor="message"
                    >
                      About Project
                    </label>
                  </div>
                </div>
                <button type="submit">Submit</button>
                {isSent ? (
                  <p className="message-sent">Message sent successfully!</p>
                ) : (
                  <p className="reach-out">Anyway, you can reach us.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
