import React from "react";
import { Phone } from "lucide-react";
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
    if (this.state.menuOpen) {
      document.body.classList.add("mobile-nav-open");
    } else {
      document.body.classList.remove("mobile-nav-open");
    }
  }

  componentWillUnmount() {
    document.body.classList.remove("mobile-nav-open");
  }

  handleBookVisit = (e) => {
    e.preventDefault();

    if (this.props.onOpenPopup) {
      this.props.onOpenPopup();
    }
  };

  toggleMenu = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    this.setState((prev) => ({
      menuOpen: !prev.menuOpen,
    }));
  };

  closeMenu = () => {
    this.setState({ menuOpen: false });
  };

  render() {
    return (
      <header className="navbar">
        <div className="navbar-container">
          <a href="#home" className="navbar-logo-box" onClick={this.closeMenu}>
            <img
              src={logoimage}
              alt="Subham Park Logo"
              className="navbar-logo"
            />
          </a>

          <nav
            className={`navbar-menu ${
              this.state.menuOpen ? "navbar-menu-open" : ""
            }`}
          >
            {this.navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={this.closeMenu}>
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
            onPointerDown={this.toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
    );
  }
}

export default Navbar;