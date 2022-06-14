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
    <Col xs={12} md={2} lg={2} >
        <div className="left-content">
        <h1>This is Lefft</h1>
        </div>
    </Col>
    <Col xs={12} md={10} lg={10}>
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
