// VideoPlayer.js
import React from "react";
import "./VideoPlayer.css"; // Import CSS for styling

function VideoPlayer() {
  return (
    <div className="video-container">
      {/* Video Player Code */}
      <video
        controls
        src="5657834-uhd_4096_2160_25fps.mp4"
        autoPlay
        loop
        muted
      ></video>
    </div>
  );
}

export default VideoPlayer;
