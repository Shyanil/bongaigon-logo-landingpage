import React from "react";
import { Phone, X } from "lucide-react";
import "../App.css";

import logoimage from "../assets/images/logoimage.png";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
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

  componentDidUpdate() {
    document.body.classList.toggle("mobile-nav-open", this.state.menuOpen);
  }

  componentWillUnmount() {
    document.body.classList.remove("mobile-nav-open");
  }

  handleBookVisit = (e) => {
    e.preventDefault();
    this.closeMenu();

    if (this.props.onOpenPopup) {
      this.props.onOpenPopup();
    }
  };

  toggleMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();

    this.setState((prev) => ({
      menuOpen: !prev.menuOpen,
    }));
  };

  closeMenu = () => {
    this.setState({ menuOpen: false });
  };

  goToSection = (id) => {
    this.closeMenu();

    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 120);
  };

  render() {
    return (
      <>
        <header className="navbar">
          <div className="navbar-container">
            <a href="#home" className="navbar-logo-box" onClick={this.closeMenu}>
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
              className={`navbar-hamburger ${
                this.state.menuOpen ? "active" : ""
              }`}
              onClick={this.toggleMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
            </button>
          </div>
        </header>

        <div
          className={`mobile-full-menu ${
            this.state.menuOpen ? "mobile-full-menu-open" : ""
          }`}
        >
          <button
            type="button"
            className="mobile-full-menu-close"
            onClick={this.closeMenu}
            aria-label="Close menu"
          >
            <X size={30} />
          </button>

          <div className="mobile-full-menu-links">
            {this.navItems.map((item) => (
              <button
                type="button"
                key={item.id}
                onClick={() => this.goToSection(item.id)}
              >
                {item.name}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="mobile-full-menu-cta"
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