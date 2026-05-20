import React from "react";
import "../App.css";

import eveningView from "../assets/images/gymnasium.jpeg";
import mainEntrance from "../assets/images/mainentrance.jpeg";
import kidsPlayArea from "../assets/images/kidsplayarea.jpeg";
import lobbyLounge from "../assets/images/lobbylounge.jpeg";
import indoorGames from "../assets/images/indoor-games.png";
import gymnasium from "../assets/images/semiarenaview.jpeg";
import splashPool from "../assets/images/splashpool.jpeg";

const Gallery = () => {
  const galleryImages = [
    { image: eveningView, title: "Gymnasium", className: "gallery-tall" },
    { image: lobbyLounge, title: "Lobby Lounge", className: "gallery-wide" },
    { image: mainEntrance, title: "Main Entrance", className: "gallery-small" },
    { image: kidsPlayArea, title: "Kids Play Area", className: "gallery-small" },
    { image: indoorGames, title: "Indoor Games Room", className: "gallery-bottom" },
    { image: gymnasium, title: "Semi-Arena View", className: "gallery-bottom" },
    { image: splashPool, title: "Splash Pool", className: "gallery-bottom" },
  ];

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-header">
        <div className="gallery-label">
          <span></span>
          <p>Gallery</p>
          <span></span>
        </div>

        <h2>
          Spaces That Inspire <br />
          <strong>Details That Matter</strong>
        </h2>

        <p className="gallery-subtitle">
          Explore the design, comfort, and craftsmanship that define Subham Park
          Bongaigaon. Every image tells a story of quality living.
        </p>

        <div className="gallery-divider">
          <span></span>
        </div>
      </div>

      <div className="gallery-grid">
        {galleryImages.map((item, index) => (
          <div className={`gallery-card ${item.className}`} key={index}>
            <img src={item.image} alt={item.title} />
            <div className="gallery-tag">{item.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;