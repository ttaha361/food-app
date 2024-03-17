import React, { useState } from 'react';

import Slider from "react-slick";

import "../styles/FeatureStyle.css"
import howto1 from "../materials/howto.jpeg"
import howto2 from "../materials/howto2.jpeg"
import howto3 from "../materials/howto3.png"
import howto4 from "../materials/howto4.jpg"

function HowTo() {
  const data = ["1", "2", "3"];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div id="HowToUse" className="MainFeaturesClass">
      <div className="TextImageContainer">
        <div className="FeatureClass">
          <div className="FeatureTextLeft">
            <h4>Teach People How To Use</h4>
            <h1>Show people the functionalities of your product</h1>
            <p>With eye catching examples, users will get to know what are you offering them</p>
          </div>
          <div className="FeatureImageRight">
            <img src={howto1} alt="" />
          </div>
        </div>
        <div className="FeatureClass">
          <div className="FeatureImageLeft">
            <img id="herbalimage" src={howto2} alt="" />
          </div>
          <div className="FeatureTextRight">
            <h4>Teach People How To Use</h4>
            <h1>Show people the functionalities of your product</h1>
            <p>With eye catching examples, users will get to know what are you offering them</p>
          </div>
        </div>
        <div className="howtofooter">
          <img src={howto3} alt="" />
          <img id="footerhowto" src={howto4} alt="" />
        </div>
      </div>
    </div>
  );
}

export default HowTo;
