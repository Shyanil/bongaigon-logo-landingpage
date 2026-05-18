import React from "react";
import { ArrowRight, Phone } from "lucide-react";
import "../App.css";
import heroImage from "../assets/images/herosectionimage.png";

const Hero = () => {
  return (
    <>
      <section
        className="hero hero-custom"
        id="home"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-content">
          <div className="hero-badge">Quiet Luxury Living</div>

          <h1 className="hero-title">
            Crafted for <br />
            <strong>Comfort.</strong> <br />
            Built for Life.
          </h1>

          <div className="hero-line">
            <span></span>
            <i></i>
            <span></span>
          </div>

          <p className="hero-text">
            Premium 2.5, 3 &amp; 3.5 BHK residences in the heart of Bongaigaon.
            Where modern living meets everyday convenience.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="hero-btn primary">
              Explore Homes <ArrowRight size={18} />
            </a>

            <a href="#amenities" className="hero-btn secondary">
              View Amenities <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <a href="#contact" className="mobile-sticky-cta">
        <Phone size={18} />
        Enquire Now
      </a>
    </>
  );
};

export default Hero;