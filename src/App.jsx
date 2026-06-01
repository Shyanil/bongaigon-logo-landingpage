import React from "react";
import "./App.css";

import Key from "./components/Key";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import AboutProject from "./components/AboutProject";
import Amenities from "./components/Amenities";
import Gallery from "./components/Gallery";
import FloorPlans from "./components/FloorPlans";
import LocationAdvantage from "./components/LocationAdvantage";
import ContactForm from "./components/ContactForm";
import AboutBuilder from "./components/AboutBuilder";
import StickyNote from "./components/StickyNote";
import PopupForm from "./components/PopupForm";
import Footer from "./components/Footer";
import ThankYou from "./components/ThankYou";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isPopupOpen: false,
      popupTitle: "Book A Site Visit",
      showLoader: true,
    };

    this.scrollObserver = null;
  }

  setupScrollAnimation = () => {
    if (this.scrollObserver) {
      this.scrollObserver.disconnect();
    }

    const items = document.querySelectorAll(`
      .hero-content,
      .highlight-marquee-section,
      .about-builder-left,
      .about-builder-image-box,
      .about-builder-feature,
      .builder-heading,
      .builder-intro-card,
      .builder-stat-card,
      .builder-projects-card,
      .builder-strength-bar,
      .amenities-heading,
      .amenity-card,
      .gallery-heading,
      .gallery-card,
      .floorplan-heading,
      .floorplan-main,
      .floorplan-side,
      .location-heading,
      .location-left,
      .map-box,
      .location-mini-features div,
      .contact-left,
      .contact-form-card,
      .footer-info-block
    `);

    if (!items.length) return;

    items.forEach((item) => {
      item.classList.add("scroll-reveal");
    });

    this.scrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-show");
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -20px 0px",
      }
    );

    items.forEach((item) => {
      this.scrollObserver.observe(item);

      const rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        item.classList.add("scroll-show");
      }
    });
  };

  componentDidMount() {
    this.handleStickyFooterScroll = () => {
      const footer = document.querySelector(".footer-premium");
      const aboutProject =
        document.querySelector("#about") ||
        document.querySelector(".about-project-section") ||
        document.querySelector(".about-project");

      const stickyForms = document.querySelectorAll(
        ".desktop-sticky-form, .mobile-sticky-cta, .sticky-popup-form"
      );

      if (stickyForms.length === 0) return;

      const windowHeight = window.innerHeight;

      let aboutReached = false;
      if (aboutProject) {
        const aboutTop = aboutProject.getBoundingClientRect().top;
        aboutReached = aboutTop <= windowHeight * 0.75;
      }

      let footerReached = false;
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        footerReached = footerTop <= windowHeight + 120;
      }

      stickyForms.forEach((form) => {
        if (!aboutReached || footerReached) {
          form.classList.add("hide-before-footer");
        } else {
          form.classList.remove("hide-before-footer");
        }
      });
    };

    window.addEventListener("scroll", this.handleStickyFooterScroll);
    window.addEventListener("resize", this.handleStickyFooterScroll);
    this.handleStickyFooterScroll();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.showLoader !== this.state.showLoader && !this.state.showLoader) {
      setTimeout(() => {
        requestAnimationFrame(() => {
          this.setupScrollAnimation();
          this.handleStickyFooterScroll();
        });
      }, 500);
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleStickyFooterScroll);
    window.removeEventListener("resize", this.handleStickyFooterScroll);

    if (this.scrollObserver) {
      this.scrollObserver.disconnect();
    }
  }

  openPopup = (title = "Book A Site Visit") => {
    if (typeof title !== "string") {
      title = "Book A Site Visit";
    }

    this.setState({
      isPopupOpen: true,
      popupTitle: title,
    });
  };

  closePopup = () => {
    this.setState({ isPopupOpen: false });
  };

  render() {
    if (this.state.showLoader) {
      return <Key onFinish={() => this.setState({ showLoader: false })} />;
    }

    return (
      <div className="app-shell">
        <Navbar onOpenPopup={this.openPopup} />
        <Hero onOpenPopup={this.openPopup} />
        <Highlights />

        <main className="page-shell">
          <AboutProject />
          <Amenities onOpenPopup={this.openPopup} />
          <Gallery onOpenPopup={this.openPopup} />
          <FloorPlans />
          <LocationAdvantage />
          <ContactForm />
          <AboutBuilder />
        </main>

        <StickyNote onOpenPopup={this.openPopup} />

        <PopupForm
          isOpen={this.state.isPopupOpen}
          onClose={this.closePopup}
          title={this.state.popupTitle}
        />

        <Footer />
      </div>
    );
  }
}

const AppWrapper = () => {
  const currentPath = window.location.pathname;

  if (currentPath === "/thank-you") {
    return <ThankYou />;
  }

  return <App />;
};

export default AppWrapper;