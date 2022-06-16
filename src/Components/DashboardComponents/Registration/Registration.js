import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Registration.css";
const Registration = () => {
  const [registerUser, setRegisterUser] = useState({});
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    if (registerUser.Password === registerUser.Password2) {
      alert("password Don't Match!!");
    }
  };
  const registerOnChange = (e) => {
    const nameField = e.target.name;
    const fieldValue = e.target.value;
    const newData = { ...registerUser };
    newData[nameField] = fieldValue;
    setRegisterUser(newData);
  };
  return (
    <div className="section">
      <div className="my-continer m-2">
        <h2 className="mt-5 get-started">Get started absolutely free.</h2>
        <h6 className="mb-5  get-started">
          Free forever. No credit card needed.
        </h6>
        <div className="third-party-sign">
          <div className="google">
            <button className="googleButton">
              <i className="fa-brands fa-google fa-2x"></i>
            </button>
          </div>
          <div className="google">
            <button className="facebookButton">
              <i class="fa-brands fa-facebook-f fa-2x"></i>
            </button>
          </div>
          <div className="google">
            <button className="twitterButton">
              <i class="fa-brands fa-twitter fa-2x "></i>
            </button>
          </div>
        </div>
        <div className="user-container mt-5">
          <form onSubmit={handleOnSubmit}>
            <input
              type="text"
              id="fname"
              name="UserName"
              placeholder="UserName"
              onChange={registerOnChange}
              required
            />
            <br />
            <input
              type="email"
              id="fname"
              name="email"
              placeholder="User Email"
              onChange={registerOnChange}
              required
            />
            <br />
            <input
              type="password"
              id="fname"
              name="Password"
              placeholder="Password"
              onChange={registerOnChange}
              required
            />
            <br />
            <input
              type="password"
              id="fname"
              name="Password2"
              placeholder="Retype Password"
              onChange={registerOnChange}
              required
            />
            <br />
            <div className="all-buttons">
              <Button type="submit" className="mt-3">
                Sign Up
              </Button>
              <Button className="mt-3">Sign Up With Google</Button>
            </div>
            <div className="mt-5">
              Already Registered? <Link to="/login">Login Here</Link>
            </div>
            <div className="conditions ">
              <p>
                By registering, I agree to Minimal Terms of ServiceandPrivacy
                Policy.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
