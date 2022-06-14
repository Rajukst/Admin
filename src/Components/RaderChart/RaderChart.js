import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { Col, Container, Row } from "react-bootstrap";
import HorizontalCharts from "./HorizontalChart/HorizontalCharts";
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const RaderChart = () => {
  const data = {
    labels: ["English", "History", "Physics", "Geography", "Chinese", "Math"],
    datasets: [
      {
        label: "# of Votes",
        data: [15, 25, 19,],
        backgroundColor: "rgba(155, 199, 132, 0.2)",
        backgroundColor: "rgba(255, 199, 32, 0.2)",
        backgroundColor: "rgba(285, 109, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
 
 

    ],
  };
  return (
    <div>
      <Container fluid>
        <Row className="g-4">
          <Col xs={12} md={9} lg={9}>
            <HorizontalCharts></HorizontalCharts>
          </Col>
          <Col xs={12} md={3} lg={3}>
            <div className="pieDataCharts mt-4 p-3">
              <Radar data={data} />;
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RaderChart;
