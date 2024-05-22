import React from "react";
import { Card, Button } from "react-bootstrap";
import "./CardOne.css"; // For any custom styles

function CardOne() {
  return (
    <Card className="mb-4">
      <Card.Img variant="top" src="24.1.jpg" alt="Experience Nature" />
      <Card.Body>
        <Card.Title>Experience Nature Like Never Before</Card.Title>
        <Card.Text>
          Embark on an unforgettable journey into the heart of nature. Our
          expert guides will lead you through lush forests, winding trails, and
          breathtaking landscapes, allowing you to reconnect with the natural
          world. Immerse yourself in the breathtaking landscapes of the Swiss
          Alps. From snow-capped peaks to lush green valleys, every corner of
          Switzerland offers a new adventure. Experience the thrill of skiing
          down pristine slopes or hiking through picturesque trails. Indulge in
          delicious Swiss cuisine and unwind in charming mountain villages. Your
          next unforgettable journey awaits!
        </Card.Text>
        <Button variant="primary" href="/discover">
          Discover More
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardOne;
