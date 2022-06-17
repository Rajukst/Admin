import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./TrafficTask.css";
const TrafficTask = () => {
  return (
    <div>
      <Container fluid>
        <Row className="g-4">
          <Col xs={12} md={4} lg={4}>
            <h4>Traffice by Site</h4>
            <div className="traffic-site">
              <div className="traffic-column">
                <div className="part">
                  <div className="displayicon pt-4">
                    <i className="fa-brands fa-facebook-f fa-3x appFacebook"></i>
                  </div>
                  <div className="displaytextd pb-4">
                    <h2>323.23k</h2>
                    <p>FaceBook</p>
                  </div>
                </div>
              </div>
              <div className="traffic-column">
                <div className="part">
                  <div className="displayicon pt-4">
                    <i className="fa-brands fa-google fa-3x appGoogle"></i>
                  </div>
                  <div className="displaytextd pb-4">
                    <h2>323.23k</h2>
                    <p>FaceBook</p>
                  </div>
                </div>
              </div>
              <div className="traffic-column">
                <div className="part">
                  <div className="displayicon pt-4">
                    <i className="fa-brands fa-linkedin-in fa-3x appLinkedIn"></i>
                  </div>
                  <div className="displaytextd pb-4">
                    <h2>323.23k</h2>
                    <p>FaceBook</p>
                  </div>
                </div>
              </div>
              <div className="traffic-column">
                <div className="part">
                  <div className="displayicon pt-4">
                    <i className="fa-brands fa-twitter fa-3x appTwitter"></i>
                  </div>
                  <div className="displaytextd pb-4">
                    <h2>323.23k</h2>
                    <p>FaceBook</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={8} lg={8}>
            <div className="task-part">
              <h4>This is Task Site</h4>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TrafficTask;
