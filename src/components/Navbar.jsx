import React from "react";
import { Phone } from "lucide-react";
import "../App.css";

import logoimage from "../assets/images/logoimage.png";

const Navbar = ({ onOpenPopup }) => {
  const navItems = [
    { name: "Overview", id: "about" },
    { name: "Amenities", id: "amenities" },
    { name: "Gallery", id: "gallery" },
    { name: "Floor Plans", id: "floor-plans" },
    { name: "Location", id: "location" },
    { name: "Contact", id: "contact" },
    { name: "About", id: "about-builder" },
  ];

  const handleBookVisit = (e) => {
    e.preventDefault();

    if (onOpenPopup) {
      onOpenPopup();
    }
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo-box">
          <img
            src={logoimage}
            alt="Subham Park Logo"
            className="navbar-logo"
          />
        </a>

        <nav className="navbar-menu">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.name}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="navbar-btn"
          onClick={handleBookVisit}
        >
          <Phone size={16} />
          <span>Book a Visit</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;