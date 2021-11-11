import React from "react";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="left-container text-start">
                <h3>Trip.com Social</h3>
                <div className="icons-container d-flex text-center ">
                  <div className="icon">
                    <FontAwesomeIcon icon={faInstagramSquare} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faTwitterSquare} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faYoutube} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </div>
                </div>
                <span className="mt-4 ">
                <h5>Subscribe for Health Tips</h5>
                <input
                  className="footer-input"
                  type="text"
                  placeholder="Enter Email"
                />
                <button className=" btn text-white bg-success">Submit</button>
                 
                </span>

              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu-container">
                <ul>
                  <Link to="/home">
                  <li className="footer-menu ">Home</li>
                  </Link>
                  <Link to="/service">
                  <li className="footer-menu">Services</li>
                  </Link>
                  <Link to="/appoinment">
                  <li className="footer-menu">Appoinmets</li>
                  </Link>
                  <Link to="/contact">
                  <li className="footer-menu">Contact</li>
                  </Link>
                  <Link to="/about">
                  <li className="footer-menu"> About</li>
                  </Link>
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <div className="right-footer-container">
                <br />
                <h4>Mobile App</h4>
                <img width="300px" src="https://i.ibb.co/5MzKxXk/google-play-store-icon-png-5.png" alt="" />
                <p className="mt-5">
                  <small>shakawat Hridoy © . All rights reserved.</small>
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Footer;