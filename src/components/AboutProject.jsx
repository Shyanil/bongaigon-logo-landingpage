import React from "react";
import { Building2, Leaf, MapPin } from "lucide-react";
import "../App.css";
import aboutImage from "../assets/images/aboutimage.png";

const AboutBuilder = () => {
  return (
    <section className="about-builder-section" id="about">
      <div className="about-builder-container">
        <div className="about-builder-left">
          <p className="about-builder-label">About Subham Park</p>

          <div className="about-builder-line">
            <span></span>
            <i></i>
          </div>

          <h2>
            Crafted For <br />
            <strong>Modern Life.</strong>
          </h2>

          <p className="about-builder-text">
            Thoughtfully crafted 3BHK & 4BHK residences designed for calm
            modern living, comfort, and timeless elegance in the heart of
            Bongaigaon.
          </p>

          <div className="about-builder-features">
            <div className="about-builder-feature">
              <div className="about-builder-icon">
                <Building2 />
              </div>
              <div>
                <h3>48</h3>
                <p>Premium Units</p>
              </div>
            </div>

            <div className="about-builder-feature">
              <div className="about-builder-icon">
                <Leaf />
              </div>
              <div>
                <h3>Nature</h3>
                <p>Inspired</p>
              </div>
            </div>

            <div className="about-builder-feature">
              <div className="about-builder-icon">
                <MapPin />
              </div>
              <div>
                <h3>Prime</h3>
                <p>Location</p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-builder-image-box">
          <img src={aboutImage} alt="Subham Park" />
        </div>
      </div>
    </section>
  );
};

export default AboutBuilder;