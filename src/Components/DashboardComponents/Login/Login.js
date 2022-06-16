import React, { useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import "./Login.css";
import loginPhoto from "../../../Images/login.png";
import { Link } from "react-router-dom";
const Login = () => {
  const [loginUser, setLoginUser] = useState({});
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    alert("logged in");
    e.target.reset();
  };
  const loginOnChange = (e) => {
    const nameField = e.target.name;
    const fieldValue = e.target.value;
    const newData = { ...loginUser };
    newData[nameField] = fieldValue;
    console.log(newData);
  };
  return (
    <div className="login-page">
      <Container fluid>
        <Row className="g-4">
          <Col xs={12} md={3} lg={3}>
            <h2 className="wellcome mt-5">Hi, Wellcome Back</h2>
            <img className="image-align img-fluid" src={loginPhoto} alt="login image" />
          </Col>
          <Col xs={12} md={9} lg={9}>
            <div className="my-section">
              <div className="login-continer m-2">
                <h2 className="mt-5">Sign in to BitbyteSoft</h2>
                <h6 className="mb-5">Enter your details below</h6>
                <div className="third-party-sign">
                  <div className="google">
                    <button className="googleButton">
                      <i className="fa-brands fa-google fa-2x"></i>
                    </button>
                  </div>
                  <div className="google">
                    <button className="facebookButton">
                      <i class="fa-brands fa-facebook-f fa-2x "></i>
                    </button>
                  </div>
                  <div className="google">
                    <button className="twitterButton">
                      <i class="fa-brands fa-twitter fa-2x "></i>
                    </button>
                  </div>
                </div>
                <div className="user-container mt-5">
                  <form onSubmit={handleLoginSubmit}>
                    <input
                      type="email"
                      id="fname"
                      name="email"
                      placeholder="User Email"
                      onBlur={loginOnChange}
                      required
                    />
                    <br />
                    <input
                      type="password"
                      id="fname"
                      name="Password"
                      placeholder="Password"
                      onBlur={loginOnChange}
                      required
                    />
                    <br />
                    <div className="all-buttons">
                      <Button type="submit" className="mt-3">
                        Log In
                      </Button>
                    </div>
                  </form>
                  <div className="mt-5">
                    Don't have an account? <span className="register-link"><Link to="/register">Get started</Link></span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
