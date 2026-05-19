import React from "react";
import {
  Dumbbell,
  Building2,
  Trees,
  Baby,
  Waves,
  ShieldCheck,
  Car,
  Zap,
} from "lucide-react";
import "../App.css";

const Amenities = () => {
  const amenities = [
    {
      icon: <Dumbbell />,
      title: "Gymnasium",
      description: "State-of-the-art gym for a healthy & active lifestyle.",
    },
    {
      icon: <Building2 />,
      title: "Clubhouse",
      description: "Elegant clubhouse for celebrations & social gatherings.",
    },
    {
      icon: <Trees />,
      title: "Landscaped Gardens",
      description: "Beautifully landscaped gardens & open spaces.",
    },
    {
      icon: <Baby />,
      title: "Kids Play Area",
      description: "Safe & engaging play area for children to learn & grow.",
    },
    {
      icon: <Waves />,
      title: "Swimming Pool",
      description: "Relax & rejuvenate in our luxurious swimming pool.",
    },
    {
      icon: <ShieldCheck />,
      title: "24×7 Security",
      description: "Advanced security with CCTV surveillance.",
    },
    {
      icon: <Car />,
      title: "Covered Parking",
      description: "Ample & secure parking space for residents & guests.",
    },
    {
      icon: <Zap />,
      title: "Power Backup",
      description:
        "Uninterrupted power backup for a hassle-free living experience.",
    },
  ];

  return (
    <section className="amenities-section" id="amenities">
      <div className="amenities-header">
        <div className="amenities-label-wrap">
          <span></span>
          <p>Amenities</p>
          <span></span>
        </div>

        <h2>
          Designed for Comfort <br />
          <strong>Built for Better Living</strong>
        </h2>

        <div className="amenities-divider">
          <span></span>
          <i></i>
          <span></span>
        </div>

        <p className="amenities-subtitle">
          At Subham Park Bongaigaon, every amenity is crafted to elevate your
          lifestyle. Experience the perfect blend of luxury, convenience, and
          well-being.
        </p>
      </div>

      <div className="amenities-flow">
        {amenities.map((item, index) => (
          <div className="amenity-flow-item" key={index}>
            <div className="amenity-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <div className="amenity-small-line"></div>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Amenities;