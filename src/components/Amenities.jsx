import React from "react";
import {
  Paintbrush, Bath, ArrowUpDown, PlugZap, Building2,
  Toilet, CookingPot, Flame, Cctv, BatteryCharging, CalendarDays
} from "lucide-react";
import "../App.css";

const amenities = [
  { no: "01", icon: <Paintbrush />, title: "Internal Finish", text: "Premium quality materials for elegant interiors." },
  { no: "02", icon: <Bath />, title: "Sanitary Wares", text: "High quality fittings for style and durability." },
  { no: "03", icon: <ArrowUpDown />, title: "Elevator", text: "Smooth & safe elevators for every floor." },
  { no: "04", icon: <PlugZap />, title: "Electrical", text: "Concealed wiring with premium fixtures." },
  { no: "05", icon: <Building2 />, title: "Structure", text: "RCC framed structure for lasting strength." },
  { no: "06", icon: <Toilet />, title: "Toilets", text: "Stylish & durable tiles with premium fittings." },
  { no: "07", icon: <CookingPot />, title: "Kitchen", text: "Functional kitchen with modern design." },
  { no: "08", icon: <Flame />, title: "Fire Safety", text: "Advanced fire safety systems for protection." },
  { no: "09", icon: <Cctv />, title: "Security", text: "24x7 security with CCTV surveillance." },
  { no: "10", icon: <BatteryCharging />, title: "Power Backup", text: "24/7 power backup for comfort." },
];

const Amenities = ({ onOpenPopup }) => {
  return (
    <section className="amenities-section" id="amenities">
      <div className="amenities-orbit one"></div>
      <div className="amenities-orbit two"></div>

      <div className="amenities-heading">
        <h2>Amenities</h2>
        <p>Crafted for comfort. Built for life.</p>
      </div>

      <div className="amenities-grid">
        {amenities.map((item) => (
          <div className="amenity-card" key={item.no}>
            <span className="amenity-number">{item.no}</span>
            <div className="amenity-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <i></i>
          </div>
        ))}
      </div>

      <button className="amenities-visit-btn" onClick={onOpenPopup}>
        <span><CalendarDays size={18} /></span>
        Book A Visit
        <b>→</b>
      </button>
    </section>
  );
};

export default Amenities;