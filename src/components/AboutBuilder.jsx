import React from "react";
import {
  Building2,
  Ruler,
  HardHat,
  Users,
  Award,
  ShieldCheck,
  Gem,
  Handshake,
  Leaf,
  UserCheck,
} from "lucide-react";
import "../App.css";

import subhamLogo from "../assets/images/aboutbuilderlogo.png";

const stats = [
  { icon: Building2, number: "16+", label: "Completed Projects" },
  { icon: Ruler, number: "28 Lac", label: "Sq. Ft. Constructed" },
  { icon: HardHat, number: "15 Lac", label: "Sq. Ft. Ongoing" },
  { icon: Users, number: "6000+", label: "Happy Residents" },
];

const ongoingProjects = [
  "Subham Garden",
  "Subham Solitaire",
  "Subham Ashray",
  "Subham Park",
  "Subham Kishori Heights",
];

const completedProjects = [
  "Subham Heights",
  "Subham Enclave",
  "Subham Park View",
  "Subham Elite",
  "Subham Classic",
  "Subham Regency",
  "Subham Residency",
  "Subham Sapphire",
  "Subham Velocity",
  "Subham Redstone",
  "Bijay Crescent",
  "Subham Square",
  "Subham Greens",
];

const commercialProjects = [
  "Subham Velocity",
  "Subham Redstone",
  "Bijay Crescent",
  "Subham Square",
  "Subham Buildwell",
];

const strengths = [
  { icon: ShieldCheck, title: "RERA Registered" },
  { icon: Gem, title: "Quality Construction" },
  { icon: Handshake, title: "Timely Delivery" },
  { icon: Leaf, title: "Sustainable Living" },
  { icon: UserCheck, title: "Customer First" },
];

class AboutBuilder extends React.Component {
  componentDidMount() {
    const items = document.querySelectorAll(".builder-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.18 }
    );

    items.forEach((item) => observer.observe(item));
  }

  renderProjectPills(projects) {
    return projects.map((project, index) => (
      <span className="builder-project-pill" key={index}>
        {project}
      </span>
    ));
  }

  render() {
    return (
      <section className="about-builder-section" id="about-builder">
        <div className="builder-heading builder-reveal">
          <p>About The Builder</p>
          <h2>
            About <strong>Subham Group</strong>
          </h2>
        </div>

        <div className="builder-intro-card builder-reveal">
          <div className="builder-logo-box">
            <img src={subhamLogo} alt="Subham Group Logo" />
          </div>

          <div className="builder-intro-text">
            <p>
              Since 2007, Subham Group has been a premier real estate builder
              and developer based out of Guwahati, known for time-bound
              projects, quality spaces and timeless customer relationships.
            </p>
          </div>
        </div>

        <div className="builder-stats-grid builder-reveal">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div className="builder-stat-card" key={index}>
                <span>
                  <Icon size={26} />
                </span>
                <h3>{item.number}</h3>
                <p>{item.label}</p>
              </div>
            );
          })}
        </div>

        <div className="builder-projects-card builder-reveal">
          <div className="builder-project-column">
            <Award size={24} />
            <h3>Ongoing Projects</h3>
            <div className="builder-project-pills">
              {this.renderProjectPills(ongoingProjects)}
            </div>
          </div>

          <div className="builder-project-column">
            <Award size={24} />
            <h3>Completed Projects</h3>
            <div className="builder-project-pills">
              {this.renderProjectPills(completedProjects)}
            </div>
          </div>

          <div className="builder-project-column">
            <Building2 size={24} />
            <h3>Commercial Projects</h3>
            <div className="builder-project-pills">
              {this.renderProjectPills(commercialProjects)}
            </div>
          </div>
        </div>

        <div className="builder-strength-bar builder-reveal">
          {strengths.map((item, index) => {
            const Icon = item.icon;
            return (
              <div className="builder-strength-item" key={index}>
                <span>
                  <Icon size={24} />
                </span>
                <p>{item.title}</p>
              </div>
            );
          })}

          <div className="builder-quote">
            Building not just structures, but <strong>trust</strong> that lasts
            forever.
          </div>
        </div>
      </section>
    );
  }
}

export default AboutBuilder;