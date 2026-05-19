import React from "react";
import {
  GraduationCap,
  Plus,
  Sparkles,
  MapPinned,
  ChevronDown,
  MapPin,
  ExternalLink,
} from "lucide-react";
import "../App.css";

class LocationAdvantage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openIndex: 0,
    };
  }

  toggleAccordion = (index) => {
    this.setState((prevState) => ({
      openIndex: prevState.openIndex === index ? null : index,
    }));
  };

  render() {
    const { openIndex } = this.state;

    const locations = [
      {
        icon: <GraduationCap />,
        title: "Schools & Colleges",
        places: [
          "Bongaigaon HS School EM - 2 Min",
          "Bongaigaon College - 5 Min",
          "Little Flower School - 7 Min",
          "Don Bosco College Ground - 8 Min",
        ],
      },
      {
        icon: <Plus />,
        title: "Hospitals & Clinics",
        places: ["Lower Assam Hospital & Research Centre - 3 Min"],
      },
      {
        icon: <Sparkles />,
        title: "Entertainment & Lifestyle",
        places: [
          "Mini Stadium - 2 Min",
          "Domino's Pizza - 3 Min",
          "Jolly Max Cinemas - 5 Min",
          "Cygnett Hotel - 6 Min",
          "Universal Studio Mall - 6 Min",
          "Bongaigaon Eco Park - 7 Min",
          "Ecological Park Bngr Refinery - 12 Min",
        ],
      },
      {
        icon: <MapPinned />,
        title: "Connectivity & Hub",
        places: [
          "Bengtol Gate - 5 Min",
          "DIGP OPS CRPF - 7 Min",
          "Reliance Digital - 7 Min",
          "Paglasthan - 8 Min",
          "New Bongaigaon Railway Station - 8 Min",
          "Dr. Bheem Rao Ambedkar Hall - 9 Min",
        ],
      },
    ];

    return (
      <section className="location-section" id="location">
        <div className="location-content">
          <div className="location-label">
            <span></span>
            <p>Location</p>
            <span></span>
          </div>

          <h2>
            Perfectly Located <br />
            <strong>for a Better Life</strong>
          </h2>

          <div className="location-divider">
            <span></span>
            <i></i>
            <span></span>
          </div>

          <p className="location-text">
            Subham Park Bongaigaon enjoys a prime location with excellent
            connectivity to schools, hospitals, markets, and transport hubs.
          </p>

          <div className="location-accordion">
            {locations.map((item, index) => (
              <div
                className={`location-accordion-item ${
                  openIndex === index ? "active" : ""
                }`}
                key={index}
              >
                <button onClick={() => this.toggleAccordion(index)}>
                  <span className="location-icon">{item.icon}</span>
                  <span className="location-title">{item.title}</span>
                  <ChevronDown className="location-arrow" />
                </button>

                {openIndex === index && (
                  <div className="location-panel">
                    <div className="distance-list">
                      {item.places.map((place, i) => (
                        <span key={i}>{place}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="location-map-card">
          <iframe
            title="Subham Park Bongaigaon Location"
            src="https://www.google.com/maps?q=Subham%20Park%20Bongaigaon&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="map-pin-card">
            <MapPin size={24} />
            <div>
              <h4>Subham Park</h4>
              <p>Bongaigaon</p>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Subham%20Park%20Bongaigaon"
            target="_blank"
            rel="noreferrer"
            className="map-button"
          >
            View on Google Maps <ExternalLink size={18} />
          </a>
        </div>
      </section>
    );
  }
}

export default LocationAdvantage;