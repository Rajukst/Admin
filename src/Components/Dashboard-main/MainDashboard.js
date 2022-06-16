import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import DashboardApp from "../App/DashboardApp";
import DashboardChart from "../Dashboard-Chart/DashboardChart";
import NewsUpdate from "../NewsUpdate/NewsUpdate";
import RaderChart from "../RaderChart/RaderChart";
import TrafficTask from "../Trafic-Task/TrafficTask";
import "./MainDashboard.css"
const MainDashboard = () => {
  return (
    <div>
        <Container fluid>
  <Row>
      <Col>
    <div className="right-content">
   <DashboardApp></DashboardApp>
   <DashboardChart></DashboardChart>
   <RaderChart></RaderChart>
   <NewsUpdate></NewsUpdate>
   <TrafficTask></TrafficTask>
    </div>
    </Col>
  </Row>
</Container>
    </div>
  );
};

export default MainDashboard;
