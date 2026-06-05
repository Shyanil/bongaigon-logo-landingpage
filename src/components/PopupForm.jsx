import React from "react";
import { X, User, Phone, Mail, Send, Clock } from "lucide-react";
import { supabase, getUTMData } from "../supabase";
import "../App.css";

class PopupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      success: false,
      formData: {
        name: "",
        phone: "",
        email: "",
        interestedIn: "",
        timing: "",
      },
    };
  }

  handleChange = (e) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async () => {
    const { formData } = this.state;

    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.interestedIn ||
      !formData.timing
    ) {
      alert("Please fill all details.");
      return;
    }

    this.setState({ loading: true });

    const popupTitle =
      typeof this.props.title === "string"
        ? this.props.title
        : "Book A Site Visit";

    const { error } = await supabase.from("subham-bongaigon").insert([
      {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        interested_in: formData.interestedIn,
        requirement:
          popupTitle === "Download Brochure"
            ? "Download Brochure"
            : "Site Visit",
        timing: formData.timing || null,

        ...getUTMData(),
      },
    ]);

    if (error) {
      console.log("SUPABASE ERROR:", error);
      alert(error.message);
      this.setState({ loading: false });
      return;
    }

    await fetch(
      "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjcwNTZlMDYzZjA0MzI1MjZiNTUzMTUxMzQi_pc",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          interested_in: formData.interestedIn,
          requirement:
            popupTitle === "Download Brochure"
              ? "Download Brochure"
              : "Site Visit",
          timing: formData.timing || null,

          ...getUTMData(),
        }),
      }
    );

    this.setState({
      loading: false,
      success: true,
      formData: {
        name: "",
        phone: "",
        email: "",
        interestedIn: "",
        timing: "",
      },
    });

    setTimeout(() => {
      window.location.href = "/thank-you";
    }, 2200);
  };

  render() {
    if (!this.props.isOpen) return null;

    const popupTitle =
      typeof this.props.title === "string"
        ? this.props.title
        : "Book A Site Visit";

    return (
      <div className="popup-overlay">
        <div className="popup-form">
          <button className="popup-close" onClick={this.props.onClose}>
            <X size={20} />
          </button>

          {this.state.success ? (
            <div className="success-animation-box">
              <div className="success-orbit">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="form-success-check">✓</div>

              <h4>Submitted Successfully</h4>
              <p>Please wait, redirecting...</p>
            </div>
          ) : (
            <>
              <h2>{popupTitle}</h2>

              <p>
                {popupTitle === "Download Brochure"
                  ? "Fill your details to download the brochure."
                  : "Fill your details and our team will connect with you shortly."}
              </p>

              <div className="popup-input">
                <User size={16} />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={this.state.formData.name}
                  onChange={this.handleChange}
                />
              </div>

              <div className="popup-input">
                <Phone size={16} />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={this.state.formData.phone}
                  onChange={this.handleChange}
                />
              </div>

              <div className="popup-input">
                <Mail size={16} />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={this.state.formData.email}
                  onChange={this.handleChange}
                />
              </div>

              <div className="popup-input">
                <select
                  className="select-box"
                  name="interestedIn"
                  value={this.state.formData.interestedIn}
                  onChange={this.handleChange}
                >
                  <option value="">Interested In</option>
                  <option value="3 BHK">3 BHK</option>
                  <option value="4 BHK">4 BHK</option>
                </select>
              </div>

              <div className="popup-input">
                <Clock size={16} />
                <select
                  className="select-box"
                  name="timing"
                  value={this.state.formData.timing}
                  onChange={this.handleChange}
                >
                  <option value="">Preferred Time</option>
                  <option value="Morning">Morning</option>
                  <option value="Afternoon">Afternoon</option>
                  <option value="Evening">Evening</option>
                </select>
              </div>

              <button
                className="popup-submit"
                onClick={this.handleSubmit}
                disabled={this.state.loading}
              >
                {this.state.loading ? "Submitting..." : "Submit Enquiry"}{" "}
                <Send size={16} />
              </button>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default PopupForm;