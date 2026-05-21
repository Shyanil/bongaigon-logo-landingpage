import React from "react";
import { createPortal } from "react-dom";
import {
  LayoutPanelLeft,
  Layers,
  Grid3X3,
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw,
} from "lucide-react";
import "../App.css";

import mainmap from "../assets/images/mainplan.jpg";
import map1 from "../assets/images/map1.jpg";
import map2 from "../assets/images/map2.jpg";
import map3 from "../assets/images/map3.jpg";
import map4 from "../assets/images/map4.jpg";
import unitmap1 from "../assets/images/unitmap1.jpg";
import unitmap2 from "../assets/images/unitmap2.jpg";
import unitmap3 from "../assets/images/unitmap3.jpg";
import unitmap4 from "../assets/images/unitmap4.jpg";

class FloorPlans extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: "main",
      modalImage: null,
      modalTitle: "",
      modalIndex: null,
      modalType: "",
      zoom: 1,
    };

    this.floorPlans = [
      { title: "1st Floor", image: map1 },
      { title: "2nd & 5th Floor", image: map2 },
      { title: "3rd & 6th Floor", image: map3 },
      { title: "4th Floor", image: map4 },
    ];

    this.unitPlans = [
      { title: "1st Floor", image: unitmap1 },
      { title: "2nd & 5th Floor", image: unitmap2 },
      { title: "3rd & 6th Floor", image: unitmap3 },
      { title: "4th Floor", image: unitmap4 },
    ];
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.modalImage && this.state.modalImage) {
      document.body.classList.add("floorplan-modal-open");
    }

    if (prevState.modalImage && !this.state.modalImage) {
      document.body.classList.remove("floorplan-modal-open");
    }
  }

  componentWillUnmount() {
    document.body.classList.remove("floorplan-modal-open");
  }

  openModal = (image, title, index = null, type = "") => {
    this.setState({
      modalImage: image,
      modalTitle: title,
      modalIndex: index,
      modalType: type,
      zoom: 1,
    });
  };

  closeModal = () => {
    this.setState({
      modalImage: null,
      modalTitle: "",
      modalIndex: null,
      modalType: "",
      zoom: 1,
    });
  };

  prevPlan = () => {
    const list = this.state.modalType === "floor" ? this.floorPlans : this.unitPlans;
    const newIndex = this.state.modalIndex === 0 ? list.length - 1 : this.state.modalIndex - 1;
    this.setState({
      modalImage: list[newIndex].image,
      modalTitle: list[newIndex].title,
      modalIndex: newIndex,
      zoom: 1,
    });
  };

  nextPlan = () => {
    const list = this.state.modalType === "floor" ? this.floorPlans : this.unitPlans;
    const newIndex = this.state.modalIndex === list.length - 1 ? 0 : this.state.modalIndex + 1;
    this.setState({
      modalImage: list[newIndex].image,
      modalTitle: list[newIndex].title,
      modalIndex: newIndex,
      zoom: 1,
    });
  };

  zoomIn = () => {
    this.setState((prev) => ({ zoom: Math.min(prev.zoom + 0.25, 3) }));
  };

  zoomOut = () => {
    this.setState((prev) => ({ zoom: Math.max(prev.zoom - 0.25, 0.7) }));
  };

  resetZoom = () => {
    this.setState({ zoom: 1 });
  };

  renderModal() {
    const { modalImage, modalTitle, modalType, zoom } = this.state;
    if (!modalImage) return null;

    return createPortal(
      <div className="plan-modal">
        <div className="plan-modal-header">
          <h3>{modalTitle}</h3>

          <div className="plan-modal-actions">
            <button type="button" onClick={this.zoomOut}><ZoomOut size={18} /></button>
            <button type="button" onClick={this.resetZoom}><RotateCcw size={18} /></button>
            <button type="button" onClick={this.zoomIn}><ZoomIn size={18} /></button>
            <button type="button" onClick={this.closeModal}>
              <X size={20} />
              <span>Back</span>
            </button>
          </div>
        </div>

        <div className="plan-modal-body">
          {(modalType === "floor" || modalType === "unit") && (
            <button className="plan-modal-arrow plan-modal-prev" onClick={this.prevPlan}>
              ‹
            </button>
          )}

          <div className="plan-modal-image-wrap">
            <img
              src={modalImage}
              alt={modalTitle}
              style={{ transform: `scale(${zoom})` }}
            />
          </div>

          {(modalType === "floor" || modalType === "unit") && (
            <button className="plan-modal-arrow plan-modal-next" onClick={this.nextPlan}>
              ›
            </button>
          )}
        </div>
      </div>,
      document.body
    );
  }

  render() {
    const { activeTab } = this.state;

    return (
      <>
        <section className="floorplan-section" id="plan">
          <div className="floorplan-header">
            <div className="floorplan-label">
              <span></span><p>Floor Plan</p><span></span>
            </div>

            <h2>Smart Layouts for <br /><strong>Modern Living</strong></h2>
          </div>

          <div className="floorplan-tabs">
            <button type="button" className={activeTab === "main" ? "active" : ""} onClick={() => this.setState({ activeTab: "main" })}>
              <LayoutPanelLeft size={20} /> Main Plan
            </button>

            <button type="button" className={activeTab === "floor" ? "active" : ""} onClick={() => this.setState({ activeTab: "floor" })}>
              <Layers size={20} /> Floor Plan
            </button>

            <button type="button" className={activeTab === "unit" ? "active" : ""} onClick={() => this.setState({ activeTab: "unit" })}>
              <Grid3X3 size={20} /> Unit Plan
            </button>
          </div>

          <div className="floorplan-content">
            {activeTab === "main" && (
              <div className="plan-panel main-panel">
                <div className="plan-panel-title"><span></span><h3>Main Plan</h3><span></span></div>

                <div className="main-plan-image-box clickable-plan" onClick={() => this.openModal(mainmap, "Main Plan")}>
                  <img src={mainmap} alt="Main Plan" />
                  <div className="plan-view-badge"><ZoomIn size={16} />Click To Zoom</div>
                </div>
              </div>
            )}

            {activeTab === "floor" && (
              <div className="plan-panel">
                <div className="plan-panel-title"><span></span><h3>Floor Plan</h3><span></span></div>

                <div className="plan-grid">
                  {this.floorPlans.map((plan, index) => (
                    <div className="plan-card clickable-plan" key={index} onClick={() => this.openModal(plan.image, plan.title, index, "floor")}>
                      <img src={plan.image} alt={plan.title} />
                      <div className="plan-view-badge small"><ZoomIn size={15} />View</div>
                      <p>{plan.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "unit" && (
              <div className="plan-panel">
                <div className="plan-panel-title"><span></span><h3>Unit Plan</h3><span></span></div>

                <div className="plan-grid">
                  {this.unitPlans.map((plan, index) => (
                    <div className="plan-card clickable-plan" key={index} onClick={() => this.openModal(plan.image, plan.title, index, "unit")}>
                      <img src={plan.image} alt={plan.title} />
                      <div className="plan-view-badge small"><ZoomIn size={15} />View</div>
                      <p>{plan.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {this.renderModal()}
      </>
    );
  }
}

export default FloorPlans;