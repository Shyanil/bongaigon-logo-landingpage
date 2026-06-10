import React from "react";
import {
  User,
  Phone,
  Mail,
  Building,
  Clock,
  ArrowRight,
  BadgeCheck,
  Home,
  CalendarCheck,
} from "lucide-react";
import { supabase, getUTMData } from "../supabase";
import "../App.css";

class Contact extends React.Component {
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

  handleSubmit = async (e) => {
    e.preventDefault();

    const { formData } = this.state;

    this.setState({ loading: true });

    const { error } = await supabase.from("subhamgroup_park-bongaigaon").insert([
      {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        interested_in: formData.interestedIn,
        requirement: "Download Brochure",
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
          requirement: "Download Brochure",
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
      window.location.href = "/park-bongaigaon/thank-you";
    }, 2200);
  };

  render() {
    return (
      <section className="contact-premium-section" id="contact">
        <div className="contact-left">
          <p className="contact-section-label">Get In Touch</p>

          <h2>
            Take The First Step <br />
            <strong>Towards Your Dream Home</strong>
          </h2>

          <p>
            Share your requirements with us and our team will get back to you with
            the best solutions for your dream space.
          </p>

          <div className="contact-highlights">
            <div className="contact-highlight-item">
              <BadgeCheck />
              <div>
                <h4>RERA Registered Project</h4>
                <span>100% Transparent & Trusted</span>
              </div>
            </div>

            <div className="contact-highlight-item">
              <Home />
              <div>
                <h4>Premium 3 & 4 BHK Homes</h4>
                <span>Thoughtfully Designed Residences</span>
              </div>
            </div>

            <div className="contact-highlight-item">
              <CalendarCheck />
              <div>
                <h4>Schedule a Complimentary Site Visit</h4>
                <span>Experience the Lifestyle Firsthand</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-card">
          <h3>
            Download <strong>Brochure</strong>
          </h3>

          {this.state.success ? (
            <div className="form-success-box">
              <div className="form-success-check">✓</div>
              <h4>Submitted Successfully</h4>
              <p>Please wait, redirecting...</p>
            </div>
          ) : (
            <form onSubmit={this.handleSubmit}>
              <div className="form-row">
                <div className="input-box">
                  <User />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={this.state.formData.name}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="input-box">
                  <Phone />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    value={this.state.formData.phone}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="input-box">
                <Mail />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email Address"
                  required
                  value={this.state.formData.email}
                  onChange={this.handleChange}
                />
              </div>

              <div className="input-box">
                <Building />
                <select
                  required
                  name="interestedIn"
                  value={this.state.formData.interestedIn}
                  onChange={this.handleChange}
                >
                  <option value="" disabled>
                    I am Interested In
                  </option>
                  <option value="3 BHK">3 BHK</option>
                  <option value="4 BHK">4 BHK</option>
                </select>
              </div>

              <div className="input-box">
                <Clock />
                <select
                  required
                  name="timing"
                  value={this.state.formData.timing}
                  onChange={this.handleChange}
                >
                  <option value="" disabled>
                    Preferred Time
                  </option>
                  <option value="Morning">Morning</option>
                  <option value="Afternoon">Afternoon</option>
                  <option value="Evening">Evening</option>
                </select>
              </div>

              <button
                type="submit"
                className="contact-submit-btn"
                disabled={this.state.loading}
              >
                {this.state.loading ? "Submitting..." : "Enquire Now"}
                <ArrowRight size={18} />
              </button>
            </form>
          )}
        </div>
      </section>
    );
  }
}

export default Contact;