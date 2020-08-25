import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";
import { RectangleCalculator, RatioCalculator } from "../Calculator";
import headerImage from "../images/flower.jpg";
import GoldenRatioExamples from "../images/golden-ratio-design-examples.jpg";
import MathExample from "../images/Golden_ratio_math.jpg";
import GoldenSpiral from "../images/Golden_spiral.gif";
import Carousels from "../Carousel";
import Iframe from "react-iframe";

const Home = () => {
  return (
    <div>
      {/* <Carousels /> */}
      <div className="header">
        <img className="header-img" src={headerImage} alt="IMG" />
        <h2>Let's explore the golden world !</h2>
      </div>

      <div className="content-1">
        <h3>Revealing the Divine Ratio !</h3>
        <img
          className="content-image-1"
          src={GoldenRatioExamples}
          alt="GoldenRatioExamples"
          align="left"
        />
        <p style={{ textAlign: "justify" }}>
          What do the Pyramids of Giza and Da Vinci’s Mona Lisa have in common
          with Sunflower and a human ear? Quick answer: They are all designed
          using the Golden Ratio. The Golden Ratio is a mathematical ratio. It
          is commonly found in nature, and when used in a design, it fosters
          organic and natural-looking compositions that are aesthetically
          pleasing to the eye.
        </p>
      </div>

      <div className="content-2">
        <h3>Understanding the Maths behind it !</h3>
        <p style={{ textAlign: "center" }}>
          The Golden Ratio exists when a line is divided into two parts and the
          longer part (a) divided by the smaller part (b) is equal to the sum of
          (a) + (b) divided by (a), which both equals 1.618 ! A rectangle whose
          sides are in the golden ratio, that is (a + b)/a = a/b, where a is the
          width and a + b is the length of the rectangle is golden rectangle.
        </p>
        <img
          className="content-image-2"
          src={MathExample}
          alt="GoldenRatioMath"
        />
        <RatioCalculator />
        <RectangleCalculator />
      </div>
      <div className="Formula">
        <h3 style={{ paddingLeft: "0px" }}>Let's dive deeper !</h3>
        <p style={{ textAlign: "center" }}>
          The Golden Ratio <i>&#966;</i> satisfies the quadratic equation{" "}
          <i>x</i>
          <sup>2</sup> - <i>x</i> - 1 = 0. A number of interesting identities
          follow from this. For example, 1/<i>&#966;</i> = <i>&#966;</i> - 1 =
          0.6180339... and <i>&#966;</i>
          <sup>2</sup> = <i>&#966;</i> + 1 = 2.6180339.... Hence <i>&#966;</i>
          <sup>3</sup> = <i>&#966;</i> + <i>&#966;</i>
          <sup>2</sup> = 1 + 2<i>&#966;</i> and so <i>&#966;</i>
          <sup>4</sup>= 2<i>&#966;</i> + 2<i>&#966;</i>
          <sup>2</sup> = 2 + 3<i>&#966;</i> and in general <i>&#966;</i>
          <sup>
            <i>n</i>
          </sup>{" "}
          = <i>a</i>
          <sub>
            <i>n</i>
          </sub>{" "}
          + <i>a</i>
          <sub>
            <i>n</i>+1
          </sub>
          <i>&#966;</i> where you might recognise the terms of the sequence (
          <i>a</i>
          <sub>
            <i>n</i>
          </sub>
          )
        </p>
        <p style={{ fontSize: "20.6px", textAlign: "center" }}>
          In geometry, a golden spiral is a logarithmic spiral whose growth
          factor is φ, the golden ratio.[1] That is, a golden spiral gets wider
          (or further from its origin) by a factor of φ for every quarter turn
          it makes.
        </p>
        <img
          className="content-image-3"
          src={GoldenSpiral}
          alt="GoldenSpiral"
        />
        <h3>Try Yourself</h3>
      </div>
      <p className="content-interactive-1">
        {" "}
        <div className="facts">
          <b>
            <h1>Fun Fact:</h1>
          </b>
          The convergents of the inverse of the Golden Ratio are the quotients
          of successive numbers in the Fibonacci sequence.
        </div>{" "}
        {"\n"} The Calculator illustrates how the Golden Rectangle is formed and
        also the growth of the continued fraction expansion of {"\n"}Φ =
        <div class="fraction">
          <span class="top">(1+√5)</span>
          <span class="bottom">2</span>
        </div>{" "}
        {"\n"}, the golden ratio. Also shown are the convergents of its
        continued fraction and a series of squares in the golden rectangle.
      </p>
      <Iframe
        url="https://www.wolframcloud.com/obj/demonstrations/Published/GeometricAndContinuedFractionExpansionOfTheGoldenRatio?_view=EMBED"
        id="myId"
        className="interactive-1"
        display="initial"
      />
      <Iframe
        url="https://www.wolframcloud.com/obj/demonstrations/Published/GoldenSpiral?_view=EMBED"
        id="myId"
        className="interactive-2"
        display="initial"
      />
      <p className="content-interactive-2">
        <div className="facts">
          <b>
            <h1>Fun Fact:</h1>
          </b>
          Good approximations to the Golden Rectangle can be obtained using the
          Fibonacci Ratios.a golden spiral gets wider (or further from its
          origin) by a factor of φ for every quarter turn it makes.
        </div>
        The Calculator illustrates the approximation of Golden Spiral with the
        help of Golden Rectangle.
      </p>
    </div>
  );
};

export default Home;
