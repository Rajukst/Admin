import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import "./DashboardApp.css"
const DashboardApp = () => {
    return (
        <div>
        <Container fluid>
            <Row className="g-4">
              <h3 className="mb-3 mt-5 wellcome-heading">Hi, wellcome back</h3>
              <Col xs={12} md={3} lg={3}>
                <div className="firstColumn">
                  <div className="divPart">
                  <div className="displayicon pt-4">
                  <i className="fa-brands fa-android fa-2x appAndroid"></i>
                  </div>
                  <div className="displaytext pb-4">
                  <h2>714k</h2>
                  <p>Weekly Sales</p>
                  </div>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={3} lg={3}>
              <div className="secondColumn">
                  <div className="divPart">
                  <div className="displayicon pt-4">
                  <i className="fa-brands fa-apple fa-2x appMac"></i>
                  </div>
                  <div className="displaytext pb-4">
                  <h2>1.35m</h2>
                  <p>New Users</p>
                  </div>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={3} lg={3}>
              <div className="thirdColumn">
                  <div className="divPart">
                  <div className="displayicon pt-4">
                  <i className="fa-brands fa-windows fa-2x appWindows"></i>
                  </div>
                  <div className="displaytext pb-4">
                  <h2>1.72m</h2>
                  <p>Item Orders</p>
                  </div>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={3} lg={3}>
              <div className="firstColumn">
                  <div className="divPart">
                  <div className="displayicon pt-4">
                  <i className="fa-solid fa-bug fa-2x appBug"></i>
                  </div>
                  <div className="displaytext pb-4">
                  <h2>234</h2>
                  <p>Bug Reports</p>
                  </div>
                  </div>
                </div>
              </Col>
            </Row>
        </Container>
      </div>
    );
};

export default DashboardApp;