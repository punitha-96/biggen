import React from "react";
import "./App.css"; // Import CSS for global styles
import VideoPlayer from "./VideoPlayer";
import Header from "./Header";
import CardOne from "./CardOne";
import CardTwo from "./CardTwo";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="App">
      <VideoPlayer />
      <Header />
      <Slider {...sliderSettings}>
        <div>
          <div className="card-section">
            <CardOne />
          </div>
        </div>
        <div>
          <div className="card-section">
            <CardTwo />
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default App;
