import React, { Component } from 'react';
import "./About.css";
import "../assets/MMA.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src="MMA.jpg"
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Gbenuola Ikenna Nehemiah Olaiya</div>
            <div className="brief_description">
              Hi, I'm Gbenuola! A CS Major @ Carnegie Mellon and an avid fan of soccer.
              Excited for IBM Accelerate
            </div>
          </div>
        </div>
      </div>
    )
  }
}