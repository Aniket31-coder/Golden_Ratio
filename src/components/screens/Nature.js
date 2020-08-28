import React from "react";
import sunflower from "../images/Sunflower.jpg";
import leaf from "../images/leaf.jpg";
import dolphin from "../images/dolphin1.gif";
import moth from "../images/moth1.gif";
import koala from "../images/koala-bear.gif";
import tiger from "../images/tiger1.gif";
import Iframe from "react-iframe";

const Nature = () => {
  return (
    <div>
      <div className="Nature-page">
        <div className="header">
          <img className="header-img" src={sunflower} alt="IMG" />
        </div>
        <div className="leaf-growth">
          <h3>Spiral Leaf Growth</h3>
          <img src={leaf} alt="leaf" />
          <p>
            Leaves, branches and petals can grow in spirals, too. <p></p>Why? So
            that new leaves don't block the sun from older leaves, or so that
            the maximum amount of rain or dew gets directed down to the roots.
          </p>
          <p>
            In fact, when a plant has spirals the rotation tends to be a
            fraction made with two successive (one after the other) Fibonacci
            Numbers, for example:
          </p>
          <ul>
            <li>A half rotation is 1/2 (1 and 2 are Fibonacci Numbers)</li>
            <li>3/5 is also common (both Fibonacci Numbers), and</li>
            <li>5/8 also (you guessed it!)</li>
          </ul>
          <h3>Numerical flowers</h3>
          <p style={{ paddingTop: "0px" }}>
            This generalizes how seeds are distributed on plants such as
            sunflowers. Starting from the center, each successive seed is a
            fixed distance from the previous seed and is rotated from the line
            connecting the previous two seeds by a constant angle. Using the
            controls, you can explore how different ratio,a/b,produce varying
            patterns with seeds.
          </p>
          <p>Try making it golden ratio !</p>
          <Iframe
            className="interactive-3"
            url="https://www.wolframcloud.com/obj/demonstrations/Published/NumericalFlowers?_view=EMBED"
          />
        </div>
        <div className="Animal-content">
          <h3 style={{ paddingTop: "30px" }}>Golden section in animals</h3>
          <img src={dolphin} alt="dolphin" />
          <p>
            The eye, fins and tail all fall at golden sections of the length of
            a dolphin’s body. The dimensions of the dorsal fin are golden
            sections (yellow and green). The thickness of the dolphin’s tail
            section corresponds to same golden section of the line from head to
            tail.
          </p>
          <img src={moth} alt={moth} />
          <p>
            The eye-like markings of this moth fall at golden sections of the
            lines that mark its width and length.{" "}
          </p>
          <img src={koala} alt="koala" />
          <p>
            The facial features of a koala bear show golden ratio proportions in
            the dimensions and positions of the eyes, nose and mouth in relation
            to the dimensions of the face.
          </p>
          <img src={tiger} style={{ width: "300px" }} alt="tiger1" />
          <p>
            All the key facial features of the tiger fall at golden sections of
            the lines defining the length and width of its face.
          </p>
          <p></p>
          <p></p>
        </div>
      </div>
      <div
        className="footer"
        style={{ textAlignLast: "center", paddingTop: "15px" }}
      >
        <p>©Copyrights Reserved 2020</p>
      </div>
    </div>
  );
};

export default Nature;
