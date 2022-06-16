import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import photo from "../../Images/product_2.jpg";
import "./NewsUpdate.css";
const NewsUpdate = () => {
  return (
    <Container fluid>
      <Row>
        <Col className="newsPortal" xs={12} md={6} lg={8}>
          <div className="newsUpdate">
            <h3>News Update</h3>
            <div className="update-time">
              <div className="name-work">
                <div className="portal">
                  <div className="avater-option">
                    <img
                      className="img-fluid avater-image"
                      src={photo}
                      alt=""
                      width="50"
                      height="50"
                    />
                  </div>
                  <div className="text-option">
                    <h6 className="name-field">
                      International Accountability Analyst
                    </h6>
                    <h6 className="second-nameField">
                      Regional Integration Assistant
                    </h6>
                  </div>
                </div>
              </div>
              <div className="time-count">
                <p className="time">about 10 hours ago</p>
              </div>
            </div>
            <div className="update-time">
              <div className="name-work">
                <div className="portal">
                  <div className="avater-option">
                    <img
                      className="img-fluid avater-image"
                      src={photo}
                      alt=""
                      width="50"
                      height="50"
                    />
                  </div>
                  <div className="text-option">
                    <h6 className="name-field">
                      International Accountability Analyst
                    </h6>
                    <h6 className="second-nameField">
                      Regional Integration Assistant
                    </h6>
                  </div>
                </div>
              </div>
              <div className="time-count">
                <p className="time">about 10 hours ago</p>
              </div>
            </div>
            <div className="update-time">
              <div className="name-work">
                <div className="portal">
                  <div className="avater-option">
                    <img
                      className="img-fluid avater-image"
                      src={photo}
                      alt=""
                      width="50"
                      height="50"
                    />
                  </div>
                  <div className="text-option">
                    <h6 className="name-field">
                      International Accountability Analyst
                    </h6>
                    <h6 className="second-nameField">
                      Regional Integration Assistant
                    </h6>
                  </div>
                </div>
              </div>
              <div className="time-count">
                <p className="time">about 10 hours ago</p>
              </div>
            </div>
            <div className="view-all">
              <Link to="/newss">
                <button className="view-button">
                  View All <i className="fa-solid fa-arrow-right-long"></i>
                </button>
              </Link>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="order-timeline">
            <div className="order-text">
              <h3>Order Timeline</h3>
            </div>
           
            <div className="vtl">
              <div className="event">
                <p className="date">11 Mar 2237 12:34</p>
                <p className="txt">Evil Cates invaded planet Doge.</p>
              </div>
              <div className="event">
                <p className="date">12 Mar 2237 14:23</p>
                <p className="txt">Cates ate Doge food.</p>
              </div>
              <div className="event">
                <p className="date">13 Mar 2237 20:12</p>
                <p className="txt">Cates took over the Doge beds.</p>
              </div>
              <div className="event">
                <p className="date">14 Mar 2237 08:11</p>
                <p className="txt">Hoomans to the rescue.</p>
              </div>
           
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default NewsUpdate;
