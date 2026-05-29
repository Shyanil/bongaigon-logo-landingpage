import React from "react";
import { Search, X, ZoomIn, ZoomOut, ArrowLeft, ArrowRight } from "lucide-react";
import "../App.css";

import gallery1 from "../assets/images/lobbylounge.jpeg";
import gallery2 from "../assets/images/splashpool.jpeg";
import gallery3 from "../assets/images/semiarenaview.jpeg";
import gallery4 from "../assets/images/gymnasium.jpeg";
import gallery5 from "../assets/images/kids-play-area.png";
import gallery6 from "../assets/images/picture1.jpeg";
import gallery7 from "../assets/images/indoor-games.png";
import gallery8 from "../assets/images/mainentrance.jpeg";

const galleryImages = [
  { img: gallery1, title: "Lobby Lounge View" },
  { img: gallery2, title: "Splash Pool View" },
  { img: gallery3, title: "Semi Arena View" },
  { img: gallery4, title: "Gymnasium View" },
  { img: gallery5, title: "Kids Play Area View" },
  { img: gallery6, title: "Premium Elevation View" },
  { img: gallery7, title: "Indoor Games View" },
  { img: gallery8, title: "Main Entrance View" },
];

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: null,
      zoom: 1,
    };
  }

  openModal = (index) => {
    this.setState({ activeIndex: index, zoom: 1 });
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
    this.setState((prev) => ({
      zoom: Math.min(prev.zoom + 0.2, 2),
    }));
  };

  zoomOut = () => {
    this.setState((prev) => ({
      zoom: Math.max(prev.zoom - 0.2, 0.8),
    }));
  };

  handleBookVisit = () => {
    if (this.props.onOpenPopup) {
      this.props.onOpenPopup();
    }
  };

  componentWillUnmount() {
    document.body.classList.remove("gallery-modal-open");
  }

  render() {
    const { activeIndex, zoom } = this.state;
    const activeImage =
      activeIndex !== null ? galleryImages[activeIndex] : null;

    return (
      <section className="gallery-section" id="gallery">
        <div className="gallery-heading">
          <h2>Gallery</h2>
          <p>Crafted for comfort. Built for life.</p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((item, index) => (
            <button
              type="button"
              className="gallery-card"
              key={index}
              onClick={() => this.openModal(index)}
            >
              <img src={item.img} alt={item.title} />

              <div className="gallery-overlay">
                <h3>{item.title}</h3>

                <span className="gallery-zoom">
                  <Search size={18} />
                </span>
              </div>
            </button>
          ))}
        </div>

        <button
          type="button"
          className="gallery-visit-btn"
          onClick={this.handleBookVisit}
        >
          Book A Visit <b>→</b>
        </button>

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