import React from "react";
import "./CardOne.css";

function CardOne() {
  return (
    <div className="card">
      <img
        src="pexels-shkrabaanthony-4348403.jpg"
        alt="Placeholder"
        className="card-image"
      />
      <div className="card-content">
        <h3>Experience Nature Like Never Before</h3>
        <p>
          Embark on an unforgettable journey into the heart of nature. Our
          expert guides will lead you through lush forests, winding trails, and
          breathtaking landscapes, allowing you to reconnect with the natural
          world.Immerse yourself in the breathtaking landscapes of the Swiss
          Alps. From snow-capped peaks to lush green valleys, every corner of
          Switzerland offers a new adventure. Experience the thrill of skiing
          down pristine slopes or hiking through picturesque trails. Indulge in
          delicious Swiss cuisine and unwind in charming mountain villages. Your
          next unforgettable journey awaits!
        </p>
        <a href="/discover">Discover More</a>
      </div>
    </div>
  );
}

export default CardOne;
