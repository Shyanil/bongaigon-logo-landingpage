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
      showLoader: true,
    };
  }

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

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleStickyFooterScroll);
    window.removeEventListener("resize", this.handleStickyFooterScroll);
  }

  openPopup = () => {
    this.setState({ isPopupOpen: true });
  };

  closePopup = () => {
    this.setState({ isPopupOpen: false });
  };

  render() {
    if (this.state.showLoader) {
      return (
        <Key
          onFinish={() => this.setState({ showLoader: false })}
        />
      );
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