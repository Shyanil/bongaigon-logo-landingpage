import React from "react";
import { Building2, Ruler, HardHat, Users } from "lucide-react";
import "../App.css";

import subhamLogo from "../assets/images/aboutbuilderlogo.webp";

const stats = [
  { icon: Building2, number: "16+", label: "Completed Projects" },
  { icon: Ruler, number: "28 Lac", label: "Sq. Ft. Constructed" },
  { icon: HardHat, number: "15 Lac", label: "Sq. Ft. Ongoing" },
  { icon: Users, number: "6000+", label: "Happy Residents" },
];

const ongoingProjects = [
  { name: "Subham Garden", address: "Jorhat" },
  { name: "Subham Solitaire", address: "Agartala" },
  { name: "Subham Ashray", address: "Aerocity" },
  { name: "The Peak", address: "GS Road" },
  {
    name: "Subham Park",
    address: "Jorhat",
  },
  { name: "Subham Kishori Heights", address: "Dibrugarh" },
];

const completedProjects = [
  { name: "Subham Heights", address: "Kahilipara" },
  { name: "Subham Enclave", address: "Hatigaon" },
  { name: "Subham Park View", address: "Fatasil" },
  { name: "Subham Elite", address: "Gandhibasti" },
  { name: "Subham Classic", address: "Ambikagiri Nagar" },
  { name: "Subham Manjushree", address: "Datalpara" },
  { name: "Subham Regency", address: "Hengrabari" },
  { name: "Subham Residency", address: "Kharguli" },
  { name: "Subham Sapphire", address: "Nalapara" },
  { name: "Subham Greens", address: "Lokhra" },
  { name: "Subham Buildwell", address: "Zoo Road" },
  { name: "Subham Garden", address: "Kalapahar" },
  { name: "Subham Velocity", address: "G.S. Road" },
  { name: "Subham Redstone", address: "Downtown" },
  { name: "Bijay Crescent", address: "Pibco" },
  { name: "Subham Square", address: "Lokhra" },
];

class AboutBuilder extends React.Component {
  state = {
    selectedProject: ongoingProjects[0],
    selectedType: "ongoing",
  };

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

  render() {
    const { selectedProject, selectedType } = this.state;

    return (
      <section className="about-builder-section" id="about-builder">
        <div className="builder-top-area">
          <div className="builder-heading builder-reveal">
            <p>About The Builder</p>
            <h2>
              Time-Bound Projects <strong>and Timeless Relationships</strong>
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

          <div className="builder-stats-grid builder-mobile-stats-grid builder-reveal">
            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  className="builder-stat-card builder-mobile-stat-card"
                  key={index}
                >
                  <span>
                    <Icon size={26} />
                  </span>
                  <h3>{item.number}</h3>
                  <p>{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="builder-projects-card builder-reveal">
          <div className="builder-project-column">
            <h3>Ongoing Projects</h3>

            <div className="builder-project-pills">
              {ongoingProjects.map((project, index) => (
                <button
                  type="button"
                  className={
                    selectedType === "ongoing" &&
                    selectedProject.name === project.name
                      ? "builder-project-pill active"
                      : "builder-project-pill"
                  }
                  key={index}
                  onClick={() =>
                    this.setState({
                      selectedProject: project,
                      selectedType: "ongoing",
                    })
                  }
                >
                  {project.name}
                </button>
              ))}
            </div>
          </div>

          <div className="builder-project-column completed">
            <h3>Completed Projects</h3>

            <div className="builder-project-pills">
              {completedProjects.map((project, index) => (
                <button
                  type="button"
                  className={
                    selectedType === "completed" &&
                    selectedProject.name === project.name
                      ? "builder-project-pill completed-pill active"
                      : "builder-project-pill completed-pill"
                  }
                  key={index}
                  onClick={() =>
                    this.setState({
                      selectedProject: project,
                      selectedType: "completed",
                    })
                  }
                >
                  {project.name}
                </button>
              ))}
            </div>
          </div>

          <div className="builder-project-address">
            <h4>{selectedProject.name}</h4>
            <p>{selectedProject.address}</p>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutBuilder;