import React from "react";
import {
  LayoutPanelLeft,
  Layers,
  Grid3X3,
  X,
  ZoomIn,
  ZoomOut,
  ArrowRight,
  Building2,
  Clock3,
} from "lucide-react";
import "../App.css";

import mainPlan from "../assets/images/mainplan.webp";
import unit1 from "../assets/images/unitmap1.webp";
import unit2 from "../assets/images/unitmap2.webp";
import unit3 from "../assets/images/unitmap3.webp";
import unit4 from "../assets/images/unitmap4.webp";
import floor1 from "../assets/images/map1.webp";
import floor2 from "../assets/images/map2.webp";
import floor3 from "../assets/images/map3.webp";
import floor4 from "../assets/images/map4.webp";

const plans = {
  master: [{ title: "Master Plan", img: mainPlan, type: "Master Plan" }],
  unit: [
    { title: "1st Floor", img: unit1, type: "Unit Plan" },
    { title: "2nd & 5th Floor", img: unit2, type: "Unit Plan" },
    { title: "3rd & 6th Floor", img: unit3, type: "Unit Plan" },
    { title: "4th Floor", img: unit4, type: "Unit Plan" },
  ],
  floor: [
    { title: "1st Floor", img: floor1, type: "Floor Plan" },
    { title: "2nd & 5th Floor", img: floor2, type: "Floor Plan" },
    { title: "3rd & 6th Floor", img: floor3, type: "Floor Plan" },
    { title: "4th Floor", img: floor4, type: "Floor Plan" },
  ],
};

class FloorPlans extends React.Component {
  state = {
    activeTab: "master",
    activeIndex: 0,
    modalOpen: false,
    modalIndex: 0,
    zoom: 1,
  };

  setTab = (tab) => {
    this.setState({ activeTab: tab, activeIndex: 0 });
  };

  setPlan = (index) => {
    this.setState({ activeIndex: index });
  };

  openModal = (index) => {
    this.setState({ modalOpen: true, modalIndex: index, zoom: 1 });
    document.body.classList.add("floor-modal-open");
  };

  closeModal = () => {
    this.setState({ modalOpen: false, zoom: 1 });
    document.body.classList.remove("floor-modal-open");
  };

  zoomIn = () => {
    this.setState((p) => ({ zoom: Math.min(p.zoom + 0.2, 2.2) }));
  };

  zoomOut = () => {
    this.setState((p) => ({ zoom: Math.max(p.zoom - 0.2, 0.8) }));
  };

  componentWillUnmount() {
    document.body.classList.remove("floor-modal-open");
  }

  renderTabs = (extraClass = "") => {
    const { activeTab } = this.state;

    return (
      <div className={`floorplan-tabs-luxury ${extraClass}`}>
        <button
          className={activeTab === "master" ? "active" : ""}
          onClick={() => this.setTab("master")}
        >
          <LayoutPanelLeft size={18} /> Master Plan
        </button>

        <button
          className={activeTab === "unit" ? "active" : ""}
          onClick={() => this.setTab("unit")}
        >
          <Grid3X3 size={18} /> Unit Plan
        </button>

        <button
          className={activeTab === "floor" ? "active" : ""}
          onClick={() => this.setTab("floor")}
        >
          <Layers size={18} /> Floor Plan
        </button>
      </div>
    );
  };

  render() {
    const { activeTab, activeIndex, modalOpen, modalIndex, zoom } = this.state;
    const currentPlans = plans[activeTab];
    const selectedPlan = currentPlans[activeIndex];
    const modalPlan = currentPlans[modalIndex];

    return (
      <section className="floorplan-section" id="floor-plans">
        {this.renderTabs("floorplan-tabs-desktop")}

        <div
          className={
            activeTab === "master"
              ? "floorplan-luxury-grid master-only"
              : "floorplan-luxury-grid"
          }
        >
          <div className="floorplan-left-panel">
            <span className="floorplan-label">Floor Plans</span>

            <h2>
              Crafted For <br />
              <strong>Elegant Living</strong>
            </h2>

            <p>
              Thoughtfully designed layouts that blend spacious living with
              timeless architecture and modern comfort.
            </p>

            <div className="floorplan-detail-list">
              <div>
                <Building2 size={22} />
                <span>Total Area</span>
                <strong>28800 SQ.FT Approx</strong>
              </div>

              <div>
                <LayoutPanelLeft size={22} />
                <span>Configuration</span>
                <strong>3 BHK & 4 BHK</strong>
              </div>

              <div>
                <Clock3 size={22} />
                <span>Status</span>
                <strong>Available</strong>
              </div>
            </div>

            {this.renderTabs("floorplan-tabs-mobile-only")}
          </div>

          <div
            className="floorplan-hero-frame"
            onClick={() => this.openModal(activeIndex)}
          >
            <img src={selectedPlan.img} alt={selectedPlan.title} />

            <div className="floorplan-drag-note">
              <span></span>
              Click to view
              <span></span>
            </div>
          </div>

          {activeTab !== "master" && (
            <div className="floorplan-right-panel">
              {currentPlans.map((plan, index) => (
                <button
                  key={index}
                  className={activeIndex === index ? "active" : ""}
                  onClick={() => this.setPlan(index)}
                >
                  <i>{String(index + 1).padStart(2, "0")}</i>

                  <img src={plan.img} alt={plan.title} />

                  <div>
                    <strong>{plan.title}</strong>
                    <span>{plan.type}</span>
                  </div>

                  <ArrowRight size={17} />
                </button>
              ))}
            </div>
          )}
        </div>

        {modalOpen && (
          <div className="floorplan-modal">
            <button className="floorplan-modal-close" onClick={this.closeModal}>
              <X size={28} />
            </button>

            <div className="floorplan-modal-box">
              <img
                src={modalPlan.img}
                alt={modalPlan.title}
                style={{ transform: `scale(${zoom})` }}
              />

              <div className="floorplan-modal-tools">
                <button onClick={this.zoomOut}>
                  <ZoomOut size={18} />
                </button>

                <span>{Math.round(zoom * 100)}%</span>

                <button onClick={this.zoomIn}>
                  <ZoomIn size={18} />
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    );
  }
}

export default FloorPlans;