import React from "react";
import { LayoutPanelLeft, Layers, Grid3X3, X, ZoomIn, ZoomOut } from "lucide-react";
import "../App.css";

import mainmap from "../assets/images/mainmap.jpeg";

import map1 from "../assets/images/map1.jpeg";
import map2 from "../assets/images/map2.jpeg";
import map3 from "../assets/images/map3.jpeg";
import map4 from "../assets/images/map4.jpeg";

import unitmap1 from "../assets/images/unitmap1.jpeg";
import unitmap2 from "../assets/images/unitmap2.jpeg";
import unitmap3 from "../assets/images/unitmap3.jpeg";
import unitmap4 from "../assets/images/unitmap4.jpeg";

class FloorPlans extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: "main",
      modalImage: null,
      modalTitle: "",
      zoom: 1,
    };

    this.floorPlans = [
      { title: "Floor Plan 1", image: map1 },
      { title: "Floor Plan 2", image: map2 },
      { title: "Floor Plan 3", image: map3 },
      { title: "Floor Plan 4", image: map4 },
    ];

    this.unitPlans = [
      { title: "Unit Plan 1", image: unitmap1 },
      { title: "Unit Plan 2", image: unitmap2 },
      { title: "Unit Plan 3", image: unitmap3 },
      { title: "Unit Plan 4", image: unitmap4 },
    ];
  }

  openModal = (image, title) => {
    this.setState({
      modalImage: image,
      modalTitle: title,
      zoom: 1,
    });
  };

  closeModal = () => {
    this.setState({
      modalImage: null,
      modalTitle: "",
      zoom: 1,
    });
  };

  zoomIn = () => {
    this.setState((prev) => ({
      zoom: Math.min(prev.zoom + 0.2, 3),
    }));
  };

  zoomOut = () => {
    this.setState((prev) => ({
      zoom: Math.max(prev.zoom - 0.2, 0.7),
    }));
  };

  render() {
    const { activeTab, modalImage, modalTitle, zoom } = this.state;

    return (
      <section className="floorplan-section" id="plan">
        <div className="floorplan-header">
          <div className="floorplan-label">
            <span></span>
            <p>Floor Plan</p>
            <span></span>
          </div>

          <h2>
            Smart Layouts for <br />
            <strong>Modern Living</strong>
          </h2>
        </div>

        <div className="floorplan-tabs">
          <button
            type="button"
            className={activeTab === "main" ? "active" : ""}
            onClick={() => this.setState({ activeTab: "main" })}
          >
            <LayoutPanelLeft size={20} />
            Main Plan
          </button>

          <button
            type="button"
            className={activeTab === "floor" ? "active" : ""}
            onClick={() => this.setState({ activeTab: "floor" })}
          >
            <Layers size={20} />
            Floor Plan
          </button>

          <button
            type="button"
            className={activeTab === "unit" ? "active" : ""}
            onClick={() => this.setState({ activeTab: "unit" })}
          >
            <Grid3X3 size={20} />
            Unit Plan
          </button>
        </div>

        <div className="floorplan-content">
          {activeTab === "main" && (
            <div className="plan-panel main-panel">
              <div className="plan-panel-title">
                <span></span>
                <h3>Main Plan</h3>
                <span></span>
              </div>

              <div
                className="main-plan-image-box clickable-plan"
                onClick={() => this.openModal(mainmap, "Main Plan")}
              >
                <img src={mainmap} alt="Main Plan" />
              </div>
            </div>
          )}

          {activeTab === "floor" && (
            <div className="plan-panel">
              <div className="plan-panel-title">
                <span></span>
                <h3>Floor Plan</h3>
                <span></span>
              </div>

              <div className="plan-grid">
                {this.floorPlans.map((plan, index) => (
                  <div
                    className="plan-card clickable-plan"
                    key={index}
                    onClick={() => this.openModal(plan.image, plan.title)}
                  >
                    <img src={plan.image} alt={plan.title} />
                    <p>{plan.title}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "unit" && (
            <div className="plan-panel">
              <div className="plan-panel-title">
                <span></span>
                <h3>Unit Plan</h3>
                <span></span>
              </div>

              <div className="plan-grid">
                {this.unitPlans.map((plan, index) => (
                  <div
                    className="plan-card clickable-plan"
                    key={index}
                    onClick={() => this.openModal(plan.image, plan.title)}
                  >
                    <img src={plan.image} alt={plan.title} />
                    <p>{plan.title}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        {modalImage && (
          <div className="plan-modal">
            <div className="plan-modal-header">
              <h3>{modalTitle}</h3>

              <div className="plan-modal-actions">
                <button type="button" onClick={this.zoomOut}>
                  <ZoomOut size={18} />
                </button>

                <button type="button" onClick={this.zoomIn}>
                  <ZoomIn size={18} />
                </button>

                <button type="button" onClick={this.closeModal}>
                  <X size={20} />
                </button>
              </div>
            </div>

            <div className="plan-modal-body">
              <img
                src={modalImage}
                alt={modalTitle}
                style={{ transform: `scale(${zoom})` }}
              />
            </div>
          </div>
        )}
      </section>
    );
  }
}

export default FloorPlans;