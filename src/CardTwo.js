import React from "react";
import "./CardTwo.css";

function CardTwo() {
  return (
    <div className="card">
      <img src="24.1.jpg" alt="Placeholder" className="card-image" />
      <div className="card-content">
        <h3>Immerse Yourself in Cultural Riches</h3>
        <p>
          Dwelve on a cultural odyssey and delve into the diverse traditions and
          heritage of civilizations around the world. Our curated experiences
          offer you the chance to explore ancient wonders, taste exotic
          cuisines, and engage with local communities.Dive into the vibrant art
          scene of Paris, where inspiration knows no bounds. Wander through
          world-renowned museums like the Louvre and Musée d'Orsay, home to
          masterpieces by Picasso, Monet, and Van Gogh. Stroll along the Seine
          River and capture the essence of Parisian life with your camera. Let
          the City of Light ignite your passion and fuel your imagination.
        </p>
        <a href="/discover">Discover More</a>
      </div>
    </div>
  );
}

export default CardTwo;
