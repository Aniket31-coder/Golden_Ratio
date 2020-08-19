import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";
import {RectangleCalculator,RatioCalculator} from "../Calculator";
import headerImage from "../images/flower.jpg"
import GoldenRatioExamples from "../images/golden-ratio-design-examples.jpg"
import MathExample from "../images/Golden_ratio_math.jpg"
import Carousels from "../Carousel";
import Iframe from 'react-iframe'




const Home = () => {
  return (
        <div>
        {/* <Carousels /> */}
        <div className="header" >
          <img className="header-img" src={headerImage} alt="IMG"/>
          <h2>Let's explore the golden world !</h2>
        </div>

        <div className="content-1">
        <h3>Revealing the Divine Ratio !</h3>
        <img className="content-image-1" src={GoldenRatioExamples} alt="GoldenRatioExamples" align="left" />
        <p style={{textAlign:"justify"}}>What do the Pyramids of Giza and Da Vinci’s Mona Lisa have in common with Sunflower and a human ear? Quick answer: They are all designed using the Golden Ratio.
            The Golden Ratio is a mathematical ratio. It is commonly found in nature, and when used in a design, it fosters organic and natural-looking compositions that are aesthetically pleasing to the eye.
        </p>
        </div>
        
        <div className="content-2">
        <h3>Understanding the Maths behind it !</h3>
        <p style={{textAlign:"center"}}>
        The Golden Ratio  exists when a line is divided into two parts and the longer part (a) divided by the smaller part (b) is equal to the sum of (a) + (b) divided by (a), which both equals 1.618 !
        A rectangle whose sides are in the golden ratio, that is (a + b)/a = a/b, where a is the width and a + b is the length of the rectangle is golden rectangle.
        </p>
        <img className="content-image-2" src={MathExample} alt="GoldenRatioMath"/>
        <RatioCalculator />
        <RectangleCalculator />
        </div>
        <div className="Formula"> 
        <h3>Let's dive deeper !</h3>
        <Iframe url="https://www.wolframcloud.com/obj/demonstrations/Published/GeometricAndContinuedFractionExpansionOfTheGoldenRatio?_view=EMBED"
        id="myId"
        className="interactive-1"
        display="initial"
        />
       <Iframe url="https://www.wolframcloud.com/obj/demonstrations/Published/GoldenSpiral?_view=EMBED"
        id="myId"
        className="interactive-2"
        display="initial"
        />
        </div>

        </div>
  );
};

export default Home;

