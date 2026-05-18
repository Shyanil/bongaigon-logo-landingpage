import React from "react";
import { CalendarCheck, PhoneCall } from "lucide-react";
import "../App.css";

const CTASection = ({
  title = "Schedule Your Site Visit",
  highlight = "Today",
  text = "Explore premium residences and get complete project details from our sales team.",
  onOpenPopup,
}) => {
  return (
    <section className="section-popup-cta">
      <div className="section-popup-cta-inner">
        <div className="section-popup-cta-content">
          <h3>
            {title} <strong>{highlight}</strong>
          </h3>
          <p>{text}</p>
        </div>

        <div className="section-popup-cta-actions">
          <button
            type="button"
            className="section-popup-cta-btn primary popup-trigger-btn"
            onClick={onOpenPopup}
          >
            <CalendarCheck size={18} />
            Book A Visit
          </button>

          <button
            type="button"
            className="section-popup-cta-btn secondary popup-trigger-btn"
            onClick={onOpenPopup}
          >
            <PhoneCall size={18} />
            Get Callback
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
