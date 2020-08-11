import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";
import flower from "../images/flower.jpg";
import Sunflower from "../images/Sunflower.jpg";
import shell from "../images/shell.jpg";
var Carousel = require("react-responsive-carousel").Carousel;

const Home = () => {
  return (
    <Carousel showArrows onChange onClickItem onClickThumb showThumbs={false}>
      <div>
        <img className="image" src={shell} alt="shellimg"></img>
      </div>

      <div>
        <img className="image" src={flower} alt="flowerimg"></img>
      </div>

      <div>
        <img className="image" src={Sunflower} alt="Sunflowerimg"></img>
      </div>
    </Carousel>
  );
};

export default Home;
