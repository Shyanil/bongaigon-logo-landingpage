import React from "react";
import "../App.css";
import logoImg from "../assets/images/logoimage.png";

const Footer = () => {
  return (
    <footer className="footer-premium">
      <div className="simple-footer-container">
        <div className="simple-footer-logo-box">
          <img src={logoImg} alt="Subham Park" className="footer-logo" />
          <div className="logo-text">
            <h3>SUBHAM PARK</h3>
            <p>BONGAIGAON</p>
          </div>
        </div>

        <div className="footer-info-block">
          <h4>Corporate Address</h4>
          <p>
            5th Floor, Honuram Boro Path, Opposite Wallford, G.S Road,
            Guwahati 781005
          </p>
        </div>

        <div className="footer-info-block">
          <h4>Site Address</h4>
          <p>
            Subham Park, Near Durga Mandir, Gurunanak Nagar, Chapaguri Road,
            Bongaigaon, Assam - 783380
          </p>
        </div>

        <div className="footer-info-block">
          <h4>RERA Registration No.</h4>
          <p>RERAA BO 167 of 2024-2025</p>
        </div>
      </div>

      <div className="footer-bottom-copy">
        © 2025 Subham Group. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;