import React from "react";
import "./VideoPlayer.css"; // Import CSS for styling

function VideoPlayer() {
  return (
    <div className="video-container">
      {/* Video Player Code */}
      <video autoPlay loop muted playsInline className="background-video">
        <source src="5657834-uhd_4096_2160_25fps.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoPlayer;
