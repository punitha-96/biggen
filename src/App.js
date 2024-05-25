import React from "react";
import "./App.css"; // Import CSS for global styles
import VideoPlayer from "./VideoPlayer";
import Header from "./Header";
import CardOne from "./CardOne";
import CardTwo from "./CardTwo";
import { Container, Row, Col } from "react-bootstrap";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  // Slider settings

  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
        <Row className="my-3">
          <Col>
            <VideoPlayer />
          </Col>
        </Row>
        <Row className="my-3 justify-content-center">
          <Col md={6} className="text-center mb-3 mb-md-0">
            <div className="card-wrapper">
              <CardOne />
            </div>
          </Col>
          <Col md={6} className="text-center">
            <div className="card-wrapper">
              <CardTwo />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
