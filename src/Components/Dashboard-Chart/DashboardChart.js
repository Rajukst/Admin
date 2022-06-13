import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import "./DashboardDataChart.css"
import DashboardChartTwo from "./DashboardChartTwo/DashboardChartTwo";
ChartJS.register(ArcElement, Tooltip, Legend);
const DashboardChart = () => {
    const data = {
        datasets: [
          {
    
            data: [12, 25, 19, 5],
            backgroundColor: [
                '#FFF000',
              '#00BFFF',
              '#1E90FF',
              '#7B68EE',
            ],
            borderColor: [
              '#FFFFFF',
              '#FFFFFF',
              '#FFFFFF',
              '#FFFFFF',
              '#FFFFFF',
              '#FFFFFF',
            ],
            borderWidth: 5,
          },
        ],
        labels: ['America', 'Asia', 'Europe', 'Africa'],

      };
  return (
    <div>
      <Container fluid>
        <Row className="g-4">
          <Col xs={12} md={9} lg={9}>
        <DashboardChartTwo></DashboardChartTwo>
          </Col>
          <Col xs={12} md={3} lg={3}>
          <div className="pieDataChart mt-4 p-3">
            <h4 className="Current-Visits">Current Visits</h4>
          <Pie data={data} />;
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DashboardChart;
