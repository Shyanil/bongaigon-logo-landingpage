import React from "react";
import { X, User, Phone, Mail, Send } from "lucide-react";
import "../App.css";

const PopupForm = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-form">
        <button className="popup-close" onClick={onClose}>
          <X size={20} />
        </button>

        <h2>Book A Site Visit</h2>
        <p>Fill your details and our team will connect with you shortly.</p>

        <div className="popup-input">
          <User size={16} />
          <input type="text" placeholder="Your Name" />
        </div>

        <div className="popup-input">
          <Phone size={16} />
          <input type="tel" placeholder="Phone Number" />
        </div>

        <div className="popup-input">
          <Mail size={16} />
          <input type="email" placeholder="Email Address" />
        </div>

        <select className="popup-input select-box">
          <option>Interested In</option>
          <option>2.5 BHK</option>
          <option>3 BHK</option>
          <option>3.5 BHK</option>
        </select>

        <button className="popup-submit">
          Submit Enquiry <Send size={16} />
        </button>
      </div>
    </div>
  );
};

export default PopupForm;