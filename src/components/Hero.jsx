import React from "react";
import { ArrowRight, Download, MapPin } from "lucide-react";

import "../App.css";
import heroimage from "../assets/images/heroimage.png";

const Hero = ({ onOpenPopup }) => {
  return (
    <section className="hero-section" id="home">
      <img src={heroimage} alt="Subham Park" className="hero-bg" />

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1 className="hero-title">
          Luxury Meets
          <span>natural</span>
          Elegance
        </h1>

        <div className="hero-description">
          <p>
            Experience premium 3BHK & 4 BHK residences designed for refined
            living, elegant comfort, and a lifestyle inspired by nature.
            Thoughtfully crafted spaces, serene surroundings, and modern
            architecture come together to create an address of timeless luxury.
          </p>

          <div className="hero-info">
            <div className="hero-info-card">
              <small>Starts From</small>
              <strong>₹64.13L</strong>
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