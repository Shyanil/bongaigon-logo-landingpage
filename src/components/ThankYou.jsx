import React from "react";
import "../App.css";
import logo from "../assets/images/logoimage.png";
import thankyouBg from "../assets/images/thankyoubg.jpeg";

const ThankYou = () => {
  return (
    <section
      className="thankyou-hero-page"
      style={{ backgroundImage: `url(${thankyouBg})` }}
    >
      <div className="thankyou-hero-overlay"></div>

      <div className="thankyou-hero-content">
        <img src={logo} alt="Subham Park" className="thankyou-hero-logo" />

        <h1>
         Thank you for choosing <span> Subham Park Bongaigoan</span>
        </h1>

        <p>
          We have successfully received your request and sincerely appreciate your interest in our project. Our sales team will contact you shortly.
        </p>

        <div className="thankyou-hero-buttons">
          <a href="/Brochure.pdf" download className="thankyou-hero-download">
            Download Brochure
          </a>

          <a href="/" className="thankyou-hero-home">
            Back to Home →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;