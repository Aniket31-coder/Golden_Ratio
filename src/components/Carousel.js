import React from"react";
import flower from "./images/flower.jpg";
import Sunflower from "./images/Sunflower.jpg";
import shell from "./images/shell.jpg";
const  Carousel = require("react-responsive-carousel").Carousel;

const Carousels = ()=>{
    return (
        <div>
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
        </div>
    );
}

export default Carousels;
