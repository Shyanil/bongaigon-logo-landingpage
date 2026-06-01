import React from "react";
import {
  Dumbbell,
  Gamepad2,
  Waves,
  Baby,
  UsersRound,
  Building2,
  ShieldCheck,
  BatteryCharging,
  CalendarDays,
} from "lucide-react";
import "../App.css";

const amenities = [
  { icon: <UsersRound />, title: "Club House", text: "A refined space for community gatherings." },
  { icon: <Dumbbell />, title: "Gymnasium", text: "Modern fitness space for everyday wellness." },
  { icon: <Building2 />, title: "Community Hall", text: "Perfect for celebrations and family bonding." },
  { icon: <Gamepad2 />, title: "Indoor Games", text: "Engaging recreation for all age groups." },
  { icon: <Waves />, title: "Splash Pool", text: "Relaxing water zone for leisure moments." },
  { icon: <Baby />, title: "Kid's Play Area", text: "Safe and joyful play space for children." },
  { icon: <BatteryCharging />, title: "Power Backup", text: "Reliable backup for common areas only." },
  { icon: <ShieldCheck />, title: "Security", text: "Safe living with dedicated security support." },
];

const Amenities = ({ onOpenPopup }) => {
  return (
    <section className="amenities-section" id="amenities">
      <div className="amenities-orbit one"></div>
      <div className="amenities-orbit two"></div>

      <div className="amenities-heading">
        <h2>Amenities & Facilities</h2>
        <p>
          <span>Crafted for comfort</span>{" "}
          <strong>Built for modern life</strong>
        </p>
      </div>

      <div className="amenities-grid">
        {amenities.map((item, index) => (
          <div className="amenity-card" key={index}>
            <div className="amenity-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <i></i>
          </div>
        ))}
      </div>

      <button className="amenities-visit-btn" onClick={onOpenPopup}>
        <span>
          <CalendarDays size={18} />
        </span>
        Book A Site Visit
        <b>→</b>
      </button>
    </section>
  );
};

export default Amenities;