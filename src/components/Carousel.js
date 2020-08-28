import React from "react";
// import cnTower from "./images/cn-tower.gif";
import architecture from "./images/architecture.jpg";
import Tajmahal from "./images/taj-mahal.png";
import notreDame from "./images/notre-dame.jpg";
const Carousel = require("react-responsive-carousel").Carousel;

const Carousels = () => {
  return (
    <div className="carousel1">
      <Carousel interval={3000} autoPlay={true} showThumbs={false}>
        <div>
          <img className="image" src={notreDame} alt="notreDame"></img>
        </div>

        <div>
          <img className="image" src={Tajmahal} alt="Tajmahal"></img>
        </div>

        <div>
          <img className="image" src={architecture} alt="architecture"></img>
        </div>
      </Carousel>
    </div>
  );
};

export default Carousels;
