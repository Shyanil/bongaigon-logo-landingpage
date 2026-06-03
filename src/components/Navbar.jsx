import React from "react";
import { Phone, X } from "lucide-react";
import "../App.css";

import logoimage from "../assets/images/logoimage.png";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false };
  }

  navItems = [
    { name: "Overview", id: "about" },
    { name: "Amenities", id: "amenities" },
    { name: "Gallery", id: "gallery" },
    { name: "Floor Plans", id: "floor-plans" },
    { name: "Location", id: "location" },
    { name: "Contact", id: "contact" },
    { name: "About", id: "about-builder" },
  ];

  toggleMenu = () => {
    this.setState((prev) => ({ menuOpen: !prev.menuOpen }));
  };

  closeMenu = () => {
    this.setState({ menuOpen: false });
  };

  scrollToSection = (id) => {
    this.closeMenu();

    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  handleBookVisit = () => {
    this.closeMenu();

    if (this.props.onOpenPopup) {
      this.props.onOpenPopup();
    }
  };

  render() {
    return (
      <>
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
              {this.navItems.map((item) => (
                <a key={item.id} href={`#${item.id}`}>
                  {item.name}
                </a>
              ))}
            </nav>

            <button
              type="button"
              className="navbar-btn"
              onClick={this.handleBookVisit}
            >
              <Phone size={16} />
              <span>Book a Site Visit</span>
            </button>

            <button
              type="button"
              className="sp-mobile-menu-btn"
              onClick={this.toggleMenu}
              aria-label="Open menu"
            >
              <span></span>
              <span></span>
            </button>
          </div>
        </header>

        <div
          className={
            this.state.menuOpen
              ? "sp-mobile-menu sp-mobile-menu-show"
              : "sp-mobile-menu"
          }
        >
          <button
            type="button"
            className="sp-mobile-menu-close"
            onClick={this.closeMenu}
            aria-label="Close menu"
          >
            <X size={34} />
          </button>

          <div className="sp-mobile-menu-links">
            {this.navItems.map((item) => (
              <button
                type="button"
                key={item.id}
                onClick={() => this.scrollToSection(item.id)}
              >
                {item.name}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="sp-mobile-menu-cta"
            onClick={this.handleBookVisit}
          >
            Contact / Enquire Now
          </button>
        </div>
      </>
    );
  }
}

export default Navbar;