import React from "react";
import { Sparkles, User, Phone, Mail, Send, Clock } from "lucide-react";
import "../App.css";

class StickyNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const footer = document.querySelector(".footer-premium");
    const footerTop = footer
      ? footer.getBoundingClientRect().top
      : window.innerHeight;

    const shouldShow =
      window.scrollY > 450 && footerTop > window.innerHeight - 80;

    this.setState({ show: shouldShow });
  };

  render() {
    return (
      <>
        <div className={`desktop-sticky-form ${this.state.show ? "show" : ""}`}>
          <div className="sticky-left">
            <div className="sticky-icon">
              <Sparkles size={18} />
            </div>
            <div>
              <h4>Site Visit</h4>
              <p>Book Priority Slot</p>
            </div>
          </div>

          <div className="sticky-input">
            <User size={14} />
            <input type="text" placeholder="Name" />
          </div>

          <div className="sticky-input">
            <Phone size={14} />
            <input type="tel" placeholder="Phone" />
          </div>

          <div className="sticky-input">
            <Mail size={14} />
            <input type="email" placeholder="Email" />
          </div>

          <select className="sticky-select">
            <option>3 BHK-S</option>
            <option>2.5 BHK</option>
            <option>3 BHK</option>
            <option>3.5 BHK</option>
          </select>

          <div className="sticky-select time">
            Morning <Clock size={14} />
          </div>

          <button className="sticky-submit" onClick={this.props.onOpenPopup}>
            Confirm <Send size={15} />
          </button>
        </div>

        <button
          className={`mobile-sticky-btn ${this.state.show ? "show" : ""}`}
          onClick={this.props.onOpenPopup}
        >
          Enquire Now
        </button>
      </>
    );
  }
}

export default StickyNote;