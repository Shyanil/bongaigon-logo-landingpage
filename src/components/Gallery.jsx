import React from "react";
import { X, ZoomIn, ZoomOut, ArrowLeft, ArrowRight } from "lucide-react";
import "../App.css";

import gallery1 from "../assets/images/splashpool.jpeg";
import gallery2 from "../assets/images/lobbylounge.jpeg";
import gallery3 from "../assets/images/semiarenaview.jpeg";
import gallery4 from "../assets/images/gymnasium.jpeg";
import gallery5 from "../assets/images/kidsplayarea.jpeg";
import gallery6 from "../assets/images/picture1.jpeg";
import gallery7 from "../assets/images/indoorgamesroom.jpeg";
import gallery8 from "../assets/images/mainentrance.jpeg";
import gallery9 from "../assets/images/g9.jpeg";
import gallery10 from "../assets/images/g10.jpeg";

const galleryImages = [
  { img: gallery1, title: "Splash Pool" },
  { img: gallery2, title: "Community Hall"},
  { img: gallery3, title: "Aerial View" },
  { img: gallery10, title: "Grand Entrance" },
  { img: gallery5, title: "Kids Play Area" },
  { img: gallery6, title: "Premium Elevation"},
  { img: gallery7, title: "Indoor Games" },
  { img: gallery8, title: "Main Entrance View" },
  { img: gallery9, title: "Signature Elevation"},
  { img: gallery4, title: "Gymnasium" },
];

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: null,
      zoom: 1,
      cursorX: 0,
      cursorY: 0,
      showCursor: false,
    };
  }

  openModal = (index) => {
    this.setState({ activeIndex: index, zoom: 1, showCursor: false });
    document.body.classList.add("gallery-modal-open");
  };

  closeModal = () => {
    this.setState({ activeIndex: null, zoom: 1 });
    document.body.classList.remove("gallery-modal-open");
  };

  nextImage = () => {
    this.setState((prev) => ({
      activeIndex: (prev.activeIndex + 1) % galleryImages.length,
      zoom: 1,
    }));
  };

  prevImage = () => {
    this.setState((prev) => ({
      activeIndex:
        (prev.activeIndex - 1 + galleryImages.length) % galleryImages.length,
      zoom: 1,
    }));
  };

  zoomIn = () => {
    this.setState((prev) => ({ zoom: Math.min(prev.zoom + 0.2, 2) }));
  };

  zoomOut = () => {
    this.setState((prev) => ({ zoom: Math.max(prev.zoom - 0.2, 0.8) }));
  };

  handleCursorMove = (e) => {
    this.setState({
      cursorX: e.clientX,
      cursorY: e.clientY,
      showCursor: true,
    });
  };

  hideCursor = () => {
    this.setState({ showCursor: false });
  };

  handleBookVisit = () => {
    if (this.props.onOpenPopup) {
      this.props.onOpenPopup("Download Brochure");
    }
  };

  componentWillUnmount() {
    document.body.classList.remove("gallery-modal-open");
  }

  render() {
    const { activeIndex, zoom, cursorX, cursorY, showCursor } = this.state;
    const activeImage =
      activeIndex !== null ? galleryImages[activeIndex] : null;

    return (
      <section className="gallery-section" id="gallery">
        <div className="gallery-dot-pattern"></div>

        <div className="gallery-heading">
          <h2>Gallery</h2>
          <p>
            <span>A Symphony</span>{" "}
            <strong>Of Spaces</strong>
          </p>
          <small>
            Thoughtfully designed spaces that blend luxury, comfort and nature,
            crafted to elevate every moment of your life.
          </small>
        </div>

        <div
          className="gallery-grid"
          onMouseMove={this.handleCursorMove}
          onMouseLeave={this.hideCursor}
        >
          <span
            className={`gallery-view-cursor ${showCursor ? "show" : ""}`}
            style={{
              left: `${cursorX}px`,
              top: `${cursorY}px`,
            }}
          >
            View
          </span>

          {galleryImages.map((item, index) => (
            <button
              type="button"
              className={`gallery-card gallery-card-${index + 1}`}
              key={index}
              onClick={() => this.openModal(index)}
            >
              <img
                src={item.img}
                alt={item.title}
                className={item.fit === "contain" ? "gallery-img-contain" : ""}
              />

              <div className="gallery-overlay">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="gallery-btn-wrap">
          <button
            type="button"
            className="gallery-visit-btn"
            onClick={this.handleBookVisit}
          >
            <span>⇩</span>
            Download Brochure
            <b>→</b>
          </button>
        </div>

        {activeImage && (
          <div className="gallery-lightbox">
            <button
              type="button"
              className="gallery-close"
              onClick={this.closeModal}
            >
              <X size={30} />
            </button>

            <button
              type="button"
              className="gallery-nav gallery-prev"
              onClick={this.prevImage}
            >
              <ArrowLeft size={28} />
            </button>

            <div className="gallery-lightbox-image-wrap">
              <img
                src={activeImage.img}
                alt={activeImage.title}
                className={
                  activeImage.fit === "contain"
                    ? "gallery-modal-img-contain"
                    : "gallery-modal-img-cover"
                }
                style={{ transform: `scale(${zoom})` }}
              />

              <div className="gallery-zoom-controls">
                <button type="button" onClick={this.zoomOut}>
                  <ZoomOut size={20} />
                </button>

                <span>{Math.round(zoom * 100)}%</span>

                <button type="button" onClick={this.zoomIn}>
                  <ZoomIn size={20} />
                </button>
              </div>
            </div>

            <button
              type="button"
              className="gallery-nav gallery-next"
              onClick={this.nextImage}
            >
              <ArrowRight size={28} />
            </button>
          </div>
        )}
      </section>
    );
  }
}

export default Gallery;