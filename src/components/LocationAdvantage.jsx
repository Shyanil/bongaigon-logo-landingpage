import React from "react";
import {
  MapPin,
  School,
  Trees,
  Hospital,
  Train,
  Film,
  Navigation,
} from "lucide-react";
import "../App.css";

import mapImage from "../assets/images/map.png";

const googleMapLink =
  "https://www.google.com/maps?q=Guru%20Nanak%20Nagar%2C%20Chapaguri%20Road%2C%20Bongaigaon%2C%20Assam";

const locationGroups = {
  parks: {
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
  education: {
    title: "Education",
    icon: School,
    items: [
      ["Bongaigaon HS School EM", "2 Min"],
      ["Bongaigaon College", "5 Min"],
      ["Little Flower School", "7 Min"],
    ],
  },
  connectivity: {
    title: "Connectivity",
    icon: Train,
    items: [
      ["New Bongaigaon Railway Station", "8 Min"],
      ["Lower Assam Bus Stand", "3 Min"],
    ],
  },
  health: {
    title: "Health & Safety",
    icon: Hospital,
    items: [
      ["Lower Assam Hospital & Research Centre", "3 Min"],
      ["DIGP OPS CRPF", "7 Min"],
    ],
  },
  lifestyle: {
    title: "Lifestyle & Entertainment",
    icon: Film,
    items: [
      ["Domino's Pizza", "3 Min"],
      ["Jolly Max Cinemas", "5 Min"],
      ["Cygnett Hotel", "6 Min"],
      ["Universal Studio Mall", "6 Min"],
      ["Reliance Digital", "7 Min"],
      ["Reliance Smart Bazaar", "2 Min"],
    ],
  },
};

const LocationCard = ({ group, className = "" }) => {
  const Icon = group.icon;

  return (
    <div className={`location-proximity-card ${className}`}>
      <div className="location-card-top">
        <div className="location-icon-box">
          <Icon size={24} />
        </div>

        <div>
          <small>{group.items.length} nearby points</small>
          <h3>{group.title}</h3>
        </div>
      </div>

      <div className="location-list">
        {group.items.map((item, i) => (
          <div className="location-list-row" key={i}>
            <span>{String(i + 1).padStart(2, "0")}</span>
            <p>{item[0]}</p>
            <b>{item[1]}</b>
          </div>
        ))}
      </div>
    </div>
  );
};

const LocationAdvantage = () => {
  return (
    <section className="location-section" id="location">
      <span className="location-orb location-orb-one"></span>
      <span className="location-orb location-orb-two"></span>
      <span className="location-orb location-orb-three"></span>

      <div className="location-heading">
        <h2>Location</h2>

        <p className="location-title">
          <span>Perfectly Connected</span>{" "}
          <strong>Everyday Living</strong>
        </p>

        <p className="location-subtext">
          Experience the ease of living at Subham Park, where schools,
          healthcare, railway connectivity, shopping and everyday essentials
          are all thoughtfully placed within minutes from your home.
        </p>
      </div>

      <div className="location-layout">
        <div className="location-left-stack">
          <div className="map-box">
            <img
              className="location-map-img"
              src={mapImage}
              alt="Subham Park Location Map"
            />

            <a
              href={googleMapLink}
              target="_blank"
              rel="noreferrer"
              className="map-floating-card"
            >
              <MapPin size={22} />
              <div>
                <h4>Subham Park</h4>
                <p>Bongaigaon, Assam</p>
              </div>
            </a>

            <a
              href={googleMapLink}
              target="_blank"
              rel="noreferrer"
              className="map-direction-card"
            >
              <span>
                <Navigation size={20} />
              </span>
              <b>Get Directions</b>
            </a>
          </div>

          <div className="location-bottom-cards">
            <LocationCard group={locationGroups.connectivity} />
            <LocationCard group={locationGroups.health} />
          </div>
        </div>

        <LocationCard
          group={locationGroups.parks}
          className="location-parks-card"
        />

        <div className="location-right-stack">
          <LocationCard group={locationGroups.education} />
          <LocationCard group={locationGroups.lifestyle} />
        </div>
      </div>
    </section>
  );
};

export default LocationAdvantage;