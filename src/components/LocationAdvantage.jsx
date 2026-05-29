import React from "react";
import {
  MapPin,
  ChevronDown,
  School,
  Trees,
  Hospital,
  Train,
  Building2,
  Film,
  Shield,
} from "lucide-react";
import "../App.css";

const locationGroups = [
  {
    title: "Education",
    icon: School,
    items: [
      ["Bongaigaon HS School EM", "2 Min"],
      ["Bongaigaon College", "5 Min"],
      ["Little Flower School", "7 Min"],
    ],
  },
  {
    title: "Connectivity",
    icon: Train,
    items: [["New Bongaigaon Railway Station", "8 Min"]],
  },
  {
    title: "Health & Safety",
    icon: Hospital,
    items: [
      ["Lower Assam Hospital & Research Centre", "3 Min"],
      ["DIGP OPS CRPF", "7 Min"],
    ],
  },
  {
    title: "Lifestyle & Entertainment",
    icon: Film,
    items: [
      ["Domino's Pizza", "3 Min"],
      ["Jolly Max Cinemas", "5 Min"],
      ["Cygnett Hotel", "6 Min"],
      ["Universal Studio Mall", "6 Min"],
      ["Reliance Digital", "7 Min"],
    ],
  },
  {
    title: "Parks & Landmarks",
    icon: Trees,
    items: [
      ["Mini Stadium", "2 Min"],
      ["Bengtol Gate", "5 Min"],
      ["Bongaigaon Eco Park", "7 Min"],
      ["Paglasthan", "8 Min"],
      ["Don Bosco College Ground", "8 Min"],
      ["Dr. Bheem Rao Ambedkar Hall", "9 Min"],
      ["Ecological Park Bngn Refinery", "12 Min"],
    ],
  },
];

class LocationAdvantage extends React.Component {
  state = {
    openIndex: 0,
  };

  toggleGroup = (index) => {
    this.setState({
      openIndex: this.state.openIndex === index ? null : index,
    });
  };

  render() {
    return (
      <section className="location-section" id="location">
        <div className="location-heading">
          <h2>The Harmony Of Time</h2>
          <p>
            <span>Perfectly Connected</span>{" "}
            <strong>Everyday Living</strong>
          </p>
        </div>

        <div className="location-container">
          <div className="location-left">
            <div className="location-accordion">
              {locationGroups.map((group, index) => {
                const Icon = group.icon;
                const isOpen = this.state.openIndex === index;

                return (
                  <div className="location-accordion-item" key={index}>
                    <button
                      type="button"
                      className="location-accordion-head"
                      onClick={() => this.toggleGroup(index)}
                    >
                      <span>
                        <Icon size={18} />
                        {group.title}
                      </span>

                      <ChevronDown
                        size={18}
                        className={isOpen ? "rotate" : ""}
                      />
                    </button>

                    <div
                      className={
                        isOpen
                          ? "location-accordion-body show"
                          : "location-accordion-body"
                      }
                    >
                      {group.items.map((item, i) => (
                        <div className="location-distance-row" key={i}>
                          <p>{item[0]}</p>
                          <b>{item[1]}</b>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="location-right">
            <div className="map-box">
              <iframe
                title="Subham Park Location"
                src="https://www.google.com/maps?q=Subham%20Park%20Bongaigaon%20Assam&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              <div className="map-floating-card">
                <MapPin size={20} />
                <div>
                  <h4>Subham Park</h4>
                  <p>Bongaigaon, Assam</p>
                </div>
              </div>
            </div>

            <div className="location-mini-features">
              <div>
                <Building2 size={22} />
                <span>Daily Essentials Nearby</span>
              </div>

              <div>
                <Train size={22} />
                <span>Railway Connectivity</span>
              </div>

              <div>
                <Shield size={22} />
                <span>Safe Residential Zone</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default LocationAdvantage;