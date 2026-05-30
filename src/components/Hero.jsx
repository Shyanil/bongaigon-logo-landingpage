import React from "react";
import { ArrowRight, Download, MapPin } from "lucide-react";

import "../App.css";
import heroimage from "../assets/images/heroimage.jpeg";

const Hero = ({ onOpenPopup }) => {
  return (
    <section className="hero-section" id="home">
      <img src={heroimage} alt="Subham Park" className="hero-bg" />

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1 className="hero-title">
         Step Into
          <span>Spotlight Of</span>
          Modern Living.
        </h1>

        <div className="hero-description">
          <p>
            Experience premium 3BHK & 4 BHK residences designed for refined
            living, elegant comfort, and a lifestyle inspired by modern sensibilities.
           
          </p>

          <div className="hero-info">
            <div className="hero-info-card">
              <small>Starts From</small>
              <strong>₹64 Lakhs</strong>
            </div>

            <div className="hero-info-card">
              <small>
                <MapPin size={14} />
                Location
              </small>
              <strong>Sonari Gaon, Assam</strong>
            </div>
          </div>

          <div className="hero-buttons">
            <button type="button" className="hero-btn hero-btn-brochure" onClick={onOpenPopup}>
              Download Brochure
              <Download size={17} />
            </button>

            <a href="#about" className="hero-btn hero-btn-explore">
              Explore More
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;