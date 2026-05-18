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

        <div className="simple-footer-info">
          <p>
            <strong>Site Address:</strong> Subham Park, Near Durga Mandir,
            Gurunanak Nagar, Chapaguri Road, Bongaigaon, Assam - 783380
          </p>

          <p>
            <strong>RERA Registration No.:</strong> RERAA BO 167 of 2024-2025
          </p>

          <p>
            <strong>Available at:</strong> https://rera.assam.gov.in
          </p>
        </div>

        <div className="simple-footer-copy">
          © 2025 Subham Group. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;