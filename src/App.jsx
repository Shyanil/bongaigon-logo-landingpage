import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import AboutProject from "./components/AboutProject";
import Amenities from "./components/Amenities";
import Walkthrough from "./components/Walkthrough";
import Gallery from "./components/Gallery";
import FloorPlans from "./components/FloorPlans";
import LocationAdvantage from "./components/LocationAdvantage";
import ContactForm from "./components/ContactForm";
import AboutBuilder from "./components/AboutBuilder";
import StickyNote from "./components/StickyNote";
import PopupForm from "./components/PopupForm";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isPopupOpen: false,
    };
  }

  openPopup = () => {
    this.setState({ isPopupOpen: true });
  };

  closePopup = () => {
    this.setState({ isPopupOpen: false });
  };

  render() {
    return (
      <div className="app-shell">
        <Navbar />
        <Hero onOpenPopup={this.openPopup} />
        <Highlights />

        <main className="page-shell">
          <AboutProject />

          <CTASection
            title="Want To Know More"
            highlight="About Subham Park?"
            text="Book a priority callback and get complete pricing, floor plan, and availability details."
            onOpenPopup={this.openPopup}
          />

          <Amenities />
          <Walkthrough />

          <CTASection
            title="Experience The Project"
            highlight="In Person"
            text="Schedule a guided site visit and explore the location, amenities, and residence layouts."
            onOpenPopup={this.openPopup}
          />

          <Gallery />
          <FloorPlans />
          <LocationAdvantage />

          <CTASection
            title="Ready To Find Your"
            highlight="Perfect Home?"
            text="Share your details and our team will help you choose the best available unit."
            onOpenPopup={this.openPopup}
          />

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

export default App;
